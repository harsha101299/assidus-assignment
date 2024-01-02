import React, { useContext, useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import GraphContext from "../../context/Graph-context";

const CashFlowGraph = () => {

  const {CashflowGraphValues} = useContext(GraphContext)
  // const barValues = [
  //   { name: "August", valueOne: 35, valueTwo: 20 },
  //   { name: "September", valueOne: 80, valueTwo: 55 },
  //   { name: "October", valueOne: 140, valueTwo: 110 },
  //   { name: "Novomber", valueOne: 105, valueTwo: 65 },
  //   { name: "December", valueOne: 100, valueTwo: 50 },
  //   { name: "January", valueOne: 128, valueTwo: 70 },
  // ]
  // const [barValues, setBarValues] = useState([
  //   { name: "August", valueOne: 35, valueTwo: 20 },
  //   { name: "September", valueOne: 80, valueTwo: 55 },
  //   { name: "October", valueOne: 140, valueTwo: 110 },
  //   { name: "Novomber", valueOne: 105, valueTwo: 65 },
  //   { name: "December", valueOne: 100, valueTwo: 50 },
  //   { name: "January", valueOne: 128, valueTwo: 70 },
  // ]);
  const svgRef = useRef();

  useEffect(() => {

    d3.select("#CashFlowSvgGraph").selectAll(".CashflowGraph").remove();
    d3.select("#CashFlowSvgGraph").selectAll(".Cashflowaxis").remove();

    const w = 500;
    const h = 170;

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .attr("overflow", "visible");

    const xScale = d3
      .scaleBand()
      .domain(CashflowGraphValues.map((item) => item.name))
      .range([-50, w+50])
      .padding(0.8)

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(CashflowGraphValues.length);

    svg
      .append("g")
      .call(xAxis)
      .attr("class", "AccountXaxis")
      .attr("transform", `translate(0,${h})`)
      .attr('class','Cashflowaxis')

    svg
      .selectAll(".bar")
      .data(CashflowGraphValues)
      .join("rect")
      .attr("x", (item, i) => xScale(item.name))
      .attr("y", (item) => yScale(item.valueOne))
      .attr("width", xScale.bandwidth())
      .attr("height", (item) => h - yScale(item.valueOne))
      .attr("fill", "#02BB7D")
      .attr("rx", "7")
      .attr("ry", "7")
      .attr("class",'CashflowGraph')


      svg
      .selectAll(".bar")
      .data(CashflowGraphValues)
      .join("rect")
      .attr("x", (item, i) => xScale(item.name))
      .attr("y", (item) => yScale(item.valueTwo))
      .attr("width", xScale.bandwidth())
      .attr("height", (item) => h - yScale(item.valueTwo))
      .attr("fill", "#47B747")
      .attr("rx", "7")
      .attr("ry", "7")
      .attr("class",'CashflowGraph')
  });

  return <svg ref={svgRef} id="CashFlowSvgGraph" />;
};

export default CashFlowGraph;
