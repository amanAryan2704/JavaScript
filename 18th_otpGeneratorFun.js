const generateOtp = () => {
  const otp = Math.ceil(Math.random() * 1000 + 1000);
  console.log(otp);
};
// generateOtp();

// Proper Way

const generateOtp2 = () => {
  const minValue = 1000;
  const maxValue = 9999;

  const otp = Math.ceil(Math.random() * (maxValue - minValue)+minValue);
  console.log(otp);
};
generateOtp2();
