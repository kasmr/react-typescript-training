import React, { useState, useRef } from 'react';

interface Person {
  firstName: string;
  lasName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => number | string | Array<string>;
  obj?: {
    f1: string;
  };
  person?: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = ({ text, handleChange }) => {
  const [state, setState] = useState<number>(5);

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
      {text}
      state: {state}
    </div>
  );
};

export default TextField;
