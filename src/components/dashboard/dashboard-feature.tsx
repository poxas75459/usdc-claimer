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
    "3hFS8Ae3jpFFVUjsRv45AUf3kUMKCuV6Pp9Ay8KTgUVDhHtvzAt8grUrTbrLNJnynjgBMvSY2HsJHtUZEbzW5S8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xpVXapnJ117nmYnLvXmphsrDQ7EwpffeG3FoTiymmbqvmRhmQLU21VmaSYdcR7BAvMzt6rmgFJKqvX2EeMpstzL",
  "key1": "4takEstZ2ddJymk4LFM77TnpGZicBFik9QGVDanWvtK7Pu2avbgHLTNYNMe4pft2DkkascV72NFgYKxAhxkWsS7E",
  "key2": "3uzKDGo1hN7MyANRcoFCEgCDNPwGhEfePcXKZnVU4SM54tNAa73XRkmgHnGBuWemsCQN7YBScLb8JEbduFyMx2fF",
  "key3": "5rshjNieKDJ8idTGDfAfY9rM4yPdZR9TD7aHxFomrTPqdRiL6ZDccgifVGs8agRMAwQLuz1X1NyPMJRHwpeiRjHk",
  "key4": "cArWoJCD1KBn6DFTgm7djGpLNaaMnkEWQA1LcMD7JkjiJjcJb7J24aK9W5RLfjGpsUU1rfc47V8Mp3es3ZhrdoH",
  "key5": "3bggGSpcZQAGy7TeSTWPfKtUuLQo8bpYnb8bwJS6S91CKKrFRHtLJTjmNy4fo92JkQMnbEQAVa3yCjEWKzYHsCTs",
  "key6": "8QSd7aEVYTvktpHZMSna55hcnfG6vKENfKXAsZDmAwBpR3LqjSuypsNNwk6WvNWPGZXQ6nXuYkJYp1gh4LhQKf8",
  "key7": "5uBTts4HrqjbMkNtFtie5qm5AetECvXu4WdUToh7Fp6bhLcXH5jQq6eR3Fyno7b98c7KdTQiwMicNs52aTqXhj3b",
  "key8": "fXpoVrCFxUrhFRxs4jL2YWfzCFkGZXcnZEdhCXteGWA5dU7UxmKjfMeQJQTDuVNjy3wkZdc8BsWV5fSETBVUP1k",
  "key9": "NFw3A1sA5WbjvZSZ9325rKcbTNxKrHy7hRLG9FaBmQqxkgfGVC8nQLe6R9ajqLxGAzn8vuCwFH94sdUJH9wQqfk",
  "key10": "8kRc9EXg5oh7nBwh83mSqThdDJ6FBW8VKaSyzGHSsXPhzMMK6yCM3W514PEfyVukRLjM58x2TLonTUMrDyvinR2",
  "key11": "4hzC2jCTgScDw56pDdjvcDFKtMMweipTcHDKBignm3zgYmnaphs8gDWb9xxcaBdbtboW62KYL5y3KRs88k8AYVEc",
  "key12": "4C9Apod1dBUXYXEqE6Fg2W3aRc6C6u2wfffF4jko7HpTVTmCLD12915aw6uKbQhZ4ZPz7zjBekEw114h9r6hJkNU",
  "key13": "36Be9y2YL4h1FovEjnVRxTXpMfi8r9AchjiVGLGKr94JR7dRzoJLKsd6jzgCWuTtxxXqUGQk4nyxLV7cQtzofi29",
  "key14": "5XfsX74uBaY4odDkt9DKDsVRYSGXuCnDCjRKEsnMbZjmGBuLwkjLZT6KTXSWrcJwcdDPP713feYQwJvXqtfaNKrg",
  "key15": "48h2dab2TizBpea7fFWDF9Erfa2iLqtjLr7s9EuigEKREvVvVuKabZ6MT2q19MDMENyoNvh6sDdtGZwtBni2qP52",
  "key16": "64DiCLwXHHCWXidHLnxAsdnqXMSg6GdQD6RFAGtoJKVMayULFn8KptN1r16xTxsrNJ5nHNkKUPwS3p967QGoP4D1",
  "key17": "3RC3mmeDQtxBw8tThNmsfbNSWAL4MpEhXCHAzMmyX1PobpasF63VP6qdDC93Ffu9mRE9Dtv7arLiAffqcHV6A8CG",
  "key18": "3o9NURqGGk6AdNB3V1MRnwpmLYMZVZ7JheX2sga5CZJQcrqL65yZyVHGvNn7EN8b2TkcdW4jk6zV7kaCy4ge7jjd",
  "key19": "bRxYgLserjfbg5x13xpduDd6dbdjt27Y9CdzaGmwiRSQrjDc5yBGwee1ijdqJiXjn9iP2eMdTGUjSGEFUkABUGw",
  "key20": "3SySfHRgsiVegL8XzMGgUPHgifrz2mwuhTm7E9be1wYpNGVEdoUfUWpWDALiuB1t2VfsbdLjMUBpz1XuQ4te4raT",
  "key21": "5LVjwyaFwfauzfM2P4V1qEYi6dTWh3ouQnTXXJNCe1PzhBebarF8Z9YKWd68ufUBD6jVB1fky2aCPmtaE3fEYJDQ",
  "key22": "4ktHqvoCyFssAc4X8YKP6pgfKgRjXBM8RyYnKsJKCznsRxpmh5xvZAw1QWpEoufmnCytdtgae57XP9bL6ukTyvf6",
  "key23": "2sQxmsKDTLC3iG1Ym5jyJx2WsaQ8nrLiPYLmRoCqbZ64chXmqZacdxTtwBR7QBYGy4unBZRi2Zh8jXuETuX5vJ65",
  "key24": "2JcozqHPu7KqryJeQXTBVw7FXVrebAAmnBebuqmsGiozMVkiqVmP89ZzQWJ5RRLjm7gQGCBrkjU5bPyEBsjQ5anN",
  "key25": "U34V9HSxfpf1HbhnrAYCpk6hmLfkcytVt5Pwqm4CRnogoLMKYQtJa32Wx3Ye7oXDGMWxiHz9S7jF5biX9u7BFUf",
  "key26": "3B2HGFa1p3ezMwWBrp6pwNn3XkxUuGebQCJnUsaRoVzB28vUkg7zkTkUZcgepbBCnBdHc3kJBaSiWnFe4rMaoFnJ",
  "key27": "5bfzZtwTMrJy8nSNaSVUx4ogTKc2N3pGd5BBtbqeCKzsKSFgY7niczSuv3nMZm173j3kXA923ZXTxfDjWpquUeZr",
  "key28": "2i2MDWP4QkEspsZthsLJFoAnxYGVVttBfwrUYjCAz41vdBNdnUaU7J9D7BkQNNh9cjNAtfu4TbZZzv7ah7Chq9XT",
  "key29": "U9ofNf9CNonD16xBUbkyqiRDKLJG8C8x5TncD7iB2WbkU78w16YoDZXGN3XS5d65epAUVggHcGB12zJEgCiADVu",
  "key30": "GCdwK36uX6hnSgAS7kHzjtAZDQ6FLH8tqagpje3vYYxuGM7f5YMTrqZouDZJ5Kqnq6xUMmqTA3ZNhakawS8Kpzw",
  "key31": "3m1P8ehkHWFE7nAkoP8uEafGTLiCpkDmGtPzY4qQGGEiTG9yWJgUEHH8T26qbokEPHswRuDdo6iKG53osxzeMwJp",
  "key32": "5y1wHmdtXgTkT1YdNLSHavedXpzsYGSnG4Da1XrwkLYfh5fE8myoaGJsB4W2K376ZpFK824d2uyoAM4B7N8ZMPcv",
  "key33": "c1BXM3eQZGV8CdQdS6e7sTgAXR9GNZDCZQdepVAZsGHHWUgpx4tS4Y6Cigw1uCZVc9h8BQPWfLtP8iDrL455j8M",
  "key34": "2VHZ429Fe5sfgzyMHoPvGL4edMmpvYuCfFQGKVbUk5SFnMfQNhrCoUstQ8n6TtomEwkvif3HR5QA294snD2paByd",
  "key35": "zJg12PHd2v3SW8g5qfmd9DgqDgc9qFtJdrbFNVHhVqLWDXhV7fywqA1EseCg5UEoYaasSQDjvSxT8nevgtTd1Ti",
  "key36": "4ZNhWtmtgXxY9q8DGnBNDnJJEUQQjgGSF8xejDHpyCWTiXvE3BLp1PMkUSRMm8aK9mTD4fop3mAP1FwaF3KKws16",
  "key37": "4FcpSKR5E9bhtwLoprJ3z6vgbmUxBciSvCDU4rUhrK3e6M82APivLpV7wdm5m9mQziDycxQ2P5K8gDtMLjqek6ZC",
  "key38": "G4ydJg1cymmKx3otMFHdbLtz48djJZPctSNcZ7MUnnjKZd1hH7xiNLupQ9fe8uSMts5M4DWCR6XdDwtz2o4xzyf",
  "key39": "5u9rNNDya447CWq5s8ogD3ocbJTL1b4BJDCzyiGK6tWTadG4PFJjXd5JuKGZ53eQL67aQ6NMwFZYpeNjSkrsrWgx",
  "key40": "5ar7krz4gEJBJEuEEEk5rNwa9FMaeFetzVAsG22ZqBPNcNC8XBSmiadRP58ts7BjDFSjff5JJEgxXKz3EDVofEYc",
  "key41": "3xgLDQkCB7MsFBwEW8g35AgM7rkbjpoE4ugLY7DksB6NCKQ7Qwk5aYqcLnMcEJNqu8R6HgywscmWSh7mZa9k8hnc",
  "key42": "75czfu8xDi3FdGJGVLUVM5eeCcNqJa251wBWp7JZ2xF1BmidJE2RFf49jm3vCXUU69FRXzk5iZYZh2pMZaeeYRs",
  "key43": "4rFDSXWh7vQPKU4qGvDYPz4LTSLvTwoFF6Eus95QyXuKVdcssXWjE2NMGNQDbStC9E7agSZfVTfBQEznchpdK6ig"
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
