import { ResponsivePie } from '@nivo/pie'
import data from './../components/DataOfPie';
import { Box, useTheme } from '@mui/material';

const Pie = () => {
    const theme = useTheme();
    return (
    <Box sx={{ height: { xs: '45vh', sm: '60vh', md: '80vh' } }}>
    <ResponsivePie /* or Pie for fixed dimensions */

    theme={{
          text: {
            fontSize: 14,
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
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-180}
        innerRadius={0.55}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 40,
                itemWidth: 84,
                itemHeight: 16,
                symbolShape: 'circle'
            }
        ]}
    />
    </Box>
)}

export default Pie;