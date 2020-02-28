module.exports = function repeater(string, options ) {
    if(typeof string !== 'string'){ string = string+'';}
    let rep = 1, addTime = 1, sep = '+', add = '', addSep = '|';

    if(typeof options.repeatTimes === 'number'){ rep = options.repeatTimes;}
    if(typeof options.separator === 'string'){   sep = options.separator;}
    if(typeof options.addition !== 'undefined' && typeof options.addition !== 'null'){ add = String(options.addition);}
    if(typeof options.additionRepeatTimes === 'number'){ addTime = options.additionRepeatTimes;}
    if(typeof options.additionSeparator === 'string'){   addSep = options.additionSeparator;}

    return (string+((add+ addSep).repeat(addTime-1)+add)+sep).repeat(rep-1)+ string + (add+ addSep).repeat(addTime-1)+add;
};
