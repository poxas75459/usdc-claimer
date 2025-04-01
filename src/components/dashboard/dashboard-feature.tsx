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
    "26CB6ynCuau5ZTfBm2hFFN1KHmwFaV6yD3sYaRVGoBNo1gZJNMWLAVKRukb69PRKADPVbBGgKe3ZEVCWK98L9pNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uy8rwJcnmzaccWchSudygaWJcMCgLmFQSz8197Ca3gy67Ds77fHrrqqAgeNPWVkkaEtVh7VrPBx7QcxN66TJsbz",
  "key1": "5VSw8CweQnNVensQJthdXKHC1gLTSeUubUaPB5z8qwXoftbXuDTwbLk7i5pWh7iqKBAVJb85cXqmwXY5yyJVT2kS",
  "key2": "2gW77XUtAFrAXP7Q4NrZioZvu9xTAq7kFHhDX4QmmnqShZYEYkhCgN4yDwc9A56XZpKUoE2gzbwvkveJMGri2LeJ",
  "key3": "2hjdBLbCRPyiWMSg5iCgbo3cg2Hvpht7yfKQjcJpGXBQU12EH4wb9ZzoQPDnL6LdD5vkPERomX9zDcDx79PtW2uM",
  "key4": "4HNSntPgJWdb6VTczmDJyU3T1Hi8Hr7GfduSzXQ5dgPDYodWmgRyMx4NJDv5iLJXZt9ySsMMkorkFgoY74DT38vk",
  "key5": "3MFU9mZKo23FswFkHvoFiZVYUSUJ36AWDGwSrASqNELTGEfVtUhhvTcnwx2Zvr6YrLmZuisi5bv8RD4UjXGmy5zZ",
  "key6": "3vJE2NxPe5SnKD3VWyrKUhs9tqZtSWnJxJfhVAzgica73MiGD5CV8pFBoFM2biQfBsKNreDLvEYHE6wrpHn8JuSN",
  "key7": "4RM1SJLbG1wmt3CAjK1zi5qK7MZc8XKMQbAW8XzeETofpjnSncGzhynSeUHhUKjBaKdVD78YmZHh65D3zGpbRgWM",
  "key8": "tCbSGXMY8rGzAU3w6ECfuCjdSwGAZu2HhvdxsdUmt49VdEGy69hM148DERnHNqj1k5zWGEBmDNGwdQjeacv2FeM",
  "key9": "3ztNUz7K2fU6eJL5z5qVJbF9DKxayAaETjnytAJbkYB5GRggzYgwFi1ehuzoJ9aQ4CvVjLYAJgFKcaptsYZLwvDu",
  "key10": "254m8QHL1LG5C9L2AmDVyFGLrfZC4aNp3LbM92kuLy6N7ZpTiCannsj31Esb6L5Hrovwz8VZqn3PrRryd48PVayp",
  "key11": "4EVQUwC7MkavmZtvQyga6R7em14JH5vCRq3QthqcnxyaP7fJJiQYqeGTXtTNdjAKZR17SRZYcYovrGJMKPKXUZdu",
  "key12": "4UafqFSA3mWy1XU8N25JtYhrr8f3K4iatUFtmxPZuNbc3cTSB3CvtaRMjbxn3X4afTi4U6rF7ZxEAmuaHTXQntkg",
  "key13": "NrMYnsZYCXGjhTFR6qK25bEMYLVDfanaze6JEwkM7SsipRPgbv6ex33DuVgv8127KCt33pL2MjvB3RhHWBNdZXB",
  "key14": "3rxHY2qkLhnd1bfsKnjLHCfNaQtEcNBazQNSgcP1EqthQLMzogZFHHaYyYf6EnaQS3CpApxScqWKVK3Nc33YRcQ1",
  "key15": "5H2kS8ANAmKPLevEdBMmhe7Sw4ExNQXJDYsuD7uwHzWQNqD1xxxEC8tPjQyEN9rKKwe9kSNmFCSt8MNsxu6wVxht",
  "key16": "4uN9VxsZGNBYT3ToRGFZkc9V5mBF4jDZFkW87CmWE1wU8eNJRyqeMiaqCtt3XmkuYJtDQZRWQCA2EeNcBAHgicdF",
  "key17": "2XEaWp6FVoHwHhz1keg8a49vywvJbTds5Jhq6Cde6Qy4zV4KDDjGGfXhKzmTSdVTXWzv9i7qjUb61qJYwenJehR6",
  "key18": "5KLC9XUkESBEoKRzexo6xWvdgpcUSmo4y868pumTEpazWjNazJNhmJJFUCVZyLfbWhNfxMBDRyZsRWwCYDggTW1H",
  "key19": "4uzZqgLxL8aanmmVuqoKf57KM6JMCaWUE8dVeXfsWLDVvM1DJdttFGLnHsRjd79fQCfwzVPLPMjBGyN1v1Vcqhpn",
  "key20": "3SwbfbsqPs8VPytDcr9PZxiJwyykti1VTsngivDHgreMfWcdsmQT297uyQ1aSuy4nMs78GnJJD3EaBQiWh4TpMJ9",
  "key21": "2uBCsGuFxEmaH59ofnQxD5WApxuwPYAry2HFQNsqtgXY35E9RLWoZ2jmAnp5ATuB5wSLyn5M1BbVcnZCFju28jaK",
  "key22": "41mLfMwYBPJPJVyxcCmqvxhePxuyBGH5gDeCifX1tsiPz572SaTqRzkaKusUTgCGN7tn2TKg2TMmZz9MFkfQBBTy",
  "key23": "2zdLkDu6sKetJjFZ2fPBmU1rj4reLe3RqvBhP7RC1U7SBeTudWUpAVffyGc99gKfStp59Qq88iTatECjzsDqhU5f",
  "key24": "2yrp8HVJeszHkJhNma9o741mgABzeP9DdFWowYJtDQotmvKPU9MwcBc6yceQ8ndoswZqbaQybesSzHXFXi8Ytdrr",
  "key25": "21EhUzMjpM335jpptJKZpEWE2Ya7ED3pAmVQ422HpMWnZpPeHWxz1y5yEN8mX8FJCGobbANf1Pymh8t3BPSTLZo5",
  "key26": "so6atrAzWGPnLWDfFCnJJ97Wn9SieeYkNbijkfbjcW2HRfBvvWwniYsFFMMTKa4yA57PpUSMmc4zGVBEnE8nW9p",
  "key27": "62ELwi24wVdcregYEaSP63FnmAbNKds1XaztygGiytS1rtiCrxT6fcpesgdPiiC84U2RG6ofomxjcvE8LJXCT7mq",
  "key28": "3rPUKPhNDCwfd4KNpqmZdnwrM63sA7WtTgNTMe4XE69oLcmMCf9JWe8dGWiWp7rM5oEiv731u4c7TNuLQUsfq7pV",
  "key29": "3fR2y5L2frqHByqcz1NR7MzU6UZ4M8k9VWuhYrmhMxhbv8VW7xNYxqHdCV168KxVcD42qsA2C7y4Ack7ZGsabzGz",
  "key30": "4dUKafZSRcvoyYipL2NenNaqXKFyT8M63KEET9Q1bcfGRH3UoC7NH8TQrhavtziasgz2Q8qNjYUqj7tVh3Wevahf",
  "key31": "2aDhSddUeKmrcNKx8VjweFeuZgcoz9NxWq1hXbbW5xrdS14oKhqUvz6snQ2pVK8VhMjjm4w5LzadpNy6hkPQMjrZ",
  "key32": "4MBejffzzGxnZRSzSGaZAf2LnS8ZnEJ4wqmgyD4jqqmU6JKnfe1kA1iEnkYBjBrmzUrEAdsAzu646vSbGytsF8t3",
  "key33": "3aZPWLiqHb3iaobe1siDXxzdvyYJfsSjd7aB6aXnCvrHUdhK8wPqJNSBTJFgPMT8ZbUZ87KzaNx7etRvCFUj8Tag",
  "key34": "mr41jgGz6c9VC77DF7s6q9SQeiAEBTQmiwkYefRTCPy6Qx8azSsa8HEYtr8GYo9nbUPp7NtffzWWNwhrTo4egeh"
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
