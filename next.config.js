console.log('Admin Emails:', process.env.ADMIN_EMAILS.split(',').join(', '));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
