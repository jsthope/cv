export const projects = [
	{
		slug: 'rover',
		title: 'ERC 2026',
		category: 'Robotics',
		year: 'Project 01',
		index: '01',
		image: '/hacking/rover.jpg',
		imageMode: 'light',
		className: 'project-one',
		repo: 'https://github.com/EPFLXplore/ERC_NAV',
		intro: "During 2026, I had the opportunity to join Xplore's navigation team and learn a great deal about robotics, localization, and autonomous systems.",
		body: [
			'My work focused on the navigation layer: estimating where the rover is from several imperfect sensors, then feeding that state into the motion and autonomy stack.',
			'The system combines LiDAR SLAM, VSLAM/VIO, wheel odometry and ArUco detections before handing a reliable pose to the rest of the rover.',
		],
		lidarVideo: {
			src: '/hacking/rover-lidar.mp4',
			poster: '/hacking/rover-lidar-poster.jpg',
			label: '01 / LiDAR-inertial SLAM',
		},
		vioVideo: {
			src: '/hacking/rover-navigation.mp4',
			poster: '/hacking/rover-navigation-poster.jpg',
			label: '02 / Visual-inertial SLAM',
		},
		lidarImages: [
			{
				src: '/hacking/rover-lidar-trajectory.png',
				alt: 'LiDAR SLAM visualization',
			},
			{
				src: '/hacking/rover-lidar-pointcloud.png',
				alt: 'LiDAR point cloud visualization',
			},
		],
		diagram: '/hacking/rover-stack.png',
	},
	{
		slug: 'pal-capture-counter',
		title: 'Pal Capture Counter',
		category: 'Tool / Experiment',
		homeMeta: '200k downloads',
		year: 'Project 02',
		index: '02',
		image: '/hacking/palcapturecounter.png',
		imageMode: 'light',
		className: 'project-two',
		intro: 'A Palword mod, developed by reverse engineering the game, written in Lua',
		body: [],
		externalUrl: 'https://www.nexusmods.com/palworld/mods/190',
		externalLabel: 'View the mod on Nexus Mods',
	},
	{
		slug: 'x-ray',
		title: 'X-Ray',
		category: 'JVM research',
		year: 'Project 03',
		index: '03',
		image: '/hacking/xray.png',
		imageMode: 'light',
		className: 'project-three',
		repo: 'https://github.com/jsthope/SimpleLunarXray',
		intro: 'Simple Lunar Xray: a technical study about looking below the surface of a game world.',
		body: [
		'Simple Lunar Xray is a Minecraft project built around runtime JVM class redefinition. It explores how rendering logic can be inspected and adapted from inside the client.',
			'The repository documents the bridge between native code and Java, the class inspection process and the small decisions behind the experiment.',
		],
	},
	{
		slug: 'wikijump',
		title: 'WikiJump',
		category: 'Community / Project',
		year: 'Project 04',
		index: '04',
		image: '/hacking/cropped-wikijump-l.png',
		imageMode: 'white',
		detailImageMode: 'light',
		className: 'project-four',
		intro: 'A modern open-source platform for the SCP Wiki ecosystem, built to replace Wikidot.',
		body: [
			'I joined the WikiJump development team and work across several parts of the project, mainly on the FTML parser, which converts the project\'s custom markup into safe HTML content.',
		],
		sourceLinks: [
			{ label: 'WikiJump repository', url: 'https://github.com/scpwiki/wikijump' },
			{ label: 'FTML parser repository', url: 'https://github.com/scpwiki/ftml' },
		],
	},
	{
		slug: 'capture-the-flag',
		title: 'Capture The Flag',
		category: 'CTF Career',
		year: 'Career archive',
		index: '05',
		image: '/hacking/ctf.gif',
		imageMode: 'white',
		detailImageMode: 'light',
		className: 'project-five',
		link: '/ctf-career',
		intro: 'A career archive built around teams, challenges and the people behind the flags.',
		body: [
			'This project links to the CTF Career archive, where the teams and communities behind my hacking journey are collected.',
		],
	},
] as const;

export const ctfTeams = [
	{
		title: '0rganizers',
		type: 'CTF team',
		image: '/hacking/0rganizers.png',
		imageMode: 'dark',
		description: 'A Swiss/UK CTF team built from members of polygl0ts, flagbot and secret.club, and consistently ranked among the best teams in the world on CTFtime.',
	},
	{
		title: 'MNT AIN',
		type: 'CTF team',
		image: '/hacking/mnt_ain_logo.png',
		imageMode: 'dark',
		description: 'Team /mnt/ain, also known as m0unt41n, brings together current and former Swiss Hacking Challenge finalists. I joined after placing first in the SHC qualifiers.',
	},
	{
		title: 'polygl0ts',
		type: 'CTF team',
		image: '/hacking/polygl0ts.png',
		imageMode: 'dark',
		description: 'EPFL\'s official CTF team, founded in 2018, competing in major events and organizing LakeCTF.',
	},
] as const;

export type Project = (typeof projects)[number];
export type CtfTeam = (typeof ctfTeams)[number];
