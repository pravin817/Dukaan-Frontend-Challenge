import {
  HiOutlineViewGrid,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";

import { HiHome } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
export const data = [
  {
    key: "home",
    label: "Home",
    path: "/",
    icon: <HiHome />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "delivery",
    label: "Delivery",
    path: "/delivery",
    icon: <TbTruckDelivery />,
  },
  {
    key: "marketing",
    label: "Marketing",
    path: "/marketing",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "analytics",
    label: "Analytics",
    path: "/analytics",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "payouts",
    label: "Payouts",
    path: "/payouts",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "discounts",
    label: "Discounts",
    path: "/discounts",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "audience",
    label: "Audience",
    path: "/audience",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "appearance",
    label: "Appearance",
    path: "/appearance",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "plugins",
    label: "Plugins",
    path: "/plugins",
    icon: <HiOutlineViewGrid />,
  },
];

export const data2 = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
