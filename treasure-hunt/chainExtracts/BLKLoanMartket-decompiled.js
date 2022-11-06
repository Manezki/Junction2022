contract Contract {
    function main() {
        memory[0x40:0x60] = 0x80;
        var var0 = msg.value;
    
        if (var0) { revert(memory[0x00:0x00]); }
    
        if (msg.data.length < 0x04) { revert(memory[0x00:0x00]); }
    
        var0 = msg.data[0x00:0x20] >> 0xe0;
    
        if (0x73b4086b > var0) {
            if (0x365a5306 > var0) {
                if (var0 == 0x13474e67) {
                    // Dispatch table entry for 0x13474e67 (unknown)
                    var var1 = 0x0100;
                    var var2 = 0x00000000000000000000000073a41fdf851a5bcf31db9410c32d2cf63f98c89d;
                
                label_0100:
                    var temp0 = memory[0x40:0x60];
                    memory[temp0:temp0 + 0x20] = var2 & 0xffffffffffffffffffffffffffffffffffffffff;
                    var temp1 = memory[0x40:0x60];
                    return memory[temp1:temp1 + (temp0 + 0x20) - temp1];
                } else if (var0 == 0x13af4035) {
                    // Dispatch table entry for setOwner(address)
                    var1 = 0x013d;
                    var2 = 0x0138;
                    var var3 = msg.data.length;
                    var var4 = 0x04;
                    var2 = func_0D4A(var3, var4);
                    func_0138(var2);
                    stop();
                } else if (var0 == 0x26c01303) {
                    // Dispatch table entry for liquidate(address,address,uint256)
                    var1 = 0x013d;
                    var2 = 0x014d;
                    var3 = msg.data.length;
                    var4 = 0x04;
                    var2, var3, var4 = func_0D65(var3, var4);
                    func_014D(var2, var3, var4);
                    stop();
                } else { revert(memory[0x00:0x00]); }
            } else if (var0 == 0x365a5306) {
                // Dispatch table entry for loan(uint256)
                var1 = 0x013d;
                var2 = 0x0160;
                var3 = msg.data.length;
                var4 = 0x04;
                var2 = func_0DA1(var3, var4);
                func_0160(var2);
                stop();
            } else if (var0 == 0x5209016f) {
                // Dispatch table entry for 0x5209016f (unknown)
                var1 = 0x0100;
                var2 = 0x0000000000000000000000000353befc11c14383d5c043a8e38927a7137e46e8;
                goto label_0100;
            } else if (var0 == 0x6580e5cd) {
                // Dispatch table entry for 0x6580e5cd (unknown)
                var1 = 0x0194;
                var2 = 0x96;
            
            label_0194:
                var temp2 = memory[0x40:0x60];
                memory[temp2:temp2 + 0x20] = var2;
                var2 = temp2 + 0x20;
            
            label_0121:
                var temp3 = memory[0x40:0x60];
                return memory[temp3:temp3 + var2 - temp3];
            } else { revert(memory[0x00:0x00]); }
        } else if (0x90a8ae9b > var0) {
            if (var0 == 0x73b4086b) {
                // Dispatch table entry for loans(address)
                var1 = 0x01c9;
                var2 = 0x01b0;
                var3 = msg.data.length;
                var4 = 0x04;
                var2 = func_0D4A(var3, var4);
                var2, var3 = func_01B0(var2);
            
            label_01C9:
                var temp4 = memory[0x40:0x60];
                memory[temp4:temp4 + 0x20] = var2;
                memory[temp4 + 0x20:temp4 + 0x20 + 0x20] = var3;
                var2 = temp4 + 0x40;
                goto label_0121;
            } else if (var0 == 0x7dc0d1d0) {
                // Dispatch table entry for oracle()
                var1 = 0x0100;
                var2 = 0x0000000000000000000000007d7356bf6ee5cdec22b216581e48ecc700d0497a;
                goto label_0100;
            } else if (var0 == 0x8da5cb5b) {
                // Dispatch table entry for owner()
                var1 = 0x0100;
                var2 = storage[0x00] & 0xffffffffffffffffffffffffffffffffffffffff;
                goto label_0100;
            } else { revert(memory[0x00:0x00]); }
        } else if (var0 == 0x90a8ae9b) {
            // Dispatch table entry for 0x90a8ae9b (unknown)
            var1 = 0x0194;
            var2 = 0x14;
            goto label_0194;
        } else if (var0 == 0xd4c19bda) {
            // Dispatch table entry for updatePrice(int256)
            var1 = 0x013d;
            var2 = 0x023b;
            var3 = msg.data.length;
            var4 = 0x04;
            var2 = func_0DA1(var3, var4);
            func_023B(var2);
            stop();
        } else if (var0 == 0xed255414) {
            // Dispatch table entry for 0xed255414 (unknown)
            var1 = 0x01c9;
            var2 = 0x024e;
            var3 = msg.data.length;
            var4 = 0x04;
            var2 = func_0DA1(var3, var4);
            var2, var3 = func_024E(var2);
            goto label_01C9;
        } else { revert(memory[0x00:0x00]); }
    }
    
    function func_0138(var arg0) {
        if (msg.sender == storage[0x00] & 0xffffffffffffffffffffffffffffffffffffffff) {
            var temp0 = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
            storage[0x00] = temp0 | (storage[0x00] & 0xffffffffffffffffffffffff0000000000000000000000000000000000000000);
            log(memory[memory[0x40:0x60]:memory[0x40:0x60] + 0x00], [0x8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76, msg.sender, stack[-1] & 0xffffffffffffffffffffffffffffffffffffffff]);
            return;
        } else {
            var temp1 = memory[0x40:0x60];
            memory[temp1:temp1 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            memory[temp1 + 0x04:temp1 + 0x04 + 0x20] = 0x20;
            memory[temp1 + 0x24:temp1 + 0x24 + 0x20] = 0x0c;
            memory[temp1 + 0x44:temp1 + 0x44 + 0x20] = 0x554e415554484f52495a45440000000000000000000000000000000000000000;
            var var0 = temp1 + 0x64;
            var temp2 = memory[0x40:0x60];
            revert(memory[temp2:temp2 + var0 - temp2]);
        }
    }
    
    function func_014D(var arg0, var arg1, var arg2) {
        var var0 = 0x00;
        var var1 = 0x0353;
        var1 = func_049B();
        var temp0 = var1;
        var0 = temp0;
        var1 = 0x0361;
        var var2 = arg0;
        var var3 = arg1;
        var var4 = arg2;
        var var5 = var0;
        func_05BC(var2, var3, var4, var5);
    }
    
    function func_0160(var arg0) {
        var var0 = 0x0371;
        var var1 = msg.sender;
        var var2 = arg0;
        func_09A6(var1, var2);
    }
    
    function func_01B0(var arg0) returns (var arg0, var r1) {
        memory[0x20:0x40] = 0x02;
        memory[0x00:0x20] = arg0;
        var temp0 = keccak256(memory[0x00:0x40]);
        arg0 = storage[temp0];
        r1 = storage[temp0 + 0x01];
        return arg0, r1;
    }
    
    function func_023B(var arg0) {
        if (msg.sender == storage[0x00] & 0xffffffffffffffffffffffffffffffffffffffff) {
            var temp0 = memory[0x40:0x60];
            memory[0x40:0x60] = temp0 + 0x40;
            memory[temp0:temp0 + 0x20] = arg0;
            var temp1 = temp0 + 0x20;
            memory[temp1:temp1 + 0x20] = block.timestamp;
            var temp2 = storage[0x01];
            storage[0x01] = temp2 + 0x01;
            memory[0x00:0x20] = 0x01;
            var temp3 = temp2 * 0x02;
            storage[temp3 + 0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6] = memory[temp0:temp0 + 0x20];
            storage[temp3 + 0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7] = memory[temp1:temp1 + 0x20];
            return;
        } else {
            var temp4 = memory[0x40:0x60];
            memory[temp4:temp4 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            memory[temp4 + 0x04:temp4 + 0x04 + 0x20] = 0x20;
            memory[temp4 + 0x24:temp4 + 0x24 + 0x20] = 0x0c;
            memory[temp4 + 0x44:temp4 + 0x44 + 0x20] = 0x554e415554484f52495a45440000000000000000000000000000000000000000;
            var var0 = temp4 + 0x64;
            var temp5 = memory[0x40:0x60];
            revert(memory[temp5:temp5 + var0 - temp5]);
        }
    }
    
    function func_024E(var arg0) returns (var arg0, var r1) {
        r1 = 0x01;
        var var1 = arg0;
    
        if (var1 >= storage[r1]) { revert(memory[0x00:0x00]); }
    
        memory[0x00:0x20] = r1;
        var temp0 = var1 * 0x02 + keccak256(memory[0x00:0x20]);
        r1 = storage[temp0 + 0x01];
        arg0 = storage[temp0];
        return arg0, r1;
    }
    
    function func_049B() returns (var r0) {
        var var0 = 0x00;
        var var1 = var0;
        var var2 = 0x00;
        var var3 = 0xffffffffffffffffffffffffffffffffffffffff & 0x0000000000000000000000007d7356bf6ee5cdec22b216581e48ecc700d0497a;
        var var4 = 0xfeaf968c;
        var temp0 = memory[0x40:0x60];
        memory[temp0:temp0 + 0x20] = (var4 & 0xffffffff) << 0xe0;
        var var5 = temp0 + 0x04;
        var temp1 = memory[0x40:0x60];
        var temp2;
        temp2, memory[temp1:temp1 + 0xa0] = address(var3).staticcall.gas(msg.gas)(memory[temp1:temp1 + var5 - temp1]);
        var var6 = !temp2;
    
        if (!var6) {
            var temp3 = memory[0x40:0x60];
            var temp4 = returndata.length;
            memory[0x40:0x60] = temp3 + (temp4 + 0x1f & ~0x1f);
            var3 = 0x052f;
            var4 = temp3 + temp4;
            var5 = temp3;
            var var7;
            var3, var4, var5, var6, var7 = func_0DD4(var4, var5);
            var1 = var4;
            var2 = var6;
            var3 = var1;
            var4 = !!storage[0x01];
        
            if (!storage[0x01]) {
            label_057C:
            
                if (!var4) {
                label_05B5:
                    return var3;
                } else {
                    var4 = 0x01;
                    var5 = 0x0590;
                    var6 = var4;
                    var7 = storage[var6];
                    var5 = func_0E53(var6, var7);
                
                    if (var5 < storage[var4]) {
                        memory[0x00:0x20] = var4;
                        var3 = storage[var5 * 0x02 + keccak256(memory[0x00:0x20])];
                        goto label_05B5;
                    } else {
                        var6 = 0x05a0;
                    
                    label_0E6A:
                        memory[0x00:0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
                        memory[0x04:0x24] = 0x32;
                        revert(memory[0x00:0x24]);
                    }
                }
            } else {
                var4 = var2;
                var5 = 0x01;
                var6 = 0x0557;
                var var8 = storage[var5];
                var7 = var5;
                var6 = func_0E53(var7, var8);
            
                if (var6 < storage[var5]) {
                    memory[0x00:0x20] = var5;
                    var4 = storage[var6 * 0x02 + keccak256(memory[0x00:0x20]) + 0x01] >= var4;
                    goto label_057C;
                } else {
                    var7 = 0x0567;
                    goto label_0E6A;
                }
            }
        } else {
            var temp5 = returndata.length;
            memory[0x00:0x00 + temp5] = returndata[0x00:0x00 + temp5];
            revert(memory[0x00:0x00 + returndata.length]);
        }
    }
    
    function func_05BC(var arg0, var arg1, var arg2, var arg3) {
        var var0 = 0x05c8;
        var var1 = 0x14;
        var var2 = 0x64;
        var0 = func_0E53(var1, var2);
        memory[0x00:0x20] = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
        memory[0x20:0x40] = 0x02;
        var1 = storage[keccak256(memory[0x00:0x40]) + 0x01];
        var2 = 0x05fc;
        var var3 = arg3;
        var var4 = 0x64;
        var2 = func_0E99(var3, var4);
        var temp0 = var1;
        var1 = 0x0606;
        var temp1 = var2;
        var2 = temp0;
        var3 = temp1;
        var1 = func_0ED6(var2, var3);
    
        if (var1 < var0) {
            var temp2 = memory[0x40:0x60];
            memory[0x40:0x60] = temp2 + 0x40;
            memory[temp2:temp2 + 0x20] = 0x00;
            var temp3 = temp2 + 0x20;
            memory[temp3:temp3 + 0x20] = 0x00;
            memory[0x00:0x20] = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
            memory[0x20:0x40] = 0x02;
            var temp4 = keccak256(memory[0x00:0x40]);
            storage[temp4] = memory[temp2:temp2 + 0x20];
            storage[temp4 + 0x01] = memory[temp3:temp3 + 0x20];
            var temp5 = memory[0x40:0x60];
            memory[temp5:temp5 + 0x20] = 0x23b872dd00000000000000000000000000000000000000000000000000000000;
            memory[temp5 + 0x04:temp5 + 0x04 + 0x20] = arg1 & 0xffffffffffffffffffffffffffffffffffffffff;
            memory[temp5 + 0x24:temp5 + 0x24 + 0x20] = address(this);
            memory[temp5 + 0x44:temp5 + 0x44 + 0x20] = arg2;
            var0 = 0xffffffffffffffffffffffffffffffffffffffff & 0x0000000000000000000000000353befc11c14383d5c043a8e38927a7137e46e8;
            var1 = 0x23b872dd;
            var2 = temp5 + 0x64;
            var temp6 = memory[0x40:0x60];
            var temp7;
            temp7, memory[temp6:temp6 + 0x20] = address(var0).call.gas(msg.gas)(memory[temp6:temp6 + var2 - temp6]);
            var3 = !temp7;
        
            if (!var3) {
                var temp8 = memory[0x40:0x60];
                var temp9 = returndata.length;
                memory[0x40:0x60] = temp8 + (temp9 + 0x1f & ~0x1f);
                var0 = 0x0760;
                var2 = temp8;
                var1 = var2 + temp9;
                var0 = func_0F11(var1, var2);
                var0 = 0x00;
                var1 = 0x076d;
                var2 = arg3;
                var3 = arg2;
                var1 = func_0ED6(var2, var3);
                var temp10 = var1;
                var1 = 0x077b;
                var2 = temp10;
                var3 = 0x05f5e100;
                var1 = func_0E99(var2, var3);
                var temp11 = memory[0x40:0x60];
                memory[temp11:temp11 + 0x20] = 0x70a0823100000000000000000000000000000000000000000000000000000000;
                memory[temp11 + 0x04:temp11 + 0x04 + 0x20] = address(this);
                var0 = var1;
                var1 = var0;
                var2 = 0x00000000000000000000000073a41fdf851a5bcf31db9410c32d2cf63f98c89d & 0xffffffffffffffffffffffffffffffffffffffff;
                var3 = 0x70a08231;
                var4 = temp11 + 0x24;
                var temp12 = memory[0x40:0x60];
                var temp13;
                temp13, memory[temp12:temp12 + 0x20] = address(var2).staticcall.gas(msg.gas)(memory[temp12:temp12 + var4 - temp12]);
                var var5 = !temp13;
            
                if (!var5) {
                    var temp14 = memory[0x40:0x60];
                    var temp15 = returndata.length;
                    memory[0x40:0x60] = temp14 + (temp15 + 0x1f & ~0x1f);
                    var2 = 0x082e;
                    var3 = temp14 + temp15;
                    var4 = temp14;
                    var2 = func_0F33(var3, var4);
                
                    if (var2 >= var1) {
                    label_08E5:
                        var temp16 = memory[0x40:0x60];
                        memory[temp16:temp16 + 0x20] = 0xa9059cbb00000000000000000000000000000000000000000000000000000000;
                        memory[temp16 + 0x04:temp16 + 0x04 + 0x20] = arg1 & 0xffffffffffffffffffffffffffffffffffffffff;
                        memory[temp16 + 0x24:temp16 + 0x24 + 0x20] = var0;
                        var1 = 0x00000000000000000000000073a41fdf851a5bcf31db9410c32d2cf63f98c89d & 0xffffffffffffffffffffffffffffffffffffffff;
                        var2 = 0xa9059cbb;
                        var3 = temp16 + 0x44;
                        var temp17 = memory[0x40:0x60];
                        var temp18;
                        temp18, memory[temp17:temp17 + 0x20] = address(var1).call.gas(msg.gas)(memory[temp17:temp17 + var3 - temp17]);
                        var4 = !temp18;
                    
                        if (!var4) {
                            var temp19 = memory[0x40:0x60];
                            var temp20 = returndata.length;
                            memory[0x40:0x60] = temp19 + (temp20 + 0x1f & ~0x1f);
                            var1 = 0x099e;
                            var2 = temp19 + temp20;
                            var3 = temp19;
                            var1 = func_0F11(var2, var3);
                            return;
                        } else {
                            var temp21 = returndata.length;
                            memory[0x00:0x00 + temp21] = returndata[0x00:0x00 + temp21];
                            revert(memory[0x00:0x00 + returndata.length]);
                        }
                    } else {
                        var temp22 = memory[0x40:0x60];
                        memory[temp22:temp22 + 0x20] = 0x70a0823100000000000000000000000000000000000000000000000000000000;
                        memory[temp22 + 0x04:temp22 + 0x04 + 0x20] = address(this);
                        var1 = 0xffffffffffffffffffffffffffffffffffffffff & 0x00000000000000000000000073a41fdf851a5bcf31db9410c32d2cf63f98c89d;
                        var2 = 0x70a08231;
                        var3 = temp22 + 0x24;
                        var temp23 = memory[0x40:0x60];
                        var temp24;
                        temp24, memory[temp23:temp23 + 0x20] = address(var1).staticcall.gas(msg.gas)(memory[temp23:temp23 + var3 - temp23]);
                        var4 = !temp24;
                    
                        if (!var4) {
                            var temp25 = memory[0x40:0x60];
                            var temp26 = returndata.length;
                            memory[0x40:0x60] = temp25 + (temp26 + 0x1f & ~0x1f);
                            var1 = 0x08e2;
                            var2 = temp25 + temp26;
                            var3 = temp25;
                            var1 = func_0F33(var2, var3);
                            var0 = var1;
                            goto label_08E5;
                        } else {
                            var temp27 = returndata.length;
                            memory[0x00:0x00 + temp27] = returndata[0x00:0x00 + temp27];
                            revert(memory[0x00:0x00 + returndata.length]);
                        }
                    }
                } else {
                    var temp28 = returndata.length;
                    memory[0x00:0x00 + temp28] = returndata[0x00:0x00 + temp28];
                    revert(memory[0x00:0x00 + returndata.length]);
                }
            } else {
                var temp29 = returndata.length;
                memory[0x00:0x00 + temp29] = returndata[0x00:0x00 + temp29];
                revert(memory[0x00:0x00 + returndata.length]);
            }
        } else {
            var temp30 = memory[0x40:0x60];
            memory[temp30:temp30 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            memory[temp30 + 0x04:temp30 + 0x04 + 0x20] = 0x20;
            memory[temp30 + 0x24:temp30 + 0x24 + 0x20] = 0x10;
            memory[temp30 + 0x44:temp30 + 0x44 + 0x20] = 0x4c6f616e207374696c6c2076616c696400000000000000000000000000000000;
            var0 = temp30 + 0x64;
            var temp31 = memory[0x40:0x60];
            revert(memory[temp31:temp31 + var0 - temp31]);
        }
    }
    
    function func_09A6(var arg0, var arg1) {
        if (arg1 > 0x00) {
            var temp0 = memory[0x40:0x60];
            memory[temp0:temp0 + 0x20] = 0x70a0823100000000000000000000000000000000000000000000000000000000;
            memory[temp0 + 0x04:temp0 + 0x04 + 0x20] = address(this);
            var var0 = 0x00;
            var var1 = 0xffffffffffffffffffffffffffffffffffffffff & 0x0000000000000000000000000353befc11c14383d5c043a8e38927a7137e46e8;
            var var2 = 0x70a08231;
            var var3 = temp0 + 0x24;
            var temp1 = memory[0x40:0x60];
            var temp2;
            temp2, memory[temp1:temp1 + 0x20] = address(var1).staticcall.gas(msg.gas)(memory[temp1:temp1 + var3 - temp1]);
            var var4 = !temp2;
        
            if (!var4) {
                var temp3 = memory[0x40:0x60];
                var temp4 = returndata.length;
                memory[0x40:0x60] = temp3 + (temp4 + 0x1f & ~0x1f);
                var1 = 0x0ac1;
                var3 = temp3;
                var2 = var3 + temp4;
                var1 = func_0F33(var2, var3);
            
                if (var1 > var0) {
                    var0 = 0x00;
                    var1 = 0x0b32;
                    var1 = func_049B();
                    var temp5 = memory[0x40:0x60];
                    memory[0x40:0x60] = temp5 + 0x40;
                    var temp6 = arg1;
                    memory[temp5:temp5 + 0x20] = temp6;
                    var temp7 = temp5 + 0x20;
                    memory[temp7:temp7 + 0x20] = var1;
                    var temp8 = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
                    memory[0x00:0x20] = temp8;
                    memory[0x20:0x40] = 0x02;
                    var temp9 = keccak256(memory[0x00:0x40]);
                    storage[temp9] = memory[temp5:temp5 + 0x20];
                    storage[temp9 + 0x01] = memory[temp7:temp7 + 0x20];
                    var temp10 = memory[0x40:0x60];
                    memory[temp10:temp10 + 0x20] = 0x23b872dd00000000000000000000000000000000000000000000000000000000;
                    memory[temp10 + 0x04:temp10 + 0x04 + 0x20] = temp8;
                    memory[temp10 + 0x24:temp10 + 0x24 + 0x20] = address(this);
                    memory[temp10 + 0x44:temp10 + 0x44 + 0x20] = temp6;
                    var0 = var1;
                    var1 = 0xffffffffffffffffffffffffffffffffffffffff & 0x00000000000000000000000073a41fdf851a5bcf31db9410c32d2cf63f98c89d;
                    var2 = 0x23b872dd;
                    var3 = temp10 + 0x64;
                    var temp11 = memory[0x40:0x60];
                    var temp12;
                    temp12, memory[temp11:temp11 + 0x20] = address(var1).call.gas(msg.gas)(memory[temp11:temp11 + var3 - temp11]);
                    var4 = !temp12;
                
                    if (!var4) {
                        var temp13 = memory[0x40:0x60];
                        var temp14 = returndata.length;
                        memory[0x40:0x60] = temp13 + (temp14 + 0x1f & ~0x1f);
                        var1 = 0x0c29;
                        var2 = temp13 + temp14;
                        var3 = temp13;
                        var1 = func_0F11(var2, var3);
                        var1 = 0x00;
                        var2 = 0x96;
                        var3 = 0x05f5e100;
                        var4 = 0x0c3d;
                        var var5 = var0;
                        var var6 = arg1;
                        var4 = func_0E99(var5, var6);
                        var temp15 = var3;
                        var3 = 0x0c47;
                        var temp16 = var4;
                        var4 = temp15;
                        var5 = temp16;
                        var3 = func_0ED6(var4, var5);
                        var temp17 = var2;
                        var2 = 0x0c51;
                        var temp18 = var3;
                        var3 = temp17;
                        var4 = temp18;
                        var2 = func_0ED6(var3, var4);
                        var3 = var2;
                        var2 = 0x0c5c;
                        var4 = 0x64;
                        var2 = func_0E99(var3, var4);
                        var temp19 = memory[0x40:0x60];
                        memory[temp19:temp19 + 0x20] = 0xa9059cbb00000000000000000000000000000000000000000000000000000000;
                        memory[temp19 + 0x04:temp19 + 0x04 + 0x20] = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
                        memory[temp19 + 0x24:temp19 + 0x24 + 0x20] = var2;
                        var1 = var2;
                        var2 = 0xffffffffffffffffffffffffffffffffffffffff & 0x0000000000000000000000000353befc11c14383d5c043a8e38927a7137e46e8;
                        var3 = 0xa9059cbb;
                        var4 = temp19 + 0x44;
                        var temp20 = memory[0x40:0x60];
                        var temp21;
                        temp21, memory[temp20:temp20 + 0x20] = address(var2).call.gas(msg.gas)(memory[temp20:temp20 + var4 - temp20]);
                        var5 = !temp21;
                    
                        if (!var5) {
                            var temp22 = memory[0x40:0x60];
                            var temp23 = returndata.length;
                            memory[0x40:0x60] = temp22 + (temp23 + 0x1f & ~0x1f);
                            var2 = 0x0d1a;
                            var4 = temp22;
                            var3 = var4 + temp23;
                            var2 = func_0F11(var3, var4);
                            return;
                        } else {
                            var temp24 = returndata.length;
                            memory[0x00:0x00 + temp24] = returndata[0x00:0x00 + temp24];
                            revert(memory[0x00:0x00 + returndata.length]);
                        }
                    } else {
                        var temp25 = returndata.length;
                        memory[0x00:0x00 + temp25] = returndata[0x00:0x00 + temp25];
                        revert(memory[0x00:0x00 + returndata.length]);
                    }
                } else {
                    var temp26 = memory[0x40:0x60];
                    memory[temp26:temp26 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
                    memory[temp26 + 0x04:temp26 + 0x04 + 0x20] = 0x20;
                    memory[temp26 + 0x24:temp26 + 0x24 + 0x20] = 0x16;
                    memory[temp26 + 0x44:temp26 + 0x44 + 0x20] = 0x4e6f204a756e676672617520746f206c6f616e203d2800000000000000000000;
                    var0 = temp26 + 0x64;
                
                label_02D0:
                    var temp27 = memory[0x40:0x60];
                    revert(memory[temp27:temp27 + var0 - temp27]);
                }
            } else {
                var temp28 = returndata.length;
                memory[0x00:0x00 + temp28] = returndata[0x00:0x00 + temp28];
                revert(memory[0x00:0x00 + returndata.length]);
            }
        } else {
            var temp29 = memory[0x40:0x60];
            memory[temp29:temp29 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            memory[temp29 + 0x04:temp29 + 0x04 + 0x20] = 0x20;
            memory[temp29 + 0x24:temp29 + 0x24 + 0x20] = 0x1d;
            memory[temp29 + 0x44:temp29 + 0x44 + 0x20] = 0x43616e2774206c6f616e2077697468203020636f6c6c61746572616c21000000;
            var0 = temp29 + 0x64;
            goto label_02D0;
        }
    }
    
    function func_0D21(var arg0) returns (var r0) {
        var temp0 = msg.data[arg0:arg0 + 0x20];
        var var0 = temp0;
    
        if (var0 == var0 & 0xffffffffffffffffffffffffffffffffffffffff) { return var0; }
        else { revert(memory[0x00:0x00]); }
    }
    
    function func_0D4A(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
    
        if (arg0 - arg1 i< 0x20) { revert(memory[0x00:0x00]); }
    
        var var1 = 0x05b5;
        var var2 = arg1;
        return func_0D21(var2);
    }
    
    function func_0D65(var arg0, var arg1) returns (var r0, var arg0, var arg1) {
        var var0 = 0x00;
        var var1 = var0;
        var var2 = 0x00;
    
        if (arg0 - arg1 i< 0x60) { revert(memory[0x00:0x00]); }
    
        var var3 = 0x0d83;
        var var4 = arg1;
        var3 = func_0D21(var4);
        var0 = var3;
        var3 = 0x0d91;
        var4 = arg1 + 0x20;
        var3 = func_0D21(var4);
        arg1 = msg.data[arg1 + 0x40:arg1 + 0x40 + 0x20];
        arg0 = var3;
        r0 = var0;
        return r0, arg0, arg1;
    }
    
    function func_0DA1(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
    
        if (arg0 - arg1 i>= 0x20) { return msg.data[arg1:arg1 + 0x20]; }
        else { revert(memory[0x00:0x00]); }
    }
    
    function func_0DBA(var arg0) returns (var r0) {
        var temp0 = memory[arg0:arg0 + 0x20];
        var var0 = temp0;
    
        if (var0 == var0 & 0xffffffffffffffffffff) { return var0; }
        else { revert(memory[0x00:0x00]); }
    }
    
    function func_0DD4(var arg0, var arg1) returns (var r0, var arg0, var arg1, var r3, var r4) {
        r3 = 0x00;
        r4 = r3;
        var var2 = 0x00;
        var var3 = var2;
        var var4 = 0x00;
    
        if (arg0 - arg1 i< 0xa0) { revert(memory[0x00:0x00]); }
    
        var var5 = 0x0df5;
        var var6 = arg1;
        var5 = func_0DBA(var6);
        r3 = var5;
        var temp0 = arg1;
        r4 = memory[temp0 + 0x20:temp0 + 0x20 + 0x20];
        var2 = memory[temp0 + 0x40:temp0 + 0x40 + 0x20];
        var3 = memory[temp0 + 0x60:temp0 + 0x60 + 0x20];
        var5 = 0x0e18;
        var6 = temp0 + 0x80;
        var5 = func_0DBA(var6);
        var temp1 = r4;
        r4 = var5;
        arg0 = temp1;
        var temp2 = r3;
        r3 = var3;
        r0 = temp2;
        arg1 = var2;
        return r0, arg0, arg1, r3, r4;
    }
    
    function func_0E53(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
    
        if (arg1 >= arg0) { return arg1 - arg0; }
    
        var var1 = 0x0e65;
        memory[0x00:0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
        memory[0x04:0x24] = 0x11;
        revert(memory[0x00:0x24]);
    }
    
    function func_0E99(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
        var temp0 = arg1;
    
        if (!(!!temp0 & (arg0 > 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff / temp0))) { return arg1 * arg0; }
    
        var var1 = 0x0ed1;
        memory[0x00:0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
        memory[0x04:0x24] = 0x11;
        revert(memory[0x00:0x24]);
    }
    
    function func_0ED6(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
    
        if (arg0) { return arg1 / arg0; }
    
        memory[0x00:0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
        memory[0x04:0x24] = 0x12;
        revert(memory[0x00:0x24]);
    }
    
    function func_0F11(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
    
        if (arg0 - arg1 i< 0x20) { revert(memory[0x00:0x00]); }
    
        var temp0 = memory[arg1:arg1 + 0x20];
        var var1 = temp0;
    
        if (var1 == !!var1) { return var1; }
        else { revert(memory[0x00:0x00]); }
    }
    
    function func_0F33(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
    
        if (arg0 - arg1 i>= 0x20) { return memory[arg1:arg1 + 0x20]; }
        else { revert(memory[0x00:0x00]); }
    }
}

