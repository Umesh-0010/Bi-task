import { AiOutlineHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlinePermMedia, MdOutlineNotificationsActive, MdOutlineMenuBook,} from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { LuHistory } from "react-icons/lu";
import { BiSolidMessageAltError } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { GoBook } from "react-icons/go";       
import { PiFolderSimple } from "react-icons/pi"; 
import { TiContacts } from "react-icons/ti";  

export const notice =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, necessitatibus libero, nostrum";

export const images = [
   {
    id: 1,
    name: "Capital of Ashoka ",
    img: "/Images/Lion Capital of Ashoka .png",
  },
  {
    id: 2,
    name: "Sikkim ",
    img: "/Images/govt-of-sikkim-logo-png_seeklogo-615865.png",
  },
 
  {
    id: 3,
    name: "Sunawlo Sikkim",
    img: "/Images/Sunawlo Sikkim.png",
  },
  {
    id: 4,
    name: "Disaster management",
    img: "/Images/Disaster management.png",
  },
  {
    id:5,
    name: "TRIBAL RESEARCH INSTITUTE AND TRAINING CENTRE, ASSAM LINZEY",
    img: "/Images/TRIBAL RESEARCH INSTITUTE AND TRAINING CENTRE, ASSAM LINZEY.png"
  }
];

export const NAV_ITEMS = [
  { 
    label: "Home", 
    icon: <AiOutlineHome />, 
    href: "/" 
  },
  {
    label: "About Us",
    icon: <BsInfoCircle />,
    
    dropdown: [
      { label: "List of Officers", href: "/about/#" },
      { label: "Our Team",         href: "/about/team" },
      { label: "List of Staff",    href: "/about/#" },
      { label: "Partners",         href: "/about/#" },
      { label: "Tribes",           href: "/tribes" },
      { label: "Projects",         href: "/projects" },
      { label: "Contact Us",       href: "/contact" },
    ],
  },
  {
    label: "Safety & Disaster",
    icon: <GoShieldCheck />,
    
    dropdown: [
      { label: "Safety Tips",      href: "/safety-tips" },
      { label: "Disaster History", href: "/disaster-history" },
      { label: "Notifications",    href: "/notifications" },
    ],
  },
  {
    label: "Response",
    icon: <BiSolidMessageAltError />,
  
    dropdown: [
      { label: "Response",  href: "/response" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    label: "Information",
    icon: <GoBook />,
    
    dropdown: [
      { label: "Latest News",    href: "/updates/news" },
      { label: "Announcements",  href: "/updates/announcements" },
      { label: "Blog",           href: "/updates/blog" },
      { label: "Publications",   href: "/publications" },
      { label: "Archive",        href: "/archive" },
    ],
  },
  { 
    label: "Media", 
    icon: <MdOutlinePermMedia />, 
    href: "/media" 
  },
];

export const slides = [
  { id: 1, img: "/Images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.webp" },
  { id: 2, img: "/Images/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" },
  { id: 3, img: "/Images/tiger-2535888_640.jpg" },
  { id: 4, img: "/Images/tiger-wild-winter-nature-amur-tiger-running-snow-action-wildlife-scene-danger-animal-cold-winter-tajga-russ-84783074.webp" },
  { id: 5, img: "/Images/istockphoto-814423752-612x612.jpg" },
];

export const leaders = [
  {
    id: 1,
    name: 'Shri Om Prakash Mathur',
    title: "Hon'ble Governor of Sikkim",
    img: '/Images/om_prakash_mathur_9cdc4530cc.jpg',
  },
  {
    id: 2,
    name: 'Shri Prem Singh Tamang (Golay)',
    title: "Hon'ble Chief Minister of Sikkim",
    img: '/Images/prem(golay).jpg',
  },
  {
    id: 3,
    name: 'Shri Samdup Lepcha',
    title: "Hon'ble Minister",
    img: '/Images/Samdup-Lepcha.jpg',
  },
]
