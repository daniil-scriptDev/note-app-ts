import styled from "styled-components";
import { useStorageContext } from "../context/StorageNoteCotext";
import EmptyState from "./EmptyStateOfMain";
import Note from "./Note";
import { useState } from "react";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Main() {
  let { notes } = useStorageContext();

  let [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <StyledMain>
        {!!notes.length ? <Note notes={notes} /> : <EmptyState />}
      </StyledMain>
    </>
  );
}
