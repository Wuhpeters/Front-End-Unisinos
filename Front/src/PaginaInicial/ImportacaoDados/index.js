import React, { useState } from "react";
import CSVReader from "react-csv-reader";


const ImportacaoDados = () => {
  const [CSVData, setCSVData] = useState([]);

  const handleCSVUpload = (data) => {
    setCSVData(data);
  };

  return (
    <>
      <CSVReader onFileLoaded={handleCSVUpload} />
      <table>
        <thead>
          <tr>
            {CSVData[0] && CSVData[0].map((header) => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {CSVData.slice(1).map((row) => (
            <tr key={row.join()}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ImportacaoDados;