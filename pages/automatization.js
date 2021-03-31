import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function Automatization() {
    const { t } = useTranslation('automatization')

    return (
        <div className="p-automatization">
            <Head>
                <title>{t('head.title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Automatization</h1>
        </div>
    )
}