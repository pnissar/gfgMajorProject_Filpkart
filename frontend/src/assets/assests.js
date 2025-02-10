import Appl from "./Appl.svg";
import Mens from "./men.svg";
import Sports from "./Sport.svg";
import Furniture from "./Fur.svg";
import Electronics from "./elec.svg";
import kids from "./kid.svg";
import Womens from "./women.svg";

const imglink = (img) => {
  const updatedUrl = img.replace(/\/\d+\/\d+\//, "/428/428/");
  return updatedUrl;
};

const logoss = {
  Appliances: Appl,
  Mens: Mens,
  "Sports,Exersices&More": Sports,
  "Home&Furniture": Furniture,
  Electronics: Electronics,
  Kids: kids,
  Womens: Womens,
};
export default logoss;
export { imglink };
