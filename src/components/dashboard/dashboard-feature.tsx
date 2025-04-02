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
    "3BVZxwsKsqyfgi3bXrMoAosGDRdc23KPsa6KsSxfcmaTUgKZPieyeB9cffeLZA4HW472qqJggYQsNE1nMHCGVqZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gP5BssWCcvndGW2RtwPoV2BBQvExgadCmBbRiBRp2J5ox5ZrQtRr4SZJT2Vs9y45USqKSkTzPEuT3jDNbzjQ42q",
  "key1": "LA1bxeCKF8rZMbsb9CgpQo5Ruz3bLRqtVWbgJHWAExtVC8srf1AP6W6XXBWHtjN8u66oi6zTSSmemDRqip8yeK6",
  "key2": "4ozuAzK52CRam3RX8N3Ns2R6YNXvFsWt8QrnSVEwZWek5UioieGouNpqNtLcf88jgvLqzWsNfbii8FpgUiKG738L",
  "key3": "4YHgT5NU6QxAKoQF2tigie6i27jz7JkqAT6aT4Uheha2ydUbrnYG5w7ShYABvuWPh6J2LAKKBvxdyX52aEoTk5fP",
  "key4": "4tQcJAb7zurfQwhYA9fffgL1aiZiUMEHHX4zREnnhGePK3onHRaabZgxGT45qhsgQmHFYqMhUrBdf63r6zzhs7UA",
  "key5": "5nibsUjYzu38T1QRH4jUjzax4zfEzLQQ7RXEr755JP8q4eaeA7mZhvfjgKSjVDmGP8aYHXLuUznpzLcGUnARpHMF",
  "key6": "5cBZUNWgBE6yo4K8GyTYP1FPdtxisoanePZgZ3KdYrC4vU8irCeoRerQaYpd8iQ6hYw4MnHusfx2wsY8dpPPSp2o",
  "key7": "5oz6HtoUjGMPUwQVJMpUUYZ11oAEi3h1Az9X4YQGw9uXYdxk4a3kC4Q6fYsNGv5x7RQd4w1eR8N6A1BcWKZRv9GR",
  "key8": "5AzEK97pzpgr1Djx44DZyWXjRfbti8NnMmBuyZo2GibcfqmDKmcUNthQ22Hm599iLSofxWfguJvmwjw9vQg4knYt",
  "key9": "2GagSEqi5A65wo3UFr5Ry8hXeLR6WUYLLhdioLdKKz4FHCJLbb9L6X74XuVRYDnBQ7UfbeCNY6ht4kW8VfEgD9xS",
  "key10": "4ZBshkp4b7tH8AbEKdxoJRrSju8oVTy7duGiQQznAyf7nJQZbhUQY6fxa8CpcPrewgUWD9ZtrHAro9tYcrE8kGai",
  "key11": "eCtscadw3xEzwmtQc2eRryUBtSeFSVpMiEtEZETmedVcJNk24pgGfeWU6EjhfU83NYcMwUGQ1zifZuKP7rbqUKD",
  "key12": "Pn1eboG7ALaxJ4FuN73GczLwp3BEqgVX6xptBYvY6BUBUi52hRkYfdyz1bAD29sjcsHWmfR6RZstFNHHxTbS7cy",
  "key13": "4X4qw2WgUoas7ebgq3cvNPhvqeSx1CfWfY9pPycVtVHmh7bqXxZwLQS3Gr5KiHLxPaTNe7X9SUuUB5TQjL791MCL",
  "key14": "3Jd1XApxGzTFA1J1x6j2dMaXq1YLb1PgR2rJwaXiSmoG3x214qYC9MpidyUzzqPTsqbidD35U19MGCP6xSnP1os4",
  "key15": "2tC9SdsuCYTBpka2EAP5Ta729E2UyfLKcGXBnMdP1SgntT49KTZRMKCagVuU9Rij4yS4RaxxZ4jVmN5wWaVFwBAp",
  "key16": "4FLWUeW7Z2BeMf1asdazv1671yjc9od3rV5fqJKNLMeBSHiLZZkzf5HzsNMAPzybqejbvQWUDfzNKRjARRST78QC",
  "key17": "3u2B3CjY13uWvWnqXz1ZsVHUVR9zo3ubuMXVaDrjqWpNoe99YYAQaHpe2ixaXyqqAXv55qNGfazHFumo6msaU88c",
  "key18": "8Gg8XKZ6TKBLeG63sB4igKc2YjGFvb64DzLG3sxL7ewDmFMup31DUm7dbXqXXYGY5pnC4CAUdyDkZGvAPPonDoP",
  "key19": "5Heq5b2tTPvkPrQnGq7CKHbZ1NGWk2vzUoF7ZrzRVu99c52MGeW2y7kxLWkvujkPxoAEkWwtJNPMFs66SNZEGDQ1",
  "key20": "2N5aAKLZDSdcSEBDDouYjJ5coVPN83TzRWrDMciEz8PyMdc12Jvs3PTWzcvFp5Cft1mtDFFrBv5hoxBAsjM2SJ7Y",
  "key21": "2SM8Y9YFp2Kp1Ydd3LkzJzJcicGbKGh5AMVGoskFkf26KVsEyP8Vs9G76tD3WA9Hnsu3sNRxrWYWdyxbn2FCpD2R",
  "key22": "5fvSQWrgci3keWPvy8wi8G8nKzBDdgkUXSZVuW6cNctD7VJj123WK7xFN4RnmegdssUWhPhwv36fUsggs9wg856S",
  "key23": "5Y6DwiEZbjv67eNdXMaaqN3hJdAEpD5wxdn7YBDxPg5BqSG1icF6HSepo76kWgDDLjA5xK6Bi9rFrpJNXbaZiBha",
  "key24": "5QyT1qjEcERjLGgNkv2khECAnDT6q2ZE3anuH8xu9fhZ1GHhEyJTQiC5LGV4b3vjJ98M1et5hVHahryaVpcxbyZ2",
  "key25": "9nHA7gjt1KahUEvzD7chbRfgCYyf2UXdpZX93TtFR8gB3eRJmN7fbcUD252ngCFZSKDNdzrUwq99ATFgTra1PWA",
  "key26": "3GieDUFdE8s3n37SXBWGPQoLgoTZ2EZutNcVYSaNwVkbWtoiV23WcgTzHxKwjNtDJRViacxDFVeW5D38AHn3WE6u",
  "key27": "4RUSrBZMJLrd7DYPXuCPfDMdomWUExFKU5FJ4qzPKgusas6k3k5zVm8LUz26zbvuWVAdMiuLkDXQZNXQV4FXeUxW",
  "key28": "44EmmUh4mwuNAom9sN3N6PGcmUnahBJSVpbtNWFu18a85V4YTJRS8PXfWJ5XuGkWPr6RdWY7LXxLiFXywamafcTu"
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
