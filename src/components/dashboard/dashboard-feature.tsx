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
    "3LhLqq3r2XvVkP2hhTorXNE5mwNeL9imBpoVUcSQm3XEUnjxYh1ei32L8yY7s3HLBeYMfapsRPKLRocRiTKr98ph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29cDqUPRX1Q393fk9TYfA3U3FvsReP9jDvXXZeUBPWMfaojta6mAWH1zrmE6oF5KciwdenqrFxcSkCRT2gwrpcgK",
  "key1": "5CNZEw1Vk1QD1k9aJjzypkUTVoo4DW6hcJVF645gRjbvQ5AQ1mRFjXE4ubDH2Ag5heEDNbSxjz8s5nFk1t8J9fan",
  "key2": "3nvgTJDoAxP9QeeYTA1R295R3iMyXfV9TJ35PyrAmpSf5wwuxUpmCdTg3JHgHHDm8CqMJLSF4zv9UA4WhLUMpBPo",
  "key3": "51tGyuuaFSkqgXnBmiEnJPMxXixpz8YguKrWgMXAkqMHRQQbPbSUprZmxzF4vvMVBjJEN7w4wJ9fLMqrYAZW9mLF",
  "key4": "57SfNyxYzGeUmnJ1fhg7Wi5Xgb71jLcRcfdU7vmzeMkGHDzbUWgNNqa3VJSrFo241F2QLWNJLmCYMZK9Cxqe741r",
  "key5": "3VV7D3dr7ivPWoqSoZUxSrF3tLR2UGujxp4bCLf2DfeZWYwQjdbGJXaqkiFERayb3nak3F4jKwKSoYQgwtKcCgxe",
  "key6": "53ujN8KF5ZcbYqHmqdxknNTJEYujEZPKjCwYyBZHV5FxnD291yG96n8tRMk863z5HkA6v7dWYvoBpLSQke4XnBAs",
  "key7": "3p6WUKqTBoQ4vXat5RXn5mpD3yy26iMRYWXExZ2WSmY8GWv9PasdZypt1UraPXAZMXQmhyZs8yhz4uP4onf62CRF",
  "key8": "4uGG7g7NPi64eXPePhRznKcL3soXpAXoLsiFkWvATKa9VAyyRx5XmXCKLyg3JJKfgQhKHBb9FKBHtcuZ5ykGma2v",
  "key9": "jJvqqgqs6DE61tqkWsPXWsPrgdKeaDhZy4SFr3kWMo7F28d3Esn4Rsmsrdjop3cisB2aUn8MfgQofoKr6ZZFxSn",
  "key10": "3LvUYS3NJjcjxMz6UMCiZAs2yM9hUfjT1arc32B8YEpGwYcG4xBkvoA23MoGwRM67aUaBsKcsKv9cFaERJCxorD2",
  "key11": "3typM2gjXumdUZeEWUzRCQfoi2gQpTNo7d8NCpvyVzgGkC588yriEdg6dbmp4aBCH6a9E7UWKf9erZdrQZKEnbLG",
  "key12": "2YoJDX7MnDNSw5b4Jw9Jj8WXMKbVJd9571PGtC71uBE5F4h1gDDiVF3oA8HvbAK7LbQfaivPKPkhiKA9d2WrZhL2",
  "key13": "5U6Fx5t7QNfoASit5ADeWT9p7K19kTKzcA5G7c6RpuY1iDqqu7LMyk8WnZ2rATZ2raUKdPMWkrHyy1pNK16ohzLv",
  "key14": "5dfKgg19uxJQ5JmAxE9dd3sHewN2Kg14i9HGgGZJTzETY351iZ8koFrU83u57Mg4nahFsWLpEheZBr9CthGgX3aP",
  "key15": "5X4xt2pWE1t1BRGp3zdb9VhBuzRdT4aPjkE9wWspsH21z9pdRZiuHFyn9PvUHNfPXQrS43sZ3zTeX9CFReyDtWd7",
  "key16": "5seFtjvPiwRZJUjGHvETYsyMmZaeHB4pNSi7k63DzFb4wVEqcGejHb3MHRH9ipBbx3ixUK5SJ7vdSV1CGxE5Ep2m",
  "key17": "3n5s6WXYVJ9RKStjH4RAcpnfmbi8PQhqKYvcpYWPHmunQindnLSd2FdmTr7uxWekDQjnrdZVe7Ujd5DGwF5wCDCc",
  "key18": "VxgWLiwb7wU9u98R2eANT2c6awhmL74bijowRxSpeNZn5E2kHgzDA6RQvmVouk3G5o1cZWJbxK2srP3b6GyzYqh",
  "key19": "42wib2G7KnhqH8kEsELDgrsmCcPBpv4HjARQEfJ43GMTr9Q4NSzakTgq9EWmEpyQjZdTnfYud4ZtvAyDkeF62oAG",
  "key20": "24ZtXk2ZazLHt49SyMDP67mmPfhXYLgaXihudar4itEN93QvBjHeBj1hGPiQiRurx1dQzkB9JaYhbrjmKnvewDsy",
  "key21": "n5M5Hd3JYLXLkjvf4Y2P5hf2bgyqdRJA4RTsThJNfhaGjLGkEkRKEqPUNHMf96No78AJ1PdBGH8E6gXrv3CSuFd",
  "key22": "2ntWKLymjoHKg6pxQrXUm5uDMGLwBfVSocPEVsSvRManAmueHg3dWqqSXg6BA94tKL9vmatpiuojuyH4JCKV2vk7",
  "key23": "Yhyj7oNP3AkkhbwsjfNP4PAKD6xq1dbUL2EdJNFyuXHEH3Yrknxqjt1dXry5QTqjTtLMVxSMMix6zqkZs7P4yiA",
  "key24": "aRj3yjbTDow9ckTM3Fmhp75uetVDTTDbiHHQWHFFSjNs2QJSoocGsfJZowhWiwmJ2VCe1ATtHRx88V5k18Nu4Sy",
  "key25": "3veRyQ7soNrGBX5kbqvBaqkhyvnbm6JdfDWnenb5SvWHKaK5XHficSaMhUVaStC2A6ZMVTBv9ZP8crTuGDX5XcFW",
  "key26": "2oLoebrnMW7iqbrzRjeDRN8qN2ZbhR7cuQFXCH4cH47mcYysVdMcQvSi1danRD3KmfZJfvXnzQkoWEEogPbFFvA",
  "key27": "oyCX9LGSs3iKKRwHaNT1wq8KxLCsD9kL7JQP9GNeZZd3VfZRsPs6pKssteYuSThb1BWfc7x7pH4Hwf5XzFeqqW5",
  "key28": "4PCyx27PeaFRPnmRNwurCjos7qwdZxpP4XKT2tZdCwXACQ6BJMMD1kfNeyfdh9LjjkVJUFbKWuRUSVgFCxNMeu8s",
  "key29": "QvqPaetWrc3KRTuTjcg9ioqycVuzmZUsaaCRyr6SYgsMEu8zqGf6ZLVHhnGnHjPNwUQN45nE2V7RWKbaG9SDPDn",
  "key30": "3T8BmbG7S5YY4LteSbRutSX3ChDJFmnYXAK11ur1pFVrDzbvdCWhUXByovbALQ7kQiqsBYD3BbTKJBrtnYN9xBLB",
  "key31": "5RjTgiNpym3c39ko9DsZJkSQtcE9Xb3umcKAdPjiq2wug33cgX4ArNkxjc1QgqU7bXCreihPkp4THdu5i4HkorYP",
  "key32": "2rvMzcQtiMV8RC95YTrF7HYxs2tgVGRkR6UZhDVFqdrYSa9CPKMPc9Hq4PEpinR2mZ3hGKbQDjkjtaFykjfnLnVV",
  "key33": "4KGKWFCD9LBpeM1zeWHrfaDSUfRJjkmALuKi5BjNuDXERZvLF5vraumA449GNy5UfFHJdKibRNG89B2cpQ11Tuo3",
  "key34": "5VvxbwhXoUrqs3jAwa2zc9U5CoyVU9iqYp8LzWcggw5osyaCRVeRk4Rtou8MUjSJdtfZsXHNmVPWF5xjP1u4bSg9",
  "key35": "62ApjT9y5ZvjXLf46Dw9frRZbrfWQ58JP5UYEuwbvwZ69Emj9YF1vdw8UYfRcHhTWfE1iTSNduvaLUYsTBcXxFY3",
  "key36": "2r75TpV68YMkGtMox5pZebZCDmqd7VKRz74UGS5zZxf8nZVE2ork8AsgnPNVeRHXqDDCw2og2v3pmpXWYeWX1jf"
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
