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
    "5JLc6o1iSqf1Ma7LTggXsNLRpiBjGvKrvhrE2RdkNgZPNVbfzBESdpaJKHhot5qJ7MiPPAL8n2pvodgxUFhHsEbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38hLtbe6n6sDwvU8S6zVpXBvWLa4ZWFW77Qgf7hf8D4hjn4ZiBtNcpYKeefxWuTJKpjhHSro2RX5T5X5zmchap3a",
  "key1": "3T7QACz7qZk4zHb4q1wAdbt6VVeZ6mwXkTtADVKnczLm8E7SwqJ4Qwsh4zXftK3RTMaTUdMQbd9oBWKPVHBTQEWA",
  "key2": "XH6g7HaQrpbYCRrt1Bu6ZnNexNx6kMCjFujT444JSxNeCo4uYUPxFNEdqq3KNSDppSmubqJwbHoodh6FVHMiiPW",
  "key3": "4kzrB2gEuqSKmsiKVX2uV2tieWSnf4NEfXAGzg9SihrccqyPGBtvEFUXYYNssFe8KMDVDWdDz37fNbGrGQ9Kb1Qx",
  "key4": "2155nbLpC9H4Kt4v3pLLijwbHNagTbfx3nW9CXhrY97jNKSaEmu9bjiBY3u8rtUgsmyyQ57kSGdjWiWAMfML8HbL",
  "key5": "242A5zoE9jppqcFAki68dbtu5GKzsEHbqu9aLGqdSoSbCSuunmej8fV7GHucTiKxCMrjWVeK2NmNuH4E1YeAe2Je",
  "key6": "5NJLDMyUCabikFxDgxKJJvNtHRzVjCzFhkgvnVPmvYPcA9BDGravZc4aMKChMhBVKYYJq5zGuccBNEwSbvpe8yDX",
  "key7": "5XNn9WJuSDpzgVMVkncM6htgqVpffnG8uHW1Vue3mGhr39fXarApjqGck3JM2nMjRazzFEhZNL119CLCFFKAX3Ua",
  "key8": "4iP2jU8yBLmKkVXhHn7gP4SGDmta9RChppxwdr8WY8BDhWSkEtM9T5VnTBaWvD9kWw6Jt8RTLezp6g1N42a2ZUmV",
  "key9": "5FaPQmXgXhJY9CDifgh8P8seccGU93BBRBphpu3oTqrw8Ao37CEEtG9b9QXLyw7E7XLaMjHotcMWJtcZZy41Uhhr",
  "key10": "2zkfVTTJu16Na8xKD4YfrA5AQ1oE8PthqFm4YrCnxAX3mJuysavKY5wFjQD6nLdT1rtSWPSQkZFMWvfsgEETsU7h",
  "key11": "4a9s5819JJ1TApaCjG4btrLHodKyXr9Mn47twzdmw6dGyaPuYF8wY48omZZoJbR32Sm6ynk4D6RX1T5aucsCgNYh",
  "key12": "5zjW4wTyyUqEzbfPhHvsbztyYZanvChN2Tmtzv5JBdyqgt3HKJaTXnjn2etQqtkKTap5v8z8T2KvVAhz5jY7wiSp",
  "key13": "4id9TfXpNhZwMMhvPZAw9utkBzpSVBpLbVz6yYtk4Rm6BwumXtxsUdNcnNTHi3n7aqf7xRkPHPbwR7xmKaLAcN8N",
  "key14": "EBM6BEHjPrGvQdtyJKDZuqRo2xD6PuXrjA2GSrMY2e1ySZurhQLYCV6J1RUbPFTXndNTccjuaAytmgbqUFnDB3E",
  "key15": "tUqejFqiNs5oDj91Q73DyMWuq1HcfqFp6qh9f6J7fezYfDrZ7AkyFXEnZSM77wka3FXEZwWWp9LDyo6jD6XahFr",
  "key16": "2aSnbguFFkjx9ufc9YynFckFZGNzphr7uQYp4WuQRUc4WamDL48mDFLzYCq5tipQ7kXZZnMuxVjm2hQcwqs4A8Yq",
  "key17": "43JtUvyUEFpVhf9Gm19NosVwZeHnNdrdjz9nZdtp5nxyR5k5Dg5VZjgbgMVA6YxG8cF8dSucZGDuqQ7EV6R4Q1x5",
  "key18": "3PBqDZ8bJVnaZLCJm98U4gFLi46J5ZZJ2knsmWKv5EzJwh332qPBn2Qxkqcok63BZ7qE8ZtkaH846Q1p5hGAdjT1",
  "key19": "aAWoqTJAEFECEWgPb2vc34EazzCstA9nx8mbACb1bLd7DPeJeKqoj9jU7tzo2EJGpxbGX3Sqa9GjTEadkvzrwCV",
  "key20": "4VuTAhVkpLC24mid2C7Tio1rYjgUgF1dSLESHpBi8AhNvntyS88GiXqwRXFjPDDBdX2vdfDxMEFomHHmRoj2WE2q",
  "key21": "2ffZu4p9w31XK1fdJT2pcr3ySkJmDoyvp8NbNdA9BDfG4h6nA96pRV4Ee7vnWaq1nnX4YnKUWbu9Z8yhRCSgpxCZ",
  "key22": "4oiSJpBe3Bhd5yZ4BcyA8yPJ1WPD22QuUcjq8dY9mW5UvQSFfgftfxzEVgVpdQRLtWBn41UACLN62wzVzx7bXAra",
  "key23": "5Tnenekukp3CBMNtwMQa4UYRm3Kq1RqtgnB2AMdX9vDiMNsNpf9AtWQ6KqYsY2C8D42upLxaxT6CpufUZqMYjtPR",
  "key24": "5C1ChEHQMC1wSZBR8SPbLCkqSdYG8J1NuEDFyERVxYySFUGnES2SLfNSD4EonxvBbRmPDbW9rZeGq8UT5KhWwbYm",
  "key25": "3qkQ8Y3VMMy9uZKc5vtPndjQEfz6N1JrssM8Ay69TzvMV3afdwX3qaowkcuCs2yyisctcPCLzkunRT41xcoUxK3N",
  "key26": "58MkBpyjz3fsYMWLApqr8WNbYgitfuhoCiQFxVosd42hTVFbbQjLGxXg6hU9cEAESRcqpGZSAXeNLm78rZWksrHf",
  "key27": "37Upi9onRMbXhtSnFmLML9qFN75S3LH8Bvoej9wuQ4En2TnxW3vvx9Hdd9PgPAyCNS45h13UxGHCHYGWSUkcRFWj",
  "key28": "3s6GTCutAN3Bt3W9Ttt3S9dJZ7Zww4XzPjRF7vr9wU6DGsacMrYmUSsgUJ6qsTxptbeUm7Md2PhQ2pfRFUTosfK1",
  "key29": "XLARQKf43L3REeGEqpFfvabjQAkAXAE7GortoYnhabfMy4wsCLqZjtnQryftKHmNAJjDpMp1myRGHkTngAkbXWd",
  "key30": "5n9BBMS9V4etjDXYrKMpy8wwBn7bEs21ss9LmQmonZt1VKNYrm6BHFbwv4Qa9wk4ecwRn4BbsxJHkm5NyDdxn53K",
  "key31": "21R1NCvgeX6NTAN53ENPeSLPnftnV6m8ME62Ta1q7DaxZrJsHowXk6ts3WEeypDx2WeRkHoDmALUt4hvJNB6jEPB",
  "key32": "46sEDv2DvwRjAfonSBF5mR7sp77aS43mAoL1NmGLULDKZjdoDQcGz9MDZmcKy6aYBgLUghUM4aTPXwVTwKArK8v1",
  "key33": "s2YkjzxiU5WU4J9eKK1GUzs494r2XYXz69qN3gXqcGUPVVJEDysnidnTqussFRmePz6MJXXPheHxq9u2GBKyqf7",
  "key34": "4mipRw1usnf6rdHDJWtEafCTfisceQehzjYULGg6F5Gk8gZDwX5B4XH2zhdGna2c9yTCnmvxrTFfZhWhd1wjnWz6",
  "key35": "3t8tTBEK2mwH5xd9pKBvdC2jLpTL9tbrCbyu6QFMxjo93uvMiTg543pKxfK1kWFFD4sbCdUvV7wnoghob7W3n9pg",
  "key36": "5j6acbb5MEhg9jkDwJUVRNyrfub74XHmFUi2v5QHeVR4sBs3VFxH5kyPFEJaoyxmAhNn5uqc8yiwLyBnY7fCsrcF",
  "key37": "TGA47WJbnuTuXgvwHMRh9yTwy738q2YwRzubKn9kYxrzQJk3rhuHWM5vfgQii1f4k8twWuSgtpgEY7LnxAwG7Mg"
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
