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
    "4DsbDuzWzRBJoXVzgyr9hKXVtgCmrxsJip2TcrcwA7YiCUe8JgzVeuduhZ7vYyfkCDoCAZRfnGHCDVguwWy9VB6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f6ryqnzFStiGKFgX6Coh1JWQGEhHGN2PKaC4Qm2kzeiHhsTtV6AgFBdLkSwiaKb8w8fNVfeniQAcvvvg9sSyDJV",
  "key1": "3g6iPUTy16oqokMGMnrG6NKg4G8FLHbKxXscmkHipPTh7Mw1fcTnCf5nmoaP6PRsWyMtq12XotPYY5zHY3mLpFr2",
  "key2": "iozxDnCSZXAWXtUcotoa51k3E6UjuoZEJvuf5o8LAimFQd6jTfLfD2Mc2PoHUCi9xkgZE5NaoZsFtYQhvNZCusT",
  "key3": "dz6WM6Za3B29UKrLw5M7k5qPGmfw6CkHai9ujZVjW1dYGQ81Nnb2FMeWLNu8wzhiGDnBFHsmG9q1eZYRRW7dwMX",
  "key4": "2bxB8VifFswLAqmpdbf2zEABnjLeg8guHz77xvJPJY2h2zEjBVNKTJyNhf1cgg34Kaja5VTW6NiAPz8QvTEzXk14",
  "key5": "4foRnVrj7TmJcuB4XoSFm56WWuK9tzfBxRcPLiNKGvuvq7aVo2c1xyXQu8zjUmEaJUH4zqaURTfAn4Nrw9DP27LD",
  "key6": "2syrisytnkuGijo3YRP3DdCLRgKqxSeFtfw1ryFic7a4ANvSW4Fjov1hgwMrULMRYWZV4sgdTEKcHXgV8mZi6f68",
  "key7": "3WMTU7Rg3bpKU3oMf4htcFjskXtuTDPaD7orMwsgSpEjLtWgqt3tPE3t3ZnwUvmkBKdZ4Cq6kXogkhEdw21XwG4e",
  "key8": "4njo44dugHpvN5Q7ms1xe8su4xPi6Nrn8G7GKPQhouWJtzQ5h5PjVnZhkY6BV1ekDKLuLzE453hEMdQTVUMzmHoR",
  "key9": "4Evm1uv2NKBhejSuGpjJQCQhtsfTYwZkSraCMRxjK2rYPht9272Yt1UY7AZBMJi69U1KTbq1LtmHQnbV7EjfoBn",
  "key10": "39yjUNLokuCcGTXpitBu2YXgpjGB7EpL2DLHZg9JVBoEjApCty2sSsfkPxNu13e2D2TPr4sSVDqxjTC1JGvwjnwh",
  "key11": "5AWGimtX7bu97o37v63BUwg9has5s5vpPQkHFAXzv3VuJ6yumFDyHMNyRW8icQv8tQneuMTUmm3dyMVecAAdtsQY",
  "key12": "2DEVD3GjMYjv2SHdr8tiEH3wozG6j2iEQSEmtuX4yahgRVuNBN6o4V7wur6kW5ePG9t6uDTxcZnWwqgCvbPtPUjW",
  "key13": "HT1vpvoCsWtb8gTyTaSXrtWcvTLxKiYUAaMXq8mkN6SbbaxhQbrAJcw1Jpp4c1Z4tJt4sdzsJ3pmgSRNjV8FtyZ",
  "key14": "56vSA8NejwSm2XHQtBnJCjsz82XbpKpUbG5GVgymAmwhBSTFfrFU3qimCMR6DQSm76zaDFY8HsCcQVx8DCQp6JEc",
  "key15": "G5n7YS7Sy7zdobbwHcdpffKG4wXGDWojhPJbPq77XjDZJ65tr9ahXEMmE8gWFj2d3BPTA2HvXaTQHTKu5sB4RcC",
  "key16": "4FKj1fjmdtDy9TWobyRz8zSsRxv64RDqqAYbvRGRsevH5BnbPWbrnfurbQdQNsQ4ZVokP7tXvaEeHwaMcTgtMNfy",
  "key17": "KdnEudETMQwfmxbbbjdVFE9oPyZRPpvnMDS6u55b5UhNedZHkME2cMKX3UztobVj9rYBSFQYKDTpc3n5QCizYTZ",
  "key18": "2R2CcsEoi1N3tNZvN4bTFXu3qB2MvUHf6N9yezYKNTapJHD9ZnyZMc7Y1W3g6TVtAyYqGFpNhiRM6qcBbgqaqLTc",
  "key19": "5EbMCPVvmYa6Do7gJTQjgz1oddWbynZ3wDT3MajFUAtxmwCD4ajep1yLxnLmqPFfe7yFKabD6Qfjba9yojCGCy1o",
  "key20": "2YNt9EXcE2EAQFfhnspiRcYPXc6ZjavMHTN6nSxYFCW3UDb5XNuoF8a8noK32p4M2BoaDCqEBreUadMF5AWfVJL2",
  "key21": "2zaNoJFKNrkmkGn7kwBSsawJWcBkkrBVvK4Hk1BnvHEKt5pFiKdNFpi28zYZRNQQgKtosJAHighSvYWc3kVo4ani",
  "key22": "3UjziEUhMr78ZgEL9ki8nzLaS94FL381qYwPcvinfbZmFMJLeg4i9qJYJj4HKW5kpjTLzLQtTmSA2QPTNdHuySur",
  "key23": "GF9yECf3ni2NanQXeCw545a34RUye3tfBsQbFWLKxa9Xj9Mh266NNJKG3guPLS3Bu4Zd3tXt5kzNnyjr2ho4pH6",
  "key24": "4qHZZgdamFp747mkUX3HNiPwgUVWHjTCD1akf7fCrnibshEKYND83H5brshf4MWADg65Y7ZsapVEPjAMDD62wKF2",
  "key25": "3sr4kAz46awhHMFWxeKp9fYKQkQ4b4tMLcygeD7nLHLtwyhCQj44maGcEs7QgHNKjaBcnoAfYXgH4NKEPLXxU79U",
  "key26": "61afAAZUyXBhawft5wRUDeBfu3u6PrW6pqLEJcRsib9AjREhzcbfwep6QeGStFgPPJmgP4gohnf5oR5cC2vBJLrM",
  "key27": "3zDiEb63uAt88hLmmrvsYUMq6Buwjqw7i2xpdm6nPowyuTexAMDTAZ2Bcb3vV5kESqp2WAiXYWmFj8Vs7Uc4nvn7",
  "key28": "5TuP5MKqoGJZ7ZLyEvFTMRUiwhx926pzvzHPaGGe4PFWdN9a84GjDU5rWaKmJEc8RjAwy9GcEUEDJB9Mf3p5fTfP",
  "key29": "54TWGeLHU8ewwUPxriv6QW2XiwSpsMx89HFC3nWSTrW97NqgdnBgHY7Zh9TtoPWrXVgJNtozEYgTE8Xs25ChkM45",
  "key30": "3zht9CMLahtZeUyVK9qN3ZukwfBVZSP8Az4cRM3vzZ6wPh4fHD7M9UVEbRy1D75MkzDb61iykekwS2at9Wj26KA2",
  "key31": "5YrVffcduqHdWJV4upC7QsviBXDTpwXWDJFntGVj5Tz2thwbohQpQ7yqvPxP5ESrSMCkmp5NNEbwR5U2MFquqaMT",
  "key32": "B4NgAiHjwQynRrjVu6VJFCts6yT852FRDVHtGsFb99w2c3RbB123xyENxJf56EB4YrCKGpseaGu3vuiP4Aop5ke",
  "key33": "2rxcQveci2g2ipAwrWVL864W1Mzqd2NHshMHLukUHyyAKGCXa3anWGnMZB5URxRn8cddCEc3nVjorp5mn68sots2",
  "key34": "EDC2rvHfAwkBn9BTefr2Smq3nH2tZn8rqt3gm2anoW5RKdZGUKJkVTD9U7NUXyYGC7i863PPAnP9gBYHVhTwmtR"
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
