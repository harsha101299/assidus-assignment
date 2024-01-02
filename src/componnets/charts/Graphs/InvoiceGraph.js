import React, { useContext, useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import GraphContext from "../../context/Graph-context";
const InvoiceGraph = () => {

  const {InvoiceGraphValues} = useContext(GraphContext)
  // const InvoiceGraphValues = [
  //   { name: "older", value: 35 },
  //   { name: "Jan 01-08", value: 70 },
  //   { name: "Jan 09-16", value: 140 },
  //   { name: "Jan 17-24", value: 80 },
  //   { name: "Jan 25-31", value: 100 },
  //   { name: "Future", value: 75 },
  // ]
  // const [InvoiceGraphValues, setBarValues] = useState([
  //   { name: "older", value: 35 },
  //   { name: "Jan 01-08", value: 70 },
  //   { name: "Jan 09-16", value: 140 },
  //   { name: "Jan 17-24", value: 80 },
  //   { name: "Jan 25-31", value: 100 },
  //   { name: "Future", value: 75 },
  // ]);
  const svgRef = useRef();
  // console.log(InvoiceGraphValues)
  useEffect(() => {

    d3.select("#InvoiceSvgGraph").selectAll(".InvoiceGraph").remove();
    d3.select("#InvoiceSvgGraph").selectAll(".InvoiceXaxis").remove();

    const w = 500;
    const h = 170;

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .attr("overflow", "visible");

    const xScale = d3
      .scaleBand()
      .domain(InvoiceGraphValues.map((item) => item.name))
      .range([-50, w+50])
      .padding(0.8);

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(InvoiceGraphValues.length);
    // const yAxis = d3.axisLeft(yScale).ticks(5);

    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0,${h})`)
      .attr("class", "InvoiceXaxis");

    // svg.append("g").call(yAxis);

    svg
      .selectAll(".bar")
      .data(InvoiceGraphValues)
      .join("rect")
      .attr("x", (item, i) => xScale(item.name))
      .attr("y", (item) => yScale(item.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (item) => h - yScale(item.value))
      .attr("fill", "#47B747")
      .attr("rx", "7")
      .attr("ry", "7")
      .attr("class", "InvoiceGraph");
  }, [InvoiceGraphValues]);

  return <svg ref={svgRef} id="InvoiceSvgGraph" />;
};

export default InvoiceGraph;
