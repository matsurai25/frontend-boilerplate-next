import styled, { css } from 'styled-components'
import { base } from 'util/const'

export default function Loading({
  progress,
  isLoaded
}: {
  progress: number
  isLoaded: boolean
}) {
  return (
    <Wrapper
      isLoaded={isLoaded}
      className={isLoaded ? 'isLoaded' : ''}
    >
      <ProgressPercentage>
        {Math.floor(progress * 100)}
      </ProgressPercentage>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ isLoaded: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background-color: #000;
  z-index: 1000000;
  transition: opacity 0.6s ease;
  font-weight: bold;
  color: #fff;
  display: grid;
  align-content: center;
  justify-items: center;
  opacity: 1;

  ${({ isLoaded }) =>
    isLoaded &&
    css`
      pointer-events: none;
      opacity: 0;
    `}
`

const ProgressPercentage = styled.div`
  margin-top: ${base(20)};
  font-size: ${base(22)};
  color: #fff;
`
