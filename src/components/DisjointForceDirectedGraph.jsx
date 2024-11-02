import React, {useEffect, useRef} from 'react';
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@d3/disjoint-force-directed-graph/2";


const DisjointForceDirectedGraph = () => {
    const chartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart") return new Inspector(chartRef.current);
    });
    return () => runtime.dispose();
  }, []);
  return (
    <>
      <div ref={chartRef} />
      <p>Credit: <a href="https://observablehq.com/@d3/disjoint-force-directed-graph/2">Disjoint force-directed graph by D3</a></p>
    </>
  )
}

export default DisjointForceDirectedGraph