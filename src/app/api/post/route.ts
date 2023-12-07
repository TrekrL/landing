import { NextRequest } from 'next/server';
import { zfd } from 'zod-form-data';
import nodemailer from 'nodemailer';

const schema = zfd.formData({
	message: zfd.text(),
	email: zfd.text(),
});

export async function POST(request: NextRequest) {
	const { message, email } = schema.parse(await request.formData());
	const user = process.env.BD_EMAIL;
	const pass = process.env.BD_PASSWORD;

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: user,
			pass: pass,
		},
	});

	try {
		const mail = await transporter.sendMail({
			from: user,
			to: 'n.chernonog@intetics.com, boris@intetics.com',
			subject: 'Feedback request from TREKR',
			text: `Hello! You have received a feedback request from ${email}\n
			Message: ${message}
			`,
		});

		return Response.json('Success', { status: 200 });
	} catch (err) {
		return Response.json('Error', { status: 500 });
	}
}
