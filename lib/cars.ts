import { getShowcaseCarImg } from './selectShowcaseCarImg';

export const cars = [
  {
    fullTitle: 'Audi A1 S-Line',
    model: 'A1',
    mark: 'Audi',
    year: 2012,
    doors: '4/5',
    ac: true,
    transmission: 'Manual',
    fuel: 'Gasoline',
    rent: 45,
    showcaseImg: getShowcaseCarImg('Audi A1 S-Line'),
    id: 1,
  },
  {
    fullTitle: 'VW Golf 6',
    model: 'Golf 6',
    mark: 'Volkswagen',
    year: 2008,
    doors: '4/5',
    ac: true,
    transmission: 'Manual',
    fuel: 'Diesel',
    rent: 37,
    showcaseImg: getShowcaseCarImg('VW Golf 6'),
    id: 2,
  },
  {
    fullTitle: 'Toyota Camry',
    model: 'Camry',
    mark: 'Toyota',
    year: 2006,
    doors: '4/5',
    ac: true,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    rent: 30,
    showcaseImg: getShowcaseCarImg('Toyota Camry'),
    id: 3,
  },
  {
    fullTitle: 'BMW 320 ModernLine',
    model: '320',
    mark: 'BMW',
    year: 2012,
    doors: '4/5',
    ac: true,
    transmission: 'Manual',
    fuel: 'Diesel',
    rent: 35,
    showcaseImg: getShowcaseCarImg('BMW 320 ModernLine'),
    id: 4,
  },
  {
    fullTitle: 'Mercedes-Benz GLK',
    model: 'Benz GLK',
    mark: 'Mercedes',
    year: 2006,
    doors: '4/5',
    ac: true,
    transmission: 'Manual',
    fuel: 'Diesel',
    rent: 50,
    showcaseImg: getShowcaseCarImg('Mercedes-Benz GLK'),
    id: 5,
  },
  {
    fullTitle: 'VW Passat CC',
    model: 'Passat CC',
    mark: 'Volkswagen',
    year: 2008,
    doors: '4/5',
    ac: true,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    rent: 25,
    showcaseImg: getShowcaseCarImg('VW Passat CC'),
    id: 6,
  },
];