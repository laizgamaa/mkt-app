import styles from 'pages/home/home.module.scss';

export default function IntroductionContainer(){
    return(
        <div className="container">
            <div className={styles.section}>
                <div className={styles.section_info}>

                    <h1 className={styles.section_title}>Join us today</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>
            </div>
        </div>
    );
}