import { Inner } from '@/components/common'
import { base } from '@/util/const'
import styled from 'styled-components'

export default function Home() {
  return (
    <Wrapper>
      <Inner>
        Lorem ipsum dolor sit amet, consectetur adipisci
        elit, sed eiusmod tempor incidunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut aliquid ex ea commodi
        consequatur. Quis aute iure reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint obcaecat cupiditat non
        proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: ${base(100)};
`
