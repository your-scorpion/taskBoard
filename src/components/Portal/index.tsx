import React, { PropsWithChildren, PropsWithoutRef } from "react";
import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";

/**
 * @example
 * <Portal id="modal">
 *   <p>Thinking with portals</p>
 * </Portal>
 */

interface IPortalProps {
  id: string;
  classname?: string;
}

const Portal: React.FC<React.PropsWithChildren<IPortalProps>> = ({
  id,
  children,
  classname,
}) => {
  const target = usePortal(id);
  return createPortal(<div className={classname}>{children}</div>, target);
};

export default Portal;
