import {Suspense} from 'react';
import {AppRoutes, AppRoutesProps} from "../routeConfig/routeConfig";
import {Route, Routes} from "react-router-dom";

interface PropsConfig {
    config: Record<AppRoutes, AppRoutesProps>;
}

export const AppRouter = (props: PropsConfig) => {

    const renderWithWrapper = (route: AppRoutesProps) => {

        const element = (
            <Suspense fallback={<div>Загружается, подождите</div>}>
                {route.element}
            </Suspense>
        )

        const renderElement = (): JSX.Element => {
                return (
                    element
                )
        }

        return (
            <Route
                key={route.path}
                path={route.path}
                element={renderElement()}
            />
        )
    }

    return (
        <Routes>
            {Object.values(props.config).map(renderWithWrapper)}
        </Routes>
    );
};