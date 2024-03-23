'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Posts() {

    const [lang, setLang] = useState('English'); 

    const nombres = ['juan', 'mateo', 'luis']

    const estudiantes = [
    {
        nombre: 'Luis',
        edad: 16,
        hobby: 'Dormir',
        hobbyEn: 'Sleep'
    },
    {
        nombre: 'Andres',
        edad: 21,
        hobby: 'Dormir',
        hobbyEn: 'Sleep'
    },
    {
        nombre: 'Yoiber',
        edad: 17,
        hobby: 'Dormir',
        hobbyEn: 'Sleep'
    },
    {
        nombre: 'Leiver',
        edad: 17,
        hobby: 'Dormir',
        hobbyEn: 'Sleep'
    },
    {
        nombre: 'Carlos',
        edad: 20,
        hobby: 'Dormir',
        hobbyEn: 'Sleep'
    }
    ]

    const handleLang = (lang) => {
        setLang(lang);
    }

    return (
        <div>
            {estudiantes.map((estudiante) => (
                <div>
                    
                    Nombre: {estudiante.nombre}
                    <br />
                    
                    Edad: {estudiante.edad}
                    <br />
                    Es mayor de edad?: {estudiante.edad>17?  lang =="Español"?"si":"yes":"no"}
            
                
                    <br />
                    Hobby: {lang === 'Español' ? estudiante.hobby : estudiante.hobbyEn}
                    <br />
                    <br />
                    <hr />
                </div>
            ))}
            {lang}
            <button onClick={() => handleLang('English')}>English</button>
            <button onClick={() =>  handleLang('Español')}>Español</button>
        </div>
    )
}
