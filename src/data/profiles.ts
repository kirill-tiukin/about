import { Profile } from '../types';
import workProfile from '../assets/images/work-profile.jpg?url';
import workBanner from '../assets/images/work-banner.jpg?url';
import lifeProfile from '../assets/images/life-profile.jpg?url';
import lifeBanner from '../assets/images/life-banner.jpg?url';
import workCV from '../assets/files/CV.pdf?url';

export const profiles: Profile[] = [
  {
    name: 'Kirill Tiukin',
    photo: workProfile,
    banner: workBanner,
    description: 'Accounting & Finance | Uni of Bath',
    links: [
      { label: 'CV', url: workCV, icon: 'File' },
      { label: 'GitHub', url: 'https://github.com/kirill-tiukin', icon: 'Github' },
      { label: 'Email', url: 'mailto:tiukinwork@gmail.com', icon: 'Mail' },
      { label: 'Book a Meeting', url: 'https://calendly.com/tiukinwork', icon: 'Calendar' },
    ],
  },
  {
    name: 'Kirill Tiukin',
    photo: lifeProfile,
    banner: lifeBanner,
    description: 'Dreamer turning ideas into reality',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/kirberryy/', icon: 'Instagram' },
      { label: 'WhatsApp', url: 'https://wa.me/79002024612', icon: 'MessageCircle' },
      { label: 'Telegram', url: 'https://t.me/kirberryy', icon: 'Send' },
      { label: 'Email', url: 'mailto:tyukin2006k@mail.ru', icon: 'Mail' },
    ],
  },
];
