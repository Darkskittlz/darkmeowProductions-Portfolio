import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar } from './components'
import './App.css'
import Ts1 from './components/Ts1';
import Ts2 from './components/Ts2';
import Ts3 from './components/Ts3';
import Homepage from './components/Homepage';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path='/' element={<Homepage />} />
                            <Route path='/Ts1' element={<Ts1 />} />
                            <Route path='/Ts2' element={<Ts2 />} />
                            <Route path='/Ts3' element={<Ts3 />} />                             
                        </Routes>
                    </div>
                </Layout>
                {/* <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
                        Collab Project <br />
                        All Rights Reserved
                    </Typography.Title>
                </div> */}
            </div>
        </div>
    )
}

export default App
