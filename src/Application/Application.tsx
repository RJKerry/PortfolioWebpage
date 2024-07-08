import './Application.css';
import TitleButton from './TitleButton/TitleButton';

const Application =()=> {

    return (
        <div className="PageContainer">
            <TitleButton />
            <NavBar />
        </div>
    );
}

const NavBar=()=>{
    return(
        <div>

        </div>
    );
}

export default Application;