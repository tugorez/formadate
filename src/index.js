import moment from 'moment';

require('moment/locale/es');

const isToday = date => moment(date).isSame(Date.now(), 'day');
const isThisWeek = date => moment().diff(date, 'days') <= 6;
const isThisYear = date => moment(date).isSame(Date.now(), 'year');

const formadate = (date, locale = 'en', fromnow = false) => {
  moment.locale(locale);
  if (fromnow) {
    return moment(date).fromNow();
  }
  if (isToday(date)) {
    return moment(date).format('LT');
  }
  if (isThisWeek(date)) {
    return moment(date).format('dddd');
  }
  if (isThisYear(date)) {
    return moment(date).format('MMM D');
  }
  return moment(date).format('MMM D Y');
};

module.exports = formadate;
