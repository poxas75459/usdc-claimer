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
    "4chNBBhyS5E6cuLZyYPs7DLe3zFyDvoMH6qkr9X88eHYLsmtbJbiP75dEET7XgCqiYc8EknpjUUFZYWzRe7PKy6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qchqB3rgwWEKoyydwBZNXdXe4X6z8DJ2tnGbu8h8VwWCPhUsr26dkGLuSBFWCnaVQASz6NhndKvZG1R2wSWdNfR",
  "key1": "37FkcYi9CqCnpCA6D2RCDtmZwzUoUYqsyuopdZdkpRXxhm9YNw9HaR2WQnpNLgAhxbJ4oXAPUbxumH5ruYxjcvya",
  "key2": "2WHd1ULWiKNECXMPcckF8yRxuw7dNUg4iUD7yqUWuhNziPcVezBSs8RbEFG7vjZw5upz63Qo9TRS6nHx62A1WFdY",
  "key3": "36NX7Mf45QxcH4jfyWW9vfRausqbxLdFZLeAA8tF74zJ5k8Qq5wXy23wh8itR3sGE753zeKCSHy3rbtqjC6iUW5z",
  "key4": "Ed88JkvA7tL4sXZpoJXjTwXrFTg2hRJL1dA9QDb5TSE2M8QdfGmyWRNH4PuAS9dFaUZsV7rxpVYyuP9TbwFDsAd",
  "key5": "3p77cYnowkpdajLBiwC7retdNkDjLsTbHcNYyxfr2o2P11T1GszKS2Wm54vrZEeWsRtmQsbTq6hi5uF27FFVCyzg",
  "key6": "2heLgxgpNKETCDwKvMJcdco2a2gju5V6dQ74abtHYsvYyUF95HinfjhrtrBB4MaLuUmNknGyeE8H94ZtxrqyZiyy",
  "key7": "3GNNfq471FQSFX49j1oKcqwF74TGRRfZKYxEk6bCSLouGthaeXhhZRfJckf6f6zYMao25iuwVQ4DXp2Ajnfw8SiN",
  "key8": "tnCPSWYEpYRHwzkbujh9bbcUEVJcsZnJEVbvReTCLVvAVqnDDmS4hLhmiCATTszye943qd2u74UrMV4AzCMQdHB",
  "key9": "5k12zH6MByh8E5qvbcXUVA4F4uX5cAJW8uthn2XCyPvkAk4Y86XbcibyDU7vAsk3ci7DnSFdhTraPso36VzaetqY",
  "key10": "fzPcq8GugprLV8R8xPRTkXNe7KZjhcamGy7b6i7zw17wgSRtbiNUtcCkpUdpyQNhKEYzV8FdDAWiRpR2vLp5VYk",
  "key11": "3S6qMfNn5FWDRvEoQp3GgWWQFr4YKwS2yhJmKK6hfNiS7TJVYiV9bda5GbEvYxy5TZRYBApUpmUTGweDcT1csTgj",
  "key12": "54nZaqx5xuzWD8xW18wuFdusFtvn74mGojnNpWejMgBSRGV2cqkQXjqCrwDzgBqXpcc3nnj9h9cLeFoHuYcMb7Jj",
  "key13": "3KDBBrDzFa6TkHNNyvUM7XqRo3suvCEcfUY8qYc3QjFSdFm8m46rKHvfm8GqGTdNzAJEq8fnwvAtgFo9ZdpLQqSY",
  "key14": "4nHPagey5LsETpmjah1MpYYWn8mQVwRYRbG734QyJo4n9UbWctahpoHjEBpnaSv9N2MFAxqYQwjXrtEU81DVHarm",
  "key15": "3H7xgDZx6PkYptc5Y4aSq2fuRE9nsQMipd7N5SMRYi4wncAG5BbT33EizFiZcEPJAoQtKceuSmSa5t9TNUtsHbnh",
  "key16": "53WwbrUE6ad9d5byadfsG82Z2DYJfLj1CNWjAnLdMXU8pwTkokARFgiu2igbrkgjaU3aLZ3eqFfxwGrQyasHKfLP",
  "key17": "4RM9u9bxjEwJ7gcbFGiRDy9WuVZjjZuxU6Gd27AMefoLFTSBair3K6TGmH9gHmSRxqn2DjYVVBMoRsyVM3wmztNX",
  "key18": "5eEd5j2d9a2C4mdyCSjdBgvX78frxM2NShd5EMY3rgr6hwJrPEY8paexBookPC9tCZnBpvF2ed6nWexAXxz33Y4E",
  "key19": "9mqPfdgvXUqpExvj6APYgkDiriQJJBdUQZJuRdUnor4sqkWoGFsBEULpwpvvtAZNbyUPQQvvUMAcGCpvsMUrACu",
  "key20": "2xoX1ou1HZA7rZcYcztMGQn5XvrAYrCsRBWdd3BSENGL8i34e5xh8yfVVopYYKaJdV73f1QmREzX8WtPeA7KYxga",
  "key21": "4DpUwfTPctGHVrcTvVEUA1awTWs8csUG4styimRtFDkvb21VdrgkgyrUVkNF3rnDC7zqTFJKpLJj8qbPvNV3krY7",
  "key22": "2TckwthxueXiavYPLCjp5uW1qzQHMLAKwLErkF3898z7jNoH5MHP9BrCJ7n5LXmdKmf5KfNpLPwPwsxNC4k8uYYs",
  "key23": "3Tay8dTTgjfgw58aDC3TWjYBHtXTdZQZPdEUo8Fx5P3rVf4BgcAhAmRcvD9JVSwVwrWmpHBoLi6Cb1aDmjh2rjBx",
  "key24": "4P7zE5SrdrG15ej2ZwtbspwFnVgRNE9MJCzcETidarcWqJLWLWkSS8sYSddwzhonYFQCwLRpkw9KCZaJZSxGUJvj",
  "key25": "4eHshadSeFbuJ4NCKvpmmABhM2X5EN2Qaxu1ctcer5VfbxYTZ1oZNpNki6fZ6if6HoWQoMdGcdP43jCY7fMtezSa",
  "key26": "XzAJnwBban6a2eruTHAznAuSavKK4PwrzkTPFnHX1jpFJSabDV1H2nwQPHFVHpbGFUrSw95AD6VzTPM2rgMnqKH",
  "key27": "H6JFNDPRYL6hcazteGwMU3SLjEmcxEghwarzMvMPpqWEU1ibgPG5nAcJLx2iogB7WtFoeQhxr1ZjxeaXnwfYEUN",
  "key28": "5MjfyJQtAGJ6f9e1DWTob6ze1DgLfPjLYACQTgR2tkprmFDy9mysZmkMAVCKJsw7HPBGwq6vAunUMHcFBx38q1Ff",
  "key29": "2zB9g23ZNQedSwMnPfURTeUAqJQ6A9hjCoWQ1QjrR67CMQknm7MJg5WKfzwQQtkL8kbt5JPonZmVfZHQanKg9TmU",
  "key30": "4TbzTjS1UWNHsSQFw62mjGeJEpBoFbmBFekYBvr1jp7AHBxMR8epdfhvYRhYPoYBmWCJ9VsgyjbjTwpjzKBTYnQR",
  "key31": "eZYJCKBcFQjvbQfzNtfefisKExRoqx8ZugSCWQyMWtYm9q7XciYrhSWQwnDJDxXpbYQaYREt76N6jdXe1Vr6aTZ"
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
