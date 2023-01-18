import 'reset-css'
import type { AppProps } from 'next/app'
import styled, {
  createGlobalStyle
} from 'styled-components'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import Loading from 'components/Loading'
// import Frame from 'components/Frame'
import { useAssetsLoading, usePageView } from 'util/hooks'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { baseSizeCss } from '@/util/const'

function App({ Component, pageProps }: AppProps) {
  const { isLoaded, progress } = useAssetsLoading()
  usePageView()

  return (
    <Wrapper>
      <GlobalStyles />
      <GoogleAnalytics />
      <Loading progress={progress} isLoaded={isLoaded} />
      {/* <Frame /> */}
      <Content>
        <Component {...pageProps} isLoaded={isLoaded} />
      </Content>
    </Wrapper>
  )
}

export default App

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: #000;
    opacity: 1;
    font-family: 'Noto Sans JP', sans-serif;
  }
  :root {
    ${baseSizeCss}
  }
`

const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
`
const Content = styled.div``
