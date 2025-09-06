import styled from "styled-components";
import { NoteColors } from "../utils/constans";
import type { INotesProps } from "../context/StorageNoteCotext";
const StyledUl = styled.ul`
  width: 365px;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const StyledLi = styled.li`
  background-color: rgb(102, 102, 102);
  color: white;
  font-size: 25px;
  border-radius: 20px;
  padding: 15px;
  min-height: 100px;
  width: 100%;
  font-weight: medium;
`;
const StyleNoteData = styled.p`
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  font-weight: normal;
`;

interface StyledBookmarkProps {
  color?: string;
}

//const Button = styled.button<ButtonProps>`

const StyledBookmark = styled.div<StyledBookmarkProps>`
  width: 20px;
  height: 45px;
  margin-left: 70%;
  background-color: yellow;
  position: absolute;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 10px solid
      ${({ color }) => (color ? color : "rgb(102, 102, 102)")};
    //border-bottom: 10px solid inherit;
  }
`;

//type AvaibaleColors = keyof typeof NoteColors;

export default function Note({ notes }: { notes: INotesProps[] }) {
  return (
    <>
      <StyledUl>
        {notes.map(({ title, id, date, category }) => (
          <StyledLi style={{ backgroundColor: NoteColors[category] }} key={id}>
            <StyledBookmark color={NoteColors[category]} />
            {title}
            <StyleNoteData>
              <span>{date}</span>
              <span>{category === "Uncategorized" ? "" : category}</span>
            </StyleNoteData>
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );
}
