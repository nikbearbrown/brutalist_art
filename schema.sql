-- =============================================================================
-- bearbrown.co — Full Neon PostgreSQL Schema
-- Run this in your Neon SQL Editor to set up a fresh database.
-- Safe to re-run: uses IF NOT EXISTS / IF NOT EXISTS throughout.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. TOOLS
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tools (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,
  description     TEXT,
  tool_type       TEXT DEFAULT 'link',          -- 'link' | 'artifact'
  claude_url      TEXT,                          -- external URL (link tools)
  chatgpt_url     TEXT,                          -- optional ChatGPT URL
  artifact_id     TEXT,                          -- Claude artifact UUID
  artifact_embed_code TEXT,                      -- raw iframe embed code
  tags            TEXT[],                        -- category tags
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE tools ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_read_tools') THEN
    CREATE POLICY "public_read_tools" ON tools FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'service_role_tools') THEN
    CREATE POLICY "service_role_tools" ON tools FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- ---------------------------------------------------------------------------
-- 2. BLOG POSTS
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS blog_posts (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT NOT NULL,
  subtitle        TEXT,
  slug            TEXT NOT NULL UNIQUE,
  byline          TEXT,
  cover_image     TEXT,
  content         TEXT NOT NULL,
  excerpt         TEXT,
  published       BOOLEAN DEFAULT false,
  published_at    TIMESTAMPTZ,
  tags            TEXT[] DEFAULT '{}',
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_read_blog') THEN
    CREATE POLICY "public_read_blog" ON blog_posts FOR SELECT USING (published = true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'service_role_blog') THEN
    CREATE POLICY "service_role_blog" ON blog_posts FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- ---------------------------------------------------------------------------
-- 3. VIDEOS
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS videos (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT NOT NULL,
  description     TEXT,
  youtube_id      TEXT NOT NULL,
  tags            TEXT[],
  pinned          BOOLEAN DEFAULT false,
  published       BOOLEAN DEFAULT true,
  published_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE videos ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_read_videos') THEN
    CREATE POLICY "public_read_videos" ON videos FOR SELECT USING (published = true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'service_role_videos') THEN
    CREATE POLICY "service_role_videos" ON videos FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- ---------------------------------------------------------------------------
-- 4. SUBSTACK SECTIONS
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS substack_sections (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            TEXT NOT NULL UNIQUE,
  title           TEXT NOT NULL,
  description     TEXT,
  substack_url    TEXT NOT NULL,
  article_count   INTEGER DEFAULT 0,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE substack_sections ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_read_sections') THEN
    CREATE POLICY "public_read_sections" ON substack_sections FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'service_role_sections') THEN
    CREATE POLICY "service_role_sections" ON substack_sections FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- ---------------------------------------------------------------------------
-- 5. SUBSTACK ARTICLES
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS substack_articles (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id      UUID NOT NULL REFERENCES substack_sections(id) ON DELETE CASCADE,
  slug            TEXT NOT NULL,
  title           TEXT NOT NULL,
  subtitle        TEXT,
  excerpt         TEXT,
  content         TEXT,
  original_url    TEXT,
  published_at    TIMESTAMPTZ,
  display_date    TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(section_id, slug)
);

ALTER TABLE substack_articles ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_read_articles') THEN
    CREATE POLICY "public_read_articles" ON substack_articles FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'service_role_articles') THEN
    CREATE POLICY "service_role_articles" ON substack_articles FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

-- ---------------------------------------------------------------------------
-- 6. INDEXES (for common query patterns)
-- ---------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_blog_posts_published
  ON blog_posts (published, published_at DESC);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug
  ON blog_posts (slug);

CREATE INDEX IF NOT EXISTS idx_videos_published
  ON videos (published, pinned DESC, published_at DESC);

CREATE INDEX IF NOT EXISTS idx_videos_youtube_id
  ON videos (youtube_id);

CREATE INDEX IF NOT EXISTS idx_tools_slug
  ON tools (slug);

CREATE INDEX IF NOT EXISTS idx_substack_articles_section
  ON substack_articles (section_id, published_at DESC);

CREATE INDEX IF NOT EXISTS idx_substack_sections_slug
  ON substack_sections (slug);

-- ---------------------------------------------------------------------------
-- Done. All 5 tables created with RLS policies and indexes.
-- ---------------------------------------------------------------------------
