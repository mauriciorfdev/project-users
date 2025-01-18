import Button from 'react-bootstrap/Button'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';

const LightIcon = () => {
    return (<i className="bi bi-brightness-high"></i>)
}

const MoonIcon = () => {
    return( <i className="bi bi-moon"></i> )
}

const ToggleModeButton = () => {
    const [darkMode, setDarkMode] = useState(true)

    function toggleTheme() {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-bs-theme', darkMode ? 'light' : 'dark');
        setDarkMode(!darkMode)
    }
    
    return (<>
        <Button onClick={toggleTheme}>
            {darkMode ? <LightIcon /> : <MoonIcon />}
        </Button>
    </>)
}


export default ToggleModeButton