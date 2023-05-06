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
                <div className='haederBackgournd'>
                <div className='headContent'> 
                    안녕하세요 <br/> 박환용 입니다.
                    <hr className='separate'/>
                    <div className='fsiz-20'>
                        어디서든 필요하고 쓰임을 받는 개발자가 되려 노력하고 <br/>
                        어느 곳에서든 즐겁게 개발하는 개발자 입니다.
                    </div>
                </div>
            </div>
            </header>
            <div>

            </div>
        </div>
    );
}

export default App;