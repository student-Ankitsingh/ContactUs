import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} Container`}>
        <div className="logo">
            <img src="/images/logo.png" alt="do some code" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

    </nav>
  )
}

export default Navigation