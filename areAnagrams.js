// Author: Mario Galan Soto

/*
 * Check if two words are anagrams.
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @returns {boolean} True if the words are anagrams, false otherwise. 
*/

function areAnagrams(word1,word2){

    // Check if the lengths of the word are different; If so, they cannot be anagrams
    if (word1.length !== word2.length) {
        return false;
    }

    //Convert the words to lowercase to make the comparison case-insentitive
    word1= word1.toLowerCase();
    word2= word2.toLowerCase();
    
    //Convert words to arrays of characters, sort them, and join them back into strings
    const sortedWord1= word1.split('').sort().join('');
    const sortedWord2= word2.split('').sort().join('');

    //Compare the sorted string; If they are equal, the words are anagrams
    return sortedWord1 === sortedWord2;
}

// Export the function
module.exports = { areAnagrams };