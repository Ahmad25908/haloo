
import Link from "next/link";  // Import Link from next/link, not lucide-react
import { usePathname } from "next/navigation"; // Correct import for usePathname
import { motion } from "framer-motion"; // Correct import for motion from framer-motion

interface LinkProps {
  path: string;
  name: string;
}

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyle?: string; // Optional underlineStyle
}

const links: LinkProps[] = [
  { path: '/', name: "Home" },
  { path: '/project', name: "My Projects" },
  { path: '/contact', name: "Contact" },
];

function Nav({ containerStyles, linkStyles, underlineStyle }: NavProps) {
  const path = usePathname(); // Get current pathname from Next.js router

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
            {link.name}
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: '0%' }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={`${underlineStyle}`} // Apply underlineStyle if path matches
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;























































// import { Link } from "lucide-react"

// interface NavProps {
//   containerStyles: string;
//   linkStyles: string;
//   underlineStyle?: string; // Assuming 'underli' is an optional prop
// }
// const links=[
//   {path:'/',name:"Home"},
//   {path:'/projects',name:"my project"},
//   {path:'/contact',name:"contact"},
// ]


// function Nav({containerStyles,linkStyles,underlineStyle}:NavProps) {
//   return <nav className={`${containerStyles}`}>
//   {links.map((link,index)=>{
//     return(
//       <Link 
//       href={link.path}
//       key={index}
//       className={`capitalize ${linkStyles}`}    
//       > {link.name}
//       </Link>
//     )
//   })}
//   </nav>
// }

// export default Nav
// 'use client'
// 


