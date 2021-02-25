import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="pt-BR" className="html">
				<Head />
				<body className="body">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
