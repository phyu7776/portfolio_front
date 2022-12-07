import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import './App.css';
import axios from 'axios';

function App() {
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/test')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <header>
                <div className='masterHeader'>
                    <div className='headerBox'>
                        PHY Portfolio
                    </div>
                    <div className='main_nav'>
                        <Button variant="text" size="large"><span className='sub_title'>About me</span></Button>
                        <Button variant="text" size='large'><span className='sub_title'>Skill</span></Button>
                        <Button variant="text" size='large'><span className='sub_title'>Project</span></Button>
                        <Button variant="text" size='large'><span className='sub_title'>Career</span></Button>
                    </div>
                </div>
            </header>
            <div className='content'>
                백엔드에서 가져온 데이터입니다 : {hello}
            </div>
        </div>
    );
}

export default App;