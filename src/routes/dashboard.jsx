// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Receipt from "@material-ui/icons/Receipt";
import Account from "@material-ui/icons/PermIdentity";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import NewExercise from "views/NewExercise/NewExercise.jsx";
import EditExercise from "views/EditExercise/EditExercise.jsx";
import NewWorkout from "views/NewWorkout/NewWorkout.jsx";
import EditWorkout from "views/EditWorkout/EditWorkout.jsx";

import SignIn from "views/Login/SignIn/SignIn.jsx";
import SignUp from "views/Login/SignUp/SignUp.jsx";
import Verification from "views/Login/Verification/Verification.jsx";

const dashboardRoutes = [
    {
        path: "/sign_in",
        sidebarName: "Sign In",
        navbarName: "Sign In",
        icon: Account,
        component: SignIn
    },
    {
        path: "/sign_up",
        sidebarName: "Sign Up",
        navbarName: "Sign Up",
        icon: Account,
        component: SignUp
    },
    {
        path: "/verification",
        sidebarName: "Email verification",
        navbarName: "Email verification",
        icon: Account,
        component: Verification
    },
    {
        path: "/dashboard",
        sidebarName: "Dashboard",
        navbarName: "Dashboard",
        icon: Dashboard,
        component: DashboardPage
    },
    {
        path: "/new_exercise",
        sidebarName: "New Exercise",
        navbarName: "New Exercise",
        icon: Receipt,
        component: NewExercise
    },
    {
        path: "/edit_exercise",
        sidebarName: "Edit Exercise",
        navbarName: "Edit Exercise",
        icon: Receipt,
        component: EditExercise
    },
    {
        path: "/new_workout",
        sidebarName: "New Workout",
        navbarName: "New Workout",
        icon: Receipt,
        component: NewWorkout
    },
    {
        path: "/edit_workout",
        sidebarName: "Edit Workout",
        navbarName: "Edit Workout",
        icon: Receipt,
        component: EditWorkout
    },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
