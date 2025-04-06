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
    "2PDQ6njPsSQdFzP2qFjhrh3KcX5s6tKzZ9yZU3BhMcZHdnL4PfYo4i6spej1BRwr9VeheGfwKCARToWQ2LYnPN6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AmRvYKaC45HqndwpsbnYEEUDChtAe7YSNmZSHi4AexWJgsZ5HNuoemachqgutjzoZPFYnMPVcc8DRySkpBysqNv",
  "key1": "5jPKcjWtkc8iatWE6mn662Aoys2nGRMVZbj3mZTVceWjNwB17w9iDHer4UH4Nb5mt3J5v52n8gzwVDX25uPvaaLj",
  "key2": "5C3WbGuFamLzrmVyyZFzii4dL7cNSuLHLe9bg24aEkyFPdv1VPe4U37q6zyCatTR4AtJqL5UbAYafoEbkFds2Ubb",
  "key3": "58hvfNdwcbTqRf2J4FEhTyYGrbi1qwkj36DpbhLnBqCTq1mFtrpEtqUcZF6JaVcaAYYUWhCqcQro6tvzGcqeJNrZ",
  "key4": "4TeqhKpDabUCfguUAiVTeVo6D2ybqMRA95daN5977KgakhMxdbZRrcfEM76VXdk4dHBoJ4891R2AhXJsvU2pmtxS",
  "key5": "3P5pJMpfYeM9nPVRfwHu9wZ7vFUv4gZ5MPe2EUCWqmGn8YMxTENR1To2zBUU7UvNWPXPS8MYxjeCtVuXTT3pyZZR",
  "key6": "4FJKjqm4YYZVGa9rRurtMeH3bWLJPcvcpepHJf1X8KDjAscqB4KVDhmnRyTjze4VyNXaypnPQj1iooZcGJP29NCL",
  "key7": "2MjpY7TSGkczzLAxofntBwHKz2ypUs5E8rdr4C8M4AewF15retK41yzNZuCAuYvLcdFdCGnyJBsAgL2P45kMQSdo",
  "key8": "4ff2qeXNvXCjwn4fXs4muZakvnPP11e7QCnbf42FzK3DvBWZeCvdc6nV1wPNhNDmJ8nfKCU5yHaABvW1m2g7H9H5",
  "key9": "3R1S9bwDvKx3fgJL6NzGrNDHTEpCYF9L77pvaBKEK9KjZMD5uDToqzZK8rMe8RK7zS7vE5e5A1MG62Bts5xjGn2j",
  "key10": "2nDSjZ6iYi8SLhb7UBezppdMfiWnnBtsRHWLLoVz6CFAEUDuKWdkB58YFimeteRq79tG265PTmrZMNNsLqcX95p7",
  "key11": "5fronUwKXFDZGXgnnbQmZnX9qapqGnZviyc4kV6NEsJPURTQQrEHCfpZRVHoLVinT6JUfq2ytrKKJg5AkDNcf74h",
  "key12": "3Se53Gtht9FwYVLhcoLczTm4DXNvHadLtYsdczaYBSS2NZBPZG7RD3PByShf98UfiDYGKg46r4c8wFjhSrhAszsz",
  "key13": "2kCp35ZmTCixGGbhocT512ufRnpKj78GZwWeEnxyotd7FJfkN5RDzSQqh4pyk5zHnqWz2XzNuZRNSdXkZ9t5166L",
  "key14": "5NnXjG3y8R4m2Hkbh5LL43Z9WJ32F8emSBpsjhLX8jRxAB9fa65Ukow7rZsa3Ga5sreodSKUGhCZ98SsrfoxoGsG",
  "key15": "52Q28xZSqoVEhSddx9Wo3b8bsWdLRJT82jS1GZqonG5aNyXS3dv9cVE6hCUeUeNmfrZCrpHncz7Ue3HXuPCZCuh7",
  "key16": "44UGLoo5ipzD2G9L6Grnu2z1KjsG6fKJeyT6DpmVLfq7mLbpyEz7rm1BboVhx4VH8M2U3Hn8u3XQX1jGCWqY4pG9",
  "key17": "3BLDz7ZRuBtiAUZpefVnxBFor1bGg82gmdTRyoczmQK7XLThBSEPEgrdqL7TNUF3si5VJdNnVy3dQPbAenzVT3sY",
  "key18": "2es3HNyPMu38ewgrx2HVw8CcZhgok6gDVAXUsvtttMEcKoegx2i4FdquuwtdSumynmK1QUVzZV9Geed3h2wChJMa",
  "key19": "UDZFdU6GisW6AuPHtP4mvd8Ww363VKpiZHSNrufyqfyVEZaFmwLMg4NnoFrioNFurJHSVAtDJaQzcjaTU451anM",
  "key20": "2DVRQa4HDfbignfwww2KQamg4v4sLRaXHBiXeZiQjhiUv89p9kbAktfgmojqiAiY2Ga9FoBNf8Bw5jeELgxQwhb6",
  "key21": "5V4J29uaNje116psGHjzTqSWiYTxdQFxDnhodW2yHX8ZCNDAUUnLvDKcjx9nBVEbbkP3TtuMqcaTRiiuk2DKPPaN",
  "key22": "5av6YoHgvQx5LCuYmmNWCVV76N4TcWWYCKia8KuGWxQHLnq5WftSfJnDvQ6uQGczmEVm1JnFWrbhBABh97y7xno8",
  "key23": "2daQ93CGm1hiiHYTN9TudQJPjNr3RFkYGVfS1AjfdZnkQPujco5drChH6WoeVRr99amFtZYYazZLHjNKvrQJ2KUX",
  "key24": "6MVZmNWY6dFGhWUTpRcc16htUwPeg95Yz4NYrq2r8zP2Lrqt1CZTwusAeHgV6EwqTzgXPR5BgruJ3axZdkCoy2v",
  "key25": "2xUUTx8QGVPPgKZnHUyxdwnMXXpbTSR5Fi4wP96BMU8btMfbzdpg9Vb45kjaoe7NpSLGyQq36ejwHuVxCPHohkXj",
  "key26": "3yptCw7JG63JrP55BoogiHaQNk4dnQYPZ661BY1bPoqtfKvW9t2YipGTFmCtcHVw6dLBQU3tj49gnGP75bf3Vjxk",
  "key27": "3MCBkrqqsJvV7sEzuapRzGRyiJk8pHM2aUQW7xTDTpE4vFMJxCxAmz8PSwLu8scimAADS6eh6DhzckbZpCcVXsJt",
  "key28": "4YGMHZmbhpFLEpLn4gR21KmRLJep5uyRZnzSAMaxCMNAC1nQjy2Tc27zyoL6vEkM3WmuAzFHCNDN8ooSMietfd18",
  "key29": "2XbnqAFTWvnyw1RWMLqBtAVwEzDooZSNf5bzqXG4CqGUHvHr1JC3KmA3YSkPoViH8ALu8d8xQp23BnWou5A2yjZM",
  "key30": "3LyWXs1UuYAU4VsX95vx4GpFn5x3DTs2t9MPUqUwfruqJVTuqd49cSXpWsE34bJDFoLD8ne1tyMf3tT9M3iKNC87",
  "key31": "287mfGb576d8UPptRquJ5bJYyLYNd91iNxR2KJwFzKG5Wcbq578VVaQNJ9LBswmc4HQkaKHu8gXxdGjhenfg1pDz",
  "key32": "G2VwtbdnkjcHjR4J9FVYsFz1J2DUAbfBENqS8jgPbbQ6ZkmnKJ8yQ5SHZDQLQYe4gPSw5Dm9ZDGuVepbnv1Yyxs",
  "key33": "37Cam2HTrZVekufWqLpkHHNNGfnBrmiDMCECwUzWfC9vj2GLTKYBf36EmWzpF2LtU2F9r23jKghqbihLwEesqrAx",
  "key34": "5keNLWdE8epyYJGt6kJzPwxdcC2v2AAX9NaN4tUXxxPJVnFL3YchwacP3uwq5f4JBnLsJyVWYE3oLjrtuT7jjgxZ",
  "key35": "3r2t1kURGX4qqPgjBJEymsxSqZ8Vf9qMKmGZstNeLWLzwSn8jXAV63jfmC253QJpULEEgekEgAVLmYpDQK5pfgKm",
  "key36": "rwCgYMUMhrx8gbBWE6ZLByCGLqZpE2NU8rdF8RqfocvKPQ5eGTsyhPAyYFSZnKskuUxmc4F5kzuoWn2YTBYho3N",
  "key37": "4DyjvNVmxx94JL7e19avuXcjY1nL2Lv6D6HGBqPJdEY15zv1BpFa2sAybr5QAFzEW44wdkFnJmqS2TyxzZ2BRm6E"
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
