"use client";

import styles from "../styles/CategoriasPopulares.module.css";
import CardCategoria from "./CardCategoria";

export default function CategoriasPopulares() {
    const categorias = [
    { nome: "Tradicionais", icone: "🍦" },
    { nome: "Picolés", icone: "🍧" },
    { nome: "Milkshakes", icone: "🥤" },
    { nome: "Açaí", icone: "🍇" },
    { nome: "Vegano", icone: "🌱" },
    { nome: "Especialidades", icone: "🎂" },
    { nome: "Novidades", icone: "✨" },
];

    return (
        <div className={styles.categorias}>
            <h2 className={styles.categoriasTitulo}>CATEGORIAS POPULARES</h2>
            <div className={styles.categoriasCards}>
            {categorias.map((categoria, index) => (
                <CardCategoria key={index} icone={categoria.icone} nome={categoria.nome} />
            ))}
            </div>
        </div>
    );
}