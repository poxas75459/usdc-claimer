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
    "545jm6TMmNGn2tQPYQLoMqs7rBEBTu7iJXz3bXmgnStc9fFdzdjw4U9GUyyhBaCMLZrftXt6gemspG2z7Ad3rKEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PPdjhkG7doiKmBew4d8MuEFxQzarRQeJ4n2CCwxA6YxWvH2AUNAt8UkbPyXEMw1os2KuEf6Ks1J7FfHLhHcCYe4",
  "key1": "UP5FsuXoyMKZDXdBPzRC4tqED3keGacxkbcXdKjaxBjESv6oK3F519GDwCoquequCHtC9b23ma9Nrg3L9C4EFaN",
  "key2": "2goMTihTjfQmgX59YxXWuLeErRSduFcJ3X1XkUf6hTFm6FbzThcKrvGNCDo8boiWHgsDpKcyBcP8nnqYqDr9rWkh",
  "key3": "2rJudzDymduxtbXVnsee273xKt86PVy1hRVkbDknrV2VwLCWR3HZFEXeTZAP2wXcg2M6Wsn8aFZgZh8DefFKjXif",
  "key4": "5xtGuvUPQhVed8WJyzkCPzuJmyhV4imJ721uvmQosYgi24WYVEC43xZW9Sg4GhoJTS5a8ECL5KfpRMNTzA8FnU81",
  "key5": "4X6YFF3T6GZvQgdEgXi9ZufCxZzbJwbeTQKT5QkL1FBEDrYN6w4yvarkdjb5txhKWKPNPBt7qXKXgMGsdkycNSWC",
  "key6": "4HuYJCsm55cE6nQ9mBxpC8MC7qrzDRxXN23E81Cp6uAUsdD3MfGaP2cyop99qFSjNDejoDwJctvYuULi9jFqsT55",
  "key7": "mZvQyRL5GDCXhdnLdX6GN9jteMy1ctyf7rDKSNAh4TgQq15EZj74bd65GED2sZ6LX1C8CM2AQaZ4gayWKvFMyP7",
  "key8": "34gfuUXDRTMtGUufCqvSe4CSquVdxj2PQ6WdEFT5QDj72ua6fpFvZb23sAtDY39EMQrq1ZCD3ydfjtv2DjVyS6hr",
  "key9": "4Sf7CinzF7ZC7S9ZNVFMxggU9wpN1oeSZBGpvp1ppgaSNWCJXTSwvF9mDnkQVtUvuV5kwHhbtBLJc3jyX5cwkomf",
  "key10": "3fToBsJHoZTatL62KsK5xy9AWEwUj8u2vYpewBLk1g9SEvG3Xo6ME6nGNYa6BGvaiU1GG1cm6RptkGHdvQXm3Lrr",
  "key11": "V8Ei7QXjGJ9V7y1Phfiwf7G9Hh1Zu7RR4BbxnXHPMNQuaqJu2LBQiKMEauyDUc6xhhZTARtP2fUMzC6jzdCU5Lf",
  "key12": "3CEhAi1cNyipdjhJCbCvE7AHtegfAwT7Gr8AH2omZYoNfJC2bxVgZbWVaXxnAByDw8FD8tCeYbrmEHPLWRF5V8hU",
  "key13": "3PcxUGnffpnP9Ev51ajnHnzH9uCm1M62xonpNM7MeEAa6a4NxJXSmdGExpMut2oh18yaG9mM2pC3FcqgfTznHL9E",
  "key14": "57GowprQfMQvGkL7cuF4p2K1cKCmrnkyCzvbydXKa61P6Js6fqEXpUEubV5xFazJdsDtKBhfT1ECxGiHKb5ruiJV",
  "key15": "2UwroNdjBzHgZ75grDL9vrzktKko2aF9zMecPgqktq4jpgXGKVw3dGgNbagjitXif9fcw7gtpgV3CYxzAvhvuSgB",
  "key16": "3v6wsnzZA59LmWJtyZ8Ydph1k51vLBQc2ieSyfof4MDoQ9r9YLbFLmMMi3XgF6UxSnQD21mZTHpivKcWnLQVXhgr",
  "key17": "4Xbfo2Wca1D8H9A8TqLo1JBvK5NsnfuZcDkB5MKGXoosZoyK3JN6Y81DCegN1FB5KPZANLehHmm6WwYHisv655XE",
  "key18": "2Ri5NewYxp2U8SWkVRocKhajKRcqg8DXd2pmjE23htw9wxaX9nCTdjJem7a7pmjdvDa6uDFfYh8aNsai3t2b6WdY",
  "key19": "5fiWQPquVgVC98wizJwHU6VZGRtkrw7HbBV8RZM6S1GLi9m5ThUCNoVGNnrjH929KXjKW8NbwvWooh8aXgLdRKYS",
  "key20": "3HozjooNq4zPqs5MzRswij3u1kB4fQx6Ud78xe8Mz2wunWRMyZp44GUg7SDAkbNhziL7JmtPQTW86LXyzVwxVxRE",
  "key21": "5iUk3uqLnPCPxJ1CyvrHPc499mJVC8gnENWYbid1xm5NUewU5LNBMGPccQGZ6cSixf5QyAwXTD4yjYCSjutFDZjd",
  "key22": "v3LXUqVKG8ScJb89TQo5CTocLDzU3qCAWd96n2JSymWtwg6YNmw7HhH5fNZZTbMSrmBuK5rEgyxd3hqzBJg1Jrd",
  "key23": "3ry9PoL8zeLpRZSj2Js1KbGyipp6iBRcXAzazWqQ7fxxa8nnqKbsLdeM5uJyYnKBDkxusCkdihfXcSySFHnz56Cy",
  "key24": "3UteLvPFGz5SgNkC9xVtxvvuHEyZXu7FepQGto2NPmzgsMWvQGWZ85WKM7b52dCvPfvkVFkTSESsfPn1YxW9rzwi",
  "key25": "4S2GYC8zDcuM9wzCXT1RJMvEDgiNuzZFqRqsewS6wZwa5J2sktGpXK6rEaPTKJWrokZSe87B3PMRXv5LYsX4VyXd",
  "key26": "2g8khaUqwQxDWRir95dNrJZBXqsX9h1US4DzT9Ate1m4go27MsxKHMNPU3spmNnvjJDm11tFFP9PGDKq2iMZCd2k",
  "key27": "5XLjMuGZM8uWuP3iUds7qf64QbvkMtpEtJu4wcsN62aicjiYR1i8L4NugRXDjpK5A7xhmJc2kDkDJ9PXS6ZPE5cM",
  "key28": "diUWgVfhZNsPGqZaBbip8aEYqWJjLnsMJTbFiDHGSZG3ZPe7NZfyWHbyqpEf7TbbNDrajz4HS6SibwDHfz1mC6Q",
  "key29": "2yyouZhZ6KK1wQHpAmaAviMB11tFxrs9rPBhowptzZmvgRDEwU4e6stWrX77jFJwssR4xSdB6hiUmkcmZjtVtkVS",
  "key30": "3kEZoMjWnn4xNSWwYkMdzx4qZuADv5k7T2W4TR36rMHURW3LQ9HTZNfPcPi7aoBCy5ao9Q3Le1WtWKUzJRcSZ8kj",
  "key31": "U8Dknx11zkzbSQtFuR57uHTpYtSPcrWdrvxw5zcXpsFGBj1xNkDy4VoGGtqsCVoJUC1Fz8RSdYL3dWyzzbN4zFf",
  "key32": "3GKUXYrCg1itMPS5wqx6Yb272jFUepxNNcd9YFke1woEKeUKXUCH7FJZoynq8UNoNh8yJNkkMBnizaEJxssPvHEq"
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
