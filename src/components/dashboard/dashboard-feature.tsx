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
    "4EUTEJbKfqwSw4HYXX5AcxfizBBa3JWwugQbhcJExFPmnjHE2Pc1SRHZk5E6bRneAyNunsqJKTmjeeSLvrYeeghn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5741BK1P1Jb6KJHShDBBuzqLYrRVHwxkQG3PNpnoMhhh6E4jL45Y1WPydazLseA4crMGXVRH74tDza5ysA3ATLXg",
  "key1": "555syt9HYpgWnCHPnmjiELnFoJMrVzfaW1Vstw1XUS1QjU7p2PGjLSSnEes1RGmevc4jHaHHBQqihE4yjJVvZU8e",
  "key2": "4Mp3b6kTEShRVq5V1cD2pePVTy9P6qmwboKA1MaWQT99JVzCWhbjHcLULgb8XEEN3qDhF7ujUcoyLo1Yq42QNDMM",
  "key3": "mUssSCDJWvH9vx74cCG8VQEr4TgZfMNa1k53ZtcTmsnomCX97ket4YWZkLGT8n7HDcXEPmooPAkm6bT1tTzRrvo",
  "key4": "54sBcssrsRNfMfUanHwxmibHDMHDSqVvPqw3x6qZyNyHZLagEgTcmRnpm53CkUFFFgzMBkfkWpFt7dmDQNABs7iA",
  "key5": "2XxhE2Lt5RzbxU1wAa9BhfyAvYqox3S5M9rrorAcmBr3TuL94KSLUq5brmMuF3RaCkKNTh9JcgkqChHKyggQFj45",
  "key6": "3d9oUTWqf5GpHx9VZMfJZmD37wopBuHZX4v9eWa3pFSTwLGC8JktbtQneNP6ePWZkSHnJYgugMDskKYKYVxuZJZV",
  "key7": "38ULAoELPfuY78kVhLoozd8pGr1YAXVneH6f92bubEpiwWkf3oTF1zTSzt7C5Sygc36QyXHWuUJ76XAScGVH6pbo",
  "key8": "3d5Jc1AHMGZtyeLVNCnGtavxcQnXJQub1BRLHm7rDYHFwZrFxgkmwmSfyuP4ncgd71rWFn2jmhnhudhLZJ9sDo6D",
  "key9": "2VUhJ6a21XwfZjL2cR11K9J6qPrcX2vDwkgSc3YnCn9dNpKh42TyFSVxqp1xuM863kEM5HsW7hv33sKT1PRYRJGn",
  "key10": "fB5AhW36iFUxUuAEBwfKKrwhAX2vhhhNpHLHdLJpg8tpPipdJ6ozabkLffdMBsSQNkreCBvusX5CEv1eJpaw3ws",
  "key11": "6VLXXujQjUvXn3RzABASgG9WzcLXS7MzaCx9ErsaNDLVWQm1smMyDtchYYtzCNF4DfFKvfhax1CDymm6S5oABDH",
  "key12": "4WCJFanngD7u8WVq18q2Pr1iQ5ZfFtuuWFg2J6CLYjbutYo3AuRVsbcgVEV5qUPJo7j3YMk8jX9DRgsphpCFae6D",
  "key13": "4qGr3e24ymTxdMa6MGi5RV18tnvKnEU7j6KavNHgHvg8Fn2EUPfM8TdQ6Vf6Fqk71MpG6bA2zocdov36msLt9qFG",
  "key14": "3JYp7rrQxwkSR8dLzo3ucLRazx7xJxxALH17QvWDNG7X6mSRQCAfaToqArejYH5Jyc74q8LmcpQVgSdiPkbapRGh",
  "key15": "2Hcoki5Q2pbpS4jupzLDMZQY6VqdT1vkHmyVA8wEe2N3QiBi9gAz7twYRvR2JzZ4AU7s8oAAfY5DiJtGSc1D8x9d",
  "key16": "3GcH4R5Njnb8Uq6FfNxRNCFvemCPeH6dQ8bhWUquH2jFFeNeRA4EPjRHVtmceLMSfrV8bdXziqQbtfD1UJq2SgTJ",
  "key17": "3A2jf1S7KYsdFcU5E4vigiZTFNop2PyiEkn6gdec1DL2KH8GV4Xhsmot2b9YS4KdrteUgEMB31F4hHrrNR1FEHkA",
  "key18": "3dho1CrHKYDKAGH1f9Zu5T6Jc94Q2mJmmk9bzpETPLpwZXpxH4cYxsSYUzsQWc6BvZjUWXh58pg4aZ21i2hDAzkf",
  "key19": "5QK4wADB2Ghq3fsMijEZs315iirfF2NXyYECA9DF7ZNhQ3rrRxVQUjr6Fi9Qh6qsGJEXkQuhVUg9pH6phAp1tEUm",
  "key20": "2fP5z3LSqTtdVxhr6cjxBNcWFb4sCKC12Fq7dzb6sdMgt7PpjyoHPqeynWhD7To4xzrzxkuvPazN7GhRwBu7MvKg",
  "key21": "2XfpqKMPB9kHpCSwppXB8j52SDp5mdRPR8Y35AFEg5UpuxaLfAMwrBU2LVgLfcNCaUNa2KhPe9wKkUZqLGtvk5ie",
  "key22": "PHS6Y4F9mnT2zq9iBBCAAobv3XoQGz7NE5cLpK5mF6J7dbkrGF9HHAVjNH4kWhvg6ba8etxKEmCTsLfMmqbvR1V",
  "key23": "4brobATzdHvAW4R8gSCqEY8jp9heT8Rsrd37xdLYCexCWx9E9qbZ4Wftpp4NHd9xG4zp383SxZk1izLbX1aRMXD9",
  "key24": "5io5YXn18cTHyYXc7xJYYcfFRFExZ3ig1i8pp3ygQXz2VgDyurgHSBShqk9BDvCJP5Ciz9Gpzbeo4gu53rKg5WzE",
  "key25": "4hRmSu6fkxu2mr4yHqYEnNWXKNtYccdrNR8vAj11atw45ttNts8tHQV1E3PDMmackfNHrtWxJSkqfcr2U4aXBiWs",
  "key26": "5xtq9xKSALW3VKTiAvTY1q2R2XBCp1aKXsofNSRV8aEsBEyvJLRVyuiYSjcy1myarXqt4eRASwzbNuJJEswss6Mr",
  "key27": "64Z6K56hNSCU79pYLA8F2k82WvY5UENaAz9Jq5SU8rNjPS8STNkfgdkP2bp5c1C7sTRMhtTvn3SNRBzk82U5sZvr",
  "key28": "5USMT5GFBHxA44FPpQ8obECWw5hudfK74zrGmrCQ5ig9ZWboRfDwQsYNwyGuKGN2PUL4BbU2oF1JuHN4khLqHmxz",
  "key29": "35e4HzvVc26EWyVWjtAKGXPHPsskZ34zzKfHGYqwcxCacTSr8w5msEzoHk82fVL7DpFrdEnp4S5o7UgPw2kfShtU",
  "key30": "8tyLN3JGwAepzYpBBsj7cufjwynsd6noAsxGv6DRiLixbCTiBW4WYzJAxUM4mKD2MQ8NRNvH6t3RHyKE8r5TSA3",
  "key31": "2FF6a2A5XbHU2bFjCa6F2KdLcyQdBDQetkKmD3siJbJpzJSP8jdrEvtP6JbuXLAagZz5TGXorV1yJC99g3Yy91R",
  "key32": "2CYHrSNntggsNePpzJDNmoZDePm5cgXVwxzFcUuqfck1FKpi19MFfLtRvNK6YY7aZdPsWJ2MSVumUAkTnmNdE5kg",
  "key33": "f5Jc7WntTBCBNfGEVUbQNG5AqU9u9hsJMgGcD7czrYTaknh114KvMzobtipc1vrqkDtftFGjrwZsYdAp6GMn8aG",
  "key34": "5Td96VCpZEmEGN8frsSHRMqDtRZqW44yeE21aU562jQnAmPKYipSQhhSoa7zvpS2uKVKUGvcanzANmwyw9qcA59N",
  "key35": "3Z4ibQpnRJVUMApDnjSKTw5PJB3x9v3RDZXfEq2rZHYXP1APA3XwDDeXFpWheXhkBt1WEqST2TQmBV6iNo5wq7s4",
  "key36": "3K85wSk1PAS194LdGbZxcbDp5t78v6PGZePXHLitAssmyk3KHWQD4UdWZTiTu2dcrCsTcrGr9xH1mLFaGXHqqVXT",
  "key37": "5NXxemsMxxdg5GwtqwUcXcyvFp5Vu2tnhG8zo7LVsTLrQ2spMGH4nintQJzXEQMvvBudP9TcDtpVRQF1PCeDY8RX",
  "key38": "cA6LktPUp3PuZhWKNDib2LGXL94T5hQ3HUu8eTEU9CW1kGnaQYKBfa28zmd5AMZX2ikqXbRx11t77U8BaeLh1Rc",
  "key39": "W9VFtotyNxVVcpw7TYUAtdoryiMiE1DNiYxvRNgtcw22uEe7kMP4rQSiM1brrtNn6yhmoWvFJ64XWVp2YSV4W3b",
  "key40": "2LxDMca1hbCxAcGZLxaGG8zLLsnnMMXcJjfCjsujGosWTWPQrko5NL8SFA7JbqdGGT9JpAb6rk7trJY98TAcSh5g",
  "key41": "2dqJUENmBiCjB6aTVLesd2Ye5RTpmkxKxNfFCPH1JEZtqb5EPKwGpaSXuJj9ExuQ6CTpAHkCZQv9jRRpEezvE1iP",
  "key42": "3iHWkV1911vipgJESKhHvAMAjYqWm79hgkkgnCodWyy4QKBeCKH9jQkSnsRQspQvBf8iYQbKByPBGempdvPi7FSq",
  "key43": "Ywuqd9q54sAVK71mbfSZB5Wwwu4saV9hLoYQiZ6Xarc7KD4McKwRdBp8NxiPmjxurKSxMLC4ewqARwXH6mdJd7p",
  "key44": "5if2vttBf9Wosbj8FUb3enWV56QsoeyZf9rMHvE2u1dtUjg3M2jSNLTA9ynbkqQJtPj2UZXkwecVpG9gSAVdYWgR",
  "key45": "5udtKwt5UEDT3bfF6gMT3xLNuDdEb4FBMh7iwjGxEeAqMCPPtufemhcTQ7qRD22zCpkEAMkUWKwhkuHj8W338CvX",
  "key46": "39jBMkDr1xoyVSEM64kUWnHqwTq1MRZxSEmCuzDVHiqajGFW5dzK3iXYW67d8XsqiUxnreWi9fVCkqmR8ym7x8Xo",
  "key47": "3H4yjUfEk3CvXubkthRhtDDnsRoocUKL5a2jUHXviTtLn9ASoG1Jkh2s6qYHGwsYcNrMoTAWvb3VxfmZS27K5zmD",
  "key48": "4TvLf7my9JTSmVLHYm46nBrHLz2TSydY5qbLYyqgdZuUdZ7iGuHB18S9WbG8QyaHBVRAQuyTtJQJhhmommQ5aEAw"
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
