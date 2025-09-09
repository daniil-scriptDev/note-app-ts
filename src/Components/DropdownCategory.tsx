import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { useSelectCategoryContext } from "../context/SelectCategoryContext";
import type { Categories } from "../utils/constans";
export default function DropdownCategory() {
  let { selectedValue, selectingCategory } = useSelectCategoryContext();
  let categories: Array<Categories> = ["Work", "Personal", "Others"];

  return (
    <div className="flex justify-end mt-5">
      <Dropdown className=" h-10">
        <DropdownTrigger className="h-5 w-30 text-white">
          {selectedValue === "Uncategorized" ? "+ Add category" : selectedValue}
        </DropdownTrigger>
        <DropdownMenu
          className="border border-[#1e1e1e] shadow-md shadow-black/50 w-30 h-30 text-white"
          aria-label="Static Actions"
        >
          {categories.map((category) => (
            <DropdownItem
              onClick={() => selectingCategory(category)}
              className="mt-3"
              key={category}
            >
              {category}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
