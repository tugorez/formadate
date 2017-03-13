import moment from 'moment';

const isToday = date => moment(date).isSame(Date.now(), 'day');
const isThisWeek = date => moment().diff(date, 'days') <= 6;
const isThisYear = date => moment(date).isSame(Date.now(), 'year');

const formadate = (date, locale = 'en') => {
  moment.locale(locale);
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

export default formadate;
