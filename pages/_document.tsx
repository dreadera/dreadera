import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class DocumentTemplate extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;700&display=swap"
                    rel="stylesheet"
                />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default DocumentTemplate
