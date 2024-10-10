// 'use client'
// import React from 'react'
// import CountUp from 'react-CountUp'
// interface typeare{
//   containerStyles:string
//   , icon:string
//   ,endCountNum:string,
//   endCountText:string,
//   badgeText:string


// }
// function Badge({containerStyles, icon,endCountNum,endCountText,badgeText}:typeare) {
//   return (
//     <div className={`badge ${containerStyles}`}>
//       <div className='text-3xl text-primary'>{icon}</div>
//       <div className='flex items-center gap-x-2'>
//         <div className='text-4xl leading-none font-bold text-primary'>
//           <CountUp end={endCountNum} delay={1} duration={4}/>
//           {endCountText}
//         </div>
//         <div className='max-w-[70px] leading-none text-[15px] font-medium text-black'>{badgeText}</div>
//       </div>
    
//     </div>
//   )
// }

// export default Badge


'use client';

import React from 'react';
import CountUp from 'react-countup';
interface Typeare {
  containerStyles: string;
  icon: React.ReactNode; // Adjusted the type for icons
  endCountNum: number; // CountUp expects a number
  endCountText: string;
  badgeText: string;
}

function Badge({ containerStyles, icon, endCountNum, endCountText, badgeText }: Typeare) {
  return (
    <div className={` ${containerStyles}  z-10 w-[200px] h-[45px] bg-white dark:backdrop-blur-[44px] shadow-2xl
 p-4 rounded-[10px] flex items-center gap-x-4 `}>
      <div className="text-2xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-2xl leading-none font-bold  text-primary">
          <span className='text-xl '><CountUp end={endCountNum} delay={1} duration={4} /></span>
          {endCountText} 
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {badgeText}</div>
      </div>
    </div>
  );
}

export default Badge;
