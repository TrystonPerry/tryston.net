// "use client";

// import { useEffect, useRef, useState } from "react";
// import REGL from "regl";

export default function regl() {
  return <h1>Hello World</h1>;
}

// export default function Regl() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
//   const targetMousePosRef = useRef({ x: 0, y: 0 });
//   const smoothMousePosRef = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     // Set initial dimensions
//     const updateDimensions = () => {
//       setDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight * 0.8,
//       });
//     };

//     updateDimensions();

//     // Add resize listener
//     window.addEventListener("resize", updateDimensions);

//     return () => {
//       window.removeEventListener("resize", updateDimensions);
//     };
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!canvasRef.current) return;

//       const rect = canvasRef.current.getBoundingClientRect();
//       // Convert to normalized coordinates (-1 to 1) with aspect ratio correction
//       const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
//       const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1); // Flip Y

//       // Apply aspect ratio correction
//       const aspectRatio = dimensions.width / dimensions.height;
//       targetMousePosRef.current = { x: x * aspectRatio, y };
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [dimensions]);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const regl = REGL({
//       canvas: canvasRef.current,
//       attributes: {
//         antialias: true,
//         preserveDrawingBuffer: true,
//       },
//     });

//     const fragmentShader = `
//       precision mediump float;

//       uniform vec3 iResolution;
//       uniform float iTime;
//       uniform vec2 iMouse;

//       // SDF utility library functions
//       float opU(float d1, float d2);
//       float sdCircle(in vec2 p, in vec2 pos, float radius);
//       float sdBox(in vec2 p, in vec2 pos, in vec2 size);
//       float sminCubic(float a, float b, float k);
//       float opBlend(float d1, float d2);

//       // --- SDF - TODO! --------------------------------------------------------------

//       float sdf(vec2 p)
//       {
//           float d = 1000.0;

//           // Multiple circles with varying sizes at different positions
//           d = opU(d, sdCircle(p, vec2(-0.8, 0.5), 0.25));
//           d = opU(d, sdCircle(p, vec2(0.6, -0.4), 0.35));
//           d = opU(d, sdCircle(p, vec2(-0.3, -0.6), 0.15));
//           d = opU(d, sdCircle(p, vec2(0.9, 0.7), 0.18));
//           d = opU(d, sdCircle(p, vec2(-0.9, -0.3), 0.28));
//           d = opU(d, sdCircle(p, vec2(0.2, 0.3), 0.22));

//           // Blended circles for more organic shapes
//           d = opU(d, opBlend(sdCircle(p, vec2(0.1, -0.1), 0.15), sdCircle(p, vec2(0.5, 0.1), 0.35)));

//           // Cursor-following circle
//           d = opU(d, sdCircle(p, iMouse, 0.12));

//           return d;
//       }

//       // ------------------------------------------------------------------------------

//       // useful functions defined below
//       vec2 screenToWorld(vec2 screen);
//       vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d);
//       vec3 shade(float sd);

//       // compute pixel colour
//       void mainImage( out vec4 fragColor, in vec2 fragCoord )
//       {
//           // project screen coordinate into world
//           vec2 p = screenToWorld(fragCoord);

//           // signed distance for scene
//           float sd = sdf(p);

//           // compute signed distance to a colour
//           vec3 col = shade(sd);

//           fragColor = vec4(col, 1.0);
//       }

//       // --- SDF utility library

//       float sdCircle(in vec2 p, in vec2 pos, float radius)
//       {
//           return length(p-pos)-radius;
//       }

//       float sdBox(in vec2 p, in vec2 pos, in vec2 size)
//       {
//           vec2 d = abs(p-pos)-size;
//           return min(0.0, max(d.x, d.y))+length(max(d,0.0));
//       }

//       // polynomial smooth min (k = 0.1);
//       float sminCubic(float a, float b, float k)
//       {
//           float h = max(k-abs(a-b), 0.0);
//           return min(a, b) - h*h*h/(6.0*k*k);
//       }

//       float opU(float d1, float d2)
//       {
//           return min(d1, d2);
//       }

//       float opBlend(float d1, float d2)
//       {
//           float k = 0.2;
//           return sminCubic(d1, d2, k);
//       }

//       // --- Misc functions

//       // https://www.shadertoy.com/view/ll2GD3
//       vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d)
//       {
//           t = clamp(t, 0., 1.);
//           return a + b*cos(6.28318*(c*t+d));
//       }

//       vec2 screenToWorld(vec2 screen)
//       {
//           vec2 result = 2.0 * (screen/iResolution.xy - 0.5);
//           result.x *= iResolution.x/iResolution.y;
//           return result;
//       }

//       vec3 shade(float sd)
//       {
//           // Solid black background
//           vec3 col = vec3(0.0);

//           // Glow effect with color gradient
//           float glow = 0.005 / abs(sd);
//           glow = clamp(glow, 0.0, 1.0);

//           // Create a colorful gradient based on distance and time
//           vec3 glowColor1 = vec3(0.2, 0.5, 1.0); // Blue
//           vec3 glowColor2 = vec3(1.0, 0.2, 0.8); // Pink/Magenta
//           vec3 glowColor3 = vec3(0.3, 1.0, 0.5); // Green/Cyan

//           // Vary color based on position and time
//           float colorMix = sin(iTime * 0.5 + sd * 3.0) * 0.5 + 0.5;
//           vec3 glowColor = mix(glowColor1, glowColor2, colorMix);
//           glowColor = mix(glowColor, glowColor3, sin(iTime * 0.3) * 0.5 + 0.5);

//           // Apply glow
//           col += glowColor * glow * 0.8;

//           // Smooth filled area with gradient inside
//           if (sd < 0.0) {
//               float fillGradient = smoothstep(-0.2, 0.0, sd);
//               vec3 fillColor = glowColor * 0.3;
//               col = mix(fillColor, col, fillGradient);
//           }

//           // Smooth bright edge
//           float edge = 1.0 - smoothstep(0.0, 0.02, abs(sd));
//           col += glowColor * edge * 0.8;

//           return col;
//       }

//       void main() {
//         mainImage(gl_FragColor, gl_FragCoord.xy);
//       }
//     `;

//     const vertexShader = `
//       precision mediump float;
//       attribute vec2 position;

//       void main() {
//         gl_Position = vec4(position, 0, 1);
//       }
//     `;

//     const drawTriangles = regl({
//       frag: fragmentShader,
//       vert: vertexShader,
//       attributes: {
//         position: [
//           [-1, -1],
//           [1, -1],
//           [-1, 1],
//           [-1, 1],
//           [1, -1],
//           [1, 1],
//         ],
//       },
//       uniforms: {
//         iResolution: ({ viewportWidth, viewportHeight }) => [
//           viewportWidth,
//           viewportHeight,
//           1,
//         ],
//         iTime: ({ tick }) => tick * 0.01,
//         iMouse: () => [
//           smoothMousePosRef.current.x,
//           smoothMousePosRef.current.y,
//         ],
//       },
//       count: 6,
//       primitive: "triangles",
//     });

//     // Animation loop
//     const frameLoop = regl.frame(() => {
//       // Smooth lerp for mouse position with ease-in-out
//       const smoothingFactor = 0.08; // Lower = more smoothing/delay
//       smoothMousePosRef.current.x +=
//         (targetMousePosRef.current.x - smoothMousePosRef.current.x) *
//         smoothingFactor;
//       smoothMousePosRef.current.y +=
//         (targetMousePosRef.current.y - smoothMousePosRef.current.y) *
//         smoothingFactor;

//       regl.clear({
//         color: [0, 0, 0, 1],
//         depth: 1,
//       });

//       drawTriangles();
//     });

//     return () => {
//       frameLoop.cancel();
//       regl.destroy();
//     };
//   }, [dimensions]);

//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-black">
//       <canvas
//         ref={canvasRef}
//         width={dimensions.width}
//         height={dimensions.height}
//         className="w-[100vw] h-[80vh]"
//       />
//     </div>
//   );
// }
