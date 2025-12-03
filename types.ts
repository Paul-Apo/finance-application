import {ReactNode} from "react";

export interface ExpenseType {
  id: string;
  name: string;
  amount: string;
  percentage: string;
}

export interface SpendingType {
  id: number;
  category: string;
  amount: number;
  date: string;
}

export interface ProfileItemProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  rightElement?: ReactNode;
}
