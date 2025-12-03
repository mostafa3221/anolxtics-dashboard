import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import data from "./../components/DataOfBar";
const Bar = () => {
    const theme = useTheme();
  return (
    <Box sx={{ height: { xs: '50vh', sm: '65vh', md: '80vh' } }}>
      <ResponsiveBar /* or Bar for fixed dimensions */
        theme={{
          text: {
            fontSize: 0,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 14,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 12,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 14,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
              },
            },
            text: {
              fontSize: 12,
              fill: theme.palette.text.secondary,
              outlineWidth: 0,
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 12,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 14,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
            },
            link: {
              stroke: theme.palette.primary.main,
              strokeWidth: 1,
              outlineWidth: 0,
            },
            outline: {
              stroke: theme.palette.primary.main,
              strokeWidth: 1,
              outlineWidth: 0,
            },
            symbol: {
              fill: theme.palette.primary.main,
              outlineWidth: 0,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
              fontSize: 14,
              boxShadow: theme.shadows[2],
              borderRadius: theme.shape.borderRadius,
              padding: theme.spacing(1),
            },
          },
        }}
        data={data}
        keys={[
          "revenue",
          "expenses",
          "consumption",
          "production",
          "exports",
          "imports",
        ]}
        indexBy="country"
        groupMode="grouped"
        padding={0.2}
        labelSkipWidth={12}
        labelSkipHeight={12}
        colors={{ scheme: "paired" }}
        borderColor={{ theme: "background" }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            translateX: 80,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 16,
          },
        ]}
        axisBottom={{ legend: "country", legendOffset: 32 }}
        axisLeft={{ legend: "", legendOffset: -40 }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      />
    </Box>
  );
};

export default Bar;
