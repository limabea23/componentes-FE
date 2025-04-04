"use client";

import styles from "../styles/Destaques.module.css";

const gelatos = [
    { imagem: "/chocolato.jpg", sabor: "Cioccolato", chefe: "por Enrico Fontana", nota: "/4stars.png", categorias: "Tradicionais", preco: "R$12.99" },
    { imagem: "/stracciatella.jpg", sabor: "Stracciatella", chefe: "por Giulia Bianchi", nota: "/4.5stars.png", categorias: "Tradicionais", preco: "R$14.99" },
    { imagem: "/pistachio.jpg", sabor: "Pistachio", chefe: "por Marco Rossi", nota: "/5stars.png", categorias: "Tradicionais", preco: "R$17.99" },
    { imagem: "/vanilla.jpg", sabor: "Vaniglia", chefe: "por Sofia Ricci", nota: "/5stars.png", categorias: "Tradicionais", preco: "R$12.99" }
];

export default function Destaques() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1 className={styles.titulo}>Destaques da Semana</h1>
                <p className={styles.todos}>Ver todos</p>
            </div>

            <div className={styles.cards}>
                {gelatos.map((gelato, index) => (
                    <div key={index}  className={styles.card}> 
                        <img src={gelato.imagem} alt="gelato" className={styles.imagem} />
                        <h2 className={styles.sabor}>{gelato.sabor}</h2>
                        <p className={styles.chefe}>{gelato.chefe}</p>
                        <img src={gelato.nota} alt="nota por estrelas" className={styles.nota} />
                        <p className={styles.categorias}>{gelato.categorias}</p>
                        <div className={styles.precoIcon}> 
                            <h2 className={styles.preco}>{gelato.preco}</h2>
                            <div className={styles.icons}>
                                <p className={styles.icone}>💝</p>
                                <p className={styles.icone}>🛒</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}