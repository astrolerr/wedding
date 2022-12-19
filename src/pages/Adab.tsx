import { m } from "framer-motion";
import { fadeUpVariant, fadeUpVariantWithChilds } from "../motions";

interface AdabData {
  nama: string;
  icon: string;
}

function SvgIcons({
  icon,
  fill,
  width,
}: {
  icon: string;
  fill?: string;
  width?: number;
}) {
  switch (icon) {
    case "masker":
      return (
        <svg width={width} viewBox="0 0 48 48">
          <g>
            <path
              fill={fill}
              d="M19.656,20.869v0.626c0,0.324,0.262,0.585,0.585,0.585c0.324,0,0.586-0.262,0.586-0.585v-0.626   c0-0.324-0.263-0.586-0.586-0.586C19.918,20.283,19.656,20.545,19.656,20.869z"
            />
            <path
              fill={fill}
              d="M27.171,20.869v0.626c0,0.324,0.262,0.585,0.586,0.585c0.323,0,0.586-0.262,0.586-0.585v-0.626   c0-0.324-0.263-0.586-0.586-0.586C27.433,20.283,27.171,20.545,27.171,20.869z"
            />
            <path
              fill={fill}
              d="M21.436,18.222c-0.079-0.314-0.396-0.505-0.71-0.426l-2.505,0.626c-0.314,0.079-0.505,0.396-0.426,0.71   c0.066,0.266,0.305,0.444,0.568,0.444c0.047,0,0.095-0.006,0.143-0.018l2.505-0.626C21.324,18.854,21.515,18.536,21.436,18.222z"
            />
            <path
              fill={fill}
              d="M29.637,19.576c0.262,0,0.501-0.178,0.567-0.444c0.078-0.314-0.112-0.632-0.427-0.71l-2.505-0.626   c-0.313-0.079-0.632,0.112-0.71,0.426c-0.079,0.314,0.111,0.632,0.426,0.71l2.505,0.626C29.541,19.57,29.589,19.576,29.637,19.576z   "
            />
            <path
              fill={fill}
              d="M38.072,39.174l-6.504-2.032c-0.806-0.252-1.347-0.987-1.347-1.832v-1.29c0-0.323-0.263-0.585-0.586-0.585   c-0.324,0-0.586,0.262-0.586,0.585v1.29c0,0.975,0.447,1.858,1.179,2.432c-1.647,1.647-3.887,2.582-6.229,2.582   c-2.338,0-4.583-0.936-6.229-2.581c0.731-0.573,1.179-1.458,1.179-2.433V31.98c1.518,0.895,3.253,1.373,5.05,1.373   c2.549,0,4.974-0.962,6.828-2.707c1.71-1.611,2.787-3.746,3.068-6.061h0.75c0.673,0,1.324-0.28,1.788-0.769   c0.47-0.495,0.709-1.144,0.674-1.828c-0.046-0.849-0.535-1.579-1.249-1.986v-9.155c0-3.776-3.073-6.849-6.85-6.849h-8.141   c-1.248,0-2.355,0.753-2.835,1.879H17.11c-2.741,0-4.97,2.229-4.97,4.97v7.146c0,0.324,0.262,0.586,0.586,0.586   s0.585-0.262,0.585-0.586v-7.146c0-2.094,1.704-3.798,3.798-3.798h1.341c0.267,0,0.5-0.181,0.567-0.439   c0.22-0.848,0.98-1.44,1.85-1.44h8.141c3.131,0,5.677,2.546,5.677,5.677v8.812c-0.048-0.002-0.098-0.004-0.146-0.004h-0.521   c-0.712,0-1.292-0.58-1.292-1.293v-3.131c0-1.704-1.387-3.091-3.091-3.091c-0.324,0-0.586,0.262-0.586,0.586   s0.262,0.585,0.586,0.585c1.058,0,1.919,0.861,1.919,1.919v3.131c0,0.918,0.505,1.721,1.252,2.145v1.613   c0,0.713-0.579,1.293-1.292,1.293h-15.03c-0.713,0-1.293-0.58-1.293-1.293v-1.613c0.747-0.424,1.252-1.226,1.252-2.145v-3.131   c0-1.058,0.861-1.919,1.919-1.919h8.767c0.324,0,0.586-0.262,0.586-0.585s-0.262-0.586-0.586-0.586h-8.767   c-1.704,0-3.091,1.387-3.091,3.091v3.131c0,0.713-0.58,1.293-1.293,1.293h-0.52c-1.371,0-2.499,1.024-2.567,2.333   c-0.036,0.684,0.203,1.333,0.673,1.828c0.464,0.489,1.115,0.769,1.788,0.769h0.751c0.281,2.314,1.357,4.449,3.068,6.061   c0.195,0.184,0.398,0.358,0.605,0.524v4.139c0,0.845-0.541,1.58-1.347,1.832l-6.504,2.032c-1.297,0.405-2.169,1.591-2.169,2.95   v1.29C7.757,43.737,8.019,44,8.343,44s0.585-0.263,0.585-0.586v-1.29c0-0.844,0.542-1.579,1.347-1.832l3.81-1.19   c1.112,1.451,2.545,2.656,4.164,3.498c1.763,0.916,3.751,1.4,5.751,1.4c1.989,0,3.968-0.479,5.724-1.387   c1.628-0.841,3.072-2.053,4.19-3.512l3.81,1.19c0.806,0.253,1.347,0.988,1.347,1.832v1.29c0,0.323,0.263,0.586,0.586,0.586   s0.586-0.263,0.586-0.586v-1.29C40.241,40.765,39.37,39.579,38.072,39.174L38.072,39.174z M33.979,20.827   C33.98,20.827,33.98,20.827,33.979,20.827z M33.979,22.121v-1.292h0.56c0.735,0,1.361,0.548,1.397,1.222   c0.019,0.359-0.106,0.701-0.353,0.96c-0.247,0.26-0.58,0.403-0.938,0.403h-1.034C33.845,23.038,33.979,22.595,33.979,22.121z    M13.353,23.414c-0.358,0-0.691-0.143-0.938-0.403c-0.247-0.26-0.372-0.601-0.353-0.96c0.035-0.674,0.662-1.222,1.397-1.222h0.56   v1.292c0,0.474,0.135,0.917,0.368,1.293H13.353L13.353,23.414z M15.286,24.586h17.427c-0.063,0.457-0.162,0.902-0.292,1.333H21.494   c-0.324,0-0.586,0.263-0.586,0.586c0,0.324,0.262,0.586,0.586,0.586h9.438c-1.666,1.226-4.214,1.96-6.933,1.96   c-2.719,0-5.267-0.734-6.932-1.96h1.922c0.323,0,0.586-0.262,0.586-0.586c0-0.323-0.263-0.586-0.586-0.586h-3.412   C15.447,25.488,15.349,25.043,15.286,24.586L15.286,24.586z M16.681,28.254c1.859,1.249,4.476,1.969,7.318,1.969   s5.46-0.72,7.318-1.97c-1.585,2.373-4.288,3.929-7.318,3.929S18.266,30.626,16.681,28.254L16.681,28.254z M29.185,41.572   c-1.612,0.834-3.357,1.256-5.186,1.256c-3.368,0-6.575-1.521-8.715-4.101l1.391-0.435c1.886,2.036,4.546,3.202,7.324,3.202   c2.784,0,5.438-1.164,7.325-3.202l1.391,0.435C31.743,39.899,30.533,40.875,29.185,41.572L29.185,41.572z"
            />
          </g>
        </svg>
      );
    case "cucitangan":
      return (
        <svg x="0px" y="0px" width={width} viewBox="0 0 48 48">
          <g>
            <g>
              <path
                fill={fill}
                d="M14.515,42.828H4.586C4.262,42.828,4,43.091,4,43.414S4.262,44,4.586,44h9.929    c0.324,0,0.586-0.263,0.586-0.586S14.838,42.828,14.515,42.828z"
              />
              <path
                fill={fill}
                d="M10.979,17.641c0.03,0,0.06-0.001,0.09-0.002c-0.029,0.17-0.044,0.344-0.044,0.521    c0,1.715,1.396,3.111,3.111,3.111c1.715,0,3.111-1.396,3.111-3.111c0-1.716-1.396-3.111-3.111-3.111    c-0.353,0-0.692,0.06-1.009,0.168c-0.128-1.071-1.042-1.905-2.148-1.905c-1.193,0-2.165,0.971-2.165,2.164    S9.785,17.641,10.979,17.641z M16.075,18.16c0,1.069-0.87,1.939-1.939,1.939s-1.939-0.87-1.939-1.939s0.87-1.939,1.939-1.939    S16.075,17.091,16.075,18.16z M10.979,14.484c0.547,0,0.992,0.445,0.992,0.992c0,0.547-0.445,0.993-0.992,0.993    c-0.547,0-0.993-0.445-0.993-0.993C9.986,14.93,10.431,14.484,10.979,14.484z"
              />
              <path
                fill={fill}
                d="M43.414,8.499h-3.156c-0.324,0-0.586,0.262-0.586,0.586v1.229H35.24V8.329h2.57    c0.324,0,0.586-0.263,0.586-0.586V4.586C38.396,4.262,38.135,4,37.811,4h-5.432c-0.323,0-0.586,0.262-0.586,0.586    s0.263,0.586,0.586,0.586h4.846v1.985h-8.298V5.172h0.718c0.323,0,0.586-0.262,0.586-0.586S29.968,4,29.645,4h-1.304    c-0.324,0-0.586,0.262-0.586,0.586v3.157c0,0.323,0.262,0.586,0.586,0.586h2.57v1.984h-4.623c-2.934,0-5.321,2.387-5.321,5.321    v3.834h-1.229c-0.324,0-0.586,0.262-0.586,0.586v3.157c0,0.324,0.262,0.586,0.586,0.586h1.229v2.742    c-0.204-0.029-0.411-0.045-0.621-0.045c-0.446,0-0.881,0.066-1.3,0.198c-0.813-1.506-2.399-2.463-4.126-2.463    c-1.789,0-3.381,0.988-4.177,2.556c-0.071-0.005-0.141-0.008-0.211-0.008c-1.182,0-2.223,0.729-2.648,1.795    c-0.03-0.001-0.059-0.001-0.089-0.001C5.702,28.571,4,30.273,4,32.365c0,0.324,0.262,0.586,0.586,0.586h3.257    c0.602,0,1.182-0.181,1.678-0.522l1.074-0.741c0.299-0.206,0.649-0.314,1.012-0.314h0.477c0.155,0,0.304-0.063,0.415-0.172    l3.929-3.929c0.206-0.206,0.479-0.319,0.77-0.319c0.29,0,0.563,0.113,0.769,0.318c0.424,0.425,0.424,1.115,0,1.54l-1.561,1.561    c-0.167,0.168-0.217,0.42-0.127,0.639c0.091,0.219,0.305,0.361,0.542,0.361h9.233c0.275,0,0.535,0.107,0.73,0.303    c0.194,0.195,0.303,0.455,0.303,0.73c0,0.525-0.428,0.952-0.953,0.952c0,0,0,0-0.001,0h-5.476c-0.324,0-0.586,0.263-0.586,0.586    c0,0.324,0.262,0.586,0.586,0.586h8.001c0.266,0,0.514,0.104,0.701,0.291s0.291,0.437,0.291,0.701    c0,0.548-0.445,0.993-0.992,0.993h-8.001c-0.324,0-0.586,0.262-0.586,0.586c0,0.323,0.262,0.586,0.586,0.586h6.261    c0.002,0,0.003,0,0.005,0c0.265,0,0.514,0.104,0.701,0.29c0.188,0.188,0.291,0.438,0.291,0.702c0,0.547-0.445,0.992-0.992,0.992    h-6.266c-0.324,0-0.586,0.263-0.586,0.586c0,0.324,0.262,0.586,0.586,0.586h3.897c0.001,0,0.001,0,0.003,0    c0.264,0.001,0.512,0.104,0.698,0.29c0.188,0.188,0.291,0.438,0.291,0.703c0,0.547-0.445,0.992-0.992,0.992H17.25    c-0.324,0-0.586,0.262-0.586,0.586c0,0.323,0.262,0.586,0.586,0.586h7.303c1.193,0,2.164-0.971,2.164-2.164    c0-0.352-0.083-0.689-0.24-0.993h0.444c1.193,0,2.164-0.971,2.164-2.164c0-0.354-0.085-0.694-0.244-1    c1.107-0.094,1.979-1.025,1.979-2.157c0-0.577-0.225-1.121-0.633-1.529c-0.408-0.409-0.952-0.635-1.531-0.635h-0.625    c0.145-0.286,0.226-0.61,0.226-0.952c0-0.381-0.097-0.747-0.277-1.07v-7.539h1.229c0.324,0,0.586-0.262,0.586-0.586v-3.157    c0-0.324-0.262-0.586-0.586-0.586H27.98v-2.222h6.086c0.323,0,0.586-0.262,0.586-0.586s-0.263-0.586-0.586-0.586h-6.673    c-0.323,0-0.586,0.262-0.586,0.586v2.808h-4.668v-3.833c0-2.288,1.861-4.149,4.149-4.149h13.384v4.589H36.8    c-0.323,0-0.586,0.262-0.586,0.586s0.263,0.586,0.586,0.586h2.872v1.309c0,0.324,0.262,0.586,0.586,0.586h3.156    c0.323,0,0.586-0.262,0.586-0.586v-9.47C44,8.761,43.737,8.499,43.414,8.499L43.414,8.499z M15.598,26.443l-3.757,3.758h-0.234    c-0.602,0-1.182,0.181-1.678,0.522l-1.074,0.741c-0.299,0.206-0.649,0.314-1.012,0.314H5.239c0.267-1.164,1.311-2.036,2.556-2.036    c0.141,0,0.282,0.011,0.419,0.033c0.313,0.052,0.61-0.155,0.669-0.467c0.152-0.788,0.845-1.36,1.648-1.36    c0.14,0,0.281,0.018,0.419,0.053c0.287,0.072,0.583-0.08,0.689-0.356c0.53-1.363,1.817-2.244,3.28-2.244    c0.613,0,1.202,0.161,1.717,0.449C16.247,25.95,15.89,26.151,15.598,26.443L15.598,26.443z M18.794,29.64    c0.503-0.502,0.718-1.185,0.647-1.842c0.292-0.087,0.595-0.132,0.905-0.132c1.279,0,2.431,0.761,2.934,1.938    c0.104,0.241,0.355,0.385,0.616,0.35c0.111-0.015,0.219-0.021,0.32-0.021c0.399,0,0.78,0.096,1.117,0.27h-7.1L18.794,29.64z     M26.808,29.854c-0.667-0.691-1.591-1.094-2.592-1.094c-0.015,0-0.03,0-0.044,0c-0.461-0.843-1.18-1.496-2.032-1.88v-3.083h4.668    V29.854z M28.623,22.625h-8.299V20.64h8.299V22.625z M32.083,8.329h1.985v1.984h-1.985V8.329z M42.828,17.969h-1.984V9.67h1.984    V17.969z"
              />
            </g>
          </g>
        </svg>
      );
    case "salaman":
      return (
        <svg width={width} viewBox="0 0 48 48">
          <g>
            <g>
              <path
                fill={fill}
                d="M14.995,16.586c0.409,0.409,0.953,0.634,1.53,0.634h5.328l-1.597,1.598c-0.229,0.229-0.229,0.6,0,0.829    c0.114,0.114,0.264,0.171,0.414,0.171s0.3-0.058,0.415-0.172l1.671-1.673c0.361-0.361,0.81-0.601,1.299-0.701    c0.282-0.052,0.507-0.052,0.775-0.052h6.641c0.578,0,1.122-0.226,1.53-0.634l3.23-3.229c0.229-0.229,0.229-0.6,0-0.829    s-0.6-0.229-0.828,0l-3.23,3.229c-0.188,0.188-0.437,0.291-0.702,0.291h-3.637c1.693-1.204,2.802-3.181,2.802-5.412    c0-3.66-2.978-6.638-6.639-6.638c-3.66,0-6.638,2.978-6.638,6.638c0,2.231,1.108,4.208,2.802,5.412h-3.638    c-0.265,0-0.514-0.103-0.701-0.291l-3.229-3.227c-0.229-0.229-0.6-0.229-0.829,0c-0.229,0.229-0.229,0.6,0,0.829L14.995,16.586z     M18.533,10.637c0-3.014,2.452-5.466,5.466-5.466c3.015,0,5.467,2.452,5.467,5.466s-2.452,5.466-5.467,5.466    C20.985,16.103,18.533,13.651,18.533,10.637z"
              />
              <path
                fill={fill}
                d="M37.476,29.399l0.573-2.455c0.042-0.18,0.133-0.344,0.264-0.476l5.517-5.517    c0.229-0.229,0.229-0.6,0-0.828c-0.229-0.229-0.6-0.229-0.828,0l-5.517,5.517c-0.287,0.286-0.486,0.646-0.577,1.038l-0.573,2.454    c-0.043,0.181-0.134,0.345-0.265,0.476l-0.462,0.461L34.44,28.9c-0.229-0.229-0.6-0.229-0.828,0    c-0.229,0.229-0.229,0.601-0.001,0.829l3.229,3.23c0.276,0.276,0.429,0.644,0.429,1.036c0,0.392-0.152,0.759-0.43,1.037    c-0.571,0.571-1.501,0.571-2.073,0l0,0l-5.874-5.874c-0.229-0.229-0.601-0.229-0.829,0c-0.229,0.229-0.229,0.6,0,0.828    l6.588,6.588c0.277,0.276,0.43,0.646,0.43,1.036c0,0.392-0.152,0.76-0.43,1.037c-0.571,0.571-1.502,0.571-2.073,0l-6.613-6.613    c-0.229-0.229-0.6-0.229-0.829,0c-0.229,0.229-0.229,0.601,0,0.829l5.899,5.899h0.001c0.277,0.276,0.429,0.645,0.429,1.035    c0,0.393-0.151,0.761-0.43,1.038c-0.571,0.571-1.501,0.571-2.073,0l-1.982-1.983c-0.079-0.544-0.326-1.067-0.744-1.485    c-0.586-0.586-1.38-0.837-2.146-0.756c0.081-0.766-0.17-1.56-0.756-2.146c-0.585-0.586-1.38-0.838-2.146-0.757    c0.081-0.766-0.17-1.561-0.755-2.146c-0.586-0.586-1.381-0.837-2.146-0.756c0.082-0.766-0.17-1.561-0.756-2.146    c-1.029-1.028-2.703-1.028-3.731,0l-1.407,1.407l-0.46-0.461c-0.131-0.131-0.223-0.296-0.266-0.476l-0.573-2.454    c-0.092-0.393-0.291-0.752-0.577-1.039L5,20.126c-0.229-0.229-0.6-0.229-0.829,0c-0.229,0.229-0.229,0.6,0,0.828l5.514,5.514    c0.131,0.131,0.223,0.296,0.265,0.477l0.573,2.454c0.092,0.394,0.292,0.753,0.578,1.039l0.46,0.459l-1.232,1.233    c-1.029,1.027-1.029,2.702,0,3.73c0.449,0.449,1.021,0.702,1.609,0.759c-0.384,0.952-0.191,2.085,0.579,2.856    c0.498,0.498,1.161,0.772,1.866,0.772c0.345,0,0.68-0.065,0.991-0.191c0.057,0.587,0.31,1.158,0.759,1.607    c0.514,0.515,1.189,0.771,1.865,0.771c0.585,0,1.17-0.193,1.65-0.579c0.095,0.503,0.336,0.983,0.725,1.371    C20.889,43.743,21.565,44,22.24,44c0.63,0,1.26-0.224,1.759-0.671c0.484,0.435,1.104,0.673,1.76,0.673    c0.705,0,1.367-0.275,1.865-0.773c0.378-0.379,0.628-0.854,0.726-1.368c1.035,0.829,2.556,0.764,3.515-0.195    c0.438-0.437,0.702-1.001,0.761-1.608c0.952,0.384,2.085,0.19,2.854-0.58c0.499-0.498,0.773-1.161,0.773-1.865    c0-0.346-0.066-0.681-0.192-0.991c0.588-0.058,1.159-0.311,1.607-0.759c0.499-0.498,0.773-1.16,0.773-1.865    c0-0.706-0.274-1.368-0.773-1.865l-1.231-1.233l0.46-0.459C37.183,30.154,37.383,29.794,37.476,29.399L37.476,29.399z     M13.347,38.648c-0.571-0.572-0.571-1.502,0-2.073l0.706-0.707c0.003-0.002,0.006-0.005,0.008-0.007    c0.001-0.002,0.002-0.003,0.004-0.004l0.681-0.682c0.229-0.229,0.229-0.6,0-0.828c-0.229-0.229-0.6-0.229-0.829,0l-0.689,0.688    c-0.572,0.568-1.499,0.566-2.069-0.003c-0.572-0.572-0.572-1.503,0-2.074l3.468-3.468c0.277-0.277,0.645-0.43,1.037-0.43    c0.391,0,0.759,0.152,1.036,0.43c0.571,0.571,0.572,1.499,0.002,2.07c-0.001,0.001-0.001,0.002-0.002,0.003l-0.85,0.85    c-0.229,0.229-0.229,0.601,0,0.829c0.229,0.229,0.6,0.229,0.829,0l0.846-0.847c0.002,0,0.003-0.002,0.005-0.003    c0-0.002,0.001-0.002,0.002-0.003c0.572-0.568,1.5-0.567,2.071,0.002c0.57,0.57,0.571,1.498,0.004,2.069    c-0.001,0.002-0.002,0.004-0.004,0.005l-3.468,3.468c-0.004,0.004-0.008,0.009-0.012,0.014l-0.701,0.7    c-0.277,0.276-0.645,0.429-1.037,0.429C13.992,39.077,13.624,38.925,13.347,38.648L13.347,38.648z M18,41.266    c-0.392,0-0.76-0.152-1.037-0.429c-0.277-0.277-0.429-0.646-0.429-1.037c0-0.389,0.15-0.753,0.423-1.03l3.475-3.474    c0.001-0.002,0.002-0.003,0.003-0.004c0.286-0.283,0.659-0.425,1.033-0.425c0.375,0,0.75,0.142,1.037,0.429    c0.572,0.571,0.572,1.501,0,2.072l-3.468,3.469C18.759,41.113,18.391,41.266,18,41.266z M21.204,42.4    c-0.572-0.571-0.572-1.502,0-2.074l2.129-2.129c0.286-0.286,0.662-0.429,1.037-0.429c0.375,0,0.751,0.143,1.037,0.429    c0.572,0.571,0.572,1.502,0,2.073l-2.13,2.13C22.705,42.972,21.775,42.972,21.204,42.4L21.204,42.4z M26.795,42.4    c-0.277,0.276-0.645,0.429-1.036,0.429c-0.341,0-0.664-0.115-0.926-0.328l1.401-1.401c0.235-0.235,0.415-0.504,0.543-0.79    l0.017,0.017c0.001,0,0.001,0,0.001,0.001c0.277,0.277,0.43,0.645,0.43,1.036S27.072,42.123,26.795,42.4L26.795,42.4z"
              />
              <path
                fill={fill}
                d="M19.152,21.58c0.229-0.229,0.229-0.6,0-0.829c-0.229-0.229-0.6-0.229-0.828,0l-2.004,2.004    c-1.028,1.029-1.027,2.703,0,3.73c0.498,0.498,1.161,0.772,1.866,0.772c0.705,0,1.367-0.274,1.865-0.772l3.483-3.482l1.401,0.988    c1.127,0.792,2.527,1.13,3.89,0.946l2.854,2.856c0.114,0.115,0.264,0.172,0.414,0.172s0.3-0.057,0.414-0.172    c0.229-0.228,0.229-0.599,0.001-0.828l-3.066-3.07c-0.139-0.138-0.337-0.198-0.527-0.161c-1.147,0.225-2.352-0.032-3.305-0.703    l-1.804-1.271c-0.233-0.165-0.55-0.137-0.752,0.064l-3.832,3.831c-0.277,0.276-0.645,0.429-1.037,0.429    c-0.392,0-0.76-0.152-1.037-0.429c-0.571-0.571-0.571-1.502,0-2.073L19.152,21.58z"
              />
              <path
                fill={fill}
                d="M24.242,13.42c0.339,0.339,0.792,0.526,1.27,0.526c0.48,0,0.932-0.187,1.271-0.526    c0.34-0.339,0.526-0.791,0.526-1.27c0-0.48-0.187-0.931-0.526-1.271l-0.242-0.243l0.242-0.243c0.34-0.339,0.526-0.79,0.526-1.271    c0-0.479-0.187-0.931-0.526-1.271c-0.7-0.7-1.84-0.7-2.541,0l-0.243,0.243l-0.243-0.243c-0.701-0.7-1.84-0.7-2.541,0    c-0.339,0.34-0.526,0.791-0.526,1.271c0,0.48,0.187,0.931,0.526,1.271l0.243,0.243l-0.243,0.243    c-0.339,0.339-0.526,0.79-0.526,1.271c0,0.479,0.187,0.931,0.526,1.27s0.791,0.526,1.27,0.526c0.48,0,0.931-0.187,1.27-0.526    l0.243-0.243L24.242,13.42z M23.584,11.934l-0.657,0.657c-0.118,0.118-0.274,0.183-0.441,0.183c-0.167,0-0.323-0.064-0.441-0.183    s-0.183-0.275-0.183-0.441c0-0.167,0.065-0.324,0.183-0.441l0.657-0.657c0.229-0.229,0.229-0.6,0-0.829l-0.657-0.657    c-0.118-0.118-0.183-0.274-0.183-0.441c0-0.167,0.065-0.323,0.183-0.441c0.243-0.243,0.639-0.243,0.883,0l0.657,0.657    c0.11,0.11,0.259,0.172,0.415,0.172c0.155,0,0.304-0.062,0.414-0.172l0.658-0.657c0.243-0.243,0.64-0.243,0.883,0    c0.118,0.118,0.183,0.275,0.183,0.441c0,0.167-0.064,0.324-0.183,0.441l-0.657,0.657c-0.11,0.11-0.172,0.259-0.172,0.415    c0,0.156,0.062,0.305,0.172,0.415l0.657,0.657c0.118,0.118,0.183,0.274,0.183,0.441c0,0.167-0.064,0.324-0.183,0.441    c-0.118,0.118-0.275,0.183-0.442,0.183c-0.166,0-0.323-0.064-0.441-0.183l-0.657-0.657c-0.11-0.11-0.259-0.172-0.414-0.172    C23.843,11.762,23.694,11.824,23.584,11.934z"
              />
            </g>
          </g>
        </svg>
      );
    case "jagajarak":
      return (
        <svg width={width} viewBox="0 0 48 48">
          <g>
            <path
              fill={fill}
              d="M26.784,20.656c-0.229-0.229-0.6-0.229-0.829,0c-0.229,0.229-0.229,0.6,0,0.829l0.758,0.758h-5.426   l0.757-0.758c0.229-0.229,0.229-0.6,0-0.829c-0.229-0.229-0.6-0.229-0.829,0l-1.758,1.758c-0.229,0.229-0.229,0.6,0,0.829   l1.758,1.758c0.115,0.114,0.265,0.171,0.415,0.171s0.3-0.057,0.415-0.171c0.229-0.229,0.229-0.6,0-0.829l-0.758-0.757h5.426   l-0.757,0.757c-0.229,0.229-0.229,0.6,0,0.829c0.114,0.114,0.264,0.171,0.414,0.171c0.149,0,0.3-0.057,0.414-0.171l1.758-1.758   c0.229-0.229,0.229-0.6,0-0.829L26.784,20.656z"
            />
            <path
              fill={fill}
              d="M15.185,15.758H6.93c-1.615,0-2.93,1.314-2.93,2.93c0,0.324,0.262,0.586,0.586,0.586   s0.586-0.262,0.586-0.586c0-0.969,0.789-1.758,1.758-1.758h8.255c0.969,0,1.758,0.789,1.758,1.758v9.492   c0,0.313-0.252,0.547-0.586,0.547s-0.586-0.234-0.586-0.547v-9.453c0-0.324-0.263-0.586-0.586-0.586   c-0.324,0-0.586,0.262-0.586,0.586v20.866c0,0.462-0.409,0.853-0.892,0.853c-0.492,0-0.892-0.399-0.892-0.892V28.141   c0-0.323-0.262-0.586-0.586-0.586H9.885c-0.324,0-0.586,0.263-0.586,0.586v11.413c0,0.492-0.4,0.892-0.892,0.892   c-0.483,0-0.892-0.39-0.892-0.853V18.727c0-0.324-0.262-0.586-0.586-0.586s-0.586,0.262-0.586,0.586v9.414   c0,0.323-0.263,0.586-0.586,0.586s-0.586-0.263-0.586-0.586v-7.109c0-0.324-0.262-0.586-0.586-0.586S4,20.708,4,21.032v7.109   c0,0.97,0.789,1.758,1.758,1.758c0.206,0,0.402-0.035,0.586-0.101v9.795c0,1.116,0.926,2.025,2.064,2.025   c1.138,0,2.063-0.927,2.063-2.064V28.727h1.172v10.827c0,1.138,0.926,2.063,2.064,2.063c1.138,0,2.064-0.908,2.064-2.024v-9.789   c0.182,0.062,0.379,0.095,0.586,0.095c0.985,0,1.758-0.755,1.758-1.719v-9.492C18.115,17.072,16.8,15.758,15.185,15.758   L15.185,15.758z"
            />
            <path
              fill={fill}
              d="M11.032,14.586c2.261,0,4.102-1.84,4.102-4.102s-1.84-4.102-4.102-4.102c-2.262,0-4.102,1.84-4.102,4.102   S8.77,14.586,11.032,14.586z M11.032,7.555c1.615,0,2.93,1.314,2.93,2.93c0,1.615-1.314,2.93-2.93,2.93   c-1.616,0-2.93-1.314-2.93-2.93C8.102,8.869,9.416,7.555,11.032,7.555z"
            />
            <path
              fill={fill}
              d="M41.07,15.758h-8.255c-1.616,0-2.93,1.314-2.93,2.93v9.453c0,0.97,0.788,1.758,1.758,1.758   c0.205,0,0.402-0.035,0.586-0.101v9.795c0,1.116,0.926,2.025,2.063,2.025s2.063-0.927,2.063-2.064V28.727h1.172v10.827   c0,1.138,0.926,2.063,2.064,2.063c1.138,0,2.063-0.908,2.063-2.024v-9.789c0.183,0.062,0.38,0.095,0.586,0.095   c0.985,0,1.758-0.755,1.758-1.719v-9.492C44,17.072,42.686,15.758,41.07,15.758L41.07,15.758z M42.828,28.18   c0,0.313-0.252,0.547-0.586,0.547s-0.586-0.234-0.586-0.547v-9.453c0-0.324-0.263-0.586-0.586-0.586s-0.586,0.262-0.586,0.586   v20.866c0,0.462-0.408,0.853-0.892,0.853c-0.492,0-0.893-0.399-0.893-0.892V28.141c0-0.323-0.262-0.586-0.586-0.586h-2.344   c-0.155,0-0.304,0.063-0.414,0.172c-0.11,0.11-0.172,0.259-0.172,0.414v11.413c0,0.492-0.399,0.892-0.892,0.892   c-0.483,0-0.892-0.39-0.892-0.853V18.727c0-0.324-0.263-0.586-0.586-0.586c-0.324,0-0.586,0.262-0.586,0.586v9.414   c0,0.323-0.264,0.586-0.586,0.586c-0.323,0-0.586-0.263-0.586-0.586v-9.453c0-0.969,0.788-1.758,1.758-1.758h8.255   c0.969,0,1.758,0.789,1.758,1.758V28.18z"
            />
            <path
              fill={fill}
              d="M36.917,14.586c2.262,0,4.102-1.84,4.102-4.102s-1.84-4.102-4.102-4.102s-4.102,1.84-4.102,4.102   S34.655,14.586,36.917,14.586z M36.917,7.555c1.615,0,2.93,1.314,2.93,2.93c0,1.615-1.314,2.93-2.93,2.93s-2.93-1.314-2.93-2.93   C33.987,8.869,35.302,7.555,36.917,7.555z"
            />
          </g>
        </svg>
      );
    default:
      return <></>;
  }
}

export default function Adab() {
  const adabs: AdabData[] = [
    {
      nama: "Memakai masker",
      icon: "masker",
    },
    {
      nama: "Mencuci tangan / Memakai hand sanitizer",
      icon: "cucitangan",
    },
    {
      nama: "Tidak berjabat tangan",
      icon: "salaman",
    },
    {
      nama: "Menjaga jarak",
      icon: "jagajarak",
    },
  ];
  return (
    <>
      <section className="paper page" id="prokes">
        <div className="section-identifier">prokes</div>

        <div style={{ height: 32 }}></div>
        <h2>Protokol Kesehatan</h2>
        <p>
          Mengingat kondisi pandemi, kami menghimbau Bapak/Ibu/Saudara/i untuk
          memperhatikan protokol kesehatan dalam rangka upaya pencegahan
          penyebaran virus COVID-19.{" "}
        </p>

        <m.div
          variants={fadeUpVariantWithChilds}
          initial="hidden"
          whileInView="visible"
          className="adab"
        >
          {adabs &&
            adabs.map((val, id) => {
              return (
                <m.div
                  variants={fadeUpVariantWithChilds}
                  key={`prokes-${id}`}
                  className="item "
                >
                  <div className="decor">
                    <SvgIcons icon={val.icon} fill="#9F9F45" width={100} />
                  </div>
                  <div>{val.nama}</div>
                </m.div>
              );
            })}
        </m.div>
      </section>
      <section className="page paper shadow" id="doa">
        <div className="section-identifier">doa</div>

        <div className="quran maxMd">
          <m.h2 variants={fadeUpVariant} initial="hidden" whileInView="visible">
            Doa untuk Kedua Mempelai
          </m.h2>
          <m.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            className="ayat"
          >
            بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِى
            خَيْرٍ
            {/* <span className="end">{"\u06DD"}٢١</span> */}
          </m.div>
          <m.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            className="terjemah"
          >
            “Semoga Allah memberkahimu ketika bahagia dan ketika susah dan
            mengumpulkan kalian berdua dalam kebaikan.”
            <br />
            (HR. Abu Daud, no. 2130)
          </m.div>
        </div>
      </section>
    </>
  );
}
