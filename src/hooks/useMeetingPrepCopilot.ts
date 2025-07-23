import { useState } from "react";
import { logTelemetry } from "../utils/telemetry";
import { transformData } from "../utils/transformData";
import { fetchLivePrep } from "../utils/fetchLivePrep";

export const useMeetingPrepCopilot = ({ mock = false }) => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPrepData = async () => {
    setLoading(true);
    try {
      const data = mock
        ? await import("../mocks/prepData.json")
        : await fetchLivePrep();
      setSummary(transformData(data));
    } catch (error) {
      logTelemetry("prepPanel.error", { error });
    } finally {
      setLoading(false);
    }
  };

  return { summary, loading, fetchPrepData };
};
