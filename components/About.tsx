import Devimage from "./Devimage";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Briefcase,
    Calendar,
    University,

} from 'lucide-react';
import { title } from "process";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Ahmad Hassan"
    },
    {
        icon: <PhoneCall size={20} />,
        text: "03244109392"
    },
    {
        icon: <MailIcon size={20} />,
        text: "ahmadhassan0324@gmail.com"
    },
    {
        icon: <Calendar size={20} />,
        text: "Born on 10 May, 2007"
    },
    {
        icon: <GraduationCap size={20} />,
        text: " No graduation  but in Class 11th Prenginer"
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Pakistan"
    },
];
const qualificationData = [
    {
        title: "Education",
        data:[
            {
                Collage:"Civiline Collage ",
                Qualification:'Preenginer',
                Year:'2020-2024'
            },{
                title:'Experience',
                data:[{
                    University:'UMT ',
                    Skills:'Web Developer',
                    title2:"Artificial Intelligence Developer",
                    year:'2023-2024'
                },{  instituet:'PIAIC ',
                    
                    title2:"Artificial Intelligence Developer",
                    year:'2023-2024'
                },
            ]
                
            }
        ]
    }
]
const skillData=[
    {
        title:'Skills',
        data:[
            {
                name:'HTML, Tailwindcss'
            },{
                name:'Fronted Developer'
            },{
                name:'Typescript,React ,ShadcnUI'
            },{
                name:'Backend Developer'
            },{
                name:'Next.Js'
            },
        ]
    }
]
function About() {
  return (
    <div>
      
    </div>
  )
}

export default About
