export interface ProjectItem {
	id?: number; // 唯一标识符
	title: string
	title_en?: string
	description?: string
	date?: string		//发布日期
	detail?: string //详细页路径
  	url?: string  //上线链接
	tags?: string[]
	cover?: string[]
}
export const projectItems: ProjectItem[] = [];

