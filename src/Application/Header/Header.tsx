import clsx from 'clsx';
import './Header.css';
import { useEffect, useState } from 'react';

const Header =()=> {
    const [active, setActive] = useState(false);
    const [roleActive, setRoleActive] = useState(false);

    useEffect(() => {
        var timer = setTimeout(() => {
            setActive(true);
            setTimeout(() => setRoleActive(true), 500);
        }, 500);
        return () => {
            clearTimeout(timer);
            setActive(false);
        }
    }, []);

    return(
        <div className={clsx('NameHeader', active && 'active')}>
            RJKerry
            <div className={clsx('Role', roleActive && 'active')}>
                Full Stack Developer
            </div>
        </div>
    );
}

export default Header;