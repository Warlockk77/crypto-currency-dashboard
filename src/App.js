import "./App.css";
import Navbar from "./componenents/navbar/Navbar";
import CoinsDetails from "./componenents/coins/CoinsDetails";
import Exchange from "./componenents/exchange/Exchange";
import Portfolio from "./componenents/charts/Portfolio";
import LineChart from "./componenents/charts/LineChart";
import CryptoDropDown from "./componenents/drop-down-selectors/CryptoDropDown";
import CurrencyDropDown from "./componenents/drop-down-selectors/CurrencyDropDown";

import ChartDropDown from "./componenents/drop-down-selectors/ChartDropDown";
import TimeSpan from "./componenents/TimeSpan/TimeSpan";
import VerticalBarChart from "./componenents/charts/VeticalBarChart";
import { useSelector } from "react-redux";
import SearchBar from "./componenents/search-bar/SearchBar";

function App() {
  const chartType = useSelector(
    (state) => state.selectChartType.selectedChartType
  );
  return (
    <div className="app">
      <Navbar />
      <div className="zero">
        <div className="half">
          <div className="one">
            <CurrencyDropDown />
            <SearchBar className="searchbar" />
          </div>
          <div className="two">
            <TimeSpan />
            <div className="dd">
              <CryptoDropDown />
              <ChartDropDown />
            </div>
          </div>
          <div className="resp-col">
            {chartType === "verticalBarChart" ? (
              <VerticalBarChart />
            ) : (
              <LineChart />
            )}
          </div>
          <div className="three">
            <Portfolio />
            <Exchange />
          </div>
        </div>
        <CoinsDetails />
      </div>
    </div>
  );
}

export default App;
