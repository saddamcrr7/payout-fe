import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function Verification() {
    const { t } = useTranslation('verification')

    return (
        <div className="p-verification">
            <Head>
                <title>{t('head.title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Verification</h1>
        </div>
    )
}