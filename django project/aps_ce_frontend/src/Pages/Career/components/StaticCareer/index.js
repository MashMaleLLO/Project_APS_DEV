import React, { useState, useEffect } from "react";
import BarChart from "../../components/BarChart";
import axios from 'axios';

//สถิติบัณฑิต
const StaticCareer = () => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const jobData = data.length > 0 ? Object.values(data[0]) : [];

   useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8000/getCareerResult/");
      setData(response.data);
      setLabels(Object.keys(response.data));
    }
    fetchData();
  }, []);

  const handleYearFilter = (year) => {
    setSelectedYear(year);
  };

  const filteredData = jobData.filter((item, index) => {
    return selectedYear ? "Year" === selectedYear : true;
  });

  console.log("labels:", labels);
  console.log("jobData:", jobData);
  console.log("filteredLabels:", filteredData);

  //เอา MockData มา map
  const showGraph = {
    labels: labels,
    datasets: [
      {
        label: "สายงาน",
        data: filteredData.map((item) => "Num_of_student"),
        backgroundColor: ["#FFD670"],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center py-8">
      <div className="rounded-lg bg-white md:px-8">
        <div className="flex items-center justify-center pt-6">
          <div className="flex flex-row text-base md:text-lg w-[250px]">
            <span className="w-full flex items-center justify-center">
              ปีการศึกษา
            </span>
            <select
              id="select-option"
              value={selectedYear}
              onChange={(event) => handleYearFilter(event.target.value)}
              className="w-full px-4 py-2 bg-white border border-grey-300 rounded-lg focus:bg-grey-200 focus:border-[#FB8500] focus:outline-none"
            >
              <option value="">ทั้งหมด</option>
              <option value="2560">2560</option>
              <option value="2561">2561</option>
              <option value="2562">2562</option>
            </select>
          </div>
        </div>
        <BarChart chartData={showGraph} />

        <div className="flex items-center justify-between flex-wrap gap-4 px-4 py-8 lg:px-72 w-full lg:w-[1200px]">
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text:xs md:text-base">สายงาน</h1>
            {labels.map((item, index) => (
              <h1 key={index} className="capitalize text:xs md:text-base">
                {item}
              </h1>
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text:xs md:text-base">จำนวน</h1>
            {jobData.map((item, index) => (
              <h1 key={index} className="text:xs md:text-base">
                {item.Num_of_student}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticCareer;
