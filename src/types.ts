export type ButtonProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "className"
>;

export interface CategoryScoreProps {
  category: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: number;
}

export interface ResultSummaryProps {
  categoryScore: CategoryScoreProps[];
  bestOf: number;
}
