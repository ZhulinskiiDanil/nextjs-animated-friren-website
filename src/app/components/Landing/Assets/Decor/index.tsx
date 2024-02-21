'use client';
import clsx from 'clsx'
import gsap from 'gsap';
import styles from './index.module.scss'

import { CSSProperties } from 'react'

// Hooks
import { useGSAP } from '@gsap/react'
import { useMouse, useWindowSize } from '@uidotdev/usehooks';

export function Decor() {
  const [mouse, ref] = useMouse<HTMLDivElement>();
  const windowSize = useWindowSize();

  useGSAP(() => {
    // const q = gsap.utils.selector(ref.current)
    // const rectangleLists = q('[data-rectangles]')
  })

  return <div
    ref={ref}
    className={styles.decor}
    style={{
      '--x': mouse.x / (windowSize.width || 1),
      '--y': mouse.y / (windowSize.height || 1)
    } as CSSProperties & {
      '--x': number, '--y': number,
    }}
  >
    <div className={styles.cw}>
      {/* TODO: Add text */}
    </div>
  </div>
}