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
    "2a5jjAGmnghwu7Z8FH1tLSjtUtimYuSQDMzabkuHrTof1q7EsX4SmcsN1xJtkqKx4sNTpnicfBtFUfC3uDctzPya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g1noULdkq8o2oziTwrKrHXrXSY8piiYysyBN5jxw6RQdXW8S3bpbPUf628YrxRucMd31c7gHXfR4x7gecZYJs5d",
  "key1": "KC6dEkT5EAUoiqvcY4sVBShbAyBEv9AacmY3AfjcJ7LHBbugAp98erNRQySDdifieJqVfou8SQeyEdEpvxBWuwn",
  "key2": "5EeEpKc9dRuaL1mkzuZz8ERzY2ikUpiCYJSrjyzN7pUngFFr6E5RCQzDhMbTPHu2f2Jsar2Ud73N4N2rZikY5EdL",
  "key3": "2EvTAJrRRoZGcJeGGNMozmkju1SfF6dQkcPxjrfLFo4TMRHmMoYPgJtXvhJGKPCpgG7zJq6KBwTpkLNZb1SsHZFy",
  "key4": "5Loob5GuRTKJCEfk6NmBfswqcqU2sKZcXsyw3aB3M787f6LgVkYkcgpMipK8QGLXWTs5G31LLHkMqhUmXioy7FJ6",
  "key5": "KuZCtvSynGZJUTR2rfrgoLgWcvfztyCc1jc2rhcLQzUwwZJKFSRcaZno4qKsxZ3WTms3uV8trhSoiAkP6xxN72n",
  "key6": "3gt5ZPQJFdp7w4hUqSQL25BZ8xnysJGMoKJkyFRgNp2Bcw4ahVUqZXH4Upv7wStvwDkp2pXUCgUu11Cda8TBW8UR",
  "key7": "jzmyajoEa3BN6WePxjL1iCktzf9MKoEF6G21ZvysBhmu2ztLnmzL6F3STZPPA2VSXMLSsnPynZAXyMidCahM6jd",
  "key8": "5ThKYyw3Da2AL55zrGjz5ZjjuiXAJ86W9uEGNk5hp9CSLMsAV1eXVczroPdAQuU6QRNpdDTYwaUvnD6PkyKg1H4N",
  "key9": "5KzCczXiWCA75uYHp7M7SgfVmnuWYEmwvfWEJUFwYi3mLm4gupptGz2xmv8fHotb76QKf5BUcWUmWSGv6VWPZZbX",
  "key10": "3ZE9HE8WjeHs7oXXWTgx8noaknPyQztjB2i7WLAavQ8g49877Zpnp7QFnAFhikzDy5bEnLynAvLAqfRgeHXdBVV6",
  "key11": "dDnhdXNdTNvDydwJPw5wmXhqGxW3Nigr5KoCypxZJc4sdFAKN7kc8Y1UohrqqWm2yXNQyCMKbduBQwP6rWMt3ov",
  "key12": "2BxNRAutqgX8UQzcAJKKNs9pGUmeJxToprMBvehonUsmoNqi32ZsiA7WvfDLEP7pRwBc3UQc777nkY9UVpaWt8Cm",
  "key13": "3dJmRuWrkkGDHBvExbU1chLRjaaEKyo4AF3fFUZPPM81keyrcjtXmLYEbHgAAxhrusc8hmbAf5vciUgf69C7DkQZ",
  "key14": "5gBd4NvVJxFL7mo88NGUcLPwYKD67TaHFbFt8onPVnMdASAQLgEjLmkNz9B2c4A79dRGpzXSyCwGTfWyfKxmyNCk",
  "key15": "go6QW7hbFrzu5z6DfNRcoJ8d5TAXLQdq7oHrHEnAx2zsDbvDTpWTXfFWNzC39eHoZqxWc8w2y1e7dZEmcq6HLaR",
  "key16": "xaWtXghBTY4mriFbkzSu4p9mtvGMTRduGw3txJPdtRsuthXv77NuqRUJEDdwXZCaNJ111mChKwYfMUqXrhgVXtw",
  "key17": "5v8GfN3UWq2f6drMMdcETNn9CCxqJHXsuG5HJn83F34y4hjqdfNb13fJUcAu4a5qsjXoc1MCRHQwMv5Eccc2E68v",
  "key18": "CFQpAcLRMJZgd7Ht941Vc3mZZ995z2HwDYT2co1MFnZZ4BvxSmKRknzomuTUgMXAK9jVZEDyLgeKJJyUvUchsjk",
  "key19": "4Un7DX8Fo8ycwASbxFDsnUpqZRcfchfgmd9oCYGKb6AzHJ8MjACKKXveCRwB3YZHqtvFYDgzXUuZXGur6FVtvxtd",
  "key20": "4sk4d6HEhedsLrdeL3MBZQftogrUg6FcaQRNsAov2ejDJVwn3uGxty1ysbmW58GbUHbh9eL9tcES9SYLbENu7Buq",
  "key21": "2HTJsrLbECvdx6XJ1KfZZ3Nt2tzkVJGhr1iqcxmSEAdiQiQhR1WzGkGMfzTvVMtyf8LKFohp1ZPN374imMwK7acf",
  "key22": "2MRrjoCMJwVE4FvMEShmvN7Zegr3JZqNhAGssTPjo5PwveCDiMxcHMTnvdDQhHamZapQ3UHcRNQYRq98J38CDnqQ",
  "key23": "4S79QtF45gN2tdnyBN8km45p2Vaxjp3ewWfHrHpWdKFVaiP6BiqHL4uDJih7n8UmujfcDgkAczQz8fHu3mwweJg6",
  "key24": "5r3Ngyf1rCCZNpmaXhV87x8QVJSwWMqTArbR6Ri49At5pYLQR2exE8bp684rdkpoh9AnTVWhxuh1mSSwrpYeSopw",
  "key25": "2Vo3uF8mV1gdGaF8iZgRfNHMzXoXpQ9NvY2LjZk7zUgVUowGNchsDdkEo7sKCuTEXuEvRBCjGUPppiFqFNLj1h8K",
  "key26": "4SAd6K659yM1xdw1EewmFVxW5tgHAnBSdcGCFWJzvij9eAFVCiVB93F9m5RMSLd434jvnKQ8i6R5XZta68NXo93t",
  "key27": "4qtQLr3gUkoqW7bW2izJs9ngX5TJQ3Xn6TdaUZisU7PeZrLMxK1R5q8hFKRJFVP4hdSdcb4ELBjVd3aYQdPaUZPP",
  "key28": "5yhDa12S8bvMNz4BHNyweER8tpgTTBw6Vv3FM16Lbs9UJ14qeYWWP9QeuzsTANFk91XpuLzpp7PQ9bnd9Kz7AN4Y",
  "key29": "38iGouKLbhXfUViUh4Ue2fMrqBXhsxYAjtMdaaoomdRvJty7cVqjoLhXARNt8QoLVdMiFYo8LbQKiDdqikc7wg1k",
  "key30": "uWkPjJ6wwy5QiVttmob8dQLrG9kbEJAw8HN2dtook1Ji4NsYGYCudvXGSAi8zg6xHgCAXauw3YwZkD3nehE5KLz",
  "key31": "27rMnjSrbQ9NbgFReocgm9EZ8qHicZxkeEifweePQmbyKXvGdoXmNZgAsiQy41Tx3a4962dy7z5wLRSm2MRET4jM",
  "key32": "4u2ppznYJ3N3wmSmpZsS3w3zD6We55bYSURhfgzWJyynhayPnkExHjzMM6n2iCq9AyPm4YhsUNPVXNhEmyqkstuH",
  "key33": "55nQ6KNSMaEFmYSKYQAeQnfr6qNL2T7UdqxhMYxJkufoMX79ZikbYx2yPxZm4TFjFDAJa4L14MQXPbLai8BqVrU6",
  "key34": "28KfxvKTqpc3mS28sXWQGCJHsvg3qqBiqicer9Uq7wHa9Vno6G1Ah9MsJnCzEcCSZeYUuuKMU26fhQo8HdXdcAD4",
  "key35": "cuY1AbM36VjNFY51TgUZrETcTymLP3jZFgAGQ3UrYyzngywmUbWLa6vBdVLREXDRNgF2Y9vXG55vd9xsrdK4Q4r",
  "key36": "3n3ZYeexV6jXqya3SyveCJrNyhT6L6KtV8YtWy4unnPx89m3kqZrqkUgHh6UkYd2A9VLJaLJjCC2mfZJ3P7X7teK",
  "key37": "5gbt9GxMWdPmizNKJEDN2AXh9t2qNaDkYAwPjh3TBreWtkGC46xUYP8FfkVWq1StSiyAhbQeUVoEDqJRV1WZXY3Q",
  "key38": "c6eHjdcWY3S4KfEQwcYCwrPSTjrBEtS68tC4gq4KeEVFhdJWWkJrGpq6CaVoaLYseUuTHPkvUjFqpyysiAvgkjc",
  "key39": "4ZkRXPXke2agHkcvReWCFstZDc9CC83d7byn8PrhkHpXq2EVvJAheBiENx8ck55MgSq797hSzYB1yEkNLWB7Yuve",
  "key40": "4xxgNPd52gwrv7bCAQY1gkrm3Y22nf8o2QyXypKdD9k4E9VrzGz2awVj9nNDu3WvJjFZUA5t6LngAZJkVrqosi9y",
  "key41": "5frnBRk7p62qjHD11jXaxYchqFaGjNVcG2jjWCWLuDUEa4daZrXtpkcWS97GTZgvrR1NaNyoqMv5qrsqCXK6o2q4",
  "key42": "3UgdTw5auEapcvYBvpapqTmomDR3rspavMhTwikKnw1KGvhybG1V3uJWUwzbnwM7uyRAbqFfJNjNEjBqMBf7Wu3x",
  "key43": "xWo3th9RDpcWc5kSuFBr8rJ84AwDfqgZtL84Fv7XpUch2wN8nQhXVoktvqScFRjEH4tzbc3Ei5smPmLRZJt7qAG",
  "key44": "3mCxTq8VW196DxeFFHGiKDj9qMWBWRtQov6adDgm89YfeMvguz8rm6MpdyHKVbSZPvd9Ao5tkDyfS27cC5ZbSoFe",
  "key45": "4pgCLrpCUvM3hGMwh12krRa45TyBTZEj7nFdYcq7sd5pT9eZUhR9Q6jA8tMjb2jDrWNvUEWoDek1QM4W74CdaXfu"
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
