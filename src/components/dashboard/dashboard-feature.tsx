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
    "2EP4RDfgN4xgsNyqkTznmrju5J3Pq4AUhK3uGctYUKFCaAqrJwuX5eF4vUdqeVCvtaB7GauF4fvtXBXaR76ZgSea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aEm2hkk711NzvrNjASj8kEEyzLzUH8kAWypKKDGdjnrrKMLY42gSXPJXnDoKFzsgEXsUN4WgxZ5oDtCrWvDJJ3x",
  "key1": "4kXyNFaR9ocmpG6qVzkN8hheLApT73DZqJabksmmXYqbcvmRaizo4pAWLvizPrCw82xSyivpLahsmcP6novvMwJT",
  "key2": "5hbEEnBRCrDwCx8WsfJQMH4LxF7bUKhcsqQs1zCaJHncUdwoG81WR4dgxfAEMPR5Lzp27P1qySFfKQc1AMyGQdqj",
  "key3": "2cJGMNY5KVecDmrjW6v3GHsNstco8BGGxcbauVuFExp1ykAvpaTx7b5QXJwZ3j3Ex4PQ5byh3fAi68ruPcUerHFq",
  "key4": "65xhit54oNpvzcJa49q8MwceC2AE6Fom7gSJqcqURLPhV7vjrZCJy4H7yRG7ryqdHGbTfnYRmDKfHxWcRnbXrNmt",
  "key5": "4e7iCiVYxafciAxqwNtBYfbajMbp2iTFVqeuvG5SDXmnGCZcxXkgEhrMJNjLUK1MhAdVHhS2xGXCRj9CjAag6xHj",
  "key6": "3K5jKqnXoHvVNpxBYi87Qt7j7uAoxtSsYzmLbeG25dsc4UKq5sTEfN9tnoB1k1Tfv2KTjZnNDprQChxA7bHu144M",
  "key7": "2outynYaYmTLnbXJGBXzwLNVaz6TZBkdDMkQBYpUqXXgPcX8emAxof3swJoSWwBKyoMpnvQ5iq6mvxPfuDpCkkWn",
  "key8": "5Tj7BGeDgLjB7GPQ5a7o6eNsFsxgyjhpv1GfyGuQR25EV44hetNmVAqPCjbTUNeGJZPVsNKbZtJNxA2FuJBTsJo4",
  "key9": "5tP38yt4Y7X2scjzJUuzfoiUFfYg5HA9Cxc3xwYxYok33TykLA8PdQU2tCh5Xzi8hS7NQkugxbV7Mh2z6yrhYkHb",
  "key10": "4BboRNAF4mWzoZ1WN2vxZA9bz8JBRRXtiym4Lda5M8u4hU3P41PV5EnDKiZj4CH68HPSXdF1E2ZAdx5GUXCcPw1w",
  "key11": "387LydjnEv7EvmXMczd96CHGYxrXFBGqSjzxzC8HkuDeWpbje6ShTfDhk9CvDsjDuCnqUty4HfACxFiQHBTQdPBA",
  "key12": "3kQXxWiyo4PXYsXUoWZMD6oQW3VVAHnMqNqfS623sqpi6EygjWbBSivkNKpd33a4ANthee98E9L5Kfw3amMR382m",
  "key13": "4Nkjzp4v27PpYCxVc6spsEhRKotDF317s2KBYUDqNsL7JU4KwHS3aynBNYG32WRUMQBa7XZr5ZnG8vsd6pAUiSqw",
  "key14": "3WcrGq7pAX4otqciPyF9MijLnZ6mv75VK4NtRYv6m4Kyo4Tn6u1dDtwQzXwtPD2GRu9RhRE7U7gRaSSBTeqhrF3E",
  "key15": "3q4KuzUEd3435iJUp8HkVmbgAABh3TxtyAaCpyj4x5zMYH474qPGvv4MfQjQ6qL75eYxrWV5x4bzvsJdSfYXSEoV",
  "key16": "2ymTh7RWt6rRj6mE4WhVy1kfa3ad1RtXTHicCiQKcXXmpbSqePDgdHkAf1iJ8nNoWWkrMoAVqqLCbS2tEpQ3oy7G",
  "key17": "2RFNYxgMdfk2JoJKtfdJAvpuUTrmCTf7gGw5T5ZSWJtWa7K6n1ipzaMohpmnnkneGWC5bsM4PWyuZ1A3bE9YZHbo",
  "key18": "4irNVhXJUc1LtTMfgS9qonAmueafukEcEbA53PLTcbZNuWHhC9tmm8fyQNY3tSnvbQsYtEy3R2ehnLqnKbwsTGnS",
  "key19": "NeWbrLiM58gnvtMjatxA5sifaW7n7cdkQKjkqpQV8g59BQjWQp6hBEd1FokFiavTz5o8Uce4JqXoQsFKNZomjGR",
  "key20": "55PG3YrutL9nU5U5edTuphop7U3aSgVAo14ufHxTMwcixvGatsW9dZBhXFh8WqdvPXxESD8ATwnXPEdHrKUU2BHz",
  "key21": "2f5ABZP4u8h3ZnYDcE79yxPLSxQLcnLDMBbtnZ9RtKiTaR8jTfajucfJYwH7ff8SoKrVbTom11PiuvEQpUA5y2JP",
  "key22": "5MJgnaAa4zmoPtVVhkTv1EhJYgXT3pSqKbWtqe1TxeS9fmhdprbGcBUXS1rwpY2FiWEcDhQoeCen6p5iiDKBLvLa",
  "key23": "4DbB7CfjozaWGAzhC14GP6sJM2Qu8pgdXTWxkHRLPQGrQH7DAzAKrFeT7ycniWBCm4od6qTpcJUeDENAvAMSCCxJ",
  "key24": "2RcgdVRFZPayxaQUsueFWYkRveAWNqxq5NL6MRxFunkH11VpAM5WNJ4UrYJKRUqN6fmfnDR1RYdZkW5QMuFBg8dQ",
  "key25": "54VtkUEt2K28aTKJzhc3fYpceUKjZkzcqMVyehiXVHrTxbmi1wv6CvjBrxqo4MJg7mzGXeBBz5PJNbokgCL4GBFf",
  "key26": "5n6cApzWWgYQ1w87k3gnnKp26NEDZvs6hWatcauRegdBc6szwfhtSgfYrbc2U3THQMLGGBkQVy8PxUijX14SziP3",
  "key27": "5MxMdP6nsJ6As1erdX5KLdDhybd8Amrz9w6LSMydeGYXoESVVcfKYADBpaix4nRpBV9XJdV2P7Jgpgovy319yw7r",
  "key28": "8zTupFbVrKfoNBS8NkMMGkfqXh1KepfkSTEVCb7s3EfArvWBZFLT8u9mBcGF7rn1NYJRXEwDc3xTbTeKrsmd8TC",
  "key29": "5wHYstEEddfDAhJutvvFekKEpaQnTRdYZBS8mk7WKzvt9FRE17vWEwuGEE3MfUQDRsEX2YKpi5bFtw16v2ZRTbqm",
  "key30": "2ci3umWQnZB92h9yTEtmnXKFmNwZmfY7tZn4ynqsxiwTnhtK3Ln7VV11ADBUuHRrqRLVzrpnFBHZaUGW7xnbQtq5",
  "key31": "rqNeBdGtEWMkmrq9vFuT8JmSFZgTBwBQD8hmz33eaSzsCU4Cj8irCtpcSfBuiZeuPemf3VK6ngJjAqLZ65LFAbb",
  "key32": "4kD68stHztvyNsZw7W3KyMcGissjvQbVNdCGsyBQprUArPonkxyxiuxTvQ3qBRAkaFRmqoL6whPAZQr4o18qMvfs",
  "key33": "2FrVgGiq2tdTEvgMfX1dcAVKQd4YGqjB19oXhD2zEBxE4yv6WAwBMpmPG2suN4rm9rgTXaGD16rDCtDCzXv3ytMH",
  "key34": "29VFsaXdcgxggkAc5P7qksKFFhQwJuqWTq39vTmmWFgr2FNEyaFxxr48Rfh1PK9E8mX1cxrcVAieL4TZmsucuTcF",
  "key35": "LEoMYxuX8XRjLo2TkZGumYq6v73otrXdVDNShrzXsLSAnPDjmPuWNnTh47B33SVGmp2xsCsM9k95CYpR2KgwWEb",
  "key36": "wzcBW8cgHShGEWx1uru8jPjCF4WNtsHrBcKKrypDhn6T4R2NzhU7gN86WsgBtvweQRJQfFGtrcLs77hLAMmsne1"
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
