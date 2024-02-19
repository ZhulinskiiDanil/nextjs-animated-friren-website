'use client';
import clsx from 'clsx'
import gsap from 'gsap';
import styles from './index.module.scss'

import type { CSSProperties } from 'react';

// Hooks
import { useGSAP } from '@gsap/react';
import { useMouse, useWindowSize } from '@uidotdev/usehooks';

// Components
import Image from 'next/image'

export function Friren() {
  const [mouse, ref] = useMouse<HTMLDivElement>();
  const windowSize = useWindowSize();

  useGSAP(() => {
    gsap.fromTo(ref.current, {
      scale: .95,
      marginTop: 48,
      filter: 'grayscale(100%)',
      opacity: 0,
    }, {
      scale: 1,
      marginTop: 0,
      filter: 'grayscale(0%)',
      opacity: 1,
      duration: 2,
      delay: 1
    })
  })

  return <div
    ref={ref}
    className={styles.person}
    style={{
      '--x': mouse.x / (windowSize.width || 1),
      '--y': mouse.y / (windowSize.height || 1)
    } as CSSProperties & {
      '--x': number, '--y': number,
    }}
  >
    <div className={styles.wrapper}>
      <div className={clsx(styles.sprite, styles.leftEye)}>
        <Image
          src="/sprites/friren/left-eye.png"
          alt="Sprite"
          priority
          fill
        />
      </div>
      <div className={clsx(styles.sprite, styles.rightEye)}>
        <Image
          src="/sprites/friren/right-eye.png"
          alt="Sprite"
          priority
          fill
        />
      </div>
      <div className={clsx(styles.sprite, styles.main)}>
        <Image
          src="/sprites/friren/main.png"
          alt="Sprite"
          priority
          fill
        />
      </div>
    </div>
  </div>
}