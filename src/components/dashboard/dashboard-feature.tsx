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
    "4MyBCUUyC9yZPzY9Db7EhqpPwQQXRq8zqG9yEfG6fZfwLsvXX9vK6NXu5hpRHGZpWMCbUSyVtVaDsYvjtKH95c6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39T5gAu5KkuwmhmntuXzbdrcjRStxuhMcyAJDtpZ9miL2HbeDsxQ4qGcnQjcN2HfNZeqqjfmF8tUoh1ZJHxuhtmG",
  "key1": "4kupnSMji2yAkXNyixEDt98zeu4piMqmS6VtMT9ak5yvKrBynMT249jUiRLEQcd7uTvQakPwoRZZoqo9r6qXSj8c",
  "key2": "5jcqveW4S9Z4DwgJqioLWdBVndn9LVDJosaTFiqgcBMvY6J7EWHJ2qSPGjBHNLz91KDKKNmLbReUkXZ4fdEHvvKM",
  "key3": "35QqcZdTn4TY4DSvVVYL76JyNnxaBrmcPyUdDjNqGrJmEi5gUAiPwHJzL3mxy33uqnKuSuZehLb6Krgy2aGu5F9F",
  "key4": "2XMjW9Z6zPrkd5KS2zsu2BHMkkiyCVyFA5wwd4UcXrs92hEaD66cYBSmoP2Jpz54HVYMFtdfNMQxSmbzTB2AaXYq",
  "key5": "CqFzKMxqhCdAVUSRagMZfy7EeWx9cn47AyvAV5A464dan1DrsxDJARcv3zL7k9kkzM2kzxKfNdMAQdRMjfxF6PR",
  "key6": "66wp1mpf42zTpHv3s5Y9AWS3YuremNNGpiipDs8Lg3WiFBM9GAJxCute9pFb6UwoRpAW8FD2mnAoWhCtFQW5Hq35",
  "key7": "3LWAqM6MwHLTPDjY7dGohs5TAKraLLF4Lp8ZP5GQEqJFxYjxosbhcPfVfcdLdLTwKgEG1ALy3GawnkswGJEqQ78j",
  "key8": "4tNEwA1FjZYRHvf6KkM9Z3MPxhb6B4n7gdnpdzHeg8NzZJtDoh4VgpjxRzcPayfg4UagpDEmFmvySmyeCYsKr7UH",
  "key9": "44DzVReEH4oRNpdT87UkLaSpttvUTcsJiREdnBVWHCzgcmaQjzNAVabyUZuGNCTWhSVjqEXvgpMSxteVLSsMFsFv",
  "key10": "5TSFuDY7vQf62uXLyTKtWRESVWsgNAR35DiGvtz8vG2pwBEQteN8GzXbLJnEJ9oux7UnZWAh75jMys4Q36jtZK7W",
  "key11": "2UnPq299tVERAmuuKB8NC64eDG8FNEXfpCkvbDjr2XXKrAUzPHRduFwrg3coR9VrRpKmaSofe5JWoXL3mUpysfj4",
  "key12": "2Lo5PnBBsG6TrkH3c3TrHw2BDnApXMoopE6Baf4HmXRseo6oijq1qbzn4xdm2b1NFpXqAgRhuWnb8m4DJnj9PYDr",
  "key13": "5UFiAzYY7K2Pj4HRWkoZrbfQ9KKa94V6itdEDeGqLyTuofTkF8VL7jg1bMkFb4bFAD8UxQiUyLJzH8dGuEZSyMDc",
  "key14": "jLf2drQSw4USpY5VzXLfrfGSoPQ9ajGUyrUbyPFv4xEpud3jrJ11kVnZXwgcDoGA4Mzw3gHQFMt31BezKqicpC6",
  "key15": "5M8NjJwns5XYydsbWDE3JRwKjjPgd5C1fh3w6RPt2ce82TKZqFKz28Pgch6ApKzG93Qq37eAKLYsZYgsHLr9QCCP",
  "key16": "5ZsvxAZdrYmjmk4LkALfAESMmRSeG5aDCz7YtaMHCQVp2B8wGfcY2NcvXJx8S81q2kkmSU75tN2dekxsPW1NyP4m",
  "key17": "4xPvowiuGAqxptwpck2NWCfvQnpKmzB2Va3zMu8Vg7mWY2BvaxXkXZKq1ggQzmpogkZfhtWQYhCYB48TbLTZSdZD",
  "key18": "PDD32n1edaiwF6zo2kYYush6BMVEL8Hv6KErAUxTB9EBBcKRXmHiEoWzkibWENSPCaiPVeeYJEKBRQLkjwznVqF",
  "key19": "3keQhKYBM6jQveJ3z19UsJmtCRsf9Y952QDE9DnGVuV5HBLRaxaBsZiuB5dogNe2Kw4sBt92T56FDaaU5B3W2vpJ",
  "key20": "5LuakxxC3Pj9R62rW1GHq9XEG8jgjJoX7jdRcx2cBfLt4nTbFVDBSkxz2Caibse9udUU6qoTM6z9EouYb7YGgvDP",
  "key21": "gnKM7nkuRdyMmmNUzxy73oxmgbge3EqavL8XVLcDfrwbpzf2E4QNeCKUbayvWpb6HDZuRnSybF8sWTed46oyBnQ",
  "key22": "2LSjT4jMzBSM8XgXsG7ut8gJVurWeBnGKUy3adk8jZ3VXg9HKjvu4BX6HA8Kokw5BMT6oRpnYwJJi4irTazP1m1o",
  "key23": "4WjNnuuqshNWemubdKMHekSkbGfPY7KRioPoSxGZyjosRFhA4mqEUkM5zYNPPZZ6kWbVVvPJhj9LbajnvYxUwDmj",
  "key24": "2ujD4DqCfoerHNYvnxxeNo5sCuimX7oY2uscXekiqJSz8SyhRMZjx2HBYRtXZd73uakBJ3eGVrcYXwqKA6mxZNtA",
  "key25": "ebkvcS3qG77c9bTYCmH8jZGqFbzUo4FY4cdysSq4x6ezTV23UqKSXQH6pwdAaBX6aQ2iWdrukAjFY22KV2zvt2X",
  "key26": "5qkv8zvNBqhLB4YHBSXykTAQgdTSbUbJrZzfZqxXsua8t9H5BjwUo1eie2m3eXhvTG9zWwSXSfDrUDoFzpxv8Bpx",
  "key27": "5fGxDu64KJMGLHGDseVnuv9ty8xrVp4ezRo7PgXHrgggMuAAH2iYwrv46RarsVYVx8QguU2ZZZcdBAn8mBeFMS9x",
  "key28": "AkZwUcvYg7zN1rBWy6ivZ4bnEoetBixfSHWuiEKAgZxJ6cQ9HbPXWPv8fV91MYV4xXnqWG7rg2E3kmMytm5rC5N",
  "key29": "4mQBzK4ZRsc5Nzc6T4eRS4cRgFjk2Dv3mui4T2oM8KKSN9vTMeNHXtF68EAXT2GZp7A5ffvfwpcBLpWLg2VA9vfY",
  "key30": "3UxjXUAeyFniYWPdxf15Ei39kfYaeQnSmD42VZB1pfWQ4Qaz26uaav87qXkVJPjHBY1J928n6TVmGV9MU8s9y5h6",
  "key31": "631iS1brULFZpRkAUknf2bD66VJzBHoW7feduWGzKWCne4sasXL46zpqUwY9qV6FCHA7nJHKCxDZr76ye5hvo8uc",
  "key32": "3wBaKgwYLymuq2GNo8KQEwKy676RNksf2qPZtQNST4ZcFoBE3hBq258W9YYBwZtVrJ1bf2grFDnygftusuA5DU6e",
  "key33": "2shCbZZbA293A4Fk5mW711edKP59HK4g2zaJTx8pUSJrEVEycChAktkskBgau2qHvHpVi9iqo2ZQaqvu36d888jE",
  "key34": "3F6FxaZZmmwoBaojb2t3Q21xYrqWt6tbxmGEva37CRZfZyrBshbPMYaR2XCnbTuDMvxh4KLYhPx84Tf53uoC7in7",
  "key35": "8LPmFiB5gKSnwL2scTy6dSKzX2Dvw4j8jnnnxt6cBajEotv51XTTywE6XXFN6mTZtKY58X4yv3vwhqkvDMZ9h8o",
  "key36": "2k6MGhk5QRHHSt9N2qsaGFApcw238UmoiYk3DtkjwK9iXhhBj3Sp2UbK7J2d3BbbZR8eFSBEX3ygKRb93gM88mJy",
  "key37": "3yQmmeAEYywKDDyC5kBPL9AXY3cu7vTTTqnXjG8PgMAQVBDocjW7yXmryCWTGXtBn9rpYT41x5sh9zDgJyeGK6DX",
  "key38": "1N41oRJUAoB4z5wPq6jcPWiWDHcbAkRAehCVYp7oVARk5KN5uF84kWaXVvErNeVdUbL9jXsfHuBfmyidiYzUqpy",
  "key39": "4zGokgUb4Xcg2oQMJRfh8xhHsvTo8Thd84KaLfqvB2iZEsazcZiSPfAuMybQkRMzJvC4pEZ1KFXL92Zd7qcQLrxe",
  "key40": "2hxwabwoKnfwidsfoCNpA2kCY7AvkKt3WxvdesCc7xM6dnkNJX3Xywe8GMmHMtybR1EcEcPXaQrzk82f8ruR1RF4"
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
