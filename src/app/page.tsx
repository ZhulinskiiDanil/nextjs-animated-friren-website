'use client';
import styles from "./page.module.scss";

// Components
import { Decor } from "./components/Landing/Decor";
import { AnimeName } from "./components/Landing/AnimeName";
import { BackgroundIllustration } from "@/app/components/Landing/BackgroundIllustration";
import { Friren } from "./components/Landing/Friren";

// Gsap
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import { useEffect } from "react";

export default function Landing() {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin)
  }, [])

  return (
    <main className={styles.main}>
      <Decor />
      <Friren />
      <AnimeName />
      <BackgroundIllustration />
    </main>
  );
}
