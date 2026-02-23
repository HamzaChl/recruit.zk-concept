import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import ImprintPage from "./pages/ImprintPage";
import LegalNoticePage from "./pages/LegalNoticePage";
import { NosOpportunitesPage } from "./pages/NosOpportunitesPage";
import { PourquoiNousRejoindrePage } from "./pages/PourquoiNousRejoindrePage";
import { ProcessusRecrutementPage } from "./pages/ProcessusRecrutementPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/pourquoi-nous-rejoindre"
            element={<PourquoiNousRejoindrePage />}
          />
          <Route path="/nos-opportunites" element={<NosOpportunitesPage />} />
          <Route
            path="/processus-de-recrutement"
            element={<ProcessusRecrutementPage />}
          />
          <Route
            path="/politique-de-confidentialite"
            element={<PrivacyPolicyPage />}
          />
          <Route path="/mentions-legales" element={<LegalNoticePage />} />
          <Route path="/imprint" element={<ImprintPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
