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
    "2kw6cXvFCzrZNRbdeBeCajvGNgrGfJUMRmWyWGtNFZEcQtEdiDheXqL3ntomCfHicNmktCU7tMBjGs4P9b44CZug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LCbCxUH3Nk7jPCDagwNxLpGnXgJo4dos9WagAEQj3w9V7y2CZL88bMAsqRBFkLNmXhcaFCZ7UCW9Bvrn6DPvxcN",
  "key1": "4ywnwr2J7HhzNUJ4uLtH6ZdRPoy1ubEMnWK1X7yL3Htt4CFpoeFt7Qogoao2CHsoTPcXpQuVTG2e3NPHn5NdSUKT",
  "key2": "42AZkBTCqZ7J1cUBr76ehBxD5HTd7ML9yBs1WufkdGzu1tcjTC5dYdF6Y8n8i2PPzrqu5vzcrv7gdPgx9H29VrXU",
  "key3": "3xj3YqFirhfpMbcHWJ1JbP2tWyocsJPyeeEc96Me3rKX3fUgK6hyWW9GkMLzNqDGWrAe4fLkWtNQn1dtWxXG46Vf",
  "key4": "5CsQnHxACMfFyvRvzaCYJByswtqWPKKjenYY6ZeB98shaomjB5oCBZNvxUqUGKisn8V9ZmH9A4rGuMbBLZMJotgg",
  "key5": "mhaEttvouTLW8MUNdSCJT3b5BgUv5DdZTrPAhUEkubgqv5mjRFjJuQopqwQ18P4VkSQBewwaQzi2pYp85gKinsd",
  "key6": "3Bzwq2fmYLeMxkxgw5bJMUvRypjY8d25DYWMJcEkTBxTUzHdLoXsRQZ3cEukoLB9298G9pENiRxVJ72VA1GTvZ9m",
  "key7": "a7316o5sXP6nJn8XqCnw45WwmMF3gKgCgwR1WW1dwfk6hRphnqSSv1E8LTLkVoX73yk1hw7kvRX35rkbdsonED1",
  "key8": "5UWHeu9HoDfVTFHyQE7q7GgkCjdAraicQzFXMwAKkB6pi1Lx9cHsYfyrPKsD8RTxoWWqRoJaeDawBtnvF4cyLwuE",
  "key9": "EKuecH4sVbXzqe5Bc1Qiw1UTUVKMGb5cgaGcUr6QsmfJFjTHwnV4gCYo58twx6HvY9FFR9ngZzobag4SXqkyXeR",
  "key10": "3sRLK3aTD1xtvydFf77qHhYN9kQE5agKpNLQ6FFRw4vMKmkF24vt7EJMZQAYAwuHq5ddXtz8JhGCk3DboThHRT5v",
  "key11": "44RbxLX2uqjkk5qiVgjLVQuzZZqse3GKrKgMEhHor3Sk1ag44E25XB4F7qLkcYHLvR7SioSyTBLppjXqMSj7YV2p",
  "key12": "55GvEQGRzYS43eFqSycELq4MiVXvMzEq3GCT4i3k32vosQAQ3dMh1DTZ9YpALTzAVKeCEeSCqdKvy22w7VKg6sTX",
  "key13": "3TzsXBmjpdEhQhmDLvgQ9AfjKdj81aMHxDKoaLwoF6pRJ9wBQEznF2hizmm8em8HBJUdbjWU5mwWKa5FW59e3FjF",
  "key14": "5RcdboMLbTiQu43FTkRjizDTdETEsou7z5G697fsMnuPxKhemceLVyTJYzJFXACNmFPqoezvNpL5e7HXC1p6pDnC",
  "key15": "2u8xtDh2oWsPKvokKRuQAzaxDevreFnJNq2hyXznp6N5rdnV5ZbBhPCtUvWL6uSbC2VrnxnreCCd2csB2VZd8GYY",
  "key16": "2muA9RRUWJtDXmXonC5k52v42RdBMs5dKF3zYPV9ePujsbDDmhQTVDVp3T9pmd7aWSuPSF6Rray22PAsoj2hL1BF",
  "key17": "BoGM7jniirhL2REeJiEc17vTh4SQx36QRdwAUU9iBq1dEgyQPyXkDaio2FAbAaEtYw877avjiUxfmppajJd3sP2",
  "key18": "3hh7h2ngYbprDQM8GXvLJiDWJhkaX3xrBQdQmjf2zA6nyHHUWjxvjWREuxrTUupdDo3avNnd4osayXdL1KJwexVR",
  "key19": "3J19V7vhumxjs8HMsmnVzSNfss9EWEmCpZZ8tShWdRd1D9SPonL8A4S72QDfzEuBMuXHehjhaJoakVyvLPSqhjYe",
  "key20": "5qk3xBP4zbUYVF9TbvnDu6kM5Yf5NuRVczEaDYrURbbRWEGV2KzwDPV7rEKDABRgm5C7maFqYBpkAUdaF5mZSq3G",
  "key21": "2cA9iSG6FohdSkR28UbRMC7FnxH7s91pE4F1BysdoxAGFpT3iGojXNGSeanQq5BUnuYDAs71faXaTTuACRM6aCxp",
  "key22": "4KRkJxiEwAeERwzkebZzvoLWUSmjXagSsLLmPAYpZrPMaPBpykipMPP9LZ3aYgFgV2GFWd8A1SXciZqC9Wr5jzGt",
  "key23": "PSUz3JzB5wR1qjKfBCCMAzao5fX7WJapfW5vACrRmc6aUwNX4UDJCcwhRTPE4TN99JgPAm5dbMbUpp5z5nshyhm",
  "key24": "3C2LfejLMLrtjZXLZbXyxkJXe3MLHQAuXEjsQy1HEUajxfsuTmN5LS57TRf11ztfBUHnA3Gw8Nm3WeCbpgfHJExH",
  "key25": "363ixKUcFYDoXng7wmKHu7wLwJjoT3firzee7czWFD2j6AcvS6pE5XN8Q1KmBPy5etbuK87NbKcZpP8R4s2YSRbX",
  "key26": "2PvEr9VP4LrFopjjpWoznqsCdAHpkx4iBEeUTcShGiWGTdZ8G4HPC5CyvsZPpJEF1wjFizEZsxHprz5y7MtXxdKD",
  "key27": "4gUj6zhK3i8WL3Cv2hG2BafxnYXDSjegGWm7VoFvmAQ2NyhLayV53oYCf3q58ERJZsQfDyuRtdNbXewyzRWq5xuh",
  "key28": "79UsZ9BLRUUJ4inUrtQExtLmmxhSngGoDRwvLv78XTiwSLDSAfe1Mc2Sm8FxcYGu5UMgrdF6D1Yyq1vNTnYqvZR",
  "key29": "53Tz8pHaFrmYVnukN8bcGuEZZwYTYtCGoLNmNif5JWvHWdoMyQGa7Ppyxanruyqa8fDSFAifU6KaYUu3mcZgJrqC",
  "key30": "5Y7gNZsJy1R8qZ7Fr1HC8vjdujqPqJTWakdAQsczWTNmujS4LjyWHC8BBRxZKJYQKg9KE3fZ2ECjpC1BcRtZmETk",
  "key31": "5RTCL7vzBd3vq141sHiiYPfmojM6sXvJZ257ovWjLMZ9UCuHUtTEASr3abp2ppBEybBxJVNMMQv1uB9EvFbEaBXm",
  "key32": "41Ukj6s36cfptT3Yu8bb7c6jbU9xj5YD2yxfZAa44K7F922vmZ36KAFCBQVG9iYcicG3YAD2rdqEnh8yoA7jw894",
  "key33": "u2xHKhcYScNX4DmenovbVuUnVHRbRtNx5E3gNSzRxGz4FeBVDtrP5MTHhvAusAXQrWFohjXiymzAk1sJ3LbqEpf",
  "key34": "2TGrkQ49qHu1hj41kx6uK6WdTwUPduaySd89m9x1QH3Neo8kN8w5rzxAnqVHgJ67xVeTWU2vKuXwuVxBSjSUawB5",
  "key35": "2gpkPp4xw9NoS216H6am9ZKeEEdqCNxkvNM9KUTDt2aK1XJCt7ReBUJyHyyLA2KE3T1pXMkEG7mT1Kb7oqcf8sNd",
  "key36": "8wHhkXiaXqL9T5ioNnecjuGr6mUKiVb7Fv5Gi2bLwXZpKAPQmGpGcSjc4Y9jq9gSHWw2V4Hna9oRgDDfyYpoZWY",
  "key37": "5ZahwF8CbFz5p1SxtFgVRZkUPDjd4YYRycojaEEydwNgbokLyU1jfeQgcwHZWjLG7dmjUTx2L5ijA1C1GSqmVnJT",
  "key38": "4A3PTuX7yUrktnPXnX1eaDnemdbJytpc9iRQ7M5wW6eqxi2icV65GcjH8skMsmBTgL2QTDrUdHmdDhzQoK8J9h9v",
  "key39": "4YkKyQQVZGK8gUMkgWEZimpNRjdjT99qSrTSYoCvsvYpWiirJpr1gzUWTvXbN5bq9c4aHKLJJX65ojh2Qpnnw17C",
  "key40": "61X1BZCGYiXxv3Ye7tWYXQYTaB4wX8ggPYwV9YSrHQzN1HXZ7JoocpYuNWxSruZsUAwfEr8Ad3G2CtNcwiwo2kr4",
  "key41": "4z6Ug7UPAz7GWsYhkEZJ315crB93JmaZi467zbXU9mzM7G6JZ3aBtEY2k4pfVsFtcpGSSWagT2c5AUHQu2vBWfiZ",
  "key42": "Du2tqGw1DLw59UZHGmpHbqzzdqMnbA5dj9NzfZX6UETHo3DPG3fWfwEGetr5yucoa6B1pbSmUmEJ5P7goquFVoD",
  "key43": "3X8PFAAyHhh4uwLzFxzXzbEnsUKSS9s7DWdkQreddAESoa41SsGHUqwEjvn3pkrjKH17j3miYP7zs3EfgaNLobnV"
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
