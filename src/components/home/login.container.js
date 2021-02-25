import Link from 'next/link';
import styles from 'pages/home/home.module.scss';

export default function LoginContainer(){
    return(
        <div className={styles.login_section}>
            <div className={styles.section_white}>

                <div className={styles.section_info}>

                    <div className={styles.login_buttons}>
                        <div className={styles.btn}>
                            <Link href="/">
                                <a className="btn-form btn-primary btn-primary-reverse">
                                    Sign up
                                </a>
                            </Link>
                        </div>
                        <div className={styles.btn}>
                            <Link href="/">
                                <a className="btn-form btn-primary btn-primary-outline">
                                    Login
                                </a>
                            </Link>
                        </div>
                    </div>

                    <form className="form box-form" autoComplete="off">

                        <div className={styles.middle}>
                            <label>
                                <input type="radio" name="radio" checked/>
                                <div className={styles.box}>
                                    <span className="nc-icon icon-face-woman"></span>
                                </div>
                            </label>

                            <label>
                                <input type="radio" name="radio"/>
                                <div className={styles.box}>
                                    <span className="nc-icon icon-face-man"></span>
                                </div>
                            </label>
                        </div>

                        <div className="form-group">
                            <input id="name" name="user.name" type="text" placeholder="Username"/>
                        </div>

                        <div className="form-group">
                            <input id="email" name="user.email" type="email" placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <select name="interests" id="interests">
                                <option value="0">What are your interests?</option>
                            </select>
                        </div>

                    </form>
                    
                </div>

            </div>
        </div>
    )

}