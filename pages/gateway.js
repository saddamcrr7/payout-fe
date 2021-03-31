import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function Gateway() {
    const { t } = useTranslation('gateway')

    return (
        <div className="p-gateway">
            <Head>
                <title>{t('head.title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Gateway</h1>
        </div>
    )
}