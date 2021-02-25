import styles from 'pages/home/home.module.scss';

export default function ResourcesContainer(){
    return(
        <div className="container">
            <div className={[styles.section].join(" ")}>
                <div className={styles.section_details}>

                    <div className={styles.centered}>
                        <figure className="bg-icon-hero">
                            <img src="/icon-1.png" title="Spend time smart" />
                        </figure>
                        <p>Spend time smart</p>
                    </div>

                    <div className={styles.centered}>
                        <figure className="bg-icon-hero">
                            <img src="/icon-2.png" title="Audio podcast" />
                        </figure>
                        <p>Audio podcast</p>
                    </div>

                    <div className={styles.centered}>
                        <figure className="bg-icon-hero">
                            <img src="/icon-3.png" title="Boost your time" />
                        </figure>
                        <p>Boost your time</p>
                    </div>

                    <div className={styles.centered}>
                        <figure className="bg-icon-hero">
                            <img src="/icon-4.png" title="Quality" />
                        </figure>
                        <p>Quality</p>
                    </div>
                </div>
            </div>
        </div>
    );
}