import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import theme from "./theme";

type MuiThemeProviderPropsType = {
  children: ReactNode;
};

export default function MuiThemeProvider({
  children,
}: MuiThemeProviderPropsType) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
