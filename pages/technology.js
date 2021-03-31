import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function Technology() {
    const { t } = useTranslation('technology')

    return (
        <div className="p-technology">
            <Head>
                <title>{t('head.title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Technology</h1>
        </div>
    )
}