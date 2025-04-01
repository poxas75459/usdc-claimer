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
    "2NefrhXbbTr4io8ffEd4RDq8kaurie9uVm12NWh8WVDU5533jPC3RtV12BXKXVBZaRprPL2GbEtrKud33h7sKaZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54fYTvqnM42HKdyFqFA8z4Ys39G6MMKZmWsne4kSrdEime67koNQboRzNjhX3CghepfgdirX2dzhiR5DBhgMnwNU",
  "key1": "3VEXo7TciPJBaSkqjMiseGsCGsg9tNhLtWrZsQ9CxbLhbB16w5AMfkze2br4fdof8vzFUF24Z9abMu8xpFrDCKAV",
  "key2": "2ujMcEudwc8wjSXZU5q13uFr5SdDd2d2EyonQ7DEhcs18ynnCz1D5jH8zgBvHRqyS9NjV12S3CKt8mwQSgAxAEfN",
  "key3": "58dCsVqYpb8eMEvBEtYYpDtbfCeeDx8QdDpddPyUsXYxHpoSv3xnMSWVE5sxrM4sKgUFjPXmuVf5DnAok7XjpReE",
  "key4": "44VLgDU8CNk3KjsKmCATV8vbuW5b8mBHnJLeAhhPYjHERbn8Y9N4dCa2mwjDadS11LumUvbyFEwoS1PFNLcdMrdF",
  "key5": "fCDi6dnvANkuAPBDmTS7269vUfyD9D4brAEczL9s4PuEKXSm3cZMxC1Krrzhp22x2AYSnV1G7JhWxMhLdhfy3ig",
  "key6": "5uxPi7UZggCLr1zqTDZwFhPJ3Gqe8xCtB7JaQ4P7Xu4ysPVr9gQJ7Z4doGQ1hByofLpwxBAUy6aYhTrRy9uf7Gek",
  "key7": "EyYpAZmQBdheyPXkJAyRdUdu92wJhZ5FhZm79Qq7gVPZaopyjyn6CUC5wJHiK37roBef7VLiBXRZ8vThtEfidKR",
  "key8": "TPnV6zKYdTSnS6hquotCFTgBSTk6hoEoQJDSnCbFLEEQaXwxUievM18H2fUt5dMWPTkeUxUbXCJSgj9iMmKcNjv",
  "key9": "x9GFa6toqS1Z6jVRKYE1aBF92MR7Ayu9fyrPqp7U8YWiXAxDZVw7fjeEXFCzuRWUH3yW1zJiqycRjXUNdrsjSi1",
  "key10": "42hPi1m3bTxiFPLFsMnihmU47cB3E8Zct9vsUqcQjgzrYYYYndFuA47WeFBdcroSyxpMqoBmjYhdQvrdKQfLosqf",
  "key11": "41BYWgMYZrsByoVRYCnX3qiz7yMzVexncCqXjNXyKu3gRfD7MxXa98ooEJW17RqUaaZAkNHkUCJfmBhA6fBji4ue",
  "key12": "2V5DEqoLWnm56hJU1qJkZZ6zGnTgRtcxNLg6jbCGip9mVBxDaD1qpG9Xa9ZfCHTSbNULTS4PXjMXgKuXYnNoYssw",
  "key13": "oebzzWz6CaGXV1YmwRfp88gcosduBztWnfZAKehXQurTBCSowEjAvNvmWeujwbhH93CFqLJKvXw6KGZG4orj8bz",
  "key14": "47cVmcc1bihT55TuhiLwpB6c88ZKMuSijCFBdC3XNR5BFyPVAQWuRnMAyz24G4Tzd53QFDNfKLsu28eSmWmhrz1C",
  "key15": "48v1rSxipyzzFvSjo4BSLCGYj7fTb9phXXSyHY8EQFdghKjvzsyZ21BZ5rEay94syM4XVr7o5C5rvkzHTKMDZDQg",
  "key16": "XmmgfGKkNYigyr4dtW7vz1W6H43jBLCuvmzVdSwwBDMSD95KrhBuJN8zGdByHXCTtWH89DeWKsAAu3wfrFW7S36",
  "key17": "WXebJhNa14MrLWVQ7nqZUMStCtkiNRjBdiXdbRKETZzEssgxDsr2ycjaXkatKeQ3QdMR8pnyHtCKAMP4wCMNfsX",
  "key18": "s4TVoekcFKABiZ7VNDceL3wckYj1T31xb9GzWvHisqaKJ5iCKuTbiysfdBSB7RiYf2dkrGbgKHCynEJ8k9eRxEt",
  "key19": "7yb58d2peuwxZf19QnkxyejtX5t1CbkCNDEzyhfA9gbuLZZPBvfrV94gXVVAMwb65mcBqCQk7WsWpSPF7nSEyXi",
  "key20": "XqiiMHWejUkd9uRzgtmehmtCcYbi7KMqQMEZNGeZzwJYRWMttGeU4xFqTYb2gSD7hvg9HtqpDDsDnBULsotNqG7",
  "key21": "27DZgTMjZKwy4Fdy4ZUNyUMcM4qhxR6RPyuQJehWLXrvXjVjtEX6LV5LYESEArCmMLsKRhWab7iCZysJDxAMiEys",
  "key22": "44eBYTDXPEgHNL6aDqJwuEzXRFhqFUQjSzMBk6opTxRCgE8mGJLWmgrnUFms1a75q4iQoM9AkdcXKBvbrHgaLd3e",
  "key23": "2DKqfMD4ENqnqfzcdLvhwJcT8KUJ47u6yc7r4KZ4Z5fgKTCBMa5n2QqeB6bZH38eQnjDhT8mDiMKZoMayYzn9Bwt",
  "key24": "4gsTDJR75bzG2zLMKMaEUoQFxhbVxfqdWQi9M1gtHjdXcSSWDoEhrvhmRXJUMFApKPbHFnqBhqfTCtptFK7jsv8A",
  "key25": "2bpXjCZEnBSfNnGJTEBork543qjEsHH7fiBAeVaCBNhHYr9fUYmWP53AWdWSoyu1RPr1UN5bC8tDJHisePzHXDTG",
  "key26": "61GJBNTi3qY4YW1xZYjMBbucnuCxkjgY59FhikzoizyXoYcWpdRWVseRWoXqxfVxwfcy7MKUxjDZtkQyzsiCfxvJ",
  "key27": "3mvtgiQJBPatFTBY6H8ibVxa7PzwhgDT3F5kfFi8rdENJB43sUxEeAuLMeqZpznhCZBbaHnJ1dnNVeHMLzbWBf17",
  "key28": "4THctAnuGmMZ5hKb6Hbwerq1PWc1UKJKFNwkGEWnbV1op3Pwmp2y21sWBdUfCGAKtPPbcXmBpC2eFARyaTSMBffj",
  "key29": "TEiL8fahe9p7FfzVWF6KXMFbRvkkxRbpxfwtgwTYu5cwXTvgU9tF6FxedFcCCtAyYMeF1oMZhYuzCSERYKLUnFi",
  "key30": "65RsGmavJY41N7TG5ao3A85kmECZm9DiGZv3rBzB2Q3rNXpDZREj54AuQVbXrokyQGu4hLquD4Ze8FKYSCbnXi77",
  "key31": "5DBZXiha74PzHdib1ajyWnYBAbjwUfqCVDNWSJXKvcp1bN32SPZkD32zYg1DtAP9MNU4Hasq8hmF4eBhx41MFE7S"
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
