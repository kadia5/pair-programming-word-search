const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = letters[0].map((col,index) => letters.map((row) => row[index]).join(''))
    // const arr

     console.log(verticalJoin)
    console.log(horizontalJoin)

    if (letters === [] || word === ""){
       return false;
    }
 
    for (const l of horizontalJoin) {
        if (l.includes(word)) {
           return true;
        } 
    }

   
    for (const l of verticalJoin) {
        if (l.includes(word)) {
           return true; 
        } 
    }
    return false;

}
//find word horizontal and vertically
//true if words found
//false if words isnt
//when its empty?


// const rrrr = wordSearch([
//     ['A', 'I', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'D', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'E', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'T', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'I', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'C', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'A', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'L', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'IDENTICAL')

module.exports = wordSearch