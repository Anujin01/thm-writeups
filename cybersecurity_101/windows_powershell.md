# Windows PowerShell Basics

Windows PowerShell was developed to overcome the limitations of existing command-line tools by introducing a robust, object-oriented scripting environment.

### 🔍 PowerShell Syntax
PowerShell utilizes a **Verb-Noun** syntax structure known as cmdlets.

Verb-Noun -Property "pattern*"
---

## 🛠️ Core Help & Navigation Cmdlets

| Cmdlet | Description | Alias / Note |
| :--- | :--- | :--- |
| `Get-Help` | Provides detailed information and examples for cmdlets. | `help` |
| `Get-Alias` | Lists all command aliases available in the current session. | `gal` |
| `Set-Location` | Changes the current working directory. | `cd` / `chdir` |
| `Get-ChildItem` | Displays the child items and directories in a specified location. | `dir` / `ls` |
| `Get-Content` | Reads and retrieves the content of a file. | `cat` / `type` |

---

## 🖥️ System & Resource Management

| Cmdlet | Description |
| :--- | :--- |
| `Get-ComputerInfo` | Retrieves detailed system and operating system configuration data. |
| `Get-LocalUser` | Lists all the local user accounts present on the system. |
| `Get-Process` | Provides a detailed view of all currently running processes. |
| `Get-Service` | Retrieves information about the status of services on the machine. |
| `Find-Module` | Searches online repositories for modules matching specific criteria. |

---

## 🌐 Networking & Remote Execution

| Cmdlet | Description |
| :--- | :--- |
| `Get-NetIPConfiguration` | Provides detailed information about network interface configurations. |
| `Get-NetIPAddress` | Retrieves details regarding all assigned IP addresses on the system. |
| `Invoke-Command` | Executes commands on local or remote systems. |
