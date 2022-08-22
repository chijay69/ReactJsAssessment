import CompletePurchase from './pages/CompletePurchase';
import BillingInfo from './pages/BillingInfo';
import ConfirmPayment from './pages/ConfirmPayment';
import PurchaseCompleted from './pages/PurchaseCompleted';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-[url('./images/background.svg')] bg-cover min-h-screen  bg-no-repeat font-ProductSans">
          <Routes>
            <Route path="/" element={<CompletePurchase />} />
            <Route path="/billingInfo" element={<BillingInfo />} />
            <Route path="/confirmPayment" element={<ConfirmPayment />} />
            <Route path="/purchaseCompleted" element={<PurchaseCompleted />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
