
export interface IBlogBase {
  id: number;
  title: string;
  publishedDate: string;
  views: number;
  authorName: string;
  regionName: string;
  content?: string;
  editedDate?: string;
}

// Интерфейс для списка блогов
export interface IBlog extends IBlogBase {
  comments: number;
}


export interface IBlogDetails extends IBlogBase {
  isPublishedByCurrentUser: boolean;
  content: string;
  comments: IBlogComment[];
}

export interface BlogItemProps {
  blogItem: IBlog;
}

export interface IBlogComment {
  id: number;
  comment: string;
  commentDate: string;
  authorName: string;
  isPublishedByCurrentUser: boolean;
}

export interface IBlogCommentRequest {
  blogId: number;
  comment: string;
}

export interface IBlogsResponse {
  pageCount: number;
  currentPage: number;
  blogs: IBlog[];
}

export interface IFetchBlogsParams {
  page: number;
  regionName?: string;
}

export interface IAddBlogRequest {
  title: string;
  content: string;
  region: number;
}

export interface IAddBlogRequestDTO {
  title: string;
  content: string;
  region: number;
}

export interface IUpdateBlogRequest {
  id: number;
  blogAddRequestDTO: IAddBlogRequestDTO;
}

export interface IRegionDTO {
  id: number;
  regionName: string;
}

export interface IModal {
  title: string;
  content: string;
  onClose: () => void;
}








