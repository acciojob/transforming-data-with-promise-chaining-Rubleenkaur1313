document.getElementById('btn').addEventListener('click', function() {
    const inputNumber = parseFloat(document.getElementById('ip').value);
    const outputDiv = document.getElementById('output');

    // Clear previous output
    outputDiv.textContent = '';

    // Start the promise chain
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.textContent = `Result: ${inputNumber}`;
            resolve(inputNumber);
        }, 2000);
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const multiplied = result * 2;
                outputDiv.textContent = `Result: ${multiplied}`;
                resolve(multiplied);
            }, 2000);
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const subtracted = result - 3;
                outputDiv.textContent = `Result: ${subtracted}`;
                resolve(subtracted);
            }, 1000);
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const divided = result / 2;
                outputDiv.textContent = `Result: ${divided}`;
                resolve(divided);
            }, 1000);
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const finalResult = result + 10;
                outputDiv.textContent = `Final Result: ${finalResult}`;
                resolve(finalResult);
            }, 1000);
        });
    })
    .catch((error) => {
        outputDiv.textContent = `Error: ${error.message}`;
    });
});
