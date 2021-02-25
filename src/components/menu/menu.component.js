import styles from './menu.module.scss';
import Link from 'next/link';

export default function Menu() {
	
	return (
		<nav className={styles.menu}>
			<ul>
				<li>
					<Link href="/">
						<a className={styles.active}>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Articles</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Audio</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
