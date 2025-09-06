import styled from "styled-components";
import { GitHubLogo } from "../imgs/Imgs";

let StyledAboutAppComp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
let StyledContentInComp = styled.div`
  height: 225px;
  width: 300px;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

interface IAppProps {
  toggleAboutInfoComponent: () => void;
}
export default function AboutAppComp({ toggleAboutInfoComponent }: IAppProps) {
  return (
    <>
      <StyledAboutAppComp onClick={() => toggleAboutInfoComponent()}>
        <StyledContentInComp>
          <p>Hello, this Note-App i coded on TS! See more on my GitHub</p>
          <a href="https://github.com/daniil-scriptDev?tab=repositories">
            <GitHubLogo />
          </a>
        </StyledContentInComp>
      </StyledAboutAppComp>
    </>
  );
}
