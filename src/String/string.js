/* STRING CODES */

// --------------  REVERSE WORD ---------------//
function reverseWords(sentence) {
    let result = '';
    let word = '';
  
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ') {
        result += word + ' ';
        word = '';
      } else {
        word = sentence[i] + word;
      }
    }
    return result + word;
  }
  
  // Example: reverseWords("Hello World") => "olleH dlroW"



  
  //----------- Remove Duplicates from a String ------------//
  function removeDuplicates(str) {
    let result = '';
    let seen = {};
  
    for (let char of str) {
      if (!seen[char]) {
        result += char;
        seen[char] = true;
      }
    }
  
    return result;
  }
  
  // Example: removeDuplicates("programming") => "progamin"





  // ---------------- Find the Most Frequent Character ---------------//
  function mostFrequentChar(str) {
    let count = {};
    let maxChar = '';
    let maxCount = 0;
  
    for (let char of str) {
      count[char] = (count[char] || 0) + 1;
      if (count[char] > maxCount) {
        maxCount = count[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  }
  
  // Example: mostFrequentChar("javascript") => "a"




  
  //----------- Check if Two Strings are Rotations of Each Other -------//
  function isRotation(str1, str2) {
    if (str1.length !== str2.length) return false;
    return (str1 + str1).includes(str2);
  }
  
  // Example: isRotation("abcd", "cdab") => true


  

 // ------------------ Replace All Spaces with %20 (URL Encoding) ------//
 
 function urlEncode(str) {
    let result = '';
  
    for (let char of str) {
      result += char === ' ' ? '%20' : char;
    }
  
    return result;
  }
  
  // Example: urlEncode("Mr John Smith") => "Mr%20John%20Smith"





  // ---------- Longest Common Prefix ------------//

  function longestCommonPrefix(arr) {
    if (!arr.length) return '';
  
    for (let i = 0; i < arr[0].length; i++) {
      let char = arr[0][i];
      for (let j = 1; j < arr.length; j++) {
        if (arr[j][i] !== char) {
          return arr[0].slice(0, i);
        }
      }
    }
  
    return arr[0];
  }
  
  // Example: longestCommonPrefix(["flower", "flow", "flight"]) => "fl"





  //---------- Check if a String has All Unique Characters ------//

  function hasUniqueChars(str) {
    let seen = {};
  
    for (let char of str) {
      if (seen[char]) return false;
      seen[char] = true;
    }
  
    return true;
  }
  
  // Example: hasUniqueChars("hello") => false





  //---------- Rotate String (Right Rotation) by k Characters -------//

  function rotateStringRight(str, k) {
    k = k % str.length;
    return str.slice(-k) + str.slice(0, -k);
  }
  
  // Example: rotateStringRight("abcdef", 2) => "efabcd"






  //------------- Count Words in a Sentence-------//

  function countWords(sentence) {
    let count = 0;
    let inWord = false;
  
    for (let char of sentence) {
      if (char === ' ') {
        inWord = false;
      } else if (!inWord) {
        inWord = true;
        count++;
      }
    }
  
    return count;
  }
  
  // Example: countWords("Hello world!") => 2



  

  // -----------------  Reverse Only Vowels in a String -----//

  function reverseVowels(str) {
    const vowels = "aeiouAEIOU";
    let chars = str.split('');
    let left = 0;
    let right = chars.length - 1;
  
    while (left < right) {
      if (!vowels.includes(chars[left])) {
        left++;
      } else if (!vowels.includes(chars[right])) {
        right--;
      } else {
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
      }
    }
  
    return chars.join('');
  }
  
  // Example: reverseVowels("hello") => "holle"
  
  