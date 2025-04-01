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
    "m5XqmKX4TyUgsGqLzwBE8cGG6rjRuEe1eHmFh5D8JDLF1o94kHbcLmw8uoZjsULNhkK6Ht9YQy615v2pR2aYUTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CjcaW4DFcJw29gb5qbw8VxXExhYTRM1839B3Esw4RDTrM93tfCJMJoTq9UyNdhf3t5KsPqKcpJPCWjA8wNDQBiN",
  "key1": "41YggvU8GTDSzRNmd3Xq9Lka1csHqJda7aLZuK4mm4GP6DnGz8ZNVFCAdMnArCvgykDRGkTbJNXwqUiAQ1GnsCWU",
  "key2": "4b8b4VvWMN3gsHKfukzCM3wXjpyVwuXY1DjosU2o1AvYF9UgExHMeJarM74ywgRb1efLZt1v8qoND9GwJ5LfBiK5",
  "key3": "52oe7jDTKraZHS1W3xUY5Aogaa4e1QoxnUvsHgFmDqqVvpqZMFR1U3bdkMzr1QnxzABf9MCij4ZusYyPJfn3Wwze",
  "key4": "fjLUkQaWWTtZ13cqwVUmyTWhu4tDAW7U2zX7u116mbHvSTgPTfDy9b8fhuAZrkxqqvvHdtTweHt6Sv3SxRNQHsi",
  "key5": "4oJncvwDeQcg4TXZVW5MqEQnaRkTFw56QaD43g9BP7eKpNgQGbzF1e6oymod8D7GCjUWzMus8XSvmVAvrP9SVdwy",
  "key6": "j4aR9ie1XXCdXPJvLSsDh8bU7xZDw7nKNzFhZbdFaQbfQWqySR4YAX5BCSJm9Bj1KmTFjQLoKJwfYnL5ASdwt2B",
  "key7": "3xivh8ucE53SLyFFKGWgc2P7hPgtSdUMvxBBaUfC7BWbLwaCNAxMJhkQuxkCohrjRcYb7jkYCo9t7Tf1XZ85m9DA",
  "key8": "3DVNz2tp5B4cQHySsM1fT5ognCuzyLrNg9qFDZXmcrEwxBwYRyPUDHoMKcHuyYxzWQSpne2Ak9uGKJdPj3pEGdCB",
  "key9": "3PWxJCHGMwPTrtwJYXaCn6x5ZjVHVLMRHUg4VxP8xVx1LBY4bQ4Z2Q1Jf1W9F6V9mK9A9pfmFF8bD57j2sJtA56w",
  "key10": "3rJUbKiFoqGe7pgLqiP6Wtsr1zXgGX3gXVEtaoo6oj4buoNmmUjWz9tHj8j2xNNx7pkKDwRMKP5CYmSFXtcd2v4E",
  "key11": "ZJkoG6asgoH5zW5hhB8oqUXAqHcoPtM7uDBfWfYWkfbSLFqJXCBSVWnttPhYdVVCBSkhMkVP7B3cuC9mERX2sxa",
  "key12": "623rGCjBQ6vjGg73U8GUbuRBh2yQp6P4B6CvcSWpEjgirjsG92KoLrkiLS3KhT6Y9jX1YBGHv76cCAjyQUo32aqL",
  "key13": "3BtzAMohGVSJ6YdFvPHQz6uCzbLR1pdiem3H8Fcb3Lp3ku4afZD6cqEqtyYzEBLACkeiQxaBoz4hZGyhNR3WKFUN",
  "key14": "3cQsz8zSPjCE7XiF2rUWTsKYhGAH4UirNafyZECqDjCDNm2HfZy3kAKfKGD1upLrGmP5gEWj3toF1gmNvQA7n8Tt",
  "key15": "29uzk2cyPFng8Vi6sZsAWPHWWKamdX1TRxYXBcgEyyHDm7nUvh86CqGE7ctBed8iC9vZK3r16vu8jH7zwSWG4EHf",
  "key16": "2bSk6Z7UCWoDoPam1pizxke6QgTdZqZEx9cTZRqECxG3MxMvHs2d6YMKQgNvca1dKAQcz6PMzbYLzkn7UeDXqqaT",
  "key17": "5ug6XHLAYALGkostcNt1D1q9X9U1Kwwsnmnn4QqJEex23v5JqARs4A7QPDnmeVPw8sqvQTstsa4PMt7jVcGgxwDP",
  "key18": "3ZtfPtcb5ZLB3T2umJewwBQuabLF6zcPmjnnKMsh3FWZMsVCVAAfzFuPL5VwwmGgd2drYvc8KHVchPZw8XEmWhpL",
  "key19": "3H3kFUQBJQZt1fqRxg4ktjPjNkswjmuQJBDv9v8Z4RXBEjXpvuvZdcW8R2sedXsznXRriEVpDHLCpHwwhr93xQHp",
  "key20": "JRpEa1vG1kYtnE82x8BA34W5d6SmxccoVSJt1ERsmgQhbGa5WJ8YMPWWmxqXF5R5BaaoCu7WW3mL41dWTkSgDZc",
  "key21": "2PjLT8hpTRBSHVYbrYEd8BPoXyabvNVEBAKeks4g6QoMmVXiSvDkuRLktEjf94i7jPNwGtJMHHsiFUHVAycfioVV",
  "key22": "5QP88vqfQ5svKRbK54vQSDRPgNQ2ms1DJ8poEnfBwP3Ct8sbsTossTffaKjzaBnzs3HmTXroENGFRx1CCTxQpdPS",
  "key23": "2R3PEQPmXwoE4JbEmGUpzWwXodBgobQ4P54pFSib64szvgLW6vmnwe4otyLYGQ3QV8PUqd4z7LzwZTq7TWt5Pd6Z",
  "key24": "2F5HjR7FZhaDyWjR3JnmBTEEf4PNhh6wG9v3yX9XUU4q5Wd4UmTiSNpDD6MJC7rDWcGMED1eY4ycVneWrbMpNFs",
  "key25": "3nk9N56DB3zb8E3JctSwtBbV54nQ56uaD5GNQyhYGU65EHCzzqFD8f1L9y29QjHrSN8qE5K1z9SZb3cGYmPMNgC8",
  "key26": "5rZSYq1wkkaAnD59fLwzf2ZKPnzu3ufZexhEHFGi41TWFDJi9vxLfHqKB4FK5i3zbQ5tkCu9bY1zLRZLFooKAgmn",
  "key27": "iURD5MvWVEk2mGVevBfj7TgjmyfW3RZDc1WcYZfJxDkXdNGFrBrPLR3SqvjYb2sc6xFmSktaereFi25duVvNuaA",
  "key28": "Df2cCUTTQkeDT8gpqyxDXNrQw1QkU8a8Fe9ZpRxciAYiY88hu59Gm2oCTch4QaFqyYKo8hcvMzJHtDcXwA6irL7",
  "key29": "5o2GLpN4ETGKoxafEpe4RA4gKzkQNfanyVwyiN5B7mJrY28KWwe4GYxg9bNKip3i4QGVUM5iwfUitVR8K6hG1x8X",
  "key30": "5EAiQML28CXWrnAj6ZuqrVMwXsMZrgn2LTJ7R4wcoSJmmezLsCPZj1WDqA1CJoNyo9mCuYQCxor9XZLTkCAZYNtE",
  "key31": "2hpQEUjcyjZE2S4pmLZbF2UGNGZi5qJo6TFNEkLDa3tqQ3yjEtm6sMrzh1JyaxULfBKTJCbWRVT2s3EUXkEbTU9U",
  "key32": "4eYUiacwzBkP79T2NEtULv53cqqyvkVUXXCKsaYUpd9cFpbJo8oR199FbK4cyWSaSdKLY2i65YVVpqBU4ZAhzA1V",
  "key33": "3u2A194Ey3hE6uAG7XAH87uzyVV5MNy7ijoYXm6L9tWnLs9Z2ZhFd1PLrcE1m7L5X7gYgbY8jPnahFyMTBoxHRau",
  "key34": "Jqk3nnugJQrQ1GY3r3W4XRiADqMvMqydavEBfnGMCHjtECAa1JLuM96n8tjJqNDpzNRtUvfBYDdqPZERJGQ7ywa",
  "key35": "4WDw4jPxSuzfL9WVquNEC3LNiinwA76DcZnakDow9PpWZkmCBSZkV31ZJNa5ZUspsjJBbZZMpWRfS7vSbZpDWFPM",
  "key36": "23xokcP6Rb751g9t8Ap1fpaGqPuK5bPgtgPX48eUxfXQntYuZPafFxpEpMF5x2vLpLmeytjsqrimjLqoHz3qVz7q",
  "key37": "2TexVBaohw9SSExYFjx7TdiVRGRPui7tZ8rBndqbyBYcXsdjvoKys77TWZz5tBJS7GD86zZo38mxsiZPjMURfpMB",
  "key38": "4yjfx1JSWPzxiNzjMVMM5zEWr24rqRA5rhPRDGSti5Z4TJeihLT3N7PkrQkTP2HbauxQ9x6coHMtUahE6NymY47X",
  "key39": "3phujzRtMCoxPrZvmcgd394Umd9ti486wFEA62j1xVXdyT69RJgforAFySoaNtNZvLZAbWaE9rvC5AJTP8Wa3CGj",
  "key40": "2tYP3N38UWi5r2EZk4rimegpp6a2yT9b8FQpYYgqY9YciVUnHQKJHCGknAKud7cJozVn7SEwuXMYdTfgKqbip7au",
  "key41": "2Xys4jMo1zCADga9rYLscXSwZw6noF41Wmd7p4yAXwuu8GPuhBUmsvZwjRjggVSmM727q51Bo6sJXBQdAz7b9a9Z",
  "key42": "2NSrEivcC9XLDHy3v9jKGYN3RAzjsKLhMmoWumvRAEsxzWraKsD6ftTzmzGpYKDXSsvDeiggmiozSbWJ4ESWHfx4",
  "key43": "25sz5wtEtvWZAVhN5oLB1RSwHn49w3jr3MBecURdS7sR3u12kBX7t468St5Pme85hjD5ZNLDzRcHtCUuMf4XoeQj",
  "key44": "5cNxd2SzWCj81H4NePALaEezGFeJ2aNkSKsnPcuDs53YDQ41ZcDy2mKYTQhcBxVo6JbjgcvEpkG94HxnZGs7HvA5"
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
