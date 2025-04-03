"use client";

import styles from "../styles/Destaques.module.css";

const gelatos = [
    { imagem: "/gelato di sogno.png", sabor: "Cioccolato", chefe: "por Enrico Fontana", nota: "/5stars.png", categorias: "Tradicionais", categorias: "Especialidades", preco: "R$14.99"},
    { imagem: "/gelato di sogno.png", sabor: "Stracciatella", chefe: "por Enrico Fontana", categorias: "Tradicionais", categorias: "Especialidades", preco: "R$14.99"},
];

export default function Destaques () {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1 className={styles.titulo}>Destaques da Semana</h1>
                <p className={styles.titulo}>Ver todos</p>
            </div>

            <div className={styles.cards}>
                {gelatos.map((gelato) => (
                    <img src={gelato.imagem} alt="gelato di sogno" className={styles.imagem} />
            );
            //parei aqui
            </div>

        </div>

        
    );
}