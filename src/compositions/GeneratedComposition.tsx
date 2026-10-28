import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

export const GeneratedComposition: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 20, 280, 299],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.ease),
    },
  );

  const scale = interpolate(
    frame,
    [0, 299],
    [0.9, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#080D14",
        color: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          textAlign: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            color: "#55B8FF",
            fontSize: 24,
            letterSpacing: 8,
            marginBottom: 24,
          }}
        >
          AI CONTENT ENGINE
        </div>

        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          YOUR NEXT
          <br />
          CREATIVE PROJECT
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#9CAFC4",
            marginTop: 28,
          }}
        >
          Generated with Remotion
        </div>
      </div>
    </AbsoluteFill>
  );
};