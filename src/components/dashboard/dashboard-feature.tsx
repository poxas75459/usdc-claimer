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
    "3x6qmNviopY6BhqeQGZJiC1hA51XNJARQhhqz7PX7SmF2Z5syohAkoYCQz3inWvDafTm62yG9EBhPJrEUdJ8uAVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nY9oPsVgwvrwXKEm1V47QL6jMynN3zvrZ13DUXX7HndW2cD4Hk3VXgehFbVvmPLkFvkxZc7vXZA2sQnD6CKUuDH",
  "key1": "cyddLaezx2XkDwQzamEGGS1tZZgjbnwbnxvrZXUfQrtLNhb6XdBj5fVEPtqjoLRgmva4oMVqkdDfnn5PNeMC8Jz",
  "key2": "iLc5UBgBoWV28WAg6VieVAeBcvaJ42TYRqUnoFLRNCkNRPNU7o2SH7QSB6GRhbabspDEqfgt7MoD8zx6PDVrSPE",
  "key3": "2YcaYiqDgjdXdbwJduT6UBeNWQdc2bX4KDDRmunNvTK8nR9AmUHoDb6rC8SGnhCPm8rb3DfPrVSaGbezDNZ2Y8Af",
  "key4": "2BABSARonTowiu3QfhhV5cD5iLm5Zp3fdAotTGt5HLymVEk8ZQgPN51qUsXJdbuFg9uTVpNfYp1XJAv19AL3TsKg",
  "key5": "kSHMW9fu3QL8MAPFenLuNgH3qRPNSV3SW4jhJjjWDGAFZGqqUgoNEy7AHBSi32iUoQqnRiTdk8JLed6APbNzNi2",
  "key6": "67BQ9UzYHDwVpAat18M9udQySmMSoPNnLGR6iaXJ7ykhcsKxJTRmGB8DDeBccCoCfpVL4prpNsYuXgzBZ4htdGgQ",
  "key7": "5Z3byJz1VsjGQCRTV111a7LY8xk9R3JLxGStXUwwCCjUu7BZdhtA9xCmXGLWXjjU115YypNhKFBksmBAXiCZ2uA",
  "key8": "5oWGW1HLHP1YizxTiXCf7gVEJjJ6Wgb3pFJjnXG2D4U3rFq5i2hTqdTRKG6HNUBCNPQ6yphsqsikz3AgCFtZG3Cs",
  "key9": "128UDiFef8L1k6WxDMk5NydPBzJkiUvSbRWhsaNks2nPD7ZMPArZrCHbRKA48JMBdcofz76iDKHVQd539ytQFkSg",
  "key10": "52CGjSQrmAK1kHfjMkw5htKQLmequVQ2SpLCp6FTfceB8KNFW8KnftU5abMSYqn6UfMx6niDxJSHKDPfwrcfB2ao",
  "key11": "2HaqeU72qqRtNrxRTXWMQNu8xtEYbSCeDW6tkKTrBpfkZn4EMHi4SAAxBQ4o8VUDWAWdLB5kb2owt2XqUojLPeWi",
  "key12": "4ggL13sLkF3ZUtGKpHhHmKfn8zrmxUcASKiLpYu8i4yuXxabd5YAoU6HLLGUNUHQLo8WabV9tspZrHTpiVjbK2qQ",
  "key13": "3E9TzjDfggd3HkxjThgSeBYgGwgE3Mdqm5nhcTNq1Ppqs3NB2Q2ttPSUNHZHvsvtDriZLX2ZbtoMPbbgd2D58Bgh",
  "key14": "3iMpn6FLkcUuk9bApTRFApYwfs2a6Sv5xW9gkxQeSCyaEJi47MsoiWwMHD4zueyR2cpA3ti1mLiNxQPCXf4sTU7f",
  "key15": "4cA6zFhMQ8cgP6FjqsYRZHErTNczn6mw8DhzyqbcG5hdzNhJ6gUYwXXjvPDzdR37Mxt5jYjYpuJtrf2S8mGwqe6k",
  "key16": "5ksUdKuNtNSSBbtD5CtZ44mgRs92yD1tRSd1g4AM6NQg9d2o7Kpia6Zc551is4wDk1dwwsDcnKR84pCMesd3w7Ux",
  "key17": "2PqYmaHxmSTadCrPppLVLDuqxQEb5wCMCqWurgSXPmPrHgiwMCywY3uExpfVViMm1bf2pVrVDGa2oosDHf7YsU5T",
  "key18": "3n8fosM9ShLGnucRHH9ayeyf4A8Hzgq23eM35HSEuPDtW8VHvDCeEWT6w19hJG8TUDMctRcaEyp9bCgC6NnRChak",
  "key19": "5oaLjMZ5yR778gpp5Bi2QUF9TVvptxjTy6wZHCCrTVjrLxvqhS82nFJwXEucae6hSCdEpasnDotuyLRcNNpJGEkH",
  "key20": "27sdHSt8Npq43SBL4TyL5LXxYK25m3ChUbz6hXETftWftMP2kYHLq9L6eMy1XARRkZgBkXvq3qPFQtGUZvNTQkzW",
  "key21": "5Rp9T9Y8LyADYH8fLQ39Rnphnrqp2sqR5HjGS8HdFAce5A9NcC6tBd2pso89M1KpRm4zzJMbS9qzzUioLA6b8jdQ",
  "key22": "5fKSPwgJXp1EcKRgjMfNNH3rndk66PnDWhGP8LUBmtL5LR588JkQ5nueMaCsVBpY74zkiAb9TQd8Yk8TVNJT57JV",
  "key23": "3wZhJoUwGuWnax1h5xqKxPBNoeByRxbAzJAprPdmFe1m2QQSSTNF3HMwzBGgPx1qAi5mX3aCP8ZeaDCKvrx8GKZd",
  "key24": "2sJbaE3niaJJhD3XwmWUAEnxDBLTURfh4U4d1BeKq5HKuqJJ49cwxwih1gem8nfB21YxH6k5W4yRNTxJ9TGShDsm",
  "key25": "34XjAC4xU3Mem7o1MUGvRkQKVzKNCvMAt4Lb8xLpHdTbN1usr8isXa226cpP9GFtEzK7gY2tdstrYc7hckS1HtAb",
  "key26": "S2qJH4vc2piPKwRFySySgD1XtSqJLKV43DDYQZ1WDYQG5MZWAZGmhpELL5s5zVHBVM14uMqkMTYLhfTGkgDD76p",
  "key27": "4c1HHYKYxfiaGBv5557N2uTyvBQDnym6613VbcMTcpMbbdkeeSAy8Euj72o4zKuDVRFGwXTbGjFLHsT1nqwyV5cy",
  "key28": "4P9hKDembXJuYLY4w3Ywwrobxeii2KckMV65sf5VGTon8MXZQWbF9nXEcgvrziNJ8HnvpgCf9cF8ddnx8qn1ZpBi",
  "key29": "5Dp6ENMdujeDgegBP4aeUAJvDo8kSXVKmxbMM6nzkuSBN3WDCqruLdEofLyMW5FwYMvfBYJVmo5y19z8Ttrwnor5"
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
