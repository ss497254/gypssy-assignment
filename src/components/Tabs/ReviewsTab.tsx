import { ReviewCard } from "components/ReviewCard";
import React from "react";

export const ReviewsTab = () => {
    return (
        <div className="grid grid-cols-2 gap-8">
            <ReviewCard name="Cody Fisher" avartarUrl="/user-1.jpg" />
            <ReviewCard name="Cody Fisher" avartarUrl="/user-1.jpg" />
            <ReviewCard name="Wade Warren" avartarUrl="/user-2.jpg" />
            <ReviewCard name="Wade Warren" avartarUrl="/user-2.jpg" />
        </div>
    );
};
