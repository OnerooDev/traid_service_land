import { FC } from 'react';

interface LogoProps {
    
}


export const Logo: FC <LogoProps> = ({}) => {
return (
<svg className="logo" viewBox="0 0 189 173" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_59_7)">
<path d="M132.224 47.3794V47.2281L132.148 47.3677L128.27 46.746L128.141 47.37L131.821 47.9596L109.214 88.8946L89.2789 83.0201L89.3172 82.3858L89.3403 82.3647L89.278 82.3654C89.2522 79.7516 89.3216 76.2016 89.3893 72.7677C89.4462 69.8638 89.5005 67.1206 89.5005 64.9175H90.3905C90.3905 67.1268 90.3362 69.8732 90.2793 72.781C90.2179 75.8935 90.1556 79.093 90.1645 81.6058L106.186 66.8321L112.843 67.8497L132.224 40.0788V38.3721L111.973 60.6055L58.7875 53.6091V60.1508L80.378 63.5314L80.3513 65.5322L62.7329 76.2518L79.8235 80.2189L79.5966 80.977L62.0974 76.9151L62.6706 83.9773L110.501 97.0082L132.224 52.0717V47.4022L132.229 47.3802H132.224V47.3794Z" fill="#FEFFFF"/>
<rect x="30.5" y="19.5" width="126" height="133" rx="9.5" stroke="#FEFFFF"/>
<line x1="30.5" y1="131" x2="30.5" y2="101" stroke="#1DCD8D"/>
<line x1="156.5" y1="131" x2="156.5" y2="101" stroke="#1DCD8D"/>
<path d="M9.58048 125C9.24448 125 8.95515 124.888 8.71248 124.664C8.48849 124.421 8.37649 124.132 8.37649 123.796V103.132H10.7845V123.796C10.7845 124.132 10.6725 124.421 10.4485 124.664C10.2245 124.888 9.93515 125 9.58048 125ZM1.93648 105.344C1.60048 105.344 1.32982 105.241 1.12448 105.036C0.919151 104.812 0.816484 104.551 0.816484 104.252C0.816484 103.916 0.919151 103.645 1.12448 103.44C1.32982 103.235 1.60048 103.132 1.93648 103.132H17.2525C17.5885 103.132 17.8592 103.235 18.0645 103.44C18.2698 103.645 18.3725 103.916 18.3725 104.252C18.3725 104.551 18.2698 104.812 18.0645 105.036C17.8592 105.241 17.5885 105.344 17.2525 105.344H1.93648ZM18.4447 115.508C18.482 114.369 18.7713 113.352 19.3127 112.456C19.8727 111.541 20.6007 110.823 21.4967 110.3C22.4113 109.777 23.41 109.516 24.4927 109.516C25.4447 109.516 26.1633 109.656 26.6487 109.936C27.1527 110.216 27.3393 110.599 27.2087 111.084C27.1527 111.345 27.0313 111.532 26.8447 111.644C26.6767 111.756 26.4713 111.812 26.2287 111.812C26.0047 111.812 25.7433 111.793 25.4447 111.756C24.3433 111.625 23.3633 111.7 22.5047 111.98C21.6647 112.241 20.9927 112.68 20.4887 113.296C19.9847 113.912 19.7327 114.649 19.7327 115.508H18.4447ZM18.5847 125C18.2113 125 17.922 124.897 17.7167 124.692C17.5113 124.487 17.4087 124.197 17.4087 123.824V110.86C17.4087 110.487 17.5113 110.197 17.7167 109.992C17.922 109.787 18.2113 109.684 18.5847 109.684C18.958 109.684 19.238 109.787 19.4247 109.992C19.63 110.197 19.7327 110.487 19.7327 110.86V123.824C19.7327 124.197 19.63 124.487 19.4247 124.692C19.238 124.897 18.958 125 18.5847 125ZM35.9939 125.14C34.5752 125.14 33.3059 124.804 32.1859 124.132C31.0659 123.441 30.1792 122.508 29.5259 121.332C28.8726 120.156 28.5459 118.831 28.5459 117.356C28.5459 115.863 28.8819 114.528 29.5539 113.352C30.2446 112.176 31.1779 111.252 32.3539 110.58C33.5299 109.889 34.8552 109.544 36.3299 109.544C37.7859 109.544 39.0926 109.889 40.2499 110.58C41.4259 111.252 42.3499 112.176 43.0219 113.352C43.7126 114.528 44.0672 115.863 44.0859 117.356L43.1339 117.832C43.1339 119.213 42.8166 120.455 42.1819 121.556C41.5659 122.657 40.7166 123.535 39.6339 124.188C38.5699 124.823 37.3566 125.14 35.9939 125.14ZM36.3299 123.012C37.3752 123.012 38.2992 122.769 39.1019 122.284C39.9232 121.78 40.5672 121.099 41.0339 120.24C41.5192 119.381 41.7619 118.42 41.7619 117.356C41.7619 116.273 41.5192 115.312 41.0339 114.472C40.5672 113.613 39.9232 112.932 39.1019 112.428C38.2992 111.924 37.3752 111.672 36.3299 111.672C35.3032 111.672 34.3699 111.924 33.5299 112.428C32.7086 112.932 32.0552 113.613 31.5699 114.472C31.0846 115.312 30.8419 116.273 30.8419 117.356C30.8419 118.42 31.0846 119.381 31.5699 120.24C32.0552 121.099 32.7086 121.78 33.5299 122.284C34.3699 122.769 35.3032 123.012 36.3299 123.012ZM42.8819 125C42.5459 125 42.2566 124.897 42.0139 124.692C41.7899 124.468 41.6779 124.179 41.6779 123.824V119.204L42.2099 116.768L44.0859 117.356V123.824C44.0859 124.179 43.9739 124.468 43.7499 124.692C43.5259 124.897 43.2366 125 42.8819 125ZM49.8758 125C49.5211 125 49.2318 124.897 49.0078 124.692C48.7838 124.468 48.6718 124.169 48.6718 123.796V110.888C48.6718 110.515 48.7838 110.225 49.0078 110.02C49.2318 109.796 49.5211 109.684 49.8758 109.684C50.2304 109.684 50.5104 109.796 50.7158 110.02C50.9398 110.225 51.0518 110.515 51.0518 110.888V123.796C51.0518 124.169 50.9398 124.468 50.7158 124.692C50.5104 124.897 50.2304 125 49.8758 125ZM49.8478 106.912C49.3998 106.912 49.0171 106.753 48.6998 106.436C48.3824 106.1 48.2238 105.708 48.2238 105.26C48.2238 104.793 48.3824 104.411 48.6998 104.112C49.0358 103.813 49.4184 103.664 49.8478 103.664C50.2771 103.664 50.6504 103.813 50.9678 104.112C51.3038 104.411 51.4718 104.793 51.4718 105.26C51.4718 105.708 51.3131 106.1 50.9958 106.436C50.6784 106.753 50.2958 106.912 49.8478 106.912ZM63.4549 125.14C61.9802 125.14 60.6549 124.804 59.4789 124.132C58.3029 123.441 57.3696 122.508 56.6789 121.332C56.0069 120.156 55.6709 118.821 55.6709 117.328C55.6709 115.853 55.9976 114.528 56.6509 113.352C57.3042 112.176 58.1909 111.252 59.3109 110.58C60.4309 109.889 61.7002 109.544 63.1189 109.544C64.3322 109.544 65.4242 109.805 66.3949 110.328C67.3842 110.832 68.1869 111.504 68.8029 112.344V104.336C68.8029 103.963 68.9149 103.673 69.1389 103.468C69.3816 103.244 69.6709 103.132 70.0069 103.132C70.3616 103.132 70.6509 103.244 70.8749 103.468C71.0989 103.673 71.2109 103.963 71.2109 104.336V117.412C71.1736 118.868 70.8096 120.184 70.1189 121.36C69.4469 122.517 68.5322 123.441 67.3749 124.132C66.2176 124.804 64.9109 125.14 63.4549 125.14ZM63.4549 123.012C64.5002 123.012 65.4242 122.76 66.2269 122.256C67.0482 121.752 67.6922 121.08 68.1589 120.24C68.6442 119.381 68.8869 118.411 68.8869 117.328C68.8869 116.264 68.6442 115.303 68.1589 114.444C67.6922 113.585 67.0482 112.913 66.2269 112.428C65.4242 111.924 64.5002 111.672 63.4549 111.672C62.4282 111.672 61.4949 111.924 60.6549 112.428C59.8336 112.913 59.1802 113.585 58.6949 114.444C58.2096 115.303 57.9669 116.264 57.9669 117.328C57.9669 118.411 58.2096 119.381 58.6949 120.24C59.1802 121.08 59.8336 121.752 60.6549 122.256C61.4949 122.76 62.4282 123.012 63.4549 123.012ZM91.5115 125.28C90.3169 125.28 89.1969 125.103 88.1515 124.748C87.1249 124.393 86.2289 123.899 85.4635 123.264C84.6982 122.611 84.1289 121.855 83.7555 120.996C83.5875 120.679 83.5782 120.38 83.7275 120.1C83.8955 119.82 84.1662 119.633 84.5395 119.54C84.8195 119.465 85.0995 119.503 85.3795 119.652C85.6595 119.783 85.8649 119.997 85.9955 120.296C86.2755 120.819 86.6769 121.295 87.1995 121.724C87.7409 122.135 88.3755 122.461 89.1035 122.704C89.8502 122.928 90.6529 123.04 91.5115 123.04C92.4822 123.04 93.3502 122.881 94.1155 122.564C94.8809 122.247 95.4875 121.789 95.9355 121.192C96.3835 120.595 96.6075 119.867 96.6075 119.008C96.6075 117.925 96.1969 116.983 95.3755 116.18C94.5542 115.359 93.2475 114.845 91.4555 114.64C89.2342 114.379 87.4889 113.697 86.2195 112.596C84.9689 111.495 84.3435 110.132 84.3435 108.508C84.3435 107.351 84.6609 106.352 85.2955 105.512C85.9302 104.653 86.7982 104 87.8995 103.552C89.0009 103.085 90.2515 102.852 91.6515 102.852C92.7155 102.852 93.6675 103.02 94.5075 103.356C95.3475 103.673 96.0755 104.103 96.6915 104.644C97.3262 105.185 97.8489 105.792 98.2595 106.464C98.4835 106.8 98.5582 107.127 98.4835 107.444C98.4275 107.743 98.2595 107.976 97.9795 108.144C97.6809 108.293 97.3635 108.321 97.0275 108.228C96.7102 108.116 96.4675 107.911 96.2995 107.612C96.0195 107.164 95.6649 106.753 95.2355 106.38C94.8249 105.988 94.3209 105.68 93.7235 105.456C93.1262 105.232 92.4169 105.111 91.5955 105.092C90.1582 105.092 88.9822 105.391 88.0675 105.988C87.1529 106.585 86.6955 107.472 86.6955 108.648C86.6955 109.245 86.8542 109.815 87.1715 110.356C87.5075 110.879 88.0582 111.327 88.8235 111.7C89.6075 112.073 90.6715 112.353 92.0155 112.54C94.3302 112.839 96.0662 113.539 97.2235 114.64C98.3809 115.741 98.9595 117.188 98.9595 118.98C98.9595 120.007 98.7635 120.912 98.3715 121.696C97.9982 122.48 97.4662 123.143 96.7755 123.684C96.0849 124.207 95.2822 124.608 94.3675 124.888C93.4715 125.149 92.5195 125.28 91.5115 125.28ZM110.241 125.14C108.711 125.14 107.357 124.813 106.181 124.16C105.005 123.488 104.081 122.564 103.409 121.388C102.737 120.212 102.401 118.868 102.401 117.356C102.401 115.825 102.719 114.481 103.353 113.324C103.988 112.148 104.856 111.224 105.957 110.552C107.077 109.88 108.365 109.544 109.821 109.544C111.24 109.544 112.472 109.871 113.517 110.524C114.581 111.159 115.393 112.045 115.953 113.184C116.532 114.323 116.821 115.62 116.821 117.076C116.821 117.393 116.719 117.655 116.513 117.86C116.308 118.047 116.047 118.14 115.729 118.14H104.025V116.208H115.869L114.665 117.048C114.684 116.021 114.497 115.097 114.105 114.276C113.713 113.455 113.153 112.811 112.425 112.344C111.697 111.877 110.829 111.644 109.821 111.644C108.757 111.644 107.824 111.887 107.021 112.372C106.237 112.857 105.631 113.539 105.201 114.416C104.791 115.275 104.585 116.255 104.585 117.356C104.585 118.457 104.828 119.437 105.313 120.296C105.799 121.155 106.461 121.827 107.301 122.312C108.16 122.797 109.14 123.04 110.241 123.04C110.876 123.04 111.52 122.928 112.173 122.704C112.845 122.48 113.377 122.2 113.769 121.864C113.993 121.696 114.245 121.612 114.525 121.612C114.824 121.593 115.067 121.668 115.253 121.836C115.533 122.079 115.673 122.34 115.673 122.62C115.692 122.9 115.571 123.143 115.309 123.348C114.693 123.871 113.909 124.3 112.957 124.636C112.005 124.972 111.1 125.14 110.241 125.14ZM121.503 115.508C121.541 114.369 121.83 113.352 122.371 112.456C122.931 111.541 123.659 110.823 124.555 110.3C125.47 109.777 126.469 109.516 127.551 109.516C128.503 109.516 129.222 109.656 129.707 109.936C130.211 110.216 130.398 110.599 130.267 111.084C130.211 111.345 130.09 111.532 129.903 111.644C129.735 111.756 129.53 111.812 129.287 111.812C129.063 111.812 128.802 111.793 128.503 111.756C127.402 111.625 126.422 111.7 125.563 111.98C124.723 112.241 124.051 112.68 123.547 113.296C123.043 113.912 122.791 114.649 122.791 115.508H121.503ZM121.643 125C121.27 125 120.981 124.897 120.775 124.692C120.57 124.487 120.467 124.197 120.467 123.824V110.86C120.467 110.487 120.57 110.197 120.775 109.992C120.981 109.787 121.27 109.684 121.643 109.684C122.017 109.684 122.297 109.787 122.483 109.992C122.689 110.197 122.791 110.487 122.791 110.86V123.824C122.791 124.197 122.689 124.487 122.483 124.692C122.297 124.897 122.017 125 121.643 125ZM138.746 125C138.26 125 137.896 124.739 137.654 124.216L131.522 111.224C131.391 110.963 131.372 110.701 131.466 110.44C131.578 110.179 131.783 109.973 132.082 109.824C132.362 109.675 132.632 109.656 132.894 109.768C133.174 109.861 133.388 110.039 133.538 110.3L139.362 122.928H138.158L143.926 110.3C144.038 110.02 144.243 109.833 144.542 109.74C144.84 109.647 145.13 109.665 145.41 109.796C145.708 109.945 145.904 110.16 145.998 110.44C146.091 110.701 146.082 110.953 145.97 111.196L139.894 124.216C139.651 124.739 139.268 125 138.746 125ZM150.555 125C150.201 125 149.911 124.897 149.687 124.692C149.463 124.468 149.351 124.169 149.351 123.796V110.888C149.351 110.515 149.463 110.225 149.687 110.02C149.911 109.796 150.201 109.684 150.555 109.684C150.91 109.684 151.19 109.796 151.395 110.02C151.619 110.225 151.731 110.515 151.731 110.888V123.796C151.731 124.169 151.619 124.468 151.395 124.692C151.19 124.897 150.91 125 150.555 125ZM150.527 106.912C150.079 106.912 149.697 106.753 149.379 106.436C149.062 106.1 148.903 105.708 148.903 105.26C148.903 104.793 149.062 104.411 149.379 104.112C149.715 103.813 150.098 103.664 150.527 103.664C150.957 103.664 151.33 103.813 151.647 104.112C151.983 104.411 152.151 104.793 152.151 105.26C152.151 105.708 151.993 106.1 151.675 106.436C151.358 106.753 150.975 106.912 150.527 106.912ZM164.023 125.14C162.548 125.14 161.232 124.804 160.075 124.132C158.917 123.441 158.003 122.508 157.331 121.332C156.677 120.156 156.351 118.831 156.351 117.356C156.351 115.863 156.668 114.528 157.303 113.352C157.956 112.176 158.833 111.252 159.935 110.58C161.055 109.889 162.343 109.544 163.799 109.544C164.919 109.544 165.955 109.768 166.907 110.216C167.859 110.645 168.699 111.299 169.427 112.176C169.651 112.437 169.725 112.708 169.651 112.988C169.595 113.249 169.427 113.483 169.147 113.688C168.923 113.837 168.671 113.893 168.391 113.856C168.129 113.8 167.887 113.651 167.663 113.408C166.636 112.251 165.348 111.672 163.799 111.672C162.772 111.672 161.867 111.915 161.083 112.4C160.317 112.885 159.72 113.557 159.291 114.416C158.861 115.256 158.647 116.236 158.647 117.356C158.647 118.439 158.871 119.409 159.319 120.268C159.785 121.108 160.42 121.78 161.223 122.284C162.044 122.769 162.977 123.012 164.023 123.012C164.732 123.012 165.367 122.919 165.927 122.732C166.505 122.545 167.019 122.256 167.467 121.864C167.728 121.659 167.989 121.547 168.251 121.528C168.512 121.509 168.755 121.584 168.979 121.752C169.221 121.976 169.361 122.228 169.399 122.508C169.436 122.788 169.343 123.04 169.119 123.264C167.756 124.515 166.057 125.14 164.023 125.14ZM180.898 125.14C179.367 125.14 178.014 124.813 176.838 124.16C175.662 123.488 174.738 122.564 174.066 121.388C173.394 120.212 173.058 118.868 173.058 117.356C173.058 115.825 173.375 114.481 174.01 113.324C174.644 112.148 175.512 111.224 176.614 110.552C177.734 109.88 179.022 109.544 180.478 109.544C181.896 109.544 183.128 109.871 184.174 110.524C185.238 111.159 186.05 112.045 186.61 113.184C187.188 114.323 187.478 115.62 187.478 117.076C187.478 117.393 187.375 117.655 187.17 117.86C186.964 118.047 186.703 118.14 186.386 118.14H174.682V116.208H186.526L185.322 117.048C185.34 116.021 185.154 115.097 184.762 114.276C184.37 113.455 183.81 112.811 183.082 112.344C182.354 111.877 181.486 111.644 180.478 111.644C179.414 111.644 178.48 111.887 177.678 112.372C176.894 112.857 176.287 113.539 175.858 114.416C175.447 115.275 175.242 116.255 175.242 117.356C175.242 118.457 175.484 119.437 175.97 120.296C176.455 121.155 177.118 121.827 177.958 122.312C178.816 122.797 179.796 123.04 180.898 123.04C181.532 123.04 182.176 122.928 182.83 122.704C183.502 122.48 184.034 122.2 184.426 121.864C184.65 121.696 184.902 121.612 185.182 121.612C185.48 121.593 185.723 121.668 185.91 121.836C186.19 122.079 186.33 122.34 186.33 122.62C186.348 122.9 186.227 123.143 185.966 123.348C185.35 123.871 184.566 124.3 183.614 124.636C182.662 124.972 181.756 125.14 180.898 125.14Z" fill="#FEFFFF"/>
</g>
<defs>
<clipPath id="clip0_59_7">
<rect width="189" height="173" fill="white"/>
</clipPath>
</defs>
</svg>
)
}