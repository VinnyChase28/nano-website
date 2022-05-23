import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`p-100 text-gray-900 inline-flex items-center ${fontStyle}`}
    >
      <Image
        width={50}
        height={50}
        className="p-50 mr-4 rounded-full"
        src="https://i.imgur.com/bj9eyAY.png"
        alt="logo image"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
