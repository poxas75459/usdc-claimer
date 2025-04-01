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
    "3R4JykCubCkmkQCwuESn7U4MbrFCkvpncKLkj5ydww6HYXE1J5vWVYLUtB11H5RJTzc3G6xac1VcxYPmDypXRDKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K8Q3avc276egv9RMN4qYtXL8fS4FSi3B9DRXVa9JxTBUQP1NjSXhMh2PjFbb39fCLxKWeJh4jKbPoXQ52bD1zvM",
  "key1": "TZEQ25fcoGybjg7HdDRr31oTXr1a3jAuqxepGDVTteBjryayymWtyT6J7PZVEa9CwGLX3m11rQJQuQ7uY92pzAX",
  "key2": "FAxftYrqKhcFgJCgPYEtUmADUpRfzFXLv5UHGtFD2iJEmVtr9mFD32GaRc2mp3z3GYYGLjDBTi4vkPUL5Qf8XMk",
  "key3": "4BnXcnp7yYZV3GRVzWiTRHTAjuPCARdEAw26fa1oWS41XsXo1okJN5iZzq17fGw6dTpYoZsMZwm5ArcMPrdYeZJ",
  "key4": "2jvheWv3ZGrdQv83tmDx2E5trDajoysbBYQpqJ9bZDbkUNiCeZjcTJ3LzLkiCjyeVPLXGRZdheFHVqP4R36UvqD4",
  "key5": "AEhHXFQxMLrgtX3PZvxUoWKWoarruUZQQNUHw3KCm93GRXFB6S4vHErfSLFSAv2x9FpyrCFKVEagMTN5MQQhpWi",
  "key6": "5k4cbsC7BcyDHDBqRW4XpM4cDsMCP3NeKX3zJ9QHam8sRdnurbmzBzQUijdzQLKGPFQxjD3LFqaKfx5By9Ea5eUm",
  "key7": "5tMn9E5B61dowPQ4gHteKKJ8z9wXzCf8Wqknzns9PsuHKhsyyV1uPu5CTBH5C8U1gneb9eGc427nwpkc7Ak4Y3Dr",
  "key8": "37BtfdSF3YgP2atUNWdypPNwcpFCxd3TQh3DiNshisicpgbjXe3wza953jmf3qTyBifu1LnaVSdFkrBwFSWzQ8uG",
  "key9": "KFZT1iMCxAFBdeYnpoNfrmQmWvqUHb1QKSp8rmBCUMxDmLDsqQJjRddUt2UrGaX72b1PrmHVdhXwLMvi2dy4J8J",
  "key10": "4wFfEE52fMJ2K8mBBryLVUwPfMeg4MwJJRZ8RE2KEQWahbhB3oRBEUTbPCR6vJ45geo9R6WDJZcm38zdRFH57fHc",
  "key11": "5aBMEcQ5wXYpTmgBVziTVhvQiUb2KndF736v2vyELhWWPa3XgtwmYVaJJxpSWW1caskXeUJgRBiRHV9bv7R8Nusg",
  "key12": "2uj31PXHDQ68yUxW96wAPtg5NrAkuzsyvjuibCxkcHDU2hWty8MX3ohr8z4Up7vthLFRkGDqgbpuLgCtMd96Bmco",
  "key13": "WFJBaB4AdTwccWB5jr4yrzhxuyYqc9eBsUYVz6YPqEAbbgZdjZF2APQFbuxXrttxrCwrv61ALACY89C4gHagQJA",
  "key14": "4bqap5bmVtoV2Dr9gKXcbAGeeLZix1HCRQ4Z7NsxCdzjzAGoKXhNyaXcRNnY47xyHY97VPU9yxZ7USsUJdRHvpan",
  "key15": "tZdXEfNNRRY9PYNohkhfcQDz9QtxGGxZnJKdZu4yFX4BHiySWZoWSmUbfhGNVHcheiYeVLn3mwQ66TdN6TDbZXi",
  "key16": "3YLVJw7ogcXkjgYxa4TLTYJbfARLHzzi2QQDYoqYPPcpqDANPtGapQMnk89G53AZzaW9NL388EY1wuykBd43hp8B",
  "key17": "4SasroXTdZZgV3wdNMyo5BsQkavLHPfNW8fsNLnM6PkkHT7FxBkz5TwSB9R7oYTJercX3eTnhYTDP92V5mUpekrH",
  "key18": "4RqqAzm9spz4FgMzwAjAq4ehx6pq7F6DTRuSxLsX3u7bMCira3u8tDqEZYayR7mh3cjz4B3on1og7EkZcvWP54Cq",
  "key19": "a7zBnnssy3iYy3NhxPubMH6Acx33ed2QqmNQf7ZBWibvDjFE9vucVTrjWV4yE9GZyGCbkpRu4fYKNSZhv2ReNLi",
  "key20": "y1WKmLC7xCZLt6KiMLzb14rvK4dGuRjbweZSk8zobHnFn2ndSvwyoS5FCLRQezQMkw4y6Eyi5i9wGvACRqTs5sb",
  "key21": "SvDHLczvSjW1Sd6zkHoCuJbzihUNDTwxQHyTkrNFW4qjvwJmfFtsv74iBELMtWRPiN4LrFmkFF2P3GkGXyuWdHr",
  "key22": "92wV2FjNbMrTpZgeyZ6nNWAEHKEG6PfwoUxbASb99Tu89APQMJDWTySCGiguZzhhNCVqFAtid7VvpJfSxvWzSKd",
  "key23": "3fwuLtz3zGs2AwcMdqMt7cVnRUGS6Kr8CemsphrtwJzBgt5P499j496oKdKKreR6HMLDpdZQ8wqqy91DVwGSsXd6",
  "key24": "5TpsNxzxhfjK8qrTmaf63mbEqyjn374jf9wnK386iQv3sBWdUVFZ4p2YRggLLWWj3y25cVdBFVeNHRz2TtoTi9MP",
  "key25": "C1UHn39vKJJY48QsEDvSjeBk5Tb4QqdeATq3RoEvxqhu4gqXw4Jp7zaeTJbaxHh8FYEF6UP7xUnKGXvGSxRNwTJ",
  "key26": "613kuWDsXDCg6Qe1MC8UZi6HHoV8QxSeTk8CphriJb2sxXqoY8BhghmqFPvwDvVpFeTAHESfGd3sBbhieao4cPZn",
  "key27": "4EZ2scdnPxjVKqpsTZAPkizvDUQ89cKW3oXJzuYfjVy14DjQgr6ibspy4cUbnz7RRT7UkwGoKZwUUjRwQo7rvRvv",
  "key28": "3fAqGkUc1pysna4bBR2F8ZQxvjVjyf3P9bfvwicp26jukKTfsyaafqhKuU6bZdwRe3TYvD7Rz5tsCpMuT9nFRoYg",
  "key29": "5oLc15YiEV3E37RWJEPMG4ohyTvQ7B3ni2GBnZSzrUmjprjowFbRmtBvvymYFDZ4QDxd1FUG9WbvefYyaXsBVc9i",
  "key30": "4j4WbSUoKoLo5aXcYPNFRhq9fYoq591sd6YrvLLztXdUdBEZWZmwcJJJRa2jDN93Hooi7KFCNhMRAZwERjUpe3fM",
  "key31": "4gvaMuVStQkzDgk7vix7MrkEq69j8QxW9rTknbM7ir2ML9Amd8NxjUATPQpGaBhoUVNkZxGcYCwU4FiL138zFYPR",
  "key32": "63HiV9kyk9g8Gdh5fSoAh3BcFA1v85TxrwrT5XqUSz5DAzbvHbZTFpMGWVjx8sJnTV1y5QtDUEwybP43yBDXeg94",
  "key33": "3TcmBGqUAquFC4KrRjff6uqTMbue49Mo9cdjWRdzkmFpzpPL8jmKs1tKDxMgDWkFNCK936JPFGF5d6kJxRitLtsB",
  "key34": "49MqdUeYdSFhLs29N3Q7iPcG8qFBM24MpgiwuxeegBiFdesSYcLqBwBCjugD5GJzYYrQ17ReAkV5pvpSF9gF8N8Y",
  "key35": "21VSpncNawhTEjd7kNxHvzfac5TYVNvnnjt26zhJJnb7EwAn9qCpWVSo9ARViZmRLZ4cdiBaMWuTNmjYGqWosubU",
  "key36": "5sz3XZ66VmctfdeW5hYektebzQ7RnQyrW61eZSqbLYGaDpg4QzExnn2MepfgvhJWFdmRLHogxRJ1bwPePdPASsBT",
  "key37": "mm2S2bhP6roQQ5m3aAAzxhmz9HrwQACgTmrJyod3sDxuE8rr2twic3nJtomymxWr3AyBb1Y6bWj97WCdAhTCg4u",
  "key38": "4pdK3mdJAcyzogEEBBZBLFpiSWPA5qEtMqovWqSwCGXWwL69X7pQPCW4Z76n98z6RN2s1oNVxnuYvE1dY5CzWUat"
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
