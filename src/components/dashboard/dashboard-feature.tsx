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
    "5nxRKN53t11L8acLGrhSDvn3h7TfkmVcm3Kffrz3pCx3QJWrJMS9wMRH6dXdW4nzkyJgkQUdQFPZ8po2ChRv3pJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55pSoxPuMDn6X5UhoWFnVoLHVBrbkEvDmuvKLbHBDavApwKYPj4jLivrMU8gXrk5PDZduKcHwC8hz9K8z3eKJ5u8",
  "key1": "4AeV7my32Qm5QBSNXqTeKUzowKauX6aMcQPHUYWXEgCDDCh14ggL7fUEEw9DHbkp5K75m27kQtwAWZBwHJHDodq2",
  "key2": "2pHf4ySFr4QouHVRJ5xB1un6z71Z2q9q7DP2ShCRm8Cgwoh3xLwCYJ4DG1EbAvxtt3qxLBtvSYecmSAgCvgm6Yoq",
  "key3": "3DnJ72zNBtzeTS1bBqCn55LHu1JaQRm8ZATRkfehrWVt4kiq4m1Y5CXnKvgQ4U19vcVbx9dqjqTkEUfNJaaWF2mp",
  "key4": "HJGW6GR4rkFtyR26nKPqKBQxVXTYxfxgRDQGgD7cHwyRwx51uHkvjB7Dh92ywQdJpvRjiVfuBHzPRYbJZAFXRt9",
  "key5": "4ZeDusXkEyEZNr5RjieFmDxZmmYGs2eZTh8gtMBVSDcaT5ocWqYiBXjFxx6o7BrLXnDRLKDiMeuPfgw2GuL5Cxek",
  "key6": "27XuR53ee9xFuXcdWoAU1q3Y2Epih6A1PhMrfeMRREBk3XmjnCc7L2qjsgu4V39YiTUX2fjpdy8PHSR5kpkgdAt5",
  "key7": "2raxrxFDnLF98zqp7VWCgiEgSFSJid6V2gz6ectpkyoDnvB43q9k68FcyV363XVvVnnowqEFfXHyKU8u7UcQBRtL",
  "key8": "64Tq1Cx5sSzR3aAvPSc4nRVAa7que4VQzAaTPzmHqf6FjNBqedNzyLtxX5QGYmJ9huoNfTvXsqwy2WrrWmpw15fW",
  "key9": "iTtuZ7xQwkwuWxv1dRSZdpNEqymR9ideoa6mJg82CeSqvPiLeV7HvGsvJqpyeBYfnSGZYwtLuRpc6DXEybqMymC",
  "key10": "2ThdJ2A51Z3CbqWaUytjBLyFDBXD59wKcr9VPmGfWy6Tt7Jn7SCybpEoQeGZVXKHbdrwyh14m9WPtmu6WcZzsYXF",
  "key11": "3XbeXWWQw8qGyPiGFXhbQHkYi3ADBSPMuFHfH5qFxZcyiYoC3bSFvGpPPMehgtHBSgSbPxWNC6DLefPMEt5jGENQ",
  "key12": "4SSRrykmN5Z6bJD7KWbJkngpNT1WmdYj8BdZkMWZFCWUfAEei6PfCHwb3WwePv9CEDtFVNSk7bCERUUNnFFkSL93",
  "key13": "3vTHRbKdjvxw3i8Eahewfvg39oRRc5ffzuy1FQvhp8ww3vDLynJmKuFDHmKAp1xEwg6iUXpyarp5396h3vdAAvNQ",
  "key14": "hHGz7vMWhxgXF7Gx8yVe7DENdGvvAyYdgALrxu31Nx6oyh5yiHfVYHMKUJBxgtANRxmenocYFcp8im8oqVhWn9L",
  "key15": "3Pm9KmUAfH1cQ1zp3y7rQViJEuB6fTjNGeuAEihQpVbE6uLjpXye6ewUarjkNLQSD5vJa1t9yjaGJodqJAZxv6Qy",
  "key16": "2hL8MXxPqyBYNiVr4k7bQCGA5Zbd92Wb7WKZ8gX5e662xCUVvg2Y26y9W799Ry1cZB8HfYi7TRY97meyoUKCg49S",
  "key17": "4bj5hQMTB3s8vdMTdtjHZwuEd6X6HRSKb19hqnAMaagSEagmw8fKYAfQk66zTzsAQnPXfBCaYjR5vFk72KNzKSnc",
  "key18": "2x2pdwYrxoFWGv3X2QQEw7Bp6vk7e2XFnnqpFPt3u6JMzsgB3j7dg4EQsbXvSe14wH1LKdxL7xYt9dshnD7VM2aR",
  "key19": "5QNg7Lj45FTLHrfZsjC8nyzNbj4Xge9zbGtY2vAusN7VuE3iPaQXwD6xrxUmnAaXV84bU9SnBYYfptr6uFXL6yNX",
  "key20": "qYugTxU3zpin52RSvQwFxEW67N63FxUqGCGHD2XEGztKWNTw1QY6d9VFb85EorbXCJz8XNw8t7gtFPr9VeBEDWp",
  "key21": "3do5yLserHdG56zGc8hb4DWKqF3bmztq61MSR847K2g21ENnxyfmpMqhvcteK49MdUk51tWh6BCgiJ2aHmUM3MKm",
  "key22": "rAvJdCJ6XQsFSPypJR4N8CsRdMoXRQPZu5kyGy38LeBnTXiLocL7KJnzoDNtdcMYCEQ5Cx56iZxgJEd8h99gZPt",
  "key23": "4gi86so7uH8eAoPW8dJ6AVchpZkHhedL3F2LyNpgxQnJNKawshLtHrm8ZKDDr3ScZBx6Zn2bs3sPZJj72UQo2rPt",
  "key24": "3PRHF1yk6wGqV3QsUwd7hXLCgMcX7yNMQYddQqjQ55rPSajbs3eUwwCaDZUkLw7MAnn5nmeEy53SkbT9tqG6xPVu",
  "key25": "5MVBuupk1y1kpM47jkv4zyMCTqeuCUgSZmxbMQwoQYRPz8z7tHjf2rP9TdGBAFXtPJGNea8UFuG6N9urqa1Ty5U8",
  "key26": "5G6aUUTEtEVmFbv5YFTQFk9ukv8Vdg66WAj3Aa6StNTheAkJCYVURbCnfH8oUNcRva21YoKpsV6nUz38S59Qnib6",
  "key27": "HCnAitvSGrBgsMVmjy7rfp623rp4RA3tBradh1FG2FLWUb4B1VG1onHkicggKz2HsN8hMq1HxCcaszY357fYNZ4",
  "key28": "g7aTUSfDxB5ustjaqo6tWdMkZgTDUiSDJMatAjSLj7H9BVDmPYg91fxCjvaQDFCTWRPZAfpm5bsVMWJETVnAHBK",
  "key29": "2zpt6UEfquQGu88MBtxS1UJH5LFtEYrKJuu8QyNktHiiAns4vaCURRLKTuQGyTuHcpAxkHpEXVVbP7xdg1Dxqiiu",
  "key30": "3WnFnTERcvBWsHMhaQAt9NiaJN3vmgaYonakUF53U2MEwXj2NUXQd5DsBFdjc8DJmRMdWr2A2qhZgT1V8N6ANEA5",
  "key31": "5LkZKZPHTmr3F7xiNpkXvYXfPACJjjN5Ekg42p5eWqEH799zA9g99wFdvehLseFVpSnF5VsJKRaQAiibfSdqZV1s",
  "key32": "4KfTHnaxF6Ff8GrupYHS4DCbp9P2H57EYY9wsU85WtZBoY7ziP16PvZ5Q5nR3edic7augC3dsXX2rd1AL6Ev1pJP",
  "key33": "4Uk3T94ErgpnW1zAh16C3SdauQXNWc4VEiETrq8ed8eYN19QaFoqtfF49AjENfJSRj7v2g2ivgYmpABotiUB7MJi",
  "key34": "2FUT3DBK5kH3omETsZgr9Uq2nd5jLzZMDwdEhKXMT9yp47ag19zCeBybazR8f9RZZgSiomZkS6C7kEPABVouUvwW",
  "key35": "4kSCcPJLEBwwecMArmBFfAsS5acBGUpnzSaFDAYDtXYdBYUMXbfpu6Mj1VPKQkNvhmfuN7sZmJYd8N3Z6nqmDQ41",
  "key36": "4bCnFXaztKNDx6Q89LdjN6j8jAQqVFw4iCbNxVuqj1S8SsbVeserB3PJ3f2oXksbYjPugoLNuth8arUaVmPuq5Yk",
  "key37": "3oUfbSLE4AQicBg6ZA8aBB2xatdQjRfiVZaFXCJ3PvggPxAmH3nemaQuGD7AEHkgavm5h3e2UJcB2yTNUCzmomcV",
  "key38": "331b5HZfDkRY1gmzsrXH6UsV6VJQaD8q3GsYTvdxp5RXo7EiE15k7EUxfdVRHMPAWbSGErTmJevKBoNjLpjfNiSM",
  "key39": "5KrR8S1v9cyQKiZevcYMsydfYvpKqPHuM36b1iprGWMg6uQqqDqWDykg93Wsk2uGkxM7e4tvWFQWMNBaj1nBjkab",
  "key40": "36QNFdzWzZS4aNL269kXGKD4F7Q9JgnarvA8EDr6JAPit62D2gHCK1AoszcnaG2AiMqs917EesCSEBMRgL7mF7jH",
  "key41": "4kjDGeaESVKVWM6vrAVRT4FLbbf7j8S8oynFm1YK9uRJVV4fhcjqYyGqTN2iS64b4AxV2wG9DYgPYpVzhjyX3zhp"
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
