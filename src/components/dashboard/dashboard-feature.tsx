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
    "2JGG6XNi8zshFcqEhW8t9L5pTmGmnohUy7Qi45Jd2jLBkvU4GkMWkyfn4LNpWJPiFTXd12rDqFMbLwRaqccieYy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21g6btcnjELrcivZfAiahWVdu9gWFMgfAFN997tLGUdbjoV4wZkAA9Rrz2tnMK8fsJXqiMRtXZrH4aCr4hv9d1K8",
  "key1": "57FE4x9zrRqEy63QHzS9VwnscshSySsP39MZh7YCGoFu33vhYpnDNwRLeKWXMFtNB97asJL8tUyqkFxPZkNXPLbG",
  "key2": "3j9bboyZeHHtky36ZqfzeynWJUNTm3QT6mFZKEUQxd1SfzGDJpDbvP1Rjj4ZZgQHh3QmVLk4BJhZgnJuu8sBDLRd",
  "key3": "2J6nn5ygdvq6RagpsFbu6HrhqmggFLZyivDrUsYa83gayJC7mi435FhdHWCESPp9Mid7rpHnV54gziiCvKrnrVaA",
  "key4": "4pUQwmfDJbVwGSG4bP9d2FUKbxQXH5PBQdTQTWprJvHPft3HAnPyttSctDqA3DRRFyjvHoMAbXGS27UP7pkH8PEw",
  "key5": "37YRmBZrCzHqGFsx7uKBYFMxNi9Uj2XBH4xGcuMr4oXZXYiE1RgMmNoUs3GpXMpPoxTmPGFD66AzYSNnPfvMdGSW",
  "key6": "5EC8Kk5pgE8DTeY3PygTefkrgRcuJXsNHoH4QvVwgodYd93sndDS665W7o755A9bvfe9gj6Faa2x9EkBdvpWYneN",
  "key7": "2TbposKkrEeseBkYFw1PhU3mMpssLNqVirHWWkjc7iDUMjSXzifcZ5REoLiksQDHHFUfuFEdP8vDRHjScmsBbcrf",
  "key8": "3dDtz4ZWzqyDZ1jNXjBh8KxDzhQxDE4qdSdaJg9yBPPEXnADDoQFZdxppFy3S6y29yaxmE5VbTpyV2imVViDP6zK",
  "key9": "3exNdb8eBwfvUSkBXCkksL7uhqP7MgsgjC3CT821Zmzb1C5zBjMtU9a2WyMfTdXKNBvgSXVsHBvHuKZB2AqxWVAM",
  "key10": "4QnWAGRzKKWUb59p4GvWVxvtuAiGu9nxPsCpUnRaPLAPeTJkG3M4ZmXQYX2fqnTRDr2B5g88RwwzQz4FFEcgRKZ9",
  "key11": "JLn9Xwi8euNsWJkihWCLGy5iVQmbRH7GyGJzDJoWrgzK35zqoPSvctbcUX9UwGjfFizaXiEG5CHTdJiakV48bBQ",
  "key12": "63VrssLwBMDA6MA9MQ3R8bfUhzQxGX5hVwKjiB1itzbh2BvUh6LtK6kWqbdd7DrLHyNcWSFzMkJYPoqFKq81br45",
  "key13": "e6F1Y6ZroHkSnvGgDLDeHZjGyQCcJyCL6XGBNZvGPsArnLCvT7jEHvQ5NzXQ2uf3AAxru6NJDWYW4j4H7nQW7No",
  "key14": "3Nm1mWK1sd3AeajFtr4TtgRK2cs6AKiLJAf4gXPqGmUmyktKQijzy15KSCqXKzbgvFdJTxCXDmLNXUHYarE8WxDB",
  "key15": "5YK5JQdBTrrC51EfbMjmsS6qK2WKmUqQxjmgmHrdd4Q5SqFwNRCYCjsj5e6o7UpDJRCDW9dqAnmQRQFCtBSRDJh5",
  "key16": "HKRZjgYP1Dz7Nf5NkCg9v6Mw6vEz9es3mJ4aqH1menCpJPds5WBS3FpWcY3ZQBJXELnkKpw19J6jRAWng5E3dH8",
  "key17": "e1uGjYfUcaKmAtfs8M1Uc88a2BbX2xgsFEEEMkzRooh8hH1wVKkAzDNaVyTK2C9cDj6TzmsoHHMpKuUGJx5T4YR",
  "key18": "3qJeQesMXDZq7wKSrLPSsRnNibr26yAUAEk4VbLZphGCHgZoXvQ8QptRU3zNZmtyEwYpdKYNLrCH4hducPWXuSmM",
  "key19": "5GyKkrrekVWgiLoaNbi3rLabG4yip6HT9aXe5JGxownnAntMNV6cNkNcyRBqECsxA8tdE1WhGvVzetFGsBjAmmV6",
  "key20": "VWtXxqFYCeFGvu6fPnLifEffPHMKTKEA38hWQQ9XBa15cGThtgr8jXUGZmBh23mAFRxBXnWfDB979iyETo6Gsja",
  "key21": "4uZi7QTyo4HaZSv8b2df5KSM8sgxVg3FzAHxmWNGL9D9JMn7qbAo2GtYwtNstPBq53R4AEGz85mMeUzQ1PrQFbWc",
  "key22": "3KRx9NA78AsjdbNMsQPLkfc4XFWerTDAoYRwWoQtXZg7ja1j8t1iDP3tmhZEMYXYEgEaEzZ3saQUxzk6Wd3sSMrE",
  "key23": "4TVEVPe84igtEdZCpKgepcT12kt41XtPw5a6dcPKicTWiLNPDYxDKysC4xwoTi72d8bC4WFY1i7uFfLpCdKX1q4B",
  "key24": "54LXBsBCKBQBHzYK7Ac7MvUq1oDsTvmrfV3korEvbxKWCGnjHhWD7CZeb3FnYQsqp8nP8om4MgNbMvWrvGdYXr9g",
  "key25": "1myE36bVpbBMgb6yZx5ZFBtnbakPf3DSUheqR1G5BSfj2Ge8YSasgwJx9YtpmkxLgHSjic13UV9nzq3yB6jTukv",
  "key26": "PS94tSWtrXBGAtcX4R1TDkkw3LJ41A8kFejttPxJr1HXeQSViKTSU6cUzms7sfnuxryZrcLhjDzCAqfEx3UKYEp",
  "key27": "4qqGmgZeYbKtPWdYg4CgtoNzhPhMJ51CDukz8i6wza1oJLAEicH1y7oXKAngNkn2eVcqTLcbPLsoM4etV71vEAy2",
  "key28": "3MtUETPeuqo1ZT78xfsAFVBrr69rV3qSaZYF28LfbL4kTvH7XKE1svb4pj5qfxfhqTCb1zmn7FmtHZs6nQdeyeKC",
  "key29": "3o4iW6vSWBRL4deDzhBg5ER8HUu3mS66S9kyY4eLFueGDCu6eRnQCphQ3cJDCumEfAjVC1KLBDguKtuQ1zQLMcT2",
  "key30": "2gWK9rgCSgQ4ZvqoHqi8KDpMJg8xDFvAtjP9doJTjR6XZLyM3NDfSV3BPBdJEQHuDShxp9nJAQiV1afyeLvERPpp",
  "key31": "96Vex6sb1wD5ZKS6aiqy6T4JfJdLS4ykkr8KhXmLBPn7fFbSwCHi2BQzNtESsVUCgycYz4QnLprEZz3JAfTPCfT",
  "key32": "5XExRP2x3RnStTfcUwkDtTf4Lf927CyDLtQaRNzrasfk6pKNd6DR8daaQLPJWyQtf5HH76Dq3RRxNQdtatsVjPwj",
  "key33": "2V2apExQ1tMfBvsn1XUo8cTMz2qVmFCNCmQWY8YrWCcogDMw7q5j5Xspc7HiYt4fVKLm4qWMGC2sRMwKmd3oJHcu",
  "key34": "3BxjayStycAnisoAsRs1NmptxGdWGMQ8eFdy9TayTRkFUkDnYkZEkjUusF23zJicqS66VRH5qRyppiGnRfuiSRqb",
  "key35": "5sCqEjvXAc9hCkbEMajMJEv2hVEXoNKvJDkV5XgcTBu76pVjdxEyADygc3FWY7ab6AT1W2bKYpteENTtWq45YUES",
  "key36": "5Kk74jEyv5refeEk39aR6JBwQywy4SZJAK3q9VqusRUGsAFuoLXthE3yMCEfVRzdGRuYa2oPXnBRZo8MzkVoDaeW",
  "key37": "5UgG6Wu5dLSuRxEg8nWDMxk7t4bL6as4FvL4cksi2S3Pjn83opXRRyuq5fGmUfNgfoZZBuHg1vJtuppV9FXVMiis",
  "key38": "3i7vfZHqkGty7TjE3Hyt2Cw3Rzqm4onnk3GFkgxZpBkQefi2Wquhy3XQcN6awHyCpECf68ko3dzKgzgEGc6zfTYE",
  "key39": "KDSNBxojnuQkaVh8zckSjeyx2dobZTmwTtRUHhzfryZvsa1pGoWsc9FpRsjgSLT3b58A6DZRMcJGuXqxrzSFFdp",
  "key40": "4GqzzEpmVHEY9XuzFBPep6m12GfQq7sjLBFfJG3RvqxrUhtdbockC9MUtikxX8kRSGYseQ6aKWYUooNMWqS76Wbt",
  "key41": "5sqyXG3Dk9Yjixzxb9VBVJV7PQKNQypuzzhmryK5hbJWGgEXxXEUHJHxqTrSCnXhttqZdhXSh1FERqBEotkUiM4B",
  "key42": "3ifvPMsx7yW7NkTmznw2757KCmC7viCvebXoydP9FcR9WbhEsiNHn52h3R6wBaRKP1edUKJ4W3CLZSHzcch2Diym",
  "key43": "zibenYeJZLuJdQiqQpKS5UfDhs1gmNQEgoqcj7cvRXshVVQVocrj9v1YPeiJNYsiCEtMtzEJcbpAnoDwJV7Lg1z",
  "key44": "M1Ww2ZyejkaJgoKTAN64Vwk925fvN71NA19S7ko1BD53oEdfqypeFYETLU4Mzf2iCMwQgoAD6GmoY9uusUADsYC",
  "key45": "2JiGh7Ar5hBDi3N9bXqAqmkamz2GRauqMWjcn8BBd841wQTfmE5Bj1BUbV1S9FQGdDuLxyoPcFwSHrPsxZ8rF7pK",
  "key46": "22hZ9BA7X4i7iPkmiU1hzP9QbQUG7YAK7F52kYLJXcpRfVcNMr6qG4zggwdMKRa6bgxGwmRg1BDzMbTy7j4Xkaee",
  "key47": "4fzjCsu6wDC6acNvPEUhD67vJjkZcS1Kw1VJNd1W6AfJDKnTi6nKDi1hbtzjEdnEmC78XbAFadfxhs4ioneQxmt6",
  "key48": "3MuMd1jqzofgnCyN61Y8F4EvZxRAjWA2cSxMjn6cHpjHAzTjVk7FWH54Nu37e2C988jUu9ydwcc1ZXjVK4dSTvvx"
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
