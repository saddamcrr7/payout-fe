import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function About() {
    const { t } = useTranslation('about')

    return (
        <div className="p-about">
            <Head>
                <title>{t('head.title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>About</h1>
        </div>
    )
}