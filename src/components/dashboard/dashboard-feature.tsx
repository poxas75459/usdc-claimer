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
    "d4YxbjHNTB2m4vU6QiHdujoJ4aUZLjdqdsNXV9dpG3Unear8HV7N8hzfnT73sjkUEUyDX1Jum98TEPPfU2XQ3yj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MiFzSaRcU8W2Uhe9cBp5THeUXtEX3Ccn8QMjPU9SFpfh3jaNhWk5XZxiCHcTq2EA8V3o7hmPFxPF5Xhfu4tMz9S",
  "key1": "58cpvZuQxLR8n97XcwMvZYkqf72P8BFnF1Dnr77jTCvract7ginrKfLuAquVbSc5waUbPu89hCydir1npcLMT4P1",
  "key2": "5jrnV3Hrjgqn4iayj66ZyhvSmYdksDUkCTdwYTAhDBASJhDq23LnJ871uH87CbsByJkzk4rWK4CG4d7DfwmxjkRy",
  "key3": "3yeaFouahNgtm4ZuPPE1igj6j1vr7MDdyhynNM1VSKYWKp9jDnQUFAHArgNj2U3Fcyb1o3CjjLYujSSN7gpNvPMD",
  "key4": "3cmkHnEyKnBi5uZ5f87KA9ppJNHpQUWGyMKMvSRTDHCGcCscf8Z7NpYNGaxSUKEBpfbNfBgWKF7AjhY62PDWDmaE",
  "key5": "4VSEfZ8uYLcvXovbagKKXU7d7q87RQrUsMnokA3fT1hw3g2GwekZqjvgV31RKBQii5fhXxbMez4VaxTBJPnJaYHB",
  "key6": "eT2hVNVhXQCFQGTVcXkgENz3L34YoLsBuGYz51Fe1veYGq3By3mQNzHMH94zMxxCwXZgHidJHzd7at29VaJLb2g",
  "key7": "5vA481CGjL4pWa7YowNv1u18xZGZ2uZJxsC7ruzkSy4u2wiyQ2J6AP8pptcgJYaGcBXr1jb24Nnj28cwZBoycNdd",
  "key8": "3BjCBjNNKw6CHpEyMaN3MYirDQSLaA5CrqVkYUugiXZFiXDmWNaqneKhouhYv5HgoK6VB2jUjm5Qgvk4eqCjBeL1",
  "key9": "5JZYcruniv1e1SNsmwriSVveDi5iBYwz94CSbBmdNTpWkksQ2PvzFfr544VSZMVQYVCFNFjwRAep56RHcWzEjmxU",
  "key10": "2FuCNNd3CgmYQQfK4dbdrXW66kDrAaQ3tHMWSqaA2jPZMuYXtzJ5x7o2AtJVxPrxCJfkRRW525hiqbpfbTfAo8wA",
  "key11": "5PSqqWshukhG9J4A75t3mkwipCsPwyCa7Pe5Zn7K5vttHeqcfgj17AyuKMvwEkM6V8Qs8dLqVKvoww89PR6H65ht",
  "key12": "5uFm7FkTxC9uyjwAjiq9njhbJSZBTsGfMVceVoSuWpb9zRGLMtdwYLwR9DfpNnTRjxufMvDd59hHnNKZbGUqzUFU",
  "key13": "51vcYkUmKqaSucrcgqS8eEWR8BXf82Gnt3euQRNekyR9ehnqhqcnC5zGptgzQVb6d4JAxFz1t2WVfK4oxAPWGbEV",
  "key14": "5Ze4vQ16MiQEdBHbLFyNfmg1X2NhVPm5bc4Yka54Hq41CoyKpbAEsxFkY5DpdMPt53xL86FT5ckVpudfazMXi3Dg",
  "key15": "5utvhBqKnH9WcKcNAg9MWXqhe6akujcFP4awThNMN6XemFgjVwcyt2FvBF52j7PD8Sjf7RERgMiZCrf8EEaw6qLR",
  "key16": "3RwuWdPzCiKzUexm6K12GT1jKHnLC9rJLDJ54naUSUewBiMs6Gnh7TuKNZePBRgk87u9XJBMbdWwNBzUzY989WkZ",
  "key17": "3c7JPrbFfAcduGEDkoSi3NrvTqdupW3fsmBd3VG89dpdVsNfEnK7cE5EKcehJJq5jpU9FKVFThtEbBbUiofXzMga",
  "key18": "5afQ9KTrx6bTZLhMAVA8PExrrXGWhTzunc1boutSkNbEpKoLgvmgtVF7dR2igNzrto9mxQfnpaSyq7DXYXSNCXNa",
  "key19": "BH1MSQQxGhogShUoxpw9yDwoYRvRgnaimJqwqUJinHcGZouWsszvja9LNxnhuJ95EA6vLXF2d9D3qpzSSqAHZqn",
  "key20": "2NsxoTDzy9XCNwSxbBSM1QuRc7GqXXaSZStQ4G4cK9uZKHJBrtwid397Q9KbFHiPnAp5c7R256WC34uDAXPxzp9e",
  "key21": "3FPvoQWt1UbSzsZxrCES2HjqVewDLnmhprrsBZZDTGtGU9Txpayw4AC6JdyNnKF2J7Q7DrW64UWBK8b5yze37Cue",
  "key22": "3mEfAJoVXX7XzMKa6Ta5YPRjc7etQx6QLiHYdkeBYA86Yj6Kf1rKxm42R1b235oJgXScmfdPWwLCkuAqcV5fvrRs",
  "key23": "4Wx65qzkrHHRtK7SjWvwpwwfmatarpLaUyikaHKPRH3F8uFiYampjS29YrrX2f4nRnYCoPPiwHAiGUYCAqwQcR4b",
  "key24": "2xSyiqTb9dJPiNmT2pKBnYs964tE3JuPN9JPP4fkZkTRhd7BE321ZVbfz4V23EJn3R4QQfS9uvthTmmJZKEp49pa",
  "key25": "4QfGSsY9vrsGcKt5hMNLuo8iP9fJatqHyp26kygSGdEWbfudRNKaQ6LWBLoSp13cQWBWWLcLpDdKn3zV4eYTE2Ki",
  "key26": "3hqKUUFTbDUpu6Wew2k8hhMC9ignNihg1JhVwf9akNEgAB9Z1vhD2rai6qvqmuoaDXWDWQBLa2t4qb5jfXhsngnA",
  "key27": "3d8YjeYHp1gNKBuwMj36XtEUu1x4FbKKatS5fQ3EbURmvJGseKoZ9sGzoHVF1pTxx2mC7NncoNsrWuvrAcW4BAu4",
  "key28": "5XSenFGTBmYV2kHdw8PTqfs6oKyHj3JKUjjvhWqwMVMjCT6Uszm7RBfm1jf2E1tERCF9zuXaZG5baHcx88bEz3yU",
  "key29": "4HDUBpKaQgQzdxtQraM9P4EkHL9T2BALPQtEEtQRnoEcnhGKxpdDRtzLJckG3QfTkCEMdkAijeFheVarnMoTQzD9",
  "key30": "3mPvnqU2NZBXALp4twqUJdujTLNWTesXZzKvr7uAPcWxhgVWu5X9vhsJ6AqvTCfbmm7StUCp6tgfM9XChN6ugZb3",
  "key31": "5vM6q2FJRq5gTzbWiBh7mCA34NkRNEx7oMGn5NUVPhYThwqLyup1PkTF8QAYJtJ5cYymwLZ4Fz65ufFFd8nYud7Z",
  "key32": "3Pz4UDcWo7DLiMLpaKAZUUg6rSoKudmcQLruWNrY8yj2u57sw8UmAPjEueZxpG6o4pisGm29VYr3HvcCdEkxhDTr",
  "key33": "2yf75UCnJYzEHoSWwNspWuGvxFVdbJ2iU4cMmJHp1L7AHK5HNT4v55DN6m1DtMgGjW61aYcskUg5nHAckJRKUFst",
  "key34": "QyrvcxcFfgJMPnK8jywsAN7YjyCi9Zs9S7qCkWVSufQieSDsPpLQ44GL11JQvoi5WKHTPCYDFAAZrAiU6yyACvg",
  "key35": "aovTDgcKT9tcVJa8eeR9PUnK8cJhLXdRe5GNQxXaHdXaQMqpqK8iHt3APvFWfayMB7e8cWkN1VJ9ydWD4sKoxqU",
  "key36": "3NzaBQVJCE46PKz9zbPsbySYyrFQWyarcbVWNuuhjppJfP1wbjbUMEhBnk8z9ukmLwLx7YVeZSocmGmkJTtqXWBm",
  "key37": "26Ft4qhG8LzepSWSBKod2oqwUkkiaYeprHDtAzuvqULkASVQ3S58dfs7KJpqYjiiSp4v7Jga9UiB6ZwNMLe9ZswA",
  "key38": "9xNj6XcxWZGeHPDgYACNt4MzWMh3jpmiTXkSEGTbsLrG2hgXvpkQdKko4fjdgUCTsPNUe1QUAKs63C2rm53UFcB",
  "key39": "4RvB6AaT9AoGZ4XXF2A5rE98L5U6u9h78uP6oR73uc3cSFemKyYhVcgqHZmcpDA3uTVyLfJFgzqREgFHQtNJNVi2",
  "key40": "JEUxn8Wj4ibFeo6aBUAo3kTY7MBdydvRFkurEo4i3MUWyMmCW9NfF1TmsmAq75X48S7wdxnmRdXEUEwznXkC9PN",
  "key41": "LgLQoLNm9k2Bp8pdeA9UegVqKfHa15MfSjkdHTKkL8y4ebNsCoEeWjcncsHgCBP11gMctiieL4MMkSR1kaEeSfS",
  "key42": "4WDUK12iJEYXWzvKc6aipuxvVnwGUwyxPy597kQ69jVv3fruyPEmfdyo21mQwqPduTo74XNwUen8UpBG4hJCAxCf",
  "key43": "HXTcLh8ahhn3nSGpUNMYGa49vHq1jmobyqTM7dxDDsSxorEmiC5h9G8oHxUuQ5WE4JSQYbqThdsjvwC8bxL1NY6",
  "key44": "54zEKfDuTrqS5ft9so3EZinWPLgTohKuhL9XtgAMq9vJWbqqAHQCoyQ1Xkbt8URxQpmQgEAGFDF8KwdFZ25uWYQa"
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
