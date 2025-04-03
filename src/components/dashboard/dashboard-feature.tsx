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
    "5zD5X8Q2VuMeUSwvj5yCxet4HjK3AojCF7idyM5iwgMnp7SMsAhDL3g5Lqm93Wp8DBobFgVTcYqvH8WGU7579CJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "83gu82ymCidHDJFeEykXSSqPLN8n3R84DHvRXAE4D837vLVWr1QM8tCwMfpmiTv2V3ajNtzwwMMvpB9S7x1WAab",
  "key1": "3TNJAdWszik9cJYose3GMDQx8u46hKjLywvMR7eJANZ5nRSDxBFVmE6KBsxqJrdiHwQFv5c2yYzHT22Y5x3YLT3L",
  "key2": "ESB1JKbkT2zyfu7cPgrrnEgNcp2vh6S6jHqtxUY9T713Fh1cTymZL8VgUhaQC4uhMhpsWSndtygX2urUAZwWUu8",
  "key3": "66G8AnBuZ5v2gom78EfsZxBkjHFn7s1v4LzBB1c8j1Pp4HXrxQxh9r4HahV5yMgDF533qWts17bY4QvfezqT4dEB",
  "key4": "2fr2Y8h6oxBtrs3Rwuvj5zWhqNC1fVZbUkegZtxqgUUxzFAmxxZGEMmhm9H2faRDbLFZSrzLTS2jTTt6tTxgPq81",
  "key5": "3tMG8YqA9VFKZs5sA1K4hmbHvAVZc8L3KQKcDX6rPExvEVX4Mf7BGyNyuiZig82MSqkZFcWv6oDiZ8qyuyQtiaYV",
  "key6": "5ZonrTFnYqjaEnb3NpWu2PzaffUrDxSeEnmx3cWnRjAW2XfdQEqKN9NFL1eAM59GSf2YyAJ8WaRETx6gz7i72s8W",
  "key7": "3spCXh9RWwFHmsqa9a9LRiGAXQDMSi5t6fqgcKyc9bhGFcjMp9ao74d1ASDP4XyhNEoS4FFzdMan5rvWiZB58XG5",
  "key8": "2hbpU6M6zzywHLYy9NKuABUfbfBgLpHLyitB3bWixhqiw77bmHK6fRLPPtKJxCa34LnhjTxy7HQUb8ksvPctKC9f",
  "key9": "2PQfBrYXiMhayeEnPakdmVFPmpFnQstqUtA5Cm43v8QJs7qgqhav2sdwZhDMSaPj4d68JM8ws1iFFrtqQKVgN1z4",
  "key10": "46WU8VGC4VxmbVgLktGkjb9D2sazbjRYjGRvAifNXgayS7uX8buruewzkm68LCgzwbCYtBiUekhJrVCzWjX5tGWW",
  "key11": "2maAushzXYQSR6N8NiyEfxLLq1xU8W8BU2uGEabsiBc6byLVYCG6tSvo9H8iNhatQjfyfSkVs8BS5DnLkiANeD2g",
  "key12": "2pgcaVcJR1ghe9s6g8r7KhSnDaJczHnVKvBwPxTvsUqDxVRLRXJ9nTCkfdspUv5jEbCXjUfShMB79o9dnrj1yenK",
  "key13": "27skJFN1dZyfEMpJfcEDY62eNULNKQ3vX9Af6o6WzSsyy44qR8x236NTsSPSQsbsf9YQdfZcxrXC8L9398AbpGqu",
  "key14": "4DGr7txvC9zfRUTPLvrazspJroW7RB297usqtwTbMsxqJ5GRJDqtwvHpXL1FTmFFUMq5KL71CtrdubUXT1N4onB5",
  "key15": "4LRF8GyrBgWsbyypfBF8SW91BjbQM4izWkBSga1rqDY9FnQCNirVXze9dvCLV2Mva7BUCSps5D7849bsY1wsnkYh",
  "key16": "4CwMqsPHLx2RzLRCg6wYXjWUYpUBBG83DK8b6WiY9nbyDpxtLcTVFddigiyrkUQErmmq8fM3XRCUcn6CCmydBwwJ",
  "key17": "3VF7ws9qEYcVXpMHXzqoV6NbCicBVFk4rMo2Qwnuiai6ZPJi6fwwCL2E2e3WC5BFtLBLQ6KZ8kdKZHmCFpM194zf",
  "key18": "57a99Po6p9kju5k94tM4B33Nz6SbJYuzF3RHsnJKxKtJJETNbt1yJ9fSJbscyNaEuq15GKukzbPofSQ6KQepxGJ4",
  "key19": "2RANHPe3fjo97sZTMNwZAw3u2yFC4RH6gE4ykEJRyCsjmtF1pUXAYj6SQA5yUqTYRoBNy2DeEmeAgFircFKHMUnU",
  "key20": "yA7Lpbx4zGr65dPaAZaJFzHPLsUM2CErgrHxxQPFzK14EryoyNGWvmsKYdw4yeokzim3FLrhTqKe9kYrqmMiS87",
  "key21": "AMLQVCwi6ykqhg5m9DTaHoPp3SNfDzeYKbRX9j293YBJeJpANZMe7HqxcdgbZAtBWpnShoRTiu6ouxs2TwxxZUx",
  "key22": "4T8Vu3mx3JirVE69YQ56ac8g53pkiavEG8UAkGsLoqr7UrsjjtcwYX4uAFo98B5XLM14QnBeBanAZtCsJs2yAnoH",
  "key23": "3hgMa42q4AGBYrWKUaiWQ4hQtEZo3kC5uzaDbiCyYjABjMkxYArCg5t2kYGHNLdHZEtugtvfUYegd5nEw8gpEv34",
  "key24": "2b52VzEbujJ3nXgRwnQTtP7XCkUjXbrnM48CFHqcnPmV9LovsxuVoH5dMxfGrwjJakVB7885bydq3Lr9wCBhTrd5",
  "key25": "3ZmsRoZ3cqdHFCBurzBPNzdHE34wKvvNbXsnYPcQjM7gfqok23tTCd7UcoLsyzitQMuv1WnvQW87wY6GFmwapv3C",
  "key26": "3yXnQWE5EFA7QpAuDUZUgQ295mapVR2vBPx4Qbbz9gSAnBKgj4hJqaZ1R1sQcn77mjyYwU1K9TQgDf7eBfsvFVpa",
  "key27": "2h7WEMkFmaXZqevWyagujKmdqJdXugwsq9K4A5UgHXkHBk1FZVK5SqvNvvXyhDmDUwZE1rRu2NW8a13QpoihxL55",
  "key28": "2Vg8DwtkSwtRAqapamAVFiX1aLeVs7psKan9ALHdESgK52xErDnfm7fGeDBF8WzuquFzWGyXAjZUe9g1BnDYjrCz",
  "key29": "2NzRb7L4ZHcSNhXK8JTcVKmY8eFvhKStHiEgMiBwhRPCNHkPyMSQY4xxokF1vRQM8F3Rjv12J4gizQmHyefnCNzE"
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
