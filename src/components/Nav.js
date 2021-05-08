import Logo from './Logo'
import styles from '../styles/Nav.module.css'
import ProfileIcon from './ProfileIcon'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Logo />
      <div className={styles.btnsWrapper}>
        <div>featured</div>
        <div>categories</div>
        <ProfileIcon />
        <div>logout</div>
      </div>
    </div>
  )
}

export default Nav
