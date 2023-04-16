import React from "react";

import type { CategoryScoreProps } from "../../types";

import { ReactComponent as IconReaction } from "../../assets/images/icon-reaction.svg";
import { ReactComponent as IconMemory } from "../../assets/images/icon-memory.svg";
import { ReactComponent as IconVerbal } from "../../assets/images/icon-verbal.svg";
import { ReactComponent as IconVisual } from "../../assets/images/icon-visual.svg";

import styles from "../../styles/components/categoryScore.module.scss";

const ICONS = {
  Reaction: <IconReaction width={24} height={24} />,
  Memory: <IconMemory width={24} height={24} />,
  Verbal: <IconVerbal width={24} height={24} />,
  Visual: <IconVisual width={24} height={24} />,
};

const CategoryScore = ({ category, score }: CategoryScoreProps) => {
  return (
    <div className={styles.container + " " + styles[category]}>
      <div className={styles.category}>
        {ICONS[category]}
        {category}
      </div>
      <div className={styles.score}>
        {score}
        <span>&nbsp;/&nbsp;100</span>
      </div>
    </div>
  );
};

export default CategoryScore;
