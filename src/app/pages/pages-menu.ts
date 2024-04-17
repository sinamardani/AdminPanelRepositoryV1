import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'صفحه‌اصلی',
    icon: 'home',
    // icon: {
    //   icon: 'house',
    //   pack: 'font-awesome',
    // },
    link: '/pages',
    home: true,
  },
  {
    title: 'صفحه‌مدیریت',
    icon: 'award',
    link: '/pages/managerpage',
  },
  {
    title: 'ویژگی‌ها',
    group: true,
  },
  {
    title: 'نظرسنجی',
    icon: {
      icon: 'rectangle-list',
      pack: 'font-awesome',
    },
    children: [
      {
        title: 'طراحی',
        link: '/pages',
      },
      {
        title: 'قالب نمایش',
        link: '/pages/survey/viewsurvey',
      },
    ],
  },
];
