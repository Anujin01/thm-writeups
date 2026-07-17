# Windows Command Line Basics

This writeup covers the essential Windows Command Line (CMD) utilities learned in this TryHackMe room. These commands are fundamental for daily system administration, networking diagnostics, and basic file management.

---

## 🛠️ Network Diagnostics & Information

| Command | Description | Example |
|:---|:---|:---|
| `ipconfig` | Displays all current TCP/IP network configuration values. | `ipconfig /all` |
| `ping` | Verifies IP-level connectivity to another TCP/IP computer or server. | `ping <target_name>` |
| `tracert` | Traces the network route packets take to reach a specific destination. | `tracert <target_name>` |
| `nslookup` | Queries DNS to obtain domain name or IP address mapping. | `nslookup <domain_name>` |

---

## 📁 File System & Directory Navigation

| Command | Description |
| :--- | :--- |
| `cd` | Displays the name of or changes the current directory. |
| `dir` | Displays a list of a directory's files and subdirectories. |
| `tree` | Graphically displays the folder structure of a drive or path. |
| `type` | Displays the contents of a text file or files without modifying them. |
| `copy` | Copies one or more files from one location to another. |

---

## 🖥️ System & Process Management

| Command | Description |
| :--- | :--- |
| `systeminfo` | Displays detailed configuration information about the computer and its OS. |
| `tasklist` | Displays a list of currently running processes on either a local or remote computer. |
