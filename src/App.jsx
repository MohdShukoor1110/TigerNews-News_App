import { useState } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
    const pageSize = 10;
    const apiKey = process.env.REACT_APP_NEWS_API
    const [progress, setProgress] = useState(0)
    const [mode, setMode] = useState('light')

    const toggleMode = () => {
        if (mode==='light') {
            setMode('dark')
            document.body.style.backgroundColor = '#474d53'
        } else {
            setMode('light')
            document.body.style.backgroundColor = '#f8f9fa'
        }
    }
    
    return (
        <div>
            <BrowserRouter>
                <NavBar mode={mode} toggleMode={toggleMode} />
                <LoadingBar
                    height={3}
                    color='#f11946'
                    progress={progress}
                />
                <Routes>
                    <Route index path='/' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} key='general' pageSize={pageSize} country='us' category='general' nameCat='Home' />} />

                    <Route path='/Business' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} key='business' pageSize={pageSize} country='us' category='business' nameCat='Business' />} />

                    <Route path='/Entertainment' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress}  key='entertainment' pageSize={pageSize} country='us' category='entertainment' nameCat='Entertainment' />} />

                    <Route path='/General' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} key='general' pageSize={pageSize} country='us' category='general' nameCat='General' />} />

                    <Route path='/Health' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} key='health' pageSize={pageSize} country='us' category='health' nameCat='Health' />} />

                    <Route path='/Science' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} key='science' pageSize={pageSize} country='us' category='science' nameCat='Science' />} />

                    <Route path='/Sports' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} key='sports' pageSize={pageSize} country='us' category='sports' nameCat='Sports' />} />

                    <Route path='/Technology' element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} key='technology' pageSize={pageSize} country='us' category='technology' nameCat='Technology' />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;