import { Tooltip as ReactToolTip } from 'react-tooltip';

const Tooltip = ({ tooltipId, children, delayHide, delayShow }) => {
  return (
    <>
      {children}
      <ReactToolTip
        id={tooltipId}
        className={`text-md font-mono font-semibold`}
        delayHide={delayHide}
        delayShow={delayShow}
      />
    </>
  );
};

export default Tooltip;
