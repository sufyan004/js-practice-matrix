let matrix1 = [
    [5,2,3],
    [7,2,3],
    [1,0,5],
    ];
    let matrix2=[
        [5,2,3],
        [7,6,3],
        [7,9,8],
    ];

// for loop 
let result=[]
for (let i = 0; i < 3;i++) {
    result[i] = [];

    for (let j = 0; j < 3; j++) {
       
const sum = matrix1[i][j] + matrix2[i][j];
result[i][j] = sum;

      
    }
}
console.log(result);
