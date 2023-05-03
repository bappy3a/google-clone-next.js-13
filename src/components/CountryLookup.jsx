"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");
  return <div>{country}</div>;
}
