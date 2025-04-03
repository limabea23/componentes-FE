"use client";

import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import CategoriasPopulares from "../../components/CategoriasPopulares";
import Formulario from "../../components/Formulario";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.bannerContainer}>    
                <h1 className={styles.title}>Descruba os novos sabores extraordinários</h1>
                <p className={styles.description}>Promoção de inauguração com até 50% de desconto!</p>
                <button className={styles.button}>Ver ofertas</button>
            </div>
        <CategoriasPopulares />
        <Formulario />
        </div>
    );
}