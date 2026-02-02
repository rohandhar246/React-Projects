
import {useState} from 'react'


function App() {

  const [color, setColor] = useState('bg-gray-500')

   


  return (
    <section className={`h-screen screenlg ${color}`}>
      <div>
        <div className=' bg-amber-100 mylg'>
        <button className='btnst bg-red-500   '  onClick={() => setColor('bg-red-500')} >Red</button>
        <button className='btnst bg-green-500 '  onClick={() => setColor('bg-green-500')} >Green</button>
        <button className='btnst bg-blue-500 '   onClick={() => setColor('bg-blue-500')} >Blue</button>
        <button className='btnst bg-yellow-500 ' onClick={() => setColor('bg-yellow-500')} >Yellow</button>
        <button className='btnst bg-orange-500 ' onClick={() => setColor('bg-orange-500')} >Orange</button>
        <button className='btnst bg-purple-500 ' onClick={() => setColor('bg-purple-500')} >Purple</button>   
      </div>
      </div>
    </section>
  )
}

export default App
