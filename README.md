# areAnagrams

## Overview:

The areAnagrams project is a JavaScript utility that provides a function for checking whether two words are anagrams. Anagrams are words that have the same characters with the same frequencies, but possibly in a different order. This utility is designed to be flexible, case-insensitive, and easily integrable into other JavaScript projects.

## Usage:

### Instalation:

Make sure you have Node.js installed on your machine

### How to use:

Clone or download the repository

```
git clone https://github.com/MarioGalanSoto/areAnagrams.git
```

Navigate to the project directory

```
cd areAnagrams
```

install dependencies

```
npm install
```

Use the areAnagrams function in your JavaScript code

```
const { areAnagrams } = require('./areAnagrams/areAnagrams.js');

// Example usage:
const result = areAnagrams('listen', 'silent');
console.log(result);  // Output: true
```

## Testing:

To run the tests, execute the following command:

```
npx mocha test.js
```

## Functionality:
The areAnagrams function checks whether two input words are anagrams, returning true if they are and false otherwise. The function is case-insensitive and handles various scenarios, including empty strings and words with different lengths.

## Test Cases:
The project includes a set of test cases to ensure the correctness of the areAnagrams function. These tests cover anagrams, non-anagrams, case-insensitivity, empty strings, and different word lengths.

## License:
This project is licensed under the MIT License - see the LICENSE file for details.