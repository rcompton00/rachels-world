import { navigateHome } from "../../utls/navigateHome"
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.container_header}>
            <button 
                className={styles.button_name}
                onClick={navigateHome()}>Rachel Compton
            </button>

            <button className="button_menu">
                <MenuIcon />
            </button>
        </div>
    )
}
