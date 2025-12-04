export default function ResumeIcon(props: { color?: string }) {
  const color = props.color || "#000000";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      id="Layer_1"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M428.63,38.24H83.37a6,6,0,0,0-6,6V467.73a6,6,0,0,0,6,6H428.63a6,6,0,0,0,6-6V44.27A6,6,0,0,0,428.63,38.24Zm-6,423.46H89.4V50.3H422.6Z"
      />
      <path
        fill={color}
        d="M138.9,178.57H373.1a6,6,0,0,0,0-12.06H138.9a6,6,0,0,0,0,12.06Z"
      />
      <path
        fill={color}
        d="M138.9,232.39H373.1a6,6,0,0,0,0-12.07H138.9a6,6,0,0,0,0,12.07Z"
      />
      <path
        fill={color}
        d="M138.9,286.21H373.1a6,6,0,0,0,0-12.06H138.9a6,6,0,0,0,0,12.06Z"
      />
      <path
        fill={color}
        d="M138.9,340H373.1a6,6,0,0,0,0-12.06H138.9a6,6,0,0,0,0,12.06Z"
      />
      <path
        fill={color}
        d="M138.9,393.86H287.08a6,6,0,0,0,0-12.07H138.9a6,6,0,0,0,0,12.07Z"
      />
    </svg>
  );
}
