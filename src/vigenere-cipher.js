class VigenereCipheringMachine {
    
    constructor(direction = true) {
         this.direction = direction;
  //--------only eng alphabet, only 26 letters
         this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); }

    convertKey(string, key) {
        let pureStringL = string.replace(/[^A-Za-z]/g, '').length;
        if (key.length > pureStringL) {
            key = key.slice(0, pureStringL);
        } else {
            while  (key.length < pureStringL) {
                key += key.slice(0, pureStringL - key.length); }
        }
        return key;
    }
    
    encode(type, string, key) {
        if (!string || !key) {throw Error();}
        
        let trueKey = this.convertKey(string, key);
        let newMsg = [];
        let strL = '';
        let kL = '';
        let indL  = 0;

        for (let i = 0, j = 0; i < string.length; i++) {
            if (string[i].match(/[A-Za-z]/) !== null) {
                strL = string[i].toUpperCase();
                kL = trueKey[j].toUpperCase();
                indL  = (type === 'decrypt') ? (this.abc.indexOf(strL) - this.abc.indexOf(kL))
                                                 : (this.abc.indexOf(strL) + this.abc.indexOf(kL));
                if (indL  < 0) {
                      indL  = 26 - Math.abs(indL );
                }
       //--------------------- as it is performed *modulo 26*
                newMsg.push(this.abc[indL  % 26]);
                j++;
            } else {
                newMsg.push(string[i]);
            }
        }
        if (this.direction === true){
            return newMsg.join('');
        }else { return newMsg.reverse().join('');
             }
    }

    encrypt(string, key) {
        return this.encode('encrypt', string, key);
    }

    decrypt(string, key) {
        return this.encode('decrypt', string, key);
    }
}

module.exports = VigenereCipheringMachine;
