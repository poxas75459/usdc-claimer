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
    "3QjqqDSU4uWosBextHY7Mh1tfCUut2kWZ7gdFaBDEzhi7T1Fe6Q4yfz24dGvt9KH9sEgkbRx8DLqeRgLg7vjNJ9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hEUmUUv6rw5GxpUpbXbd28VYizbLkjQhwpo3vDHzF3KM73Wifbb1t77iUjVgnaHcbCVd7Y1b3HUSp8eP5xy4mVU",
  "key1": "55oq73s3KKX3GJKJvgU2brnawY5bYELEbaDx9iyRLjyUKSkW1iEcmHExEYb6V8tWSMnbVBSm2mSfH6nQxkQRGL75",
  "key2": "5pfFR6CAb1c7rGiGD1Hz6E9Dh8QBq4RZ52p5SWiZw4Y61LNWMa4Quma11zwhZA3bm5U7F6dQfvwm2g6uC1uBrJC4",
  "key3": "AR22eEBuD377ppnF4J1cZJxb9uBBZGNXJGPQpGCW7XAVtSippjWT1WeSspbyEWYWMUHA9UyJySLnUJXRxHn61Hf",
  "key4": "Q78ZX2aoiZ6pw7kLZ5Q1QtjDYpDAc3SVUxQXPGR5XsnMVVGUSLSfgdarDfELXvooCZMWacuvEp2hcxbTqnJVCpw",
  "key5": "an9GbyBfTuB4P6go5FeywAsgDAN33fu2XTe7Jt4pmyPcLjFt9rK2T89ebAYRnnxpnV3uw8afghvWt5WukCv8GZd",
  "key6": "3TST9WGcaQZrhBxSQgAooPBSj5xcPqsDa7GpeEBaXFrKZPAhM9w7oTKLf9CXUhb67Sc3unLCTGTCHMwEaizs7H9J",
  "key7": "3ULNLCadjzK8j47ugzWoY7SDk2NjJWguMp5ci7KhvmTC2CcWodmDQwgya8KkJEt93f148EZHjXGUZb12FGLFsavd",
  "key8": "5mBwbodtVFUjr12BB3Qi9F75dt7ZbdZWBohBT7yeNWx6QAs32cZ3CRWhYaVY4mwVH1WD5pm9JsJkFSjbremCVsmQ",
  "key9": "5Qvc8Z4Kp2xHh34dctcRWNvA8EjixW8txUpVvmwDgmH5J3yVezMezTfFh9X5XPday5peyY2wfDWf47rx29EpjQFh",
  "key10": "CqmfFJpqywoo1xWLspSQxr5ZGi6xugFRM2WwK8r11HTZ4DfUFwN4ZyxNB2mEBrAEmvg4wGonQ3J1f5kVH57h8mD",
  "key11": "62v9m23a7SB7oHFEu88vELtmbvv4LniddzAd4MegcFNSejjrvDJUy3JatDUDcAMzJLUKZSPb9nCfqJt2pwhVx1Sy",
  "key12": "5nJDskcUmUapnp8cWHSqK5MfXX28W2S11zpcvzZDEGK1k2Ppda5zRwZygFNKWBkNQnjTnMurBgzX6Djki43pNJkG",
  "key13": "4EoutcEW2FH7uAg6KkEpxzsiTVuydi1sapLwRjtLp9UvbmrW6rpncCXr9NNJVQR1ELVPMFgtjbAtPYTFmRJWZKhe",
  "key14": "3tgYHCtjUaYKzkDQd4MMB1tdzDuCCWADM63ThqxYz6c9yo4cx3siThMgLiJYm5c83EnbB2JeALxzQwfPvFFBseRz",
  "key15": "5fQaYvU81GkuNrWopp9QuwAADMJC3baXiegXhHy8aBNLqfCD1w2ZEd7C4TbueEqPHEBTZvob6V3KchtRXnL5NGPW",
  "key16": "3v7htMZae779zjRDF2d38kvkXwsHRt4BeJG8mS768Vh8SbdL9kTKiEJ73npyPm4eFkCtgsNxkSNzcXy8fVWcfzZC",
  "key17": "5MR1njH9J1NQvg15X97AvGZZvK8wCXv431SX7BSuVegDVT6WuBAQf5pCccQHVCatuHxeG3KUAKyYSqrhkeFt1MFx",
  "key18": "2EJ6d2yKFJ5JQVsyk8NEYXQL7P21cAnQS8VUCApFT1bG9tWsTz21cvj6uVxCZhR4yfcniZTpVYxCU4QHcRnYCPfS",
  "key19": "62MSyUH2SYzejYUREyPSgQVewXYhtxuppWFXKLsAPU1gusdL9PhgMHzu9zZfdJDZuT97J7e1b6VRH8r4AoSydhsj",
  "key20": "2Urm58rSYZHCdiXhZBUFXVESX8yjzdc2RxdMe6RxWUwR5SgFhLQcmfKe9UG3LdNGxwkbySdUzvUqwEDXhofWDSZu",
  "key21": "5j1uXR4i9egKfkAWFYJ6bYjg9rPRCvxxCDV1FRL9E2gkL496xGAkLVBmfczYZhdhBrWqdKyp36q25Ho6QxhFULu2",
  "key22": "32VT8impXhAUrXnB9ftFcckzBzqQAEBKKFXySwwoKMWu88vou9Q9qY94TTkdN9i1BjBFsMAbrmaZaJYexkgR4kNN",
  "key23": "5oJAtwB4x317ur5eC5duZi5tRzRRhGCqGE9oXunK2MNEu6ePD45PH6DguKTQGm2WfoSueoJhDoAVC5JqQMxLoMkb",
  "key24": "3UTCsh4tpU2UVKcF1NJ8miqh6vLuaq9HPwBM9F7CMLE6X7KVxVjP3skr15WdD4SAPrWYgs6BxchXfd4bUYrnRZvm",
  "key25": "5AW5zaF71hs6XmvNRtooBvve7LYjyXMgPXKVNtJWLWwUA4bRP75SHCd7nsdtmKzrRr9ShvHeJaVEYjeHJ4WKa1M6",
  "key26": "4AaGZdnjSxU6qv4rJQ9ajXZALkq1KZu1ASTUjebh8cZ3iY12gNPjumsoMugFfX4FuqZbf8uG2a7LJxZ13tyqXCLT",
  "key27": "Y3aDoeD49W3vnFg3ebuTsgc2GDV5x8V9izHgZqiT8bhguKiU9wHwr9RurVQHbGATdc5MDihKuLZQAUwkF35KvUj",
  "key28": "4eBEVC7pCjP9v1LDjWn42Q5jWbVd1ELVa3xZ3UuX96K57nrPsaeEa25JJxCmLvNvCxBdxZVqL5KaQq3LP4M9oJLv",
  "key29": "4zYpdmNqcPxSxvVYv6LHymdQLkVXq4LqNVgfRZ6hACw9mXDBXyX955iksUPiUXrGgrreqqEGHGuxdedEwxifeJYF"
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
