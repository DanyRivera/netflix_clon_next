import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={`contenedor2 ${styles.contenido}`}>

        <div className={styles.redes}>

          <div>
            <a>
              <FontAwesomeIcon className={styles.icon} icon={faFacebookF} />
            </a>

            <a>
              <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
            </a>

            <a>
              <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
            </a>

            <a>
              <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
            </a>
          </div>

        </div>

        <div className={styles.opciones}>

          <div>
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>

          <div>
            <p>Audio Description</p>
            <p>Investor Relations</p>
            <p>Legal Notices</p>
          </div>

          <div>
            <p>Help Center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </div>

          <div>
            <p>Gift Cards</p>
            <p>Terms of Use</p>
            <p>Corporate Informarion</p>
          </div>

        </div>

        <div className={styles.service}>
          <p>102-227</p>
        </div>

        <div className={styles.copyright}>
          <p>&copy; 1997 - 2022 Netflix, Inc 718fc5a2-a72f-4dc6-a59d-8c7f53c57a73</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer