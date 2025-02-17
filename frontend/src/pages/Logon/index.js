import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';


export default function Logon() {
    const [id, setID] = useState('');
    const history = useHistory();
    
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});

            //Salvar id e nome da ong para uso na app
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            //Enviando o usuário para o perfil
            history.push('/profile');


        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo Heroes" />

                <form onSubmit={handleLogin}>
                    <h1>Faça o seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setID(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}