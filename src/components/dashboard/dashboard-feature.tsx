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
    "57uGAYZhiN6Vtctekry6jPdr8yjXkdfihDJx1C46vt9614PuuXU5ecqo74vsScLk6AYViUwvf6bMCgwt5FKyz1eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jxSyDHBafM7W7ZzwNnfY1hutLVJEbBuhBwwTguCHF1oibSC9BhDxMaKnvZd2JBj7Q5p6k3VHPMYDtmA8pu5a7Tg",
  "key1": "4Uyp42uFcHoyHZEtM1ncTaVq1uWHzrshVB6HsWykz8ckmVaEbjGUhqiin8MfRMGLvdQvHKJ3xbYXQGTcSsRbPd4R",
  "key2": "45CTd2rX4epcKsqC1sHNshMBMBPrpUexdAiM3QmwRUQSbTRJbR84SbRN8zN3zvGCZx1YSXXH6vRmUdDqNbnZCh8B",
  "key3": "4fcNANWeMJ519QmWDrjjnH1LiTdkooHAQ8ZMV1Wq47VmdBjixfy3JVfdXejv5zXfN7RjpURh6zmsc1K2dkirHepB",
  "key4": "3xjLUFc6QvAQZCkPudmqQSwNjcPh2gT3msFQs52LotxHCuo2PL9tGBSwKif8wEUKrH8oyZgymCDGWC5uqJ5GL73",
  "key5": "2FaA5J9FZLoFVjiQ6pzosDJPPWds9B43SBtaNEMVBXy9rxCkRgrSnZaJjEzeB8sXyf3pQRm4AnK2xpLyy8S2PsjD",
  "key6": "2kmEpfQPfzZDSWryyv5vkEsjATuWNGvBC4YA64V6mkxy8CaDJG2hYjRbyWFUSDg4Asr2pd2Z3RGYGEYcuhTH5qQp",
  "key7": "3iamK9LK6avDd2JVr1iCny6ujVfftwSfmJPVDKbMf1LFfw7TjMmZQWvZeLpdMAEfCrCVxKheTHWjX9Y4FvCyD73L",
  "key8": "4ukQPX4nFuReXioSDCmR33Wdk8WyeN43UbpqCGgs4Ufi9oiZGEtu2cPr4AavNSnhGWXLTDFaD24QpawpYPMrZnV5",
  "key9": "5FYp7YN4ZY38Mba9k7B6rMwVYfgTfDv8QYpBtEy5PEwmhcAvT3qM5taZDTFrz1mDoWZy4otewHBLAJ6aLKhfrnxw",
  "key10": "2MtiP2swKuKrh4gQmPaTPt1pQspeSLeDvCtUjgumpxCaytXSvkZoFQx2omBSPRi7F2gzxmLMYja6i5u7gQ4uaphv",
  "key11": "2DEQNVqwWTjDXeaZeiKZc94J5BjiMpBo43F9PmuCxuAwD7aaBataz2LxgB1zRiinzpC3MGc76QYRmtpGa3xWAPim",
  "key12": "3nAGoBrC2kv2vw33ZSSYcd2anUBw9AbeK62PoFM4He7t84hgLAt88eYB4kfmW97nWnnPKKqt1zgjScLFettvpe1Y",
  "key13": "EYKTECnvd4hB92T2M7fXJYPaFQea9CWLM7MEZMhnyB4po8HeVaJP1Sf2eNJdXD8Q2Wy7M7ZXE9Tgkk588RhSBv2",
  "key14": "3toAvGnEJcoqKMaRwq88JkdxA94C1mFkxgVvdEgADsppUMnCGSeVNb6GjowB9bSXSUQVrBHAtGDQCPoFU56o251b",
  "key15": "5VPvtcDc8gdAFSibtmkgvpUf5uTQqxiMsKqoECsTFUuMbx9rrqaisx6KHHZx4Q9RHycZrHNPKePNhhEBf6uf9BhT",
  "key16": "f7GUi5sPP35KAsyLe23Gh2inCR85ALGwAdps4BtV9b7KGipwSLBjfEHg7vin2pYTMA2wCrt26oNzqtV9G3sUeFf",
  "key17": "36aRCrZQUo5qRSsmAfDZyybyLnqm5jE69Fwe6u2JRX2PV1QUyDgtvMvUj2H3P1CePWFsU73Ldmvv6B7yfJWMgBEP",
  "key18": "2TBApMYwEDsZgwGrcQYYc7qiG474u56LnP5x7VRQBoKWkSWSFaqnifasgHmf1WoNkPTuh4dnpNuz73LZXTSXo31U",
  "key19": "3jLcxKQNUmVnbbAKPjFCzo7GuxpUQFV2L8nkytfGhkTX4XgRYg8mMpGwRrNpPtUr6nu29cvbw3aXkkRfFrfw3ptQ",
  "key20": "3b4YCjfuaoecYG4CLbLN8SG5kp51z7RHD3YSmWvDAKC3v57ihPXhhvp9jyfRDhrob7BqxF24vknAVB6z4buwTCse",
  "key21": "2Sq7aFmR3qpsm4jj1ccjjo2jKLFW9UNVirajqXGpALCaZRExf1rFiNQJunicgF6F6HWBP28iZpGSoMxL7PFokUdJ",
  "key22": "2LehdDEo7jKgEGS9CN9WooUMLsE3BoxGoFRHrFzZVkWSrorGQzycGdoF2dC8Zy5zDgNxDYnwxaVxmpqCpxgT816x",
  "key23": "4f9rCuiZH5HGMC2ArVZMQEYVvCWEU4EE2JmyGxReoAcDqe2NrcJuB9Ks1XsgbMbKGwwwPUPvxcbRwhHsPPtGeNK9",
  "key24": "5MkqDftWMGhWv2DewMbFu1xbA62Hut3wsGfS9bVRe5rZBfRb4Yq775258Z9v2fVsQzmb8tu647QJ3huLqA7zHXET",
  "key25": "3ea9nNV15g6N5vgBZ4cvp98DZbHsRtkAHchjJz7CbcxSyhn6B5HciU22x7euqiNzv1FfyMVVp3M1wcDMUrfy8yuS",
  "key26": "4yE6mPDhWLQJhNdzzRVDoRY87xHGGqjTXVmoudRguwaoKCbgQNeotZStHi1aCP1yiar7H3gNgmiudSD5AHyCDFZj",
  "key27": "5EEN2FAoqEtjaPvhrkxMEwy45U2jaTDLs9Hgud246tCyKkydLq9hTYKdBXpb8CZDmcRAJFEPhYn3Gi1Cdauomf9Y",
  "key28": "4mQQV13ttVvDk7tiXaWFM9jkthkJBe9SzixaZyuc4YoytBhV9NV5deGbPkXsqqrnM1BRn1niFiLq1v6gjRpw6msL",
  "key29": "2Seqx6WkcJQydAY4UUcbUR5tY5f1VbqWnuqEvAjhRHaBQyaHZdkjaDqaiT7RhBPZXa9SYYRVkm6LUxRGwk3bkNfi",
  "key30": "29hDR9asZQyu5eQhqnkvJumLLybGMvoFoKMDbft4rrERrmqwf6jWwDrSvjo53wFrLWvrqh2pRXRQbDYgsKakWqsA",
  "key31": "5czdps38E9WHZoCkwZt8BwcPTBG6tLX2aAh7Ck3STaKoaUHpttxMT7HbqUxRmBsXuJaiK9xuE3Gu96T2J2Wazarb",
  "key32": "4xcrP1mgj39Wzm65sfKq8SzafRpYNdMegfw8w5bfaKQjiieD7Likcmg5ftxAm1T4UBy1u9swAFdt1zMLj2TRAbuo",
  "key33": "3Mivn2eEDBUg8bu2xiDL3KfxyLkSvcB7TYzPUXBzJQayrXSBj7cFv5MnvvLBS1cYiozakHMRvCb9qNE9vp47DNom",
  "key34": "2DpdDKGae4Cri8ZFezyjna71hEhek3AdcWSJMMMSMQ9VBJVgHkJyb35H3GxDsCABmHRqDy6Yb7FipDNUioCCA4et",
  "key35": "5WSmeRnbU5MkgriCsWh3NdsNK9PzG1UzFrha1QcSy5Xg22aFWDTwAu644yj8KmoSLqrFagdUf3j7SyYJNHvww4pu",
  "key36": "2fV1jfBXP4hJBb7oCPqfARSrq2Z999u53DoXq2yxSRfoYeNfLUYFUt4saiY45oRr8AVbbgtVsgSuZZ2WfT1ZmQYm",
  "key37": "5sQMcskbWPGHqNNveL7hg8patT6QRxdjQHfDWCEyhshocS7dviy5fwbcpWNQnjiFck7XPeGvXsCPJSgfmFgrD9oN",
  "key38": "3cak5BYAbpozfvMttdmWbKuedHeJUrNYcjcwVdcExtqYSYXf687ZHJ8xVjvxG1Us8DxfThPAmpEv9yJm6RfhK3Hy"
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
