"use strict";

let test = 0;

const testPromise = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            test++;
            resolve("after " + test + " sec");
        }, 1000);
    }).then((val) => {
        console.log(`then1: ${val}`);
        setTimeout(() => {
            // test++;
            // resolve(test);
            testPromise();
        }, 1000);
    });
    //     .then((val) => {
    //     console.log(`then2: ${val}`);
    // });
}