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
    "35kpzCmVeXQu3vqrSJgKo5EUgV98JXcGzjhbRwSh7jrTUaNXWTs26cfE3raLUF85pL9YwjBw48ugcc2nLbMp7CD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F2sNkpsSPmWwBbXDX6cwgSCGa5ufnRncGVxy6NsWxXHQxPNJ1iG2WryhCTfVmfSkCVssh1TK6Cd87ZuLgthxBxR",
  "key1": "2XvZG1nqJnT1hxYQqL8DPLMQ3gLWzzbVmvcvG4ZmxnWA2xgV7J6sCkoVELgAzUfGZ5YkDu3ecHT6tiK8QtZvmdQP",
  "key2": "2Y6FmC7pKQWoVnaaQjz8WF6ATKbHguwaPAbzABsAFBNLsj7k9s641g7r2gohLAGHsEEGwQzBj7yTZHjqnZobvEQ1",
  "key3": "3K5eX6hCw2U3pQjDQBaTGvBfs23pFQ4u7iDd1yLqqG4xyxjJiySp8BxugUcjxJJmewbDJTFhefVfQNykEYxEWPux",
  "key4": "47AKayq6orAsEFHsYi8Wq7QHzCMsQ7zvTXKjXDvriBYwcrsjMCrh7j8GDrTX3NSZtVLHigLk6XB5X7AGzr8KYFjU",
  "key5": "45ZUr5eNLQVLmLbZBNXj9nzgyThz8TMB6DTXCVNx2nnCwV4bfAm6qrHCDLknKVqvMoGZWUofVRYhwBvQKpgGaXv6",
  "key6": "2nZ5yPuhYnAMNfqTUKeM7FnxyircPezb7uff76qhk6LxDJ5d3qVUo7FPHbRL9ehtNXu1VDtRVVH582C1cuvh2aJt",
  "key7": "4X4mzpkoDHCxZGiUznrTbj1LkhEDHmCd7x3aRk6iZHFYyFyPnGpMhdSq3frqYDrmgD49yzB6BeLfh6a2ua7BtPa5",
  "key8": "3FnAcb8WFQLVogscnsGepoV4LQr3NdSfBoeWM6PhHZPnzNpHUajnzwF6ZVBEpcyD3qNUUTMJZT6TC6xyyHYVWXn4",
  "key9": "5wwdvn6ebnJ1t49jgKwUp6TqHpoTh8XMRAU8PpFM3b4iKttbU1Epj8meh6WiZBSZv5kEEcqwPJMLjk9GEJ1p6oxh",
  "key10": "3mDcmMWzQkZ5Ejy3efj5jF1UjBSrnAccDnyEbcUKVu9Si8ZWDYhmABf5gGyJjQ3w2RCiPDQhnU98dhLV9pHsj311",
  "key11": "4Ek1y1jLChTKU8zVx5WhGaghBVesnxSF7pNSD6e3g8tPPitDA66EhJhybTKhYZpQg5yqdmdPqPq3BPZYv4Be6a51",
  "key12": "4xyxf7eRGb5mLK6QK5mKbzThasvnHnXFLmMBBWVVR7mgx4s6GsmxbGftW46BtdY8vUQ4VJugqmenHiPiYAVfKdMf",
  "key13": "4CicCAMXfmCBuUyA9x7uF3CViEMkZ6zwQde6e1b7a7PWjZytiVP7e8iaqPqbhG57czKCkqXkJyYy7SHdVLkheM6d",
  "key14": "44R8Q9g5ELNp4mTk8gbtkb25FWYe3AFjjbKra4YwvtKkSEomWaMHwbsrKjhY1ivRMEKE6KH8w4VWaCzXsZCmtnVk",
  "key15": "ZVVJSq9Gz1qpdUs89AzP47imPhz54dd6oWLdqSxXtdijRmFd4FfFLQ2Nv5PwBGGKc53NEQT6ZpfgkgwGu88hxZg",
  "key16": "2aCq3epyLmizbK1FJZWqsbR7MkhmfonW6CycQygUET3uUKVaR9wntEJzyhMzDx2B4co2rShGgpcmpJPtaL5t5MgN",
  "key17": "2x7bTeabXB5CrLpevFxy9wgWqRsMuVyAJpJxBMcpkNZg9gVTZtKjGh2poET6MWjUbCofxdp5DHdequFYwdyawbmH",
  "key18": "VnLvDYba7RF7dub4qT1m5eioedDsSNLdDXLaUrJgvPsZmHUm9yCf4VYmLpr38TDDAKrRdEbvCnt8A8UnvyF8C9F",
  "key19": "F32neEgwfaTKpSLhCfrSRFEi48MopnC8uD6291RTW99aFLhxEBXHTYzbbSdwXhs4HVJG8wRLFz1ZYrToUUa5C2S",
  "key20": "5roMR982ymEgNF2CefCC9LsCnyk1u71btBozvRsmKCq5cQQM7rPLYaoEgCfVfRPVAVERp2FaWZV6iV1myEic5Zee",
  "key21": "4jFc7rChaST8vdnTxAdDUgUDL5Zihnd3MEyahDgKsxxx5dR7VHzrMN3AeuFGkCuXk5ygx3Z7MuDXy6WnbAaYn1CB",
  "key22": "3V7Fd7pohwUZhRGVfJuhrPLjDtGivG3eVTezjVqzt8sxd8eBDQTkKxK3XJ9b6YBCYFq14gtQ42KzaEsSUtTemkBs",
  "key23": "2M63WeVU6dRXjTGLe25prBtagjHbdG4aTkLfjnbLfYGM229Lqq19Cx7SsPaFHT4YNQXQLfEPW8YgMAmrrPLiaTVy",
  "key24": "417ffEgNYxnSHQxJT4pFKd9YNh3pj7brvWqi6WufxcSHgGT8pS2B22GqGNkMvimKknRHm5znCFWcrkRrpr1cW696",
  "key25": "2UbHXpu4GMBqWD6gr2HDZJBS9J1K3oCji4iBUqnDw2EyQZJ6We8QpXKyzEsTh8uiothMUJzoKjrMvsaBZCUCbZNT",
  "key26": "4erP3Rz92mhmPvDN2AK4dwdusU7cUKeBbaYmFpeHKQ66hQYTZHNGuebGsuM44atH6RXCcL5XBWrfJgzLx9DpGoh9",
  "key27": "35eAUX3Gip4jR3MRhxycdhzRAPXKPgQ2U2Kn5cfznHTQAyzcR6EusP7BBrSsna74hfgC45xdZMNqS8owEnsMFW2a",
  "key28": "66brxfHMdCwyw6cZHgKqcwgWVyxnWchfYhJmWg1r3MfcByQQPM6V52XRJ3DgTyGwTEknjn68Fz4choesuvTNBdGv",
  "key29": "2u52Jmhs4D7V2LvnHZ1oTqBtVrBibFiZgT89t4dY2yKb26fqTyMm6K2RmNfppuyvHufhjoyu8aEKk9sF2VsEkSCZ",
  "key30": "wW8Q41xLnkWYp13tisScwZ1tvTN65sdNahoNZ5kJxM68RYpwyeThtMTMUrwNrUwEPEhK7Te7ZWLVZZf5szM4u5X",
  "key31": "4Qkit8uo79o6ksxHuuVzwXu1huZG6rtsc4MDGHHe47fed5eUQskbTJwaEoJgo7HiKFipBV2wa7MKJxutRAE9KRq9",
  "key32": "38nZFjc9NGnhijHJHhTMrb5mN1XiRuojJtWuFkBsan38uPUZ6oFs7k3BkrBn5pBa8TS3E5d2aWpd9mQqLQERTwPh",
  "key33": "3ZQS8BmLkRjeNu5uthSEQBtAtq5ygjMephhuWpiddSkkrZGg7RCBevw49dejQ48bGPo6SbaXWiY6LXqg7YKboirN",
  "key34": "4JunqoLwYHmK2GKLXc7yFfhqPpeqaRiYH3ENu1dvbhe7x2iFUmYr3DtpHdRurstSbTxb7hG9v62zBo5VYFhfM394",
  "key35": "3Em7uwg9zeC3GRfwKPN9kZEoi26iFKLA2quXDpe61T2VFM7Keh4PSgyjQDdZUAFS6rmrxezkGYzH43dNiiDbPqh7",
  "key36": "iBDqXsnYbgogzBZe7z12j9B7LrEUt4muGkmkqoWXp6eQjS2QeMiQVg9DCNdXNyFuQw3NiAk2phggjNzc6NJ88eQ",
  "key37": "MkmB6XbmFFXYctepQiz5SEQZey5JbN6RPKCpWEKmnW5PwQpKqKMHMRBXM4U6w6CDioJN2r5LYux9eXMzsFoPDkw",
  "key38": "4XBFJqFdQrZjyMZnZV4gAqih8iLwXgPyuSVPwVH7UKLmX3v5q5fJ4fymYAaikeWPYMGCcuzLTkEPRBfKqWSH4jC2",
  "key39": "4fKZub8nPCWLAAXwUFLvqG1FZrU64QcrszfYsakR34VBrXb2rei3nA94cKWr14ppfXb4VQRvkE3enkLy2mCtdpY2",
  "key40": "NBWW77zoSDcxHgZCJhnzgJC2ANFNVV8K2cSQUNQvmELY623Mw8jKsWdqScASGBbUVXdVtifmuMsbCNLi2KmrPcF",
  "key41": "TBDuxwft9qTSHKqSgcfzMyD91iFyDKi5qiNM5XcfChFBrRrikiJHDtQP3DKPhX5gQLqvRuDchuMtow35RvszuRP",
  "key42": "2Aj7SMJQAjVUTm3m82nCXp8P84qWWeaCUr2tGTCsx1Cx7M5i7Cw9Rpc62t5mehfrJxyBW5S9n2gjXt9n5uVirbnS"
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
