'use client';
import clsx from 'clsx'
import gsap from 'gsap';
import styles from './index.module.scss'

import type { CSSProperties } from 'react'

// Hooks
import { useGSAP } from '@gsap/react'
import { useMouse } from '@uidotdev/usehooks';

export function Decor() {
  const [mouse, ref] = useMouse<HTMLDivElement>();

  useGSAP(() => {
    const q = gsap.utils.selector(ref.current)
    const rectangleLists = q('[data-rectangles]')

    const tl = gsap.timeline()

    if (Array.isArray(rectangleLists)) {
      rectangleLists.forEach(elm => {
        const rectangles = elm.querySelectorAll('[data-rectangle]')

        tl.fromTo(rectangles, {
          opacity: 0,
          left: 'random(-50, 50)',
          top: 'random(-50, 50)'
        }, {
          opacity: 1,
          left: 0,
          top: 0,
          ease: "power3.inOut",
          duration: 1,
          stagger: { amount: 2, from: 'random' }
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
    style={{
      '--x': mouse.x / window.innerWidth,
      '--y': mouse.y / window.innerHeight
    } as CSSProperties & {
      '--x': number, '--y': number,
    }}
  >
    <div className={styles.cw}>
      <div
        data-rectangles
        className={styles.rectangles}
      >
        { rectanglesList }
      </div>
      <div
        data-rectangles
        className={clsx(styles.rectangles, styles.right)}
      >
        { rectanglesList }
      </div>
    </div>
  </div>
}