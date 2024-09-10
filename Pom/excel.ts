import * as XLSX from 'xlsx';

export async function readExcelData(filePath: string): Promise<any[]> {
  // Read the Excel file
  const workbook = XLSX.readFile(filePath);
  // Get the first worksheet
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  // Convert the sheet data to JSON
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  return data;
}
