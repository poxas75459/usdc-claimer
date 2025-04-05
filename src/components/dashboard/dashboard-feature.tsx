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
    "2mnWM79s1meP3HMLbv57qHDKAsNejSceqWuBMH5HpT5NEKZZ6tYSGTMVdhu8pkwKrCzpwQww6gyrTW5pCN7Xu2dz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jcjJoBcnMNVxWvYfvr7ZhVVh5DbhJrMEyaC5CWnbhYxYUp3trYrbMcsJEAoH5xmzCc929q8iTgw6NVorGXmLKjh",
  "key1": "3hXvHbQBkAGTBUqX6tcemqPAYeVvRZfDmZXBdrWnRP9KtdybTunnihFy96hLWoy4ad7ysfYQ3ws9GaqEWXLftxXH",
  "key2": "34jDXQN1JRVQ87qDggfmKTggWv9PpxetcMPKQqPqYJajutVwhSruGRiodiaRtP3J8rH8wycqUQV3CpVYJ2yjvSgK",
  "key3": "nPgd73fxjnTt5B9HZKTw3yFaXtixc24QtPKEMWpJY2kP6JWVmRtrMGgNmaKMcomBZTLZEk4iqgjS6JPR5pQj2tR",
  "key4": "5GiBX71pHsT9y5M28RvwkUBdb39dKbptDMBxaEZXaLctoMhGfWj3KHMMu8ymJXHhS2y26pjCnmFooQ6ao5StciwL",
  "key5": "5eAGGdaZ1rtgCNbJq3puLZeeKFvHAFFb6st7FXfJX9gULdZLATpFRNy763oZD6QSF4zEa1hPwJcjL4peCFg1sSJE",
  "key6": "2acsax8gmTuCuFjVUmeTCuJk1KmpBsCW7ZbsW2vPX3vGC6Z7sRAwZY1W1Sc96v3hjwWzHTRj1f7AA5b5Z9jat9Nw",
  "key7": "34YWqo55FtX12yefdqzLHmAjnEKpmtAE2Kyf4k6n7KFA1bzztZeJKaFoGuRtjespXrhYxeg6Cp6pyAqqgFHjur3S",
  "key8": "4vf5fBXGYR5zKMoB3b73Yw9qV1B1rfJcchHoJxeEsxpa2m55xmFUHT2cAKzAQXLAzaUdTnwFMX1GWKnU1KyaVA9r",
  "key9": "2wycehfipB4kqTTdT7nhq3bidaZZJ7mzWfGZcTtuzzXHQswTJRWpmuojaeGVvqTNk79WqTgcemkoGAnkfUqijHFq",
  "key10": "44wCyTv8RNxjAbnTPzZtgiekRPz2rfgKcRtvPnkrRgFvqAQB2wq1vi5qLe3BW8775NX9GiJncgsVREocFtDhfWPh",
  "key11": "3Rz2GSZa44snDGqDdU3A96oA1Wd2Gd3yUgBv2eQpvcA3PEo55CmyjKgeREumiVv5fWeQuRgCqYhGqbPatDxhbX77",
  "key12": "5EDTjm5pC9yVLSk735nLnnjxFyRSetXSE221fKdKSXcyddCXDAyeBp8hTsEGoTnxkseRewLjCNJuUH4k7eTaAQFu",
  "key13": "3aiZwXXVDKycXvdesnAqxBj7rahTFiwLTb5wci2BPvngVwziXvCbSw1t7AHenCqmPxTPgmbc4bp4qnD42im9PxV7",
  "key14": "59woXQPBKtBx3tCWXm1GhxR88Z4UTD1zyUX79hWyZUzm3ZmZJeM6sYUAuuq6RjhHqY89T6jcMRhBZ1uXho1gFb16",
  "key15": "gh45T38biJKFJ9t4Wks3pT9oBzDNVRntLFEwEkYnZtw9U2eMbX6RACg5y2iz7JJtHef9hvvtmY5dVU5HyM6YNMP",
  "key16": "4JzVknecpXsbkKCBDTR3SuwaTLSV9axmrqQgSgjaif3fiwUyJcxf1ZE9WRsWQTqgeb9yfRF4QSzf5E8CuMMVbNG6",
  "key17": "5AHtFr2mdZKda1ayvjKmxqdP6puUjo9Tz4xaEFMKC5swUVGBSTEGFiKgQCQXRQQdB2rfGEeCYFCzSLeeBmFCixqk",
  "key18": "4BHxpAhEBCZCnii2CTmaVPqSSmcMyLJBE7EZ5zBurrwKDBV1jCEN9FeArM7Md822wohFg8nZ4uDTC9LcfkDxhNz5",
  "key19": "3gh8RmUdXRELnq5M5fWBqBgBvR7EUnr9nMiop8aG4GtPz1ybu5nKxy9CoBvvmoBiRFBVoXGCQBeucfUbp4aZEYZy",
  "key20": "3wP1DRypgFDM7GMaVyy4dP8RRjnFT8bV4H7uRibfZR4R5Z6bdDnWNS1gQsRoGS6xQdvhY4fXDgoQV7APww7yw6uu",
  "key21": "3CpBPbNW4MDiXC3wCe1EZVScVfT2USaGUMjm4NXiEJo6LVgr5S5fWRaFRezJyNtJ8VQ4JC4AgjJGcK5N3EbWuEZt",
  "key22": "2Yxt2kih3vFEA3aEC9FaxRZLNffc34amSbKi8UMLKJxff5B8z3H9z19Rj6M8QrJYwKfhyzWVKkG9jgUN3WXjRsKo",
  "key23": "2hefXtZSAcm4YPUm2kmRrJ4JoEtRpVhQn6tvipmg1JUwUfGhsmBA8CU2z5KMn3GRMzb1MzjznuAUEkxegCNqx4Wh",
  "key24": "4E7GbcnVFFRsFzY8gDi3GTwXM4NoKERM8znteCCHGiH5payEtWkeieAbxdWWJLBXZVh2Xdw6dsXVJeaFo7eYd14Y",
  "key25": "5FU1rwf5EzgEen85kJMgNHwAByg9sS382zr9cHMyzqdW8y7Cw6dwwkSgb1iWJsc2dcevcP3tPNTjrx2fZpa9D9Ly",
  "key26": "DKjthQsc5svGbXZwMAXEZ6uGn5MiT9KMbXnESsnqQvBCXX69CbB9CqZfyELJSgQnfjGXHqJsPC3ZSbpyaLtwSkt",
  "key27": "5deY9HzerJRn1hnWiWnJfzZ64JDjqMtB2fDEnE3ucum9htchmfvby2KQqvZiuCGdkgLHAQ6TUuBn4qvCfrMuSUnC",
  "key28": "7rvLNAaZ4JVDbp44za8o2DNVT3fFPp42j3FtKJTftjGg4qEdHzQdp7CJz4EJVZmNKfTAz4xsmxxzvjWEuSTXM8U",
  "key29": "5yCoWRFH3pX4kAgoDQM7o3KGA2td38k9AqCqzL3iA3ZAsNyDdHgwNebFijstw9u9LEyPeNN5wgGJ4iKo2MYNb64e",
  "key30": "4oAFgFAbrQjfqtua5qXf7MGomFE1ccDRoogCnhq4bMXsLENEHh3u9keLDSabtRBoBtCSKHV1A8Uij4PPgH1C5t9s",
  "key31": "5JrCrNf8uV6KpmZtGhsDSPwPjVbpqYcmkoXr3XQVKynpkLPmexrPyxieiYGbMBw5uXahDUxyGJEJY3ju28ryQ1qP",
  "key32": "5rQfskimLXvXPwq7v8su4mrNdRMnkjJZhAhHwR6GEaYR4KWdCLa6Lq9VrKBpqaEKbW22u9ko8anBHizBtYhWTVw",
  "key33": "26h3TzMCG9dCrNnBVoFzqiAkqcv18YT1LuKguDvN11C1QAKf137wyw6Pdzi2xympvz2KeVUPDiUGvjfJGxBYdAiX",
  "key34": "25nqQoTsmb2H3om6HHbHUtn5bULwd5hQt8nQ5kppyPUxc3LGyMAMt3C1k4fMcjcdkfX2aEfmcRQyRbeK5xgqtCDa",
  "key35": "5gKSTLvqZzsKGjupE8rJn9JKmzwbuVExpzG4begg3CZyStf9zx7um7SJoXDVqRgcLs4S5CMqzgFDrppP1dtiw7kX",
  "key36": "TsxC1jKBeQtCLp284dDkohyPcjwz2EqmJqM7ZZgtsu8ieX8WeBkbzJJNFPTNpzRJTQPbUEQrZLtuLLU7Xzr4Njf",
  "key37": "5zurJsB5YWWUdTvtr9g1pHt5Ame268R2EZCUUNxUG9zcPKJhhNRGKzentaYhps3BUaZLCEtuAy47C36VAn1VgR3a",
  "key38": "5SxhFNijPSiqPHtXYxbutSD8fmSBJLGVwuYY8n1xGYKGGcnUnfxcvppmGfbbfjoRigthcLePhC2eXkzqJRnpPVqM",
  "key39": "iAixyGcSGifwrid5rJitYdv7j18rm2iqhRFqpM42LnovfyYrXS5MiBXknaaLkbCHsDTjewbhDAnnnsfWe2Uzyyw",
  "key40": "ByqTRYBvWGv7GVRQ49KtPadurK7QJ9A8eaDXz1FKwpWrxiCgKWhLABo3JsE1Z1pd2yFdMAeEmiH1A84LuzcA7eN",
  "key41": "5rWpCw1gWbUixuvKrLMDDKq3hieDK2P8Y8NrB8ZD6vP3PyQKbWnKQAhWxgSbvZ3HDpf8ZkNEdRqnW7ib7QTd9Z7K",
  "key42": "3BG9SkQGNniDgj9ELCzwZLJqdPyvGUSdNhYXNUQXtjTh14WoLBYrUDBYGqcWFTva38UHdWBPffna34WZ39tYzwWt"
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
