

// for ( var i = 1; i <= 1000; i++){
//     console.log(i % 2 === 0 ? i : '');
// }

// for ( var i = 0; i <= 1000; i+=2){
//     console.log(i);
// }

// function arrayFunc(arr){
// for ( var i = 0; i < arr.length; i++)
//      console.log(arr[i]*2);
// }

// arrayFunc([1,2,4,5,6,7,8,9,10]);



// function arrayFunc(arr, x){
// localArr = [];
// for ( var i = 0; i < arr.length; i++){
//     if (arr [i] % 2 === 1){
//       localArr.push (arr [i]);
//       x(i)
//     }
// }
// return localArr;
// }


// var array = [11,20,31,40,51,60,71,80,91,10];
// console.log(arrayFunc(array, function arrayDouble(x){
//     console.log(`Нечетоное число номер ${x}`);
// }

// var array = [11,20,31,40,51,60,71,80,91,10];
// var i =0;
// while(Math.random() * 10 < 0){

//     console.log();
// }

var project = {
    name: '',
    salary: '1200$',
    technology: ['CSS3', 'HTML', 'MYSQL']
}

for (let key in project){
    if (Array.isArray(project[key]) == true) {      
    console.log(Array.isArray(project[key]));
        for (var i = 0; i < project[key].length; i++){
            console.log(project[key][i]);
        }

    }
}