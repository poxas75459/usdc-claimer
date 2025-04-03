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
    "5Kn3mJxNp6boN8Co6qjtY2mH8vr1YxkUAw95vzycHUAtw2z3P8DQDQkXnsoMQNutiZdc5NhPaN5FBBMHUrrsBGrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i5ARwDAaQf85EjPW1fWb1SLYydJeuCqRpo1NiJV3rjooyofsuYjZU8Lr4HRM9hn3Y5Fqm2GmFtRJiHta7sLBX6",
  "key1": "2yPU6VksUTxbgBS8thiRHjaJsTzbqiaZRfRm3fZ17vwkwYHQsCeu1SVoz81whjgP1B8aLJW3JGHS6eCDD9SKfgNP",
  "key2": "pL3sXy5j69g9EZ27uutCpQqYfFVNqmNVSdt6upHQcAQwoEyYJrNE8AZx8y9L3Vw1j19hBvpzjTAEh38XhrWtXpP",
  "key3": "ocLtm85qqmyS8vpGhKj441KmLitdybyPaXgNXnKLCqyvRtboKRZCUCppHuDceTULzevzqhoTvzrG4ARPG458ac8",
  "key4": "5jo6Es1Z7GMjnBZJZoxTYLJXtWAEiAFop62MPXgXtxeXQTNzBB6BwLBUdtGF1Tzy2nnyfqDCJEKniXx1a88uzuGM",
  "key5": "5VEEUoZAvSGGS8d2yi754bw7dfoZMzGxrbqjkEgRbeMfTTxYczuC3juQud95VmU9zL9DXCmfWwWDDXiznhBZ2Ver",
  "key6": "5LoteD9hM2xHnfHDP1dXRouYHKGEGVSaZimwMbwTNPZcaBDaRtUWw6tBhsYazXXn3R8UNV8E69mmENDSZ4gqn6A9",
  "key7": "24fdBwR55FkfbzYvKXqG324wCEjEx6RdQe7ANWpxDBuY6j7aFXVrioDzA6TPS579oTHeMVv8eMRLruBRZjJapvdW",
  "key8": "HmQHgALcCVqoQxvH68v66PtizHpSMiVJeRBqXLAA5C8qAEexCHn3GsxW9aG4uTJLYGYW2DKnXbsbpfSzmJEDBQM",
  "key9": "5rGrBZkbZtUiV1gakyYMj18HL3uLsZzDNvS1RgJ7yU6mA5QsKDvXTwkY67tXw79fJ9znoyKimQJRKWRzPMu5zuqC",
  "key10": "4N6Ca51TkyZ4xfhuLDEDRbrkqPR75ZdBxhkHFb1GyqA7TfYr4moyW8jsgMoPS1jMYV8jpvG5DwNHVFNjvXbHYqVd",
  "key11": "2dBZPrXuEN1mHboVCghWUaSJhSSsjqM8sk3wrPKxszEsjgyqsuhMAuP5fEBYZcbgqmuPg998Y9ELsT87noXo7dvd",
  "key12": "4Rp3sqxKYXpTC9X3KJetHZCTqyFGfofysQoGSVxWa3HMfVHhbtAaqziXetWbdZ7ad6MN7mhgybSVSkJKXaq1ypup",
  "key13": "kE29YyyLCSmg16Z1ctfbBTnXNBGKBSTuYE3uRDxQpFcyHLR64VCktYDEj5wpzs1SUgeXn9P92SK8unicfNUdgfy",
  "key14": "4QCX6mYzfVCpcFDCKGgWBmCi6cXyvG17JNoaNjFH27bBqAYinr3N4K1Fdr82CvycHnJRZgJxfPj7cp1xbFn6sbvF",
  "key15": "5HqxZTDVcDqhE4mcx57LJz9iPkkcdnW78LdociBRQ5wz1HWBSWvHSKKSA6sP1PiQJvV9JnEuSe4SbYX6B2YcYuVS",
  "key16": "4FRwA34DFTbNFL39YJD7wR9nQjnnv681sz4PAD2ugFW4udfx9huLPZAKcVPBWG3SJvx8p4vGq78MZj4iNdXWDFes",
  "key17": "2akjqSZvGXX8GxZ3QeCpZWWhCJU82nCFDpB6735ULbVUmHcnwV9FYbPHNy1nCr4Smsi8nTm2HnNN1k3bbZckdXmp",
  "key18": "3UiFJy2tNxq2sBzQBus9z25U6v7uUvkhDVLRnn1Hqsm5KY3ESmwwF2uULsnCwBskobpDejuLsuvygWqcC9iFE5JR",
  "key19": "3BCPLHtGAgN49YEDDjVKuXk3xTEtQnLkNePjZ6KtVAKiZPaWRqtiAkGpgjb9HsMBKyqf4rdiJXmr9rVN6Ln4LQaD",
  "key20": "3wobPGmjPUwd5m32vL3S2TygohLFkPmRcya7LP8EuU1oRvHtqAPg91NFEtgQrvz8gMuDCeE2jjx7LKcodFGzP3Xz",
  "key21": "4KWZhbCLaAkyac62GGw7Ua5Yi8ezCLJz91hLjGcsdLyRhtxMQSuix3oY8Sdwd1EazyRRTiTDe8vDmPGwPaBuvF94",
  "key22": "56Gjwe1EA6VQqPCyuz1UTKdhJDYCVYwGNtx8KZEM1pQQtF3Wb72PV2CiLANd472xCRVhycEteoYJByCAkjqwteX8",
  "key23": "2adHLkQKmK5bTVjjiTwqWFP3hVRv8mHvzhXWAzFMP8Vs13xbUsCHXYVynQCweM6DnJxzNX3vJEBeLYMMPijQBv8w",
  "key24": "3ji7N5xDg6LoZAnrAhdjoNHGevDoi1goSPTmL7ozC1bgt5zR3jnXgnTP5G5SM924Urh9t7fi3B5Ko6Vh2zWsy54U",
  "key25": "3d9XxPFgL5MNWbJ3zLc9g9pZnBTWNmm4J1qbWGeUdLsHFQw46SH4CkmVE6tKafs1N3o7Cp9hoDw9ghXTPAoKo2wK"
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
