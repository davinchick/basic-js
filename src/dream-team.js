module.exports = function createDreamTeam(array) {
    var secretName = '';
    if(Array.isArray(array)){
        for(var i=0; i<array.length; i++){
            if(typeof array[i] === "string"){
                secretName+= array[i].replace(/\s+/g,'').charAt(0);}
        }
        return secretName.toUpperCase().split('').sort().join('');}
    return false;
};
