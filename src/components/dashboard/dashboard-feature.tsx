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
    "44ah61BZXL5qo9CxRsG2FrupABP3KL9ar3jKxesz151bUU4nYBuwJPSgkB3qA9pn2iZjk3k5voACav4rJXore6bP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hzq2LgieZDZ25Uygy9zaeLrGJupx9X6qJMAMFZ1y9jJ3dJEcDu2moEn6uw3QWVeoLp3yqaZ1QxKHrHVJSNULJKE",
  "key1": "52ZvNeFY2T3eQ7u2EnowriSEYx83c9tpmfzCayVqAt4HtxtopyrzNiVYGzCEUwo88Qox3PhSqABfL8eCA5BSeofe",
  "key2": "4oS4GmBN1K2VWsTiwiJ6EePmQ5SPcZtCC5kgqa3zHAcoEzRoTmNvjFpjbAe3zTcuzjnF2Lu4bYyAbwfdcQkzKuKS",
  "key3": "339Bjg8keW6V7jZTUq5a9x8xaD32hffh3dhPUKjdgCmZz56kdfuHgw2GeTPMwL9hygjDGtrMwfgvDkPZ6Gc6RA4k",
  "key4": "4vi4fsTcL9Phxtp3F4rSzjeexEsnpH7oQjLiP7TCHx8n8JntKg9H6VQUQCuiGLjUAdxQB35Dqp14GGGSmQndvo7u",
  "key5": "2tNcYbeCo7beohwvmbwTSpUMKCs3L4Z2nyB8fRzLhCkFqpCedG5GBZ5MT3D4pxU5dBAGnjFftq1UncGrK8coE6M7",
  "key6": "5RCLbv2DWs3DDUZgKuq2VasUtx3GtSmo92zBqhtEq7bDC5r3LCzdJdLDQGKuPQ8mvtVvB2ts52hPrQdAK3e6sFhd",
  "key7": "3y8udX1cpaBpwV9hwUyixr2khdgCy9iwFe93HiHHR7xybMJfzTKXxB8nL67AUqrJPN1RNXQvU9kErDhaGsrkwdZ7",
  "key8": "rHYa9JY7o91R9LC3SAamRe7XjQq58yFs6Vyj3MUeVzUYPvgBti3PvwmUXofP6wmbBT3rmG8AKSCSxaXiDJvPvcf",
  "key9": "21hjjnsvkzPC5Qfwh44qUJGnof7o8FLfUX6kLe8afUsfbRtAUqrZxYk99zbNBpGUJizvdtVYnz8eafvzE5tccxMV",
  "key10": "54G66NutayXbgaeXkdZ6K6beTm8AumgWaizBjdjVdNGLaoWzfV8PBb4yYVQJ7Tvf29yuoCb5siend4iVEpLqYiw1",
  "key11": "21bqRaGqyhKtokVuXsXHwMvZrgsvN1wDW3SXruHnRnwEKjSJJHWNBfnvREpyuExTLUrTymZaMVBp71SqCsbsUdwL",
  "key12": "f2w7kTMg2XZAGtxWWxL94mkdQLgx7fDzrnBRV2f6gzZEt8Fkuk2ioR3UJcsnaM1pPSfRGQJB66N7beQemq7Y1dB",
  "key13": "3yBQr7a6wVP6yVcq91RmDvPqPWQnpi3qUh1NceARV8pBzerE59dRb8Vgm11bbHKZGqyX1ASBUMoV6ccRoq8H2tRW",
  "key14": "5XYBs6Pi9DL4tri3BXbiFea7na7B8eGz3iSDGvYT71BCPQMBDeEBkUcnMbPHYDok7DeEiZxTUEfYGvMnnMtf8A7c",
  "key15": "4A4euTQ5W7KAZNDe1aBEZG2H1Shwnc44mudHWcrpNF5P4gbpFJWKvcadDpprfe5cgQPa6ToyvgEDXDSayzYbmivR",
  "key16": "641KW6aFbHDyFV5jdBFByyDz1zVzgY8WFZycLPkZ884zbDZMFrKTJyC3XFxQ1xM7N7F4ExKoqz8noFzD1694qGwL",
  "key17": "QVzyVGJsrxLY2S2E3wKZrMC7gbM5wNUaFko7wsFY4nc66kH9vxswVfHcPPPhwdiiyN4jsMASHzikxHxbd7Gzrur",
  "key18": "4FPVBn7X55evPVgnCPV688dk8MLoNiybvj1n7ukcBDTmEFWHbAL8zC7iygZ6TvC5gqSgVadeCCGn6on31rAdEF1c",
  "key19": "kQHeeQomq5tmQPBGxWWTDGoaQHjjmB9LM8ZXM7avcAjUAbgqGQJgD5Ddip1tBmixMj3r1uPNzTqQwZrvyDSQWcQ",
  "key20": "9e9spabRyj42bHTsH27Tw2eHWS9uKmA919o8AzrAeJ69W1wjJ7pMgScfTNNSbRMQENkc7zoLRowmM8fykeJmsNf",
  "key21": "2BGgymBtTjMpV2MsEbMJoH49kYJq1vBz7r92L4nWEMqoY6tVtkWaZHqYATLaMDG5BpS5o6LR9XkjapMZ5sjz6rmj",
  "key22": "3ramjFrVwJ2tAuhyf7fC5xtMiaP8BMSP7SCtEfKE9xCeAd91zEDR5K6mV3c2fCu2TSBhH4gjpcQzHhvLebUHzpXV",
  "key23": "5ZW1bqUTymX6AfYJPfY6s3aqpxm6ZpvvrZiwkqfY5sQuBCZgPpgG8EsuQsi66oYQhf2WpXWxow1NKMPjiXDhtDME",
  "key24": "5uxh2Fze1APHzvYwXdgZdi8qWc35SMLR9KZBGim3biUSVigirrqAKMxrJD9DwDjJLPTawnBrwB3y2xBYypTHrD3M",
  "key25": "6kH7QVxFZV8QzZ73YbvZnAzyk6nSkjMXQ2DqH8BzD4gAJc6nGebFbV5FyefmgxpsMxG6KPdGJit5RaMJjDk32rB",
  "key26": "32RumAWECAEuHuMcaxpGfBypRWdseA1D1AYsVYQxDbGawd46RGL2vmZ1xhAnpLb1CoLvBsUTw8hA6xnU4nzwRBFu",
  "key27": "2DMMU99H6WA9g89Br7FQsw37g6cX4r2P8YfNMT27sZcXnmHL3rpYuDFB9hWqUNRLzBCXMzPB88BnxPY4yBQFksXc",
  "key28": "5haZzK9mdLrpUUof2MjKVMrhUtJfEdskd6YBheQfbk8Y6Zn2aLfXpyGJeT9hipF3yNVAvKc7Ew9qNGTGuJW6upAs",
  "key29": "28aMrB5NnhVMHTHvXJJUqvKzpZmymSa6VLbLWmAGXvdnJ2ev4tNBhTfvjc2kS3Bz26tX9fv7iHziTfxD4y2YZ2uF",
  "key30": "2pYF6EXbTGgiPUcAX7r2xtfmRUiEQkY741hUh7GX2HJBoc29NN119gCoeYjufzmp6koxwbPZjhcsdAC2uPQTw2EK",
  "key31": "3oWpkJjdcatvqoBdxTae3A4Gv2W3Jd7pX8DNje2ey4AJonszfsE8jVRyU8g1hwQfNU7yat2dcUKU23cpxzXCcWps",
  "key32": "41L5Rv72et4xJyMDwrkD1j8GYaUiTovzgNT2eRq2ALu6iMVBXRjGhNYvHvmVs3chRTwZb9DpCPXcUZ5N7MqVojvy",
  "key33": "3s28zCpkqgUTJP28gVWfghsRzCHMq8grPJQRTP1dDiA1fxmXXW2BMtYwnN7VaUoYN5JdKZtEyUbHyMw6PfXwn5VR",
  "key34": "zxss7oBhgP275HDgRiBZEcR4UpZTAXNJ5d1YD932c4pjAWiUzJtcQaygBrhY2nnRLJC5gu5vLYubsMoy6YLosnb",
  "key35": "5GTYTQHsNtoBYXyRTbZqHMihS2g3GYrXdedtacXYWQ6cTvAjNJqDbC2W7RgZeQFk45WoTSZR72e8BsLTbuug5PNr",
  "key36": "3bjTgVpvQyJmRZZf6iFAHouSTwccSPc574xJnsifYRzCTD1QGwSYAF8Ujd4VzNQMooYVfNJzcsTbr2RuEkMHJkjK",
  "key37": "4FBTCw24VHKShzzfqX6L2sGPSJ9JEpWkmijd3Z6MkEi9WQud6wYvw5Me18VLBg6Sgzbn3VVkCQ1kcxKA5y5xXiMG",
  "key38": "64TxrpX4ZWuPyXTsFRinV5qU465S3DP2tz8bH6UcxiEDyWY76cEAW93Ev3uSZUMrNs1yFveXVUrgYNbzMN4i5gRE",
  "key39": "3ceDbRYKBSehyn3nTFf1TDEtv6wzbtYyjzuGb7ikFacMYMuMwMdpErWNhCa6Gajys7DN93qRQLT5u58bKbu52TTn",
  "key40": "23vmonJJYPgnRAy9zqnwy4jk89ZsgT2k2W1TpqbVe3uTumrEnPJ2XADQ7e2DkML55FSDsYKwP74h5z2svwoKyLT8",
  "key41": "2K7uCLUHKSMTwwXqdT3TBNSr9kXiYgN6sKBrH5DEztNdP5ZatVqJSqMFfCvLdu4LbtZoEGY1hsq8jeBLDy43UCJf",
  "key42": "3PLMEsVbUtzc7BjjwT4Gccao6XcBWCDBVaRDzkMAVY8MWK91s2VjjtkFDdX4Lyq8MoqLW7wozVjzVVGw1hPiEtW1",
  "key43": "NVCFefZuNedfp39NjexHkJ3KcPdADJjGgV1dmoXR7Va3W3SMnkSxp339hAdBUmPTngZ7axFJZXco6w892G5NTMb",
  "key44": "3WaD76XLDfuAufVbzZS3cmj2WXS8S9e2LMVrjuLmRMmt9UpBETxe6xix6insJ6nKrzch1mSdZTW5VbBvqEhMAkBT",
  "key45": "4juEKBJXVgdqP9CMid24SoiJNLXbL5ymCt68DLDDzX9FctdU1HuZk9Rp5BSpnZ36XKwoogYLoxqByT5sVDE97a5x"
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
