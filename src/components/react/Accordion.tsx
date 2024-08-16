import { useState, type PropsWithChildren } from "react";

interface Props {
  title: string;
}

function Accordion({ children, title }: PropsWithChildren<Props>) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="content-none after:my-6 after:block after:w-full after:border-b after:border-background-highlight">
      <div className="flex items-center justify-between">
        <h3 className="text-xl">{title}</h3>
        <button
          className="text-4xl"
          onClick={() => setExpanded((expanded) => !expanded)}
        >
          {String.fromCodePoint(!expanded ? 43 : 8722)}
        </button>
      </div>
      {expanded && <div className="p-2">{children}</div>}
    </div>
  );
}

export default Accordion;
