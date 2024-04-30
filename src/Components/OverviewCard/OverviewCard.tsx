import {
  FacebookLog,
  InstagramLog,
  TwitterLogOld,
  YoutubeLogo,
  DownIcon,
  UpIcon,
} from "./../../assets";

export type networks = "facebook" | "instagram" | "twitter" | "youtube";
export interface Overview {
  id: string;
  network: networks;
  user: string;
  audienceType: string;
  audience: number;
  today: number;
  isUp: boolean;
}

const networkLogos = {
  facebook: FacebookLog,
  instagram: InstagramLog,
  twitter: TwitterLogOld,
  youtube: YoutubeLogo,
};

const networkColort = {
  facebook: "bg-facebook",
  instagram: "bg-instagram-gradient",
  twitter: "bg-twitter-old",
  youtube: "bg-youtube",
};

export const OverviewCard = (item: Overview) => {
  return (
    <article className="bg-light-grayish-blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center">
      <div className={`${networkColort[`${item.network}`]} h-1 mb-8`} />
      <div className="flex items-center place-content-center gap-2 mx-auto">
        <img
          src={networkLogos[`${item.network}`]}
          alt={`logo ${item.network}`}
        />
        <p className="text-x text-dark-grayish-blue font-bold">{item.user}</p>
      </div>

      <p className="text-[56px] font-bold text-very-dark-blue">
        {item.audience}
      </p>
      <p className="uppercase tracking-[5px] text-dark-grayish-blue text-xs mb-6">
        {item.audienceType}
      </p>
      <div className="flex items-center place-content-center gap-1">
        <img src={item.isUp ? UpIcon : DownIcon} alt="icon arrow" />
        <p
          className={`text-xs font-bold ${
            item.isUp ? "text-primary-lime-green" : "text-primary-bright-red"
          }`}
        >
          {item.today} Today
        </p>
      </div>
    </article>
  );
};
