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
    "4gucrCB1VcSvV1VAa1Gn725zTBpqtNreALYyPxFBJbwcDED7siJbYV5PqZzsZENGdvRr8o1nrs3gWfnFoihhHuux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSpBWjJdrdFc6rHoxUj81EegxaAxXEgKjoNpzVE1V4v9dRoMeeQhXPrAFrptrQ3ZHxHWC8bZCb7kdvtgb3Kfgjo",
  "key1": "2RYHVf8aRzky1LKH9qRvtKQU8d4jQkKwf2GekPSPiX8LmsaVarh3hieV7Rw9KKaPHdoRK9Kk43Ag8miLCLToeubT",
  "key2": "4GMWTeH5NuCRkGS8TtR48kwboTBoYbZVDC9egSDe2wUsCEUs886DdksTzmCs93MwNq2hfdDrUmVN8shtSLM9kMK6",
  "key3": "5VRiDUZuKZq9YF6Dqpkj4UhUWjLNzWgM6r1GV4ci6VEHPpwyLdob89mB6QCjHx2DGo46tXfMHvd1F5Lbryx7ouib",
  "key4": "2pfUFM8ABne4B5h5MWe1WKT8YFXtJzA7TSNMK6YXXoVvtSkWEuqLgfezFqHHiUSJYxXbBn85dYdbtRTRdgZpTuha",
  "key5": "SaN5wSXhZKV2yJ4iLcwtgJpomiJ6zecHjAptpXcD4MD5vE71UJeFHaRoTrDmCzmxZGqS1cQ2E6VLTtJAzL9UMdV",
  "key6": "2zPhdq15hVzQJp9uAePK6PtyNbp7AZtXfnFXTcSizAhAzrrrxNKWdxM3sNkowC3LXfXeWKXqueRDpPfPzxfBwFyW",
  "key7": "5iFZXuHvnFe3R4YQQDsM4iYJLcYsZLoWekJ1inF6JxfVZMjt9VRThMp4AN2Xx5AphdoVDpmx8kcJfymCxPtLnGG6",
  "key8": "3LradgPYm9fNDrjN5ryF88Tvwr27P2Q7ueCxH6Y2PjeeEiRX2aMkUbLFe6wqkjPMh35wDXoKnxCEbeC5p9RiGP1v",
  "key9": "4rAgpGsXrkQAuN3r6p2Qtyx61wBVebvWeTUix95TYnaUTYht6xG7SF5jtD2djtw5FfdAp7qyTvUd25ev4DrwPTTT",
  "key10": "DDvmZbNVGgQHiYtmhcgS4XCPwM96XUUEiBcpYvehqh5jftuUgBHAzMVnDTJ7RLpBoT6FGqCieuDJPZ1qJ7NuqjT",
  "key11": "2RuCtcTQRKD2TzqVoAGA7NnEoABqmktahLYkp7XGNDLbczEn2VEHw6stKyrCZ9ENXQbxyDyBwhMzfRvSwLeHGSDJ",
  "key12": "63Zo6qq3o8vdyiaxsZs1DFb7zeZJeqBUCSiwg1GXWC6t4z6M5hvjDzzBgje7hnA9U2QLFhf8buFu18KP4VafHxAv",
  "key13": "3H1xjPAricLuzfZ4xkyWbzdLmn8W3mj9M4fmSekkWkZVPjfNKDWiGu3EGQrSpX6DcExSZuMZzVAaPekFMvSEbnYs",
  "key14": "5W2F3uk4fujAb1jK79jQh9a6yCnKvT1VonnDyweEmuWNqpuxQQGxiCAVzHPJuoZp7Xaj4KnzoXky27yozMm2J3SY",
  "key15": "4G5mmDvo8JLVPq42VAuz2c89bF2EafbgKadb9HhrYP8L33aMcTrJ3nY6UFfrFh5EnAvTL7Za6xQP59xz7tXHfCbF",
  "key16": "4tEynveD5jRW67QxmApNM2vuRsL74hYDPzu2JG7RfwxbrLURpemXvY9ApadfdbEAFgFatsPidmGV4DX8NGELFzgJ",
  "key17": "2tox2e3rVtYw4PokeZdVV7SmwwgE5A8KigJtAGFxhShZ3AUo12UPaUvtiqBWx9eFt4kYJJ3wJJCr3Rv8FurTZ7C2",
  "key18": "5AFwyqVXLvYcsPY5ut9UAYvdq5kBvPxWpY1iyBnUgFfpJ9siWA4YNUguTUoPD2Gr5XhMCVYfxmCQ9PhhuzswKvQo",
  "key19": "65T5HdaXsoS4jEhyS4uPFEEVtKe4zadg1Vk9GJQHRbgEecNnuVvghHG5ByHEnXTuJ5G8nYrbZkrW2X65U9PEtGJf",
  "key20": "3UYi4zHYkusq56N8F7kF83AAZNAt8VaeEjrF4AzR13jB5Aw75YfVRZt1LbDNrZkUskMeo65EwZW13ZTKc5SS5XAC",
  "key21": "37qx1Ek7UpgavavDVBx2Q81Bgdaw54sSpSCojcVVy23PGwkNMTBN6w66PtkDHB6KMQRfzgsJApeUUxAu2wYxgmmp",
  "key22": "3phGQPeSL75aRrQP7St537AJ8cabr4SMEspUvCkqXc4gTXXCkwnNfBq9pwBPE1F49CR3UhrqXfpcayQ7vbsmqRxe",
  "key23": "5X4ohwWxhLu49TtHreZQiLWDyMtswqx2QBcyWk8jSURhGz58QTPDo1rPrZC7tMZtX7A2oDUAbvx1hAf8KGZryech",
  "key24": "5YUXWsP7tZLFU15nDR18KdXqjuobQn4oGve6gqwg7XCVgiPP3d4iUzRq4BG5o2UDJjGcGaGXx3o2CEUuWrqm2XZ3",
  "key25": "2v7JKk6zkAguFz3MBCUNyiuguzWjto17ZJCNykD5Z8jbA2Q2VTCVv3he9cWTcD6ijjxQYDB9sqGfz6GPSZkwdFrD",
  "key26": "2xYVns7XpZhFqPpMdu8yKQb2i2CZysxdBty6QoJKNcvGthXvVPq6MLwjm2rfgrB22FnxmvZZYBw1SGAbFC57fosa",
  "key27": "Z2cmUaxjjCaMb3Evwf17bSingfe7vXa7yLkcHeyYh7vxXs83rbCYzXk3WSYktmVfaoVwhf55TEiSZf3vrZBbLqX",
  "key28": "5vRSpyWzigSQHuZKvcKiNr3mZgMo9qPVYRr4HXWwvjSK7G36bJX8MiTnkHgqvQdvFwq6v8WvJB6QBUToTVz1U1nx",
  "key29": "5yzLhC3oKcZa4dMwobZhKVDK6tFq3CD6WGxKdwPihu2YzEWHFbpYacz3RNz2RPETLKL6kqwr6TUFy2qXrosWVed9",
  "key30": "QZNAQP1BHL1723uQUZxPPcdinfbCxkwqFJNR2srsVUvNjCxCkHhJu6om4rNJFZ7Qz6ChLnmC9Rx4mKcFXgjKP8E"
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
