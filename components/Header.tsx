'use client'
import React, { useState,useEffect } from "react"
import Logo from "./Logo"
import ThemeToggle from "./Theme-toggle"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { usePathname } from "next/navigation"
const Header=()=>{
  const [header,setHeader]=useState(false)  
  const pathname = usePathname()
  console.log(pathname)
  // useEffect(() => {
  //   const scrollypos=window.addEventListener("scroll",()=>{
  //     window.scrollY >50 ? setHeader(true) : setHeader(false)
  //   })
  //  return ()=>window.EventListener("scroll",scrollypos)
  // })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return<header className={`${header ? 'py-4 bg-white shadow-lg' : 'py-6 bg-transparent'} 
  dark:bg-accent sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5] dark:bg-accent'}`}>

    <div className="container mx-auto">
      <div className="flex justify-between place-items-center" >
        <Logo/>
        <div className="flex items-center gap-x-6">
          {/* nav? */}
          <Nav containerStyles="hidden xl:flex gap-x-8 items-center"
          linkStyles="relative hover:text-primary transition-all" 
          underlineStyle="absolute left-0 top-full h-[2px] bg-primary w-full" />
          
          <ThemeToggle/>
          {/* Mobile Nav menu */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  
  </header>

}
export default Header
                 
































































// 'use client';
// import React from "react"; // You can import useState, useEffect if needed in the future
// // import Logo from "./Logo";
// import ThemeToggle from "./Theme-toggle";
// import Nav from "./Nav";
// import MobileNav from "./MobileNav";

// const Header = () => {
//   return (
//     <header>
//       <div className="container mx-auto">
//         <div className="flex justify-between place-items-center">
//           {/* <Logo /> */}
//           <div className="flex items-center gap-x-6">
//             {/* nav */}
//             <Nav 
//               containerStyles="hidden xl:flex gap-x-8 items-center"
//               linkStyles="relative hover:text-primary transition-all" 
//               underlineStyle="absolute left-0 top-full h-[2px] bg-primary w-full" 
//             />
            
//             <ThemeToggle />
            
//             {/* Mobile Nav menu */}
//             <div className="xl:hidden">
//               <MobileNav />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
