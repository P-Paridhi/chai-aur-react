import { use, useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(5)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (charAllowed) {
      str += "!@#$%^&*()_+?><:{}[]"
    }
    if (numberAllowed) {
      str += "0123456789"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [charAllowed, length, numberAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed]) 

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = () => {
    const password = passwordRef.current
    password.select()
    navigator.clipboard.writeText(password.value)
  }

  return (
    <>
      <div className="w-full max-w-4xl mx-auto shadow-md rounded-lg px-4 py-3 my-12 bg-gray-600">
      <h1 className='text-red-300 text-center my-6 text-3xl'>Password Generator</h1>
      <div className="max-w-md mx-auto flex shadow rounded-lg overflow-hidden mb-4 bg-red-200">
    <input
      type="text"
      value={password}
      className="outline-none w-full py-1 px-3 text-pink-500"
      placeholder="Password"
      readOnly
      ref={passwordRef}
    />
        <button
        onClick={copyPasswordToClipboard}
        className='max-w-md mx-autooutline-none bg-pink-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>    
        </div>
        <div className='max-w-md mx-auto flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 text-red-300 caret-pink-500'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 text-red-300">
          <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                  setNumberAllowed((prev) => !prev);
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 text-red-300">
              <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="characterInput"
                  onChange={() => {
                      setCharAllowed((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
