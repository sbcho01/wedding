/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async rewrites() {
        return rewriteInfo()
    },
}

const rewriteInfo = () => {
    return [
        // 홈
        { source: '/', destination: '/home' },
    ]
}

module.exports = nextConfig
