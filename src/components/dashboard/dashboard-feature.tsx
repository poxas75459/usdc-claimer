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
    "49jpRXYLVHv3ZSo71Mx5a5hRrMZgnQpm6k6QMRxUtEWY5WGRixtbVnTzP7XJG2LkSnia7tyv5r9h9SV5wc3aTBrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nUkDYD8X5fmiVL39JLxK1ks8cN5YTHVjuofCNktMn2Yca18V4sVuFeSDUK5G63sR25v4wYBy1CBBAML5QVMuAvt",
  "key1": "5PzQZhpFSFc18GgG81Nn5rXU1eQePQJN7LVCCuKuqa2ZZxS4FenRo9z78wJvm6bs7FtSLRS5Zvu13etWTh4D7TuC",
  "key2": "2ZG9GLsoDWBDJisSnirH8b6dTEDmxEThmHq3vvVYWnZh8bJc5A9itKjMj6Cz3NJSbnTz6j2PJoBLuu7g5s8jxizx",
  "key3": "PXxA9uKHczu4p3uiqi914oHLWLixD7Sjo421Y5W7ENCGs1HV1PrqCYynaJEjcnmH8rbSnENDyLmZqzkQUvK1WuG",
  "key4": "667hwKEPbhoKDjurnHAeVVTrdzczFHcB4VXSombZrs53TKjobjFw4vZca93N6vhpziEvQqVMWJADQSrhrVSCTeDQ",
  "key5": "55T6wHCw2Wa7sygnzevBZPwFBqrpy95V29YrRaSpWgQCxyfKxU1BcSQE3GNRbs4PvNxk4PFFo1XPwinMz8LjSbi8",
  "key6": "Z55FcZ4QH6Zdp98S6Rbxh3aBijv2kiuLXUDSvNRW87hqNjXaTA4qicRxFhnBC3v8mixFwmThkCJVgm1wfanry9M",
  "key7": "5Lf6qGim3GhQj8FqxshfxH8DfyRMutnhFNPxg3pPEXS6ESCBNJPxk4QCn2tEPDbtqZ5khzRpMUM3KDMxoyDdZAUc",
  "key8": "4isYwphZWutX7SnGhjpegEzeYrhSspsAUoD54BPRxxpUHjAw5Lxjn3M1yjSEupT47Aj1vfdv61MPXDgC4vdzSEvS",
  "key9": "uZuyJbRXJwJRPAPwbWGoxMLLtFwGPRrsTr4yiCNEGBNkQ2Fdy1AL17K8qRyp7QGuEVf8FEaMJJjvSDoTFUAL81U",
  "key10": "2MgkoWtBBGa5dfURizAFadyRuaasPoBACjywwJU8nn6ijDMPAGDtaTtrxtdGGr2ftbkgXHybekyYY8JTXWJUMtRt",
  "key11": "2vEdX9WBoFE5jLjFS68yqwALi5zvbMsFuN3V8otnDszUpmAodcoTFtnXNirTwnXrUSNXiVwLedSBcJ9UPigimtky",
  "key12": "qUTfPmCcyhA51tFuU6c7b1jGT7bktfjYuqq2rQ2WrYdtSdtpi5oWHKdyisScjxqMnMAQhrm8WHsSNVpUiAycJDq",
  "key13": "3mwfLQ1wkKUmDbQpqwQ1iGaeiwBzv7CbQ7CvmqUZt62LSLbAspjNjeKW5KpXZjXDdK2oZVstHiMp38b3BeJb2uNT",
  "key14": "5fhbpMqu6LND3uWp7mabP2ZeewoNc1zNFTFcrDYXYXNb5gNJPizSvW48BHx8vMfwALTxnaVDZ9DHYgEUKFCEQJvz",
  "key15": "2kGjCy8GFRsVnw2DwnT1pHyGe5Kq6Pkq9yqPx4kYj2moPYd6DxFhio2TUGmEsr5ihA81VgsaxnQ4WyQWeYgzVCZG",
  "key16": "FL2zj8MrUM6AxeUvzxhNG1vrxUsawA3u91Cse1r4FS1qLMGtgxjpZzotc9RCvKtWViwyin4TU83xVt5LcbV4bGt",
  "key17": "5tskbVmr5rjEbnmS4P1yZpu4CHiNprBhMeH2fo1jhJQgSrJtbQACKtUDBvXNTNrJUNqnLpNxq2bjJFW9D9fi1bUg",
  "key18": "4piQrLsCsv5aNbUdE8xcy3iw4zB4VE5bbV2A4EA8ZASdYBXCgx9ZJ5s9EogFMudaFzM2LwpYe6xqDtuCidwgaJSi",
  "key19": "3FhyPHGvyNmi8b7nJyvyB8mfLhebrj95qGnNs921XsXaoqSWzYkE4azY8QSssRmK2qZhGorMj1cUqL9hJbA1ytjK",
  "key20": "629AudfMxydx4fLdSdhs7uRUbYrZVCGGy46QuQakCpm4wfpEvNNF8gabmhSJd9xfJv5DrFVZpcxgs58MABPF9qRz",
  "key21": "5Le4UoM7GzKsCZeDofNm5sNoqV9PJD6pHhhzk2x6wQZa19nkbpY2G5DZj6172aB4GNT4QYYFbdGekYtvpauujJg6",
  "key22": "2SVrM3ekvqj7PPBbVNdUnCBdHE9AxaqUUBYPYS92w6Tz8P9fhhGPFeMUXtBnpWZpzH5824Fgc2w38HL9zFyf7BQk",
  "key23": "2RcgZktEXczwW6SGc9KG7dnsjiFDjf8FRHZc5xgYUmHFyAaXwwb3Hf8qdt6h9D9MxyHvZWYNuetp4vVdQoYFufsx",
  "key24": "JpmQYftSb5A8vJQx4L5jqE1aZWz1pHpDqk8Uj1eQSXV8QVmsbGXo95LBtfFeDiowQVEM1moT5ZM4HpadtNBM83i",
  "key25": "4nBqtD4SjbjtJphhnK3UmbQQaRjwNN6vyaJjFqBrdU2KUTENwKFx88MCGTYHYPhLjETeYsT7nDsA31HPVmrAYm5S",
  "key26": "qhqNG3eD1aYythE6L7gS84kT5WPC6kFUamDPxJHLJybAx5etGoemiyMcLtiAnrffanuu4cQ3qkpnw5pW3HYqkPc",
  "key27": "27gkATLBKc2Bh6kwqbVTu8y2VbPtpsY3xCYKamsBSKnopsto9to58FYrTfDfyQg6an219SbjfQYHSoKKEJwG7Dky",
  "key28": "2aXvqhzmskYJGRCnD5raeXUtwQ9rrboDE6QHvPeMXDKCTnwXDqJTSNpzZ7oRcqUazuwyiVXpgtK3qfp94qPu9T67",
  "key29": "4PLZP7juLBYuWkx6ksMLSz1ugbJwu8cKcAYrBjPjM6zr4VY6CNYrCYmwBs9S6iAeWx6GKCJntaipz2HVyGrVurjz",
  "key30": "4kinhyGnKuLD8hQ3r28cxZ7g86EM6toEnmoAVU6o3hZpjBGSgB8ijZDZB1gM6GFetn9bXNbbLv6HyDQN1nkdDPMj",
  "key31": "5FZWABD1BwBTxUXt4vfdk75ssEYbGxvpkMa5KdnhwQJCtQF4SXBnXBqzx1gvUqozERrQLrEjU5XhpmTBSG1JpwuR",
  "key32": "E3KXX24q968cBdScsavvXmQPBgfeSS2nK42Y8fxspkmvecUEuzT2m4pwpwcSybTRmRP421XjcxnZtG6RgExPHVo",
  "key33": "Vw1ZFW1LWJ4whm4UqvkD8ZcKpXYZNkwAckuifzoLCxTRtoK6UuvGBmcgBvjUgR3idg15bFdiNNPkZYiGBEnwG35",
  "key34": "5faq3oi6fomkaDCdNnKLQ84WPAsYm8z3vXB4ajKa8mUsnf5GLmLDsrsAr6DTzwaW4gVBSLSnVPF2WmDNzTPLsWS8",
  "key35": "2oaRfabNhWpwrHbEaphkKZoykzyaoPQmqhXyEbexoxpznmmd2gdURABmtow346HeQx5XMAYs89BdzPPyGAYX17kS",
  "key36": "294an6DWcGKWux2NAjrxsFZdoETicRdy18F9SvkKG4LbJiebcrUzqv3vX2HPuYpK2i24oi2mLYwQApkJVu8Mhtus",
  "key37": "2DWLbsVEqTRR5mHvvZjCXr9jKDcFDZVa7C6AYSUVhVxhihUn9bFap1ya2Zrja3iGD9gpyDzNozT3XPZt65UxgTFp",
  "key38": "4EANb21PCzjekmMSrQUa4YZyHtcqGQhZQq35RCiw6aDHFyS2FFhD9fYVuSQzvkTfCAHuXgXSaYqKcgf3EiayUY5v",
  "key39": "qvBiNcpw3qtUGmCCWMbMd1XDgvHyDA2vh5iJsiRu88CzQ7HUigox5REHLLVCCHiuJnoH8aBZccUFGp8zWH3LFSC",
  "key40": "4g6D5kzfM7T3HXhs7eyLQQokUfm97yaKWt2yiDMkRoEWaNxNYkcw1ykgxizrB9fe1zpNxuQnqL3qtLqCf3EQRSGr",
  "key41": "5HDeC83EqKGaicormHpwbvfdDxyb5WCmTjsb9gQBPA1qoBiqXJFNo2Pe8LWzf3pfNJGxKjUMvSNVfaX8bZiUZJiS",
  "key42": "2XZ11EV8Zb6Lm3DGLPodKEUdsNFsURWQ6mBjeQPG2RK5m7r9VD9oyMZgYvGnyJtgqaTHEnJ5djVb39AAAwwchoB9",
  "key43": "3uUWfeVrtEYDUitQTASbubuKwormEq5uTa8jRduuSKspH6XGLUFYT1TSqV11vQ67wMwz9KKaev8neoYDK1r2covZ"
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
