import styles from '../styles/YourCocktailsAndLikes.module.css'

const YourCocktailsAndLikes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.yourCocktails}>
        <div className={styles.cocktailPhoto1}></div>
        <div className={styles.cocktailName}>Brooklyn</div>
      </div>
      <div className={styles.yourLikes}>
        <div className={styles.cocktailPhoto2}></div>
        <div className={styles.cocktailName}>Brooklyn</div>
      </div>
    </div>
  )
}

export default YourCocktailsAndLikes
