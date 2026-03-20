import { navigateHome } from "../../utls/navigateHome"
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    return (
        <div className="container_header">
            <button 
                className='button_name'
                onClick={navigateHome()}>Rachel Compton
            </button>

            <button className="button_menu">
                <MenuIcon />
            </button>
        </div>
    )
}
