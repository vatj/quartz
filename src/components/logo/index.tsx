import React, { FC } from 'react';

export interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: FC<LogoProps> = ({ width = 93, height = 22 }: LogoProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 93 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_861_48011)">
      <path
        d="M29.2046 7.07788V14.0886H27.2788V11.3406H24.9292V14.0886H23.0034V7.07788H24.9292V9.66461H27.2788V7.07788H29.2046Z"
        fill="white"
      />
      <path
        d="M33.5686 14.1455C33.0341 14.1455 32.5503 14.0443 32.1171 13.8388C31.6839 13.6364 31.3107 13.3676 31.0008 13.0356C30.6909 12.7035 30.4506 12.3241 30.2798 11.894C30.1091 11.4671 30.0237 11.0244 30.0237 10.5722C30.0237 10.12 30.1122 9.66776 30.2893 9.24086C30.4664 8.81395 30.7162 8.43765 31.0356 8.11193C31.355 7.78622 31.7313 7.52692 32.1709 7.33402C32.6072 7.14112 33.0879 7.04309 33.6065 7.04309C34.1251 7.04309 34.6248 7.14428 35.058 7.34983C35.4912 7.55538 35.8644 7.82417 36.1743 8.15937C36.4842 8.49457 36.7213 8.8772 36.8889 9.3041C37.0565 9.73101 37.1419 10.1706 37.1419 10.6164C37.1419 11.0623 37.0534 11.5208 36.8763 11.9446C36.6992 12.3683 36.4525 12.7446 36.1363 13.0704C35.8201 13.3961 35.4438 13.6585 35.0074 13.8546C34.571 14.0506 34.0903 14.1487 33.5717 14.1487L33.5686 14.1455ZM31.9811 10.5943C31.9811 10.8315 32.0127 11.0592 32.0791 11.2805C32.1456 11.5019 32.2436 11.6979 32.3764 11.8687C32.5092 12.0395 32.6736 12.1786 32.876 12.2829C33.0784 12.3873 33.3156 12.4411 33.5907 12.4411C33.8658 12.4411 34.1062 12.3873 34.3117 12.2766C34.5172 12.1691 34.6817 12.0268 34.8113 11.8529C34.9378 11.679 35.0359 11.4797 35.0991 11.2552C35.1623 11.0307 35.194 10.8062 35.194 10.5753C35.194 10.3445 35.1624 10.1105 35.0959 9.88912C35.0295 9.66776 34.9315 9.47487 34.7955 9.30727C34.6595 9.13967 34.4919 9.00369 34.2927 8.9025C34.0903 8.8013 33.8563 8.75071 33.5875 8.75071C33.3187 8.75071 33.0721 8.80447 32.8729 8.90882C32.6705 9.01318 32.5061 9.15548 32.3732 9.3294C32.2404 9.50333 32.1456 9.69939 32.0823 9.92074C32.0191 10.1421 31.9874 10.3698 31.9874 10.5975"
        fill="white"
      />
      <path
        d="M37.9641 14.0886V7.07788H40.9872C41.3288 7.07788 41.645 7.14745 41.9359 7.28975C42.2268 7.43205 42.4735 7.61546 42.6822 7.84315C42.8909 8.07083 43.0522 8.33013 43.1724 8.62106C43.2925 8.91515 43.3494 9.20924 43.3494 9.50333C43.3494 9.79742 43.2925 10.1136 43.1818 10.4077C43.0712 10.7018 42.913 10.9611 42.7138 11.1857C42.5114 11.4133 42.2679 11.5936 41.9833 11.7296C41.6956 11.8655 41.3825 11.9319 41.041 11.9319H39.8963V14.0854H37.9704L37.9641 14.0886ZM39.8899 10.2591H40.9082C41.0283 10.2591 41.1359 10.2054 41.237 10.0947C41.3382 9.98716 41.3888 9.7911 41.3888 9.50649C41.3888 9.22189 41.3288 9.01951 41.2118 8.91515C41.0916 8.8108 40.9746 8.75704 40.8576 8.75704H39.8899V10.2591Z"
        fill="white"
      />
      <path
        d="M48.3582 9.36733C48.159 9.24716 47.9566 9.14281 47.7447 9.0511C47.5676 8.97205 47.3684 8.89932 47.1471 8.82975C46.9257 8.76018 46.7107 8.72539 46.4988 8.72539C46.328 8.72539 46.1921 8.75069 46.0877 8.80445C45.9865 8.85821 45.9359 8.94675 45.9359 9.07008C45.9359 9.16178 45.9644 9.23768 46.0245 9.29776C46.0845 9.35784 46.1699 9.4116 46.2806 9.4622C46.3913 9.51279 46.5273 9.56023 46.6917 9.6045C46.853 9.64877 47.0364 9.70569 47.2388 9.7721C47.5613 9.87013 47.8522 9.98081 48.1116 10.0978C48.3709 10.218 48.5954 10.3571 48.7788 10.5184C48.9622 10.6797 49.1045 10.8757 49.2025 11.1066C49.3006 11.3374 49.3512 11.6157 49.3512 11.9446C49.3512 12.3651 49.2721 12.7193 49.1203 13.0071C48.9685 13.2949 48.763 13.5225 48.5068 13.6933C48.2539 13.8641 47.9661 13.9874 47.6467 14.0633C47.3273 14.1392 47.0079 14.1771 46.6854 14.1771C46.4292 14.1771 46.1668 14.1581 45.8948 14.117C45.626 14.0791 45.3572 14.0222 45.0916 13.9494C44.826 13.8767 44.5667 13.7913 44.32 13.6933C44.0734 13.5953 43.8457 13.4846 43.6338 13.3581L44.4623 11.6695C44.6931 11.8149 44.9335 11.9414 45.1833 12.0552C45.392 12.1533 45.6323 12.2418 45.898 12.3209C46.1636 12.3999 46.4355 12.441 46.7138 12.441C46.9225 12.441 47.0712 12.4126 47.1534 12.3557C47.2356 12.2987 47.2767 12.226 47.2767 12.1343C47.2767 12.0363 47.2356 11.9509 47.1534 11.8813C47.0712 11.8118 46.9573 11.7517 46.8119 11.6979C46.6664 11.6442 46.502 11.5936 46.3122 11.5398C46.1257 11.486 45.9264 11.4228 45.7146 11.3532C45.4047 11.2489 45.139 11.135 44.9145 11.0117C44.69 10.8884 44.5066 10.7524 44.3611 10.5974C44.2156 10.4425 44.1081 10.2686 44.0386 10.0693C43.969 9.87013 43.9342 9.64561 43.9342 9.38946C43.9342 9.00051 44.0038 8.65898 44.1461 8.36173C44.2884 8.06448 44.4813 7.81782 44.7248 7.62176C44.9683 7.42254 45.2465 7.27392 45.5596 7.17272C45.8727 7.07153 46.2016 7.02094 46.5526 7.02094C46.8087 7.02094 47.0585 7.04623 47.302 7.09367C47.5455 7.14426 47.7795 7.20435 48.0072 7.28024C48.2349 7.35613 48.4468 7.43835 48.6428 7.5269C48.842 7.61544 49.0191 7.70082 49.1741 7.77988L48.3456 9.37049L48.3582 9.36733Z"
        fill="white"
      />
      <path
        d="M63.0251 14.1455C62.4907 14.1455 62.0069 14.0443 61.5736 13.8388C61.1404 13.6364 60.7673 13.3676 60.4574 13.0356C60.1474 12.7035 59.9071 12.3241 59.7364 11.894C59.5656 11.4671 59.4802 11.0244 59.4802 10.5722C59.4802 10.12 59.5688 9.66776 59.7458 9.24086C59.9229 8.81395 60.1727 8.43765 60.4921 8.11193C60.8115 7.78622 61.1878 7.52692 61.6274 7.33402C62.0638 7.14112 62.5444 7.04309 63.063 7.04309C63.5817 7.04309 64.0813 7.14428 64.5145 7.34983C64.9478 7.55538 65.3209 7.82417 65.6308 8.15937C65.9407 8.49457 66.1779 8.8772 66.3455 9.3041C66.5131 9.73101 66.5984 10.1706 66.5984 10.6164C66.5984 11.0623 66.5099 11.5208 66.3328 11.9446C66.1557 12.3683 65.9091 12.7446 65.5929 13.0704C65.2766 13.3961 64.9003 13.6585 64.4639 13.8546C64.0275 14.0506 63.5469 14.1487 63.0283 14.1487L63.0251 14.1455ZM61.4376 10.5943C61.4376 10.8315 61.4693 11.0592 61.5357 11.2805C61.6021 11.5019 61.7001 11.6979 61.8329 11.8687C61.9657 12.0395 62.1302 12.1786 62.3326 12.2829C62.535 12.3873 62.7721 12.4411 63.0472 12.4411C63.3224 12.4411 63.5627 12.3873 63.7682 12.2766C63.9706 12.1691 64.1382 12.0268 64.2679 11.8529C64.3944 11.679 64.4924 11.4797 64.5556 11.2552C64.6189 11.0307 64.6505 10.8062 64.6505 10.5753C64.6505 10.3445 64.6189 10.1105 64.5525 9.88912C64.4861 9.66776 64.388 9.47487 64.2521 9.30727C64.1161 9.13967 63.9485 9.00369 63.7493 8.9025C63.5469 8.8013 63.3129 8.75071 63.0441 8.75071C62.7753 8.75071 62.5286 8.80447 62.3294 8.90882C62.127 9.01318 61.9626 9.15548 61.8298 9.3294C61.697 9.50333 61.6021 9.69939 61.5388 9.92074C61.4756 10.1421 61.444 10.3698 61.444 10.5975"
        fill="white"
      />
      <path
        d="M67.4204 14.0886V7.07788H70.6396C70.9811 7.07788 71.2973 7.14745 71.5883 7.28975C71.8792 7.43205 72.1258 7.61546 72.3345 7.84315C72.5433 8.07083 72.7045 8.33013 72.8247 8.62106C72.9449 8.91515 73.0018 9.20924 73.0018 9.50333C73.0018 9.91126 72.9132 10.2907 72.7362 10.6449C72.5591 10.9959 72.3124 11.2837 71.9962 11.5082L73.4761 14.0854H71.3036L70.0704 11.9319H69.3494V14.0854H67.4236L67.4204 14.0886ZM69.3462 10.2591H70.5605C70.6807 10.2591 70.7882 10.1927 70.8926 10.0599C70.9938 9.92707 71.0443 9.74366 71.0443 9.50649C71.0443 9.26932 70.9843 9.07643 70.8673 8.94994C70.7471 8.82345 70.6301 8.75704 70.5131 8.75704H69.3462V10.2591Z"
        fill="white"
      />
      <path
        d="M74.0864 14.0886V7.07788H76.0091V9.7405L78.1436 7.07788H80.3161L77.7673 10.2148L80.4932 14.0886H78.2827L76.5435 11.5114L76.0091 12.0616V14.0886H74.0864Z"
        fill="white"
      />
      <path
        d="M85.1448 9.36733C84.9456 9.24716 84.7432 9.14281 84.5313 9.0511C84.3543 8.97205 84.155 8.89932 83.9337 8.82975C83.7123 8.76018 83.4973 8.72539 83.2854 8.72539C83.1147 8.72539 82.9787 8.75069 82.8743 8.80445C82.7731 8.85821 82.7225 8.94675 82.7225 9.07008C82.7225 9.16178 82.751 9.23768 82.8111 9.29776C82.8712 9.35784 82.9565 9.4116 83.0672 9.4622C83.1779 9.51279 83.3139 9.56023 83.4783 9.6045C83.6396 9.64877 83.823 9.70569 84.0254 9.7721C84.3479 9.87013 84.6389 9.98081 84.8982 10.0978C85.1575 10.218 85.382 10.3571 85.5654 10.5184C85.7488 10.6797 85.8911 10.8757 85.9891 11.1066C86.0872 11.3374 86.1378 11.6157 86.1378 11.9446C86.1378 12.3651 86.0587 12.7193 85.9069 13.0071C85.752 13.2949 85.5496 13.5225 85.2934 13.6933C85.0405 13.8641 84.7527 13.9874 84.4333 14.0633C84.1139 14.1392 83.7945 14.1771 83.472 14.1771C83.2159 14.1771 82.9534 14.1581 82.6814 14.117C82.4126 14.0791 82.1438 14.0222 81.8782 13.9494C81.6126 13.8767 81.3533 13.7913 81.1066 13.6933C80.86 13.5953 80.6323 13.4846 80.4204 13.3581L81.2489 11.6695C81.4798 11.8149 81.7201 11.9414 81.9699 12.0552C82.1786 12.1533 82.4189 12.2418 82.6846 12.3209C82.9502 12.3999 83.2222 12.441 83.5004 12.441C83.7092 12.441 83.8578 12.4126 83.94 12.3557C84.0222 12.2987 84.0633 12.226 84.0633 12.1343C84.0633 12.0363 84.0222 11.9509 83.94 11.8813C83.8578 11.8118 83.7439 11.7517 83.5985 11.6979C83.453 11.6442 83.2886 11.5936 83.0988 11.5398C82.9123 11.486 82.7131 11.4228 82.5012 11.3532C82.1913 11.2489 81.9256 11.135 81.7011 11.0117C81.4766 10.8884 81.2932 10.7524 81.1477 10.5974C81.0023 10.4425 80.8948 10.2686 80.8252 10.0693C80.7556 9.87013 80.7208 9.64561 80.7208 9.38946C80.7208 9.00051 80.7904 8.65898 80.9327 8.36173C81.075 8.06448 81.2679 7.81782 81.5114 7.62176C81.7549 7.42254 82.0332 7.27392 82.3462 7.17272C82.6593 7.07153 82.9882 7.02094 83.3392 7.02094C83.5953 7.02094 83.8451 7.04623 84.0886 7.09367C84.3321 7.14426 84.5661 7.20435 84.7938 7.28024C85.0215 7.35613 85.2334 7.43835 85.4294 7.5269C85.6287 7.61544 85.8057 7.70082 85.9607 7.77988L85.1322 9.37049L85.1448 9.36733Z"
        fill="white"
      />
      <path
        d="M49.927 7.19165H51.9034L52.6149 11.037L53.6585 7.19165H55.6285L56.6721 11.0306L57.3836 7.19165H59.3505L57.8643 14.0601H55.8246L54.6419 9.7341L53.4656 14.0601H51.4259L49.927 7.19165Z"
        fill="white"
      />
    </g>
    <g filter="url(#filter1_d_861_48011)">
      <path
        d="M6.0765 18.0541C5.68754 18.2628 5.27644 18.4019 4.84005 18.481C4.49537 18.5442 4.14752 18.5505 3.80283 18.5474C3.43285 18.541 3.06919 18.4841 2.69921 18.4367C2.67391 18.4304 2.64861 18.424 2.62647 18.4114C2.62015 18.4082 2.61066 18.4051 2.60434 18.3987C2.59801 18.3924 2.59486 18.3861 2.59169 18.3798C2.57904 18.3576 2.56955 18.3323 2.56639 18.307C2.51579 17.9402 2.45888 17.5766 2.45255 17.2034C2.44939 16.8556 2.45571 16.5109 2.51896 16.1662C2.59801 15.7298 2.73399 15.3187 2.94586 14.9297C2.97432 14.876 3.00911 14.8539 3.05655 14.8697C3.50875 14.9424 3.97992 14.9392 4.46691 14.8855C4.8527 14.8412 5.23534 14.7463 5.59584 14.5787C5.62746 14.6736 5.64327 14.7558 5.65275 14.8475C5.6654 14.9803 5.70019 15.1195 5.79189 15.2175C5.88992 15.3092 6.02906 15.3472 6.16187 15.3598C6.25358 15.3661 6.3358 15.3819 6.43067 15.4167C6.2599 15.7741 6.1682 16.1567 6.12393 16.5457C6.07017 17.0326 6.06701 17.5038 6.13974 17.956C6.15556 18.0035 6.13342 18.0382 6.07966 18.0667L6.0765 18.0541Z"
        fill="white"
      />
      <path
        d="M6.87342 16.8144C6.9082 16.3907 7.02205 15.9764 7.20229 15.5875C7.24973 15.4894 7.30981 15.4578 7.411 15.4641C7.77783 15.4831 8.14781 15.4736 8.51147 15.4262C9.02692 15.3598 9.53604 15.2459 10.023 15.0562C10.3045 14.9455 10.5669 14.7969 10.8673 14.6514C10.8357 15.2206 10.9338 15.7551 11.114 16.2768C11.1709 16.4413 11.2342 16.5994 11.3195 16.748C11.3607 16.8207 11.3512 16.8777 11.3006 16.9377C10.7282 17.6556 10.0483 18.2469 9.20401 18.6232C8.61267 18.8857 7.99602 19.0343 7.34143 18.9932C7.24973 18.9869 7.21494 18.9584 7.18016 18.8667C6.92401 18.2058 6.81333 17.5196 6.87342 16.8144Z"
        fill="white"
      />
      <path
        d="M12.4044 17.02C12.1419 16.6753 11.9395 16.2958 11.813 15.8753C11.696 15.4863 11.6296 15.0879 11.6265 14.6325C11.6549 13.8419 11.8826 13.064 12.3064 12.3335C12.5372 11.9383 12.7997 11.5683 13.0526 11.1888C13.2392 10.9105 13.4764 10.822 13.7768 10.8283C14.0298 10.8283 14.2764 10.8125 14.5231 10.7556C14.6085 10.7366 14.6812 10.7524 14.7192 10.8568C14.9405 11.4418 15.2472 11.9794 15.5793 12.5075C15.8734 12.9755 16.1959 13.4245 16.5533 13.8451C16.5975 13.8957 16.5817 13.9305 16.5628 13.9684C16.3414 14.3985 16.0821 14.8001 15.7659 15.1669C15.3421 15.6571 14.852 16.0713 14.3017 16.4097C13.78 16.7322 13.2234 16.9789 12.6416 17.1623C12.4961 17.2066 12.455 17.0896 12.4012 17.02H12.4044Z"
        fill="white"
      />
      <path
        d="M17.5871 13.6364C18.0457 12.9407 18.4315 12.2134 18.6844 11.4165C18.9248 10.6923 19.1113 9.43374 18.9311 8.289C18.7603 7.39724 18.4093 6.57506 17.9065 5.81612C17.5555 5.2817 17.1476 4.80103 16.7017 4.35515L16.629 4.28558C16.1863 3.84603 15.7088 3.44126 15.1838 3.09658C14.4217 2.59378 13.5995 2.24277 12.7078 2.07201C11.563 1.89176 10.3045 2.07833 9.58031 2.31866C8.78342 2.5748 8.0561 2.95744 7.36041 3.41596C7.26238 3.48237 7.26554 3.52348 7.35092 3.59938C8.20473 4.31721 9.10914 4.95282 10.1274 5.42083C10.314 5.50938 10.51 5.58211 10.6997 5.66433C10.9875 5.78766 11.1867 5.86988 11.0761 6.3031C10.9527 6.77744 10.9116 7.25811 10.9401 7.74193C10.978 8.35857 11.0634 8.96889 11.2531 9.56339C11.2658 9.60766 11.2848 9.63612 11.3069 9.66142C11.3069 9.66142 11.3164 9.67407 11.3227 9.68039C11.329 9.68672 11.3417 9.6962 11.3417 9.6962C11.367 9.71834 11.3986 9.73731 11.4397 9.75313C12.0342 9.94286 12.6445 10.0282 13.2612 10.0662C13.745 10.0946 14.2257 10.0535 14.7 9.93337C15.1301 9.82269 15.2155 10.0188 15.3388 10.3097C15.4178 10.4994 15.4906 10.6923 15.5791 10.8789C16.0471 11.8971 16.6827 12.8015 17.4006 13.6553C17.4765 13.7407 17.5207 13.7439 17.584 13.6459L17.5871 13.6364Z"
        fill="white"
      />
      <path
        d="M10.6744 13.823C10.0925 14.2341 9.44426 14.4744 8.7454 14.5946C8.31533 14.6705 7.88211 14.7147 7.44255 14.7021C7.1453 14.6894 6.84805 14.6547 6.55079 14.6294C6.50336 14.623 6.46857 14.6104 6.44011 14.5946L6.42114 14.5819L6.40849 14.5629C6.38951 14.5345 6.37687 14.4965 6.37371 14.4523C6.34841 14.155 6.31362 13.8578 6.30097 13.5605C6.28832 13.121 6.33259 12.6909 6.40849 12.2577C6.52865 11.562 6.76899 10.9105 7.18008 10.3287C7.31922 10.1295 7.48682 9.99033 7.74929 9.94606C8.08765 9.88597 8.40388 9.73418 8.70745 9.57923C9.24188 9.30412 9.76365 9.00054 10.238 8.61475C10.3297 9.11754 10.4246 9.60453 10.5858 10.0757C10.6143 10.1548 10.6554 10.2212 10.7123 10.2749L10.7281 10.2907C10.7819 10.3445 10.8483 10.3888 10.9305 10.4172C11.4017 10.5785 11.8887 10.6734 12.3915 10.7651C12.0057 11.2394 11.7021 11.7612 11.427 12.2988C11.272 12.6024 11.1203 12.9186 11.0602 13.2569C11.0127 13.5194 10.8768 13.6838 10.6775 13.8261L10.6744 13.823Z"
        fill="white"
      />
      <path
        d="M4.18557 14.1266C4.60931 14.0918 5.02357 13.978 5.41253 13.7977C5.51056 13.7503 5.54218 13.6902 5.53586 13.589C5.51689 13.2222 5.52637 12.8522 5.5738 12.4885C5.64021 11.9731 5.75405 11.464 5.94378 10.977C6.05446 10.6955 6.20309 10.4331 6.34855 10.1327C5.77935 10.1643 5.24493 10.0662 4.72316 9.886C4.55872 9.82908 4.40061 9.76583 4.25198 9.68045C4.17925 9.63934 4.12233 9.64883 4.06225 9.69942C3.34441 10.2718 2.75307 10.9517 2.37676 11.796C2.11429 12.3873 1.96567 13.004 2.00678 13.6586C2.0131 13.7503 2.04156 13.7851 2.13327 13.8198C2.79418 14.076 3.48039 14.1867 4.18557 14.1266Z"
        fill="white"
      />
      <path
        d="M3.98016 8.59573C4.32485 8.8582 4.70432 9.06058 5.1249 9.18707C5.51386 9.30408 5.91231 9.37049 6.36767 9.37365C7.15824 9.34519 7.93615 9.11751 8.66663 8.69376C9.06191 8.46292 9.43189 8.20045 9.81136 7.94747C10.0896 7.7609 10.1782 7.52373 10.1719 7.22331C10.1719 6.97033 10.1877 6.72368 10.2446 6.47702C10.2636 6.39164 10.2478 6.31891 10.1434 6.28096C9.55838 6.0596 9.02081 5.75287 8.49271 5.42083C8.02469 5.12674 7.57565 4.80419 7.15507 4.44685C7.10448 4.40258 7.06969 4.41839 7.03174 4.43737C6.60167 4.65872 6.20007 4.91803 5.83325 5.23426C5.3431 5.658 4.92884 6.14815 4.59048 6.69838C4.26793 7.22015 4.02128 7.77671 3.83787 8.35856C3.7936 8.50403 3.91059 8.54514 3.98016 8.5989V8.59573Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_861_48011"
        x="21.0034"
        y="5.02094"
        width="67.1343"
        height="11.1562"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_861_48011"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_861_48011"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_861_48011"
        x="0"
        y="0"
        width="21.0032"
        height="21"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_861_48011"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_861_48011"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Logo;
