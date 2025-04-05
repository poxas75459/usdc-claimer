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
    "65yVoT9FzXv2NqihFTp12FXvfeyDJGKktx4DNf2xAy5fXrPFPSvBP6oW6MTUNEHXT8vq8RZkrLhLtwgA9FbijWKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gedDNNDkSJPg6n3SHkZk4695Ui1PVAxZEvjMAaAdXsLKeMw6Q872NERGokNKEmXYixyrgpKHnmJkCkBC32m9u7D",
  "key1": "5LGvRt8spJGnfPgXnwByiJ1nGeeCY3cYJMWF5AV3uQfbjpnXPwBPVPaNyHuJHK7wFFMM5kUY9V8E9iZfhvdt3Zdz",
  "key2": "4fHs2NfJqtWwr1SRUvJkuV11QpkvqBY69uMftDWTi6bBqnhQviSvLAHrcZqVbAcanu1Ascb1WMuZV3LSPkGZfV2o",
  "key3": "5MfruitF2ATxp3cE8VPniYbB21we1v9aqNVyfAr2KRQAN3smRy9UnsFJhRfVZbjm7R7XCBhsR411cUMSghAjhJcr",
  "key4": "4hsVSDZpKAFK59p95JVkitosgK6UJDnzAR3MY4QNyCYBq9GHxx3UjZX5N9zqmoL6yKqfmg8bJY6FJ3vQ1Wf6LFGk",
  "key5": "4Pmg7GQfJJkH7dMfUJXjcnb91UdPxtujfq9uT8xT9vBcXwUhUVmuuYcVdYgp9xNrDyRA94obbSiXvwt9njCWbPCA",
  "key6": "23cgrH2aRc6YqegZubkQx3knxyoVLjeFEUedzonxr69mhriTp3XmPN3xTTGBMprjuLXyfSbovQAHvLxZrB3EWahV",
  "key7": "4GVaEh9VyBWyoTdLf4Pyo3DrvUKkJ5fwoLB5sJaNPqH6SbLrvqqyfA5fw1bhoyjpxwVUAG3CuNG86fCAjbhH1Nfq",
  "key8": "4GZDdhxJmUdYa2SFwSSU1xX8M5Y9wzK5mgVHq8DkyvJDiFgF71sFxTuUCT44fDqFixriUsCskiNB5XJt7BkWcEqw",
  "key9": "492ZhsmPnjU84GEgnyZY1D8ZRPjPoKSHp1ANhyXn8KJXRuJiGhmYgXwM7Z8gmby8rySNKirQ3XPtd9brTB7sbbV4",
  "key10": "5RuPoWMhjMTo1DH8EU9uRNSCuzBCar4FH4kwD5eu3W7488dgdyZkyKj623wKm8PgRSKMZoZFAu1X3Ln64aFxbEX6",
  "key11": "Gr81bYGjkvUk4RNz5wRxY5Rc9YpTeHkRFkJnDGWGsk4aEpqNxgHE1eWMdsfXc4Doiwd46aGJ9CbVw2U6M6XHMeP",
  "key12": "2cboJWV6TuC9ufPeNULmAJrryFQqw96vNhbxFhB1iBymoxS2zR6voxoTutBBNgcWFaAmZafnFJ9JXCAwrMmYHS2K",
  "key13": "3kA61qjY76Wv6N31sjRcfaUFaL9HuXpXiXouFXuyJ2akM3LiFYYnXdEeUnPBA8DaLb34qS5gTorUTeExXVPT2QhY",
  "key14": "4WqoFrdHfgHw3ZVhVzQ2DiBMhmSkcZCe7osbnfjRSX98YM5p2VGqj1Auf1vsESqQcxX2YTzJERMo1j1CpUgfKWxX",
  "key15": "4JVt9Yrz7ZveXYdWWroiMbuCP1b5upueBpmG5A8acWX78UvFzk4SXDWiCDEVPEMtKbMcsUdRjBG7vovCPVvnd4A1",
  "key16": "PMaRZsoKpknADRKoSWkvwcq3EyBqUG1tAUPiGMSspidXer54CQ5YJgLmBaigtTobpqfgveGn2jBWfXpBhonE1B6",
  "key17": "3dE5fNRoCtXu7HbxKQZ2PJvGNq8GxBV1oAUaJ9pWKgpULyjW5EnZ9dvHxQbHhkyLerBEHusysEvGwzE5LqZ2tFbd",
  "key18": "5KWwooxQjPeiwegSW8DcL1tEq8urDm9FwFk2kjBUaqRpo61csixctrGoMFgPZWLNzj1u433YpyJceBnMreYZSDoq",
  "key19": "63i5TxVMcS8K1cXp4igpCzd8zh9QpLbTansR9oVArXwDf5ee987jgm3exLey6hAHsEN6TJYgnFVzmPvtuRkVnE5b",
  "key20": "36tWJs63Wd211CooGUG7fU3RSvrXQghTDSDELJQ3CURzxtjmChhGhKG9hzmvtL9fYX3YS4otzdxsfHw7v8vaFxd1",
  "key21": "2pTDA5t239UJRAbHkecv5JjvHwJwg6yiAbEFaPDdcxj8z12NzeKLAi98mEAiLm4xY8q43LxQPApiUmZa5WPMGFTC",
  "key22": "49vq2v4LVrTTqwoZknFdqWPjQc6eZLQ35A885NA7XkHijR4AA49QcTyxqrYpdPQzqPEo4LFza8Sz6F5ArbiWkNPX",
  "key23": "63NVh2Awdb2zCWgHc8oBmzvus1KMDka6FhdvqQMQSx2aJM5JvX4nHjofjRkgyzWvbAkCf4mgEYybGTNbUE5vf4MC",
  "key24": "4ZYsC1iDcVtWh9VVwfmH4dwurcvPv9QZ5hBjaX1x3ojNnuw8aJem4AnXLBkqqCoekjpCiWhAzvPDDvA3Y8y6t7SA",
  "key25": "5zRvdhi24UsbXAHbMhRBVYsfS3epyt3rgBSKitQrXiQsnDZYgA4D9iab6dEV2a1TthfWKXzhvR9vLz1yJhUXpndC",
  "key26": "2eoLC2NLPFXybiJuHATjTQJkBnYfXziuhvTDXiZRbNC61J9u8hsVi5xjGRBm5j7XQyZfZbFxXBbTUptst1cw1RH8",
  "key27": "2R2CCDqkXMktRJrF4EzEBd8dmwkjNUsASNsE1msGejKKPEvCQL24McVuAvWpgPTMJN9n5GUorVEs8bq3eaa67R86",
  "key28": "4DGfaD9AjBHWdWJCFF6oPaey5K7hRZU6u7sGeVJ9YmwVVHJcMArHi6Gg3TrEeSW1rNVxb3hUkf8c2JEYfRQxBmpR",
  "key29": "2R82BG8WMwYX9c5XGcAJUrKPafUCYx7VxyWgDHFBx8FqfmoR68EpUDNBSezBDdzvswX2eprMr695vEpQxb1R8oUm",
  "key30": "W9wxZXLPfqWfTvpgPd5dji418zbQpAi7fZNNGPheGkXAcW4AtmPBuCPQVZTiSTEwqPHE2BsRyWkz275MqtrueEo",
  "key31": "3bAT9DNqNGTUVzw3AFPWDGRRzTy4ZJn8yyG1z6qxiAovcZsmK8mnNYN3ChjbYhuVs1oEHwPoetmKBBrG6KDg5nTs",
  "key32": "51wZ9EKHYXbQSATC8RjhiRNvDYwjCDqDD8a3xnQ8Dz6XrqDJmivSqrHqqgo223DPpjimcx5Ud3NpKg7N65Qp1BVy",
  "key33": "JJM7pvP8kB6JGi1j8WyLXK9Qp7EdoJ7Qpqn4BkhqkK97A2FUmy4sB8a46m97XWyRGy14yJW8k3GKtEnrWddRmjq",
  "key34": "5sC2S3A4NDSwMekpVzyDBQNKvvjQt9s8ovV1uMCaypxRApmpudMpuDffzrfbUFfjRS98MFwMwEBmW3hkbgbWsQeb",
  "key35": "PT1rJhi6HTQTxKYVY7xtkamCmARCi5cZ5SuLBXpMsCdJwdqYfVVEbDW8Jn9TU1yo61hH1gmm6t5HDTTubX5KkF6",
  "key36": "2R7heSK9obyMLYdRLyBhgT2o8s4DJzUJc94MNmaW9VNLPEMCqP2sgzjKJX76GKWva8kYPaVY8A5YgHxLaDbqCyeg",
  "key37": "UHZHCUFv2p4LWCzoJPoVuej9bKjHF5V3hUtFCmnuQ53BBfZvTVc173so5fGYB4KxYdnMv71Vroo1tmR9oKwXJcT",
  "key38": "56Gy9Q1w4N5wLiL9bSLLvRzoizEuGmkKJGwLgfDGMUW7LhCaFffURv2R6FNhioikbesPk5twREm4FxLJwMNZMfPH",
  "key39": "2qN2mrU8qiuT1nctcjcuuvhtXx95UhF8zmyTqpafdoFzYxEVRXMBLaHdMM3MhvSWkv5qgn4z5wcLwjkyvSonaXNy",
  "key40": "42oTNBLFUwz81As7HG3H954VwwokqsbUYKNRi1MQ6f8rTjnoWZbznVTkDxfpVhVnyRHFjSznYgr6hi4Vz29g1eM4",
  "key41": "XzjAXfEryLTs9XPeKqtcZjkCK73KGKm2fvgLH4XdtMRgZrpTTPfGJb68nMSPxYxFUUKrsBH35ypa1ufNhvpw56p",
  "key42": "635ACNNSHDY7SywETqXa7wJRdK82oyorK4rfasDKngfBPazQW9eo5pYjCQ7u9A3vpDZYJRdcwGFxKk1Q87yzLGLF",
  "key43": "vpUg6S7GHKgwLGRq8Lt2xc81ToBUBCr99d3fUfpjyHx4YuSaBpPFsyLnHu21cGDfU56mfF4YqMRSaBjrcHhfZDL"
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
