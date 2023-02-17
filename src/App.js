import Cards from "./Containers/Cards/Cards";
import Questions from "./Containers/FAQ/Questions";
import Footer from "./Containers/Footer/Footer";
import Home from "./Containers/Home/Home";
import Portfolio from "./Containers/Portfolio/Portfolio";
import SkillPage from "./Containers/SkillPage/SkillPage";
import WorldPage from "./Containers/WorldPage/WorldPage";
import { AccardionData, BoxData, FooterData, HomeData, SkillData } from "./Data";

function BasicExample() {
  return (
    <>
      <Home dataHome={HomeData} />
      <SkillPage SkillData={SkillData} />
      <Portfolio />
      <Cards data={BoxData} />
      <Questions data={AccardionData} />
      <WorldPage />
      <Footer data={FooterData} />
    </>
  );
}

export default BasicExample;

