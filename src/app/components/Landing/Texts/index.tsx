import styles from './index.module.scss'
import type { CSSProperties } from 'react';

// Hooks
import { useMouse, useWindowSize } from '@uidotdev/usehooks';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Texts({ text }: { text: string }) {
  const [mouse, ref] = useMouse<HTMLDivElement>();
  const windowSize = useWindowSize();

  useGSAP(() => {
    const q = gsap.utils.selector(ref.current)
    const text = q('[data-text]')

    if (Array.isArray(text)) {
      text.forEach(text => {
        const q = gsap.utils.selector(text)
        const letters = q('[data-letter]')

        gsap.from(letters, {
          x: 'random(-100, 100)',
          y: 'random(-100, 100)',
          rotation: 'random(-90, 90)',
          scale: .25,
          opacity: 0,
          duration: 1,
          stagger: { amount: 3, from: 'center' }
        })
      })
    }
  })

  return <div
    ref={ref}
    className={styles.texts}
    style={{
      '--x': mouse.x / (windowSize.width || 1),
      '--y': mouse.y / (windowSize.height || 1)
    } as CSSProperties & {
      '--x': number, '--y': number,
    }}
  >
    <div data-text className={styles.text}>
      {text.repeat(3).split('').map((elm, index) => (
        <span data-letter>{ elm }</span>
      ))}
    </div>
    <div data-text className={styles.text}>
      {text.repeat(3).split('').map((elm, index) => (
        <span data-letter>{ elm }</span>
      ))}
    </div>
  </div>
}