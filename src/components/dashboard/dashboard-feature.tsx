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
    "jhQ1bNaFXRN5kASAvjhvuKD6iejWzFgtQkWdRWLJhUMBzScVmbkg6LzLXMR7fCpFtNPNqQK49U5EjZKSdrFYXgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f5qL5tQADX4M5WTU38fyknE9yJLYqamnfQpY4djWeYhJ3qqHLNCQqS4M7ZRLWsjZZHzAX3Mfo3kbiUPDGjireNE",
  "key1": "4h44tU8HPVz31sUr5Z4GgEw9yLooiuX637YZ4UKkLDJNV2QAC1sGnAbK5ftnUVV63gxs9e3yUg6Hi3EmNTgqHaqA",
  "key2": "d2nnf8nWpriCChDicEZqoJxrPEUFNDjDEjBaTT6Z93BZtsep67iBCHR47eJHZspwVvdk77hR8TSHJoUWhj2G5La",
  "key3": "2ZrbakXdEPJNoYDSfjVnMpnthU3Tv4kxJCdgTxUVftPKEsFsbpvMRz72sFjMRf2MPhv6eQgV3ViXyj5P8bBjggyi",
  "key4": "3eFPNSuA12wNAMwqc2cNMi989e4rFRo3aeKWGWm64Lv2pkaVfmYqKdnFQc8DiYSvpEQxJHdjz1MfiPVCPWbkYC4R",
  "key5": "ichowocK2ji3biuyw7ojmJPPLHLesXmMUf6N8SkZaycFcXf5kUQvYc61o42Uodw477NudNTQcJ6ATjMZ5SkNAKZ",
  "key6": "3yQC6QgtkeBbsZmcLZzfodyx3He5xu1kDKDycnU8yVTkHYFUnPoyL8xJpHGXdGWZeuXWaoFKF5oozdo96z7ThvEa",
  "key7": "44wTGd45oG8QrrMdgR5TErvHBErXbMXd1LubaEyDTPha5uKc52TBpmbzdUrrkXs3r9xGkjfrbd9rJe85Ykpjbgr1",
  "key8": "3jjndVi9rr3mMTMF3t76LMKcoWPuRGcWehQ1uheCuLdbKd3FC3wor4AEj9F32Q3XJdp8ATaNSPTf3sfFytrWHYQC",
  "key9": "4eA599reqguvwGBqrABcb3n4HjFDQNXAUNfdv2KYYwUmgPiGB9LPT8EPeqSQSZPLdXC1232n3cKTXFgJ61faDesf",
  "key10": "2t3aXfwHU7aAmBPmuUFTUUbxvPN7Le78oXy6kBF4Cymqf75ff4GgyuBJ3o16qYPFyRDffqDoSx6WNX8CcKCv5EuT",
  "key11": "2QQd9uZNBZ2McjfXrrkbYxj6EQKxw8cNsNriTzfgZ7gXhckfWp8z31WscA13KyFaNVCCUCGXj6wE7bpVQpdDdBzW",
  "key12": "5twb4LHT6aZcrmQNyZzwscKZu5ewMaauJBzJDNgqXCceiMkQBr5P4mcAB2F6YFWTN9g6iFN3eyK6LiJKxLqeNnmG",
  "key13": "5QMSaNQ4mSk3vKmkSmUw4AJjU3pxobgGZYjjWMB3zBYhg31n1XJQwxTixwjoPKY2BTbyALeUcZxUVrsg7nvaCbnG",
  "key14": "5RrevS9K8GP7YSWvogQgFCWgik6EK76XuHkeufhTVsPxAqcFGAzseFqtL8CESN6PKpnmv9DUU993CHw5WppyGVQA",
  "key15": "5pNnrXZUvy66ActyjoCrJ72GP5zoxMLBzSRgsDPmWHCQbFW8rS5NFHhKxGVnQoBFFL1C3JYj3Ai5618Am1nFoPYr",
  "key16": "2Qv94SMFtJ6YywvN7fUjBmW3cLrjiNQCMHdf8WkR6UjozM8cj2acHQD21HuD5kHDLTWzcW2oem8xk5YfsKNpTCjN",
  "key17": "2aTgspUAt5Rb7psYkURDXbjHmTbRSnwVrfCn9XoYY63tooYFfcsSYbssHpyyQtp1bvis5coTMmzuaaxueWDcZHWj",
  "key18": "2xkxJPUNcodAJGVTsXRUkibK5wWDZm225HS7Z2ugesLyDvW9iDjE4xiCZN9vAYiK6b6hw6Lngo1W2q3bGNU8rNz3",
  "key19": "2ni5CSusAP7jx9itBErbaUCj6ttqgKDXU3Hf2s3DS9i1hK8nFd5jt9kgS9HXNjhdJk9oaVQmpMnCpqFbenT4X3ML",
  "key20": "4ijHkGYKzbcht23RJKhSTnBeszwMzJypGBSrUMv4TUaNzF2bg1VZqtMQWJP8PXcNqhBP2pizxZF3rNGZB54JmvA9",
  "key21": "2fjG5cE9PZgQXiC7GDewoVijA3WPpofnt8S788RUWDKSThm6UoP6dThSUE7vxXKLb1HuZkeUPCPRX6wtwodoG7dS",
  "key22": "3mZ3ZDvE1YF86yKa6ZykLr1EvGzRyhKSE1zJMvHUsDjF3uNXBmPiRM5xkfX8nF4ursGXMvHur7cZmfiX95L1vPV8",
  "key23": "Uvt3zDppk7AhQfGsgDz1LT2UwGp34EHUkPCMVZoH5tJo67Xc22UJVfJTomSJ9QUj4vU1GASNffQ2wayk8TkMGan",
  "key24": "42VFfsFq8cyxD2NF6T8LC3MytwaotuxPT1cZ6dJrJMAk7VkJsxcvdbKhMMahEPhvgkZANbrDVGikYDea9xWfhN5D",
  "key25": "3cXWx1JpVLkVxGCpkDx7SSdhMf82MRnrEwh4utudsTGjF134ZmAJEHBBAxQHRqVWn1mAD9pfdg3sFT3qe7cUaMLc",
  "key26": "4azNypxKxEi9o4wkUQuY8c19AXarzFErLpNPXt5LVJrXhpbxx8J79QHUuec6tSPNr9T2iM2Ae5yLebtFp4oXesmh",
  "key27": "8bCDcMNq6qDHVSPUHfUTXGK6ehiy9jymT34tfaZJkMjKgyoTFNkBJY7D7dBLWhiEGN7phyMsiWSLACrG6znMyyH",
  "key28": "2AkhuAYK5G6ftYgmHyAxyX6AXpQZ1PAWWa7CkfTautZi2ZJuHZZHZ68Kpjixt9ZurTi8qvDBWY1dWLPi2K7bDZQn",
  "key29": "5g8AENgt9FLYBSDD1B2WsR1FnXqvhZkc1qFTUWqL1jP5keMiDdNcP9ed4qcejwr3HGMVZxCridcfxhE4wvwkSMbb",
  "key30": "3PznNCumHjLUB611cwFSdedMJDKnSkQgwEURb4kAE9PvwsHfJyvwGic9xPEwZ1y4NfMMeMufTyUysPkkte95bJUT",
  "key31": "s35gmqhU79qgcBPYBz7NUj9Jf6iiExr5aKLvS7BpnhYNUg9CuEPXFm1Ca14EtF9ntV2xyxHVQBZxmMZSPk87174",
  "key32": "2pxgurigwYexX5kxWSwAgiwW4mVEZHfWf7jNMoXHZXJNNddoquTC56FX68RHrLbfZygUhftDDYFciU6v2VaahoAi",
  "key33": "4GR2TqccPn9dZRjLJ48sQxj8oHyH6aP8kbQdZHriYr6ikzEeyNYgSAKTJNxbuyHrwFAvtivomk3oER7SCuCXMVsj",
  "key34": "3Y8ALTareJ4Q3jEFY7rpZ3cgk2stMeAYipnzTcuQKE4yZpjZ2AbYfKsG5rwxNhX1P1TZBCx9FqYJUgkWuECDa3oJ",
  "key35": "5h7HH5tX5hCWYj4SXQy9ypi3TSauNjGWTVJVZMjYEZ436EPx2hE2KmsMr5uHRdiLKSNA7cocNZG3xyXvDSRpjsXs",
  "key36": "2urzCrXj7cNY52UpDhXxSFHLbVnHfePrbyWooHvC4uoPWvp75ikiKZhJ7pbaLrc5cNx744SozK83DHcNKspgAFfF",
  "key37": "5SJKV7PfQPL5CvoTGh3iNgffB4BsePfYBFYbtBVJ6fuJb9UnHcELAmtDPcNoe7mwCXHVCikfcCwYBYccHhRCmqEf",
  "key38": "4evWmzLviW17mVu6irCFHnQN6cu2LyxtbZKwsSciVtF5WaxFJPKwN2dgLEF74uieywbXr7pMm4WUju28FZkCbkAT",
  "key39": "4txq9CGJskJMuMZ6Hx3f94m5eoLzK8xasj3wJd7hCqD7HWsfB6qEe6sESEUXhxpaWPisN97qw5wwrZVwpuy5B6cw",
  "key40": "b1w4pDV34aLmZmjDiHcXq1te3RFBz2vwMigH7DNtUJxSVnKeHojSUuqzF2EnCtp8cNitP7eam3oprbXGVyjwe8V",
  "key41": "4ssRnh9db2Qg7eh1pLVcAK6uHuR6i1Ezp3GhBVtWTbxfix8kb3AEjCuDeLUV8UaSqyvcxWKsqpSNFtN6BGbRuavd",
  "key42": "4cR2YuATJsfuSyNvUAUnEHfq1Cid6pDy3uqMGhqCqP74Z5fkHLWipbwxHvqdkpZ5a9wUehUjQNjjR2ZdkyyFd14M"
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
