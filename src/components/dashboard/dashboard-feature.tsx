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
    "RKdDkJw6jzS3WoMENLqnzLfymGugxgG8cuP5sCw2KfioL3odwn5WCXQRyFRdt58gSAYjMVV4PBHUv94F3bXezzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Agi3KCMASRw2tKXagiVZiHoFAcEReAEYB4KfcZvdAA7V7CV3i36tmv2shPe9cLyamFdtf62RcnyVR4E6YYQTQKi",
  "key1": "4RnpmCm4scg8d4a2WS6pTxLj6uSdAfJtB1KhYxgHpKhCDjEFWbPAEGmMAgSM6tysRs6vTMX6qmYPxGjNz5PXoTcx",
  "key2": "3AnADXm6KPCi2FbD3vh9RJW5FBP8vKMcgDBJxQwheMtmgZYhMZdiBiYS7CqfnTEjKXAMXPnPnXoRUW8mqfzniqLK",
  "key3": "34onb9CXJo66ZdS5q9mgn6xcy6h9716b4Qd3s9ykVGpCEDPWpBkfPs8Whe2nAwCXGgMFavG9JwUPz94PdiBL2aW4",
  "key4": "42uPr5HA7vU9bVBWETGTqyq7YfDLB43JaGQPuvtAxbdZiy1v2smx3geFJivDMBUv2L7CG34FnMjeKHJdAbKo1fSr",
  "key5": "44LWkYQTwt1hiXqRZrdCef5KRWpnBFM2UziD1UuzeqQsEtAcY1cVNF1VfHKmFSxAccX7BuUP9hLQUa6BUrTMq7mK",
  "key6": "4goLhr6ycuQ3yrMaLnSZCvLL8aJ6EaubsWZyJo19f6AmXKbJg8dEGJFnTt7D7v6eNJgP9Q9fgcUKs3G6YNUsiQT3",
  "key7": "48W8fcRbdNshVENwk2GCssNAufjhpWpp5EA8ezh6gVm53fmvqTosseHwP1r18gS3CPko5aYWwqteLp5HPy7wckN4",
  "key8": "5nPxQBFerKL9mXJoSE32C4a7fGpUYEnb3RiVmNs7nXnNKcfTs56fgzgTVqWR4mnmy4bRkfzwP7Q6e1Pbw8NBkoST",
  "key9": "3c9Z7n3gPiBud5YXWwKgncbUMzEG2Fu8qFcsLKnuvH4UQz3BY9LBsnq2AjYx7UmRqesXii6JLNEu7VifmjTKKg11",
  "key10": "2u8odULdkm1sDJexCpW5yf76VnCWzqrwV8XSXn3ktY4HfMEK6DDbSjgj8gwfiENN7mrQPzgLs2khpWEPjkfNrPEe",
  "key11": "2VcokYpKsbx67GUKALRKytKFn9hB2Y2DiXRWp1FVX4Xhm4U4bUZUuA43BoKbvw2hYvNUipGGaLULBPUm9VB9z4Yx",
  "key12": "4Qpp9nqAJHSyL2s6eY2bLEzqt3iCSUfoSLBfWCwKcYA69DAHXybQeFeHXbGLouFmzudNJaTttSFaeTnbTBXVjydF",
  "key13": "tDtHiNB96h5pChRbNF9TSiM2bopWs8SUhnVkQb5B2CXEfJfRpkdx2PzibVy9FzYAtiFk8Yfkk6sjRUqvhDtVEEg",
  "key14": "3UAn1JwmZM6HHJkMkgsWiqdeQMcthgyXg1pyzKyaPNTmmJtDtNkyYpSwz6mXz6MFJ2KbXbN9LwE5pTo9u9Z8k88k",
  "key15": "aDn1M1n6bBR5iRRJNeZN4srVRFiGrascsDrVvsirRLJfBCizDNLSvscAtXj4mmhLrqA29C84srZbj9ivwaezHLT",
  "key16": "2bXjrhdnbGDtBYXdxuZaHymKJbQNM3G7v73uamD3RaP9LTzKtDFyBu3YZ3yL2qPNfEdUWnWCnKRpsYLB1Gc8YXTf",
  "key17": "oNShUovf6swSEQZmiUJF8xZ9KJ5XBLCWUjxLCykLzxSD5E6Z7WEpPvzP1JhaVJiutzmGByBsj5fFxdLh5yZypHq",
  "key18": "mQSXWTNCg6vu3hHdpXp5ciDFu8qqCZjqi1DMsNTP8pkhUd5MgitPnjTsubqT9gQqhJi1M5n3bviXcRRam3mCxUy",
  "key19": "3D88VCamuTcT3RNpHZS5S1bD1YyLWJ4WLtugLpJSgUYxRqUJ38VoQRSYodPV3HfPLKUUs6TauhXc8t4RT357fHaZ",
  "key20": "5meeyX9KKUnPM79iLMCDu5XwiyRBmobyFXJAzuBFd3ERxmPWEgoZbe1zHKzoyw5WaNxuV5RxassQKUn59csoAUu8",
  "key21": "3LW6BxhRtW99uphvNviPtmAFZSwxTc4VUq3ptEkGu8JmoB8pkPt1hUEWJ7ximhp7QZGYE9fBpKEVAzgGyY2YJgse",
  "key22": "3JgzXQ4y3Y1H9aUm31QY8DUJqzbmgozMK44Rq6eKX44Dp2dd5WWvgrqUESP5mUhqWU2PT5kidEnMtxCgcYRnzcdW",
  "key23": "C4cqzqG2eQ74D1MB1fKZnVm2WDbEbgeWLKMmnY94jfrLTgWnMmWvwLz3rSTDSwWzMqBHwKf5SSwoZZzrPpsnAF5",
  "key24": "3wzPkLVx6cRpCsMCkfvjRp6np4UrbW6RNXKVBBUfmQ6325r1j7Su8g55VTHWawJqfUokiDJgoDX6ZghDY77pz7UL",
  "key25": "HKzBmi3GSnmuw4Ffu82WWaGBQw1tEXXCPAyhQX5ZpHDuYynX6ahDRKXJDp2zQYa9CRBpF54CjFyxgUN1zEsMQZf",
  "key26": "dQSJEkwfPibPvedwBwZ7cLphPbUyK5XnQJEjQH2BPSE5D2JUrcSkt9rG7WScEZoLXF15Jvr1Fv48es5AvWbijBC",
  "key27": "424dLenVdaeMnxrNtUJAHdVTFs7njt7DrhUet1p1yqazq39WsM2kGS9gqXvuvhw5tMKPd4WdsGan5e14jdgszc61",
  "key28": "52U7EPw7CXzFxxgMh25g7pUaZ7aL6kDskH4pZ8bDPqMrUnge5sLubQGC4vnpMxMTAQbeMFJ3SabFFm7KAEK5Ub4h",
  "key29": "5FPH4dn8GRyG6LW3nZqKo6F31Bn91kw2c4UNF8mWFc2j5gocdE6jBw5zaD76nGLB9WLhGBvDqL6qwKrJFacgFuci",
  "key30": "znmExCKF1E2bBmG6ZUgMTMfg48j4ysKsrxvbMiri6SS3VNnAnLBHLLxY97jzYLx6eStCP6fPnWpKbgu5qdeXxUQ",
  "key31": "5oWzr4hpmityNJRYHXASw7uS5mV8uscUgNbzwPahEns42N8e3sZs1bJXaX1qtfqLdYYCz75x8jx9NpnSeaAhrc4p",
  "key32": "2ZPUiNJVEnobTNP8TCqvnxzG86cFb1HtrnHF9eftnMpn3DN7XiA7CBGSPyHGkGuZShKnhadqqcxaHuFXCpRKWnn4",
  "key33": "3NNuftmGshSzAjKe8ssv45TzsAzZyXmyGyVG6nMTcremXGL3SZdcSUYiHGtQRv6XJw9ycjLa8FRRh1qA2Figp8fK",
  "key34": "U5KRPpyTxn97G4tHkwmQ4DBXbBNQKiSmrC4tk1ge7SK5P7UtSkidhZtJ8SaPjW72oHFCpbc7YFCv31tP9zDmhBp",
  "key35": "5RT6jGfQyYD8d5xT6wSqxQWhFEWmBtbs4AKY3euWmdZR3P3QgmbbSiAE7QxQKh548vbh4Ytq64s9og6ErKhjKWFi",
  "key36": "4iXbfFTPQMJWt19QDBNiTT3hQqm3Ap5XWgsPeM4SNedcbAsYFBSufr1esH9dhyoDgM7V5Y6XnKrTmGhnP7mCKocC",
  "key37": "567YwGZTK1MA8qudbknAfoAE6iwFygqBG5nbg7N3RbjkjCJGpkXdev3aoD1w7B7jNvwcQftQvyh8DxVRm4ucKP2G",
  "key38": "5ccaxuYv81YaJ1GFRmTfMEyH1Wq2FUSRiRgqMAXRcLhZXmUYPzGKu8z4FUtT5EwfR3L1Y8ESfAe2x4PC1u62uZgL",
  "key39": "5KXaUK8qSWyBqgMY2RGWcRAzbnbK7qMJQbbYsKXbZmxJEQvgTUiNPNZVaiEcpiwgPLRo7iJudvhQ75ECAu47YBHj",
  "key40": "3E7TUmmao1rgPiVYronhAZdCsnYGq4a2a8gHQrWNx6xHmawQvAL44At249j8m335oyPM1Nbf6MrteyzZwKoXdpZf",
  "key41": "3GvYNjbwBXAza2WsEWuuZyxSaL2X71E5ZEEuzhzP3S1qioV8kffvBKtuX34oAAc7NQu1smsZmmznfei1VWgheSVN",
  "key42": "QJHeupDJA2rCqo4rBuNVNJa7TJ9YSQzCFDLNoufPyTfW7gPoomVxhHA2p9HQubZwjaCpfb6paSYBokGbVDSwAFm",
  "key43": "57xU2X7TR1HCCTxVSwdcCJtqTPFdrjCn8HoJ9cj4Tthk12zEW3Tp8LQ7GzvQevhsrKmqHHhWqjpb268qzSHVu6vn",
  "key44": "4HpEoQwvNEUEH7GEKcV5PE4o6P7Y3K65ttX63iNtzBWPCQxhcU15TqLsRibUgwkVt9BMap149GAhcc1QxhPM7Lvm",
  "key45": "y4UuKp8psQF6abaSdxHiHFijYNfTWzccgBaJ2JRuqgGDiT1eVohB61TRMXXRuL6e6An9UdX4Vxqx44ThQgoCUMp"
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
