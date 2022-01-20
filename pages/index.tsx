import type { NextPage } from 'next'
import Head from 'next/head'

import { Icons } from '@dreadera/components'

const Home: NextPage = () => (
    <div>
        <Head>
            <title>{`//dreadera`}</title>
            <meta name="description" content="dreadera" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
            <Icons size={30} type="github" />
        </div>
    </div>
)

export default Home
