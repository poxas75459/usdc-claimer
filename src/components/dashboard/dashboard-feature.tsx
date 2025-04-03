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
    "5Cnx19q6gZEHqkHk6oojB5S6BhwnAgKSp7bweoGDWUDnhM6St3E9F9pa8QN7H3FB9N6awR3wUaaQYrv7G8qLmJF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QeDA1oVay6gL1uggohW9HBijjdxXkbayKAjeyZGnXwXmkogekVVehXMtPkDqwgxjZ5fz3US14ReBa4qj6SBjAch",
  "key1": "2faXMqY2sXkKJpHWc4qtfyqFPGZhy2z647k8bDZ3x3w2whUFeqtgXVgxbKS7cnLHA5RVnqxeAqqUXZuMkw1zC7YZ",
  "key2": "2Z4BnLnqfwWed3FUV774UEfgUeyJhghpap8ZeRAUM8JpfzTU1N54W14M1vUQakDLgxVaXhAVC8rcQwGsswfV5pfm",
  "key3": "4JaFbZY6u6pS4AkJ2XqcThTqR8ESp7pqFgAn6Gj52BKfJydgogq6wHbt6LLN3QFthF1DRUTdJ577qR2w6PxH1QBx",
  "key4": "5VzCv2S9zMgmJw9b5i8Sq8P4dYG6cXN8fF9wjb83q2KCBYv2awrF1JUjndcZ9phS5XPanzJ4n7puzVmkEvYQUgaK",
  "key5": "ui8bpzUCRgoNaANeRQRKo4cFSeK8RWCKk9QGkxaJS55kX9sA711dtiNTzBJ8rujKNM1uGfNo2ib65ha911RFuaH",
  "key6": "4ifFGwnnVNhnMnX2dCFRryYhvG67t7znCLiSrRfazZvtEsWLXhocUc9jDnCD2E4i4J24RS8rNTk4K2r2wYwTrWwP",
  "key7": "26hKM2BByYvgRWTwXMC1khw6bfyY9ZmGX6HSH3NayyxpN8QJCoXj5KQM5hApHcKPMe3gxgA38wbmdMVj5NU3orim",
  "key8": "E6gUKLVbYZaZPxJAzFiV6SujMSAKCk4wT8Xc6UKv9BN7jZGRaCN4CPZ25aCjhuqVuXhaKUrdpPixGaru4hwxwZV",
  "key9": "4SSCs5hktrazph8gtzdNRQCxFZjtS5Mm2rguqXefNN52yKmFU4UPhyVu8HmMvyFbVjs2YoANnfxPWWJXYRssjfdV",
  "key10": "5kg9epSXKe8wAoCB5T6wGMt1bgKdLVYk71HbK99CP7bmhFm7DFks9jEzAomBzhF4qQvLp6c9k4N7gCs2x7ffBmHX",
  "key11": "3EKmvUQuwmqZaDCRiyNDZfccbvx9gi1FdsNqcxHxfAWpPHkgJa6skrSxMW7xiHRvu5afzSEACxFnbnbFWZMXr2U5",
  "key12": "2y4Uoz1w5QKopkPfRy53ery3SK5jZRJakRn6XNLVjnWChdnRfHq5uHYUXfC8ZdkE6ZP8QFmkaVCavLPWbfcH1bf2",
  "key13": "2QJHnhNb4AUakYnZqjEUWqgFeTZfuqUCtuWGaqWehEWz9jqLVbpbk8jNqGF2nFQ6oQnDw9X85ZXAH3o63ErJP3qv",
  "key14": "4ycYiRCEnCzLkDcEvtvBbwSCz3nFiS4C3DcayXWggkiCdUGTMVrEbxLy4fy5oFVhuNYTWaHYLNqspiN49HEPtRu9",
  "key15": "n7xE79ZBgFMjqKY7bH49VMmiJmAndc72ZsmSct9QUFLBk3B13P9anoGHfgUTetbNqXWZg9LvFC1HeisNE5iziMm",
  "key16": "22DG2xfkMGk5dyLp7VwZxoDkmfswMyqdY4wEvVBU4MzCxAFDRVsjEWyq2AGgb6Jwi8Z5mf7evekzvieYhVzsrxLA",
  "key17": "EVJpCEmcBG8uTDxqLHMb9jnvQsyc8r77iQv1YJiGidf6ovSGTpKgZ1q5UJJ38GbVYtqUNs4v55dof3tKBx9SwSg",
  "key18": "2ipVRJTviV8EdtdoMB4NZP7kco3pvTPPFpKWWsq3PVu4KGD1DEQ4q86d97mivwsuYaWh1JfunmAz7oKfWKJcKMm",
  "key19": "5Q1FAriBJf8eeuXPFs7rAAhhTQGpY31sNkYVFNfhpAXLErtxd8qHXYfsQ2KyZ5UDdDpX2cZMHhdhnRgAUSQHhEBn",
  "key20": "5rLMsYFfmC93eRtdKheaupvP7UeBrwqsP9VtmaP5fL8uc2PnsTZzGB6vBkfWZtGQX13kdqjtUgciw62kRiFFhJVS",
  "key21": "SQCg5ukQUNuQeMLwEPLW7r5nG9XK6jTcmLMebRUREadr5hkCmJWZbiySPaon25XkmbuV5737QSKZbvjeuGJdQMF",
  "key22": "46ech7cG6ZFnAg5vFUoyy4TXLv3oVLCeAg5hXEKcsewxN1q9gsueHnXQUJGE96M1pN9y9J3LahfxKay3vN192jyz",
  "key23": "3XgSpERA2zXcgWLNoTCjwq6SAnx4oRkpDiDGh4WnEKR7nfLrTovCTwMasYdTFujfdPGx7gfSrxhikNShfyexujKL",
  "key24": "4voMfJTupetA1MYTFkYymHCdC6tEwL2vMJvfo9sF3jwp1k8Wyua9TwXdiKNWQa1Qpk37wHkvBJDBZT73LuabRSbV",
  "key25": "5mPcAXnF7R64LUP87vxzZVw1NtAksBpeWM86YxvtQ3biGnHyWH1dkgdRhRyRfqDuszgpHvpvYKD3zeay9ZRSEajT",
  "key26": "3NT3WJby2T1gTXWYaM86AoaMzxxwapKy9ttpZLS3F2fidHCZYunPYQAPJB1BALASuLnHQuEpsAMC1j4P47TnvQs3",
  "key27": "3cP2ZYbpbqWHTTohyXuzuJ1dozUkr1bGm1pY444Wm3KuaF59dxt7jMGgtsPgmWbgcQaxibhNDRvQtxCyPpJqvmYL",
  "key28": "41e6uojmdyHLWL8J2RPyT4jrqNnrfWRVkXDNBy21KYy8UKi5VnkQvJRKVsdQ1Pn4RcqVY4ZxbBhh2WsSSjhRbygw",
  "key29": "2JLBFdkdmuEwpK8o8dnbobzNodQ9t72ufnTdumcWxcth41ns5XBpRqBUiWo1wUbSuRb1UwmwmHVw1BeDD8Dr1Syw",
  "key30": "21ub4e16xNLHRFAseLsFukG8oEsPyYQ4Zp4So3aYLmzYCbJGczsMAKFywW9vhY8fHhr8aAV9GyBrVsUAcLmYuqjk",
  "key31": "2vuEhrSvwbWafDbLx77qBQCsejKefw856n98HpUzX4p2McWNETRPugdqwt8FvXwU5cKHWNzGYvzmo2sJt1PEE32C",
  "key32": "5xnTrESN19dinuEzEgyU5DXJKoHkNSr1XkaGLpFpDMx6yov5cDZs1zcpgHxcs6rAvkPbWBXUouBeaK1NwgW8XKL7",
  "key33": "32Gdqx89cfRKpSfaYnHF9HsHNwzDsZBMEis7oCKryDRgu1NpdtbbWiJK2Smcx4RSZbHtbZBYQxL1bpJ7TLbbEHge",
  "key34": "5F4YdoFoaWSExr2D6jTZknncXw9iw99RN1vSZ2z9RuVDnc6MrkxpR2KkUbyaMBb3h1XpYD2gH2JyQ5orBHVFtgK3",
  "key35": "4xHRGaf4uefcd1c9Fha9SS7SkFgYXettnbbRPvUiH1Tnyc9ByyrCmFc4ChiLYR8VpUkvsTsPTAmkK2JPZaWPrRvo",
  "key36": "3qd22feuB89Xz4Qr5WzoDt5719KtB939nhvu4kxUfgXuw7Hkcp2tuNMSL7LGY16P8kGzyrWyVz2sj71x5nWrW8T7",
  "key37": "3qfKNqCszbf5tZa458iUpiJ9rr2wFhxFW4rcTd7XQYzoYqg1ZUY6diT3QeT7M7zQF6EKf7xsFtrevdFgLXT8DLyy",
  "key38": "3CRmBU4k7jsu78J8USKLdfJHrwx6Ku4Z5yzeqn5EpkP61oq9VsTadzWR21JPnH3tDGptFmWNJCLDff9JryxSVgyx",
  "key39": "6X5yBVeqXyxf177CFj5foM2tQsAq5HdUWZTE83WD6qpHC7rurNeaU5gTeRPhEDzf48iXwy7N6nJ1GiFPVvZyhRX",
  "key40": "3vNMPz5F9eRAhEzqQ4s4Quaz46uG3BuUFGEkkBDo9HKqg1asqyQBjM6kbpziNQVSAiey84WJduR6Aadiw7v7W9v9",
  "key41": "5mwybWRTQqfVmNy9rAF4qZQ6o4VR8gF8M8ZfiMwyY3WUjijW1kCHWZ8GgBgCJ7CZxxEgwZeLJtZBDUtW4gzDNhq7",
  "key42": "2dTqMT1CkURU4vcBCi6yKJDqA8feDX67uNTxFvtvTzMcyzSed4Kb3A7yi6Lq87nt6Ps1rVDcE1taRemnzLS6FGhQ",
  "key43": "37LeSPCSqwJFCJmJcZEAPwsdHQGtYcsdKn4BWJNrwnDoQ48gLiyAaUMFzQe1dmeZYDzF6DVVirMZqwjJtgcTiaDw",
  "key44": "do9E7EoovUD9ajsSXq3oc6U3B3cBeiN4pS21isQhpf8YHvpo8fTXoZ42uDGmv13AWXESpRPm8REt7Capqjqowh3"
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
