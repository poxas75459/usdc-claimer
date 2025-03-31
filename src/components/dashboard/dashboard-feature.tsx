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
    "54vocdyB8FcfdpEANTiWRBgDBYonih88sMGmqXAnYq2Su5dN6ELDsYsAxZR5gg3wM1CJQk3BnGHzcj4i8CpBj14S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cQoYanZLarMSjwCbcqjrbHzkxnpcvmaqKnK5atxrqMTJ4rtyHY84c9yXvFWL4ffD8sqeRTEwbUkNQ692WsNq3hf",
  "key1": "c94FWaFKnTBogo7f4xNzSXc5a1zLMXbgfoucK48QiCdudBqMoUVy9PGUQjhFKLDuQjh1xRYTEXStRVtqGCCaif8",
  "key2": "sM66i9p4Q9uKv7jsRvH1to9AJcjW16ZAHE3xroZDFTRAQkKHFgp9YccBN8AupyKmfKh9iieeoi1j2uAK96xAtpq",
  "key3": "5QerHu7TAkxa9pA5ognELSeNq6sdb5cXdKZhjrK16w6XPcZhEhHYYpJDrYcJ4Etyi5b7MJSAAkSo2Ek6reR3wnPe",
  "key4": "3t82UtJE3Pgmdta8QYmsYr54MrKqfnbHY91nxsEjaPxYS4J2LQVbubM7eu4k62rRiYcE1Lk6g4SwZoyUpLWpBQBe",
  "key5": "4p569ibCaLLaPkRB67JBbd5AjxsKtZ55UHyhn2QfeQCtEnLxGA11497SFDzmQJyArW4PuxLT1TPvzDfFRev3Zw2b",
  "key6": "5LG8gnLcszykv9HKQ4FejkFJWa5nfNHj36wwJ4AqgBFayfMoRhN4HQxWkJVLAEKtbSwGRamTxXoX4teGAQJqn6L7",
  "key7": "2rnJsSNRmd8u5FW9ZcGX3T9RuLGLPGrRJvo3h1E3uiL82i3mxqNAgaHhKgpfGaXRUP5gUBVvDCAjzUQTAfLJefmb",
  "key8": "5X4k98phyuRkLryyr8UGe1YXvcPKoa3onPRA5t38nzR2h2pNBMbmVX28YV84fNoJ8HZsSrHuPcD1Ei62Bxg3FAXp",
  "key9": "4oxymfTWnpcBCC6DP3LMMd7YGmYJjgQwefiVe9LXWMYCziEpWZ72sJffq8egHb7fQZUgAy4S2MzQWKCEUD6Xx7tQ",
  "key10": "3XJmxcsSKgKD4GihFBSCrrVdrjQnVpTgEpJtZb8Hr5SNwjZ83ei4fhiD6FQh96raWq1UdVj4e29jQ8hSeYBxhd3m",
  "key11": "zYKy3fXWn9S864u4jNnnpkPyfsakFMUZTPWkxxVba9XJqUSQENPiqAbWrnEzKKU5paWFWn6vrz9d9BBcB1nrV5M",
  "key12": "5rs3JMR8YEgSa3kyyGkbGAH2mJzKRa7YjdmtnBWcF2KHJCtm2shgiMz4GmtVTkrhaJLizFtF3fZ1hV1v5bzhDhu4",
  "key13": "3pmuY91YkUn6XTTDq9oHhVBd4E4ywsc3THAby7oqWJZXexoQRErhs1Vtz8fTVyF1uSdizEWTqnLQZP8DmGJBPNQW",
  "key14": "3ztHYCSCJzFjn7Mcz1YnAZ8NJokieHUxHjKEkHWR717JwMtL6V3wdg63q7qUoVWo2cMU7d57ZP4PW8BoJdhcxo2W",
  "key15": "39LE13YwWASwStqdGartdBqN225ujDxiYdhjwbXw5HLxN3cPY1JFtkCewanbqkrT24eZA2eSCpd5JmFhrZCMeEKH",
  "key16": "4zkptj5nJrVVK9gjdTB7gGui5QnMdMJgZjLtatTeqiuRERYFfgHq96CQUa42vzCeQC6PNwtdQYVPUKZ6QAFTBvVM",
  "key17": "2PnHxzCL1zSbkC6vFXLryS5rLfMwyC34GU2Npbu5jZWiK4aFEYw8Jo4SEZ46auHAxiSBVThWAWjfevGqx1w2LfT9",
  "key18": "D66RxACv4VD3XgaiXXXQFxHooNdQhtbRQFeJCjfqBxgyGqmHn594yYLx5xDRiCyUiHpzJfLQX2YfwZfkccBET1G",
  "key19": "PcE3tGGwq4tTSkYDgWKGJLtmfd6guPcpvXw2GWFBsKQ6qa47conQvC45bPyhS7aBLjcKGjXtya8CcdYWVSJS6SN",
  "key20": "5wtsVBgpHkRgkKma3pmPvk1SfAiwXqMDhDCvf8HHpmAcTwzzafow2nAaCdJjAxCCCHmUDddszsDFjmo71BADB1ue",
  "key21": "3YVae38nvJt2e3yXsijLMjRosjQcpod6idGfHWSMBejqcHLdxEAmy88rwrBYUuC4v1jUKfVre5SQRLok8Xmnjsvg",
  "key22": "3WHLnW5dMkXwkNCKdYUkTQFqp3XGGoEEGRpsAeWxp3zwTMVHLkRhHQuZ48sQ3xaguCASg95xEUcKWjk3aG75ocAh",
  "key23": "3FYA9SyxBQPW2kuBxXzzBEezkBarhy8CR3xvjQJz84HbRJdgipBJ2EUZmHYJThXSqqN4T63ZFmL2bDsjyapNgU2r",
  "key24": "3oMtyQpX3DjY3qxRDV4ktajgNPXJzjgxsety1ZqNa4qpzcUnD2BV2NGfLwwe6w1utNynyXv5cM7w9nDtW9KATHY4",
  "key25": "25iK2ebFfoEjp4gFKXWXRndWs36YvwkLdJrMt5R6mSJ2Mgipf2xJmcrkDxt987YCMRFaaUJYLz4wvubSPra5CVqh",
  "key26": "3yR8Qvqo8xG9TiSzQvQcJYeK8nrjPktbaqV9Fy7oFFgJrNTekwbYS1Uz3t2jXfG3bcVrjHL7GCNCDoLDjvkfPX5r",
  "key27": "55w2N2zkMZYCchLsKDcHvzThw1okXJJHxYch5vL7T3GUqKy6Q1CMmrZCeSo38eFdo9X2ft8cm2Ejmn9ZLjaNsca2",
  "key28": "3Xd98jfjeUcAL6gf5j7cUhSUFZrXYHbjreUoRFkDFXNHGQzs4N981PVJdtM3DfhA49VeFGGfMotR7NHHGY1y4vKs",
  "key29": "579PwHp1JHLtP6Y6PJpy4LVEwWkecHZU2tu8JWkoZdhvzjgshMYejZUSDNQfFmfa9JeiQQZefKeMKb3uJcm56m4T",
  "key30": "57QiBmAe8qV9kMDDPW8nmjATfZwQD6i1U8hb3oN46uhVKj499wgQy1sy6MGKqCDRAvvNqEekQzvYfzw3Q4PZJpB7",
  "key31": "52orvikhEJ2TYjkdbkdASxsZLJQWsXvm4NRSPCHKt8fBWNe3pVYBXaP7Q1ZszMBsswrn8x8FZiU4iiCFUsfSmbf1",
  "key32": "Dk1JzPWiEkhEVED1ER2ccXbH9H3odNYKKYzTbfCwD3riy86HQzeJGQjbgPKHsKxzdSaZR7kGuNtY8Upg3HtJvzn",
  "key33": "2rBTpYmXK7XidnsKg1FhXajTYeYfcWZ9Lo73BNjcHLDQ91CbQjv4mPv4irHGRt8e1msgf2mAHxwp6qRb4koEugZG",
  "key34": "4d73rEFbrdziWBawdPvecE7ZBTDJBK7pjnysPSgoojASh8t6BKifUyUp6Wdn4Fus9VigdtMaVcV83znv6oxnhVya",
  "key35": "3jTKf5ydeBi5RynC9J7n4UZM5vY6JvmWbRQuYPFX444g4TWCUAMfKpG5YetbnJUKBZEAsgeUvfyCkWNRZGTyW88o",
  "key36": "28rJaQNftD46kTAPebBuv5pzM6m5cbXwTWw8mkH8zLn4j4nW5DhNM1VPJvA6HnSz9MWQL77XEQ1uEj7jdboJBPdA",
  "key37": "2MWtFEGeJQjKErDbBWSKCasgzmBYAYSWpp51D17hHM9mM6nSC8iUzBfd4gh7e2K7Tyh9ohj79Z11CdcmKAie6SEJ",
  "key38": "3F8LMsaAdkYxgSZ15Ej9ELbqBBtfvNMgs5SophwwsS4rgfDJjsxSqjkHSSDZGFufD3PUMdRT9TPgwqjXpDTvGris",
  "key39": "2RtBgugGp2WMr3aNjsNo3nGbtFrzH22u8wpgoP6P1PpRGd49rbzSXUwtEGTEKPjKD8GqBW8SUGwybxfnHPyFvhqL",
  "key40": "5UjdwoGy9u2aT2bm86D2VT2fFzuhcm5SQBk9yae8bWTUwajWtXNJpDiZmoQ911SN6LbYshLvwSMhtiRkW9rFP5g9",
  "key41": "427gfyvBRtMgPCd1YmaajB3cNidF3Ym6wi2839LztZJfoaQxpw4zbNTidn5YTQLwBhTeUQ9LDJqrZTPYFeUQzkyp",
  "key42": "4EJ4HVxQsonVm1RJzi4FqFbGNEKtZzXZ2TqdDXfNJbLmGGjzXLf7dECHcvsMLpDmbeWLrAej4wjgVnLurqncixvk",
  "key43": "4f3WqRxL81XpShQsm4nfYgFm7yQu7555MbMY1BeS5juuACXg5kRsw1EwxDq2mV4FnMANpgYkLuWEa2DvXMg892XU",
  "key44": "284wPGD8iBZkf3amZeaYFHs5hN25wvjYSUzSzuAMSUeKCofkyjBSECMR3kqMRFfD7LaQecfwDK6S9YxvT3BPURS1",
  "key45": "5vnNvVyCZZ16UskC5na7imuB59XwnTAo1YEAGim5k6TWrahXBZjaneCDSaQqymTR6LiSeXg1snMG2BhQ5r438yaG",
  "key46": "3ibKmzKsP6MwhgPq29D9AKR7ANXWc3XNiWQWAMpJdjUeUhJPXH34xXggFP9n26omZM9krwhWupcvmNwuzRTu3zQe",
  "key47": "4kdQexFdCU7cgmTCvbccuf72kCxGLciDXPvZxCcTHgASExZFeYNRYCpB2bFaiqtiggkkrF7iCdgfJmCw3KjhtcvS"
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
