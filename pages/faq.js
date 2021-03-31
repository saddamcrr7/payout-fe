import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function Faq() {
    const { t } = useTranslation('faq')

    return (
        <div className="p-faq">
            <Head>
                <title>{t('head.title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Faq</h1>
        </div>
    )
}