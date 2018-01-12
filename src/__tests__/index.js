import mockdate from 'mockdate';
import moment from 'moment';
import formadate from '../index';

const now = new Date('2018-01-12T03:18:54.884Z');
mockdate.set(now);

describe('formadate', () => {
  it('should render the time', () => {
    const date = now;
    const res = formadate(date);
    expect(res).toMatchSnapshot();
  });

  it('should render the day of the week', () => {
    const date = moment(now).subtract(6, 'days');
    const res = formadate(date);
    expect(res).toMatchSnapshot();
  });

  it('should render the day and the month', () => {
    const date = moment(now).subtract(7, 'days');
    const res = formadate(date);
    expect(res).toMatchSnapshot();
  });

  it('should render the day and the month', () => {
    const date = moment(now).subtract(10, 'months');
    const res = formadate(date);
    expect(res).toMatchSnapshot();
  });

  it('should render the day and the month', () => {
    const date = moment(now)
      .subtract(11, 'months')
      .subtract(10, 'days');
    const res = formadate(date);
    expect(res).toMatchSnapshot();
  });

  it('should render the day, the month and the year', () => {
    const date = moment(now)
      .subtract(11, 'months')
      .subtract(11, 'days');
    const res = formadate(date);
    expect(res).toMatchSnapshot();
  });

  it('should render the day, the month and the year', () => {
    const date = moment(now).subtract(2, 'years');
    const res = formadate(date);
    expect(res).toMatchSnapshot();
  });
});
