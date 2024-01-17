import Image from 'next/image'
import MainMenu from './mainMenu'

export default function Home() {
  return (
    <div className='grid grid-cols-2 place-content-around w-screen h-screen'>
      <div className='flex flex-col place-content-around' >
      <div className='text-center text-2xl'><span>The Beatles<br/>Guitars</span></div>
      </div>
      <div>
        <MainMenu />
      </div>
    </div>
  )
}
