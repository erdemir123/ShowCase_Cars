import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
export interface OptionProps {
  title: string;
  value: string;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}
export interface HomeProps {
  searchParams: FilterProps;
}