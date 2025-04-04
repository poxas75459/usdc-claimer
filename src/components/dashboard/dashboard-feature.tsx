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
    "3nSYNKy4MDnEBe5eAh44H4DAWJcm1bxx8fnXMAXAZjYN5YMt8q15WivjXFbhkqeNVyWnX2QXvYTDWCp766oQKVXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zh6B98pgHbUVirmh6p8nqffvKRVt2nyk9v3CWppBnet6ok7257qrQYjjFwaXyVD1Sy8dU3itqgcAFrwDLJgL41x",
  "key1": "5rsmvSo1DjzDPEX5BEQMsY1eJJ1hrxQ9oQcCBn2RuiUQdRArzsM2gnRP5vhs6aJHrrac9e6n3CVdm3JUAR8LXY9n",
  "key2": "3EWa17SPWKZfojoGfTBmF4SXzAf1bGX145zdWwe7ahdfoyQaxVzykcU3TMvdVrey42McMJ1w4aE2KNi6DDaqBAhF",
  "key3": "2rn9adEzMSjhcKd2cfuKuktJtqP8NmhuqMrmGvyxzNUcCB6LFW4jYJEYpVZTdctugTJarSJGEDhTP9W8QXRY6QwM",
  "key4": "5DU4pZPh1zLdw8XpfBC4cUGsNxwctK7gcBRA2QkGPZnxKAcu4Xptt7wc2fjLUwSXX6qQcHRoUgN3cuUkC7QQRy4H",
  "key5": "3AbtHZUQmz6nZKJ5E9rC6Mc2qPcnA47xbayZDWr42Pxeoe2h8wbLCoZYz9rZJy6fhegHrR1juHuJBRmz575Jw4Lb",
  "key6": "5mWKU3AqGBHMMQuz7JRoYP57f5rDjrrRnndav4KDRMBL6DNeibHWMTLqAcqj8L2pp3yAdkexiqJhAY799gd8MyD7",
  "key7": "5Si98cPhhZhMHygfx3RCwCoNVsJ13NUksySonFCstRVNSEaQbW8f4fbBCQhiTiPyYCuceRKVtkdwVw5cZd33jz6E",
  "key8": "3D35TnyvKMVmCUgradji2mRiQUXUxto5ReuG4vYq86ou2xoP3rHbi8ViXUPBEULSVPgnsusA4ycMbzJ9YwmWiNd8",
  "key9": "3i7QEnMqK6q67k7amBrPfodp4zStVhPkeht9pnCVXZPFpSoCxFRT2ZZgrKZBN9dvJSs99eX68ACfSHtX6Aew5B3B",
  "key10": "sCugZqiSJYUWbntJKqoRFZMg6nGqCw87hPUgaKPdQgkyD7ttBLKhFVyeuPvdsU3y7sfkHHwGLYUQVwKia8bTdnH",
  "key11": "2wrgWkqa6dnwe9n9Ttf1xCJpvpqD39PCnzg3Ab8b2bGZ9tQQMSFasgBC64Gkr6QwbGA4WzCi5q8rE3MfbfVhP6Pk",
  "key12": "5NcJQN9M3xmDqMKz5qeQ2ogkWBBSHmMvHEj9DPPTcrBAX8sadbe6m94LL3afZ6S1Fems1KXy5ZimQSYjx1ZemogQ",
  "key13": "XQsvvajSDgL5CgHun2eSjFTjoAZa7U4cZUA4w5FpLLjVMwWfv3gfZGYJKvPraMivwkAGfttVF1VQoKunNEHwttV",
  "key14": "4rmaFqVX3J76EckE7nSuo5vrVA6pho96HqXyuRUMugjDTz7NKHfXnGcjXdUJY7xxsF3oQ7uY6pQDrMtjNfTpe4Tn",
  "key15": "3uTG59fr6DRZ4eqxhGJ5MmoTzSdX1w2r3o7NdepoDq4kM1hQkfL2pifWWrRr6jSKe91WPjDBfJuVsJ2W7bN8AGK3",
  "key16": "CG5yRS4vszJbkpcbzSwgzDAGFFeJdtLn7DzfmfpwZTShZTxj9MqXFraUU2coJ9vocPZMTrijr5UdWjsQfdkB5mf",
  "key17": "2X2CWaPaUMSWh3VZcmwuFjhMC2EL9JjpDZ8qjy5hyXj82xppngEZhg44zwavxg34nZMTA5yEyq3ZXnVymCLZGNyv",
  "key18": "2fvLcjzsZYSnzhwCBXBssdzzdzhZzEmx5TnR4CUYAqEGVMwfNKY35WCtcJD4bi3t1vkVC7gUEcPdLLem7WD2ae8r",
  "key19": "3dQPJzvCDPZ7wkgUJPfUNV5Wuim2nWaS1pTJwJEC7JZn2iGRs6hY5xqA617NPa5d7Ts75HYsX17Ljm6s8VAfNA3a",
  "key20": "9HJCCHfos6MtTrpq6FVnUpwRNxhZXjmXaWbFfqNcYxedM9KVEk6GMtXrZuNMJvmu1pcoBq67gVBifXio4iJVBpD",
  "key21": "57Zcu36oY6jVNh7EuWoa4qVEHZp5kv3StRVEkJ4Kc7aTG9cdmD4vUgssAaxLb32YUL74brRPT3p3fFJ3jmyqmEhS",
  "key22": "2NAt4acThpHLJZoDMxcGnrPW2P9Xoj3SoehVVX4qSU5zViwMnR2jJxUzoADc1yXcBFbDTNiVmSq4jW7ktq5XaMkY",
  "key23": "Uj4czLDMLsraCfKobtu23WV8pZq2AUTyR7b1i6JTSqeCU6Fu74fi8Ro83HKKQHLa7qeVPHGD9i5GRehZLy7xsAD",
  "key24": "3JzNvEuqzoLq2HosnHU5mrobgpQvb17xS3cSZURkgPFRmSydQC79e69DfszCMYH5Vmq34QFVWnxz46tobgPjzkez",
  "key25": "GNKpqx4E6XQmQfohwU2Vh8VfPkvP4b9sKvCGGuLaT4NEKmu7vdb4Z4KRVtMkGd5AGy7vyqUsRppYo7qQdWMvuQG",
  "key26": "51qkJHWtrxxq9geejKfaJzXNkW4SDGhdkSGMyUzKXW2c7RTkKDXArF8dLuML4fsWtVfJpDyN3uXLY1a5oSQhngEc",
  "key27": "gLLLVHLGhjtSTVLcGTQRm9am2ZfLZ7JkngNroHGdWhy6Yu1E6dTVpyMQSTciwpbWN1MSBBy1tBCbPPB4JXGqL82",
  "key28": "64CiZKZoH93n38YT4cLpFzeXU6uvjZ4uyTmRPZc5nGUfxUz8ELQtU8448rA1aNR9kk8X1DzimD2zM5TiLtD7bzxy"
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
