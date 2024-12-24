import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blog-posts';
import { Reveal } from './ui/reveal';
import { motion, useScroll } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, Share2, Check, Copy, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import ReactMarkdown from 'react-markdown';
import { CustomCursor } from './ui/cursor';
import { useEffect, useState } from 'react';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { toast } from "./ui/toast";

export function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);
  const { scrollYProgress } = useScroll();
  const [isShared, setIsShared] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shareUrl = window.location.href;
  const shareTitle = post?.title || 'Blog Post';
  const shareText = post?.excerpt || '';

  const handleShare = async (platform?: string) => {
    try {
      if (platform) {
        let shareLink = '';
        switch (platform) {
          case 'twitter':
            shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
            break;
          case 'facebook':
            shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
            break;
          case 'linkedin':
            shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
            break;
        }
        window.open(shareLink, '_blank', 'noopener,noreferrer');
        return;
      }

      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        toast.success("Shared successfully!");
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setIsShared(true);
        setTimeout(() => setIsShared(false), 2000);
        toast.success("Link copied to clipboard!");
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        toast.error("Could not share the article");
      }
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Post not found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/90 backdrop-blur-sm 
                text-primary-foreground text-sm mb-8 border border-white/10"
            >
              {post.category}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-serif mb-8 font-medium leading-tight"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/80"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm 
                  flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">{post.author.name}</p>
                  <p className="text-sm text-white/60">{post.author.role}</p>
                </div>
              </div>

              <div className="w-px h-8 bg-white/20" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm 
                  flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">Published</p>
                  <p className="text-sm text-white/60">{post.date}</p>
                </div>
              </div>

              <div className="w-px h-8 bg-white/20" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm 
                  flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">Read Time</p>
                  <p className="text-sm text-white/60">{post.readTime}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="w-px h-8 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/60 text-sm"
          >
            Scroll to read
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="relative bg-background">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          {/* Share Button */}
          <div className="sticky top-8 float-right ml-8 hidden lg:block z-50">
            <Popover>
              <PopoverTrigger asChild>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="w-12 h-12 rounded-full bg-primary/5 border border-primary/10 
                    flex items-center justify-center hover:bg-primary/10 transition-colors
                    group shadow-lg hover:shadow-xl hover:scale-105 duration-300"
                >
                  <Share2 className="w-5 h-5 text-primary/70 group-hover:text-primary" />
                </motion.button>
              </PopoverTrigger>
              <PopoverContent className="w-56" align="end" sideOffset={8}>
                <div className="space-y-2">
                  <h4 className="font-medium mb-2">Share this article</h4>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:bg-primary/5"
                      onClick={() => handleShare('twitter')}
                    >
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:bg-primary/5"
                      onClick={() => handleShare('facebook')}
                    >
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:bg-primary/5"
                      onClick={() => handleShare('linkedin')}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <hr className="my-2 border-border" />
                    <Button
                      variant="ghost"
                      className="w-full justify-start hover:bg-primary/5"
                      onClick={() => handleShare()}
                    >
                      {isShared ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy link
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <Reveal>
            <article className="prose prose-lg dark:prose-invert max-w-none 
              prose-headings:font-serif prose-headings:font-medium
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-8
              prose-li:text-muted-foreground prose-li:leading-relaxed
              prose-li:mb-2 prose-ul:mb-8 prose-ol:mb-8
              prose-strong:text-foreground prose-strong:font-medium
              prose-blockquote:border-l-4 prose-blockquote:border-primary/60
              prose-blockquote:bg-primary/5 
              prose-blockquote:py-3 prose-blockquote:px-8 prose-blockquote:rounded-r-lg
              prose-blockquote:not-italic prose-blockquote:font-normal
              prose-blockquote:mb-8 prose-blockquote:text-foreground/80
              prose-img:rounded-xl prose-img:shadow-xl prose-img:my-12
              [&>*:first-child]:mt-0
              selection:bg-primary/20 selection:text-foreground
              [&>hr]:border-border [&>hr]:my-12
              [&>table]:border-collapse [&>table]:w-full
              [&>table>thead>tr>th]:text-foreground [&>table>thead>tr>th]:font-medium
              [&>table>thead>tr>th]:p-4 [&>table>thead>tr>th]:border-b [&>table>thead>tr>th]:border-border
              [&>table>tbody>tr>td]:p-4 [&>table>tbody>tr>td]:border-b [&>table>tbody>tr>td]:border-border/50
              [&>table>tbody>tr>td]:text-muted-foreground
              [&>pre]:bg-secondary/50 [&>pre]:border [&>pre]:border-border/50
              [&>pre]:rounded-lg [&>pre]:p-6 [&>pre]:shadow-lg
              [&>code]:text-primary [&>code]:bg-primary/5 [&>code]:px-1.5 [&>code]:py-0.5 
              [&>code]:rounded-md [&>code]:text-sm [&>code]:font-normal">
              <ReactMarkdown 
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                components={{
                  h2: ({node, ...props}) => <h2 className="scroll-m-20" {...props} />,
                  h3: ({node, ...props}) => <h3 className="scroll-m-20" {...props} />,
                  a: ({node, ...props}) => <a className="no-underline hover:underline" {...props} />
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>
          </Reveal>

          {/* Related Articles */}
          <div className="mt-20 pt-12 border-t border-border">
            <h2 className="font-serif text-2xl mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                >
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={relatedPost.coverImage} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-sm rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Author Section - Simplified */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center 
                justify-center text-xl font-serif text-secondary-foreground
                shadow-lg border border-primary/10">
                {post.author.name[0]}
              </div>
              <div>
                <p className="font-serif text-lg">Written by {post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.role}</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="group hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%"
        }}
      />
    </div>
  );
} 