function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log(`Current Count: ${count}`);
        },
        decrement: function () {
            if (count > 0) count--;
            console.log(`Current Count: ${count}`);
        },
        getCount: function () {
            return count;
        },
    };
}

const counter = createCounter();
counter.increment(); 
counter.increment();
counter.decrement();
console.log(`Final Count: ${counter.getCount()}`);

// Output
// Current Count: 1
// Current Count: 2
// Current Count: 1
// Final Count: 1