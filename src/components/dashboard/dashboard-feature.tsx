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
    "5NBknhdKsYoKTE6uTMqngFb2CMjaRgtF4WwbsTZZfsiYXHKw9yY934gCsmR9SmX35LqRAhmoWmJ4zJQi5imE1vkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8tk76dftov5tnMyfBCvY5RQupB1QZHKwGz66cP2EFJaqZgkQD17fmdBPTyYn8FZ7VwdBzKAAQciXCG8k4wh8AD",
  "key1": "3riQB6aKNEH5DoyjhCYwoC6WcDJ9aDMmMJwKQ7pUJusMv21Bwn2rSupVwZJWf2eNAcPiutY525EMQ7SWZR66Fo4t",
  "key2": "3Aqteep24ZhMij7jEwdkR7so2k7iQEtaFNin1zm5hsB7tN5qEXSX2aSEvRDC5fBzCZdtbZtwiwhDbpZ28KFGe2Tr",
  "key3": "5mt57tU6qzBk9f159MX5Ln1RkvtaEBnapk1BaKLXHTqrCowiXWgD4K77XJyDuwYvub5pvqsZhPpJ7WDMd3gLjupD",
  "key4": "8QpkoUCdxZiGGSB92ZmGzdRDR2krVzfG5KXtGgaC1TnveRb6Vs7oZcJFde3VJwm1U4mBBZSEFk8a4Fh3sysCDEe",
  "key5": "3SYwqHSWBGsU84dAcx7U5BHn8dMTELX7rVnK1Wd6Vtm7sFdncyMmeZHYPtMpzNNoGwcC7DZh7w5JzmAEvfkP99Bq",
  "key6": "2gEZeS2MQJjn5aiFdnNaSRecnMM7bs5LhmxkveR9TTXauPRfuN2dGjjxwQHEz2ey3Pnb7CehNnerX3oaWYakTLMG",
  "key7": "nCoo4ccc5BFDSQ8D4rBpwdnyLSCqqx259oySggB5Jo5MugmA3EjcUMo8qTrabF9LvmWi3zUSUEgoJtTKUvaoAC9",
  "key8": "5Rau69qYxfaj7QR66KnRSoXtyUhv3rmojFri1PqYC7hFx7yjA6w2rZVK1dQXdRQChuRpfmt6jy8e23cePn1GFXEk",
  "key9": "5TnM4YMFXN6RdQkdLwAt4GyyLWhVof53FGx999M4ACGNBxxguyrEvkxQNpjyxm1tvXQiXRQgXMwQVCcXgFKhMyRh",
  "key10": "67GUhAq9TFuf4oHpJZvwPkpvk2FDczPgXgV6jQUjUPSV9gPECAiPUSQno8wVKQAzXN4RLqQVYoEdG1ZXo5ZbDxFf",
  "key11": "46p3kuE3pT1ouhLHFP9bs29rFcyAeoUTEcc44tPqBxWHm12HruaxqTStZiEYQmdbFeXvap8WHA6Y5iw2dFYoRqUn",
  "key12": "277ixeXb5u1LWPGerPPNgYUYC82WkEY9pCdqaTevqPpAbg4p5xQZUN3XdWFtjfikSPJN2xqZukJ8hG6aYnngwtDb",
  "key13": "y7RWQg4SpK1eP6W2pRSuaSiDGX1X4bVbdZZrhFsSqMzAdwTY7RR9HCThX8snZoPowNX684m19zDsyL6kkhMroB5",
  "key14": "2bKkCeW6MZFYR5bhTvHzmizVMqokY7X5z6r4atDajHd8J1uXeKTkWqW2HreV28zNPNePJ6YANpF4Cp8zqMXZB3m2",
  "key15": "655koUtnUHgs9YJmSz2mRRNuhgXFxrhRh6gsc4fdWLEcELPzkXuS3ki9yMxBwJivzSkgUoPX8NgeMT2gowrCSzfW",
  "key16": "44JL92Vobvy2VZcBa3yMsCrpXvG8k67EwDnh6kgJ6zjhrCRR5ULMDy2XvL2Jmig1vK8otoY2Y9eSdCSoczbZEap9",
  "key17": "3jvXfnNqQtC8rvPxeCq3fHmmCxizezFEtTSZhUcnPMtxTAcMLLsr7YN3GUxzARVkjw9cuiK2EihibMSGnf4iTVjR",
  "key18": "XbQANm1MxQYHZDVyRoBQtHNgo3hMYoaoxTJ25W1p2BbcUAU2tvoS84qU14AbJtT6TwjtciuJvFoEuVcL2CzAzuM",
  "key19": "5isz2ZSfAhPeWs5QUQrsciGhgbB4MRMmPEPhwatWCBrfaBZhksP4spnztBapwxDYZxQAwbSAjsakKQgvqCDYMs73",
  "key20": "4fhp21ne7xoiShXD5ZZBaMGo6VMx124f7ZZNJ8kcn8PrScWp28ZAq6Nz71XM6741Hk9gVSdx8YtYnQJcWCGuQLbk",
  "key21": "5LP3ZqFxGpeHPJfsnryAaB9gd9LVgkwQNY1QHE5RRdM4ZdTksLmRhDU7JT9gE8jvoZs4pjS9or4DwQJYkFfX1LPJ",
  "key22": "5bFB15SE4mNEzZibRtHAMgM7GkxoVxUatGqJpBxUHhQox29gC3kxovRBPBmUvCr9R7HgBaK7ygvFBKdQNf8YUeH9",
  "key23": "4uPF75LqadtWMy4QY1t9u6qGzLgt4ecYSPoDeBmVxtdQW43MhwyKaRTkHWMbZs1MdHy8iwELVBnv4qpWfsFUxZMi",
  "key24": "3snDQrqsznw8Wo6U4DVgn7q3Q2iCV81jDWSGnFP6w7EfiD4nc8xGS4AgCsjzRCLA9d77TrASkf4JiZWR7oCnDcF2",
  "key25": "412iDDLNXwSFuuzgJVRRcrH2ta1Y4CRb5rCnQyeWBDN4AZzqpqanoYy9FApPeebwb8hmhhrvx9CoBbKPTUG5QBVr",
  "key26": "2WsZnA36kKLWbiUvp3k6YmBbBWLs2WgfMXuYMFkQgL1zxCiQxnfucWfo7FKdVUgmudWXWhVyNu9VZLdTGKdwVKLq",
  "key27": "2skfQgfBrVtgUAgteaux6uv6MkuJSzppt3QZVJ249LZxE8wsKUoncFnoMwjpJszJkNaxxH4k8BBnuhvvWprmXXRM",
  "key28": "33EGgRK1nusbcpnSGeLPMo9NSwGkGTT8gxEJSHbCKnXpkP5HMS7N3sTDNGSzaqWD5E1t8GDkBka564pFCy2NBurN",
  "key29": "RNbHLNKDkr2tRkmwFxnSZmDLRvwYQm3h86REunvjeeoJjTvWq79XiaPd7mPx23nJCB1ajn81gCMxvkmW3Caoa4H",
  "key30": "2YstaWubq4Z4qET1521Vog3PihY4yujr8EfstAUc2R1YEuuaBSHZsvnJuJhYxvosdgiMDLtgQUikKuYoZ5afxiVi",
  "key31": "231ciDVpMLsDsEGrAsjrGSqjVkHbSLA1QqnXLtk5rPiyxAjuFPUTUfiyQufD9kfLVctF3KZ6wdaJDjGWWeHdN9zQ",
  "key32": "5x5RGYjKw9T5jN2xxeuPW4wmbBaZ3hw6umjVrEmuKL2DpmQaKcqtarfBnCu5bsZLdSwenp5g6u8tSNQ5UyMPNtCv",
  "key33": "4fqQtm9fnNUT3QgyKKtPhk7TvWsSqwx7TDHvURaUWGc1nWYaxWpC3q4vaLw3KWkVsZuwaAbkgdmghcRZaHM1w55f",
  "key34": "4KjMy2BSp8H3bLQD86WU4GjJkrKmsuLr6voK1DfPAGZice9KRC2Xymo7PD5cvjFp14wBgwvQDBTwX87SjBUUMrZd",
  "key35": "4JL6baXeSuyR5ATk6Vn5ss6eAxqUDZneQcRAT9NMyb9CUycR2U1yCbGRt8hwS3DmKnfhMFtmZtG454dEo8gDgRKp",
  "key36": "4XKLcdheBQisUNe6yUV76sEsoovtFoieqanwy5JocRC3LCQdKTTDcmeETvu6vjj9LHhAmv9puWGyH4R5x3CWcDC",
  "key37": "5BYbJM8MNdx9jWC8kAwZUPUNowzX1P7TqtkuGkH1ZGqydgMSsXuUFMqXrMe191mWYtFmB156VKcTwPpFdgyD9NB1",
  "key38": "dWXPo5J3oP7y6RiKzhEeHd8y56hxHkWhk9yfvLDJ66AgYyeuLNhMddq9ZfrcMp2JE15bQtyFrq2A413LxnYViLx",
  "key39": "2jygZk9cKPQmLL6h93Yizc2AhZfJL7TndcAR8nQzQaWX3b2n7iKnuGXDLCWQ8zmhwydCpdKvzkPvLiBRGMQWfm49",
  "key40": "4BjTYLRa666yToSdnUcnLU8jyvEvChFJbaRACfGv3hHSoMybda7Jkg47qFNsRZ33KyNrcYevYoEXzuu6pkBrbJq3",
  "key41": "2DgZLA8THQe4Q5iiu7fP8gCp87t4tFhZgYR1UQV7mAVNqRQRPkvmYwURnUUYe8vbaR4YRnsq51rX7XbGEGaUddcK",
  "key42": "4Dqm1A5G3QZ9Hkay8q1Mw1Y2dvU6pHQR6vg4vNDMB7Qx5oudzNNztfxdkWMABD7EsDfom4V8tk7mwD8cc5jxjfon",
  "key43": "2L4feFq8Bmm6vJYy8PD99XpCR9YmxAyXrA22U1mGJrVookxuKgjwthyUmTtmySKKx6ipwyT4qgnSW5WDLE2TNvru",
  "key44": "2U9csagcpSVUY2ryj5FcAoNayhz517bUXRwfHd62zB2zZsWo6KL1vgB1K7Cfm2bWFBEh9sPCMZZvJxZxz7Kz5HHW"
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
