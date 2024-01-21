import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => (
  <li className='profileCard-layout flex justify-between pt-3 '>
    <p className='font-semibold'>유저이름</p>
    <div className='w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden bg-secondary'>
    </div>
  </li>
)

const App2 = () =>{
  const datas = ['유저이름', '이름(별명)','하는 일','성별','연령','회사','자격']
  const dataList = datas.map((item,i)=> {
    return (
      <li className='profileCard-layout flex justify-between pt-3 ' key={i}>
      <p className='font-semibold'>{item}</p>
    </li>
    )
  })
  return (
    {dataList}
  )
}

export default App
