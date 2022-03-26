import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina}) => {
    return (

        <div>
            <Head>
                <title>{pagina} - Netflix</title>
                <meta name="description" content="Clon de la página de Netflix" />
            </Head>

            <Header />

            {children}

            <Footer />

        </div>

    )
}

export default Layout