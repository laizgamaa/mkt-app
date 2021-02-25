import styles from './header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Menu from 'components/menu/menu.component'


const openMenu = () => {
	const menu = document.querySelector('.menu')
	menu.classList.add('menu-active')
}

const closeMenu = () => {
	const menu = document.querySelector('.menu')
	menu.classList.remove('menu-active')
}

export default function HeaderComponent() {
	const router = useRouter()

	return (
		<>
		<div>
			<header className={styles.header}>
				<div className={styles.header_bar}>
					<div className={styles.container}>
						<div
							className={[styles.logo, styles.col_1].join(
								' '
							)}
						>
							<Link href="/">
								<a>
									<picture>
										<img
											loading="lazy"
											src="/logo.png"
											alt="titulo"
											title="titulo"
										/>
									</picture>
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.header_content}>
					<div className={styles.container}>
						<button
							className={[
								styles.btn_menu,
								styles.col_2
							].join(' ')}
							onClick={openMenu}
						>
							<span className="nc-icon icon-menu-8"></span>
						</button>

						<div className={styles.main_menu_content}>
							<Menu />
						</div>
					</div>
				</div>

				<div className={[styles.menu, 'menu'].join(' ')}>
					<div
						className={[
							styles.menu_container,
							'menu-container'
						].join(' ')}
					>
						<button
							className={styles.btn_close_menu}
							onClick={closeMenu}
						>
							<span className="nc-icon icon-e-remove"></span>
						</button>

						<div className={styles.login_dropdown}>
							
						</div>

						<div className={styles.menu_content}>

							<div className={styles.search}>
								<input className={styles.search_txt} type="text" name="" placeholder="Search"/>	
								<a className={styles.search_btn} href="#" >
									<span className="nc-icon icon-search"></span>
								</a>
							</div>

							<nav className={styles.second_nav}>
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
						</div>
					</div>

					<div
						className={[
							styles.header_mask,
							'header-mask'
						].join(' ')}
						onClick={closeMenu}
					></div>
				</div>
			</header>

			<div className={styles.header_base}></div>
		</div>
		</>
	);
}
