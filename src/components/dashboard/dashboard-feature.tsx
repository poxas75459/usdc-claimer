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
    "39BFutS2cEta9jbqeqjXpuCnGjx5k6BE6ow1TkHLobkWQTgA3Zwom9Ry867DdVi1YFUcDzH49Ef6uQGrqrHTGmMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ubfKfYDhKXmmLRDNbcEzw73wshEmPy8oYncccasdhWB6K6ADjaBN8CfTUpUDWb2FDzyURf9azy1495sr3TmpGmc",
  "key1": "5zY6Axm9CeK2BGShPy5mP2Zyaw2eXphuFdeBM6Yr6ge5ueLGk3WCzCDhC5cmfHqsChoKsTQzMHJQQHCyDrrgAfVV",
  "key2": "2QbgZHroqZhoCXqZQFKBGRbrpankm33rtj97wNKQ83wNn7wuExwe8L1Skfy7ePgqahABd1oeH5Uyq17bzRs3WUh4",
  "key3": "2gH6f7Fjf9FPmJRyTJVf7K6qjBgGCy4TdmXSeKHtZeVxAejc1tmpSTLmP1FA1FtyEU4ccqS9fxTM1aMJVBMg5eqf",
  "key4": "3Xbso7c9XdzUMPQkLQCjnwBQwkFjSh1Cmi9UhJ8Y5T5ETiRoErR4JKvSds9DRABvcC45AYD3UE2tfp3kCUE7226y",
  "key5": "2XBuDsNKRm8CJJqnQDpu5VomaHFqmwk5HDUD9QkwikgQU1X4DLBY5S39hwQpMLwnhZnoFAQwKFZcPtFuNJVwgspt",
  "key6": "66Xo38sjTTwYocCgiERWFVn7nkxbTjriGjHPnCfLgkPKiFvcY9Ye16MDpgcjh6dkTLUabnR1YjYKrRucWiPjJThr",
  "key7": "R2giftJvYdbrrYm88ywSJanPXYP7sdQWkHQyfAQKfd5v3GAb6K3qENx3ARintLv7i7pPjMD5HpGwAXyw18f4ekJ",
  "key8": "387Qx2Mfp9Ykenj5kqjMM5Hfq7Tz1rmFdmAxMn8DDwkpYfo73S2VTbkaQ3z4p128DDuVKF6sDkztj18RRSMeLmhD",
  "key9": "61ksvCA49R8AZ5weEB59nLm4reBEPUmxMUB2ksAzBoBJM1BK7boEfvmDYrQM6aeJkH9MZmjXGAMtnV3eGNB2NJ79",
  "key10": "3yatAaP2VJbZA143zDZuFqjBv8mR1wFNvAbobX3XNS6VyZZH7i97XhrHa9TwdtkR6NRs2ZhSJuUXkjHNmCKwGxTr",
  "key11": "2QZJymBLoZeyKBb2hxoUxk6GhU3ThhTc9FV3vf3brLgqE7TzGffkdfnTt8SJqHvVRXhCK9ZLu2ZHjDAuzDWVnS5Z",
  "key12": "Z5AUeRQfXTL3NT4B1Lf7xSZXQN5YsuXqHE53NZCNVMmo4zWMwUu342WudCLWwcLZrXxZrnF2fZrj9YqyTcq1dZ3",
  "key13": "8QZHgzjCFYWyNTJ2vYC6cqvwwJV3jH4JdJ4t7Wu7wgYLsz5Eb1dw5jFR3Pf6m1BtoMEnrCb3dkyNhCY2FYRBXJV",
  "key14": "3ipyeNhKNWgaZckWk9fgjhtvTULYCi4XAfvdDDf653i4vy4Jt4ZZbeD6pUKKEyj486HbCnv1iNLvP85te7BZUzMo",
  "key15": "33Z59dWQU29SgbgnjUoLWRRSVNERKx1WxHR5Q5gA2wVuUWoR9p7dkQM9mypn1PqVshXLqz9hUHz1xb3XFXyhwQ9V",
  "key16": "2iU4ggiXnKRusx1M9Dy9YftLubdkL1hj9mFYVXKf9zDp1qAP2fEJAqHx2rkcSDN3Tc1uR27Vv6sEH6ySBh5rdCmP",
  "key17": "4m61R8cpUWFWs11dYR9vfS9xgV7Kz7sfDygz4Rk6FS4fWiXsFzS9qZN9bvttC69YogAXX414PAgqcGhAkrvPmHEe",
  "key18": "5wNJk4L19yLcVcK4ehkq1nhxvmbb6gE9tAPdqtACWgunXJS6RtVKjEqWVxhEn6AM81qwNC3Jzo6qA9oPawSznWrg",
  "key19": "44hExqWvAftmUTe4djYjc3juxkRMNtVMa1cUWrLiaKp4tGSS6aTY3fM48Vbw4kZTZMBBN5SjC2J9SzWjSs9T2bQU",
  "key20": "535dPsA6XrEpakeaNcrV5QNef5QqaryHQZijNnP5VPyZQeXTRLnwppdGwDMJQHPXBExTKujspnnuB8WyG87TuD7H",
  "key21": "3Mkf4B74dzMGnNSKxAzogb5dFjCbWjiaFGU3Y8XsdXTBZyNkdmJbKiJQVpeCJ6o4JSqwXeqVQ2zywkD9WM3cuTjH",
  "key22": "62X4zDSoZjKTRfi5qRHkWGxWvWU1vj9NDFBqa2BLJVhMTPe1gkADh19Hc4TN5Ve91tNjRpdCTpdg6z8Ed9KfYsAN",
  "key23": "LVNTD4TRg7RE4WsP4PqCjeQEw7um6euBsrHs2qiJaS3ZybbY3wu7SyHM3CueAdK7byKyrpPYYUp8FKDirNftijm",
  "key24": "3U1cBRpSE4uNLuB9rTz5gzba2Gp5QqQQ2HQK4TrsnXf68UkNBN8ncXWQRqf6incyqqKEypcT9E4NEGCaEjHDRyh9",
  "key25": "2KKRmbJLdDAheJJUdwkmaeZGtXakUQRyQhAjYshV4q9Kv7ZtwecGMjFMEkCzr7pn58A41ZfywikpXaKiFtHNqPsp",
  "key26": "2Gf8Yqnfcwo3xPfHohWeSpGjP8MS3G3oAu8dsbhmEomVDv4vbrrfmnpxXmQNAdhgzmEdgr39YMMmSpqJ3iNNxFaP",
  "key27": "2HCPswi9P3jnnjUfKQVdo39i5PBJbJp7QAXLTdFsHdLG6u58sjbjLEPxfTW8n2we7sqtcsiVvdzFEv8cibmhyy1E"
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
