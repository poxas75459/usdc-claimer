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
    "4LfE8TBcrYKm87GGEgbb1NgHKKQdoKNKRLTr41H7FZr9ZRuDSqJpb3n3Brxt2BXyAwuJT5mwJZwgq5Mu6rThYt62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xG6G6Hhi9pmnjpDGJiYkdG85nXQKutow8HTZHLL1zHeicRpFte9NtPWdav1qMyQz3Wmpveh15tAYmp4b4cqhjAv",
  "key1": "4Cz7LXrLtKQJJsSWVQ7CiEgxkWYwgA2rKeFBM4T5x2oVZ7YoA5xbKgMTxRjVPNi43kLzv83gLQJ9VEBLMNnDUBbz",
  "key2": "3vEagNqAi5qxhCbVMPhMfHhnAis5kuAA9g74GdNkRyUM6r2zNKShfq5WRH6fLrXgTqTYUAidoPsQQ8wDZRQSV87N",
  "key3": "5faYSooRCfSqPx8RkZf7wKnm8gbQa7UuFapDiyxHe3L1xhRa94VvjYu6W4Nx9TaNRZeJqbVj29rXp4BWUH1AAuHf",
  "key4": "mjHPh3C7GGt9ztnc5fpHnX6AoUjXoxxvQyrkc8MGykiu2dDapWJAMeKHavxNfM1Sx4mt8J6wqZsEiU4DDMTTGX9",
  "key5": "3r4JbNtUyvgorisGtihKrDmsF63AsirRaeYfBAXQy6MMLfpLkz8Wqh8Q97js7MeFGZXQwhdmsuz6aQgcgwEvzeLf",
  "key6": "4bZTp9XhxYRH7djbvbVL8nNMDF2xzLRva3eHt2gJuQBJUzvKDnnagQxyScEVk3b79LRoKTNQ5DmxJL9pgwob3ZXH",
  "key7": "2rMnbh4efSdfUVbb5fipKdUS9hWvm7k3atuaoWCiCSKoJAJoQHguqjtqiw1H43PECbXCkT1XTxouzLXmhStcRiGJ",
  "key8": "4JcyMfknr2yNiFqiMoKKFGpuijvupxwU4UVKnPh8UKhLvPK6rTtcrUgikCqEUhCvBBvj8f1SwZef9qw5bmxAZTzL",
  "key9": "56rD5yEKMhHsDdyHd3tkYcrU9eSp24hivvc3H2D51Sh2uhKsCHhjG6FrTmf2dzfkDqt15mKZcgda5h9dRe8F45t6",
  "key10": "2YVPGURCfqNT7gXUTFpUwLj4GMS5UnA46TutHwqYkraiWo5csbQBKrFpG9QWQFrD4z58xZpwWq396UazyRWFcgT5",
  "key11": "4a15TsohsZGKnLeJDikN9vujjNxXxW8w8tBmWqdBmRFcKYLPWBHfmSD9sk7bhcXxvbnVEDvz8X7eZVWoPBSWdYcb",
  "key12": "2KAUQCPjYLCZzNT73wPtbo5nByJJJFCL3yhgspNGH6giWUYuznHLj7HFwTeuUT6eZQ1r4C1MpzhfH22NhjGJhXsx",
  "key13": "Mq4suaHCvdZseDUoNHtoFm7krtso1WzFGNpVbMtcU1t9T4yABg8yqbmCeBv5TNzwNCEJb8wnN5HTRzA8rtmydSn",
  "key14": "2dMXMrvHmZeLQHzKzMCU2Ap3w7B4CMa5gz3CdP51EMcSZyhibT9F6xJQ6tPtjquz36CR1h8hXHCNmKBCEE83HjAL",
  "key15": "4ThPtAsj57CG2xbs5yW9wyps5djymN9kKhUr3PNNzaPMMU96sU8UnVzsHuakQe9oFLoc2pNV1v3J4GRm5BMWk1JS",
  "key16": "hDAd1Q3nEdQYv7scypcZ628DBqQp2j1VsXZomVvCbWktc3PjDvBMmooGwXkcJJZybhHb7qTnxBCHKcAQuoTk89Y",
  "key17": "3tZAae6MS3tupkoqpEACzbf1Qm7vp36DXryDsj2NCsSCzb8buoswQxzqnbHPeUa4wTSdMp6Q6EaURiVfDiJhzQFy",
  "key18": "3yAwAcVs3cECrdmbrM3bJbcPg4kpf6xaCbC8oUw7umWQWBSkiZVsYxdxSBLuPsTutTDf8oTm4aX3TkxWAd2EB93Q",
  "key19": "D8gPF4oRBN7k2L3BeuGNjWn5wNTcGH35VSxxQh6eQFiNcyULBeJJsHK3HupqWtjhGmMaeiXZgVBSGaZkCkK7N8s",
  "key20": "2jYiWNWKeQKzC8SagReDwwurCrjMLEyJU3iszpfgsmUAJ4PFzMLKH6GofCSJfXbH9LS7G26TDBHy4dnoHi13rNsw",
  "key21": "SAkmzLbMrFkug6HDeLSmTreQzXJqPWaJpSytKyk3w1dDim1s5oGAVEuoprYYPFEHvvA6UUK1Wiyhqc5xrjdrS3g",
  "key22": "41cJYgsbPTb6y5ZP4Q6oS33yMGhzqMxuEHNDJ2JZcG9SfRnT8CbRNs7UWuQDmJSHTqwpPi9aGtH47Ymo8tmKVDqE",
  "key23": "gWiyckJ4hka3zWmBhnhyrJAJJ4Go7zThzBrb45vfSw1BTyjxct6i727k5AjHWg6GPP9NrBmRLER6Y4sMWKfbBCU",
  "key24": "QT2jb8J5ni3WzLe9hoJ3Poubgxwc5bYV3Uew22G1HYxPM1YMvrUovps3x3siHrTB9GCAkEoEMgLpvxZgdj2MjAT",
  "key25": "2NnV7mTwFSjFLjGCG5XDhWPkRPdgEhwfMHPtbPmVSqk6KN6uSYQp3Gr45vka6b1htdDKwoPrV9juBZpvRKo948Fx",
  "key26": "ntfTjwkrVUt5jTkfAQGdYRfH4G1MDaWbRgysvt6YQS82MH2KYcCxgQiGMbxGniuD7cmXevEcvQ4cYZwwdjP9bNK",
  "key27": "4qPCCyzdWy6JPEciRK4XQdRwv1baEHeL4eQoR89UJhWgGKNpsXhJAXr6hw6FKxzyGkgNxvB57nygGCf2ZYCZLE5X",
  "key28": "28qXMdfQNC9rJkPfQWQetE12P1ZDLxuDkU5wfBVjfpVzmC5sFkdvsLpdLfcNGCzyVqgJV18jtrQiXGWz97Enfa4g",
  "key29": "3kvUKJhZN6o9FxVSeFTwGs4gXWdCeTF4LQGatw3oXeNebgy4z2n9ZoZbbVmy1PRNkvyuFmuzPW7pX5CRrH5pXLVj",
  "key30": "SkfKtj8oLTNxbeRDfpFxD6Ns2EMB4GANBjqxnLU9N9NsRAG2btNhgvvKqucnRFx7NPimYatWho6w3KsJQNqFe85",
  "key31": "4JgbaQTzYFbMVKv6qtwmTstTH1XdtYEoCVi7XRdX17qzCwEwzYwc5EFjAjH5Szfew131XymZq4WxbKFLQMbWwFf1",
  "key32": "2KhbxPjNG1cJagGdWCUbqWEfXxhDSq3f9zuEYwmETkJkdgNPUHye8idft9fotd4oQek3rbJxmzpkWXvZjN6DTM7d",
  "key33": "DVtuZUeAFaBwZixkWkabcHKgriQBeiZdSxqUhiGcfPoHdyVp6y4bZBEonhV668rA7M5tQDP11XUv5eCvnU3vBzt",
  "key34": "mvJRC2jiDfGaScFNh1tXpUWHk4XPy2Y1GXEezihCGiBCXHcz93KtNSk6EtdyTJYxJh8WZ1bFFu7FKyuf9E9YtD3",
  "key35": "2AmrVrwFh2DZBzVRUS7XuG2ZiSQfT87kfYHpFmCZL6vRjRYYWR3pDB1aQ8AXsV1bUTxzjTWZL4NtGbAWHFQbqVyJ",
  "key36": "j3P13GQZCEBGRy6XhUw2dZrZz2o72QZbroKBw6bR2VZQkRHcHR7gFCzACyJSVCo5SEYvar9xeXmD5PdQqD9WCvc",
  "key37": "NFP6RUhdM8fQ7kYBXKfSLMECJk3guhPfoeVxW9rBYhmbR9frpDnMUeZe6Nh2kEKCjSa9qEB2H8R7bH9w7qEbzTk",
  "key38": "2LeXKcnCCyJk1Bbmmc1QSPUjh3EhH4f7jzn6jzPyGqHNiVKPurVTgN5mwVb2FcuxUNTrsD3cjgMBfsGDghuLsNCb",
  "key39": "gDx8ViuT11B1gc1hB2EyYP53ACiX6S2iKLGUyHskcZTgPwhdCvPzRN3PP5TXGn9oKi6uJZgKTeef2xXYAxcnHhP",
  "key40": "bdPyPQNJKPaTuGMQzg1Si618bf6XkE83yjoboxgaYQUSt5QdHtVKcLa8rqjtUkWPLTu9UzkhE3FJfiWsNEtafap",
  "key41": "5YmZf7SPQRQRYdcyVfastEAS4dCqzEGHysWfiTEjeud1vxqjW6Hr9P4rfwRWC76nMUWeTc6kfMggvryQdWVF4CxE",
  "key42": "3umZmTtwHgKkeK52x2cMrsdcByRzE4a6h83EAKSxX6PbiX1StUfVizXGYh9VwMj4wP1nNCgiBDYzNEnEqGvmV73y",
  "key43": "8T4MVX7eSk7J6DdyjK6D5xuq9W2VB716kVbiY4LUzWoqYgs6bRxYjvYrHUUu7mDSPYZA2NqeGiMXW3sRCLVu5bu",
  "key44": "4WSMLx6bMfAazSY8zcFzZi2Fg8MchZGV2yZG563CyiKPbWsVfsPrzFGcfbM1wkkv7JD1DTdZWnyGsZ3NEFySzovu",
  "key45": "B2rhxoE3ZjcpwLhEUcFfhbEVpc35viQZ7GJa94TGa21uPgRi89XXzjAYnErJRxhC42zLFyp76jBbdyeCXadbakW",
  "key46": "338y17CZTKQtRgb6YabquuhZN5gAnGi7Xnf73E6jCYcQp69Tf16DAy1VFqUuCY2xqCbhfqD29VwWu6q1qhQrDh37",
  "key47": "4eB7AqpUtyCymW7Lsrkd5HcX9x7PV85UeSGjiWRHpJM9pzoJYYKajzj73qPr4wfRFYbV5zBgZrHV9PhnKz6NUsFf",
  "key48": "3LhGrFuvW9oPTm5AjA6sBVSipX64Zv3X8cXSZwm1oHTzLYX5ujTvLwPu2aE5orCBBhh7g9FxmT99p768bYAubW5s",
  "key49": "4GDMXFEvRWzndiD5mRQzkDEzkJVUJEbWrG99xoN1xzZmDwLfbT2dpNH4mWLWri1JnWxcprEdSruhmdpEY94HULL"
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
