"use client";

import { useEffect, useRef, useState, type MutableRefObject } from "react";

interface Props {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}
const useElementOnScreen = (props: Props): [MutableRefObject<any>, boolean] => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  const callbackFn = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    setVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFn, props);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, props]);

  return [ref, visible];
};

export default useElementOnScreen;
