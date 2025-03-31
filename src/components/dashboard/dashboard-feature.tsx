/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4QFEk6AwVotZwKaqsq8mEQT72eBRHbd1wnErnszWicS5npfVtx9dFcA1Wt3CW4iy15khkPASTrT63DdPkbaskvti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ctGbMpL2wsdtnd8roqghhrgqx8WHBgiYJQ2DwRrkSC5SzsBfavJ3gHaLuVALDmK2Kw9BZuLFwT6QK3rnXjwoK1K",
  "key1": "4Wo6Uxp3SLnE5uiW2EkbtesfMSrjpSx1QQ29gpApWohKeVVYvKLZ5CFGFbDPEV8VuapogccPtfESnMMjWh6tpuHE",
  "key2": "5ieUdnHXk8JJbxbteLp2TcbjMEQgLDabneSFyqYNtFmWGHxvSkHkDuVsax9N3h1MVGKBs1tN4d4PfX2yz1CTLpEB",
  "key3": "2dtnzDQ2uSYjXbRqhrQjcxmwkKjEVtf2CWSAf5egpCQhHS5vTQGb2vEa4HYLCW4E94cZimQfZQxYmogLjEyucPKM",
  "key4": "5ZkrDuvkTzmg3xEhNGB4eu5uxjqb9E22xbURoNvN8bNUEtJyke4VzCS8imgMVGU3Y6LpfPF6Z2TCeMuCm8iZga8z",
  "key5": "618A4rjK9dgHn8Mdxm8oYnSigAtXDMa4qU97JiA7M9mWiFTjtHWUkgzCoU4iThuUFiLG9ZY1iRtjSGgznMJUpY13",
  "key6": "DiuCiwCSSTfosZyohvfLp3fYfpqutmyQsuHEZy4BBoUWLAF3EZjvLiFjoz5EytqTx63ay7w4b1Atn4PrTVfScnV",
  "key7": "4J8q6KYYPKRd4b5Zh5xmyPvAN8Bk6cKS1HoUVrchU22sNqx9Uf1eSVk7pMqfTYSq6a8gfr73CFMdSTLqZztaW4wD",
  "key8": "5jzL4TFRTgHYvodwUto3SyxhT1rMj2vbjmLC9Cf2Zdwn8487B56bm2sb6LeqRpbcpJoGp1r7ns6oXeEQgnG2BUGq",
  "key9": "3vPY67NEtnR9ouVzVmhLuG67QZhLEygf69dqoxo2tHMAwVZMuGLRYCdGaeu8NYULqESvXYhJq1bwRsSjxoDPr9KX",
  "key10": "vgqVW4iv2ZacYdhRa2eGzx6GPd2pRDfPymHvVcUxpqDxHih2vjasjGHkvvfdNrbBnbTsnnRtmTLkNRwid7AQijp",
  "key11": "25yCrnMYWTBKjYywDuUv5BjZoNXRJGQei5A9UeTxWYmgCFaroYWb9epEhhCVQPWgrxu5FVUxckQem5wSR7jBq24b",
  "key12": "3d2ypLVCfuAXKTuxfL5R1Fte1QhyYTMNV26qsmLEN7HZyhsjcHahGgtg98hmRFftrjEnmDBjEAxGgDhFsNre5uPV",
  "key13": "3rZhgc6b5BUPCY7iUZNnqwhy7ixBsBZFvoZo47pHhbitYHVL2r4HEsUoUftf6MJt2NBWDVCdYtw17HgeeQUE62Xc",
  "key14": "5MWqjc5nwbEJ5ao1ttZLbP8Z6a6x6SDEtQJCD864Rnz8Y8hPdZ1bXBTVojxNidJyGo5p9qboXHN67KRsrFtZP9PN",
  "key15": "4926WsfsmpMQiUrzuiv28fNQi1Zksgq3wk85cwvYHGYLFfYwK5AQtYvEoWWZA4d8YET8VprqJADu9bCsC2pD8sEL",
  "key16": "5fWPnNF9Mh6iQe4Hj1zkzvLKuDmpWKGKJcNGmbJPtvoYsTeTh5uoX9ygKdZAfxuoBdyy7AWVsuKQipPodp159HaD",
  "key17": "LJxs5hUkJoW89yg1bZjakHxKZqGWVgSCuiDVfDaCibcdpsyhfrVxhFyAHHnL1HKHXNzuprvJgvP7AVzNqDmyyRR",
  "key18": "2Y4hqLPdZnKcUrX33C2tsiem91sGsD6sV3AD8gUAXhTg5uSwjt41mGx4uZgKi5BjwAXt4HGijmmP1TfLM4VtuWdz",
  "key19": "5jLwAncqgtkWYj8C2ttp7HjmSm9pMatExKH97Bt2QcV7hKgu6WisjGxLESyUTYuiZYvpzMs3CMqo6R5RsbvXxPrc",
  "key20": "3ffrbsHVsV9WrVrHh32BT4YKFvFhbEqaFsF6yAaeme4BuRe4gp2XaiLsF942TaJfGbiG3vgTibDa6ktDgJopsoyT",
  "key21": "2GbFWCNVremKNhsEbo5GLQrKdgL28e8a2Ly3HEYaQpy9bww4kXSFd2jUH2NmyeeACkrHSE3Aq4n5jJD1hZEZRtim",
  "key22": "64kUB3SJ5YPBsbyVAtkMfxuK7XKJsN3sTFj3EbTezyencoT3d4Umca6pCTUPaEy1jGEDboob6Ym4WKCfgmc2fCd5",
  "key23": "5Rrh3TvNFmHp9Kyoq8fs9CQ9J4xUsuVkRe4eNg7hdssjvrTp7vAkdNdn17qRmD585qkd94RKddcLoPYMAeaxQrqW",
  "key24": "37Lhu5HrL4JS2uBWKWz3qWbMQoKChcNe6b9LJwrFi1Edy6E37CTqUZoPahksgyxMZ3ZMKRcrZ1zw7nkVGsxguKd6",
  "key25": "3SNfBtjr2joET8ENbZ116h7Aok3wEJWCXzkR54AeUbyqrtt6TYCLMNdDgDGbC28GpgC7FQ5KnhrUzefDwgd5mkvM",
  "key26": "57ndVkGXdUCt2ArAwRoWLASZQvmRwQDo2SD6fQgmhNRGZR1QcPrvJSriuvtWSn1UgpxSE6ihooAV5Wpu6QDFMVBD",
  "key27": "5m3KfxmB16UDXTQd1SrmNoteHaDddYYxDfS6ghwkbBAYCsvPCw8qLB55y2gRgmhfuWMPPVDXFVihFn2KE8DcxhTF",
  "key28": "5gng2JtqPFLh8BPpRzASGcSak7RAJqXyUpn1HKrB9NSBPdfZYvHQ8oo6argnByjGUFh9hnbbPPV1Zud3ZmgCAXEV",
  "key29": "2Pmfb4NoKHkHdhrTRDVebw2U1pp6MwJddmYu47AL64BiyGytrhFtuA83p4infRHSo6ea6NjxZQwHvf5weLaGruun"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
