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
    "5Fu9sU1Ckibr598nQZoC5MFMurX6oAA9hgYYPGBPZigJVBtnBtGERRbxbLV9v36BYrYFw3A1btYpSHZdYjg8DvxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vG1ZLtbQqxx8jDu1iYVyh2MmHizRifFofG5W54EYGaZ1Wjvqmyh3tfq9c1DYuokjZQv8wnrer13QrS5VgnsLcZK",
  "key1": "2mSDnvZ7Wawe1X9pcfGAxhTAsLKt7FBr2UpQJZvPEkWQHuxHZ1XVj8bY84QQoiZ5gXbUMvWpuujXNZnisNBAEaRe",
  "key2": "4NntF4BC5cyEBxmtKNmk94gWV7XYUsGNZ32oBh6GbsLXq9a6UL6pgvVe8wM3j9PkcQZgM1y34NZXnRRxpyP1r2uG",
  "key3": "4ayMhGntvZNJ2D8Qndyqpfd3gzcy5vd3g7BA4Xv7BnXTrvrVFUbx5f6BYMhAn1osiiXeM4azjewTP2WzeWe9kZZ9",
  "key4": "5LbKWb2RE4WW7Y6FKtV73fNU98273ftN3QvQuT6WCR4ZK8mnxKHge1bLPbfwTaQ4ZNkWkvGzseW5TzL5AaSU2MEs",
  "key5": "25KWwemag7F9TisZWWzqtX3WhSJByFXXkZoG4oxQjQfZYFbErn4jjwYTfkXoyAwyxHhJXzqPcFCU6ogkoXS2b9ag",
  "key6": "nN233DU52zMvdzjAUQS4JHpCASLqidhVQfrEHzP83pPtqTF1UWkS7dR7SdLRLV8dShHNACM1Xysw2yYYMVSQ4A5",
  "key7": "3PfPrQk2qaEtpUUFiUC233YzVSejdFHDazh8Zhd3u8v7v7HWmXPXAc5CJJNcCiRabe4Gj3icGPmqetu84GKZhkuz",
  "key8": "54QEZUFRUwq1HVDzPSv19NHf37KvfSYYELhkzChR9pAEoFDbf3qCQWshpzLJS8wt7WZ1xUitxrGeZEaQF1RjqNgp",
  "key9": "2TFkg7dmzvHSMA8zaXfbN8M5zkmapBqAVhuuMLN6dxTaQU6MzS92HnWPnZx4KgAMYqyJ7oDpCqtrev2vTtCLNj9w",
  "key10": "5d4eQWRkN585q2GuQqeLDVnnPv8Shv6kLToUSJHstvM94j566xyaZD2Va1pvmVj5RVJFVrZaCLvBT15kNmuFTDZp",
  "key11": "XiGUjLM6neAjsbGrGV6aWBoDTHKM3gRruNSny9c34rghu8rSST4NFa9A5ax3npC85p9JzLNd89YiwKSTQ1KBiXf",
  "key12": "5F3ckGZ1SpHGpEAssLWmSNXDrgqzDCyBArdiMEiSvMRN34wTYjbEkCRgXAehaSaJGKp3xURT96VchmDw7vGP3xdd",
  "key13": "3o6mW6h42aLLXFmyDCf8Y2BVmPpFaAkN1YuMU6TSSPY6WhA1odoHMvj12cxWKPAw5GYR8AMm4hbsYv1dMdaHM1Dz",
  "key14": "2jsZYARr48wvhwKG6LuQhfvNuVWQzsCrir7XWLqygKvUvVookytXn1YGrWB9WZH9rWtft76DPBjdKzYZmd6Wi9Zu",
  "key15": "3HtJY6sCUmjFxrF69X7PYpCFYvdR5iGRSUqY5p8BfFdzCeuU1xqyQxKEJZ4A2zvwaMLz8g26Lcagga363bAojAoX",
  "key16": "Z63gLtWz1CuXsbj4eomjwPw7DDnqVMJ1ycyjqSq9RxBHZEk2B8LJ2rTjAH5NRpcBmTEQqrfpBVrag85QEErY91F",
  "key17": "27gVNMp8MmWRgVvavC5FfUbvckf7WFjth73isEqoT3esXvh4KQiqiv41Xv1VZEtbmGzscsnh39dM7pdr7ey9pRh9",
  "key18": "3Y9H6uC23dS8DrKT4VMTj2QBgZsXLFcmiqtyr8LRuwkSJT3NoAbZWB1ZzfbxpzxbXVWUQP346xrGi5w38uJVc3DA",
  "key19": "3qWUZRdopxHGG7673Hxwpms3eDsDAitTL27mocuLrfn9yadVME1fskAfYRcHMVX3prUnZ92cLYuUT2BBAATJBuUJ",
  "key20": "3Ux89DJB54dENpz428w6PvEQMoY4s5VvSd6snpQMCvXMvXM44gcF3tRDNBY6YLk2pouVFJTDj8htBhx1mk7WLCNk",
  "key21": "4PsA8T2TjbNCg99kjLYVDNG139Q7p4W7aMx2cmr66BjQjDBN263s1YcV65sxE3RhWwXM4NnuvGpwSj3LTMwLApfm",
  "key22": "u4HVPYHN82KXnK26GZBNujn7jQ7A37DNtP4PQBxp53uoUZr8PPFdmA4Mt8LMaZ932vuNx3YRVGTApEWWQimcMR1",
  "key23": "54XyqXHMuGPyZkh2SHSCX6ro6z5wAgeyBaGUqTurfF1jmi6huyu3FHZyPRXBR5kEL5nrZvvmJ5AWUqKCrnqEFYPU",
  "key24": "4WGE74FT1y5pwZTs6eGd4bsCjeRdQr2y8Cd5TeFuUhzCRLHSJA7Ar34qoyyhJudq4w7R9Xv16G2yLd2cG12axk1f",
  "key25": "2QJ9bbKeu1fD77qw1F9D2WhKAaMoXzFZmKyT9eJJXEgVsvinijCWFV28PeuqeWCUUhHwymxgPsDuwnVwSrfR9rxS",
  "key26": "5g1F95A9zW9hMLdFiZye1hR4ZKSiUmx3VTraytTagz3vy541UMVJkxytZeDFpMZAe1VVHnvTBD9SfUc4Cjxr6qA2",
  "key27": "3YAK5WHSxG14Sa2rNaL4UrbjTnpohDgHV3HvxHyrFYHSKb9YTGfRKbssNdZGEfzgxiJFhoBe2m4uk3GFy4W3hZvh",
  "key28": "5hhR7F5d3VCRDKtWFWefQwR7g21mSjEdM31H7MvRPQL8SX1GX3V7Xjg33JPTJdxb3sBcA8nkXEX4W41ZfiBqhusE",
  "key29": "4xSmrWifGCFZPsRJdX5K7x2kXw8u9BQ7uNqwKDuUG4GzuZE5jqZfGYcMUsyj1cEC3KiAB6tiKKBtDPiwt8j6geow",
  "key30": "3K1CtfzBbzKKRHLpKHLzkEnw36wbKEpqFUrWcmSs6w8K7urtzoeATVggWfBLhsHEtuA4uibPaJTqZSz5RzgGAo1o",
  "key31": "2hu5p2rFrbcK7rB36ESNZGGMw3NoCf21J7JE9DAi29p2tS75R9SCjxwGvwX3gm1JswEksJMSUq7ZvWzyVRQFi6Dj",
  "key32": "5HKr7cLEec8sw1snZJASeX6xCQoeg7RgbNvyDptmszyBXdxzJeX9tSnQACfRNmbtJ8jxszdYZpAdqUnVBgmSSMUa",
  "key33": "hkqZzyNqxCeuAjJxir3E75BKPvntgExPESj1gEghetqyJ8W5AF7nNSUG6ij3ojtcSvGRSTKuKuyYYST3QkVsy37",
  "key34": "4V9fa8XJmujtA84dTXn3akGWDPeCBFU7oEwVTudVyckxodZ7W3ka2zTLNc26wvJrNGWGjey4MovL85efhZ4pBAgN"
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
