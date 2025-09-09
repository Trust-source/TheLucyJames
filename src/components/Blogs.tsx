import { useState } from "react";

export default function Blog() {
  // Static blog posts
  const blogs = [
    {
      id: 1,
      title: "The Future of Innovation",
      content:
        "Innovation is reshaping industries across the globe. From AI to blockchain, the opportunities are endless. In this post, we explore how these technologies are transforming businesses in detail...",
      author: "Lucy James Abagi",
      created_at: "2025-09-01T10:00:00Z",
    },
    {
      id: 2,
      title: "Leadership in Public Policy",
      content:
        "Leadership is more than decision-making; it’s about inspiring change and empowering communities. In this blog, we discuss real-world examples and strategies leaders can use to make meaningful impacts...",
      author: "Lucy James Abagi",
      created_at: "2025-08-20T14:30:00Z",
    },
    {
      id: 3,
      title: "Serial Investing: Lessons Learned",
      content:
        "Investing is not just about capital — it’s about vision, patience, and resilience. Here, I share lessons from my journey as a serial investor, including risks, rewards, and mindset shifts...",
      author: "Lucy James Abagi",
      created_at: "2025-08-10T09:15:00Z",
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState<any | null>(null);

  return (
    <section
      id="blog"
      className="py-16 bg-gray-50 dark:bg-gray-900 px-6 sm:px-12 scroll-mt-[50px]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  By {blog.author} •{" "}
                  {new Date(blog.created_at).toLocaleDateString()}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {blog.content.slice(0, 120)}...
                </p>
                <button
                  className="mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
                  onClick={() => setSelectedBlog(blog)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div
            className="
              bg-white dark:bg-gray-800 
              p-6 rounded-xl 
              w-full max-w-2xl relative 
              h-[80vh] md:h-auto md:max-h-[90vh] 
              overflow-y-auto
            "
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={() => setSelectedBlog(null)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedBlog.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              By {selectedBlog.author} •{" "}
              {new Date(selectedBlog.created_at).toLocaleDateString()}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {selectedBlog.content}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
