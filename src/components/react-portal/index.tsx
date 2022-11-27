import { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { createWrapperAndAppendToBody } from './utils';

type ReactPortalProps = PropsWithChildren<{
  wrapperId: string;
}>;

export function ReactPortal({
  children,
  wrapperId = 'react-portal-wrapper',
}: ReactPortalProps): JSX.Element | null {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null,
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    // if element is not found with wrapperId
    // or wrapperId is not provided, create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      // delete the programmatically created element
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  // wrapperElement state will be null on the very first render
  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
}
