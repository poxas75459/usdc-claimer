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
    "4KF4pEAdZfnu1SvPtCDyhtbQpE8eiGpoJvciWw7Dnzcqntwsmk5ihMjr1Nq3dUm63txkWxdqu6uGNrFWPjWeuusb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JDwuAVzYtvDkxr1gRb5DQGm1CAvmywV1rZ5qMD2Zz7eBgqVXF5YbbE9tQEzUPwfGQuRZJC2gWceE9JARNvAyx35",
  "key1": "59ZJQAaksk5z4Pk4GkvaXx9SUHrA1MXqqWZ1okKPDcmhw6jrMg4fSsswP8HzaStX69vyqfiPmmzHrWCBnaQA97aH",
  "key2": "qDVDPYpiyTtULgHTnwhs9AYmqC5RkwWmZrRXdZNzrQybx6FNs7xuGyERAj33w687MbLUphbhc5SFzhw2AW8cseo",
  "key3": "29QJtXgDmdXkf6ZKR8YAPUrfzFfLyTKV6qisd9gfQxNrtoPGfkBimryyq3QnassVfHYtRkUyB4mXZP18JEo7WU4R",
  "key4": "3zALUbasRkCwoMSU4w2WoGzrJv1Y7ciSixQ5Awd41viCuixocpKpJFALLL6BZbkNHKGgq96DRiqXxMXvRDnfiPJP",
  "key5": "5rVhpSN5MWLuyH8sYn7rdo2kWvruQdb7SSYSTuJfit3WCFMQRtAxeApTXTnrjUSnzwuNCWMZjT4pYpDW51cFpMcd",
  "key6": "4b1pXtAiww2XxQgGXgbQnkw2SVE4babsn8z56aknuEjcWQw8HhNRtaPRmyujTpJ718q7icvDc5ibqEs2gDnzw5XN",
  "key7": "HD2EXFSkZUy3kC5wxcYys54EUZFYFr2Lbiw6m2KGFkhKTW1duoGfRLye6YJeDruun75bEeX1nNFDeNrdGPzFUZi",
  "key8": "38s7miHPvp8QUP6vSXDYfFJ3AQjb3jEQnFXetXRQy8BY1oP89iYpjTrEHKmWPBWzLwdYCmBemFyLpH9UN76KiRw8",
  "key9": "2eXEcXu4AXXQr1p9uacQtHazcoo5rWok4bCAqA9FehWfh3y4V2dghX7pLWWKRVWZK8pEcMCY4wsK65q5qvWesfB",
  "key10": "thNiqezHj9yfzqEAxmbvssPGydQysnBeNXt1ZN72zLoQuYqEuCVZw8NnF4vRLACHhidkENieZya3qyJeCJsQPrk",
  "key11": "QC94bBcYhB2NZ3bL9CjoZnCDvf12Zr4RE8NnRDh1mzewimeuE6LBPbz5bPnC5QUdw6VzWSzJLXaedcdPcAbTxLh",
  "key12": "3Yzto5U6u5KAUxRtxiPgv2HYRzKnXqQhPWK7hVKJ7MiWuUpd7CBsxx9f6Squwutgk6P4yGP4bVMJA24xUqk6sKNW",
  "key13": "E7u9uBTJ1DWEFBKcZQWiT9NpYMZvNgRH9PrjNqGPPvViCUpijXvVaU7wtkv6LtmR41B8c5JwD41deXo2JA4bSTh",
  "key14": "4KB3wnR69Q1rZEz4MSgXc656fwBaMbsDN9uUZymLQ6yLRe8exeftNSoaUDQLJexiFne3Kgpa2M95VmBko5aGjs14",
  "key15": "4ZZTZWHkDEK74SCKkDGp4P8meERh9tWx56ffAsstEyDrrfThSTbPfAtaBrgnkAxgtd19L1nCFdTRWxpEibr2GruA",
  "key16": "5JT5YkmVqKTQfGBY6AQC7iQNMazsHeWUBetsrFGZp5A2q44Wva8G5hycH2shwMVqtHZzn4LknZaTeVaqpRCWrYcR",
  "key17": "2FWm38YkbA2rqBMvjCfqonXMeU9hXU9nwFfUWLmCGu99BqkgvZe4KFoh2NkGMD7ZKRtoyK35SaRT2TPW5XDZAjtG",
  "key18": "4oV1jJ15dGfRo1wcEzjpAeb377aACP4zQ9rg8hEwsr8AxSjBKQobJodPNqtDComGQW5v1YdtLu2yn6tYKHVy8Grn",
  "key19": "GPPZym78u6XRyK3EkkwdMTg4qmnhJvDnZpGkynBPcn4sKAiLrLXEy5oARZxf7GeD3jXonBx7vU2LdrB1bH87QjR",
  "key20": "2ZWgcHsFbd1MqvMw8y2n85sdiLcZDvZgHCpdgDz6Qo3ywqzomwPmdgBkgdeF2fbHoqApp3ZgfWDBBwsMvAMsbyrs",
  "key21": "3BxBtJpvesnL6jE8kv62YcpFpkhwe5fcNDPtRmuZLXXUntdoeU3wwHdJrPBpMq94menfa6goGM3ua7Lt4K96SUeZ",
  "key22": "4jRThAmCyDmSDhzRbDDWasvfSH6KCrCRFPA7Y1AUxzW4pBTza9r3r5jCZjd3pHHDrKKNXWb93qgQFRkwfn8ueHUE",
  "key23": "5sQAZfjyj8PEpfibtsLUbrf3qDW2XjCzfiVaqiuMHvNPhrmQHmhrbohb48uj6hzsNCQBWroW8xVnMBKnDGnZ44LR",
  "key24": "51aGrfcy8VAGt7teFxpD1uKviWK5onKHrnEp2Lqo88q2mX1KLCnVh4PUUshJEa6xrjafKhX9BnWAYm3oJtRZTYSk",
  "key25": "3cMDjLJwQePSHpffaLPXK9Uc7BEMSAe2QfypTpDALNLxaCGiSLi8ekTMwLZwXWdTXkJ7CLw8Ki3qwxFndMEH3LjA",
  "key26": "56FZpCZrVbNEJXokuusELUzPA9aspQvNq92fWw1wKWFoDAZYTZBTwdfTF5Gq9XXd1y7Wxi7UCvhyaduMmTHwidnx",
  "key27": "RcjNnUfNZ2tXrXKmyfrevxaTycP4oBpnMUdSishD49dZncjGekz6a3wn8wQZMPrwpq4LHiJgc5SPF8GSZ3gWNq2",
  "key28": "5y5KqzHVhgbF8BKGavyaz2p22QkBx2p96KbK6dejstVmdQfMs2hkca7QQzjxQKCrv9y39gARqBkRLr5fU2jAP5JA",
  "key29": "2LQMzNWuB54ijYarboNHfx8GT1ZVEbS3iUJ9PC6QEFBVV5xybyH4SkKvr9gprMLFYQ5hWK2QofRVfpkQHH2teYKt",
  "key30": "4R1vSM6aCsSpv9BKFYV3ymdUCrqufjfvabGR4hZbLdUTQD2ETpWGP7NJZkGzQ5rxmemGYkjp7HuWgKKp3yXaZNmp",
  "key31": "2RgQQJDuyLKVz8D2QZP19zutvUemJMmFdL4RXrmCQbGgSkVVL2i4oGBYvHYVB13xk7ecoVPbDzzNxWaA7WJTKMi5",
  "key32": "MmqqHKurEcuTsxoaFXtbqZdsKVJggMvPeNtqMtjr2Tr23acBfYz3FV8w8W3W51nAUN8iDMXS49q4xzu5HZebBFB",
  "key33": "2F1SGZHJF2AyjDQUjdUyQBNNBLf4wH3tmP23J9tWt7E56kHhMDDBbpo3PCczQ8sSb4JxJZ9e8X38UDMB2TsufWfH",
  "key34": "2s297PZgSjtAVnZk6hjaT3TqTwH7V8EJA7BJGW3M5s1NH62JxWamyoK4s2hTkZAi35X4d58ivNCR2wuShYg2qoYy",
  "key35": "5pEEm57GeTLP4VwHgu2wxnQMDCmAysMp8k2398CzjaKPzwv9i7TfoKaC74buwoPsfEQBjkTZztZTzyAit5JwWbMo",
  "key36": "3TP3qjJzbm1GEApfg3Vcy5sU6jkE35949ckYgRgHbZ7Dk94ZWYx7dE2TURqszS5CR4JRsZd7gR8LsWujFAwjXr9S",
  "key37": "2LuzksfanW1r8nvqLNhddThJST79EEb1tK6D1DhXcbe1dhjzqJc6PPBLfy4jEHzZMFKqT2N37eFNRDUrTGEdix8p"
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
