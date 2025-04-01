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
    "366vaPP9NyQELegXz9FiDE3hxYzcpM3Yh6uu6Khbqcvu9m68j7AocGvjng6ee8jXoGZmT5FvsC5sMjTTfz2jwpGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UcXXcVc45ew45N5PdBcKiLVyKCwfyvWkYb7c83BBUzLatZKFPQBuDukDiUAjm1NmpnT4By3g11jDYG6cokV2Ymi",
  "key1": "21iD7oMKGW7hmfWFrbKMRTdnSqYedoRG7xhoUZHcNikFWyfBsQjPkCFnJCcp6DjxJfe1Bopk56k4zkQuwCtia3Ja",
  "key2": "4RaLt59iiTwdnNPDixzKDr2xwrXnfZUobb1haZiMj6JY955K4fNNbqxbG1D3uJ7qkpWMjJkE4tmgroomB6hf1Smo",
  "key3": "3BPWBKqZ2vf2kr3scPqGfSv9zYqNyTiXDvo7Eebz7PTSB9pRPxZRUBhbAdJfsfTh8tkSKRrpQkLpcWWdWWdGAm6F",
  "key4": "BDx4Btabaez43cXucMXZS3S4eTjgxBSxLN9FcdbvQX2ynxrKRyNYwffF8LDY161stYcV2BCJefT6jEHZ4BKECyV",
  "key5": "5URhN9Ga4zp1kCPhv5r9XeV6WJbYsvRQT7jtmKynpCAbtd3bSHxMM2vGMfFuXv3in6qjCnbC8BspMaibPYC5Srvi",
  "key6": "2q4p1jrPuD2qCAqzabTPV8E7QrHwjH2BCQ5tnRByGQ6LApACHWEgBtcbZNMgDTiWnCiQHn8fa1k4u2EZSrerQXU9",
  "key7": "258VWYcuJbNj8xx1yfkYx9oQWg3Y5ygRPbguwAtF9bZL1hbtpbF5ofQnciEqZDZ7g8sUBDve9rx2AU4a5QcMHJmY",
  "key8": "4ahN3cMVnpZRy3HQAo8L1ZAVjEYYZ5oWBGyyvozLGWv6EiXpECQKSyK43vARQBmDn9ZrBdeGxoxsKTP9eFKJfPQD",
  "key9": "4oP5226x1HnErWYw6L9j6wJxXcEXAZxCKTZm94er5mYRDro2o9U7zb8SbXkLuhHnv3wBiq5noKk9vQxmys9zjZav",
  "key10": "3YA2fiHwYB96sL3XFAwjZ3pVSNrF2qrZHk2tfH8g5vxUyRXC2F98Bv7KRsQoaC8hN8Cr8KD1co5mucYoEeDKesNJ",
  "key11": "3i64URyYJ8JcZM5egw8VJ8RnKqHeDr6hB9r7koX45M6xQRJbqT8A166RtisTW4Adokp1C9cmxa8pW4QEcBiiVUtG",
  "key12": "59Ec4wgxrSZ5K6omtf6w8kfyMdMxF9uVFBKkKhN98LuKCtXz21KGVyumiHGNE9CwdWB2CBFpFxrnqY7YSacS43Fa",
  "key13": "2RQrKzvqLh7QL6MCD25PFZUx4FzUTpkxUH5SYgoZ2e68MDhmCDjmRHBoSgtmS776i74rLMYQKbgERk2dDk6yAWXD",
  "key14": "ueTqQBSrRTGpH9m19HZXnhfSjFcUrFK2dTHjJcCkY5nHz9NQ5MHcLWjusbg16o4uPaXYR7UqMe5J2A65SkVnMeE",
  "key15": "2Vv9fjcgmn3QpoTJiZLzFGBtxxb2JzCbht1rKiR2U3GtTZuryyJdnYHCJMZ6cCdP8UPxzdK7AGvUGqCqf4hWyRj7",
  "key16": "22UTG4KL3sz6mtrjyKrejwurmN7GVBjG8ke3qbgJvuXXLkCdXJDbt4SqntkjNqCxvdfegPwXmo3c4TSRUs1AU8CW",
  "key17": "2K46GhNWNjkcCbNzpAHzNmt52ApHKLd146hcUtBjphEjSm461rkt6WriSzg8GEzhMAa3gaMtYeY9R51Hd3ZSgLZo",
  "key18": "gQboRnqeGRJ9zRHwYW5Ay3mWVwZ9zVF765rCgy5HwX69Ab5rQnF7M1TgJDQbXVDFVPwizsVGSMUAUWzFauG2zNn",
  "key19": "4Zvzcyg4myFd1A18LTkmySgAdwYTZX3jrXznKStiLMRg27jZkDyTLL6FCwxZgKDGo3MockgGK5EczteifPAAeTTr",
  "key20": "3zwJ7jppZu5i1LvLnC1y2oC3n2AtHCKB2ymsvKuzg2HSJsEJwvNrUivyFstHJc72viBmv7jD7oQ3qsMp7ZimbR4s",
  "key21": "45xwasQbkDwkV8X9X4FKyZMXU3moUdCozzaQH2w7tpPFUyeS1b2wYhnxSVhmBJJWin8vHSyR2fo92okAVDb8Dmmt",
  "key22": "2i6LTb2N13YeWWZdR1agoZ9vmKWMUtSaagKCB5cB6GVypx7ds4ts9ipiUtAxvUCCzvDtHNQkvcgZRDHFazox44g1",
  "key23": "5ZkKfNnuUQwF2JwgNvZ69WBhd5Khd4hFoLGWhtKziFh1ged1s6z88GBr66HV4USxPQNQ9eZYc6ZNnpGjoACadoh8",
  "key24": "4z9E5fvj7MRULZtLh9bM1B5AGtEyes8pKNLnib3EZ6e8RRb4jwQaKhtmLwVgXkumeBFDZWqwSQDmNHeGR2XCo37D",
  "key25": "21fFRny8wGbfXhz8Y9nrCBFu5sSvbkBSjmspkD8BjUcTuLCaUEpGGuY46b3Xg8LWsy7TddNU3ecwNNRq2EAD23Da",
  "key26": "m1vNL826qwDRBAr8hB92MbM6wBwq8gLK8JQrSW7455P2FjJVdA66etmDLnuzxsEY1fggYu8Fmare8CvCbD8juz9",
  "key27": "5bDYjeLzEqMrajCi4ErP4SVQ1jERY2W6jiLofqHNQYMg55n5YbYqH6tpAYJgvZd8sau8sihvGid1wwz5qWh9t9nc",
  "key28": "2SJpnXAQtf7B1FrotGhAQtRNKFTipBqkZDGsDnqffTGfttPBQs3bGcJmoEPJ8CLmCLseLcnHsVgSKsP2k9Njb3JT",
  "key29": "2o1DNztkEMbj9W1AZrqN4FvG9tQ9LwSAWXa73fVbG8SmJxEi9zhahZ72t4Mt1x3n9cms8FCGSfdpLJAA6fFv6ex5",
  "key30": "4KAkZPRq9viC7LXMWTXv1T86GFtTxjQmoJpzKiEWgMJ5z8Et9imsN6PivmQ8zFHZyJL2xEkbP9bsAUzabfTGCSZV",
  "key31": "3cMm26BkyDhjf9Fng1Vx2tfoHVXJSErLzLooJcYsmcMz7cUSr2bZ3m1MWtmWZ4sGgbwgQ5xsWHLxpmL8pzZiDPWo",
  "key32": "5FWuLYQ3GXpJfcV5WJhrDTUW1vrSnGprccjAy1x4Y8fP2sYFojFKnwvf7dXGivJU3aPXdhspMMYedSCTkQSEFUx9"
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
