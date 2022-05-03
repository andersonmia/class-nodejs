let counter = 0;
let func = setInterval(() => {
    console.log("Increment timer");
    counter += 1;

    if (counter >= 5) {
        clearInterval(func)
    }
},1000);

/**it is the same as setTimeout only that
 * it is used when the code is to run multiple times
 * and is used hand in hand with the clearInterval function
 */