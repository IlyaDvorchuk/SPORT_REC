import './styles/App.scss'
import {BrowserRouter} from "react-router-dom";
import {ErrorBoundary} from "./providers/ErrorBoundary/ErrorBoundary";
import {AppRouter} from "./providers/Router/AppRouter";
import {routeConfig} from "./providers/routeConfig/routeConfig";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { setupStore, persistor } from './store/store';

function App() {

  return (
      <Provider store={setupStore()}>
          <PersistGate persistor={persistor}>
              <BrowserRouter>
                  <ErrorBoundary>
                      <AppRouter config={routeConfig}/>
                  </ErrorBoundary>
              </BrowserRouter>
          </PersistGate>
      </Provider>

  )
}

export default App
