import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function Software() {
    const { t } = useTranslation('software')

    return (
        <div className="p-software">
            <Head>
                <title>{t('head.title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Software</h1>
        </div>
    )
}