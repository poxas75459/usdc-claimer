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
    "4otUN1RZqeweiAGvyJjnzAQ39PAG1bZa619TZnUhbxBArtpUjCHWPdUaQVDH9DabGfUPDCfWwFE4AKmQFTqVWWot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gyb3RWqFwMyAzzz8ECANivBw2iLeJ5Q8ezXPegTjBZbc1ALjvTcJ7BgzaXNa6J1Y8W3LonX6pjyMTM5o9fEziS2",
  "key1": "5oFhRxSq59pqs7HXK7VzifemwGTyc58mD7kQzXU5FWVve243aJ1ajNi4xCHJa938rcJR3b4HGNy7SZA1mWHx5C7Z",
  "key2": "42mmvsMxviETeyve83GAomNpSteUUQ6D2ss1g4CKtpUxTSe2tWFVqRWB6qxturv23Jwauyuzngf8dMdP94dZzC2q",
  "key3": "2C8S65vTJRjpqEyAbm4XqeYUS5uYytkBF6koZZqt4GhM5RAxBXXMkfvEC3fmVApTJnkU74224xp93g8NYg9bzoJL",
  "key4": "4y4eKM5s7ubvtyaC7BWoHSWN6ghLk3jnxq1M7ny2Zr9WGxmjxhdC99FTLgXso7QSpbw6neYeShNPde8Hu14N29GZ",
  "key5": "nydPD5xCtFtKTqaoGQ1A5XcA59W3Y88nTfW9ADPhTogWE9ezGWqUhvsvnn6ePzHDyXxhLguw6eRgfGPLnwmLKMS",
  "key6": "67FtayRFsPJCx542mPxTiYpWEoPg9HX9kasTRYjohboGbcUQMZm6zeVtx5xi2GBnuBD2fkYjMKfW4c3szJxEevwK",
  "key7": "2zcHrJPCasbkinUkj4JBBwjqTtAmcCnDnCsHSwnyHRaaWhH8e2tc2wLeHH5ruGnrLLZb7AhBFfqtwtFf5dij2HGv",
  "key8": "4UjdXGPSQA6E1yaRNtiJ3jQ2rj7nrc1VfTqwfgSB1JgVQP3ptPuZ6TLC4WQxjJ6Dh13JHha2MZcVCsWY3EFvauqX",
  "key9": "3iU8vmwEHWMgedujHg9L7DZ58UYiZFMimQNPG7adtmNzPxZCetsiuQxikvwS4hsKzkypBJPtR5NJCsPeX4zreQad",
  "key10": "ekvN1Rd8cW6kMYnsHtiGdnb7msCe5LU1rvvXCze37xu36fPJZALe6PFMCrrF4hr8SrajnhcG1nqWMMpe1nRUeBo",
  "key11": "3CXSJ7dUCtEdkHQSg37idMkm3bAykwziEdUiM14mGBjeEkMaebSkvbXExuT2f571hV9P4CCLGbcFaSxMocx83uJq",
  "key12": "n2kXPfwGuaVzSupVx3oQuoEYjDb2sTygd3TdZRxQxyMGCHxbQA26XHvsQ2TZsUV2jJDNZ4jji4CyeFi3zcjwm9e",
  "key13": "5AjnwcGKBvq1gAHNmq67nA7VHzHXUMxtdgWVxVxWgsajdgXhRkWLhyL8gE4nRLGzNNezzL8RbjZ9R8jHha9KpqM4",
  "key14": "2uZXXT5fW9J5Xx38dZwXNZAnTDwb1W3MazJNRUE4xKnbHbB4jJLzeoPGi79mgfcLTWBSfv323d2gZggJRZJojw9T",
  "key15": "zpkdwkVp1Vrk7vAsPwBL2Qi7Pa8Q5pDxHmbukkpix86EJRHwWV3HGTd2apgVuaVbPXH828Ps2F6ZkWC1XkXJ1H1",
  "key16": "3wfaXemxetbGfWQzezbvytAC2vTD5cxri3g1nQPYx3KSfq7eYEBcvZ9sLpFk9ee2kReRyXQVcR3X3gjXhs3mnzEy",
  "key17": "4itpLL5q9qdPEQtGCax1pFqThnqyu8sfWwtjZGaB3ZRuQPWrikhV19YFgNazyxVJAkT9JQnEmjQmbeDzA94CBJij",
  "key18": "5Z8gW1tFCU3BCu97tLNCd5kj4SWxWS7aRJ6vBxhDqXpdrRM3RyNyPWaSQQsRPQzPk86n9XoeMWkzbZ7WSPZ9FDXm",
  "key19": "F5udCJNoB7TQpu4xdJeWpmjuCNpbFWGCgWAMu9dQTENwLVF8CpYNEmojXnUUXr1KNSkGDyB6Jse5VyxGUeBsJmQ",
  "key20": "27nW6NUvAdPsu3KXRBSuYrgPi7SFL2GPQwpS8kz5V3cBCFUYMdA4CET5RbceW9oti8hX8QvUvqqmkKXS2A69LdeC",
  "key21": "2cEFHFs8ihjGoqNGd2SpYNQDUbA5rueJd7GVNvfTxjCmeiTxufiMhMuujnvuixo2D2cj2LLkKW4hY2Nz9pZVvUVw",
  "key22": "2vBogS5QhXaDoVks7xvnyaccPoviqb2BJKCY1SswBKBYXbrePj32yGwwq9wPAfputGGVCPLTY66xaDon42bVFaHh",
  "key23": "37U3P1qHFkuZxoZsrS4xgL7vusvbA3ykodnXaaG8EwuagatpbNyrCnPHnYLHg1DL9MUjusZKRqUkZ69EsjrmJYN7",
  "key24": "59GGti6tdebHVNcWdRkQNbwB4EtB5b76nZ1kbHbeMdrBSwUDaNuRrDh56z13dPaxjj6L5mPyS6DNMS5GzWDPkpfr",
  "key25": "4nr2RyCvq3QWi6pcgyVeebwUMiNgB5HezFeA124hk4y1K71o3CMJ93UKygTWkhbx9VE1MUtgXz4tKmq5a4NWFzFk",
  "key26": "6Fb85kfrWr3h21uFzCQ7u4r8ujBkQSeRUTqBrvR1q5kFVr3WcDnteV3xiwaxeLRPPHXbiD6um9dW31syPU1NZ13",
  "key27": "21cfzMDk1uAKdCFHpoLsSEZvsqoYxSF55NrSnaMUbJUZVdPG6gsZSWnpid5CW8Rx6rn4XBo318G1zMaTXZoXkJ5r",
  "key28": "3GPknH5UJYqPFG1oMTEELeD1gBkfaN72L2wAR1KDFPgZxZn9aiqj3gq36aJhnTm19SWiHaPmhQxMVxi3gYfkjnxm",
  "key29": "2ZsyjSe6fJBeVnMqHC2TJPAYdThp4Y5dG5g6MYnazGe4TUqgnWNccHhwfDLKtBQEiUBJmXNtcAsAVvnySMcRo8Kh",
  "key30": "438cpxzBMi1CHTg9MBdVttSYCW1Up552bvA7rewcmv54zRatEwKiRxD7iB9iyhcXcJYt3g3EQujYDUiwhCoTiXap",
  "key31": "2ezq7JjVyokLcotyKVKaXYj59GWN217LLCXgA6GhsEUmyWSfSkoAuSHXZV6W93dcNUWcApvwLToiFKMwBciaL4SF",
  "key32": "FjiqNHarujeKPTnqDP81DYWLPc8xUCV4iLxU7WDY98toaTTLanjfWtZ47BYJzCRwgnL8bFMRFwWArVTxKmNd7wf",
  "key33": "4xm2R6sX5AzwQUiCw9R5KWZeEZdeghmvfWkv8hpKEiy3aAUgvdGg2KATAog99ib1NrMNTzSatsQrGZViwi13zbi3",
  "key34": "5Pxjhugr7JuxADon9kDwETHUycCFj53fJaS4cmfETzht6jCUCyobBdmaE473TxVMMfZrvXbrr7LGVDCsiwjkTdno",
  "key35": "5ZDKMCzzFWp75WW491bNSX7LyAMSFAHcLB4pp5phWFPzCnn6EK3eFuRBfrbYNTJmdzePHRX5sEaq7cKrsbgkCtd2",
  "key36": "b5vKq5YMG3NGcuvpR9SffaUJLzQ9XLZ9dE71uKZgCmUNY6khquCY3N2ZeFLGUMDgwi2LM7wHWnX2pxcjxqpRput",
  "key37": "3NmenXaHMwWuXY1fgaAHs4ThGYzhHuBVJu9t6ttEBRQNt7TLNgoxZyNtdfuMbwWDycqWsh9YNvThtue6PdkBM8y7",
  "key38": "2c7eo8aUKHogeFuP7AW43cXNN5DYqN4fPupjXGhpMe62D122tUcNXwv9agrPhACfYFMRXu61Cw2usuNmPGiHsQVw",
  "key39": "4HAPrvdQwaSK7P75fyshbSjA1VpjYAiNCZxtpnZhiaHKPJHG9mxqJMJMVfjLJHc31d7HppKZKBCApgu8eZVh74MK",
  "key40": "2jTt8aaNGyLwnrQe8bbjmiroc5TAL7e9AiGp7jJaKn25ropFPexDHZZ5rA22W7uQ7VhKgxNpmCKhKbwuCCXWDABX",
  "key41": "5RQtUPRPRGfw7aCWDkHkhP6epn85HVUwz5udSbbVMDDjepHv16Em21dUU86eo3evXxaDaftQMvrj1jJsmVqty5wm",
  "key42": "4qnbZBpuAavdxFcKVEx2ZArqjBoNfCHRtbfaAbiYNHputk4aYCaKDrBsWBnrW9fjztaxzmLUZSQUF36V3JjgniXe",
  "key43": "3PnSUWyzkcH8XtMLbFbbJemfjFnxqesKjHN5iwZCGenu2d4fcsG69r5zcWZ3sTifnjSdUGjUXLdCLAEv7S9icLtJ",
  "key44": "6xUpvwuML89jWrKZQ4zhk8XHvQGk9pZVgAm1BBGz9HuSmeVqESFBx1a8EJvGD3PomvboWFwmbGg8pBEKUnWPwQu",
  "key45": "5TXAvHKdrogfmRcQUmtmZfKFWAY7cNkwSTzJU4u5JNf3paKQEt4hj2N8qEUyi7yy96nwLNR6UEZoF613LdRfp273",
  "key46": "51KK8bFNdQ2wbHP8WYzgA8NbJJcFm55CAoDU4voZ28hCmYrSqNhqjroNBGmxcvFrRz8AatrJEARXDE7SVH3f5fpU",
  "key47": "4fCjpm9VqCwgW7wg3ZjdTpmBp9RanRhCw3gMro8TySDBe3Uzm7qVucb28NTAe2CJPVBULNoMc7cup3KhgshgqXe1",
  "key48": "4fn4iGd5ziC3L9utsKDDwdSGiks8MaaYe4bMGuVk8ohsnWP37bDWRCVJ5bRcafb9eeHz4gDWCNVvJATWQkpidfSg"
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
