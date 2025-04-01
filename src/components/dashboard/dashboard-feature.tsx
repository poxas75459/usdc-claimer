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
    "2GAXTJEg7fkegqAtLemrkfcCaokMDtt4LQwq9WvBttAqFTApJD27agdNodngYMraGc9x1N5g9oqpnPY59V91DVtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nzq9Amqv2T4BZApActf66S3WhyQo31ANbwB93irZraRcMP3gmde5ZouABAsWtyi8sR8witKeYFix2SV8BEQCihW",
  "key1": "5k7iF1GQ7qp1zZJScc32321YdciR6uruD8ns1tLE8mhmJFJxAoUZopNCwSNGupKf2sTrPC9L7gays6RUda7cxTHJ",
  "key2": "mFL5M9ixDumD79bx4h51nw3WNipxmX6iUYZ5Pq2i9shegmPoFfuzRgM6HpbxaaGQvrVjXSKYw7wFrT3dfSwHaEs",
  "key3": "3yMnqcQ74wVBQeo4GweKipUsaEoDj524rzwtJ3bxJJvZouystLkosgmBgR5BUoHGPfmmoAXMKrfSHNjLTcWy8XzQ",
  "key4": "5a7AvBGwQsfCmmC9dSnBQXqD4kkScLBm16z2dngQBNdBToKbqfQJGCVGokQfj745Rdf5ndzxJcTMd33PLGWYaaG3",
  "key5": "36ShNEWEGWYA4wZRV56hCrTMSN3o5sWGdyP8HwdsoeXcdYFRBtdiQpH16Qc9j9eSUPzrcTLQPBz5p2m9hPbhnbzj",
  "key6": "5sob1NLv4KKe2qk3ifTa1RfyM1bDMjsevdr4xzMZUxYqdWfcE4Vp7HWyJgahnE3S9DUv8EiL6uhvU5b5ry9Tc9s7",
  "key7": "2weg3JG5qse1mBivnKqmu8WnawB66LemAxyt9zNj69daGKT9jcdyLaZ5TQ3j3Ny4uLHthg3hXX2nv3P92dJUGTGH",
  "key8": "4awiSPvvoVFuieAD2ACnTSfQ76F2Jgh564o3PCq2AEzKwkPpi7BCbCWezzNdTsb565qA3KMYHLKY2Zpi4FzGPfPy",
  "key9": "2gfRUXk6fZWNNzd7KkFYkafwx2vCccbVLrX5apzkU35azdHHiukQCv1HhLnTgfGP15JATyRUSShaEdaEHQUZtnsS",
  "key10": "5Ur88Mjo4KKyGgZifLTVv35v9Jd4LP2Xc2TBXv4mkzCnRytz5aNquTVBA19s3PYATseNQ6iZ7trwsvux9C6s3fB",
  "key11": "5ET6BaSXF9BdQnGcQL5dppsNznLPVh1iF3iqfz2VPTvP7HnfMCsSnWJmTHimQEifjkpuSqJeMPwY8SCtyFZuuTee",
  "key12": "54121qnSNMYXdN6LQGwntcAkNfbNduCh96DTZCYQVvoa1HqjDwfuA9DfGToBaUJQoDWkxZN69wikb8cMDHL62VJy",
  "key13": "38hkabsWp1MiNjb7hzLq4s28JKpVTUoq8qUHk3UzNAVn43PRfF4n1ohJAF5DCzXBc67bmKos79JyndtYFnAthkoh",
  "key14": "4StQLoqAUxpPRrAwWsxLkYxTS8LSZmJbm2iJEqUeFfC65DxHCJdZm6pDjvFtDRKL3Cr7Yz4biHHTAft9ajKNMRVp",
  "key15": "56xMEP3Z4sboc1xo5DqKxbE5KCMZ77vYsu4BWi9vszsAb9g6mV7E6GCTxyec7Y3M89kvpPk57oDT1pSccBVbBARe",
  "key16": "4qkbwxtpcbMh3wtQgDNpm8wVYFJ31syyktF4E6dPoeazXQSPHLgq77YnjeR7zcfTowYwdpmr6KWzNCaLpPwc6rGn",
  "key17": "D6NjEkgMSgT2SaNTDxt5xHrjQTjNudLMGcFyFi1v5inkF4iyxNc2Lstp6GPqTWvvCwwwxW7wwGz3nof21cY7bo5",
  "key18": "fXXrf33QSh1wY7RQXDM5yconPdcyqcXgs7Vww5Fi5EQYX7JiAtWyqt9iTwSZwKUVQMPc5bjBEk1SGkUiTTfFB4L",
  "key19": "3Rq9NFi1cK7oqc1Q3ztSjaZvL5ovABXtyiPqHguEGP6WGYbRwsdyraT9XCiWtBPoLY4S726PvLG13JweucNqXEjx",
  "key20": "5NfXFcLxWcK5eTPwbQbNxptEQmE6j4jB6r6Fk8RxPyYCZnoCWWLcz2cs3MJxbaSVvun98AvkujiwwsbzSBgurhXX",
  "key21": "2QKarioPsKcfoENojgNEALNVUs9YGVNQmG98AyyR5QYx4NqH3A1bJRrnL1rVZe7XqzPh9ah4ksKjbFZ3RiYFXt9i",
  "key22": "3ETJweDbxUrgUeJVPQaGiQfyDRgXbqRgjsr1YXhsknsymwX8gM7ZiEeEe3oBCotETq3f3Gyvz4CTbiMEQBKrRVz5",
  "key23": "21f4cuaWekV8Teu5KoKz5Dfhnq9uXgbQ9yyVutDGp4eevkLnswooeASeAGiiGWweWNoTpaX89vghn7Dx6JUVceYU",
  "key24": "rKaeiit64siV3viYKrm7agHSKdK1kGXErMmB5yRQyTsj53RsZsf2EncX37R9VWPC9rSiLMQEY9dWswjSrw16rs8",
  "key25": "SJzentaKnZX8anHhWwy6ohnwa4s4gMkDMeUxQZdBtdYuAWbofNMV5vpTC9qwwaNbxV8SZYZ6XHoqVwA9v19kRer",
  "key26": "4wmQK4hpTD8kTfN9rxsjKfccfBrCUkgALxDvZHMN3Bacx5ejzuoruUCoSKCry7DJzcpgouXkapiWdMoTLPBTDq7v",
  "key27": "4fxJWZDomK7efXrAw1qbCP37DKqFaCzrCsDQWAEyGPEGX9zxSxYJg7N4CqvUJiT9qECQyppc4kJ12g3eFsxh2boa",
  "key28": "ukgN9mSKgtV31P1vUbBHZCNPeuNYp4WXANu4ahjbaNeAA4rnVuauAYBDtg6zaUe47sXbZi8E9wqFmN8LbCqcVYJ",
  "key29": "2HQW2fBwbgZR5vWu12H1YjMMcFcBXFr1V11Wrq9nfSBnVUipvJxiKvcuzvfrt2TC2SzN9mRMbrXMbQH7ydAB7S5r",
  "key30": "Xee2pKf211PbozwQSbiWr6XwciCBcNc7g6cobci9nJ8gxaLgMJez9U1KUbqsWS398JUhBpsUnbRqFg1doL7taVr",
  "key31": "2nabnUg3nTWhYYPWkZAjgPsUDrqGCGzpEFwo4CHgGTN5sX5bXE9o73ATE7qD4Qna5jng2DNQFMYGUTguacGqVdeK",
  "key32": "J2dgiXccUQSK9i4aeV4f8gTGMB3ivwvvGPZjE4Cd2DvgDPUkifMMwXsBaYWjzcNjwW1aaUPbeMhPWhesH321MsA",
  "key33": "XvMiDmMeYYranNTkduy7S5wMEsZWzHxja5p39vhSq2Y8esAZ3KFZR3pxYjq3aDXxaNEvxKEXA2kUpdotyS3yb8Q",
  "key34": "DrKpPgyhYWa1b2LaGx6gF3KMKJzYkVfRcy4e1dHESuvKCWkYiB62UbZGjnUoBhrQBPQzm9uj8zbYpZJphLSyRrP",
  "key35": "39Cae6TZrxdVitDpDSFyfPw3d8AR525uLpTXM3o8CZB3yEtCRqeqPkt8Pfa8gGqSd5Ztfc2uf4R7vAz7sWte4Hax",
  "key36": "2LXobZfAJcyvG5p94NPnQXtNtQps7p649pLui2SpFvHa4fTSjUZetkAKXQRCjftWXKtmZRmXHujefjL1UiFyxGvv",
  "key37": "2a9zRi4YKEVKu3k5pLyTk5zHbxz79ad3JzBbVx47mynmocBqKwsBjAmFEzAK9KL7XetH4GWLdU7npfYMqUSHcq5n"
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
