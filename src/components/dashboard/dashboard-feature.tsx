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
    "4CP3AaFzBB3NWAtQXyLLsUWoydheM65nuRiGdJyRuiNqu3oRadLYVF19hWjYapAKztDTbXkw94RT6hXs7Fc6fESa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z6qaziNKFSaMa9YeUx9uUFYuCZR7y9ME1zjRxAPPcC6KjN19U8naCyyehmXD2zJK8s3TNQWuYDUJgSWNJETpjzM",
  "key1": "3b2bxc9fAdx9WoxzBPks7TdgjBn5wzQskWmAyuSWVcS3uxrxhGceiGXAVazHfmLenw7CQFFMDJkbSQjyj3CC4wKe",
  "key2": "cDXHgRsuWt5f8bwxskP5MpHb9hfSzxbi6ZDTSbZ17qC7gYZba97dcX9Zqi2AQkykrgEp8G295HRmRbfnnPuYSqh",
  "key3": "5j2LezHxKSieoWq1wzqTvu6P7TPUayAmyEesThGnM9JppeiPX4bF5iRVScYBbm6TPBLdfHZdwvrmJ4w7yqAx2Mnj",
  "key4": "4yAR3tn9facgaAur9GXMRQSTzVF5EYpCRMhcxzDCMuVCrxGbHU4aK2ULkYLkSzjQeaFBY3VZvtHSatdafKFXH7j8",
  "key5": "4yrx1nWUYD4jfj1y7RBqDmAdx3DyGToFofJr9ybSpFBiF6J5F4FAA9w4XbhThxAGnhnfHwL1Av7gVB1brQfcneg6",
  "key6": "gWVBTJp3krWQz11nuYDq6HzBARWtb3aio8a6Bfdo1nnhhVpDdUSLG2qAw8kD8Vnxoqp9Pj6gNJRSqT8r4DzyN9t",
  "key7": "CWGYfJzW4W5u5iWgNLkXNT5DaLdXhdq7RGiHfPstG1762tHFt1oM7o5M1hSzwgYifGyMZK3jnBntqVUCickb53E",
  "key8": "2chv2Eq7EpnA39oRi5jJTbhqHrb5LQrgA5dkxAdv98VvG7q8bUnwiJFFqxwcv6iC3yKnrPBzcT3iwzNnUhrxoFVp",
  "key9": "63xe1x8pbG3SbsAWb2Mvw31yooc3zMUNtCdwDafkjNvJRSywRH36nb3sf8ZaNNYvwprNsq7jrZfCrcyCt4SFZuta",
  "key10": "5uLLA2WjFpopZmn2yJEgMmFbqN7eBqkzjcNLdyRws2nGS6j3o46FHVzeEeipyvSmMEoLpx6SWJdZCab9k1d9KoHy",
  "key11": "5bNVPtLaaAa5DF1Bmwevc4KFVqJ5io97pUw8vhRsjW4xPjeVeG8tBdLEucaiARrsnqa2YfSM3g3tBnpT9ydJjgw2",
  "key12": "3txn6BogSjFvT6XD7mfwzq6q6wdSsXeE6NuL7y1JGPispKKcuv7C2qcnB8TDUcoLncKzhAkfBd4Q7pvtc2m6E8LS",
  "key13": "4Vyvy8SV7BgjAdvGRMJ46zKxfFpyczKmLxUXkgK3fTM3Fvd5i3WeJ31akKdGfVraV9aRwgdSqtbYnQAu9Xyypuig",
  "key14": "31QzimVPnxFEa1qpco2NHHutaifs4xVHbTiERATNpKFYGiLRTRx1VaRE2srCfGigEyaasUrFwUsMY2rGb1eqVyo3",
  "key15": "35yc92uQxbHRNF7iyCsbQMt631qCtWVAEcepdzZDJ7hVvdTM6oHGnRLSsx6wXgNFM3vrBgpFngpLwcwwzrispxj5",
  "key16": "4pVzc6cWmrNcnnSAxsexNNaXGXCFrRoRju2Fs4rfbF6FKxzVRKCVHWR1HNXkTqkyoTmZKgWEC4Gif14Nc58DD3S6",
  "key17": "2pQegqn7m4U285gkE67zsDvvnSUodauvcKZ5vjeZxvci5kHWox3MUM5xVFJi6ZPWSiaVznQn2PYs9ndpHDAbu6eH",
  "key18": "L6zZYarbMfw4c4QJo3fj8qhxZmMkp5u76ys3mwKsEERwJAdWRixHdibytTjXUqgjoeTtBvgZSRDWvFrnMdi7p1f",
  "key19": "2cgUGUzC5L5F81ywNNxeeorkrxAdafbt3VFobdH1uVV5To5VASGsoiDfmnLp1onFUx4PWn2HKgRNyUtFKw3ShETs",
  "key20": "3ajXtuuRjKgPmhefMPDHf9npeRvPHKbbnopbJWcFe1PADZ5s8RVDTn17RsN7mAyPgkBWc3hN5W35J4fE7C8rTAx1",
  "key21": "5RF57nYkn4PtuYDQqNN3gxhWQnNJGZHrF7Et9ApTjfu5CwT6D4HAhrSQBTrmCaKP1pH5Th3q19y8UmFerd3LyvY1",
  "key22": "61CdcEM8RU2Q1qiB7iXLbA3WAdy5xYisZLbx3iTApQL7BbvdDTSavUhRky2vv2DtaLnoeS6PgXxsKUP44NyhyW9h",
  "key23": "5YRGLKSUfFHyG2fwBUG3QSarffcXUzkLJFx5mZxq9Kh7dcac5znym7JAJDwsDr4a5wGeQUppmGEk1LC1vhRBvcgu",
  "key24": "2Gm2onyAtGLicMDHANEq7tbkPx1RVXCsQj8tE1v6LVeuWyxiKHnPA6WxddKEMouMRnYQQRPMQuNcMeXwJjoeNxML",
  "key25": "4UHNjdGaY22P3CCsVxZSyTC8HVmFCAggK8Gh6jwTeQesutCh3jYMr2y4WYPTX5pbv4opJdtZpuwVLscD3WLTkmyZ",
  "key26": "2CNs1iYkX74oj1GsSakzoRcC4BjMjEswtDFos8J9HH3bToasf2fT3phmMKpg4AeWmMsWuwzyVjhUA9AFbZeGPd1V",
  "key27": "2HDoY22H4qZ9mczbcxeidUcN339iGRTTXmJ7hRA6L4Xe7EfToguyCPhYUVTizjrGXS2PDeFQ749YBZM4LURvv6je",
  "key28": "5UFrMqMXjuNKpSgnaUc2nwMFQ1SByhKbc8u7sy5BvRse1BaVbRDxgZZjxHTpwTSDt8XT3Zy6XEg7G8pcFK4ZxMz",
  "key29": "oKi5K72mncATRKh8bCiTzGCK3fta95ZRU77EAeT8TZnddmFMa6cKRgTH3VshMySAZJjTFzabbzVbEcSTRFBrtZw",
  "key30": "2twhK3VMDks5NDGxPW2d2czBdcjQPBj44oNCbTvj6m6YXk1kCT5LALmaCdpRb8KWsUmKUDQ2xBz9VJFFtYNTmECx",
  "key31": "34yya6aFrzkYhuKvcJZ2rDCsda53FzGRHSe6P7He8en18AUtJyBNHXmDUfrgE35MZfYSvP8TZf8BYw9wXr2uzVPu",
  "key32": "HUC5QjuQeWKFQYnP3Xb7DeHbFSrxUwSXManQkgKvh65ZyBzMwwqsc5e932mwTbLzMjTyBGuef8bR3oZafkLgy2h",
  "key33": "av91wPsVQtLhAKKUEofehmRuKpE9t5i8iQv9E31teXTUSQghe7H7ttMtfRCEmnadqNmBATpJ6C1WojNdLTdSkJ2",
  "key34": "5YUEfEkiygKVNV25e8hhc2ghGvRvFbBji1AFH1Ytvbv1gaG64FGHVAz1C1aMXYs6UgE2T3GVyRyT4LZeRxBWDB5G",
  "key35": "3D6yjoiUsWkPoU4JLYTNyoHb9dF6EASc3PMxoaD4LrkeNKvthLjX6shUtofmr7Sdj1M1PNWPRtshMxF61temAKT3",
  "key36": "3N1YaVvVn3X6ADxeaCcoH5X12WTR5212Wbz8oVJycw4w9UMCmfgGVxRuMq5TeGcTC4yqN197Q5CiqaDjHHCjyKRh",
  "key37": "3QMTHAohzWR5eZ7nnuzu9Ek2G4bSRSpmBRxbaGQbitjrDMinvAwZLg7WHdKW98G5LA5UZit7LnuNR2bVyZYrWgqG",
  "key38": "5i54s7CJdAZPLeNo3hXaWjbuxeYuGvZqWULaWQSCFioWrbPyETFQZySW6gANABjdvXftdvf9K8qJWaVYF3oBBKGF",
  "key39": "3Sos1tZUgZiGGMzzQk66X3YoSArCj43ES4tMLkJvx1GJaWpH8uwtQjJ8JRTC5oPntuUkC5gzKQVb2tc41ubcgi7r",
  "key40": "oWWq6RK3PNRTBWmHDWeQ7LKKEwaitCEMbfxrMXV8HMgXdbTUn538mzgH99Gv947LYxkudap3LCiGpAmtp8dYurn",
  "key41": "5BTijJVXUHR3cZYbaCkk8qPtAmdYvKkBKo1iKSUUpeuXudCvrbCfFkdZjsR4jqwMKTYm3gUAKi8FoaniQRcsS7aY",
  "key42": "5jSdGH3okbwNbhj3VokHapqquyVTjpFt4UviXhJuUa4GkeFmVQf4isQDbxhZ5qEc9cYWVzoR8EdXqfoUyXueNaFR",
  "key43": "3yJ3J92KCMBNNsfb12KeYyc6gQUFDgbVqkCFqmU6AFACxnGNotoHZ3naruBaxBTZWj9BsLJdwAGmYLZKJyp6h7pz",
  "key44": "64LC9QySMKRLcSacCEmR8Mxsfn4t4rRqZUvBgHWaCuprKeKqHYuYDJDWEq8tGUAdCCrJ5qar1aXipX5gjEKsCwVB",
  "key45": "e3dXPKBUVW3gyJYnzqSkPiH8Rjba3rhmS9Edq5NfXrjvGfZtuqo2b7Ck55NbhtxokTEKbtJu5P8wEkfJnmUTz6R",
  "key46": "5FPXZxQ4jui6RSybVaGvXoXMYe3WrmFRxzCpVm5MTEwGvAYZt25uTauUSPgCER6qDXucAx1J173KHY1S2ZLas27X",
  "key47": "36NMS82KhWdjoiEoMcYz7U81kWcizZcVo3b5ZkHWk5HAZtggkmHDtQkNtYAVHyiVMHdPRki7AwzqofmxskzFQK4r"
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
