// const taskOne = (callback)=>{
//     console.log('task1');
//     callback();
// }

// const taskTwo = (callback)=>{
//    setTimeout(()=>{
//     console.log('task2, Data Loding');
//     callback();
//    }, 2000)
  
// }

// const taskThree = (callback)=>{
//     console.log('tas3');
//     callback();
// }

// const taskFour = (callback)=>{
//     console.log('tas4');
//     callback();
// }

// const taskFive = ()=>{
//     console.log('task5');
// }

// taskOne(()=>{
//     taskTwo(()=>{
//         taskThree(()=>{
//             taskFour(()=>{
//                 taskFive();
//             });
//         });
//     });
// });


const promise1 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve('completed promise 1');
    },2000)
});

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('completed promise 2');
    },1000)
});

Promise.race([promise1, promise2]).then((res)=>console.log(res))