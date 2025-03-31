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
    "56TKJAnt2LFz9VmqkGAWMWpcTxcb1858SUEWQtfLG3eziyMXCRGarxUkJ5yZVW1TxcZLDEj6YGEmzPcLtmCd4cuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SKPNT4qJmu4zUSNnzrf6wavXZ4sGhk1sngWQHoeoP4PC5qc65GsoUoC9f1PtRCjxvi9ZpkVgbb3Zxt4gjJSLwT8",
  "key1": "4seVCdSfuoVURwikPpiEcrUyqWZNXBtmXjyMrTtrQPYfrdDspWNXH5pbHCeGQ6XifnZ2YS7PzLUy7inLxdvfo29S",
  "key2": "4nYvyoCBXZdw8bF3XkTrgy1V2SygP7FR4aqqGMj4ipyTHZrcg3N1CHY7DYBHgciVFByHy7cNJHrPruTV8QsAPevi",
  "key3": "4eA2wCUCzZeEki2UFGeNcnCNj9MLEsDFLu2xGiHhrUSHc1HNTQ9k4JNUsWZ4aGiTaaij3mS1v6WeEj9sG5vDCemX",
  "key4": "vBpFSR3HnB4fL2vVAz7EYHPxG6RZg6AuWfZ9sqJ4tvJQYwDawGw7FFVz3ZziWvqbQASrJFDYv22ShFuu994a8c5",
  "key5": "3FLN4ZPryy3SsMf87MqB3psDMa75C3pJjmSxtARJDT78BWcuCj3gdMuQF52bzk1mZHKUD5uQmXsA2sHZxBGSemqX",
  "key6": "2i3GUnRC7hctJT5p85fLQKjaTvzMGdy5SvEbUtthyESzMnMqpEGJ7dBU3vjme4YfFNwnuVHGSUpq6XqLQcBSKpb7",
  "key7": "3f1eNb1PLLbjc8S69WYu7NaMLNPZKd7jsRBJatuTVekqFEU15sadiuaTHNq8RYyrFaouywkWJCL632NoqkrFaWVQ",
  "key8": "586qrkaWztzvbyebiY9zmMfDZYAxNNT4gM2HdFUFDs6vodJumvNSTHVMtpguoHqmEWiUfBZASdhNz49xpkEwppzc",
  "key9": "66YusqTRXms1isAzs5UxMmDxsXFQD8ZG9XvPcT8gJHUzvxnbbJdV5v5DrnuBbzzxxTDJiKMnju8XM1UQhsefkRj5",
  "key10": "42rTKR9QubrhbdVLXEGkKPHgMnuRqhRzYhryvne5jNek1srJADHBBbMXM36omsFRAxFjy8Jz7oe33kgqhGWd4A2N",
  "key11": "3L2VfBfC8bdXNeUFADBYgL82gsdCa356FLkcu1NiqCgtVH3MGuUeGN4eYctFiWn4vdjkRANDxdrZ2VzAZPWchZWy",
  "key12": "4Q9uDr9WjAYkW19YBDKTUVp3YFwezo6LZiY8Yt3VdH4QrhjQ5zRDJa6UJ5tdhC5Hky1m958Lt31vMfWFwewExomV",
  "key13": "2FiYDAHgtwiQX5D6ThWj5GYGxhHHE1Wzn547bJL9EMjtBiS5bFbektsTsicDopHq2fzVhWWGVVKyDmGyb3Fa6nsv",
  "key14": "4hkhrPcX4SPxBZUbW2mfrCU5ZRrGGo3C191ivv91Jvsn64sgJocc6XGEw54PVKcGB5K9Z56N8C8aUrsRMngWL8yt",
  "key15": "4UaWdyHczPUdUNF3SnWT56zhdgQbW6cZtwrWpyVbJWYz84JxUvTQe9RERWnQDJfMvSSfwJShua2GXXyprTq1La2d",
  "key16": "Dhptmm68JBR9BV5HYtmVkmUXXxFFtwxo4nwPYYaQoAZoYh4LzsUguxmuvqJ8fEHqs2mciq33AJqEbRwT8mfaTHS",
  "key17": "63Yz1NhgWDhzduBy6JRithzD1qYoc1vicesCf2YZ7jumSz4CGB9bvbqFeiWofdYCQdUBSKxvbYMoAgvj8rdatx5Z",
  "key18": "2mXwPcH9iYiJp9me8Z2RDnMBAihx3KpnymvTQf6u1QfrPQroz57czQ68MUJmYHZuY93k3bZoFDXuwuSSDPSYFaia",
  "key19": "23SWmWdB3VCXt4hP9oU5mxfkFgjXcfm4nw5gvkVjiptMXeZFL8HTXubQ3yiALSRvgU5isEhoXqAzneXpaQdv1jum",
  "key20": "3MXFLzSuRYo3ZEiHnn8UYiWqXF873EBhsRL8amxgJuLfdfB7VBNPqDvNGZLgqPKQg4c5WFyjLrtN677qHRvqHT3j",
  "key21": "4taLWggX28v1N6yQoD6UzXjGcKnyD56WmnFFXJngpHu7CBCg1tfCdQBCDCuwB8pzaEiU9jQCEFhpRcS1Lk9iFA5t",
  "key22": "DYhTFAiMXVvc8dTFBQ2wFFpmDrpRJHcruB2Bat8AwCqk3ojdHf4aW92pK6aSBrWE2nkzUNw6ENsCPRB8j1gCub1",
  "key23": "2gWjM53CNH2fWUANKhkk6Wos9Hj2LywviPoyJXJ5PGUPmedU3SE7WvAC9DDgX5NVKvQ2H5P7Bv2oq9PCQCtV7Enb",
  "key24": "2YePRgqEy6cC1VUFQXjs2fR2FkYdvmPEimmWWCy4HX9C6H1RKpZXa8FAmnuvBePiiHp55LeHs9UfScctjtoGuxip",
  "key25": "Hkpq852vEzRafjVpMX7JqYQj5NNHgLQyBZrbLadsxyRwMiL19sZ373LxsCjANMCeZ5z5ZiaRaqFXx46GvPY9r56",
  "key26": "35Kry1Qau6tj622yZMQCceaWc7DfSDJS3mBm6atwi5qdkpBF1hjePVMhT4NvdGSDpooS5ZGDwFG56Pzr8r7QG1SS",
  "key27": "S2F9PXfxDXCkX68awrfb4rgowmnsRA4JNiA719irc7qvBPCMyftoRKjYmTfNaX5D9jm3rswRR2C7i1x7SKWY6Jq",
  "key28": "4xe91CKof22hQkDMeBLdwphcAxoQitU5ddVHHyZhTGnf1VYzrEabbhHC7wUSGryE9T8u8uW5Uf2FmBma9fN5rdSv",
  "key29": "3BiHt8cQJVttT9UXjThuWdrnoxW8GSiXJK6ys7jzFuHPqr6d2RhRnZ5zpJUCijdB12AQnD3pFbc3ELYFjw2fWzAW",
  "key30": "33W2dp6zhYhpde6LzTvF6Bs4YBv5dUoAbRJ2W6vkneu4jmZRmNzHoQTaWXy4kCgUGhwhx6ggobiSK2ywZrCz4PWq",
  "key31": "2SjkRiaNmBtsJop4nhcGsis1LLYx4nTyqdxkoCgssxjNG7YdrUi5mQrugsJ3XGuzDam9t4WFZkE5RtPbK62vueJc",
  "key32": "2eHcjVcsnBaFUZ2WtNgeghST4eA4HNYbovWrH6pAmP6yD6RRg1XERUwYLqo64XhJTVEovRM2ZXBiVDkk5m8DupK",
  "key33": "JEYLwMv7yfjfuRNSUeq4Qmoyf4JBtFJDDCgrKtc9Ef4dxXmnyHdem1AS59zXeUPj5QGJRxnP75iWQFNZ67PUpsy",
  "key34": "3jqiT4usNGNxyo6CFwQpLwJWjXvBaNZsZrLPVVqnd3cwrCiBtqKAxAg4hJbrGBfG5MjHHnUL21cw2bKkitBwJztT",
  "key35": "2XmqYgAYF3jB5MUo1QDuD19TZ6WutBaiSMM5tVZuT6vRepKV27nos7zkWgUaJqXAaebpY4DvbGShSaahTNAgHRp3",
  "key36": "ATZERwxDUnyHro8wTnZU8ax2XBtWxbnMTdKCdMDkTJcJfmfPA8chB9Yq2Y2Wou6ZpmFPxbnPRYQxu3zgDgKsKtF",
  "key37": "4S1xJYuEgQPHNFadHFHcoCTmpM6Qd87mg5zyF2H93jQFg5jUsoPGJnCaR9YiAKC64SqAqTgaVBiTdP5PkPAprXRw",
  "key38": "1fACukvPtvCETz1snnXhFe4eVG8rLq7EQErWzNokQg8628Zpzc1WoVW6iE8hF3MPuoDnFG77a9Ah7CMVz7k2Tbj"
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
