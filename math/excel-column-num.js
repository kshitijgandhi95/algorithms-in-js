// Given a column title as appears in an Excel sheet, return its corresponding column number.

// Example:

//     A -> 1
    
//     B -> 2
    
//     C -> 3
    
//     ...
    
//     Z -> 26
    
//     AA -> 27
    
//     AB -> 28 

module.exports = {
    //param A : string
    //return an integer
    titleToNumber: function (A) {
        let colNum = 0;
        let mulFac = 1;
        let asciiA = "A".charCodeAt(0);

        for (let i = A.length - 1; i >= 0; i--) {
            let asciiNum = A.charCodeAt(i) - asciiA + 1;
            colNum += (asciiNum * mulFac);
            mulFac *= 26;
        }

        return colNum;
    }
};