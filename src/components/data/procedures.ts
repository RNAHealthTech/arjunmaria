export interface ProcedureData {
    image: string;
    title: string;
    description: string;
    preparation: string[];
    process: string[];
    aftercare: string[];
    risks: string[];
    recovery: string;
    slug: string;
}

const proceduresData: ProcedureData[] = [
    {
        image: "/images/procedures/endoscopy.webp",
        title: "Endoscopy",
        description: "A minimally invasive diagnostic procedure that uses a flexible tube with a light and camera to examine the upper digestive tract.",
       
        preparation: [
            "Fast for 6-8 hours before the procedure",
            "Stop taking certain medications as advised",
            "Arrange for someone to drive you home",
            "Remove any loose dental work",
            "Wear comfortable clothing"
        ],
        process: [
            "Administration of local anesthetic spray to throat",
            "Possible light sedation",
            "Insertion of endoscope through mouth",
            "Examination of esophagus, stomach, and upper small intestine",
            "Possible tissue sampling if required"
        ],
        aftercare: [
            "No eating or drinking for 1-2 hours after procedure",
            "Rest for remainder of the day",
            "Avoid driving for 24 hours if sedated",
            "Report any unusual symptoms",
            "Follow up appointment as scheduled"
        ],
        risks: [
            "Bleeding (rare)",
            "Infection (very rare)",
            "Perforation of digestive tract (extremely rare)",
            "Reaction to sedation",
            "Sore throat (common but temporary)"
        ],
        recovery: "Most patients can return to normal activities the next day, with some throat soreness possible for 1-2 days.",
        slug: "endoscopy"
    },
    {
        image: "/images/procedures/peg.jpg",
        title: "Percutaneous Endoscopic Gastrostomy (PEG)",
        description: "A surgical procedure to place a feeding tube directly into the stomach through the abdominal wall, providing long-term nutritional support for patients unable to eat by mouth.",
       
        preparation: [
            "Fast for 8 hours before the procedure",
            "Complete blood tests including coagulation profile",
            "Stop blood thinning medications as advised",
            "Arrange for hospital stay and transportation",
            "Inform doctor of all current medications"
        ],
        process: [
            "Administration of sedation and local anesthetic",
            "Endoscopic examination of stomach",
            "Small incision in abdominal wall",
            "Placement of feeding tube under endoscopic guidance",
            "Securing tube with external fixation device"
        ],
        aftercare: [
            "Regular cleaning around tube site",
            "Monitor for signs of infection",
            "Learn proper feeding tube care",
            "Follow feeding schedule as prescribed",
            "Regular tube maintenance and position checks"
        ],
        risks: [
            "Infection at insertion site",
            "Internal bleeding",
            "Tube displacement or blockage",
            "Aspiration pneumonia",
            "Reaction to sedation"
        ],
        recovery: "Initial recovery period of 7-10 days for wound healing, with ongoing care needed for tube maintenance.",
        slug: "peg"
    },
    {
        image: "/images/procedures/colonoscopy.webp",
        title: "Colonoscopy",
        description: "A diagnostic procedure using a flexible tube with a camera to examine the large intestine (colon) and rectum.",
       
        preparation: [
            "Follow prescribed bowel preparation regime",
            "Clear liquid diet for 24-48 hours before",
            "Complete bowel cleansing process",
            "Stop certain medications as advised",
            "Arrange for transportation home"
        ],
        process: [
            "Administration of sedation",
            "Positioning on left side",
            "Insertion of colonoscope",
            "Examination of entire colon",
            "Possible removal of polyps or tissue sampling"
        ],
        aftercare: [
            "Rest for remainder of the day",
            "Gradually return to normal diet",
            "Avoid alcohol for 24 hours",
            "Monitor for complications",
            "Follow up as recommended"
        ],
        risks: [
            "Bleeding (especially after polyp removal)",
            "Perforation of colon wall (rare)",
            "Reaction to sedation",
            "Infection (very rare)",
            "Missed lesions"
        ],
        recovery: "Most patients can return to normal activities the next day, though full recovery may take up to 24 hours due to sedation effects.",
        slug: "colonoscopy"
    },
    {
        image: "/images/procedures/liver-biopsy.jpg",
        title: "Liver Biopsy",
        description: "A medical procedure to remove a small sample of liver tissue for laboratory testing and examination.",
     
        preparation: [
            "Blood tests to check clotting",
            "Fast for 8 hours before procedure",
            "Stop certain medications",
            "Arrange for transportation home",
            "Inform doctor of all current medications"
        ],
        process: [
            "Local anesthetic administration",
            "Possible ultrasound guidance",
            "Quick insertion of biopsy needle",
            "Tissue sample collection",
            "Application of pressure to biopsy site"
        ],
        aftercare: [
            "Bed rest for 4-6 hours post-procedure",
            "Regular vital sign monitoring",
            "Pain management if needed",
            "Avoid heavy lifting for 1 week",
            "Follow up appointment scheduling"
        ],
        risks: [
            "Pain at biopsy site",
            "Internal bleeding",
            "Infection",
            "Injury to nearby organs",
            "Bile leakage (rare)"
        ],
        recovery: "Most patients can return to light activities after 24 hours, with full recovery within a week.",
        slug: "liver-biopsy"
    },
    {
        image: "/images/procedures/fibroscan.jpg",
        title: "Fibroscan",
        description: "A non-invasive technique to assess liver stiffness and fat content using ultrasound-based technology.",
       
        preparation: [
            "Fast for 3 hours before procedure",
            "Wear comfortable clothing",
            "No special preparation needed",
            "Continue regular medications",
            "Inform of any medical conditions"
        ],
        process: [
            "Lying on back with right arm raised",
            "Application of gel to skin",
            "Placement of probe on right side",
            "Multiple measurements taken",
            "Real-time results available"
        ],
        aftercare: [
            "Resume normal activities immediately",
            "No special aftercare needed",
            "Follow up appointment if required",
            "Continue regular medications",
            "Report any unusual symptoms"
        ],
        risks: [
            "No significant risks",
            "Mild discomfort during procedure",
            "Results may be affected by recent food intake",
            "May be less accurate in obese patients",
            "Some conditions may affect accuracy"
        ],
        recovery: "Immediate return to normal activities possible with no recovery period needed.",
        slug: "fibroscan"
    }
];

export default proceduresData;
