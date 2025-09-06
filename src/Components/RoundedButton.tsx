import styled from "styled-components";
import { AddNewNoteButtonIcon } from "../imgs/Imgs";
const StyledAddNewNoteButton = styled.button`
  width: 70px;
  height: 70px;
  cursor: pointer;
  background-color: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.7);
  transition: box-shadow 0.3s ease;
  position: fixed;
  bottom: 50px;
  right: 15px;
`;

interface IAppProps {
  toggleCreateComponent: () => void;
}

export default function RoundedButton({ toggleCreateComponent }: IAppProps) {
  return (
    <>
      <StyledAddNewNoteButton onClick={() => toggleCreateComponent()}>
        <AddNewNoteButtonIcon />
      </StyledAddNewNoteButton>
    </>
  );
}
