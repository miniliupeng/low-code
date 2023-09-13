// import * as React from "react";
// import { createReactMaterial, withMaterialNode } from "@lgnition-lowcode/core";
import { Editor, Frame, Element } from "@craftjs/core";

// export interface TextProps {
//   children?: React.ReactNode;
// }

// const TextView = React.forwardRef<HTMLDivElement, TextProps>((props, ref) => {
//   return <div ref={ref}>{props.children}</div>;
// });

// export const Text = createReactMaterial(withMaterialNode<TextProps>(TextView), {
//   displayName: "文本组件",
// });

import { useNode } from "@craftjs/core";

const TextComponent = ({ text }) => {
  const {
    connectors: { connect,drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <h2>{text}</h2>
    </div>
  );
};

const Container = ({ padding, background, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))} style={{ padding, background }}>
      {children}
    </div>
  );
};

function App() {
  return (
    <Editor resolver={{ TextComponent, Container }}>
      <Frame>
        <Element is={Container} padding={5} background="#999" canvas>
          <TextComponent text={1111} />
          <Element is={Container} padding={2} background="#999" canvas>
            <TextComponent text={2222} />
          </Element>
        </Element>
      </Frame>
    </Editor>
  );
}

export default App;
