import { useContext } from "react"
import AppContext from "../context/AppContext"
import ListadoPeliculas from "../components/ListadoPeliculas"
import Layout from "../components/Layout"

const MyList = () => {

  const {miLista} = useContext(AppContext)

  return (

    <Layout
      pagina="My List"
    >

      <ListadoPeliculas 
        peliculas={miLista}
        tematica="My Lista"
      />

    </Layout>

  )
}

export default MyList