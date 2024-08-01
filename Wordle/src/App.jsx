import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState("")
  const [word, setWord] = useState("");

  let words = [];

  const handleChange = (e) => {
    setValue(e.target.value);
    
    if (value.length <= 5) {
      setWord(e.target.value);
    }
  }

  useEffect(() => {
    const str = word.split("");
    for (let i = 0; i < 5; i++) {
      const node = document.getElementById(`f${words.length}${i + 1}`);
    
      if (node.firstChild) {
        node.removeChild(node.firstChild);
      }

      if (str[i]) {
        const newLetter = document.createTextNode(str[i]);
        node.appendChild(newLetter);
      }
    }
  }, [word])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (value.length == 5) {
      words.push(value);
      console.log(words);
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="obor">
            <div className="box" id="f01"></div>
            <div className="box" id="f02"></div>
            <div className="box" id="f03"></div>
            <div className="box" id="f04"></div>
            <div className="box" id="f05"></div>

            <div className="box" id="f11"></div>
            <div className="box" id="f12"></div>
            <div className="box" id="f13"></div>
            <div className="box" id="f14"></div>
            <div className="box" id="f15"></div>

            <div className="box" id="f21"></div>
            <div className="box" id="f22"></div>
            <div className="box" id="f23"></div>
            <div className="box" id="f24"></div>
            <div className="box" id="f25"></div>

            <div className="box" id="f31"></div>
            <div className="box" id="f32"></div>
            <div className="box" id="f33"></div>
            <div className="box" id="f34"></div>
            <div className="box" id="f35"></div>

            <div className="box" id="f41"></div>
            <div className="box" id="f42"></div>
            <div className="box" id="f43"></div>
            <div className="box" id="f44"></div>
            <div className="box" id="f45"></div>
            
            <div className="box" id="f51"></div>
            <div className="box" id="f52"></div>
            <div className="box" id="f53"></div>
            <div className="box" id="f54"></div>
            <div className="box" id="f55"></div>
        </div>
      </div>

      <form id="keyboard" onSubmit={handleSubmit}>
        <input type="text" maxLength="5" value={value} onChange={handleChange}/>
        <button type="submit"/>
      </form>
    </>
  )
}

export default App
