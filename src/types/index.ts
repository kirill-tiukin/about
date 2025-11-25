export interface SocialLinkType {
  label: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  photo: string;
  banner: string;
  description: string;
  links: SocialLinkType[];
}
