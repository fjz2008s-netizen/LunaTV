import { NextResponse } from 'next/server';

// 这里就是你存放接口的地方，你可以按照格式添加多个
const HARDCODED_SOURCES = [
  {
  "cache_time": 7200,
  "api_site": {
    "heimuer": {
      "api": "https://json.heimuer.xyz/api.php/provide/vod",
      "name": "黑木耳",
      "detail": "https://heimuer.tv"
    },
    "ruyi": {
      "api": "https://cj.rycjapi.com/api.php/provide/vod",
      "name": "如意资源"
    },
    "dyttzy": {
      "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
      "name": "电影天堂资源",
      "detail": "http://caiji.dyttzyapi.com"
    },
    "bfzy": {
      "api": "https://bfzyapi.com/api.php/provide/vod",
      "name": "暴风资源"
    },
    "tyyszy": {
      "api": "https://tyyszy.com/api.php/provide/vod",
      "name": "天涯资源"
    },
    "ffzy": {
      "api": "http://ffzy5.tv/api.php/provide/vod",
      "name": "非凡影视",
      "detail": "http://ffzy5.tv"
    },
    "zy360": {
      "api": "https://360zy.com/api.php/provide/vod",
      "name": "360资源"
    },
    "iqiyi": {
      "api": "https://www.iqiyizyapi.com/api.php/provide/vod",
      "name": "iqiyi资源"
    },
    "wolong": {
      "api": "https://wolongzyw.com/api.php/provide/vod",
      "name": "卧龙资源"
    },
    "jisu": {
      "api": "https://jszyapi.com/api.php/provide/vod",
      "name": "极速资源",
      "detail": "https://jszyapi.com"
    },
    "dbzy": {
      "api": "https://dbzy.tv/api.php/provide/vod",
      "name": "豆瓣资源"
    },
    "mozhua": {
      "api": "https://mozhuazy.com/api.php/provide/vod",
      "name": "魔爪资源"
    },
    "mdzy": {
      "api": "https://www.mdzyapi.com/api.php/provide/vod",
      "name": "魔都资源"
    },
    "zuid": {
      "api": "https://api.zuidapi.com/api.php/provide/vod",
      "name": "最大资源"
    },
    "yinghua": {
      "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
      "name": "樱花资源"
    },
    "wujin": {
      "api": "https://api.wujinapi.me/api.php/provide/vod",
      "name": "无尽资源"
    },
    "wwzy": {
      "api": "https://wwzy.tv/api.php/provide/vod",
      "name": "旺旺短剧"
    },
    "ikun": {
      "api": "https://ikunzyapi.com/api.php/provide/vod",
      "name": "iKun资源"
    }
  }
  }
];

// 获取接口列表的逻辑
export async function GET() {
  // 直接返回上面定义的数组，彻底绕过 KV 存储
  return NextResponse.json(HARDCODED_SOURCES);
}

// 屏蔽写入逻辑，防止因为没有 KV 导致后台添加操作报错
export async function POST() {
  return NextResponse.json(
    { success: false, message: "当前模式下已禁用动态添加，请直接修改代码文件" },
    { status: 403 }
  );
}

// 屏蔽删除逻辑
export async function DELETE() {
  return NextResponse.json(
    { success: false, message: "当前模式下不可删除" },
    { status: 403 }
  );
}
