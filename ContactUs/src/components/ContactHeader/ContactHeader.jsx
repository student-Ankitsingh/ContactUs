import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
    return (
        <div className={`Container ${styles.contact_section}`}>
            <h1>CONTACT US</h1>
            <p>The majority of customers today 
            say that quick issue resolution is
            the most important factor in a positive
            customer experience. I think this makes
            a Contact Us page one of the most
           valuable pages you can have on your
            website.</p>
        </div>
    )
}

export default ContactHeader