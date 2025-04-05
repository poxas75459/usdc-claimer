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
    "27uU5ktHgm33i4s1npBJAtgTtD9NZq6sHFf7ZzUVXs9AFQxKp6HE6qHJ6M1Y8rHtYg7AqhPGR7TjXXx3J8feQxTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Semv85BiSw1uTzXMu1bqHMQQpZJAYSLHv3FzuQGEyfs7bzdya3LHJecqYFUBiu1bEkyx6JFVr9NDvXQp6ypFrhi",
  "key1": "yV4JMeh8yB161nh3dyewcrSoyc4nW7ckQ4JBBsP4r4U8HKrZeQE9zT4WZZNpGqk29wt8DNPkS5q6FdfefKcLPri",
  "key2": "5WVUz15vQt7U5xy6LmPzrG6gkWkPL8Ag3jdDrEATeYgRHtS57BKCmrrfqoiF7fbU7dY1Wtp6EaifVdvK789QhtLQ",
  "key3": "29cCjcNV1SMBieJhqcAtuQ4Kyd84v4UM37jv3fPYSJxM7nNoUtWqNWZCvf3nBgdLmJuVHK9pWk3UkxKXjd5x1Vwf",
  "key4": "4b3qJVU8gZUG1Wo49KaiNKtQP255cE4Co7fu7JCHqZcLvikDCxVMvEXRqAt5NuRuDX2KpxMukwWgUWA66spAeQ9Y",
  "key5": "3VbAtuuePUNqCFJfVLaVrJHh1J2f36gmmvrVEMp2BnSgCaL5DeuSed9MKcTXkDAq3k6QvP8zdBag9x1ZZgTyS2E4",
  "key6": "3SgoZb23LA8o11xKtT8NiJxtCdHBZ9mSYEsUbLiKY8fqXjMtWkWuid4w4d3AeYuRRhtnjQLfvEe3Lie59gVQrA5y",
  "key7": "5bpNA7yPL5fzM4gSBVgtAsyvq1uMj6sLG8JCwtQJkcGPwWLBPRzaSUq5dPhs4uJBMbFD159yLbztCzb2s8py8m4N",
  "key8": "2N8uiXLwfUSK543aDgWG7chNexkb9VyvV7x8t1LXgnWk2qhRZQ1vZSSd2cjJUPhYy822nQiarqvAQsknRhosu8Sr",
  "key9": "373Gg83rzJ79L85yfpeTzTDHBf4brD2eW2DkvLrobCoQ83GYca23m7fTsKbm5W2JyUeQesRY9A9TmsgDTXFLiS3x",
  "key10": "4mUZ5saU7asG6MH4idiWeQCpJWrdsQmz4grU5UjHeJfr128v3KPXjXxye7gNbZt3HAVn7AtC63zidd3ZGefFoafH",
  "key11": "5Z4BQKdGr8C58DDJ98SpHQ8kR46jQpm6GEGTKRjSy8voMBPFiKz6FcRHNaWc6c4NkKAc8UzjtfKSkQJxA9ApL59j",
  "key12": "2zGhRwJ8hBbs4eGMYVE4oTuLdbR2aRGZcVskb7fMs1SdbXj3oiAekYVBYxL6pujFZbEYCXErsNvu5kAXJXwPaQED",
  "key13": "2u8mHKpCrZv2GxhW5GMGLtLakmTGyhnGMvsFt9Xd5X3c9e8oJbY6tdki3Xs5u9WLAGR7HJzB4NG23XPGVFGSXF8e",
  "key14": "bVoaU7puujeAzwUQufvCKzdcj8zUL3oTiRJ4pPEB4bqu7BTJwvn6Zr3SP8Ndz6o6ZeBvUWDzhtLptC8qjrkRheR",
  "key15": "1cbdLunFwLTeqqQ5s4dJCzDV6x6NmvvcJVirWhnPBtZBKkquh8q37fEPmoc3e7B1ggft6bcjrcYxKFHTK9q6WZJ",
  "key16": "3sF6V9VdgGtasxgbHJfQEekmZqw1wfRreX9zmP4bqR1k1jTEJQjD9M3PjpTmrhoie34BauRWbNyPTroenzA5N9DB",
  "key17": "4R1ZhwBvtS6r6yHZx1Gfk8JNqXBnAX4xQFiD2jqnsoimkjrQnz8ppPELN1hT4kJ9h4uUv9siwThghkewaooVbgSJ",
  "key18": "2CFXtvcjhhgeMhU5vw3VVf9xfyX7tG5H8S5d8Y1es29ueNwMe8AoB3ykjYKdjZvRoaxp3QguThu9ijsQVXjhKT1K",
  "key19": "4Dwoyw5VcxiHUF3nabAT3YYVF9uGfz2kxu9QDVr2qcaB6Dv1Sv1dbznQYUAQA1Jm5dsmS3D4i4gGppwxhyZszN8X",
  "key20": "36fgCynbyfKNr4Zw1o7S4uWWJy2L8DiVRTn1QoincVnMFq8V3eogecEjVRtMkZRoLj3i1ZSqwpu5VDLt82uiujHA",
  "key21": "zwEjEdDff2v1BnRbdLq1nbcZxZeSoa4hxuqbj4UraSYpKUoDoswtaeixdGKsUVQnSuq3yZFudtq99eY9NcPovkA",
  "key22": "5ebee759SmkjTdaLffMAWecHVKCDnTcJS55A9zc3zhXUjgLyuDXGPDnxJ27HtFrn4spa7LGrhe7jwdkt2K3EDDej",
  "key23": "3eLRKAXqiMQ8D4MqUq4EuKYzYtgPTEX9FPMgxGgKBcmrFWYKtwHCnTEvSGG9Fwv2khJQYYP6Edu4rti6qFcBE31T",
  "key24": "3i931ZSzFF7B75XxDU6uBqJ8M2R4FHUCQsfgYwy4QJMchyhywRXPyY2qBUaJBSZm7m2ovaQDrdhiuR28Rr7tjvad",
  "key25": "4tLzhqM7EHdkNJKsfZsVhugKoy5XPA2paduK4cWoXjM7YBm9m754mLAmYSp7oyeRLto7BygxLwDWe2XiPnqqCn7S",
  "key26": "2n713SsqmGBKiyxSd417U9DbZogrQZb3n4esg3voTZFtuHfk54YZEkiWcmkCNu8rbFkm1FsS84XALbpsmFiXvxS",
  "key27": "9AkrGM3QAoocTuSnLRiaqMqtEheWvr9cDGicqmirFBqHsS5YvX5ThRyYg3Eo1NYSEdhQAF8vioTBAE7RL7WkTEp",
  "key28": "2hafPx5QNs2opRQBW9JuY4CuMsTHfNf7EcEWK5dWpBHjcxRevDUopKkq9DieXH5ifYjk2bRjNZMwKz6jD67UCHbg",
  "key29": "ZrzqKJPYvtbNpde3SVk8gVBHodE8v5gt1DuWRoAcGpzUQhsWgVX6ttbkKFY2Ee2XYdSPPuB3GxAC67HhKac46EB",
  "key30": "32VjoWJdn13gTmBAmvHbw4NGhA3ndJzkGQ8VRLpu32fF3QQkYgFpoNwyiUTNgXHEncbKe1PB7PeTK3LiguL8CCXr",
  "key31": "41wDVijrTeh78juUpdLuHnHTW2nvRBJxxPi5aCMmJeKNAsH1ZBKXS4Q1afFh3nV4YzRs4NuqjVX6yRAJgxFCZXyk",
  "key32": "4XB4SEUSGfSNbBB4McoW3t6N3zK9QHdLQHuVWo44e519QU631rZdKmjj8zxHroy45Tu8StzK1qDBFydwA4YkBSKE",
  "key33": "2D54rBxrpahphTgSZ33tCinn6WySB9cVZE2Q53wUs7Eoxqw2a8KNJpKgu4vRNcv6nNjx8CtqEV5x9p91JU5Q9WZy",
  "key34": "2iR3stS3bPeVingg6ZCtRZZSBSbtwmKfw8cdPCXJnZyqHNUbYaoKpdRC9eAMzzZC6pgB72QSP3tnrvyGcxd76fA7",
  "key35": "4QFeTiB3aqvS4jX462jyD3XbGVvJq8jWnzqZNgRHaEva9DquaY2JcJjy1SJkVJcodo1L6XDxNC2VKBcPHr69D729"
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
