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
            <div className="logo-bar">
                <a href="#" className="logo">
                    <img src="http://bnx.oa.gg/img/logo.gif" alt=""/>
                </a>
            </div>

            <div className="menu-bar con">
                <nav className="menu-box">
                    <ul class="row">
                        <li className="cell"><a href="#">BRAND</a></li>
                        <li className="cell"><a href="#">VISUAL</a></li>
                        <li className="cell"><a href="#">STYLE</a></li>
                        <li className="cell"><a href="#">MEDIA</a></li>
                        <li className="cell"><a href="#">NEWS</a></li>
                        <li className="cell"><a href="#">STORE</a></li>
                        <li className="cell"><a href="#">CUSTOMER</a></li>
                    </ul>
                </nav>
            </div>

            <div className="top-bn-box con">
                <div className="img-box">
                    <img src="http://bnx.oa.gg/img/20160913AM105509_3718.jpg" alt=""/>
                </div>
            </div>

            <div>
                백엔드에서 가져온 데이터입니다 : {hello}
            </div>
        </div>
    );
}

export default App;