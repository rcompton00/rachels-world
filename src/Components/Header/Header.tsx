import { navigateHome, navigateAbout, navigateExperience, navigateProjects, navigateAccomplishments, navigateContact } from "../../utls/navigation"
import styles from './Header.module.scss'

//TODO: Could this be more DRY? Maybe map through an array of section names and create buttons that way instead of hardcoding each one?
// TODO: Move section buttons to be under name
export const Header = () => {
    return (
        <div className={styles.container_header}>
            <button 
                className={styles.button_name}
                onClick={navigateHome()}>
                    <span>R</span>achel
                    <span> C</span>ompton
            </button>

            <button 
                className={styles.button_sections}
                onClick={navigateAbout()}>About
            </button>

            <button 
                className={styles.button_sections}
                onClick={navigateExperience()}>Experience
            </button>

            <button 
                className={styles.button_sections}
                onClick={navigateProjects()}>Projects
            </button>

            <button 
                className={styles.button_sections}
                onClick={navigateAccomplishments()}>Accomplishments
            </button>

            <button 
                className={styles.button_sections}
                onClick={navigateContact()}>Contact
            </button>
        </div>
    )
}
