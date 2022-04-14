import Image from "next/image";
import Layout from "../../components/Layout"
import styles from "../../styles/Pelicula.module.css";

const Pelicula = ({ pelicula }) => {

  const {
    Title,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Type 
  } = pelicula;

  return (

    <Layout
      pagina="Pelicula"
    >

      <div className="contenedor separacion">

        <div className={styles.contenido}>

          <div className={styles.poster}>
            <Image width={450} height={650} src={Poster} alt={`Imagen ${Title}`} />
          </div>

          <div className={styles.informacion}>
            <h2>{Title}</h2>

            <div>
              <p>{Plot}</p>
            </div>

            <div className={styles.detalles}>
              <p><span>Lanzamiento:</span> {Released}</p>
              <p><span>Duracion:</span> {Runtime}</p>
              <p><span>Genero:</span> {Genre}</p>
              <p><span>Director:</span> {Director}</p>
              <p><span>Escritor:</span> {Writer}</p>
              <p><span>Actores:</span> {Actors}</p>
              <p><span>Idioma:</span> {Language}</p>
              <p><span>País:</span> {Country}</p>
              <p><span>Premios:</span> {Awards}</p>
              <p><span>Tipo:</span> {Type}</p>
            </div>

          </div>

        </div>

      </div>

    </Layout>

  )
}

export async function getServerSideProps({ query: { id } }) {

  //consulta
  const url = `${process.env.API_URL}&i=${id}&plot=full`;
  const respuesta = await fetch(url);
  const pelicula = await respuesta.json();

  // console.log(pelicula);

  return {
    props: {
      pelicula
    }
  }

}

export default Pelicula