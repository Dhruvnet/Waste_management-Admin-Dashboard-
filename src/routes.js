import React from "react";
import { Icon } from "@chakra-ui/react";
import { MdLocationPin, MdSource, MdQueryStats, MdLock } from "react-icons/md";
import MainDashboard from "views/admin/default";
import ResourcesDashboard from "views/admin/resources";
import statsDashboard from "views/admin/stats";
import SignInCentered from "views/auth/signIn";
import OptimizedDashboard from "views/admin/Optimization";
import {GrOptimize} from "react-icons/gr";

// Determine authentication status based on your application's logic
const isAuthenticated = true; // Set to true if the user is authenticated

// Define your routes array with routes excluding the "Sign In" route if authenticated
const routes = [
  {
    name: "Bin Locations",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdLocationPin} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Resources",
    layout: "/admin",
    path: "/resources",
    icon: <Icon as={MdSource} width='20px' height='20px' color='inherit' />,
    component: ResourcesDashboard,
  },
  {
    name: "Statistics",
    layout: "/admin",
    path: "/stats",
    icon: <Icon as={MdQueryStats} width='20px' height='20px' color='inherit' />,
    component: statsDashboard,
  },
  {
    name: "Optimization",
    layout: "/admin",
    path: "/optimize",
    icon: <Icon as={GrOptimize} width='20px' height='20px' color='inherit' />,
    component: OptimizedDashboard,
  },
  // Exclude the "Sign In" route if user is authenticated
  ...(isAuthenticated
    ? []
    : [
      {
        name: "Sign In",
        layout: "/auth",
        path: "/sign-in",
        icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
        component: SignInCentered,
      },
    ]),
];

export default routes;
