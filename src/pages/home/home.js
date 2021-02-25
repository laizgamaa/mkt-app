import Head from 'next/head';
import styles from './home.module.scss';

import ResourcesContainer from 'components/home/resources.container';
import IntroductionContainer from 'components/home/introduction.container';
import LoginContainer from 'components/home/login.container';

export default function HomePage() {

	return (
		<div className={styles.home}>
			<Head>
				<title>MKT - Página inicial</title>
			</Head>

			<main>
				<IntroductionContainer />
				<ResourcesContainer />
				<LoginContainer />
			</main>
		</div>
	)
}

