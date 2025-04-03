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
    "3nUV9Awo1TR2o5VbHe3u5BkXu6mfhs4qaB6EiymnUKoiN8Yna34rpKj9aMxmv8oF8v8tbEaiVprGn4LSg7krTCQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41jLsTbdMBna778zF6v6QRUebP5eyPkXcwtkZKqC2aUf8bovK1dZYLmYqeqS52qRDWLPmQ9uMNZYBLTu9CyLX8Py",
  "key1": "233xpdq8XnGvfK1VV9kbk8bRB2uYj4xsBgTtJr112Wos5dY1CYRxD1HFb8YPFJYHjBenTFRwHq1qc3kdbDcEF4rD",
  "key2": "4X9wdgVWquovJyub6qdyDk8bYFwfTFi9zg3c7nAAZGs4x4fQ3nXCPcQyyc5ergJFGVdwU6684vJwwF5MTAhtfTX9",
  "key3": "3pR9ceyPTKuy1AZS3E8TCQ5UYDixsaBA8aZxPed5K7Vmzt2DRwV2Csitvbkow78vNG2giHAx2quxp8buHwb4dTir",
  "key4": "5gdz5snkDPCLnQApnv3JUi5Fcx1WVLh25YgSC7XBJsdSqJssmX5NCo8m4ouLZwh3w9SHFCQseE8zyGLVMzzEo8z7",
  "key5": "5iAkoaxzHdj9xdezgzGggCvuYpw8nkPMdFpXdozBGE4PuAWLxsfSaP4TCEd1Wns1ZeyjsAw5GNKUn7iBz1UkKuYP",
  "key6": "67rmLzJwaiUmeQSqUKLkfaG48ZxfvsXKwraTqRpMqp1ECYN35dJ3ZAXGHSDb2uDW2RzKRnsGmJ5pD49f98W8r7kx",
  "key7": "E45WAbQwy8w1N9YyStp8MXwDTwwe4AjfqVrCvqZoJChsQSeqdcq8WZeGnmmDGT8RfqPiZyvew7FWwaVQYsGv72h",
  "key8": "2AmEx2Ev2Gu5z8vJ1Y3Mv7nuEXvHmr1ZNXqcoYG1oyyk985NQcqV3uCxxikHBF34GhQgcd5WTid4TbEiSr93TfAh",
  "key9": "5ETwAiHXmtqGr1n3gZ8BjRHqAYCF92A6DhESH7M4b3RyWTmaRhNJXDqxxWyEPQmUbWGLRnVpAz8uiTAgqBG4Ub6x",
  "key10": "2weK8dfDGJZWLFUbciTStbjFqRfoxnei3qWkHePzY6mzoWwdBzSpFRtSsxZfsAk7MaRmA6iyDfm9YpHuXXzNP3Lv",
  "key11": "4bDPWesX7M6uqv3W4U8ABTUXMXEQPwZUwCBiyXSWZ8NA65Cao9SRakL88qj6qWRFHXVeGNqbyJ2bXkh53pSbTUJE",
  "key12": "5vacsaw4JRoGjPEMFKZCjxwgg4NboTHWdpuRJKz8SYZhe87LhvdnVH6jFuC5cdorqaz7DrWvHbKEtAdFNv18qnyL",
  "key13": "3j3j6TXvjRVCW9gFFABFZkZJq4dviQ3EdexVeYY4wtfAtS5BrrZXqf5xyYBpAxCA5QY69xoGTiGajj7Sj668dVRx",
  "key14": "4Bdum6KEXxa7ASVwqPzkYFUeuXKRw6cfvmjPN88r15RVa19ZuLkX7uovAzEEsCo1mByvpFrToLCNp4kBf3UXfMe9",
  "key15": "4EsAAQnbFf2fAN5QSSWEMk7f3jgV2F186XEK8RJxzgwJ8Tj4ifyxx6jwnR8LtzxohVDy9cKtVScSPs1MnVx5M8zx",
  "key16": "39zPPKKT7VPL7HvGsxjSEMxxNohmV9NKoS5iDD2pFLrrEgjxmTgtdhvqNXmXNHmozV7W1VeLqhAsSYfZf2iMP4TA",
  "key17": "2rUeFszDZ3HyRJdw3XwCbWuMCadsA1qEe7SfyajZQGSbRUoq2vP3YLUHAgwkL4hHacW6LeqNWGW7KFH5RcBAFTyB",
  "key18": "5XnrBWzavqxX1FDmkJPvKspWu6BAmmmQpd65juWtJ4eXupS7xAHFkKv268KiG9LeDvsfbwohfBJ4JcGrcxfuqNdN",
  "key19": "3DJYuouSNB82hgqhhTU8wehEFXY7U4DuC5WXnSpTxDd5BQ5FhUZigNCHJza8Y5jPf9iMpYmuxmXaXP3FTJ6cu5uX",
  "key20": "52pVEFx6zV9AAY65yZkbB6S6cXHC7uX4pvxxZSF9RgwfAZTK7mzPFcF44WuP8WkXgauFcvW2HSgBAKc2bWLJkbic",
  "key21": "5r4kJxTTYurDbUeCKkEuKBG4BgM89QsQyqPjHqJiRQD1B7FikMkX4mY8vVxBKYDu49dqKfo94AAysSXLhdBHNekC",
  "key22": "2f71GfpWu88ENJJaKyoL8A2V43R7fwmWxqdRuQNMVjiKqsp25Zkmh5Jngjwj4DxJp5sBQVkh4NRGFadyV28nbdbv",
  "key23": "54CyXNUeUVxVqyXapCf1T921NMndE67yoWPCLoxFfhmDuhiF6TQba71h7qqAoCPTaejGhnj35ND9e97Vx6yGVBUA",
  "key24": "LNXTyiCckZhn4jSvaCaeQFeBytYind2dr52dPKS9F5G5ccg3uR5jiQ7HX7Y1PJRha55FhXwzWVGLj1Gj7h1M6q4",
  "key25": "kh5jgpLfM7PwmUED3piuZKAaqs9iGF4JW3d6fVKa2FY47GyyC94TUHGKjwWPiwjDTZPj9D66VZBY8Vx4jVsoRUe",
  "key26": "4iBpz8y7zngjhmfc48Rbv4JHcs1Dm1ReQvkDcL8Xwvue3ppSLrPM1383KbPpw9ggnkhXk2yKWfNYAmXHhAC5DRpS",
  "key27": "4TUoE8DgCCbXMwxBsnin3NAeUMo3AcNxnVD2osz5Br3ot6XJU4icxdTohVZRCxv7UA4gxREcc2DiB77Rhg6BPteg",
  "key28": "4awWPWhUbjNHbJWfJoBnHj4AV4pnSyS9LBMqhbZwEMAHarzCcU3x2ebLmM4Wj5RjQ4SMVcSbz2ym8p2aoMi6ZUMZ",
  "key29": "43VD6T6DuhkmbD2GeDFjSBgDpp2fQTTu1WprKDCH8Y3RsuFdcdv5jZkNVVLDjbhx5YjmJXGww5wJ9ZNDrwi6bZz3",
  "key30": "3bXhYTqASF2evNXJTNbG2Vr5h9S3zavbNDHAkA9BN83KhhGyKuuoLeX8wGSmmNCigEwT1a7Z1BTDaahLcRKPhDno",
  "key31": "55cmjuwVyPbWVN8a4k5kAVhuhuC4hJVPwzmHWs9XbkXPmss63JGFqBU7M3rDVCKbkEs2jSRaQ5jxhHPPK3bkaMCF",
  "key32": "3MzxMG8ugYfKTDvN3rZ8XHCrC7eH9jHWQUtoYYGD7X8VwKU2wrv83NtSKFTZT4JRotCUC6WCEC1w5hj9LmQRVKRN",
  "key33": "5Gfq1hpSgY6mTisPMsyoxhU45BnEPTiUchSuJtCxw9zsVUpk1QqWepUYCnHtubiDpuoYMCJ4XJtvPQDEeNb7kZWu",
  "key34": "5iMvGwtHxdc4Lkpfzz7SeCvsJhUTzpZriLs3Zj9J5noJN5378faUnC81n1kRmrUEaetF29gY7Dvkdpu8Lnc4uraM",
  "key35": "66sWtCWdsahhpfpS2Vdx5ob8jMHjWxMmnLGciP8v2fSdcFx4SK5AD1HB5wPS59iM1vmJWtPhyzAuKuveqmveghcW",
  "key36": "26GyirjbxSNWZ6fdkUhkrYKAtRwoa5FK9Jk5PR87vjsKZ1vPLWJAkYksdNyszuxL4ifYv3wKMn2hoimdwQfFid8s",
  "key37": "PrzbeM6evLTsxFc8CQ9sfEUvvx1sKxHLdCgKRHC7okKzZw1uFXQ9SVQFjWGgFsUk572FiBS66vzPbTJ6jyuxk8V",
  "key38": "38EEcpK3zQEwDpA5Y4Hr6Y6UmNca4ZA9Eiwqrc7aZ3Z7SNnsoz4KDBJBeEbyVxfUa29gViuKR6wj1YPGitafWUJx",
  "key39": "4urknvaYq4XbQKWzgyVkLekyyp1TyUbhnXaFtTSt4i4R5Vqd1xCqkUDGnbwLKYwx53CsNUdMYMFKJbjZANqYkdX",
  "key40": "2mQ36pfgLXD2t4LNcMnR1RUnHpxY2BoUKc2dksCHn8C25udnbqSVEMP1hRpC8EZrcPP46cSbytq37BsH3pBTNNTB",
  "key41": "5EThWc23Mn2bSMLxMRkYdhHFjZ7udBEqw67DxtXSqxeTz48A8aNBEZHSoN5BR1MfoDNr4yV54kAYXaoGRkRnXcAr",
  "key42": "5faYJho8usCnMvSi4idyZvp6TyVWo53PboYUuLCMTrrhwGQgb98KPqGpTUQ532LmoujK16GqvDCU4mfiDNz7cLhL",
  "key43": "4RPvRUHjJVPT3skpKW8wCNdTAUKovXfzdXyuRHcrixH6WSZMjawtcXzdUyadhRaymjaXzVtQfmnZn48w9x6aWFLi",
  "key44": "ancAbCiNQ1NvR7EdSsqPKzdR7g5PiUV3iwN3mqvpjLA6BiEMgrPN9sAUy7ph1yEKpDMndSEywkmuZ1i7ceuox1R",
  "key45": "3e8GHsbnZoDLQFnthres5vtgteTbowuG8dAuRURhpVHpfjhAi2KrLJ56uB1ZmyvJfHAGJnjV6Sx7MhSHKpjKsLr7",
  "key46": "y4pM75mg5nkWV1nyNJaifbJ2PJ7Z9MijXDpJGNqF61Nsszxm8yU2sJJZnNHxr3Ybz8MqfxVpaBJ5eVwAotzMnJA",
  "key47": "3iCKySZiCX3cfQvkzMVbQJdniaCTtbZHrgvXuHzMM2qAfM7ykuETDN46z518qqHHrxJSaqRnox1ccmtkDPAoy8HE",
  "key48": "2YVcJs2FFyXkB6DaXj68yRHDeW7RoPt2L6gGCuywMR2cZbUhanobNPrj2QHSS7jf9UbsYwkFvUkh4eTM6bYyRbqt",
  "key49": "Tap95L7R8LezEpHvFkc2J5hhq5Ag7xSQAisw5dq3KAETxa1gdovYttMCtdWx54HV4c3C166gypqs9ao8jYuptTR"
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
