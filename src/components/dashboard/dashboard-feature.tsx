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
    "2e8kw3mn7JabCmgaVAgBz8pYiNWUB3sa7AFVby1UnJajzqQBskK4ZwKqBeSySPHW8aNr3XzUAPXfBmrdMiQQyZtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JF53262BmqVhuEtkVqqHjcJunc4ePbJxePxFeXihLb56aBGppxbYaWDXsoYDLkxgZxPeACw3GJ8Uwhz6DYhPnX9",
  "key1": "5ofKeMseLRMNfgGWSmp1vAKsuWWKKXxad9KmtjPinxAo6gxzmv6kjxzkZ2c74a47JjJVJ3SRLCDxxtfNtYMSKhyH",
  "key2": "3WYaber5kUoCQ9cLKxKyGyF7P2JAYE295AaNaqFQYMiHgopJnr8Tyw1uKF7miPk7GZj4kzaWdqZ1FBgKYBU7mSzX",
  "key3": "5GnyhcUBhgKd7S5rQFqYFsYDjkZMMe1iZX3C9Jw7AW2u1WVPZcSQRy2vV1BkyxSU2Gg1U1xuRzVrgzGNjMU7SZaV",
  "key4": "2rQqXRg5gENWd66skQ2vYDvp5WAPGKMwDSG9MFieF84YCjH5XSWhwhEF4w4hwo194GNAq2F3nvjci8FiJDFVSUuQ",
  "key5": "5GmiXsj195yZZssbxZVQYNz7eqEjaxP1fAvqS6ynV4cvAyiPTYHhav5YXfnuHiw47xf1adNA8ogrTqf1LLBMWuu8",
  "key6": "84Q5rUStA1UELyxTgZ5gydSn4Y2DRfkGjFYooroj5ip4Nbk9ZvfjFkABn4KvT7F44FJkzPChd5Kbx5KvNprcuiD",
  "key7": "3b6GjBGwF7ar4MwMxHzNLMggFmCSR2aqbgk9VzcaRFM3rzqNKyvyc2AY1LbhwbHjVJ921hyKPvqpHQeys4Wzda6e",
  "key8": "24apRW1engwJHCX4tNwhsov9zCCCURyNUxfGsFpVWHUazothRXnB9AeHAQRBurLVHD3kvY4LYCdBJjgk5W4VBT9f",
  "key9": "4xJp7zNP7roxevKUpzF3uoYwBMTQ77RZzXBw81H3yBwhH3TyKQHsMvjG8B1yxnqfdqN5uHvMg7LSofZdDYh2qPpi",
  "key10": "fsbcHAQ9uZwWL2ugxRFzGTGk3yjF6nSs87bD1FoAbgxKkBo1WMP7ULZr6AD83UABo3iHY7fCXQr9Vkn3zfqbpTr",
  "key11": "4EDRFr7Zv4m6Cu58gHtBGwuCw7rY8Ft8MnFMvAtZeRpg7SkWe3mgbEzTbpQ4PqG1ZGtSLVZmwUd9kuU4fRsNV9Xd",
  "key12": "5GatYHo7FzYFx6EUhyLGk9D3y9jTqyDKHmABYPepxfnDXLhhY9DRBrLDupZLRkj57v4gzpRYP7tk5CmMUqzXLWxd",
  "key13": "5jH5KrkKNAvsUxDKVGKTfsKGN6YTdwC4sExWrJYASub3pxGKipEn5bfwoirPAZR2E33AvjN52SyGSENY6xDz3Q6H",
  "key14": "4SjdyWSa4xuAMtDdQjRCmoMEaRDmQYb1wMy1Le1rbPFzEVdKSMn6K1wSL1Lxv3qort8MQGHVTWGsybWH1d2pMZU2",
  "key15": "3UehenRxk5g8oRfVja2xpEJSSv7c5UQcKkh5y9mcc51gfNQTgmHA45GQJyzTD692tvoUQVa3qyU9mf9iqd5r8SKn",
  "key16": "5QgyaSvhM8wbj4bx4U1CBPducBVvJLg9zQAowHBV4LnWTxBeqvJ6jDdJdpk1Xtn2ZgiHf1NF4JkXSQ4m1mdp7FAN",
  "key17": "4uqYLnQv89aaybAH2Pfnx7mp3bXEUmyZycnEHHJ53uLkFFiTn6KGfH6ZRBdPvVXjAe1sVdRJujjLv8B3JViJBGXU",
  "key18": "41gL799t9UaApmyUXz9xPHPELT4nNTXoSgJSzekq6BqFmBsHnpQ7hgiZa5NBDtB2TqRtDfcskte6wVSwZHmod8dW",
  "key19": "5v4dvffqLjAsL3T4AqMskYUFxRvYUQBoFZogGJQVRWLAho4LPL2pp8DcaNqyJEgKmJ9Zw7EcWEUKdA8RSeajggxP",
  "key20": "4nANt6jiVvmxyypi1zgrKq2atykg6XyGjqdcWpCVFFyfodeUVXztVGR4gvJm89zSJ2NLKfohFmC2rCQ3wb9uBWK8",
  "key21": "21SYrahB8S3GBMmrWGMsp2gfDUzf5nvAdVXeTc5CDLssD9H1vuvtRvZHV7i3ZP5tX5FiDs79WWdaQYxqf99xDTFb",
  "key22": "2F29JnuA2VyygQrBq23ChfgACbWEimQr831d6tsfMW2SdPVS7WVEt9iNqUfjqbkE6ShVaot2XaM1jUoQBBTd3LKF",
  "key23": "2zEGLQPd61ZLxMANr1mnpe4PmLKHkQ6vuwsrKU6bKaUGit5acahVbYFUC9o4K222pa4z1VfJC1GL9ZnsSaJpNxVQ",
  "key24": "5gkcoLkSkdhYQjjqmRMw3m3ZnzXiND72wLFvKGwyV4Fquu1NfrB6io4G5qwq925AUybdyok1btBx2b6wNHodTks2",
  "key25": "3G128cB54V9KLKKDZUGq1hqS6JERVoBPKDXbf1S4HQG4Jo4c9bQEK3AgiLii6CMmDP2XYzFUrx1Ht4dbihGGDAey",
  "key26": "3rB3z5XMCUeKGryP4G69ATjyGxGkUCF1mK2PuXcF8UjPXKEmfZWyaHUx1jNDpWdQ2R4ZC9BGiMmENqBJRCSZfz5m",
  "key27": "3rLwFzJSYGsQcyMhDS9NG62obYasnnrpEEGHSKTDKTqiKEV2WE6VYXx6HWf7NtrMGPnVHeuypeUcEAAwKoqboPN3",
  "key28": "TixyuFKafY6jagKQjGaxAnArbNgmuD3dTiZefRq3SYjvSNi8vfAFt57p1P1qARe5yD7g2eBnw2RLLrpG8iKv6ZQ",
  "key29": "4VBQp5JUnETkVE3CwueEvde5NCK13iGbjCizRAFiD66hmY6xALVxo1NqapWcoQzPLjDjd3S21TSCm4Uqd59kpJRQ",
  "key30": "46JqEZ3n8YADLKxZrZfPNs6RH7TQXDik7YvJuGKKUUX4f8xLbUQEE67yLGoG9DSG89DNm1RVCTQn5Qs9s9HNoX3k",
  "key31": "2kbbzAWPkPoQbUyatsSdcTiAYD4vKK93FYUzcg9m9W3FeKCW6yUtXx7N2u7eHe6BKNeyWpoQFqkXFXuxvqnUBg2x",
  "key32": "3SeUCDYGhkc11Vm6UMGM8BwvcADR7ENk9i2N2rCdnWbqa4Zv22HahPJw8Sji6LLueP8ARCQ1rqckL3bcFBMU4zm4",
  "key33": "33zbix7AorbZxxkPKGtbkHFJAtexenZ7RzX8ECCJzyK1WVrtFV1tnPyTgEw3J4Uzhp5dPCGkMU262jDBkteuZegq",
  "key34": "5Rw4diR3CzD5o9s3qk83e8q4ZJcj533nKoZaGc7Wn8fkg1o1mhM5isKTnsRQY7t4z3fUJY4kaA5PU9t3ne9LXtUo",
  "key35": "5iXuGSj5FofdhoH5pFNwR3stfCmyG7agSaGBWBhwyumubqN8U8vxpzuq4oSyZyr1n9PRUbmPJhrUcWb6cJNPuEb9",
  "key36": "5ekSst1173XmdCdcF1eoesG1FgSYk3D8n2rCgqV4wGqZAvgQ6Y7Qu5FqwfSBK54Ssm1iETgDbvmubRQkTbXjNEHg",
  "key37": "phvAtdYZs31ZcJeNK9ZHqzE3dchgH5fmGxh6NyUQ1HzhTvzbQze79ErocM9JU8HLoTMV6CLYkabaw3HB7u5pJiK",
  "key38": "4pKVKZJsY4n2VdjUkZ8xtuijpxA42hg5P7tCPp6oV4A6JvLUKMH34DX6Yxj43s8McuKLFPmn4u9v6HJ9aiKzNi3x",
  "key39": "KMEENkQZaT8Xn1WXJ76TzZju1w1XHFx9TygWcAub4pdC6cvg7Rco9taRpUjmbZCN5N1txJShuhdVvjhZvAJfVig",
  "key40": "4xqtvSemLKBmSZasaQfVhp99wzk72AhrjU1KDrW8zxzitMHMMVodYLkHhPweTjxASYEL4o1oJFErqihvsqK37XZV",
  "key41": "5HYDxLHaCoYWNYh2JoKM65SZQiGcmETzaxb949Ke4JsUEYZEAijPHe31NVMY4H1rxe858gGUV8nKUGJZNeHHucLM",
  "key42": "Vg8557t6xdNSG5c2pRXyo8QZy2tq7HyYeJrydGmyYxzNAc68H7b7tw4pmivttWh957oMfGd7sNeuB9dG8EiBszd",
  "key43": "3oi5LLFcnmJBVudgFu9RPEGSmSApHdDHyPhxLJ3sU4Avzkxqj9pDmrjxCzSqKZGpo5VvkQHsCwkPmVqZvmFdg64A"
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
