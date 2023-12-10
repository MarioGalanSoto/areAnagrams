//import testing library
const {expect}= require("chai");
const {areAnagrams} = require("./areAnagrams");

//Test cases for areAnagrams

describe('areAnagrams', () => {

    it('should return true for anagrams', () => {
      expect(areAnagrams('listen', 'silent')).to.be.true;
      expect(areAnagrams('hello', 'olelh')).to.be.true;
      expect(areAnagrams('earth', 'heart')).to.be.true;
    });

    it('should return false for non-anagrams', () => {
        expect(areAnagrams('hello', 'world')).to.be.false;
        expect(areAnagrams('test', 'best')).to.be.false;
        expect(areAnagrams('abc', 'def')).to.be.false;
    });

    it('should be case-insensitive', () => {
        expect(areAnagrams('Listen', 'Silent')).to.be.true;
        expect(areAnagrams('Hello', 'Olelh')).to.be.true;
        expect(areAnagrams('Earth', 'Heart')).to.be.true;
    });

    it('should handle empty strings', () => {
        expect(areAnagrams('', '')).to.be.true;
        expect(areAnagrams('abc', '')).to.be.false;
        expect(areAnagrams('', 'xyz')).to.be.false;
    });

    it('should handle different word lengths', () => {
        expect(areAnagrams('abc', 'abcd')).to.be.false;
        expect(areAnagrams('abcd', 'abc')).to.be.false;
    });
    
});
