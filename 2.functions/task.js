// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
  min=arr[0];
  max=arr[0];
  sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
    if (arr[i] > max) {
      max=arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
 }

 avg = +(sum / arr.length).toFixed(2);
  
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum  = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = worker2(arrOfArr[0])


  for (let i = 0; i < arrOfArr.length; i++) {
    
    if(worker2(arrOfArr[i]) > max) {
      max = worker2(arrOfArr[i])
    }
  }
  
  return max
}

// Задание 3
function worker2(arr) {  
  
  let min=arr[0];
  let max=arr[0];
  let abs 

  for (let i = 0; i < arr.length; i++) {
  
  if (arr[i] > max) {
    max=arr[i];
  }

  if (arr[i] < min) {
    min = arr[i];
  }
  
  abs = max - min;
}
  return abs;
}


