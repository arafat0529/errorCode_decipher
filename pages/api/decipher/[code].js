export default async function handler(req, res) {
  const errorCode = req.query.code.toUpperCase();
  console.log(errorCode);

  if (errorCode.length < 8) {
    res.status(400).json({ message: 'Bad request, error code length is 8' });
  }
  const binaryCode = convertBinary(errorCode);
  const response = pareErrorMessage(binaryCode);
  res.status(200).json(response);
}

function convertBinary(code) {
  const hexCode = code.split('');
  let binary = '';
  for (let i = 0; i < hexCode.length; i++) {
    for (let j = 0; j < hexToBi.length; j++) {
      if (hexCode[i] == hexToBi[j].hex) {
        binary += hexToBi[j].bi;
      }
    }
  }
  return binary;
}

function pareErrorMessage(binaryCode) {
  let response = [];
  for (let i = 0; i < binaryCode.length; i++) {
    if (binaryCode.charAt(i) !== '0') {
      response.push(errorCode[31 - i]);
    }
  }

  return response;
}

const hexToBi = [
  { hex: '0', bi: '0000' },
  { hex: '1', bi: '0001' },
  { hex: '2', bi: '0010' },
  { hex: '3', bi: '0011' },
  { hex: '4', bi: '0100' },
  { hex: '5', bi: '0101' },
  { hex: '6', bi: '0110' },
  { hex: '7', bi: '0111' },
  { hex: '8', bi: '1000' },
  { hex: '9', bi: '1001' },
  { hex: 'A', bi: '1010' },
  { hex: 'B', bi: '1011' },
  { hex: 'C', bi: '1100' },
  { hex: 'D', bi: '1101' },
  { hex: 'E', bi: '1110' },
  { hex: 'F', bi: '1111' },
];

const errorCode = [
  { index: '0', message: 'Communication Error' },
  { index: '1', message: 'Over Temperature Alarm' },
  { index: '2', message: 'Over Temperature  Warning' },
  { index: '3', message: 'Under Temperature Alarm' },
  { index: '4', message: 'Under Temperature Warning' },
  { index: '5', message: 'Over Charge Current Alarm' },
  { index: '6', message: 'Over Charge Current Warning' },
  { index: '7', message: 'Over Discharge Current Alarm' },
  { index: '8', message: 'Over Discharge Current Warning' },
  { index: '9', message: 'Over Voltage Alarm' },
  { index: '10', message: 'Over Voltage Warning' },
  { index: '11', message: 'Under Voltage Alarm' },
  { index: '12', message: 'Under Voltage Warning' },
  { index: '13', message: 'Under State of Charge Min Alarm' },
  { index: '14', message: 'Under State of Charge Min Warning' },
  { index: '15', message: 'Over State of Charge Max Alarm' },
  { index: '16', message: 'Over State of Charge Max Warning' },
  { index: '17', message: 'Voltage Imbalance Warning' },
  { index: '18', message: 'Temperature Imbalance Alarm' },
  { index: '19', message: 'Temperature Imbalance Warning' },
  { index: '20', message: 'Contactor Error' },
  { index: '21', message: 'Fan Error' },
  { index: '22', message: 'Ground Fault Error' },
  { index: '23', message: 'Open Door Error' },
  { index: '24', message: 'Reserved' },
  { index: '25', message: 'Other String Alarm' },
  { index: '26', message: 'Other String Warning' },
];
