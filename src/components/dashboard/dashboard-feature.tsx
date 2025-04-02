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
    "5BLiAsKmX91nXeN3WDhWeYLjd8LFfKpLrpJfbYV67iqg9rRieehmfzwKN5fo6LspK4bz4VxHQJZjB2rCXMjWwyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MdS3tvHLQQBLqNCv9kwXC59hmuW9KmjvrTZciGrT5MNNMHodustwpKickR5RM3xQV4FUE3gYH9ctA7jd3JzwZ3R",
  "key1": "5TZN4o9FoQim5JvEsRVKSr2pSk6jNWVKprm25zCMwjDJbQWpgBHC1fexSnYxmBp9nEkmoLWk11WaaGtq4erEc7a6",
  "key2": "42m738f8MA7utotqnRykjTCtquWmQcMUNW86vVGXvvbchKBWiUU8BsWtdhajGttqGWGygDChx3wGgCtU4kBg4JdF",
  "key3": "4RrLGGNkY6sLcTrX5fLaNzNVfRqwTh8b2tbvQKy1EtouT2TKWcXTFr6bqGNUQeNzG6J7y7tVHBMfDiHgZLQJaXFU",
  "key4": "4JNtRe9XAC5QW4LoPuwTxahfh7pUGV6Wsve9W3eUr9nasWRUYESFSnyxsXfT48S73cZKidVzH7UoL6Cw9rZuNzeo",
  "key5": "4j3UZUS9dF2QeQ4LcbuJSPn1t41tPekBK7quAahZXspef7obTgoK2dqsMwzonPC3KKrBCx5kuD8AbP2seK4DFTFL",
  "key6": "CGmn9mtq7dPHXxcLoYgNp9eyybE6X4Tm7m95yK3eqknB3DggEfCzFeqpqkyRGBu9147wsFZ8gTJAVYq6Gn4xTeg",
  "key7": "66LEZXvv7Uf47JXvVngdTtgdJ39emjM4LUABnbUpYT8KJfWsRPuJb7x7aX1c6qA5F5PtojQowQvJkQviSFUcj6PA",
  "key8": "ykeiAUbLgoUUyqbG1ex8NQePV3q3iBAasctqFiTyTMx5s6paui4m2zJgQ4rMH6YYgQ78zdgsGS9p2MimkHm6gCS",
  "key9": "2s2ttKAn8km13FRDtyEJFpS1kW4vLvKzwFWoAeUvZpy73KA9jLdtyArEsymPu6jGGgsddMZPr9jTR52iaVqTuu5S",
  "key10": "5WJ49jjTmxwHzyhNbomWdXTvXDP4iuSpEGuNpe4u1ra293nnUpyVwYcad58MAr9mvjiN1oWvdjZmEpFxhQEMU81k",
  "key11": "3gKoNBsnE6ajGjvwBG6e9rEDtMwGmE13XrHP6EA287aKKMB6HumZBntn2h91c8ovLdDosaXUTeEUFugfPavRaMmK",
  "key12": "4QwNN7nKXuGfBNAMqVFb7zjY7fwJSn99LeW6b3zq81jVQ39beW4rX6i3FZorhdcdTB7jJ3CVo3c522mvqaQYWPQ3",
  "key13": "4LpkjyUsShX5mv16m5PdezV4SGvPPJs6nhyA7vrkaVMfJHNF1t4bDPsk4JWLyweqDdd9YPNvb5p4KMCGAck8P7Sd",
  "key14": "2w7QQDpheCvooCrF5oN8zvZBnkgeyDJZH7u9e75FDvTi6kE9fJHoDEkaDMG4mzhszrRoSJrze5vDC8PBSGUBhtBG",
  "key15": "VgPauSiRLriraufWmW8DW9sEFF2Va8WS7p4MQoNfhKXF7XUTNGHzYVH2AHLMsPPJMAkX6oYhsbwRaQKjqRZVc3z",
  "key16": "4MYacDyvJCGrCWAopHj9cZKBeX2VKkafY9Mdu7N82y6LFcUm142uFWarVf2kGFBnxHZ63Aeg73s924ih6AfNdo15",
  "key17": "42btF2es8f5ResK7YV2CYhUcn928FijGoyJJvbDQrYCjj3rrLRe4kdtEY7iAZ7TfbSaAenRb2FtqxLTfrwtuBeoD",
  "key18": "2Ts7axbPg9A1oULjKoBCKJ8m9jtUHjmk3qRncvxQWZJdyFEPVgC7HAsRdZNiZBsEZjduCJqgD9vSp2c7PsLUm1w",
  "key19": "4MdG2sCTHq3ZkwpYfKSjuYZdrwtHEyYnhtPgGzkdW2tA9fCir3hjhbrgpF9LzME3R9pNBThgUwYHANyqDRG1JVSH",
  "key20": "48em8yeMXEXeSMXJ89LmXruAkrRrBdMf6BjRLjsfz4mxi8AKcwqET2RMLuMzzNKB3ZoC8ENBDWvB1sg5Ln1x23En",
  "key21": "2kcgy1BZLwcE83ToaMssxQ8TyMznRdaNcxeA4C1QxnRPzkHERYSMpL3QzpD7DQ5vM5Xo54jC7vmPwvuRoRMusKVb",
  "key22": "3j1FXWrXLFwSNhfsN8Dr2f57kcvMnn5tT697hAcQFq13XXbnd1KP62mB66EuQhPPU9HE6UWnTW1Kt5scdkBG4w1t",
  "key23": "4YAcxUWBmUhPJXy42gMKFwGYuDnsEZw9GGQbSiKQ4Fu7UMaa6VDbWHy5dPqGtNMuAtaLbtotjSDxTiip5mxHShsL",
  "key24": "4F1FmU86myvbWwfAvrveedyi36FBQE7cj51ULJCrc1yGwHs33fKsyh3W8qUBhZZCEyFgu3Am1etWw42Xq1VaScmZ",
  "key25": "3cyhVYQF5wbQazS8TvJhxT1LLV3pfmbZ7Cg5LmWJjCH6ArY2Dw8VqZoChRdt12XVj1jt6bbeAQUKfveJWnCbkSwL",
  "key26": "3fsMiiLXDGAF1HbwdBiheX2Lg1oTtCgpT1cwL9PkGhNWw4YH425UnR3RAxU4zuao8CQzAbqp4Vhb1xepvW7zWqUB",
  "key27": "NURaX7eP6xuTE1miESKAiCakywQ16D4UDZi8BzUG7RxCN3pKFT3jBGqn5eWcjvE4mWyTxbaHLQWcbdAdMnFfquZ",
  "key28": "5r8LDSJFG7Zzz7u2UhyWJMxCoxUdLPeieacXAXqB3nfAq9dR1GYEWpkomYYMSaiC452gyBuxcB3uPmAPU5AaMUcL",
  "key29": "2WD3hDn587Qrc5Uke1RC9k7yYCzh73mNsbeFTbaV25ojd6NwFiMxiVhbC3fiDzLM5SNgiuTysJ4kgspk2ABkZEKd",
  "key30": "5wo535cNkLDawEHViWg75pMnu2i6YppeXWv1Lv9aFn9Gw458dqQpGvSkQrd64R1rq2xWHFvm9TuqYb8GXf33WUJW",
  "key31": "2R6N6GrYrDr2e4SXAdeMy8SuRQ535vDjzyURsoWff4TsMsLv8EYDUw4Xgzjum7FfS1fuHYDcQpZUuLJD3Fz4hYad",
  "key32": "351dU4EJBZpwop9PfcBqBnmjRfGbP9S2Wru3mthQ589ZEhygGZ8HVJbZ3oEAC8TxfQK5ng29e7jHxiQxrgLF3qqJ",
  "key33": "4PaYG4jwL1QBSiunJceWNEkwc8fqBVPmbDWqku9HyqT1TYQogcyTnVk7wGuNY79LxTPpGTzCEQuksnGZfUXcA8eg"
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
