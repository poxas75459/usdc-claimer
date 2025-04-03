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
    "2snoJQB1BAAMrLmtpqWZZEN3UqJoXdXAWfuDcEsBpLbNAKdQwDv8j1MX6V4HebuTdtyhDksZHDpsqKGhrLvGLaDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JADyiV5qYkJFrhmPiXifJiWXRdnRj579nm6nCgxX9CSoJgxjVDTyCk5iBfypKaUz5ZZgjRHi8LCX8YxzGFXGMt9",
  "key1": "5hws1oDFUzKVvzP3DFq4nhKoXGujhxvrSxckVcRy9Q2pvkR1MYdbyjXLurDUdbkE452EVur1KcfMkgJsRdHt4CH9",
  "key2": "2znvKaLQSgwUKQzNBiVYDy8XoUrQNuFV8JeSvzVs9fQH4YnycaLmpfiAaYQfLy8ioZ4XvP2vxiZ4m6YfE3E9DWdF",
  "key3": "H8McaGL2jw2du7bCCGZ2DBZnHNUD1MQkX3YUhBjvT7UnZd7BR8MJkQ2SZzbkY9FtfuAJC6vXQCkfXrZTUMGkEgW",
  "key4": "4MGmDg3HBzepWesKSE6GLySa7yLpnqZhHyaMoV3YbFEcrX9YNKLLPDwGpjCXb1ndSVzVxKGnAjYtQBifcUe9qqUV",
  "key5": "q8C7NEzpNEz1dGQauEXapqHm2XLcvLc4sBw5abvNyhv4eawvbwv1zwGJiBFuxHxSaWAcPjaBuJPL78NcPqgjmEa",
  "key6": "2BZruYLj74jjWfFyUp2mXP9deTAKxPb2VrQewpXAbhB39aVhENXqkwpPQK9jSF3kA6UexvngE2aGeDPXvBi17fWH",
  "key7": "2Tja6htNsUzEMJkPiAWTnNYTGD8UzdAh6r4uWbA7K7VCpGmbjkS2xn4BTizyNHSC7H3ztV27vAwwngeMunbUEK6s",
  "key8": "iHvw5LvGX39p3EfaPzWNwNaTah3RELQTi85JHRdMHU1ZpVMPVGssgypuvfjBtHWSqvNX4CfErYgeTsv4sD3MCUp",
  "key9": "3JbJCHyNyBvVfftp1HBZnabzGoFmBi2xJaFFagimp8oXjZF14x3efepSQAb8iwck82iD1Z1No598XF1Pn1THVg2P",
  "key10": "2zMhyf3oqMzPzTs7U7hvmJGgxbYNtBEfuYmQaKzncenCzPufrEq8D7CCVoPBeH7KvN4cK5vv76b3kfVTJh2r8EiN",
  "key11": "2pqjFM7eSyqHCMXjysCWHwCXJ8h4YiSuN1YUuSC7CKx6B9Eae3Etr6mj45VB3B36N7696gJELJRc8ZnSqyoos2Li",
  "key12": "5ZN5qFjJ4QkwN5MWPmX6tY8Qyqw7Tm1Je8ig3rBUyyRzAriLdJMNwkicccAom2Whe9rViUZVYDRKq1yF52D8Npti",
  "key13": "5quP1RVN1VXsUwodL4mJogMwWNR47G89eUDKP8Vvxc9W6vxdpjcCX1nN7CbivGX2Hu7PGks8oeJJCnc8dfUWuk8m",
  "key14": "2xRvGPQvWyjFUxhw2vrgFZQPvBeotauuEe8hU5JW6ggHuEiS4Vr6VJYJh31QVpDwPLBNotD3VtnHe3vrMrfsUgS8",
  "key15": "26WfNmNgJZJN5LusLoq8g55nXtVbgVKfU46Rv5iKd18iG8EyvxVWgpvS7Xi3RTXbVhe2TpevycKtgULr4UrnwNc3",
  "key16": "2KW7MuvavFUMBZMHUeDGfYJ7GFAJiVrhR3BPioZFpVfWm4wUHcnx6pMU6fa8i1TjcLePY4xeG74LJCxV9Umddsw5",
  "key17": "5pYuicLdTFsqF7MUi4iMfVYnrZidAR27kzh6nQxPoaE82j1ktnBSZVYwY7Beij7oacrJkxQ1xy1Upwi9pcsPctRK",
  "key18": "5p5rpPcnD6qeVRW12g4w37yBrDiNqfoiDKgqWep6TtCbRnBejvg9ucNfxyUci5tYDdtdHCWJdCsaeJnbsYunnqXn",
  "key19": "3L2hsqjSUTgcovMjaj3zJUKHzUViQmTwi2EyGrXhpojtogfKzYMaPaMH3PT6AZ2BTPcX8CrmmbSsceWDGHRiFNqn",
  "key20": "5U6tma9azhqQGz4SeAf9RfPgDghxKt1s5J7X7s3pmKWsMuoLwWsf1B7uDoit6W6viq4ZJ5iVTeY8BewDnEf4ujbm",
  "key21": "2oAoeKjr7NuKzr1SWXXYHjRVeYyMETz1ECZSMgsWP9d6QLUPampEoE6Ft9tiypF1iBvKqwzo1JuSA5F7ECoXb4PM",
  "key22": "2DW3xLk38uYEE6juYbh5tKKZRarnDqTvJ4Ldtu5i3cDBDRwDLJZQbbua2XKrKpSZNgTYz4oYgxgCCxpTDHkmZdB",
  "key23": "3qNDrtMZZofVRcVkF3vvkUjWoT9aHa9UjKMxUHt2big6yjA8Uq76nHouM1PoxQXHtaU65SaWbnRkkULe5CfcKZQE",
  "key24": "4h1udEdQL9bjRng6sBPZf1QFbayzn5y8nhN2bTGBkzBLrZviiw1voYV61vyXLyUcZkbkiNtXBREXaqoUNeTTCk2Y",
  "key25": "22vjgdYzVhSvS6uhNg2nxJoDbzSWGom8kw1jM7jQG4MLmJgA6Qf37mskT6CywYbbHR1AXtbfJKp3DsndxfGiurHy",
  "key26": "2763iu2sncihQm5WvbCB47CLK32i2sz97c48Aq9qJJz5wBdwJY9HgWkVZManuwQeSsjPNUcvBZGWh6tg2sMxYydA"
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
