"use client";

import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <link rel="icon" href="/onlygelato.png" sizes="128x128" />
            <div className={styles.logo}>
                <img src="/logo-header.png" alt="gelato di sogno logo" />
            </div>

            <nav className={styles.menu}>
                <p>Início</p>
                <p>Gelatos</p>
                <p>Categorias</p>
                <p>Chefes</p>
                <p>Ofertas</p>
            </nav>

            <div className={styles.input}>
                <input type="text" placeholder="Buscar gelatos..." />
                <button className={styles.button}>🔍</button>
            </div>

            <div className={styles.icons}>
                <p>💝</p>
                <p>🛒</p>
                <p>👤</p>
            </div>
        </div>
    );
}