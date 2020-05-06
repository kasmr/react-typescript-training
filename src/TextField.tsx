import React, { useState } from 'react';

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
}

const TextField: React.FC<Props> = ({ text }) => {
  const [state, setState] = useState<number | null | undefined>(5);

  setState(undefined);

  return (
    <div>
      <input />
      {text}
    </div>
  );
};

export default TextField;
