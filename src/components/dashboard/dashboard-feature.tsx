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
    "38PNgEuRX1JrjzficDenRMKxhrUfF1QTTK6sFeELFdy5Cfy4WLpFGgpPeJxwwoS7qTgZXQdUyRUWY1CjpY1rtiUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uzs8Csxe79M6raJBzSu5K7E7x3DWM75hqM3eCxsDLhwUrBjQz92NEUhZdbqQ8sWkG8eJvBzqfY1p8ZCy1SE7uP9",
  "key1": "4whYrAsDS4o7WC77HP5T9vPproS2r6VEhjpPuzd3QjhSaD7SqtQNmPwTjrRTvYX5xu1WpqjQ5ZfoegGrjrgXZXgU",
  "key2": "2LLqsbq9zptodsXBL3WJDoZVAoyEEpc9B1khCEHKp4fCJ2cHchUixijM2iJkUxM2j3kBHxESNkTKZqEUks8VUHQd",
  "key3": "24fUU29ASoyot5CTwnmQQ4iy7gv8GjrhegoFdzCzUa7vT9CfABJQ6eBq3eK8oE3hP4XfYMMsbVCuwSY6W2gpJfKD",
  "key4": "t7DfJhpfVNe4opGzJBft6stXGiYzao2zu1DvsWw5nLkbVjWeYrjRhNYZgUhxupKPfSaRZnpBwbyUr1o2qEVsbTz",
  "key5": "49HVVif8nFtx6r8ecQjQJuUh9Bcdrrz2UAKViYkohoXVMAQyL1XUNECWqmcARncuWGUdwpDHpAR73FJNTgFqPbh3",
  "key6": "5KznKQFLPvu45cWXWeWCDB9Lk4b4Q2LDa2n2nz64tEHmLnGi9v71hNazsZjDjtboqLeQU3EssTmBiiCYEguvV9XB",
  "key7": "1JWn4MMd97o61BhAFNfRgP2YgmgxUeMejQyaZvXwuWyyQrAQvL4ftcDDQBkTdgrhe9BJpfL8ikBLQNUKjht4ahC",
  "key8": "3SX2ChCixaLbn1PGNWJgFBh2wy1283xWbayVFn7GCbKMZ4vGJCKemFX1y8kF3B3EGgdwuq2wg2512QpYcRewoUBy",
  "key9": "3yQ6sNyQ59rnLZEL2m52gBNkQuLwU5yD7LrkCMGFiWSd5YiupP1xN4cvAx55ETtezrvVp9wFuT2jVyKLG9DJ1fDV",
  "key10": "38sV41PUqmrTz95xJySvXLVS3WbrbLV9VLgt3Fwg1Z4Qd2jd4xRmpQbvYUdeivZvRThtczQsj9wLs7aJKYbpaW8g",
  "key11": "4eLixzz9A4NV8c6s7NiA52u7kVeRuUYmggZqULTGJmfrBJDB4ikFhTm28ELZ4ZxRDSmzEMf66NJd2nptnYkgcYJC",
  "key12": "3FakMmifxa35ozhWigURLh4mKsY5cdyR8wiqLERQRNPgyqUZKYx67t3bTJQEHBfDTCcXcADwF9k8Z9BegRAQPxnr",
  "key13": "89N4Rt5sNTG7nDWefUVdNHt6Xs2Pww1qyHfxMoFb8zZ6zWgUKS5czUA3ehP6ZrRrW2MZdtjuB7ejEwje6qtN7E1",
  "key14": "3ZyJfsDrR3dMg2W8C4VbTry9QPwAkBiTtmdfKFbWwSKTD3zCk1G7qaAxd9F9iJR6EF8GLSMRfXbNbnKAjXCzWoeS",
  "key15": "3GeGN83gcrGhT1rQU48UjTJuajVZt2zurP4wikked4tgZFMuGAHpJH4v3WqnX5XXMNCkkpvjcxzvbdJq9qYBxiNF",
  "key16": "1yWs16BDsFbuwwXUa9kS1L45w7mWPcaT1dmBFxaxh4FSUyvZn3iQZTeEFS5aYUoNDZTyKFVVsdVHNbD3CJYCfnE",
  "key17": "4iBVsoiw6PhpuyhUaoQHuhcGfkDXBAKV9adrhiaNbcNNSA8jypwdaB1bJrFxxJrUrtAh5rsPm71CZfJMNP8ZvJd4",
  "key18": "3J6Q88zxXgYUbVhuh2vQzR3yJP5fbWUE7HKky8BLSpg4mP23bwnKJCytmEPG7t72ikcka7AvPgbZVkGTu4Rd2hhU",
  "key19": "4CU7tWNYoJKJEL5DtABZN7V9HDUE4pC7cU7U2wbDXp7PbcYxAgp5d9ETuvPxnTWz8bmV8GGU4ayZAD4MFvsz8e2L",
  "key20": "2tUdzBXtNADMPNoT8XoZKy4C4pyA8T6fUv88ttHynmNbYiV4CnUwSenxd5s8CVW2LojfFE8Q2Dn2vxfREs8fhV37",
  "key21": "4aMrhw4QwppdEn7nntXfMM5YXNPB9M9GEJL6bF8jJw7zYSte8c4TeQfSuBZ8mmxDR3wJ4LqSDsbJ7JEAgRq8moKu",
  "key22": "3kSqMnAua5kceaNQ2Qo5ZEvzz862urnrZo1vwSDXBr2od983AP5kq1Sx3m6ujshbAzy8wVRUvj1EoQFVSTpfycPz",
  "key23": "64k2mTDhLkg9PGk4EydqxfBgpQKNBTNvvGzQnD9LGyYSQGSUUBd5uv8nqvXsYcsNuaQcccakbuER7S2DyejGZ1es",
  "key24": "44QBtr32SkwA2w56KAJUKqRsKsVC55kL55yFFFdhZZNBVkddXHoRJXUv76byY7HJ3485woPSrTC4dx3BVxY9e9Mc",
  "key25": "5EvsbcjaiKzBYSxL11cPYPuzHaxFhnCcXq7SiTD3nS1X4P5eLsr4YH5d2ZkyYKPARnXZAA6J9Sy9KGyji7Weuz3j",
  "key26": "34s7P3KJVvQ24bS12DJ7eAHWuKAV63bxPDw5kvaUz5FeAh83bfJN34bZnovW9LbRdDE21NNaN1idwtPG5xdgjvzA",
  "key27": "5Xjr6ucgJp2pMsLTbwQGMV9yfronjGvSHVKc4RkM4vntJNpWGz4r7g4tTpTPujkw4ZZcVoGNR4Zwi69KvPeDTL9i",
  "key28": "47mjyS8oq4XRzxDoy1Dmo1SUPyXykHWiapA35E3Nb6KXUr6spTvxTRHjYY3YEmd2G4rgLPticD6FwzW5uBeJMKQQ",
  "key29": "4Ni9b222yjTKN9xjsXptnSSJCLLeehMKKwFqFa6MSQeMzjSuKAbyo2WW99RvLcGWnmEqQUjuNwmtvsjUR6XeSGwN",
  "key30": "2BQVBvRzZLKKUpVTxgHk37vbkx682yVCx7CkUx1CsT7E64f3od664xPJ76Ftv3NEr5xm9CB2PNcGfNq3d6zBocth",
  "key31": "QVBaWcyfTikke1VMqGzV71ekKP7yV6fqu7szqud8toU86bDJRa4RuWZ6D6mAA3tRo3J4anPesS5gDqKupYq8iJe",
  "key32": "RcrfsbJSLCSfLX5Q5MFuQt6eC6SdVkpTEaxwX4fagC545ZekftbC8W4mmRj4zKb2H6NuzP5ThQSCoQs3uzeK6xY",
  "key33": "23ZvwyRgzCoM6jXvb4mrJBHF4H6VwZbTCLyY5Y96DJ8qhuYgEa7Dv2tn8NCZ6xGR9NK4bAuHgZeU26waB1mJcjpi",
  "key34": "628aem4s242xo66hoMYPq4QnJoffPrA6r14k2z1xqrLxcteFL9m3Wk2XqNgVVRuFmnYpcatAhDHnbPB6DBkRcrub",
  "key35": "5RcacZh51QBgXq9bfuTKKvoJjSKvtvv9TpZdA8n5WncuraurW74x6VHjtUVwhVEwT1ydEcVyGVbghAbP7d9eZUPu",
  "key36": "5UMbQtbJB1oXhrfzbtMQWNmU5fQn9cL2hptx9RoNDDGT2zbr7oy9uDfP8EFCsKXdKMA97LjKsYzZ4yoscCc3eDFB",
  "key37": "3HvG5V1FGf78KJ5YFGBMNeg8Bir4Xrsmdbgp5RZq2zhqPvs8FwqGTQUsPqSiNiLD6ZvbBGuKzAcPuZ8qQRANUyfA",
  "key38": "C2K3b59LBH7xS9BmEpNF5bUmXNWg12YPECHTwqQUe6WYKEdtroJ9Z38wnyEs3zmfGwzjgMrUWgK6Hpe1rB5nGhP",
  "key39": "9LbfTVDeHV4iBvy5vmddLbA4tMr5QY9fJQ8643cUrx13pwnE382QoG3jc861mf9Ntr4tt8aYhHiq9qEZm7i9Wb4",
  "key40": "4TN3RXoqRRJTB12a5dCatXS31NtXrhy8sSDH6NNJJmAjiAJvQqSxBBvbEAucTNcyyd1zgPSUmhATXhQE2txcvaQT",
  "key41": "3gngprwNwfUDCGhPSTFyP8qeQ3Ts5DgDyptcVvVA462WJDcbnbpYEMxRoihUP9PVcZiojiVXkDk2UYiw2HjQCRYa",
  "key42": "5KYar3rwwjpPSxfmoxHwDxbvqP8EingfrFvk1L4cJ4N52gsn8UFPC6Q6QfWSDbcnA8vdZ1kaFA977JGbkxejwzk4",
  "key43": "2qPAogQTTow8QjCr7CjBH1JJPBFQkEGAcLExcjhaDZNyZzURacvwgCnz6iMiszP99aeQMMKVZuDYKFBDFsJNQVeP",
  "key44": "58d3unq6XD36pJvg6LbhfW2UH7nMJtkhJj35aNxAWD5zDmmEMesgZrCDwcE7wqjv9othsZXcSh63XFivRavTSDfB",
  "key45": "Vn4AE4ry7P1cBmUSR6U5KrPBHSUrvSxDeoY6nMkjxpjWrMei5dZo2HS9fy1Mtsx6xfrw2Mtz79bK1WUUbpcoacE",
  "key46": "uaBZFaLArvNZgi54xL2uhHH8kKUF2amMUjbrCA31tM7i3Kd5WqJzXB2NuMV4WmpiTMRGaoiYhcKwdLLaYGedrCK",
  "key47": "32gbe7YBwo1ANYG6z6B6Cgms8wuD3nrUGD4VU2yywL3MWLTxs5g9kAMVFw3KSKfeoR9JnvQhwcsXpiRFjn7bdToJ",
  "key48": "5nKPDTNywpX4Lssj7CharDkU2pW6MFewkZWt2sM8mf7AuuPrmumjLnRFdRByzJErK89cecLJmzCh4nbjV3WRVtbe"
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
