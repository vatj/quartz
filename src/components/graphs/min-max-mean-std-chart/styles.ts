import { SxStyleProp } from 'rebass';

export const statsChartStyle = (): SxStyleProp => ({
  width: '100%',
  padding: '60px 20px 70px 20px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#f5f5f5',
  fontFamily: 'Inter, sans-serif',
});

export const statsChartCtn = (width: string): SxStyleProp => ({
  width: width,
  margin: 'auto',
});

export const statsChartLine = (height: string, width: string) => ({
  height: height,
  background: `rgba(0, 0, 0, 0.3)`,
  width: width,
  position: 'relative',
});

export const statChartLabelBox = {
  position: 'absolute',
};

export const statChartLabelBoxLabel = {
  fontWeight: 'bold',
  color: '#a0a0a0',
  fontSize: '10px',
};

/* ----------- Mean ----------- */
export const meanStyle = (height: string): SxStyleProp => ({
  position: 'absolute',
  height: height,
  width: height,
  background: '#000',
  borderWidth: height,
  borderStyle: 'Solid',
  borderColor: 'rgba(0, 0, 0, 0.3)',
  webkitBackgroundClip: 'padding-box',
  backgroundClip: 'padding-box',
  margin: '-' + height,
  left: '30px',
});

export const meanLabelbox = (): SxStyleProp => ({
  top: '-40px',
  textAlign: 'center',
  width: '100px',
  marginLeft: '-50px',
});

/* ----------- Min ----------- */

export const minStyle = (height: string): SxStyleProp => ({
  position: 'absolute',
  height: height,
  width: height,
  background: '#000',
  borderWidth: height,
  borderStyle: 'Solid',
  borderColor: `rgba(0, 0, 0, 0.1)`,
  webkitBackgroundClip: 'padding-box',
  backgroundClip: 'padding-box',
  margin: '-' + height,
  left: 0,
  borderRadius: '99px',
});

export const minStyleLabelBox = {
  top: '-16px',
  right: '16px',
  textAlign: 'right',
  width: '100px',
};

/* ----------- Max ----------- */

export const maxStyle = (height: string): SxStyleProp => ({
  position: 'absolute',
  height: height,
  width: height,
  background: '#000',
  borderWidth: height,
  borderStyle: 'Solid',
  borderColor: `rgba(255, 0, 0, 0.1)`,
  webkitBackgroundClip: 'padding-box',
  backgroundClip: 'padding-box',
  margin: '-' + height,
  right: 0,
  borderRadius: '99px',
});

export const maxStyleLabelBox = {
  top: '-16px',
  left: '16px',
  textAlign: 'left',
  width: '100px',
};

/* ----------- Std Dev. ----------- */

export const stddStyle = (height: string): SxStyleProp => ({
  position: 'absolute',
  height: height,
  webkitBackgroundClip: 'padding-box',
  backgroundClip: 'padding-box',
  left: '30px',
  top: '0px',
  width: '100px',
  marginLeft: '1px',
});

export const stdLine = (height: string): SxStyleProp => ({
  height: height,
  background: `rgba(0, 0, 0, 0.1)`,
  webkitBackgroundClip: 'padding-box',
  backgroundClip: 'padding-box',
  margin: '-' + height,
  left: 0,
  width: '40px',
  //   margin: 'auto',
  marginBottom: '4px',
  position: 'relative',
});

export const stdLineBlackStyle = (): SxStyleProp => ({
  position: 'absolute',
  width: '50%',
  height: '100%',
  background: '#000',
});

export const stddLabelBox = {
  top: '16px',
  textAlign: 'center',
  width: '100px',
  marginLeft: '-50px',
};
