// DataPulse — Teal + Orange color palette
export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000",
  },
  primary: {
    // Deep Teal
    100: "#cce8e8",
    200: "#99d1d1",
    300: "#66b9b9",
    400: "#33a2a2",
    500: "#008b8b", // core teal
    600: "#006f6f",
    700: "#005353",
    800: "#003838",
    900: "#001c1c",
  },
  secondary: {
    // Vibrant Orange
    50: "#fff4ec",
    100: "#ffe9d9",
    200: "#ffd3b3",
    300: "#ffbd8d",
    400: "#ffa767",
    500: "#ff9141", // core orange
    600: "#cc7434",
    700: "#995727",
    800: "#663a1a",
    900: "#331d0d",
  },
};

function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[700], // dark teal bg
              alt: tokensDark.primary[600],
            },
          }
        : {
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","), // changed from Inter
      fontSize: 12,
      h1: { fontFamily: ["Poppins", "sans-serif"].join(","), fontSize: 40 },
      h2: { fontFamily: ["Poppins", "sans-serif"].join(","), fontSize: 32 },
      h3: { fontFamily: ["Poppins", "sans-serif"].join(","), fontSize: 24 },
      h4: { fontFamily: ["Poppins", "sans-serif"].join(","), fontSize: 20 },
      h5: { fontFamily: ["Poppins", "sans-serif"].join(","), fontSize: 16 },
      h6: { fontFamily: ["Poppins", "sans-serif"].join(","), fontSize: 14 },
    },
  };
};
