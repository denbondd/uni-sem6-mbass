import React from 'react';
import Home from './components/home';
import Account from './components/account';
import RegisterForm from './components/register-form';
import LoginForm from './components/login-form';
import RestorePassword from './components/restore-password';
import EditProfile from './components/edit-profile';
import Geolocation from './components/geolocation';
import Feedback from './components/feedback';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/account" element={<Account/>}/>
                    <Route path="/register" element={<RegisterForm/>}/>
                    <Route path="restore-pass" element={<RestorePassword/>}/>
                    <Route path="/edit-profile" element={<EditProfile />} />
                    <Route path="/geolocation" element={<Geolocation />} />
                    <Route path="/feedback" element={<Feedback />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
