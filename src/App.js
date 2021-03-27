import {useState} from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState("")

  function handleValue(e) {
    e.preventDefault();

    let hex1Value = document.getElementById('hex1').value;
    let hex2Value = document.getElementById('hex2').value;

    setResult(hexCalculation(hex1Value, hex2Value))
    
  }

  function hexCalculation(a,b){
    let hex_value_of_dec = {
       '0': 0 ,  
       '1': 1 ,
       '2': 2 ,  
       '3': 3 ,
       '4': 4 ,  
       '5': 5 ,
       '6': 6 ,  
       '7': 7 ,
       '8': 8 ,  
       '9': 9 ,
       'a': 10 ,  
       'b': 11 ,
       'c': 12 ,  
       'd': 13 ,
       'e': 14 ,  
       'f': 15 
    }
  
    let dec_value_of_hex = {
      0 : '0' ,  
      1 : '1' ,
      2 : '2' ,  
      3 : '3' ,
      4 : '4' ,  
      5 : '5' ,
      6 : '6' ,  
      7 : '7' ,
      8 : '8' ,  
      9 : '9' ,
      10: 'a'  ,  
      11: 'b'  ,
      12: 'c'  ,  
      13: 'd'  ,
      14: 'e'  ,  
      15: 'f'  
    }

    let result = "";
    let carry = 0, i, j;
    let l1 = a.length, l2 = b.length;
  
    for (i = l1 - 1, j = l2 - 1; i >= 0, j >= 0; i--, j--) {
  
        let sum = hex_value_of_dec[a[i]] + hex_value_of_dec[b[j]] + carry;
  
        let addition_bit = dec_value_of_hex[sum % 16];
  
        result += addition_bit;
  
        carry = Math.floor(sum / 16);
    }

    return result.split("").reverse().join("");
  
  }
  
  
   
  
  return (
    <div className="App">
      <h1>Razor Sharp Consulting</h1>
      <p>
        <input type="text" name="hex1" placeholder="hex number" id="hex1"/>
      </p>
      <p>
        <input type="text" name="hex2" placeholder="hex number" id="hex2"/>
      </p>
      <button onClick={(e) => handleValue(e)}>Add</button>
      { result !== "" && (<h1>{result}</h1>)}
    </div>
  );
}

export default App;
