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
    "5jmDm2cHHKcnHn5HyAr9ixLi19L5DKmmDsZqTiGvNYKEufw3GwcfNC4eZxNG9AEc57imH3GMR8LjQBtQYb1cmLLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "417k1a3RkaFPkgRTxQYbJiUmGVTzMPow66uqTe37RovY5znf1d4CJHJqmwRFqQ9fCQbKgsWH8kMUbDtW6tPxYoPC",
  "key1": "3VRzJ1TdUkQcVE4ttHpV9PTtUvocpEdD1yN8tzX6DMctGw3mewjjo3cpf2ue8ffUXK8d2w7j41kZHsyvXShiGAsP",
  "key2": "5AMfp5Q6Rnj1F4aJXnpL8x4TCroonM5HEskEfsvvi2AqArJpG7qWcNdYRD7sEiz2f3fxEzEt63xNvr9eTsLv2qD",
  "key3": "2QaqA2uhSU3d6is5iJxkiUQ573PVDkWEy12BExMZXcQkGd9qwFcfe7Nbu4YuahZX7b8Syk8a48YRDNhTP4nP6tQo",
  "key4": "5GpvGSTdUT3CXdhw362oTGzzTDcZcz5gyZg75V3fZboULsFpGPNPXjgDNryz4Mt1XhA2djm1CksD5op9dUApLLUc",
  "key5": "3EeyrdVZb4awUDMuEtGsMytCfiUGoThUEj7rRJ5juz73z83jY7mWkPktHGZhHdQMQuXW6kQZVpxg3fYbT9FJdQkm",
  "key6": "5qFx3P5KMKsgXDPHuuDF7MsB1nNHiLPsQbqrUHgodSZHvVANQC4PXDsrXDAG3xBbZCJSgEgTvWLeavHW3mLBrnDR",
  "key7": "4uSAPrjCdJfy5q7boWpGZpumc1Z5xCNchujYRnNs2eqkKApLBz7NzPbqQZkVJ7p1uG33XVPQcutuNdXCWV1YhnmN",
  "key8": "5XRVhoxeTRHpB6XFo9TUExKswFe5YDX4g1RNFV6JohRVRJPF1TUUDh3vZ3Gg6U63gdwzz7wXvDauBcKAPgvN22JD",
  "key9": "3zJjHAauF2mYvQkKQQ2UsL8b4Bk99PqWm1xqc5FQ9CafLsmRKfAhhDovhwjG7ybupt6WxWST3db1qHRUFFTUKGc9",
  "key10": "4LCGgVrDUpto19pJWPmUosQiNuJjK85u1MGMMeRCjQ89tyaMj1izdp5caKGTnwbqZBwmT46t5zoGEChR6BQrf1cL",
  "key11": "3JxdSGxHoBjzGFgfJPkjUMXaseEapgK8nQKiZgT1XyWwr9ACCu612az8jTKHUADYaHQRPAdfEyNJTXrCphoLWVqi",
  "key12": "2JwtuxsSr33X9XgfwY7WXnsL3xJ4a3Az8Mcz41Zr5DopreUKR9T1afv3ryhtxanCyjTEAN4tc7ZEk4A5eGtYPLnh",
  "key13": "36tNDyVqQ5SvevyHxhtHbmb48Z6i8BT9wdEfvwxubmgHtTSPUzwAs6uJs1w1eNcAt4HfXnQ8oKZBqqgfoV9kMGK8",
  "key14": "37PPGikFMtZr2zAE79Nm7VjCvdRrgCtjf6RzRdyrdHjR86tMmMSP2DBd2h39woYqEk7im4YTdPd3fDovfmpRkgL3",
  "key15": "RzSqG1gfi8MYjdBcSSM7CcEiQ8rt6yvgdiKbYz7ymU2e8KBCq4ishPzFX73JyDL8Dr7RofAEBqhw8CEic2za6Dv",
  "key16": "3GLyRYKwPnCLnKcytwxADYAe6DvZz25RkLq5yCUebiN3ZZJWXzPXuHJ9pvAywazsBPYofaxcUU5je9SPXzJ4zRPq",
  "key17": "46mCRpHqrDf3RR8emi3XigCNwSRPxC9AN2waGTTxp7Ypp7Yu7APEQsRCpry6EYQKFs8EPt8HNcRGs7n2YgbqdKjm",
  "key18": "5cWgQ5bALJ6qm6UvzbpG14DDeoaYLthWxCJDdzjMRLSDHBeyZQhwVKo3eafj8q1c6WnAHYqWXtLg95VhoWMk64YL",
  "key19": "2jCKszkUak516Zeu6u3XuoBmX6vbeuUfrWLbWEoe4wtzcZun4YEBqxMcSbniEBd9RfehHaXKkFFfmroz7jbbMNqp",
  "key20": "5UTJCB65grsTsEmz4XWBtnfXeKWJpXoUNj3T3Wbb4SmTcX7Hy5fCfT4Cv9A1jJEAHPDgXXLKt7u8XCTSfVZ1XjGp",
  "key21": "32JbvUSEuqEyY42hWYLhRYmnbUuawcZafLs1FJgo62h72qX1AbjZDB47HFvkXL8EAMWJkXPPtPspoB1WfMvFjyoP",
  "key22": "3JS7ysNhZnEhdVwXNQ9m3c2wRijfWQLztxycZ681BrUWX9QuajF9gqRD3e7WWkkDYJQqq21dUvw23FTLVujGDNLY",
  "key23": "5XTds3PU8RstsYYSu21K7xZDkUTyYVLRbZ1MQQ7Zu2w3jsW5ftFSyU5AWDoMJyih1q6kmRAsJMcty7DNxuHVVomj",
  "key24": "3psaZ4ey8125DAfKRYg84KbU3LoJSy6Dp38cwYG5N3vPvuNQmqT4ukAdqtGZ4nLzcB6ceF24qvsDJ7x2Gmk4D7Yn",
  "key25": "3hQhtViELmnwZ24TcsAbj1ahXRbSaDkHnVWuo3PDfMW6bFYMXRjqP31RJqxYdbzTZCprq9EiV2Q9NsGqXVDhbWuL",
  "key26": "jJtgLLDkuiuL2gkhQRionzFjVGfBgPTMNgqmdpUk7FocAokr7HSdmQsfAfAdSycGB4NgvR4D8NqMAdsToBTY2yV",
  "key27": "X1S4xdBLa5z6JFFXmXqJeW92gBwwh9JiMvbDhX64qJxS2K9Ah63v56QftV1zg6GFMC5D6nGtNjqtwHm79FwGx2L",
  "key28": "6dQgRpjihT1ikniBQYDN1oAG27DmeBRHg6qRTvB3Q6hjKGMovdhK5MWhBypcrVnLhdCW4krQsok4YNZskpMDBFV",
  "key29": "4D7xPQaaP7mVCjsC1gGq1yZGpX2Zurb4ykJajc1v2rpWL9yT3WXGMLs8yMvgApjf8pFdWW56kJnomieqGgr1DXs4",
  "key30": "26qQAR9gBxYoxeeVgNCZSPwC131fxTtA9yCiMFBrUszvoDDB8u8YAKTn74czer8PN4gCRA5ffJ4UeA8dyBakxHWd",
  "key31": "UWjRAvSTgMpGZRCeTjxifs79Ujrm7d1zvLYYEu3eFBzxcZZP4AyQpocQNMqRUa36gfZhKj8J1ci2EYfa9SmWysi",
  "key32": "5wTqgkZcnSKjwZrbvbgU46ypEJsAnSxBE5iPjCemNSjVXfYVe8Ws4CiGzJGXXZw7EhWELtET8vDvPqUup1MS7faV",
  "key33": "3dZWpyyLdnXkFVKNnK1dxa3jFKpLnFBUkgQKgQWhaFsDAzHnZdccyVr22baTKuvwHmYMrppjZg8YMWnF3QiEKCyh",
  "key34": "5yKQmxiG65vriTVfRpmjbNPy3hFSsQqTfRKgH5SBE65KNyqZxuLH3t2973KDtrApDGkxs6MUCSX9LWc7XC3gxKWS",
  "key35": "5uHpsqRhhYQH7VgMobq5yYrQP5G64VpyZo2vPrQNH18juTewZvNUkPwwTJrFYqYkoSZXQqsg535wnumxZvmqhddZ",
  "key36": "5QFmPDUWK7hrDD45QeMesusht2pHeKMoCixqaRrKtPkRSUkpDF1hgTgxHr5FDjE68cemFprTaUZnew8JnbTKcBQu",
  "key37": "buY6MRiDWFBtzD5QjFCG8aiqgHbMWHXTWa7dSddLJaxKES15EazKePndhHqpQNGSbcWDXn2i9HW61N1XhzmwfGq",
  "key38": "5scVvhD2WDJbvhfE7JcS5AbmQKF9da5NPsqfKbnvnyLHaVCZU2CbLEjfHTCoQBwYGn1et5r3YhDubVdmbQdSmfBY",
  "key39": "2o9Rne9cM3nRiETBrKrcuYSVa12Zk6jQfkPcSkRrc4CKNZ5x6FkMTZpo8PjNEUUgnpdpAawMhS3eB4jBpXEzYhJu",
  "key40": "VK5aGSVKTZYE8xxQ9wPckK6UwigpwWvvtF7eiMFcTAZtAgWptzghPpoDSSzA5so3ZFiibktA6PhwNJ6s8z7jQ4X",
  "key41": "361Qu6hLByQaotzzvVA4j7rZr5JJKC8cPSFGqGD7ZXmo4M5w84dupwoVBgEZSnqdabXTovkav2wSRfoJ7tBEApkJ",
  "key42": "5h6UiH2UoEiZFmNVMHsz3YDgwmpWBa5dBCZ3UoXPfUtVSmnwagYypnc45zhjipkZHz88rtERgMce6vzeadrDXea6",
  "key43": "5rUEBHrfNVSN16QmK5bS1PNGgfVxAUF5nvWhkibwcuv3tMGxf9h37AbCve267o3aJa5FE9oY5drEar4M4caFtFYc",
  "key44": "5dUVpDfWsbAKxoHc7kLfrmuBnDFQp6LjhMVQqpz6PgWydZff6SA34xdXuABoxC6s9eb3i83dzacc1gonwDaWgRkr",
  "key45": "5GEgiHicBsoqsgKPVMkXrbgmxEK5RQwrJCvBQvauiVKcmeoHVF9FMv7EDq8JSUNEJiQsY4YTRpgCdu7dCi9n4GYP"
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
