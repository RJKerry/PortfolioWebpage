import { createContext, useState } from 'react';
import './Application.css';
import TitleButton from './TitleButton/TitleButton';
import Header from './Header/Header';

export const InitContext = createContext({appInitialized: false, setAppInitialized: (value: boolean) => {}});

const Application =()=> {
    const [appInitialized, setAppInitialized] = useState(false);

    return (
        <div className="PageContainer">
            <InitContext.Provider value={{appInitialized, setAppInitialized}}>
                { appInitialized ? <Header /> : <TitleButton /> }
            </InitContext.Provider>
        </div>
    );
}

export default Application;