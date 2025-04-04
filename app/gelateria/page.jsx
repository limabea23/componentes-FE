"use client";

import styles from "../../styles/Home.module.css";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Destaques from "../../components/Destaques";
import CategoriasPopulares from "../../components/CategoriasPopulares";
import Novidades from "../../components/Novidades";
import Formulario from "../../components/Formulario";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Banner />
            <Destaques />
            <CategoriasPopulares />
            <Novidades />
            <Formulario />
            <Footer />
        </div>
    );
}