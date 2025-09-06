import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import RoundedButton from "./Components/RoundedButton";
import CreatingPage from "./Components/CreatingPage";
import SearchingPage from "./Components/SearchingPage";
import AboutAppComp from "./Components/AboutAppComp";

export default function App() {
  let [isCreatingPageVisible, setIsCreatingPageVisible] =
    useState<boolean>(false);
  let toggleCreateComponent = () => {
    setIsCreatingPageVisible((prev) => !prev);
  };
  let [isSearchingPageVisible, setIsSearchingPageVisible] =
    useState<boolean>(false);
  let toggleSearchComponent = () => {
    setIsSearchingPageVisible((prev) => !prev);
  };
  let [isAboutCompVisible, setIsAboutCompVisible] = useState<boolean>(false);
  let toggleAboutInfoComponent = () => {
    setIsAboutCompVisible((prev) => !prev);
  };
  // потребує оптимізації

  return (
    <>
      <Header
        toggleAboutInfoComponent={toggleAboutInfoComponent}
        toggleSearchComponent={toggleSearchComponent}
      />
      <MainContainer />
      <RoundedButton toggleCreateComponent={toggleCreateComponent} />
      {isCreatingPageVisible && (
        <CreatingPage toggleCreateComponent={toggleCreateComponent} />
      )}
      {isSearchingPageVisible && (
        <SearchingPage toggleSearchComponent={toggleSearchComponent} />
      )}
      {isAboutCompVisible && (
        <AboutAppComp toggleAboutInfoComponent={toggleAboutInfoComponent} />
      )}
    </>
  );
}
