const keysArray = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']; // Array with all the notes
const btnTranslate = document.querySelector('.btnTranslate');
btnTranslate.addEventListener('click', handleButton);

function handleButton()
{
  const selectedKey = document.querySelector('input[name="note"]:checked').value;   // Key selected in the radios
  const keyIndex = searchKeyIndex(selectedKey);                                     // Index of the selected key (based of the vector)
  const fretNumber = +document.getElementById('fretNumber').value;                  // Number of the note's fret (ex: E-----5----)
  const capoFret = +document.getElementById('capoFret').value;                      // Number of capo's fret
  const newKey = translateKey(keyIndex, fretNumber, capoFret);                      // The 'traslated' key
  const newKeySpan = document.querySelector('.newKeySpan');                         // HTML element where is displayed the newKey
  newKeySpan.textContent = newKey;
}

// Looks for the key's index inside the array
function searchKeyIndex(key)
{
  let keyIndex = 0;
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
  return keysArray[newKeyIndex];
}

const capoRadio = document.querySelectorAll('.checkCapo input[type="radio"]'); // Element that checks if capo is enabled

capoRadio.forEach((radio) => {
  radio.addEventListener('change', handleCapoRadioChange);
});

function handleCapoRadioChange(target)
{
  document.getElementById('capoFret').toggleAttribute('disabled');  // Turn on/off the capo input
  document.getElementById('capoFret').value = "0";                  // If the there's no capo, the value is 0

}