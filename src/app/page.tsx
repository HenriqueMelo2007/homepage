import Image from 'next/image'
import turtle from '@/public/images/turtle.jpg'
import Menu from '@/components/menu'
import TittleP from '@/components/tittle'
import TextP from '@/components/text'
import Buttons from '@/components/buttons'

export default function Home() {
  return (
    <div className="h-3/4 w-3/4 shadow-2xl rounded-3xl flex">
      <div className="relative w-1/2 h-full rounded-tl-3xl rounded-bl-3xl flex items-center">
        <Image className='rounded-tl-3xl rounded-bl-3xl'
          src={turtle}
          layout='fill'
          objectFit='cover'
          alt="turtle image"
          priority
        ></Image>
      </div>
      <div className=" w-1/2 h-full rounded-br-3xl rounded-tr-3xl p-5">
        <Menu></Menu>
        <div className='w-full px-10 pt-20'>
          <TittleP></TittleP>
          <TextP></TextP>
          <Buttons></Buttons>
        </div>
      </div>
    </div>
  )
}
