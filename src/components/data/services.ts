// types.ts
export interface ServiceItem {
    name: string;
    slug: string;
    path: string;
    image: string;
    description: string;
    symptoms: string[];
    causes: string[];
    treatments: string[];
    whenToSee: string[];
}

export interface ServiceCategory {
    category: string;
    items: ServiceItem[];
}

// services.ts
export const services: ServiceCategory[] = [
    {
        category: "Pediatric Liver Care",
        items: [
            {
                name: "Jaundice in Babies/Children",
                slug: "jaundice-in-babies",
                path: "/services/jaundice-in-babies",
                image: "/images/services/neonatal-cholestasis.jpg",
                description: "Jaundice is a condition where bile flow from the liver is reduced or blocked in newborns, leading to jaundice and other complications.",
                symptoms: [
                    "Yellowing of skin and eyes (jaundice) that persists beyond 2 weeks of age",
                    "Dark urine",
                    "Pale or clay-colored stools",
                    "Enlarged liver",
                    "Poor weight gain",
                    "Irritability"
                ],
                causes: [
                    "Biliary atresia",
                    "Genetic metabolic conditions",
                    "Viral infections",
                    "Endocrine disorders",
                    "Total parenteral nutrition (TPN)-associated cholestasis"
                ],
                treatments: [
                    "Early identification and diagnosis",
                    "Kasai procedure for biliary atresia",
                    "Nutritional support",
                    "Fat-soluble vitamin supplementation",
                    "Management of underlying conditions",
                    "Liver transplantation in severe cases"
                ],
                whenToSee: [
                    "Jaundice persisting beyond 2 weeks of age",
                    "Poor feeding or irritability",
                    "Pale stools or dark urine",
                    "Poor weight gain or growth"
                ]
            },
            {
                name: "Hepatitis",
                slug: "hepatitis",
                path: "/services/hepatitis",
                image: "/images/services/hepatitis.jpg",
                description: "Hepatitis is inflammation of the liver, which can be caused by various factors including viruses, medications, or autoimmune conditions.",
                symptoms: [
                    "Fatigue",
                    "Jaundice",
                    "Abdominal pain",
                    "Loss of appetite",
                    "Nausea and vomiting",
                    "Dark urine"
                ],
                causes: [
                    "Viral infections (Hepatitis A, B, C, D, E)",
                    "Autoimmune conditions",
                    "Medications and toxins",
                    "Metabolic disorders",
                    "Genetic conditions"
                ],
                treatments: [
                    "Antiviral medications",
                    "Immunosuppressive therapy for autoimmune hepatitis",
                    "Supportive care",
                    "Dietary modifications",
                    "Regular monitoring of liver function"
                ],
                whenToSee: [
                    "Yellowing of skin or eyes",
                    "Persistent fatigue",
                    "Unexplained abdominal pain",
                    "Dark colored urine"
                ]
            },
            {
                name: "Metabolic Liver Disease",
                slug: "metabolic-liver",
                path: "/services/metabolic-liver",
                image: "/images/services/metabolic-liver.jpg",
                description: "Metabolic liver diseases are inherited conditions that affect the liver's ability to process nutrients or remove toxins from the body.",
                symptoms: [
                    "Poor growth and development",
                    "Enlarged liver",
                    "Jaundice",
                    "Neurological symptoms",
                    "Bleeding problems",
                    "Behavioral changes"
                ],
                causes: [
                    "Genetic mutations",
                    "Wilson's disease",
                    "Alpha-1 antitrypsin deficiency",
                    "Glycogen storage diseases",
                    "Fatty acid oxidation disorders"
                ],
                treatments: [
                    "Dietary management",
                    "Medication therapy",
                    "Enzyme replacement therapy",
                    "Liver transplantation when necessary",
                    "Regular monitoring and follow-up"
                ],
                whenToSee: [
                    "Developmental delays",
                    "Unexplained liver problems",
                    "Family history of liver disease",
                    "Recurring infections or illnesses"
                ]
            },
            {
                name: "Acute Liver Failure",
                slug: "acute-liver",
                path: "/services/acute-liver",
                image: "/images/services/acute-liver.jpg",
                description: "Acute liver failure is a rapid loss of liver function, typically in a person without pre-existing liver disease. It's a medical emergency requiring immediate attention.",
                symptoms: [
                    "Jaundice",
                    "Confusion or disorientation",
                    "Sleepiness",
                    "Abdominal pain",
                    "Nausea and vomiting",
                    "Coagulopathy (bleeding problems)"
                ],
                causes: [
                    "Viral hepatitis",
                    "Drug-induced liver injury",
                    "Toxin exposure",
                    "Metabolic diseases",
                    "Autoimmune conditions"
                ],
                treatments: [
                    "Intensive care monitoring",
                    "N-acetylcysteine administration",
                    "Management of complications",
                    "Emergency liver transplantation if needed",
                    "Supportive care"
                ],
                whenToSee: [
                    "Yellowing of skin and eyes",
                    "Mental confusion or drowsiness",
                    "Severe abdominal pain",
                    "Easy bruising or bleeding"
                ]
            },
            {
                name: "Chronic Liver Disease",
                slug: "chronic-liver",
                path: "/services/chronic-liver",
                image: "/images/services/chronic-liver.jpg",
                description: "Chronic liver disease involves long-term, progressive deterioration of liver function that can lead to cirrhosis and other complications.",
                symptoms: [
                    "Fatigue",
                    "Jaundice",
                    "Ascites (fluid in abdomen)",
                    "Easy bruising",
                    "Itchy skin",
                    "Poor appetite"
                ],
                causes: [
                    "Chronic viral hepatitis",
                    "Autoimmune liver disease",
                    "Metabolic disorders",
                    "Biliary disorders",
                    "Genetic conditions"
                ],
                treatments: [
                    "Treatment of underlying cause",
                    "Nutritional support",
                    "Management of complications",
                    "Regular monitoring",
                    "Liver transplantation when indicated"
                ],
                whenToSee: [
                    "Progressive fatigue",
                    "Abdominal swelling",
                    "Yellowing of skin",
                    "Unexplained weight loss"
                ]
            },
            {
                name: "Liver Transplant",
                slug: "liver-transplant",
                path: "/services/liver-transplant",
                image: "/images/services/liver-transplant.jpg",
                description: "Liver transplantation is a surgical procedure to replace a diseased liver with a healthy liver from a donor.",
                symptoms: [
                    "End-stage liver disease",
                    "Acute liver failure",
                    "Metabolic liver diseases",
                    "Liver tumors",
                    "Quality of life deterioration"
                ],
                causes: [
                    "Chronic liver failure",
                    "Acute liver failure",
                    "Metabolic diseases",
                    "Liver cancer",
                    "Biliary atresia"
                ],
                treatments: [
                    "Pre-transplant evaluation",
                    "Transplant surgery",
                    "Immunosuppressive therapy",
                    "Post-transplant care",
                    "Long-term follow-up"
                ],
                whenToSee: [
                    "Progressive liver failure",
                    "Complications of portal hypertension",
                    "Poor quality of life due to liver disease",
                    "Liver cancer within transplant criteria"
                ]
            }
        ]
    },
    {
        category: "Gastrointestinal Services",
        items: [
            {
                name: "Hematemesis",
                slug: "hematemesis",
                path: "/services/hematemesis",
                image: "/images/services/hematemesis.jpg",
                description: "Hematemesis is the vomiting of blood, which can be a sign of serious gastrointestinal conditions requiring immediate medical attention.",
                symptoms: [
                    "Vomiting of blood",
                    "Coffee-ground vomit",
                    "Abdominal pain",
                    "Weakness and fatigue",
                    "Dizziness",
                    "Dark stools"
                ],
                causes: [
                    "Gastric or duodenal ulcers",
                    "Esophageal varices",
                    "Gastritis",
                    "Mallory-Weiss tears",
                    "Portal hypertension"
                ],
                treatments: [
                    "Emergency stabilization",
                    "Blood transfusion if needed",
                    "Endoscopic treatment",
                    "Medication therapy",
                    "Treatment of underlying cause"
                ],
                whenToSee: [
                    "Any episode of vomiting blood",
                    "Black, tarry stools",
                    "Severe abdominal pain",
                    "Signs of shock or weakness"
                ]
            },
            {
                name: "Abdominal Pain",
                slug: "abdominal-pain",
                path: "/services/abdominal-pain",
                image: "/images/services/abdominal-pain.jpg",
                description: "Pediatric abdominal pain can have various causes ranging from minor to serious conditions requiring prompt medical attention.",
                symptoms: [
                    "Acute or chronic pain",
                    "Changes in bowel habits",
                    "Nausea or vomiting",
                    "Loss of appetite",
                    "Fever",
                    "Weight changes"
                ],
                causes: [
                    "Gastroenteritis",
                    "Constipation",
                    "Appendicitis",
                    "Inflammatory bowel disease",
                    "Food intolerances"
                ],
                treatments: [
                    "Diagnostic evaluation",
                    "Pain management",
                    "Dietary modifications",
                    "Treatment of underlying cause",
                    "Lifestyle changes"
                ],
                whenToSee: [
                    "Severe or persistent pain",
                    "Pain with fever",
                    "Inability to eat or drink",
                    "Signs of dehydration"
                ]
            },
            {
                name: "Constipation",
                slug: "constipation",
                path: "/services/constipation",
                image: "/images/services/constipation.jpg",
                description: "Pediatric constipation is a common condition characterized by infrequent bowel movements or difficult passage of stools.",
                symptoms: [
                    "Infrequent bowel movements",
                    "Hard or dry stools",
                    "Abdominal pain",
                    "Bloating",
                    "Soiling",
                    "Poor appetite"
                ],
                causes: [
                    "Dietary factors",
                    "Dehydration",
                    "Lack of physical activity",
                    "Withholding behavior",
                    "Medical conditions"
                ],
                treatments: [
                    "Dietary modifications",
                    "Increased fluid intake",
                    "Regular toilet training",
                    "Medications when needed",
                    "Behavioral modifications"
                ],
                whenToSee: [
                    "Severe abdominal pain",
                    "Blood in stools",
                    "Weight loss",
                    "Persistent symptoms despite home care"
                ]
            },
            {
                name: "Diarrhea Management",
                slug: "diarrhea",
                path: "/services/diarrhea",
                image: "/images/services/diarrhea.jpg",
                description: "Pediatric diarrhea is characterized by frequent loose or watery stools and requires proper management to prevent dehydration.",
                symptoms: [
                    "Frequent watery stools",
                    "Abdominal cramps",
                    "Dehydration",
                    "Fever",
                    "Loss of appetite",
                    "Lethargy"
                ],
                causes: [
                    "Viral infections",
                    "Bacterial infections",
                    "Food intolerances",
                    "Medications",
                    "Inflammatory bowel conditions"
                ],
                treatments: [
                    "Oral rehydration therapy",
                    "Dietary modifications",
                    "Probiotics",
                    "Medication if needed",
                    "Prevention of spread"
                ],
                whenToSee: [
                    "Signs of dehydration",
                    "High fever",
                    "Severe abdominal pain",
                    "Blood in stools"
                ]
            }
        ]
    }
];

export default services;