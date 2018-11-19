---


---

<h1 id="bot-builder-개발-서버-설정">Bot Builder 개발 서버 설정</h1>
<h3 id="목차">목차</h3>
<ol>
<li>bot-web<br>
1-1. redis 4.0 설치 및 설정<br>
1-2. nodejs v8.12.0 &amp; npm 설치<br>
1-3. docker-ce (latest) 설치 및 이슈</li>
<li>bot-db<br>
2-1. mariadb 10.3 설치 및 설정<br>
2-2. mongodb 4.0 (latest) 설치</li>
<li>현재 계정 설정<br>
3-1. redis<br>
3-2. mariadb</li>
</ol>
<h2 id="bot-web">1. bot-web</h2>
<h3 id="redis-4.0-설치-및-설정">1-1. redis 4.0 설치 및 설정</h3>
<ul>
<li>설치하기</li>
</ul>
<blockquote>
<p><a href="https://medium.com/@jonbaldie/how-to-install-redis-4-x-manually-on-an-older-linux-kernel-b18133df0fd3">https://medium.com/@jonbaldie/how-to-install-redis-4-x-manually-on-an-older-linux-kernel-b18133df0fd3</a></p>
</blockquote>
<ul>
<li>설정</li>
</ul>
<blockquote>
<p><a href="https://redis.io/topics/security">https://redis.io/topics/security</a><br>
bind ${SERVER_IP}<br>
port 6379<br>
dir /var/lib/redis<br>
requirepass ${REDIS_PASSWD}<br>
masterauth ${REDIS_PASSWD}</p>
</blockquote>
<h3 id="nodejs-v8.12.0--npm-설치">1-2. nodejs v8.12.0 &amp; npm 설치</h3>
<blockquote>
<p><a href="https://www.rosehosting.com/blog/how-to-install-node-js-and-npm-on-centos-7/">https://www.rosehosting.com/blog/how-to-install-node-js-and-npm-on-centos-7/</a></p>
</blockquote>
<h3 id="docker-ce-latest-설치-및-이슈">1-3. docker-ce (latest) 설치 및 이슈</h3>
<ul>
<li>설치</li>
</ul>
<blockquote>
<p><a href="https://www.vultr.com/docs/installing-docker-ce-on-centos-7">https://www.vultr.com/docs/installing-docker-ce-on-centos-7</a></p>
</blockquote>
<ul>
<li>이슈
<ul>
<li>Package: 3:docker-ce-18.09.0-3.el7.x86_64 (docker-ce-stable)<br>
Requires: container-selinux &gt;= 2.9</li>
</ul>
<blockquote>
<p>sudo yum install -y <a href="http://mirror.centos.org/centos/7/extras/x86_64/Packages/container-selinux-2.68-1.el7.noarch.rpm">http://mirror.centos.org/centos/7/extras/x86_64/Packages/container-selinux-2.68-1.el7.noarch.rpm</a></p>
</blockquote>
</li>
</ul>
<h2 id="bot-db">2. bot-db</h2>
<h3 id="mariadb-10.3-설치-및-설정">2-1. mariadb 10.3 설치 및 설정</h3>
<ul>
<li>설치</li>
</ul>
<blockquote>
<p><a href="https://tecadmin.net/install-mariadb-10-centos-redhat/">https://tecadmin.net/install-mariadb-10-centos-redhat/</a></p>
</blockquote>
<ul>
<li>설정</li>
</ul>
<blockquote>
<p><a href="http://sehoonoverflow.tistory.com/6">http://sehoonoverflow.tistory.com/6</a><br>
vi /etc/my.cnf.d/server.cnf<br>
bind-address=${SERVER_IP}</p>
</blockquote>
<h3 id="mongodb-4.0-latest-설치">2-2. mongodb 4.0 (latest) 설치</h3>
<ul>
<li>설치</li>
</ul>
<blockquote>
<p><a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/">https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/</a></p>
</blockquote>
<h2 id="현재-계정-설정">3. 현재 계정 설정</h2>
<h3 id="redis">3-1. redis</h3>
<blockquote>
<p>password: test123$</p>
</blockquote>
<h3 id="mariadb">3-2. mariadb</h3>
<blockquote>
<p>user: <a href="mailto:admin@10.131.7.162">admin@10.131.7.162</a><br>
password: test123$<br>
root: root@localhost<br>
root_password: test123$</p>
</blockquote>

