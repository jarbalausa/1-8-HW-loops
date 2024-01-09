//Exercises: Level 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//   Iterate 0 to 10 using for loop, do the same using while and do while loop

  // for(let p = 0; p <= 10 ; p++){
  //   console.log(p)
  // }
  let p =0;
  do{
    console.log(p)
    p++
  }while(p <= 10);

//   Iterate 10 to 0 using for loop, do the same using while and do while loop

  // for( let t = 10 ; t >= 0; t--){
  //   console.log(t)
  // }

  let t = 10;
  do{
    console.log(t);
    t--
  }while(t >= 0);


//   Iterate 0 to n using for loop
let n = 4
  for(let c = 0 ; c <= n ; c++){
    console.log(c)
  }
//   Write a loop that makes the following pattern using console.log():
  for(let g = 1 ; g <= 7; g++ ){
    let pattern = ''
    for(let k = 1;  k <= g; k++){
    pattern += '# '
    }
    console.log(pattern)
  }

  // let g = 1;
  
  // do{
  //   let k = 1;
  //   let pattern = '';
    
  //   do{
  //     pattern += '#';
  //     k++
  //   }while(k <= g)

  //   console.log(pattern);
  //   g++
  // }while(g <= 7)
//       #
//       ##
//       ###
//       ####
//       #####
//       ######
//       #######


//   Use loop to print the following pattern:
  
//   0 x 0 = 0
//   1 x 1 = 1
//   2 x 2 = 4
//   3 x 3 = 9
//   4 x 4 = 16
//   5 x 5 = 25
//   6 x 6 = 36
//   7 x 7 = 49
//   8 x 8 = 64
//   9 x 9 = 81
//   10 x 10 = 100
for(let num1 = 0; num1 <= 10; num1++){
    let num3 =  num1 * num1;
    console.log(`${num1} * ${num1} = ${num3} `)
} 

// let num1 = 0;
// do{   
//   let num3 = 1 ;
//   num1++;
//   do{
//     num3 *= num1 ;
//     num1++;
//   }while(num1 <= 10)
//   console.log(`${num1 - 1} * ${num1 - 1} = ${num3}`)
// }while(num1 >= 10)

//   Using loop print the following pattern
  
//    i    i^2   i^3
//    0    0     0
//    1    1     1
//    2    4     8
//    3    9     27
//    4    16    64
//    5    25    125
//    6    36    216
//    7    49    343
//    8    64    512
//    9    81    729
//    10   100   1000
console.log(`i   i*2   i*3`)
for(let j = 0; j <= 10; j++){
    let square = j * j;
    let cube = Math.pow(j,3);
    console.log(`${j}  ${square}  ${cube}`);
}


//   Use for loop to iterate from 0 to 100 and print only even numbers

for(let z = 0; z <= 100; z += 2){
   
    console.log(`${z}`);
}

//   Use for loop to iterate from 0 to 100 and print only odd numbers
for(let y = 1; y <= 100; y += 2){
    console.log(y)
}
  
//   Use for loop to iterate from 0 to 100 and print only prime numbers
for(let num3 = 0; num3 <= 100; num3++){
    let isPrime = true;

    for(let num4 = 0; num4 <= num3; num4++){
        if(num3 % num4 === 0 ){
        isPrime = false;
        break
        }
    }
    if(isPrime){
        console.log(num3)
    }
}
  
//   Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum5 = 0;
for(let num5 = 0; num5 <= 100; num5 += 2){
    sum5 += num5;
}
console.log(sum5)
  
//   The sum of all numbers from 0 to 100 is 5050.
const nu = 100;
let sumOfAllNumbers = (nu * (nu + 1)) / 2
console.log(sumOfAllNumbers)

  