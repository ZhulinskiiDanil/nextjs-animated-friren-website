import { useMouse, useWindowSize } from '@uidotdev/usehooks'

import { CSSProperties } from 'react'
import bridge from './assets/bridge.png'
import fern from './assets/fern.png'
import friren from './assets/friren.png'
import gsap from 'gsap'
import styles from './index.module.scss'
import { useGSAP } from '@gsap/react'

export function MangaBackground() {
  const [mouse, target] = useMouse<HTMLDivElement>();
  const windowSize = useWindowSize();

  useGSAP(() => {
    const q = gsap.utils.selector(target.current)
    const rectImage1 = q('[data-animate-image-1]'),
      rectImage2 = q('[data-animate-image-2]'),
      rectImage3 = q('[data-animate-image-3]')
    const rect1 = q('[data-animate-1]'),
      rect2 = q('[data-animate-2]'),
      rect3 = q('[data-animate-3]')

    const tl = gsap.timeline()
    gsap.set([
      rect1, rect2, rect3,
      rectImage1, rectImage2, rectImage3
    ], {
      opacity: 1,
      attr: {
        ['transform']: 'rotate(0, 0, 0) translate(0, 0) scale(1)'
      }
    })

    tl.fromTo(target.current, {
      background: '#ff66a133'
    }, {
      duration: 3,
      background: 'transparent'
    })

    tl.from(rectImage2, {
      duration: 3,
      attr: {
        ['x']: '0%',
        ['y']: '0%'
      }
    }, '<')
    tl.from(rect2, {
      duration: 3,
      opacity: 0,
      attr: {
        ['transform']: 'rotate(-10, 0, 0) translate(501, -200)'
      }
    }, '<')

    tl.from(rectImage3, {
      duration: 3,
      attr: {
        ['x']: '20%',
        ['y']: '-10%'
      }
    }, '<+=.25')
    tl.from(rect3, {
      duration: 3,
      attr: {
        ['transform']: 'rotate(15, 0, 0) translate(1000, 200)'
      }
    }, '<')

    tl.from(rectImage1, {
      duration: 3,
      attr: {
        ['x']: '-20%',
        ['y']: '-60%'
      }
    }, '<')
    tl.from(rect1, {
      duration: 3,
      opacity: 0,
      attr: {
        ['transform']: 'rotate(30, 0, 0) translate(-800, 1000)'
      }
    }, '<')
  })

  return <div
    ref={target}
    className={styles.bg}
    style={{
      '--x': mouse.x / (windowSize.width || 1),
      '--y': mouse.y / (windowSize.height || 1)
    } as CSSProperties & {
      '--x': number, '--y': number,
    }}
  >
    <svg
      className={styles.main}
      viewBox="0 0 1920 1080"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin slice"
      fill="none"
    >
      <defs>
        <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image
            data-animate-image-1
            href={friren.src}
            width="100%" height="100%"
            x="-40%" y="0"
          />
        </pattern>
        <pattern id="img2" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image
            data-animate-image-2
            href={fern.src}
            width="100%" height="100%"
          />
        </pattern>
        <pattern id="img3" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image
            data-animate-image-3
            href={bridge.src}
            width="100%" height="100%"
            x="38%" y="35%"
          />
        </pattern>
      </defs>
      <path
        data-animate-1
        className={styles.path}
        d="M0 256C0 135.32 0 74.9807 37.4903 37.4903C74.9807 0 135.32 0 256 0L393 0C399.5 0 402.749 0 405.496 0.118051C471.87 2.97068 525.029 56.1296 527.882 122.504C528 125.251 528 128.5 528 135V150C528 216.274 581.726 270 648 270C714.274 270 768 323.726 768 390V824C768 944.68 768 1005.02 730.51 1042.51C693.019 1080 632.68 1080 512 1080H256C135.32 1080 74.9807 1080 37.4903 1042.51C0 1005.02 0 944.68 0 824L0 256Z"
        x="15%" y="0"
        fill="url(#img1)"
        fill-opacity="1"
      />
      <path
        data-animate-2
        className={styles.path}
        d="M672 1.50003C602.525 1.50003 545.977 56.8512 544.051 125.861C544.047 127.045 544.039 128.349 544.029 129.73C544.015 131.854 544 134.161 544 136.5V151.5C550.5 222 608 259 653.5 255.5C733 259 784 325.227 784 391.501L784 526.001C784 596.693 841.307 654.001 912 654.001L1664 654.001C1784.68 654.001 1845.02 654.001 1882.51 616.51C1920 579.02 1920 518.68 1920 398.001V391.501V257.5C1920 136.82 1920 76.4807 1882.51 38.9904C1845.02 1.50003 1784.68 1.50003 1664 1.50003H672Z"
        x="15%" y="0"
        fill="url(#img2)"
        fill-opacity="1"
      />
      <rect
        data-animate-3
        className={styles.path}
        x="786" y="670"
        width="1118"
        height="394"
        rx="128"
        fill="url(#img3)"
        fill-opacity="1"
      />
    </svg>
  </div>
}