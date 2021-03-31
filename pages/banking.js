import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function Banking() {
    const { t } = useTranslation('banking')

    return (
        <div className="p-banking">
            <Head>
                <title>{t('head.title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Banking</h1>
        </div>
    )
}