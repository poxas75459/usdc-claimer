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
    "5y1MnnQUzwrQJ7jVRwycHe557HGeu4dC1orCH6FFLgG51yVRaUiRujRGkFAvwUhrbmciKkCbJJAQScmTBWoNe5bV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q9YStNHy6mKzwne7rxYaR4HJbcyujJAkrQFDCwJEjvmhjfqFNzV62D3qhvzGEwni1crg8VX9Qzv74eg5onHxLS4",
  "key1": "43z3TTiZ6TYgCJY5U4jYNYwySvuPaUqzE1oaWP5LtdUTD1prVbJReGySPZy6XuVFjDffL1s49JAqw26V2bQF3ZNF",
  "key2": "2QJPCu1QgYL2VhsjHrmTUykLoSqmrSweNgEJhKpeViU4WQbA69zYTzYQVN4u7NqZQzvctitiz9u3Lno5x1nUbYUX",
  "key3": "4tfpUdr9z7beFJhS2TZMKPu4fbAhGJRVCxajtptWnzcy4aHZNZY3BjkfdZvmfaVdizY5KQjDjp9UYhpLP12B4DhF",
  "key4": "23m2UcNB19Y8vAd2FZ5hFh9kQvqs3zzv8bVxYtioEikdPoRwJFdA6k2nYatwv5354ZtYcqwH7h2iVwSz3fiyFfhT",
  "key5": "mXByEpqojQzBAffzUrQhXANKsNfruG36QNC5cBXuxRWKjgFir3JWXQYKWnoQb1hFQBkuPEr9darbZmRaQTfRz2E",
  "key6": "33pHFYsFK4Wv2ju6ZNuv9fr9NYtJqknVXDv74vG8Y3HxV5JUpEq9aGcrG9uTHoG38GbWd2hbWGJQJ6vNmzaUa7mw",
  "key7": "EZVAypN1AuCa8iP2zTDqLNeVRhqoLWKKgaMoMhcqzYNdjiuVGzCD7e68pPRv5p8P3TwLRqCVF37wKznJfB7shHH",
  "key8": "5k9iuwkS6ZXNJAM2YoQgNvX9aRLqSEzkDXySksbcK1Z4eMAhJLvdA2PN2Zz772Rwfx6S46vC1VPCfL4fTkMqh6Lc",
  "key9": "5cNg7xAmbfm91cXVdEaVwhm8Dh62iDU1YUGAVYY3YqhsmtfrQbXpGdMXiGTfrWjWidjjd3YqGU3GXaTAH7iB7ab6",
  "key10": "Wy4pjBt3dzdBvv2FG75FJexYtCp8tQZYPAJv1XciDGv25R2LH6Tb7trxhXCECKDfmJ3KvXFCiLJPs2rcG8HzyNF",
  "key11": "ckU8DsryzCKqdcxxMqzmT2gc36jYveosE8HF27kxRuo9kdPYn2ErMyyyJJ9SYCv5k9TTgHgqcLNpEWW4a2Scp3o",
  "key12": "3wkniCwQLLmxa2eJ9JEadxH5YTyWhjn21orH2gYobfsnNcqhovRY8B6LGTWfFCk9WwCLW8rhBTG9Ciih4ta79DkR",
  "key13": "2yTFfzygugeYnzYv61yYWKqqiAvXu8dT85VQa84YpuvgsGkN2zxqyiuVhLtutFirkmBwB1TTHNEovPzyx9UaaQdc",
  "key14": "4pAD1U4pijhvqMpmzmac7wc8KV5MsWXdsL2FbvjnKvzJSKstcgTD8AznPxQMtYg1qkMsTD4JLXb79bC4xQMGJhXL",
  "key15": "2KkUkWrf5KcRygBGm3kmcsXLd37auEw5pB3RSicVqarymYJ6DiYQWV6Zb9dUJX6MmbjkGYiNtCPq4nDBgTiyywUe",
  "key16": "iWWp4Q4kNkWv2VuUvMzG43xh7m6MysQZGyUim5juyWgq3fnSGxywLmCizx6dajYTP1m1xnqMtWuCmZkXpGGwdvw",
  "key17": "5RmAn2tGTMJcmFBVLZv3KLrnJ5LDwugfzr8Lo3p9AHyYod44dSu8ug26zHXqy1r5FRJPZR2c9t8De6cU6ZhsGsEE",
  "key18": "5aM5QewXnFAwybfNPn6JdjQ6mukRj13RL1J3X3z5a4HgDi7Z8A6KdLydRbF4ywZTLP5VZ8eyNREkWjQ4sWQzfj2S",
  "key19": "6gNgoT8PXKECCyzJdJPNEiWpJoT8vppPYNyNgaxFWAaMTp92NS38oShFsUcbJ8BiuNQsxZd6dmUAbVCxDfCse3f",
  "key20": "2DkiyCa5Zvqsc4GgmdmrE4gT64ZYbyunyd6QUbGfESWgSoH4iJpBF8cE2Lq15N4pd1fdinzRkuyEqhhYgwBhgRcF",
  "key21": "2arAi4iZLeG4GGxfaNfZjrCqAQ3kthcCbSx7dcvq888UbsaapGkiJyqaev77fhuSyhtiwAof6AJscTxp7dGLdxy3",
  "key22": "2V8LGsSNLxxewXhNP6pLhAi5d6yKzLsgbB4p1vad29S1H5dKfPZvABUMfYUGhT1M8zfuD8DrCSn6s1TaWqi5nJ8v",
  "key23": "LMvHhmveBHtWWNVj4d8T9WrrFEvHsdriWie1wEcCbYdLAee3YF6fUQXcv5ikGjbGkhTqyDFeLhLK5v77zK4KXUw",
  "key24": "56JfnHuH1hWuFbaFEujCfWJh5qEmwwrTw3hqtuGvqAVHeawczdy6b1RMwiVHx31cYzATCDvDuKWVQAuqa9fyfBdM",
  "key25": "5DxNHSnsW7HejievWXWVCW68YoFHCgPZhLSkEgS3ATWigvb5NjtUr7k235BiZhkkZHdeB5AqTigAs3foGX1nnt1m",
  "key26": "5XXtGS1dwrRcuMw8yhg8dQ4Emy1yHK7UowJshVa9cUnqJayGT3KPQXTfFzZTZgeGUu2AKYVU9Su9WjWpv1F4Q7qE",
  "key27": "4kkt7BGLadtfYVqVcvc4GudihqZhiVvRaKDQkHGeV3Ai5J6DkqasptyzRDjLmVf44Kff3T5P32pS5pzLfaaNJrEP",
  "key28": "26BMnto3wCE3PZrFnBy9HMQUGqtR1gEHG9YcCkfjrYBbE2GfdhnmkC2aTiW6fb49U5LhMR2onwzNvqWHEvmNimNA",
  "key29": "2t1UD5uLoZQmjeAfKqUYwGd2YF5vi2k7TsYymcxGvJqZyV2vM2xjgMCZZKoWBaVweV6NhcTn9kdPyccmzhoTwiyS",
  "key30": "4xHNngVZmHqSooZNA4a4xjofqMDJgwJWQLrnushm7yEcwpBzSnvA6zWmCekgSvWfyn5RwKx6rBPPvtnpReXeWznk",
  "key31": "3QvvbS65pUi4XpNhRbC1qX2Tjg2LjMETqMZx4RYUQdW1DwiySy9EgY16JgqsrvfmLz4zZyymCbHxSYSvFZAKN33s",
  "key32": "3jK7Qgg6pHhf2KXHWyxJHc9LnXJibmZzE3Bzfn9oftAXehSAfFp7oeRpYvVc6LrYw9Mp55L88Xy2g6AWaJsuhitZ",
  "key33": "26Whip7V8YHZqVRyqfa8ay1Q8dK76P8wBjJKjcLhyr7qVgZaTuNFzgepiDPtY4GR3cwMaFLLPdvscrXTzvfpC9R6",
  "key34": "5EVjyAPd63JoG8hYMQre6RDbk48GscCra8TWnPXbX6RqcTrX9Z8LfnJspwNcLmF6yp4vYRbGUYomkn5Q6VQzDn6D",
  "key35": "2fn872EycdErYuU6J1pffmKwJ6C5se5QHHgpSmmXUhr7mrqbe9s1Fy2aPzKBLiuBFkDGE9EnVoUwbjkSsAfE4KUD",
  "key36": "3dJxDSRW3b2wvLknTg6fPaV1QC18S39DdNF6x6gFxRKTn8PsVBLeWWmmXbg5BjTN7LbEhLfV7H2XVHPQPZrJct6N",
  "key37": "25hekcp4WM3b2ZUrHL9d5AMMj53wzSYsqZyKLbqjSom2mp51WBoptwmqtpYEZwQvBLZhV9j5nSCaXFxd8J9DB1p4",
  "key38": "iDYAghaJoaowhjkC87wuF9jUuXbgFqsQZfrypecJQTowNK7zTHv9SxjVewEeVbAH96uBo8hbfXNYq1Ef6JdpVCq",
  "key39": "2ibNtwXwuYWkrC496Z8JBXbVHikbEgHS9SUMSLbufnVSieR3L2zxPsqeHTdc4aaMwdJZKfGbES8wq72UvErDgSkQ",
  "key40": "36U4aZjvL2xWgJqmXy8A5jLpkA5E3YAY8Gttzvc8VbfB4LEc6yiLxKbwDbuvqVH8M1bLcdF7Gw5GDK9SB4qjx4Qt",
  "key41": "4r6XvYqGVzL3duunrA3TB9BVdFfhnXepdWDgo3HBEtLxLiP5zvB9p8ucLh7Hu9QeP2gmAQhTpVquVTFPrYcshxkC",
  "key42": "3Y8U4WJvrbedHgKfvGeauFrb4XVZ2UoSxodNPQerFr1bTswXbF3LRM7ABJ9T9qRAU58vthcUwoQTXAQUirrWD8rh",
  "key43": "2s6fBJxrzvfgUqAFzJkKKi4uTfBe3v771FTkSWo91NSo1nDGDD7XApHoNz4gS4L4FjssSrhUpMrSx55TrjWaxUhK",
  "key44": "2dQxkuNKHa3483666iXFkaE6bRFL4ET7gbosZgBJ6S1bkkB1GDfo2hyQQpnzCGE3Y3EXBUELEKg8LRwnieBi9d6P",
  "key45": "5gRqXLcYr454GBb4DY6mwHP3Et4KPkfn4BJ4DejyEqs3SLysow748Tjy1WpXVbRmmJVy9Ea72XkVJP8qSMXtZHiQ"
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
