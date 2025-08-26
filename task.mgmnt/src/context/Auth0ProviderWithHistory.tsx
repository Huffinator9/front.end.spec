// src/context/Auth0ProviderWithHistory.tsx

import React, { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

interface Props {
  children: ReactNode;
}

const Auth0ProviderWithHistory: React.FC<Props> = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN!;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID!;
  const redirectUri = window.location.origin;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
