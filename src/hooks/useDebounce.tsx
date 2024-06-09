"use client";

import { useEffect, useState } from "react";

function useDebounce(value: string, wait = 0): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const tid = setTimeout(() => setDebouncedValue(value), wait);

    return () => clearTimeout(tid);
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
