import { useContext } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faThumbsUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import styles from "../styles/ListadoPeliculas.module.css";

const ListadoPeliculas = ({ peliculas, heading, tematica }) => {

    const { setLista } = useContext(AppContext);

    const router = useRouter();
    const ruta = router.route

    const peliculasArr = peliculas.filter(pelicula => pelicula.Poster !== "N/A");

    const handleClick = id => {
        router.push(`/view/${id}`);
    }

    return (

        <div className={`${heading ? styles.heading : styles.peliculas}`}>

            <div>

                <h2 className={styles.tematica}>{tematica}</h2>

                <div
                    className={ruta == '/' ? styles.listadoHome : styles.listado}
                >
                    {peliculasArr.map(pelicula => (
                        <div
                            key={pelicula.imdbID}
                            className={styles.pelicula}
                        >
                            <Image
                                width={450}
                                height={800}
                                src={pelicula.Poster}
                                alt={`${pelicula.Title} Poster`}
                            />

                            <div className={styles.info}>

                                <div className={styles.opciones}>

                                    <button
                                        onClick={() => handleClick(pelicula.imdbID)}
                                    >
                                        <FontAwesomeIcon className={styles.icon} icon={faPlay} />
                                    </button>

                                    <button
                                        onClick={() => setLista(pelicula)}
                                    >
                                        <FontAwesomeIcon className={styles.icon} icon={faPlus} />
                                    </button>

                                    <button>
                                        <FontAwesomeIcon className={styles.icon} icon={faThumbsUp} />
                                    </button>

                                    <button>
                                        <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
                                    </button>

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