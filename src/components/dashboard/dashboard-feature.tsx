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
    "4cLduc8yYdx9MoHQY1xkW5r96oNVADvcrAaSMEq73rcVgTjCSsGEoDTiDrv5SLJsy63RTZZo5MYNicS5N5pFADFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NuqEc9NB7Uk5vatBX2dQV2aUd96muz6mzYQLfm7ec2yzh7tL73HXz5HTn6foRK7HGJY1r4ZgYmHDaRjeNjBBPxw",
  "key1": "bjwh1pBj7ET3RHqraDc6muCY4gTWsT9sDHyu1P5KWmnXo6Enihvd9oCoFmFJgQu2p5UYgpqYjpu33KZ8SF1bmBb",
  "key2": "53THmMzmmhNCvuTSC8jJRYarjZeWvfdKP1ZhHVEn7vCbBodbwePe9enfSLhJ4g4SSuggQsDJ8aMrrqxXYUpGzoB4",
  "key3": "3S3RHsbZHkbYqvZ4Kv1feTa8iLBte11LXv5mriwxnpDQbjKXwPvQuswgMNt1GtZWK6odBdP2Fgi4nXYKYm3sbT3Z",
  "key4": "vxgy3wv52x5Bs3XkU2LDiHKeNJ5K5jHaaqWAx7P2JAnvqD1JAUH4VQgQ5XWN9r72uQYZLoJGuZextUqP6Amm7gT",
  "key5": "4ufC65RbUppBhC21UjmHmQ5wSkWfLPuCUt9dxauiRh8CRbr7hC3UsvWnp1oTixcQQAcdZ6drNjVerS8h7vcRjAdM",
  "key6": "5uP39UsAWKaY7ztGitrHPUmkFYi11kGea2Vp1mLBcbZrCv26UvM5k35KHZzoUL8rup5jTvxX9Ji91uAoStprDdnc",
  "key7": "bJNkGUhr6nC7ByKUoqQojtq6HKvKxXxY4HrUk6jsbqDrk3frZmhrr27ZQbs5TDHJLwNfFL7bcxHyospETSJ2Dya",
  "key8": "Vn3XpyidkdL1V6PXRbcNjf8paR4JcTEDRwAonjCXuxunHS4wbNx2QvytmFvw8wKjdqn6TCZcinY1HadaTN71TZS",
  "key9": "4sXzZvWdF9RJCmDarbq1VaHndeCwChf3QDyqgt4oTUmWJpEGehtYzc1buaLmGpbnze2FseWwgax9HqUJUfuSLm23",
  "key10": "66Y98kagMkmLXEjoWZRMd3HSKxsD7xQX3tQHn1Kx4L4cGyJJnBMVLeExvec8zGZynkePGshSw8CAABdjwRSwRqpb",
  "key11": "K6Crta8AyeGn3SeaJsCzTWqDA9eSxksDVcMNzDGiWTaof7A1AGkvSDW6hYeNqr5Sf2PpfAyzS2FzChxPYDhAimo",
  "key12": "34mAjfNzEAWp1uiZ9DiVVaSNDwKHDyMQ9a6snaymxapv1QRnSuZTkkMyAWmGY3xQNKWgj2AvxSfja3THvhJPUHH1",
  "key13": "21uXYL2n1VjUBwCoXJ4VAPBKa4smYMTvninbjcwEQJvkWUGHcCTptpUihoYREQc4wKXcHb82jbCr1qd2tjDjNekC",
  "key14": "3hrMdZLQrTzxcuFhPGU6Gqsx9tNT1Ledw51nV9ExTutuyzP3yJQfuf6UDaFZ6gYaqQR9Pnm25kb778NdTSXv8cLA",
  "key15": "2VGXCe4zfeeeQXF1A1Z734XhsLPrNjhUBALeds6imq3oUW8RBhg76pu3Ec3eASMPYcjjihX3ghEz7pgbbjoi2vi1",
  "key16": "t32bUZXhAwrzt6fBsmhRE1KFg5akmvoYS56WKNMGppM4qz3od3rcXBXX6JKYNPFvzsFpKkG2bXL5kYhAqefe7mX",
  "key17": "3jzN4urL6TQmzySZnaHEsvLTCa7NkmipCsCx8JJt2Tppu8Rcgc5CtbgYxJsW6zqJyE3QXAfREBbKD1MBxpD2AfEz",
  "key18": "233tGvqJdgoEfAvwtb7KFPjSALpAi9bjomxJfgX6UYEf4NA9sL5SCktgeTeNAMLh6wtSbCDHJr8SPgWZWUuUoZjQ",
  "key19": "2Kh97AavARxsfwKiBtxUPnHAqppwvo8fAGEz2trc9debsZo8HRYKTF1Nq57cWxv1JuKnhHjHJ5bW7gVryC7zHxaw",
  "key20": "2GqmP5WTkhCqEQSHyexFW75fzcVQgnnPwQRUc8WkQtYDmDfBBLh862vcuD86revBz95xEBHtE6CPF6FgGLDXVU9j",
  "key21": "5wrvmJf2UtcmkBG54erN5MhCjdXXhvMmF8kh4nqq3PQ8yUArJjPSZ7W4uRoDgpDnRK8MEXFfPHXUNJE53ueTFoKT",
  "key22": "4xxZEBo8SmM5akCna5tjVoBiK3WED4dKTdA9uYbvBjo9kiKyzFgE7JKMVnU6tgxhqP9b8M5dkpYs6bRPMWLwAhk2",
  "key23": "29Vgr3WTTSry5Xu4Kuorg7ajWXZhhMe8aNn8yKYdwnZX49nBJophc9CyC6BM3MhQvPLS3EKA5UYMPx83b5B3tcB6",
  "key24": "2SW6SP4poNhc2v6dXMspjGTcH47vsKx9bkXk1mxKC2DLzKsitjLQeqjCrtPbi2cVZCTCoxnET8ucazNDcFzpGoE5",
  "key25": "3WZqsnTfhHdV4ugF6tK2s2ZdwHP8AjW9Tjf5JsVk24ftjbd15MswudZod4kuweGbnPamQVEB7UmYpCnYkTMNRcky",
  "key26": "44GDqE3tQaZkfLBU45d4ctRRv8iXByKiaonnAXLHwzFEbRWoHvkqMM6n6UF1YS2XRLvnVLXt8MpNx4UKRNuTNSd",
  "key27": "4pYrJuGRUvBYtRTqJEEJTG13naHw92xT14oCjvKnQRGaXkSYe5GQDoRCDfeQRej2659jCq2JLrocjiPYNNUDjA9Q",
  "key28": "4ucwiiYHmHGwzPKBYRgLfJLFVFfqMWdcnMxBKoMbmxr2F9acXGEiuxfa45ZsCv35w95uHwPvvTuUAs8dmNVCx7PJ",
  "key29": "2RALmqaCbpUdEmVnEEbFhwxQRTe4RAUUggfKhRKzKnBBudKcUUrRHadhXi1q9R8kXu9J1rwo33dQPSxzqk3FFFP2",
  "key30": "33b46NGxL6myB3mvKjYpExaQ9Pa8UvkAoBHcbjUNiqDeQyce9mnbzMQKjPjD9TjbjFSLbohve7A9YUHHneVNZCwv",
  "key31": "2qs1dw5WNjX9WfvqbvBk1UzfQogzmQWuiwukqLy1CQyjtW4bHn1DJuiein77NyTe9yVzzzhC8b7sDHsSZNNFTBBJ",
  "key32": "3vGrqTPWSvmyjAZUqi35KdxRFqaDiZsJ63Xb191i1cKr42gxTvMXLbQZ4wab9hkVDGqNbeYXeEgsJ9dpUfaCRUEC",
  "key33": "fL2msSBkYFgLZ33P8DS3P7nxn9U8bqPEwBiQvf1KX6ESrCb4xRPbzo9HsEDEnGRKZXFMRm7WH6wnfE4XVuh3bPz",
  "key34": "4ofAyFWPtr4nAr9nhDgm4t8tg7LXUQAeyXZCWpu5c3RFgAMAnsHnvmbbui8mFap58o1PrrjSJqGC3P44owQPAJ2h",
  "key35": "4v7Wcytd4hAMNbkBED54peN85CkSXc4fkVAYhDXZgtXHPwchan2tEeyt7tpfeWiNm944bfXykXbEW26RymiDajQu",
  "key36": "2H149sfdgU5omAHAQcj2XBZUSWtXZBGnZxqUbBmG3A8rPx7edyh3yxX3E6i9hb2jkaW1PWjjLzdxoVK9UsNrwkwb",
  "key37": "iCBpRNC43BqyjBH5d914PCdZdfV7gqj5FyQuHLWgDGk392W8wdc1yK3N1Q6TMXp7Dfb1zd4zU7m39bYoy7GKGdE",
  "key38": "42BW7jrLWwusDh2cntCDciACXqhW6cMYV8td8Xw11Akcj4xu9CqDsCF9LoEzn6brQFoT1jESFmw4qETeZLKGK8Ld",
  "key39": "3zeNcZBZyynyqqr3qXcbxqF8tMS3PaqcwEzAS6thkkyjmJczHr6XTvk7LZABZndFgdPQWeHU5unJ3xg2xtRsZUxv",
  "key40": "2D9CjZSGCVxCyPydnPmKZbfLA47vYAk1sKaJ89bdck3xpTdbxCgzscrXKkwkqbebz9HQZRAzeoNX71hfUPTw5YVG",
  "key41": "2fUoWDoVrceh82iRzmLA4VNgNvAFUgkxxL2DrPNCYMgze3PaHXiYrzmhTGrs7ZdrzhG9F4zywFEPf9DPr1Wv6BHa",
  "key42": "4ziJ8NyyDPPScbzcSdwPBHeyyn2BtYgEHK9RDSY6f2iNbQgU57Tw1NVLbVNRYaroJnVZqGjQJqjnScFbhSwNz1VC",
  "key43": "45bzU4v6FoCzakWDUp7jAV8SbWowHZuxZcZCYWVFkptWe1QveJpqkauha1w7UPmNZNpuo7wsyqhraWwzabaTxEcB",
  "key44": "tiqcEgicK39DJLhUNgtr1Dsuc1mgu4XZv3DaGbFcy4Mn8JfKmWJApFa5qPHWwaMGpxHN61U7oXmptcKyZfPJADN",
  "key45": "4YdW2zJ1XPKmUenbapxYYZR424xrWcGQWV4AUZ75BwUKgfxSfE5jobCG1RQFFueGvB1DGb9uYaAasPJ7UPdfy1fD",
  "key46": "276H64S7B45nHZLKrUg3oSn97xnnx4mG51PM4Wvz5F2GWQiNytjkCSomaa53sz9ShBJXK6hZabELD4RULW7xwT8z",
  "key47": "2kJJTkvZ12KoyT8e2brHYBnb8MMGP8zYT1KpC2maChBmjY551WAbSTFsTa1H1La5QGvEVoHnwpJubN8SqavbDTRi",
  "key48": "5DbjDCjcBbRQbbfWA8JRzB5hhHzFSRTBQZav4uRtdfCSQiRTdrUeMYUghmCKEqUhGQV4KSrCommBoyKjyqttLdxa",
  "key49": "54eFxKAf3MQyDUmvxWSjZdcXneuSm4HrBiQf3YwwDMeiq2NBougDjpfa3bRXwpssMd95MBaSevq9snUXoginWDM5"
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
