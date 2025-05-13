import React from "react";

interface Publication {
  year: number;
  info: string;
}

const publications: Publication[] = [
  {
    year: 2024,
    info: `Viren J Patel, Viral H Borisagar, Kaushik Rana, and Yagnik A Rathod, “Towards Semantic Modeling for Assisted Driving: BFO-Compliant Ontology to Represent Ride Quality Knowledge”, In Journal of Electrical Systems, Volume 20, Issue-3, Online ISSN: :1112-5209, 2024.`,
  },
  {
    year: 2024,
    info: `Suman R.Tiwari, Kaushik Rana, and Dr. Viral H. Borisagar, “A Modified Binary Gray Wolf Optimization for Feature Selection Using Elite Wolf in Unstructured Data Stream”, In International Journal of Intelligent Systems and Applications in Engineering, Volume 12, Issue-3, Online ISSN: :2147-6799, 2024.
`,
  },
  {
    year: 2024,
    info: `Dr. Viral H. Borisagar, Kaushik Rana, Dr. Sheshang Degadwala and Dhairya Vyas, “Advanced Classification of Lumbar Spine Degenerative Disorders Using Spine-CNN Attenuation Model”, In International Journal of Intelligent Systems and Applications in Engineering, Volume 12, Issue-3, Online ISSN: :2147-6799, 2024.
`,
  },
  {
    year: 2023,
    info: `Raxit Jani, Ramesh Prajapati, Kaushik Rana, Dinesh Vaghela, and Dushynantsinh Rathod, “Rapid Data Transmission Through Tree Generation & Event Aggregation to Achieve Low Latency & Energy Saving in Wireless Sensor Networks”, In Journal of Data Acquisition and Processing , Volume 38, Issue-1, Online ISSN: 1004-9037, 2023.`,
  },
  {
    year: 2023,
    info: `Suman R. Tiwari, Kaushik Rana, “Challenges and Future Research Directions for Stream Clustering”, In International Conference on Trends in Electronics and Informatics (ICOEI), IEEE, India, Online ISBN: 979-8-3503-9729-1, 2023.
`,
  },
  {
    year: 2022,
    info: `Yash Modi, Kaushik Rana,Tirth Trivedi, Deesha Patel, and Mitesh Sagar, “E-attendence System Using Machine Learning”, In International Conference on Futuristic Trends for Sustainable Development and Sustainable Ecosystems, IGI Global, India, Online ISBN: 9781668442272, 2022.
`,
  },
  {
    year: 2020,
    info: `Suman R. Tiwari, Kaushik Rana, “Feature Selection in Big Data:Trends and Challenges”, In International Conference on Data Science and Intelligent Applications (ICDSIA-20), Springer Nature, India, Online ISBN: 978-981-15-4474-3, 2020.
`,
  },
  {
    year: 2019,
    info: `Kaushik Rana, Ketan Sarvakar, Anamika Mittal, “Forecasting Future Atmospheric Events using Machine Learning”, In International Journal of Innovative Technology and Exploring Engi- neering (IJITEE), Volume-8, Issue-9,Pages: 2782-2785, 2019.
`,
  },
  {
    year: 2019,
    info: `Kaushik Rana, Chetan Kapadiya, Harshal Shah, “Regresssion Testing of Service Oriented Software”, In International Journal of Innovative Technology and Exploring Engineering (IJITEE), Volume-8, Issue-10, Pages: 448-453, 2019.
`,
  },
  {
    year: 2018,
    info: `Kaushik Rana, Jalpa Ramavat, Durga Prasad Mohapatra, “Dynamic Slicing of Service-Oriented Software”, In International Journal of Engineering Research in Computer Science and Engineering, Volume-5, Issue-3, Pages: 78-89, 2018.
`,
  },
  {
    year: 2017,
    info: `Kaushik Rana,“Slicing of SOA based software and its application to testing”, A Ph.D Thesis, Gujarat Technological University, 2017.
”`,
  },
  {
    year: 2014,
    info: `Harkishan Rathod, Kaushik Rana, “Testing Web Services by Applying Program Slicing”, In International Journal of Advance Research in Computer Science and Management Studies, ISSN (PRINT):2321-7782(online), Volume 2, Issue 1, January 2014.
`,
  },
  {
    year: 2014,
    info: `Kaushik Rana, Harshal Shah, and Durga Prasad Mohapatra, “A Novel Technique For Static Slicing of SoaML Service Interface Diagram”, In 2014 Annual IEEE India Conference (INDICON), Pune, India, 2014.
`,
  },
  {
    year: 2013,
    info: `Kaushik Rana, “Black-box Testing of Web Service”, In International Journal of Computer Science & Informatics (IJCSI), Volume 3, No. 2, 2013.
`,
  },
  {
    year: 2009,
    info: `Kaushik Rana, Kiran Amin, “Dynamic Slicing of Remote Procedure Call (RPC) Program for Debugging Purpose”, In Recent Trends in Software Testing Workshop (RTST09), NIT Rourkela, India, 2009.
`,
  },
  {
    year: 2009,
    info: `Kirit Modi, Harshad Modi, and Kaushik Rana, “Web Service Discovery: Concepts, Approaches, Challenges”, In National Conference on Distributed Computing (NCDC09), Osmanabad, India, 2009.
`,
  },
];

const groupByYear = (items: Publication[]) => {
  const map = new Map<number, Publication[]>();
  items.forEach((item) => {
    if (!map.has(item.year)) {
      map.set(item.year, []);
    }
    map.get(item.year)!.push(item);
  });
  return new Map([...map.entries()].sort((a, b) => b[0] - a[0]));
};

const PublicationTable = () => {
  const grouped = groupByYear(publications);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse">
        <tbody>
          {[...grouped.entries()].map(([year, items], yearIdx) => (
            <React.Fragment key={year}>
              {items.map((item, idx) => (
                <tr
                  key={`${year}-${idx}`}
                  className={idx === 0 && yearIdx !== 0 ? "pt-6" : ""}
                >
                  {idx === 0 && (
                    <td
                      rowSpan={items.length}
                      className="pr-4 font-medium border-r border-[#273F4F] whitespace-nowrap align-middle text-2xl"
                    >
                      {year}
                    </td>
                  )}
                  <td className="pl-4 pb-2">{item.info}</td>
                </tr>
              ))}
              {/* Gap between years */}
              <tr>
                <td colSpan={2} className="h-6"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublicationTable;
