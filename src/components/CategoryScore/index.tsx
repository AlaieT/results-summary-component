import React from "react";

import styles from "../../styles/components/categoryScore.module.scss";

interface CategoryScoreProps {
  category: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: number;
}

const ICONS = {
  Reaction: "/images/icon-reaction.svg",
  Memory: "/images/icon-memory.svg",
  Verbal: "/images/icon-verbal.svg",
  Visual: "/images/icon-visual.svg",
};

const CategoryScore = ({ category, score }: CategoryScoreProps) => {
  return (
    <div className={styles.container + " " + styles[category]}>
      <div className={styles.category}>
        <img
          src={ICONS[category]}
          width={24}
          height={24}
          alt={"icon-" + category}
        />
        {category}
      </div>
      <div className={styles.score}>
        {score}
        <span>&nbsp;/&nbsp;100</span>
      </div>
    </div>
  );
};

export type { CategoryScoreProps };
export default CategoryScore;
