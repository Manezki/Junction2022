from fastapi import FastAPI
import hashlib
import sqlite3

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/votes/{person}")
def votes(person: str):
    db = sqlite3.connect("test.db")
    votes = db.execute("SELECT COUNT(*) FROM votes WHERE (SELECT id FROM leaders WHERE name = LOWER(?)) = leaderID",(person,)).fetchall()[0][0]
    return {person: votes}

@app.get("/votes")
def votes():
    db = sqlite3.connect("test.db")
    votes = db.execute("SELECT (SELECT name FROM leaders WHERE id=leaderID), COUNT(*) FROM votes GROUP BY leaderID").fetchall()
    return dict(votes)

@app.get("/leaders")
def leaders():
    db = sqlite3.connect("test.db")
    leaders = db.execute("SELECT id,name FROM leaders").fetchall()
    return {str(i[0]):str(i[1]) for i in leaders}

@app.get("/people")
def people():
    db = sqlite3.connect("test.db")
    people = db.execute("SELECT name FROM people").fetchall()
    print(people)
    return [i[0] for i in people]

@app.get("/addPerson/{name}/{password}")
def people(name: str, password: str):
    hashed = hashlib.sha256(password.encode('utf-8')).hexdigest()

    db = sqlite3.connect("test.db")
    db.execute("INSERT INTO people ('name', 'VotePasswordSha256') VALUES (?,?)",(name,hashed,)).fetchall()
    db.commit()

    hashed = hashlib.md5(password.encode('utf-8')).hexdigest()
    db.execute("INSERT INTO MD5 (md5) VALUES (?)",(hashed,)).fetchall()
    db.commit()
    return {"SUCCESS": "TRUE"}

@app.get("/addLeader/{name}")
def people(name: str):

    db = sqlite3.connect("test.db")
    db.execute("INSERT INTO leaders ('name') VALUES (LOWER(?))",(name,)).fetchall()
    db.commit()
    return {"SUCCESS": "TRUE"}

@app.get("/vote/{leader}/{password}")
def vote(leader: str, password: str):
    db = sqlite3.connect("test.db")
    hashed = hashlib.md5(password.encode('utf-8')).hexdigest()
    if 0 == db.execute("SELECT COUNT(*) FROM MD5 WHERE md5 = ?", (hashed,)).fetchall()[0][0]:
        return "YOU DON'T HAVI RIGHTS TO VOTE"
    print(db.execute("SELECT COUNT(*) FROM MD5 WHERE md5 = ?", (hashed,)).fetchall())

    # Delete if already voted
    db.execute("DELETE FROM votes WHERE VotePasswordMD5 = ?", (hashed,)).fetchall()
    leaderID = db.execute("SELECT id FROM leaders WHERE name = LOWER(?)",(leader,)).fetchall()
    if leaderID == []:
        return "Not found leader named: '" + leader+"'"
    tmp = db.execute("INSERT INTO votes ('leaderID', 'VotePasswordMD5') VALUES (?,?) RETURNING id",(leaderID[0][0],hashed,)).fetchall()
    db.commit()
    return "Voted successfully"
