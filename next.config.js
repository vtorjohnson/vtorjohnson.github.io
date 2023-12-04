/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
  
   // Add basePath
    basePath: '/github-pages',
    images: {
        loader: 'custom',
        loaderFile: './my-loader.ts',
    },
  
}


module.exports = nextConfig
