import { useStore } from "@nanostores/react";
import { $intervalStore } from "~/stores/nanostore";

interface Props {
  monthlyPrice: string;
  yearlyPrice: string;
  customPricing?: boolean;
}

function PlanPrice({
  monthlyPrice,
  yearlyPrice,
  customPricing = false,
}: Props) {
  const interval = useStore($intervalStore);

  if (customPricing)
    return (
      <div>
        <p className="text-3xl">Custom Pricing</p>
      </div>
    );

  return (
    <div>
      <p className="text-3xl">
        ${interval === "monthly" ? monthlyPrice : yearlyPrice}
      </p>
      <p className="text-sm text-secondary">
        {interval === "monthly" ? "per month" : "per year"}
      </p>
    </div>
  );
}

export default PlanPrice;
