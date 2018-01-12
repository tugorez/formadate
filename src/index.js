import moment from 'moment';

require('moment/locale/es');

const day = date => moment().diff(date, 'hours') < 24;
const week = date => moment().diff(date, 'days') < 7;
const year = date =>
  moment().diff(date, 'year') < 1 &&
  (moment().diff(date, 'months') <= 10 ||
    moment(date).month() !== moment().month());

const formadate = date => {
  if (day(date)) return moment(date).format('h:mm a');
  if (week(date)) return moment(date).format('dddd');
  if (year(date)) return moment(date).format('MMM D');
  return moment(date).format('Y MMM D');
};

formadate.locale = locale => moment.locale(locale);

module.exports = formadate;
