"use client";

import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="gelato di sogno logo" />
            </div>

            <nav className={styles.menu}>
                <li>Início</li>
                <li>Gelatos</li>
                <li>Categorias</li>
                <li>Chefes</li>
                <li>Ofertas</li>
            </nav>

            <div className={styles.input}>
                <input type="text" placeholder="Buscar gelatos..." />
                <button className={styles.button}>🔍</button>
            </div>
        </div>
    );
}