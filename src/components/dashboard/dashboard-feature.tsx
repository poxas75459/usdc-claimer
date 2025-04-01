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
    "2PaBTNZ4eZGbWo1zu8VdrmrhCLZkg5Kk57tGKos7Ez86HnXoWkf911UFpcJAKxchP7anvyNtvVRBDAr8gYRguJ8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35vydYof3it2U6LG81rjpzCBKNYt3bphC5QJ9C1daY8gMQUtKcERBjWZVuN96QLmHQPpZs3N3ZYXjfYRdTyh54Bh",
  "key1": "ucDRdMg8zWSPdG3CJk7Mgx8Y6zaro7qYfD1gg1UjwKSM5H5QFCGrkyDaWLFoEsATrZLoAf2Ddn4iit66JKFufGU",
  "key2": "63g8erADCs1M7YhCCXjLo9gdCVg2UvFXnuGk3zMo1wLk5DUKKw1UhZXB9RPKEmyeHNvf3VUcHSJNgnUQL7W8LFqP",
  "key3": "4L1R2JHRXzx6pVVNUKLgXcqnwXz534xxMgjXSc1KF9n1AJKtw1NVMi9rj5WXZj77ELMNJjxrjDmqCaRyzB8LABWQ",
  "key4": "3G66FBtSNZPD31Pw2CkeoTzyjUs5E48b8DpQQmxGK4ouqp2SgaMBeZN1GySnzjYSJfdpS6nayt2mt7ge6F4Ww8m6",
  "key5": "4VYmVQsiHRAvXxKQz71ychMzH44zWGrWWEV6kSjRd3SZDxiwC81Y2YfZ4ZCm6XpR98GaP1rAC82pGWQiU8RLwn4c",
  "key6": "3SMDvEmgGxni45Wj1bmCc7ujDmo8Lm85JTNJrQzaYvCAoZztfnvC8jtTYLWynQMDDD1xcQEEHtVs8TBeXqUaUUYD",
  "key7": "FvLdikdED4ENR5ffLmZM1jYBkdCUT7N1A8JCDzdT4iKrbYi2wdeufedJtLVxBEzAjWqutKyWtNqpRZiteCSLxho",
  "key8": "JQzgJ2GPcKiBo5n79MGfE7QWq3b2rYRm6pgPKSPazXtFAyzY7Jny9cTxh8nsgsCVur3Pvix2pa788PQuSKFDCh1",
  "key9": "2rTuRCiHck9JEt43FTkLmaLRyLPpey59UVQwdD5ivuGSVw2s3SCo5pPoWPEMSwjEG9Zyfn8N5mbAWiunqA9nv8ox",
  "key10": "2D3FhRH5RC1edRqLF6nJAWzGfNJpGq2rPVhAP1TB1YTk3wbAXAGucEa7PpQbnWvi6UiDqxyHxaTMQF58u6FJLS83",
  "key11": "CUZfFZNCxBMVq2G3cNCHZvLRcWpDupxV3Vq7YPYccFUdCwARn5aAcNof5pyGAjG9E3oW6PjSzDbUWx8wzBVz9A4",
  "key12": "2wFvFJwBMBPSt7b4jjQWLNXyMK4VEpxBqJLG1cWkXCT6hL6WRhtpQk1BhTt2assJUsbEPM8bQ5PPgrpC1zBNq9yB",
  "key13": "2bcU184pXhPv71r3957huubwueeca1PuDxJEQDqoA7WS8rJsgn5NTy58kbnvowuwZLnqHtFAHqzL4zYv1o4PLz8U",
  "key14": "5brttZtAQyqCg6GVsfMbmw95Yfi72QY2rPi5jZvCUQ7mFuGczvPY5tkWF2nsXDbLHbMysnZ4EK8UfVBk4s3wGEGp",
  "key15": "3o1CHEiHhX9WJDM6QCFXUXjUrpj7YrtJP8c4VUs3ErGoo7ePch3rA7U287nv5da7BfS2qHu5XP5wrEBbBCoWWhTP",
  "key16": "4hGggzSPG8tCjbHNFVi1z4cLkqeTcBRRAC8d42Af7gH5UcGyPBGkWR54ga882rZiKsdy9UM8kq9fuKQBXHZtDQBi",
  "key17": "3hGt1yrSmVCAwhmWzVnLQXDbr6bxDS6CPDPcPq7Fco6gku7DgAWkr39JjqvGGHRvSgXKkEQG2mv8ARHMpW4VVFuq",
  "key18": "3qaq47NRbgbCqn4im5PpFjQYhf6ptmAqCgXgxFx3Pqm5pRGnB3f5LUPYxJZm3WEvb2Jmx1krATSRrxVEQdVhsBPk",
  "key19": "BXkb3MDmUhBUU4utxMyMcM8ygtYZGCaPEHRTbwQVTTSqu5XEfGBWNsWVZCKhPBN85B2YcyiWTzgoo1VProBHr8V",
  "key20": "65ito5sjzBgiKE3TuG22pm8VucpFypFWM5JhNACpfPqRLJRE3Y4r5dEwm7Mfb9V2eEXnL4rcnnxUUtJfqp2Pd5Rs",
  "key21": "5YoJLXYaGyUwaUkWinU3dS1JMJakAcuxpPaQUKm7S3MYgV6JigyuF4sKVWzan2fZoLAHm6Jb7HXzsD525EXo6u4E",
  "key22": "mSNNgUq3UotcUxUSKC3qn1D4WBa6SCFuinZgP1QKnTeVDZPbeuyn4pJKjV6Ko1mDu3EjTVS438WfzAYNowfB61C",
  "key23": "4acAMTjFYtuw95JCF4D7nqxT9tM6y5uhqajoFgybYDVpa7rrgwYtfMC8xCyskgpyLPAX1c7qHv1yaJWZyzsUouEe",
  "key24": "26VmF9apBfxFRnH5auS3P2FhppTA6KqsoA1zAmNQhmyVnedvUAV845CTgHo7UzmaTh2u7QRG9EmRC362bKDMbRAF",
  "key25": "66JE7Dadw5UhCkPJqieqpws4D2LdxYj5K2Vctcduw9EwxdXpE9bcRSpKtL2X2EeGNrqhYVjNkqKvSxKaP3sJgmon",
  "key26": "5CtmCrb3C5gsLyjrpmr5mJeD5nPSrndqurnb8Vjj6hkAwqF2YCBELCf5kWK84ubfwhmpWbSwATA1gsxJqr9vYbzp",
  "key27": "4p1v76hR5g7s2aDMicaSts3xxepK2rvagxtB6BRhkWt77e2grSaHg96x9vABrfrM9xyRULtYksaha55TZPQTheEy",
  "key28": "6DL5ZKSKiqn2YL7xdE5HtKS7EdsEybGZYa5z85zVfefmfhn4udnQKeUnee9d8SCUN9jGvRcx5EJZDfDJY24xmvB",
  "key29": "3EmXzPvfgkt1YDcC2tpAJ8gNesAaHR1kxdEeXYNi7x57wbde4pdgqQkiD2unoz7zM4BwA82T86vNWQP6N4hPYSxD",
  "key30": "36iFerk19oh5befvBTzGaWB4w8MVcpJpZD1ViQeuFAbWoVcZZzcqLjppGfhvAMQ62gm24xZVH2RyWx7CZGHYdxdM",
  "key31": "4ac7uwY5EH4VuwkYhRHfvzrULqvukio8t8JfjNpCrchrekvBtQQRX6LAZ3VWAtLUScx6mNmxJwwo2LKDgw9mW3jV",
  "key32": "Z2rUQNQns4avr7GJTf3JFzYM6NB83b7SmUP2CZ2bR44aqFzJ14p1pzXABXSyz1iuNqqDwbbegdNcbfTFkL4TqVb",
  "key33": "2keAQ1QtARgrbmdqGgKpfefNFBiLb77JoiLkgsa6jYKvQsJbchaEvJmpFBVq1X8iNqJs5APzfuzH4u6kRNmEQLKL"
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
