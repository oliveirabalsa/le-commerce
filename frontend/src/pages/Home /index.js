import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';


export default function Home() {
    return (
        <div>
            <div className="container">
                <h1>Hello Le-commerce</h1>
            <form>
                <input placeholder="Olá Tudo bem"/>
                <input placeholder="Olá Tudo bem"/>
                <input placeholder="Olá Tudo bem"/>
                <input placeholder="Olá Tudo bem"/>
                <button className="button">Enviar</button>
            </form>
            </div>

        </div>
    )


}