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
    "2ato5XRZcTbLmwKaWqqsuzjkA2moJs8aAHXdcTFX8d97Xrmdi33TvUScQ22y9LoYf1a9yJsaN92sKNjRPUQ9DVSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wXch4VHXCAT6D7qtSPKibCgghMRbBBRzsS1S8XAJ71tzQDmM1EXqNAofqJxW3yY1W6LTZEPuLd1KLuF578Y7UNj",
  "key1": "sYDqbXnGyCidDacpNxLhhuoK3vygAKAtdwpiAZ5pu91Qn4f27qS7XimAW9zW3YqyUtgSEwZ6pawEFDZdTubrrip",
  "key2": "5ecQpzsLieFXDrCmRJ19BmkxcWtS9NAM6ZFBnuFWW1PfZq1aGQHedv5PxWhkUbPoWyYABWP5yHeBAKxjzAbijtJr",
  "key3": "4jL8fzzKC5nY98ryBRwFX2v7rZMQ2X4iQ7eFidkDm5tiX8XXwnKTj3peJfLNYYCAV4FH5zUgm56BybmQekjH1X2w",
  "key4": "35zo2bKXFuQssuAZKbnsqpbfmeTzxT1emgeP8nFXQMLw988mAFohFpjdjJEAZAgWGv4LasnGFtvSbVg4Sf3n4agt",
  "key5": "4kEqTSnf1SL2zRGGdFwDTyZpPZDmyxLVcnwEjDyHAygAaeFubvUmvRtje1R5KhNsBqNjTB5L4tda4AH789Lb68aG",
  "key6": "2jWZvuP32fW7cC4BQudsQHctdw7PsEorKYn7sPABLhf3Q9fo1jm8GTmk71XU55hgFWTuE8BVzMdaVT6cvMySFyrK",
  "key7": "54C9aaZRFenUhype7AV3xSYfFJQng5ynaeSpkHM948QtTThSba63bPLUmzU3t9FadbcmDuHGv1a8Jg5RCyfUR8Sb",
  "key8": "2W6qPcSvxsnYDvBjrqLdJandp9QNnxNmnvFpt1ii5bhPR4Q4EupRijJsNHNJCvFuMVXdbsnNfaCFTEpcA1CkPpJY",
  "key9": "ukdsxfAvJt9rV8JYN5pjeHmnizTBgsCyfAbtWKEzMkcn9mDX8AiHkzi7CC7cZPhKwpLBYhnQhXuz27ZgsNtEjf8",
  "key10": "3QM6yMp9EXfMUYK6mfRjnJVdcW7ctYgBToDrc8CyTwRT8SyGWBwWFApC8wbtcei7a5yoo5nF43VMukzMkDMVGYRF",
  "key11": "yHUtUMz7P6Jqzn4fwcSec1tu5SicqXsyYjh9QVNeCCFp6BnFkJieSZDDf1KXLGUn8jRwGiQ2xh2BVJRn25vxhSN",
  "key12": "Qqc1cQT1KFRWy9gkun2pyQWyw8SKQJhzMS352UGqpsasv85VYgMqy1Ko2hUEyjcr5MnqiBVt5K3eCDtwzPP2KJ8",
  "key13": "5F4aDJ6myARLJhvouRmH2BXiMo4QBaB5jTytZpesvdUWAPVRaS5mchhbFKEGa1yyb1xXMnjs38xi8nmkVqUWrFrD",
  "key14": "3MdhCb1sxdTZycM19vq4J315onJr9fuBUREMjvhkMH26q8MyKHPHQ6wS5VL46rBHVLm2VXKc6SH8cnf6msUcPYwb",
  "key15": "4FF1cricmKETbZJALaJM3w3YfAL1k9uFYrRBzPNvAsN87gNZyoLdroRZJo7AebG9uPgi3Z2QdhuekdTKVX4eEunt",
  "key16": "aZjSoo5ubruX3xuJB1c2wALpLuBWXfXLgC9MuEvkegwRbkNheo2riTxFEWY6HW7LRmJ9pAycoZvWPNuXoeGvbjb",
  "key17": "2pMZbWRfmpeUg5QfFCbrqMckEc5ybsFqENUisSKeWaVGmatcyBhDZzES5mH8J2crkzvcumXCZKCFiGCAYfuvoRUq",
  "key18": "yYLLknns6Dr63vBQsh9tts8uLD81wCwmjRFQCfjFnPZhbP5FAxJBbTAupQymcKH9YaKE6KPygG3j52oJyUPvUGT",
  "key19": "4PPzgHeQd27ohYAD8yr7ZdbyQRypDAohK5djZJaVtPqfC1AYQF7rHYNsYD4Epn5MozJk43osYQ2KGgS3BJ1PNt2n",
  "key20": "2UqCYFSbSE1GmfcEchinMgBxCEU2QUcGBSAT2mmDpuJCknj15zpiL1aNn34CFL3HnUa963Se2FUY1MkeQWB5yVbp",
  "key21": "vT1HoCrL1qTB68SUUemMYvs7bbVdzFKNPVH4pL68B977nuSCHWp1s9Q6Yhe39mJxYhFAVe3t5wzBSDnPnKm1pgt",
  "key22": "3RzLrbP3cotJWdvJ3oyTRrxdZ1DcW2yxfyY9AfPxDTo7ykcfdCPvgCr1Ld8RuysQc4GVV1mEZfTdXYHTRtBJ46NM",
  "key23": "48jAXAKFT8UpR9uNyVBByZJHb3e6BQwKMjMHVdyHXwWVLsednkRYJY8wQUtaQzuUzhVtJE665bExgtXn5rUv1RXo",
  "key24": "56Yk9q9NLprjyVsRYcfQthFcBZGiSQFF7ByqDjC1u7QbLBjL7voV8rjGXUG6zQ2FAyEaBzqw5o7eVaPSCJND1Js7",
  "key25": "5sJYaX4jJrveb2wMvhu92nAUpk8En7CBd3cNkgkG6vZYaV9XQ2zk9pKmYZr7kLCMyyp5Dg9PgjJiSCghGMT6t9RA",
  "key26": "272uEyCnQqqagjNocuWMqnJAUytaXsqu167CeBohN3YTmUerCD2LmEAbFGw8VLtstciJyBmBPMwWiengiZuXEuyx"
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
