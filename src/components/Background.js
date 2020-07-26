import React from "react";

export default function Background() {
  return (
    <>
      <div>
        <div style={{ position: "absolute", top: -80, left: -85 }}>
          <svg
            width="320"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FF0066"
              d="M62.2,-20.5C67.5,-3.8,49.8,20.2,26.1,37.8C2.4,55.5,-27.2,66.8,-43.2,56C-59.2,45.2,-61.5,12.2,-52,-10.2C-42.6,-32.5,-21.3,-44.3,3.6,-45.5C28.4,-46.7,56.9,-37.2,62.2,-20.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div style={{ position: "absolute", top: -150, right: -110 }}>
          <svg
            width="420"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FDB400"
              d="M66.8,-14C74.6,2.2,60.6,33.3,43.7,41C26.8,48.8,7,33.2,-14.6,18.1C-36.1,2.9,-59.3,-12,-57.2,-20.5C-55,-29,-27.5,-31.3,1,-31.6C29.5,-31.9,59,-30.3,66.8,-14Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div
          style={{
            position: "absolute",
            top: 320,
            left: -40,
            zIndex: 50,
          }}
        >
          <svg
            width="300"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#3D50E0"
              d="M43.6,-44.2C48.1,-39.1,37.6,-19.6,38.9,1.3C40.2,22.1,53.3,44.3,48.8,50.1C44.3,55.9,22.1,45.3,7.9,37.4C-6.4,29.5,-12.8,24.4,-22.9,18.6C-33,12.8,-46.8,6.4,-46.6,0.2C-46.5,-6.1,-32.4,-12.2,-22.3,-17.3C-12.2,-22.4,-6.1,-26.4,6.7,-33.1C19.6,-39.8,39.1,-49.3,43.6,-44.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div
          style={{
            position: "absolute",
            top: 320,
            right: -40,
            overflow: "hidden",
          }}
        >
          <svg
            width="300"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFBCBD"
              d="M36.6,-26.5C49.7,-23.4,64.3,-11.7,68.8,4.5C73.2,20.6,67.6,41.3,54.4,44.7C41.3,48.1,20.6,34.2,1.6,32.6C-17.5,31,-34.9,41.7,-46.5,38.3C-58.1,34.9,-63.9,17.5,-64.7,-0.9C-65.6,-19.2,-61.6,-38.4,-50,-41.4C-38.4,-44.4,-19.2,-31.3,-3.7,-27.6C11.7,-23.8,23.4,-29.5,36.6,-26.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div
          style={{
            position: "absolute",
            top: 240,
            left: 10,
          }}
        >
          <svg
            width="100"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#282459"
              d="M20.3,-18.3C28.7,3,39.8,16.2,36.9,31C33.9,45.8,17,62.3,-3.4,64.2C-23.7,66.2,-47.3,53.6,-55,36C-62.7,18.4,-54.4,-4.1,-42.6,-27.3C-30.8,-50.6,-15.4,-74.5,-4.7,-71.7C5.9,-69,11.8,-39.6,20.3,-18.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
