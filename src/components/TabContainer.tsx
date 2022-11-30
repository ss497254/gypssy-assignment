import React, { useState } from "react";
import { CompletedTab } from "./Tabs/CompletedTab";
import { GalleryTab } from "./Tabs/GalleryTab";
import { PendingTab } from "./Tabs/PendingTab";
import { ReviewsTab } from "./Tabs/ReviewsTab";
import { UpcomingTab } from "./Tabs/UpcomingTab";
import { TabSwitch } from "./TabSwitch";

const tabs = [
    { name: "Upcoming", component: <UpcomingTab /> },
    { name: "Completed", component: <CompletedTab /> },
    { name: "Pending", component: <PendingTab /> },
    { name: "Drafts", component: <PendingTab /> },
    { name: "Gallery", component: <GalleryTab /> },
    { name: "Reviews", component: <ReviewsTab /> },
];

export const TabContainer = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="max-w-6xl mx-auto my-6 pb-8">
            <TabSwitch active={active} setActive={setActive} tabs={tabs} />
            {tabs[active].component}
        </div>
    );
};
