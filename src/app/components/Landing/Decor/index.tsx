'use client';
import clsx from 'clsx'
import gsap from 'gsap';
import styles from './index.module.scss'

import { CSSProperties, useState } from 'react'

// Hooks
import { useGSAP } from '@gsap/react'
import { useMouse, useWindowSize } from '@uidotdev/usehooks';

export function Decor() {
  const [animationEnded, setAnimationEnded] = useState(false)
  const [mouse, ref] = useMouse<HTMLDivElement>();
  const windowSize = useWindowSize();

  useGSAP(() => {
    const q = gsap.utils.selector(ref.current)
    const rectangleLists = q('[data-rectangles]')

    const tl = gsap.timeline()

    if (Array.isArray(rectangleLists)) {
      rectangleLists.forEach(elm => {
        const rectangles = elm.querySelectorAll('[data-rectangle]')

        tl.fromTo(rectangles, {
          opacity: 0,
          left: 'random(-100, 100)',
          top: 'random(-100, 100)',
          scale: 0,
          rotateZ: 'random(-10deg, 10deg)'
        }, {
          opacity: 1,
          left: 0,
          top: 0,
          scale: 1,
          rotateZ: '-30deg',
          ease: "power3.inOut",
          duration: 3,
          stagger: { amount: 1, from: 'random' },

          onComplete() {
            setAnimationEnded(true)
          }
        }, '<')
      })
    }
  })

  const rectanglesList = Array(20).fill(null).map((_, index) => (
    <div
      key={index}
      className={styles.rectangle}
      data-rectangle
    ></div>
  ))

  return <div
    ref={ref}
    className={styles.decor}
    data-animation-ended={animationEnded}
    style={{
      '--x': mouse.x / (windowSize.width || 1),
      '--y': mouse.y / (windowSize.height || 1)
    } as CSSProperties & {
      '--x': number, '--y': number,
    }}
  >
    <div className={styles.triangles}>
      <div className={styles.triangle}></div>
      <div className={styles.triangle}></div>
    </div>
    <div className={styles.cw}>
      <div
        data-rectangles
        className={styles.rectangles}
      >
        { rectanglesList }
      </div>
      <div
        data-rectangles
        className={styles.rectangles}
      >
        { rectanglesList }
      </div>
    </div>
  </div>
}