ls
cd /
ls
apache -v
apache2 -v
sudo apt update
sudo apt install apache2
sudo ufw app list
sudo ufw allow 'Apache'
sudo ufw status
sudo ufw allow 'Apache'
sudo ufw status
sudo systemctl status apache2
sudo ufw enable
sudo ufw default deny
sudo iptables -L
sudo ufw allow 'Apache'
sudo ufw status
hostname -I
sudo mkdir /var/www/speedforce.app
sudo chown -R $USER:$USER /var/www/speedforce.app
sudo chmod -R 755 /var/www/speedforce.app
sudo nano /var/www/speedforce.app/index.html
sudo nano /etc/apache2/sites-available/speedforce.app.conf
sudo a2ensite speedforce.app.conf
sudo a2dissite 000-default.conf
sudo apache2ctl configtest
systemctl reload apache2
systemctl status apache2.service
sudo systemctl restart apache2
sudo nano /etc/apache2/sites-available/speedforce.app.conf
sudo systemctl restart apache2
sudo apache2ctl configtest
sudo systemctl restart apache2
sudo add-apt-repository ppa:certbot/certbot
sudo apt install python-certbot-apache
sudo apt install python3-certbot-apache
sudo nano /etc/apache2/sites-available/speedforce.app.conf
sudo ufw allow 'Apache Full'
sudo ufw delete allow 'Apache'
sudo ufw status
openssh
sudo apt install openssl
sudo ufw status
sudo systemctl status ssh
sudo ufw allow ssh
sudo ufw allow 'Apache Full'
sudo ufw status
sudo certbot --apache -d speedforce.app -d www.speedforce.app
sudo a2enmod proxy_connect
systemctl restart apache2
apachectl -S 
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 22
sudo ufw enable
sudo ufw allow in on eth0 to any port 80
sudo ufw status numbered
sudo ufw status verbose
sudo ufw disable
sudo reboot
sudo ufw enable
sudo nano /etc/apache2/sites-available/speedforce.app.conf
sudo ufw disable
sudo reboot
sudo certbot --apache -d speedforce.app -d www.speedforce.app
sudo nano /etc/apache2/sites-available/speedforce.app.conf
sudo ufw enable
ls
cd /
ls
cd /var/www
ls
cd speedforce.app
ls
git status
ls
cd /var/www/speedforce.app/
git clone https://github.com/nikitaSydorenko/testSsh.git
ls
cd /var/www/speedforce.app/testSsh/
npm start
apt install npm
npm start
ls
npm run build
node -v
<div class="grid fw-wrap pb8 mb16 bb bc-black-075">
npm install -g create-react-app
npm run build
npm install
npm start
cd /etc/apache2/sites-enabled/
ls
cat speedforce.app.conf 
cd /var/www/speedforce.app/
ls
nano index.html
ls
cd /
ls
cd var/www/speedforce.app/
ls
cd testSsh/
ls
npm start
npm run build
npm install -g serve
serve -s build
ls
cd build 
nano index.html
ls
cd /etc/apache2/sites-available/
ls
nano speedforce.app.conf 
systemctl
systemctl restart apache2
cd /var/www/speedforce.app/
ls -l
cd testSsh/build/
cat index.html 
cat index1.html 
cd ..
ls -l
cd /etc/apache2/sites-available/
ls -l
nano 000-default.conf 
nano speedforce.app
nano speedforce.app.conf 
systemctl restart apache2
cd /var/www/html/
ls -l
nano index.html 
cd //
cd /var/www/speedforce.app/
ls -l
nano index.html 
ls -a
cd testSsh/build/
ls -a
cd /etc/apache2/sites-available/
nano speedforce.app.conf 
ls -l
cd ..
cd sites-available/
ls -l
cd ..
cd sites-enabled/
ls -la
nano speedforce.app.conf 
cd ..
cd sites-available/
ls -l
nano speedforce.app.conf 
systemctl restart apache2
systemctl status apache2
nano 000-default.conf 
cd /var/www/speedforce.app/
ls -l
mv index.html index1.html
ls -l
cd /etc/apache2/
ls -l
nano apache2.conf 
ls -l
cd sites-available/
ls -l
nano speedforce.app-le-ssl.conf 
systemctl restart apache2.service 
cd /var/www/speedforce.app/testSsh/build/
ls -l
rm -rf index.html 
mv index1.html index.html
cd /var/www/speedforce.app/testSsh/
git pull origin master
npm run build 
sudo a2ensite kirill.speedforce.app.conf
sudo systemctl restart apache2
sudo cerbot
sudo certbot
sudo systemctl restart apache2
