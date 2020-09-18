import { useEffect, useState } from 'react';

export function usePromise<T, P>(
  makePromise: () => Promise<T>,
  initialState: P,
  deps: unknown[]
) {
  const [state, setState] = useState<P | T>(initialState);

  useEffect(() => {
    let mounted = true;

    function settle(result: P | T) {
      if (mounted) {
        setState(result);
      }
    }

    makePromise().then(settle).catch(settle);

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
