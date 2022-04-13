import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faThumbsUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import styles from "../styles/ListadoPeliculas.module.css";

const ListadoPeliculas = ({ peliculas, heading, tematica }) => {

    const peliculasArr = peliculas.Search;

    // console.log(peliculasArr);

    return (

        <div className={`${heading ? styles.heading : styles.peliculas}`}>

            <div>

                <h2 className={styles.tematica}>{tematica}</h2>

                <div
                    className={styles.listado}
                >
                    {peliculasArr.map(pelicula => (
                        <div
                            key={pelicula.imdbID}
                            className={styles.pelicula}
                        >
                            <Image width={450} height={800} src={pelicula.Poster} />

                            <div className={styles.info}>

                                <div className={styles.opciones}>

                                    <FontAwesomeIcon className={styles.icon} icon={faPlay} />

                                    <button
                                        // onClick={e => }
                                    >
                                        <FontAwesomeIcon className={styles.icon} icon={faPlus} />
                                    </button>

                                    <FontAwesomeIcon className={styles.icon} icon={faThumbsUp} />

                                    <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />

                                </div>


                                <p>{pelicula.Type}</p>

                            </div>

                        </div>
                    ))}
                </div>

            </div>


        </div>

    )
}

ListadoPeliculas.defaultProps = {
    heading: false
}

export default ListadoPeliculas