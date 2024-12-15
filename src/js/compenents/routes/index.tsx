import { RouteObject, createBrowserRouter } from "react-router-dom";
import IndexPage from "..";
import homeRoutes from "../../pages/Home/routes";
import whatsAppRoutes from "../../pages/WhatsAppChat/routes";
import patientRecordRoutes from "../../pages/PatientRecord/routes";
import manageStaffRoutes from "../../pages/ManageStaff/routes";
import paymentRecordRoutes from "../../pages/PaymentRecord/routes";
import analyticsRoutes from "../../pages/Analytics/routes";
import appointRoutes from "../../pages/Appointments/routes";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <IndexPage />,
    children: [
      ...homeRoutes,
      ...appointRoutes,
      ...whatsAppRoutes,
      ...patientRecordRoutes,
      ...manageStaffRoutes,
      ...paymentRecordRoutes,
      ...analyticsRoutes,
    ],
  },
];

export const router = createBrowserRouter(appRoutes);
