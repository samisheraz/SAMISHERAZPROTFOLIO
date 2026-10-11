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
  image?: string;
  repository?: string;
  linkedinPost?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    id: "esp32-assistant",
    title: "ESP32 AI Assistant with OLED",
    category: "Embedded systems",
    description: "An ESP32-based assistant project with an OLED display.",
    technologies: ["ESP32", "OLED"],
  },
  {
    id: "obd-pcb",
    title: "OBD-II PCB using PIC18F248 and MCP2551",
    category: "Automotive electronics",
    description:
      "An OBD-II interface PCB project built around a PIC18F248 microcontroller and MCP2551 CAN transceiver.",
    technologies: ["PIC18F248", "MCP2551", "CAN bus", "PCB design"],
  },
  {
    id: "home-automation",
    title: "ESP32-Based Home Automation PCB",
    category: "PCB design",
    description:
      "A home automation PCB concept centered on ESP32 control and relay-based switching.",
    technologies: ["ESP32", "Relays", "PCB design"],
  },
  {
    id: "instrument-cluster",
    title: "Automotive Instrument Cluster Demo",
    category: "Automotive electronics",
    description:
      "A dashboard demonstration covering vehicle speed, fuel level, and warning indicators.",
    technologies: ["Vehicle speed", "Fuel level", "Dashboard indicators"],
  },
  {
    id: "body-control",
    title: "Body Control Module Demo",
    category: "Embedded systems",
    description:
      "A microcontroller demonstration of body-control logic with door-ajar indication, buttons, LEDs, and ignition-related inputs.",
    technologies: ["Microcontrollers", "Buttons", "LEDs", "Control logic"],
  },
  {
    id: "pipe-robot",
    title: "Pipe-Climbing Robot CAD Design",
    category: "Robotics & CAD",
    description:
      "A SolidWorks CAD design exploring the mechanical layout of a pipe-climbing robot.",
    technologies: ["SolidWorks", "CAD", "Robotics"],
  },
];

export const skills = [
  {
    title: "Embedded Systems",
    icon: "chip",
    items: [
      "Arduino",
      "ESP32",
      "PIC microcontrollers",
      "C/C++",
      "GPIO",
      "ADC / PWM",
      "Serial communication",
    ],
  },
  {
    title: "Electronics & PCB Design",
    icon: "circuit",
    items: ["Circuit design", "KiCad", "PCB layout", "Circuit debugging"],
  },
  {
    title: "Automotive Electronics",
    icon: "car",
    items: ["CAN bus fundamentals", "OBD-II concepts", "Automotive instrumentation"],
  },
  {
    title: "Robotics & CAD",
    icon: "robot",
    items: [
      "Sensors",
      "Motor control",
      "Motor drivers",
      "Control systems fundamentals",
      "SolidWorks",
      "Proteus",
      "Wokwi",
      "Tinkercad",
    ],
  },
];

export const navigation = [
  { label: "Home", id: "home", href: "/#home" },
  { label: "About", id: "about", href: "/#about" },
  { label: "Skills", id: "skills", href: "/#skills" },
  { label: "Projects", id: "projects", href: "/#projects" },
  { label: "Contact", id: "contact", href: "/#contact" },
] as const;

export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — Abdul Sami Sheraz`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
