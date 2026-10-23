function formatMetric(metric) {
  if (metric.format === "currency") {
    return "₹" + metric.value.toLocaleString("en-IN");
  }

  if (metric.format === "percent") {
    return metric.value + "%";
  }

  if (metric.format === "date") {
    return new Date(metric.value).toLocaleDateString("en-IN");
  }

  return metric.value;
}

export { formatMetric };
