console.log('1 -- başlangıç (start)');
setTimeout(() => {
    console.log('Merhaba ben event-loop(2) dan geliyorum ve Async şekilde çalışıyorum!');
},2000)
console.log('2 -- ikinci run edilen yer')
setTimeout(() => {
    console.log('Event-Loop da ilk sırada ben varım!!');
},0)
console.log('3 -- güle güle')

const sum_number = (a,b,callback) => {
      setTimeout( () => {
          callback(a+b)
      },2000)     
}

sum_number(2,5, (callback_item) => {
    console.log(callback_item);
})