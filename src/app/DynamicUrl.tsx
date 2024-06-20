"use client";

import { useState } from "react";

const DynamicUrl = ({ baseUrl }: { baseUrl: string }) => {
  const [url, setUrl] = useState(baseUrl);

  return (
    <span id="dynamic-url" className="dynamic-url">{url}</span>
  );
};

export default DynamicUrl;
