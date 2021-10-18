function cachingDecoratorNew(func) {
  
  let cash = [];

  function wrapper(...args) {

    let hash = args.join(",");
    let indx = cash.findIndex(item => item.hash === hash);  
    if (indx !== -1) {

      console.log("Из кэша: " + cash[indx].value); 
      return "Из кэша: " + cash[indx].value;

    } else {

      let result = func(...args);
      cash.push({hash: hash, value: result});

      if (cash.length > 5) { 
        
        cash.shift();

      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
   }

  };

  return wrapper;

}


function debounceDecoratorNew(func, ms) {  
  
  let flag = false;

  return function(...args) {

      if (flag) return;

      func.apply(this, args);

      flag = true;

      setTimeout(() => flag = false, ms);
  };

}; 



function debounceDecorator2(func) {
  // Ваш код
}
