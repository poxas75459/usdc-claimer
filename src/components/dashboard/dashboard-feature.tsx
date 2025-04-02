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
    "Un7Bstoo238gMSWWQU5CF5ymG3R9uFA78TBW1rxMg8H1SE2EkRNBe7o3Z3tYtoAEwT8JWTxgsmwiBRaTSHd9JVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WzdbTrF1WY4HNZ68nWVR3GtJdi1H9BcPZ2VJqcsMtrqAGg3dgJuGgqbBCPnhSRWHSREZEHgyHnAwe28ajirMhn6",
  "key1": "425hAScQHRwKY7idD5FBTiRmCjU8mKGBB3aNtgkGfqdLVoUce7wC9HcejVU1XTzzXgSGmppCPUAFeN1ytYYSbC2k",
  "key2": "4964u9rby39nLvjyLR2mhJNk1rjt826sg3MkYuLwArQmCZUJAkjgrSQxWZCmHo8ieVRvuuf8vEM5DX19uGqPhiNj",
  "key3": "3JBPJcPaC3f5tiMbcMCrZHwa1Y39EKL4sVWXW22JT35c3iq9BnntaBKjpFcxK7PUzEXfx6PynRk4YDiYJhM8UrAF",
  "key4": "4hYCc1L5RzUcgTpGPwUkxaiYvknjYUukvR9xYxFPa4MkeLz2BjBPLPYPVqQsTpG52q98wbzaHosVjYwXWuDZbywJ",
  "key5": "3TJWjCAUgSsyg6RkzN5tZRnUCx1P4o7spjrBBdx7Bj7F6pez7u3JwkkSYP58mz2wf2fhYJ573j8mnGt13hNbRj8Y",
  "key6": "4CkZ5S7kCr3oFiQiHHRwAAYAFBFepx7CbJT75kWtdRBWW6ZsRqXo3hV4JHkzCHqdH1VEemk1PXRGz5ntFrfAR7La",
  "key7": "SvUHiA35eNeZWRt39SQXagYPxefLZjGGdZmMn23sp8UGeGMTBbpxBPX6FhCTgrFvgCSwZdkrgyfsjXWj5bUDW3x",
  "key8": "mcH1KrNKVocdRzJzNFMXzjjPxm7t2r8XUoReU13z3uvepB473VvSjiT1LmmsKjejVVeQEzotTPHHQLF6vbtkirY",
  "key9": "mygSu1w6dNUJbfL5NsfEeua9vCLMGcLFUjdneitTjXjJV34CorgKAV53DbdGpBUDgDbJMmo5cGCns4QtfVWUUre",
  "key10": "4ZbXwMU5Z5vwiZpEsxAQjNT6YHQZyHjcP2NkqPkANYJdTL2a6GALuzRNBNDGMDxER8RPXpbNEb7Q3aY6j8BnxxNi",
  "key11": "318nP6rrxFZvsavcHzcFh3cDN7io6ykfUTEtjt2o2vA87VdPHYmYMCpEfwaE8KSW2Uq1iqAy4edCCc6dYY8SSXwB",
  "key12": "36Ha4N2eTqKbGUazkeYbPRTzQD5emZPBBY38QTouuAbyxyg6cBBwf9CnYooVcMFrkwY2xx9NvzgqRQ9dcj75vkUt",
  "key13": "3eh8kNfwGAyupRc3eZeQiW417iT4P5neViC5q929DMDjQT8DLCi97pHFuMgFLETfHDFp7UkXD87ZDmahLZhykCtR",
  "key14": "361x4C5MEoqNFFntL5wD4FS6crpkRe4BBGsEz5yq25jm9Bu6YsNDXemR6JZE1iybXNkN6q9H8zoJsxUGLYFi5vUu",
  "key15": "2NWDyeA1MRjacjKrMxgki5sm9omWKmbf1mGHxQiD22XtdUumKUmXw5SLtSKLNr9eFmJT6TpsNfBp4qBiJsk2Tw7",
  "key16": "2zGbJda1rmJgqgmH3NSmMex7p95QwwfmzJaJVzhhqtTqbsqfCx3KAQdhKNvkpS6bieCVcmCRGS3ohTtCipRsvJjB",
  "key17": "2EyKB7vbkdViR16SVTRbSFJ5oX52VhFCr8NLzvv5cgavdiKhtewrW1CCqNahmdRRv629a9xs95dAGUp6N1JbjTYZ",
  "key18": "3EQhjJDs8txEPYzRN6v218Kp13VpKcxGZARVSmXFrqFfAX6WsceMyiyR3SGApttg922ezN18J2kms5s6AJHzUUKr",
  "key19": "uAPwD34Cy7dxZi23CR8FepkCAWi75GoDXtjuXapS638LYxZSZuPU5GX6MZAUFedX3WhC73uhvFBhiZ2EBetp7Ao",
  "key20": "4A3S6LYFKKaLuFw4e4QVYBcCuho9HnWQPQNXmRaY22WZQzhjX6ganQ7GYmfejGfwhYAsg4AfqhJrUnFjMW4Vmx7m",
  "key21": "2AiT5ZJRf1ed5siaLnbhVdtPv8avswKyCFnkYscmhAE9PyzZ7YXw4VGWekHQB9gsmjBziMiMzpzJQLVNvh1FqpaW",
  "key22": "42rtR3ZYo2ovFZL1zx6EHzrG3kv1YawtSyWarRpVj2fudENEJJhE6P5sekZDPhDo9DrCm3iabEuCyQtg9WVjRSmg",
  "key23": "3DGuPTXjLcSD8CCmTAZnmcT3wCiPMvQZG6ZpFZznJrm9C74qG9iRqoKm94DmLk8JbjbZi83G1sweJqm3FuWS5AgC",
  "key24": "C5bFLBBCMzF3L9urJRkFszC63k8rn9w911KBh9mYsXCmH9q5WBP8wYjF1cxJxcyoAjzt4o59v9xo2R95KQvEzYv"
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
