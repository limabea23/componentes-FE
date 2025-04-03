"use client"

import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.containerfooter}>
                <img src="/logo-header.png" alt="gelato di sogno logo" />
                <p className={styles.text}>A Gelato Di Sogno é uma sorveteria de gelatos originais do Brasil, com uma ampla variedade de sabores e estilos. Nossa equipe de chefes está sempre em busca de novos ingredientes e sabores para atender às necessidades dos nossos clientes. Não perca mais tempo e experimente a nossa variedade de gelatos.</p>
            </div>
            <div className={styles.links}>
                <h3>Links Rápidos</h3>
                <ul className={styles.list}>
                    <li><a href="#" className={styles.link}>Home</a></li>
                    <li><a href="#" className={styles.link}>Gelatos</a></li>
                    <li><a href="#" className={styles.link}>Categorias</a></li>
                    <li><a href="#" className={styles.link}>Chefes</a></li>
                    <li><a href="#" className={styles.link}>Ofertas</a></li>
                </ul>
            </div>
            <div className={styles.categoriast}>
                <h3>Categorias</h3>
                <ul className={styles.list}>
                    <li><a href="#" className={styles.link}>Tradicionais</a></li>
                    <li><a href="#" className={styles.link}>Picolés</a></li>
                    <li><a href="#" className={styles.link}>Milkshakes</a></li>
                    <li><a href="#" className={styles.link}>Açaí</a></li>
                    <li><a href="#" className={styles.link}>Vegano</a></li>
                    <li><a href="#" className={styles.link}>Especialidade</a></li>
                    <li><a href="#" className={styles.link}>Novidades</a></li>
                </ul>
            </div>
            <div className={styles.redes}>
                <h3>Redes Sociais</h3>
                <ul className={styles.list}>
                    <li><a href="#" className={styles.link}>📸 Instagram</a></li>
                    <li><a href="#" className={styles.link}>🎵 TikTok</a></li>
                    <li><a href="#" className={styles.link}>🐦 Twitter</a></li>
                    <li><a href="#" className={styles.link}>📧 Email</a></li>
                </ul>
            </div>
            
            <div className={styles.line}></div>
                <div className={styles.linetext}>
                    <p>© 2023 Gelato Di Sogno</p>
                    <p>Política de Privacidade</p>
                    <p>Termos de Uso</p>
                    <p>Política de Cookies</p>
                    <p>Design by: Anna Beatriz e Beatriz Lima</p>
                </div>
        </div>
    );
}