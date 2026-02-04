import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './Context/ThemeContext'
import Themebtn from './Themebtn'
import Card from './Card'

const App = () => {
  const [defaultTheme, setdefaultTheme] = useState('light')
  const darkMode = () => {
    setdefaultTheme('dark')
  }
  const lightMode = () => {
    setdefaultTheme('light')
  }

  //actual theme change

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(defaultTheme)
  }, [defaultTheme])

  return (
    <ThemeProvider value={{defaultTheme , darkMode , lightMode}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className='w-full'>          
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <Themebtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card />
            </div>
          </div>          
        </div>
    </ThemeProvider>
  )
}

export default App