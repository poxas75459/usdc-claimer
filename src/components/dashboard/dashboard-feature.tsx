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
    "5xzY5QmTF45GSVyG6Xj3qukueAZYr77Xcpe7FNzuuB8mdCRD5h3qmmamwkfSVaktqewLqggja5CZCmFApX2XHbZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bUSToNiJH7KGkgNpsksQG8z3EZX6XKTQWRzTHgyYTyzUrEQjwFb25ErbeoJ7Hf9HMnXBUvsFSDbDxaswRvgKdeS",
  "key1": "4Kvbka7HvHkMVzkBdWnQvCBnVP6ofQF1fxtCUZJvTDMbP4AhUG794UCQR6rT3mUbqszQNk2vp1hAG2LQ7y2ZaA78",
  "key2": "3U7h3Eg83wWAPBLgVdJ4eSrgHz6RnXo17bMPiM79SkfDHdxCwquCpR9jmiHMMZNf8bEsVCnETmRVS9po3ZRcESVm",
  "key3": "4BmAG92jEUeNHxXf7avBvZRCGUhtTKSvg7bhNMZME7NfC5okvdKjHCsN4xcvE3AFNQJiXQPSEaHaAhsFetqh8dJa",
  "key4": "eJ9tPnzhG7rj4LFb4wors4vHHz77KxQXEXh59PhuWXBmcZtbTTkHPX82yoNmZNXFAbr2pEGuENzvzKQc5mm2frv",
  "key5": "52aZfWhneHGYUK1KA6acs5MpekCQgMME5xdkVycL26hHM5xDFk9tkBb2z3v1FsSLd3NVkQGht3GeCmjnCehjQU1B",
  "key6": "3CbBVfEyrihWjse9hZ1yecrquCD9U2jE1v2cNRcah3pxciHoF9ox6cMw7sJtud5kW4m3i8uLXbwRHaJJDEJXw3iz",
  "key7": "4xTLAUZczv7hiJWvMkPkbjL8JSPsyLK9KZC5ButHiqrAM16DB37GQdjmbTNJjxqqgLtREVZ2KT66QEuHCFrZ5Lvj",
  "key8": "5doREshWEXzwnuTYouMYA8q5weqAqHLXNDSoyPGXbcvtoq98WBs9GFKBQJPM5St8qN98JgLwodWyrgkZBKRRpXvF",
  "key9": "3nm2PLyriQT9Y4qbhghdUKfUTunBes6549u8CNNMfXmydc6TSfir6fcrj2PafFoQK6JGE3hpDSgx7nCCt9KVj6RC",
  "key10": "27vQmXeXTrTWVuuD7zHzoC1dBvWfNJMedgoPjV58aWtzroxzzjoJobg6fehWRfuHtbEXpGaYyivZqTLnGmcU9J5N",
  "key11": "2FhVQzyQMeVQznVmM6GVakLkY8UN8pLhCvc9XwMwVK9D3a6Y1sNLz4Ac42KR9EyxM5qAKujaD5J8xTZpYSsaSfZr",
  "key12": "5jx5oBJ7QCPfaCFTJfzCMqcthzotpSmbE7oDTZQnLoqkB83HcvBUsoyc8nt7WAroz4Jm1vNXs2dxdo76JKcL6uJM",
  "key13": "5FPuQjYAAMtub8dqGidoEf3sHb8ahihrKvvtJB5RZNRSkzBHzPV5gbPK5TzJ5oLgE22JcyfRi9Vwe3reXKysLP6j",
  "key14": "4Z7pLRPbxf6FXTkQMxzxdQn9hFcoV5Ra91uEimBc7GVKsYeuyLwSnUk6caEGjovs15ZcTaZ2j5brNbtDJS69bEbM",
  "key15": "23sVxzc5NrXFNnnpT7y4AfpnZs2mqVzKLqQtyFXfpkzidfVEbfXGX44iTaovpEZkaS2tgRppc5wpaWVVZ9ZngBDi",
  "key16": "2U3pLZxkFBD7zzJu2aKqhknVmetS8vpEYwmsN27Zt4DFA3Gjab1xUGCuNdDsw7aD9i9pG3h5JbPgJrTTVUKmBVdt",
  "key17": "3aPnPzzFnSeYWfCe7Aaz3FJT4RbDWiki4bJAXh4QLDU1bTB6dfXgmRo3tGutsVoTPSYB1JDPf3w64raKxWMSYsPz",
  "key18": "3pbkP4HU1JQLzBrgZMLMK26ipKWuuNd1fpeiLgYrmfq4pJRetAGQkkEYZQSxvWWZhGUkPgH2Q5A5fNmWZx81ios1",
  "key19": "2xdWNRGAJESKd55qUJq9uUJEvoi8op8bJoj5pPekKijSTLxj6vVxA9c64z8bGqMi1utSjqTdA66AMcP7w8fQKEsM",
  "key20": "2Y82b3aT4NZjeqehbV3emgq9yxJZp7CMUuxue7H7BN92efZHW9XZB7nxBC45X227JRRcJUHn9VLuiHFmAfmBvqP6",
  "key21": "4NSGj7ro8obvfRbTedgQ3tpY4QLramAYeV98K9PYLZ7AwUkrgZQ8Nh3rtHE1fGJExqozbh1BQaxouwRnVCwm8FmX",
  "key22": "4w2zdhhGUwLsUz5BFj3ePcRaudBiPAHMiUfSAuS5SagLPpDvfZDbVBatSavFVmV8AQmnv7VVcsQEpq16YE3Fpqge",
  "key23": "2ssxJ2w6qeicuShxAi9tNVzUBsCgWmsYMp6uJTFrW2EURVqVUnoN7LWx9QP1h3bThqokYt7q4DdvQZLVGmf1etnX",
  "key24": "3BKgWNnyJKP12kBCrArkK7FdiQ6x8Na5mvuU6pSzm2hyzpu2rYnmke87ogMnePuboj46UtG92nudcmdzdXy2Q8qs",
  "key25": "2ztZrpLj6sgFY5tiwYnEtDXBD9iAj5zBPzxttTwS7Q4RCAcQHmazheWSGoHVnjMqmqJjXtUNT489KHrAsoJ49vQa",
  "key26": "Z9fVExKaQhLAWnDQAZSfonn3abqf8d6BJWu1wmchixM5GHKfyktpQDWkYYFkEUhdsmZjRdbXxd6VgKSkanpRhSQ",
  "key27": "3wTkP2mHMyatW1oQJMPmpM38nwekNzdsf9PLgih9CkFCVxUmXjhqj4nEU4VhXdX2THBitoUrDSbL6YY3Tu6mSeXL",
  "key28": "4XN1rCvSwwNMhN9FGr55ZiyoPVaXxSzS1JXPxhN6yR1KVikmybfr3qeFdPb3hcTegjwYQYHdMyx5WQ6VwYbyD7NV"
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
