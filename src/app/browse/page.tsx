import styles from './styles.module.css'

import ChooseProfile from "../components/ChooseProfile";

export default function Browse() {
    return (
        <>
            <div className={styles.header} role="navigation"></div>
            <ChooseProfile />
        </>
    )
}
