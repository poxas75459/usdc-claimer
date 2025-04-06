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
    "3HbRzcSLkw6Ez3stKsgYca3bV2tRRMygog6aHCsWq2dF7FnoeZRCGNeiCQ9uWJtgieSeZFGQxK6W5sCaXMU6dydg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rEXH8aTwBbVhXvQTZRDxWuyQ8gtRcrU7fkgbocz5LQrrRnPVLtw3B2Fo3LU1UGUpCUw9nVrqPiPMuepvPuQnCiz",
  "key1": "56RXDiwFjMTdk3bZZYWWJHMU1ZSiPDjmvVNHdupk6uBHbrxULXyUDh25d9DTV9CGeQ8SKZ4vBPytJEyDdp7JdHPp",
  "key2": "3NUYx1xXjjbtveBy5rSmvKjXnnVHikzCgMfsuWssWYzFNwLyQcFYaqK5cVqFF75VpyTWz97yrPUuXHjvBV4bSpoY",
  "key3": "5GmbGvdJsujbWMXLmNm8Gza6RmshVEQQv41Y7JrnTfp8CRV9gPfQygnr3zxnzqbCBT1GiLW3jjrLiUFKjCKM51wT",
  "key4": "2xgRZfXRUUMy16nEU8dPEQ6gpb8Ewkg2VDqC8Hwe8PBUayKq87fVZFnyBryzenwRG4b4X5xmNLn2nvn4YoZx8chT",
  "key5": "3XD1V29H7GgtLGNUhzhej19zresvYqSjaC9jopNGpM9ekX5CfgRkzXyjgouaNGJ9T41XDoYosvTq7uEqm3ixzxAV",
  "key6": "UfJgf2sUAsEE68b5EQFaKWYCWRPt2mX6sbktCxzGKyzYTK519a4H3jBPsPBfpb5QiJo9HiHMW2Cx5QHHWm1MwGP",
  "key7": "2aH3HQHDGHQ2r3CLagtGW8X91R4khWNvUpvJAp68Hg2FSogJV78SFYGjSehBxsYDMGRTqygFxWRzyVsGLmwMXiyo",
  "key8": "5DAEwXMzfTzx7aVvtgw8wMTuv4tJ7Q9QP12N13Hi6HrinJbRUNDdbRRy8nHcUePPNqb2pGKWfcNQHP8DjLb1Dfev",
  "key9": "3TMbs9VB3fbgeE5urNAxNpDti7UsBmgBaJCWD4LtqnSaRrQ1NCYA6Xfq5dv5TzVXepFiuiuhKp1n7qdmCXWCLp6g",
  "key10": "3QViaiY5izwmJD1WmJ2K3wFxeF3g3H4SVsypuTD3EL3SCPX7vN7i5RXDme6EvWFprSF7Mhd6ZrfiyUHraVTHut4s",
  "key11": "2ooMvZicSVZ7HbPYcoz58agy3ZAZd95HMa6b5dcaz8uF1m8ZSqFdYWM82FGWtGVNvZB95EEYVKKryZVvmHRhTvMG",
  "key12": "2SCM4UbLc3JjjWhdriD5ZKHxWTcDHgsaXzbZdPMWXj5Dnzdz5NoDbCbHRV8qwwDRZSzaXyaqS8zhHHwfnFU8anTA",
  "key13": "StejTtDWzHb3iCixbrtfS9dmUv8hiRaNFDZeVHiydMpV15ivHFr4tg6kuPf6VWVB6dKyHRe9nX9terbhX3Msdd4",
  "key14": "58kFBpWJKpdpWAhD6NHzxR26SivhbL2ug7kgSfaFQgPE4mLqqyx5o9J6MPW6QMP2dobSJxLf6o2V73UjSEbr8FsN",
  "key15": "2S17TjnJjy4qRbiijSb6AWPA6mSDxMkrUiHR54zUHgeyLZC2aqcACTtbzvhVymjtb1uB4p4pMh4si39kNv4qCy1b",
  "key16": "4uoYFZ3eGXv8bn6YP8t6iGDnWkUVHGR8JeCm2ufVLTU4ufbZcFyoNbpT8WhaRQkqB9ADpcgTAPrKFjahAoEz9vzy",
  "key17": "5DrUbbUgrDi6DDEjJdbwVLrBSdiHx9wk4JR88q8WHGY8VYV9ZmJQLUgoKHTmA7McUFvEqVEEjLbBwJDfMPYmEiMx",
  "key18": "4DbYSfXaw8t5Q5xZVtvyrWnag9ZehsTdFdLNpmzQBhPjcNTNZ6kzzh4Nzm9NyoLCo4xZt4fVy4x3916BUAFZnYZj",
  "key19": "Gqs1ojh9Wy25xppdCnShHGCspSt5qbgZDZDVQ3TykgZYF4uUnENjA9DGRmMQW1vyFE85wXXuJu9yYkPA6SNrCyM",
  "key20": "5J6SfcMayu2SMdZiqAiptBbePJuLXL2L27mpqz9bMBGMH9A7yYzyz2X9sv4FWua21vUKBB8dHkS67FSud93xbzMJ",
  "key21": "QL5XSPaUBUkWdq7th6A1DpSBLNiwHMMevEwZx8ZnZHnNXqou6HHT6dZeH9Kg621kK1rc3mLMWhByRxYuNi1LAc2",
  "key22": "dqsakWagQCoecDzeXnscGmGjCLzoXnt4pct1hojU9C8beoHC2qSM8HQ9GJT1taQpUXVqSNsfY5vudASCEyh35tY",
  "key23": "5jQP5Rhens2Pgqo21ngJpSzDK2jPuZNbRxSETV7pL55SSBcCPRyH4yBdHopyXf6w9RgrF9Lo8HWBfYuBhcEkhyzP",
  "key24": "3rAJYHXCi5Mph56R8sDeVUXA9YdScYgXGyuk7kJfSYwwUHjU7pVy7kMHdYpu2VYFQFEDV32vieyNcwP1rhCPdtia"
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
