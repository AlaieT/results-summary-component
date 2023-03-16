import React from "react";

import IconReaction from "../../../public/images/icon-reaction.svg";
import IconMemory from "../../../public/images/icon-memory.svg";
import IconVerbal from "../../../public/images/icon-verbal.svg";
import IconVisual from "../../../public/images/icon-visual.svg";

import styles from "../../styles/components/categoryScore.module.scss";

interface CategoryScoreProps {
  category: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: number;
}

const ICONS = {
  Reaction: IconReaction,
  Memory: IconMemory,
  Verbal: IconVerbal,
  Visual: IconVisual,
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
