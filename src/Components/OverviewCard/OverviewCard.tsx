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
  audience: string;
  today: number;
  isUp: boolean;
}

export interface OverviewToday {
  id: string;
  network: networks;
  statsType: string;
  stats: string;
  porcentage: number;
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

export const OverviewCard = (props: Overview) => {
  return (
    <article className="bg-light-grayish-blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center hover:brightness-95 cursor-pointer dark:bg-dark-desaturated-blue hover:dark:brightness-125">
      <div className={`${networkColort[`${props.network}`]} h-1 mb-8`} />
      <div className="flex items-center place-content-center gap-2 mx-auto">
        <img
          src={networkLogos[`${props.network}`]}
          alt={`logo ${props.network}`}
        />
        <p className="text-xs text-dark-grayish-blue font-bold">{props.user}</p>
      </div>

      <p className="text-[56px] font-bold text-very-dark-blue dark:text-white">
        {props.audience}
      </p>
      <p className="uppercase tracking-[5px] text-dark-grayish-blue text-xs mb-6">
        {props.audienceType}
      </p>
      <div className="flex items-center place-content-center gap-1">
        <img src={props.isUp ? UpIcon : DownIcon} alt="icon arrow" />
        <p
          className={`text-xs font-bold ${
            props.isUp ? "text-primary-lime-green" : "text-primary-bright-red"
          }`}
        >
          {props.today} Today
        </p>
      </div>
    </article>
  );
};

export const OverviewTodayCard = (props: OverviewToday) => {
  return (
    <>
      <article className="bg-light-grayish-blue w-[326px] h-[125px] mb-4 mx-auto rounded-[5px] p-[27px] cursor-pointer dark:bg-dark-desaturated-blue hover:brightness-95 hover:dark:brightness-125">
        <div className="flex items-center justify-between mb-[21px]">
          <p className="text-dark-grayish-blue font-medium dark:text-desaturated-blue">
            {props.statsType}
          </p>
          <img
            src={networkLogos[`${props.network}`]}
            alt={`logo ${props.network}`}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold text-very-dark-blue dark:text-white">
            {props.stats}
          </p>
          <div className="flex items-center place-content-center gap-1">
            <img src={props.isUp ? UpIcon : DownIcon} alt="icon arrow" />
            <p
              className={`text-xs font-bold ${
                props.isUp
                  ? "text-primary-lime-green"
                  : "text-primary-bright-red"
              }`}
            >
              {props.stats} Today
            </p>
          </div>
        </div>
      </article>
    </>
  );
};
