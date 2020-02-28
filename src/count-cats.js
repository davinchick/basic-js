module.exports = function countCats(array) {
    var count = 0;
    for (var i=0; i<array.length; i++){
        for(var j=0; j<array[i].length; j++){
            if(array[i][j]==='^^'){
                count++;
            }
        }
    }
    return count;
};
