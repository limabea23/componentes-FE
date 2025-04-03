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

        <CategoriasPopulares />

        <Formulario />
        <Footer />
        </div>
    );
}