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
    "2dWePXvN4zSeUTgVbNSMRdWnjwoNVbHEdnLqAj1PXsFAXa3kVqGdYaEvihR4TEtrpSBpcPYMBFbY7eGuHV4ZjrVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ErZwnrLJy2iQPoC5bFwXFMUT5ohN63ngUpqzSgeU6qK2sMLf6psuksR5fuyiB45sCkdu9KNeiNBXFpgpxYvcdi",
  "key1": "s7bSTfSmPVJ5i4L1pv8u8vU2CNWELfwSVauFYk93J6Z1dnJb4bAzsFwHHr7o8EBzRYc5EvqiC6hXSZLp5udhqAn",
  "key2": "2trFhnqcYkcgNqmCEthSRxvB4gFVa6EGyLUvJhcBnUn3Rd5TntxvVDpu5NTBqKsx2cjkRedVSFbdbzkUudNY9t3G",
  "key3": "2bb4Js1kguNYYWBGKgyV9jUZPpM4GJpFvwxZ9yLfVEMcj6utymkgv1sn9aRLwV8zKL6v312GBFRyRdYHzzHZbz9F",
  "key4": "64YCYCHZu5dPrPR2vmSeoYBo7REFLXpcHcmHeNtFBNYrkt3ceKk7ehWdCpeyFSmEQMQeyKuCS9SCDMsu9kV5XbKH",
  "key5": "28jzUJ2ExoJcJKoKXDgmYB6ChoQ6TmJUKh3wWkddsPSmNoGJ6WQw3gvmqL9AHbur4EhcUNEZse2PmnbAXJKWvnGW",
  "key6": "5npNvB452rmcVcL3QHYjRA2xw1gbh1N6f5yej628ctVARct298vyeHZD4vpp9nBRh4XH4Jgpq7zLpGB62zjqJHrv",
  "key7": "2Mv1QAfk6ixiffo9u4DfpA9WXFTZtcAvp8QriVBV6KJ5YycJMcjyhSAm3pDjcfVob6geRfRaqniNCauUcoaAJpkx",
  "key8": "2hXPtCgJNMSbEe6BTsJDgDq16HfMXUmnzDGPM48gpQKXLhKGE9G3q9rmrsbs6Sz8nAUiBdL27Xiio5CQGJBmMafF",
  "key9": "2zWs3jiQgUBhrtqwKemvYfpTzx5oK6fuQT7WHmTRb2o44rTHdHeSJM1aQqiepz5zz85C8KqnS71CuQ7yaRyRpdzu",
  "key10": "3ZsrgAnZZssoNFUuL6r8mArJKc79De4T8meNAyA3oZErsSP1C8bQAWT75hExxJBGEhFWv1tZiken86LJizvaCbMT",
  "key11": "2j2LVLRs9SeY7k88iQfT3yShQr8wEMtun4FJuh75BRVtmAYZhPErPbnCxfJZVjTuVEE47RNR2G2qJVPXQp6VVdd8",
  "key12": "5HP8CZUCTHRxTx4xC5NS6fcvefsbceZEScB9tLGtFzM6TyfBxXJYRgZxwyfp4H2cqVC8TNdBSFoqPRTuh5mcxLyK",
  "key13": "2EawsQ1rzLnw5Rta5BXJN5L6fDHuMKmvVajHYiPkMyzyN1CZsp5zQGHFpGKKvCkwck3HGvXPQPKkB1P5JkafajHE",
  "key14": "5Yz5aY15bVyCepw4B1GRTE28ggM4awB1C9JmgsoPsQwyrPdCYkw6mHbD96TCrfu1CUi62QvR8WvYyP9zqBMGXW2A",
  "key15": "9TenMK6yEs9DaEmyzg6gjQfEBWhu4iPNicQ25PNcaCJBaq3qLKbaHwP2WQcSpTbHGx6THFjo5B1ekg3PTC1JT6Z",
  "key16": "MdHVUG6wqpRki4qaRAz3ee5AwFBS7k8hw62GJSSwAthwAVjsDxESuwZkF82Ym7VVxxwSN3CgRKcWn77NigmdJ3i",
  "key17": "2VEFuHCJS12c1irRAaqZHUBgqYiYGCE7GivgQWP2TDAP1vPyraJxXKvkzNXeJBBKBEjXoFZbMjafDHdNwHh6yekm",
  "key18": "2kD4b8jUH3SqzxsTW5y5AE8tcX3f5othTcHSfBirPP6LrCADo6tAqVGoA5gp4E8zVs8VXHVvMrkuMUiEYQe7MRaW",
  "key19": "2meJ2iowbuwvBrH6du7Mpr4yc5N7HJbjLA3GufucZpzVoLwsqQz37kY3Pcr4h9U88SMg6Fiug57Z8hVfyCNPUovg",
  "key20": "4YGBGWQtDLfBUY6LHvq478gLfRqp5psA4W7NDVYk2DpnGBvLTjUBxnK5YqeMXGdJyAzAqYn3G3Uu8Nof73NpV9hp",
  "key21": "3Tog5jyYViXze1v1utNcW4uwvNd24fuvRVPDLpDqWVdLGKNTC4L1vRzLEqNniiMkajU8Y2KJQx3ADoUs21JXpoHb",
  "key22": "2GMbsKN3SwopZfT39GLbreS8d7KtguYHNQKSGhQnkmNAQRQ1FVy2WzoAm7BdDLQcyDdBm2Rr318Gpt6HatLYm2Rf",
  "key23": "2zQJsUogTB63mAv77EzgC37TEPj4P6tZ5SruqhfMfKvC8VT7FY8yo57mRY7WgxVpXvPaVGQHMtpmSvRiSCAENJzg",
  "key24": "44TZXe1eW6USGLM1U3RheVffRuckurVRDvSYUP5yVvGbAVUCprVFju6UKQynNevCfrogPSFBybwCArMoVmKQsk6H",
  "key25": "58DKERerh7hyXJPX78DAtgLnTXfg3zYJC22s4xJw5ccb7GZniR54i54iSzRuBM17vZvC82LMRjPo8Lxr5JTjgrXM",
  "key26": "2BZrmajWzUbnhhQAtJECEP9ey3RK1nwmCE5rWcTZQP45QGv1z4JffRV1wNVx7B9FBqerxpnnr5GJcoyV1eavF4jw",
  "key27": "57uoRhkGtzkVocmVEdMxTbC1wQcmqhSnbVYxXvH4gdoDJNahbc3X9sFaF1HZgsrzUhbhgnusPaZ8YfBsSERdBxg3",
  "key28": "WYwxXrZoWLFphWeoi84mGS28hk8e5S3BXhMk84EbdKpThVC1A88iWj6qFD9vLnk6QbGTMrHNjEZVgKqfxtjYauD",
  "key29": "4nLtWHnfsW4UMG1hV66qXvQi4qCBw2AG9zBjNqqsB5Um5wvc9VKZYk3E9iCg6zmayGB78sKWXUiATuWWfqN8WmRn",
  "key30": "e3j634uQmmTNtFJhPAZg4N7JJgTcEKUEBjy66gQ4FftoDWGbcHr97gPiCiPWL2NQrpPp9yRfw2ia4zWjbM3ee2a",
  "key31": "niVSj5y4Apc2uqkhGq1YDmuLQeEJKtv81EzAT7U2q8v2JnvzgtTKFCvHXu8zYWbNaXctyTomHwHB7GDBMETFd8D",
  "key32": "4i5xgsp9vDHKpha46szqRL8aeFzVFiQ8cp14QrWJVMYZQpoZBuJq97MupD4f9orQiLy1x5qHjLFJiJjRnppjpYBv",
  "key33": "sHEfArbdwnvf1sX3quDQoHxbzKUJGHxdpL38SYVkM42nK6MNiNTXZoXewSVVe51GoxWbm7NjzqXeybUfL42VM6P",
  "key34": "2LKLDaPy6ze4c7LV4acfypeicg34Sxa6DSWRBSmBS5KugMw8HfqoYUrc2UdFqWA5Gfk3vY1o12EkcXxkbvx2YJTZ",
  "key35": "iDVFTarfELzdVkGVoVVkYhoU5FeKfUM3QuXQaLEP9wDa4LehKdJe8svYqYKPTXXS1Uro7u3Ty5R2eRsS65yV6mG",
  "key36": "2D3LevnhnPHsk8o2HByzTyMyMZSCNq9Z7o6s5xUvw5MCjwH6GLgAQKinjA76Md1U85iZoGvNSDVStd3WELCqk7zB",
  "key37": "49aF2QKfhPq4e29RmPFafDR3JUhhk8szeQFjBS54QwGFV99umBsDuqciELSLf9MhPMWfYj6LHKZo8Rm3NZmpKvA9",
  "key38": "G6VrRDrfh1n6EqAk2vize3D4a7Y4UpjofX5FGMs3j2zNThcscSZaPDNJywJgfcKbM4foGauLkG6WFtGfS3uc7YX",
  "key39": "3yg6iPfEHJRxzAYRrxQsqE2FUEJTLRYeNWJj3nJjHziCD1UdAE1YwKdAkN2FDYZtdE8ccPEcZU8UtUKygca4mmMg",
  "key40": "2vV2ZpuCtBtnHtULAe2wLNJnT57U7WBULB1AeoXg7trstatTdzeDrirj5mLR5bQVfNryhczCGRYjV9zU2ksfqjJo",
  "key41": "L8Hz4WeiojUtKAVnL4nC4dovba7q3599RGZw6QCbJagAScdGmqLZAjuT4XHHhtbCQ1srRjmB3fpVp3MqZKQptW1",
  "key42": "4KX1oGnjMVuGEB77M8BevDSmwx8XuFobt2P96McudEpaAsugC2uwBAibVsBqdk7H8sAwg3mabvmyHjrPXFj9qPT6",
  "key43": "2TFhU2hLz1BEb3Qgr7VXqDHy2kwQk4e4V5KULvoKLsuix8utXG7KhmQi7oAbjJ6qxYmiWgHdHh23d9nRxVmvh4e1",
  "key44": "9mjza5dRDip1hjN5exDU5MLmZc4VuLKYdgeKJLA9fzkBU3pUgPBHcGn9Mx4vTk8PQBNJkK7JXuhe8Axntkg55bJ",
  "key45": "5WNPz1JpEw63hXD4j6fsXmXe9ezMHoi2xEJ47QqXp8yvAsSANpzHxzTC5UCfGTAxbYHvBdEYhWTcqwYBYrYubABq",
  "key46": "2aMWENam3yrQuWfkoCCg5KTkxEHRC4fgEsBgMWFPNP1Qp6PybsKTCNVK1J3b1zmnJTQwLvj1eEFxFBfTjxrR65zm",
  "key47": "2CmzQDi36ots6xvA7GrByjNC45tfab9fhia2ThKSaY5iMfCmFSyfF7h8sPcGfWK4qrnNUiKF6FXBDjBmuCqEPgyT",
  "key48": "2N922WPPyA2qTgYMemZrYfXim6idfA2CcNEA3NKY3MKqjdBrgttEN9E6TGKjb3CXRwgxP1SHTf4L1PNTmwwixScZ"
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
