import Card, { statusType } from "@/Components/Cards/Card";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-6">
      <Card
        src="https://picsum.photos/200"
        content={"kherbache meriem"}
        status={statusType.Online}
      />
      <Card
        src="/vercel.svg"
        content={"kherbache meriem"}
        status={statusType.Offline}
      />
      <Card
        src="/vercel.svg"
        content={"kherbache meriem"}
        status={statusType.Busy}
      />
    </div>
  );
};

export default page;
