# 🌐 Networking Essentials

A structured summary of core networking protocols, command-line diagnostic tools, and key application layer protocols encountered during TryHackMe (THM) rooms and hands-on labs.

---

## 🛰️ Network Addressing & Resolution

* **DHCP (Dynamic Host Configuration Protocol)** - Automatically assigns IP addresses, subnet masks, default gateways, and DNS settings to devices on a network.
* **ARP (Address Resolution Protocol)** - Resolves IPv4 addresses to physical MAC addresses on a local area network (LAN).

### Packet Capture Examples (ARP)

```bash
# Read and analyze ARP packets using tshark
tshark -r arp.pcapng -nn

# Read ARP packets using tcpdump with verbose output
tcpdump -r arp.pcapng -n -v
```

## Network Diagnostics & Error Reporting

* **ICMP (Internet Control Message Protocol)** - Used by network devices to send operational information and error messages (e.g., host unreachable).

### Diagnostic Tools

* **ping** - Checks host reachability and measures Round-Trip Time (RTT).

* **traceroute** - Traces the network path to a target host by incrementing TTL values.

## 🛜 Core Application Protocols

| Protocol | Default Port | Description |
| :--- | :---: | :--- |
| **DNS** | `53` | Translates domain names to IP addresses (and vice versa via PTR records). |
| **WHOIS** | `43` | Queries domain registration details, registrar info, and ownership. |
| **FTP** | `20`, `21` | **File Transfer Protocol** Transfers files between client and server. |
| **SMTP** | `25` | **Simple Mail Transfer Protocol** Sends and routes emails between servers. |
| **POP3** | `110` | **Post Office Protocol v3** Downloads emails to a single client. |
| **IMAP** | `143` | **Internet Message Access Protocol**  Synchronizes email across multiple devices. |
