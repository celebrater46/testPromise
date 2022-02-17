"use strict";

let test = 0;

const testPromise = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            test++;
            resolve("after " + test + " sec");
        }, 1000);
    }).then((val) => {
        console.log(val);
        setTimeout(testPromise, 1000);
    });
    //     .then((val) => {
    //     console.log(`then2: ${val}`);
    // });
}