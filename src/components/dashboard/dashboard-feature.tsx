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
    "2BiSS52WQpSHzKJm3cJC7VYGgvgpfyvF7u2dW2pN3N1RzhkUox7TiizMP5bZ6vez1oPWGxd1JcZtTv8w2pVKUmTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DGRVDopnv134ghfAfBGV7e1Dj9yc3prC3Hvb35Nz4bTrrBK5BGGZbqPAHZkx9JdHd8Yx8CMzu8sZV8acGhdGzX2",
  "key1": "T7ZGECnFhqFSwbyHf9urnxBAzZnLFEADZo5ny8YNcwbwWc8N6S6rapxPqCjNALDCLWG5xZ7AiGuaij2QyMULjdj",
  "key2": "dFkrX2XCuGCehNDXE8hYnz8hMvcPXb1HoZuDTGSAN6LRC5EYxjwv9VNJwfWWqkF1ZATDMqypai9RYnRL5yeQdBV",
  "key3": "4hDdGw3bV6LmQVydGuuzHk5q5B8CfBT54r28HskFJvuSnGAbZpEthUeBBgCkDrF9ZERpBkKCHGtz93Sf31RMYFBF",
  "key4": "4Do1Y3vxZUwxfUgeP64XQGsMJAH8JLBmBmqHu6rDnVXHXD7Y6oqGPJswVecchBm3bWVvqJ2CyDbQHZWyZ8Pq5pyn",
  "key5": "DoUyR9wYKyEJnwmEkTysP4q4nvi4ctTeR5tM8UsJZ8XNAqTFa39e8jMnvTVfq6y3qbK5ZoTDochKYHLbXDLMJpx",
  "key6": "dWncLfwAkmaBD6xRbXDg3tnuWQe4qhfHXtWmXmJS6H5WZ3ckufQTCqLXgaQ5PUPVFcoaHrLmixo3GJpizMBwzxo",
  "key7": "4UnxDCmDWjZsF7CWHhBSWi397sfU36kd9NHYEAbgwUQRbuxdUvRLHG9yonBt1SqQYTaenaQtUaL947RpnSLLzNTz",
  "key8": "317DbinLwuNvgFNzbsoG111HppDDBH2szhVp9Jpn7j5hQSirctnhF4LiEM6FFe3uSF5oFPzWsiNox3AAoPhcv4EN",
  "key9": "2THsEiDxBARKGv2RTQa5zUrWMgHmtKr7EzotHs7fzbbAYvUKsNPQUZHi89x3KQK8vYKRUEidfxvrpTUyMC23XruN",
  "key10": "4w4Eqtvy8Tcp7ewyWJmLUpz6qMdrJHbM3hmMiFxu6SfwFPSWjT9apKdYYW9MMgF6ppwgfiZCR9ubxea531yKEb9V",
  "key11": "4NymPmiXBcVk2nSg8ibLKmk7e5Vkjg3KuQZLwo2SK6WdxmWPgFTvuPgPx4L4LhCuS3qZuBUC2HasYUMJaqGtnqBQ",
  "key12": "426DBycagbbTpuxewJ54HPKK3EEYcMbQDa56Stz1H8jLCNbpdPcZDzB7btK1r2xK8etkZYRXGnKS3xixGC7SSV6h",
  "key13": "ECK9JbgASj8unUxbs1bUySnWYM8PwvDx98CRjJbao9kBsE7pRBnPdp6BRfsZmatiu2gRzEMXMqoSJMu2fUNWapx",
  "key14": "5cApbdHEWYevwww48PWHgNeUc6x7TXSJQXhGk8DTs94RpTQavshNMq9imfrTAUXvJnojdVMx9Z2B9X7TMhSyHeFU",
  "key15": "fdimSY2YDEHit97L7mZ84vm76uNpsYQgwetCH4HNavAgiYYsL1D3wQjU4uDVpMoA3S8eEmPe89JDFgbEnhFThLr",
  "key16": "2E9XuAUo55V5eWe6tvukQpNt9ja9xYfDXJo4LQ4uSXkZJwkHNjAbs7D5mbXHME1pDnmU9TzjQnhYKaycqKUuxEs5",
  "key17": "5cQJKEszJYNQMzB2dfwLxB6mZ68WQ9S2iydPNh2gQ1G1UhVXMFDu23nAoVs37oRytUnSbgCSomnmYDFAzg5WPoVq",
  "key18": "sBnDN5bQe4JmsNHNTmj2MhCKUvKCNWZnDsfMF1nKkhas8NzdhsvUExDf5NTboGKQumuRsP7DDag14TU7WdUKMuc",
  "key19": "4YaZNfjTgQjkbaaCGC1iEEYwC2anUJ7L1bsF1MjxpLUADxCLsMCKCgPN4ETRVsrE7zFDEbKbw8mxc7u7TSrptBUF",
  "key20": "iErU99kGL6bnmg5hmNr83QZtCn9ENjrBJoe85XhmHPrnNJrvCZNerz1arNR6CZejvxuaSCtyFxi6QhGFzcNRddq",
  "key21": "5h5Kvhzo5hMSxfF1VT4vHQ3KgYYcN5yy4WsAFgkUfg2qtFejqKZnsbdN9xmGsfky79NConTasnXHymNyqus37rGH",
  "key22": "3DWvMwEpBEHCEwZgZSHF2dqMKgjjnZ8qWUxzaRPnE7hzfqeqpGmyT4sgPCGsPeX8naEvFPbirVPUXD4RknUKAtHv",
  "key23": "5oKaqTQNDShEtAKFVY4HwejeKa1BCF7JjrTqQdX3gbKH57P9AoSABfvVASFiYr2kHezgnH3bUBa3oyAA9Umay99C",
  "key24": "UrfWRtwjoFdHQyS4fBCtGy4mNLR1L3Y8eur85nykxULkYJx1HtPFtuTAfZNWdAA5AA1gASrd2KMWJa5kKHue7u2",
  "key25": "35zxVAumbz3sZxEZqrwFeA4DZdYqfoUwCkGTrjiSetMpLTDzfNo7Swb8ju1d6nBW2v98RJYk4eb6Re2pFAg94oUb",
  "key26": "4KcNNWkfsR2Ea8EkTUQiw7aXsdzx4CKWhsUYMdcRUzaWX31gjtWFDosH3G3iB9ijmxB5HBMoJEzZhiExpAvd4Zy9",
  "key27": "2oJh7XtLe7MFkct6yDSwPC23ESX6RB2A1oEf8oiuy4MGqfsnz2UWC2YdFqujTKDjB6byLDtQ6oQUvAagLkKAocqs",
  "key28": "2yqh5t51fd4qCpXBhvwuMYEFxViNFN7o5oPxtHBZ47oCTRAKNhhoEv5NCbF9MzxEu2QXC3AkQFyhdqmKJ5mwx3sR",
  "key29": "QRt7nDq6mHNf3HZWbvFX7BFtRUitKyisuoGQ3ZjHDMkdDA6kUHawZpUR57SQ5tUJUHUhiRJLf1RpXNBGuWeySD6"
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
