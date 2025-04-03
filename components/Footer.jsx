"use client"

import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.container}>
        <div className={styles.containerfooter}>
            <img src="/logo-header.png" alt="gelato di sogno logo" />
            <p className={styles.text}>A Gelato Di Sogno é uma sorveteria de gelatos originais do Brasil, com uma ampla variedade de sabores e estilos. Nossa equipe de chefes está sempre em busca de novos ingredientes e sabores para atender às necessidades dos nossos clientes. Não perca mais tempo e experimente a nossa variedade de gelatos.</p>
            </div>
            <div className={styles.Links}>
                <h3>LINKS RÁPIDOS</h3>
                <p>Home</p>
                <p>Gelatos</p>
                <p>Categorias</p>
                <p>Chefes</p>
                <p>Ofertas</p>
            </div>
            <div className={styles.categoriast}>
                <h1>Categorias</h1>
                <p>Tradicionais</p>
                <p>Picolés</p>
                <p>Milkshakes</p>
                <p>Açaí</p>
                <p>Vegano</p>
                <p>Especialidades</p>
                <p>Novidades</p>
            </div>
            <div className={styles.redes}>
                <p>📸 Instagram</p>
                <p>🎵 TikTok</p>
                <p>🐦 Twitter</p>
                <p>📧 Email</p>
            </div>
            <line className={styles.line}>
                <p>© 2023 Gelato Di Sogno</p>
                <p>Política de Privacidade</p>
                <p>Termos de Uso</p>
                <p>Política de Cookies</p>
                <p>Design by: Anna Beatriz e Beatriz Lima</p>
            </line>
        </div>
    );
}