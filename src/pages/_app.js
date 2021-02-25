import 'react-responsive-modal/styles.css'
import styles from 'assets/styles/styles.scss'
import 'react-multi-carousel/lib/styles.css'

import Head from 'next/head'
import HeaderComponent from 'components/header/header.component'
import Footer from 'components/footer/footer.component'

function SecureHeader(props) {
	const isSecureHeader = props.isSecureHeader
	const isRegisterHeader = props.isRegisterHeader
	if (isSecureHeader) {
		return <HeaderComponent SecureHeader></HeaderComponent>
	}
	if (isRegisterHeader) {
		return ''
	}
	return <HeaderComponent></HeaderComponent>
}

function SecureFooter(props) {
	const isSecureFooter = props.isSecureFooter
	const isRegisterFooter = props.isRegisterFooter
	if (isSecureFooter) {
		return <Footer SecureFooter></Footer>
	}
	if (isRegisterFooter) {
		return ''
	}
	return <Footer></Footer>
}

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>MKT</title>
				<link rel="canonical " href="www.google.com.br" />		

				<link
					rel="shortcut icon "
					href="/favicon.ico "
					type="image/x-icon"
				/>
				<link rel="icon " type="image/x-icon " href="/favicon.ico" />

				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
				/>

				<meta
					name="description"
					content="Este é um site meramente ilustrativo."
				/>
				<meta
					name="keywords "
					content="MKT, Site, HTML5, CSS3, ReactJS, FlexBox"
				/>
				<meta property="og:url " content="www.google.com.br" />
				<meta
					property="og:site_name "
					content="MKT"
				/>
				<meta
					property="og:description "
					content="Este é um site meramente ilustrativo."
				/>
				<meta property="og:title " content="MKT" />

				<link rel="stylesheet" href={styles} />
			</Head>

			<SecureHeader
				isSecureHeader={pageProps.isSecureHeader}
				isRegisterHeader={pageProps.isRegisterHeader}
			/>

			<Component {...pageProps} />

			<SecureFooter
				isSecureFooter={pageProps.isSecureFooter}
				isRegisterFooter={pageProps.isRegisterFooter}
			/>
		</>
	)
}

export default MyApp
