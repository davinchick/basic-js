const chainMaker = {
  
  chains: [],
  
  getLength() {
    return this.chains.length;
  },
  
  addLink(value) {
    if (value !== undefined) {
        this.chains.push(`( ${value} )`);
    } else{ this.chains.push(`(  )`); 
          }
        return this;
  },
  
  removeLink(position) {
    if (typeof position !== 'number' || position >= this.getLength() || position <= 0) {
            this.chains = [];
            throw Error();
        } else {
            this.chains.splice(position - 1, 1);
            return this;
        }
  },
  reverseChain() {
    this.chains.reverse();
        return this;
  },
  finishChain() {
    let finishHim = this.chains.join('~~');
        this.chains = [];
        return finishHim;
  }
};

module.exports = chainMaker;
