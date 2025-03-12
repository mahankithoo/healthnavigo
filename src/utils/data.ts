
// Dummy doctors data
export const doctors = [
  {
    id: "doc-1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    experience: 12,
    rating: 4.8,
    availability: ["Mon", "Wed", "Fri"]
  },
  {
    id: "doc-2",
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    experience: 15,
    rating: 4.9,
    availability: ["Tue", "Thu", "Sat"]
  },
  {
    id: "doc-3",
    name: "Dr. Priya Sharma",
    specialty: "Dermatologist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    experience: 8,
    rating: 4.7,
    availability: ["Mon", "Tue", "Wed"]
  },
  {
    id: "doc-4",
    name: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    experience: 20,
    rating: 4.9,
    availability: ["Thu", "Fri", "Sat"]
  }
];

// Health tips data
export const healthTips = [
  {
    id: "tip-1",
    title: "Stay Hydrated",
    content: "Drink at least 8 glasses of water daily to maintain optimal bodily functions and energy levels.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tip-2",
    title: "Mindful Eating",
    content: "Take time to enjoy your meals without distractions. This promotes better digestion and prevents overeating.",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tip-3",
    title: "Regular Exercise",
    content: "Aim for at least 30 minutes of moderate physical activity daily to boost your mood and overall health.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tip-4",
    title: "Quality Sleep",
    content: "Prioritize 7-8 hours of uninterrupted sleep for better cognitive function and immune response.",
    image: "https://images.unsplash.com/photo-1519003300449-424ad0405076?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tip-5",
    title: "Stress Management",
    content: "Practice deep breathing or meditation for 10 minutes daily to reduce stress and improve mental clarity.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

// Symptom to disease mapping with remedies
export const symptomDiseaseMap: Record<string, {
  diseases: Array<{
    name: string;
    description: string;
    medicalRemedies: string[];
    homeRemedies: string[];
    videoId?: string;
  }>
}> = {
  "fever": {
    diseases: [
      {
        name: "Common Cold",
        description: "A viral infection causing inflammation of the upper respiratory tract.",
        medicalRemedies: [
          "Acetaminophen (Tylenol) for fever and pain",
          "Antihistamines for runny nose",
          "Decongestants for stuffy nose"
        ],
        homeRemedies: [
          "Rest and stay hydrated",
          "Gargle with warm salt water for sore throat",
          "Use honey and ginger tea for cough relief",
          "Steam inhalation for nasal congestion"
        ],
        videoId: "vrVMhRQH6wU"
      },
      {
        name: "Influenza",
        description: "A contagious respiratory illness caused by influenza viruses.",
        medicalRemedies: [
          "Oseltamivir (Tamiflu) if started early",
          "Acetaminophen for fever reduction",
          "Ibuprofen for body aches"
        ],
        homeRemedies: [
          "Bed rest and isolation to prevent spread",
          "Drink warm broths and herbal teas",
          "Inhale steam with tulsi (holy basil) leaves",
          "Turmeric milk before sleeping"
        ],
        videoId: "7Omi0IPkNpY"
      }
    ]
  },
  "headache": {
    diseases: [
      {
        name: "Tension Headache",
        description: "The most common type of headache, characterized by dull pain or pressure around the forehead.",
        medicalRemedies: [
          "Over-the-counter pain relievers like ibuprofen",
          "Stress management therapy",
          "Muscle relaxants if prescribed"
        ],
        homeRemedies: [
          "Apply peppermint oil to temples",
          "Practice relaxation techniques",
          "Massage the temples and neck area",
          "Apply a cold or warm compress"
        ],
        videoId: "u15zcjnRJCM"
      },
      {
        name: "Migraine",
        description: "A neurological condition causing severe, throbbing pain, often on one side of the head.",
        medicalRemedies: [
          "Triptans for acute attacks",
          "CGRP antagonists",
          "Beta-blockers for prevention"
        ],
        homeRemedies: [
          "Rest in a dark, quiet room",
          "Apply cold compress to forehead",
          "Drink ginger tea",
          "Practice yoga and meditation for prevention"
        ],
        videoId: "1EW8zQg2qK8"
      }
    ]
  },
  "cough": {
    diseases: [
      {
        name: "Bronchitis",
        description: "Inflammation of the bronchial tubes that carry air to and from the lungs.",
        medicalRemedies: [
          "Cough suppressants for dry cough",
          "Expectorants for productive cough",
          "Bronchodilators for breathing difficulty"
        ],
        homeRemedies: [
          "Drink warm water with honey and lemon",
          "Steam inhalation with eucalyptus oil",
          "Garlic and turmeric tea",
          "Ajwain (carom seeds) and jaggery mixture"
        ],
        videoId: "hbgBJNVEcTk"
      },
      {
        name: "Asthma",
        description: "A condition where airways narrow, swell, and produce extra mucus, making breathing difficult.",
        medicalRemedies: [
          "Short-acting bronchodilators for quick relief",
          "Inhaled corticosteroids for long-term control",
          "Leukotriene modifiers"
        ],
        homeRemedies: [
          "Breathing exercises like pranayama",
          "Drink warm ginger and honey tea",
          "Use a humidifier",
          "Avoid known triggers"
        ],
        videoId: "ZRu-uJaKmF0"
      }
    ]
  },
  "stomach pain": {
    diseases: [
      {
        name: "Gastritis",
        description: "Inflammation of the stomach lining, which can be acute or chronic.",
        medicalRemedies: [
          "Antacids for quick relief",
          "H2 blockers to reduce acid production",
          "Proton pump inhibitors for severe cases"
        ],
        homeRemedies: [
          "Eat smaller, more frequent meals",
          "Drink coconut water",
          "Consume aloe vera juice",
          "Eat soaked fenugreek seeds"
        ],
        videoId: "tXBP63JgDQE"
      },
      {
        name: "Irritable Bowel Syndrome",
        description: "A disorder affecting the large intestine, causing cramping, abdominal pain, bloating, gas, diarrhea, and constipation.",
        medicalRemedies: [
          "Antispasmodics for abdominal cramps",
          "Laxatives for constipation-predominant IBS",
          "Anti-diarrheal medications for diarrhea-predominant IBS"
        ],
        homeRemedies: [
          "Follow a low-FODMAP diet",
          "Regular exercise like yoga",
          "Stress management and relaxation techniques",
          "Peppermint tea for gas and bloating"
        ],
        videoId: "sQ8JxXyZI_s"
      }
    ]
  }
};

// Medication reminder sample data
export const medications = [
  {
    id: "med-1",
    name: "Aspirin",
    dosage: "100mg",
    frequency: "Once daily",
    time: "08:00",
    notes: "Take with food",
    active: true
  },
  {
    id: "med-2",
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    time: "08:00,20:00",
    notes: "Take after meals",
    active: true
  },
  {
    id: "med-3",
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily",
    time: "20:00",
    notes: "Take in the evening",
    active: true
  }
];

// Health tracking data types
export interface HealthRecord {
  id: string;
  date: string;
  bloodPressure?: {
    systolic: number;
    diastolic: number;
  };
  bloodSugar?: {
    value: number;
    unit: "mg/dL" | "mmol/L";
    type: "fasting" | "postprandial" | "random";
  };
  heartRate?: number;
  weight?: number;
  notes?: string;
}

// Sample health records
export const healthRecords: HealthRecord[] = [
  {
    id: "rec-1",
    date: "2023-06-01",
    bloodPressure: {
      systolic: 120,
      diastolic: 80
    },
    bloodSugar: {
      value: 95,
      unit: "mg/dL",
      type: "fasting"
    },
    heartRate: 72,
    weight: 70
  },
  {
    id: "rec-2",
    date: "2023-06-02",
    bloodPressure: {
      systolic: 118,
      diastolic: 78
    },
    bloodSugar: {
      value: 110,
      unit: "mg/dL",
      type: "postprandial"
    },
    heartRate: 74,
    weight: 70
  },
  {
    id: "rec-3",
    date: "2023-06-03",
    bloodPressure: {
      systolic: 122,
      diastolic: 82
    },
    bloodSugar: {
      value: 92,
      unit: "mg/dL",
      type: "fasting"
    },
    heartRate: 70,
    weight: 69.5
  }
];
