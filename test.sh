echo 1
sqlite-utils test.db "CREATE TABLE MD5 (md5 CHAR)"
echo 2
sqlite-utils test.db "CREATE TABLE leaders (id INTEGER PRIMARY KEY,name CHAR)"
curl -X 'GET' \
  'http://localhost:8000/addLeader/matti' \
  -H 'accept: application/json'

curl -X 'GET' \
  'http://localhost:8000/addLeader/teppo' \
  -H 'accept: application/json'

sqlite-utils test.db "CREATE TABLE people (id INTEGER PRIMARY KEY, name CHAR, VotePasswordSha256 CHAR NOT NULL)"
echo 3
curl -X 'GET' \
  'http://localhost:8000/addPerson/Akseli/Moi123' \
  -H 'accept: application/json'

curl -X 'GET' \
  'http://localhost:8000/addPerson/Nuutti/Whree' \
  -H 'accept: application/json'

curl -X 'GET' \
  'http://localhost:8000/addPerson/Anse/TMP' \
  -H 'accept: application/json'

sqlite-utils test.db "CREATE TABLE votes (id INTEGER PRIMARY KEY, leaderID INTEGER, VotePasswordMD5 CHAR NOT NULL)"
echo 4
curl -X 'GET' \
  'http://localhost:8000/vote/matti/Moi123' \
  -H 'accept: application/json'

curl -X 'GET' \
  'http://localhost:8000/vote/matti/TMP' \
  -H 'accept: application/json'

curl -X 'GET' \
  'http://localhost:8000/vote/teppo/Whree' \
  -H 'accept: application/json'

