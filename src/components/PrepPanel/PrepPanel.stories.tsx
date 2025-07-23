import PrepPanel from './PrepPanel'

export default {
  title: 'PrepPanel',
  component: PrepPanel,
};

export const MockMode = () => <PrepPanel mock={true} />;
export const LiveMode = () => <PrepPanel mock={false} />;
