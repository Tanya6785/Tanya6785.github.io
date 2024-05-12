import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./routes/app-layout/app-layout.jsx";
import { HomePage } from "./routes/home-page/home-page.jsx";
import { PortfolioPage } from "./routes/portfolio-page/portfolio-page.jsx";
import {
  ROUTE_ABOUT,
  ROUTE_HOME,
  ROUTE_PORTFOLIO,
  ROUTE_PRICE,
  ROUTE_RECORD,
  ROUTE_REVIEW,
} from "./shared/constants/routes.js";
import { AboutPage } from "./routes/about-page/about-page.jsx";
import { ServiceAndPricePage } from "./routes/services-and-price-page/service-and-price-page.jsx";
import { RecordPage } from "./routes/record-page/record-page.jsx";
import { ReviewPage } from "./routes/review-page/review-page.jsx";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path={ROUTE_HOME} element={<AppLayout />}>
        <Route path={ROUTE_HOME} element={<HomePage />} />
        <Route path={ROUTE_PRICE} element={<ServiceAndPricePage />} />
        <Route path={ROUTE_ABOUT} element={<AboutPage />} />
        <Route path={ROUTE_REVIEW} element={<ReviewPage />} />
        <Route path={ROUTE_PORTFOLIO} element={<PortfolioPage />} />
        <Route path={ROUTE_RECORD} element={<RecordPage />} />
      </Route>
    </Routes>
  );
};


