contract Contract {
    function main() {
        memory[0x40:0x60] = 0x80;
        var var0 = msg.value;
    
        if (var0) { revert(memory[0x00:0x00]); }
    
        if (msg.data.length < 0x04) { revert(memory[0x00:0x00]); }
    
        var0 = msg.data[0x00:0x20] >> 0xe0;
    
        if (0x70a08231 > var0) {
            if (0x23b872dd > var0) {
                if (var0 == 0x06fdde03) {
                    // Dispatch table entry for name()
                    var var1 = 0x010d;
                    var var2 = func_02C7();
                
                label_010D:
                    var temp0 = var2;
                    var2 = 0x011a;
                    var var3 = temp0;
                    var var4 = memory[0x40:0x60];
                    var2 = func_0C67(var3, var4);
                
                label_011A:
                    var temp1 = memory[0x40:0x60];
                    return memory[temp1:temp1 + var2 - temp1];
                } else if (var0 == 0x095ea7b3) {
                    // Dispatch table entry for approve(address,uint256)
                    var1 = 0x0136;
                    var2 = 0x0131;
                    var3 = msg.data.length;
                    var4 = 0x04;
                    var2, var3 = func_0D03(var3, var4);
                    var1 = func_0131(var2, var3);
                
                label_0136:
                    var temp2 = memory[0x40:0x60];
                    memory[temp2:temp2 + 0x20] = !!var1;
                    var1 = temp2 + 0x20;
                    goto label_011A;
                } else if (var0 == 0x13af4035) {
                    // Dispatch table entry for setOwner(address)
                    var1 = 0x0159;
                    var2 = 0x0154;
                    var3 = msg.data.length;
                    var4 = 0x04;
                    var2 = func_0D2D(var3, var4);
                    func_0154(var2);
                    stop();
                } else if (var0 == 0x18160ddd) {
                    // Dispatch table entry for totalSupply()
                    var1 = 0x0164;
                    var2 = storage[0x02];
                
                label_0164:
                    var temp3 = memory[0x40:0x60];
                    memory[temp3:temp3 + 0x20] = var2;
                    var2 = temp3 + 0x20;
                    goto label_011A;
                } else { revert(memory[0x00:0x00]); }
            } else if (var0 == 0x23b872dd) {
                // Dispatch table entry for transferFrom(address,address,uint256)
                var1 = 0x0136;
                var2 = 0x0180;
                var3 = msg.data.length;
                var4 = 0x04;
                var2, var3, var4 = func_0D4F(var3, var4);
                var1 = func_0180(var2, var3, var4);
                goto label_0136;
            } else if (var0 == 0x313ce567) {
                // Dispatch table entry for decimals()
                var1 = 0x01ac;
                var2 = 0x0000000000000000000000000000000000000000000000000000000000000012;
                var temp4 = memory[0x40:0x60];
                memory[temp4:temp4 + 0x20] = var2 & 0xff;
                var2 = temp4 + 0x20;
                goto label_011A;
            } else if (var0 == 0x3644e515) {
                // Dispatch table entry for DOMAIN_SEPARATOR()
                var1 = 0x0164;
                var1 = DOMAIN_SEPARATOR();
                goto label_0164;
            } else if (var0 == 0x40c10f19) {
                // Dispatch table entry for mint(address,uint256)
                var1 = 0x0159;
                var2 = 0x01d4;
                var3 = msg.data.length;
                var4 = 0x04;
                var2, var3 = func_0D03(var3, var4);
                func_01D4(var2, var3);
                stop();
            } else { revert(memory[0x00:0x00]); }
        } else if (0xa9059cbb > var0) {
            if (var0 == 0x70a08231) {
                // Dispatch table entry for balanceOf(address)
                var1 = 0x0164;
                var2 = 0x01e7;
                var3 = msg.data.length;
                var4 = 0x04;
                var2 = func_0D2D(var3, var4);
                var2 = func_01E7(var2);
                goto label_0164;
            } else if (var0 == 0x7ecebe00) {
                // Dispatch table entry for nonces(address)
                var1 = 0x0164;
                var2 = 0x0207;
                var3 = msg.data.length;
                var4 = 0x04;
                var2 = func_0D2D(var3, var4);
                var2 = func_0207(var2);
                goto label_0164;
            } else if (var0 == 0x8da5cb5b) {
                // Dispatch table entry for owner()
                var1 = 0x0239;
                var2 = storage[0x06] & 0xffffffffffffffffffffffffffffffffffffffff;
                var temp5 = memory[0x40:0x60];
                memory[temp5:temp5 + 0x20] = var2 & 0xffffffffffffffffffffffffffffffffffffffff;
                var2 = temp5 + 0x20;
                goto label_011A;
            } else if (var0 == 0x95d89b41) {
                // Dispatch table entry for symbol()
                var1 = 0x010d;
                var2 = symbol();
                goto label_010D;
            } else { revert(memory[0x00:0x00]); }
        } else if (var0 == 0xa9059cbb) {
            // Dispatch table entry for transfer(address,uint256)
            var1 = 0x0136;
            var2 = 0x0274;
            var3 = msg.data.length;
            var4 = 0x04;
            var2, var3 = func_0D03(var3, var4);
            var1 = func_0274(var2, var3);
            goto label_0136;
        } else if (var0 == 0xd505accf) {
            // Dispatch table entry for permit(address,address,uint256,uint256,uint8,bytes32,bytes32)
            var1 = 0x0159;
            var2 = 0x0287;
            var3 = msg.data.length;
            var4 = 0x04;
            var var5;
            var var6;
            var var7;
            var var8;
            var2, var3, var4, var5, var6, var7, var8 = func_0D8B(var3, var4);
            func_0287(var2, var3, var4, var5, var6, var7, var8);
            stop();
        } else if (var0 == 0xdd62ed3e) {
            // Dispatch table entry for allowance(address,address)
            var1 = 0x0164;
            var2 = 0x029a;
            var3 = msg.data.length;
            var4 = 0x04;
            var2, var3 = func_0DFE(var3, var4);
            var2 = func_029A(var2, var3);
            goto label_0164;
        } else if (var0 == 0xfa9b7018) {
            // Dispatch table entry for MAX_MINT_AMOUNT()
            var1 = 0x0164;
            var2 = 0x06f05b59d3b2000000;
            goto label_0164;
        } else { revert(memory[0x00:0x00]); }
    }
    
    function func_0131(var arg0, var arg1) returns (var r0) {
        memory[0x00:0x20] = msg.sender;
        memory[0x20:0x40] = 0x04;
        var temp0 = keccak256(memory[0x00:0x40]);
        memory[0x00:0x20] = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
        memory[0x20:0x40] = temp0;
        var temp1 = arg1;
        storage[keccak256(memory[0x00:0x40])] = temp1;
        var temp2 = memory[0x40:0x60];
        var var0 = 0x00;
        var var2 = msg.sender;
        var var1 = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
        var var3 = 0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925;
        memory[temp2:temp2 + 0x20] = temp1;
        var var4 = temp2 + 0x20;
        var temp3 = memory[0x40:0x60];
        log(memory[temp3:temp3 + var4 - temp3], [stack[-2], stack[-3], stack[-4]]);
        return 0x01;
    }
    
    function func_0154(var arg0) {
        if (msg.sender == storage[0x06] & 0xffffffffffffffffffffffffffffffffffffffff) {
            var temp0 = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
            storage[0x06] = temp0 | (storage[0x06] & 0xffffffffffffffffffffffff0000000000000000000000000000000000000000);
            log(memory[memory[0x40:0x60]:memory[0x40:0x60] + 0x00], [0x8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76, msg.sender, stack[-1] & 0xffffffffffffffffffffffffffffffffffffffff]);
            return;
        } else {
            var temp1 = memory[0x40:0x60];
            memory[temp1:temp1 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            memory[temp1 + 0x04:temp1 + 0x04 + 0x20] = 0x20;
            memory[temp1 + 0x24:temp1 + 0x24 + 0x20] = 0x0c;
            memory[temp1 + 0x44:temp1 + 0x44 + 0x20] = 0x554e415554484f52495a45440000000000000000000000000000000000000000;
            var temp2 = memory[0x40:0x60];
            revert(memory[temp2:temp2 + (temp1 + 0x64) - temp2]);
        }
    }
    
    function func_0180(var arg0, var arg1, var arg2) returns (var r0) {
        var var0 = 0x00;
        memory[var0:var0 + 0x20] = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
        memory[0x20:0x40] = 0x04;
        var temp0 = keccak256(memory[var0:var0 + 0x40]);
        memory[var0:var0 + 0x20] = msg.sender;
        memory[0x20:0x40] = temp0;
        var var1 = storage[keccak256(memory[var0:var0 + 0x40])];
    
        if (var1 == 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) {
        label_0559:
            memory[0x00:0x20] = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
            memory[0x20:0x40] = 0x03;
            var var3 = keccak256(memory[0x00:0x40]);
            var var2 = arg2;
            var var4 = 0x00;
            var var5 = 0x058e;
            var var6 = var2;
            var var7 = storage[var3];
            var5 = func_0EB3(var6, var7);
            storage[var3] = var5;
            memory[0x00:0x20] = arg1 & 0xffffffffffffffffffffffffffffffffffffffff;
            memory[0x20:0x40] = 0x03;
            var temp1 = keccak256(memory[0x00:0x40]);
            var temp2 = arg2;
            storage[temp1] = temp2 + storage[temp1];
            var temp3 = memory[0x40:0x60];
            var2 = arg1 & 0xffffffffffffffffffffffffffffffffffffffff;
            var3 = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
            var4 = 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef;
            memory[temp3:temp3 + 0x20] = temp2;
            var5 = temp3 + 0x20;
            var temp4 = memory[0x40:0x60];
            log(memory[temp4:temp4 + var5 - temp4], [stack[-2], stack[-3], stack[-4]]);
            return 0x01;
        } else {
            var2 = 0x0527;
            var3 = arg2;
            var4 = var1;
            var2 = func_0EB3(var3, var4);
            memory[0x00:0x20] = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
            memory[0x20:0x40] = 0x04;
            var temp5 = keccak256(memory[0x00:0x40]);
            memory[0x00:0x20] = msg.sender;
            memory[0x20:0x40] = temp5;
            storage[keccak256(memory[0x00:0x40])] = var2;
            goto label_0559;
        }
    }
    
    function func_01D4(var arg0, var arg1) {
        var temp0 = memory[0x40:0x60];
        memory[temp0:temp0 + 0x20] = 0x70a0823100000000000000000000000000000000000000000000000000000000;
        memory[temp0 + 0x04:temp0 + 0x04 + 0x20] = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
        var var0 = 0x06f05b59d3b2000000;
        var var1 = arg1;
        var var2 = address(this);
        var var3 = 0x70a08231;
        var var4 = temp0 + 0x24;
        var temp1 = memory[0x40:0x60];
        var temp2;
        temp2, memory[temp1:temp1 + 0x20] = address(var2).staticcall.gas(msg.gas)(memory[temp1:temp1 + var4 - temp1]);
        var var5 = !temp2;
    
        if (!var5) {
            var temp3 = memory[0x40:0x60];
            var temp4 = returndata.length;
            memory[0x40:0x60] = temp3 + (temp4 + 0x1f & ~0x1f);
            var2 = 0x06ff;
            var4 = temp3;
            var3 = var4 + temp4;
            var2 = func_0ECA(var3, var4);
            var temp5 = var1;
            var1 = 0x0709;
            var temp6 = var2;
            var2 = temp5;
            var3 = temp6;
            var1 = func_0EE3(var2, var3);
        
            if (var1 < var0) {
                var0 = 0x07a0;
                var1 = arg0;
                var2 = arg1;
                func_0BEF(var1, var2);
                return;
            } else {
                var temp7 = memory[0x40:0x60];
                memory[temp7:temp7 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
                memory[temp7 + 0x04:temp7 + 0x04 + 0x20] = 0x20;
                memory[temp7 + 0x24:temp7 + 0x24 + 0x20] = 0x34;
                memory[temp7 + 0x44:temp7 + 0x44 + 0x20] = 0x4e6f626f6479206e65656473206d6f7265207468616e20313238204a756e6766;
                memory[temp7 + 0x64:temp7 + 0x64 + 0x20] = 0x7261752e20444541544820544f20454947455221000000000000000000000000;
                var0 = temp7 + 0x84;
                var temp8 = memory[0x40:0x60];
                revert(memory[temp8:temp8 + var0 - temp8]);
            }
        } else {
            var temp9 = returndata.length;
            memory[0x00:0x00 + temp9] = returndata[0x00:0x00 + temp9];
            revert(memory[0x00:0x00 + returndata.length]);
        }
    }
    
    function func_01E7(var arg0) returns (var arg0) {
        memory[0x20:0x40] = 0x03;
        memory[0x00:0x20] = arg0;
        return storage[keccak256(memory[0x00:0x40])];
    }
    
    function func_0207(var arg0) returns (var arg0) {
        memory[0x20:0x40] = 0x05;
        memory[0x00:0x20] = arg0;
        return storage[keccak256(memory[0x00:0x40])];
    }
    
    function func_0274(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
        memory[var0:var0 + 0x20] = msg.sender;
        memory[0x20:0x40] = 0x03;
        var var1 = arg1;
        var var2 = keccak256(memory[var0:var0 + 0x40]);
        var var3 = var0;
        var var4 = 0x07d2;
        var var6 = storage[var2];
        var var5 = var1;
        var4 = func_0EB3(var5, var6);
        storage[var2] = var4;
        var1 = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
        memory[0x00:0x20] = var1;
        memory[0x20:0x40] = 0x03;
        var temp0 = keccak256(memory[0x00:0x40]);
        var temp1 = arg1;
        storage[temp0] = temp1 + storage[temp0];
        var temp2 = memory[0x40:0x60];
        var2 = msg.sender;
        var3 = 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef;
        memory[temp2:temp2 + 0x20] = temp1;
        var4 = temp2 + 0x20;
        var temp3 = memory[0x40:0x60];
        log(memory[temp3:temp3 + var4 - temp3], [stack[-2], stack[-3], stack[-4]]);
        return 0x01;
    }
    
    function func_0287(var arg0, var arg1, var arg2, var arg3, var arg4, var arg5, var arg6) {
        if (arg3 >= block.timestamp) {
            var var0 = 0x00;
            var var1 = 0x01;
            var var2 = 0x08ac;
            var2 = DOMAIN_SEPARATOR();
            var temp0 = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
            memory[0x00:0x20] = temp0;
            memory[0x20:0x40] = 0x05;
            var temp1 = keccak256(memory[0x00:0x40]);
            var temp2 = storage[temp1];
            storage[temp1] = temp2 + 0x01;
            var temp3 = memory[0x40:0x60];
            memory[temp3 + 0x20:temp3 + 0x20 + 0x20] = 0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9;
            memory[temp3 + 0x40:temp3 + 0x40 + 0x20] = temp0;
            memory[temp3 + 0x60:temp3 + 0x60 + 0x20] = arg1 & 0xffffffffffffffffffffffffffffffffffffffff;
            memory[temp3 + 0x80:temp3 + 0x80 + 0x20] = arg2;
            memory[temp3 + 0xa0:temp3 + 0xa0 + 0x20] = temp2;
            memory[temp3 + 0xc0:temp3 + 0xc0 + 0x20] = arg3;
            var temp4 = memory[0x40:0x60];
            memory[temp4:temp4 + 0x20] = temp3 - temp4 + 0xc0;
            memory[0x40:0x60] = temp3 + 0xe0;
            var temp5 = keccak256(memory[temp4 + 0x20:temp4 + 0x20 + memory[temp4:temp4 + 0x20]]);
            memory[temp3 + 0x0100:temp3 + 0x0100 + 0x20] = 0x1901000000000000000000000000000000000000000000000000000000000000;
            memory[temp3 + 0x0102:temp3 + 0x0102 + 0x20] = var2;
            memory[temp3 + 0x0122:temp3 + 0x0122 + 0x20] = temp5;
            var temp6 = temp3 + 0x0142;
            var temp7 = memory[0x40:0x60];
            memory[temp7:temp7 + 0x20] = temp6 - temp7 + 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0;
            memory[0x40:0x60] = temp6;
            var temp8 = keccak256(memory[temp7 + 0x20:temp7 + 0x20 + memory[temp7:temp7 + 0x20]]);
            memory[temp6:temp6 + 0x20] = 0x00;
            var temp9 = temp6 + 0x20;
            memory[0x40:0x60] = temp9;
            memory[temp9:temp9 + 0x20] = temp8;
            memory[temp6 + 0x40:temp6 + 0x40 + 0x20] = arg4 & 0xff;
            memory[temp6 + 0x60:temp6 + 0x60 + 0x20] = arg5;
            memory[temp6 + 0x80:temp6 + 0x80 + 0x20] = arg6;
            var2 = temp6 + 0xa0;
            var temp10 = memory[0x40:0x60];
            var temp11;
            temp11, memory[temp10 - 0x20:temp10 - 0x20 + 0x20] = address(var1).staticcall.gas(msg.gas)(memory[temp10:temp10 + var2 - temp10]);
            var var3 = !temp11;
        
            if (!var3) {
                var0 = memory[memory[0x40:0x60] + 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0:memory[0x40:0x60] + 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0 + 0x20];
                var1 = !!(var0 & 0xffffffffffffffffffffffffffffffffffffffff);
            
                if (!(var0 & 0xffffffffffffffffffffffffffffffffffffffff)) {
                    if (var1) {
                    label_0ADF:
                        memory[0x00:0x20] = var0 & 0xffffffffffffffffffffffffffffffffffffffff;
                        memory[0x20:0x40] = 0x04;
                        var temp12 = keccak256(memory[0x00:0x40]);
                        var temp13 = arg1 & 0xffffffffffffffffffffffffffffffffffffffff;
                        memory[0x00:0x20] = temp13;
                        memory[0x20:0x40] = temp12;
                        var temp14 = arg2;
                        storage[keccak256(memory[0x00:0x40])] = temp14;
                        var temp15 = memory[0x40:0x60];
                        memory[temp15:temp15 + 0x20] = temp14;
                        var temp16 = memory[0x40:0x60];
                        log(memory[temp16:temp16 + (temp15 + 0x20) - temp16], [0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925, stack[-8] & 0xffffffffffffffffffffffffffffffffffffffff, stack[-7] & 0xffffffffffffffffffffffffffffffffffffffff]);
                        return;
                    } else {
                    label_0A7E:
                        var temp17 = memory[0x40:0x60];
                        memory[temp17:temp17 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
                        memory[temp17 + 0x04:temp17 + 0x04 + 0x20] = 0x20;
                        memory[temp17 + 0x24:temp17 + 0x24 + 0x20] = 0x0e;
                        memory[temp17 + 0x44:temp17 + 0x44 + 0x20] = 0x494e56414c49445f5349474e4552000000000000000000000000000000000000;
                        var1 = temp17 + 0x64;
                    
                    label_044B:
                        var temp18 = memory[0x40:0x60];
                        revert(memory[temp18:temp18 + var1 - temp18]);
                    }
                } else if (var0 & 0xffffffffffffffffffffffffffffffffffffffff == arg0 & 0xffffffffffffffffffffffffffffffffffffffff) { goto label_0ADF; }
                else { goto label_0A7E; }
            } else {
                var temp19 = returndata.length;
                memory[0x00:0x00 + temp19] = returndata[0x00:0x00 + temp19];
                revert(memory[0x00:0x00 + returndata.length]);
            }
        } else {
            var temp20 = memory[0x40:0x60];
            memory[temp20:temp20 + 0x20] = 0x08c379a000000000000000000000000000000000000000000000000000000000;
            memory[temp20 + 0x04:temp20 + 0x04 + 0x20] = 0x20;
            memory[temp20 + 0x24:temp20 + 0x24 + 0x20] = 0x17;
            memory[temp20 + 0x44:temp20 + 0x44 + 0x20] = 0x5045524d49545f444541444c494e455f45585049524544000000000000000000;
            var0 = temp20 + 0x64;
            goto label_044B;
        }
    }
    
    function func_029A(var arg0, var arg1) returns (var arg0) {
        memory[0x20:0x40] = 0x04;
        memory[0x00:0x20] = arg0;
        memory[0x20:0x40] = keccak256(memory[0x00:0x40]);
        memory[0x00:0x20] = arg1;
        return storage[keccak256(memory[0x00:0x40])];
    }
    
    function func_02C7() returns (var r0) {
        r0 = 0x00;
        var var1 = 0x02d4;
        var var2 = storage[r0];
        var1 = func_0E31(var2);
        var temp0 = var1;
        var temp1 = memory[0x40:0x60];
        memory[0x40:0x60] = temp1 + (temp0 + 0x1f) / 0x20 * 0x20 + 0x20;
        var temp2 = r0;
        r0 = temp1;
        var1 = temp2;
        var2 = temp0;
        memory[r0:r0 + 0x20] = var2;
        var var3 = r0 + 0x20;
        var var4 = var1;
        var var5 = 0x0300;
        var var6 = storage[var4];
        var5 = func_0E31(var6);
    
        if (!var5) {
        label_034D:
            return r0;
        } else if (0x1f < var5) {
            var temp3 = var3;
            var temp4 = temp3 + var5;
            var3 = temp4;
            memory[0x00:0x20] = var4;
            var temp5 = keccak256(memory[0x00:0x20]);
            memory[temp3:temp3 + 0x20] = storage[temp5];
            var4 = temp5 + 0x01;
            var5 = temp3 + 0x20;
        
            if (var3 <= var5) { goto label_0344; }
        
        label_0330:
            var temp6 = var4;
            var temp7 = var5;
            memory[temp7:temp7 + 0x20] = storage[temp6];
            var4 = temp6 + 0x01;
            var5 = temp7 + 0x20;
        
            if (var3 > var5) { goto label_0330; }
        
        label_0344:
            var temp8 = var3;
            var temp9 = temp8 + (var5 - temp8 & 0x1f);
            var5 = temp8;
            var3 = temp9;
            goto label_034D;
        } else {
            var temp10 = var3;
            memory[temp10:temp10 + 0x20] = storage[var4] / 0x0100 * 0x0100;
            var5 = var5;
            var3 = temp10 + 0x20;
            goto label_034D;
        }
    }
    
    function DOMAIN_SEPARATOR() returns (var r0) {
        var var0 = 0x00;
    
        if (CHAINID() == 0x0000000000000000000000000000000000000000000000000000000000013881) { return 0x23ff5edd1d783530d0a1503d0b31a2eb3d120b2d6c271744556abf9299831d26; }
    
        var var1 = 0x063a;
        return func_0B55();
    }
    
    function symbol() returns (var r0) {
        r0 = 0x01;
        var var1 = 0x02d4;
        var var2 = storage[r0];
        var1 = func_0E31(var2);
        var temp0 = var1;
        var temp1 = memory[0x40:0x60];
        memory[0x40:0x60] = temp1 + (temp0 + 0x1f) / 0x20 * 0x20 + 0x20;
        var temp2 = r0;
        r0 = temp1;
        var1 = temp2;
        var2 = temp0;
        memory[r0:r0 + 0x20] = var2;
        var var3 = r0 + 0x20;
        var var4 = var1;
        var var5 = 0x0300;
        var var6 = storage[var4];
        var5 = func_0E31(var6);
    
        if (!var5) {
        label_034D:
            return r0;
        } else if (0x1f < var5) {
            var temp3 = var3;
            var temp4 = temp3 + var5;
            var3 = temp4;
            memory[0x00:0x20] = var4;
            var temp5 = keccak256(memory[0x00:0x20]);
            memory[temp3:temp3 + 0x20] = storage[temp5];
            var4 = temp5 + 0x01;
            var5 = temp3 + 0x20;
        
            if (var3 <= var5) { goto label_0344; }
        
        label_0330:
            var temp6 = var4;
            var temp7 = var5;
            memory[temp7:temp7 + 0x20] = storage[temp6];
            var4 = temp6 + 0x01;
            var5 = temp7 + 0x20;
        
            if (var3 > var5) { goto label_0330; }
        
        label_0344:
            var temp8 = var3;
            var temp9 = temp8 + (var5 - temp8 & 0x1f);
            var5 = temp8;
            var3 = temp9;
            goto label_034D;
        } else {
            var temp10 = var3;
            memory[temp10:temp10 + 0x20] = storage[var4] / 0x0100 * 0x0100;
            var5 = var5;
            var3 = temp10 + 0x20;
            goto label_034D;
        }
    }
    
    function func_0B55() returns (var r0) {
        var var0 = 0x00;
        var var1 = 0x8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f;
        var var2 = 0x0b87;
        var var4 = memory[0x40:0x60];
        var var3 = 0x00;
        var2 = func_0EFB(var3, var4);
        var temp0 = memory[0x40:0x60];
        var temp1 = keccak256(memory[temp0:temp0 + var2 - temp0]);
        memory[temp0 + 0x20:temp0 + 0x20 + 0x20] = var1;
        memory[temp0 + 0x40:temp0 + 0x40 + 0x20] = temp1;
        memory[temp0 + 0x60:temp0 + 0x60 + 0x20] = 0xc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6;
        memory[temp0 + 0x80:temp0 + 0x80 + 0x20] = CHAINID();
        memory[temp0 + 0xa0:temp0 + 0xa0 + 0x20] = address(this);
        var temp2 = temp0 + 0xc0;
        var temp3 = memory[0x40:0x60];
        memory[temp3:temp3 + 0x20] = temp2 - temp3 - 0x20;
        memory[0x40:0x60] = temp2;
        return keccak256(memory[temp3 + 0x20:temp3 + 0x20 + memory[temp3:temp3 + 0x20]]);
    }
    
    function func_0BEF(var arg0, var arg1) {
        var var0 = arg1;
        var var1 = 0x02;
        var var2 = 0x00;
        var var3 = 0x0c01;
        var var4 = var0;
        var var5 = storage[var1];
        var3 = func_0EE3(var4, var5);
        storage[var1] = var3;
        var temp0 = arg0 & 0xffffffffffffffffffffffffffffffffffffffff;
        memory[0x00:0x20] = temp0;
        memory[0x20:0x40] = 0x03;
        var temp1 = keccak256(memory[0x00:0x40]);
        var temp2 = arg1;
        storage[temp1] = temp2 + storage[temp1];
        var temp3 = memory[0x40:0x60];
        memory[temp3:temp3 + 0x20] = temp2;
        var temp4 = memory[0x40:0x60];
        log(memory[temp4:temp4 + (temp3 + 0x20) - temp4], [0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef, 0x00, stack[-6] & 0xffffffffffffffffffffffffffffffffffffffff]);
    }
    
    function func_0C67(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
        var var1 = 0x20;
        var temp0 = arg1;
        memory[temp0:temp0 + 0x20] = var1;
        var temp1 = memory[arg0:arg0 + 0x20];
        var var2 = temp1;
        memory[temp0 + var1:temp0 + var1 + 0x20] = var2;
        var var3 = 0x00;
    
        if (var3 >= var2) {
        label_0C94:
        
            if (var3 <= var2) { return (var2 + 0x1f & 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0) + arg1 + 0x40; }
        
            var temp2 = var2;
            var temp3 = arg1;
            memory[temp3 + temp2 + 0x40:temp3 + temp2 + 0x40 + 0x20] = 0x00;
            return (temp2 + 0x1f & 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0) + temp3 + 0x40;
        } else {
        label_0C81:
            var temp4 = var3;
            var temp5 = var1;
            memory[temp4 + arg1 + 0x40:temp4 + arg1 + 0x40 + 0x20] = memory[temp5 + temp4 + arg0:temp5 + temp4 + arg0 + 0x20];
            var3 = temp5 + temp4;
        
            if (var3 >= var2) { goto label_0C94; }
            else { goto label_0C81; }
        }
    }
    
    function func_0CDA(var arg0) returns (var r0) {
        var temp0 = msg.data[arg0:arg0 + 0x20];
        var var0 = temp0;
    
        if (var0 == var0 & 0xffffffffffffffffffffffffffffffffffffffff) { return var0; }
        else { revert(memory[0x00:0x00]); }
    }
    
    function func_0D03(var arg0, var arg1) returns (var r0, var arg0) {
        var var0 = 0x00;
        var var1 = var0;
    
        if (arg0 - arg1 i< 0x40) { revert(memory[0x00:0x00]); }
    
        var var2 = 0x0d1f;
        var var3 = arg1;
        var2 = func_0CDA(var3);
        r0 = var2;
        arg0 = msg.data[arg1 + 0x20:arg1 + 0x20 + 0x20];
        return r0, arg0;
    }
    
    function func_0D2D(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
    
        if (arg0 - arg1 i< 0x20) { revert(memory[0x00:0x00]); }
    
        var var1 = 0x0d48;
        var var2 = arg1;
        return func_0CDA(var2);
    }
    
    function func_0D4F(var arg0, var arg1) returns (var r0, var arg0, var arg1) {
        var var0 = 0x00;
        var var1 = var0;
        var var2 = 0x00;
    
        if (arg0 - arg1 i< 0x60) { revert(memory[0x00:0x00]); }
    
        var var3 = 0x0d6d;
        var var4 = arg1;
        var3 = func_0CDA(var4);
        var0 = var3;
        var3 = 0x0d7b;
        var4 = arg1 + 0x20;
        var3 = func_0CDA(var4);
        arg1 = msg.data[arg1 + 0x40:arg1 + 0x40 + 0x20];
        arg0 = var3;
        r0 = var0;
        return r0, arg0, arg1;
    }
    
    function func_0D8B(var arg0, var arg1) returns (var r0, var arg0, var arg1, var r3, var r4, var r5, var r6) {
        r3 = 0x00;
        r4 = r3;
        r5 = 0x00;
        r6 = r5;
        var var4 = 0x00;
        var var5 = var4;
        var var6 = 0x00;
    
        if (arg0 - arg1 i< 0xe0) { revert(memory[0x00:0x00]); }
    
        var var7 = 0x0daf;
        var var8 = arg1;
        var7 = func_0CDA(var8);
        r3 = var7;
        var7 = 0x0dbd;
        var8 = arg1 + 0x20;
        var7 = func_0CDA(var8);
        r4 = var7;
        var temp0 = arg1;
        r5 = msg.data[temp0 + 0x40:temp0 + 0x40 + 0x20];
        r6 = msg.data[temp0 + 0x60:temp0 + 0x60 + 0x20];
        var temp1 = msg.data[temp0 + 0x80:temp0 + 0x80 + 0x20];
        var7 = temp1;
    
        if (var7 != var7 & 0xff) { revert(memory[0x00:0x00]); }
    
        r0 = r3;
        arg0 = r4;
        var temp2 = arg1;
        arg1 = r5;
        r3 = r6;
        r4 = var7;
        r5 = msg.data[temp2 + 0xa0:temp2 + 0xa0 + 0x20];
        r6 = msg.data[temp2 + 0xc0:temp2 + 0xc0 + 0x20];
        return r0, arg0, arg1, r3, r4, r5, r6;
    }
    
    function func_0DFE(var arg0, var arg1) returns (var r0, var arg0) {
        var var0 = 0x00;
        var var1 = var0;
    
        if (arg0 - arg1 i< 0x40) { revert(memory[0x00:0x00]); }
    
        var var2 = 0x0e1a;
        var var3 = arg1;
        var2 = func_0CDA(var3);
        var0 = var2;
        var2 = 0x0e28;
        var3 = arg1 + 0x20;
        var2 = func_0CDA(var3);
        arg0 = var2;
        r0 = var0;
        return r0, arg0;
    }
    
    function func_0E31(var arg0) returns (var r0) {
        var temp0 = arg0;
        var var0 = temp0 >> 0x01;
        var var1 = temp0 & 0x01;
    
        if (!var1) {
            var temp1 = var0 & 0x7f;
            var0 = temp1;
        
            if (var1 - (var0 < 0x20)) { goto label_0E7E; }
            else { goto label_0E50; }
        } else if (var1 - (var0 < 0x20)) {
        label_0E7E:
            return var0;
        } else {
        label_0E50:
            memory[0x00:0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
            memory[0x04:0x24] = 0x22;
            revert(memory[0x00:0x24]);
        }
    }
    
    function func_0EB3(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
    
        if (arg1 >= arg0) { return arg1 - arg0; }
    
        var var1 = 0x0ec5;
        memory[0x00:0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
        memory[0x04:0x24] = 0x11;
        revert(memory[0x00:0x24]);
    }
    
    function func_0ECA(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
    
        if (arg0 - arg1 i>= 0x20) { return memory[arg1:arg1 + 0x20]; }
        else { revert(memory[0x00:0x00]); }
    }
    
    function func_0EE3(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
    
        if (arg1 <= ~arg0) { return arg1 + arg0; }
    
        var var1 = 0x0ef6;
        memory[0x00:0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
        memory[0x04:0x24] = 0x11;
        revert(memory[0x00:0x24]);
    }
    
    function func_0EFB(var arg0, var arg1) returns (var r0) {
        var var0 = 0x00;
        var var1 = var0;
        var temp0 = storage[arg0];
        var var2 = temp0;
        var var4 = 0x01;
        var var3 = var2 >> var4;
        var var5 = var2 & var4;
    
        if (var5) {
            var var6 = 0x20;
        
            if (var5 - (var3 < var6)) {
            label_0F4F:
                var var7 = var5;
            
                if (!var7) {
                    var temp1 = arg1;
                    memory[temp1:temp1 + 0x20] = var2 & 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00;
                    var temp2 = var3;
                    var1 = temp1 + temp2 * !!temp2;
                
                label_0FC3:
                    return var1;
                } else if (var7 == 0x01) {
                    memory[0x00:0x20] = arg0;
                    var var8 = keccak256(memory[0x00:0x20]);
                    var var9 = 0x00;
                
                    if (var9 >= var3) {
                    label_0FBB:
                        return arg1 + var3;
                    } else {
                    label_0FAB:
                        var temp3 = var8;
                        var temp4 = var9;
                        memory[temp4 + arg1:temp4 + arg1 + 0x20] = storage[temp3];
                        var8 = var4 + temp3;
                        var9 = var6 + temp4;
                    
                        if (var9 >= var3) { goto label_0FBB; }
                        else { goto label_0FAB; }
                    }
                } else { goto label_0FC3; }
            } else {
            label_0F23:
                var temp5 = var1;
                memory[temp5:temp5 + 0x20] = 0x4e487b7100000000000000000000000000000000000000000000000000000000;
                memory[0x04:0x24] = 0x22;
                revert(memory[temp5:temp5 + 0x24]);
            }
        } else {
            var temp6 = var3 & 0x7f;
            var3 = temp6;
            var6 = 0x20;
        
            if (var5 - (var3 < var6)) { goto label_0F4F; }
            else { goto label_0F23; }
        }
    }
}

