function RepeatHello (callback) {
    const stopInterval = setInterval(callback, 1000);

    setTimeout(() => clearInterval(stopInterval), 5000);
}

RepeatHello (() => console.log("Hello"));
