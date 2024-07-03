import './styles/App.scss'
import Header from "./components/layout/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {ErrorBoundary} from "./providers/ErrorBoundary/ErrorBoundary";

function App() {

  return (
    <BrowserRouter>
        <ErrorBoundary>
            <Header/>
        </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
