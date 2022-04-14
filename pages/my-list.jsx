import { useContext } from "react"
import AppContext from "../context/AppContext"
import ListadoPeliculas from "../components/ListadoPeliculas"
import Layout from "../components/Layout"
import styles from "../styles/MiLista.module.css";

const MyList = () => {

  const { miLista } = useContext(AppContext)

  return (

    <Layout
      pagina="My List"
    >

      {miLista.length > 0 ? (

        <div className="separacion contenedor">

          <ListadoPeliculas
            peliculas={miLista}
            tematica="My Lista"
          />

        </div>

      ) : (

        <h2 className={`separacion ${styles.heading}`}>Aun no Agregas Películas a tu Lista</h2>

      )}



    </Layout>

  )
}

export default MyList