import Head from 'next/head'

const Seo = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImgFullUrl
}: {
  pageTitle?: string
  pageDescription?: string
  pagePath: string
  pageImgFullUrl?: string
}) => {
  const defaultURL = 'https://a-chocolat.aloedesse.com/'
  const defaultTitle = '(atelier chocorat alo edesse)'
  const defaultDescription =
    'レストランalo edesse発、専用ラボで作るチョコレートコレクション。地域の食材、フルーツやお酒を使用し季節ごとの味をお楽しみいただけます。レストランでは「食育」をテーマにフランスでオーナーシェフとして活躍した料理長、山中貞之が作る沖縄発モダンフレンチを提供いたします。'
  const defaultPageImg = defaultURL + 'ogp.jpg'
  const faviconUrl = defaultURL + 'favicon.ico'

  const title = pageTitle
    ? `${pageTitle} | ${defaultTitle}`
    : defaultTitle
  const description = pageDescription
    ? pageDescription
    : defaultDescription
  const url = defaultURL + pagePath
  const imgUrl = pageImgFullUrl
    ? pageImgFullUrl
    : defaultPageImg
  const keywords =
    '沖縄,フレンチ,チョコレート,食育,ASBO STAY HOTEL,Alo edesse'

  return (
    <Head>
      <title>{title}</title>
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1.0'
      />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta
        property='og:site_name'
        content={defaultTitle}
      />
      <meta
        property='og:description'
        content={description}
      />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={imgUrl} />
      <link
        rel='icon'
        type='image/png'
        href={faviconUrl}
      ></link>
      <meta name='theme-color' content='#000000' />
      <meta
        name='twitter:card'
        content='summary_large_image'
      />
    </Head>
  )
}

export default Seo
