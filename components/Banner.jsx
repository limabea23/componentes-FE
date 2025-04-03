"use client";

import styles from "../styles/Banner.module.css";

export default function Banner() {
    return (
        <div className={styles.bannerContainer}>    
                <h1 className={styles.title}>Descruba os novos sabores extraordinários</h1>
                <p className={styles.description}>Promoção de inauguração com até 50% de desconto!</p>
                <button className={styles.button}>Ver ofertas</button>
            </div>
    );
}