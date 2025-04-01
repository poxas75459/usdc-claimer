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
    "5g74yZ76tEkboxGV4kzVyGvWG9PHFmNUqgb2QzwVesXz7kSDnkErBxg9CWzQZNhfdfvp4EUcsqDVhpdYCE5xxwqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z6TQPW4eeFbRbTox81aCqFdEuw8uk5TGrJzGFEqF5UY66wC5Nvrf4SARWtfdrE99DbneUagPXfQpfdw2pK7VXtK",
  "key1": "3CHJWi6fwZsaFq2scQ2dzZvaoezg46P158HNUJqFMrGXR5xB5mrrgePTGPdy5umZWKVSTMb5StzPusSzKV3JwHDh",
  "key2": "2TRYcCmsHqxkDztMtoDucfCgL8C7JWLnhEpGc2FzwfCzzYNL6hFjqaJHXnB3Z9JQAHVKxyfPJDbB7Z9rhCA96yCa",
  "key3": "5fBvCL5QfDnTxkgTgpiSDgj4NKaoa1WLPmPC2WdKHESUEByA8FZnXycaL2BVUUhgXY7yVCkyBsczewSXwxkiDHoo",
  "key4": "5JsfSkvUh7cGeLTW4q2hdfakb3HLBR9UB5J9z23qGKHxVwJ3GpCPKGTRR6c1XekuBEkbwbnqwshKYAznFt63FQ1i",
  "key5": "3HnwVWvQ5vCyZTDe5ze6dku62VC57ovbXyWwwpF4tqZY1MzQsvWhcRJN21U6KgDRjijSACFaMfVJZh5DzGcT38AP",
  "key6": "2zK4XxeoiEvXjduRg9MBypH8mBKSgtssmcWqUKbs8tDXhxRS36XQapUg97e4HyS9rxMNVxe6bynV7Dx7xPBwUswg",
  "key7": "2jAyjsy8fnnFPegcGhwQFt769QoBg11oNq7S9CxgxnCALLzxN59mRgUtyPgaHMfWsQ693UyTqUDgr2J6dYF47q2Q",
  "key8": "Nr8j1EYmJDLu6wJnFcpJQSj15zRLUkPnQwiaawjzzZ2vyRm6etHuRGCFxBHz6khv54ej7KTdydfdi8bGcuEszZs",
  "key9": "AXCFT3ruAuLMBiaST5NuMyMYtLGB7Htn9obnBsR4Exx4swmoqi8CunU8oE7REHBnS46ERi3JGPaVYUxfQAGMWHk",
  "key10": "B79cHG5noDXhpudXdnJsM1qdPzUGKE1dtY4mWseciyEnNet4wXyKyURZ54a5xk2pWUPAYVShNMPEdFLD8KMiC46",
  "key11": "5Pcf2RgmYUunuQXNXjQRnPR85e87Ev6FJi82Q7BxKueLeqnJATywNe49jGvWgXTDRGR1uP8kXgAs3YkSnfwwA3J9",
  "key12": "7Ky2UzAkcGLCVGSVmzoNTAdtrhc2AdUrVC6p3v76T3bVC1G4przTVf8UiyYduLygTXfgwy7uCZo6wvZ7hFujqrc",
  "key13": "2hVxSaDeKaBSVaqeGiGgc6PDqYxE3PzvFhjdD2iwuNS2XBnaTwGwj8ZKMKq3XFtenK4LEsp7LXTNMK4Xq6SbG2h3",
  "key14": "4L6gsyKwNdkqGQGkEbe6B93zwPro4skdinXYUSktKmaLL61VBn6rzSFPkMaG4TQf7hunwTAePCDjd7NCBiN1Wfkr",
  "key15": "3qS8xGMkU7hW8XygDF9gzPJbG73udDP7dXYewf2236YnJcV19GC7eNR5YiLmwHRbk2GXixVSynx2qced1YK4PFh4",
  "key16": "4CqS8ampGi9kFjSqhx2B3iaVBMohwexJSeQ715msZ7GD4qUk51J9qW7FMbZGAxDFNaQg8MSGkC7kvYxNc4ratcfi",
  "key17": "2aPq8stbwz1F2gD5tu1JK627AvmPVZw1h6Kgwq8t6fweGasNCA1yAZ4YLXtVhjGXAg9RUftJkUdUf5yeDWDWK4Rg",
  "key18": "3kYevYyrf9QeB5tYRkxB8dad7LiThA2NKPiLJDs52YYvCyQN5nnNQdkq9nCHk1gBM1wjRwfzhjRnZ9UZjQ7qsH8s",
  "key19": "39LKeJye1oTrSH1b8CtPxksoz4o4yBuRrFANadHoQ5ddnsZFBMxvtooCqdoYUsLW3zYXBs5u1jVRFuYWG99kdCXD",
  "key20": "5YnuDF9vGv3VPeg5sXBtBNSdFYdcbn8MkHQye4FK3eFCJQ2nreKxprokE8s6u4fNiZTQzM5HJ7wHp8WuQxexqbXn",
  "key21": "3KMH6HtdcbHWiEbjnisnjaF63q5gpWXzqZgAw97NMReqQKEan3C6iideWyqcftir1f8eNFXoQVVd8UAUUqQTjEh4",
  "key22": "3sbPXCpAAc25WGcaHjp3u9T3C79myXuLoKDDt6m7iMNN5z4atxhxvSE1JkrB2SRBzkLFTKPLr4AWr3NDm34o8VxV",
  "key23": "3vMZgsfkFLTvfGJWiwhyJRLf6y4MBwW6VS459FWYDrBEL8Vaco5Yuq4cEsy9tqVwikBeiBn7KaEtpgVd7yp4DdeW",
  "key24": "3zpWPhnKRvYfKR3tQufFDd1oaTcCSgkSXMTjAXBZyGTqR5zwtWm6s5cGyz3v8NVU7WJpvZm9ZPB91rFriJMHbtDT",
  "key25": "2sBVr6uYebtRKLvf8aR8nAEZfZdYYstLXz46Wdb1HTK2EGaXQ53ZuVrvWbnb6XDQH12g86QYX6oW9QnaHn2J3gaa",
  "key26": "28LQiunhJ1zoVkyicqtYoWLpL1EEyQshufNvYzddK5peBYB24MT2jgqNKdsHs2Pt3LAruiRyyWxpwLPnB3Ekt1Sq",
  "key27": "5cB1fhpQtHtWS5hyh3WjakZKqBAG3jQ2x4FWxY7t34QZkBnwJGXLYQDtH55SpyJsJ1qzLLEV2GQARbXxprHwSQDW",
  "key28": "3roBxNnzCf7CmfH5NswDmqfymqQTmDUDNQtyEu2f4pQHAreWDcbjmo4PwidZCtD9bD2bLgKWfEWixTgoB4JfWTNM",
  "key29": "3bL58JjmX2XR3BCmpjS1MDxAnzMvwcmopDxPZ3tV3BBbnjdQrzkQkebDAAK54iMqQ7xtNbgGFK2BYjRWQmqpApkq",
  "key30": "4BrmHKoBkV7QBR7wETKapSADAe53AnTHkuD7deBtTpcbWxsFcwMjP6uvWgkkwKpMoMobYcn2LMPzzv8ZYNYDEgvn",
  "key31": "5jYxC3yEyrV1d6ydtNPTewkC5Y7p9Y8X1kAtk5WsXcAwguTsTkzTcBE1km1HtGAQuT5WaUXn1GKjcdmN7uumoV4x",
  "key32": "zDMr9timUu1qDdfXzBkQYcPThbJCWiXRE9prkH8BEVGVCU59ZFvTArmo6gfrP9aCzJaBiW4rHE4Qsnf7J6R315u",
  "key33": "kUEtRdFb65Lmx5UvD2bJixJfauRAPYt3w9PZCRYkCiHMt4NBDZyXyGMiigKgJf5MecodLfZYqaPXWytAwTxNj5S",
  "key34": "7cReh6XrDoSogxyZvk41xyKeUYbnWT8yGMpqcVY4WRrixbthaqvEAsbbyMgwoAArCkxahRfQ42kqncZFDyfi42R",
  "key35": "nkYLdicFt3DjJQSP8UEnCisYgLoDkprxxoeJnTP1W7DiQPnQMXHaZoUcHaf4StGJX16Z6uizw2HRh1quu1juELJ",
  "key36": "4k9f91H9TosJGWysFpSD71rxFrfFGW3YgMZrYuQBn8qHzh7ZUsrQZqWemeXqrT5EKrn4HK9QsNrNDaFsDkLj5bSw",
  "key37": "48bFP7u5vMowEgPTeRqZZKjbMf2dB7RZn3Kh8vodQSLpKXFueaP61doNwCw5qvD3Rh3xbBuHtqtSYQPs1L3w4FUg",
  "key38": "5mTVd2n3Ha2eR78KtdVa94pA1cfNtuFSmMQC6ZWhAGaZVeHpQkafwCQ8UCrhD7AouBXjVRCxz8drWGpbAkrApQ7n",
  "key39": "4V25FVkNY6wGLz9BmUzYxggko8KyrkciSX295j1y8L3kFLCc4UcruE6sFpFxyQFN2mn1pAQgu5bvJkzLCEhCtYoR",
  "key40": "2PLnGHexK286vTwFeY3YWwx5q9XDJ1sbbTYTuUHgSmVgchpskC1yEZzMZ8r1GHESF3rztjkDuxFLa8C4SzveDBNn",
  "key41": "3fd3u7uniZVmrF3xtdEaTKfe62huKK33ueLg11XSAoG4fvMcrAiF6hc4wa5srUDNXsdbmW3tKwSC1yQGHXDhdjSt",
  "key42": "5Fhp9k9tV699RSDYAFCjjreZLSE2hLi34ovhPkc6guV8kq7WyFN5xJ1MLhXHeFtq5kAJ4CF9Skza5RAwMsgDjYxM",
  "key43": "6GT1YqPd93AKqZSQMuCmikRPeZf5UtGe61KBhfpYEmEstgRAXvAs1agYudvL9WLsz1zqyzcaVj2hdbkqQjxH7J4",
  "key44": "53HktwM9boDFYRy3FzYTeAZ4CCHJCkkmvTS1J87jFiNJEE1RArdQ9E4HMoBeoYhD9B2LTGuAiaM1j2KCCNTUQ4wr",
  "key45": "YQPdTu6NuwpGYiBsKvqkeMuiWNBYMg7528pFEup7RHpknJvS8Xn6cZipPh1GtPcRF2uSFspAvdPJVMBcBqWoGVy",
  "key46": "3oYWSskFYo1zRAGu6Fu5YVAXNbMazQ6AxvpQYk4XidzN14A3xKDALfkrxqmtseyD82PUqRbbijci6L2cgywd4uSi",
  "key47": "2wRoxAtQsasCAd9y6UEg5aSsFvY5NeqaArH9qBkL1WoLKDxHqntzPs3gD6QQUAfcV8FHN4jvKk3Wiw2KNyGLgyc2",
  "key48": "4FjiSvj73rA1cNoNQkWQzc5Xdb3b71BZusUuN9Davb6TDWHUizPZUqCTUk8zZyQNNaPfakoDi632JnZ97L9hSENk"
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
