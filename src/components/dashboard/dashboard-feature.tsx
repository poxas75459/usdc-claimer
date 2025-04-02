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
    "4SeAbcVc5z2yvmyrQh7HPygqfQFXSzkrScdSbUyQEwHddoGhExfPJqHMpxUpupcc9AEFcUHNreP5hszm34eajhKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f8zawNe41G1HdaUC8ZvkPn9HajdbXzZvGuyi6AxiotXRdR1MS9i7Gc3rLq6vUaJ9vsNNCoFViYPFSE8LyKFqMQ7",
  "key1": "qsbYBfTJ7j4BrPDcMbAozkQrHo2ruc35c1U5hVga821RZK3inp8qUQ31BqRuC7fiJ1mWvzh7gxoZ3fPz9aAmfih",
  "key2": "581CnoHvCDo7o4X3PpUcWVSif94tKX23Ajfsyj6phCnE8p7fntCiHdeLbSbxQF2bAppopRVkjsmyAiyfA8Hb4DQD",
  "key3": "xzQCPAJKXvQT7vbCz4nFk9EPAnA8y1VqLXKSbnuptduKdkkTrRE74azvQAgB7af81g2QRVsy4b6fGUBvnN288K2",
  "key4": "5Vi6hxSKb9xmoib1fUc6DDHYKJ9Ry9mdSadefqGJyBbABisvabtZpbAPjbyVCi29dUNTtxuaLxtg52TvL5TR8DcG",
  "key5": "3gCZFyX9adJCkSbBFdffxVkGrozKh6BTmuuaNg8Azhg4BHigi5ppfUZsaRxzqJWee7Ffj6yBoWwT5nryuetvG24D",
  "key6": "63w3Mqukp7uBoKY5eLGk4botJ4pii71Gq1K8D8H4xALbjj3eR57fvsfk6Yw7fuWb3tnrQVPa2GpzaR5V8nqUKR3A",
  "key7": "4NzMo2yU7vrn8fdUSZAkhDSS9bgwei5esnpaEeNGT7A1XyGboPhnrYc84mb5UTdmbmjv7n4ukp3ndq2mxrkcHrBX",
  "key8": "4dSxf4YKcdkQj7gnX2mkDYmDk6j8B9MSjC7Tf6HaZA3ffqymKbrBgHJJkdkCS84h8rSNpLbFohsPDsZXavSDSLJe",
  "key9": "2pZdNRp2MTG5yR7ju18kQCYxcAPhdsmh7Y3YHs1ZyiXbh9bFLqeMTTftaZyRK7TNfrGvqs8dtyX2pBkpZkKx4EEB",
  "key10": "2GH7q4xTfWYu3AxddsyBnc2DmweGb5jhW4GxvEgjqw8yNGjr8W9j4zqq4Ktv6FTTVLnaDehcmrsaVpMeQDpPc7Zx",
  "key11": "7XfVjEEKwiUvtsq73Zwo1J62T1zrdPwiYMepsoxBLsoQKCuKvJmSFo6LZrRAXnP7oEnB8fVZXGSkoAL6kLKHYPM",
  "key12": "436hLGYRfasfX7n67mmTXny3eWVyrHxkepLfg7kSR1bZzr3VNfC5SGso1F7aar9NMYmBRMyiB24yuMEoNeAsabEp",
  "key13": "23U8fkXsPY9cSJythmzEjv3jebjeUDDAzbCKNX1eJYE3m7DCE1vCvrh9w72YXiw1j1akqv6yLzqPrcaqYZ8cQYBq",
  "key14": "2ufoJfVhUqBmvMQyZKRToBBDYWFarWdcox4omdmwwZTfZekua96dwmjrumn4hsGYnfq7ESik8gqbj38CqCw4K2Jb",
  "key15": "dacr5nXtvhPvAoUaejMUrRbfnEXeVHrB8AygZnZJun5MqunRd9wZBhWgUxb7rTuiUDKkdg6Ht9YS7hd1RiQeGfC",
  "key16": "3P1aEHmnyPRXcQ8nZoEEx5pqvyRWA7RPAWTyntbWhDQrEHsQAkG2RKKdcbEmaACoPRD26R8s1mFK2mephzETZ1k4",
  "key17": "3JBRVt13iDV3YSD9f76GCLP1gauRMqdCL9375T4wSkhpbka44JNAL7Sa5FMMF7CBZAnoFxaYesoVU4jp7SE7z6dS",
  "key18": "279omaAiJnwShkz9r7wSdrD45kcGh6xorUTYS6e8d9qYSL7ugrS2J3cGfbXPghqsBht3LHox3u89qK2N4TXqr1wz",
  "key19": "32Z9V4DRjcpY4Xmr9LNXPReEePeGw2fq86mdQq4BSL7ivNYMu4gbmXbQTgocvNeJf5urvYpLY6oYRirBCVNHFogF",
  "key20": "5P7ouDR4jZh3T546ZFDJ7dAVJMFRcztq96tcJEFTzMKf9rptbkUpXdoTu7qxaPjzyrsszxrcZgViow5KDbQt2qS1",
  "key21": "5QLxQirnG6jvDXRrmUmBhUKGgxdy28PZfEik3UxhBJSya4XYHqww7gm5EkD33jK579HDCMzWV8EUn3cXLmbGRQh1",
  "key22": "3mcHZT1rwLo3YMZNij8zUpgcZdQ85k3LCcZRMy2S6HbnZQLxHETtTfvn8x5cVhCr6QxyJJ7bAKTQpFuscfLDzvz2",
  "key23": "2Mu8j7nLHhauZT7nwdrJaSgfnWueocqvXHnD5uC2VoKdnJwPQA2uJi3Y8zJxkHKDpJ9SnmNCiLiG54T94qSJ6Mnn",
  "key24": "s4ufyuHu2qFFcGvYt1uvTN957dPAHYE9FjVzwZJwCZYQ1BVKVEHdEUDm7Cpb5fiTKJZrwvzfpYfyzEuESvF8Kd6",
  "key25": "4Qm8f11FyzbmLdQsxZPK5xcMx3sHjkX1DT2syRBE7mmu37ys8NCQGPQGDqdFWR7nW98Fwx4udeCRg7bSLgg1uJfv",
  "key26": "4snJFnGxEJP1WBhNK5Rw45RNYJMxfdLazsVUyCY2hngqPJgZcV2QjKq8zeES1EN6NM7e3M2b5DFwFEw2wYuGXJ2W",
  "key27": "58KwHcqAELokeDaLpZ5vQea9M5rNN1PykTakFwxC2D4DetLfeXK2n8g2Bwo31SMmnjHymitKvZZm6QffCHhTBHhL",
  "key28": "3WUpNuBJCyeBq2ApJc6YYwMTbaP6CPKnu3MvCu4wRTBoSesCH8xHFtWxjmmNSq2qDnc79GQnjRxtMzb7Pze2wSxd",
  "key29": "5N9TcmKbaAWdnPbjs5rUyr8T1qSguoYbq2aCE8Yi4q7kxnFVw5ZnkbnaFmYHhVjnW39XxbYueyYpncQRJNzkTndj",
  "key30": "4frWWpZEE9mxjPaLjnFFsbG8z6v5kxjWsqY2ayYaSV94uL8tZkzMy23SdVeoFDrAEsrgxUtUpaXvvzW9QYmQtic4",
  "key31": "Q3YYhoGQrEqtcz5MACZxxcXVQinN781gxNo4TxSuDPZv9RLBzf9BUSV3UtACjePSd87DXNiYmGQukK9tyTqyamk",
  "key32": "2Qx9PYjvJToYqjroh8D2ACeXSN4dU7fGgPJbCBHW4Af6ob8rsvNyLHAQDmLxRkVttk4a6zqoxQ7wUbFuLR6M622S",
  "key33": "3t35ZUUfQPRi59e34yb2HL6KjQ6LMR2ZeEmvUAYg9XuUkm61rBcUxeAeSA7NijNRZb7eV9xxs7FarxHvVUTtPNSM",
  "key34": "L7hJRy8oRvbTzJfWMxYazFRcKCiGGx7CY6u4XqMsFPoJsZ59krWAhVs93SPHxPdFcjToSkA1gLEm347kKa412c4",
  "key35": "3c1Yu1HfoyhGtWyF9EcahwMQDLDsa7oC43DSebasDWCqbT8GRnYuvjuFFJLyRKZNhnervsqM5ApNbxaavALvxTfn",
  "key36": "3ENzDTjA7VFYKyfhxAQ6aHNfgEJMM9VjpYhiZePuY6TbVANUZguwWNEfXSutxUGrvCYk4tiVjp6ENKbHEn5woP4K",
  "key37": "61LpMhuAimqrmX2doN2tA5gEfb3677BTTqDdvNTAoK8TWamyyAXnKruMyeAMirWyqgFrhuDJTqMUBxNsouh7dASH",
  "key38": "2TQb2YwG88xAeu5G6JjkLgLB8rsNYvR77kThAqutnSbsPbRxzLfj1JrStWgkvCWH9fyc5fEs3MzwrS1rhSBnzbkZ",
  "key39": "5NNbrkvCyHWHLVWHk94VYLEG4EGZNaaGeyC9VbuJPq45ALsTDem22DRgk9PgVnDuGaNVnhBMNHQLYpib4ybAxobp",
  "key40": "4szEMnRjZW9sASkkvt3DK6yTUQXRgWxSNWHtVXdVwfYBGKGEzkzVuvVHzaEeUnCLR6rtcUmSGEzcBU4HPuL6md5C",
  "key41": "3uqgrZQFN4gVzbqWzTfJnirVGxXCW6HHztFHxk2EkEwX9B4iRZ2BLBmEaFmQJV2mqEXgTzpHPDYaen3A3sFqYQYi",
  "key42": "62SN9WBQ76WQkLYViowHEoBFk5rGXa1immqDVKbEJEjgxfGkTFimWn2kcsznR5jvfuUnyHzWCWeQabJCAfUgdttW",
  "key43": "2AcmDYFpdE7trYgv9aiySdt4Y6SZAVBGqMGMzSGHNAHcWBfKL8GfazpVqwnbSaGutn6vbfQvD9m6Hp6ck56Dcg9z",
  "key44": "662SdfcmtJfFi6EEyeCsMB3PrT2NVLuupJib2JqwwyxRzCt4e6NpLWjSLAzKDEVfXjj6V8nKjq7skCuTVjVa5NHi"
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
