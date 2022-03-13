import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 mb-2 flex justify-center">
        <div className="mr-2 flex text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
      <div className="mb-2 flex justify-center">
        <div>{`🚀 See you, space cowboy! ✨`}</div>
      </div>
    </footer>
  )
}
