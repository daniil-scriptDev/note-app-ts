import { createContext, useContext, useState, type ReactNode } from "react";

interface ISelecterCategory {
  selectedValue: string;
  setSelectedValue?: React.Dispatch<React.SetStateAction<string>>;
  selectingCategory: (key: string) => void;
}

let SelectCategoryContext = createContext<null | ISelecterCategory>(null);

interface ISelectCategoryProvider {
  children: ReactNode;
}

const SelectCategoryProvider = ({ children }: ISelectCategoryProvider) => {
  const [selectedValue, setSelectedValue] = useState<string>("Uncategorized");
  let selectingCategory = (key: string) => {
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
