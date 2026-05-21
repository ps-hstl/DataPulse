import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

/**
 * KPITicker — Extra Feature #2
 * A horizontally scrolling live ticker bar showing key business metrics.
 * Place it at the top of Dashboard or Layout for a real-time feel.
 *
 * Usage: <KPITicker data={dashboardData} />
 */

const defaultMetrics = [
  { label: "Total Revenue", value: "$1.24M", change: +5.2 },
  { label: "Active Users", value: "3,842", change: +12.1 },
  { label: "Transactions Today", value: "284", change: -2.4 },
  { label: "Avg Order Value", value: "$128.50", change: +1.8 },
  { label: "New Customers", value: "94", change: +8.3 },
  { label: "Return Rate", value: "3.2%", change: -0.5 },
  { label: "Gross Margin", value: "42.7%", change: +0.9 },
];

const KPITicker = ({ data }) => {
  const theme = useTheme();
  const metrics = data || defaultMetrics;

  // Duplicate for seamless infinite scroll
  const items = [...metrics, ...metrics];

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: theme.palette.background.alt,
        borderBottom: `1px solid ${theme.palette.secondary[700]}`,
        py: "6px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "3rem",
          width: "max-content",
          animation: "tickerScroll 30s linear infinite",
          "&:hover": { animationPlayState: "paused" },
          "@keyframes tickerScroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: `translateX(-50%)` },
          },
        }}
      >
        {items.map((metric, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              whiteSpace: "nowrap",
              px: "1rem",
            }}
          >
            <Typography
              fontSize="0.72rem"
              fontWeight="600"
              sx={{ color: theme.palette.secondary[300], textTransform: "uppercase", letterSpacing: "0.05em" }}
            >
              {metric.label}
            </Typography>
            <Typography
              fontSize="0.8rem"
              fontWeight="bold"
              sx={{ color: theme.palette.grey[0] }}
            >
              {metric.value}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
              {metric.change >= 0 ? (
                <TrendingUpIcon sx={{ fontSize: "0.9rem", color: "#4caf50" }} />
              ) : (
                <TrendingDownIcon sx={{ fontSize: "0.9rem", color: "#f44336" }} />
              )}
              <Typography
                fontSize="0.72rem"
                fontWeight="600"
                sx={{ color: metric.change >= 0 ? "#4caf50" : "#f44336" }}
              >
                {metric.change >= 0 ? "+" : ""}{metric.change}%
              </Typography>
            </Box>
            <Typography sx={{ color: theme.palette.secondary[700], ml: "0.5rem" }}>
              |
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default KPITicker;
