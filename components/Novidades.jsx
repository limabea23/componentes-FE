"use client";

import styles from "../styles/Novidades.module.css";

const gelatos = [
    { imagem: "/vegan.jpg", sabor: "Caramello Salato", chefe: "por Francesco De Luca", nota: "/4.5stars.png", categorias: "Vegano", preco: "R$19.99" },
    { imagem: "/candyfloss.jpg", sabor: "Zucchero filato", chefe: "por Giuseppe Ferraro", nota: "/5stars.png", categorias: "Novidades", preco: "R$15.99" },
    { imagem: "/cookie.jpg", sabor: "Biscotti", chefe: "por Giulia Bianchi", nota: "/5stars.png", categorias: "Especialidades", preco: "R$15.99" },
    { imagem: "/bubblegum.jpg", sabor: "Gomma da masticare", chefe: "por Valentina Romano", nota: "/4stars.png", categorias: "Tradicionais", preco: "R$10.99" }
];

export default function Destaques() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1 className={styles.titulo}>Novidades</h1>
                <p className={styles.todos}>Ver todos</p>
            </div>

            <div className={styles.cards}>
                {gelatos.map((gelato, index) => (
                    <div key={index}  className={styles.card}> 
                        <img src={gelato.imagem} alt="gelato" className={styles.imagem} />
                        <p className={styles.seloNovo}>NOVO</p>
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