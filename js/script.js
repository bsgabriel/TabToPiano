const keysArray = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const keyIndex = searchKeyIndex('G');
const fretNumber = 6;
const capoFret = 0;

// Looks for the key's index inside the array
function searchKeyIndex(key)
{
  let keyIndex = -1;
  for (let i = 0; i < keysArray.length; i++)
  {
    if(keysArray[i] == key)
    {
      keyIndex = i;
      return keyIndex;
    }
  }
  return keyIndex;
}

// "Translate" the guitar/bass note to a piano note
function translateKey (keyIndex, fretNumber, capoFret)
{
  let numberToIncrease = keyIndex + fretNumber + capoFret; // Number of how many semitones need to increase
  let newKeyIndex = 0; // Translated note's index
  
  for (let i = 0; i < numberToIncrease; i++)
  {
    
    newKeyIndex += 1;

    // If the new index exceeds the array length, then it return to the first note
    if(newKeyIndex > 11)
    {
      newKeyIndex = 0;
    }
  }
  return "Key in piano: " + keysArray[newKeyIndex];
}
