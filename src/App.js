import styles from './styles/App.module.css'
import Nav from './components/Nav'
import Bg from './components/Bg'
import ProfileCard from './components/ProfileCard'
import YourCocktailsAndLikes from './components/YourCocktailsAndLikes'

function App() {
  return (
    <div className={styles.container}>
      <Bg />
      <Nav />
      <ProfileCard />
      <YourCocktailsAndLikes />
    </div>
  );
}

export default App;
