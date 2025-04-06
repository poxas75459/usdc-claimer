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
    "5ydtA2iiCN4YMLt2smQ8gfHu7Q3LoSTjyKqPzDTo6P5HrVEGjpoXESvmXdxdNzMQEoin1oFUbyKoKR561VfRPxST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fMi33HL8uF2XRjAR3if2XaB8yjUSMAnnyRN9mVZWkUEZpAUK4PCG3bKpYsXsfgRwyTwWh4QifRBcktL29m6zLZN",
  "key1": "oAShW2H5MB5eUjnXWnWXyb8nk4yGYdK6UnEeEHMjHT5hYs68tp7MRPajoLCmu5TgRsMKL4PvjF9r68y6frXJKWF",
  "key2": "3SXVpR1XEMmZz5jbm9g6XhinhXp4u9PVr9PHHLEsfTPWsYYjYaCyEDPLK9tat5QgAQ64929wfCVTChzpgMnmkYw8",
  "key3": "24Xv27tk9yzaAe15SJukQvfYFUADs7B1877oMdXdvizLHeTJcxr8u61yP8uvw4EABdQTy9gUeE9wZWYiJV85xXji",
  "key4": "5JdbdvgtohzUeANYghmTVoEDetV7hDc84toc4Mej8ZfbYULuzquXzs2TyHg4RbabNVJANRxdu388YsoqQUG4PG8q",
  "key5": "47vgHiwtc37kUmXHjRpfbadByqi9WtW8KVYTqA4DxVgLQX5op5Tby6Mp4YaTSP1GZM97W7Snq2yfJuWkC2YuLagR",
  "key6": "4HiJsVB9te9TzsBmxhBUt9WMfBYESHES7gaMPwEaRaJBKCUGhFEQ3Eo8w2DdamzsMpRVeCGW8cJxXYQP7NGWRny1",
  "key7": "5QSy6FRUt4XWCb3cSp7i2ez9yL4KEzPm87s6vrEx1csnwsD3n3U1PZ4AxzGKXEgrZssE4pVQ7oL7CjRbkL1xhqth",
  "key8": "4EsngYu9SF8JNPJ8NdGgyvhaT17Kw6NvTwDvFkBmJj2sv8NEMtKP6mwdq1v62cwB3yyKH4eYQVyAakfxriSPhkwu",
  "key9": "5qzRB58no6hwR7CmvtXP56Kf3MmiCfYMA4BPUpUtevWEyYA7mf5YaBTGJP5byKVN4DXrsKTp3nFougs8RkdyrcVF",
  "key10": "4KZ4F6ZJmKYqNXKHiXcFUuR1KBHg1BPvCuSyVzdX4mhMaB9wyDN9CgW3BZGeQp7gZSTtCVfBMJeLQDHTSeUQHWbC",
  "key11": "2PepB6uYVtcYXT4rCVoQKkFFuQ5AQy9jt98vWj95CN7YNKFcAk8Y1XpF4qzJM6G1GBUyg7BWdADino3R8TRp4LwQ",
  "key12": "efYtwZiSnXnZhj5VKDLAjC1co6FSmQoRmZ3ADgpev1dt4T4LoKqZxkQEUyRKqyDD1GABHUchWMjs1mknoNMi1hv",
  "key13": "2GXVnhsU9EtAiwyG6qA6YW2fKtgrvgBN6J1ksCCURBr3b26LHCozhepVyLLPZ6k7ubLGUoZipVUuxq1d56FbUt8v",
  "key14": "5BUs8U6ZWVKDR6SXoEyFgBvhyERbr8iWdoMRNstgTCnDTqsSjVfdxVJNiw4RehTBocjDPPzomVGcaUFHBJnH8iKk",
  "key15": "E1hs4ZmH3KZNx5VSvFerAmmd461TsC3XD19Ngexhzcuu8qrnignhTjNuvwHoSfy9jafqWbTd6tAfmxWsnN86cpC",
  "key16": "3dQY8LDAcK3zrFM7wdfza5UgkWACvnHwnRjvwHjb1Y7FNYJsQwxQhcsyKQXyL81ExfPEwPsSND4UCcrdL5qUJGvt",
  "key17": "44Qr3eWptM3jMSU9feQBQuGtQdYvarqcFgkbaT4Y6d28jBZbtPWdym3noxNNGxWkUd71jcgRqsA5QrSxwMpc8vaG",
  "key18": "61RTjt4gRv1DxBFc9UzjwcSrZQQVsaBKD1isT375aLQrj26zfYLPQ1BNH9afNBWPVykGG8DVUTBkyVUWDAzVCUDU",
  "key19": "2zV9cT5oWnRXSotFXQUcvXz8H2sbF1b2re8jm9rAPJwcZMJJ3eDCAm9onvnvdd7dqX1djPSMJ6m67Nihf357QXaU",
  "key20": "5X4W4xbvx5p373BkpwR9WdnQzgvpJWeqTwWDz5LwWA8BaQLM3DJV4aWizkjgbwxj8rxGSXGDTLGnPMQmx5jTkhDt",
  "key21": "MmYx7BWXW9XjG5SRwbxbiHf4pxwkAEkBk8qbZiL8xDdQGVJtigYQ6Px3zxgUbamCFWfPtyELMgS7L1soPy6cY9X",
  "key22": "4nPTTeFd3ZmJqtTMmGo72Hy4zexLpDnmirzuAcrdykUEnJUF4YBbnTHHcoGCTwGFeQe6aSxLXZrahta2qkFdKmCn",
  "key23": "48vwB75pxEg3xpsENvmAb3LRjNZxtEitYVegDCrw1f9X9Zcshxv2qz5oSdf74eEDyQMhhSivakGJch2KV7bDWhLv",
  "key24": "5TkW4U8YoT3uEUKsE1rsb4gYUXheMrBaUYygAy5HQQPeLFGP4JFKhRn3qAo6VtcZtkPYomrBi1RfywvuMLcwgfYY",
  "key25": "4dvt7Fxq6dYZfAFjxa3S9hKxJJyUGJ2egeBYFzsYe9kQGrTVJ6RNViDq2ewxEbrSu3dxKidGWW9qYDwsQe96Q9hb",
  "key26": "2ZjA5x77ckD2m1BvAitxe3ZDpeEbDm4r4tSBjv1H3WNuTy1YHpWjTaqVpTwPNK79LbqvF2PUFDrmBLYuP3TDY9PG",
  "key27": "CFSYZCb8zqUsw5vwzshTFVd7rsxqZegQ3ykyCcjpTuxpCzB4ypZ3JgkzZj3UUhHDj2hsmxyzbTgiYPRSt7jHVkr",
  "key28": "4i3F8T22dyC8LaAULk7iSQqVvWwoMJ5kfXvGPyi5Bf58hSAn9MtuEucPGUyoLJKKUcketZxikoJiEApxWMWFQXjk",
  "key29": "3ooBsTkt7kcEZ873SxypMc8daCe4DGpbWfmZebntWBuBkM65eH3b4Bhhif3gCxm3BRPTZM7YaWs4qVLq6R4snFTX",
  "key30": "2cysnDvj53ajHiXhkbLkQXTqGpFrWzJN2j4bU3tHWoY9AARCJYSD7pNUB1kQqHpkqbtGFWn8UsNfiCQBpFjvX3EA",
  "key31": "4FQYv3WGgjQNimPXQBwDui1tH7SE89fkSGNC8stZkF1VkJuP5YrNqezBBRF1Bi9maFWBJqAYNtS7dSjTGu7Ls9DT",
  "key32": "59FE3swgSUbQx1bDYZD3wGTH8Kb2faLQD3Dkw1tNQJDysJG5b3ERnNQnaPCr6sDqRGU9LKRdkdj1YsjB7REdne98"
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
