import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import the EditPrompt component
const EditPrompt = dynamic(() => import("./EditPrompt"), {
  suspense: true,
});

const UpdatePromptPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPrompt />
    </Suspense>
  );
};

export default UpdatePromptPage;
