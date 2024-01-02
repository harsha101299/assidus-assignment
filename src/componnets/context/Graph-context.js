import { createContext, useEffect, useState } from "react";

const GraphContext = createContext({
  month: "",
  type: "",
  AccountGraphValues: [],
  InvoiceGraphValues: [],
  CashflowGraphValues: [],
  WatchList: [],
  OpenForm: false,
  OpenFormHandler: (prev) => {},
  MonthHandler: () => {},
  TypeHandler: () => {},
});

export const GraphContextProvider = (props) => {
  const [month, setMonth] = useState("Jan");
  const [type, setType] = useState("manage");
  const [AccountGraphValues, setAccountGraphValues] = useState([
    60, 80, 130, 110, 50, 90, 60, 25, 55, 62,
  ]);
  const [InvoiceGraphValues, setInvoiceGraphValues] = useState([
    { name: "older", value: 35 },
    { name: "Jan 01-08", value: 70 },
    { name: "Jan 09-16", value: 140 },
    { name: "Jan 17-24", value: 80 },
    { name: "Jan 25-31", value: 100 },
    { name: "Future", value: 75 },
  ]);
  const TotalMOnthsGraphsValues = [
    { name: "January", valueOne: 128, valueTwo: 70 },
    { name: "February", valueOne: 55, valueTwo: 35 },
    { name: "March", valueOne: 65, valueTwo: 35 },
    { name: "April", valueOne: 100, valueTwo: 70 },
    { name: "May", valueOne: 135, valueTwo: 85 },
    { name: "June", valueOne: 90, valueTwo: 40 },
    { name: "July", valueOne: 130, valueTwo: 60 },
    { name: "August", valueOne: 35, valueTwo: 20 },
    { name: "September", valueOne: 80, valueTwo: 55 },
    { name: "October", valueOne: 140, valueTwo: 110 },
    { name: "Novomber", valueOne: 105, valueTwo: 65 },
    { name: "December", valueOne: 100, valueTwo: 50 },
  ];
  const [CashflowGraphValues, setCashflowGraphValues] = useState([
    { name: "August", valueOne: 35, valueTwo: 20 },
    { name: "September", valueOne: 80, valueTwo: 55 },
    { name: "October", valueOne: 140, valueTwo: 110 },
    { name: "Novomber", valueOne: 105, valueTwo: 65 },
    { name: "December", valueOne: 100, valueTwo: 50 },
    { name: "January", valueOne: 128, valueTwo: 70 },
  ]);
  const [WatchList, setWatchList] = useState([
    { acc: "Sales", mo: 1194.58, yd: 11418.29 },
    { acc: "Advertising", mo: 6879.02, yd: 9271.36 },
    { acc: "Inventory", mo: 4692.26, yd: 9768.09 },
    { acc: "Entertainment", mo: 0.0, yd: 0.0 },
    { acc: "Product", mo: 4652.1, yd: 2529.9 },
  ]);
  const [OpenForm, setOpenForm] = useState(false);

  const OpenFormHandler = (prevState) => {
    setOpenForm(!prevState);
  };

  const MonthHandler = (e) => {
    setMonth(e.target.value);
  };
  const TypeHandler = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    if (month == "Jan" && type == "manage") {
      setAccountGraphValues([60, 80, 130, 110, 50, 90, 60, 25, 55, 62]);
      setInvoiceGraphValues([
        { name: "older", value: 35 },
        { name: "Jan 01-08", value: 70 },
        { name: "Jan 09-16", value: 140 },
        { name: "Jan 17-24", value: 80 },
        { name: "Jan 25-31", value: 100 },
        { name: "Future", value: 75 },
      ]);
      setCashflowGraphValues([
        { name: "August", valueOne: 35, valueTwo: 20 },
        { name: "September", valueOne: 80, valueTwo: 55 },
        { name: "October", valueOne: 140, valueTwo: 110 },
        { name: "Novomber", valueOne: 105, valueTwo: 65 },
        { name: "December", valueOne: 100, valueTwo: 50 },
        { name: "January", valueOne: 128, valueTwo: 70 },
      ]);
      setWatchList([
        { acc: "Sales", mo: 1194.58, yd: 11418.29 },
        { acc: "Advertising", mo: 6879.02, yd: 9271.36 },
        { acc: "Inventory", mo: 4692.26, yd: 9768.09 },
        { acc: "Entertainment", mo: 0.0, yd: 0.0 },
        { acc: "Product", mo: 4652.1, yd: 2529.9 },
      ]);
    } else {
      setAccountGraphValues(
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() =>
          Math.floor(Math.random() * 150)
        )
      );
      setInvoiceGraphValues([
        {
          name: "older",
          value: AccountGraphValues.reduce((a, b) => a + b, 0) / 15,
        },
        {
          name: `${month} 01-08`,
          value: AccountGraphValues.reduce((a, b) => a + b, 0) / 12,
        },
        {
          name: `${month} 09-16`,
          value: AccountGraphValues.reduce((a, b) => a + b, 0) / 10,
        },
        {
          name: `${month} 17-24`,
          value:
            AccountGraphValues.reduce((a, b) => a + b, 0) / 6 > 159
              ? 159
              : AccountGraphValues.reduce((a, b) => a + b, 0) / 6,
        },
        {
          name: `${month} 25-31`,
          value: AccountGraphValues.reduce((a, b) => a + b, 0) / 16,
        },
        {
          name: "Future",
          value: AccountGraphValues.reduce((a, b) => a + b, 0) / 13,
        },
      ]);
      let MonthsGraphsValues = [];
      let reqIn = 0;
      TotalMOnthsGraphsValues.forEach((item, i) => {
        if (item.name.includes(month)) {
          reqIn = i;
        }
      });
      for (let i = reqIn, j = reqIn; i < reqIn + 6; i++, j--) {
        if (j == -1) {
          j = 11;
        }
        MonthsGraphsValues.push(TotalMOnthsGraphsValues[j]);
      }
      setCashflowGraphValues(MonthsGraphsValues.reverse());

      setWatchList([
        { acc: "Sales", mo: Math.floor(Math.random() * 3000) + 1000, yd: 11418.29 },
        { acc: "Advertising", mo: Math.floor(Math.random() * 2000) + 1000, yd: 9271.36 },
        { acc: "Inventory", mo: Math.floor(Math.random() * 1200) + 1000, yd: 9768.09 },
        { acc: "Entertainment", mo: 0.0, yd: 0.0 },
        { acc: "Product", mo: Math.floor(Math.random() * 100) + 1000, yd: 2529.9 },
      ]);

      // console.log(WatchList);
    }
  }, [month, type]);

  return (
    <GraphContext.Provider
      value={{
        month: month,
        type: type,
        OpenForm: OpenForm,
        OpenFormHandler: OpenFormHandler,
        AccountGraphValues: AccountGraphValues,
        CashflowGraphValues: CashflowGraphValues,
        InvoiceGraphValues: InvoiceGraphValues,
        TypeHandler: TypeHandler,
        MonthHandler: MonthHandler,
        WatchList: WatchList,
      }}
    >
      {props.children}
    </GraphContext.Provider>
  );
};

export default GraphContext;
