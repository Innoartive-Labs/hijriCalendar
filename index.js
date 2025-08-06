const MS_PER_DAY = 1000 * 60 * 60 * 24;
const hijriEpoch = {
  year: 1,
  month: 3,
  day: 1
};

const gregorianEpoch = new Date(622, 8, 16);

const daysInHijriMonth = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29];

function hijriToDays(hYear, hMonth, hDay) {
  let days = 0;

  const yearsPassed = hYear - hijriEpoch.year;
  const leapDays = Math.floor((11 * yearsPassed) / 30);
  days += yearsPassed * 354 + leapDays;

  for (let i = 0; i < hMonth - 1; i++) {
    days += daysInHijriMonth[i];
  }

  days += hDay - 1;

  const daysBeforeEpoch = 30 + 29; 
  days -= daysBeforeEpoch;

  return days;
}

function hijriToGregorian(hYear, hMonth, hDay) {
    if (hYear < 1 || hMonth < 1 || hMonth > 12) {
        return "Invalid Hijri date";
    }

    // Set max days based on month parity
    const maxDaysInMonth = hMonth % 2 === 0 ? 29 : 30;

    if (hDay < 1 || hDay > maxDaysInMonth) {
        return "Invalid Hijri day for this month";
    }

    const totalDays = hijriToDays(hYear, hMonth, hDay);
    const resultDate = new Date(gregorianEpoch.getTime() + (totalDays - 1) * MS_PER_DAY);
    return resultDate;
}

module.exports = {
    hijriToGregorian
}
