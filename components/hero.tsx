
// import Image from 'next/image'
// import Link from "next/link"
// import { Button } from "./ui/button"
// import {  Download,Send } from "lucide-react"
// import page from './assets/hero_bg.png'
// import {
//     RiArrowDownSLine,
//     RiBriefcase4Fill,
//     RiTeamFill,
//     RiTodoFill
// } from 'react-icons/ri'
// // //Devimage
// // import Devimage from "./Devimage"
// import Badge from "./Badge"
// import Socials from "./Socials"
// function Hero() {
//   return (
//     <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat
//     bg-bottom bg-cover dark:bg-none">
//        <Image src={page} width={50} height={50} alt="logo" />
//       <div className="container mx-auto">
//         <div className=" flex justify-between gap-x-8">
//           {/* text */}
//           <div className="flex max-w-[600px0 flex-col justify-center mx-auto xl:mx-0
//           text-center xl:text-left">
//             <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
//               <h1 className='h2 mb-4'>Hello,  Here is  Ahmad Hassan  
//                 </h1>
//               <p className="subtitle max-w-[498x] mx-auto xl:mx-0">Brief description with insights into myself, my vacational <br/> journey,
//                 and what I engage in professionally
//               </p>
//               {/* Buttons */}
//           <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
//                 <Link href="/contact">
//               <Button className="gap-x-2">
//                    Contact me <Send size={18}/>
//                </Button>
//                 </Link>
//                 <Button variant={"secondary"} className="gap-x-2 hover:bg-gray-900 hover:text-white ">
//                    Download CV<Download size={18}/>
//                </Button>
//           </div>
//           {/* social */}
//           <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles=' text-foreground
//           text-[22px] hover:text-primary transition-all'     />
//         </div >
//           {/* image */}
//           {/* Badage  */}
        

//            <Badge
//             containerStyles="absolute top-[55%] right-[360px] hidden xl:flex"  // Will show on screens >= 1200px and hide on smaller
//               icon={<RiBriefcase4Fill />}
//               endCountNum={3}
//                endCountText=""
//                badgeText="Years of Experience"
//              />

//             {/* badge2 */}
//              <Badge
//          containerStyles="absolute top-[65%] right-[15px] hidden xl:flex"
//           icon={<RiTodoFill />}
//           endCountNum={6}
//            endCountText="k"
//            badgeText="Finished projects"
//              />
//          {/* Badge3  */}
//          <Badge
//          containerStyles="absolute top-[85%] right-[350px] hidden md:flex lg:hidden xl:flex "
//           icon={<RiTeamFill />}
//           endCountNum={9}
//            endCountText="k"
//            badgeText="Happy Clients"
//              />
//     <section className="hidden xl:flex relative ">
//        <div className='w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
//              <svg width='1180' height='1100 '  viewBox="0 0 509 462" fill="none" xmlns="http://www.w3.org/2000/svg">
//              <path fill="#FE705A" d="M60.2,-47.4C72.6,-32.4,73.6,-7.7,66.3,11.4C58.9,30.6,43.4,44.1,25.5,52.6C7.6,61.1,-12.6,64.6,-28.1,57.5C-43.6,50.4,-54.5,32.6,-60.8,11.9C-67.2,-8.9,-69,-32.7,-58.2,-47.4C-47.3,-62,-23.6,-67.4,0.1,-67.6C23.9,-67.7,47.8,-62.4,60.2,-47.4Z" transform="translate(100 100)" />
//              </svg>
//        </div>
//        <div className='w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
//             <svg  width='459' height='491 ' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//             <path fill="#FE705A" fillOpacity='0.3' d="M57.6,-46.3C71.3,-28.7,76.8,-4.9,72.3,17.1C67.7,39,53,59.3,34.6,65.8C16.2,72.3,-5.8,65.1,-25.2,54.9C-44.6,44.6,-61.3,31.2,-66.3,13.8C-71.3,-3.5,-64.6,-24.8,-51.6,-42.2C-38.6,-59.7,-19.3,-73.2,1.3,-74.2C21.9,-75.2,43.8,-63.8,57.6,-46.3Z" transform="translate(100 100)" />
//             </svg>
//        </div>
//        {/* <Devimage/> */}
//  </section>
//        </div>
//         {/* icon */}
//         <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12
//         animate-bounce">
//           <RiArrowDownSLine className='text-3xl text-primary '/>
//         </div>
 
//       </div>
//     </section>
//   )
// }

// export default Hero





import Image from 'next/image';
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import page from '@/public/about.svg';
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill
} from 'react-icons/ri';
// //Devimage
// import Devimage from "./Devimage";
import Badge from "./Badge";
import Socials from "./Socials";

function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <Image src={page} width={50} height={50} alt="logo" />
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
            <h1 className='h2 mb-4'>Hello, Here is Ahmad Hassan</h1>
            <p className="subtitle max-w-[498px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational <br/> journey, and what I engage in professionally.
            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18}/>
                </Button>
              </Link>
              <Button variant={"secondary"} className="gap-x-2 hover:bg-gray-900 hover:text-white ">
                Download CV<Download size={18}/>
              </Button>
            </div>
            {/* social */}
            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary transition-all' />
          </div>
          {/* image */}
          {/* Badge */}
          <Badge
            containerStyles="absolute top-[55%] right-[360px] hidden xl:flex"
            icon={<RiBriefcase4Fill />}
            endCountNum={3}
            endCountText=""
            badgeText="Years of Experience"
          />
          {/* badge2 */}
          <Badge
            containerStyles="absolute top-[65%] right-[15px] hidden xl:flex"
            icon={<RiTodoFill />}
            endCountNum={6}
            endCountText="k"
            badgeText="Finished projects"
          />
          {/* Badge3 */}
          <Badge
            containerStyles="absolute top-[85%] right-[350px] hidden md:flex lg:hidden xl:flex"
            icon={<RiTeamFill />}
            endCountNum={9}
            endCountText="k"
            badgeText="Happy Clients"
          />
          <section className="hidden xl:flex relative ">
            <div className='w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
              <svg width='1180' height='1100' viewBox="0 0 509 462" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FE705A" d="M60.2,-47.4C72.6,-32.4,73.6,-7.7,66.3,11.4C58.9,30.6,43.4,44.1,25.5,52.6C7.6,61.1,-12.6,64.6,-28.1,57.5C-43.6,50.4,-54.5,32.6,-60.8,11.9C-67.2,-8.9,-69,-32.7,-58.2,-47.4C-47.3,-62,-23.6,-67.4,0.1,-67.6C23.9,-67.7,47.8,-62.4,60.2,-47.4Z" transform="translate(100 100)" />
              </svg>
            </div>
            <div className='w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
              <svg width='459' height='491' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FE705A" fillOpacity='0.3' d="M57.6,-46.3C71.3,-28.7,76.8,-4.9,72.3,17.1C67.7,39,53,59.3,34.6,65.8C16.2,72.3,-5.8,65.1,-25.2,54.9C-44.6,44.6,-61.3,31.2,-66.3,13.8C-71.3,-3.5,-64.6,-24.8,-51.6,-42.2C-38.6,-59.7,-19.3,-73.2,1.3,-74.2C21.9,-75.2,43.8,-63.8,57.6,-46.3Z" transform="translate(100 100)" />
              </svg>
            </div>
            {/* <Devimage/> */}
          </section>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className='text-3xl text-primary '/>
        </div>
      </div>
    </section>
  );
}

export default Hero;









































// {/* <div className="hidden xl:flex relative ">
// {/* <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"> */}
//       {/* </div>  */}

// </div> */}