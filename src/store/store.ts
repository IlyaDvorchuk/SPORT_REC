import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from "./reducers/UserSlice";
import postService from "../services/simpleService";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    user: userSlice,
    [postService.reducerPath]: postService.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ['persist/PERSIST'],
                },
            })
                .concat(postService.middleware)
    });
}

const persistor = persistStore(setupStore());

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export { setupStore, persistor };
