const noticeItems = [
  {
    title: "신규직원채용공고",
    date: "06-08",
    notice: true
  },{
    title: "<2022부모역량특강-온라인 안내>",
    date: "06-08",
    notice: true
  },{
    title: "2022년 홈페이지 리뉴얼 안내",
    date: "06-08",
    notice: false
  },{
    title: "2022 부모역량특강-중3 학년전환기교육 참가자 모집 안..",
    date: "06-08",
    notice: false
  },{
    title: "2022 진로역량-코딩자격과정 참가자 모집 안내",
    date: "06-08",
    notice: false
  },{
    title: "2022 부모역량특강 참가자 모집 안내",
    date: "06-08",
    notice: false
  },{
    title: "2022 부모역량-부모역량특강 참가자 모집 안내",
    date: "06-08",
    notice: false
  }
];

const resultItems = [
  {
    title: "2021 운영실적",
    date: "03-22",
    notice: false
  },{
    title: "2021 운영실적",
    date: "03-22",
    notice: false
  },{
    title: "2021 운영실적",
    date: "03-22",
    notice: false
  },{
    title: "2021 운영실적",
    date: "03-22",
    notice: false
  },{
    title: "2021 운영실적",
    date: "03-22",
    notice: false
  },{
    title: "2021 운영실적",
    date: "03-22",
    notice: false
  },{
    title: "2021 운영실적",
    date: "03-22",
    notice: false
  },{
    title: "2021 운영실적",
    date: "03-22",
    notice: false
  },
]




const notice = document.querySelector('table.notice').querySelector('tbody');
notice.innerHTML = "";

noticeItems.forEach(item => {
  notice.innerHTML += `
  <tr>
    <th>${item.notice == true ? "공지" : "1"}</th>
    <td style="text-align:left;"><a href="#">${item.title}</a></td>
    <td>${item.date}</td>
    <td>키다리</td>
  </tr>`
})

const result = document.querySelector('table.result').querySelector('tbody');
result.innerHTML = "";

resultItems.forEach(item => {
  result.innerHTML += `
  <tr>
    <th>${item.notice == true ? "공지" : "1"}</th>
    <td style="text-align:left;"><a href="#">${item.title}</a></td>
    <td>${item.date}</td>
    <td>키다리</td>
  </tr>`
})

window.addEventListener('DOMContentLoaded', event => {
  
})
