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
    "3mVLN4USDzMNrGxBnF36aDdG49DHTuBd6cvRndw4fggujMaunXNgb697fVSqU2A2mLNR7CGBGfET6ocLRTCiS92d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BRuEYVrzvinya6E24u5ra7i2cV877aLN454wFBUHUx18DdSSAjBTVrS6Z1DFt4hWdtFeEtZ62k7XyUDmK32XmpV",
  "key1": "WHestX62tH9vX4NCEkiDRNAouixEVyCzdjwFEmKxV9CKQaRibPba61ruLS5LvUtnPWuaSEKGWLbJdsetvjbPG5N",
  "key2": "cZsuBgG7NQzykCxwHcvM7kTkDz63e8tzVDgUvQVFzn4vbSv46T9joXo5FVoAp6s7Th47Cen6J3Wt6MgsDUi4nnM",
  "key3": "3skQtEY7wNfnmSkdS8FBHzZVUn2yBJ89yjhbw7erE3RSwj3PatP718G9emGcA8DvsDCqxFCdHhozqnCRNYEoQmua",
  "key4": "n4EpAc9SoqAzNCgFf1eqYvbwzsC3XTKCNGAq1S8JG2aD7YmuvPfBxqVs8Gxo7ooK6AN4fzdi3pHguwKMEQ8MrGc",
  "key5": "c66TTbrMkZoJRBA8v8g1avRUXmYGgutQbN1PKcBBTfKRew6J6yUUDJWCPPauYWZUTuCtJygi4zMvXVW6PQJKzTw",
  "key6": "3UiFwu4V21ArB7APqjQdy86DNghjVPo4EWsfyc3ivfPyTjx21mJqzXLLhmxNQXLCf4tanE4GW3LPsf3bFmm2YyXj",
  "key7": "a1P9YTd1ES1nkNfSewZoEPSUgzdy4xNeQWf5g6pTyAmgS9iz4pXs3AeKxkMEgvKfSgezyVCucg8sQ8SFe2jiFCT",
  "key8": "2Rm4Czz3UufP7xr9anhs5tVzpnvJ2bWPTixL8WdmLNTCzbUhMcFPEWsJYpUvC9WbNQC7Vd12eEeMPCeXUpGqxCtD",
  "key9": "2nnQfzZsRSQNoKgUWRD3oLxhqYTfZN6GvbwvmgcpZ7TUbXL3pyT3TProwptweXTUj81MW2kJT54YT3qFtr2S195w",
  "key10": "49SaKzmrP1b3KKTR2dq5pqkyF7d9NDWb2eb1Jn8iRW2DbBGCpyNrZG6sty5oMU27Vk9on7zsZBzHieVSu84KB7q4",
  "key11": "4SqAcXRJSr1qiVEf8RCN5rSAqmiZbH6HuLYCLMK3hemLurXco14pJRjDds6jYdPtPBmMmaDd91PDN4twLWwMGdRP",
  "key12": "3FSC3LHKsM1sjh9pZuRALPEF3njNVewzuzPcwiU1qCSvsw7pHep4Sz57xDou596QSXzt9MeYtPP4Y3N1Tw6gubXF",
  "key13": "58syAguxEiguffMZbYH74Jzq2xdw2vNfiYcdP64nXT44o2fzj81uXs6a4TdQdfPRaAHknt5TJcepeW9dSf17oAyn",
  "key14": "2ZyKxyPHr6ayLddCjRGeN15yzC2mSuYMgArwEmNChgxofpdxaqATde1hYDapxiFvGQHZTbJZ2Pcayo7sTFnphR8s",
  "key15": "YzqstFhAmfjGKxPU31V17d7GhXDEDTMqbLuYePQSnQmwm2Nb4svjTAfLCpNWxoBNjJ3kMkK7svd9rDCmzywbkGU",
  "key16": "5kUcsuUmuQ6imFzj5kEjQyVxYXXwjcM2MMafNzifZbTi9U3FrZy4VGjDXLb33p6aVQZ6CqtX8BkaaSzJTCEH1otJ",
  "key17": "2WKUsXxgQDS8M7XarZSPeCJaa25ZZgs5LaMS3cP9B2uieR4MS5qPHqk9aHVqTKkbGxhSMmkxM7pNE4BVzVso3jPf",
  "key18": "5n39ycP17yejsrVSPQP9uRjLDaxZEwM38JbnYDK95Gs4TwE1KZhretuLkJaB9y6xEG3rDTuXhmtte4GVi91YaiMC",
  "key19": "481V2ycVgBAoQN2yVKXb36j1853LhAkRDtipgoVhBait2UdG9XeDHYoMex6P5veRUgAJvr4cX9QCHMkj6CYz6UV6",
  "key20": "5qkF1t2Lx2CJdHh3hgwwHLypEdsxyaiamM1mzgtXotWi2TtMBuiSoPJBbM4PQPbTXdUL34XPnZkeQy5HmsXWRvip",
  "key21": "4whVAKTUiBoPWBMiCYZtBZsdVMuLCZJ22JVoiQReu7yrMaqBC5A4TahLZWNFULPmD3qLrD9Lh6GMWcvxFKyzLASQ",
  "key22": "3qTRB1zRgseeJqKpqCw3nREogZbeDGUL8SjbMGHzwtsuxSCEfUmVspeqbVfG6FkVRMr3HRa2ZXRhUi9ja8fHUdda",
  "key23": "ucjG7N8rkB8GLta2VterGUGvJGvyy3noXAZ1J5AnxpGpYQa4zcQ2bw6fmiNJZXn4Bbw9XQ3AwRBdP7NBYK4vaWa",
  "key24": "52LGZM1eTQMCYbzzKg5xaUQzL5j9KJL3amyecvMF8uGyXGmd8JyoYJaKLS9F2tXSpVUcWpf1sJVbubNHce3y4t6a",
  "key25": "5g2uJ2dho8Jx1s2EZifEwcd836nyFv5aFB5FFJfXJoEJ12pgdmSLu3QHAkbfv9jLx9KCyJo8B5i3Wtp67sxnF3Nz",
  "key26": "2nLrV4FCAdaSexvg8fBEDsZbZUiGdbE25Ao7PsNtY4oV9gHAQ9X9GvXjoqkWV6VMGVw37quSXNGg93G29UcVNV6w",
  "key27": "4NQSo8qTsEtRckAd5dafiN9S3LCXSq8EhivKHAFRv67paVWB4o7Pjvp3Hr4L11Kr5Jebz3RF8n83ezsTd9YodP7w",
  "key28": "4Aq7EKD67Kb4E8NnHiaUFenvGLkafoJMhfGJ78yXGwCrr4SsAaaw6A1JZfjMxsBbk1T9jPqEDXQXsr2Pjf46m3rJ",
  "key29": "45zs58XvoS3cvyVij3pCAZZSFFG2pp2fE2AGQZUxuaFYuDJmQ1JDukvv8XNTZjMmsquwYSXKr44wNyRCbZY4TH47",
  "key30": "5x1NTuVFq6mLo9yoiAnBxGxgyjPbPJb1bdRtW7joeppcQBgcVDWXBUyPoGidSPF9tcuCYBErBWejAfxNZThty7qK",
  "key31": "3VCntJMwNKJfpbtVsQgPvRkFSmwi55xqbqEzmBjDFJbFRNrN6ApWWWhT49zoAEXGQxQCMsKr5ktfNosVeGzPp22W",
  "key32": "55peyK7Y1ahhyEpGN1Aroqoqf2D1RJF8iYuXjHGi47FjZWw1Mx763nz7RowV95jeGntJMH38JwEJWp6uKGd7v5FB",
  "key33": "3HkbxPwzZRiYmrHTEbWdZg7r5E9RTXMnwDoQ6sUW79tcuN2wwrmqkXPyAgxcuDNVc2txiB5GoMhz6v8vCAJPXqiE",
  "key34": "3ZBWtrKFzB7NywHr2DCn929jAMBzyyNESpTzKavqpwzBZyvx4QEiT68QjkJfzSSoK4KqpgophAynwrirbAWqFQqX",
  "key35": "c1CNMY7GAsU5WVuQ14oU3ABUih4EwYGfB9twPuRVhPTYspPDFjUBTrbdnqR1Wtv9f6tQcgKPofSHs4YLMPeufb6",
  "key36": "2b1wJ4grWNEruBCgR35TJ5hg6X7qdoHUkUoD668mHkLH6Kjd3fAxozCmNv7zF8wLNQJ9EJh3bGEYN52WFfYMgsDN",
  "key37": "2vt3Wo6LwAwU7SHM75PXy78KPGFZMcEPZfP1VT6zPJhNFXR3mw1JN2KiHWi82twhZvk78rxR7hXWgsW1BbXktEyH",
  "key38": "3JWwoMkk7Vnv5gM4TMyKfqtFJ8tRVwKL8Rxu3EVPjNAnZkbGXgqCz8s8gHa2gbKAa8MihqBrmzrVYDqUitBncdpL",
  "key39": "F8gFab3ZrYmPHzkWi3x1ZYhF9645KwEhHacdeESrhak6KhiSPseeG5b8ntptfpt5DKq9p2kzSxnuCJGRBqvnsRP",
  "key40": "66H9Rn3onXPvJEZe1Fw8NRheTYbkca8eHczJJxf8xNckJXiUKLQKvpLaqE8dP5RWxTgjJuJFaPYMNas5kRAngHys",
  "key41": "sCKdVUtSYJuLS6rGcXa7V3LrenkyLYdhgeBXesuGkP719pBJwH3Hvk6ESDaptg9GJLJwjpPP6S4uXYZ8LUiiwAk",
  "key42": "4YeVwqmMM34MnTGXiA9SY9hoAVjsSSXjU6aHY2nkkp3R23XQptJwbGmhWQGtceki5iWfB3AvrxH7eckfoXGJ8ehz"
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
