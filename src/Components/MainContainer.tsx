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

/* interface IColorsCategories {
  Work: string;
  "Daily affairs": string;
  Personal: string;
  Others: string;
}
*/
/* const colors = {
  Work: "#0ea5e9",
  "Daily affairs": "#f97316",
  Personal: "#d946ef",
  Others: "#10b981",
};
 */

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

/* background-color: ${(props) => props.$bgColor || "#BF4F74"} */
