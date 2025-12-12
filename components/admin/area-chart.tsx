"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const chartConfig = {
  Desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  Mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function AdminAreaChart() {
  const data = useMemo(
    () => [
      { name: "5. 12.", Desktop: randomInt(0, 50), Mobile: randomInt(0, 50) },
      { name: "6. 12.", Desktop: randomInt(0, 50), Mobile: randomInt(0, 50) },
      { name: "7. 12.", Desktop: randomInt(0, 50), Mobile: randomInt(0, 50) },
      { name: "8. 12.", Desktop: randomInt(0, 50), Mobile: randomInt(0, 50) },
      { name: "9. 12.", Desktop: randomInt(0, 50), Mobile: randomInt(0, 50) },
      { name: "10. 12.", Desktop: randomInt(0, 50), Mobile: randomInt(0, 50) },
      { name: "11. 12.", Desktop: randomInt(0, 50), Mobile: randomInt(0, 50) },
      { name: "12. 12.", Desktop: randomInt(0, 50), Mobile: randomInt(0, 50) },
    ],
    []
  );
  return (
    <div>
      <ChartContainer config={chartConfig} className="w-full h-80 pl-2">
        <AreaChart data={data}>
          <XAxis
            dataKey="name"
            interval={0}
            angle={0}
            textAnchor="middle"
            height={40}
            padding={{ left: 12, right: 12 }}
          />
          <YAxis domain={[0, 50]} ticks={[0, 10, 20, 30, 40, 50]} tickMargin={6} width={25}></YAxis>
          <Tooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Area
            type="monotone"
            dataKey="Desktop"
            stroke="var(--color-Desktop)"
            fill="var(--color-Desktop)"
          />
          <Area
            type="monotone"
            dataKey="Mobile"
            stroke="var(--color-Mobile)"
            fill="var(--color-Mobile)"
          />
        </AreaChart>
      </ChartContainer>
      <div>
        <p>Gitlab commits with messages or blog posts</p>
      </div>
    </div>
  );
}
