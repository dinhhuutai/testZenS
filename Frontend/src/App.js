import Header from "./Header";
import './App.css';

function App() {
    return <div>
      <Header />
      <div className="wrapper-body-top">
        <h1 className="body-top-title">A joke a day keeps the doctor away</h1>
        <p className="body-top-des">If you joke wrong way, your teeth have to pay. (Serious)</p>
      </div>

      <div className="wrapper-body-center">
        <p className="body-center-content">
          A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."
        </p>
        <div className="body-center-line"></div>
        <div className="body-center-wrapper-btn">
          <button className="btn-funny">This is Funny!</button>
          <button className="btn-not-funny">This is not Funny.</button>
        </div>
      </div>

      <div className="line"></div>

      <div className="footer">
        <p className="footer-des">
          This website is created as part of Hlsolutions program. The materials contained on this website are provided for general
        </p>
        <p className="footer-des">
          information only and do not constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and
        </p>
        <p className="footer-des">
          accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.
        </p>
        <p className="co">Copyright 2021 HLS</p>
      </div>
    </div>;
}

export default App;
