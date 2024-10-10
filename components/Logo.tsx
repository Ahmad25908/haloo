// import Image from 'next/image'
// import Link from 'next/link'

// function Logo() {
//   return (
//     <Link href="/">
//       <Image src="/fonts/logo.jpg" width={50} height={50} alt="logo" />
//     </Link>
//   )
// }

// export default Logo

import Image from 'next/image'
import Link from 'next/link'
import mainlogo from '@/assets/tiger.jpg'
function Logo() {
  return (
    <Link href="/">
        
      <Image src={mainlogo} width={50} height={50} alt="logo" priority />
    </Link>
  )
}

export default Logo
