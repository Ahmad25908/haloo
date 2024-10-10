// import React,{useState,useEffect} from "react";
// export default function useScrollProgress() {
//     const [comletion, setComletion] = useState(0);



//     useEffect(() => {
//         const updatescrollyCompletion=()=>{
            
        
//     const currentProgress=window.scrollY;
//     const scrollHeiht=document.body.scrollHeight-window.innerHeight;
//     if(scrollHeiht){
//         const scrollPercentage = Number((currentProgress / scrollHeight).toFixed(2)) * 100
//         setComletion(scrollPercentage);
//     }}
//         window.addEventListener("scroll",updatescrollyCompletion);

//         return () => window.removeEventListener("scroll",updatescrollyCompletion);
//         ;
    
//     }, []);
//     return <div>usescroolprogress</div>


// }


import { useState, useEffect } from "react";

// Define the return type for the hook
export default function useScrollProgress(): number {
  // Fixed the spelling of 'completion'
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = (): void => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      // Fixed the calculation of scrollPercentage
      if (scrollHeight) {
        const scrollPercentage = (currentProgress / scrollHeight) * 100;
        setCompletion(Number(scrollPercentage.toFixed(2))); // Ensure it stays a number
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  // Return the completion percentage (number)
  return completion;
}
