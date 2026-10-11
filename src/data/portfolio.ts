export const profile = {
  name: "Abdul Sami Sheraz",
  linkedin: "https://www.linkedin.com/in/abdul-sami-sheraz-86265b343",
  github: "https://github.com/samisheraz",
  email: "", // Add your real email address to enable the email link.
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string; // Import a real project photograph and assign it here.
  repository?: string; // Add only the actual project repository URL.
  note?: string;
};

export const projects: Project[] = [
  { id: "esp32-assistant", title: "ESP32 AI Assistant", category: "Embedded systems", description: "An ESP32-based conversational assistant connecting an AI API, serial communication, and an OLED display.", technologies: ["ESP32", "AI API", "OLED", "Serial communication"] },
  { id: "obd-pcb", title: "OBD-II PCB", category: "Automotive electronics", description: "An automotive diagnostic interface PCB using PIC18F248 and MCP2551 to explore CAN communication and ISO 15765.", technologies: ["PIC18F248", "MCP2551", "CAN bus", "PCB design"] },
  { id: "home-automation", title: "30A Home Automation PCB", category: "PCB design", description: "An ESP32-based home automation PCB concept combining relays and control electronics.", technologies: ["ESP32", "Relays", "PCB design"], note: "Concept project. The 30A designation is a project title, not a verified current rating. Safety compliance and certification have not been established." },
  { id: "instrument-cluster", title: "Automotive Instrument Cluster", category: "Automotive electronics", description: "A demonstration of vehicle speed, fuel level, warning indicators, and related dashboard functions.", technologies: ["Microcontrollers", "Sensors", "Dashboard indicators"] },
  { id: "body-control", title: "Body Control Module Demo", category: "Embedded systems", description: "A microcontroller-based demonstration of door-ajar indication, input buttons, LEDs, and ignition-related logic.", technologies: ["Microcontrollers", "GPIO", "LEDs", "Control logic"] },
  { id: "pipe-robot", title: "Pipe-Climbing Robot", category: "Robotics & mechanical design", description: "A mechanical design project exploring a pipe-climbing robot using SolidWorks.", technologies: ["SolidWorks", "Mechanical design", "Robotics"] },
];

export const skills = [
  { title: "Microcontrollers", icon: "chip", items: ["Arduino", "ESP32", "PIC"] },
  { title: "Embedded Systems", icon: "code", items: ["C/C++", "Sensors", "GPIO", "ADC / PWM", "Serial communication"] },
  { title: "Electronics", icon: "circuit", items: ["PCB design", "Circuit design", "Circuits", "Circuit debugging", "CAN bus fundamentals", "Communication protocols"] },
  { title: "Engineering Tools", icon: "tool", items: ["KiCad", "Proteus", "SolidWorks", "TinkerCAD", "Wokwi"] },
  { title: "Robotics & Automation", icon: "robot", items: ["Sensors", "Motor control", "Motor drivers", "Control systems fundamentals"] },
];

export const navigation = [
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Education", to: "/education" },
] as const;

export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — Abdul Sami Sheraz`;
  return { meta: [
    { title: fullTitle }, { name: "description", content: description },
    { property: "og:title", content: fullTitle }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] };
}