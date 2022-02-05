# Leaderboards

Minecraft Leaderboards based on REST API

## Description

Leaderboards is an API that returns player statistics. Currently supported stats are points, number of kills and deaths. The API has been created to easily integrate statistics into our website. A minecraft plugin will be released soon.

## Getting Started

### Dependencies

* MySQL
* Node.js
* Yarn
* Nginx

### Preinstallation

* Create new database
* Create tables 
```

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(48) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `tokens` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(32) NOT NULL DEFAULT '',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `statistics` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) unsigned NOT NULL,
  `kills` int(11) NOT NULL DEFAULT 0,
  `deaths` int(11) NOT NULL DEFAULT 0,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
```

### Installing

* Clone this repository
* Go to repostiory folder and type yarn install
* Rename app/backend/config/default.js to production.js
* Configure app/backend/cofig/production.js
* Setup nginx as proxy server
* Start application by typing yarn start


## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
