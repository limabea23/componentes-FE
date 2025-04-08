"use client";

import styles from "../styles/CategoriasPopulares.module.css";
import CardCategoria from "./CardCategoria";

export default function CategoriasPopulares() {
    const categorias = [
    { nome: "TRADICIONAIS", icone: "🍦" },
    { nome: "PICOLÉS", icone: "🍧" },
    { nome: "MILKSHAKES", icone: "🥤" },
    { nome: "AÇAÍ", icone: "🍇" },
    { nome: "VEGANO", icone: "🌱" },
    { nome: "ESPECIALIDADES", icone: "🎂" },
    { nome: "NOVIDADES", icone: "✨" },
];

    return (
        <div className={styles.categorias}>
            <h1 className={styles.categoriasTitulo}>Categorias Populares</h1>
            <div className={styles.categoriasCards}>
            {categorias.map((categoria, index) => (
                <CardCategoria key={index} icone={categoria.icone} nome={categoria.nome} />
            ))}
            </div>
        </div>
    );
}