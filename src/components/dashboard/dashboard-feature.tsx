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
    "54xSPiRwisjrh8j6i4aVFaG7JHejZg2pGeeAti3zJMReHd7f3wvLhSaCnXzVNyFx1PYVciuCyWJUeQoL1Fzoa6EV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZdeyqLvkZuBrLHS2Jt7pxtjnEoofXJtttnrBJ5xdTz75VoPKxHtTEY3Y2iNifcfsRVL77Dq1cnwr4cRdW1LXRWn",
  "key1": "3MyQW33T4rNXDV82sLHgVPBPgwg7L2Bf8JrV7YkUaLMRQiH8FNVme4QzR4Y1Ewvvt4CGmy8RaT42Jaeoa1KtijBE",
  "key2": "42sZ64QjJFcLzTDXpxzveUNhvVnCy2M3YoEL5crgV9vUjohNwSpNQciREiBtPHFdbggHKgGw68HBZxaMCrsoMqSy",
  "key3": "4YPGD1maeb6vrrp44zNMhBGjbNRkh8BBDjYvZGfLDoyWqk6XetFr6hfBUWbQ3wVmhN45Jget7sUnSTRPKKKx41dD",
  "key4": "ta81Jvr3SnuezUYd4mmJooLoRJBAUUiFEkar54CWfkpAMcrpvgyqskM2U7ePrCe3XQa2cdpBbtucNnDctcsuSXQ",
  "key5": "5yDVcz5hnL1uP3twwYXcSuxchrxsho1LkH5piv2t4eQAbkSFUtckXf949hje2ax1johqTPfqm9BeXC9NUVDxmbeP",
  "key6": "3wtAu9cAUSUQtRF5gQffdDwKV77Y1ZgPqnr2NpyGKbmtw742ys6noJnNvqUwxMVgNn7jSvgzJRKyper7kgBcG5JC",
  "key7": "3XWwjWoNh3VWULzR4yDxY98gNMnwfC9EwLiHQ9EWYmoTncZd5bjSCJG6k82darLCC9nePu21keAZzzEnSQM39Rwr",
  "key8": "3jG7tRayq3Utv1GejLMAUz8CfEurq2hw2VdxMfhR6vPVw8AjJibFgnv3YZhUJkzY9fLQrYiRYxnEuEbWL8BWdVSc",
  "key9": "3GHJVV6DchW7WSzrK3Wrv8ax7fzXP9jzvukp6XxUf44YzkYJxokA7zdAtJPPYxtFCuPLwc7CcgHP1Sez8d19m1dC",
  "key10": "48EMUmwX1EmKRBNTbximH7XqPTLoJRNtbkKjMHqFFCVM23pDmsDnEnVxXEeZQ4iBwbrgXZEtbZpENQFmL9GMdowj",
  "key11": "33MsWhzoJUAmqsAN3CZsR8p2zgWftfnomkqE6mEoFWWqBET61hfSSQYkfoyMrqaUzNHynrHUQUvbmHwEd4kHwshz",
  "key12": "3nV4UcLqArpsN8NLXCVLmmPMdxqaFxQh1rBjkNUo6X6TKaog4nQdNdbPcsxvz2HndstCgQLVrQmvV8mShowfiT41",
  "key13": "5KghGFwqfwxrm4hATpAqKPRzyP5Qh52Kfukzg48gNQnBGHVJYmTvATiqR8CEDgryv7xW6FA7dekcKHFV6c8CSaQc",
  "key14": "qdfNT7vBgT2CPH14VMRsqoDLJzi4BEpy5HzAQExWRfVuMo6jrjosk7HYDtd5vCaXVEPzMSuaiRXF7T1idLcj8DP",
  "key15": "3HkAqjbvD5672jEcz2oUiAKukanyAX2HSYNnnxyNWPdFwKV99EiE5hqUoXnTLpakhtPZQ8zm5Hv2fLfbXZdAHahp",
  "key16": "2r6BBJHWsRrVSyUj418VWPQsoGgvW845BQxmhjKJRwURA8xUdPfYSYKxGB2hSpTpXRiCfETGT5jvyJz9XP3WX8iq",
  "key17": "FEhjw1Uk15M3KtynMYk1jWmiFYhwhGj62KmDj4tin8PHB2CpNxTY9mKKKJdY18qhJNpwAdmXKREmCWsGCt3b3FS",
  "key18": "9vMPmmKnfkGnGL1nZujuUwBBJ2xbasLfECaxbemhC3pLE4wcRWvMqQPUQ9zSEPj2KL323r6VuVtLVDVYYrgyDvW",
  "key19": "81HTtjqFQWkgW9zkcSFFwfcKze7NktzpgHAm7VXMSc1PctnC5BLHqBf2cLiXSABiGAs4UnBgwRjqsYPjxCbgPe1",
  "key20": "28sSSakEUFtir29WStUN6nDBE8ThyehLnCUUvJiiJDgJNRMom2CvdMJRreCPXNejanYMboyAbwtYb73DzWj3yh3U",
  "key21": "44Kdn25sARLjGJ9tmGgNvuZ2x9fxAYVfgY5oFZ6G91ndHPFNEGbCThVezXvKjaFMUTczycCysWypZB2iwkFJqpGi",
  "key22": "4JYLcoLHg8Ri1ZtGWBk3bMXjPVM1XE7GUNZyAevNDb59YcmLadQ1prKrhAGMYPr3PjKnFYrJyMqjuANM7K633Btp",
  "key23": "3713NxT8rpRyuHxYtgPMjMRYbB7iidCRv9nHUgs5aDw2KmLFRJy7o2JAMMWKTtQyyRt795S39d6HbjuYUDSKKcnx",
  "key24": "cyAR76LuQum9fwSWqZCHzeK9urwM1E5uNWpKAxv9b8ichKaEjYrNvmYpoeY6qS7YQqGA9qToazmwa9a7YxdUqwY",
  "key25": "2uzH9LLDqM6z14VZsYGa5eKxtMWob5dT43SjMWCdGvKhbEMpYWU9eCTQnrfbGa1MU7eZ5DFiniEdu96ctEWxQDfg",
  "key26": "i1Ab6RAtwrFFftsgin3x1Gpk2eG9quSKx5ahWkta1aXc8aCG9MeopEaw3GozZ3xYXUpi69V4NDEGCNaJRb4YefG",
  "key27": "gMHCUf9iKduGuyJgRAFxcmxyk1zJBqCAzFsEgmRz3sMBCxZHy8ruoc9qV8CNCsMoB9CxSm7sdYd68TUuuDPEhFc",
  "key28": "35LRebyjj3GrDVeE9LL5EYM8vcToHKfT1dR2X4Km2WXT2rKgJqo3nqUFECagA8rC6FkyfPCPhXqRzZRsmafgcqri",
  "key29": "4FPKzjtu13S1kBne51mztjjuB9QWWHpQnutUNGBSLK6dNEHKrDjeWK5GBuDu1TACna7wrs2VFtwZSn9fXiabqzzZ",
  "key30": "2okk6iBMuDzxcbqoZXKPeexwAbayMAbWmbjTGdochk9UXhunsi2JwRAyc2PfNygK3rxZuJ5yziRRBPQxqqn2pKao",
  "key31": "4h9QpbAZtczNEtBrPWtas8XaE1q3hZfWcxECqUVgzVjibGuwb7NcvaFMW2gMixZAEbsvwQuRuhqSS9fZXJVZS442",
  "key32": "4j6vFMUFoceZPhdu4WrrhvNGcPCAZSQQQZXN6MzbLHUu6AXpQaRs6tA58FR3EBi9oFn9GtNxCtupBh76Qj9nsRU",
  "key33": "29myKTEFF7XKiAKeJCHbLH7mWgo4vix72x28FKGx35yrT6F5tHRaSaENUFk8KNGgqh3YArGrCX3rPWdFwwnRmBTW",
  "key34": "53gR8QjSZ5ycdJaWiRZSAn1fmfnzbTdycBo3Gc9vQc59RSC989GwutmmAnYy9sB363cHk6D7UhDxz1RfaSqDYDgJ",
  "key35": "4JdLRusn5RughtfrAEdAvb22xBC8atzydP3puwH2SAZQ38E5SNeshepHe3QWaLdSCyBHr66xND94svHMWsGqZeTg",
  "key36": "537X24rKf3yjjxMEvcJHAp4fC3fGjaVTTJWQs8NrDZ4tPaZjWoa5HKWjrUkNsaE4qyBdrzasubXqJWNapZpd3xjc",
  "key37": "vfJhe5wrLPK6egrKT6wEJYJ7w782LuHRwwCYPBGKJQqwLZBywVQW6RL4o59TioNg219W9V2c8pdZhiHj4cDkAK1",
  "key38": "3yaHfgtCckcnB2CfTa8NpGCBtzXKFRymjwhZV2N9pLEs4pZbMbin5KCnHfT9oqi4VToboqA7E1G1nk4u2RU8Ydzt",
  "key39": "2kLWuY1hURqtAudJhaNJhCRJv7QaBFvNYBX4WBKm3LeQP5WbZqiGiDGXm9AD5pjCaU9XcYwWsEnSRKebvv7utEL4",
  "key40": "2q5jZkeu8PP9wH5JdCDxjzFrCUnFZHSvvswTMBD8FkdqmPjmzuhD7oRbYgtRBKTqEN2coDtTjQ2VXxwmjUSJJavB",
  "key41": "5bmGLxHidCU5FDmsQc4zXWBpr3mCNnMDkUf7JVaDUh8SmhCatonZvYfCtEbxF4AfURHqLTjZj1V2cU1aDzxoMMtF",
  "key42": "2FiYTkk5ap4F6Ab2WWabQbNsufSZXW7MvYgtVzpF4FGRg1qQ2pvyCscAnU9Aw3GjPpsdJXAd5SrZ7nSr4KEnCSvJ"
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
