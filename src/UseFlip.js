import {useState} from 'react';

const useFlip = (initialValue = true) => {
  const [value, setValue] = useState(initialValue);
  const flip = () => {
    setValue(oldValue => !oldValue);
  };

  return [value, flip];
}

export default useFlip;