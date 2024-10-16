import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ReactNode } from "react";
import LanguageProvider from "./LanguageProvider/LanguageProvider";

type ProvidersPropsType = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersPropsType) {
  return (
    <LanguageProvider>
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
    </LanguageProvider>
  );
}
