export const projects = [
	{
		slug: 'rover',
		title: 'Rover',
		category: 'Robotics / Field notes',
		year: 'Project 01',
		index: '01',
		image: '/hacking/rover.jpg',
		imageMode: 'light',
		className: 'project-one',
		intro: 'A field project where hardware, exploration and problem solving meet.',
		body: [
			'Rover is one of the visual traces from my work around hardware and experimental systems. This page is designed as a project journal: context, iterations, failures and what finally worked.',
			'It can grow into a full case study with technical notes, build photographs and the story behind the machine.',
		],
	},
	{
		slug: 'pal-capture-counter',
		title: 'Pal Capture Counter',
		category: 'Tool / Experiment',
		year: 'Project 02',
		index: '02',
		image: '/hacking/palcapturecounter.png',
		imageMode: 'light',
		className: 'project-two',
		intro: 'A small tool built from curiosity, observation and a need for better information.',
		body: [
			'Pal Capture Counter is presented here as a compact experiment: a useful idea turned into a working interface and a repeatable process.',
			'The blog entry can later include the original problem, the implementation choices and the lessons learned while making it.',
		],
	},
	{
		slug: 'x-ray',
		title: 'X-Ray',
		category: 'Visual research',
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
		intro: 'A space for turning technical discoveries into knowledge that can move between people.',
		body: [
			'WikiJump connects documentation, community and technical curiosity. It belongs to the part of my work that is about making knowledge easier to share.',
			'The entry can become a proper project log with the idea, the people involved and the different directions it took over time.',
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
		description: 'A team space built around challenges, collaboration and the habit of sharing what we learn.',
	},
	{
		title: 'MNT AIN',
		type: 'CTF team',
		image: '/hacking/mnt_ain_logo.png',
		imageMode: 'dark',
		description: 'A collective where technical curiosity meets a strong visual identity and a hands-on mindset.',
	},
	{
		title: 'polygl0ts',
		type: 'CTF team',
		image: '/hacking/polygl0ts.png',
		imageMode: 'dark',
		description: 'Different backgrounds, one shared playground: breaking down problems and building the answer together.',
	},
	{
		title: 'Hack The Box',
		type: 'Training ground',
		image: '/hacking/htb.png',
		imageMode: 'light',
		description: 'A practical lab for sharpening methodology, patience and the instinct to look one layer deeper.',
	},
] as const;

export type Project = (typeof projects)[number];
export type CtfTeam = (typeof ctfTeams)[number];
