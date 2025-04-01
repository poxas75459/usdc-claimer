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
    "2KwTGiLtQiJ9LzGXLo2M4YgGigtuurpbSdkFUDoQ6kHqCRgJ5dydLuH1w5cFK5WXZvGQ21kppCy6RFGTBAbhnyhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ReYwDWNNSL11T7SXbrUjocpVQFpABQdABj9BRHoFb6qquHzmbgToGCojYes6hAszBG9MjQK5hwk1p3qxjkyPJhX",
  "key1": "3DLRi3LJ55k9ni52ys8dkXPk7fA3JP8NELCb9bTJ5EqKoBvY9e5aUZaon8SVPJ4FmbAq4QXCYqGUSQQRb8gaY8cL",
  "key2": "yqwL9VqPS2qboQedHy71TU7RoodHpMq77622rdYhVNKgggsC9EjDVSNwVBhEKfjEXER3KsqDYRnmFnKFYqQjtXf",
  "key3": "3YJWQibUqzRWh7RDZEdZsdpvpqkQjUTF4EZsdkvRPpRGs72z2rRRmBdfHzmDR87WXu2hVhkKGmooG1AcvyVM8m5K",
  "key4": "5aB9noD9CyfspLZMUgW77MeQo6S5Js94UKPThMb1h7KdYhs8vdfWNQNM49h5aVg8AwvNdBS7Cp8wbftv7fLEvsSu",
  "key5": "2eW2VWyBiakqBvxB8b3x9bkVTHeWd5D2aLpt75LUKqXCe69pfA7mz1kQ728QRvwAEA3DKBKsomcZoWbMStDr8e2C",
  "key6": "64StgpDZieB9ocHYAjEPK1S7mJqCHTnT7Q4JFRKxbYEvvu5MNGx3HiZ2ZXKqdVWKE3TVBxzZRxUiSqcrYAdrGDo7",
  "key7": "2jBqicjKSa1YcHe8PCZ9eCftxdgXweS2i4YQiYeJHmgb9kHqhE2Y5dKSb6SPCMH4JjzRF5xj98yhrpfEzreiaa4v",
  "key8": "2WV4APruYydYwCA3eifTBFKdHye29NMgssVqGDLLmMXqmLPRp2USdHffpEPyETx5AL3UnXMerUWBZsoQ3s9ReuLo",
  "key9": "28Jz6uRv4371cmN2WDVovwKPuYwHBRhKomsnk5pDnKHXeZgaxKRdGqCzUYPnSMvKvqp7xrhafMtGbt1FkYxedHQ5",
  "key10": "3EhGWQ6VvtNe2Rq9cxB4yuK7wkZ8pmNeSS8NuqVVFgZxujFz2eAYuLLZJ6ytnkaoRnh8fmwibfxKkXffDTpzJFjt",
  "key11": "3rg2YFeB7qGMAbsJZdWRRPhLeF6H1fqsNo6nJPqB5TUa96PUjMxuPtT7mjBH92eNxUKnuPQp3TZSoknvSp2fcHvh",
  "key12": "5bSn8JAUQnuzPb7ahPJvzMb6Eca4S1TCqdMfwwiLSwQmu3HyDb2ZiuY2D1gAYEFxzqzbQYf1Um3wJjh15rybahZ",
  "key13": "2R4cMjpcraomL9Fq5oTA1MSBfz73Mitk4jWLAcS5jWdBj7Z3J2Ady5DgSiApYnvvx2Bwe5gfFKCEAMzDY39iSJxT",
  "key14": "5FBrB1YRGyZvXccGnhJmwWWctbfX26KRTAtRn4jCeeuNpjVtFSgfZvXUQVCHFipZmX9gbVLHGKQq6pBJfwiRsckm",
  "key15": "3wSiPmFMMMojvHmfpP4WeivCwzXjK9fzY9y3AHHjjhXw8V1PUN74Ux8S9N7yqxmdBf4Xee5LFeE3E4CbchoVmq4L",
  "key16": "3hTomNY5NxZ33U2gsPYaQR5XUBXxPquPuZLTBgeYo1iBDjU8Tpt62onKtyxMdKwg8j5iZ1RPpENFf2GotdPBwt3g",
  "key17": "3gGLsXCXHr4YnkwkthfH2N4Pbb5wgNMFniAhK8Hj5AB7BswMjkR3mDqoG9XcTrkTBXh68ERgzHeMWooyok9xAZ1z",
  "key18": "3QBaW9Mtor5nd9kXFbq4xALJxfu19usoHAvdshg29K98pF7PmXNix4pseAy7JXLhkaQbMvyCiGyMhWycqu8AFEN2",
  "key19": "63XqhXXYKQHJds7j5xGZN7iL14pL5dQWLxMu1VfPFVfjAUSrssyKGm9YRAhwoHA4JTPKZr5GubLBgcB6Ngn7cmqF",
  "key20": "5ipA8rbVUTX5TbN9m2E7vCvuZ2WBchwvXGUZpgs9DKoebqgDeToCQ2NwsHPpY3HzU6hYvSjysdNAq5PX1xk9bMyB",
  "key21": "5uDcw5HUbGcCk3rrGDgMxKsJ8S4mkzpqaU8C7aHSSyV6SYCAs9sv66FvZKXVf2xibFB6JjHWdvtFUixxUxRrZZ4t",
  "key22": "2fQxzmzREZFfJ7SNDiejyLj82xGTh6xc4XYNEmmRUyYSFTYDmnmHoLvofqz4MnFPLdMUy6uhT8vaozv3jMRxbQqJ",
  "key23": "BMiDsNDjf1SwykKKmyX6HPBiBvLVRVYa84pKJzp9o6jfuRkzG1n2bf1e4Go8dChRyZc2bU41BPPobReX7ppcipY",
  "key24": "VzkEDuevVMMdsCp8ZsJCrztAs8TuHZv4yFo328hA9ZkFLxTYeGTGBeLk8G6g4EGzyTv68d2Yx6kGEafbvZtPSCa",
  "key25": "46dZRkqw7FUwq2Q1m26nyqeuPvH2Scy5KD6peBFTHqURyzw9crRLhqg7mfzvqmv8MVwzQmFw7CjBR8u835D6Q1cs"
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
