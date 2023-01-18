import { EmitEvent, emitter } from '@/util/emitter'
import animateScrollTo from 'animated-scroll-to'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import styled from 'styled-components'
import { innerWidthPc, media, base } from 'util/const'

export function LinkWithTransition({
  href,
  className,
  target,
  children,
  onPushed
}: {
  href: string
  target?: string
  className?: string
  children?: React.ReactNode
  onPushed?: () => void
}) {
  const router = useRouter()
  const callback = useCallback(
    (ev: React.MouseEvent<HTMLAnchorElement>) => {
      ev.preventDefault()

      const targetId = (ev.target as HTMLElement).closest(
        'a'
      )!.dataset.target
      // 現在ページによって遷移かスクロールかを変える
      if (targetId && location.pathname === '/') {
        const element = document.getElementById(targetId!)
        console.log(element)
        if (!element) {
          return
        }
        animateScrollTo(element, {
          verticalOffset: 0
        })
        if (onPushed) {
          onPushed()
        }
      } else {
        pushToWithTransition(() => {
          router.push(href)
          if (onPushed) {
            onPushed()
          }
          window.setTimeout(() => {
            const element = document.getElementById(
              targetId!
            )
            if (!element) {
              return
            }
            animateScrollTo(element, {
              verticalOffset: 0
            })
          }, 500)
        })
      }
    },
    []
  )

  return (
    <Link href={href}>
      <a
        className={className}
        onClick={callback}
        data-target={target}
      >
        {children}
      </a>
    </Link>
  )
}

export function pushToWithTransition(push: () => void) {
  emitter.emit(EmitEvent.PAGE_TRANSITION_START)
  window.setTimeout(() => {
    window.scrollTo(0, 0)
    push()
  }, 300)
  window.setTimeout(() => {
    emitter.emit(EmitEvent.PAGE_TRANSITION_END)
  }, 1000)
}

export const Inner = styled.div`
  max-width: ${base(innerWidthPc)};
  width: 100%;
  margin: 0 auto;

  ${media.mobile} {
    max-width: 100%;
  }
`

export const SpBr = styled.br`
  display: none;

  ${media.mobile} {
    display: block;
  }
`

export const PcBr = styled.br`
  display: block;

  ${media.mobile} {
    display: none;
  }
`
