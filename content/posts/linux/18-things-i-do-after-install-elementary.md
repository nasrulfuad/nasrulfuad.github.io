---
title: 18 Things I Do After Install Elementary
summary: "In this article is not about how you setup your Operating System, but it's about how I setup my operating system as a software engineer, so after
  you read this article I hope you have a reference to setup your own"
date: 2021-11-10
weight: 1
categories: ["tutorial", "elementary", "linux"]
author: "Nasrul Fuad"
cover:
  image: "images/01.svg"
  alt: cover
  caption: 18 Things I Do After Install Elementary
---

### Intro ⚡

As a software engineer, sometimes when I just re-install my Operating System, I need to setup my development for work,
So in this article I will show you how I setup my elementary OS for development 😄

<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 600 600"><g><polyline points="300.19,299.96 0.49,364.64" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="297.51,288.26 236.28,0.09" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="302.57,311.72 365.64,599.49" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="290.53,314.74 107.24,599.91" fill="none" stroke="#fff" stroke-width="1"></polyline><polyline points="285.29,290.48 0.2,105.95" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="274.06,317.93 0.15,507.29" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="268.98,294.36 0.38,245.55" fill="none" stroke-width="1" stroke="#fff"></polyline><polyline points="243.01,324.67 0.18,429.79" fill="none" stroke="#fff" stroke-width="1"></polyline><polyline points="311.56,295.02 599.76,170.87" fill="none" stroke="#fff" stroke-width="1"></polyline><polyline points="308.75,283.08 455.1,0.08" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="282,273.84 93.92,0.49" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="304.82,264.13 340.33,0.11" fill="none" stroke-width="1" stroke="#fff"></polyline><polyline points="275.63,243.3 171.13,0.21" fill="none" stroke="#fff" stroke-width="1"></polyline><polyline points="313.84,307.15 599.54,454.8" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="317.28,322.52 530.29,599.99" fill="none" stroke="#fff" stroke-width="1"></polyline><polyline points="294.39,331.26 246.17,599.96" fill="none" stroke-width="1" stroke="#fff"></polyline><polyline points="323.26,350.06 439.29,599.83" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="257.42,344.04 10.11,599.83" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="277.37,357.54 182.07,599.88" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="243.05,277.44 0.39,181.33" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="255.65,256.91 0.04,8.55" fill="none" stroke="#fff" stroke-width="1"></polyline><polyline points="328.41,300.97 599.46,310.2" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="326.48,275.34 599.6,21.01" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="354.26,289.75 599.52,243.44" fill="none" stroke="#fff" stroke-width="1"></polyline><polyline points="353.43,313.98 599.55,378.38" fill="none" stroke-width="1" stroke="#fff"></polyline><polyline points="342.34,335.38 599.69,550.47" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="359.91,261.12 599.99,105.33" fill="none" stroke="#1e1d20" stroke-width="1"></polyline><polyline points="342.75,243.6 527.24,0.22" fill="none" stroke="#fff" stroke-width="1"></polyline></g></svg>

---

### 1. Update and upgrade your system

After you install elementary, the default system is not up to date with all the packages and releases, so here why you need to update your system to 
the latest version.

```bash
sudo apt update &&
sudo apt upgrade &&
sudo apt dist-upgrade
```

---

### 2. Install GDebi

Gdebi is a powerfull software utility for Debian-based and therefore ubuntu based distros which allows users to install `.deb` package using a graphical interface.

```bash
sudo apt install gdebi
```

---

### 3. Install Multimedia Codecs

Do you like watching a movie or listening music?

Here is multimedia codecs for you if you want an unrestrictive experience while enjoying your movies or music.

```bash
sudo apt install ubuntu-restricted-extras libavcodec-extra libdvd-pkg
```

---

### 4. Install Drivers

Windows needs manufacturer-provided hardware drivers before your hardware will work. Linux and other operating systems also need hardware drivers before hardware 
will work — but hardware drivers are handled differently on Linux. ... You may sometimes need to install drivers, but some hardware may just not work at all.

```bash
sudo ubuntu-drivers autoinstall
```

---

### 5. Install Elementary Tweak

Do you like customize your operating system? in elementary we can use elementary-tweak for customize.

```bash
sudo apt install software-properties-common &&
sudo add-apt-repository ppa:philip.scott/elementary-tweaks &&
sudo apt update &&
sudo apt install elementary-tweaks
```

---

### 6. Install ULauncher

Do you want to fast to access your applications without touching your touchpad or mouse?
here is ULauncher was created, Ulauncher is a fast application launcher with extension and shortcut support to help you quickly access application
and files in Linux.

```bash
sudo add-apt-repository ppa:agornostal/ulauncher &&
sudo apt update &&
sudo apt install ulauncher
```

Or if you want to download the `.deb` file, just go to [ULauncher](https://ulauncher.io) and then install it from your terminal.

```bash
sudo dpkg -i ulaucher-filename.deb
```

---

### 7. Improve Laptop Battery Life

To reduce background tasks in your system, I need to install `tlp-rdw`.

```bash
sudo apt install tlp tlp-rdw &&
sudo tlp start
```

---

### 8. Install curl, git and wget

`curl` is used in command lines or scripts to transfer data.

`git` is a version control system designed to handle everything from small to very large projects with speed and efficiency.

`git` is a package for retrieving files using HTTP, HTTPS, FTP and FTPS, the most widely used Internet protocols.

```bash
sudo apt install curl git wget
```

---

### 9. Install NodeJS

NodeJS (Node) is a development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent
connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.

```bash
# when this article created, the latest version of node is 16,
# So make sure you install the latest version

curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

### 10. Install Visual Studio Code

Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.
Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows.

Download the `.deb` file [here](https://code.visualstudio.com/docs/?dv=linux64_deb) and then install it via terminal.

```bash
sudo dkpg -i vscode-filename.deb
```

---

### 11. Install Docker and Docker Compose

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure
so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage
of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running
it in production. read more [here](https://docs.docker.com/get-started/overview/).

Docker Compose is a tool that was developed to help define and share multi-container applications. With Compose, you can create a YAML file to define
the services and with a single command, can spin everything up or tear it all down.

> Install packages to allow apt to use a repository over HTTPS

```bash
sudo apt-get install ca-certificates gnupg lsb-release
```

> Add Docker’s official GPG key

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg |
sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

> Set up the stable repository

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

> Install Docker Engine

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

---

> Install Docker Compose

```bash
# To install a different version of Compose, substitute 1.29.2 with the version of Compose you want to use.
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

> Apply executable permissions to the binary

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

---

> Manage docker as a non root user

```bash
# Create the docker group
sudo groupadd docker
# Add your user to the docker group
sudo usermod -aG docker $USER
```

> Log out and log back in so that your group membership is re-evaluated

```bash
# Activate the changes to groups
newgrp docker
# Verify that you can run docker commands without sudo
docker run hello-world
```

---

### 12. Install Snapcraft

Snaps are app packages for desktop, cloud and IoT that are easy to install, secure, cross‐platform and dependency‐free.

```bash
sudo apt install snapd
```

---

### 13. Install Postman

Postman is a complete API development platform that helps you manage your APIs in every stage of development, from designing and testing,
to publishing API documentation and monitoring.

> Install postman via snap, make sure you have installed snapcraft

```bash
sudo snap install postman
```

---

### 14. Install Telegram

Telegram is a messaging app with a focus on speed and security, it's super-fast, simple and free. You can use Telegram on all your devices
at the same time — your messages sync seamlessly across any number of your phones, tablets or computers.

```bash
sudo add-apt-repository ppa:atareao/telegram &&
sudo apt update &&
sudo apt install telegram
```

---

### 15. Install VLC Media Player

VLC is multimedia player and framework that plays most multimedia files, and various streaming protocols.

```bash
sudo apt install vlc
```

---

### 16. Install Chromium and Firefox

I use 2 web browsers, firefox for work and chromium just for surfing, if you won't to install both just remove `firefox` or `chromium-browser`.

```bash
sudo apt-get install chromium-browser firefox
```

---

### 17. Remove some default apps

When I use elementary, I have change the apps like Epiphany Browser with Firefox or Chromium, plank with ULauncher.

> Remove epiphany-browser

```bash
sudo apt-get remove epiphany-browser &&
sudo apt-get purge epiphany-browser
```

> Remove plank

```bash
sudo apt remove plank &&
sudo apt-get purge plank
```

---

### 18. System Cleanup 🏁
After you remove some apps, the data maybe still in your disk, to remove it just :

```bash
# You can clean partial packages using a command
sudo apt-get autoclean &&
# You can auto cleanup apt-cache
sudo apt-get clean &&
# You can clean up of any unused dependencies
sudo apt-get autoremove
```
