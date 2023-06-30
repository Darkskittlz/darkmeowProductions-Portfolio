import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import './App.css'

import Homepage from './components/Homepage';

const App = () => {
    return (
        <div className="app">
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path='/' element={<Homepage />} />                           
                        </Routes>
                    </div>
                </Layout>
            </div>
        </div>
    )
}

export default App
