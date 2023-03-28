import React from 'react';

interface Props {
    width:string,
    height: string,
    color: string,
}

export const TreeDots =({height, width, color}:Props)=> <svg width={width} height={height} viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill={color}>
    <circle cx="15" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
                 begin="0s" dur="0.8s"
                 values="15;9;15" calcMode="linear"
                 repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="1" to="1"
                 begin="0s" dur="0.8s"
                 values="1;.5;1" calcMode="linear"
                 repeatCount="indefinite" />
    </circle>
    <circle cx="60" cy="15" r="9" fillOpacity="0.3">
        <animate attributeName="r" from="9" to="9"
                 begin="0s" dur="0.8s"
                 values="9;15;9" calcMode="linear"
                 repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="0.5" to="0.5"
                 begin="0s" dur="0.8s"
                 values=".5;1;.5" calcMode="linear"
                 repeatCount="indefinite" />
    </circle>
    <circle cx="105" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
                 begin="0s" dur="0.8s"
                 values="15;9;15" calcMode="linear"
                 repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="1" to="1"
                 begin="0s" dur="0.8s"
                 values="1;.5;1" calcMode="linear"
                 repeatCount="indefinite" />
    </circle>
</svg>


export const Circle =({height, width, color}:Props)=> <svg width={width} height={height} viewBox={`0 0 45 45`} xmlns="http://www.w3.org/2000/svg" stroke={color}>
    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
        <circle cx="22" cy="22" r="6" strokeOpacity="0">
            <animate attributeName="r"
                     begin="1.5s" dur="3s"
                     values="6;22"
                     calcMode="linear"
                     repeatCount="indefinite" />
            <animate attributeName="stroke-opacity"
                     begin="1.5s" dur="3s"
                     values="1;0" calcMode="linear"
                     repeatCount="indefinite" />
            <animate attributeName="stroke-width"
                     begin="1.5s" dur="3s"
                     values="2;0" calcMode="linear"
                     repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="22" r="6" strokeOpacity="0">
            <animate attributeName="r"
                     begin="3s" dur="3s"
                     values="6;22"
                     calcMode="linear"
                     repeatCount="indefinite" />
            <animate attributeName="stroke-opacity"
                     begin="3s" dur="3s"
                     values="1;0" calcMode="linear"
                     repeatCount="indefinite" />
            <animate attributeName="stroke-width"
                     begin="3s" dur="3s"
                     values="2;0" calcMode="linear"
                     repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="22" r="8">
            <animate attributeName="r"
                     begin="0s" dur="1.5s"
                     values="6;1;2;3;4;5;6"
                     calcMode="linear"
                     repeatCount="indefinite" />
        </circle>
    </g>
</svg>

export const TailSpin =({height, width, color}:Props)=> <svg width={width} height={height} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop stopColor={color} stopOpacity="0" offset="0%"/>
            <stop stopColor={color} stopOpacity=".631" offset="63.146%"/>
            <stop stopColor={color} offset="100%"/>
        </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="2">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </path>
            <circle fill="#fff" cx="36" cy="18" r="1">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>
