import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

export default function Contact() {
    const { t } = useTranslation('contact')

    return (
        <div className="p-contact">
            <Head>
                <title>{t('head.title')}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Contact</h1>
        </div>
    )
}