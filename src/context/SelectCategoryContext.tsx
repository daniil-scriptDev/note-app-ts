import { createContext, useContext, useState, type ReactNode } from "react";
import type { Categories } from "../utils/constans";

interface ISelecterCategory {
  selectedValue: Categories;
  setSelectedValue?: React.Dispatch<React.SetStateAction<Categories>>;
  selectingCategory: (key: Categories) => void;
}

let SelectCategoryContext = createContext<null | ISelecterCategory>(null);

interface ISelectCategoryProvider {
  children: ReactNode;
}

const SelectCategoryProvider = ({ children }: ISelectCategoryProvider) => {
  const [selectedValue, setSelectedValue] =
    useState<Categories>("Uncategorized");
  let selectingCategory = (key: Categories) => {
    setSelectedValue(key);
  };
  let value = {
    selectedValue,
    selectingCategory,
  };
  return (
    <SelectCategoryContext.Provider value={value}>
      {children}
    </SelectCategoryContext.Provider>
  );
};

const useSelectCategoryContext = () => {
  const context = useContext(SelectCategoryContext);
  if (!context) {
    throw new Error(
      "useSelectCategoryContext must be used within a SelectCategoryProvider"
    );
  }
  return context;
};
export { useSelectCategoryContext, SelectCategoryProvider };
