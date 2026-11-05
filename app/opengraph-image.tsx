
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "USHR Co. — Professional Ushering and Protocol Services";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public", "ushr-logo.png"),
    "base64"
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#07111f",
          color: "#ffffff",
          padding: 80,
        }}
      >
        <img
          src={`data:image/png;base64,${logo}`}
          width="250"
          height="100"
          style={{ objectFit: "contain" }}
          alt="USHR Co."
        />

        <div
          style={{
            display: "flex",
            marginTop: 42,
            fontSize: 65,
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Excellence at every entrance.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#67e8f9",
          }}
        >
          Professional Ushering | Protocol | Events
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 20,
            color: "#cbd5e1",
          }}
        >
          Nairobi, Kenya
        </div>
      </div>
    ),
    size
  );
}
