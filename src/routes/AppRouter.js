import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../App';
import Formulario from '../components/FormularioContac';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import StactTechnologies from '../components/StactTechnologies';
import Testimonios from '../components/Testimonio';


const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/home" element={<Hero/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/technologies" element={<StactTechnologies/>}/>
                <Route path="/testimonials" element={<Testimonios/>}/>
                <Route path="/contact" element={<Formulario/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
