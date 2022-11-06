contract Contract {
    function main() {
        memory[0x40:0x60] = 0x80;
        var var0 = msg.value;
    
        if (var0) { revert(memory[0x00:0x00]); }
    
        var temp0 = memory[0x40:0x60];
        var0 = temp0;
        var temp1 = code.length - 0x0026e8;
        var var1 = temp1;
        memory[var0:var0 + var1] = code[0x0026e8:0x0026e8 + var1];
        memory[0x40:0x60] = var1 + var0;
    
        if (var1 < 0x40) { revert(memory[0x00:0x00]); }
    
        var temp2 = var0;
        var0 = memory[temp2:temp2 + 0x20];
        var1 = memory[temp2 + 0x20:temp2 + 0x20 + 0x20];
        storage[0x00] = msg.sender | (storage[0x00] & ~((0x01 << 0xa0) - 0x01));
        var var2 = var0;
        var var3 = 0x000067;
        var var4 = var2;
        func_0084(var4);
        var2 = 0x00007c;
        var3 = var1;
        func_00F3(var3);
        memory[0x00:0x2563] = code[0x0185:0x26e8];
        return memory[0x00:0x2563];
    }
    
    function func_0084(var arg0) {
        var temp0 = storage[0x02];
        var temp1 = memory[0x40:0x60];
        memory[0x40:0x60] = temp1 + 0x40;
        var temp2 = (temp0 & 0xffff) + 0x01 & 0xffff;
        memory[temp1:temp1 + 0x20] = temp2;
        var temp3 = arg0 & (0x01 << 0xa0) - 0x01;
        memory[temp1 + 0x20:temp1 + 0x20 + 0x20] = temp3;
        storage[0x02] = temp3 * 0x010000 | ((temp2 | (temp0 & ~0xffff)) & ~((0x01 << 0xb0) - 0x010000));
        memory[0x00:0x20] = temp2;
        memory[0x20:0x40] = 0x04;
        var temp4 = keccak256(memory[0x00:0x40]);
        storage[temp4] = temp3 | (storage[temp4] & ~((0x01 << 0xa0) - 0x01));
    }
    
    function func_00F3(var arg0) {
        if (msg.sender == storage[0x00] & (0x01 << 0xa0) - 0x01) {
            storage[0x05] = (arg0 & (0x01 << 0xa0) - 0x01) | (storage[0x05] & ~((0x01 << 0xa0) - 0x01));
            return;
        } else {
            var temp0 = memory[0x40:0x60];
            memory[temp0:temp0 + 0x20] = 0x461bcd << 0xe5;
            memory[temp0 + 0x04:temp0 + 0x04 + 0x20] = 0x20;
            memory[temp0 + 0x24:temp0 + 0x24 + 0x20] = 0x16;
            memory[temp0 + 0x44:temp0 + 0x44 + 0x20] = 0x4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000;
            var temp1 = memory[0x40:0x60];
            revert(memory[temp1:temp1 + temp0 - temp1 + 0x64]);
        }
    }
}

