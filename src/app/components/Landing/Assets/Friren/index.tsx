'use client';
import clsx from 'clsx'
import gsap from 'gsap';
import styles from './index.module.scss'

import type { CSSProperties, HTMLAttributes } from 'react';

// Hooks
import { useGSAP } from '@gsap/react';
import { useMouse, useWindowSize } from '@uidotdev/usehooks';

// Components
import Image from 'next/image'

export function Friren({
  className, style, ...props
}: HTMLAttributes<HTMLDivElement>) {
  const [mouse, ref] = useMouse<HTMLDivElement>();
  const windowSize = useWindowSize();

  useGSAP(() => {
    const target = gsap.utils.selector(ref.current)('[data-wrapper]')

    gsap.from(target, {
      top: 48,
      scale: .95,
      opacity: 0,
      filter: 'grayscale(100%)',
      duration: 1,
      delay: 1.5
    })
  })

  return <div
    ref={ref}
    className={clsx(styles.person, className)}
    style={{
      '--x': mouse.x / (windowSize.width || 1),
      '--y': mouse.y / (windowSize.height || 1),
      ...style
    } as CSSProperties & {
      '--x': number, '--y': number,
    }}
    {...props}
  >
    <div data-wrapper className={styles.wrapper}>
      <div className={styles.content}>
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
  </div>
}