'use client';
import clsx from "clsx"
import styles from "./page.module.scss"

// Hooks
import { CSSProperties, useState } from "react"

// Components
import { Decor } from "./components/Landing/Decor"
import { Friren } from "./components/Landing/Friren"
import { SideMenu } from "./components/Landing/SideMenu";
// import { AnimeName } from "./components/Landing/AnimeName";
import { EpisodesList } from "./components/Landing/EpisodesList"
import { BackgroundIllustration } from "@/app/components/Landing/BackgroundIllustration"

// Gsap
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { TextPlugin } from "gsap/all"
import { Texts } from "./components/Landing/Texts";
import { useMouse, useWindowSize } from "@uidotdev/usehooks";

export default function Landing() {
  const [mouse] = useMouse();
  const [date, setDate] = useState<null | Date>(null)
  const windowSize = useWindowSize();

  const day = date && date.toLocaleDateString('ru', { day: 'numeric' })
  const month = date && date.toLocaleDateString('ru', { month: 'long' })
  const year = date && date.toLocaleDateString('ru', { year: 'numeric' })

  useGSAP(() => {
    setDate(new Date())

    gsap.registerPlugin(TextPlugin)
  })

  return (
    <main
      className={styles.main}
      style={{
        '--x': mouse.x / (windowSize.width || 1),
        '--y': mouse.y / (windowSize.height || 1)
      } as CSSProperties & {
        '--x': number, '--y': number,
      }}
    >
      <BackgroundIllustration />
      <Decor />
      <Friren className={styles.person} />
      <SideMenu
        className={clsx(styles.sidemenu, styles.left)}
        items={[
          { name: 'Telegram', href: 'https://t.me/ZhulinskyDanil' },
          { name: 'GitHub', href: 'https://github.com/ZhulinskiiDanil' }
        ]}
      />
      <SideMenu
        className={clsx(styles.sidemenu, styles.right)}
        items={[
          { name: day || '' },
          { name: year || '' },
          { name: month || '' }
        ]}
      />
      {/* <AnimeName /> */}
      <Texts text="Sousou no Frieren" />
      <EpisodesList className={styles.episodes} />
    </main>
  );
}
