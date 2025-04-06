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
    "V9QmrzsiQCEmSMmN1sL72x5TTmYuD5qozhL3ZSKNwhfhAPyFRqjqTn2bf5sRPPgucdBC7qaZ2MCLyKyUbh1GuHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65CRruBiyS95TUaCkhP6zpopa2BoAVuUY7ZpyGqDYRfHDEp5iSDWfxNatbqbMxVUaKDwBS1pKCos8dr5TVch7aAV",
  "key1": "5t6KrqJPyDnYubrozLZyNZpWSttndNHDfdp6mJBXZWj4YZAw4F7YegZ6nRYf6qMUXGo9A9CDawMDUrfMZZ8ZofBu",
  "key2": "4vPLSJ2M5AB8QXB4rRro4cukJpFj25rjQpXApeLF9KUKDgLXu6hi7aRUvBEipsCnBjRRi5LX8ztFVWuXeQ32WLpj",
  "key3": "2eEG8fsDXCCL5Y6VyAV4oNBTXhRPvfCiAnmvYWwXZau1tmfrdXVUKyvkRiS28NuaMZzxaYDqXwfMtN2NUL2TsnHR",
  "key4": "4TckiLzTq8ZCCuUBxXFYQH1rVq4yGuq6BSpitqi6y1irQLpzn7751SFkq1Lrjudw5hqwybdxfvuw65bxd6g4P8A9",
  "key5": "BPyyFskz7iwsc9SwE3Riky6LmKirKaTSgq8FeVriiGpdoV3AHEZMv453NEGemhHipEkmsoATx2Ra5nRyTv663Cq",
  "key6": "4e7gPQNam1JCU3sNpjF98c3LLfA6RPsYPQPXzK57STvwWomdygoMbncTWEj6fSPvYY2mYPu6z7pZNkmXaexYoNRw",
  "key7": "4rVBEbasK3QV5YjEftV8hEQ5vVWLk8qf7JX8FTttiyxYC9gepwURqmHLTf1GWruQ8Xv4RVHxi2b16YanLKdqw48T",
  "key8": "2rqwYmjSHXHbq33zb1Zqto5iowSsv6y6Q1fuPE6YXufgQawDWiLEtEAYnRzXGx2hvkWQWXFHCALZiRUEcaPwqswV",
  "key9": "3iqF4e26HJMnN8LvrBguUG6ZgagytktvLXsbyG9hf7mgVsKsuFgg7SkwfCULKWNC8JUcE9Qpy63ihxMnFrdv2Us3",
  "key10": "4Y4UfrYf125PGZT4U8ZuSeFU61MEnd64XgfETxmwFdE93WbEbZ3PW4WoMHzKz5oTY4KYBNvnK7tqwn5WkvGzP1wB",
  "key11": "4AXu1d6D43sKX798XTyz63owMuaKRJ5VdMsEVB7jTFfhAf9tKuPNDEiVb5DJACMT63zCPPEDvf8LjJyV9ZzV9p85",
  "key12": "4pt5uz5QAo82nRVXqe3NcGfDJVMkYnVgZmtKrDi7AJtamVHCZgg9MnbGdHkcNnnBBJoFJpPNTHPrt5FuCoi5tonH",
  "key13": "2Se4j7Z75sVmH5VtcVaph81F6E4aqosfwfBHjP1ezYTGBeiVRcexiVgFmktg16eJndMmBXnk4NGuvGNyXQwntJk3",
  "key14": "2gBAbZ1zCVPyt4nGDBew8dsv9evLeVo82NZCu3NDM37cV9vEibQh3njom3uG7FRmgQr1Vjf1uo7o7hJvWxnFNk5A",
  "key15": "4KYbfMXphSo2PXuMSk97PjRnH7jBDAnGt8PnvJryhc6b88s96Rr6KGuM28ZSjydf1ETWHUL6GxTMNSi2d4RM5Kia",
  "key16": "3x7e9Ex18VzxJJwLHJCJWjAYLazAZGxgCn1NTYxrfCkkwk7eYvmRqt7X62TjVGiH3MhwHZ7xjqYcbG4dKetQHb11",
  "key17": "13WncT5nosdfoioCUVstT4FAxcen7D3i6MiiuWufMmvMVKtQftsfK6BtXjnHjfVPcGEA643KUpoDZhBbCyixaNi",
  "key18": "5yBY6u3ENHtQp9JjdBKF8eYB7aq5wqrtFPpeJsWk5hsT3iGjoeEpydMUS7C9ojhBqEihiTJYhCpqH46E5iyXCFdy",
  "key19": "RmqukphUyzjPexFohYqA2M5QGEp9UsmDkLyqrX3w6ExL3GCYP3zMgdFL5gaRQHvWPYrnEdXB2zXZj2jgJBiCRTx",
  "key20": "5nYHQoV8EqE4WHcfmVQNJHFEkZjg5NajQa33bXWLoTnHirLkAPD6gu5Hp2x3JWKLs2vVXnbjtxsv4t1Di6KcHa8n",
  "key21": "4MrDWPubpBfkWiUG4D3Ueq9EY6mw8pDug6AfQha5AyiC9YHWxALCxtDCa5ZbmxJW3EKvyEoPiAuwEeHCiSUUZsxt",
  "key22": "FD11uTCD5DA3PJYEfMUY9jLENwxtq7kjBviK9kq19cc4ip8wACywE8bkvGCnhoAo6n9XV9sEtTvyJQ7cpBjxBT3",
  "key23": "WH3sjMRqGL8cAYfsYMysGZGykvoqo2s1fsfP8fxsZk87wAJ4VWkMk6U315Z83akHdb9Jh5pKz6s9CEsr4yeKKAn",
  "key24": "4y4XrkYDQ2HoBmrBb7heDUFAw98LQQk7rJfDSRtZy8BcjmQanvgaX2K3DawpddGkKM2t6yi8gSpGoGESPBEzxc47",
  "key25": "5745avYMKSmTX1vwaugmKmcBvMJ79i68PJFHDQV2b6oyC6PbdVhSnHxk1jMW1DxaGR9BHVL9N1ARcAMWmQYMkqA9",
  "key26": "5wGKWTDvvbJpRKpkLudyJsrYTFpawaZwQKH4SRfGRGBexSMAaCLmt98hmiH21MQ3s42o6y4EHHeP6aFBJiXjxy1Y",
  "key27": "46BojWaQmAyoGqjS1Ponqvm2BbYBxqP1b6XDmv56uekJuf19BD2PMuLUazisfJX45pN4AZbpkvdpCSwnReZn8yjn",
  "key28": "bZ5oq2Y2VQ5dLvExnYXrrcb71yqsMxVFDWSSdsL39GHcNhGUtncNJ9hNtWmss24NVYTia3ZeSEXTrkD9AXmhgDy",
  "key29": "2vDvdD57CouP3ZPW46zsdWnixyEkmfZnHte2SKtd3MCCdMpT7VPji5shcMYke7NgTTFPEeafMvSWG7vAj9Hi78vf",
  "key30": "4SzqyUFtqs192Lea7hJNGmtaDoNqEnaCtnfQzUw9yG4JtTX9x2CX4HMQvrKwMzGZZm2j5r4FQUSuDA5pLYRWrunh",
  "key31": "2NEw8eMiQzdpDByVtC1Vag17VgjgTXGAsTMRKTuVjFyW88v2EXgxv93C9Ueyzmh2D5kJrYgt4DYZrPG9jRTdnDGK",
  "key32": "2dRynB5CuyhBGcGksPqykrLZypkdCspSiGUAteRQxM2nJFSk5BXfqYa7weyKxJovX8EUfKTeuYupGYVtnnrpbGM9",
  "key33": "3stRfbGiGHY2JpM42Apa7nsZj7L5crdTrAvecUuiAFqsCbA1VYp9UsHgrTW1kju5b1Xmdu7ZGXYpgXpgtKzJPiA1",
  "key34": "5Q8u9MV1q3Ke1Wqj5dqTVpPm8RpyQ8ABKErB4c6rV3T5xwygkLAikmvJhDd6ZXR4SjUysJ2tUXqbJDcN9M4akDR5",
  "key35": "2KZMC1cjoz8sbbY2bvBsarHMR7epHzuSbJUYHfBqXD1zpRezgHot4aFLzPuSSXqsnjwzcayh6yymnwhJb5ctRYG2",
  "key36": "26gpMMdzMuZ1wYu4fzs9Vfufxf3SHfhcCT7TtNDBYghrfW6wwme8YgcQEnQRUHtTVHCdWeuHVG2hGz7KCRde5jmZ",
  "key37": "2ge3EGxbDZZqByfnLaTTDJyy4R3QPEctAuehhLXrFcWsvn9GtyHMc7qeU5P8jnaQFuM2TtVUhuaETXhsWAJZ13yf",
  "key38": "4A1ZcKimV2xomuoH2wPm788qQyNU9S5fxjyLqfQSreWACYECLfo97FDkwsDb5n855BjqzBKeg8wnXNVhMAxAr2gt",
  "key39": "4ChqUPWKJ8cykrqsjgpHhwG136APkjSJFuzitavPj9SLNSQwQESS5nakgneFUQBpaiP33K9SKtJcpt45hQPtUYa7",
  "key40": "46XyNKqximjES7H9fR7QsY6z573MbsFRPv11ZiT4qVgBairF67gvBgefSoyZgJaGf3VnkKXS5N2gm7FPxtTXH6ya",
  "key41": "62XrwYmJdt5nueb8ZTGJV94pPcZjkHmkk7aauFCxCnQpbykBzySQrRRmsT9PusLxKqQfFwLL1B4t7NoLpUcFhnYj",
  "key42": "ihcg7KGzT4g1HZvbU79szKMxDN9efwzAAH6M8UxP4jsZarGwxJZQfEY67n49njHhgCbQoFnjYvJMw9xjDMMcjmy"
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
