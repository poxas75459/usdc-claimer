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
    "3uHrRkd9eJD2u5kvMzE9F944QYUjjRyidoc4cDCsUZxUCU92atU82MVV9T955ijzzohaiAgHj3WXGKRoVdqhhSJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HkBm9VSdF4kzEGrc99qMU1vcp8pcpMcvxr3zKdfjvJW6ih264svXFoS3dNuuLREeQ4s1HXbAfBRbExSxR52v2pK",
  "key1": "5X9CCDqbK77xTXmHJrhuDKxPZFEjHzMsWW8SjTmtoHX5uHjkHqDz321Tiz6mZNi3Xb57rU8TMkR8PC3pizbRSk72",
  "key2": "4AFfrA1uEXw5snUoESprH5KdqdKm6YcszXENYUK3isJRSd6p4ebcvS9UPq4CWrdGq9Cno43HkUdX4GvGF8YHHNYz",
  "key3": "5auSVAc9pvFwQxpN79J3xjqghdnCLqApYMK7rNs46VgRXqxopqMVyMXhU1XLUy5g18T1Pvv2qHEHKuXtdnxXVEeC",
  "key4": "54RSwCkWFdpoQYgXqTYWnVMSu1G6YLbeRcSyXa1Vxcc2BGCXikp6Wu2ftMdLR4Ethtg7iHUCh6cqCG4iW3e8Qx6P",
  "key5": "2LDktD9AVryiAeaNSwwFKMe2j6quz3o3RKZNwDGpd5X15ATowwsjQM6HZ7nCkgwJNSDQZ4jwJzXRYWJXZJzA2sEA",
  "key6": "2JWCHtqoKTrS3US4KsQpvk9tUWLwfdzvamsJJirEStUC6XSWSj7HAidqik8ZnhhvASGUJjv45JRadnxSMFFJvcnk",
  "key7": "57s3uZCHGKzW4T1jzjHeXqL1rr2saBProVMPkxDa4Va4bsvG2m1YzWCcTdw3u6PENjarASVj7ncvzX4xCqaxpDWv",
  "key8": "dDLcDBjcZD4gKgQdXGL8LYbjhWbTrNEEPGaXkyKVCsPJZa2vNLR4vrG8mFkg7Lv77cXZycjozpCRGtnyBGCq9Zh",
  "key9": "2o7oaWr55Fm7wDGsjnHBSUtbiypw3iG8yd3vmwvAkhCMC9ZmMgcxxu4MGywuESBuqHEAJk7RM5AhSDQkuGoBc9yn",
  "key10": "59LJhZH4Hw15F8Sa129VRzDkPHKPzQyMz69XfTp6H1zNxvHvPzhnZRBv1zTvQhusmdXVf76fDA39KQxvkHTkW4cn",
  "key11": "3MCtT3k643KnFfdkzGbGiiUMSYEgfczFwbnLW4ZhRQWKfEhe5yMJGXS3VUcFL4oUitNwkYMRBwx3GHG58mXBXzwP",
  "key12": "4pJyzZ2vxjZwzueKS1ZgRruRoDhi5fHd3K5xCd3YGc1aCxsWBqVRAe76J9TfY7bApftWKCG1UomEK7WhX7diNSwh",
  "key13": "3LfUdBKDmFJBiLnMWArhR3XNcWZjRCiM64uCgfY1VXmUm3qLi5Y9pumidoKx2BaYjb6aZXdD5mYKkP59EbwvbyLW",
  "key14": "ExkYdCcnakHEnCQ2Yj7QCRKc8Napnym1tktpUvSr1Zs7BDShdUuJ3hN6kzq3t1jpo3WNtUSBwBqLWGf3t4KyXcn",
  "key15": "jkfcRZs4fE2y4GwzQLFpmDWfKFpzsVioiyb2L4b4jSckhpwuFmCsKVEmNhbSkGQrXZf2mQ4XttvXwDw7mRgf4k6",
  "key16": "5bwDumSfuceoUowxQp8HPy6bng695HtZxjmy8nqyLZ7qJKSri341Znxxvj51CgRjL29QTEE8DKWS2aXRUkLQaKHU",
  "key17": "3veGMk9KxTnoJQ41qbct7KjmgFg7GbhoH2D7rHZhoFuB7qkUqyxhfaYcbPjTvjNW2QPgtXqtHcUJaeVKW3V5Q2WS",
  "key18": "5AhRLqgukz12BBc5h4QsbcQoFERaYCvQjUJ9sJ8tAjQGryPUuz3tDXNLsV1BiVSdxNkrVPKhXdbn7c1V8WrWCh1n",
  "key19": "2iZnsN2zGy7r3ix7QsmUnnW1fZ1JSg33SbYSqFnY4x51nKBJMN4zzRno1hXHD86GfeuaxsDACteFTzNAMcDNiUHK",
  "key20": "2EiZ4DzCzQs36nLaiLYR1KhkrBrU19rNnC1422WB55WiM8oGqz4TzkCMBsuXKrDrnrJkZNjWZ4iZKyrsj4D5vcwL",
  "key21": "43x4dgLTfvLcbTvoqGNyjfcXCBUy3XP1YBexsiS6M62GFa6XkYjof22huX3G6GtgG4mQL3tyvQwYF8rYzRmGoA5J",
  "key22": "5CYk5JEByVhby9cz2HeyS56cyURAacVs7QyhQqhdakiTNavyZZM6Q7h8XunVpsdd8y65L1NgKKjpF5aGpWwfxNtH",
  "key23": "4aZFfXvbYxzDJzw6EJc7SF3hVMCtSf5nqdtJw52b3E8wF15bE3dqBjUNXbkgAE7XRZyt2vFCJizP59xiyKLzAv6w",
  "key24": "ddwxCZYKoEb4zBdzYKmgabZ4B5RUyVs8gXodswZBhf4E5GEwwjJwg7czntqFVNJqzQPjvA3Uztgo3KiMjUFp5ZK",
  "key25": "2vpFhofQHYVfpv4kQdrpHYqFdqSCR7BuLqi2nv9KnjSSXnTua96tdWsw8YDWzefM6sQjF6WCD8T5FU1fAQcgXxoH",
  "key26": "3hpDo1riod86s5dMnJij45HyZYFscdrqnwwNNHYLVvreBRezJ47qEkacZD372JZyw5fFB2miGmi8L6ZBEBVehSDo",
  "key27": "3XCw6U9WBJ3NKbcBoYaSGY2Ka9DKpHN3cMoQfRn6myQRh4MuVEPeGc18g3rxcwx7HhHZjbafThaEtdk1Bp1oLp9v",
  "key28": "4y9BUBuJWY8gY1kr7xCCyxX1SFbmjv1i8Qn1ktk1ccR1Rsyzu8Mm7tG4hrPvAX8ZdDKF9M193122vvswJXdXaR5h",
  "key29": "5ptXt6SYcAbb2NSydqkfU2VXFYgKTvywp5zQkUSwfVxggx5fcF86RKufPBRh5PRAR6uUSfaeH5eL43KHXCbAkczL",
  "key30": "AhciLUVUhBFHkmeZYLwyTjFx8mBmEpMgzrpKEL8jbaRjpnQsw6uAadQ66x3oS9egLjXr2wH7tBd5cw7gs3kxtmD",
  "key31": "45AaHNS85CuXKapnjc86N9uPnz1gBTQQ8De9J8nEJFuBf1JaXBdRrMqcvjyZZjNGWxmExbgKb34E4zMFpiN8WCn9",
  "key32": "pwbC9NeFn6P5GU72DHkwCNU3WYhWbtDV5qPzLEtbcgZ7QdtqRKPEABtdgMbsjRN9fJtuJSsRoGA72KSbkfmi3QQ",
  "key33": "55oRvur4JShMGVHHdkEg9rkXLayQ1urXpgCfjMTYBhioZiPGYJWvQ3HtmdKsyCrR65zofunR9DgpWNGZbWKDaGfs",
  "key34": "46EhDWgqCXfwXkqJ9RoocMj5M3BotAfuHtMztCnFjqsnxqF7tAYohBH5CBwiy3jNj9CrNipymHsecRwcwYJ2shRg",
  "key35": "XRDg38obSouHHZKXoyYX4RSP6z5oLdwWE3xaqH123PMB7hX7jToi7sgJKAaTZQoMAJNqQQWeZ9YiCcFQyMGasci",
  "key36": "3mHakcq1dJ9bcngFkGFJpJSy4kmKZNKBzps3CSjP9gGHVPervBQBTRMpyoYXb4EiyxLf4igHxPMvnqfUTdomMQn4",
  "key37": "5Gdg8Jc4S2mDyAYAe26uixpbpo46QZDoto2ySqVNrBgfsqDxLS8mCK34vZ6rjduPQVkh4LoCTL5DaTD9UhFUoBY6",
  "key38": "2cjENiB7NkvyHUFWSue6whnWTzo6sp11K8AxiX3XhfCN3P96Cg312rzUPFGFfhCWrdrKEbM8rGAprhsKNQNmR8wo",
  "key39": "55wUE2JdCfSjcitLbtdgM6MAzaMhQEJ3EFA66yZGjT2SuxoszsSgok9haDyUXPjBvDprLFL2FwMCFd7pGjCDrzLW",
  "key40": "2nLDrkYpzJKHcJf1LG16ehpC69wTE6XRzufprV2Y2RY6znk2bQjN7pZi3ijJfKyydsr8q5Zet38m8XdN82V6eoS9",
  "key41": "4gn5WWUnTWq1ykYftV4gQZ78hrZN5jgybEgrYsZFhLMtFL99AedHZNmiphebSVWShQdH21Drgotirm1TdS4UGFXo"
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
