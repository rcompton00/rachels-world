import {navigateHome} from '../../utls/navigateHome'
export default function Home () {

  return (
    <div>
        <button 
        className='button_home'
        onClick={navigateHome()}>Rachel</button>
        <p>Welcome to Rachel's World!</p>
    </div>
  )
}  