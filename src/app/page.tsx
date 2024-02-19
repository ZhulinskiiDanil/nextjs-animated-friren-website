import styles from "./page.module.scss";

// Components
import { Decor } from "./components/Landing/Decor";
import { BackgroundIllustration } from "@/app/components/Landing/BackgroundIllustration";

export default function Landing() {
  return (
    <main className={styles.main}>
      <Decor />
      <BackgroundIllustration />
    </main>
  );
}
