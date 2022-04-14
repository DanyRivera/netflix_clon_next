import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import ListadoPeliculas from "../../components/ListadoPeliculas";
import styles from "../../styles/ResultadosBusqueda.module.css";

const ResultadosBusqueda = ({ peliculas }) => {

    const router = useRouter();
    const { query: { nombre } } = router;

    // console.log(peliculas.Response);

    return (

        <Layout
            pagina="Resultados"
        >

            <div className="separacion contenedor">

                <h2 className={styles.heading}>Busqueda: {nombre}</h2>

                {peliculas.Response == 'True' ? (

                    <ListadoPeliculas
                        peliculas={peliculas.Search}
                        tematica={nombre}
                    />

                ) : (

                    <p className={styles.error}>Sin Resultados</p>

                )}

            </div>

        </Layout>

    )
}

export async function getServerSideProps({ query: { nombre } }) {

    const url = `${process.env.API_URL}&s=${nombre}`;
    const respuesta = await fetch(url);
    const peliculas = await respuesta.json();

    // console.log(peliculas);

    return {
        props: {
            peliculas
        }
    }
}

export default ResultadosBusqueda