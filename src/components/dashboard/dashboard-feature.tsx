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
    "3TJCocuFVn61nwMNzY52oYyet5r399gSNRhQgQX63uLiGZcd4p2ye6xZ4aYV4KGTA8TXAqbPx28f78RB6oBPcH44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vGZd8VijQVSCqA178f18iWTowrdvnAwUf1BfdSTcWnf1GNizEVkXizEkp63okm21scDyPrwrqBnBoDMrTLAFbNH",
  "key1": "LN1JNBn4FaR4PQ791tWTkAvs4vHrpfN5aC262go2yMLjNock9vmonWghwvUzkqGTUTzE7EWpvfRoWkqzr6gP85x",
  "key2": "rMMnBSFc3mKbps1AdBWuSTzKNdL9Z7HCJQQuxhvpf6Ybsb283G2yLtQ51vDtuNBxYhnWNyF5LFfuDwGfwxg2pMq",
  "key3": "621D2grBp9DpQDXwRGYSZYDnaXb7Xg2pFv53XeeWAySDDXxsT9fjMk9XiUnrPWQ9gfnFUJt1U2QEwmwd1S4y3sfi",
  "key4": "ES3YrYoTeMmaddcLqaiQW7fRskFwhzFqjkCVomtufrZo6uUcKvqKpRd1ck3kj2WuKmjmHAiABLschJjJhSaZmYA",
  "key5": "xjXeoND9MRDsRoqmpDKAtCFUS1FWscwGCptbnCYxjRtKyrUwXzKdbbmgVrEamegtcTCnxWTLwB6LKQEYsSN76ic",
  "key6": "3vVu6AhGGyuwaVgmhscjHf4gZTEh6dgoDj4sD3esSh7oiryBGxtnqnZXDNUtSM7j78mNTsj2oTqHr7LAz5yWR6yD",
  "key7": "45m946N6yrDjVLAPMbWLibZNKpY7v6vKH42yBgRfToMf63H6CCaGMwqpYFYQAP8FE4K9G3CRR54JWAMjcQ8FcEGv",
  "key8": "3g2NctqN3FJGBHvoBz9pguMcVGyjECVL4o2Z8ARkp6jcWG61r4MENxYDSkYV4AjqBjfHeWrLoo15pHHdrsiQoK4t",
  "key9": "3bAPyHNkPsMzjkeh2YLWr6F92wjvxCSkUBVzQJ4eNiJotQSw4aCSqoneE1TeHxnV515KjZsWEdq7LD8BaJQEqFGv",
  "key10": "5wsi7UPMWMwpGxhJDVqUVKyZToPwvwW2PZ4rffZrxoZEvjRvpjdugsNWo57vE2ZxbFdGoSt4fJmMiFRWZDwKdUPd",
  "key11": "35NiNBhLNGnTQKCWxKqwcR5yM43zH2AVeytq284rDF61B8qUL3RZYhPSts2r441WECX9yZCksmAuBUkJ8enHtYFz",
  "key12": "2Ab5qQfm6Yqw8ANR5YRzVaG3Hf3EqQdXMdGH9Tu8GwVATaJxCrizF71MrMgMcnHfhgB9Px11CK9pLKLbQDVaE6e2",
  "key13": "4Qzi84RFXJ9fydhms3453BmdQpbT58qKyUTKLML27SGtWBcCXMRVepKKQhzMtzjJUcSQzYkumqLXijdYaY2DhdWT",
  "key14": "5p7ESULhEJChLnR28uybxqNMpegZSu7NnMT1fQT4DcswQ6vXaQMCtwDrbXt57q4ef9H5Cju99osEw4UURrp26rcV",
  "key15": "2ND4LtX3g8rJtaoywgxLCPhmbe3aThCDPdRiGSimG2i6GjJ3gUJ1gWq2MgZB47m6TZTorXVeAkVziCri3b88XeHN",
  "key16": "N8ui8P7C2yku46H8cgfaZWxXBFZ6rhcQApx8PvmN6jEyuN5W9mhNHkbokoiU6zbhCXRfRHFzrPFQoB97w9aArMV",
  "key17": "4fuEX8M1oBXhgu3bnkG9jbX3Ddbo2GQgiM5XqbQDx73cGQfhEh3Zvpv6rxs86HqntLNKAmBZxJ1qXoZUWRGZgtPT",
  "key18": "3TN9gtzPnkAe5rTofpS51UHhwXJEFd8MWXDR1aYdayvnEXq8RvA4rqkBMbmy7zvNcxwZGcBjyUeXWt3cPT8Fv54x",
  "key19": "5TvdC48ZYJAJ11RpgsEQ4KJZD77Rr6j3VvxJeBQKoKL32Bdr6b3J2cZdP6sLiVug3JV7rSKSnwAG9JWhbcXpfWaQ",
  "key20": "3p8DMxoduLYhRwWccGHWyS6KKH5ARodQKGMw9xngqT5SDBUTpBzoXwrZjTdMqe9ZbQSSfygv5ZMuV4NzEsBvxCBG",
  "key21": "5ciJsCZ5Uc1xbugycsFNB27BT6sifMs3U8Dd17WES3Jy3dvtc5HYvPb4x9S2sPj6JUNX6tsxuXhHrqBQ1PKKcdzL",
  "key22": "24tdjNSpW3kFpcRYwg6xvYpyVxuwWWAPwKy1fCvZLewJUb6KbR6Ud46ukMwU8Zgr8aQWwXJkd5SUb1Z5C6q3J6ZT",
  "key23": "5ui1jv2aE7sYPdoVCMCmotRkFuHz3TLseVt3fYprNL2wbyvbKxdqNcp746vVNt5fBVDizzhRiX9DnWF3xuuwr5Go",
  "key24": "NzB2RThHenepTcUzawDVx8wLSFVA5FRKzxDoDGquNMDbDP9X1raxufLiqPQJZTyh8zanELkqA94HeBvJfgRomWW",
  "key25": "2QYpTypUfqM5dxNbBfq5W4UEQKmHemgqmB9DUBMMCnkHSiaYkXLunjtszyRTiQxYpPTPrrUmBqWbW5Lz3859gtyG",
  "key26": "3EsKDhrpggiUbizubMt3p3Ffq8K7ZDSr1pTWfEA13qYcSukfx1umnTZERbPtR8TkF7MDK7B27f5L9D9zW9Qt4vsC",
  "key27": "48XiUFkaixAmMc4Ub7LVhgkARBjbZ3FzNAPAuAS7CnZcw5beGbJEDgiMhBedqhFZQwEr6bpHsdetRXiy4xsFy43K",
  "key28": "3qdVTjGUJXxBoJYoa9DTx491RspXbgUA1Do3p2KhoR6UAmo1bei4jpxaJTNuEg8bBz9HAcqVNFEos9EHvcqazxxp",
  "key29": "4xtqpZxRNwzXBGSVq6qos4B9UoYTt6RSEhJ5CSxhsjTUz4JmhLizgrtTxJye1Y5PP7T7yPP4UUNWdxaoXNrLyc5F",
  "key30": "5QAhS8NuFcPwNaoozjrimmTDgprt4CAGzfRhsuZmqXEkrMFqRpS94HVFduvbnpo5aJeHA5ATNKZZo86poCHaZH3c",
  "key31": "4nQubSbPs15kLGcX312zcUnWLmAUAYGwnSzWTAcbeHHAMvVkpSisxKLBH6k7htfujz6FRzLiZ5DSFU858bApFnce",
  "key32": "3SVHTJMikh8jz4ueNE3TJe649KPgSs29LLsqRDvxAFPjqJGCr8fgsLghJ5auZg9eYR8zcSPqNzdJQMBDhR3puSRk",
  "key33": "2Ph4qwDh4UTJ6VRUkiFaP86TZUvdhtiBLcL3bvFLJ47C1Wp83kYQwQs2v9c5uC3F6b74tXLR79s8Gj6Urs4LJogz",
  "key34": "5ThkXS5WYyDVbq6gyhwzuvfPjE7Cn6QKNJQCR5aBQcQe2jicUc2FgVipy3g3Lp5r3PfnHDqwpcynQPthLQd4TYfB",
  "key35": "5p567inYf9iE6XoriJ8s6TRfRQq9FRmk9sgZEAEL69u8uPQGaEb6RP97ewo7DyNazqYTWr2MDYjHNRhFKwXBGXJu",
  "key36": "4mLuppgTyZLNx9ydnEjo9zFe6S6Uzb2WZDF1i3BB9JxNDMc7n9sVzAYEsF63hnWcwAoDz9hx4T8HbPYPHWd1csQh",
  "key37": "2v8otp271rSnFWSHtRdjjpdNSETTHNxNh4bNG1UMguEpgwrBjiSr73q5yWRUNVBNdedg6pMkGocDZ9mDxeEKyLJD",
  "key38": "2J6p4mfDDaZU3Dp3sJGmo8h9xQHnR2W7LcUXN9hJ185Cb5qAjozweej5iX7m9u1uQKDnDWAvLjnkC8cRTv7ES5WW",
  "key39": "bdCdyMpTbWoziMH4VdcLQ2nuhkofjkoNNRYcCDCTPX3sXJbUmp6WFo5CAiPf9RM5RTVqWJtpb5JYpwZpb8dYuVc",
  "key40": "24CHm1V39xBKiGF6kHseEZi3CnSkoHKo7Y8q5Kn8bZRWPp6TCxDQ9FZS75ykyy2fAa5mwGTu9AmvSHcWmZeCrBUJ",
  "key41": "5fW9aeLNFGERjAVtze82HoHhB8x9VguwYbTCZFNq3BiXnB5SfAP7o48HoKZD19qAFbcC6PY4W2kvxv7xX1oeLJa",
  "key42": "2HdGP3qr2YEaNby7hF7opMnsmbAJj4NM2dUMoxz1nRYtxUckwUW1irGPFeBnka6z55w4z2zarZThCWcXJFaM2QQd",
  "key43": "yJfxUj7Gq4aXTBLRVevva19in8bJmBwRNdeRZdettczjk6eSx4o1oGLhEP7DtgmBzeg9i9tzu6qN3ZKUVxTDP2j",
  "key44": "5ytMPXuS4af5dV9zpqNVYHe2drrjqPeMVZiJowsUnP2UdwX448k29qQ2ZKHk3xS2aQRw86ds4HV6nee2Z3ah6jcE",
  "key45": "4iBRGqd8TBEDTuKBDVVAgFQHGp8ExqGovtMkPyrqycAP3nH2dwguJ3tySTBggYdEekuHdENhMFKwVdgb35HirqCg",
  "key46": "Y4nQTSzY7pDTHbiusJ2AEyp5LhoN6hocrRgtoWXUSDiHxSCbUdfF98h37zDDPm1TW5V38G9joqfNnSVEHW2AjRB",
  "key47": "H8oovnofbpmVvkLoJrPCJQfrrkfWnv7M2MCeH5PNmWkvhdjMcxvj9VoEskeebYgTqkDNoydL4Gc2ikcYWaWUHDF"
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
