import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import Link from 'next/link'

export default function Home() {
  const { t } = useTranslation('home')

  return (
    <div className="p-home">
       <Head>
        <title>{t('head.title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="o-hero o-hero--main">
        <div className="o-bg o-bg--primary-mix"></div>
        <div className="o-hero__container o-container">
          <div className="o-hero__content c-content">
            <div className="o-hero__content c-content c-content--light">
              <h1 className="c-content__title">
                <span className="c-content__title-text">{t('hero.title')} </span>
                <span className="c-content__title-text c-content__title-text--highlight c-content__title-text--bold">{t('hero.title-highlight')} </span>
                <span className="c-content__title-text c-content__title-text--highlight">|</span>
              </h1>
              <p className="c-content__text">{t('hero.text')}</p>
              <div className="c-content__btns">
                <Link  href="/sk">
                  <a className="c-btn c-btn--white">{t('hero.btn-1')}</a>
                </Link>
                <Link  href="/en">
                  <a className="c-btn c-btn--link c-btn--primary-03">{t('hero.btn-2')}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="o-hero__illustration">
          <img src="/assets/svgs/main-hero-illustration.svg" alt="illustration" />
        </div>
      </div>


    </div>
  )
}
