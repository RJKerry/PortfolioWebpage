import { createContext, useState } from 'react';
import './Application.css';
// import TitleButton from './Components/TitleButton/TitleButton';
// import Header from './Components/Header/Header';
import TextImageSandwich from './Components/TextImageSandwich/TextImageSandwich';

export const InitContext = createContext({appInitialized: false, setAppInitialized: (value: boolean) => {}});

const Application =()=> {
    const [appInitialized, setAppInitialized] = useState(false);

    return (
        <div className="ApplicationContainer">
            <InitContext.Provider value={{appInitialized, setAppInitialized}}>
                <TextImageSandwich text="Text Image Sandwich"/>
                {/* { appInitialized ? <Header /> : <TitleButton /> } */}
            </InitContext.Provider>
        </div>
    );
}

export default Application;