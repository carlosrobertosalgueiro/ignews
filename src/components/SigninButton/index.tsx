
import { FaGithub } from 'react-icons/fa'
import {AiOutlineCloseCircle} from "react-icons/ai";

import styles from './style.module.scss'

export function SigninButton() {

    const IsUserLoggedIn = true;

    return IsUserLoggedIn ? (
        <button
            className={styles.signinButton}
            type="button">
            <FaGithub color="#84d361" />
            Carlos Roberto
            <AiOutlineCloseCircle color="#737386" className={styles.closeIcon} />
            
        </button>

    ) :
    (
        <button
            className={styles.signinButton}
            type="button">
            <FaGithub color="#eba417" />
            Sign In With Github
        </button>


    )


}