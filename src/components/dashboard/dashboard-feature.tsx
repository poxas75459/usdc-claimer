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
    "4qDHCuk4Wnm62hYeAVRSLWnupKGMvWcDj6ggJxSckRHRSAQWe42iUDHtePpcxUStVd8e4xob7eD6Nbv8BMUZhTrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aPRbcaoXeWE4kd5xttpeNuGXyUbr5fPX9YpGD9oDxx8UzqymRFAQApVVfAvTe5pj2soDXKPbj7ejnN3ZHEpFCc6",
  "key1": "c1ND36qE84DLN6bBRUAXqRpaJVoFY1FP9dhXZc7Co69aVrKU5nRQ7BhG1TKye937HvAtKJoVzSb68qDm2ofLVNC",
  "key2": "4d8yt8bh6dpXv6DCKvBcy4CjcAPF8UBBCvXQWmZJ2GYWaahWzmT8KvZMzwMumX2u4cy8Noej4AHqc7BRdRUCWpLe",
  "key3": "4jadZgwicB3zAR6U1u6ex7D14PT2hZnN9jNGT9UKTdFbcqvzvh4BnzFJ7uCW4iDbY5uKQEpH8oAgfAmHvU8iim8D",
  "key4": "45isV9oZmagFPUuY5q8wUD6LnSES1SRJEP97X9b5thorTF1o6JLThFi3Fz9gPDKnFsrEJoPTNhPQ9QJ3HqNz7sbb",
  "key5": "2KXAjDHeNpbiVWbbBF5zPnePLx5uYQ3kEYjj5KgPemv7BcwnRsTYZRCTRcP12br6MQFV74sQJ7ohGbKw9Mhv8Tgx",
  "key6": "4uvonYxnWWognW2wbvn3Jq883RAYZX8A4xMfxZ3hyJoDMhYNpsKTY6YW9dT763C5rRXSRtv5gwqsTXgEfV5RqftH",
  "key7": "3jZBH9PTHQ295dTJTabusrizTToa1mfaeum239g8xQTaJPpGH5hakmUJDaKiVh1qVX8jri7tudSEv6vwYtzL52bz",
  "key8": "2mBKYwfnfGrTaqN2cnnaPCphqiArvQbvNfoHY9Smov8xTspdJLhd51rGKDx7vKASwuZGz5oy2HBaBxCTnVoBWsPN",
  "key9": "4F64WjNUdeiRGzAwuh3BwuGSQfpTTPyXAN1wVbpNNpv287UnxZB4xjBWH41AohZf7AyT223yFPATEX6i2jjAd4nh",
  "key10": "5iw3xiMTMZkKdnGBewifWqJ9jNCpgbCzRYMH2bsvofpkJkEj3X12CacAgcASqtrvvC2JJ6CoYZMAWTyNXyMYMQnk",
  "key11": "4DhyLNQtR5DEKiYNZZ5ewvz6QUV3WYEbewmcAmMTYMqi9Z1UwAdqACqCpoRSxf4ga9eE5D4MY3yeGFwNJuhCCSyX",
  "key12": "2WuJdj8C5p2Kouc57cAwbcSLqo958eEsfPUSmHqmndXvoYXREWFtdzQDYM926mz5JyAK9wP1rWgLh6UqQFX51Aud",
  "key13": "43sqBPBRv5UpRK4KkH4Gc7o7AqHcbzNMiaiN5M9wDyvk2NZBL7AriYQ2DN1NgMUMczzsYaNmyBcagqvGpyk6qk72",
  "key14": "5nuem1qzfv9KYHXQ5YZSBMEnzfrEyQYLouip98cejHoeuwdjxTfG3GZD5UMzqR4ZYDrZQVxYrVKobifRPhpZZY7a",
  "key15": "44P2zzNrVAgwc5p5V9pKgow8rk6nEngiBJ3awWGtMKx6YHwmZajVuRpAAG1xjdCYCUGTAZKvdAva5FaVADadVehT",
  "key16": "9RkR4ZKSQqm4WEqJ6YdrunHdbuYaZoL4Qofc7hQikm4XF8nvCDSfgoyyJEqiWeMCGgJ1EefBpaR5VzEUGoi8ybV",
  "key17": "4Cc6nFEmaGBEeo3hMVB9SwKtm5ku6J6grTWNAA8SZGmAzvhivcNMRbQ6CQwpw1tovPez2BTr5aFN9Fc9gPEWLz3Z",
  "key18": "5f6eEFauk3cjmnXyadAUfTrv3oFuoWHfJsWLfDPvcJGrSUXpKysgZWKLEvXL29E2ETLbscFnLcwEpEzDaLA2M764",
  "key19": "CP4Ck7joP4ag9z1oyy8o8TkTuAJ9VGjX27gFran1dPeZFE7c4p44NT2b72jED57t5vh3ubBXcDhdwZnp62isnwf",
  "key20": "4ibzAJBVvxHAbm9byg5xVd1aWg7ZmiB36KM3WjasYEkQmUio2zM2JTD3KbnwaXv6N1XhFWR7vdyNHEPbvWAcnNXK",
  "key21": "4hGNFwxnb4dnxBmpZus4bjAkLNFUpGzZxE19CicPPmwJi5fKuVwWZ8oCbcK4TsWeKz62taYXrqWgyoaRV9CZJ1UB",
  "key22": "YAdYwne6o3XthWRUYSjAiNCZVXJyZivnrfxoVvzXNpqZivrqJBpSJUGnqMSvpPz7w8KCUKG6tVfyMoFj9pn3kyT",
  "key23": "2o289aujrp6RRv6NTVTGmSDu7fWRbPvHyF88TVDnhad5HAeMGumoRLVbQTaU7uUpzJAiG9bk6HYvtgKb3AgGz54J",
  "key24": "375vT1KnkkMgPx9b7Pchq5tboMFY4Di7Qk7uhTCnMXthtgXuBkNMESJSq5Yy7KNzt15Xxnyh7Ga7jgb7LoQyEFbE",
  "key25": "3iMGBeZsVNnGh2y8CMeLxip16eXGSRvr7f4VPBTKMF43qBC8V2qJZHqWw5EQLDixkH5PYm4QYpBxKZJgLoag1JWA",
  "key26": "QYSxmHcvpHGqDDLq77G8n9B2RLGEj6oCvReJLaKKBY3qCsrLU9U2rgHF1dbMbYiGDw6sMt3fTbNrZPwKr9j6BX2",
  "key27": "3144J3MR31pDSjkKLVoR3BMx2RinZVorogeNenC2jswGx5tSvap4TvyCSA9VwkZFRfSEJBntz8RFZw5J76QTfXjs",
  "key28": "mqxbxiHkjqeWBwUVdfNhCJTrs8mBHmWhG1thQkgvSxf12Gn9BbwMXiyaJs9UQGfquCRXVqz5r9AP9dCC5yVqRZE",
  "key29": "GwDeL83irBaL5UG9hxJhFBkcb3JH8Eb98Rz9ZVrrp7SRsNbehsEi4zbsYbW43r79L9tFMexAhhpTGYhw7W3G1m6"
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
