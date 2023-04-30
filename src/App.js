import React from 'react';
import './App.css';
import axios from 'axios';
import HambergerButton from './components/HambergerButton';

function App() {
    // const [hello, setHello] = useState();
    // useEffect(() => {
        //     axios.get('/api/test')
        //     .then(response => setHello(response.data))
        //     .catch(error => console.log(error))
        // }, []);

        const MenuList = ["About me", "Skill", "Project", "Career"];
        return (
        <div>
            <header>
                <div className='masterHeader'>
                    <div className='headerTitle'>
                        Portfolio
                    </div>
                    <HambergerButton
                        menuList={MenuList}
                    />
                </div>
            </header>
            <div className='haederBackgournd'>
                <div className='headContent'>하잉</div>
            </div>
        </div>
    );
}

export default App;