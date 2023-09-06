function asyncAction(callback) {
  // Simulate an asynchronous operation, like fetching data
  setTimeout(function () {
    console.log('Task is done!');
    callback(); // Call the provided callback function
  }, 5000);
}

function onComplete() {
  console.log('Callback function executed. fin');
}

// Call doSomethingAsync and pass onComplete as the callback
asyncAction(onComplete);
