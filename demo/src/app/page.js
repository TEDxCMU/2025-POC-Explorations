import Image from "next/image";
import styles from "./page.module.css";

import Card from "./components/card";

const numbers = ["Ethan","Roshni","YG","Felicia","Abhay"]; 

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {numbers.map((item, index)=>(
          Card(index, item)
        ))}
      </main>
    </div>
  );
}
