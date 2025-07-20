import React from "react";
import { ConfigProvider } from "../../src/config/configSchema";

export const MockConfigProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ConfigProvider.Provider value={{ scalingFactor: 100, enableAI: true }}>
    {children}
  </ConfigProvider.Provider>
);
