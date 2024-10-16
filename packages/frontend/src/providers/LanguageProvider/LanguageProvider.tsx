import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";

type LanguageProviderPropsType = {
  children: ReactNode;
};

export default async function LanguageProvider({
  children,
}: LanguageProviderPropsType) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
