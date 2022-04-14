import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import styles from "../styles/Search.module.css";

const search = () => {

    const router = useRouter();

    const [alerta, setAlerta] = useState(false);
    const [busqueda, setBusqueda] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (!busqueda) {
            setAlerta(true)
            return;
        }

        // const query = busqueda.split(' ').join('-');

        setAlerta(false)
        router.push(`/peliculas/${busqueda}`);

    }

    return (
        <Layout
            pagina="Search"
        >

            <div className={`${styles.contenido} separacion`}>

                <h1>Busca una Película</h1>

                <form
                    className={styles.campo}
                    onSubmit={handleSubmit}
                >

                    <input
                        onChange={e => setBusqueda(e.target.value)}
                        type="text"
                        name="busqueda"
                        placeholder="Ej. Cars, Avengers, Toy Story, etc."
                    />


                    <button
                        type="submit"
                        className={styles.enviar}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>


                </form>

                {alerta && (
                    <p className={styles.error}>El nombre de la película es obligatorio</p>
                )}

            </div>

        </Layout>
    )
}

export default search