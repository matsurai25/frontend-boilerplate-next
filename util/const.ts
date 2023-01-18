import Emitter from 'eventemitter3'
import { css } from 'styled-components'

export const media = {
  pc: '@media screen and (min-width: 768px)',
  mobile: '@media screen and (max-width: 767px)'
}

export const colors = {}

const designWidthSp = 750
const designWidthPc = 1440
export const innerWidthPc = 1200

export const baseSizeCss = css`
  // デザイン通りの比率でコーディングすることができるようになるCSS変数
  // 画面幅がdesignWidthPcより小さい場合は縮小、そうでない場合はデザイン幅と等しくなる
  // Innerと併用して中央寄せにする
  --base: calc(
    min(100vw, ${designWidthPc}px) / ${designWidthPc}
  );

  ${media.mobile} {
    --base: calc(100vw / ${designWidthSp});
  }
`
/**
 * デザイン通りのサイズを表現するための関数
 * 乗算しているだけなので、将来的にVariable Unitsが利用可能になったら不要
 * https://coliss.com/articles/build-websites/operation/css/the-future-of-css-variable-units.html
 *
 * @param size : number;
 * @returns
 */
export const base = (size: number) => {
  return `calc(var(--base)* ${size})`
}

/**
 * 一定時間停止する
 * @param {number} time
 * @returns
 */
export async function sleep(time: number) {
  return new Promise((res) => {
    return setTimeout(res, time)
  })
}

export const ee = new Emitter()

export const isMobile = () =>
  typeof window === 'undefined'
    ? false
    : window.innerWidth < 768
