
   //print odd number
   let number = [2, 5, 37, 83, 99, 65, 20, 55, 33, 21, 19, 77];
  
  let odd = number.filter(element=> {
    return element % 2;
  });
  console.log(odd);
  
  //caps title
  
  const text = 'my name is manoj';
  const letter = text.split(' ');
  
  for (let i = 0; i < letter.length; i++) {
    letter[i] = letter[i][0].toUpperCase() + letter[i].substr(1);
  }
  console.log(letter.join(' '))
    
  
  //Sum of array
  let sum=[5,6,7,3,4,8,90,1,34,23,5,6,7];
let total = sum.reduce((pre, accum)=> {
return (pre += accum);
},0);
console.log(total);


//return prime number
( function(){
    for(i=0; i<100; i++){
        if(i%2!==0)
        console.log(i);
    }
})();

//palindrome

let str1 = 'madam';
 const pali = function(str1) {
    let left = 0;
    let right = str1.length - 1;
    if (left < right) {
      if (str1[left] != str1[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  
  console.log(pali(str1));

