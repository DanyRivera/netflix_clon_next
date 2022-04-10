import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout"
import ListadoPeliculas from "../components/ListadoPeliculas";
import styles from "../styles/Home.module.css";

export default function Home({ peliculasAccion, peliculasAventura, peliculasInfantiles, peliculasTerror }) {

  // console.log(peliculasAccion);

  return (
    <Layout
      pagina={'Home'}
    >

      <div className={styles.heading}>

        <div className={styles.imagenSerie}>

          <Image width={550} height={350} src="/img/nombre_serie.png" alt="Nombre Serie" />

          <div className={styles.acciones}>

            <button className={`${styles.boton} ${styles.botonPlay}`}>
              <div>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <span>Play</span>
            </button>

            <button className={styles.boton}>
              <div>
                <FontAwesomeIcon icon={faCircleInfo} />
              </div>
              <span>More Info</span>
            </button>

          </div>

        </div>

      </div>

      <main>

        <ListadoPeliculas
          peliculas={peliculasAccion}
          heading={true}
          tematica="Accion"
        />

        <ListadoPeliculas
          peliculas={peliculasAventura}
          tematica="Aventura"
        />

        <ListadoPeliculas
          peliculas={peliculasInfantiles}
          tematica="Infantiles"
        /> 

        <ListadoPeliculas
          peliculas={peliculasTerror}
          tematica="Terror"
        />  

      </main>

    </Layout>
  )

}

export async function getServerSideProps() {

  const urlAccion = `${process.env.API_URL}&s=transformers`;
  const urlAventura = `${process.env.API_URL}&s=avengers`;
  const urlInfantiles = `${process.env.API_URL}&s=toy-story`;
  const urlTerror = `${process.env.API_URL}&s=harry-potter`;

  const [resAccion, resAventura, resInfantiles, resTerror] = await Promise.all([
    fetch(urlAccion),
    fetch(urlAventura),
    fetch(urlInfantiles),
    fetch(urlTerror)
  ])

  const [peliculasAccion, peliculasAventura, peliculasInfantiles, peliculasTerror] = await Promise.all([
    resAccion.json(),
    resAventura.json(),
    resInfantiles.json(),
    resTerror.json()
  ])

  return {
    props: {
      peliculasAccion,
      peliculasAventura,
      peliculasInfantiles,
      peliculasTerror
    }
  }

}
