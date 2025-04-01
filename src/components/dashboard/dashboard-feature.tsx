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
    "4PBryeynWivEoMBrz1dVmGANmbYVJuweKixNYGR3sDU5hc6zKvDgKwCYWV5CJZcJP2NCTw3Df6GFmWUzmcjPXoxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36QzKxu2kPc6Eh64wyutsEzCauT7f4p3NoHjmAddhoeqyTgLxPXBQuQHWMQwxa4wJLdkdnmM4ssBan9JjSkzE95y",
  "key1": "3uGv6dveLeUn1uHdYyWHNfef9ZHqVZXeQfRQK1iTknx4Zhkq7Uo57RSo3FEsDqsh6DvMSiJRDPBWPegENTuJG88g",
  "key2": "5wesWx1FwcaYVy6tkdmmMq7W1kfe4A2FfPQ1nVSJuugbVjjimRtRj6Nx4Cee9RMauvCKrFukmYBCjdtk65J82jQy",
  "key3": "fdcsmBGQhoEXRUqdYuUh34BCG7TD9BoeL8gbAX6S8ktK3d24RhKmjzn3rJRwD8pokzEQP54PJraVQ32SNSLhFdv",
  "key4": "4YnxAVsQ2CZeVBkzy7fx2zxyhB2HbwwrUB5fJxdFTPBxLmFGXB65heS5JJY9ZwBp842632msdrAo811Gn8oEeQb6",
  "key5": "26LEX68o1fWq1FQspLhcWrKgDvoGWgH3W9DQPKZ2qh4FeZDqxZ6cTKcBNEVtS6XTGdaCWpG3b9FZQREwqA7N41ez",
  "key6": "5pJFzq6m9rAVwpN7Q7XwEDERGaQhKBdNz6k2XjwmAq1K1VfQEi2gW29AoGj4Af7Fn3UcSCp5SdN7LoG7iBqrmWWU",
  "key7": "5PDi6HnCzu24ZaKp6cnzso7LQd8hWAYDmhLSRGoSayuJviykS3Cu7VDZzkiVwHLmpxMXyg1MxE4ggrYjWvU1jz7W",
  "key8": "2H6PYwdZENFoUXx1gop4b97GWk7B4qj5xH9oNYne9RWnrgLqQSEa3LyoYFQcTrdQjPNdnFBvPvgXDiSLBkeTo6oG",
  "key9": "64Yeb44YgXb59eNH3eEqAbqUW1GmQeVR7vqBRfwT5Lo193F9kYKAxs3rXzFUpmXaP91Y6DHjx2kA6kwUDosbMBcx",
  "key10": "4Z2H4JQUmghb1SVurVLzJA1t39YLXV16XMG2qT9CEz255ogL77oPz4PFVqDbC7J3c2b3AwKoiKLh3WJJxekiuivT",
  "key11": "6ywTXX5zu7Mdz2L57Qg3BBoyYntSqk5fbcsRuerZuTB8Yyq3R7jAqmUwhAgLYXKjeELeQnXjQX6YKEB375u4FGA",
  "key12": "62dyVL8JxLH6ozEkG8bRkH7PB6FU4mxJUGFvg8p71CVCAC45WQJKrQqm1MRFG9FobTsCyYtGG5gfbVmTpi2u651X",
  "key13": "2azfLy9qE9maHwJNhA68XgyvpA2hZQejmoE21Sxg5Mgp1kqzyFtEgLAiyH7LTLWHHgagto36Q7qq5EsuQKu7vyQ4",
  "key14": "4hpqR7Y8TjDwjqDtm361KvJUnHnuETpRGEWg5YizDLBkgvxnfctSyiCGiZ9abZpuBM5LWzfbnS2z9Hjag5XM9ozy",
  "key15": "5KWTe6jjtXVSxX2HrBWdKZwBggioVvzMwzPkQWxvP5mkLBvqgPrVY848F2cpWjkZJ6P4DxiL1miB3ap6JL7ch5Tv",
  "key16": "BqX6AZs5rP4AQDmf71hEtFjJJoZyU21jqpbK89YAQKvC2iLSLtjHuQfjywTiY4Az21tC9emrxLETxVRFkCduxDm",
  "key17": "5eUao5XJBHFtNLrKvMyuE5nZK4ktUdmKGjwK9hSLSKu69c3FEsG7UMs8zHb6fCGS7UxrrESKrwME5HVU2ipu4DUr",
  "key18": "59qJezwX1VrSZYrvjPAJRfvYEkHDfZDirkzxZsJqVGupPHuLpHJr97ouaCJawzDJ5HEpnnsgcwJp4M5CFJrhD9UZ",
  "key19": "4bRkN2jdGZMykwcgRgaHCspmZaXcQiP82okYcXMg1aDs7b6vUHBz75Tq8UHRhFpnW82nAHz3rroD3PFLqVv26heC",
  "key20": "3UQaj5xpQPWma5ufPEj3NdG8UW93sAoLMzhbTwBJi4F8Txojar4kGCwrLwKCQqLqYgDP9ywmL5hdMGBW8s4Kt7qn",
  "key21": "5j7oNiSViExHd88rXbtGeymdWMLNCktpGymEGpDZqXUBjcX3PGgj8AWh3JUaRJ7s2GoYvEmzBYT7V8857QEKz6XY",
  "key22": "4kFP7vCMimdd8pCxbBe8MJzoxnoyXVekXGXmJeQD9neaiLP5ux2th3JJ6RBnb6jq8CSK3KKjPZcVdAf3sUR9dJK9",
  "key23": "64ZwyemHFoytKJweKLTQMz7sB9N7JN3nPrmmfWFEov1exz8buMRmGCPpSstUSzbATVrjfJZCiCLEQZJ8CFzQ2P7W",
  "key24": "3JshR4dkfhoZM8f22kXQ2EsJfYwymZ3263KgpgMCDNmATRDUa9EHiKEJTEzBPxJuaiiuJMNnFPPtHy9CCaVtSvwn",
  "key25": "4mSBeZMyuKahdC1HQigpMiD47EmjYjFWYrtDuxcvaAXThNqbhodjiLpaCzmAoTEQSV9CdWPzz29bTZVBgmrTJhFw",
  "key26": "3pHsPgfuziQS2kdbrcRXfBwGgawjVWYwAGGQi5qYpnnWHJC7D5zCoZuaj8GzRNLKhZSTRrXcnzRudyEVE7CNzk3W",
  "key27": "4gdhwDTAtXomFmgDTsFMdTozHMmcbeGeT2WFE2PX6GbP6NDSQG5AwZyGTD2Hy3uwhND5kictadQTvszwRyPtQLrr",
  "key28": "4bKdo9y8y9gQseBXjwN46Pv5knHXXuJor55sTLARkbYNMCUCyxHydpK4xdBEk6zqc41DfbvhJFzRavQghEFwSW89",
  "key29": "5KX9PP9V7FGLfGXjVeNGyoXWymBSFMEzbfgCUvinUFmJzFqZwhtoxy487QJTvoWnHtfiLQb3QwGphrVRPkQBdBNZ",
  "key30": "2kQJgaSAT7ah6XCr5dGLdQrA1sYnB5yHFmpsCQKxv3ioyTVZsN73wNou8J3eXABfdZqhHtpWwD8ANNQV7CfCv47r",
  "key31": "32rz5KocnG3k6gUZufGLWJfFDN2SaxiXmSjeoJBa9PwqMKnEDTFBUEitr6LEKo4uKXjvxM9h17Dmds68in82BMYy",
  "key32": "3p9oEiFykXemY7aWDDAZn8srhF2xhuSkff69tUYFKN4d7hwQ2mFEHBeUsCUSDcJNTJ5ctNz4ZRMbaut7P8kFfjgX",
  "key33": "5es8TW2Q6vFooxeUbQKMxKBsLxXbZ6N56QgQ8X6qZWeTeWT1Eip35BEygy7tsbHjkdn3zLNAbismTB4MLSYqLnrD",
  "key34": "2wsna3tV7hSKhs5zBjMkQRd7beuXkPxhKb7vo9ff3amK6LgckyeoiRpX61Uoy7v7htADAEYKRp1bTbz5gJUgKWq7",
  "key35": "66FBwhMv4WG6hTPwaYRmD7eHsE7tvA9wi5yXke97N6psW6LZ1py1PtcGonoV9TuTqTi6XckADMRi3NVqNRcAgbgw",
  "key36": "2EuEVyiBL5nq1ZdHRkHwmMrumU2T6r21FZdxevfpzarRYWsMmmKva7bwYXd48mrPLXYqhj9DaVBATyhnRW3bXUYy",
  "key37": "2qa9RL3XyGEdRxJd6ihQFN3upmV8nmG5rXFuFVWQdyz2yS1QQb7fAaPAuj2rLyFfoDqV8M3FiCrBqPiu3nvzF4CZ",
  "key38": "4tGjYoGgtNkFSH58ja3CR4EXgL5WenMJsbdT1zXycN66xo7rWRWS8853QuS8NRLk7uqU8g9TUCc87Tamwgn5avZr",
  "key39": "4e9BmHaGK3vhPqttcTe3QVhNDLGLwfL3rGy8CEVCSbuvLKx8ra7qkMKvwFDQCHBrE1jAckrCYCWzfJTu5Wc21KyE",
  "key40": "3pgsJGZ2FF32WyfeCok4FpKETN1QXWxh5rMMFxtiJ6TfuYBoUFPxLMExMf5YY71LfoMRyjFxjfTRi4c6zcBpx6fE",
  "key41": "2KimC2mTqMp98h7ZEi6s6hMMGL5QDuvS26RU3Pmqvz71deRHnhfU3wMVEtZ5pBcBSquzXQ2BcMHZ2oj5YX4KVxt9",
  "key42": "5tuLBZwCDAL6JGczJKxgjU1rVLdD61wA9AKpZEUNSBU3rm8sCdXfAheefSX84TGErW4i5qMrkiJKkKyjgo5v3irv",
  "key43": "VAeTdx4EoFzzVTKXgCo1jvTht4zKkgd2uRvHAY1suucKfwKzcPd65ptUq9FvjhnC8P23D9x8D7bZJTvXrzYrPFy",
  "key44": "3u6owAN5eekwbb8wEKyazdbo3D6iTFgqiERyJcxiLT6jNEGJRcvVrnGnSrVwP77uDvbJJ2uxZoLHmPc71MFSx35g",
  "key45": "56CBqPJao5VKf2maesN3aRQXS52dsv51CP6cTVsCBM4a2yRySYsPzyDZWuXzpECHFNdgoMmGki2S94c6JZQhTWju"
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
