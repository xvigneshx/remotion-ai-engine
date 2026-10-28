import React from "react";
import {Composition} from "remotion";
import {GeneratedComposition} from "./compositions/GeneratedComposition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="GeneratedContent"
        component={GeneratedComposition}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};