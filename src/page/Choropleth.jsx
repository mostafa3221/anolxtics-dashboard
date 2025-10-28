import { ResponsiveChoropleth } from '@nivo/geo'
import world_countries from './../components/world_countries';
import { Box, useTheme } from '@mui/material';
import data from '../components/DataChoropleth';

const Choropleth = () => {
    const countries = world_countries();
    const theme = useTheme();
    return (
        <Box sx={{height:"80vh", border:"1px solid theme.palette.text.primary"  }}>
    <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
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
        features={countries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="RdBu"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ]}
    />
    </Box>
    )}

export default Choropleth;