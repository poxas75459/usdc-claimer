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
    "25FkhR19johWSa7FnTXc1D4etVcZELEjYWz4bFFj7d49kDWwDnNDEwEhRAs3PBF9LZ8Qcpr6YUxbt3HbBb6qeBkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qtHht3yA3D7wcvvPwoXaokvxky7cyh6zv95t1d41GtqbwfZGeTtNK1e1zcPfPZvPpw7vSsmxVyAN6pMc5UgoAc3",
  "key1": "ETQXKPhM3oxtZCbMLTr4qKcr6pJKNXgW8K5jdNNCqT7fLijD7MXsJhtDh9mVRndnY4PnruRQrzj17qWs8rAwK8U",
  "key2": "4agpeU5a8RJKVwUC4QXgh46Jfib74dwjKmkh1Q5gAQGToUHqnXtUCZ6H2uWV1ip5yzfRUxsuDbKMgV5RVFqwEfaR",
  "key3": "d8XvHqvs2LjvFbSc8GP6nDVBVabhAbpgtbhtqtP4JiP4TiD7kkYyb6xAPEsfaXwzNta7ta37Wso3h99vMc8p6gp",
  "key4": "466LdGv5dUXxgq9cK7gsi6hCqDtuJa9aJoaxVxWB9owmfaLKGhYyAazSJ2cMB6YFVz3HVWcP7wDLFQfrX4viAssB",
  "key5": "5ttoYx3r8zqtefD1eZUjohShA2vhzkEqu3jzy1rvy1zFtd9iJdnjtHorDQsfDvhwfWv3weNxivUcabm3D5iqCPky",
  "key6": "4geq7qYhzwxd8D1Mdhp1XF4sbM5MaBVVLGmomRPx8CTUtV2vYBZBmZVnF8zedYSHHjSpEGz9GTsRcDeQZ8nBw8ae",
  "key7": "5SukFNsa78koZgYW5aHgmoYuXs1axVH1Nc1ct7JQcm1bouPpxXznE5WGFrF9TGV5c473tB4ApRL4NGKd22tiuwBs",
  "key8": "iam7xb35EFheoCv3wCRLUDdBmTu3LX3dXG9HpC5NtmL852rAcQssjB1v3J4ao2WE5dQPYSct6bpriAsUVaQF786",
  "key9": "4GS9ZPsdMYMF5o5Aro1hx4fg8Df1iDvgrqds1YGx8QwHMdLkXpaVw7TMNTaFUvQrXXqj44qTMGTbA8bZQoT9avrg",
  "key10": "4A7nf5XPqYnVtE9KpjJkVpPkHjZRPsHqTFujNziAKPokTzcX7nHAPJmkX5fHWXPNnLQS2wCsr2TNLikvZQScAva1",
  "key11": "4QGBn1MkySmT7nozdoj3KoJstWtUTNiR3xuh1ADVVd2tzBU1JxLb2ehHoNrJeTJTUL63Jk9aqdcWGxPE1esi7ZyD",
  "key12": "4qgHZ8MPe5HwcyTL1yZiC1zVCE8pxWzHtExmQL6WLcc9Q7pTFJFPniMaEoSen3a8AfNzvUUKYSKfJu4V5P4pwFGY",
  "key13": "5kUeDZKbT4GsbW4M6S2fG7H8B3Mvwy3hRMaZuXS2CYtu8ndedNVX67po9KCbM7sqgPnMPugSUeqUgndtErDYgm9w",
  "key14": "XEWcpfzvwRFVDHybiuDPXwkkZYFP4G3zaTMNjG57aZGXCiXDU6FCzmcZrgov2V7KZQNGdoFa6ozWFnEUXzGamSV",
  "key15": "659aLB9TAs19x3cqZE3NERgQj8EwVWsQV8Ras2RgWKgqdyt5wZyn4yQYf7h8z1DrDZ2ZbtWJmkPt15omCYhebYR9",
  "key16": "2w8fVAkmBNKQKozpXfzyh28ss41abWWQHdGbQQDkGhKAjTXemoxX7rxBWfkhkb9chMNWtSFpiJLu5nESCo5yYKcZ",
  "key17": "2x6re97KFoJXuBYLNQHEmxvp1zcexJDxVxzc5cRYbS6RPXFKwLHkHueaZXg1nDY8M4tUZcT4viRWnYsL594QyRJM",
  "key18": "5UzDaQwtfT7s7ZoE7XoG8MuJz7VmRiapBVFphqKNjLTd8WAokxuy9jHtJ68JCVfP7sjtGTcqBcUVUFyYZ5kJEyhU",
  "key19": "5YRUWKStBqajs7QAqCHazmuNEW3VJyoiYMGpuT7ghQqoQFrKoXjnK4TfeSShZrjAAYzNQVdHaBGpJddF6qQZaYEP",
  "key20": "oeAWc8FQKNc1XPfD7UtTkuwKNkDWQH18Uo9EFyWDGJC3yP7Zaveiymm8YgNn9ovPrgYLrMDzPd3RZDZftB2QWo9",
  "key21": "5g7DBV59iqUd9uZcVu1zLxXj4aNCn1yGd9sqKkzRjsbLnNDcWSMegvd8NscDn7yGh7TLuBS58BAVXjWe3xUQqaTx",
  "key22": "AEFmA9fcTEuAQjp6ZrN2ZDhusVaFaLuijPT5zMVP8ur1GgvzWg3AMeUyEyzHTwx1tTZF122mz3ufHjEqDFoHRCo",
  "key23": "3BhhyVWHNyBVjwRurJF2y8wUBbDYK7RUDnMtD5aUf8qSzQUYMXG3sVQAQRHupPB9kf1D9g5nmTzK3UQ92GULy9RW",
  "key24": "2gs2Ydzt5U8mcoHhyqnbivvLqGju6bWWvvkGZssRRs7A5bF3jgbENjWMoCtXn6NVj5vRuJsXLJMtxxe9L8Vk7ELk",
  "key25": "G7EASuaTuvvJ2qvjr3v9m3JtNaiBbGsU5a79gzgSaT17HSAAJRMtg1nz5eAg13brbxtjc2Y6MiYc5o8bmvn192i",
  "key26": "5dyvuK752E2LnKXWX4nNgSCArqxX2z9qSHqQBFj3G8az5xvQnJPmkrcbMDWDeyDdC2pSvhhaiADhWEx3vywJi8kc",
  "key27": "2UhRGv4eijk6S2gbM6BdEwTYe5txNEJSS2LfXy8QBwRzySbTV5vci2eXyavPcQC2mXuasDBYizu8FvRSCw8PaHpW",
  "key28": "5FhQaSGwAmXVzYkd3EuvQTWGtquwthqG7hiS5cA4Uw3K5B3qVX8wD2aHogBUytvD1yDrk3MYcZuybMLCFqxpNsy4",
  "key29": "3J5WCVQ5X1XK5mW72gzTSjRyfzNTtRdsGFZVBJBGGNPQX2jDGdRFi2zCuGyYe9vCHqFyBFshUVxk6f4poiLCaSBH",
  "key30": "1Z7k8JTgZin9CK8tbadsEmxQwovFopoNJiV3emo9RqbvNoxDb5UoaJmj9hehKhiFAQ4nyedYxJoEr8z3VYE1Ux9",
  "key31": "37moGmdEwACtPhuGMN8diPW56Z7tybhRQaTbPo9fcJKdzMKBsRiwr4ktVNjGM5RJCsaxRY9r7TyVKzzXwDSJ2L4c",
  "key32": "3xweBhCPyqS9EXSysgPPPF2e6JxQ2kxCMfUfdCTBiKBNERBLdp5kM8VxJzHXMMwwj2DTH9TdfKzRGLfcPabSVZBb",
  "key33": "3NDGVGaK9CwXS6sBijdFGSE1ousJHGhnay7289Ge1ubznGmapM2peY5dEXE1NR8EwcT6wxY2obXcNd8d9PBDWRDa",
  "key34": "4CpRqG6WjnMwHK3d6iuvu9Dzx6oc9Bgs66pM2PfEHCfPrdxPDgrmffv3CXsWFN7KVnfwDg5jLgrxrWghAfkMMQNj",
  "key35": "5hRznjfaaCaVgUHBpjdqcwkzheMSzTSPs24Mk11xSM7WitbDz9mVQGcxBaxXKromXkpLx2BuSgL7vLjYu2x9PSzT",
  "key36": "4w2dLMnh9EDbXfUJYhj4wyuYGJ3mAPpe9xbyXEpp8BvY5cCcdLRg2E5BMAx7Vy6NVP8MfVHyRQQeL1XELLzoT4RL",
  "key37": "rdfbDd2B82qnzQHaXVo5emLMGq3iZqn4CZeDv6tLvcFfQC5mSkSjP2ZvwmeiPAqWX7uZJzKcfbcomNz7GaTAhJm",
  "key38": "5wGNVUm2F4T9cwuYtktY6KGnHwei6yup3NujzqzUEtoCN9WcDmGkica6mqTM4CxMnENc33vU4UFMFWG5bnu6UY5M",
  "key39": "61pg4DRYKmJHQPWzQXNimAHj6VW3SYdfe6jHPsgeD3fpdzL7Zsap2ve92aMNerUQLpWvWUQSqRbefnugu8iWx2kR",
  "key40": "5xdRyAiFUfzNnbGAVM2fif3Vp17yxDK1VjPejShxrpgFw4fSMBTzWTcL5DuRNHofdh9fYpi1zXa4Ma5qkgyphmmU",
  "key41": "5asYmgGitxmq9q2XjqmwgDxwZiM1Q8e4X5Vn6T3RnEyTzGKkVCSNBF8D5LB6KDuhHaRuaMFXEcbZrkjPqkvEkSNK",
  "key42": "3LbW1xCj5YMdQueexFExyvL2Bb3nNne1axd664R9Z6na7iAoXoAjFsbWPvAzoguBDQgcunWu3oEAz1Go7y4D4aFr",
  "key43": "3CkKgrncam1yK2gpNnMqTFKe39vWLQhgfwdHvx651csSsLGkjb5t99SvnRhgMZoV9MHJs3YaMx64vV1xfaZX6Hyw",
  "key44": "36wK4WZx8RUdsh3qZ85qwCZNEm43tk7MLAQwsYTTggJVBYBaZf75ppANaCifJC5nwTTF6dEJdLNSo7Xx75Ls2sKH"
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
