// 次期中央給電指令所システム - コンテンツデータ

window.categories = [
  {
    id: 'overview',
    title: 'システム概要',
    icon: '🏢',
    color: '#638cff',
    description: '中央給電指令所の役割、需給運用の基本、9社共有化の動向',
    articles: [
      {
        id: 'role',
        title: '中央給電指令所の役割と機能',
        summary: '電力系統全体を監視・制御する「電気のコントロールセンター」の概要',
        tags: ['需給運用', '監視制御', '安定供給'],
        content: `
<h2>中央給電指令所とは</h2>
<p>中央給電指令所は、発電所・送電線・変電所・配電線など、すべての電力設備が組み合わされて構成される<strong>「電力系統」全体の状況を把握し、電力をコントロール</strong>することで、安定した電力供給を24時間365日維持する「電気のコントロールセンター」です。</p>

<h2>主要な機能</h2>
<h3>1. 需給監視</h3>
<p>電力系統全体の需要と供給のバランスをリアルタイムで監視します。電気は「同時同量」の原則に基づき、生産と消費が常にバランスしていなければなりません。</p>

<h3>2. 需要予測</h3>
<p>気温・天候・曜日・季節などの要因を考慮し、将来の電力需要を予測します。短期（数時間先）から中期（翌日～数日先）まで、異なる時間スケールでの予測を行います。</p>

<h3>3. 発電計画</h3>
<p>予測された需要に基づき、供給信頼度と経済性を考慮した最適な発電計画を立案します。燃料コスト・起動停止コスト・送電制約などを総合的に判断します。</p>

<h3>4. リアルタイム制御</h3>
<ul>
<li><strong>経済負荷配分制御（EDC）</strong>: 総発電コストが最小となるように各発電機の出力配分を最適化</li>
<li><strong>負荷周波数制御（LFC）</strong>: 需要変動に対して周波数を一定に維持するための制御</li>
<li><strong>自動発電制御（AGC）</strong>: LFCを自動的に実行するシステム</li>
</ul>

<h3>5. 系統操作・事故対応</h3>
<p>送電線の開閉操作、事故時の系統切替、復旧操作などを実施。大規模停電を防止し、影響を最小限にするための判断を行います。</p>

<div class="info-box note">
<div class="info-box-title">💡 基本設計での着目ポイント</div>
<p>各機能がどのようなサブシステムで実現されるか、機能間のデータフローとインターフェースを明確にすることが基本設計の重要なポイントです。</p>
</div>`,
        references: [
          { title: 'TEPCO - 中央給電指令所の役割', url: 'https://www.tepco.co.jp/' },
          { title: '関西送配電 - 電力系統の運用', url: 'https://www.kansai-td.co.jp/' },
          { title: '九州電力 - 給電運用', url: 'https://www.kyuden.co.jp/' }
        ]
      },
      {
        id: 'shared-system',
        title: '9社共有化と次期システムの動向',
        summary: '一般送配電事業者9社によるシステム共有化の背景と目的',
        tags: ['共有化', '広域運用', 'コスト低減'],
        content: `
<h2>9社共有化の背景</h2>
<p>従来、各一般送配電事業者（沖縄電力を除く9社）は、それぞれ独自に中央給電指令所システムを開発・運用してきました。しかし、以下の課題から<strong>システムの仕様統一化・共有化</strong>が進められています。</p>

<h3>共有化の目的</h3>
<ul>
<li><strong>全国規模でのメリットオーダー追求</strong>: 広域での調整力運用による経済性の向上</li>
<li><strong>レジリエンス向上</strong>: 大規模災害時のバックアップ体制強化</li>
<li><strong>社会コスト低減</strong>: 開発・運用コストの分担による効率化</li>
<li><strong>参入者拡大</strong>: 統一仕様による開発競争促進</li>
</ul>

<h2>次期システムの計画概要</h2>
<table>
<tr><th>項目</th><th>内容</th></tr>
<tr><td>参加事業者</td><td>一般送配電事業者9社（沖縄電力を除く）</td></tr>
<tr><td>運用開始目標</td><td>2020年代後半</td></tr>
<tr><td>通信方式</td><td>IEC 61850（全国統一）</td></tr>
<tr><td>システム構成</td><td>システムのスリム化、広域ネットワーク構成</td></tr>
<tr><td>バックアップ</td><td>エリアごとのバックアップ装置設置</td></tr>
</table>

<h2>基本設計への影響</h2>
<p>共有化に伴い、基本設計では以下の点を考慮する必要があります：</p>
<ul>
<li>マルチテナント対応のアーキテクチャ設計</li>
<li>各エリア固有要件と共通機能の分離</li>
<li>統一通信仕様への適合</li>
<li>広域運用を前提としたスケーラビリティ</li>
</ul>

<div class="info-box important">
<div class="info-box-title">⚠️ 重要</div>
<p>2024年2月に統一通信仕様に関する意見募集が実施されており、最新の仕様動向を継続的に確認する必要があります。</p>
</div>`,
        references: [
          { title: '経済産業省 - 次期中央給電指令所システム', url: 'https://www.meti.go.jp/' },
          { title: '電力広域的運営推進機関（OCCTO）', url: 'https://www.occto.or.jp/' },
          { title: '日立 - 中央給電指令所システム', url: 'https://www.hitachi.co.jp/' },
          { title: '電力中央研究所', url: 'https://criepi.denken.or.jp/' }
        ]
      },
      {
        id: 'power-flow',
        title: '電力系統の基礎知識',
        summary: '発電から消費までの電力フローと系統運用の基本原理',
        tags: ['電力系統', '同時同量', '周波数制御'],
        content: `
<h2>電力系統の構成</h2>
<p>電力系統は、発電された電気が消費者に届けられるまでの一連の設備全体を指します。</p>
<ul>
<li><strong>発電所</strong>: 火力・水力・原子力・再エネなど多様な電源</li>
<li><strong>送電線</strong>: 超高圧（275kV～500kV）で長距離輸送</li>
<li><strong>変電所</strong>: 電圧の変換（昇圧・降圧）</li>
<li><strong>配電線</strong>: 低圧（6.6kV→100V/200V）で需要家へ</li>
</ul>

<h2>同時同量の原則</h2>
<p>電気は大量に蓄えることが困難なため、<strong>発電量（供給）と消費量（需要）を常に一致</strong>させる必要があります。このバランスが崩れると周波数が変動し、設備故障や停電の原因となります。</p>

<blockquote>東日本: 50Hz / 西日本: 60Hz を基準として、許容範囲内に周波数を維持</blockquote>

<h2>系統運用の階層</h2>
<table>
<tr><th>階層</th><th>機関</th><th>主な役割</th></tr>
<tr><td>全国</td><td>広域機関（OCCTO）</td><td>広域系統の計画・運用調整</td></tr>
<tr><td>エリア</td><td>中央給電指令所</td><td>エリア全体の需給運用</td></tr>
<tr><td>地域</td><td>給電所・系統制御所</td><td>187kV以下の系統操作</td></tr>
<tr><td>配電</td><td>配電制御所</td><td>配電系統の監視・制御</td></tr>
</table>`,
        references: [
          { title: 'TEPCO - 電力系統の仕組み', url: 'https://www.tepco.co.jp/' },
          { title: '九州電力 - 電気の流れ', url: 'https://www.kyuden.co.jp/' }
        ]
      }
    ]
  },
  {
    id: 'architecture',
    title: 'アーキテクチャ・構成',
    icon: '🔧',
    color: '#a78bfa',
    description: '広域ネットワーク構成、冗長化、データセンター集約、バックアップ体制',
    articles: [
      {
        id: 'system-arch',
        title: 'システムアーキテクチャの全体像',
        summary: 'データセンター集約型の冗長構成と広域ネットワーク',
        tags: ['冗長化', 'データセンター', '高可用性'],
        content: `
<h2>全体構成</h2>
<p>次期中央給電指令所システムは、<strong>データセンター集約型</strong>のアーキテクチャを採用しています。基幹系統から配電系統までの監視制御業務を処理する主要サーバーをデータセンターに集約し、多重化による冗長構成で堅牢な稼働性と信頼性を確保します。</p>

<h3>構成要素</h3>
<table>
<tr><th>要素</th><th>説明</th></tr>
<tr><td>中央サーバー群</td><td>EMS/SCADA機能を実行する冗長化サーバー</td></tr>
<tr><td>広域ネットワーク</td><td>全国の拠点を結ぶ専用通信ネットワーク</td></tr>
<tr><td>HMI端末</td><td>オペレータ用の監視制御端末</td></tr>
<tr><td>RTU/テレコン</td><td>変電所等のリモート端末装置</td></tr>
<tr><td>バックアップ装置</td><td>エリアごとに設置される非常用システム</td></tr>
</table>

<h2>冗長化方式</h2>
<ul>
<li><strong>サーバー冗長</strong>: Active-Standby または Active-Active構成</li>
<li><strong>ネットワーク冗長</strong>: デュアルパス構成、自動切替</li>
<li><strong>データ冗長</strong>: リアルタイムデータベースのミラーリング</li>
<li><strong>サイト冗長</strong>: 災害対策としての遠隔バックアップサイト</li>
</ul>

<h2>可用性要件</h2>
<div class="info-box important">
<div class="info-box-title">⚠️ 可用性目標</div>
<p>中央給電指令所システムは24時間365日の連続稼働が求められ、計画外停止は許容されません。一般的に99.999%以上（ファイブナイン）の可用性が目標とされます。</p>
</div>`,
        references: [
          { title: '東芝 - 電力流通監視制御システム', url: 'https://www.global.toshiba/' },
          { title: '送配電網協議会(TDGC)', url: 'https://www.tdgc.jp/' }
        ]
      },
      {
        id: 'scada-ems',
        title: 'SCADA/EMSの機能構成',
        summary: 'SCADA（監視制御）とEMS（エネルギー管理）の機能分析',
        tags: ['SCADA', 'EMS', 'リアルタイムDB'],
        content: `
<h2>SCADA（Supervisory Control and Data Acquisition）</h2>
<p>SCADAは広範囲に分散する施設からネットワークを介して情報を集約し、<strong>監視・制御</strong>を行うシステムです。</p>

<h3>SCADA主要機能</h3>
<ul>
<li><strong>データ収集</strong>: RTU/IED経由で計測値・状態量を収集（通常2～4秒周期）</li>
<li><strong>状態推定</strong>: 収集データから系統全体の状態を推定</li>
<li><strong>監視表示</strong>: 系統図・トレンド・アラームの表示</li>
<li><strong>遠隔制御</strong>: 遮断器の開閉等の遠隔操作（Select-Before-Operate方式）</li>
<li><strong>事象記録</strong>: SOE（Sequence of Events）の記録</li>
</ul>

<h2>EMS（Energy Management System）</h2>
<p>EMSは電力の安定供給と経済運用を実現するための上位アプリケーション群です。</p>

<h3>EMS主要機能</h3>
<table>
<tr><th>機能</th><th>略称</th><th>説明</th></tr>
<tr><td>状態推定</td><td>SE</td><td>計測データから系統状態を推定</td></tr>
<tr><td>潮流計算</td><td>PF</td><td>送電線の電力潮流を計算</td></tr>
<tr><td>最適潮流計算</td><td>OPF</td><td>制約を満たす最適な潮流を算出</td></tr>
<tr><td>経済負荷配分</td><td>EDC</td><td>発電コスト最小化のための出力配分</td></tr>
<tr><td>負荷周波数制御</td><td>LFC</td><td>周波数維持のリアルタイム制御</td></tr>
<tr><td>需要予測</td><td>LF</td><td>短期～中期の需要予測</td></tr>
<tr><td>発電計画</td><td>UC</td><td>発電機の起動停止計画</td></tr>
<tr><td>セキュリティ解析</td><td>SA</td><td>N-1事故時の安定度評価</td></tr>
</table>

<div class="info-box note">
<div class="info-box-title">💡 基本設計のポイント</div>
<p>SCADAとEMSの境界を明確にし、リアルタイムDB経由でデータを共有するアーキテクチャが一般的です。SCADAは数秒周期のリアルタイム処理、EMSは数分～数十分周期の解析処理という時間スケールの違いに注意が必要です。</p>
</div>`,
        references: [
          { title: '電気学会 - EMS技術', url: 'https://www.iee.jp/' },
          { title: 'SCADA Magazine', url: 'https://scada-magazine.com/' }
        ]
      },
      {
        id: 'network-design',
        title: '通信ネットワーク設計',
        summary: 'プライベートネットワーク、帯域設計、遅延要件',
        tags: ['ネットワーク', '専用線', 'IP化'],
        content: `
<h2>ネットワーク構成方針</h2>
<p>電力系統の監視制御ネットワークは、高い信頼性とセキュリティが求められるため、<strong>電力会社内のプライベートネットワーク</strong>を核として構築されます。</p>

<h3>ネットワーク階層</h3>
<ul>
<li><strong>基幹ネットワーク</strong>: データセンター間、中央給電指令所間を接続</li>
<li><strong>エリアネットワーク</strong>: 給電所・系統制御所との接続</li>
<li><strong>フィールドネットワーク</strong>: 変電所・発電所のRTU/IEDとの接続</li>
</ul>

<h2>通信要件</h2>
<table>
<tr><th>通信種別</th><th>遅延要件</th><th>帯域</th></tr>
<tr><td>遠隔監視データ</td><td>&lt; 数秒</td><td>低～中</td></tr>
<tr><td>遠隔制御指令</td><td>&lt; 1秒</td><td>低</td></tr>
<tr><td>保護リレー連携</td><td>&lt; 数ms</td><td>低</td></tr>
<tr><td>音声通信</td><td>&lt; 150ms</td><td>中</td></tr>
<tr><td>ファイル転送</td><td>非リアルタイム</td><td>高</td></tr>
</table>

<h2>IP化の動向</h2>
<p>従来のCDT（Cyclic Digital Transmission）方式から<strong>IP化</strong>への移行が進んでいます。IEC 61850の採用により、MMS（Manufacturing Message Specification）ベースのIP通信が標準となります。</p>

<div class="info-box warning">
<div class="info-box-title">⚠ 注意</div>
<p>IP化に伴い、サイバーセキュリティ対策の重要性が増しています。ネットワーク分離、暗号化、侵入検知などの多層防御が必須です。</p>
</div>`,
        references: [
          { title: '東芝 - 電力通信ソリューション', url: 'https://www.global.toshiba/' }
        ]
      }
    ]
  },
  {
    id: 'protocol',
    title: '通信プロトコル',
    icon: '📡',
    color: '#34d399',
    description: 'IEC 61850、IEC 60870-5-104、MMS、DNP3の比較と選定理由',
    articles: [
      {
        id: 'iec61850',
        title: 'IEC 61850 - 変電所通信の国際標準',
        summary: '次期システムで採用決定されたIEC 61850の概要と構成',
        tags: ['IEC 61850', 'MMS', 'GOOSE', 'SCL'],
        content: `
<h2>IEC 61850概要</h2>
<p>IEC 61850は変電所自動化のための通信規格として策定された国際標準です。次期中央給電指令所システムでは、<strong>発電機装置との間の通信方式を全国で統一するために採用</strong>が決定されました。</p>

<h3>選定理由</h3>
<ul>
<li>国際的な普及度の高さ</li>
<li>リアルタイム通信への適合性</li>
<li>IP連携の利用が可能</li>
<li>データモデルの標準化による相互運用性</li>
</ul>

<h2>主要プロトコル</h2>
<table>
<tr><th>プロトコル</th><th>用途</th><th>通信方式</th></tr>
<tr><td>MMS</td><td>クライアント/サーバー型データ交換</td><td>TCP/IP</td></tr>
<tr><td>GOOSE</td><td>イベント駆動型高速通信</td><td>Ethernet L2（マルチキャスト）</td></tr>
<tr><td>SV（Sampled Values）</td><td>アナログ計測値の伝送</td><td>Ethernet L2（マルチキャスト）</td></tr>
</table>

<h2>データモデル</h2>
<p>IEC 61850ではオブジェクト指向のデータモデルを定義:</p>
<ul>
<li><strong>Logical Device (LD)</strong>: 論理的な装置</li>
<li><strong>Logical Node (LN)</strong>: 機能単位（例: XCBR=遮断器, MMXU=計測）</li>
<li><strong>Data Object (DO)</strong>: データ項目</li>
<li><strong>Data Attribute (DA)</strong>: データの属性</li>
</ul>

<h3>SCL（Substation Configuration Language）</h3>
<p>XML形式のシステム記述言語。変電所構成を標準的に記述でき、エンジニアリングツール間の相互運用が可能です。</p>

<div class="info-box note">
<div class="info-box-title">💡 次期システムでの適用</div>
<p>発電機側装置とのデータ伝送にはMMS通信が使用される予定です。GOOSEとSVは主に変電所内のリアルタイム通信に使用されます。</p>
</div>`,
        references: [
          { title: '経産省 - 通信方式の統一', url: 'https://www.meti.go.jp/' },
          { title: 'TDGC - 統一通信仕様', url: 'https://www.tdgc.jp/' },
          { title: 'OCCTO - IEC 61850採用', url: 'https://www.occto.or.jp/' }
        ]
      },
      {
        id: 'iec104',
        title: 'IEC 60870-5-104 と他プロトコルとの比較',
        summary: 'テレコントロール用プロトコルの比較分析',
        tags: ['IEC 104', 'DNP3', 'CDT', '比較'],
        content: `
<h2>IEC 60870-5-104</h2>
<p>IEC 60870-5-104は、TCP/IP上で動作するテレコントロール用通信プロトコルです。電力系統の遠隔監視制御で広く使用されています。</p>

<h3>主な特徴</h3>
<ul>
<li>TCP/IPベースのトランスポート</li>
<li>パケット効率の良いデータ構造</li>
<li>イベントベースのデータ伝送</li>
<li>タイムスタンプ付きデータ</li>
</ul>

<h2>プロトコル比較</h2>
<table>
<tr><th>項目</th><th>IEC 61850</th><th>IEC 60870-5-104</th><th>DNP3</th></tr>
<tr><td>標準化団体</td><td>IEC TC57</td><td>IEC TC57</td><td>IEEE</td></tr>
<tr><td>データモデル</td><td>オブジェクト指向</td><td>情報オブジェクト</td><td>データポイント</td></tr>
<tr><td>通信方式</td><td>MMS/GOOSE/SV</td><td>TCP/IP</td><td>TCP/IP or シリアル</td></tr>
<tr><td>自己記述性</td><td>高い（SCL）</td><td>低い</td><td>低い</td></tr>
<tr><td>リアルタイム性</td><td>GOOSE: 非常に高い</td><td>中程度</td><td>中程度</td></tr>
<tr><td>相互運用性</td><td>高い</td><td>高い</td><td>中程度</td></tr>
<tr><td>主な地域</td><td>世界共通</td><td>欧州・アジア</td><td>北米</td></tr>
</table>

<h2>次期システムでの選定経緯</h2>
<p>IEC 60870-5-104も候補として検討されましたが、最終的にIEC 61850が選定されました。主な選定理由：</p>
<ul>
<li>より豊富なデータモデルとセマンティクス</li>
<li>SCLによるシステム記述の標準化</li>
<li>国際的なトレンドとの整合性</li>
<li>将来的な拡張性</li>
</ul>`,
        references: [
          { title: '電力中央研究所 - 通信プロトコル比較', url: 'https://criepi.denken.or.jp/' },
          { title: 'FA Web - IEC 60870-5-104', url: 'https://www.faweb.net/' }
        ]
      }
    ]
  },
  {
    id: 'security',
    title: 'セキュリティ要件',
    icon: '🔒',
    color: '#f87171',
    description: 'IEC 62351、電力制御システムセキュリティGL、NISC行動計画',
    articles: [
      {
        id: 'iec62351',
        title: 'IEC 62351 - 電力システムセキュリティ標準',
        summary: '電力システム通信のセキュリティに特化した国際標準規格群',
        tags: ['IEC 62351', '暗号化', '認証', 'セキュリティ'],
        content: `
<h2>IEC 62351概要</h2>
<p>IEC 62351は、電力システムにおけるデータおよび通信のセキュリティに特化した国際標準規格群です。「<strong>セキュア・バイ・デザイン</strong>」の方法論に基づき策定されました。</p>

<h2>規格体系</h2>
<table>
<tr><th>パート</th><th>対象</th></tr>
<tr><td>Part 1</td><td>通信ネットワークとシステムセキュリティの概論</td></tr>
<tr><td>Part 3</td><td>TCP/IPプロファイル（TLS）のセキュリティ</td></tr>
<tr><td>Part 4</td><td>MMS（IEC 61850）のセキュリティ</td></tr>
<tr><td>Part 5</td><td>IEC 60870-5のセキュリティ</td></tr>
<tr><td>Part 6</td><td>IEC 61850のセキュリティ</td></tr>
<tr><td>Part 7</td><td>ネットワーク・システム管理のセキュリティ</td></tr>
<tr><td>Part 8</td><td>役割ベースアクセス制御（RBAC）</td></tr>
<tr><td>Part 9</td><td>鍵管理</td></tr>
<tr><td>Part 10</td><td>セキュリティアーキテクチャ</td></tr>
</table>

<h2>主要なセキュリティ要素</h2>
<ul>
<li><strong>エンドツーエンド暗号化</strong>: 通信データの機密性確保</li>
<li><strong>ID管理と認証</strong>: 全ユーザーの役割定義とID管理</li>
<li><strong>アクセス制御</strong>: 役割ベースアクセス制御（RBAC）</li>
<li><strong>鍵管理</strong>: 暗号鍵のライフサイクル管理</li>
<li><strong>監視</strong>: システム自体の広範な監視とログ</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">⚠ 対象外の注意点</div>
<p>IEC 62351は通信セキュリティに特化しており、IED本体の物理セキュリティ、OS/ファームウェア、メーカー独自実装のセキュリティは対象外です。これらは別途対策が必要です。</p>
</div>`,
        references: [
          { title: '電力中央研究所 - IEC 62351', url: 'https://criepi.denken.or.jp/' },
          { title: 'Nozomi Networks - IEC 62351解説', url: 'https://www.nozominetworks.com/' }
        ]
      },
      {
        id: 'japan-security',
        title: '日本国内のセキュリティガイドライン',
        summary: '電力制御システムセキュリティGL、系統連系技術要件、NISC行動計画',
        tags: ['ガイドライン', 'NISC', '電気事業法'],
        content: `
<h2>主要なガイドラインと規制</h2>

<h3>1. 電力制御システムセキュリティガイドライン</h3>
<p>日本電気協会が発行。電気事業法および電気設備に関する技術基準を定める省令に基づき、電気事業者が施設する電力制御システム等に求められる対策を記載しています。</p>

<h3>2. 系統連系技術要件</h3>
<p>一般送配電事業者が定める託送供給等約款別冊に含まれ、系統連系する発電設備にサイバーセキュリティに関する要件が規定されています。</p>

<h3>3. 重要インフラのサイバーセキュリティに係る行動計画</h3>
<p>内閣サイバーセキュリティセンター（NISC）が策定。電力を含む15の重要インフラ分野におけるサイバーセキュリティ対策の基本方針を提示しています。</p>

<h2>主要な脅威と対策</h2>
<table>
<tr><th>脅威</th><th>対策</th></tr>
<tr><td>不正アクセス</td><td>ネットワーク分離、認証強化、アクセス制御</td></tr>
<tr><td>マルウェア</td><td>ホワイトリスト制御、パッチ管理</td></tr>
<tr><td>内部犯行</td><td>最小権限原則、操作ログ監査</td></tr>
<tr><td>サプライチェーンリスク</td><td>調達基準、第三者評価</td></tr>
<tr><td>物理的攻撃</td><td>入退室管理、監視カメラ</td></tr>
</table>

<div class="info-box important">
<div class="info-box-title">⚠️ 基本設計での考慮事項</div>
<p>再エネ導入拡大やデジタル化の進展に伴い、電力分野のサイバーセキュリティリスクは増大傾向にあります。サプライチェーン・リスクへの対応も重要な課題です。</p>
</div>`,
        references: [
          { title: 'KPMG - 電力サイバーセキュリティ', url: 'https://kpmg.com/' },
          { title: '経産省 - セキュリティガイドライン', url: 'https://www.meti.go.jp/' },
          { title: 'IPA - 制御システムセキュリティ', url: 'https://www.ipa.go.jp/' }
        ]
      }
    ]
  },
  {
    id: 'standards',
    title: '関連規格・標準',
    icon: '📋',
    color: '#fbbf24',
    description: 'IEC/IEEE規格一覧、系統連系技術要件、電気事業法関連',
    articles: [
      {
        id: 'iec-standards',
        title: 'IEC TC57関連規格一覧',
        summary: '電力系統の通信に関する主要なIEC規格の体系',
        tags: ['IEC', 'TC57', 'CIM', '規格体系'],
        content: `
<h2>IEC TC57（電力系統管理および情報交換）</h2>
<p>IEC TC57は電力系統の通信・情報交換に関する国際標準を策定する技術委員会です。</p>

<h2>主要規格一覧</h2>
<table>
<tr><th>規格番号</th><th>名称</th><th>用途</th></tr>
<tr><td>IEC 61850</td><td>変電所通信</td><td>変電所自動化・発電所通信</td></tr>
<tr><td>IEC 61968/61970</td><td>CIM（共通情報モデル）</td><td>電力系統データモデルの標準化</td></tr>
<tr><td>IEC 60870-5-101</td><td>テレコン（シリアル）</td><td>従来型遠隔監視制御</td></tr>
<tr><td>IEC 60870-5-104</td><td>テレコン（TCP/IP）</td><td>IP化された遠隔監視制御</td></tr>
<tr><td>IEC 62351</td><td>セキュリティ</td><td>電力系統通信のセキュリティ</td></tr>
<tr><td>IEC 62325</td><td>市場通信</td><td>電力市場取引の通信</td></tr>
<tr><td>IEC 61400-25</td><td>風力発電通信</td><td>風力発電設備の情報モデル</td></tr>
</table>

<h2>CIM（Common Information Model）</h2>
<p>IEC 61968/61970で定義されるCIMは、電力系統の構成要素を統一的に表現するデータモデルです。</p>
<ul>
<li><strong>IEC 61970</strong>: EMS向けCIM（送配電系統のモデリング）</li>
<li><strong>IEC 61968</strong>: 配電管理向けCIM（配電系統の管理）</li>
<li><strong>IEC 62325</strong>: 市場取引向けCIM</li>
</ul>

<div class="info-box note">
<div class="info-box-title">💡 CIMの重要性</div>
<p>9社共有化にあたり、CIMベースのデータモデル統一が相互運用性の鍵となります。系統モデルの交換にCIM/XMLが使用されます。</p>
</div>`,
        references: [
          { title: 'IEC TC57 - 規格一覧', url: 'https://www.iec.ch/' }
        ]
      },
      {
        id: 'domestic-regs',
        title: '国内法規・技術要件',
        summary: '電気事業法、系統連系規程、技術基準',
        tags: ['電気事業法', '系統連系', '技術基準'],
        content: `
<h2>電気事業法関連</h2>
<p>電力分野の法的枠組みは電気事業法を頂点として構成されています。</p>

<h3>法規階層</h3>
<ul>
<li><strong>電気事業法</strong>: 電気事業の基本法</li>
<li><strong>電気事業法施行規則</strong>: 法律の詳細規定</li>
<li><strong>電気設備技術基準</strong>: 設備の技術基準</li>
<li><strong>電気設備技術基準の解釈</strong>: 技術基準の具体的解釈</li>
</ul>

<h2>系統連系規程</h2>
<p>日本電気協会が定める系統連系に関する技術要件です。発電設備が電力系統に接続するための条件を規定しています。</p>

<h3>主な技術要件</h3>
<ul>
<li>電圧・周波数の維持要件</li>
<li>保護リレーの設置基準</li>
<li>力率・高調波の基準</li>
<li>通信インターフェース要件</li>
<li>サイバーセキュリティ要件（近年追加）</li>
</ul>

<h2>広域機関ルール</h2>
<p>OCCTO（電力広域的運営推進機関）が定める広域運用に関するルール：</p>
<ul>
<li>送配電等業務指針</li>
<li>広域系統整備計画</li>
<li>需給バランス評価</li>
</ul>`,
        references: [
          { title: '経産省 - 電気事業法', url: 'https://www.meti.go.jp/' },
          { title: 'OCCTO - 業務規程', url: 'https://www.occto.or.jp/' }
        ]
      }
    ]
  },
  {
    id: 'renewable',
    title: '再エネ・広域運用',
    icon: '🌱',
    color: '#2dd4bf',
    description: '再エネ大量導入対応、メリットオーダー、レジリエンス強化',
    articles: [
      {
        id: 'renewable-impact',
        title: '再エネ大量導入と給電指令所の課題',
        summary: '太陽光・風力発電の増加が給電運用に与える影響',
        tags: ['再エネ', '出力変動', '調整力', '蓄電池'],
        content: `
<h2>再エネ導入拡大の影響</h2>
<p>再生可能エネルギー（太陽光・風力）の導入拡大に伴い、中央給電指令所の運用は大きな変革を迫られています。</p>

<h3>主要な課題</h3>
<ul>
<li><strong>出力変動への対応</strong>: 天候依存の不安定な電源への対処</li>
<li><strong>需給調整力の確保</strong>: 急速な出力変動に追従できる調整力</li>
<li><strong>慣性力の低下</strong>: 同期発電機の減少による系統慣性の低下</li>
<li><strong>逆潮流</strong>: 配電系統への逆方向電力潮流</li>
<li><strong>電圧管理</strong>: 分散型電源による電圧変動</li>
</ul>

<h2>次期システムに求められる機能</h2>
<table>
<tr><th>機能</th><th>目的</th></tr>
<tr><td>再エネ出力予測</td><td>気象データに基づく高精度な出力予測</td></tr>
<tr><td>統合需給運用</td><td>再エネ・火力・蓄電池の統合的な運用</td></tr>
<tr><td>リアルタイム調整</td><td>秒単位の出力変動への高速応答</td></tr>
<tr><td>広域融通最適化</td><td>エリア間の再エネ融通の最適化</td></tr>
<tr><td>蓄電池制御</td><td>大規模蓄電池の充放電制御</td></tr>
</table>

<div class="info-box note">
<div class="info-box-title">💡 デジタル化の重要性</div>
<p>再エネ大量導入に対応するためには、AI/機械学習による高精度予測、リアルタイムの大量データ処理、高速な意思決定支援など、デジタル技術の活用が不可欠です。</p>
</div>`,
        references: [
          { title: 'Japan Energy Times - 再エネと給電所', url: 'https://www.japan-energy-times.com/' },
          { title: '経産省 - 再エネ導入施策', url: 'https://www.meti.go.jp/' }
        ]
      },
      {
        id: 'wide-area',
        title: '広域運用とメリットオーダー',
        summary: '全国規模での経済的な電力運用と広域調整',
        tags: ['広域運用', 'メリットオーダー', '連系線'],
        content: `
<h2>広域運用の概念</h2>
<p>広域運用とは、従来のエリア単位の需給運用から、<strong>全国規模で最適な電力運用</strong>を行うことを目指す取り組みです。</p>

<h2>メリットオーダー</h2>
<p>燃料費の安い電源から順に稼働させる<strong>メリットオーダー</strong>を全国規模で実現することで、発電コストの最小化を図ります。</p>

<h3>メリットオーダーの実現に必要な要素</h3>
<ul>
<li>全国の電源情報の一元管理</li>
<li>連系線制約を考慮した最適化計算</li>
<li>エリア間の協調運用の仕組み</li>
<li>統一されたデータ交換フォーマット</li>
</ul>

<h2>レジリエンス強化</h2>
<p>大規模災害時のバックアップ体制を強化するための方策：</p>
<ul>
<li><strong>相互バックアップ</strong>: 他エリアのシステムによる代替運用</li>
<li><strong>広域融通の迅速化</strong>: 災害時の電力融通の自動化</li>
<li><strong>分散型バックアップ</strong>: 各エリアにバックアップ装置を設置</li>
</ul>

<div class="info-box note">
<div class="info-box-title">💡 システム共有化のメリット</div>
<p>9社がシステムを共有化することで、あるエリアのシステムが被災した場合でも、他エリアのシステムから運用を引き継ぐことが可能になります。</p>
</div>`,
        references: [
          { title: 'OCCTO - 広域運用', url: 'https://www.occto.or.jp/' },
          { title: '経産省 - 電力システム改革', url: 'https://www.meti.go.jp/' }
        ]
      }
    ]
  },
  {
    id: 'datamodel',
    title: 'データモデリング',
    icon: '🗃️',
    color: '#f472b6',
    description: '論理エンティティ、ER図、CRUD図の体系的知識',
    articles: [
      {
        id: 'data-modeling-basics',
        title: 'データモデリングの基礎と3つの段階',
        summary: '概念・論理・物理データモデルの体系と段階的詳細化',
        tags: ['データモデリング', '概念モデル', '論理モデル', '物理モデル'],
        content: `
<h2>データモデリングとは</h2>
<p>データモデリングは、システムが扱うデータの構造と、データ間の関係を定義・可視化するプロセスです。ビジネス要件に基づき、データを効率的に整理し、活用するための<strong>基盤</strong>を築くことを目的としています。</p>

<h2>3つの段階</h2>
<table>
<tr><th>段階</th><th>抽象度</th><th>目的</th><th>主な成果物</th></tr>
<tr><td><strong>概念データモデル</strong></td><td>高い</td><td>業務の俯瞰的把握、関係者の共通認識</td><td>概念ER図</td></tr>
<tr><td><strong>論理データモデル</strong></td><td>中程度</td><td>DB製品に依存しないデータ構造設計</td><td>論理ER図、エンティティ定義書</td></tr>
<tr><td><strong>物理データモデル</strong></td><td>低い</td><td>特定DBMSに最適化した実装設計</td><td>物理ER図、DDL</td></tr>
</table>

<h3>1. 概念データモデル（Conceptual）</h3>
<p>ビジネスの視点から、システムが扱うべき重要な<strong>エンティティ</strong>とその関係性を抽象的に表現します。技術的詳細を含まず、業務フローを俯瞰的に把握し、関係者間の共通認識を得ることが目的です。</p>
<ul>
<li>エンティティ名と主要な関係のみ記載</li>
<li>属性の詳細は記載しない</li>
<li>ビジネスエキスパートとエンジニアの共通言語</li>
</ul>

<h3>2. 論理データモデル（Logical）</h3>
<p>概念データモデルを基に、リレーショナルDBなどの特定のデータ構造に落とし込みます。<strong>特定のDB製品に依存しない形</strong>で設計するのがポイントです。</p>
<ul>
<li>エンティティ（テーブル）と属性（カラム）を定義</li>
<li>主キー（PK）、外部キー（FK）を明示</li>
<li>正規化を適用（第3正規形まで）</li>
<li>リレーションシップとカーディナリティを定義</li>
</ul>

<h3>3. 物理データモデル（Physical）</h3>
<p>特定のDBMS（Oracle, PostgreSQL等）に合わせ最適化します。</p>
<ul>
<li>データ型、サイズの指定</li>
<li>インデックス、パーティショニング</li>
<li>パフォーマンス最適化（非正規化を含む）</li>
<li>ストレージ、容量設計</li>
</ul>

<div class="info-box note">
<div class="info-box-title">💡 基本設計では</div>
<p>基本設計フェーズでは主に<strong>論理データモデル</strong>を作成します。概念モデルは要件定義で完成、物理モデルは詳細設計で作成するのが一般的です。</p>
</div>`,
        references: [
          { title: 'CMK - データモデリング入門', url: 'https://www.cmknet.co.jp/' },
          { title: 'WingArc - データモデリングとは', url: 'https://www.wingarc.com/' },
          { title: 'DRI - データモデリング3段階', url: 'https://www.drinet.co.jp/' }
        ]
      },
      {
        id: 'logical-entity',
        title: '論理エンティティの設計',
        summary: 'エンティティの種類、属性定義、識別子、正規化のポイント',
        tags: ['エンティティ', '属性', '主キー', '正規化'],
        content: `
<h2>論理エンティティとは</h2>
<p>論理エンティティは、ビジネス上の<strong>「モノ」「コト」「概念」</strong>といった実体を表す論理データモデルの構成要素です。特定のDB実装に依存せず、業務で使われるすべてのデータを網羅するように定義されます。</p>

<h2>エンティティの種類</h2>
<table>
<tr><th>種類</th><th>説明</th><th>例</th></tr>
<tr><td><strong>リソースエンティティ</strong></td><td>業務の中で管理される「モノ」</td><td>発電機、変電所、送電線</td></tr>
<tr><td><strong>イベントエンティティ</strong></td><td>業務の中で発生する「コト」</td><td>計測記録、制御指令、アラーム</td></tr>
<tr><td><strong>区分エンティティ</strong></td><td>分類・区分を管理</td><td>設備種別、アラーム種別</td></tr>
<tr><td><strong>対照表エンティティ</strong></td><td>多対多の関係を解決</td><td>発電機-運転パターン対応</td></tr>
</table>

<h2>属性の定義</h2>
<ul>
<li><strong>主キー（PK）</strong>: エンティティを一意に識別する属性（例: 発電機ID）</li>
<li><strong>外部キー（FK）</strong>: 他エンティティとの関連を示す属性</li>
<li><strong>必須属性</strong>: NULL不可の業務上必須な項目</li>
<li><strong>導出属性</strong>: 他の属性から計算で得られる項目（保持するか否か検討）</li>
</ul>

<h2>正規化</h2>
<p>データの冗長性を排除し、整合性を高めるプロセスです。</p>
<table>
<tr><th>正規形</th><th>条件</th><th>目的</th></tr>
<tr><td>第1正規形</td><td>繰り返し項目の排除</td><td>セルに1値のみ格納</td></tr>
<tr><td>第2正規形</td><td>部分関数従属の排除</td><td>複合キーの一部への依存を排除</td></tr>
<tr><td>第3正規形</td><td>推移的関数従属の排除</td><td>非キー属性間の依存を排除</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠ 正規化のバランス</div>
<p>論理モデルでは第3正規形まで適用するのが原則ですが、物理モデルではパフォーマンスのために意図的に非正規化する場合もあります。論理と物理は分けて考えましょう。</p>
</div>`,
        references: [
          { title: 'NTT Com - 論理データモデル設計', url: 'https://www.nttcoms.com/' },
          { title: 'データエッグ - エンティティ定義', url: 'https://www.dataegg.co.jp/' }
        ]
      },
      {
        id: 'er-diagram',
        title: 'ER図の作成方法',
        summary: 'ER図の構成要素、表記法（IE記法/IDEF1X）、作成手順',
        tags: ['ER図', 'IE記法', 'IDEF1X', 'カーディナリティ'],
        content: `
<h2>ER図（Entity-Relationship Diagram）とは</h2>
<p>ER図はデータベース内の情報構造と、データ要素間の関係を<strong>視覚的に表現</strong>するための図です。エンティティ、属性、リレーションシップの3要素で構成されます。</p>

<h2>構成要素</h2>
<table>
<tr><th>要素</th><th>表現</th><th>説明</th></tr>
<tr><td><strong>エンティティ</strong></td><td>長方形</td><td>データのまとまり（例: 顧客、注文）</td></tr>
<tr><td><strong>属性</strong></td><td>エンティティ内のリスト</td><td>エンティティが持つデータ項目</td></tr>
<tr><td><strong>リレーションシップ</strong></td><td>エンティティ間の線</td><td>エンティティ間の関係性</td></tr>
</table>

<h2>主要な表記法</h2>
<h3>IE記法（Information Engineering）</h3>
<p>最も普及している表記法。カーディナリティを「鳥の足」記号で表現します。</p>
<ul>
<li><strong>|</strong> — 「1」を表現</li>
<li><strong>○</strong> — 「0」（任意）を表現</li>
<li><strong>鳥の足（∈）</strong> — 「多」を表現</li>
</ul>

<h3>IDEF1X記法</h3>
<p>米国国防総省で開発。依存エンティティを角丸の長方形で表現し、識別/非識別関係を実線/破線で区別します。</p>

<h2>カーディナリティ（多重度）</h2>
<table>
<tr><th>関係</th><th>意味</th><th>例</th></tr>
<tr><td>1 : 1</td><td>一対一</td><td>社員 : 社員証</td></tr>
<tr><td>1 : N</td><td>一対多</td><td>部署 : 社員</td></tr>
<tr><td>N : M</td><td>多対多</td><td>学生 : 講座（→対照表で解決）</td></tr>
</table>

<h2>ER図の作成手順</h2>
<ol>
<li><strong>エンティティの抽出</strong>: 要件定義書から名詞を拾い出す</li>
<li><strong>属性の定義</strong>: 各エンティティに必要な属性を洗い出す</li>
<li><strong>主キーの決定</strong>: 一意に識別できる属性を選定</li>
<li><strong>リレーションシップの設定</strong>: エンティティ間の関係とカーディナリティを定義</li>
<li><strong>正規化の適用</strong>: 冗長性を排除</li>
<li><strong>レビューと洗練</strong>: 業務エキスパートとのレビュー</li>
</ol>

<div class="info-box note">
<div class="info-box-title">💡 給電指令所システムでの適用例</div>
<p>給電指令所システムのER図では「発電機」「変電所」「送電線」「計測ポイント」「アラーム」「制御指令」などがエンティティ候補となります。これらの間の関係（発電機→計測ポイント=1:N など）を明確にすることが基本設計の重要な作業です。</p>
</div>`,
        references: [
          { title: 'Lucidchart - ER図ガイド', url: 'https://www.lucidchart.com/' },
          { title: 'PrimeNumber - ER図入門', url: 'https://www.primenumber.com/' },
          { title: 'NTT Com - データモデリング', url: 'https://www.ntt.com/' }
        ]
      },
      {
        id: 'crud-diagram',
        title: 'CRUD図の作成と活用',
        summary: '機能×エンティティのマトリクスでデータ操作を可視化',
        tags: ['CRUD図', 'CRUD分析', 'マトリクス', 'データライフサイクル'],
        content: `
<h2>CRUD図とは</h2>
<p>CRUD図は、システムの各機能がどのエンティティに対して、どのような操作（<strong>C</strong>reate/生成、<strong>R</strong>ead/読込、<strong>U</strong>pdate/更新、<strong>D</strong>elete/削除）を行うかを一覧化した<strong>マトリクス図</strong>です。</p>

<h2>CRUD図の構造</h2>
<p>行に機能・プロセス、列にエンティティを配置し、交点にC/R/U/Dを記入します。</p>
<table>
<tr><th>機能＼エンティティ</th><th>発電機</th><th>計測データ</th><th>アラーム</th><th>制御指令</th></tr>
<tr><td>設備登録</td><td><strong>C</strong></td><td></td><td></td><td></td></tr>
<tr><td>計測データ収集</td><td>R</td><td><strong>C</strong></td><td></td><td></td></tr>
<tr><td>アラーム判定</td><td>R</td><td>R</td><td><strong>C</strong></td><td></td></tr>
<tr><td>制御指令発行</td><td>R</td><td>R</td><td></td><td><strong>C</strong></td></tr>
<tr><td>設備情報更新</td><td><strong>U</strong></td><td></td><td></td><td></td></tr>
<tr><td>アラーム確認</td><td></td><td></td><td><strong>U</strong></td><td></td></tr>
<tr><td>設備廃止</td><td><strong>D</strong></td><td></td><td></td><td></td></tr>
</table>

<h2>CRUD図の検証ポイント</h2>
<h3>1. CRUDの網羅性チェック</h3>
<ul>
<li><strong>Cがない列</strong>: データを生成する機能がない → 要件漏れの可能性</li>
<li><strong>Rのみの列</strong>: 生成も更新もないのに読むだけ → 外部データか確認</li>
<li><strong>Dがない列</strong>: 削除機能がない → データが際限なく増加する可能性</li>
<li><strong>空行</strong>: どのエンティティも操作しない機能 → 機能定義の見直し</li>
<li><strong>空列</strong>: どの機能からも操作されないエンティティ → 不要なエンティティか</li>
</ul>

<h3>2. データライフサイクルの確認</h3>
<p>各エンティティがC→R→U→Dの一連のライフサイクルを適切にカバーしているか確認します。</p>

<h2>ER図との関係</h2>
<blockquote>ER図がデータの<strong>「静的な構造」</strong>を示すのに対し、CRUD図はデータの<strong>「動的な操作」</strong>を示します。両者は補完関係にあり、基本設計では併用するのが一般的です。</blockquote>

<div class="info-box important">
<div class="info-box-title">⚠️ 基本設計での活用</div>
<p>CRUD図はテーブル設計の妥当性検証だけでなく、<strong>影響調査</strong>にも有効です。ある機能を変更する際、CRUD図を参照すれば、関連するエンティティを即座に特定できます。</p>
</div>`,
        references: [
          { title: 'Wondershare - CRUD図作成ガイド', url: 'https://www.wondershare.jp/' },
          { title: 'Qiita - CRUD分析手法', url: 'https://qiita.com/' },
          { title: 'セガ技研 - CRUD図活用法', url: 'https://segakuin.com/' }
        ]
      }
    ]
  },
  {
    id: 'fp-estimation',
    title: 'FP法・工数見積もり',
    icon: '📊',
    color: '#fb923c',
    description: 'ファンクションポイント法、NESMA概算法・試算法による工数見積もり',
    articles: [
      {
        id: 'fp-basics',
        title: 'ファンクションポイント法の基礎',
        summary: 'FP法の概要、5つの機能タイプ、IFPUG法の基本',
        tags: ['FP法', 'IFPUG', '機能規模', 'ILF', 'EIF'],
        content: `
<h2>ファンクションポイント（FP）法とは</h2>
<p>FP法は、ソフトウェアの<strong>機能的な規模</strong>を定量化する手法です。ソースコードの行数（LOC）ではなく、ユーザーから見た機能の入出力やデータファイルに着目して規模を測定します。</p>

<h3>FP法の利点</h3>
<ul>
<li>開発言語・技術に依存しない客観的な規模測定</li>
<li>要件定義・基本設計段階から算出可能</li>
<li>過去実績との比較による工数・コスト見積もり</li>
<li>国際標準（ISO/IEC 20926等）として認定</li>
</ul>

<h2>5つの機能タイプ</h2>
<h3>データ機能（2種類）</h3>
<table>
<tr><th>略称</th><th>正式名</th><th>説明</th><th>例</th></tr>
<tr><td><strong>ILF</strong></td><td>内部論理ファイル</td><td>アプリケーション内で管理されるデータ群</td><td>顧客マスタ、発電機テーブル</td></tr>
<tr><td><strong>EIF</strong></td><td>外部インターフェースファイル</td><td>他アプリから参照されるデータ群</td><td>外部気象データ、他系統情報</td></tr>
</table>

<h3>トランザクション機能（3種類）</h3>
<table>
<tr><th>略称</th><th>正式名</th><th>説明</th><th>例</th></tr>
<tr><td><strong>EI</strong></td><td>外部入力</td><td>外部からデータを受け取りILFを更新する処理</td><td>設備登録、制御指令入力</td></tr>
<tr><td><strong>EO</strong></td><td>外部出力</td><td>処理ロジックを含むデータ出力</td><td>需要予測レポート、帳票出力</td></tr>
<tr><td><strong>EQ</strong></td><td>外部照会</td><td>単純なデータ参照・検索</td><td>設備情報照会、計測値表示</td></tr>
</table>

<h2>FP算出の基本フロー</h2>
<ol>
<li>計測対象の境界（アプリケーション境界）を決定</li>
<li>データ機能（ILF, EIF）を識別し複雑度を評価</li>
<li>トランザクション機能（EI, EO, EQ）を識別し複雑度を評価</li>
<li>各機能に対応するFP値を合算 → <strong>未調整FP（UFP）</strong></li>
<li>（必要に応じ）調整係数を乗算 → 調整済FP</li>
</ol>

<h2>複雑度別のFP値（IFPUG法）</h2>
<table>
<tr><th>機能タイプ</th><th>低</th><th>中</th><th>高</th></tr>
<tr><td>ILF</td><td>7</td><td>10</td><td>15</td></tr>
<tr><td>EIF</td><td>5</td><td>7</td><td>10</td></tr>
<tr><td>EI</td><td>3</td><td>4</td><td>6</td></tr>
<tr><td>EO</td><td>4</td><td>5</td><td>7</td></tr>
<tr><td>EQ</td><td>3</td><td>4</td><td>6</td></tr>
</table>

<div class="info-box note">
<div class="info-box-title">💡 FPから工数への変換</div>
<p>FP値を工数に変換するには、過去プロジェクトの実績から「<strong>生産性レート</strong>（1人月あたりのFP数）」を求め、<code>工数 = FP値 ÷ 生産性レート</code> で算出します。日本のSI業界では10～20 FP/人月が一般的な目安です。</p>
</div>`,
        references: [
          { title: 'NESMA - FP法ガイドライン', url: 'https://www.nesma.org/' },
          { title: 'IT学び - FP法入門', url: 'https://itmanabi.com/' },
          { title: 'Wikipedia - ファンクションポイント', url: 'https://ja.wikipedia.org/' }
        ]
      },
      {
        id: 'nesma-methods',
        title: 'NESMA 概算法・試算法',
        summary: 'NESMAが定める3段階のFP算出法（詳細・概算・試算）の使い分け',
        tags: ['NESMA', '概算法', '試算法', 'Estimated FPA', 'Indicative FPA'],
        content: `
<h2>NESMAの3つのFP算出法</h2>
<p>NESMA（Netherlands Software Metrics Association）は、精度と工数のトレードオフに応じた<strong>3段階のFP算出法</strong>を定義しています。</p>

<table>
<tr><th>手法</th><th>精度</th><th>工数</th><th>適用フェーズ</th></tr>
<tr><td><strong>試算法（Indicative FPA）</strong></td><td>±50%</td><td>最小</td><td>構想・企画段階</td></tr>
<tr><td><strong>概算法（Estimated FPA）</strong></td><td>±30%</td><td>中程度</td><td>要件定義～基本設計</td></tr>
<tr><td><strong>詳細法（Detailed FPA）</strong></td><td>±10%</td><td>最大</td><td>基本設計～詳細設計</td></tr>
</table>

<h2>試算法（Indicative FPA）</h2>
<p>データ機能（ILF/EIF）の<strong>数だけ</strong>で算出する最も簡易な方法です。</p>

<div class="info-box important">
<div class="info-box-title">📐 試算法の計算式</div>
<p><strong>FP試算値 = 35 × ILFの数 + 15 × EIFの数</strong></p>
</div>

<h3>前提となる仮定</h3>
<p>この式は、1つのILFに対して平均的に以下のトランザクションが関連するという統計的仮定に基づいています：</p>
<ul>
<li>約3つのEI（登録・更新・削除）</li>
<li>約1つのEO（一覧/レポート出力）</li>
<li>約1つのEQ（検索/照会）</li>
</ul>
<p>したがって 1 ILF あたり: ILF(7) + 3×EI(4) + 1×EO(5) + 1×EQ(4) = <strong>28 ≒ 35</strong>（マージン含む）</p>

<h3>試算法の使いどころ</h3>
<ul>
<li>データモデル（ER図）があれば即座に算出可能</li>
<li>プロジェクトの初期段階でのラフな規模把握</li>
<li>予算申請や企画書作成時の概算根拠</li>
</ul>

<h2>概算法（Estimated FPA）</h2>
<p>全5種の機能タイプを識別しますが、<strong>複雑度の評価を省略</strong>する方法です。</p>

<div class="info-box important">
<div class="info-box-title">📐 概算法のルール</div>
<p>データ機能（ILF, EIF）の複雑度は<strong>すべて「低」</strong>、トランザクション機能（EI, EO, EQ）の複雑度は<strong>すべて「中」</strong>として計算します。</p>
</div>

<h3>概算法の固定FP値</h3>
<table>
<tr><th>機能タイプ</th><th>固定複雑度</th><th>FP値</th></tr>
<tr><td>ILF</td><td>低</td><td><strong>7</strong></td></tr>
<tr><td>EIF</td><td>低</td><td><strong>5</strong></td></tr>
<tr><td>EI</td><td>中</td><td><strong>4</strong></td></tr>
<tr><td>EO</td><td>中</td><td><strong>5</strong></td></tr>
<tr><td>EQ</td><td>中</td><td><strong>4</strong></td></tr>
</table>

<h3>概算法が基本設計に最適な理由</h3>
<ul>
<li>機能タイプの識別は基本設計工程で把握可能</li>
<li>複雑度評価が不要なため短時間で算出</li>
<li>詳細法と比べて工数が1/3～1/5で済む</li>
<li>精度は±30%で、基本設計段階の見積もりには十分</li>
</ul>

<div class="info-box note">
<div class="info-box-title">💡 要件定義→基本設計の見積もり推奨フロー</div>
<p>①要件定義完了時にER図からILF/EIFを抽出して<strong>試算法</strong>でラフ見積もり → ②基本設計で機能一覧が固まったら<strong>概算法</strong>で精度を上げる → ③必要に応じて<strong>詳細法</strong>で精緻化</p>
</div>`,
        references: [
          { title: 'NESMA - Indicative & Estimated FPA', url: 'https://www.nesma.org/' },
          { title: 'NESMA - FP Counting Guidelines', url: 'https://www.nesma.org/' },
          { title: 'Qiita - NESMA概算法の実践', url: 'https://qiita.com/' },
          { title: 'IOS-NET - FP見積もり', url: 'https://www.ios-net.co.jp/' }
        ]
      },
      {
        id: 'fp-calculation-example',
        title: 'FP算出の実践例',
        summary: '給電指令所システムを題材にした概算法の適用例',
        tags: ['計算例', '概算法', '工数変換', '生産性レート'],
        content: `
<h2>計算例: 給電指令所システム（一部）の概算法適用</h2>
<p>以下は仮想的な例として、給電指令所システムの一部機能に概算法を適用した場合の計算です。</p>

<h3>Step 1: データ機能の識別</h3>
<table>
<tr><th>#</th><th>エンティティ名</th><th>種別</th><th>FP値</th></tr>
<tr><td>1</td><td>発電機マスタ</td><td>ILF</td><td>7</td></tr>
<tr><td>2</td><td>変電所マスタ</td><td>ILF</td><td>7</td></tr>
<tr><td>3</td><td>送電線マスタ</td><td>ILF</td><td>7</td></tr>
<tr><td>4</td><td>計測ポイント定義</td><td>ILF</td><td>7</td></tr>
<tr><td>5</td><td>計測データ</td><td>ILF</td><td>7</td></tr>
<tr><td>6</td><td>アラーム定義</td><td>ILF</td><td>7</td></tr>
<tr><td>7</td><td>アラーム履歴</td><td>ILF</td><td>7</td></tr>
<tr><td>8</td><td>制御指令履歴</td><td>ILF</td><td>7</td></tr>
<tr><td>9</td><td>外部気象データ</td><td>EIF</td><td>5</td></tr>
<tr><td>10</td><td>他エリア系統情報</td><td>EIF</td><td>5</td></tr>
<tr><td colspan="3"><strong>データ機能 小計</strong></td><td><strong>66</strong></td></tr>
</table>

<h3>Step 2: トランザクション機能の識別</h3>
<table>
<tr><th>#</th><th>機能名</th><th>種別</th><th>FP値</th></tr>
<tr><td>1</td><td>設備登録</td><td>EI</td><td>4</td></tr>
<tr><td>2</td><td>設備更新</td><td>EI</td><td>4</td></tr>
<tr><td>3</td><td>計測データ取込</td><td>EI</td><td>4</td></tr>
<tr><td>4</td><td>制御指令入力</td><td>EI</td><td>4</td></tr>
<tr><td>5</td><td>アラーム確認操作</td><td>EI</td><td>4</td></tr>
<tr><td>6</td><td>系統図表示</td><td>EQ</td><td>4</td></tr>
<tr><td>7</td><td>設備情報照会</td><td>EQ</td><td>4</td></tr>
<tr><td>8</td><td>計測値トレンド表示</td><td>EQ</td><td>4</td></tr>
<tr><td>9</td><td>アラーム一覧照会</td><td>EQ</td><td>4</td></tr>
<tr><td>10</td><td>日報帳票出力</td><td>EO</td><td>5</td></tr>
<tr><td>11</td><td>需要予測レポート</td><td>EO</td><td>5</td></tr>
<tr><td>12</td><td>運用実績レポート</td><td>EO</td><td>5</td></tr>
<tr><td colspan="3"><strong>トランザクション機能 小計</strong></td><td><strong>51</strong></td></tr>
</table>

<h3>Step 3: 未調整FPの合計</h3>
<table>
<tr><th>区分</th><th>FP値</th></tr>
<tr><td>データ機能</td><td>66</td></tr>
<tr><td>トランザクション機能</td><td>51</td></tr>
<tr><td><strong>未調整FP合計</strong></td><td><strong>117</strong></td></tr>
</table>

<h3>Step 4: 工数への変換</h3>
<table>
<tr><th>生産性レート</th><th>算出工数</th><th>想定</th></tr>
<tr><td>10 FP/人月</td><td>11.7人月</td><td>新規開発・高難度</td></tr>
<tr><td>15 FP/人月</td><td>7.8人月</td><td>通常の開発</td></tr>
<tr><td>20 FP/人月</td><td>5.9人月</td><td>パッケージ活用・熟練チーム</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠ 注意点</div>
<p>上記はシステムの一部機能のみの例です。実際の給電指令所システムは数百～数千のILF/EIFを持つ大規模システムであり、FP値は数万に達する可能性があります。また、生産性レートはプロジェクト特性により大きく変動します。</p>
</div>

<h2>試算法での検算</h2>
<p>同じデータ機能で試算法を適用した場合:</p>
<p><code>FP = 35 × 8(ILF) + 15 × 2(EIF) = 280 + 30 = <strong>310</strong></code></p>
<p>概算法（117 FP）と試算法（310 FP）に差があるのは、試算法がトランザクション機能を多めに仮定しているためです。実際の機能数に基づく概算法は比較的コンパクトになる場合があります。</p>`,
        references: [
          { title: 'PM Laboratory - FP見積もり実践', url: 'https://pm-laboratory.com/' },
          { title: 'Qiita - FP法の計算例', url: 'https://qiita.com/' }
        ]
      }
    ]
  }
];

// Total article count
window.getTotalArticleCount = function () {
  return categories.reduce((sum, cat) => sum + cat.articles.length, 0);
}

// Search articles across all categories
window.searchArticles = function (query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase();
  const results = [];
  for (const cat of categories) {
    for (const article of cat.articles) {
      const searchText = `${article.title} ${article.summary} ${article.tags.join(' ')} ${article.content}`.toLowerCase();
      if (searchText.includes(q)) {
        results.push({ category: cat, article });
      }
    }
  }
  return results;
}
