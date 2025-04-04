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
    "2LxScmLRaa16NNBfnoS9v8aQmLxKskwE9fVHKos3NuFWHLJtRTSLAphGmskZpar5ECjTQGbxiRxPMmqb5tyowWoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dvt3GQLUuXZBbDpsBjC5CwHxybhbQB7wjF1hqfLVbf9gGtWsPGCkfCumSzNj5JmiRM2NXQkDpuXDfvgCdpEiXo1",
  "key1": "4V7KeDNYxZXmZQi5gheKW72M2kBuBpSJxXgL3vCso8rJLAbeV2Cr8WP8SZ9SPvjqZHEUA2sthajinAow27wCH7wP",
  "key2": "2D1Zke1ZjRgeeyQhuekCRAKYKAqjGyu3ZEm6LRiAUKYvN78iupnYKTDueHh9AQ3fhWTh1NVVK2sNQwdAsxQDWMQf",
  "key3": "2qSC6TdQnh4Z5u5HryiZdiyHDPATyPGdhwktYRf6DRbKQBZ8DFkdWr4DhPSi68hayPx93bfAy5mTBHkny1rTWiz9",
  "key4": "285XU8Yq9P3SvhiRRZF4c4GYfbGArbS2VS9SwGR9mhiqoGMGNdazMVoPYY9eipZgKREFHhkvgZhmLcosBNyv1oYf",
  "key5": "364D8RAHTYLpptTFjzmEsWi8Ntawof4DLqLNhgaH4FU4rhgFQyzTGipU3ABAiMhTCsM6Q1mntusR96DPnXaqxfR4",
  "key6": "3P4o9Qgn8bgaHPdUKwVTMPJs1EZYaBYznhu27wTpsBT8d7TcZSGJ6c5XzpxdTrSiaVG29XfF96KR4Zn2psHzaWpT",
  "key7": "DZcm5TvFF2NnFUTKR2v6vxx2ysxEKZmStdkNBGyC4w7fXKynQBCwAGBmCZQfGfpU22e12U52qGDBU963nREY2k3",
  "key8": "2Q86gGKuVgzF87eLTkytnU3P41fbH5u6QWcNQNtR5ohCecSWbhw7imxSmwiXhn2MfwJ8fg1wWJRVKcSifLjMEYRE",
  "key9": "5fMcmcG8EPvT9m3bvbBz3nFUGDiXQ1kQv2M1takr4UkvDJefZznes58v9MtHLievqUxFizeGFmBRcXnF5TgFxYQW",
  "key10": "33bFAoTksz2kvK3XFUMctocN8RK1KTByB2yyr6eWugNw71oaHDRKPJZpWXHA2iKSe3tmeKTAEuD1yqL9zdQbuYhE",
  "key11": "2M5moN4peatGUANPx3CmtMZUdAnN2BVyXQXC41KN7keBqTY3xfwQgSLG4aPFpdgJrfvZUBH33EreiFRseTJuttRF",
  "key12": "4LDVv2xFkPQhcRkymrM2nDVbzxfZEvTjzwmKTxWVgdv7msM28G476kfPfpGrXJtws6hwjCjstEBjCVgVJZCAN15U",
  "key13": "3Zixt4tWVPCUs79RhmMj7bRJ34NErqiXGi8VD7exzChjhsUscNPhbDSUxUxGghvZ7G74YnGMWzk6b4iHrRGfSfsH",
  "key14": "2TpDq7YNdnLH2PZA4f8rXK3wgcvPZQAHjThz4vRXY7RPxprrav4Ts9vEFX7uYbXB4rBa6VZ2B4qdEiSgXriMXXVB",
  "key15": "2bY8SshVsp3vvGEFzCH1EfNpgo9gAj3ws2qqKQckoPhRZg8DwnWkqqEfbEeVv5xxocEryUYT6GrZGUzfmFykQq5x",
  "key16": "4zj1AeHUg971NNV2sZJKU7vK59dvGxPNqyB3jJZ1cGSq971U4mRkrTtxXdrNpZKMcbhdqshcrt4VdGbgdT7pN6oq",
  "key17": "4StD1JvVv2gmH1J3Fd9C98wmPps53BMyS1wQxyKkvHgHM7yaCqWeEm2fSS9y9dcewJWvMPyoUwbj5vPiZz5r2o9z",
  "key18": "2JAEmbYXpfmxjgypwUyCFPtGiWja5rZ2pe1xjJCssmpczfo1GK6MWeMfc6LqpzxC9ycFKs3wxqRPE7EwrJEV5gAN",
  "key19": "2rU2SVdWoXdSxjAht3HEKL8rAgvQ4te7qM2Djm1gUxvap4o3MkWRpngBqS6gYFYU56LD5tTmFZSA4PMd3JEpZCxP",
  "key20": "3qd47fN2WEJvX9A5UYoiuPkxwFWa8bVYkA5dgTryoV9t3vy3AXow9AB5bAnGpzA7wKL636MfgD3azsu2MGS3T4tG",
  "key21": "2FTJdAyR3FRmRzAcj2b83VKMEVrNi5pviFewJPoqKPpzE9jetBr3xvrQ2NjJunATiSfy7oekamhmgWbuJNtQ3m4U",
  "key22": "4JWw1HYDwH614fDs9z9J5yXXaCB1JotrHsjYTGPn4QQAjbxUkJvp58kUQ8a9uVRU7CPzYqZE4mT8en1e68AkBnH4",
  "key23": "5nHDjWqHZu6hrczgg5ZjEdUMuXUbZefBJF4Tit6K2g6YRBbEUh41GBFiCtuwEypQVp2NE4UmQYak4TyLtZqB8k4q",
  "key24": "NTFZeRpEvP9JBpP6giyM3Zbb5spz9ak2oKMZeiuokVWk9CV6AF1uWcANhnmDdHXukmAPVRACg54riXJ2iH3uxmJ",
  "key25": "4fixt1mW5EiDaLfHG4vMNohh3JeUpDWPfBwb9rSQfE3LRoSuqfzsNDBaUdAysgJHzRDsfiYwmqApn3AmMjPTePas",
  "key26": "3nf66eaBa4FofjVTsREiQF9NonNtQup9gq2Sv1kjdS7uf7SgTmZHm8tYvLwnaynE1Cc6KqYdfx4QitP4NRRyUMsm",
  "key27": "5aqHSKFDjPJf8DfTeNuB3s39dTdhmf28ZkZUPSLCYR69dKh55YYYhXYTa31XgJcACHp9LRkUEJVJ62LtjzBPMtbg",
  "key28": "35NFBNfiMtbUW4cV3wbQpoCHWGFdj3wcyRnxinfoytPgPKiSWo4PazPdn3vmZev1MGDyigMsXbztdYTBst1Dhxvn",
  "key29": "5LWqz2KLBpfDbhwj2omNmqqihC6A279QkNjgrS1SguAcnsxYnEuX3o5LX96swTenuSPfK63iAdoNheviHzwFRAwL",
  "key30": "4r6dWtuEmQUqUM9tWm4DsDPYGNcUiVW1AZ4tuMqWX6RiNJ9ERy98LV9pD42hwLCfbAai4CLvKKV7ya6LVDT3LB8m",
  "key31": "rQ5bXF8XNMWp86DHyrAEo5HQzmX9GWQhrihWN72S25XzxpBNjJ9gkKhKwAtcKoiNS8bsB6kiXfxDXpLoksWmFW1",
  "key32": "3Li75VByTqd96sY8WxQgx6A3U7ZBBE9ZwHwAoNQs4JHFxMVM14BZj5ca87pGb5pMCm9MThNAdCPnhmhQQ4q6niVq",
  "key33": "5LjB4uvTqJDeMeYwuC1eRvUTUYYjKT5S3XspUJnzbLCxEtP4AxVkfajeHanUdYyhF4iuCgvn2tLRCoA5EBAexoLS",
  "key34": "4JjuatfmBXw3cQB6HVL6EYRLKjg5gYUDvUvr1WN3HEp1BfPDUxjuozxVD61bcZeMetSS4myshE9b4Xp76J9uQGyy",
  "key35": "ockCzcLNeDqLxXpzozNU872RTqZJBQ5YLibnxKSk9XqsKBaRGoXU54U48NfMnUN6qCBGVaWjSApzeieakXtYtqY",
  "key36": "zqUEZdWA5wFuGKumgyqdLsLXHU1Vj2Uu9K2BivB7qX73uCVwi1ueYNU2RaL3WfjWqrm1Ai62EyUh3RdYwnWuNC9",
  "key37": "5FWB2Q5e2WW1KnYFEEmgx3Cxv6Kcx11VaV44SqwQAuHZePviEFT6U47edfZJRcg3xkqnauL8MB2uZy9B5RFT4jAJ",
  "key38": "2PCUmR4AJSx7xQETVXqcS9hR7VVVPyGnMwzXxZdLXieWpr5fe445xdfNRARTxcqM1PLoJFRrLZscL4zAT6928q7G",
  "key39": "2goGRpkndVotUaC4WUPx7VGKG96m7n5M87rXeBNdSzrVEa2Dnk7zp52uzRoD1A9pcA1xfFsnzQFSHLXbCwyC1FxW",
  "key40": "24oGfHttG2aLzucEoqdKnq6r9KdtjsgPYjvqEGZtHsiKBB39GcB4aPq1jKTNh5zNMpNg6owC3vC4pjNRQt9N18pL",
  "key41": "4Q7urPxG6vNzc7v5UrTm7xwYFfJLb8xaEVF74ANXBEkrhKiGhcMBX8GKozEcVQJzoU3GQXmJ8mAFqUMiz2BUyU52",
  "key42": "KaxYww1VdXu5iKZSRiBvyozFSDsSvHZJcsNNoegm5vQDXfQ4DU8nEbhhV7LmhHzP3LquZwpXniEANbsVNbPzANk",
  "key43": "4D7RmCqFcfn92dZqUYjtevHZWVeKYxBgKiexx2rPPGPsYMfrYk4jM4ZGHq5U2g1N71WN85qyr9ZmUDRheCPgMES2",
  "key44": "2387tSRuRJK66Uri3KrieBKdzXAyf8EWSCZmsCGZg7BfLtqiFBo2q95ZkUM58kR2PYKK7p9HxeJE817CQrDFSmrh",
  "key45": "52Srm8YhUATPNDV41mLLpdeUYc7FwGQN7DZZrtbAvarbHQdJBz1z9P61nME5uqAVykzjymr8a7FRBp17oPKdqL3c",
  "key46": "2HmTfd3Ads2TN5JeN6W8dkK2655jBYWSbqT22aVwfh8wtEe85kafh6XKSDW8otWF3cB2EkZtZAcmNniuhgBaQEhY",
  "key47": "deDEo5hhadums1Kr9WFeyitBsroq4Aqkf7hFqnQR6vSp4F1vtKaWhTD8rbrG9W2uhcjypzZUm6Pi727KBKfRTzk",
  "key48": "5AErRmCivAz3Wqp5D1KuocugmVXobb96vVSH4GJW2TwJxT2UcHTikpM6qUFvQn2swAdJNwDdoukzSdNKbk5ud3q1"
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
