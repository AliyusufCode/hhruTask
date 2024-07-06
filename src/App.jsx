import "./App.css";
import Advantages from "./components/Advantages/Advantages";
import AppButtons from "./components/AppButtons/AppButtons";
import ButtonWhatsapp from "./components/ButtonWhatsapp/ButtonWhatsapp";
import Review from "./components/Review/Review";
import Text from "./components/Text/Text";
function App() {
  return (
    <div className="app">
      <Text />
      <Advantages />
      <ButtonWhatsapp />
      <AppButtons />
      <div>
        <img src="/bitcoin.png" alt="bitcoin" className="bitcoin" />
        <img src="/ethereum.png" alt="ethereum" className="ethereum" />
        <img src="/litecoin-mobile.png" alt="litecoin" className="litecoin" />
      </div>
      <span className="div">
        <Review
          name={"Lorenzo"}
          username={"@lorenzoo"}
          image={"/user1.png"}
          body={
            "Amazing Telegram bot! Provides real-time crypto prices and news"
          }
        />
      </span>
      <span className="block">
        <Review
          name={"Adalina"}
          username={"@ada"}
          image={"/user2.png"}
          body={
            "Must-have bot for crypto traders. Accurate signals and analysis"
          }
        />
      </span>
      <span className="div">
        <Review
          name={"Alexander"}
          username={"@alex_x"}
          image={"/user3.png"}
          body={"Superb cryptocurrency bot! Quick updates and reliable data"}
        />
      </span>
      <span className="block">
        <Review
          name={"Rushana"}
          username={"@Hana"}
          image={"/user4.png"}
          body={
            "Efficient and user-friendly bot. Simplifies crypto trading tasks"
          }
        />
      </span>
    </div>
  );
}

export default App;
