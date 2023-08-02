function isAnagram(string1, string2) {
    const sortedString1 = string1.split('').sort().join('');
    const sortedString2 = string2.split('').sort().join('');
    return sortedString1 === sortedString2;
}
function isAnagramInArray(word, anagrams) {
    const arr = [];
    for(let i =0;i<anagrams.length;i++)
    {
        if (isAnagram(word.replace(/\s/g, '').toLowerCase(), anagrams[i].replace(/\s/g, '').toLowerCase())) {
            arr.push(anagrams[i]);
        }
    }
   return arr;
}
const anagrams =["tater", "tree", "teart", "tetra", "heart", "hamster"]
const word = "treat";
const arr = isAnagramInArray(word.replace(/\s/g, '').toLowerCase(), anagrams);
console.log(arr);
