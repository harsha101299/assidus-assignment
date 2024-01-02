import React, { useContext, useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import GraphContext from "../../context/Graph-context";

const AccountGraph = () => {

  const {month,type,AccountGraphValues} = useContext(GraphContext)

  // console.log(type,month)
  // const [graphValues, setGraphValues] = useState([
  //   60, 80, 130, 110, 50, 90, 60, 25, 55, 62,
  // ]);
  const svgRef = useRef();

  

  useEffect(() => {
    d3.select("#svgScaleWrapper").selectAll(".linepa").remove();
    d3.select("#svgScaleWrapper").selectAll(".AccountXaxis").remove();

    const w = 500;
    const h = 170;

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible");

    const xScale = d3
      .scaleLinear()
      .domain([0, AccountGraphValues.length - 1])
      .range([0, w]);

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const generatedScalaraLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    const Xaxis = d3
      .axisBottom(xScale)
      .ticks(AccountGraphValues.length)
      .tickFormat((i) => i + 9);

    svg
      .append("g")
      .attr("class", "x axis")
      .call(Xaxis)
      .attr("transform", `translate(0,${h})`)
      .attr("class", "AccountXaxis");

    svg
      .selectAll(".line")
      .data([AccountGraphValues])
      .join("path")
      .attr("d", (d) => generatedScalaraLine(d))
      .attr("fill", "none")
      .attr("stroke", "#60B877")
      .attr("stroke-width", 2)
      .attr("class", "linepa");
  }, [AccountGraphValues]);
  return <svg ref={svgRef} id="svgScaleWrapper" />;
};

export default AccountGraph;
