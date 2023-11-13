import React, { ReactElement, FC, SVGProps } from 'react';

interface IconProps {
  className?: string;
}


export const GithubIcon: React.FC<IconProps> = ({ className }: IconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);


export const LinkedInIcon: FC<IconProps> = ({ className }: IconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);


export const PinterestIcon: FC<IconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    {/* ... (rest of the SVG code) ... */}
  </svg>
);


export const DribbbleIcon: FC<IconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#E74D89"
      d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
    />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);


export const SunIcon: FC<IconProps> = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        {React.createElement('set', {
        attributeName: 'opacity',
        begin: '0.5s',
        to: '1'
        })}
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      {React.createElement('set', {
        attributeName: 'opacity',
        begin: '0.5s',
        to: '0'
        })}
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);


export const MoonIcon: FC<IconProps> = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      {React.createElement('set', {
        attributeName: 'opacity',
        begin: '0.5s',
        to: '0'
        })}
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      {React.createElement('set', {
        attributeName: 'opacity',
        begin: '0.5s',
        to: '1'
        })}
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);


export const CircularText: FC<IconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={1440}
    viewBox="0 0 1080 1080"
    xmlSpace='preserve'
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M580.2 60.6c-2.5 1.7-2.9 5.1-.9 7.8s7.7 1.8 9.6-1.6c1.5-2.5 1.4-2.9-.8-5.2-2.8-3-4.7-3.2-7.9-1zM544.7 82.6c-.4.4-.7 2.9-.7 5.6 0 2.6-.2 4.8-.5 4.8s-2.5-1.6-5-3.5c-7.9-6-17.9-7.8-28-5.1-14.3 3.8-22 13.9-22 29.1 0 9.4 2.1 14.7 8.6 21.2 6.5 6.6 9.8 7.8 21.9 7.8 11.6 0 15.1-1.2 21.8-7.4 1.8-1.7 3.5-3.1 3.8-3.1.9 0 .3 13.7-.7 17.5-2.1 7.7-8.9 12.3-19.7 13.2-7.7.6-17.4-1.4-23-4.9l-3.5-2.1-1.8 2.4c-1.6 2.2-1.7 2.5-.1 4.2 2.3 2.6 9.3 5.5 16.5 6.8 13.4 2.4 29.1-1.8 34.9-9.2 5.6-7.4 6.1-10.9 5.3-38.4-.4-13.8-1-28.2-1.4-32-.6-6.6-.8-7-3.1-7.3-1.4-.2-2.9 0-3.3.4zm-11.3 10.8c2.6 1.5 5.9 4.6 7.4 6.8 2.4 3.8 2.7 5 2.7 13.3 0 8.5-.2 9.4-2.8 12.9-8.3 10.7-24 13.4-35.2 5.8-10.5-7.1-12.6-24.3-4.3-33.8 5.4-6.2 11.5-8.5 21-8 5 .2 7.8 1 11.2 3zM577.6 90.2c-1.1 10.4-3.6 38.5-4.2 47.5l-.7 9.3h3.6c4.3 0 4 1.3 6.2-25 2.1-25.9 2.4-29 3.1-33.3l.7-3.7h-8.2l-.5 5.2zM612.7 88.7c-.2.4-.7 2.6-1.1 4.8-.4 2.2-1.3 6.7-2.1 10-4.2 18.1-8.5 38.4-8.7 41.4-.3 3 .1 3.6 2.5 4.5 3.6 1.3 4 .7 6.1-9.8 5.1-24.4 7.3-30.5 12.6-34.9 8.5-7.2 24.8-5.3 31.4 3.6 3.3 4.4 2.7 15.6-1.8 34.6-1.9 8.4-3.4 15.7-3.1 16.1.9 1.4 5.5 1.7 6.6.4 1.7-2 8.9-36.1 8.9-42.1 0-12.6-7.4-20.5-21.7-23.3-7.3-1.5-13.2-.4-20.2 3.7l-4.4 2.5.7-2.7c1.8-7 1.9-8.5.5-8.5-.8 0-2.4-.3-3.5-.6-1.2-.3-2.4-.2-2.7.3zM365.5 93.9c-6 2.6-17.6 7.6-25.7 11.1-8.2 3.4-14.8 6.4-14.8 6.5 0 .3 21.1 50.5 28.8 68.4 1.5 3.5 3.3 6.6 4 6.9.8.3 9.3-2.9 19-7.1 9.8-4.1 21.3-9 25.6-10.9 4.4-1.8 8.1-3.8 8.3-4.4.2-.6-.4-2.1-1.4-3.3l-1.8-2.1-22.4 9.5c-12.3 5.2-22.4 9.5-22.6 9.5-.9 0-12.5-28.4-11.8-29 .4-.4 8.9-4.2 18.8-8.5 19.9-8.5 20.9-9.2 18.2-12.9-1.2-1.6-2.7-1.1-20.6 6.5-10.9 4.6-19.6 7.8-20.1 7.3-1.2-1.2-11-24.5-11-26 0-.7 6.6-4 14.8-7.5 8.1-3.4 17-7.2 19.7-8.4 2.8-1.2 5.8-2.5 6.8-2.8 2-.7 2.2-3.6.5-5.9-1.2-1.5-2.4-1.1-12.3 3.1zM439.3 93.5c-7 1.9-12.8 5.9-16.6 11.4-1.7 2.5-3.2 4.1-3.3 3.5-.2-.5-.8-2.8-1.4-5.2-1.1-4.2-1.2-4.3-4.3-3.7-1.8.4-3.3.9-3.5 1-.4.4 1.5 9.6 7.8 37.2 2.7 12.3 5 22.5 5 22.8 0 1 4.7.5 6.2-.8 1.4-1.1 1.3-2.3-1.2-13.2-6.5-27.8-6.3-32.7 1.6-40.2 4.7-4.6 9.3-6.3 16.7-6.3 11.7 0 15.2 5 20.7 29.5 1.2 5.5 2.7 12.2 3.4 15 1.2 5.4 3.4 6.8 6.9 4.2 1.8-1.2 1.8-1.6-.2-10.2-1.2-5-2.8-12.2-3.7-16-4.3-19-7.9-25-17-28.4-6.3-2.4-9.8-2.5-17.1-.6zM696.7 116.4c-13.4 5-22.5 19.2-21.5 33.6.8 11.3 6.9 19.9 18 25.4 6.5 3.3 7.8 3.6 15.7 3.6 9.4 0 12.6-1.2 11.9-4.6-.3-1.7-1.2-1.9-9.8-1.9-7.8-.1-10.2-.5-13.7-2.3-5.5-2.9-10.9-8.3-12.8-12.9-1.7-4.1-2-14.9-.5-15.8.6-.4 11.4 3.5 24.1 8.6 28.1 11.4 27.6 11.5 27.8-5.1.1-12.1-4.7-20.5-15.1-26-7.3-3.9-17.6-5-24.1-2.6zm19.3 7.7c8.9 4 13.2 10.5 13.2 20.2 0 3.2-.4 6.3-.8 6.7-.8.8-32.1-11.1-38.4-14.5-3.5-1.9-3.5-2.9.1-7 6.6-7.5 16.6-9.6 25.9-5.4zM760.2 148.4c-9.3 3-18.2 12.9-21 23.1-1.7 6.4-.8 15.5 2.1 21.4 4.7 9.5 16.7 17.7 27.2 18.8 7.9.8 10.7-.1 10.3-3.5-.3-2.6-.6-2.7-7.3-3.2-5.4-.5-8.3-1.3-12.6-3.8-6.1-3.5-7.5-4.8-10.8-10.7-2.8-4.7-3.2-14.5-.9-18.9l1.4-2.7 21.6 13.1c11.9 7.1 22.2 13 23.1 13 .8 0 2.5-2.3 3.8-5.3 3.5-7.7 3.4-19.3-.3-26.3-3.1-5.9-8.4-10.9-14.5-13.6-5.7-2.5-16.5-3.2-22.1-1.4zm18.2 7c8.3 3.5 14.5 12.2 14.6 20.4 0 4.5-2.4 11.6-3.7 10.9-4.4-2.3-36.4-22.1-36.8-22.7-.9-1.4 3.4-5.7 7.7-7.9 5-2.5 13.2-2.8 18.2-.7zM272.4 170c-10.3 2.1-18.5 8.4-22.9 17.8-2.4 4.9-2.6 6.6-2.3 13.2 1.3 23.9 24.5 38.3 45.3 28.1 7.8-3.9 15.6-12 17.9-18.7 2.1-6.2 2-7.1-.5-7.7-3.3-.9-4.3 0-6.2 5.2-4.2 11.9-18.5 19.7-30.2 16.3-5-1.4-11.5-5.5-11.5-7.2 0-.9 5.5-5.2 26.5-20.8 16.7-12.3 16.2-11.3 9.3-17.7-7.6-7-16.9-10.2-25.4-8.5zm10.5 7.6c2.8.8 6.6 2.8 8.3 4.3l3.2 2.8-17.7 13.3c-9.7 7.3-18.3 13-19 12.7-1.7-.6-3.7-7.3-3.7-12.4 0-5.1 4.2-13.5 8.3-16.6 3.3-2.5 10.8-5.6 13.8-5.7.8 0 3.9.7 6.8 1.6zM807.5 205.1c-18.5 22.8-18.6 23-17.1 25.5.9 1.3 2.3 2.4 3.1 2.4.8 0 5.1-4.6 9.7-10.3 11.8-14.6 15.7-18.6 20.3-21 6.5-3.4 14.8-2.4 21.8 2.5 1.6 1.1 2.1 1 3.7-1 2.5-3 1.8-4.4-3.3-7.3-3.4-1.9-5.6-2.4-11.4-2.4-7.1.1-7.2 0-5.8-2 3.2-4.3 3.9-6.4 2.5-8-.7-.8-2-1.5-3-1.5-1.1 0-8.9 8.8-20.5 23.1zM222.3 206.2c-3.9 4.3-5.7 9.1-5.7 15.5l-.1 6.2-4.1-4-4-3.9-2.3 2.4c-1.5 1.5-2 2.9-1.5 3.8 1.6 2.7 40.9 42.8 42 42.8.6 0 2-1 3.2-2.3l2.2-2.4-12.5-12.9c-14.8-15.3-18.1-20.8-17.2-28.5.4-3.4 1.6-6.4 3.7-9.2 3.5-4.8 3.7-5.8 1.2-8-2.4-2.2-2.4-2.1-4.9.5zM182.6 253.7c-10 2.6-22 19.1-22.1 30.3 0 5.1.2 5.5 2.4 5.5 2 0 2.6-.8 3.8-5.5 3.8-14.9 13.3-24.2 23-22.7 4 .7 10.3 5.1 10.3 7.2 0 .8-2.2 4-4.8 7.2-2.7 3.2-6.6 8.4-8.8 11.7-3.3 5.1-3.9 6.8-4.2 12.7l-.4 6.8 4.4 4.7c4.1 4.3 5 4.7 10.1 5.2 9.5.8 17.8-5 23.6-16.5 1.4-2.9 2.1-6.1 2.1-10.3v-6.1l2.9 2c1.6 1.2 3.3 2.1 3.8 2.1 1.7 0 4.4-3.7 3.8-5.1-.9-2.2-31.8-25.7-36.7-27.9-4.1-1.9-9-2.3-13.2-1.3zm28.4 21.6c4.2 3.3 5.5 6.4 5.5 13.2 0 5.1-.5 7-3 11.1-3.1 5-8 9-12.3 10.1-3.4.8-10.1-2.5-11.8-6-2.2-4.1-.9-9.8 3.4-15.5 13.5-17.8 12.7-17.3 18.2-12.9zM842.7 270.2c-.9.7-1.9 2.5-2.2 4-1.3 5.3 6.1 9.1 9.8 5 4.8-5.2-2-13.2-7.6-9zM922.1 288c-12.9 7.7-25.1 15.6-27.2 17.6-9 8.8-11.9 20.1-8 31.5 6.1 18.2 20.6 28.7 35.8 26.2 7.7-1.4 14.4-4.6 35.9-17.5 24-14.4 22.2-13 20.1-16.1-1-1.5-2.3-2.7-2.9-2.7-.6 0-10.7 5.6-22.4 12.5-23.5 13.8-25.8 15-32.5 16-10.2 1.5-20.1-5-25.4-16.7-2.4-5.2-2.7-7-2.2-12.5.4-5.2 1.1-7.1 3.8-10.6 4.5-5.9 8.3-8.6 31.7-22.2 11.1-6.5 20.2-12.2 20.2-12.7 0-.9-2.9-6.8-3.3-6.8-.1 0-10.7 6.3-23.6 14zM142 299c-1.2 2.9-1.1 3.2 6.6 11.7 4.3 4.7 12.7 13.8 18.6 20.1 6 6.2 10.8 11.9 10.8 12.4 0 .7-1.6.8-4.2.4-2.4-.3-12.8-1.5-23.3-2.6-10.4-1-21.1-2.2-23.7-2.6-4.4-.6-4.7-.5-6.2 2.4-1.6 3-1.5 3.1 3.2 8.4 8.6 9.8 26.5 29.3 29.3 32.1 1.6 1.5 2.9 3.3 2.9 3.9 0 1.3-8.1.6-47.5-4.1-7.5-.9-8.7-.5-9.9 3.6-.8 2.5-2.4 2.2 27.4 5.3 10.7 1.1 23.5 2.5 28.3 3.1 9.6 1.3 10.3 1.1 11.3-3.8.7-3.4 2.1-1.6-18-23.8-5.5-6.1-11.6-12.7-13.5-14.7-1.9-2.1-3.2-4-2.9-4.3.3-.3 12.4.6 26.8 2.1l26.3 2.7 1.9-2.2c3.4-4.3 3.9-3.4-16.2-25.1-5.9-6.3-14-15.2-18.1-19.8-4-4.5-7.6-8.2-8-8.2-.4 0-1.2 1.4-1.9 3zM983 368c-7.1 3-26.1 10.8-49 20.1-8 3.3-15.1 6.5-15.8 7.3-1 1-1.1 1.8-.1 3.9.7 1.5 1.8 2.7 2.5 2.7 1.1 0 35.1-13.6 60.9-24.4 4.4-1.9 9-3.7 10.2-4 3.4-1.1 4.5-3 3.3-6-1.2-3.3-3.5-3.2-12 .4zM93 407.6c-1.1 3.6-2 7.3-2 8 0 2.5-2.9 2.7-8.5.8-3-1-5.7-1.5-6.1-1.2-.3.4-.7 2.1-.7 4-.2 3.1 0 3.3 5.2 5 3 1 5.6 1.9 5.8 2.1.2.3-.2 2.5-.9 5.1-1.3 4.8-.8 6.2 2.6 6.8 1.5.2 2.3-.8 3.6-4.7 1-2.8 2.1-5 2.6-4.9 1.4.2 11.9 3.3 23.9 7.1 19.8 6.2 26.9 5.5 32-3.2 2.9-4.8 4.2-11.6 3.1-15.9-.5-1.9-1.3-2.6-3.1-2.6-2.5 0-2.9.7-2.5 4.7.2 3.2-3.5 10.9-5.8 12.2-3.6 1.9-8.1 1.2-25.1-4-9.1-2.7-17.4-5.2-18.3-5.5-2.3-.7-2.3-2.4.4-11.2 1.8-6.3 1.9-7.5.7-8.3-3.4-2.1-4.8-1-6.9 5.7zM912 415.7c0 4.8 1 5 42 6.3 21.2.6 47.1 1.5 57.5 2 10.5.4 19.4.4 19.9-.1.6-.5.5-1.8-.1-3.2-1.3-2.7-.7-2.7-56.8-4.6-14.8-.6-35-1.3-44.7-1.7-17.3-.7-17.8-.6-17.8 1.3zM59.8 434.8c-.9.9-2.3 3.8-3.3 6.4-2.5 6.8-1.7 13.8 2.2 18.6 2.9 3.6 5.2 4.8 14.2 7.2l4.4 1.2-.6 4.9c-.5 4-.3 5.1 1.1 5.8 2.7 1.5 5-.5 5.7-4.9.4-2.2 1-4.2 1.3-4.4.7-.4 25.8 4.4 41.3 7.9 10 2.2 12.7 2 13.5-1.1.4-1.4.2-3-.4-3.6-.6-.6-12.5-3.3-26.4-6-13.9-2.8-25.6-5.3-25.9-5.6-.4-.4-.1-4.5.7-9.1.7-4.6 1.1-8.8.8-9.2-.3-.5-1.6-.9-2.9-.9-2.7 0-2.6-.1-4.8 11l-1.2 6.5-4.4-.3c-11.3-.7-16.2-8.8-11.1-18.6 2.1-4.1 1.9-5-.9-6.6-1.4-.7-2.2-.5-3.3.8zM996.5 448.6c-7.7 1.3-17.2 2.9-21.2 3.4-18 2.6-28.1 9.8-32 23-3.3 11.2.4 27.4 8 35.8 9.6 10.3 17.6 11.2 53.2 5.8 13.2-2.1 24.5-3.9 25.2-4.1.9-.3.9-1.3.3-3.6-.5-1.7-1.1-3.4-1.4-3.6-.4-.4-11.1 1.1-34.6 4.9-16.7 2.8-24 2.8-30.3 0-6.5-2.9-10.4-7.5-12.7-15.1-3.5-11.1-2-19.5 4.8-26.4 5.3-5.4 11.9-7.4 37.4-11.3 25.7-3.9 28-4.6 27.6-8.3-.3-2.4-.7-2.6-5.3-2.8-2.7 0-11.3 1-19 2.3zM90.7 493.4c-6.6 2.4-12.9 8.2-16.5 15.1-2 3.9-2.7 6.9-3 13.7-.4 7.6-.1 9.2 2 14 5.2 11.2 13.7 17.3 26 18.5 11.8 1.1 21.8-3.2 28.4-12 11.7-15.6 6.6-39.2-10.2-47.7-6.1-3-20.6-3.9-26.7-1.6zm21.3 7.8c12.1 4.4 18 18 13.5 30.9-5.5 15.5-28.2 20-40.8 8.1-9.1-8.6-9.5-24.4-.9-33.6 6.1-6.5 18.6-8.9 28.2-5.4zM949 538.9c0 3.9.2 4.1 17.2 17.8 9.5 7.6 17.2 14.2 17.2 14.8-.1.5-7.9 6.2-17.5 12.7-9.6 6.5-18 12.5-18.6 13.5-1.7 2.2-1.7 7.3 0 7.3.7 0 9.3-5.4 19-12 9.8-6.5 19.3-12.8 21.2-14l3.3-2.1 18.3 14.6c10 8 18.5 14.5 18.9 14.5 1.1 0 1.9-3.7 1.3-6-.3-1.1-7.7-7.8-16.5-14.7l-16-12.7 2.8-2.3c1.6-1.3 9.5-6.7 17.6-12l14.7-9.8.1-4.3c0-2.3-.2-4.2-.5-4.2s-9.6 6-20.6 13.4l-20.1 13.4-17.2-13.7C946.9 531.8 949 533 949 538.9zM106 565.2c-9.3 2.7-12.7 8.7-16.4 29.5-2.7 15.1-3.8 18.3-8 22.2-2 1.9-3.8 2.5-7.5 2.5-6.4.1-9.7-2.3-13.5-9.7-2.4-4.8-2.9-7-2.9-13.4 0-4.8.7-10.3 1.8-14.1 1.5-5.4 1.6-6.5.4-7.3-5.6-3.6-9.2 5.2-8.7 21.6.3 10.2.6 11.6 3.6 17.5 5.3 10.7 13.1 15.2 23.2 13.5 7.4-1.2 13.8-7.5 16-15.4.5-2 1.9-9.2 3-16 3.2-18.7 6.1-23.1 15.6-23.1 4.2 0 5.9.5 8.3 2.5 7.6 6.4 9.8 24.5 4.7 38.1-3.1 8.6-3.2 9.1-.5 9.9 3.2 1 5.7-2 8-9.7 1.8-5.7 2-8.7 1.7-18.1-.5-13.3-3-19.9-9.6-25.9-5.8-5.3-11.8-6.7-19.2-4.6zM933.8 661.7c-3.1 9.8-6.2 20.6-6.8 24-3.1 17.9 7.5 36.8 24.5 43.8 6 2.4 8.4 2.9 17 2.9 9.2.1 10.5-.1 16.5-3 8.2-3.9 15.8-11.5 19.8-19.7 3.8-7.7 13.6-38.2 12.9-40.1-.3-.8-7.9-3.7-16.9-6.6-16.1-5.1-41.7-13.3-53.2-17.1-3.3-1-6.5-1.9-7.1-1.9-.6 0-3.6 8-6.7 17.7zm27.9-2.6c40.9 13.1 47.3 15.3 47.3 16.3 0 1.9-7.2 24-9.4 29-7 15.6-23 23.4-39.3 19.3-12.2-3.2-20.6-10.5-24.5-21.4-2.7-7.8-2-18.5 2-30.8 1.7-5 3.5-10.9 4.1-13.3.7-2.4 1.8-4.2 2.6-4.2s8.5 2.3 17.2 5.1zM138.7 662.8c-4.5 5 1.3 12.4 6.9 8.8 3.1-2.1 3.9-5.2 2-8.1-2-3-6.5-3.3-8.9-.7zM148.5 727c-8.2.4-21.1.8-28.5.9-15.3.2-17 .7-15.2 4.6l1.2 2.7 29.1-.8c28.4-.7 29.1-.6 28.1 1.2-.6 1-8.8 10.8-18.1 21.7-10.8 12.6-17.1 20.7-17.1 22 0 3.1 1.5 5.1 3.3 4.4 1.4-.5 39.3-44.4 41.7-48.4 1-1.5.9-2.6-.3-5.6-1.5-3.4-1.9-3.7-5.4-3.5-2.1.1-10.5.5-18.8.8zM913.2 735.1c-6.7 2.6-13.8 9.6-17.7 17.5-2.5 5-2.9 7.1-3 13.6 0 8.5 1 10.4 4.8 9.4 2.4-.6 2.5-.9 2-6.3-1.4-15.9 12.8-31 27.1-28.9 8.7 1.3 8.8.7-4.5 25.1-6.5 12.1-11.9 22.6-11.9 23.3 0 2.7 9 5.7 17.1 5.7 6.4 0 8.4-.4 13.4-3 14-7.1 20.5-25.3 14.1-39-3.3-7.2-6.9-11-14.3-15.2-5.7-3.1-7.7-3.7-14.2-4-5.9-.2-8.8.1-12.9 1.8zm30.6 14.1c4.1 4.4 6.2 9.6 6.2 16 0 14.3-13.7 25.2-27.4 21.7-2.5-.6-4.6-1.4-4.6-1.7 0-1.2 21.2-39.2 21.9-39.2.4 0 2.1 1.5 3.9 3.2zM182.3 768.8c-.6.4-1.3 1.6-1.5 2.7-.2 1.5.9 2.5 4.7 4.3 11.9 5.7 18.8 17.9 16.4 29-1.1 5.3-6 13.2-8.2 13.2-.6 0-7.7-9.5-15.6-21-8-11.6-14.9-21-15.5-21-.5 0-3.6 2.7-6.7 5.9-4.6 4.6-6.1 7.2-7.5 11.7-5.8 20.1 9.8 40.5 30.1 39.2 7.2-.5 15.6-4.1 21.3-9.3 12.6-11.3 12.8-31.2.7-45.3-5.4-6.2-15.1-11.3-18.2-9.4zm-5.9 35.9c6.4 9.4 11.6 17.4 11.6 17.7 0 .3-2.6 1.3-5.7 2.2-4.7 1.4-6.5 1.4-10.8.5-16.6-3.7-23.3-25.3-11.7-37.4 2.1-2.2 2.8-2.5 3.8-1.5.6.7 6.4 9 12.8 18.5zM877.2 787.1c-11.1 7.3-18.7 19.2-18.7 29.1 0 6.3 1.9 9.7 7.5 13.5 6.7 4.6 12.7 2.6 25.5-8.5 9.3-8 11.3-9.2 15.5-9.2 6.9 0 10.3 8.6 6.4 16.2-2.4 4.6-10.3 12.7-14.5 14.9-3.9 1.9-4.3 4.5-1.4 6.9 3.3 2.7 17.7-9.9 22-19.2 6.4-13.7.2-26.8-12.5-26.8-5.2 0-8.7 2-19 11-11.3 9.8-14.3 10.9-19.3 7-5.1-4-4.3-10.7 2.4-19.6 3.2-4.4 13.2-12.3 17.1-13.6 2-.7-.7-5.8-3.1-5.8-1 0-4.6 1.8-7.9 4.1zM839.7 829.8c-1 1-1.7 2.5-1.7 3.4 0 .8 4.4 5.5 9.9 10.4 5.4 4.9 15.3 14 22 20.2 11.6 10.8 12.3 11.3 14.4 9.9 4.7-3.1 4.8-3.1-26.6-32-8.2-7.6-15.2-13.7-15.6-13.7-.4 0-1.5.8-2.4 1.8zM216.6 831.1c-12.2 2-25 12.1-31.1 24.5-2.6 5.3-2.9 7-2.9 15.9-.1 9.5.1 10.4 3.7 17.9 3.2 6.8 5.6 9.7 18.4 22.7 8.1 8.2 15.2 14.9 15.8 14.9 1.6 0 57.5-56.4 57.5-58.1 0-2-26.3-27.9-31.8-31.3-9.4-5.8-19.8-8.2-29.6-6.5zm22.2 10.9c4.9 2.3 9.1 5.6 18 14.4l11.7 11.5-24 24.1c-13.2 13.2-24.5 24-25.1 24-.6 0-6.1-5.1-12.3-11.4-11.6-12-15-17.2-17.2-27.1-2.8-12.4 6.4-29 19.8-35.9 8.7-4.4 19.1-4.3 29.1.4zM806 836.4c-7.7 2.9-14.1 6.8-19.7 12-12.4 11.4-14.2 23.1-5.8 36 2.8 4.5 32.7 41 37.5 46 1.4 1.5 2.1 1.6 3.9.7 2.8-1.5 2.7-4.5-.4-8.6l-2.6-3.3 7.8-.4c8.9-.4 13.1-2.1 19.7-7.9 13.2-11.7 14.1-30.4 2.1-43.7-8.4-9.4-22.6-12.1-34.2-6.5-10.4 4.9-17.3 13.8-18.8 24.5l-.7 4.7-3.4-3.7c-4.7-5-8.4-12.8-8.4-17.4 0-5.4 3-10.7 9.1-16.2 5.8-5.2 9.4-7 18.4-9.5 5.6-1.5 6-1.8 6-4.6 0-2.7-.3-3-3.5-3.2-1.9-.1-5.1.4-7 1.1zm29.8 31c3.6 1.9 8.9 7.2 10.9 11.1 7.1 13.5-1 29.3-17.4 34.1-4.8 1.4-5.8 1.4-10.5 0-6.9-2-12-6.3-15.2-12.8-3.3-6.6-3.4-12.6-.2-19.4 5.7-12.3 21.5-18.6 32.4-13zM896 882.5c-.7.8-1.2 2.6-1.2 4 0 3.5 1.9 5.5 5.3 5.5 2.9 0 5.9-3.1 5.9-6.1 0-4-7.4-6.6-10-3.4zM761.8 896.4c-1 .7-1.8 2-1.8 2.8 0 .8 3.8 8.2 8.4 16.4 4.7 8.2 9 17 9.6 19.6 3.6 14.3-13.7 29.6-27.5 24.3-5.6-2.1-8.1-5.3-18.4-23.5-4.4-8-8.5-15.1-9-15.8-1.3-2.1-7.5 1.3-6.6 3.6 1.8 4.8 18.5 33 21.9 36.8 5.3 6.1 8.8 7.8 16.6 7.8 5.4 0 7.5-.5 12.6-3.3 3.4-1.8 7.3-4.5 8.7-5.9 3-3.3 6.7-10 6.7-12.4 0-2.7 1.8-3.1 3.1-.6 2.4 4.7 3.9 5.8 6.4 4.6 3.6-1.6 3.6-2.9.1-8.9-1.8-3-7.7-13.3-13.1-22.9-15.2-27.1-14-25.5-17.7-22.6zM314.9 904.3c-9.1 3.4-15.5 9.5-19.8 18.7-3.5 7.7-3.6 18.4-.2 25.4 6.5 13.1 20.1 20.1 33.9 17.2 6-1.2 6.1-1.2 5 .8-.6 1.2-4.4 8.4-8.6 16l-7.5 13.9 2.2 1.9c2.8 2.2 3.5 2.2 5.1.3 1.2-1.5 27.6-48.5 37.2-66.2 4.7-8.8 4.8-9.2 2.9-10.2-3.4-1.9-5-1.2-7.7 3.1l-2.7 4.2-1.2-3.9c-2.8-9.3-7.8-15.3-16.4-19.3-6.5-3-16.8-3.9-22.2-1.9zm21.3 9.3c8 4 12.2 11.1 12.2 20.4 0 8-3.3 15.1-9.6 20.4-17.4 14.9-44-2.3-37.8-24.4 1.5-5.6 6.5-12.7 11-15.6 7.3-4.8 15.6-5.1 24.2-.8zM381.2 936.5c-2.8 1.2-3.2 1.8-2.7 3.7 1.1 3.5 1.9 4 4.9 2.8 4.6-1.7 14.6-1.2 19.6 1.1 9.7 4.4 15 12.2 15 22v6.1l-2.7-.5c-1.6-.2-10-3-18.8-6.1-29-10.3-27.6-9.9-29.4-8.1-1.1 1.1-1.7 4-2 10.1-.3 7.9-.1 9 2.8 14.9 3.2 6.4 7.1 10.4 14.1 14.1 2.7 1.5 5.6 1.9 13 1.9 8.5 0 10-.3 14-2.7 6-3.5 10.3-8.2 13.7-14.8 2.4-4.8 2.8-6.6 2.7-14.5 0-7.4-.4-9.8-2.3-13.4-5.8-11-18.1-18.1-31.4-18.1-4 .1-8.7.7-10.5 1.5zm12.3 34c10.5 3.6 19.7 7 20.5 7.5 2.2 1.3-3 8.3-8.6 11.6-11.2 6.6-26.8 1.3-31.9-10.8-2.2-5.5-2-14.8.4-14.8.3 0 9.2 2.9 19.6 6.5zM679.6 936c-5 1.3-13.4 5.6-16.5 8.3-1.3 1.2-3.5 4-4.8 6.1l-2.6 4 2.3 1.8c1.2 1 2.5 1.8 2.9 1.8.3-.1 1.8-1.9 3.4-4.1 5.7-8.3 18.1-13.3 27.4-11 2.6.7 6.5 2.4 8.5 3.8 4 2.7 8.4 9.2 7.1 10.3-.4.3-10.7 4.2-22.8 8.5-12.1 4.2-22.8 8.4-23.7 9.2-1.5 1.4-1.5 1.7 0 5.4.9 2.1 3.4 5.8 5.4 8.3 16.6 19.7 49.8 8.4 52.5-17.7 1.3-12.3-6.6-26.6-17.9-32.3-5.6-2.8-15.1-3.9-21.2-2.4zm31.2 32.1c.8 9.8-4.8 18.3-14.4 21.9-7.1 2.6-10.7 2.5-17.1-.4-4.6-2.2-11.3-9.1-11.3-11.6 0-.4 4.6-2.3 10.3-4.3 5.6-1.9 14.7-5.1 20.2-7.1 5.5-1.9 10.5-3.4 11-3.2.6.1 1.1 2.2 1.3 4.7zM630.6 950.7c-2.1.6-2.2-.3 2.3 21.3 1.7 8 3.1 15.8 3.1 17.5 0 8.6-6.1 17.3-13.9 19.6-3.6 1.1-4.1 1.6-4.1 4.1 0 1.6.6 3.1 1.5 3.4 4.1 1.6 14.8-5.5 18.2-12 .9-1.7 1.8-2.7 1.9-2.1.2.5.8 3 1.4 5.4 1.1 4.2 1.3 4.3 4.2 3.7 1.8-.3 3.3-.8 3.6-1 .2-.3-2.5-14-6-30.5-6.8-32.5-6.2-30.9-12.2-29.4zM460.5 960.7c-8.6 17.6-33.8 73.3-33.3 73.8.2.2 1.8.5 3.6.7l3.3.3 9.5-20.5c11.1-23.9 13.8-29.7 19-40.4 4.3-8.8 3.9-9.1 6.9 4.4.8 3.6 3 13.5 5 22 1.9 8.5 4.7 20.9 6.2 27.5 1.4 6.6 2.7 12.1 2.8 12.3.2.2 1.9.5 3.8.9l3.6.5 4-8.1c2.3-4.4 7-14.3 10.5-21.8C519 983.1 523 975 523.9 975c.5 0 1.4 2.1 2 4.7.5 2.7 2.6 11.8 4.5 20.3s4.9 22.2 6.7 30.5c1.8 8.2 3.6 15.6 4.2 16.2.8 1.1 7.7 1.9 7.7 1 0-.2-1.1-5.5-2.5-11.8-1.4-6.3-3-13.4-3.5-15.9s-2.8-12.6-5-22.5c-2.3-9.9-4.5-20.2-5.1-22.9-.5-2.7-1.4-6.6-1.9-8.8-1-3.7-1.2-3.8-5.5-3.8H521l-3.4 7.2c-7.7 16.7-19.6 41.9-23.6 50.2-3.9 8.1-4.4 8.7-5.7 7.1-.7-1.1-1.3-2.5-1.3-3.2 0-1.6-11.3-52.1-13.7-61.1-.9-3.4-2.1-6.2-2.8-6.2-.7 0-2.6-.3-4.2-.6-2.7-.5-3.1-.2-5.8 5.3zM559.7 961.8c-3.8 4.2-.6 10.7 4.9 10 1.9-.2 3.4-1.3 4.4-3.1 1.3-2.4 1.3-3 0-5.5-2-3.4-6.8-4.2-9.3-1.4z" />
  </svg>
);

export const LinkArrow: FC<IconProps> = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={`w-full h-auto ${className}`}
      {...rest}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
      />
    </svg>
  );
  