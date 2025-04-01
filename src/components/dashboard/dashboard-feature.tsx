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
    "2fXy6bnfRLdBvGcXctkcxTvmq858eZfLz6mexsVRZaazZcJuBwfzSznMTTUXYWtMfLD7qWpJThoT1xufUssT4BUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sRaNsCH2PrsLkE4ewLmebcoWZTWcmCt7ETujAkjHqttWaHYVHUv6mDuVkfvUVvdHFHHeLxJurkf7A7upzPuWut7",
  "key1": "36Z8foP7NUJDnEwpupmr1Yh94WiR6Q6vdTbxUmp2z3yyF7r5GQ6wcLvVg9sBhEims9suHgYSocmbGfpQf9PybPgQ",
  "key2": "3uEdecfxhMGurngudDfq61eBzq5P5JQKtYJMi3Pb18EY5BiXSGGANBaYQ3qesEhDaCPjD1mxK2zoL4kTfJibFE3j",
  "key3": "YYk6Y9Nj5J8V6GiezGtmcs6ZS6ZFrXxU8xU7h3YrFgg3Rx1Nfq48vusjaNXFBAPKRUNhJMg922kMbbAyhoVWT4w",
  "key4": "2L3cStS6ZD1aCGLHZMSKUpxwEJRw22hdm4147gTVq8vsvE7KMH3vnMUxq6hLmj23x7H9AzmrhNDFttTLAWaaouK7",
  "key5": "5UKux4PTmrtze4JXn6uAjgTgCMh1zLPDA3gA1Wepy2PQT99D2nQk4vfnArdjTx2RGB3Zk5GeoKS8ndxhztvaGmY8",
  "key6": "2mUkJWfZu52vHERqJ9q2dikvMoVHkwAxTq2LqTCqXoiSNDNHHVNm3ZAGqzFcVZE3g8EN9R2T3VAZ3m2KcDEqm5M9",
  "key7": "5iVPwAJwsEQngZgBcD57kZZLUyQe46W7Q7hBfpvUdxDZxa7N5TtgqG1e7biEApgR4QPEZgAi241BrSvok5RFDa8o",
  "key8": "65qYsZXDkbLfJMU8DfTMZtaxnJSakiEQWUopJVmygnDXF7dcRCApGupcSZHjbShrD4bQzpNYmEeMZVdQ6ciUPBsR",
  "key9": "5eqKNjUzqrN5fuDghVxzqBAm8DTi8jXNxtHjnReYJGt71JcjNGidbk2D7Ywa5qSmyCVfcobmWok1G6Fcwa4DuucD",
  "key10": "QQ8SxYqaZRmE9HoQYguvPqPfNTwqMLJ8GdxiASJe3BEn4nC5THtNfMaWz8KsjHRiFvKDk6Nm2PaHxjB8Ruoopnq",
  "key11": "55EtZjrxQX1FxUeQq2KqBYmQBvRJrL6QUwoC2egXPTVWrBLTk71yNqGx15TYk5Aj3ApEyrnZwDMUr2Pjt3nDoU1T",
  "key12": "28mD4kS2DfR3Rr9kF7d9ckrdcZz3QUVTHYbvLJsiejcsSCnFgEi6eaYSSmecbCBtzBZTNjt167GKLdZf8qwwV723",
  "key13": "vVsyqjArAyE4KF16bWEmCq6n7UCrYrNn4J5nWSUQw5q3AFo8u1Z7FmHu6UWzv5FR3dysxVoiS3uCBktJQ3Vjke6",
  "key14": "3MUrEpTokgvYaKuJU9QzyGWk16NSsyZ8v7RGuUCSgRLKwrZFru7LfYMqDHjhZTU7funLJmjyEDjKxPTEj2UKV72y",
  "key15": "3npamLcdh18ViuXZ16rnmDXhmj24cUaYvAi9yKJxfo11xLtyEva4teTPFY6vrtkVJa2xAh51Vi87Zdd2fGRgrnAi",
  "key16": "5d4q99ZwEtzwyKg8PxCGBa8vMixoGEZcj6Mxw93vNfcsawYpfCsWZVeFZRc7eMLRbmtoX2jVdJcQfLk3VGdHAi8g",
  "key17": "65Qdpyyy5phzz2bZwEBtra5PSdWVDYNQqHwdTtbzzBKCrPG9859ZBjm2RPpMb9mSteJWexPbuFVbKqnsj9rjjQ99",
  "key18": "Dypq17kUz5iCWVbqp5c96ywAVGfGjHxo2MJrVDEBD5218NCHh2tbKWS4C4x8BAvYWS1xGWHphQ7kX9CS7N7F23x",
  "key19": "573y47RnwUp1ovGc3KW8pnUQJv8c9ckkQgCDUQs2adQwQBcUDSzhe5NP2tr3pPpW4gxywSWL7oNzLDxS8WJtAFvz",
  "key20": "U2c3mC1B9MtTzUmjCxu8JMm13zGsMVYWbqFDSRhhV6PqVdGh1PJCjs1d4Ar4Rk168jVe27e3dyEX2kMnpdKoadP",
  "key21": "4vtZWqdcR1AF7M26PwgsvEp2dsEXk2muPZjU6D5pgfzZR27rXsp5tvAA9dyeu5ZVwujXfNsEY975fLT7mcrGXGYZ",
  "key22": "4GdsBuafLT5g1mRkNkVPu2CFiFPhnsaZTdrqQtyPM8Zg9DEwLs71qMshWTw2PyfmPwrKVPQnBvrcEzsi1K1Eoz6",
  "key23": "2FxPQTKBaTQ66NcnRDhRRUmqxREQYSWFEb6ARSqg3tHMPo5khUs9KUFhca6UuF61qvL8bitpVCs3GerQ6Fbyae7F",
  "key24": "4NsNekQ2SsERdDQGsvBV9dyxnzNkBEGXU1tahBdA8xzfN7gquzBaVjrjTbAaHEbDjJRMKo9VMNM6z3j4WDWHVP7a",
  "key25": "5jqstW18M1VouGuQWp4xXd2yRed3d95AasdT7qmFZSsYJWi24vuu3PZCBXBPcfH5EArqCGagPWcxbV18HE36cjHK",
  "key26": "52BfdCKKrGTn3J4j8DN5M19HWJ46YTNGu8AzRywZ8eHBh5TA1G1WPXkx2aHHCA4nX9AMtPtUmu2T64R44UefAfeC",
  "key27": "5JK9vbmQYYeUvQStxmz8AhLN4qq7fB9L9mFSpa9RLtUC7EnMM4EgF1sEPLiFdBCDZiYgxcnYUscNJJ3dgTEV2zU3",
  "key28": "3fh3Kx99zkev3CoY2Ecsb6unX7Dv4aiKug9di9G9AqLnqpbFsGKT5Z7d7BtBbG1BKmpUcZm4L23RXgupiZrcrH5n",
  "key29": "5QGV4CAP5e1EtXp3kxZp9Mc7ytkRaDkQYCHE3GeuyuzxgBwdehv6zEugPnvemuvktKXvxLy6e7RwtrnFPXE9H8Hp",
  "key30": "49gH6cSrubuhZm3FWpjuRA4PKZpGXFFtMBSpsss3QaR4EjQ5EAgdiNsNQ7zaLXkjfiCpq12P8AzQGxdqLWojCy8e",
  "key31": "5sEZuY86ZuZPfK7KU19cSPvfUn23yXSNwkHk6nuzngn92H4HPx3jKMKahraGd6QRwS1P6kLT274ymzpdccRUNuZU"
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
