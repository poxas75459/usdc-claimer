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
    "4AG5pdQau1nWsafUGUDkDuFRytg1ohND7wcGenHtPHtr2joadrVNWFYb5Yq9qc3VaPRsMT5196nyqAMzjFedF9tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G6LMA4aZsq7YzPiMXQUKrt9MLkxxyrJULLqBnKnybFwPGgrMn7igXqbpjWXSeQx9UMxpb6Z3rKu8kXyTPf9QehY",
  "key1": "4rDAev247xrp68sN5nMecPV3VHdenJBoY7TCmTJfGT2ZHErbVBzj7NRPLxFsSH67WQTu8SGU8t5UaA6iaxDXtJb5",
  "key2": "4QboD8VHk8JEu25oDwm1FwbfuP4EDPTmUP3ob1yHmvj6MHMxsW4V3FTX54fcfS1o77aHrPbPS89moDPmusjTo9jt",
  "key3": "4cYd8q4p4gtfChtWGM1WQkWuZbex6yTp2x3Ln46ep7UKWufyVTqoiBpCC24iXYBRuhVCzqZsLQjKiwgEne2YdMda",
  "key4": "5QZfdVm5vRcfCbMVKoN2UZ2fdE5kS3HH3zT5SQeLWhkSaac8VRuz6iXPQBQiQypjjr4JFKcSWAhYExycXsSPAprD",
  "key5": "5WxpavxZsxyzsE5uZn6wxy6Sg5Khojxj9zoDGSbo7yZ6UgAtgSuaHugWjRkpQ7vmmwvaFtUwfc2feQ7SidXoCMAb",
  "key6": "nbJYQHLvY6vg8PijpaxgpFqysPbuYMnCyBVHwTTbGTnrZHio87aTBv93iWhaygLguZPB6T8AF7KQ9spRWBLMWZy",
  "key7": "4ZAYCJNyiZhYPKtyqS5H8SfWz2QwzXVz5ZPrStWVbb9YbmkQbUumzweZoqVUQRPBK16uZkBxesMJPdGvNmfhswiK",
  "key8": "CUaQLPCjSeKkhhphAA3amF5MKyHrwg3N4B7tUSxpS9m5eXWXLKuszCEK54oSfjpXZZcx1xiRBSsNZMLGQpaSUjX",
  "key9": "62ZD4UAumoDBbugezYcpbVUA7tcU5mo2t1dXvJhihEE4ecj8yeK7ZbTMUvfw21qMrH86crWt7aZTgGQDe4byRExp",
  "key10": "5jvuoPETkDmTJ6o7JEkrwEHGWsYpBmaxgwa9rnAtied2kbnusYX1Tno7or6HjENpfzmie25atiYdBcpx5H7gKmg4",
  "key11": "T1aQXjhyn5qjwsSa4ZFiaGKdDAWozhnBjjHN6XTRsGMS97EqA9H5hXk6pUJx9yV7p2jD6XSzCpSRMXwGLSPTice",
  "key12": "568w5QbdnoWdSmP7c4BrWSgr8i7MWSH8b1gaUXypWy5VpiUuibAB67tmK4LfjukPNokruXDNtcJo5YSK66UMCTJC",
  "key13": "4rHwwp7SGaLaKg3fZpHidzEwPuCWeV3RicGw35fMrxjjSnuh5RkGwp2N6LgwJKEdZhQmfA6s54cvMG1gW8Temzsd",
  "key14": "5napBPPMuJ5kJuec3wm8evSDnc9o55tweuKyaMRnt59LwTYLK1jhh737XCuRt2NoQyAdjuFoQD7gbs26JwJiMZrS",
  "key15": "67M9itgzMQQVPK6dRVHjtkJ8WJXNbWnnkjgQX4Zy4nmQpWMJeVboRaDfbUHA3DAMLav4Qn2c2E5MbQpcqRWVpE7B",
  "key16": "2Nm8htkKkQvmvsLpXvxtS1bjCwAxRVdhwjiQWZjG8vdz5oTz8km2UEz7Tzr6nuezBDyrAhEEJ6pgFGmjyWb1rdWh",
  "key17": "66ija5v4QE4XsjScSXJ9NNieTFvkHDFdVjP1VPnF1uTaXSptosBdDKxFRoeW1CeSBeAGNco6YCs9mdZZGSABfCYo",
  "key18": "2ocwTL1s1h1mfz51E5FXLtfysqbGW6e6q6X6FkSR4JJZyumsgGs28dHkoCRVkGk2FTvTgckr6VziD66PFRag4nS1",
  "key19": "oBcSuvR1uiPfPYBW6cVzH8Z9veMpjti9kfvixCGqvQF5aaegtsq4LhEPakPLvwGoSG4XmWZDapGtX8Zx2ggvRVj",
  "key20": "yULArkFmkvDewAmgYznPJKvstNZoN4D28A272PJhMb5ao9ooExC5yAhxyjgnM1ut92RwQ18HMGAVwqFTXEbahRF",
  "key21": "SfzqvHvoxKphJGJ3iFk4tnvn42VUMxkW8sqgPV1jmM4CGU21GW8xuJTQxnvboYTummoBJn2Pe78zVKSy2L5FnZC",
  "key22": "3wBq4jEezymKXqacVZ5dSts8iu9NNvSr9jtu8ah2Tdz9E7hQpgJM1V1t4PHuKMzZQVX3oDXPKRNLoYmN6QHBHCUV",
  "key23": "2WgEbTscjH5zuHCwwe1ZKAACxUQtK4LSiSitmsX5fbBuYPCXMHDieAhrruWWgxoFVDo3gorde7ezHmMByH9nNtRK",
  "key24": "2ZV4AHwkFCTjGzxDEvGCrxoYmGVFhz2Q3KKFLjQufARY7oruc3n7TeFZgt4MXoawUKfwJcDKdCF7w1vj3a8Y52Pd",
  "key25": "kMHPwFD4JWdwtGZER67kUmcMFtoBhR2nsfr5zScgFFB4kn53smknGZStntYQou8MrQW12984MGzYoVWPBZajTJD",
  "key26": "5gmto7qxem8PNePCW3W72MwjdMjdpKCDLJsgAv2tR9wjKERga1SfnepfFaV5p2mj29qSfSSfw5aS3jzLJmogCfF7",
  "key27": "aaiSU9P8TavdNWsTVtrBhKyx7SuuDpUxaQMKr2KrQSPpU8DNfo1ymF7gVCVpnqTp3KFgXZKWqvB9vK23yfY5JWR",
  "key28": "47uwB8orDo2bpNtugWgLh1NQ9bG3xUvBGNwCdQimtwyd3PbWRsxPun1JEnKDkX9JVRAR19m8vBfukkMjrvbbb1Sf",
  "key29": "4jPQiDJpFmv2GgepkKABwZpq5rMTNJ4S5q8gq5tBuXvUpiXX9WZkHMjjq8DB86xvdxzoidJBnbbyYpjfNd1faFJS",
  "key30": "2J8Me2jsYmVhHatvgKbzx4pCehi91kxbBTYQRZP2swn52Xzk5g1M1qNobMhhstR16m6wBp54k7YmtAnsk21ReKkt",
  "key31": "4gQh9eJbyKSHWfwaFucRrXGBRjwXJnDbZPvxjz2ff2MbknbANJzc5UR3oxdDRsGNi8zGX67enz29Z542oJ2N7Nyv",
  "key32": "2NoH4mtnG5sGNCpTGHkjChzqrVSJavyrnpeAxzyiUzF9TRq7rbPXVgEymjuRjwLYHzGiRteTXxXdpJjhBufsnybn",
  "key33": "5JJmrKntufySxtbVantAQMJZFbFSNJ7R7SwnEjCtkgboMSiTfuoXTRiPJnTpq1RSC8ZRh4LTLYZAP9iVTvc4sT6K",
  "key34": "2fAQ5UP5XcbsqWvbGurjYyRkAJkdYxF5a24w56d9VXSwpP2DtdFizt1zib64YrBxMU3JrA5xgRWvjAndpmL6gGoU",
  "key35": "EzwkGhRy4HhUCZ82FYwU6GFr6CGx8GpYEUxgLyuPV7s2BE6QDNgYwsxCFxUbL8HbA5bvnemrpJrECe71gU79tZF"
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
