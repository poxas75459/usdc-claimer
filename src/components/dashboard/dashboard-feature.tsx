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
    "2b8A49YBTy8pTFxyjC7Sr9ZeB1aoLzAQGFrmqtoAg7zZxyXtggSc7gjAN7kGNWVanzk8tEPw5eod1oUyCLCftZ6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y2S2kHNru2HjLjSX8CB2GHgvo8F5X9KAUEc5vLHrvMrPpStZjY4HAz5MKEAYQsRZ6dxVEJao9fphrcXPeji2ZGa",
  "key1": "4ahPJS9uez45ZgzBaTPuLUkL4Ny7XuZfP8MWNUfEXiLjDTcf5WvzTCRCgcautVhadqfxtTVv4g4c7nZv2RdWdDYA",
  "key2": "3yJAwjFjrqQMbudZkJaXwYwjSsGGxnGrL92MSTv1gvpi73QKJWLgUVY3skQCJ9t3r8RTtTbmJztn8PcbbDZZSae9",
  "key3": "4PExVVrKVMhNwymJD5h887xm3L9AW38BTCyadv69Fs9cceDLvcu6MNuGG3F2F2HVwUtJMC7sSNinCVQ8yt921hh5",
  "key4": "2KKnwoVsjdnGupmFVDfuqV3hgLhL5yiY6HafSTntR7kT4KiDBFZsmjdtx4xZ5vL9Z6EYp6cGdSdpxZjr23LZuVNr",
  "key5": "2Y5Kt61WmFUs56nEKZcUP55jdpCoZWqGr2rqueQKUzezdGKXF2wmMQ5mB248h9ief9W4ABL2RD8fw6FRKfCrnHxY",
  "key6": "2iYh4aooCcjMNaiUCcCrhpohSGgj46jHzebb3Nb84oWSpLaVcimLpKScDwCv2dnkJqH83BkGAjyAnhMBYup7Bced",
  "key7": "4JGKgnxeBcHhnnjdKEne5DpVcs1VSiCZfEJYnZgyMubMiYJbsKDe9ysmiQNFHCo98SqmAdGDSMw1bTZuge2NTkCC",
  "key8": "24CEhDeyY1p1yFwP5Z2qXvFnLKyG3rDSuDGhQNBx661BuC5DkcvP5i4WarmHsWp4ucG1ECD81RQzWU2pXVYL8frt",
  "key9": "5gSVrm5eYD8rqQwb96kiLE6y6w3odasHp7Snci8vnRTBtC183fT6trAt3W9gofXqJdBSTWBW3R28RWDuHq24X613",
  "key10": "5HzSr9hc8VCpMTDGXqwoJkgyV9tdcvBPUSZN3QJ9kqbbcJqzRQM6nUNdUo8jaBw9osiDFC4LPJBm36rSQZVqDoMo",
  "key11": "oS2HQ63pfAXTgtyGsgTEZt8Tre68J6rsm4NB5SdmesojZE3JnACctqbjEbFX8rtk7QjTp9Af7kwSP3xTnukGahY",
  "key12": "Qbs38ZQxnV1bzDsT3m4vTu6HYm7bwVRvYns1b699tvJffwi2edMgFCbf5Z8KMUKcWNizgPRAbvkaVjaoN8AcLoe",
  "key13": "35P4P1GV2cqU1i38GkqSnUvVqeB4xwagGVXeEyYWucq7CpufFYPFusCqc5mZ1ByhqjyfZ8PPQyaVnSfu9VhyZmCj",
  "key14": "4EydUjKp4AueukGYg7NB6fRSQNKhcH17hjJyyP5ut5WXZ1J9z9tZkUcVizXPUtGr16qVxZqFMzu5MqgeFgeq7VtY",
  "key15": "63AtwCtxLU55H4gRjhZPRw8mJ5n632Ve5yiridW5vXPi92c3ESCcn67fSZuHP68G37YHZrZWQ5abigYGSXHb5UMe",
  "key16": "3RxE581djieAMbdrTuxsj2A8NHGcypQfWjA5T6rqYtdeACqDiH6tgrs7n9BpN5o1JnSqrZTnbMVdBsh7QFf3zZSn",
  "key17": "5kes1C3JiyXQ9BFCfBDggGh3SvzBUm7jx1xaq1uBgbTUkhyN3XWgBGK2ZdU3kor7qEmLoYpXKa3WP95n5QdwmZoW",
  "key18": "2ZgrsDDggXGBQdcU68sZpnQR53wSzBG7kF9pHMwE6sLSAedNoeS2zmGohSaGLr85ahYimoa2FButEex7CXwQ1XTK",
  "key19": "3HJ8JZmkLUWw9bSYyfZU7paWyQ63tnq4Hjs4feue3gxS5u5gJ1Cvj2pMZ8VcMG2VNuKgHT8WTugwjuzcZQHWHZcJ",
  "key20": "4rrrmFrNRBoqAesVifjnz4q3JNnuWUwwnpcNBay9HkZnNowE5KgYmwwjWBvaYGvudAmrsUWjBGxLwBSA96qSAEwL",
  "key21": "3H8GjZEecKNpQsNgenyKVryUgpH6BcJ21BifJb6cbbpKUX2Pq3QkKbAVtfPYcomdv51rA221A32NBGqUpox3Zbav",
  "key22": "235keg2s8FwfNVtEpJ8JX4nsGu8aoruHY7oYwK1grhG9ZcY1jupRPSN21L4sQYGvKfAdguwXh3ApxxxohX7RZH3e",
  "key23": "3DrcGfRHfW4K3nDEVstsZBRZ8xrmUx8bQitBZrmVApZeBBNxdKB4mpzmfsh3vqBdB4x5jfyCo2Vy9eBWDVbx5FHx",
  "key24": "22azDnjSj94fv4nAUWM4eabENTrYwcupFiKM96g1czdhU18grDFFEm5juyzjxFrcd71kS62PT9i7TjE44DRBWaPJ",
  "key25": "4pj5qbk6CZY6CRcLJ7yW3UjTYZXRYk6GpYaZSDkxRR5R2LL9JCeifGaVVg2Wh5BQw8bo6zwQT8HQ8n9LceyzHYEy",
  "key26": "3Aad3fEBEE2QVRMfjU6P79WCjCEkcZ9CvqRgT2SiB1SQXmUFkgMWYNpVUmYNN46kx4yBjCQMWddDhSPfKneNAyuD",
  "key27": "4J5SeuZ1V4aULdJj2CoUynbGSgMUQnHURra5zVQQ3b1QV7PTB5MghEAG984YS4Mh5Umrj5tQri6jR3hkAKYFcb6f",
  "key28": "62j3Vh2sWvqiv33NqVZpWpcggs2PJVEWBkMEBGY3tMkKV5vm5RTRZmsppe87AYZtK8s8YQ2nuBhJPaDikxKXuyq1",
  "key29": "62pCe5Np2q18yTWobjmzC6LiAiqjxgpeLfzzW3S5FWV61BE6PkdtxBeu4bMCYyGfLYEBHbs6fJmb3P8Gqp5TjvQk",
  "key30": "4TS9N1yKhSUjAbzdjqUR9KfLaGUEgeRjrgB3pFftnhxWSLdxmbzGWqdMix1DpwFbsbHbX1bazNUy9LsopcGu6BUB",
  "key31": "52CC3piFAFk7jSm6DWJus1rZpNvdC1Le6H4jNp58eYQ1a5j95RbVpThdYpMWav9nM9gs6ALi6msRFwfm9AdYZFrT",
  "key32": "61W3qKS2L9ahYjp8fESwAYm37Xoqrg2MsYL7pK1cdacjN65QGjsqprxQmHsJj3bSreVBrarzLbZy88qQq6UaDhsA",
  "key33": "2oWRAjM41YcyxMfQYS8YAX2tJu5YY9PgKjcXHbpFDkwcegukrREmd3vZ1akdVA7cmkKgtrnWBgNMgpsUnbGZt1hG",
  "key34": "4hoyAXedm3kHMuDaex1CyJhEEpjgdkfueB8DguaRmGKPuNLjW3HVxCGV8jgFw7cbxXz7i4JRnjJvhzujAB3DPCKX",
  "key35": "3izNFXFYoTdKAikMTnKMFVacBk4qrXCz5hLdgHA2exoQvMiFUewhjkt8wGJ8FfBheyt2SbbMkamp4tvSMoKeRxXs",
  "key36": "2sTMFjkk3W4QBaieAj2tMAcuTwqsjvLUmHForRa9C737FhKrCPzJhjAowNNXJw1gRYXdL2qMzTvdQsAUzu5oF4UF",
  "key37": "5soRAFLhBGcjW4M1qGnYqKpHoe7PJbtgw4iSrKTJ7uv463DgdcdufnnTfde5fAnXBkrRHW4Vzf2NTQTJCruoCPyU",
  "key38": "5YN6eQRG6AEkfL9qRhaCvXgwJk35QHD4meS549Ly1buHFxQUbtc1d4sk4RpJAe7vBmCjtoBPGbpXZxHJFV367tZa",
  "key39": "24QqzQm2RJRjJkdAMZS3Xew2hdruhQnodMdxhiTxjHGtS52mb4FVaa5jb93JgqC6bh8n47VCkvLrgcQ7NkeELWpJ",
  "key40": "3zxKqoYiZkHpLwPZGqMF9Xgio737dL7PSvGLa4thQqXT1v2arZju1TSJrLAKtHmzzszGMy6UZXzXNdNiJ9NhftVb",
  "key41": "3HMtsFTSXsHTYLs3dBLqcLVkMGHZ5p4Tvfw92XMG4dv1cvP6hKYaFTua6AqAqf9NtvUduNJ5WCYAN5hfGX2hbjGA",
  "key42": "RRGanMdqZWxXFeKGsJ1YrWA1gThGjXHV5dHi2hnVs51XSaRKzsQsCnzjeLpyVMfNejgABvEsAAR976T7B9Qiqr8",
  "key43": "38EmMcraonc7GUFqHTD291VoqU95RjVqgh9YEkX7MSvJpU34qWs9Hu4xV3mJ7E1o9q7mZ5BBtoAuY5dGyidNHGuN",
  "key44": "5SjFR1Mt5DbLRQX3Sb288EwU9d7LNR4nDr9uXkQBa2o83tdJVKAn14atQ9qramWW5aspfaofgHmPRFCXivhQ53oF",
  "key45": "tbsn5jY2GDW1722gwFB97mymAWTDkUqYsrAFbE5vtEg1mn4gB7ejShadnU8PqWeU4VGfmgwYpQ5oQc81yo4mULM"
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
