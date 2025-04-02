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
    "62gW5E6wmdQ8db7SShBhiAZy7vc5MBV4L5Kcy9pN5qFHxF4unHTkUdFu4rQXmNkZL4JDf3AA23cYah4Ry3cvToq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZnZd2vCes6yUGTBtVAhhKRvgurubSVdYSMYtPY2VEwVmhu6w22g23pPT11NhYaDXfvz3d6H7KyWKdacP77qjL9h",
  "key1": "2ttupBJuEdbHPsZHkYmfLAJcjr5THxKXw5y48yUnLhWE1cy2sWoLmDdZBaWYBEAww8qHkXXr5m1awLmpMZuUBgLs",
  "key2": "2MSqgCDLMG1UnkHqwHg8MAWuLu1vDNMM3u39KWQW4FMmm7mup3wBFuAnqmzGc3cqibp8kRTdqrLVm9fBgxEHMq6n",
  "key3": "2Qt37f6cqavfDjeH6YhyWia4TisuAonCGX21sYEYTUAv16WhVhQM7eHYmtdatyCiinGbanyUyB5shYostKuzKJ5B",
  "key4": "2XZ3LF3FvRXjcLToyH4pycEZBoj7jukJMaWV5e3NNFizusvjY6DJ8zSkuLU6e3CtvvxyC6EeSerBeWMznZutdvAa",
  "key5": "3E1YpwKv2zzAngYfuhkeuN4j2NidswHBqgrMByDRggNahb9sUdquktbbLLL1V481QaVsjGm34eazWN7dyJCPhagw",
  "key6": "321YZJ9tEfGxRZr4maLt2nysPgpbpYatgT6FK1DSup5fuxANiC4699DxuDPAdhM616eoRV6d8vDiRgZLfHRSJshr",
  "key7": "2vWFpdebiTknhRgH2ESJj35P52pE7i2iRyJXMb28mFVY51N22ZKvVhvKqx449bgj3bQMnov9YjqznfgdasNVehDa",
  "key8": "22yynt1iAAiq2p2vJneCFNtqLMCRP3F4eNToHCnRHGHRLg5S26uG6xuaN758cqAxzSKanru5swQuhQe31MTQW14c",
  "key9": "ztqH7FyBMqgtUoWQ3kUp69DsYeARhE2bmLUfBbtp8e7Xh1ZLqGHLRJYgfUjJxS3LbzNv4vpVsCuohqaSVdQvbwE",
  "key10": "4mbjKX624WtJrTmydWVg63zw9eKvc7szGKfFNgxZjZEonSNRxyJLaSLtdGqLzMH9dESg4W5idLPdrqndCtVLYuRD",
  "key11": "5DFYjZhL5swoircbqH3UhAhEya4mUMuoK4Aohnt5Qd9aSM7WW3FKuQTLd5puuAuW6hruzKZFpSNZMKxwSB7BM8Ao",
  "key12": "2hZywpxY4zAjBQZYu5EWvTqLipBYGe3CE3pz9KQuhUjW9rDb3skgot7wgTfPEprqo5xU7n9223ZeH53jJmFyDdJk",
  "key13": "4XmLsFo7teUz6R3Yqmkwqaj62BAqYP9xUH8ig3StzM7NesQWmnePz5FJNfHNNMCDS4q9UJLM7cxsgcAa8hYN9CJ",
  "key14": "5ym8bmmh6EtgNUEvf9Z2AbGpXKUD1RSJMMWgDGa6RCcP548xfPgtMe3jUUD7SoviqhPGXoCmqMxFmkDnfx5K7f9L",
  "key15": "4qfrTrfuerBfbbGY9FTrPVyEMiBpcRCkaGfnnFehBK6yrAyYxifxnfYTrv5YubbaRZi7qGrwTEgXmUqU8xViEY1D",
  "key16": "4upNK3KtSLBUj36dJhCNhKhQJgEVYSU34LyWhd1z3GGdat6Rjze4JCy3ufwT7grgE6CXV5dXShaeDBmKXTdwz1Xn",
  "key17": "5xSQpoo6PgSFbjWc6UygwoXrGA6xhVRYUw2zsM2VjjkTh11ukkEBEoQm5cU4aLpikjskzbVHrHSYGCpQNLX7QUWe",
  "key18": "5G85sWQnfUdGtXNg7M4Nkr4FdEmQVC94Hb6gVUBimeGBYUgtJCG4oRhajaa4vmSYQ7jx9cJUaos7zX4Bdo4ncqqC",
  "key19": "4hAZLD2AAht4ZzojbBwqChJvNAibz7qqf3Y1j8o5AkFH2tP2CuFt7TT7wCPTKnqrxm2axAzTcn3Y9dNaRfCHNDbR",
  "key20": "2bo4kPnEFPfz5fMNFchQTWcJk4uUc7jmhdmX5BausBq2obtFTNmG1yhJDPqP6ARDeLE3pKzfqaWB2Vv8NzpynF7F",
  "key21": "2jDfX3gbJ5yTivmPuHTjMXYGK5mNmM8o3RULfWnb3EsXvhwVqYS7ZTuRKUH1KwYJshsLpMmfP9mXq9Y8m3jX78mJ",
  "key22": "5E3UKYd1YHKvCn5CenSKono95fQXVG2av6WGGY5VDyx8Y3cgv2c7LpzMZ9mijY87cCqdxrPHeNzCb4BTYjZ3r5sx",
  "key23": "2ntRwfyXohijaMF3BsHFc7Amx2KJSYWTQqFM7sgcjjmHSCfzW8pkn8dFagQH8N4Dc3MjMKEV94P57Wo2KoUvz9U2",
  "key24": "4bWzHV1QyWR1UummDSQUTjEBJY55GV3GbrwgXEkANSudBdxpUxnEJhE5QMM9urQe2fYPErVx5s4H9ALxxbG7hn3G",
  "key25": "45swKNLwChefM1GgJ6eYxa8E7zoVD78YAb19ai26S4VtDA9KZ8VdUEJxqb7is3vR1Zs3x3hND4MQUWcS5NVWzcYB",
  "key26": "3hon6NAJfdbCNj2x9LbE2UykPcJiLE7pomowtgSkjcacdUQoGfAAbJceaahsfWHpoGCy4JngswC2FESwvi78RJd5",
  "key27": "4xggFxgH4EmavqjuV8L7E4CtcmWYQyLVhSDxzjVz49CE4NAJyEYMKDNRomwfhgMqpeXHvbDXsdNamH6SPGHuYS49",
  "key28": "2z5PgDbsFtnukMnpdpAbfvpcJ61EBhgLdcYWhyXffDgMQK19B2and4K8291Sahe7MrGkQvDXgKEzaGXqH4cbHbEg",
  "key29": "4RtzAEBusmcBAWVoVLUaHkN4D2F3YwtGVCU4xL2E79c4Za1JedQ9NUaJ7wW6K2qTj5nAgGfg5izKKDgKCLTfKwhr",
  "key30": "4mFwMasSykMuhJt5FFnNrzQAkkLhxcb7heZHe3hx4DLAPA53nFCbnDEAP7UWxPE7gmydACafqSX3TKzBdaTA3f1r",
  "key31": "2o45Q6oL6m1i9XajM2uJCiJTWnQ8DWeQM6eXmAqdBcxWHa84hmcXhsroJQog2FzgqPvupZCnAitZJdqw6iWhUbiM",
  "key32": "4DgPeT6GejydsCipKf2oR2JLFHcduLCbBY5BpXc7HYkehdz9oRM3xtohvEZVRPS171oDN4m5EUC1cLYDz9xTKeXY",
  "key33": "2F3RZjLrRXF348CMhuwcgWbYVNab9XtFjZX2P6BW25rToK7cVREPXAZKZT7ARG2Aw7KBx7r5Ye6jZLxA3MoTnssd",
  "key34": "2m3vfxiARn6SAJcGkZhaghqBdTsxMCMSBbc83rFP79xofkFUJC81CKLhSZcxz3PmjDwqf49QUcxsNLHDDLwavM9w",
  "key35": "2e6XojSVUyeZMsM7L5iR3MTVA3LLGLaaGiLn2P3rJ9K2Xo2VASJ9tU6YSWxh1yL77gLiLN36ZS6BpoitEoAUCeNn",
  "key36": "xVgn2iY218FhMApj31nb5AN6qCsF9AtJ2fcYnHFW5435233pMa2HuZdWzQAuFCCUR4Ti7gVxKWH8wuNcbsLBc5x",
  "key37": "3gYY2G22ns6w8hr8JW9cD6bFk7G46RN4XTgtZqrBfwqCBZcfGnPGebFNtWabVAQNQsmbJKFiEGRC1p9VD8ULzszb",
  "key38": "5PmppfouvHPebY6eJhpzWuiUhcZvw5gQWrgjBp2YoT2d8kZ3Tm9s65kynf3kY6xcDdvWHauxSERoC4f4C1ZK1NLG",
  "key39": "32Qk744n7pxThKJaa9TdZDp1V1GrZsX9AMbzyp8cq8i5UBQGgubCYUPpnR24rGbgQxnEQ4xk1mhyPESEcDnKvTAx",
  "key40": "4evg8BqyrxxdBRzmfGTYBAqgNhGR4DraRB6rHSkMcooz63TzPiNWYaByYSbGRCNsynRcXJw4P6pGViWiFo5rGitR",
  "key41": "2NkANKveuZazGc5q1wrezVxTtq2Qkbhsqo6xwnnj5vfESnx8cJvMZ3Ryko5C5M76DFjRkBBMdajEuRdxsHZv2Tkk"
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
