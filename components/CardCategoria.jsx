import styles from "../styles/CategoriasPopulares.module.css";

export default function CardCategoria ( { icone, nome } ) {
    return (
        <div className={styles.card}>
            <span className={styles.icon}>{icone}</span>
            <p className={styles.nome}>{nome}</p>
        </div>
    );
}