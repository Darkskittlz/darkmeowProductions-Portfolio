import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'
import Homepage from './components/Homepage';
import Film from './components/Film';
import Photography from './components/Photography';
import Content from './components/Content';


const App = () => {
    return (
        <div className="app">
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path='/' element={<Homepage />} />                           
                            <Route path='/film' element={<Film />} />                           
                            <Route path='/photography' element={<Photography />} />                           
                            <Route path='/content' element={<Content />} />                           
                        </Routes>
                    </div>
                </Layout>
            </div>
        </div>
    )
}

export default App
