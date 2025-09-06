import styled from "styled-components";
import { BackButton } from "../imgs/Imgs";
import { useStorageContext } from "../context/StorageNoteCotext";
import { useState } from "react";
import Note from "./Note";
import EmptyStateOfSearch from "./EmptyStateOfSearch";

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
  color: white;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
const StyledInput = styled.input`
  display: flex;
  height: 50px;
  width: 320px;
  border-radius: 30px;
  background-color: #3b3b3b;
  padding: 0 20px;
`;
interface IAppProps {
  toggleSearchComponent: () => void;
}
export default function SearchingPage({ toggleSearchComponent }: IAppProps) {
  let { notes } = useStorageContext();
  let [filteredNotes, setFilteredNotes] = useState(notes);
  let [inputValue, setInputValue] = useState<string>("");

  let onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let keyWord = e.target.value;
    setInputValue(keyWord);
    setFilteredNotes(notes.filter((note) => note.title.includes(keyWord)));
  };

  return (
    <>
      <StyledPage>
        <div className="flex justify-between">
          <button className="" onClick={() => toggleSearchComponent()}>
            <BackButton />
          </button>
          <StyledInput
            value={inputValue}
            onChange={onInputHandler}
            placeholder="Search by the keyword..."
          />
        </div>
        {filteredNotes.length > 0 && inputValue ? (
          <Note notes={filteredNotes} />
        ) : (
          <EmptyStateOfSearch />
        )}
      </StyledPage>
    </>
  );
}
