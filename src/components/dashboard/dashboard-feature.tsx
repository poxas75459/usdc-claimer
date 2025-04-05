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
    "oWSg2MfMcCw7G6XQHfwpT3gSpriQKne1qfgVnjG69tRNg1UhP67C5cbThgzo5Gz7W7tGXuLVEUPtNFhq4pwJb1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e6qmDisxgWvr2pgo1GdJKZcn5pVU54UR1usve2yGrVn1qLgb8Hx2PLTfFqeGsbaaUQsAz5ebS3DLJxoKNPmfnNL",
  "key1": "4NsWxqwrzZTVYFzM74jNedmiCcTGkVX7vp4qp7Bc4JJRuPt83qe2LKw33jJ6kBRsrb2WSV8j7rJqxadfErjp79cY",
  "key2": "5vLnFezSSsVabEVm6CYH2dhkbBvRrYCh5RopvebGDuoJwXRPAGtGNwfv1KUELSHXDP82JKfSZFgfkyQmnJQn2VtK",
  "key3": "6342fhMM4PhJ6dNEdBCtBPQ4e68Ppg51FQmQexP1xvWdmW86DyV6LGmTjGw5ez96aYuhCk5yTpfzo8bL32FzksJS",
  "key4": "2cS4VYwCCgvY9AuYNUVkkH5ATy5KmvK5coLqD654kkU1YXdFnmX1mxusAuUCQjHceAyFicsgeGVvUowMRcBT65Wj",
  "key5": "sW6ZKRWg9e6tSMQ28CtXGiczsS7rgoh6TSFqPmatXvbA31g66aampbTajcLjS8y21oYsw8fLV7gkYMAfdC3XGXx",
  "key6": "3BRh6JfgpUD8cVijdsnmxWTFWUADdEH4hNhGrCoJ4vPXv8syVF1gddB3rHUQ91Ltc15qr6yAqGeZBpQqapsrYEC9",
  "key7": "64agPpg5boBPjavm5rVevN2uqXjAbcFamasfX7FTAQkDCfxKrucrJzmnvXzVoFaZqyR5rHZYTmu5FXLGdKv7T2PG",
  "key8": "4AwkLf2yfPaNM9WKQ6YkEhDyoK96nv6sy5RiiGsSxYQUmjjhRWYzmxZ25vVQCj8fFrgRsWwtNDFya9w2fLVpxftE",
  "key9": "TbC7JhtyxhYcfS43efBQrYzA6Co1mYbmhpdU1FRH4b5aP2N4DHd4idgCQNgm8CeGoAJihcbQhN8wF2qC8w3afnh",
  "key10": "4siw8k68xf7JKWVJe1G72eGKSaKuDiR1fTH8ZFuGdTmG4vCmNibwWgDBNsYs1MfQTGbA6gvg1sXokXbc2h7BAFKg",
  "key11": "63Vbb23MRMVhN4DS8Y1ovUfh3KrmjjHWzuK5prshnypgZCWmrtMdNRzyx1dF1ZyW7LJXh2oqRqKZk4nFeCdWE7Me",
  "key12": "Z97CiruQE9bWN3yMvfnKP93ccYLKFhusEpQN25LMXjuhqNajR4K4afozYwb5TD4YLojwX6h6LbARzXUYx8NTr5P",
  "key13": "298UxCys3byafpjzE1cP93fnehQ3Brs67jop1kq5S2LMuCFRjXbNZbWXRTvnSJvXjET57To7G3yv3qtP7niTvKRb",
  "key14": "LwwBAoyrR24zqwL4ronUR8ZYoZPNPioDtLx9dpAaBNSZpGXh3UBfzfgebbofmd3fAmPqbRd1Am2G6zNKiEnPwwV",
  "key15": "3KPhwyyahkFtSZog5NmyGyenmSPD26maMBdfVzinMHUmJFqoABcDnDzLyjqpRBzSh43XSpvggywj2NJMPrdH8mRR",
  "key16": "4gMAuZVgK83W669VFoNSxPXAnT44DDri5kDoSFiNUD8mjmuPzBG8CTKERxH2dypzQDoUCsuGUZFBGMfTeDq8u4fR",
  "key17": "JneMTeB3hKtNDTEKXbaXbcXN3c9xZWXG3zVwD1dMkh3W6u7pgzgaceacDMHEPG7h2xCMzps8abbZByHNpXAsWM7",
  "key18": "5xHXEgNBNNuJXaiFGkoon9ywLgjFgTQVVanyU2hNwKRMaU74q94a7QFdkKyUEAn8f7Q6DqKnEfUKUCHGbUVjsDXQ",
  "key19": "491kYeCBhGHSHmaeQk9YMaX6s2rkdwjyBdZgh3wqXupuQq2sit6VNJ2mbPsXRfE2okW4JxksJV7PhjB5prNGFg5x",
  "key20": "2Bu9ipuTE9wQMZHX6tvR4zMdfaYJHLtCh9CXRA9cgcVmUcyyZ5yrFjXjjbSW1jqif1X9oH51o3dHUs3YrZoG2Z12",
  "key21": "2fXH8ahHvatdNDLqZSCmzzneHhZDZ4tnEAyXStV1TufnUZyymtunDRsrT3NgYizY7vF28PcjS3oaeYU4CiFAcXV1",
  "key22": "3xqMPJ1Wk5BFtBGcQgik5B1QLud7KQdEge7PJu162xhYPeLADLVGuzET4rxoUPQxwCLa8WShLXf91WcpT3ybgdoq",
  "key23": "45GunsDwuESeENr5XmFzXkwcqg2cjkpp8sAkTYDcUvtRTDkuAWeB6y3ybdTjdGFwMdFuirZyJTfTWUMMicc5J4SB",
  "key24": "4dauAvwqmTtgwvyjocVajdHYDNRdCwkPDbRhW5QgJSDdaaZrtr7EsNaNhRNN1h2oTQW4w7CoE1U3nNVxusA1j7bH",
  "key25": "62TKYgsWZg2xU4JTSWHuGACNdqz4jAqtoEjVm73PD1u3NnPh7JuomUwzvYbrhzWmtykkQNqwphLjtfnVbVAiVsRX",
  "key26": "2NMexSq7RVQ2xthqVPHyYPgtA4U3umJfWnGFpoB2k7QCArwwNnB4nN1yqqMHkXNkaR8RRpp5iwUxRMfnP4eVp2Lp",
  "key27": "6PXCUysACLsW1vXph8jZ5gQ7bxNxTT1xGKtGVaaPG9W7woNK5d7asD6uaay5rdgnMyUdJ9Pxw1UjvmtCxy6TAhC",
  "key28": "4SqbMZEoMaTzfx7gf9Lq6QuYM8ko49oaVMoKDQkwMVbyozkPikNYmWfHvYhVxmpZ74KLSL3chhiTxyYMsytu1adB",
  "key29": "26HfZErn4vb4Q1qB6rnQsDj7EDQ6bSppBPb54tGob9Yox5xobkk8tG8Wp1ZfWMVRs9nAt2eiuyxhqsLjFrX8THJa",
  "key30": "2coVpRVkrAtVTgRjZyNWg6K7BBLufabUmhyUkKgU9FjZZRE9WoNsBAUpj9ecS1c8mTwsSuwHSyqF4gcbUPSphjUr",
  "key31": "2U5U7385a49UHDdP5LTtdpwzCNd2eshS73hnRUKQB3G47u7SoExxBTsbfBDabxNtUKSPHVP1YrKPVjRX6HSQ73WY",
  "key32": "3hRpFcUP7dhmc4kEnSn8PDS37BfxAftu8fBfcc96JNe1qVL64P44ipMdYNT56rTuLeAC4dyUj1v3cx7SB9v3zsLd",
  "key33": "5H5Q1viZJjqv2rbEvjuVwmQSTrXkJYFmsRjDsk6Hxci7VJaKgBf9Y5JA9CqtcJd3dNsKSjbbcKNJv8LHbLZHpqv6"
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
