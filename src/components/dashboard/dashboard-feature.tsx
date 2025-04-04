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
    "37m2f4mCxohnVLbVe5vPZwWxCuEU5B52J4uBN6pbjc1hVGjxz4gFchtRKv73YaNSs7G6RKUXGatnXQ6MthYPgWkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L3qwQuC4u5h6LSBwquywJ6ZmJVMZW91tVchhTkeKZBLoj73TXiYEjZkXttDmLM12A6r1s9xRJ8fNSCfmRcv1Ksq",
  "key1": "MD8tqrEAv8A4R5aM8LjbaDXsfHnm9VfwkmwCrqjetKgXSM92KTiwsKTg42sK6D1BbNNH2X4p1oBFkCXzVb4ryw3",
  "key2": "4rHrD3tTrG36oQEoFrnAG7jgnm4C2TDLRtKbDfcscwXsukDtD7vZfRvXpDATQtwj9fcbgmQM7gFnqyCMgeSact7Q",
  "key3": "4GdXzydTqUVPxES9Dib315xM46tkUb8tD9GtBrRW5qW1SAVYX3Md19K5znn99cEfwZfTC1NEKPBQxz6rTZTjytce",
  "key4": "3k4HoSDxNsyUhCb5QcQALFxu5RVjd5t1NkHAFh6jrXsTi3PDwufwC7PUFPrLV7HJwBgBQXd48aZ4M5yYSjY5itWP",
  "key5": "571vVAm5uRnaPgp2WKQ2txqE4cNWbwd91NAx8v1m5hAnfNr4tsatv3joA5BNRBWfeqp6RhVcF9e6JWhp8dQNNHuF",
  "key6": "37nsUn3Qwx6Zfm8ZuBvtfnBvSKdDwfQEtSrPisiGe85iZ8NAR7ZUNmdTVK1ByPcKmfwRD6XHWPYK87ARXf7nCzNi",
  "key7": "3MuuqXgPbHt7tTXqce838QuLUsw5j2XboScgEfUPaPVWCFSR8rveji12o44ZL9pKMWbJPDpEQh969RtnaMd4ZBN7",
  "key8": "aA9oz1iqSbHXqJ2VL1zGZEfCmBNXJguMQN7n15JC42fbtvyRCJAHK53di6z4yYUD2YmpDxUmRfn7nWigJ9o8C2R",
  "key9": "t1eDEZexWnp68JcieyfVuQsxiZNUDBgikVomkTqaCAUS2LifaNVbY4ida5x8KjaJqNd7ooA5pbpykU3gi7YULz4",
  "key10": "JQYs5g7feQCUezq4xWZx7Nf6tGWf2xNJC3R1T2fn8XDjAHbHvff5Art5FXftkyJHerc5Yt9v6UZNZWxb6BCqGf8",
  "key11": "4KgMSsfcr1V2CePUyhnEuiBpq8SjUBzCvtxWppdWQPHCzueCTtC333fFiTbet2XLDecMM3SJgYMKdczWwyW42TGd",
  "key12": "2qDTENeRfTgPYLAy6mGTMAZmTeSTnJwwoFrhxcrCardcrgJmwktxT7964AxxD2b2zS4ijYq5riehMwk6H3a68RYs",
  "key13": "4J7y3yi2FRcieNYqHMLkDjrRtBFFkEuxquDb6Ughod3ynh2EhGYU1nRHcmuGiqkDw2DxW2qoF6uoMosXdfouFWms",
  "key14": "3hsbmgbt8UB2g7s9Hi8jHgqxZesJLZxKg7njGj1tNuw7SsX7PENTMvqx4opzD5SHVGMzfDjr38QRzWKztWBgqAFB",
  "key15": "3UmgigWWeqpKzrxYoA5EkFQCy7okDTHCBmG8YhmBhT2daMZ22fKEXFyEVxH82CHC74iiMozhriFFXwuqbdHoDVLS",
  "key16": "3jHgGwJVhyeVVqwqbv2TuSTDPwrYWd2apww7fgdfN52XbMqnbFwDd4xAmrMiLK4xjwGzYFtPzDjQLGJLrJ1Mp76S",
  "key17": "5PVR3gFY3D4mhTPvh4JrbhjtFGsw7cGCWWnazirLjLL8ShqspDRXPCCxYk5HA11WoqMxpYX4jabG2p74FuGVcYKn",
  "key18": "55EXBSsiCnGZXCG7Ldhj4UFtiaSVrDAYxvyWVSnZFyQpsT3BNZcHkDMWCZcNZMqjvtmre837xKbCPgb3AB8YrDVa",
  "key19": "3EKuanVyqVdPWGHbg3F8H8iY7Z4tmt1GRBMM8JwkipkP4WTiYeoK6i11bVfhtzyK94JFZbaGGF4HfTdJgiDSPFiZ",
  "key20": "4yNU6g9ZJR2EwkgPf3uuqkA1PFg3Mr6qV1gxboRWDHbPbaqXc1agqV7DBFrH1t8zWYSWnrez8bT7tfs5txARYsbP",
  "key21": "4619gFrkZsJsiGRBVR4Bh46YNWEbW5Cst1e8JzvTgMRa385fuZ4z4ta1GGUH6uhxXbBZqzeAj5NBgbPEEpRBGncV",
  "key22": "4wpKTLzkdiCLx9KnxrCUbiqTAD2vMnz1paCfN53hSTo8CQLH4cYanE1hmcjj2VMoJN2sZb3RuyyM9KASsQwVsAMG",
  "key23": "3YKYnAYLxZdCdR79LiiNKrKhuDF4PC9Gt4VT2ppV9vA2veC3cPU4WPpFh9ACQvKrv5jWeNYRgAsKVY8ZupQizpmm",
  "key24": "3CmVvXieJRRby7rpCu2vD74rSr3GUCKEs3Xst85SDBZpgmPZMQEDMyoJjYSEKkJTNPfsqyJwZ5jCov5LyCG2hAgz",
  "key25": "2Hc4cnZTRvPpghAKsFWpJ7D7uBtWCb3v87SbwTg9kUFXNAaYzkEDVkTEnhUA2Pr1ekYr9v7KR2F1TF1HrWvVFukQ",
  "key26": "63dw16vcxrHjjTtARCqQfeYDUwJqg7bEBDBBq6r4c7TJpfuEhrdnj1Hckm8nTqbBHEGd71suMagKqcqsDrddq3dH",
  "key27": "5Ti7GvrJrnJfKsJwwYjth8nbtN5V8yNhdoeJJWZuySGrSupjxdRD8SXMEJBtKVs8RRLAXShdpKsun4yigvdVd61K",
  "key28": "cBAUhqykB1Fy2bzG9mPGoPbnkUuFBvR5SoFs8hnkfuA75Szz3vCpJ1YAWnn212b1peFDJMNLMd4DRZ7E6D1fQiv",
  "key29": "5tPrLx81MHEHhyoCTw1KcVuRZHykDwykYcW9HMGjFe1ubt4dwUc5TBmp5gq5F13erXvFeBZMRh8ccVQ6cFqthi1v",
  "key30": "22fRjxePqFvPuvdCpEcGqbx4wvmprVEh1xf28gaHBJV5WN5QCq4b4PRrR3arTtmnzHNKuJ7KyE7RqC1x67G3qWvP",
  "key31": "roz5LBRW1nkLdesFoSLR99meBF3MmE9Bgtt7tpoRV6HcEcWo2rmhpfxR7d5T4AjRMGwkm3ZPfH9uTUHXsab5WXr",
  "key32": "3AxMy8DV1SkV4CqhKbdfwxQfbZbM6TUMN9A8mWZzS9Y6TcdVUxZUKAbDBLqAiinoqsYayxxuskt5rnpcwbdXkPKd",
  "key33": "7eTFgE2y3nWFBV6LoJgTKUxsG7znR1LzpuH5KZ4HWpG5UyuiCpfKppmtzjXEsq8U1UJrhXZsL3KcoStwBUexdto",
  "key34": "3n9am4GViBQ9hDP3QXeKpWcry1Zg2Z58ouWvPnhFq1dBhYXngCiGGrJcJAcDLq1Z4KwERPdsU7ZPmnJ3cNtGKfJ1",
  "key35": "2YJRAFMr6y7dMn5gVF1wscFizGVfvhjiMduu4YGazQihHBn4pzYDBtU5AnCQYCjERbKLnnE2gVHrrmVrEEwqBkyz",
  "key36": "2GGxmF8gWWHusFS81Jwdevn3pEgKqg1TGsMBBjymya8SYLoYmNTky21fihWeo1eJjxWwfrB4qA9xQSuCPBxvdxM8",
  "key37": "3NEG2NfjSfEye7Xtrt3e3Wj7W9w1E6sqvHqEbWBmwCC1fXsqH2Qdn2MMUPBgSqoBJAxLGXgMuuY63KgYxytQq5db"
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
