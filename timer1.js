// If there's no numbers provided, do nothing
if (process.argv.length !== 0) {
  // Start taking command line arguments at index 2
  for (let j = 2; j < process.argv.length; j++) {
    // Each argument needs to be a number, or else skip it
    if (typeof (process.argv[j] === "number")) {
      // Argument must be greater than or equal to 0, or else skip it
      if (process.argv[j] >= 0) {
        setTimeout(() => {
          process.stdout.write('\x07')
        }, process.argv[j] * 1000);
      }
    }
  }
}




