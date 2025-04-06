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
    "4DtScjggPpwRbqmk7i9vN8QBnftxJAjSEVyP9xgwry57DVHPXDBsv6QgNmvPBuCGERWHTzh2kjxG9Eo9RMaARzsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pw2t9H9WBbH9ymPTcAzVN3zhp2S7bgiAKyU3nJ5g8MxjvKDu5FsNTeJ6hn7wXWNRyb5Ty1EDi6ELcAZWxu2sKKy",
  "key1": "61H3CQfpNeZ7ueomdxFrzui4GW5VmHLAFEGHmGWqnooWrWKtzsjvQQnAz8Q6dSPJVUc4oPgMHRQKze156AWnJbiK",
  "key2": "36HYJSMXQe6LGxGdaHjuzyCqCiYtCP7UMsThPDWWFprNZGZrcnuSEsv3ek9WXKXY23UavjCdM3ZEDYv1HCnCGqJH",
  "key3": "3gJZk3ybpJv6YPA6BoAcDCrVAmwNL4S8QbB3eTgemiYy5HiFp4gB3uFrc9hk4ab7XLXLeAMXosUVZihM2jk5Yvhr",
  "key4": "aX8TRky3vqdFtX2N4qZcXHYsTtHCosGJ72AMXR35afq2DURGzKvn9zvpXh7vjngCfYbhts9FcK1Vvp3ju3BH5d7",
  "key5": "5RfgS2Vo58ZREnki2EVA1xiwbJhf4hWMzU1d6eRw3onqJi37C2g18XhPb7W14ZWUTZqMrg4FvuRscvpY1tbeu2LH",
  "key6": "4on6zXLQ6SjJuXCmhb1fKjAKNwWixB5dzGXxyQqbudhyR6z4zhw2Y5cAv96Sndo3UMAqvmnSJummy7KiqE1qFGTb",
  "key7": "4EgWktY2zGdT3HHk7Ps4sK5KnkiWU2n9hHRRFwjt6Z8wSau6mFVtFMZ2x4a1hnAexpxyMvZJXGRnYJZq5gDys2nU",
  "key8": "cgU82tpz1pxDjnFBHx5LKUmzdqT7GNC91FgcYqzgxcqs1zqRw5zGBJobCyMb3Mc78prVgCqeWSeUCVjaKH4Bfi4",
  "key9": "3X4ZLL3tP7YsKTn1erseqqL1sDoQUqcFVWRrS22Hb6xqGV12jjnn498QGXRSrz7X1rVeAAcFQp7WQrXxqgmT76MP",
  "key10": "3GKd2WC9D8TXmsZy9ZDVAL2EZx5SLqjrpCQEDRG6t3EVMTVzyGBZJcBCQE4rSv5xhEpEn6FhQp3W3X9EZ5Wmqu3t",
  "key11": "C1386PQojLSVM1d3TkZsJWD2FXYmFmRhsaJJRnifKVsLZfgZRztrrADUsVc4ekS5qsE4g4i5vKjhisgyxC2ZMPo",
  "key12": "86sRMYtCyn9ycabauNydR7W8iAezErhM9eYTbaDj9Q5nY5fhiyHMTCqa8XV9ToDKXzXLpQxLRcRw654oUSYXXon",
  "key13": "4j9Des3CMSeuqjXc1egRqw7SfnM9vFnHKQiSwVdhXcgWPiFiR3cU57BavtTkpbES13wxc3e7dmtSRtf5GpVLhcMb",
  "key14": "L37PCngCbKQG63dh3id1UcKnxVAWqdfyLjFayjHgijLNekBV3HP2NWY6HX5UdMy5tCsZaaPvwwN31sAWA5J289M",
  "key15": "5rjUr5QJWQYpPcjVsV7eDXSZ4efzCiVRHiKrA4MY4ZKXRSQmp8a3z53aLZuwYf1D8YXNGPxPvsPnvHmvxDA8jmx1",
  "key16": "2sx6ihtixGWxLZMeyqd8n6WZXnRSR1LX91TDAvhz7MsWRhQLqu2mxgsVNPnTUK4RFwozNcmqUnqmGSYq2X1Uk3JL",
  "key17": "2PbcCGkxyhnG3sUssK1HqpMtZRtC5YZXUNRQdVdFDtjbbGVomhLkzqKH9t5dX2kCNhkYSAHJtvpjimkyxB4e9xZC",
  "key18": "Zqx3kJ5p75QmSuLaBdK1TTwCaou7srQbQFCFmBYH5a3vtBdKj6sw6GFB9PnoXcwHWAzWb7EwvUyhGCo32G7EaB4",
  "key19": "Gv7GUe3JgehDeVUS9nYf1XmcvLDfm5dB55et5tN1kBtWG34nZtvdb1gbKb35ztCJsL4DRvqSmuerXJ2WMKW4UcW",
  "key20": "2mh9KY1pK6YGGhaXw242VFsLh5gwZ8XCQe4FsePuwUrzFKYwitxz4smNzKVWZRJNwrRi1fxQwmAGFnGz4PD6tCv4",
  "key21": "NYx9VsR1iuxbq7t4yxn92HQrbJKufWWCkGEXN8UL9LEf67gaLC6Gxg9iWmQETLSKLkn2WWY88wYaYwtaq5jJXdR",
  "key22": "34B1iQ4HQN5w2tKjCK1pq6qTuDgazKFEri7a2XerdTftRsM78DxjEMcdiZsFrdbc6bgoqhqF3Twv694bcCx2cWAy",
  "key23": "2PE4615gPbcsrvEgYV9UY2TTHcVqf9wuku1vNCKxyrBRN2GPtQz9kSAi9zYe8GfmCFoMxmLHKnqDFSWySWWfttoL",
  "key24": "5tHeCY3FPcirtD4XquWVYQwhpbHeCsogtRP8WSQ23f4L1D9EVt9ah9XjRFH8qddhNeGX9HpyYKbxHzpaEBtWvDAJ",
  "key25": "cUku7MdAU2evyxZzC8iGf5nJ5dpnpkHiXc2b4o2QsPuw825WTxRx4NBxt3Ep1uQ4sgYJysF1DUQ21gCYW4tXZ4W",
  "key26": "5xEAAsABTEJ8snvvubVNK86G5XwqKLabNMhLqfEir1zsYgik7dEgws6yP3FeVomLcgQjehw8FtoAPN7nRSeAsjXx",
  "key27": "51jjmdy4DC81PocHswEGbHAHbLBJWvwSVe3tCNgqwXkGx1eaquz9eRQYemoPhvcx3fmw1jr71aWeHEdqTHTxnVVd",
  "key28": "sRE9V779Fbv36QhXRCDYmbo1ZkQsTnFRwBqAEmZAfdt4JWEhbjpPvxqTRmDWm8MqTA4KT5h2LF1Ye3XLYbZhy4d",
  "key29": "5aMU9PCpmCo2CEwBikwaG2RENf5xGj5U8wMuCNeXU8z5vqoVfMHJtEG2J5Q1Pk1oNqtgj9Bq3ra1ErqjAf2fZcDi",
  "key30": "3PnAiUQHzZxKiv6yvQUEftAaLjPjLdKf8EyhU9R4zyteoew8B4LTV63KWEtD6mfTNaKcqhbTNzUNRcCt7amHLFKc",
  "key31": "5d2RJGGuKLJ8t21qYEDQub8UVPCXzd1izzsqgJTgL5wg7br3ACm4KGw298qmsS5CoFrum23jzeDfbB4Lv6thxxpK",
  "key32": "LmBq4BJGQgXacuy3aW8jy6PqdNKshvKwqR6j6bhscWui1n3yAR3w8Mbmu3A2cS7aKU69Xr7n6dYWwXbcXyM5fTm",
  "key33": "4do7dnjVyXjmtN36g69SKPyV5eraikZEcziRv5SxKvsmMhFgSrnW3sSawPEBepL6BzoGrA4thHCfCWvtbU8p3iVX",
  "key34": "4h4RToh72nZYv65V3eq68gzSqUC7DtVUFtcN3i9iH5vAFL29H5nDnjnorRBjhCCsttVR5s4odvK1aLRqqnj4WsB2"
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
