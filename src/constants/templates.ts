export const templates = [
	{
		id: "blank",
		label: "Blank Document",
		imageUrl: "/blank-document.svg",
	},
	{
		id: "software-proposal",
		label: "Software development proposal",
		imageUrl: "/software-proposal.svg",
		initialContent: `
			<div>
				<h1>Software Name</h1>
				<p>09.04.20XX</p>
				<p>Your Name</p>
				<p>Your Company</p>
				<p>123 Your Street</p>
				<p>Your City, ST 12345</p>
			</div>
		`,
	},
	{
		id: "project-proposal",
		label: "Project proposal",
		imageUrl: "/project-proposal.svg",
		initialContent: `
			<div>
				<h1>Project Name</h1>
				<p>09.04.20XX</p>
				<p>Your Name</p>
				<p>Your Company</p>
				<p>123 Your Street</p>
				<p>Your City, ST 12345</p>
			</div>
		`,
	},
	{
		id: "business-letter",
		label: "Business letter",
		imageUrl: "/business-letter.svg",
		initialContent: `
			<div>
				<h1>SOFTWARE DEVELOPMENT PROPOSAL</h1>
				<p>PREPARED FOR</p>
				<p>Client's name</p>
				<p>Client's company name</p>
				<p>PREPARED BY</p>
				<p>Your name</p>
				<p>Your company name</p>
			</div>
		`,
	},
	{
		id: "resume",
		label: "Resume",
		imageUrl: "/resume.svg",
		initialContent: `
			<div>
				<h1>Hello,</h1>
				<h1>I'm Your Name</h1>
				<p>123 YOUR STREET</p>
				<p>YOUR CITY, ST 12345</p>
				<p>TEL: 555.555.5555</p>
				<p>YOU.REPLY@EXAMPLE.COM</p>
			</div>
			<div>
				<h2>Skills</h2>
				<p>Skills description here. Core competencies and key abilities.</p>
			</div>
			<div>
				<h2>Experience</h2>
				<p>MONTH 20XX - MONTH 20YY - Job Title</p>
				<p>Company Name, Location—Job Title</p>
				<ul>
					<li>Key responsibility or achievement</li>
				</ul>
			</div>
			<div>
				<h2>Education</h2>
				<p>College Name, Location — Degree</p>
			</div>
			<div>
				<h2>Awards</h2>
				<p>Notable achievement or recognition.</p>
			</div>
		`,
	},
	{
		id: "cover-letter",
		label: "Cover letter",
		imageUrl: "/cover-letter.svg",
		initialContent: `
			<div>
				<h1>Your Name</h1>
			</div>
			<div>
				<p>123 Your Street</p>
				<p>Your City, ST 12345</p>
				<p>phone: (555) 555-5555</p>
				<p>email: your.email@example.com</p>
			</div>
			<div>September 24, 2024</div>
			<div>
				<p>Hiring Manager</p>
				<p>Company Name</p>
				<p>123 Company Street</p>
				<p>Company City, ST 12345</p>
			</div>
			<div>
				<p>Dear Hiring Manager,</p>
				<hr>
			</div>
			<div>
				<p>Sincerely,</p>
				<p>Your Name</p>
			</div>
		`,
	},
	{
		id: "letter",
		label: "Letter",
		imageUrl: "/letter.svg",
		initialContent: `
			<div>
				<h1>YOUR COMPANY</h1>
				<ul>
					<li>123 YOUR STREET</li>
					<li>YOUR CITY, ST 12345</li>
					<li>(123) 456-7890</li>
					<li>MYEMAIL@EXAMPLE.COM</li>
				</ul>
			</div>
			<div>September 24, 20XX</div>
			<div>
				<p>Dear Ms. Reader,</p>
				<p>Thank you for your interest in our services.</p>
				<p>We are pleased to provide you with our latest product offerings.</p>
				<p>Our team has extensive experience in business solutions.</p>
				<p>We look forward to discussing this opportunity further.</p>
				<p>Please contact us if you have any questions.</p>
			</div>
			<div>
				<p>Sincerely,</p>
				<p>YOUR NAME</p>
			</div>
		`,
	},
];
