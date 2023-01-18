import * as React from 'react'
import styled, { css } from 'styled-components'
import { EmitEvent, emitter } from 'util/emitter'

export default function PageTransitionCover() {
  const [isNull, setNull] = React.useState(true)

  const [isCovered, setCovered] = React.useState(false)

  React.useEffect(() => {
    emitter.on(EmitEvent.PAGE_TRANSITION_START, () => {
      setNull(false)
      window.setTimeout(() => setCovered(true), 30)
    })
    emitter.on(EmitEvent.PAGE_TRANSITION_END, () => {
      setCovered(false)
      window.setTimeout(() => setNull(true), 300)
    })
  }, [])

  return isNull ? null : (
    <Wrapper isCovered={isCovered}>
      PageTransitionCover
    </Wrapper>
  )
}

const Wrapper = styled.div<{ isCovered: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background: #000;
  display: grid;
  align-items: center;
  opacity: 0;
  transition: opacity ease 0.3s;
  will-change: opacity;
  color: #fff;

  ${({ isCovered }) =>
    isCovered &&
    css`
      opacity: 1;
    `}
`
