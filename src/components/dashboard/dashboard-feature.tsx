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
    "qAJZ9ZqxTr5AvEUe6bzAeszScbg238kELFRmzEzPeBEwXajAL6Jq6AdG1Hwa3W78KkwFzBw7npaZh54YxEuNHWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wT1vHQnw7wtRbzrfUxrzNmUhVQ6WAAFvnoedwmQKdd14ygJ1BCQy1ewUwceXcxgyoW2jjrcEbk1uYYMpWBSeeX1",
  "key1": "33yDHqHeg6YLMWr9ydugivWtLArWLGgVKhVVnnJjAJo8Y9MJShKh4wddz6X5V1jcG2XZD1RRVvnok1dpuR6Titjx",
  "key2": "2kdTFrEZJqAYhgSiQrBjrrSzkY39oSFhj9STQ8NRNkmQ4Fta7rRptqtBJJP2bNkPHXTGGnLgHHYipAhAweMgUhaW",
  "key3": "APPB2V2SusLs6oPoqv3y7PwoatCw1uDjyBhc9KQLcGrg6x4FQbNWxBmYmbasZQYF31NUdYFVGaWNJR9fTBYFzmc",
  "key4": "65Z2azKYNU7xJAtp8gXdvVmY7mF7BtgxMvhYAWawYQuKTzscvYxo1SREbf63Rm7qBYW4pymUmDGDxE3kT3ELQVW",
  "key5": "4tXuyWQNf6TJQ8We9JSqW8MGjhaBiZ3YecgKg6iebTBVnJ24Mb68MeVVmTVp7N3PQdPCeYFCQsESmnjDALCj6BTP",
  "key6": "58HvfQQe54pS68TGz2Fawy7QdYpYD2hgNQ8fZXpRo8XMe9H8R1jakTkM3E9DRvADkwLudB5Td15ef5pcTY24fYTB",
  "key7": "oA5FDntf24NBLzFuZ8kmPVKoi4F9xAjUU15sftk9naSXdgXdsfCyJtd5RFTbE7KPFavUQAVCKSVoVanWMu4bdKz",
  "key8": "2ENeBKbDcZufimb2oq7PcufUKDXJAMxWMGnZSq74Pu4CVH3f9nEZ5XSqTtP8U43ZhdCsRM4doBQwioK6NpeDMdUJ",
  "key9": "3bq5v45XsMhRDQaz5xs5LQcaG2Z3RTJD33tpi9RyfSoYxMVvDjp13UPC64TKKyizxhiLiTy38MKe2PV5B9p4Snqe",
  "key10": "2fHLjJqp7YcpDWpafy54wd2QPkvvYE9q9RHrdBXKtKHZxNzhYU9zYdKCMDWYsNvpYrGVrha984sXMKW25irN73db",
  "key11": "4KvJdnks9gZyQnzG8S3ZxPWjgaF3AbJHFfu6xmLh74MLRiKXuQxodR7dYMcR7Y5bzhgN5TrKyAWEmBdp9yJA5qkT",
  "key12": "2UoTmTg7gj83puvmBRTBAy17UYED31pK4sAyzdUN1j5zX4zGBAG8MFC9h19buJayF5RNfZGcbyiD89f6yYRVnKau",
  "key13": "38pZE5KvCGwjv8o4RLUNEiGLLLFNbMdVXmWivzouRQnj93kkJrccQEpd72W1kjKTRNJwFuoMBhuV4YqEm2k4Lm5S",
  "key14": "3jPDGcuKQmDWPEQu5eUdUsF71WRFLJ6Ez5HgdZVk6CNDpYcJnViYaVszK1ybQ1PL7eJEJznQYodkWqYmxygPpx15",
  "key15": "3ExmKAARn8Cc1YpdZ9SiEn7DukWTp7PHWGyyiTG6GCkRbd1btZ9TtRkifKyAvrj1cB3wTQHq1fu9NyXU4zpEzsH1",
  "key16": "3WBpcntmxhnTijJo67FAoNifdg1mS9mymjYTnv4VccSaJ5psCvsf5nvbaSW9nRaUaVM954ez8kLJRHvEgALPHaHC",
  "key17": "1MhqK4fqVTAvefDFBnsLJ7hGnPR4sbBertPgrVXnC1U8gi6J4qGZgP1PY8S7fuKtYYPWDvXBm9UaTwnp2CncUUv",
  "key18": "36Wsc5F2eugadX7pLmaYU1oQkJzp2mL7dRwfrhjhyve2eW1RZU5GkQR2ZuwPPgW8om5KdDJHoRg59ynaWMZN3ANW",
  "key19": "2h6xbnGRHzpjzRXw9idj8c1VNqkgGN8krX4p4hzkUUm1pJSrL8kWcT72ii7GtEsSgbbwbUf5X1ezAHXdrTvh77fR",
  "key20": "2J2Eh3miQbw4eM76vrJbajszeiJ3XjRBjzia4iiTJb8PDKDFx6729PuS7zDE7uAaUzrrQUuu4SpgmkxtVHqpU5iT",
  "key21": "62LJ24tzLuHgo1rkBktk221UiTsSriHA8eHSiuP37dEnzb8HBWm9RgDiCTcFCuaQCHGtXQrHS4BH69MsqrC3rzkv",
  "key22": "61ZySa46PWFxzJXMMbaUtq2v5E2pJMyKoSmLmcWmMqxZjGiXWncnU4jdYpWo7TCZjgTV6u4iVYLXaRVewv3d1LMN",
  "key23": "nEpzCh3Hm9y9XgnDnL9dQqukFNSsPcKs6nDmxyyxjQ1AzFHkeMSnfV73cSDysFDM5JC4FRecVLCsbGoAUk7ozPa",
  "key24": "3HedsFsL1Dr2DKTxATBD7pHfmthNqiNe96Xvk37Y8j3X3rLFcezT9GgBVTFN52YXcPfrrX25cGT4oJm3qTAtB9tC",
  "key25": "3mxXuoapSDmv7SN6kRGuGePeooPLS3pvKWAvahb1NsycyDHzSUk1Z5YzEK8Ta5jos3HZbbD923v9du1CRpSZboiB",
  "key26": "2mYyBnS4zmgK34LJbg7cZewLArFwgMTVE4VU5Z8URiBKRwFhR66Ho7ZgUvQ4a1VzNUoFmwJMcyTptWBajGzaLBos",
  "key27": "32ybENWREkFssFGpirtuAvzaHgeeh5UPs2QebAgXT42euK8epsmVTp5t2Dc7hRQMiRLE4UXL2i4jGDToH4SA2d37",
  "key28": "3jCJsYZAAR2HTWaHA62STzpMvtLv1wSC9uyFnKieJfQja2BoVLFxyZTLxK2iGePLAp4874NgceeXZbStY9QP15pe",
  "key29": "4pSz8JeYceNXhVxMsrZG8vL8WK7tDFUrVraM1ncY1MEZciakC3M9S7hb5XLiWyZL8kD5rv8SPjPGkHy8UAnRgN9N",
  "key30": "5LsBecf4vhhU2wTKFu1SRAzWj2iC6q6sAZYUWKaiswnq2A8oePJx9PjVciC4atDE6oWJB5qgH11NEZMPfkoMDDky",
  "key31": "4GMVJyQgSvnFuEpBo9huFqKhxRxHHerFz4ai7r3pmkEuuVcddonM8qMLjPB4QGrPVXBFshWnxHUSt7x9vUpnN8xb",
  "key32": "2mejjMcimR9NdUdRJRbMtUMmyPEQ6chseiw31kv6ZDaqYDpePfc6vRDobkRbkLLwoZMWd3usNppucqiMbS8cLph9",
  "key33": "3Vci88cByy9N4s92pbqmCvKJfoGsengc8T9em9ni6r2Z5C9JAYYRyUwhDYLjuzvLZHA9FFqqi9yULva4ghbodjzK",
  "key34": "JgfdinD1XQabrpBoFpcr3a3oMbqKLUynDdNWCrYmUPTsVZAUh6HqPpi4EbH24gZAJBYz2rFXgVgUEqMky3fhfKR",
  "key35": "3vs5Xj5dn4AAf7kQiSFXHFkP6bXH6YZ2SnpzXebD6HBuPu1qugddt3P1MY3B39yGBMLsuqkcSrqfApsbWPBBY1sR",
  "key36": "5QaS2mbuG7FHSA3gmjd2A9MVwaVbtBRgyE6j7fgzCr3hRKq63PpdsANpxD1T3TPxtzT7d5WQZjrm8ZgNyP3cywuF"
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
