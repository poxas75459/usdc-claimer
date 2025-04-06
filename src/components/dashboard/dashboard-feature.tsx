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
    "4rXwZzjniy3XczKj4yVX8mNkH3aTM3kHPRy1KeoydAsVDr9FBzf76V2njdmp3dc4qBz7Xr6vXiyvqfd1NZvyApa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67AGwqCQWaTeGrFfTF8Vk8pJKdz99Ax74MHbBrm8iRBJZJnKbHuq5TKiGsymaatu5weSsSW8mFrMdRwrNHfo3ftq",
  "key1": "2sz8FpyPijbPDoEc7oqCDFZsmfzm8JEJxSi5JTCWqNan64iL3ff8ZGBsoVhJN7i2RUpNqm5EEe2UhiLKcZ12LucY",
  "key2": "oXF5jSF9NoFUL2e11WydSvDZg6wSLnnrcTkEAwtZSGLgfY5uE8RYyGFdzAKLc6QEBh6A7HTF5SqUcG4aHekx5xS",
  "key3": "5TYLjEzYkeVp4zz2jfozBWPNK56dEVuYVi9SYfguhLMuTzGk9ehYxhU3Yt6LVRfhuFwXzTANeUFTXmzf7y11phcU",
  "key4": "5e7dPBbAH2w4FSMQgVSQDiWoo4DmSCCG7cNmhPQPtUM6tLNgVcHw1V1zmpawYh4gCbGEZc1nEGwZ71krdpuxYKkH",
  "key5": "3CTRBSMEqgvBmWzuRKKBs7ZfnunHQSBdk9ji9rB8bn13EpZLap5rEB2NS1oM4ix7iVd9K2Q4ApGazYhi2pL7RzWU",
  "key6": "2X8SQmYjYFS1xxiVXyLhz6nSHTfahipJapHsRqkRSiT1rJNYmf1nCt1PGMDr3kphCkUmyPCsPxNJFAgLo47H3BYD",
  "key7": "41ytLZR44P7znaCp14JLiSLKga94oDhqeaqhdyLnncVVtkmgCC14JcM3ApGBXDeuTrmMuCfkTJLwULiua9cBooT9",
  "key8": "bvzpGfZKSLTY5j5P8GLYf4gGrvmaekHWQurREnMyBjN4MJ37ugRhLmVhvyEUuNeEkKNBoFSikyZRB2DAebUp9iq",
  "key9": "RxAqWJFQx4Hxf9KTru2yzrCi84zSt2unsJPcFerewYmUvHxZWzBVJULvj3nixQhJpZat4q3WF226JaY9hJs4ySS",
  "key10": "oPaMKUo4gWXNKXZisTkjyyZV2JHhgPV7VhUoXqFc1obnamoWCzBZGPTkghtz6nMosVYMSrb57NwCfK6fzcca61E",
  "key11": "5yGgbohRnSeLXosZisB2KaxrnK1Fmh3TmNUL39yC7vYzUMAgFzihQtxaoLKXr2n1LQHRy8K71LEnU3E4Krhh9RUq",
  "key12": "4WhVHF4CwJLYuy6ZxJjAPJMrgwrXhEqmMTMXovRyyHQzVcPWv1cJMuSewy4DKyHLBwUkXsrkeGTekhzRoBP16Y5w",
  "key13": "2gDrdAQFzb7rFG9eihHT3Kug15ucR7pDAhyfPLRJn5xFZqZ8LyzakGAfw7JtHw1gehxw22NYEDeLqziQBM2LjMYJ",
  "key14": "2o3QERryKUDo1sLvrX7udxtjnrQtCU5kKne7D6uCUpQCEH4YQpucmw8Wz1WDsAbJWZnxAZcwitczK9qXwnFdzwRN",
  "key15": "2E7hE8JhkzdmxwrEwcYAuQKxtry1fEJpmBbE5hMkPVaj5UWpva5RRCLtCJwpWBMCLCjity8ksdntMBKrUjSHAZgJ",
  "key16": "4LK3GcYwH1qnEvppEsTjpHq63G4pW2egnaX8NBbf5fgTj7jCJSqn7q6GtJu5z5Ca1xdoCMwtNkYTrjW2U2D49LJQ",
  "key17": "3hZa5zCRHNN3znRicdW9mmzVWqmcecYbX4gRccmy2pUxcVfQpvDXt7jTE19s14QWj5hQHySLNSLSrmr2mpHj8pB6",
  "key18": "4mnThE2bGQB4cakoRuPJU2buuniqj1xyinVcHCGAmeDRiHdvESUc6vmeAKETzbrufC3taWe24ZJZkPXhmtQ4tMz8",
  "key19": "3w9hPt7dH2yRJMmvR3GCjFLsiPkat4rUYVc6qKyUxHUtqFFTNuyZ1CYDtKanEnny4sdvCfwB1L6PqoQHpYWJkT55",
  "key20": "4JCKX2FWxLL8jxxjg8gXgbZmtyAo2mvRK7XcyZWaTYcTBuhgiPnHEKC6LuTPExG9HdcKKLpP2K8M87Fx5R8cLPwr",
  "key21": "GYQSMK2A6oiMzxKJz6KY9tPRa4qx4fjsFbMTQYZp5fF5AVPbQfGJYykGWQtM9q5EMBK33BiQnvH7moqdczw131F",
  "key22": "32veoAA6epfhVym4nLREpL7LQTanyS2p4ERt6GddmuW3kwgrDa9r3CeERgBbYFReaM6y3QZ1yXTDDNMB6EtWmbAF",
  "key23": "3GHVj5hp5SVfXuFjMQASN6tJtv9XoAKdDL8XtSXPauBiHqL2JporBN5pc5Hcac3eqzEXoJqWLNjpGhH5dPnPUniG",
  "key24": "5q1K5jncvRfGbuDrfxBg2FJsguUgty4ANsXgMyQryKksuMuNQ4nkX1LRP3mJJ2ukwZJ6RRJKmhGjWn1JWuS72mvM",
  "key25": "WVGUtVyW61wiWxjdHRpEqbp2PRcuWupLu1HnvitAuNL6i4EJkTqu4YNNY8nSdrntiHBjVo7dJ3RGxkEC8pDTTXL",
  "key26": "3EwjyvRAunGtYhG29A7KRcrjxTaEk8vDMGMnNry3MdsCSofmjX9i48iGSXPPgNBGHoiRExyiGCpob3PsF7rDZ8Ge",
  "key27": "4KN262wAuWgy26bsKyqnkPNFx2RGEXDS7DjWeGhuySqHB4LuYUWYm7d8gZJQX3WJorowz2D7AudcpDFjxoFhVzpL",
  "key28": "3CFWsJtLemQZuBQzwb2cvyrS3GpgKnQ9NgBVa4UBsSdteqMEyp7k7LktXn5Qg2J6CQjMMCALsHggn1PSwNix62LN",
  "key29": "49ExztjdGWCrRvXufRJCDoEGCLTo5YfpAxp622bNcDMF9B1RQoy4NASSFLZgcYUEjYgbBQPbjJbDeYD2bnwJC1vc",
  "key30": "5qqfdGwqWQZP5kVqBWtzYhaPBrTUVCr1ddbois8ZUBtPvW4ZsYhC4dmzhwtoXVEBtBzCUZRseRqm83ouEQQKpZeV",
  "key31": "36eoNqJ4hCFqT2h1F4Sq8mVLSD2CHBmjaseS4FRMWPiNLjnjU3wFsWTD8FrQstsACGcomwTH5guHxMq9xNkLPxqK",
  "key32": "4FYRdRfaqHNtmtGoa66G4bZxbpBje6UbPDYN7hNkNWJMiEPnEPtAhjiquwb1xc4ksdgfSZLc412B9YFd2tGM5jUr",
  "key33": "3onxDRxptxm1zLca8b7G9KJLyrPy3UosnY8LDrJN6WFB3Mes3oRFvbfuSS19jFYQt8v7aPf8W9mFN6sxXKxHQ3j1",
  "key34": "42Nnw856aNzvE5utU3vFA5heNSXpYu8px8oRxooCBuRCfvWxXunJWLGSJr6nqxLWsg1yzi1jjNYsDRCYRcBhLagX",
  "key35": "3bF9y3nHbhdwZatGQxae4eSSerXMpLGZJfP9vDPnmGdvvDbFhyGxugrv37U1FskxCbQziGEvb3Qww6ZnUoKEs1se",
  "key36": "PSt6bQapVMgSK4rTDFTuwVXG7ZqfEZm5EQU6RCtuSCPYxhtHqwgJU18bnGiKzeYkwWaT4Sa9duyzK8v8HNPLJ1e"
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
