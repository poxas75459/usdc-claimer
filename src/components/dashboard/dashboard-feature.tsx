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
    "5Zf6TUmrVjQvEAcKbkEvDqp8AeYEdK9Rrazz2mkmekEFgJftSPVpCyTbzBKtLdBAgqVn11mJ1acCFLcfrozdPxyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4drjRWbByyDgxACuzEYaSfpVgWML4VhYE53zcvBjaVZ5HuaE9WqBNGrRtC6Y88AsJ7abYCAYuAbTQSJ5byyiHm8",
  "key1": "1x8UZKJo7vmmsp3YfUUWms3NoWV21qKruUJTbWLeQavo2w6qDeff8uXNz1rhPZuHg5A8M3J4ex8HGbosdJryYz8",
  "key2": "2zGhhKa3vQoStF1gxa768rjYWpYTF9ocPEunbsHmFq4snaPoBv5toJhLGxgfks3EveCMP2NE3Q7VfE2UZncKTE4A",
  "key3": "2c23P4saVotNMch51vLExV71Jb2SSGDGn9LdXxqFS5kE39iqtngbhscbqPbKFxS6mgwaA6pyqyd2jd9CYch5nZCc",
  "key4": "5RBKNJHN5CoDpTKsbxqWoUsxDUxRUY2448iYmRxw9zT8CCF31VCqb3PePz2cE1A72urHa7Yadvpk4mrTWtbezLWC",
  "key5": "2dwK3JdU6iDuV5uN4jMFJqP5j3QfnWgsEA8uP9szEiBtmiCDzVZQZzqvQCqEsiaweFwzfUCZFW7YYFckFrVQKx7f",
  "key6": "5o56ETaueypLUDxtj7YYGKXFH2bdw3Vc5KZwrBJzy46QrmnBkyCxfqe168uv8Vgup9g8QyKtcMCPqedt31NWgwzL",
  "key7": "2hpLXnU5p4G91BWodBB8HVrgQzkTrU3krXysMDMksGyjM875FzrB6AZEK57izAMyaq6sh3ApEtKz8NkQEabnYAod",
  "key8": "2bC48fV3wQmrwZWSzH8ozBdQdq86XG4Tn3oFBU5qAruwPP1RaCG5WFZVpDe1ucCcGeGZrifbQ3nApuNJb9bhf7Ka",
  "key9": "3TRTZdo8U165CBoUmScTntVhEoaN85FigEVCMn5QtpsJDLBbkcRwi6jFn9FEzaNx6922Xg8YT4QFvdX5JpFmVHgb",
  "key10": "4QKJSZA4K9B3i5R2uu9Wp9UH1XuEU228GVzBpQZGH42JXd2LShhHnn5jRtzdq2vr8vYktmZhjeiYKXs8MpZZjb8o",
  "key11": "3C8ugtjVaNCvnuYn4eGarxW3HGNLQoCUDsEHEjLYVTJBRmtp535kuYQLxwwCuBzLD21ZHxjJj7buBv65yY4x3X5A",
  "key12": "5a8SuQMoiFn5JfdSPHWXjVHVextGsmcGtY16LqaEpVAxF6ZKVV7YGf3ntaEZEkbM9CYxS39ESeHGbHEhrbW3kfZp",
  "key13": "34V4AZt6CjXvWCzD3BBN8SYHGqmavZShsEacttCMmwDYSxsz6hEgueoaCuh2bRERfmh3u2pVdNEGkK43xCpQ9HMj",
  "key14": "2eSx2UutYorAV1sjFgP8QggrVRLYVFSfbF3pVJoNdn2rj18gvoWyY3uwazVJXcf8t8TcQMqUkTKWU1gUbViwAU7q",
  "key15": "5YeuizFbVSj6QxQiVjqTSjJF9TBdiKSytM1N1HZpSGHeE22DaJ4AZNoonoeiYeezKrgv7WpFqJJWMTNcKNtkmGP2",
  "key16": "147sy4cQL4f5v9W61F8FtZWBVwNNGjtxgToqp1eCv6pJoz5HqUyR2tBKN3hWow97pqvhy9h1TMSg8yQ1YXGbCSt",
  "key17": "3CRYE3rawUZJ8wgyQNTrj2jMbhjc3nFiLvKLKMDv4AnNbKswbAkvdMMbDXwAgKiqP5qTWy4FiogXm67RNAwSD4XN",
  "key18": "4CG5vrUCaunfKZ3sLAwMY2zsM8kE7Y25Fb2b9gDL1xhV1dv5FdRb47ggUhd8QX9uMZL7euoUdvx2aEY6BByfbNpy",
  "key19": "3HwdEGUTxwPAztiTZMXrhSpfDQh18mHiqGywnCn8ocyrrgo2MpKtW4XJP8fxcAKA6DJwBA47BRVHVXYxps2Ymji3",
  "key20": "3oaEQciUh3psuxgxGL6hV7JLap7N4rRmGAng7upBsoegc2f5LRMxFmQtNLcfGJpjyuGYaq21YvfYsRuTQVjiy7Ti",
  "key21": "3tSk39rjD6jXZFnK1BhZR1T6RdT9WdjqaiUcoppyEfvbhUfg1GdjswGDcJp8SGyWdkQuGfjbEKZetvF22fdaqSC9",
  "key22": "4zUsemimiZGeuLERrd9X9p5ZNeCQyS5WAMCvrgtKaKVsHWuzvswT8ZXi89Qn3oyKaU9JuhUAPUacRkWyDfWGaywX",
  "key23": "2nVjwzGrepeCJiuYHYvLnMwcZ2RuqJaJxQ4XJwyN9ZtSjMF95FNRyE5WknKCUvUtXWnKG2sLFafBvERLTus5eySC",
  "key24": "53XHsSaQhcQ8jfadbEBcbMUKajL1uTqGNk9gRtiwrnifPW4aA6BoVEKPYxRUW3HEAeTFmSwiqaWH4phwkXzMAsdm",
  "key25": "5AHU7rQkbMg2uQSBGnFBJGU84oM4FK7gcnfwR2Hn2EysV4ZoLM1HaAx1v37vDpYqfByRzBVwgR5icTwFDNp6ZCv3",
  "key26": "5Pr3sS1kjL6ucS6QZN57eQ4hqTNNdnV3tzmP9bEAUoKUoSriJVMJsxA7DohjYZj1K3dobCr16FR5aQMGJAr3EJzE",
  "key27": "3uQVrANcTd14mMTSV8Em4WybfjXKKTZFTdHycYrUvixtn91M5GBhNRfiG3QxqJk8gbzHmZNBxMkBmiVPj7gs7Nwm",
  "key28": "3wx8xBhhFEfefJSQBwnAXkyjGAKDUFwCymYDTKHrTddq2i7w5EPLDm1bDQiotVB2rWRbfhdFapAZLmvKuxsrZiU2",
  "key29": "3Nqj3Ej3kQYrNd82kHetSmmbJLh82abCMsZGVZDTD8AFCa9mhHyFpXX6vRYcE4AbXj546sVTT3swRRNf3DcMqKBE",
  "key30": "4bVfnYrBxJnH4gGbHVYUfgzyWCWJz5zLHx9Krhz7zxep4fftwgg9ye7ZaYspFMBw6YnfoHZhVfiCfqkexfGXnDRx",
  "key31": "358xrbL96LQrQjq8cFWBTdZzRQWi5G4h4dRoxkoAGHVhPAvDq9D9SkbSAsuace79VGRVuuVsnmxeamQbhp9nuzjE",
  "key32": "9BrNa8yEUeF6PH4kL4i1nQaEnDKkJgPRr6Fad89afNH8fpoj87q2UyH1Fm4TTsjk1NLUkZaCasQuRMYEKcACm95",
  "key33": "2QDrSkQSYdEfPAUn2wvRemy2ut9WQs3nZ3MrrD1exEhBfkx41xfbBz1N6j2jk6C1FD68D6vUjyKdD62HGVVHrzAF",
  "key34": "Hh8KdCJv7CfMr5XqHN5U3aNVewov89qPoXgbSEkrGMyToNSzdtnu3jaqQvc8r7WRavPzRExvfjZdCCw37Ppp4nL",
  "key35": "2Ar7Cyex62tuuQLin7BX3UwsipcHZzkKx3pAooDcn9aRuzYeFFVeB8YdSL7Xf5axqVmYFLhQuJGaEkHrC5HDJJHf",
  "key36": "5nQHGureME2PwzKKSg4sFCgR4MvpDvCGc4VEPx4dCj7nV62GwF8TKRjEuVgLy89BvM3CV2FTJiNftKahgM3WsZTp",
  "key37": "4jmGKkJ32Qw4Q9776LLAEsarj2m93n2vFQgCMUouhpps6P316VyUgqEySeso6E3jUFnuNVMie3EmnCaqVBy9MgUp",
  "key38": "2Vp5HdJwdwPgQ5XLwDa6jeRJ1k4vctvjUj6wDKVZjbbcmVx7sgzKRgvpavPZGRRJABakvCcF9TrPgtqB4UVDFkgz",
  "key39": "NcRUHveQuk3Qk6DDvXod6fWVLLbAmMjddhVZgMpCa5JSMUBuZmrnikPPFHkD2iBnQhQ65Hx1aHdCkaBU9SbgFDJ",
  "key40": "EyrDi42MnVMgev2npuLpz8ryT3Yc9qynyH6WbiVGHAXUB1ifExAjD2G37ZBFhHTx7uTCDFSGJcyHGHGcV6Y3sRH"
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
