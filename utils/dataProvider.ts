

//dataprovider in utils

import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider1{

    
static getTestDataFromJson(filePath:string)
{
    let data:any =JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
}




    static getTestDataFromCsv(filePath: string) {
    let data: any = parse(fs.readFileSync(filePath), {
      columns: true,
      skip_empty_lines: true,
      trim: true // <--- Ensures headers and values have no extra spaces/newlines
    });
    return data;
  }


}

//This code creates a utility class DataProvider to read test data from CSV files.
// The getTestDataFromCsv method reads a CSV file and uses parse to convert it into structured data (array of objects), where each row becomes one object. 
// This helps reuse test data easily for data-driven testing.

