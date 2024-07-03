import './styles/App.scss'
import Header from "./components/layout/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {ErrorBoundary} from "./providers/ErrorBoundary/ErrorBoundary";
import {AppRouter} from "./providers/Router/AppRouter";
import {routeConfig} from "./providers/routeConfig/routeConfig";

function App() {

  return (
    <BrowserRouter>
        <ErrorBoundary>
            <AppRouter config={routeConfig}/>
        </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
