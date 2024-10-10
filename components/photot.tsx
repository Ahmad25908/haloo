
// import Image from 'next/image'

// import mainpagefrom '@/assets/hero_bg.png'
// function Logo() {
//   return (
    
        
//       <Image src={mainpagefrom} width={50} height={50} alt="logo" priority />
    
//   )
// }

// export default Logo
import Image from 'next/image'

function Mainpage() {
  return (
    <Image src="/assets/hero_bg.png" width={50} height={50} alt="logo" priority />
  )
}

export default Mainpage
