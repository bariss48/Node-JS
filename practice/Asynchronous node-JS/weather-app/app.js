console.log('hoşgeldin')

setTimeout(() => {
    console.log('this must execute last');
},2000)

setTimeout(() => {
    // this is let's go to NODE-API after immedently goes to Event Loop and waiting Call stack empty
    console.log('this must be 3 th runned why??');
},0)

console.log('güle güle')