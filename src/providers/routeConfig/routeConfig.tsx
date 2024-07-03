import {RouteProps} from "react-router-dom";
import Main from "../../pages/main/Main";
import Struggle from "../../pages/struggle/Struggle";
import Ratings from "../../pages/ratings/Ratings";
import Сompetitions from "../../pages/competitions/Сompetitions";
import Organizations from "../../pages/organizations/Organizations";

export type AppRoutesProps = RouteProps & {
    isAuth?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    STRUGGLE = 'struggle',
    RATINGS = 'ratings',
    COMPETITIONS = 'competitions',
    ORGANIZATIONS = 'organizations'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.STRUGGLE]: '/struggle',
    [AppRoutes.RATINGS]: '/ratings/',
    [AppRoutes.COMPETITIONS]: '/competitions.svg',
    [AppRoutes.ORGANIZATIONS]: '/organizations.svg/',
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
}

