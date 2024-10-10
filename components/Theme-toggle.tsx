// import { Button } from "./ui/button";
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
// import { useTheme } from "next-themes";

// export default function ThemeToggle = () => {
//   const { theme, setTheme } = useTheme();
//   return (<div>
//       <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//       <SunIcon  />
      
      
      
//       </Button>
// </div>


//   )
// }
// "use client"; // Required for client-side rendering,

// import * as React from "react";
// import { useTheme } from "next-themes";
// import { Moon, Sun } from "lucide-react"; // Icons for dark/light mode
// import { Button } from "@/components/ui/button"; // Assuming you have a custom Button component

// // ThemeToggle Component
// const ThemeToggle: React.FC = () => {
//   const { theme, setTheme, systemTheme } = useTheme(); // Destructure the theme functions

//   // Determine the current active theme (either system, light, or dark)
//   const currentTheme = theme === "system" ? systemTheme : theme;

//   return (
//     <Button
//       variant="outline"
//       size="icon"
//       onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")} // Toggle theme
//     >
//       {/* Conditionally render the Sun or Moon icon based on the theme */}
//       {currentTheme === "dark" ? (
//         <Sun className="w-4 h-4" />
//       ) : (
//         <Moon className="w-4 h-4" />
//       )}
//     </Button>
//   );
// };

// export default ThemeToggle;
'use client'
import { Button } from "./ui/button"
import { MoonIcon,SunIcon } from "@radix-ui/react-icons"
// import { icon } from "lucide-react"
import {useTheme} from 'next-themes'
const ThemeToggle=()=>{
const {theme,setTheme}=useTheme();
return <div>
  <Button variant='outline' 
    size='icon'
  onClick={()=>setTheme(theme ==='dark' ? 'light': 'dark') }>
    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all
    dark:-rotate-90 dark:scale-0"/>
    <MoonIcon className="absolute has-[1.2rem] w-[1.2rem] rotate-90 scale-0
    transition-all dark:-rotate-0 dark:scale-100"/>
  </Button>
</div>
}
export default ThemeToggle