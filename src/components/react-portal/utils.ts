export function createWrapperAndAppendToBody(
  wrapperId: string,
): HTMLDivElement {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}
