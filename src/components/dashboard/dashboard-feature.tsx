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
    "5wspDDPDatng3jMasfpaYbfnkkWP6ectvNt8oViU6U9VN7RHWUGVXPfr7HCLKigcQtmqupuLK8WXrEm95Bzb7eFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u715wTTtUGq2sDA3n9peJevMeWeNHopL3u8a4bvfKbtjrKPeL7ffqSGSwc8vWoJL4pBsYZEvCZZnD3NqgFsouoy",
  "key1": "2R7Gt6oniEK22J11Uragehmj2NSJznKgvRFLSZNXUz1Y2YeZbxSW3seCLMnsYkegu9rX87jc893VTTDFznC4zF2Q",
  "key2": "2ymDKFtgjJFwgntLKHV8qjThtaBHGajhtmFDrHmrKnEKUkv159jowTWVAcnG72DdpWKBrYye6xCxyB4DUqNHAkV6",
  "key3": "2dA1fCYjE6fr24k3tp7Rd49C3Sn2vfwhNn9adfvL1ajLrd6LZQQAoG4pb75QENAQnDuwSK97pBnC1wkiTr7DY5yZ",
  "key4": "248TpAZahdr3Pnfoe5bF5AW5JoMzeQi7A1BGDny2NR2FGjSexoKsmodUEPvbLFkX1XSCFbVpCH4jHqxyUkioVKn6",
  "key5": "5g7SPheQm79J61BwgYgi1DFx5zWe5CS7nB455gYgg9QJ4c5WYdurG9d2W1LUZmjJDJ89VBCEoZj1ydojGELSHu5n",
  "key6": "3xGao8K8tJeMTfYCqexG3F236BHjCsGX37m8DfgcbsU5krw4NvyTxWfjuCKfGiBZ2iHnCgrx266bn9Ew2mJ2R2WK",
  "key7": "25v6rcf8Gm2ZpbJNUK5WwKHoxUkVKYXGmh1Aa2NYJ3KZx8LN2SM6dSVs7gpPaEHHDcTQNPauceRzReMh7w6nBMv5",
  "key8": "66BQbpn2uBfgF4gstoSwSouBYeAsfnyEXoNAuaRKKJiTfgjFeVQKzQQ9j5FDKha2zFvM7mGVksM8Qq6PcEMwVFUM",
  "key9": "4yhQNroVCFbZAwvpwrPm69ass1iVtE23pmc827rvYgiXXkdr6HUgfTutDoxLkhUa95dbQHDdw92tmowoY9ZFPzHY",
  "key10": "3kxhNFCBK4k45afXN5D4iKpbEzFbXNUTSirYb3DP2qd7KU5bemrJZqwtTTvvLyvxW1wT7sgRVggTzrBykYC4hP4Q",
  "key11": "21MzGRg4d81S8SrFj7mDEdbMyaco3to5Wm4kosFvezeCc74ZLbw9SX1FdpDniiwjsh67MpNVrTnWeNGJSTv8iFFw",
  "key12": "2e7ov7egbhK1hTcytvgfvWPD5Xne8Uq6jZEPWyaJWbhJ1exW2DdvDJJXMXgf4oCCbTqkSWnRUGvkmG2drFY88RrX",
  "key13": "3YuuaAmdRv7UiC9hS9EiYjx7Sb5TUx7FDfvHYuhxBCqPRWi7NJQxKBsVKncv2GYXDatTEkxTBASAJDLBWkjgYNNk",
  "key14": "52jVjMLxJ6sQpGdy6Dx1rX2YvWUyGcTssYichjnKvZhDnR95vjUUrLRcZNHpnPAZPMMkJo8g6BjifQgyfQtaJemz",
  "key15": "2w4uE1SFBYw4PpAaBpqccDgBUSbQ2RC5ox18xMB8NL1pWAEkkDAEFZjHcoDkkn9ufpwK1Y2wR9voSYveih4wU63w",
  "key16": "izYXgT2bd3Rz15ErSXHBvGfm8k6qCvMRF5VniXR9LFCi5kEd8eX3u5DCQk6A4HmQjNASRKQ4wuXcVa5D3CzHug3",
  "key17": "359QTGxpXbUb8ZQo8WHZTVPiraucApqKETvSPzkP3zZ7P1LNjRSHyDvadDZ8N4yAYWsWNthBxZVyzZ6ibSfuV4W6",
  "key18": "4Vi1q5adDPUbtByJQsfHbPQfR9dccfX7TPRNHmGBgYB9NHxf8FFQ1ccAVhmgmgsPPAiKJipYXWqwpUB898LLFynG",
  "key19": "4ucPDmGsuJUpjq3DCaaGpxDXqMxmFojzTEmRhNumhDXVaZ2b7gHWYaYHyaExn7q6FixJnzWkqZKDZsuf2PpwThZC",
  "key20": "2bUBDh3E6JNc6JuhZkKdqsVhM8P8UambsqKtf8vwupHFrR7yEXie6fu1KEdQnSjxVheX62Npyrv8GndNdUcwfnUq",
  "key21": "5rrt7hqAAkeWeSsW33edobJw5JQzsgeJ1ztxQbgWrf3R6ch5EE2VU13HhZrsGWz7kWZhunNJSai2TTthmViqRzdH",
  "key22": "4AQXVnrUuA73AYMx6oMK2a4h71Q2SYVmkX73Ta29wCw5by5ip9Bjm43J31NumtMbEbLQMhmXLQcVp5ij25B4h7rp",
  "key23": "KpW1vk3Kz3YmQCUaJpTh2aYeyh8hfExkYRZSN1JUrDdhtnuv5SGTKoWZFjzXhkySQSKFrbzhWPqoEccvhWzY6cf",
  "key24": "2yS3xnmysazecJRuhuA2qEgT4YcnMpa287fefHDTUYuBtg5or18v72Swfzbk6MncoL5BQMb6EXbsSH6NKnC6R57s",
  "key25": "3AML5dksi9CHfyGUGSrQwFjqiftpFtXjAt2E7rfBkdASgKkiayvm2ScK8K9ikxk4Sg27GH9qcjLcaLBVHkf5ENsJ",
  "key26": "3jDuJXzW7UdUvEBqK1kczWCMz84fmkysDBo1FSbtpAMhooYRk6mNYT75ARYeZAPTjcuZ1AJcfmB7hyZ3zRuqwJSJ",
  "key27": "3xzYFLv7NMwV8oLueN5VSHG6usd5idTAJSw9gGhKsv5JE6btXUrBZSkuJj8mdUaU5YxdNuKZowu1y3thtAgvaWKT",
  "key28": "2FvHwjv3nANnprhoJDjNet7QUnzRjxx73QPGxxJ8FdCd8MSJxPBaRFf3Sq26isz6eo74dVzmXZqi83GPwYpexXPZ",
  "key29": "2qXDAn7zEnMra6s7YCnrMVMAPwmxu45SNGfbgk9iMWFf5Kc3cTpDswEpa19vd3HjtjdJt699dQSMLqf5oa2sEn8",
  "key30": "3W5nrBAMbNW11AkhfhrQkK1fE1Adja4j4A4BZEWoeCPgkDRwT1KY49KkPysUTg1Ug8pHUaKBai59qPs25q9tJXAw",
  "key31": "4XkyqMfotq9dnBrVLBsAeZsHE7EmQt1azoMZqqgaJHt4y7pXypi7LSQ7FHGnPC6UjjMM6imQaFmvNLttcfwnMhg5",
  "key32": "4hrNGK5GRrwy8Df5TBdrh6iXSKghMtp7Mg8UyAngLXkf4MFWA5KvgtPrmnYu4r42qKnK2bkpjoNYMW8m6hqzQMmN",
  "key33": "54WGvo2jn6EdXgNSehAuDdpdp9jXPfopg7ZY6rrjhFdnSw7atjBkn8DkwJmy7yVh4F3rEYYwatvLbXVDi4UAum8p",
  "key34": "2QqZMmhrnTzTjCChzYSB8qd3MuoS7qgA9XwJtTU35AyTaX8Eoj3p6TVFT2LAU316XCrFvm2vQT9EePVch7u6DdnT",
  "key35": "2hEyQPKsfYhR6pdiJ5zb7ErAB8e6ho8d57qF39xamT3HGcbqB3VRXPTGAMrERjxMhFbCePjo555xX8mSF6MsK28M",
  "key36": "3xpFa3zxCoXeniPBMQHgPzmaqBsyz4FVWXznF3YHjbtZ7xns51B79zE1iiu6KFS6ndmMTFdQAWDZsNGFAhPNjCvM",
  "key37": "3WH4TLVmHikcjZeYXgiN4ADJNfkE9uYgbdun6xc3PGFk99ecg4U6VVmwBPwiXJ4vuKeeJ2m4frPTXxtvyRSsfRwr",
  "key38": "a7krY5n5LmedSYZqXG2epNgMBJRBjcwXM2J6jvqi1rM4VvGj9GJUbcXNwn3NSN2p9X18T8hgT9Vu5t2EtuTEDqr"
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
