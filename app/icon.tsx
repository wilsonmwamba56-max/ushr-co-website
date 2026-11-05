
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#07111f",
          border: "3px solid #67e8f9",
          borderRadius: 14,
          color: "#ffffff",
          fontSize: 42,
          fontWeight: 800,
        }}
      >
        U
      </div>
    ),
    size
  );
}
