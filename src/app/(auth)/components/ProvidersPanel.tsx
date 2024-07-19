import { getProviders } from "next-auth/react";
import React from "react";

export const ProvidersPanel = async () => {
  const providers = await getProviders().then((res) =>
    res ? Object.values(res) : []
  );
  return (
    <div className="grid sm:grid-cols-2 justify-center justify-items-center gap-x-0.5 gap-y-2">
      {(providers || []).map((provider) => {
        if (provider.id !== "credentials")
          return <div key={provider.id}>Hello</div>;
        else return;
      })}
    </div>
  );
};
