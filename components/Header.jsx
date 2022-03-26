import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
    return (

        <header className={styles.header}>

            <div className="contenedor">
                <div className={styles.barra}>
                    <div className={styles.contenido}>

                        <div className={styles.logo}>
                            <Link href='/'>
                                <a>
                                    <Image width={25} height={5} layout='responsive' src='/img/logo.svg' alt='Logo de Netflix' />
                                </a>
                            </Link>
                        </div>

                        <nav className={styles.navegacion}>
                            <a>Home</a>
                            <a>Tv Shows</a>
                            <a>Movies</a>
                            <a>New & Popular</a>
                            <a>My List</a>
                        </nav>
                    </div>

                    <div className={styles.opciones}>

                        <div>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>

                        <p>Kids</p>

                        <div>
                            <FontAwesomeIcon icon={faBell} />
                        </div>

                        <div>
                            <Image layout="responsive" width={500} height={500} src="/img/perfil.png" alt="imagen perfil" />
                        </div>

                    </div>
                </div>

                <div className={styles.contenidoMovil}>

                    <div className={styles.logoMovil}>
                        <Link href='/'>
                            <a>
                                <Image width={25} height={8} layout='responsive' src='/img/logo_movil.svg' alt='Logo de Netflix' />
                            </a>
                        </Link>
                    </div>

                    <div className={styles.imgPerfil}>
                        <Image layout="responsive" width={25} height={25} src="/img/perfil.png" alt="imagen perfil" />
                    </div>

                </div>
            </div>

        </header>

    )
}

export default Header