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
    "3QLf9hoKMU7spSb7BZ81tAemKfqduAost88KwwnkidfuCcFfwfJWbNc8P5Wqq9s29ZQwfNDFKn5cPH3onv8LSaYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T4CEYXd1q4sQzx7k71ry9BHpPEgrheCxua1yxA7mHbxnuyjTse1oWKWqdizX2qYYjsFZmUdPw9Fqrws6Xe53VkW",
  "key1": "3FhwP7rumUHHFFh3mW9uYQD4MiEpcNvLK4JE9jtEuQLd2Kiimfa2uffGSfqPkrQkiJeWyE8pfmS3v7bYoNLmW5Ai",
  "key2": "5WrAKdHfhMEc7zkxFeLSEkJAa9DQoYuo3c6Dfnzstps1k5gQhur3i76GRQ25tXPv4kPqyMAcXL4TNYqi7w3vS5Zn",
  "key3": "59uEfrW9YP7QSkR96zKCMwHoRJqGKviFQx3TvqSDjw7LhVmPdGNCdS5zX8c6wtAd6M28AMG8oPGPnX6hBo7AmRBm",
  "key4": "4ww2QD82yrnUdauU6tpM9DMk4dvQJVQUD11fMzNDpwBuCJiVdm46GAbP6W1Rd8CLEd6VPtgysh5MPY6txK2ZweWn",
  "key5": "4GdhE8FUi9ZSQzsHuENX2ANeZGGPCe6suvnxQDoZJP9waX4jUbsZxCtFWQJQU2sXGi6C2JzmHt3bYjwousn5mMes",
  "key6": "52wpkqejKCbVgNPeH5JZpwYMMVYsvKJjUMk95fe1SPWoACuvdt13Jb2vHG15dnxxZoECebQhTPTAfrCKT37mvVsf",
  "key7": "4JLqr8fJ45m7UUYfbqTRVsUCvEgdJuhTyjTkBJ9iWTvLvUjXAuxauP9jnyvwqFLp2zWfHwB3tt558UHRdiZP1f9i",
  "key8": "4wQsdPCrx9WrUtVKPtp4Qr4sB1rN1uK4JfYMFyXnUjq8cWKGfHpzq9Qyiy25euBbyiVA5uaXnqXaQG8pYQLUGp1K",
  "key9": "EJKDy9rvfrE7RPVF4EFSkh6ruhiPBd8Wd48hdHWnT7qxeeUvwRoJVA7JpVq9eucXBfBsjpS9nq7xDR4vQQJ8fTS",
  "key10": "4ZJht4xfNpHWUm4TKqZ12c8EGaWPGyF8waDmYKfBmyXGs7rtwnzsBf92QoundDxDx7FgBarMEBp8NHQPy9GGR9RW",
  "key11": "3mxvfgwjXusYVqk2RqgJGLoMiunpmypE6kX5jDSBSACyAzauCe4rUdq13VyovnYvj2Pwv8MSjJTxGBGmitonB56m",
  "key12": "3C86i6BxiXLhqZp5EnxhXcbCqpbqeJUBL1czoK9itHWMd2Yp8C7jqDJVcc9zXFpUjL9DUzVw3XxXXMhGN5ZtybZA",
  "key13": "39VU1nqQHHuSPh6S4BsWCs2HMNrkNhD3wskxBMVvQCpL4CA2s2n8jNfH7zc2bQ4LwUEodNWXVcWDsokKM4FNqrhZ",
  "key14": "aNdJrrUYPDhdx2vT12RdwtxuwiGWbQDHTFwVUuYSjub6u7wWojqAFk9p4oVv85Lh4KoSa8EmEooi4WihN7RAYYz",
  "key15": "59dWe4s322ftWGhnzVyM9BoyrLCj5j4TQ1oxQpuZYSuhRBgM2Y62fkF3Nr9CBcU8RR7ceDnaK2tRGN3J8Wy9PgwT",
  "key16": "21evbvmC9dxTpseQg1pFk35Ms1f9Se1K2b2wWSJKYZkjzpBvUS7DTTbaPw1cS3P4TLqipnrs6j2uVjJDK6VjMAaf",
  "key17": "5bQKrmigJPq5dSGB8G6QF2d42HTMbFmupBoEb1KWfG2PLQBkG7qKqHhE2PRAVEfs2ZgusFubdAXBGPuMVRajv5ia",
  "key18": "5eo81vpWH4ypLzkrPhC19u8jczdDYHAYHDoPSMksYnxF13DcDneSHGNUwks4njQdPJCR2xVcSCXSQRjM2GGQyJ5z",
  "key19": "3Yfcx7UhK4d12wYxicoSoefzGgEa7inZjRx8Q6HJo66b36Cw7ZPpCRVe5DCbLgan1UJE9f7hbREHJ5Tc45p43kaN",
  "key20": "5oTCRfSQMqK1EW8Luk2BNQWpF3YCum7HQ8NhXfSRzPA8BDy1aEVsmC7VVtxScTVVHzUbML26PepFUaruin2XWx5K",
  "key21": "4MMszbcgQoiFbVmvmkzo6F4fYzXJKYyGJeRhTsD5S8ejFGjT8qoQi7EufxzfAD4U5giCSMSKBq5r5yWQVLUEKVqe",
  "key22": "4LpAt321gGsHpVV4hrixqBGoiVds6DEpPJaERuLVWhkRweHwWgLaJoBYaJCd9EttaVo5gA1Xt1quhaRGTMM87p1Q",
  "key23": "4pk4HhyMRBJh37jkaUvtYJ853wVNnH6SLQaxHCLYv74yW8edr3QUKAt6SetiBqZVkcST75wS1rkScyfuB2LDKqU5",
  "key24": "5r8HKnHThkrMPdSvhYkastze47xFDvgUVKExH8k4s8K7T6KRVfEk8pDDZq4i5JpKLRJTXxyedvVems7XvVhqELLN",
  "key25": "4NUPDWsHGoH2YEqcRA4DNaz6GvQLPspWvdsFsuQWfq3zuKXqM9kk546uKN5xL5yq91NnzMv19yZ4nEkAiTkR1rs5",
  "key26": "5hBPcTWTLHmwW5eP3MMobpBfCmqzhbwQRFUqzLcCZDEZrWvwhZh47BjEN2TvERPRoBYvQFEpd18Gv1exgoFUJ2Qu",
  "key27": "qGKPqTiwixDdEqztzqcv54TCnDwdpfUSiDwA6ZdfvULa3ut37tZX8jSEH61Y78v6XkkXGyPG7TtHcWA9Rs532bL",
  "key28": "2kSrWkXPMVczvnDURGuKhdv1C2uxJCjhX7xncBcVn8DanDPiwYExDsZ4BmYa4nq3TTynSgScKxrb354kfven3HjM",
  "key29": "3ewymQCX9nddS9McDBXov8TWT67b5oWLyZPyQaaqLYeziz525yw4pnHQDE5QWdJrvd62XgdrzVWNwgh91BKNuv84",
  "key30": "3kQdLsK9UPpLFctP6d4PDFjW6Mjk8qej5NCvjMgnx4gWTugzTRnnUmPqJ266URhnyKHbLS9ByCwM7c77AyP9RHc8",
  "key31": "4nbwLYRkKKT2uvxuWQ4eASeYJs5H8N8j6LKvMXLWqn575Xik98vPKrfVeCWxcKJKtPRA5jU6VKrMw7ub8aXh1Anf",
  "key32": "5oJqWmL7NnzXGwojLnvXyp8qhqK8JciWFKR6DRks4EcHo6b9baLUn4vvGB4wSsA4fam3LTXvDBLcrqu7WeCqqeXZ",
  "key33": "3VpoeEBhXvZtr2He3YEY973eZUgLCXZd66GzmhCahrvCjyQJzzdLNfGLbd6xU9DoP3UgfCBwXMiJWkRg38SHczcu",
  "key34": "5wMAKSYQS4tJyc61475gqYAYKjkTRyhABYb8PnN7JdVYjbWfW7b2pe397fTaSEuXFgSufLjtTJGxzV5KMEBTG8nf",
  "key35": "46GjLmq6nqST9BUHavjhYayHrDqKxucDtQRMZfJ8ECkuQCS4J27xBSphbAypEWRB8VZu74RVXRMAczBim7S4gW7p",
  "key36": "55pAqVD7EnFGzZQbbXjFnbwR57U5YgiJUxhWCC46Rvfm7c1wqSci74KzSuHkSAewZtowbujbcnb1x5h8F8rXdGGZ",
  "key37": "51MwWzLUgYQbwVaMuFqbxYZhpDHtwSeHHQbs8wv4mE8qzhhNfWzKbiKEqGDhfEWx55bSkFzLD6TSEWnrfs1txnw2",
  "key38": "36UYefNbDv1yZNZ796SsGmCb15LvkwHULA7HbC4QhvnQPZxh12oQEVYwec3Aq863wQoUX6JJTpCAR4gjtemRZWdT",
  "key39": "4ruzQfvDRJvH9Kju6XgzbQnsWn4yryBp4TbTDBm7Pb6Y828v7h3nwKsDkAMbYcNX63wYTosomGtaYaXqcXLtSx4z",
  "key40": "2ySVGye1SngYkm8wwaWFcKpy8SywZpxzgHYj6HzqagZqkSLQ62MqpsZJ1SSVxJoPker5sJs8NJCL9tiUJ3bNCWvE",
  "key41": "yNePL4trqMTwR9wN6Tn8L1wnKeVhTDVgfY6Hy6cgMB5Eacew66fXJKe79DsJMp3WB6mEGXzSgwJCBPVqf9RbmPv",
  "key42": "47S6YomDAJqDymaSD2Fobw3dfGTELhrmWDxaJzaRZ8FzUjZanAtSHBxNq9FyEi5o5Qxmy6JvMPfKcvvKE1cSuCYf",
  "key43": "5hSsJWDF1r5eNw5caYtrvisRMJZ5U9ojVeSBwyg5ZQNe3artuvzu92mr5225L3mDDJe4jULs5varZMwEG1dqcuwK",
  "key44": "3wF8MUMq8xhz7BbspoLEitcBgahaMnCVCSryxN13PHJXNTixLA2rXiW93jVeCgGak8akxpE214FiDD4JWwu2VQzo",
  "key45": "5XGyRQz8XJK4gkBFsfCCK3LbkSXPQPcJiVCrEiikH15KWHVd4RnbKR8Jp3pJNqFRXPdjU5X1BPBHBFKypXMFzdKb",
  "key46": "4zWKLmqLFm8frEhPL8cbTiKcXj9rrsacXD1N66CtoS6o9yu2JHozSFBDVfB3TxUGkLRHwu1eBinwsg9tGKZ4HLY9"
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
