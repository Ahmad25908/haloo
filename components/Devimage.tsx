// 'use client'
// import Image from 'next/image'
// import React from 'react'
// interface Typeis{
//   imgSrc:string
// }
// function Devimage({imgSrc}:Typeis) {
//   return (
//     <div className='relative'>
//       <Image src={imgSrc} fill priority alt='logo' />     
//       <h1>Devimage</h1>
//     </div>
//   )
// }

// export default Devimage
// 'use client'
// import Image from 'next/image'
// import React from 'react'
// import avatar from '../assets/avatar.png'
// function Devimage() {
//   return(
//     <div className='relative'>
//       <Image src={"/avatar"} fill priority alt='logo' />     
//       <h1>Devimage</h1>
//     </div>
//   )
// }


'use client'; // Ensure this is a client-side component in Next.js

import Image from 'next/image';
import React from 'react';
import avatar from '../assets/avatar.png';  // Assuming you're importing from the "assets" folder

function Devimage() {
  return (
    <div className="relative  w-60 h-25"> {/* Define width and height */}
      <Image
        src={avatar}  // Use the imported image
        alt="logo"
        fill  // Use fill, but container needs width and height
        priority
          // Ensure it covers the container
      />
      
    </div>
  );
}

export default Devimage;
