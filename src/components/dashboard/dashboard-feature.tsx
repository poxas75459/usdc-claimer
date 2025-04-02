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
    "8vmztmJzikHJGAowRxNPA9kkJmLao6VQqJ3X5b9LWTL2uj68z9jGvkbp9HMXAUQTk3gxhnTq5ArTMUMPt86BL53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yG2499ZB1DFRT22vnnP6gaEwmFD64KAKnnq7A1xcjSh1MvFASQbPH9VKAavmrbcq5dJo981J36SXjcB6QT5b1M5",
  "key1": "AQQpxtpHTeV79F1jZhmqM6sbArW2K3CTshXFp25GS9ZLP5wjQUAa13tNKWFEhovDdNXRPWZfcsD6h6vwp3pEQsf",
  "key2": "5jMt2ZurDwVZ5i4ptdz43xHLtUNsbfuDj8nVoSYDaGAAeof9C6Ne6FQmnTJAcdsP52iBBc2yPLioRxeBp7zQgQGJ",
  "key3": "3qVw5QHHrMSmVH61TwfdVmBb3Wibt79EPn2VSXk4f3n6xtDgJwzVwvR1twtsepgYypfiH2K9Guv5g7D2J28dE9XQ",
  "key4": "3qxW1boBEnhBsYuhsLALBNd2L1SjMoZeYUN7HecnVaYGkZEVr3RgW5BLPctiSvBvBHiNWrDfND8eVSD4zjfM19Fc",
  "key5": "21GESS5U9BYGaLBw7bYSnMYxjQf9TEbYJ8YCUhUXEt54N21tMxLALzq5Ae4PX9udpYeBy4Y54dcafR1cbgFeva3X",
  "key6": "2p1Hbkfg3LvECrg1TTefagFVJmyL2DfPfuQV346UAXP3qDsA8MbqXmVTWAVcrCBvPLzmpA3urMCfXF9Pq6f9Ae2M",
  "key7": "2uHRnWdECepTBhaeHAWzyYGqmrdSBESpZUZptE2euqdtiydsjNoZfGQvu1kV8jX2rhys6Qg4GHR32Ht6jnFPzJkC",
  "key8": "3Nn9FAwei7hLZjzKYhkmdLrNCjmnpJigsfBU59ZHph8JytPmXtWbfgjbBCMw9CWA23WLsLh1P56Y2D9D1BNEWqh",
  "key9": "5PQ8baoFmfKg4CzqMopT7PYpFFTJiuM8n33Fh9Pp6aR5YzfDvbumH9qEyMYJ7k9nmJGqDGfdxA68dFbmc94kkQKd",
  "key10": "3fvYtnKUXFS37nmLwkwVQPVt1xeE6qE725AcB28xX4xNKF3qZE1RXVbpt1SsjbQN6DoL38g7N4YRTuTRFmSJd7BN",
  "key11": "4aXS1qtDbRc7SPHXVKmgRiGc7JF5RrhJg7zSrq7LeFeDmU7hxKrx89jdgSiUE4emnJb66jKyfRgA3ceL5zBqKR47",
  "key12": "3W6i2YzwX2Q79gk7rXHgnkhjHDm9pP6ZHLvGEcvcbSixeb2Gna9R43PTWEUk4XFPkMqyCFYx2mNtKNGN9w3Ggk6n",
  "key13": "5pedw9P54Ja5XvuSendgXgSXw9fw3dAQN411by1f4kVQPKUidNN5dp9p9soepvZ2nBiX5gwi2e1Mv53LCcdPtiK3",
  "key14": "2rjzaHE4w9tJqPmo1QGoBoaZqjHKenkPx9cs3iUZveTy8jSpmiBjeU8M9bk2jwjKbyjEqTfFjk75fiPkXaJh2Wef",
  "key15": "53Vk8EzJkQPA21vqKbK2kcDhhZGLaRPQ9VnX1AAVVenrBSMPWgNwapHR4X25vKqqxrToJeBdaT3AEeDzFnmuZrB",
  "key16": "8XuRZAR5BAe5LTGY3TEWYxqdYJS2WtZ9mU16KURBcP8asdPbtHZc4Cs1kHZGE2TLhfEVzE5z75NyZDRpjuSh7m6",
  "key17": "HMJ8boRtJ5YKBq1EFKFeNue1wPgabvxKruwuTn9XKmu4FMZ2G89e1LNEdVkqXWpFeiJSXKos2jPnqhFVQQJQU1a",
  "key18": "3pCMoZnJquaT4QZsk5Abq1PhQ5yqEZDCoyGbQC98QizuUVLZ3kVFPoyaxjFxibsfuBxXMoQRVAEsNQ18hG9wNRxg",
  "key19": "42PwxrUUzDL7hb9wVznht7jd4a4SCWs1t2ipzmoevWpUNv5b8mXrS6vQADhdC8D5aUKnG9LgqgMfPsroxDrdeJaC",
  "key20": "3UmWmjpLmTa2mkMvVDn7Z3ZcfXLbMXH215pWF5aN8Q1rQ5apy2YSwMKfpsCcCwSjsmi7JZF4uF5ucm1Nhthgrfha",
  "key21": "toWPr3kr2eStjYKVCNzBMrDgroXjn5YMzyh37euosQhZGTbUrDApziJY5U1jVvBuzB7RHSbD2Jx8hjPc42JCgwZ",
  "key22": "5GA1axhYWRCYbKBAWLnHkCNLVS8JoC3xRFd49mdggqZdPbJjzAR8kugr9rwACMEweqjUEmHJ12AP3zkcRvMxSq87",
  "key23": "CEJpQgYy3ix79qdpS8rRNcWW9jEztX1em1ZmBqZPDpskVinAq1P5D7aMWF3jmBwLSRrxomyW56ZsKTaZLFpNBp8",
  "key24": "4bRWfSmTnrN32E2WKswoZ2YN3spHPQNHdWFpwdJkcRRZQjvcKXA4AzaDtKPwLhJ5wF4bpJmZq54dTd84Jk1759bT",
  "key25": "3et95ayZUQhrRvisX1WrSCUyDDgfT84sMqDpPjyJb7edg2GL1B2CCzxhXjuFXKsbrq2o4BC8aLtbeZiLx1AQvd2d",
  "key26": "2aGyKF2TWivZ5EKK5sotMEd8oXLd6mQox4RLzdEt5EkoRePjBJvrVAFTsBtvszYiRwxE6h7oYxnHwbd4rz8GWkPL",
  "key27": "5G6q9JgrRzPF9KLzADBnSwPpiRfdtJExVibJSYPQ219nnFRYTPQXT8uMSoVT68o6zFdxqwcVzgFHtN2kZwgJnXiu",
  "key28": "2Pe3b9e2Rx5QQx7DzZKYx3b15ddUTRgHp7Mv7L1xMdGJhe9RVXcHQvsytN3dYaKz1MLPQwmw6XoANVCKQfuCJ3ks",
  "key29": "8XSXpheTLL5Lweoq5YivcNYM5fPPVUMEqb1ngZexFVvkyKZG9TmnkykeZLM1xpaGHnneJ3q4YuGYL3nTJWtubX9",
  "key30": "KxDto6FJ3zHSNNiVAWBq9YVzDuE5NJEakSvvPabmXLuoE9qcWNPDTEpYRz6vRBpQxaA9FEbvijCyH9TeBYtPnsv",
  "key31": "3721Rj3t8e5pd2U5ZuUoNxpv1PSjyiQLMDeGdcVCimAWa6wycV3ibHamvsusoWkzJs4YFC8RczYamUWWn5iMUAHP",
  "key32": "62MUtxzPEA6CvkwJ1hHAsncDrLR9iuY9JMbybBuLSMPfW1r5M4z5YZvRpp6kGReNnauDEpNsrooxwrHL3DFV3RZG",
  "key33": "1qtDXdKELwzMEbJBF4kTmJZDouTCQKADV5wHqCAaY631oUWV2qdocTnpH42t1gyuEdAiZmGYFf2N8jeAaTqxSh8",
  "key34": "5pzdQKSXgWN29xMhPXU65owhGnJoKN9bdV9Z6JjMuiktDxFYT2a9BWFRjHfgdiqFtvkC4fCYPVFNqtqukpUnJZjH",
  "key35": "3FR4tVazaZqz4b9uBULBwxhUBv18sTFXfWnzsjfsHWXU3Lqry6xKa8RQUCtpgBb4pqfHRd9HFdVa4dMSgUxNks6x",
  "key36": "3yGj2DjSFT9dZaUbgJoEA8sHi7fGHV4ZWU4QoybUa2SDyL7CoZGMb3hKn2Huf17NeVrP4U2zrXmcep6pY59rJWz7",
  "key37": "S37qbSRGpNNVp6K39SQ4BR1k3a9UYkgTPLxKjkTFg83EBkxhPjDun81ysDTdHeyTFLQrfNPJuMscJpywRoutkyG",
  "key38": "4hBUbCvctbwRyy83iDZLfMptcD8eesL5iGV1gqj9St3Cd7H8qpRu93jcf7cW87ErZ7Xv2SFBntB2VddvnNqiQ7us",
  "key39": "2d2jSbNAKsVAQFhFE9xqeEK22jeX1GrJa8kaQgAnksAt5VTTzs64ZGc2ykqAWtPikg1yQpZjqZGkeoD3dLcuSqZR",
  "key40": "5SCSgke24LrNFYTvemfTfxBYPbp53rgPAcE5VXp63mEowMUphwWY6XBbv17atpfhBBR2ppdCktD8voERcXV8CxZh",
  "key41": "iwgjocKqYXcpJfWPhJbZV6n7G3YL51QEruEQpqr2WyPQjwD8u6WrP9NZxqLxeEuCD3UJmRGa6ZFuAJK5BivAdXR",
  "key42": "asjpwTqGWJHm7W3HjEbtg8DsFEZKndzBYYxg27hu7WW68EPGnzoAtxmij17gehA5J5rK7FVuuitDzKiftPL8Z1J",
  "key43": "cDmcPdobL1yL3vAJSsxTULNLBarWiJBcqDTD3kEWfcS8N2BH5tWsFENaafsV8fnYD8x5WEbeTXCgSxytp5sZB73",
  "key44": "4dn8mWT5KLE1vqvYNj5BppJqKsPKNgwWcbUENNkXjuKoQPVrX1Fq7r8db2jEuDryw2NUYw6poY3NqggbJtGe5RLK",
  "key45": "67YP8MuyXnJNvHhU5wtftg5CEnxxwP5PdhwtXDjYeShjTEiCEduceJnArYHikW5bcmTunuJ3cgJ5CeQqGHSc1sa",
  "key46": "SubYFLT32tZVCnVUB36BKZwiW5c62Yf9bom31xUfn3RbDBKNVYxnPtorcrruxkQ4w6y2AAkx6QJBu8BYKpwL4Fx"
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
