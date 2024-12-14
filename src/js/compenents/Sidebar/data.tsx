import {
  FaHome,
  FaCalendarAlt,
  FaWhatsapp,
  FaFileMedical,
  FaUserFriends,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
 import { BiHomeAlt2 } from "react-icons/bi";
 import { LuCalendarDays } from "react-icons/lu";
import { PiChartLineUpLight } from "react-icons/pi";
export const SidebarData = [
  {
    path: "/",
    title: "Home",
    icon: <BiHomeAlt2 className=" text-[20px] md:text-[30px]" />,
    selectorId: "home",
  },
  {
    path: "/appointments",
    title: "Appointments",
    icon: <LuCalendarDays className=" text-[20px] md:text-[30px]" />,
    selectorId: "appointments",
  },
  {
    path: "/whatsapp-chat",
    title: "WhatsApp Chat",
    icon: <FaWhatsapp className=" text-[20px] md:text-[30px]" />,
    selectorId: "whatsapp-chat",
  },
  {
    path: "/patients-record",
    title: "Patients Record",
    icon: <FaFileMedical className=" text-[20px] md:text-[30px]" />,
    selectorId: "patients-record",
  },
  {
    path: "/manage-staff",
    title: "Manage Staff",
    icon: <FaUserFriends className=" text-[20px] md:text-[30px]" />,
    selectorId: "manage-staff",
  },
  {
    path: "/payments-record",
    title: "Payments Record",
    icon: <FaDollarSign className=" text-[20px] md:text-[30px]" />,
    selectorId: "payments-record",
  },
  {
    path: "/analytics",
    title: "Analytics",
    icon: <PiChartLineUpLight className=" text-[20px] md:text-[30px]" />,
    selectorId: "analytics",
  },
];
