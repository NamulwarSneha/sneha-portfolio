import { Component } from "react";
import "./index.css";
import { TailSpin } from 'react-loader-spinner';
import Footer from "../Footer";
import Header from "../Header";
class LearnWithMe extends Component {
  renderLoader = () => (
    <div data-testid="loader" className="products-loader-container"></div>
  );
  render() {
    return (
      <>
        <Header />
        <div style={{ background: "aquamarine" }}>
          <div className="learn-with-me-section">
            <TailSpin
              height={50}
              width={50}
              color="blue"
              ariaLabel="loading"
            />

            <h1>Coming Soon</h1>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default LearnWithMe;