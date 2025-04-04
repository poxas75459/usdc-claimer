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
    "55Tf6mLL9huQAXjaAyHsz3PGagJTe81KezG6F6TY4nmPTWmWypPAkYNrSyLDmsebKHqWbzuk8JP7MBa8qqQMbRvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u7PhYrJSC2aUhBpdbSXfgh26fGSAw33iC6MF7ucoCFSbS8YFEDfhASQQi8xoAjBEcguLdGvmC1umLfuhU32ik9L",
  "key1": "35cwZjokBf4GzZW3SFTVfrxKz3GK1swhVV8M3H3R5HmUXHq14Pq9rY5MxNgpGDnSUeDU2yn536JtNRivZsND5BmQ",
  "key2": "4m8yPrKHdqiBoTJNH5MUvGqqNRmYw2LYGibmvuscYgAEBTmD5DyqAufu6814vRNzprzxFrW4UvYaoUUmRfurtmBD",
  "key3": "5WiGjFd92yL1TC49Gw9Z3ESCnWcw1D2gqiRrzKirbknE8Mbzt1m6G9PhVQtB72bDBHNs6LhEtMsFQY4bRUN7qewk",
  "key4": "VdTF2fQvdyB8MGm4hNpf8CwzuSoLuKPcSvM4DuvU9qK6r6EKePDY1UyHEQQLHdG4MFGLcDZBEgRu8xiqwGo1qKi",
  "key5": "Dj1aEi8p8VL1RhYPieWWuXpjrrCUmcBnHR93xCjt9KjZJPorySBx7LWBh4XLqdBW5tCjkTxDX9ykfddPs1XxuZP",
  "key6": "h7J6vNiXrx35gY52ezFNXAMmwPoYdWA48QUkubcKnShy4nF1ULd4eykcom8pZUZ2iRLJp17EQxfTUT1go1HrfQZ",
  "key7": "4kBu6EoWq7HWRaoHrcTVELyYfr1XuZY5dvbtpFrvU5ysUzNhsNpx3uCVvL8hUWUvWvLnWC6SLsuUQNWW97NLVtFW",
  "key8": "2zpUYwXjQBbDaNYaFnt1fPp5wY9ZvCs3x7ozrqkjaf4p6SkEzDGLnoCdTLrxcy4iMCx5Qy4wXbJbzSuYrhE2aKmX",
  "key9": "4cncX2NTEYzMooAvLY5A2poNNoAwxdB5TvJCvgydCUDPd5bvFozph3aeimcJhaqPwhRvn7mgU7rGv2Kdz4Be5ryM",
  "key10": "5gRzi1GewPwTyJfBuoy39UcCRrHeHNXTRkybbidDn7psKXH4WEGSfZQKvUJKnugafMAXNaNboMma8iB2gFjcHTyg",
  "key11": "3M5KSQanfbfDBAdTMFNWPodC3UQC1CCqmZj9YcyLqZXzAQZVCb8Yz2yy9RWhyAqZeQFf67nRekX2k8TvT9f5285H",
  "key12": "5ZfUpE16NY7pqVYA9gorfrY9sLZKKqkT97FcL97UenFVDRthAY1PAzrxFJN3BpfNVwSt71E7Jrhicmc29q1si7Dj",
  "key13": "9TE9w1XtLis2xWNTGvHdHEyYpAFuocV4gemaMGbtSuSYY1btG7dRYwYgaJvYyK7tEHBAnm7b7PAUMdsnpzwbPJN",
  "key14": "5uVHzd3ytC6cw1gDAwQyKaoUyqTQjxkdQA2Xm4CLZqchrUQFk5RS1oJc8kkPd7hKzTPqFXEiXKqZ6oovGbMvskFa",
  "key15": "2qsz2rtFtihbdjtyaVy66NjyS3vupUmcwST6c8DvdbWfC7d1pSDJYacSQuA6ooyRZEG7iBD2fSndZ6bjdcbgydKT",
  "key16": "2F2nbfdF5qmQyfc484c8gA67hNGTVeLjGDE7VYbh2JvAVsSbtnBu9YcsxLZAAcEggrsifCCEH1nSoKsZB7EDFYrW",
  "key17": "43P1Svt9DeuFeELB42KnXFjqZay5Y847pcDpuPFwYzQLjtPtsfVL822YfZdw4f4pb2a3jwAJMeK2JyhjeucHhV1p",
  "key18": "5i8wH7XrM5DZyArJyZrGHGTDxnzxpoxcbA6396DnXJ5qZUdXUPUUe82CiedAWQ5GxBR3v4VuHaV6HDANMkiScwQ2",
  "key19": "2oSN36BgmDsY77H4eKLf7khNc5U6fcNPDaD17zbQScGnMvTVQirPk5jngM7ps2UmyFT2HdFC1cDF2BMEaCYqAvVw",
  "key20": "3Y685wZRFnDSCpoxgjxNg22iy7QywX2uoL7UXRB3ugvLLXaHGNFvjcNhGcGTxWirQEkw4H82EbG8zmPdN2eSKNd3",
  "key21": "2bH4t2VeTY1FKJXEzFpW3gjMoiVXY36UHooeYuNueJP6459se8SjEMv9CkKJRvop31ztqbC2jC4o7TCvEeciSaaw",
  "key22": "3ozP3RUVVCYnrM4iCCacY5FU9pAokbDBtQgB5mJoLgPfQooXoVjik4jFNaWCeQHf6b5gPyvVvdDmYE3sPW6F9NGa",
  "key23": "4MA6A5kWL94k2zMhMDYs4V5kfboZnsrDSrfBoTtdByzjgz24i1MiFbp78j4y5W4JejdE5G75xNeUqfJxVuw9JBNw",
  "key24": "FbuJZmCLV98s6tgEgkBqzCPka2JMscLeePhtdX8tRpp7izCT2tyF1TKwcwKmV4uSqUxa8NHtnVTYoDxtb5xhaxU",
  "key25": "Qp12rCGXEq7BDpkwcViQRpaSKTNedEF66azR97hoMwNXqcE6dkB8QWMwme2aCU5LLkSBjzVXw3EYZhAqbK9ddTj",
  "key26": "2Dm92yQUL1RVDG1VgFjfBHYGxbh5NKwTZjxtK9snSXmpQ1ifqkgKTQNEd1vr4VkfiTyNK3tgbqqzCKMHNvHXbmDY",
  "key27": "5CDDw9wdzJEWZzCwTjFoHCkZWnzwfuycpa6xsjRMzzcpcuHRsP5pDHmEqaaNsbzKqvyXBeW4FrrzEGURCStxdBeH",
  "key28": "3cSaonmjR5v3CujRghatwZeA9JBLjyXzg8b2iNns3JJcqgaxj6gvJNwn9UkoZoKVRSLb2QG4c1ghLc7CGBPxKa4U",
  "key29": "5j9R2URgnYsQScxSv3aBCQFSddTdp3kZd2x1SqXS7qMkhJfFjP9x3LC7Rzrmp9YCcM7X1KXN1axp38MQHnpYu4LA",
  "key30": "2bWhNPzaXya9Z7RQUuqLqJvkdrFFsHZ3Y7YJEhguwNQuQge1TaogAxdMJDXMvAAhNn5qwmKNTJvohA38ChSQbjTJ",
  "key31": "bT36C9ivuogrvTQS9LLzDDVA4B4LmH66uAFUHNJrFftxwYQPDgiQjCyzcLwwzhQiR71NPXtgFt2hxpTBXRLboiQ",
  "key32": "4MyBymJmE9MAJbNKJFqhMzJm6uEmE9XSsEBXRVGVmMwDVdkFmywBL2ehDjcsctmFiZBNiWjqXGgzRfmamzemcw4m",
  "key33": "2S34gxgywMCk2xbi8dEHR7zx1m39KT5htf4fSH6Pf3LT3oyoyM5o19SBgpjxtJjAd255TgVSzd7uoPLPJC1cq1eW",
  "key34": "4rtB6Pz6ECKM7Pqnt2hmrZHoFZ7vapQiR7NupGYj2Dx7TdaeQcGr1kDDD3ZJYb9XK1kuGaU8eQbfAY5BKtNSShDR",
  "key35": "qMtWuGsh9SH4Ukcs6PctHDVazkcgbsDHB6UR6dKkzhF2QW2m6id9XRqmtAwVcB59r56MnwKpx6HuriF7mRTRkaE",
  "key36": "3sEAMkNLCMD6og3WoqW7J6eiUxmm6yvc6shB3Gg5fMmpLu6eTJLSkc2b8pcC9CF84RcKrjryn8h1K6Nqz3uRgvN7",
  "key37": "65DdSifRUFFeXMoZeN1Zov7N5bcnB9qG4qeyv9n8Ky1pJqDftTUv9b1dYUqzd7ETFbPWoGTmdmb8M6WndrT763zG",
  "key38": "4q7VMZ6VbaiPRG5MGts3dMaQKoHJsp38q1ikjPRkMrD2kvKNv3WSsQSrQHt1xmzCeqJvejCiPVySnvoF4uJyQ7jv"
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
