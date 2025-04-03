"use client";

import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import CategoriasPopulares from "../../components/CategoriasPopulares";
import Formulario from "../../components/Formulario";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Banner />

    const gelatos = [
        { imagem: "/gelato di sogno.png", sabor: "Cioccolato", chefe: "por Enrico Fontana", nota: "/5stars.png", categorias: "Tradicionais", categorias: "Especialidades", preco: "R$14.99"},
        { imagem: "/gelato di sogno.png", sabor: "Stracciatella", chefe: "por Enrico Fontana", categorias: "Tradicionais", categorias: "Especialidades", preco: "R$14.99"},
    ];

    export default function Destaques () {
    return (
        

        
            //parei aqui
                <img src={gelato.imagem} alt="gelato di sogno" className={styles.imagem} />
                <p className={styles.sabor}>{gelato.sabor}</p>
                <p className={styles.chefe}>{gelato.chefe}</p>
                <img src={gelato.nota} alt="cinco estrelas" className={styles.nota} />
                <p className={styles.categorias}>{gelato.categoria}</p>
                <p className={styles.categorias}>{gelato.categoria}</p>
                <h2 className={styles.preco}>{gelato.preco}</h2>

                <div className={styles.icons}>
                <p className={styles.categorias}>🛒</p>
                <p className={styles.categorias}>👤</p>
                </div>
            )
        </div>
    )
}

        <CategoriasPopulares />

        <Formulario />
        <Footer />
        </div>
    );
}