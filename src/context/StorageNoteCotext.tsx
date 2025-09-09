import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useSelectCategoryContext } from "./SelectCategoryContext";
import type { Categories, NoteColors } from "../utils/constans";

type AvaibaleColors = keyof typeof NoteColors;

export interface INotesProps {
  id: string;
  title: string;
  date: string;
  category: Categories;
}

interface IStorageNote {
  notes: INotesProps[];
  addNewNote: (newNote: INotesProps) => void;
}

const StorageNoteContext = createContext<null | IStorageNote>(null);

interface IStorageNoteProviderProps {
  children: ReactNode;
}

const StorageNoteProvider = ({ children }: IStorageNoteProviderProps) => {
  let { selectingCategory } = useSelectCategoryContext();
  const [notes, setNotes] = useState<INotesProps[]>(() => {
    let raw = localStorage.getItem("note");
    return raw ? JSON.parse(raw) : [];
  });
  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(notes));
  }, [notes]);

  const addNewNote = (newNote: INotesProps) => {
    setNotes((prev) => [newNote, ...prev]);
    selectingCategory("Uncategorized");
  };

  let value = {
    notes,
    addNewNote,
  };
  return (
    <StorageNoteContext.Provider value={value}>
      {children}
    </StorageNoteContext.Provider>
  );
};

const useStorageContext = () => {
  const context = useContext(StorageNoteContext);
  if (!context) {
    throw new Error(
      "useStorageContext must be used within a StorageNoteProvider"
    );
  }

  return context;
};
export { StorageNoteProvider, useStorageContext };
