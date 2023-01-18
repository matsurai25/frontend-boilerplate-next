import { useRouter } from 'next/router'
import { useState, useEffect, useCallback } from 'react'
import { isMobile } from './const'
import { pageview } from './gtag'

const preLoadingImages = isMobile() ? [] : []

// const preLoadingVideos = [
//   'movie/01.mp4',
// ]

export function useAssetsLoading() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  var progressLocal = 0

  useEffect(() => {
    const promises: Promise<any>[] = []

    function countUp() {
      progressLocal++
      setProgress(progressLocal / promises.length)
    }

    // 最短で500ms秒待たせる
    promises.push(
      new Promise((res) => {
        setTimeout(() => {
          countUp()
          res(true)
        }, 500)
      })
    )

    for (const imagePath of preLoadingImages) {
      promises.push(
        new Promise((res) => {
          const img = new Image()
          img.onload = () => {
            countUp()
            res(true)
          }
          img.src = imagePath
        })
      )
    }

    // for (const videoPath of preLoadingVideos) {
    //   promises.push(
    //     new Promise((res) => {
    //       var video = document.createElement('video')
    //       // video.preload = 'metadata'
    //       video.oncanplay = () => {
    //         console.log(videoPath)
    //         countUp()
    //         res(true)
    //       }
    //       video.src = videoPath
    //     })
    //   )
    // }

    Promise.all(promises).then(() => {
      window.setTimeout(() => setIsLoaded(true), 1000)
    })
    return
  }, [])

  return { isLoaded, progress }
}

export function usePageView() {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (path: string) => {
      pageview(path)
    }

    router.events.on(
      'routeChangeComplete',
      handleRouteChange
    )

    return () => {
      router.events.off(
        'routeChangeComplete',
        handleRouteChange
      )
    }
  }, [router.events])
}
