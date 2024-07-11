import {RouteProps} from "react-router-dom";
import Main from "../../pages/main/MainAsync";
import Struggle from "../../pages/struggle/Struggle";
import Ratings from "../../pages/ratings/Ratings";
import Сompetitions from "../../pages/competitions/Сompetitions";
import Organizations from "../../pages/organizations/Organizations";
import Register from "../../pages/register/RegisterAsync";

export type AppRoutesProps = RouteProps & {
    isAuth?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    STRUGGLE = 'struggle',
    RATINGS = 'ratings',
    COMPETITIONS = 'competitions',
    ORGANIZATIONS = 'organizations',
    REGISTER = 'register',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/sport-rec/',
    [AppRoutes.STRUGGLE]: '/sport-rec/struggle',
    [AppRoutes.RATINGS]: '/sport-rec/ratings/',
    [AppRoutes.COMPETITIONS]: '/sport-rec/competitions',
    [AppRoutes.ORGANIZATIONS]: '/sport-rec/organizations/',
    [AppRoutes.REGISTER]: '/sport-rec/register'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Main />,
    },
    [AppRoutes.STRUGGLE]: {
        path: RoutePath.struggle,
        element: <Struggle />,
    },
    [AppRoutes.RATINGS]: {
        path: RoutePath.ratings,
        element: <Ratings />,
    },
    [AppRoutes.COMPETITIONS]: {
        path: RoutePath.competitions,
        element: <Сompetitions />,
    },
    [AppRoutes.ORGANIZATIONS]: {
        path: RoutePath.organizations,
        element: <Organizations />,
    },
    [AppRoutes.REGISTER]: {
        path: RoutePath.register,
        element: <Register />,
    },
}

