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
    "ufxiTUetBxopiZP8koXExDAS3HBhuXFQZYsvNzHXyVj6K56496AQxpi5VndUb1NJePHZhbor8QrX6rVxGyQXxj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ktx86znjhUDMdoSpGzJbGStvJ7JSuSp4A8ngd21D3RCqrZZUee5S3ARtE14QH8xy9mFE31unMQCnZKE2w69iVbF",
  "key1": "2h2xhkkfCexhhaeWDzmgvkfce2Kd12W21jn6iPBBkkU2v4YpjzMuZRe3k1jf7n22E53WUSUnzKJYVEzJweKd6fL",
  "key2": "3bjbNVboQyzuTifGtehCq8VyH6ikxpW6vxVcQQYZmthxEoQKpGNwtHeNSd3gEVKnt7qkMXM7tppzkaYTSAu5SNcg",
  "key3": "4swxcKD6wSmYPyihjsxfsAFiBbqAzicMcqpNU7iEcNzK2XiV9BQyPqZ9JsX9tm78T4n7WjbNG5WN1GsX13fXVPV1",
  "key4": "agfwPhWj9oPKJPHkJrDn7E34oraFtNjX5NXEn3yydTjRMHT1qRN7QibTiYcppChuQV8Gyk5noCAaDd5LVc74dYk",
  "key5": "575X21EYArYG3xboPxreUi2CT1bAMXAZ6RgfjXYaDSmWKgdKdZvgpXNSY1TtstNiQkbvz33XY1g1pR7MRxbQMqnP",
  "key6": "5SEkT2CaJC6XzKjuK9Lf2Wx31XE2PYASgr55GkfbyCE2dypZD4iZUnfuj1Bz265Krtvogz8NwP6zpFrTk2FK75qg",
  "key7": "47BDfPz4agixR9Mh6xEHTA6urPWnGytweEZJdTXHX4ZFuUFHGDRRtWFpvnBFrE52YgYj2y5oXeEexLmfkCmiHri5",
  "key8": "3QKyo7ZjrZm6zbMwvcL5NLSjLddRcBgfTjqXMsri8wWYGJrBMCiK4KXSkwHbH1LvuzPgvKitwvttMm6p2RZKWuGp",
  "key9": "2wBb5q2wXRrQGQarwUorEuMZcC4iJu7ombxPyAjDSncEdHtfcPLeTJyWnwEu5nqGgepCnT11H522mHsqjcJrVtut",
  "key10": "9dJVv1PrdCtXDWUuRFdLfM8zXmJAPKRfCWWrVzF9AD2MimLGYzJpkp5UsAsckWbtEdgWFxfsQDbJUZMhda16rVK",
  "key11": "5qiUeQTpLxW8gq3EE6XeUwEw7yHrSHymFRrHjj4MgrPGLzWPtVw7kKS8a5zVdUScg76JNYJh7rESnFXkkMgg5NtP",
  "key12": "2vknTQQC5zCfQPejQVUPoaLmkRZwYkHGcZdnrKmnjjuGnPbW6CvuSs9LLxmwymd1cZCYStWZXohCsEysMat7geU",
  "key13": "2oGyuLjqi2Y15GmpkiF6V8THe6M19A1DjxqFJUsepVPkUPqXgZcDfYGrg3uXnTssJvJHQzbh2R72B2wb5cjvYfSp",
  "key14": "63uq9asJ32vwgbzUmvtruLyoCt4GNUwKgPYosfRK6YSKN3rLmU6hTsDaCpSzQuJeST8UomBDL5JDQUivqzsQr2Lp",
  "key15": "5UALiBCswtvZ6TQgWoQevzEGuMqrgrMXdgxezvMNVAkRua3CjEDbhm61i25xTrVwjpSLAZtvotuE9orPxrSkkpaQ",
  "key16": "5xdpxNwyRbDxNX6CNsuKdHrGAFtQbvipazTFzsbqYDz2fPL9oDKqvWUGRzRZqawXSYxQ1BBBD7ChnCaQ7TWE4bAF",
  "key17": "5Gx1NgH9a8yAT5eeAGoYDDibQEBbndC9Wkq5mfsSiuLh9AoDx6hGKNN2rvCYXPdhxGAaU8Y8HwfxujFWcvhxXDzA",
  "key18": "4rBZ5jprTT3ofAVyzaAUS6ZQp3vPWNn2KKvubcSrjqP69UFbBYHm2MnzHGpGpNwDJ8owu34Rphm6wTPtu4KwAfA3",
  "key19": "2x2oHeP2UbAqZxZJYL9KzNffwJSHy9vs1G3QSyUaLEr6YPtPC2GrE2aZhn2PqbMVK3s1Bw3VhcK9mVFhySo3z2Dn",
  "key20": "4T9JPjqm7FU6En1X8oh9XstTGzxAVsBH8WevkAD7xkP7L6C945bjSRSDyj7djG75P6jRPpnrTo15aooKgKUFBySt",
  "key21": "5jTWxidEkLRwBG99cbQ5UskJ1WPtRQk2zqv3VJr5pj4swSWqh4inwNoJY6rANd49s4svA7gAWRqwDp1MD5dsQwTr",
  "key22": "64bZPM2dPY4KxmstYabKioh347w6GgoAU12sS6pHvck7vVQRE1Qu1JESE57xr1TBVHbtG3mytgUGufWCNtADnUTS",
  "key23": "51XwmD5eSe2Ncb66QNi4o1nR7RMDzjfzDNjhXFiNukoaNB3vTizJr5B8c6gQaf63QmjJg9f264GQe4urWEeCSsL5",
  "key24": "QvXusbuXNu3cXrUcrsnutzgU9nLM1imCoXGuPo4JBFim3asddLhSgBVhujch92Bn36F5GgUh6K4hRTjFcZE3ft9",
  "key25": "JbvnoB3HjDTVRJQvmc98SiFP1KC9ufZJ37yjHiDxBrY7Y8aSEaPu8fa5K8gSNdZSHEEqz69433o4D1esg2s93ph",
  "key26": "2pkdMMUzr5c1qTPSmqKRjJHrYBsNXCYwh6bqxkCJztZzgDc9GcAWeuZTd6zEBLPTjc41UZtfxfUKkgpERqoAqAvU",
  "key27": "MdKEFbYGBGDqXvvf9e3gfUyfRDfFDh5zJKH7LVmNLpggNRZSccEh7NZBrLiFd9LqAi3rZKHxHorDcYoTSf1uVwv"
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
