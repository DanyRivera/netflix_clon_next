import Image from "next/image";
import Layout from "../components/Layout"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout
      pagina={'Home'}
    >

      <div className={styles.heading}>


        <div className={styles.imagenSerie}>

          <Image width={550} height={350} src="/img/nombre_serie.png" alt="Nombre Serie" />

          <div className={styles.acciones}>
            <button>Play</button>
            <button>More Info</button>
          </div>

        </div>

      </div>




    </Layout>
  )
}
