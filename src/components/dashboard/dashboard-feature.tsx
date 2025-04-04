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
    "3HT1BxEJChjPygtEJGEgZTgPfs3af53ABxDu6WnparZTZhz8V1Bwn1QTcgBrqj8efwbkps1FpTofYzF9e9vbiJTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eSEWCkHcCKufF4DTBf1Q3r9Z5fviaeQ7ZmzD6SLu2Ca2WX4u3WQKX98Tt4pWgx4BMtRRydFDnJ1DJjsWBFxUs6j",
  "key1": "2gMevScwfkfca8DLni1djoCtGvB1PF9CMFmAEzqT4mBfK7Sh5Mszh7X7tbrtAzdgVVj9UxUK552M7pjAYv4K1jrK",
  "key2": "c6UUsk17ToDJHPGgSWcavMAy7AWL5KYY1VjQwqZZb55sTFQbork9BdiCmW4zm1YBpRbJJ1zHpYp8hw6dqx9QAvw",
  "key3": "2GB39gnEq4JyaevgFbrYqC6ddnJGdJNWdxRXz3ZUpNUasUxiC9mEHZntAtHTspGyEUPA8YUgds9taPzMrmsdkoCN",
  "key4": "YULFUpscP9dw1422S9dtSaBpR2jY1Hyy4W1J3NUv3Wq9hqs2eZ8fXyKmZYr5kekpZ7ykL9FuGQvrwoKJyzAcFdH",
  "key5": "44jDioB8aYqU8tM8wYRjEBKKqfKGizQ4NRcjyF3oGLFk9fbcNSHdtVyiPC6BBr9cgkJ558EAeNtur6hqgdF4FiGE",
  "key6": "4ov5AVkL6wHqLCtmdbkid642dcMWmgnPtT1PbXCCMuiUF6z8hxRTJKrtNyQZzmSinYpjfZEJ3g8BfJ35U8WSubMC",
  "key7": "4uiDFMawfz1AfaCCuNMcnbptxa7fNtvFkXGMWRQiSPD4md41qGLkE4t4TSqYqRHXe95dFHqmT5AM7cj3u5p8VRHB",
  "key8": "MxESKaMGU4rts4Figy1z5gVXjxinVua2s2VfxLWjined7bPqzGnioZeYcN8K7fC5SoFZ2ddwqcJJt3wjguBHgVp",
  "key9": "rKD8cyKVZLf8aXPeCkq4667tb78G5DVrrBc18z6sWpt3WcR6tGNzjp3qxhDC1fwVnMzdNbnzZnMTGNWz7C7mA84",
  "key10": "52y34ARDna7ftHYkQo8quDoBjN4BL65sTJ5WAZ6ppQtLntQaJeMEJk4Z7YYQ4axiqg2x4LUbhsYXgzU1kcpc6S1T",
  "key11": "4j5NcjZHHkRrKqXzFYFVJow3TPZr4pzoTt4KxkdfTbBec7wTekBWeZreD7LR3LaEWxWgYB1YoUaYQ7vPy4mjXujy",
  "key12": "55azS4CzvsAFpvNJxHtA3ZXixQpqbeVR1UueqpjMzJS2YEnN6SuPyDb17Qz1Z7Ug7c1fQnVqjEZWTzJyg8KWuHY2",
  "key13": "5V9vA3kRBb3yHBa1gotKVaL4ZvUnW7Cc8DoxbZZwqLBeD3yUbLcjaPiTxMoZsTVoUX7Tqm39WxUfQLMehff5pdiU",
  "key14": "3mhn1UGgXTMWtfnvtDc46putRtFNHjpwEPaSDzYRCEYjFRS4VzWM3vBvje7DWSJhcx5D8RQYVfTNc9BxnBhZmcjB",
  "key15": "3viLuUVojDiAhk4ZvNE3CoAijRvyRe3m2ZtYAeq33XvcgHtg5GJq1m1kMWmhU3TjFQv4bAnx1GgVYhatW8NeazBj",
  "key16": "4Fb99ZKnS8CtWk3Lyh9KWNeGWvrfbDXT1cK4FXRWQKqxrHfkMY7skFfG7i6XXXStBhoCYWELoAPxZFnymSQqpPh5",
  "key17": "2YZRV4YehmCkk9YznWfJvpNuENSLgsbHRrUbT6MQNERBHSv74QmWQHfLoJ3JHiD9Lq8jBqhB5nm2vAuYwWLEeyhu",
  "key18": "feSGYeLk73Nxo7tvsHLZ7baR1ZLcGPLg8YsneiEmkkMre2faxQwtEqqJjvCb3EUfh9xtksuzianz2tQPgX4Sz1j",
  "key19": "3DBQZs3ir5KDmC8366PSrakz2eQwsNUNYwd7kzPYcBVzXpdUe6nTBhsEvZ44VJxZBvDBqA47mMQeipKRGKG8xPcM",
  "key20": "3A4RNLAig88Dg4ibdH1TimaYWYhG97eEf8hADC2V8s4mVtgMHcQ71B61kg6n6JnVLCejDsbsddyX2oTAissbrrFp",
  "key21": "5HQgavggH1bwmJhZJb1fcQtVjfgPDizve5DBJNJUebVMmngwV9BGx1cgjXFTuN2LEXFzt8BhHGuSkNoP7KpNFy6X",
  "key22": "3ArMKvEyZLroeWyvcWn6oiwzk8v7EGXEZL3TTP1bhc6SpHWGKwuMPXy65rsP2Vm5B6hF8ppFA1HEKwcgWom29kwX",
  "key23": "2SjDRKzvhyqPV9zYd4MxXNvWKNUETbFcFhfyf1KaXL8Md2GjgLqidua3ZuyyeDCGdwN8gu6JEF9j7Ng3gcpQ9fjK",
  "key24": "4yj1hBQZycvQ8nMKrnxkQdqZn544G4Y5keubuDzVaojJksQnC8HZqR9WHnJvyYUEB3XSBgq1FNE59rAg8azBRL63",
  "key25": "3tBrHp6Z3Te6xJ9XNJkh27xcxiS2tWPA43EVfLmoevGgkL9aEyd5Lvs3aEt95epAym3wNJ6jHvuiPrcbk7EbVZUt",
  "key26": "kH8qWEiaUAnwbDJPkEhBCk6UNYRVcB7PRms4496g6bdj4QLppAwkfJcxhugejkJTW61MoY5KTWiAqH8TppELv1g",
  "key27": "51WngagPn4vMvyFkbCgojvtiLpEpqd8h1aKSp37yQcR1Un5hJ9zjwMxCJacUsPUx4y5AB4SF9S12wQtBDMV7Xefd",
  "key28": "369rehxCLJpfaTHHRhoiAzNoUPqNRkVPtUuhEmMGTUtGyMSkoeNVYZwsoJgQjemrfFgFRm6KWaeG7SWT6NvasCCE",
  "key29": "4ekh6Ct9ts9wJbtQKtoLMBQHkweLi7AHhU8VkBW2xq6CgPFLwwdiUXamdWV7qTqwq38Es3qsBmzhDgxJe2z7p6dd",
  "key30": "W1TL7sSNdus2Jaa1gK1eAMkRZfZTxPjQ1wjU3iT853wQWMmxmJMdxeJatsjhiSt2TFsyR4vNJtLUrGWsCDHZMZu",
  "key31": "23jDa5HM36CpucJdMg61SCcUypDJ59eQ8DFQwF7CJQ9jUnytGefnpy6iKyEDnjRxbNmGU5u9gHFCTkwyNE8Rc4iN",
  "key32": "5mGJiA5Zj7523QUUzM6juYyUjRENdxg7PC9PRh2cSYBiB3kuB6uFtyzJAP5c3emN9sFgwK8ANLbWAKvXMT734nVf",
  "key33": "2p9k9CaQNR3EuhnvvrKTJkAPEfHZkqq4h2GEaPpa22z6Gbm459me6iryodB4Uk7RMxC3U1gYca7sKbA63v72K7kG",
  "key34": "3Dbh28XDCeCvhseVeP7R9Z6ZZgJiMxPqqfCa4VzbhLem4vw6ebBXZhPhoTgvh4hotTMaS7ezxYN17sQUmziMWC74",
  "key35": "564YeGuPPoQCZKYVAJzBWLJPe1DHu67793BtizuAZ3JebfPTCB42He6GxXW7oSgwXbu6DGkKhFVCVkXGjSuWjwrm",
  "key36": "2LJSrioTcQ76XLKahV1cJEwpeY8fZUNoELicfpPpzqzqWHokeFMHBqqBZ4h4NuneL4PxujsVU3QpS4T3Dtw7HnsZ",
  "key37": "3moD1JeXnHi6VC22uwyVhEvhhvDvX1oKEiPcdjpfzsGgMfr7ZZSLKsBuVopPuG1JHPsJHco8toTm8NPf6v33M6ER",
  "key38": "2txR4jSV4GyMJ9hyo8Fby46AuiFh89urQ6oRxUvz96tRaD6B9y6dXqEr3XbyoArYjDztHX6XKT5pjXE8kog9LfW1",
  "key39": "5Fv5Q32LrVP2e679uk2naXLkJndDKDiwZdJLmwEmahBTSNMk2RbLGB9qkXzUe2wHuihaFKCqX3ebfZXzdhJS31hY",
  "key40": "5BjgE18gCART6KNCGuKiUeZmM1uQhwWR8SMAyBTmVhfDEeyb282GGbtqDz2MLxzWqcZ2g4J3KeeNCcgmzYgiXsA8",
  "key41": "LXQ3VcooR9q6ML64fiv7EXDU7tAFKdH8SHHxtoAvDv7BPWq2fL1cfqer7p8MX8yJG7boPu7j52bv8sYU6nZXKnW",
  "key42": "5kEYiwJmsPNbtvHYrMr89FjWa2UwnbvMTNmQBAiJj9kmraCSeyKg86oraRbBpCmz1ELHqASmtsLpmq5jECfpJTTK",
  "key43": "5hDaMS4xE1uW5qDH6hmdTRgkqvxuc14CUrwPd6hAhF6hTM61jNMSea4qSUNxbUajKeUX49S74jih31iUj3o1Zes5"
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
