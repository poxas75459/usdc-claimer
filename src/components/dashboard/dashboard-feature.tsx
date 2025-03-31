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
    "5378sTv2U1v8XY3v4kMotTW7jfa7qt75QSUJmky6kYRjhuxLyG4Ey6RJr8CtTVBUYjjm2iDDyeeWgvkVgsymzJwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvhCov6evVXyZusV2hRgxpc2qo2LTu42ohVTKfNKm6X1TfSuL6WW8VFC9eDqHLGaQ4EdQWcG4HerPNGMMogtghu",
  "key1": "2RjJnEUZcrM1fuVqDcLkA5TgjA4HuFZuVQWdEZqajJ6gDPVmPLdViC8poxfcCgtF6TCXq73hUuSqJbzZeWCbwm4p",
  "key2": "5FXURif82gkx2QpjPspdPutgdNu3pyVUJNgMt4jbVt4qRQu5kioV2HDFwGVzejCXmHdpms3RP2hdwQ7QugvmZUEF",
  "key3": "5KwHthiL5krtxWDNzhX4FWgumgZ5CsZBW6r3rD4eCmZ7oaYkfTwPb58fG7VBQBHgnqFRjdf8Fm9FUymB4MWi8pjR",
  "key4": "2VHLwzqDRaJqgLKvwe4K59WENpHeFZraGr397FUEcoEnx2KePAN66YdeKv8QjJ21SGWsiy3ZapfDoWt2qGHLS4VH",
  "key5": "2J7MrhB6yDebkTU5jFo6ANMxeztrfoASS9vpt5YtkBU1A3Jzg9LYEu1KZcH9t1v2U4SHfdAGLzMZ9g8qquoWLnsC",
  "key6": "3MHZCc6JRpFYgnwgt7ZYKb7KE8e65CJpMad4MeVEyTWa4zNWpT7tDinKiAeuvhE1UvD5psViDVX7Bq9YdUW3VoPv",
  "key7": "3bkcBMWGEY3hCm2nw7tJmwxRWec5A6o64Vzcf3KdiEAujdZhjMja9YRZLB4yMjUqfGJmeaYDYNVGcTVzZFVKmmV7",
  "key8": "QrkCwiNPQcBGvXhRApFDruKiX5UZYkxvQqRbpqi9z7QENbcR4cA11VowePaNXfcECBurMRf16oD2QZfjoBvshyn",
  "key9": "7EQWGPJ75zKt7bY9qB6xJvt72rgQKvoydoFvr9PyBofuUWztjWSA2wVkCd1g6WCFwtGwuUkYNYBMkreAT5e8CWu",
  "key10": "3npLXqj2S9iqxpAgWT9GHoXTTX7RZFBdqFZGCi6Qt4SuHDjrRic6kTs9tpvjydNmVV4aKKJHY6uGt13Qgnf2FJJ7",
  "key11": "Y5cDMBc1V6WDTcNAEXZEGeacHVxecKZjcniroaPWYaEY4B1fidV5eeYubECPwjs9LKRd1mXEqZJsyKj8V1p7mP4",
  "key12": "3s4FDYK2zfp5v4vR1aaRVxGuSC534UXDzNKLUuQadvyxVnfHfmfo1sKH86dd8YVAkdgFTkTezWG4bK2xoMhfTqjD",
  "key13": "3WBunkwctEysFWNzMW9DXKXvwztyhuiRBFMgv4N3atzbvGxop5cZeLn563HvGobsxCjqED7P27rf2j59QjLjEsZg",
  "key14": "3JiV8NsQXWDJhbjXhTcmvx6pYViiLwhjR1fpSeuJymuFSH7CRFQHseSkfZczrttPRHRbBFDZEbE5mdM6dENJjbm7",
  "key15": "3kjWqm5HKnsM2wqdsvP1PL4yzQLEpP4jJ36T5xYmQzQufZ49qvhB9rHBDMufxXjooDZY4QU3jvYmmAFczZn2CaMV",
  "key16": "2rVFMZT3gcrc3Pb32eC7zWMuKo52PzN8CMrtJQRKQiofbgXmoFRKfNwYsDH7L7ngr4r7fpBfQEjxahkvD84h43B2",
  "key17": "EjhFo63J9sj1J5gVstSrHz47rgqvy8hRu44X6Wzw48PCN9X6B2rxNELrcTXh92azfPa3SSMFqiMEzcH7nCpQTvp",
  "key18": "2fNw2eVC2UQBQgNdbARybeTxn92jko11sMy2oWudHKycqUUhFkYnTghdVWkphDLTJLyzr3E73sULKKXFb4TaHfi2",
  "key19": "3RZhTtvfJZWUwbjBb5SRUFi6WHct9Tr2rRsnieVnRTKYmG5ySuYyQZNjCxNB7vhftV6YHEKbknUkBqqEB3NZYKTm",
  "key20": "4nyXnT869rw6UwQawWSogxvEjxdfSbTf24TZ3HCoan7CTCThccb7rCxKm58hhUVJzXBdnzMrfStuDn2wi17nniWn",
  "key21": "121wQnJHQ2DCVrbfXV8jCeddcDNEhr3MXPG7K4LrxhntPBYdBw1T3mfA7JshMUVRSwnFqHoenXtRZZbNv6T38D4Y",
  "key22": "22BUKEgeZJFu59T6SDGzwH2aX7zrTiSBDvR6o2FUT4Kj9bQNyeGV3UhUg2rk9nhHUrxDffRaDmrtzVbJvr8emPXu",
  "key23": "4mHPgpoe2Q1jQfRJeNDytAZe8HksJvoFGbHiCyZgzCQ7g9EYLkszwN3JoLSgeD87BinjB3jWk5RxPwwXpkLEXBJV",
  "key24": "21nFx1ia95dfvpJ5tgj2HoWPmCTd624fGo1pyBFWD1mRbnwWfuUu3vMHoxfobkARYgfLh5bseCmNH4fvTXFpzHiF",
  "key25": "2WnfQ3kgD2ZWZwVqNmA6vvxaJF7UT1A58busJWmkGGuBUKQMbapxuG6p2zeTEwCZgc6iNCwP9PvydhvhUBE6zBwJ"
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
