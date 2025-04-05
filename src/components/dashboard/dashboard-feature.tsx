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
    "37EYG5vc4Zm3KP7TMCRSTqFPTDV5xfKLPEsF8vASKwTGbfY5AmnT1tXPD54GdWYgrqeCquKJSMke1tYvsDUDaLsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxfyrHq4G9cHaZ7dNGJKzm1BTvPCrqiYaZFvwNgv8cUHyjDpq4vAszbRn6LT7zE9bcSGUxrytf9S3kM6dFxrPCt",
  "key1": "4ghMqD31MEHb8BJGd5pkFWwnMBJ2hzf6rr3a1fGiyD2rBGEPkiSrTjj6zDozmN9dms8nSQyhTE5Fx8yKWLY5exub",
  "key2": "2S88PaaiTH4qBM79TsfrFbruax4ScUwHqHvrbVj4okCoDVEcXzscuJHwjSWVzy1ozZZNgKW5tiJX7RoDnFWqpjT6",
  "key3": "3knrg8PfvhGXcp3f51SewMQz5EB8L1QudGmz1rqCTVcBJZq6RxGSsBfKK25V8gFLkfSd7eDKk7RaQLB3XwGZVJvZ",
  "key4": "4ZayModuUqUKp4FPnkF2J1puzd2YEQWfhBRH3B8P9dt8kAbJE3yVbaftvxLsuQ2HpDg6EiaHbykoJGniJsLEZJnd",
  "key5": "21EZxgmLhJd5LRPtk9aV77TUFYdZhV4gyNF5f9zM8j7aK9XWZs9Gqzz6xx4vqBJoVpUSSYrVroHBqYbZUSDfA9h4",
  "key6": "2U6E1tATYjpqU5AeMydomqhYa1o1GaxX6BmYxnwEZudmyR7K5D5sMdcy5v1Kt26daAadZ8MrjgKFcVTPgC4hcU4B",
  "key7": "4g3p7CD7W3KpVmAT5RnKKcEfwmU7pfZ1PsaTgkYuykJQ54mSmco7n5gXAMRnN3CDmS9vELAEaYQoEUWjZubyVXow",
  "key8": "3Jn71BZtGyf8yb4t2ttyd1xeCsV7N9u2xxdYrMUWGoCKxUYwN3F9DrL6kJuKP4nbeCraKb8nUGzJpmJ6aZAvY4cw",
  "key9": "Ay4P9aKVz7GfqvPgf2KhJmaGnXnfBhod7sNr8Tp88EGVFujhoNxfkjJztaPCzQwLHSVYiMz2ZUAh3miYB3CGu1W",
  "key10": "PviRHLZrUDk4YkvQT2RmpHaSKdCrYZiffrJRX86nr8coSeRUZceQ5DLNmK8hnfPK7AZxZziGMzMYZ537fpSCAMt",
  "key11": "55qSscnVMsQKJFvzegKrguFjA11tAYSxPDXo2An8oRzVNXF3fAZRfwnjgXrAPK49aa2JSuo3tLJX9dtXkokYK17k",
  "key12": "4mgwKpZbUsN9Da64q9xy9kr8iX8kCXSt5Wj4MwEe4o3QoiVmLrSb41q2EJcWVEnNUFfVkLyvs7kAVMEimNVFq3AT",
  "key13": "D4q3KLQcAyLgj2QEPvRjvu5UTjyyFCk3FhBFnAvx9wZw6azu84HRLFtaJ2CpmU6V8NGPSdioDs881myfXdn9ZnC",
  "key14": "3pf8QGun5U3GjkAJWemj2Jh7jc7zjUEjPQPpC7RpUdbwidMdcPSB6wQNMVFpfgQyCiX19tPDRXzDJmkppACwjvRa",
  "key15": "2AUKq5j5gcPJ6e2zBxudBooeV4r9BMu8RDpH2fXc4E2FKjEQCdYVeaYscGFdvUMNQLgSbYuVryTK8oogc84tZoSY",
  "key16": "3Lzz5WT2hWPKk8RnriBSqQzjHBJbkQmc3YJgvBH3FMBLhfcojR5Ec1XTZ1aexon5f3Nn3p2oLRrR49CrXtnUdZXx",
  "key17": "yXJE1aftNWbM3V5BNL1mP3zePc5RX2P2UWwz6W8Hw77thyzrkeZb9pVqrFy4bW3CSnLvqiRHF6aeEQk2DAambP6",
  "key18": "5jeAPZEudxgNFKXpMZhW5SuAdfECKUPCvFeZtjkSUfc97QesUEMwA8MfZaKnvuhNLxDFb5aCBrtTz6g3MJ9736ts",
  "key19": "3D7h1eY2fQmTy1dTgJrsCn8xFDpGqaSkueHTLv7YryGjyd5Fhw9ixbw76ygc5Dgtymn22yeJ6ecaWAn9jA8q1TXg",
  "key20": "31SpckF3768ErX58jHLhgB3aiNSbm4X5E6nP4nwYTBdUUgQQk8dnfZBrUtz8r5x8z5LFgyNPDK9ioH27B3VR7wMd",
  "key21": "38id92LinG2gGcDGSgHBfg45HCK26eRzxsTiSvQjbAW3PQ371rqxzTXE3wrw6yxCqEAefdAMJKmRAtnhtiffPdtK",
  "key22": "4fGzBXybRoiSmvPQUJT1j2Faz8LhZ8kudSzSVqq8bu5EX3BZmchdjgpKWJRHXhKXydPbpGGvTDMmtBKKQgsj85A5",
  "key23": "NzHJqYNVF1KdfJzsnSDynS6QycWZj5i2QGxYap5mhYo5AC7mnZ5vopdbZ2yMAarrhAwnfrxosFU3n5SG8VhH8Bw",
  "key24": "5q7j5XWRmDo2P34ZNDdSo5bjT8PYQD6TYmDozhCJmsGr8uRjsF1X21ucqNpgECaa5t6BR9Erc554nAYupBkwnrSc",
  "key25": "5wgMTpxrTuxCkaBt6bMoUGQXWiPc6rBZfPHxTAVDAwt8mdniXUcke997E12Zq23j6FMA4kEnaCGWKi8W88eFigKR",
  "key26": "4ntsDX1kX7iS56Y1ss6wyjhodoPLbstmh6X6TkaVRAC64gNAFub8STq5999yKh97G3iujJLqQBLZBHmthM4fWJhB",
  "key27": "5DNA5TAENsknBwiTZ6iiGZB6WHdojukkUFeqaGNGWUVUYWugHbvoB4E3x4QzPuw69hUua1rDQnCUw1LWSuehqX7W",
  "key28": "2rmpPSK941X2nXXGpLSGbFsAszziAx2SffaV4cQTLZqWZXndvbid7XPPt4GzqBhXxG28EBa31DS6YgpDwEAoZ6Zo",
  "key29": "5PGyPFzEqBZRqir7MYEvbCdPKWPPeYiLUs7uMAtqiDr6jugvZEbXmLvb8jiTnsueGdwTp8kqNjZHtbpW3RFb4yX9",
  "key30": "4mR3Z1pZmV6gdp6PBkh7Aoyq9bmYC8TzsZceqF6wQGRg5pQo8UPQuXt1oSS6MvBRLKKJFQfNP7XjSK397LfajyHH",
  "key31": "dQzRVT95YzHByexkwcx5VENKpB54Vb5ZuSyTcesx3bARTnf9sF2DiFmbp8zF3evygYrGcziitfZRoYnVua5CUbD"
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
