import { OverviewCard } from "./../.";

export type networks = "facebook" | "instagram" | "twitter" | "youtube";

export interface Root {
  overview: Overview[];
  "overview-today": OverviewToday[];
}

export interface Overview {
  id: string;
  network: networks;
  user: string;
  audienceType: string;
  audience: number;
  today: number;
  isUp: boolean;
}

export interface OverviewToday {
  id: string;
  network: string;
  statsType: string;
  stats: number;
  porcentage: number;
  isUp: boolean;
}

const data: Root = {
  overview: [
    {
      id: "o-001",
      network: "facebook",
      user: "@nathanf",
      audienceType: "followers",
      audience: 1987,
      today: 12,
      isUp: true,
    },
    {
      id: "o-002",
      network: "twitter",
      user: "@nathanf",
      audienceType: "followers",
      audience: 1044,
      today: 99,
      isUp: true,
    },
    {
      id: "o-003",
      network: "instagram",
      user: "@realnathanf",
      audienceType: "followers",
      audience: 11000,
      today: 1099,
      isUp: true,
    },
    {
      id: "o-004",
      network: "youtube",
      user: "Nathan F.",
      audienceType: "subscribers",
      audience: 8239,
      today: 144,
      isUp: false,
    },
  ],
  "overview-today": [
    {
      id: "ot-001",
      network: "facebook",
      statsType: "Page Views",
      stats: 87,
      porcentage: 3,
      isUp: true,
    },
    {
      id: "ot-002",
      network: "facebook",
      statsType: "Likes",
      stats: 52,
      porcentage: 2,
      isUp: false,
    },
    {
      id: "ot-003",
      network: "instagram",
      statsType: "Likes",
      stats: 5462,
      porcentage: 2257,
      isUp: true,
    },
    {
      id: "ot-004",
      network: "instagram",
      statsType: "Profile Views",
      stats: 52000,
      porcentage: 1357,
      isUp: true,
    },
    {
      id: "ot-005",
      network: "twitter",
      statsType: "Retweets",
      stats: 117,
      porcentage: 303,
      isUp: true,
    },
    {
      id: "ot-006",
      network: "twitter",
      statsType: "Likes",
      stats: 507,
      porcentage: 553,
      isUp: true,
    },
    {
      id: "ot-007",
      network: "youtube",
      statsType: "Likes",
      stats: 107,
      porcentage: 19,
      isUp: false,
    },
    {
      id: "ot-008",
      network: "youtube",
      statsType: "Total Views",
      stats: 1407,
      porcentage: 12,
      isUp: false,
    },
  ],
};

export const OverviewContainer = () => {
  const convertNumberToK = (n: number) => {
    if (n > 10000) return n / 1000 + "k";
    return n.toString();
  };

  return (
    <section className="absolute top-[191px] left-0 right-0">
      {data.overview.map((item) => {
        return (
          <OverviewCard
            key={item.id}
            user={item.user}
            audienceType={item.audienceType}
            audience={convertNumberToK(item.audience)}
            isUp={item.isUp}
            network={item.network}
            today={item.today}
            id={""}
          />
        );
      })}
    </section>
  );
};
