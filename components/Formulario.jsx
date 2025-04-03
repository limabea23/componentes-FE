"use client";

import { useState } from "react";
import styles from "../styles/Formulario.module.css";

export default function Formulario() {
    const [email, setEmail] = useState("");

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className={styles.container}>
                <h1 className={styles.formularioTitulo}>Fique por dentro das novidades!</h1>
                <p className={styles.formdescricao}>Preencha o campo abaixo para receber as ofertas mais recentes e descubra os novos sabores extraordinários.</p>
                <div className={styles.formularioInput}>
                    <input type="email" placeholder="Digite seu e-mail" value={email} onChange={handleChange} className={styles.input} /> 
                    <button className={styles.Button}>Enviar</button>
                </div>
            </div>
    );
}