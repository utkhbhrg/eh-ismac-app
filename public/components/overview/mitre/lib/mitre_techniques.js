"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mitreTechniques = void 0;
exports.mitreTechniques = {
    T1001: { name: "Data Obfuscation" },
    T1002: { name: "Data Compressed" },
    T1003: { name: "Credential Dumping" },
    T1004: { name: "Winlogon Helper DLL" },
    T1005: { name: "Data from Local System" },
    T1006: { name: "File System Logical Offsets" },
    T1007: { name: "System Service Discovery" },
    T1008: { name: "Fallback Channels" },
    T1009: { name: "Binary Padding" },
    T1010: { name: "Application Window Discovery" },
    T1011: { name: "Exfiltration Over Other Network Medium" },
    T1012: { name: "Query Registry" },
    T1013: { name: "Port Monitors" },
    T1014: { name: "Rootkit" },
    T1015: { name: "Accessibility Features" },
    T1016: { name: "System Network Configuration Discovery" },
    T1017: { name: "Application Deployment Software" },
    T1018: { name: "Remote System Discovery" },
    T1019: { name: "System Firmware" },
    T1020: { name: "Automated Exfiltration" },
    T1021: { name: "Remote Services" },
    T1022: { name: "Data Encrypted" },
    T1023: { name: "Shortcut Modification" },
    T1024: { name: "Custom Cryptographic Protocol" },
    T1025: { name: "Data from Removable Media" },
    T1026: { name: "Multiband Communication" },
    T1027: { name: "Obfuscated Files or Information" },
    T1028: { name: "Windows Remote Management" },
    T1029: { name: "Scheduled Transfer" },
    T1030: { name: "Data Transfer Size Limits" },
    T1031: { name: "Modify Existing Service" },
    T1032: { name: "Standard Cryptographic Protocol" },
    T1033: { name: "System Owner/User Discovery" },
    T1034: { name: "Path Interception" },
    T1035: { name: "Service Execution" },
    T1036: { name: "Masquerading" },
    T1037: { name: "Logon Scripts" },
    T1038: { name: "DLL Search Order Hijacking" },
    T1039: { name: "Data from Network Shared Drive" },
    T1040: { name: "Network Sniffing" },
    T1041: { name: "Exfiltration Over Command and Control Channel" },
    T1042: { name: "Change Default File Association" },
    T1043: { name: "Commonly Used Port" },
    T1044: { name: "File System Permissions Weakness" },
    T1045: { name: "Software Packing" },
    T1046: { name: "Network Service Scanning" },
    T1047: { name: "Windows Management Instrumentation" },
    T1048: { name: "Exfiltration Over Alternative Protocol" },
    T1049: { name: "System Network Connections Discovery" },
    T1050: { name: "New Service" },
    T1051: { name: "Shared Webroot" },
    T1052: { name: "Exfiltration Over Physical Medium" },
    T1053: { name: "Scheduled Task" },
    T1054: { name: "Indicator Blocking" },
    T1055: { name: "Process Injection" },
    T1056: { name: "Input Capture" },
    T1057: { name: "Process Discovery" },
    T1058: { name: "Service Registry Permissions Weakness" },
    T1059: { name: "Command-Line Interface" },
    T1060: { name: "Registry Run Keys / Startup Folder" },
    T1061: { name: "Graphical User Interface" },
    T1062: { name: "Hypervisor" },
    T1063: { name: "Security Software Discovery" },
    T1064: { name: "Scripting" },
    T1065: { name: "Uncommonly Used Port" },
    T1066: { name: "Indicator Removal from Tools" },
    T1067: { name: "Bootkit" },
    T1068: { name: "Exploitation for Privilege Escalation" },
    T1069: { name: "Permission Groups Discovery" },
    T1070: { name: "Indicator Removal on Host" },
    T1071: { name: "Standard Application Layer Protocol" },
    T1072: { name: "Third-party Software" },
    T1073: { name: "DLL Side-Loading" },
    T1074: { name: "Data Staged" },
    T1075: { name: "Pass the Hash" },
    T1076: { name: "Remote Desktop Protocol" },
    T1077: { name: "Windows Admin Shares" },
    T1078: { name: "Valid Accounts" },
    T1079: { name: "Multilayer Encryption" },
    T1080: { name: "Taint Shared Content" },
    T1081: { name: "Credentials in Files" },
    T1082: { name: "System Information Discovery" },
    T1083: { name: "File and Directory Discovery" },
    T1084: { name: "Windows Management Instrumentation Event Subscription" },
    T1085: { name: "Rundll32" },
    T1086: { name: "PowerShell" },
    T1087: { name: "Account Discovery" },
    T1088: { name: "Bypass User Account Control" },
    T1089: { name: "Disabling Security Tools" },
    T1090: { name: "Connection Proxy" },
    T1091: { name: "Replication Through Removable Media" },
    T1092: { name: "Communication Through Removable Media" },
    T1093: { name: "Process Hollowing" },
    T1094: { name: "Custom Command and Control Protocol" },
    T1095: { name: "Standard Non-Application Layer Protocol" },
    T1096: { name: "NTFS File Attributes" },
    T1097: { name: "Pass the Ticket" },
    T1098: { name: "Account Manipulation" },
    T1099: { name: "Timestomp" },
    T1100: { name: "Web Shell" },
    T1101: { name: "Security Support Provider" },
    T1102: { name: "Web Service" },
    T1103: { name: "AppInit DLLs" },
    T1104: { name: "Multi-Stage Channels" },
    T1105: { name: "Remote File Copy" },
    T1106: { name: "Execution through API" },
    T1107: { name: "File Deletion" },
    T1108: { name: "Redundant Access" },
    T1109: { name: "Component Firmware" },
    T1110: { name: "Brute Force" },
    T1111: { name: "Two-Factor Authentication Interception" },
    T1112: { name: "Modify Registry" },
    T1113: { name: "Screen Capture" },
    T1114: { name: "Email Collection" },
    T1115: { name: "Clipboard Data" },
    T1116: { name: "Code Signing" },
    T1117: { name: "Regsvr32" },
    T1118: { name: "InstallUtil" },
    T1119: { name: "Automated Collection" },
    T1120: { name: "Peripheral Device Discovery" },
    T1121: { name: "Regsvcs/Regasm" },
    T1122: { name: "Component Object Model Hijacking" },
    T1123: { name: "Audio Capture" },
    T1124: { name: "System Time Discovery" },
    T1125: { name: "Video Capture" },
    T1126: { name: "Network Share Connection Removal" },
    T1127: { name: "Trusted Developer Utilities" },
    T1128: { name: "Netsh Helper DLL" },
    T1129: { name: "Execution through Module Load" },
    T1130: { name: "Install Root Certificate" },
    T1131: { name: "Authentication Package" },
    T1132: { name: "Data Encoding" },
    T1133: { name: "External Remote Services" },
    T1134: { name: "Access Token Manipulation" },
    T1135: { name: "Network Share Discovery" },
    T1136: { name: "Create Account" },
    T1137: { name: "Office Application Startup" },
    T1138: { name: "Application Shimming" },
    T1139: { name: "Bash History" },
    T1140: { name: "Deobfuscate/Decode Files or Information" },
    T1141: { name: "Input Prompt" },
    T1142: { name: "Keychain" },
    T1143: { name: "Hidden Window" },
    T1144: { name: "Gatekeeper Bypass" },
    T1145: { name: "Private Keys" },
    T1146: { name: "Clear Command History" },
    T1147: { name: "Hidden Users" },
    T1148: { name: "HISTCONTROL" },
    T1149: { name: "LC_MAIN Hijacking" },
    T1150: { name: "Plist Modification" },
    T1151: { name: "Space after Filename" },
    T1152: { name: "Launchctl" },
    T1153: { name: "Source" },
    T1154: { name: "Trap" },
    T1155: { name: "AppleScript" },
    T1156: { name: ".bash_profile and .bashrc" },
    T1157: { name: "Dylib Hijacking" },
    T1158: { name: "Hidden Files and Directories" },
    T1159: { name: "Launch Agent" },
    T1160: { name: "Launch Daemon" },
    T1161: { name: "LC_LOAD_DYLIB Addition" },
    T1162: { name: "Login Item" },
    T1163: { name: "Rc.common" },
    T1164: { name: "Re-opened Applications" },
    T1165: { name: "Startup Items" },
    T1166: { name: "Setuid and Setgid" },
    T1167: { name: "Securityd Memory" },
    T1168: { name: "Local Job Scheduling" },
    T1169: { name: "Sudo" },
    T1170: { name: "Mshta" },
    T1171: { name: "LLMNR/NBT-NS Poisoning and Relay" },
    T1172: { name: "Domain Fronting" },
    T1173: { name: "Dynamic Data Exchange" },
    T1174: { name: "Password Filter DLL" },
    T1175: { name: "Component Object Model and Distributed COM" },
    T1176: { name: "Browser Extensions" },
    T1177: { name: "LSASS Driver" },
    T1178: { name: "SID-History Injection" },
    T1179: { name: "Hooking" },
    T1180: { name: "Screensaver" },
    T1181: { name: "Extra Window Memory Injection" },
    T1182: { name: "AppCert DLLs" },
    T1183: { name: "Image File Execution Options Injection" },
    T1184: { name: "SSH Hijacking" },
    T1185: { name: "Man in the Browser" },
    T1186: { name: "Process Doppelgänging" },
    T1187: { name: "Forced Authentication" },
    T1188: { name: "Multi-hop Proxy" },
    T1189: { name: "Drive-by Compromise" },
    T1190: { name: "Exploit Public-Facing Application" },
    T1191: { name: "CMSTP" },
    T1192: { name: "Spearphishing Link" },
    T1193: { name: "Spearphishing Attachment" },
    T1194: { name: "Spearphishing via Service" },
    T1195: { name: "Supply Chain Compromise" },
    T1196: { name: "Control Panel Items" },
    T1197: { name: "BITS Jobs" },
    T1198: { name: "SIP and Trust Provider Hijacking" },
    T1199: { name: "Trusted Relationship" },
    T1200: { name: "Hardware Additions" },
    T1201: { name: "Password Policy Discovery" },
    T1202: { name: "Indirect Command Execution" },
    T1203: { name: "Exploitation for Client Execution" },
    T1204: { name: "User Execution" },
    T1205: { name: "Port Knocking" },
    T1206: { name: "Sudo Caching" },
    T1207: { name: "DCShadow" },
    T1208: { name: "Kerberoasting" },
    T1209: { name: "Time Providers" },
    T1210: { name: "Exploitation of Remote Services" },
    T1211: { name: "Exploitation for Defense Evasion" },
    T1212: { name: "Exploitation for Credential Access" },
    T1213: { name: "Data from Information Repositories" },
    T1214: { name: "Credentials in Registry" },
    T1215: { name: "Kernel Modules and Extensions" },
    T1216: { name: "Signed Script Proxy Execution" },
    T1217: { name: "Browser Bookmark Discovery" },
    T1218: { name: "Signed Binary Proxy Execution" },
    T1219: { name: "Remote Access Tools" },
    T1220: { name: "XSL Script Processing" },
    T1221: { name: "Template Injection" },
    T1222: { name: "File and Directory Permissions Modification" },
    T1223: { name: "Compiled HTML File" },
    T1480: { name: "Execution Guardrails" },
    T1482: { name: "Domain Trust Discovery" },
    T1483: { name: "Domain Generation Algorithms" },
    T1484: { name: "Group Policy Modification" },
    T1485: { name: "Data Destruction" },
    T1486: { name: "Data Encrypted for Impact" },
    T1487: { name: "Disk Structure Wipe" },
    T1488: { name: "Disk Content Wipe" },
    T1489: { name: "Service Stop" },
    T1490: { name: "Inhibit System Recovery" },
    T1491: { name: "Defacement" },
    T1492: { name: "Stored Data Manipulation" },
    T1493: { name: "Transmitted Data Manipulation" },
    T1494: { name: "Runtime Data Manipulation" },
    T1495: { name: "Firmware Corruption" },
    T1496: { name: "Resource Hijacking" },
    T1497: { name: "Virtualization/Sandbox Evasion" },
    T1498: { name: "Network Denial of Service" },
    T1499: { name: "Endpoint Denial of Service" },
    T1500: { name: "Compile After Delivery" },
    T1501: { name: "Systemd Service" },
    T1502: { name: "Parent PID Spoofing" },
    T1503: { name: "Credentials from Web Browsers" },
    T1504: { name: "PowerShell Profile" },
    T1505: { name: "Server Software Component" },
    T1506: { name: "Web Session Cookie" },
    T1514: { name: "Elevated Execution with Prompt" },
    T1518: { name: "Software Discovery" },
    T1519: { name: "Emond" },
    T1522: { name: "Cloud Instance Metadata API" },
    T1525: { name: "Implant Container Image" },
    T1526: { name: "Cloud Service Discovery" },
    T1527: { name: "Application Access Token" },
    T1528: { name: "Steal Application Access Token" },
    T1529: { name: "System Shutdown/Reboot" },
    T1530: { name: "Data from Cloud Storage Object" },
    T1531: { name: "Account Access Removal" },
    T1534: { name: "Internal Spearphishing" },
    T1535: { name: "Unused/Unsupported Cloud Regions" },
    T1536: { name: "Revert Cloud Instance" },
    T1537: { name: "Transfer Data to Cloud Account" },
    T1538: { name: "Cloud Service Dashboard" },
    T1539: { name: "Steal Web Session Cookie" }
};
