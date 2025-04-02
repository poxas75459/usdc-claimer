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
    "4wmV3c1k7aQwgYP75dh3fXmjKavDowCCsujYV3SkHQshPdNjj8XTCSTdZNHQur3jpSJwW6gWjb8BjrnKtGvbXHrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46xP2XSmziBe6w391x3uy3EHTPFHRTEmF2QxSHznF7GwAzkfkQBmRiyq7erkwzesy6niaLjBJy3qZNHvhdCspSL1",
  "key1": "5QcqV8KnnQn8TycYLt88w1C356CdnZsS7q1aEa954gZyCv6nUTeAExQQP1JoSVDQy4Jcg8oEUEpEF9bbt3SLFaQy",
  "key2": "4SNXjuSDpvc3YpUKrzYpu8PprxcLJGxBA5ERJzU61zACkMcSQZwg53KbTKzdig3GD8cX4iTSMmibGfcou2nmzaGJ",
  "key3": "5eaZ2o3HZfv3XjjU6oS3sh6MtkBZiwCHNkQSgCh19972UjFk1oVSgftYY8x7w5L774p2NfgoRCKuqBdXY13c3Cw6",
  "key4": "59PzxwUCpGcfbSNM24YVwhU86omCcMEkyA5WkGwzngXPVbrdMvg6JsB68GHty471YiTgPUwibpmzw9GQuAhSaVNb",
  "key5": "ZndB7iRpnxuMEcaBu7WbBG12B3dNegVPmUVQjfdd9VaLdk52QyNNZWE7GBeC8NL8NahRRwCrJjgMVqnE9F67mzc",
  "key6": "4UdW4M97KreDSWwBWSfHttxtJa9wzzo9eX5hRkstFsyPe7PFgNJ8thntGZRs9vV9jZWSbLbdqVBsDbEsh8H1c3yM",
  "key7": "aEJtNrtBwCjzHBShEm7EPFAQoGibWJoJb5Bor34BBoZ6HDSAz4maM7ZL5ehwonNpKsmaSysnFGDGgz6GteWjHbJ",
  "key8": "TJ3GJ1BtMXcaGPoNuqHpz5xrv7FNVBxma1UCTkZh8DGGxo5n393x53KcCGiTxPjScgCmEDVEP83efcMrMHThFsz",
  "key9": "jyLuMDs4dHUCfgEytUqqdEJ8XwyQz4ABvSbV1N7Nb8xmqgoSd43FxZmAyXH726KL76W41VAnXXtzYsqvwxgfx9a",
  "key10": "5oszvTe4snoEVVP1McM1BXSezkpiZtfdAwvYnYWLwYVB3t8wNCxFd4ew72Uf78PvTBF6PmYd15hNjvtHcSZvavKm",
  "key11": "4PnEYpEiTbk2ZTSrhhxpiRHVdQZb81KxKbdqqcSdqcAHVCeS4CpNwzyroE6Q2eFHfpeZwXwQn9ZjvAvzsSovaYUU",
  "key12": "4zStkbV4Tvj7ULmF9d2QaxA4ad1emnL5GFrdeW6sagAcGnWanfJX1zSa5VdQzq39wPNrj1t6FN4wxtbsjL7bCVoa",
  "key13": "5ACokNNzxXdfm3XjHyYLhbvnEqBB2buGNWx9Zwvgoxy8rrSCxd5KbtFzYBr3DZs3qbnt8oBgmyi6x8EGqSAazud7",
  "key14": "5Q61Nv6H1fcwboHpXthdunDJiEDStXnUnHVTxyqZWv1ig34BX7Xoiwxr1anFWi2EcjNsTLHB8yCuxWxUHNUurzXu",
  "key15": "3MGE9T6BEnxyF6PsThohq9H1CYRpmbPZCaWtF2fsbzmKM5KbxTUtPT5qGpw6n2LVw47tsb45wWWbspDNVts7hxXe",
  "key16": "bisuo2cp27UkKqLgHPydWXvZswUhmHvffcivLeXASXVBrZGRBZEUQTCe13fxefCtBnk1VCjtff8PxpHdsx4tchy",
  "key17": "3aJ5ksd1X7nQZpPdQciuTpJYunRNMSp1C7dRSNSyMjbmECowyF3Scx6PSZNryvEjYmtydD8gYW1jaRd5kkqReLfu",
  "key18": "Q7ykpWnuhLPomNYiufRwdvezgHWXfrF7FEGMHXWL9NKquh9geXWt5YCdQzrXUQ1C57TwMBuFajrs3LJBrxE64Hk",
  "key19": "5x38YgZZNhNEypSqP7Szxw6jGUo4KWbNmCak7CJEaSqvVxJETQD93HwKy6aJ2zeJvJE4EFEVECHgiAS4ZGnXWYg",
  "key20": "31AZrcLhp5QufpvcbYHW3tG6xSLsecZZdQqrLtshW1hM4nCVnxyW54BAu3pjXuGxPoogUJG3bBbeLgYf4pqqmPRR",
  "key21": "2T8KKXYkQ2AJPs5NM4NknuPahxWtJ1MXqjWEdFUW9r4eYfBmMaWEuCCURe7pwFBUmS1T5wYNcRHGg4dNnet8NZYF",
  "key22": "2d8DqSc5pzZAKqBpzQd22GnkGUW4P5JGWj1Z5dbiqmvvzGVavR78JEgg37Yhn2LPe8XuJZdN88ZUHSUKmotdL6B9",
  "key23": "3bxbKdYMydgkWdE4rC3LwsGW6mBp9aA7PZc3MV3ZYfv3i5WY3kQ4kgrf1fY33uPjS9K6e78m1RsHmSNnSsaro6Yv",
  "key24": "65gXy2dVGkQ6EspcXcieCuY9Wjx7n9Lwk2rqNkhhWa66PqsB1gTQRksJsazySN6Cy8ScEFk2W6WkNcqdVWKrhbLs",
  "key25": "4iZXSzXfWzYpFzAawWxjD7nW5HRmNFoSXzpCppM6nRR4wSQADS8oMPJPh9xTqjXqYxXqQAgyUiYwfZFnT3PxpUvg",
  "key26": "2fsRmR1Y7TaUTqUMi9zQqgB4Z1PAVT4Qdzi1b9QwT5Qk1fvNyf4gPuEJYJeny9kSptyTqzJnUTqoiJRWHzdouL9u",
  "key27": "3QMrkBNiuC2hQ2f9Zjz2UFyv4cvFwfSrPWJH2tSqowbQp992M5fyjkviVkXBYp3qjzBYbrGCcBdffZfeqsoC9xtQ",
  "key28": "4Ysaq8e4QPwQPXMB9B37t39qzAKMZ7cuZaVrtKFryPU24Wwza3aC86mfSMq6RTxnzufGbezTgWyxjnFzQP9kqM9q",
  "key29": "2TKFomD99BDCnzEKv7FRJGaeApJvm8k7BPfRyEiWmC6gKVzJSxCPLFG4dWNUCRSc4zq2ax3yVCSAmSK5MbEGXbg5",
  "key30": "3RiH1avjiVLs3hA4VjXFvk9DBgct1f8ZmeDcSJ5H68SD8uR2kbuzLPduqcwA4ZBSy5n3EPmvTxo77cD5ykBkPpku",
  "key31": "8NqrwuDsrDgLRTQiTGLwLxwczpHogE6pCLyG3ExuK1NVs1mh2kRN1p2oCBmyQcrauc3URHpbkkoUXA9JAqjRuZb",
  "key32": "55Jfcf6qv9snysrVejBwxD5k9MKZh9ScYf6PBJfkCGAG6VoidqWFwGokk6zUVVz6ZMYqkjnykSqDzzQpJvRLrK1p",
  "key33": "43261nCJpUtY4NqJqXT6xV5pfujwGWxahmwnmVezQg4PAxfHXCKBTRLBF3bpPrGT6rmkP4VuV4czRyiJQUKJ6hKC",
  "key34": "2SN1pSCW1ZLssjuER9cLAxypYbBPwLtHh8By9ENAbScJ3irJ42YMxqQSobvRbKcze9pVrYMdYK3go3pFxHZCc6Hb",
  "key35": "64E5YNGs4HSHH6sVg9BuS6rBvCDB9jJR4GtRARDg55zrNhKdBpwe9HF5zERZXW3uKkH3dE9HtsXbuVjp6HTxf2km",
  "key36": "2dbqghyCbxps85n4A9sdkVj4mps6BNkWpyCUJgTtCxHTwJsgJqCyps8Sb2vdALEeGj9KokJWaypke6qXAs3j4uNE",
  "key37": "4oshVsfP8mkN9wJa1gdRG9zdF8aNYWb5gc2V7anNDxpurrM8CFLxHNSCN6BG19pFRbQaoJzt27FVjDRJcuqeYMHz"
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
