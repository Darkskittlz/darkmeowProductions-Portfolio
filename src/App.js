import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar } from './components'
import './App.css'
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
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
                            <Route path='/About' element={<About />} />
                            <Route path='/Products' element={<Products />} />
                            <Route path='/Contact' element={<Contact />} />                             
                        </Routes>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
                        Collab Project <br />
                        All Rights Reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/About">Exchanges</Link>
                        <Link to="/Products">Products</Link>
                        <Link to="/Contact">Contact</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
