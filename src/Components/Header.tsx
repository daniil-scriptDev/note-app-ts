import styled from "styled-components";
import { InfoIcon, SearchIcon } from "../imgs/Imgs";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  color: white;
  font-size: 48px;
`;
const StyledGroupButtons = styled.div`
  display: flex;
  padding-right: 7px;
  gap: 10px;
`;
const StyledButton = styled.button`
  width: 48px;
  height: 48px;
  background: #3b3b3b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;
interface IAppProps {
  toggleSearchComponent: () => void;
  toggleAboutInfoComponent: () => void;
}
export default function Header({
  toggleSearchComponent,
  toggleAboutInfoComponent,
}: IAppProps) {
  return (
    <>
      <StyledHeader>
        <h1 className="font-mono">Notes</h1>
        <StyledGroupButtons>
          <StyledButton onClick={() => toggleSearchComponent()}>
            <SearchIcon />
          </StyledButton>
          <StyledButton onClick={() => toggleAboutInfoComponent()}>
            <InfoIcon />
          </StyledButton>
        </StyledGroupButtons>
      </StyledHeader>
    </>
  );
}
