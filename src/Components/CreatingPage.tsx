import { useEffect, useState } from "react";
import { useStorageContext } from "../context/StorageNoteCotext";
import { BackButton, SaveButton } from "../imgs/Imgs";
import DropdownCategory from "./DropdownCategory";
import { useSelectCategoryContext } from "../context/SelectCategoryContext";
import styled from "styled-components";

const StyledPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background-color: #252525;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
const StyledHeadOfPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
const StyledButton = styled.button`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background: #3b3b3b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;
const StyledForm = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`;
const StyledInput = styled.input`
  font-size: 48px;
  width: 100%;
  display: flex;
  gap: 2rem;
  border: none;
  outline: none;
  background: transparent;
  color: #ffff;
`;
const StyledTextarea = styled.textarea`
  font-size: 23px;
  line-height: 32px;
  display: grid;
  border: none;
  outline: none;
  background: transparent;
  color: #ffff;
  resize: none;
  width: 100%;
  height: 150px;
`;

interface IAppProps {
  toggleCreateComponent: () => void;
}

const getUniqId = () => {
  let uniqId = "";
  let symbols = "1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*()";
  let splited = symbols.split("");
  let random_symbols_arr = [];
  for (let i = 0; i < 10; i++) {
    let randomI = Math.floor(Math.random() * splited.length);
    random_symbols_arr.push(splited[randomI]);
  }
  uniqId = random_symbols_arr.join("");
  return uniqId;
};

interface INoteData {
  title: string;
  description: string;
  id: string;
  date: string;
  category: string;
}

export default function CreatingPage({ toggleCreateComponent }: IAppProps) {
  let { addNewNote } = useStorageContext();

  let { selectedValue } = useSelectCategoryContext();
  let [noteData, setNoteData] = useState<INoteData>({
    title: "",
    description: "",
    id: "",
    date: new Date().toLocaleDateString(),
    category: selectedValue,
  });

  useEffect(() => {
    noteData.category = selectedValue;
  }, [selectedValue]);

  const onAddNewNoteHandler = () => {
    if (noteData.title.length >= 1 && noteData.description.length >= 1) {
      noteData.id = getUniqId();
      addNewNote(noteData);
      toggleCreateComponent();
      console.log(noteData);
    }
  };
  return (
    <>
      <StyledPage>
        <StyledHeadOfPage>
          <StyledButton onClick={() => toggleCreateComponent()}>
            <BackButton />
          </StyledButton>

          <StyledButton onClick={() => onAddNewNoteHandler()}>
            <SaveButton />
          </StyledButton>
        </StyledHeadOfPage>
        <StyledForm>
          <StyledInput
            onChange={(e) => {
              setNoteData((prev) => ({ ...prev, title: e.target.value }));
            }}
            value={noteData.title}
            placeholder="Title"
          />
          <StyledTextarea
            onChange={(e) => {
              setNoteData((prev) => ({ ...prev, description: e.target.value }));
            }}
            placeholder="Type something..."
          />
        </StyledForm>
        <DropdownCategory />
      </StyledPage>
    </>
  );
}
