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
    "4wWpsbX53sFTtcB24LdYurNNRy6V4bW2WYD9ghqLEVqV31r7qsJzmN7Tjt7UEw29koHzoeEy9pDV5LwJ5cUYfjAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PrCQpV6dsxHtbQcoPLvVixmuLcgogfN4rfrMYRV7Riz36q5WoJFvgwj8zFWiLzXQYoo4FCq5AvTvy3C6rSARaWe",
  "key1": "2Dw1WpPzzdoyRxZ4phBCZMx6B7wJnbU4yDTTfgP1rSckKoDKycqXLR3fHVxUqyrVvYY8XEjmhWyqLcdXJ42sVfZ7",
  "key2": "5SU3fE2ui8MkCBogRZYnRY3iC2pfkBp1Tz8Tvth5YLs3hHRogzaanEEqqbkgSXHGa6pdurChJdFU6XZXb7TUrFTc",
  "key3": "2wdrtn4feuYLErdDHjhB8xBfAnvXa18jomdkDqUtnx8AEQUNnZ3cZrgxk1SagWd6t4dyTjhkgicCqHqkeXgvQUBk",
  "key4": "5XFy9xEhwoYZTqUcAMHg3h3XRFh3d8ftY5diFLRcUT6edgSVE1BftXLw2oPQuNyJ1Z4QcmSAm8kWTzYrKwAUiNYf",
  "key5": "4HTDGeMKvEA2Vi1agD97XK4mhSwTjU3eVCNAsxcjU1UHrrtuCCZyV2fNiBvxUawThrUDnAFqCCCUDH5ipvdgpVzx",
  "key6": "78ocoA682zcgbSzMVHGadA7gUf2Qu9NzgVWaJzpjMFECc7eB4vQTp1T2PtR5NNkwBDnyEMpeiS1bLVaXJ8Vw5sV",
  "key7": "3rVGtb8taxfGMQzeAPtRGunBZ3csahpUxdsdLup9CgAMTMPmKLvPxY1eaWNUrt9gszAYDdvZLqv9HAc5BehvQUk9",
  "key8": "S15Wh4W9dMxGqsRphCeZKcPu4TeRS5YyWJNgdfHxgUfNi9MczqjnHXxMA76jBnUd6Mj7yGAh11YEkpcFU7G3asY",
  "key9": "4K3gsHQxwriJfFFbogA9oMpJBbbTHTDgVpQjM2DErVUHqC8Zq46LYG1y4aQpfsGZaCryfg6AGgkvgVRtWMVM8ez9",
  "key10": "5mCQTyn7qfEe3g1XqoW2MoXfW99Zi9rnBrCMt8dUnBRCJzf1FEu9LLAgzvtLM3WnoH1ZsFY9sAz1PF3Qi6oVmXwL",
  "key11": "3bVGhjwMEKK38sDApaxLevVzm7GAWyoUkL8BQQ4EzGrhRyJXf5Zv6DPh8btFbHSFxGnwYpS1coxxFYhKxvphPkxY",
  "key12": "58rdqcrpzMUWP1dkMmpsqJ8KtAnccAiTs7J8D8s354rP5gbSwXXXCTHH5EodufJuHuyf7nk5N86TQ4zKGHhCqRat",
  "key13": "2FmXfgYeVKQ8ynwTQY1H6W8aGPKY7jrqmfhBrp7TFhLpXKo7VaeJUNBpz4SEemHyJJ1ifFZdjDaY7vUbPGspqQW6",
  "key14": "4uBsJENj477WiRGaXMLiW7FTeH9icndFFLfbpj9Z7Mq47kHXiA1EDRvkYu4pBWT8BVnwstjMVtckvcBfPZfA1YMk",
  "key15": "2Asf1FSNF9rS1ktRm7tpissDPRiLEmSkXkJy8VokBhRC3ffRf9ZqW2E6dxUZejsNfGE6uEvS2dLLeT5Z1cv7PN37",
  "key16": "5z5s3N2b52KiMJpLZ6TyTyJMrmz35TGjtkUkYEkeHqnAvR2FY8RtjX67NcS2acL3SCRsm1ar4AVNk6YBCn2iqQ6Y",
  "key17": "2XixZTqkfAt4RdS7gG4VUz3XLdvBF7wt28hARotMVViKi9Ja76xhCGVjQq1zhRevQr2wDpzZzXNvVD5VeVTSUikC",
  "key18": "UDjy7KSvVkV2UruKKoy77j5jGrCSR219xEDASgzUi5CeMVSRVpTGyUkaePfPQN7Z9TguruiewpmGt1xeWCydXpT",
  "key19": "3SwJaQe9kxvGpANaCjbsAhVcTX2xtfWrzxtotyTs6H6NKGvfPfpr6yn2VbCHiip1j4adnTV1XRGh5hZTLbQnsvzp",
  "key20": "2RhGkyGadAGCPR3CW9bAGfcd4k7E7GkipUTwgvrT3fEipdcALT5ACAEEzUZQJjw2gFUgtwMrNoszr3AYaCmdPp25",
  "key21": "Mdeb1tVjezx586GpaTriZS2ew116z1rTU7XbdezGhcyFNhWocqAbiWEG3c7n4qHXFmnWAgKYv5WVZRPLrts7gDN",
  "key22": "2sSiaEj4A8gPHMd8ZXDUKuUxRK6XqEHM5a6gbkGfxoGXLfK1K9nFw4FSP24pmJP9xnUknhWsqrLKMDRyJ55MsNfr",
  "key23": "476RhEoSFsWqYBt5y9synob7UG3QkKc3k5RcDEMRQw8MWRCt3gCDxMdirbELDoncfAvhRQ8We2bsDAFFabnfTwn",
  "key24": "CDrzxYnVV6g7Zcw23tVdNMG6BLLEHgzMxwpMm37ZsasHM4iA3jxu8de1KXcSWtjyx9nGjiwgXTf2Fw9k7dyrBXY",
  "key25": "5xvi3UyzH23nNuYcCkv97zXf1ixCBXrtnXkjNyGJ7nfTVzQyYadwZkbzRz24ar1cpt1cSX2ZynZd8oVKG3ecztMs",
  "key26": "2NkcFKnp2s3ezCWBrrcj3LGw51eymsbSd3FFzVJgBfuVnaQHJvDSdjcnyTnpfGk3Trx7CmZ8m7gFq8Lxuvwpye43",
  "key27": "4dpHMYC7isSatse3GvEuuqfRBzk2nojH2J4EKFkjcbvtuB69LggNqXSsaNA8JDEWbRb4ZpbPyFv6Y9g9cabkfap3",
  "key28": "2kyKXJ2S7QJSbZ9s6qV2nn1gLBgpt9jxTe98domQucULeGzSpvHwacg8FESd7mciNMPkf3LGewRsYiL9kbXWCH8o",
  "key29": "5rf4UGX8qZ1vKwuHQawf2BMb7CAbEykywu9T8Ju5m2mRfa1hNE3n3dKnkGZQ86HmUZmYXhJSGBrJW8Dh7mAMXBHA",
  "key30": "3CEwQTdLY8XAHv5Ldn96e9GMydGT1Eu7iwGRmQ8M97UZPvAD3fHRZyatrNkKCdNkadjyLn3fv2VJAF9TpBqu4oq5",
  "key31": "QazMJ8nfmycLahtR7zWQnZ6f6zbuw5J7Wn3G5EbyqEUkUQN31RGXFvp6mV4wHuqUMT7P1bgFcVEHeqmLWFN7QV2",
  "key32": "61sXq6oZh1dzthzDp2oSZZWX1EmdfkZ2Qy7cb3tkrJpnsBuuvpGvqxkSoHhvGQKjgVZfMU5qBX6jQaCg4pQERWPQ",
  "key33": "2ZuUvAftLFiNdLkKDvXzwseQxzRd6nku9KdT5nLqaG1bfwQ6j3AUvzqE8Qaat2GHNWFw7NqNG5WSKyvYmAfgUqr5",
  "key34": "2Codjhw5Xsk2JQpJiunTD8kqvVSgk228pZvaBvRg9ZvWZje5Rnte2CD8bCv4EUoXgikhd7WtGtHzLpLUxmjTZp5t",
  "key35": "c1yd3vJBsqziyAgYNcNum1gWpaq64U3Yzg7zQ89V9XtBAbA7eVj6cMJqYn7HU66QHomxJmXzrCFCTT5DADvMNMt",
  "key36": "5WytXyQgZvE8YkQ1ZiGYjXxN1CVS6NrUVEFc4jfKFSfhpDsFDQ8kHQKo5tD7z3Qr6X4RcLyey1wJzq936zDBy5zq",
  "key37": "5oXyZyyrquURe8zuMqHjFc7Y4zHvvV1fmLP4NURUVYJKLxW27AXtfgqEX9TXccGePo7s7v8Kg1Svtuu8uf3KwNDV",
  "key38": "65ZXgZAKWaxQYfn53UnnbCwsDHmqr9hAPBKqsVkFdG36ucqSkEfKGLwXKnJe83qkDMMWTZMdmyjZdoMVdFbA7cRY",
  "key39": "3kTeZQ9W5Tw6e8TZVEB8cj1ZzLNBfANo7jc32NXp1PKxRp4quR9tyeDvGo2rMdv7hSnipnuk2YU5Dnb9V28XZ8VH",
  "key40": "5qFmCEvHsDfeZPoFJLdMdFoRHszjXTs1faYiVBaDgMHdXER2BQ6egHk2EQyitCnTACe9xHWtP2WFEPZmDJgFcj3L",
  "key41": "xUnzr5PZuNHP6vo2rXDTU7mYtNqc3hPeCZXDTR9WudUkc3cKhJtw2WJywkQwkeUxfJwyeEhA1LVosKpbpGPaqQs",
  "key42": "zLDw1PZPJfrKsY7YjHGsCnmDsYe8jvviH4f87xo8X9S9aZ1sWmVhcCGkfXDT4MmanvS3tPf2mBf2H2nrEiFpN3L",
  "key43": "4cZjgfWMHx9MJ2YwDUWpNfXwKxVK3PfrLiNaJijUehqipoG8aCtxcycLRWcU1e7HApnoHUT9x1coLARcmwuQ6KiK",
  "key44": "5vrJkc4HAsgtKokVRiHENpNbZ4TrLFPtVDBmUAidAA5f7649PG1gx1852UjshiXz6WVFHN2TfeRY8imEBtYZz6Qe",
  "key45": "4eRT7VVh15UatqQ95WfK52YwzEH9cxV9Pr5jpiwabL72rdUz4bNzZuNWbkHLnY3dLe8WEYqjZGLywcDj59X7wCNb"
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
