import { Box, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line'
import data from './../components/DataLine';
const Line = () => {
    const theme = useTheme();
    return (

    <Box sx={{ height: { xs: '50vh', sm: '65vh', md: '80vh' } }}>
    <ResponsiveLine /* or Line for fixed dimensions */
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
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        axisBottom={{ 
          legend: 'Categories', 
          legendOffset: 36,
          tickRotation: -45
        }}
        axisLeft={{ 
          legend: 'Values', 
          legendOffset: -40,
          format: value => 
            new Intl.NumberFormat('en-US', {
              notation: 'compact',
              compactDisplay: 'short',
            }).format(value)
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        areaOpacity={0.25}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 60,
                itemWidth: 72,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
    </Box>
)}
export default Line;