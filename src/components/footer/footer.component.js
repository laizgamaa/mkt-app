import styles from './footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={[styles.container_footer, "container"].join(" ")}>
				<div className={styles.footer_content}>
					<div className={styles.text_content}>
						<p>Copyright 2019 All Rights Reserved</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
