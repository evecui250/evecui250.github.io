// 同域代理：国内部分网络连不上 supabase.co，经 Cloudflare 转发
const SB_URL = "https://mjsgcvuyousczqexxszs.supabase.co";
const SB_KEY = "sb_publishable_WEmGQIZnbWUMSXm9oKSWdQ_l7tDrIIE";
const ALLOW = new Set(["redeem_code","quiz_ping","admin_add_codes","admin_issue_code","admin_list","admin_rotate_shared","admin_set_note","admin_unissue"]);
export async function onRequestPost({ request, params }) {
  const fn = params.fn;
  if (!ALLOW.has(fn)) return new Response("not found", { status: 404 });
  const r = await fetch(`${SB_URL}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "apikey": SB_KEY },
    body: await request.text(),
  });
  return new Response(await r.text(), {
    status: r.status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
