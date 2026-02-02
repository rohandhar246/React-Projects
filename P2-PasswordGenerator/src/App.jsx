import { useEffect } from 'react'
import { useState, useCallback } from 'react'


function App() {
  const [lenght, setLenght] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [password, setPassword] = useState('')

  
  const generatePassword = useCallback(() =>{
    let pass =''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numbers) str += '0123456789'
    if(symbols) str += '!@#$%^&*()'

    for(let i = 1; i <= lenght; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [lenght, numbers, symbols, setPassword])

  useEffect(() => {
    generatePassword()
  }, [lenght, numbers, symbols, generatePassword])



  return (
    <div>
      <h1 className='text-4xl text-center font-bold '>Password Generator</h1>
      <div className='h-auto w-full min-w-[150px] max-w-md bg-gray-700 rounded-xl mx-auto p-4 mt-8 text-black'>
        
          <div className='flex mb-2'>
            <input type='text' placeholder='Password Here' value={password} readOnly
              className='w-full px-2 py-2 bg-white rounded-l-2xl outline' />
          <button className='bg-blue-600 px-5 rounded-r-2xl hover:brightness-125 active:brightness-75 text-white' 
              onClick={() => navigator.clipboard.writeText(password)}>Copy</button>   
          </div>
          <div className='flex items-center justify-center max-sm:flex-col text-white'>
            <input type='range' min={6} max={20} value={lenght} onChange={(e) => {setLenght(e.target.value)}}/><label>Size:{lenght}</label>&nbsp;&nbsp;
            <input type='checkbox' defaultChecked={numbers} onChange={(e) => {setNumbers(e.target.checked)}}/>Numbers &nbsp;
            <input type='checkbox' defaultChecked={symbols} onChange={(e) => {setSymbols(e.target.checked)}}/>Symbols
          </div>
          <button className='bg-blue-600 rounded-2xl px-4 py-1 flex mx-auto mt-4 text-white hover:bg-blue-700' onClick={generatePassword}>Refresh</button>

      </div>
    
    </div>
  )
}

export default App
