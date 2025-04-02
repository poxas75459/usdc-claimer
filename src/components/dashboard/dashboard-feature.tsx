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
    "2LE11etkdLLNgkJRQL4zeM3WrWHaBA561Wd8Fv4ujT3TdqLgh9cd6pZimC1Tyc11FhPUPyiShkpdHuAXpVXfoN7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A4Nr2w3YhFZnbt1wDdR5yTanbCqpr1cZzrn5ggB7MJxrjsv4tgd2mFBvmjRpiB2Ai1wyH9nDmwaVNbXqXF5DXFi",
  "key1": "2nD7Yod8pRFAizLna8Gr35W4Rt41iTPJFqJbk35vuaKu6Yk6LdcvitzNtgtRW5PgkuqDE1NBSt77ozh5jXtALHXF",
  "key2": "2eYQsTwgFEsYe98e9JR1BzYmFrKkjMsjNiAK1m17eirV48oyNp9k2fyW5mXp1vjuUVn9PLVULCaKcrjobXW5xC7Z",
  "key3": "5BifraWvhr75w8cyF3SuHQBXN82uQ3N3ykzZh4n1HAbHhLasQ3aVagHDuDkjz1FfdzQbdbqLC7NAWHTexWeZhHvM",
  "key4": "eSR3jBbMqWpfaibdkE17fwwRnnfo7Cafc4cYJ5sTKNsehYnwZoYf3G4MxgXY2y7rzAfmXKpNUxeE2npbtg7YYEK",
  "key5": "oVEhUAQ3KevRUd9ojbM2it6poZFxkMkibyBP6ZVPtDcmbs35okkiZHuppagehr7nubdaDkrtq9YqDfVMpzZrdH1",
  "key6": "52iu2pFF79pXyVYVyRafjgcMym7uHWVDNC3aRANCiUmf44PMzP2Ebt9tFxofQ9qodo56sVgW6owx9vyvpSpFEyag",
  "key7": "3M4ZZVKJuLdULoaM2HxEkWjmfVjd5rJdLhKPj9XsvFyS31c8q5gcNSKohW6pr1ppcWq522nZfi8zRcmyve4BzBm5",
  "key8": "2YfDbN2TG36mxX6ecyLk4qUmaBK4vqxFYNTCpMST6dmvtHbSHbcEbnMMUmBtYAQtJhiLYVLoRxGB12Eg1CSnYMh2",
  "key9": "56D5XhBcAWeyM1TnMjyZSPxAJvghdgxW5bjCnZG62GrCQazR9qhq46HhaZrZBPwaYTevs9FLJ1LtoDvmpkeT8yPj",
  "key10": "4ns91hHr2MtQwH4o5ZM2W77KBTHc2KpCczWp8LEe7znaJM9zgUXJD7dED8nqg6uDuhixAJdFpaEjJarXP4NDEfQc",
  "key11": "3dUod5GSX8zuxRVbvsVszocKPP5VU6ijjtaR7Xth3K3zedfExFamdwpuRunpegerk7AZNY6qjDt1pywZSVN47AtE",
  "key12": "58CnPgsXkP7P4m3si9Y98jyWz8RD5Y8gFBtEbMqyFyFQSSDKXv2VhcokcYhaPo41wNZd8iJ9VS643izp2WZKzvHx",
  "key13": "5jGY7qLk1bj7QMWFQHztY6HndE6LPmwXjifJgZuyEKexP6W2ZnKAZdr6ARHdkvgAi4AZBKDEYHGVRS5GsTWz9QAg",
  "key14": "3LJRBYrHQHecBXi5u2dkaF3cyFXAYJxpfzzxRYNhfQ7ChLK9AErNCC14qwyT9NmqdrZZWrLyMAiyDdgVUXEjUrQx",
  "key15": "3tXeHRLWrDz8KBLxpA4aJuqUaSXvujwccbZvTetSTrREJsRXxCMuxwfAqH66WfkbChUsEYv1eY3ra5YoMyzK13bz",
  "key16": "3Sw34bmBEw4tDWyYcYEwk8WC6gwFRBRN4UiQn57Cmxoqdytw45a78JQsttuwHL6u8EUqTq4TDcPM8t9qs3YYERZ",
  "key17": "36vB9AHgXRvCnBaKpSocGSZHeRkkhR3zY2cxF2RQSxnTKip6LjCXdq7ESQqf3THnCJNMKWog63ykf94tC4bS5R2y",
  "key18": "2M3699FcJvzSS45yAwigCM5YeN39GTQ8J4dtpF3gMGpije945TuTLdr4soQW6TdrcMc6d9yUMB8akoDhSTENcMCV",
  "key19": "UM6qHNf5jH4QNrDzgpcnbjDNPMHBGtL4y8Qj7uQPidqH3suqfeQymGJSfWzNWsFui676NFpS6Kg1u5yE9fr2maG",
  "key20": "BoMuEMToerN7L75TvLNVzKxPhq1XERgr4oqVUGPymvPgJ7bmvEB8egrXwXm1WQfhLGuttHncE1rBBYgKpBsRzsy",
  "key21": "2LjfEFCaZj6U3sUqFcc3wEtmD532N44cEhm646M9E2cXdLwBynm6Kg2D9wiLUjQ6ZzFRz6E46EVW7oPYZdNCekad",
  "key22": "3sDokFWRqmWh4mf9sBpWxLyTRrr34ZZk5fNjezYrZijFBSMHUNiiVSZkGy4uFx8ndL7TfWdsDGMmV51YCJjUC7er",
  "key23": "2TC5j2RoRGwGboz5Zn6ZvokLBCDWE7BcRV2YC5GaLmTbFcDqpWVo4dq8XEWKqutd2Y5d2ypQgfwNTqrLjgNtJ9tL",
  "key24": "2eddqvG8gNJ64xVrTQxV8AAt9KE1VgHYTCmXcjBiSyxMcVMEWy3nYykxmsFMsm2KSWPHAtQPk9i3pdeGYrFSdEXc",
  "key25": "44C7Sbjx5avsRQ1V7BgTMhNdXe1L6YsApMJxytM9sFLfwgdBmVhywSrkiPAhmg2gHn3tX8z67JFcaEXFXwbqc5Sa",
  "key26": "3ydmFpqLHJFW9oZNjLvSdxb1BeapJMmPjYxWzeFMeb3i6TKrFDAv54kkQhSBUfhvhTYuoFBo1aH6x2MXNw5Fomiq",
  "key27": "NHGGFajUros47YiSeR5Zu8keUMSmihmLP6FyMBrLv4A7FDRSA3nEcBQs4p35kn5DfzW4mXVApGiSCz9KD3zgwf9",
  "key28": "49iFgqM2aoEjeK37WDDUx6TAou4AFrD1vZt58HhpHRYS5Yqoy1SSKakeXv7PLa2bgkbM3BTGdTdncTvXobmF6DSM",
  "key29": "3uKL8rPeGrCL5FrKoFb7pwQo6LP91PS5RxddYvoBnDVUDgjzaGmTdWqvNwTtWFTTj1sWpT1oXtp9n8DRG8jVysVD",
  "key30": "2AXQ6JzeQi74EioBeV831e2z5ZuJxFLuWQWaRSJB5xVRZhSvC8wvAzZRSW1xx9wZmZfJb2zbTQF9NRjeMWLmCh44",
  "key31": "2fNCvvJZZCMcdeoha6fkAJNS1ePgeLQcSjK3SLTNxGrcc3JuyuRi7D3mo3pevHNJGLg9s1AeDLANAZUKdsNVMmdw",
  "key32": "511oFAwxi2SEsPHWRyqR94Lbd5DViTyCuiJd66mRJa5zCXL2mnQch6ontnqHyMgv9vyP6KUzPdHmKdMrgEsG3FP3",
  "key33": "pHYMaBaarHw7xcKD6Sn2vLcJe8DQeTP6AWWPukDc88rhW9Re8Su6LSAPuzA8KZF2MBaJ3Pdq5zq11NRoCccJyZd",
  "key34": "3DzJvUwqUPAx2462HxQ1M8PZvXR1PQLfhvPRTpZ63ZvZWVs4xa7s2DgNhx7Yd1uSsAaDFAoLFp7FozEPJEGUkfTP"
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
