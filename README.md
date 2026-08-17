# Báo Cáo Thực Hành Lab 17 — Finding and Validating Pain Points

**Mã môn học / Khóa**: K4 - Track 1 - Day 17  
**Học viên thực hiện**: Phạm Bá Huy  
**Mã học viên (MHV)**: `2A202601132`  
**Nhóm**: Chicken Plus 
**Thành viên nhóm**:
1. **Phạm Bá Huy** (Lead / Interviewer chính)
2. **Nguyễn Văn Tuấn Anh** (Note-taker & Observer)

**Case study đã chọn**: *AI Support Radar trên nền tảng học trực tuyến VLearn (Tập trung điều tra chuyên sâu đối tượng Learner - Học viên)*

---

## Mục lục tài liệu
1. [Phần 1: Thông tin cá nhân và nhóm](#phần-1-thông-tin-cá-nhân-và-nhóm)
2. [Phần 2: Problem Hypothesis Brief (Kết quả Chặng 1)](#phần-2-problem-hypothesis-brief-kết-quả-chặng-1)
3. [Phần 3: Conversation Guide phiên bản cuối (Đã sửa sau Chặng 4)](#phần-3-conversation-guide-phiên-bản-cuối-đã-sửa-sau-chặng-4)
4. [Phần 4: Practice Reflection (Chặng 4)](#phần-4-practice-reflection-chặng-4)
5. [Phần 5: AI Support Log](#phần-5-ai-support-log)
6. [Cấu trúc Thư mục Nộp bài](#cấu-trúc-thư-mục-nộp-bài)

---

## Phần 1: Thông tin cá nhân và nhóm

- **Họ và tên học viên**: Phạm Bá Huy
- **Mã học viên**: `2A202601132`
- **Tên nhóm**: Chicken Plus 
- **Vai trò trong buổi phỏng vấn**:
  - **Phạm Bá Huy**: Người phỏng vấn chính (Interviewer)
  - **Nguyễn Văn Tuấn Anh**: Người ghi chép biên bản (Note-taker) & Quan sát phản xạ (Observer)
- **Case study lựa chọn**: Hệ thống nhận diện và hỗ trợ học viên gặp bế tắc trong quá trình tự học trực tuyến trên nền tảng VLearn.

---

## Phần 2: Problem Hypothesis Brief (Kết quả Chặng 1)

Chuỗi logic khám phá vấn đề:  
> **Solution → Change → Actor → Situation & Job → Pain → Evidence**

### 1. Gỡ Solution Directive & Xác định Capability trung tính
- **Solution Directive nguyên văn**:  
  > *"Xây dựng tính năng AI Support Radar trên hệ thống VLearn: Sử dụng mô hình Machine Learning/AI để tự động phân tích hành vi học tập, điểm số quiz, tần suất nộp bài của học viên, phát hiện các học viên có nguy cơ rớt môn/bỏ cuộc (at-risk learners), tự động đẩy danh sách vào Support Queue và sinh các gợi ý can thiệp (intervention suggestions) để Giảng viên/Coach nhấn nút gửi hỗ trợ kịp thời."*
- **Capability trung tính (Neutral Capability)**:  
  > Khả năng nhận diện sớm những học viên đang gặp bế tắc hoặc có dấu hiệu chững lại trong tiến độ học tập, đồng thời kích hoạt sự trợ giúp/tháo gỡ đúng lúc và đúng ngữ cảnh trước khi học viên nản lòng và từ bỏ khóa học.

### 2. Chuỗi thay đổi kỳ vọng (Expected Change Chain)
- **Solution** (Cơ chế phát hiện bế tắc & kích hoạt trợ giúp kịp thời)  
  $\rightarrow$ **Học viên nhận được sự hỗ trợ/tháo gỡ đúng lúc khi gặp bài khó hoặc mất nhịp học**  
  $\rightarrow$ **Học viên vượt qua rào cản kiến thức, không bị dồn ứ bài tập, duy trì động lực học**  
  $\rightarrow$ **Outcome** (Tăng tỷ lệ hoàn thành khóa học, giảm tỷ lệ drop-out, nâng cao mức độ hài lòng).

### 3. Ma trận Actor & Lựa chọn đối tượng điều tra
- **Ma trận 4 bên liên quan**:
  - **Learner (Học viên)**: Người trực tiếp đối mặt với bài tập khó, sự cô độc khi tự học và đưa ra quyết định tiếp tục hay bỏ cuộc (*Primary Pain Owner*).
  - **Instructor (Giảng viên)**: Soạn bài, theo dõi lớp học quy mô lớn, chịu trách nhiệm về chất lượng đào tạo chung.
  - **Coach / TA (Trợ giảng)**: Giải đáp bài tập hàng ngày, hỗ trợ kỹ thuật và động viên học viên.
  - **Platform VLearn**: Đơn vị vận hành kinh doanh, tối ưu tỷ lệ hoàn thành khóa và vòng đời khách hàng (LTV).
- **Actor nhóm chọn điều tra**: **Learner (Học viên)**.
- **Lý do chọn**: Học viên là người trực tiếp trải nghiệm nỗi đau. Nếu không hiểu sâu rào cản tâm lý và hành vi thực tế của học viên khi gặp bế tắc thì mọi giải pháp can thiệp từ phía Giảng viên hay Hệ thống đều sẽ bị trật mục tiêu.

### 4. Situation & Job (JTBD)
- **Situation & Job**: Khi gặp phải một bài tập khó hoặc không hiểu kiến thức trọng tâm trong khóa học trực tuyến, **Học viên** đang cố **tìm cách hiểu bản chất vấn đề và sửa lỗi để hoàn thành bài tập đúng hạn** bằng cách **tua đi tua lại video bài giảng, tự tra Google/ChatGPT và âm thầm tự xoay sở một mình**.
- **JTBD Hypothesis**:  
  > *"Khi gặp bài tập khó hoặc bị vướng mắc kiến thức trong lúc tự học trực tuyến, tôi muốn nhanh chóng nhận được sự giải thích/tháo gỡ đúng trọng tâm và không phán xét, để có thể hoàn thành bài tập, giữ được sự tự tin và tiếp tục theo đuổi khóa học."*

### 5. Pain Hypotheses (Các giả thuyết cạnh tranh)
- **Pain Hypothesis A (Rào cản tìm trợ giúp & Độ trễ hỗ trợ - Help-seeking Barrier & Latency)**:  
  Khi gặp bài tập khó trong khóa học trực tuyến, **Học viên** gặp khó khăn trong việc **tiếp tục hoàn thành bài tập** vì **họ ngại chủ động hỏi người hướng dẫn (sợ bị đánh giá) và các kênh hỏi đáp chung có độ trễ phản hồi quá lớn (mất nhiều tiếng/ngày)**, dẫn đến **sự bế tắc kéo dài, bài tập bị dồn ứ, mất dần động lực và âm thầm bỏ dở khóa học (silent drop-out)**.
- **Pain Hypothesis B (Khoảng cách năng lực & Quá tải nhận thức - Content Gap & Cognitive Overload)**:  
  Khi gặp bài tập khó trong khóa học trực tuyến, **Học viên** gặp khó khăn trong việc **tiếp thu kiến thức** vì **nội dung bài giảng quá nhanh hoặc thiếu bài tập bắc cầu phù hợp với trình độ nền tảng của họ**, dẫn đến **dù có cố gắng xem lại nhiều lần họ vẫn không hiểu và tự kết luận rằng mình không đủ khả năng học tiếp**.
- **Giả thuyết chọn điều tra trước**: **Pain Hypothesis A**.

### 6. Evidence Map (Bằng chứng kiểm chứng)
| Cần kiểm tra | Evidence làm nhóm tin hơn | Evidence làm nhóm nghi ngờ hoặc bác bỏ |
| :--- | :--- | :--- |
| **Situation có thật** | Học viên kể lại chi tiết lần bị kẹt ở bài tập/quiz cụ thể gần đây (tuần 2-4). | Học viên chỉ xem video lý thuyết, không làm bài tập; hoặc thấy bài tập luôn dễ dàng. |
| **Pain có ý nghĩa** | Cảm giác bất lực, stress khi mò mẫm hàng giờ; bài tập quá hạn dẫn đến bỏ dở các tuần sau. | Thấy kẹt bài là bình thường; sẵn sàng bỏ qua bài khó để học tiếp mà không ảnh hưởng gì. |
| **Workaround tồn tại** | Tốn nhiều công sức: tra ChatGPT, Google, hỏi bạn bè, lục repo GitHub cũ. | Gặp bài khó là tắt máy đi ngủ ngay, không tìm bất kỳ cách nào để tự gỡ. |
| **Consequence tồn tại** | Trượt môn, mất tiền học phí, mất tự tin vào năng lực bản thân, bỏ học giữa chừng. | Dù gặp bài khó vẫn hoàn thành 100% khóa học; không ảnh hưởng tiến độ học tập. |
| **Pattern có lặp** | Tình trạng bế tắc và ngại hỏi xảy ra lặp lại ở nhiều khóa học online từng tham gia. | Tình huống chỉ xảy ra 1 lần duy nhất do lỗi mạng hoặc bài tập bị lỗi đề thi. |

### 7. Problem Hypothesis chốt & Solution Parking Lot
- **Problem Hypothesis chốt**:  
  > *"Học viên tham gia các khóa học trực tuyến trên nền tảng VLearn khi gặp bài tập khó hoặc lỗ hổng kiến thức thường gặp khó khăn trong việc nhận được sự tháo gỡ kịp thời và đúng ngữ cảnh, do rào cản tâm lý ngại hỏi người hướng dẫn và độ trễ phản hồi trên các kênh hỗ trợ hiện tại, dẫn đến việc bế tắc kéo dài, dồn ứ bài tập, nản lòng và âm thầm bỏ dở khóa học."*
- **Solution Parking Lot**:
  1. *Kênh trợ giúp ẩn danh & Cam kết phản hồi trong 30 phút (Anonymous Q&A Forum with SLA)* — **Không sử dụng AI**.
  2. *Trợ lý AI gia sư ngữ cảnh từng bước (Contextual AI Learning Assistant / Socratic Bot)* — **AI**.
  3. *Mô hình Bạn cùng tiến / Nhóm học tập nhỏ 2-3 người (Peer Study Pods)* — **Không sử dụng AI**.
  4. *Cơ chế AI tự động phát hiện kẹt bài & gợi ý tài liệu bổ trợ chủ động (In-app AI Nudge)* — **AI**.
  5. *Khung giờ Office Hours trực tuyến cố định 2 buổi/tuần với Trợ giảng (Live Zoom Office Hours)* — **Không sử dụng AI**.

---

## Phần 3: Conversation Guide phiên bản cuối (Đã sửa sau Chặng 4)

### 1. Tiêu chí tuyển người & Recruitment Check
- **Tiêu chí**: Học viên đã tham gia ít nhất 01 khóa học trực tuyến (có video + bài tập thực hành/quiz) và từng gặp tình trạng kẹt bài tập/chậm tiến độ trong vòng **60 ngày** gần đây.
- **Recruitment Check**:  
  > *"Trong vòng 2 tháng qua khi tham gia học trực tuyến, bạn có từng gặp lần nào bị kẹt ở một bài tập hoặc chủ đề khó đến mức phải mất nhiều thời gian tự xoay sở hoặc bị chậm nộp bài so với tiến độ lớp không?"*

### 2. Lời mở đầu (Introduction)
> *"Chào bạn, mình là Huy, hiện đang thực hiện một nghiên cứu thực tế về trải nghiệm tự học và những khó khăn thường gặp của học viên trong các khóa học trực tuyến. Mục tiêu của buổi trò chuyện ngắn hôm nay là để lắng nghe những câu chuyện và trải nghiệm học tập thực tế từ bạn, xem những lúc gặp bài khó hoặc vướng mắc thì bạn thường xoay sở như thế nào. Buổi trao đổi hoàn toàn mang tính chất học hỏi, không kiểm tra kiến thức và cũng không nhằm mục đích giới thiệu hay đánh giá bất kỳ sản phẩm nào. Mọi chia sẻ chân thật của bạn đều là tư liệu vô cùng quý giá cho nghiên cứu của nhóm."*

### 3. Story Opener
> *"Kể mình nghe về lần gần nhất **bạn gặp phải một bài tập hoặc kiến thức rất khó hiểu trong một khóa học online mà bạn từng tham gia**?"*

### 4. Big 3 Questions & Probe Bank *(Phiên bản tinh chỉnh sau thực hành)*

| STT | Điều cần học | Câu hỏi sẽ dùng (Anchor vào quá khứ) | Probe bank (Đào sâu câu chuyện) |
| :---: | :--- | :--- | :--- |
| **1** | **Hành vi khi bế tắc & Rào cản hỏi trợ giúp** | *"Lúc nhận ra mình bị bế tắc hoặc chạy code/làm bài không ra, việc cụ thể đầu tiên bạn đã làm là gì?"* | • *"Lúc đó bạn đang ngồi học ở đâu và vào khoảng mấy giờ?"*<br>• *"Bạn đã tìm kiếm trợ giúp ở đâu đầu tiên?"*<br>• **[Đã bổ sung sau Chặng 4]** *"Bạn có nhắn tin hỏi Trợ giảng hay đăng lên nhóm lớp không? Điều gì cụ thể đã khiến bạn quyết định KHÔNG hỏi họ lúc đó?"* |
| **2** | **Workarounds & Mức độ nỗ lực tự xoay sở** | *"Bạn đã dành bao nhiêu thời gian để tự tìm cách tháo gỡ bài tập đó, và bạn đã thử những cách nào?"* | • *"Bạn đã dùng những công cụ ngoài nào (ChatGPT, Google, hỏi bạn bè)?"*<br>• *"Khi dùng các công cụ đó, câu trả lời nhận được có giúp bạn hiểu bản chất bài học không hay gây thêm khó hiểu?"*<br>• *"Phần nào trong quá trình tự mò mẫm đó khiến bạn cảm thấy ức chế hoặc nản lòng nhất?"* |
| **3** | **Nguyên nhân gốc rễ & Hậu quả dây chuyền** *(Câu hỏi đáng sợ)* | *"Kết quả của lần kẹt bài đó như thế nào? Điều gì đã giúp bạn vượt qua hoặc khiến bạn quyết định dừng học?"* | • **[Đã bổ sung sau Chặng 4]** *"Khi phải copy code hoặc nộp bài đối phó cho kịp hạn chót, sang tuần học tiếp theo bạn cảm thấy thế nào khi gặp kiến thức mới?"*<br>• *"Việc đó ảnh hưởng thế nào đến quyết định tiếp tục hay dừng lại ở khóa học?"*<br>• *"Lần gần nhất trước đó bạn gặp tình trạng tương tự diễn ra như thế nào?"* |

### 5. Ba phản xạ dữ liệu lệch (Deflect / Anchor / Dig)
- **Deflect (Khi user khen ngợi)**: Cảm ơn ngắn rồi kéo về thực tế: *"Cảm ơn bạn! Để hiểu rõ hơn, trong khóa học vừa rồi, những lúc gặp bài khó lúc nửa đêm thì bạn đã tự xử lý thực tế như thế nào?"*
- **Anchor (Khi user nói chung chung/hứa hẹn tương lai)**: Neo về sự kiện có thật: *"Lần gần nhất bạn gặp một bài khó như vậy là ở bài học nào? Lúc đó bạn đã ngồi xử lý trong bao lâu?"*
- **Dig (Khi user đòi hỏi tính năng/ý tưởng mới)**: Đào sâu vào pain và cách giải quyết hiện tại: *"Ý tưởng đó sẽ giúp bạn giải quyết được điều bất tiện nhất nào lúc đang tự học? Hiện tại khi chưa có nó, bạn đang làm cách nào để bù đắp?"*

---

## Phần 4: Practice Reflection (Chặng 4)

Sau khi tiến hành phỏng vấn thử nghiệm và rà soát cùng nhóm, dưới đây là 3 câu trả lời phản tư thực tế:

### 1. Câu hỏi nào đã giúp user kể một tình huống cụ thể?
> **Trả lời**:  
> Câu hỏi Story Opener: *"Kể mình nghe về lần gần nhất bạn gặp phải một bài tập hoặc kiến thức rất khó hiểu trong khóa học online...?"* kết hợp cùng câu hỏi phụ: *"Lúc đó bạn đang ngồi ở đâu và khoảng mấy giờ?"*.  
> Câu hỏi này đã giúp học viên lập tức gợi nhớ lại bối cảnh cụ thể: ngồi một mình tại bàn học ở phòng trọ lúc 23h đêm Chủ nhật, đối mặt với bài tập thực hành JavaScript Async / Fetch API sắp đến hạn nộp 23h59 và bị lỗi `Promise {<pending>}`.

### 2. Chỗ nào mình cần làm tốt hơn ở lần phỏng vấn thật?
> **Trả lời**:  
> Ở phần giữa buổi phỏng vấn, khi nghe học viên chia sẻ việc hỏi ChatGPT nhưng ChatGPT đưa ra cú pháp lạ (dùng Axios thay vì Fetch API chuẩn của bài giảng) làm học viên hoang mang, người phỏng vấn suýt nữa đã mắc bẫy *pitch solution* khi định hỏi: *"Bạn có muốn một con AI hiểu được đúng giáo trình của lớp không?"*.  
> Người phỏng vấn đã kịp thời nhận thức và phanh lại, chuyển sang câu hỏi đào sâu hành vi: *"Sau khi thấy đoạn code lạ đó thì bạn đã làm gì tiếp theo?"*. Ở lần phỏng vấn tiếp theo, cần duy trì sự im lặng tích cực (khoảng lặng 3-5 giây) để người học tự nhiên bộc lộ những rào cản tâm lý thầm kín (như cảm giác xấu hổ, sợ bị phán xét) thay vì vội vàng ngắt lời hay chuyển câu hỏi quá nhanh.

### 3. Sau khi luyện, nhóm đã sửa Conversation Guide ở đâu và vì sao?
> **Trả lời**:  
> 1. **Bổ sung câu hỏi đào sâu về lý do "Không hành động" ở Big 3 Question 1**: Nhóm đã thêm câu hỏi: *"Điều gì cụ thể đã khiến bạn quyết định KHÔNG nhắn tin hỏi Trợ giảng hoặc đăng lên nhóm lớp?"*.  
>    - *Lý do*: Trước đó nhóm chỉ hỏi *"Bạn tìm kiếm trợ giúp ở đâu?"*, nhưng phát hiện thực tế cho thấy việc học viên **né tránh tìm kiếm sự giúp đỡ từ người thật** xuất phát từ rào cản tâm lý (sợ phiền lúc nửa đêm, sợ bị đánh giá là dốt kiến thức cơ bản). Đây là insight sống còn về pain point.
> 2. **Thêm câu hỏi đo lường hệ quả dây chuyền ở Big 3 Question 3**: Thêm câu: *"Khi phải copy code hoặc nộp bài đối phó deadline, sang tuần học tiếp theo bạn cảm thấy thế nào khi gặp kiến thức mới?"*.  
>    - *Lý do*: Nhận ra rằng việc dùng workaround chắp vá (copy code ChatGPT/GitHub) tạo ra "ảo tưởng hoàn thành bài tập" trên hệ thống LMS, nhưng thực chất lại là nguyên nhân trực tiếp khiến học viên bị rỗng kiến thức và dẫn đến quyết định bỏ học âm thầm (silent drop-out) ở tuần tiếp theo.

---

## Phần 5: AI Support Log

Bảng ghi chép vai trò của AI trong quá trình thực hiện Lab 17:

| Hạng mục | Chi tiết trải nghiệm thực tế |
| :--- | :--- |
| **AI đã giúp gì?** | • Hỗ trợ hệ thống hóa khung tư duy logic từ Solution Directive gỡ về Capability trung tính và xác lập chuỗi kỳ vọng thay đổi (Change Chain).<br>• Gợi ý cấu trúc JTBD chuẩn mực (`Khi [situation], tôi muốn [progress], để có thể [outcome]`).<br>• Hỗ trợ brainstorm mở rộng bộ câu hỏi đào sâu (Probe Bank) và các giải pháp Non-AI trong Solution Parking Lot. |
| **Điểm nào AI làm sai / hời hợt?** | • **Thiên lệch Actor ban đầu**: Ban đầu AI mặc định tập trung vào góc nhìn của Giảng viên/Coach (người quản lý vận hành) vì directive gốc nhắc tới "Support Queue", bỏ qua người sở hữu nỗi đau cốt lõi là Học viên (Learner).<br>• **Bẫy hỏi giải pháp**: Các câu hỏi AI gợi ý ban đầu vẫn còn mang tính chất khảo sát ý kiến tương lai (*"Bạn nghĩ sao nếu...", "Bạn có muốn một công cụ..."*) thay vì neo chặt vào sự kiện quá khứ.<br>• **Giả định hời hợt về tài liệu**: AI cho rằng học viên bỏ học chỉ vì "thiếu tài liệu học tập", trong khi thực tế học viên có thừa tài liệu nhưng bị rào cản tâm lý sợ bị phán xét và thiếu hỗ trợ đúng ngữ cảnh. |
| **Bạn đã tự sửa thế nào?** | • Yêu cầu chuyển dịch 100% trọng tâm nghiên cứu sang đối tượng **Learner (Học viên)**.<br>• Tự tay loại bỏ toàn bộ các từ khóa giải pháp (AI, Radar, Queue) trong kịch bản phỏng vấn.<br>• Viết lại Conversation Guide dựa trên ngữ cảnh thực tế của học viên tự học ban đêm, bổ sung các câu hỏi đào sâu về rào cản tâm lý và hậu quả của các biện pháp workaround tạm bợ. |

---

## Cấu trúc Thư mục Nộp bài

```text
Track1_Day17_2A202601132_PhamBaHuy/
├── README.md                 # Toàn bộ báo cáo 5 phần hoàn chỉnh
└── interview/
    ├── notes.md              # Biên bản phỏng vấn thực tế của học viên HV-01
    └── recording-link.md     # Liên kết bản ghi phỏng vấn (Google Drive)
```

---
