// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';
const test = QUnit.test;

test(compareNumbers, (expect) => {
    //Arrange
    const tooHigh = compareNumbers(15, 10);
    const tooLow = compareNumbers(7, 10);
    const correct = compareNumbers(10, 10);
    // Set up your arguments and expectations
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(tooHigh, 1, 'Too high');
    expect.equal(tooLow, -1, 'Too Low');
    expect.equal(correct, 0, 'Correct');
});
