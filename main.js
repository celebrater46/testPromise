"use strict";

let test = 0;

const oneSec = () => {
    setTimeout(() => {
        test++;
        return test;
    }, 1000);
}

const testPromise = () => {
    new Promise((resolve, reject) => {
        resolve(oneSec()); // undefined
        // setTimeout(() => {
        //     test++;
        //     resolve("after " + test + " sec");
        // }, 1000);
    }).then((val) => {
        console.log(val);
        setTimeout(testPromise, 1000);
    });
    //     .then((val) => {
    //     console.log(`then2: ${val}`);
    // });
}