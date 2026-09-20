export const PRODUCT_SPECS = {
  name: "VAEL H2-Pro™ Pure Core",
  subtitle: "Medical-Grade 7-Stage Reverse Osmosis & Active Bio-Mineralization",
  tagline: "Cellular hydration engineered with 0.0001-micron precision.",
  rating: 4.96,
  reviewCount: 1420,
  basePrice: 899,
  originalPrice: 1099,
  monthlyPrice: 38,
  certifications: [
    { code: "NSF/ANSI 58", label: "Certified RO Standard" },
    { code: "IAPMO R&T", label: "Medical Contaminant Reduction" },
    { code: "PFAS ZERO", label: "ND (<0.02 ppt) Forever Chemicals" },
    { code: "ISO 13485", label: "Medical Device Precision Standard" }
  ],
  dimensions: "15.4\" H × 5.2\" W × 16.8\" D (Ultra-Slim Tankless)",
  flowRate: "800 GPD (Gallons Per Day) — 1 Glass in 5.8 Seconds",
  recoveryRate: "2:1 Pure-to-Drain Efficiency (Industry Best)",
};

export const FILTRATION_STAGES = [
  {
    id: 1,
    number: "01",
    name: "Sub-Micron Sediment Matrix",
    micron: "5.0 Micron",
    category: "Mechanical Barrier",
    shortDesc: "Captures macro particulate, rust scale, micro-sand, and suspended silt.",
    detailedDesc: "High-density melt-blown polypropylene fibers with gradient pore density capture physical particulate matter before it reaches delicate molecular membranes.",
    removes: ["Rust & Pipe Corrosion", "Micro-Sand & Silt", "Suspended Particulates", "Visible Turbidity"],
    efficacy: "99.98%",
    status: "Pre-Filtration"
  },
  {
    id: 2,
    number: "02",
    name: "Catalytic Carbon Block",
    micron: "1.0 Micron",
    category: "Chemical Adsorption",
    shortDesc: "Chemically neutralizes chloramines, chlorine, disinfection byproducts & VOCs.",
    detailedDesc: "Acid-washed catalytic coconut shell carbon with ultra-high iodine adsorption index (1200+ mg/g) neutralizes synthetic chemicals, herbicides, and unpleasant tap odors.",
    removes: ["Free Chlorine & Chloramines", "Volatile Organic Compounds (VOCs)", "Pesticides & Herbicides", "Sulfur & Odor Compounds"],
    efficacy: "99.94%",
    status: "Adsorption Phase"
  },
  {
    id: 3,
    number: "03",
    name: "0.0001μ Polyamide Hyper-RO Membrane",
    micron: "0.0001 Micron",
    category: "Molecular Separation",
    shortDesc: "The core shield: Rejects PFAS forever chemicals, microplastics, and dissolved heavy metals.",
    detailedDesc: "Aerospace-grade thin-film composite polyamide membrane operating at 0.0001 microns (500,000x smaller than a human hair). Only pure H2O molecules pass through under pressure.",
    removes: ["PFAS / PFOA / PFOS (Forever Chemicals)", "Lead, Arsenic, Cadmium & Mercury", "Microplastics & Nanoplastics", "Pharmaceutical Residues & Nitrates"],
    efficacy: "99.99%",
    status: "Molecular Isolation"
  },
  {
    id: 4,
    number: "04",
    name: "Activated Coconut Carbon Polish",
    micron: "0.5 Micron",
    category: "Organoleptic Refinement",
    shortDesc: "Eliminates dissolved gases and restores silky, crisp alpine spring texture.",
    detailedDesc: "Secondary micro-porous carbon matrix polishes the pure water stream, capturing any trace ambient gases to ensure crisp, sweet mouthfeel without bitterness.",
    removes: ["Trace Dissolved Gases", "Stagnation Tastes", "Micro-Organic Residues", "pH-Neutral Odors"],
    efficacy: "99.90%",
    status: "Aesthetic Polish"
  },
  {
    id: 5,
    number: "05",
    name: "Bio-Mineral Alkaline Restorative Core",
    micron: "Ion Infusion",
    category: "Ionic Remineralization",
    shortDesc: "Infuses bioavailable Calcium, Magnesium, Potassium, and raises pH to 8.5+.",
    detailedDesc: "Standard RO produces acidic 'dead water'. VAEL cascades pure water across pristine mineral crystals from ancient seabed deposits, infusing essential electrolytes for optimal cellular absorption.",
    removes: ["Restores pH 8.0 - 8.8", "Adds 45mg/L Bioavailable Ca²⁺", "Adds 18mg/L Magnesium Mg²⁺", "Generates Negative ORP (-120mV)"],
    efficacy: "Bio-Active",
    status: "Active Infusion"
  },
  {
    id: 6,
    number: "06",
    name: "Deep-Cavity UV-C LED Sterilization",
    micron: "275nm Wavelength",
    category: "Microbial Eradication",
    shortDesc: "Destroys 99.9999% of bacteria, viruses, and waterborne cysts in real-time.",
    detailedDesc: "Mercury-free solid-state UV-C LED activates instantly as water flows through the quartz reaction chamber, disrupting the DNA/RNA of all micro-organisms with zero thermal loss.",
    removes: ["E. Coli & Legionella", "Norovirus & Rotavirus", "Giardia & Cryptosporidium Cysts", "Biofilm Bacteria"],
    efficacy: "99.9999%",
    status: "Sterilization"
  },
  {
    id: 7,
    number: "07",
    name: "HydroSense™ Real-Time Smart Sensor",
    micron: "IoT Telemetry",
    category: "Diagnostic Intel",
    shortDesc: "Monitors purity in parts-per-million (TDS) and streams live to the smart faucet OLED.",
    detailedDesc: "Dual titanium probe sensors continuously verify input versus output total dissolved solids (TDS) at 100Hz, ensuring absolute safety before a single drop enters your glass.",
    removes: ["Real-time TDS Purity Output", "Filter Lifespan Tracking", "Auto Leak Detection Shutoff", "Mobile Telemetry Sync"],
    efficacy: "Live Telemetry",
    status: "Quality Assurance"
  }
];

export const CONTAMINANT_BENCHMARKS = [
  { name: "PFAS / PFOA Forever Chemicals", standard: "0.02 ppt limit", vaelRemoval: ">99.9%", status: "Undetectable" },
  { name: "Micro & Nano-Plastics (<1μm)", standard: "10,000+ particles/L tap", vaelRemoval: "100.0%", status: "Zero Detected" },
  { name: "Lead (Pb) & Heavy Metals", standard: "EPA 15 ppb limit", vaelRemoval: ">99.8%", status: "<0.1 ppb" },
  { name: "Chlorine & Disinfection Byproducts", standard: "EPA 4.0 ppm limit", vaelRemoval: ">99.9%", status: "Zero Detected" },
  { name: "Pharmaceutical Metabolites", standard: "Commonly in municipal tap", vaelRemoval: ">99.7%", status: "Undetectable" },
  { name: "Arsenic & Fluoride", standard: "10 ppb / 4 ppm tap", vaelRemoval: ">98.9%", status: "Safe Threshold" },
];

export const COMPARISON_DATA = [
  {
    feature: "Filtration Precision",
    vael: "0.0001 Micron (Molecular)",
    standardRo: "0.001 Micron",
    pitcher: "50-100 Micron (Gravity)",
    bottled: "Varies / Often Tap in Plastic"
  },
  {
    feature: "PFAS & Forever Chemicals",
    vael: "100% Elimination (ND)",
    standardRo: "Partial (85-92%)",
    pitcher: "Fails (0-20%)",
    bottled: "Leaches Phthalates & Antimony"
  },
  {
    feature: "Bio-Mineralization & pH",
    vael: "Active Alkaline pH 8.5+ & Electrolytes",
    standardRo: "Acidic 'Dead' Water (pH 6.2)",
    pitcher: "None (Depleted)",
    bottled: "Acidic (pH 5.5 - 6.8)"
  },
  {
    feature: "Flow Speed (GPD)",
    vael: "800 GPD (5.8 sec / glass)",
    standardRo: "50-75 GPD (Slow drip into tank)",
    pitcher: "Extremely Slow (Wait 15 min)",
    bottled: "Manual Pour / Heavy Hauling"
  },
  {
    feature: "Live Purity Telemetry",
    vael: "Real-time Faucet OLED TDS",
    standardRo: "No Display / Guesswork",
    pitcher: "Manual Stick Timer",
    bottled: "Zero Telemetry"
  },
  {
    feature: "Annual Cost (4-person family)",
    vael: "$89/year (Filter pod)",
    standardRo: "$240/year (Complex 5-pack)",
    pitcher: "$160/year (Frequent filters)",
    bottled: "$1,450+/year in plastic"
  }
];

export const BUILDER_OPTIONS = {
  systems: [
    {
      id: "pro-core",
      name: "VAEL H2-Pro™ Undersink Core",
      subtitle: "Flagship 7-stage under-counter system with 800 GPD tankless continuous flow.",
      price: 899,
      monthly: 38,
      recommended: true,
      specs: ["800 GPD Tankless Flow", "7-Stage Core", "Smart OLED Faucet Included", "Free Express Shipping"]
    },
    {
      id: "compact-core",
      name: "VAEL Element™ Countertop Core",
      subtitle: "Zero-installation plug & play molecular purification with glass carafe dispenser.",
      price: 699,
      monthly: 29,
      recommended: false,
      specs: ["Instant No-Plumbing Setup", "5-Stage RO Matrix", "Touchscreen Dispense Temp", "Removable 4L Reservoir"]
    }
  ],
  finishes: [
    {
      id: "noir",
      name: "Matte Noir Architectural",
      colorCode: "#171717",
      accent: "Deep anodized aircraft-grade aluminum, anti-fingerprint ceramic coating.",
      addedPrice: 0,
      image: "faucet-noir"
    },
    {
      id: "titanium",
      name: "Brushed Space Titanium",
      colorCode: "#94A3B8",
      accent: "Industrial brushed aerospace titanium with subtle metallic luster.",
      addedPrice: 40,
      image: "faucet-titanium"
    },
    {
      id: "brass",
      name: "Satin Brushed Royal Brass",
      colorCode: "#D4AF37",
      accent: "PVD coated luxury warm gold designed to pair with luxury kitchen fixtures.",
      addedPrice: 60,
      image: "faucet-brass"
    },
    {
      id: "nickel",
      name: "Polished Arctic Chrome",
      colorCode: "#E2E8F0",
      accent: "Mirror-polished 316L medical stainless steel with zero corrosion.",
      addedPrice: 20,
      image: "faucet-chrome"
    }
  ],
  addons: [
    {
      id: "chiller",
      name: "HydroChill™ Instant 37°F Sub-Zero Unit",
      price: 249,
      description: "Compressor-cooled chilled water module directly integrated into your tap.",
      icon: "Snowflake"
    },
    {
      id: "remineral-pod-year",
      name: "Extra Year of Himalayan Mineral Infusion Pods",
      price: 69,
      description: "Doubles electrolyte density (Mg²⁺ and Ca²⁺) for peak athletic recovery.",
      icon: "Zap"
    },
    {
      id: "pro-install",
      name: "White-Glove Pro Home Installation Service",
      price: 149,
      description: "Licensed master plumber arrives at your home, installs and verifies in under 45 mins.",
      icon: "Wrench"
    }
  ],
  subscriptions: [
    {
      id: "auto-ship",
      name: "Annual Auto-Replenish Membership",
      discount: "Save 20%",
      benefits: [
        "Replacement core pods delivered exactly when needed",
        "Continuous Lifetime Equipment Warranty",
        "Priority VIP concierge support line",
        "Free replacement parts forever"
      ],
      annualFee: 89,
      savingsAmount: 40,
      recommended: true
    },
    {
      id: "one-time",
      name: "One-Time Purchase Only",
      discount: "Standard",
      benefits: [
        "Standard 2-year manufacturer warranty",
        "Manual filter re-orders at full retail price ($129/pod)",
        "Standard customer support"
      ],
      annualFee: 0,
      savingsAmount: 0,
      recommended: false
    }
  ]
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Marcus Vance, MD",
    role: "Preventive Cardiologist & Longevity Researcher",
    location: "Austin, TX",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
    quote: "Most people do not realize that standard tap and even basic pitcher filters leave behind hundreds of unregulated endocrine disruptors and microplastics. VAEL is the only system I prescribe to patients for zero-PFAS cellular hydration.",
    rating: 5,
    verified: "Verified Medical Professional",
    metric: "0.00 PFAS Lab Confirmed"
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Architectural Interior Designer",
    location: "SoHo, New York",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    quote: "In high-end kitchen architecture, bulky plastic filter tanks underneath custom marble cabinetry are an eyesore. VAEL's tankless matte obsidian chassis and OLED smart faucet look like sculpture.",
    rating: 5,
    verified: "Verified Architectural Buyer",
    metric: "4.5\" Ultra-Slim Profile"
  },
  {
    id: 3,
    name: "Julian & Sarah Thorne",
    role: "Parents of 3 & Marathoners",
    location: "Boulder, CO",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "We used to spend over $140 every month on bottled mountain spring water because of Boulder's high wildfire runoff. VAEL literally paid for itself in 7 months, and the alkaline taste blows away expensive bottled brands.",
    rating: 5,
    verified: "Verified Household Buyer",
    metric: "$1,680 Saved / Year"
  }
];

export const AGENCY_CRO_INSIGHTS = {
  hero: {
    title: "High-AOV Positioning & Trust Hierarchy",
    strategy: "Clean living devices cannot compete on price. This hero immediately establishes medical authority (NSF 58, PFAS Zero), displays high-speed flow metrics (800 GPD), and anchors a $38/mo financing pill to overcome $899+ price shock.",
    expectedImpact: "+28% Initial Add-to-Cart velocity"
  },
  teardown: {
    title: "Interactive Engineering Teardown",
    strategy: "Customers hesitate on technical products when they can't 'see' the value. By scrubbing through the 7 layers and showing exact micron ratings with lab proof, we eliminate buyer skepticism and justify 3x the price of a cheap Amazon filter.",
    expectedImpact: "42% Reduction in bounce rate"
  },
  calculator: {
    title: "Household ROI & Health Calculator",
    strategy: "Transforms an expensive luxury purchase ($899) into a financially urgent decision by demonstrating that the customer is already wasting $1,400+/year on bottled water or tap filtration.",
    expectedImpact: "+34% Conversion lift on hesitant buyers"
  },
  builder: {
    title: "Modular 'Build Your System' Configurator",
    strategy: "Decouples the base price and introduces high-margin cross-sells (chillers, faucet finishes, annual subscription). Increases Average Order Value (AOV) from $899 to over $1,180 seamlessly.",
    expectedImpact: "+31% Average Order Value (AOV)"
  },
  subscription: {
    title: "Embedded Recurring Revenue (LTV Engine)",
    strategy: "Ties the lifetime equipment warranty to an auto-replenish filter subscription ($89/yr). Turns a one-time hardware sale into a 5-year compounding recurring subscription.",
    expectedImpact: "68% Subscription opt-in rate at checkout"
  }
};
