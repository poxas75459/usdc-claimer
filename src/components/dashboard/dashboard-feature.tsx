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
    "4bqPTZQxtj5SAMUtmBQ98zhPWEcfKAHNBPCHyHChtwo3adAKHbTFaxs2dfMqKkNnG8rGioCueXbLQPfzNzG1kK8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cudCxJqfj3gzjSSjydWzGLAeos8wVnE21gGmMCbFZyow7JjCmXPro5bgmSyYwtTJZKXaQ7NJXmR1g9t8usWqeG7",
  "key1": "4foZrmT57Dy6bPsj1koh1uosQddVqPza1rqCfBtVu15NeV15FGqiMLmBhfwGF4JWDCcRx2DTtLTuJyemmt5Dhkdh",
  "key2": "46Ec1TpJTcHMN9gTCPxkHcrzTCLHGyDmUCN49KtbarwfdGfwW5cn3ubCoe3dAEHDUtVym9xypYMZ6XJTe49phqDa",
  "key3": "3fEgazD3RaMX91H7uiPKSqnVMUPcrfXCFQ42ZFFvFdkCY3dSf23fZ58x5HAvGi67cGsQ65cG27hJfyuEJBL4KX2j",
  "key4": "5BiYFWd5kzYDXMTXPDyVijqWvgWviiyjfmUmE6AnUXLM7BkNoHNLvB2ihhpx7B8LMJ9Br9p2Bao19VFntA4yDDcq",
  "key5": "4GSHEv3xS3Ab61LZjKwJ3tirHdKcZfngcyLhTxnpPUWMRbuBw2DUK4cZamg78x7MLBKuU2nb6yc18rZuUo6juciF",
  "key6": "uo63X5CtPCtAiZbnzgUGNMn8Xdw1MCMuiDhAg2t323PWAYK78iDcxw9E3A9pBUxXjEgY6175qP5upWNvfwCyMcu",
  "key7": "5WMXDEEDNgktneyr3NEZxRVS4BeCsbXrEuqFxzMvEFxfKfQSxvWUQpNskMWLvQoekhcWq2PqTn6L32He2s2hCTxY",
  "key8": "5yTvvTx4ZHZb4uELFLgkWXPQXqRtsRLR1JFqXuAZoiC39HeafqUz826ioUNtgvWPvpYYSnJh95Q5zNZqH8EB4Yab",
  "key9": "3XdqUo5N37u5st8k3QfMeUyuFUJdKoMwEWbxFCWP1zYk4GBBa5qJ7kDCP6u1GLvRatcAJG8mCTXC5GBrxeAbfhw4",
  "key10": "3vSbxkJdTVNDfyaSFC41NFXDJ6yC2xWmATcCG2ZbaMwJB7gYn2enPScZKVgMLwZ7fMeRyA336fZK73bC7jdyAkFY",
  "key11": "2Q9ytnNNc6uD1m743jguvmrKe4x29Cm1eWfpKg3ugHXLLmT479RNursWn9re2wpVixYvQrFf9PJu2o5bT2mcUvDL",
  "key12": "3bySMDboXCFRPATVdjZkJeGGMY5iXshgc5KxTrb71W3or2bVu4KA94Dy4fruszNTc44bERHmsGeaKqJLHCp2txrr",
  "key13": "2JiFbxzJns6kWxg3W9JrHUgTGDJUXHNz9n2aJroZKw1a1wKCV9qdx66GVoqRfeXS9gycrZYHS4hYaNoZHcX9qARA",
  "key14": "3obrAZ8GAjutW8a9KzDtdSjj4cNVn9wbWe2UHVx9XY1K8XPZysjv6LLyskuCSndSNrWtnmMxiUwiovrNanyfRS1G",
  "key15": "59DueSHbnXBtBnnCfVbPbZYtJE2JjrNiz2z7UycjeyiAedxpuZ7esroJHUFT7prGrsBsHMMKLNiqdbPz6o3zUzLn",
  "key16": "5gZD2vrybQxS547S1YtrbhQkA5E6dn9t5qQKxfqB78brRr4tq3GZJWsrFRKWRWSCDtJN78MQeQqE7MB5wmGvZywX",
  "key17": "2tkt8i5Hx4PtvWsQbxZJ8AKyh3beUTRUhvsyQTZA5wUFDszPaDMta7uF176gxkr3XBqXEKKDJE4P51BmcamQLLxm",
  "key18": "1qh1Wx143tpEnZz55pMCgNiGdDq55wuiyn4amnwUosYkK9pm5yjtX8nRmrYetR9fiKvpn1wtJhnPzmNW5EE57TA",
  "key19": "2ZAxD5nnk2XhfKJRsShNLBUmbozZuH4n6HEhhadwRGmV7gpYEzERoKiEhQVQqeiKLSt1J16N4heVx33j6rsrtNGy",
  "key20": "3qgGZVC4D5RdpofLgN18tpoi4my7NbvGLchmYjShsjYFfLQq66QMVyk3WJpCRzsfreamF66PsjDfBbjfNfBhniaS",
  "key21": "54znMGNcLBvuqc64NtoZryRKCrAyVS4FbvcgjrWTKGFSaHA7Xs84bZoCJxqE4L1iFfA2hGLdvCGxVTUV7L5rjmzv",
  "key22": "3EfJLc8L7sXD7G6kmdQPYu4xLfPiPDGehjMDbFQAdUXX4vVy8ngJzkZ125LWhv9uzKRMYTFYmy62CDo6ZmQ5UG5g",
  "key23": "4H9uYronQhFern8YtGc6Gk8kGevoSSLrwYJZ4ZqP2VDhG7qV1trJ2z9iuUYxkZHN5ajKFiNW7XM7ihqiQFa4c6CL",
  "key24": "3kWeKFpTH764jBjZLeguJkYMfW8Qsf9eZpDSPsSqSDL1UkW8nS8nysNdgVSBf1p9MQzG7DyeWkCxtx1SwQ53Hpwa",
  "key25": "2NUYsf1fyZLe3G4WMbxwBp54fnJokfyrvwvkubiwPZBRNtEnT5tK8wYqsmfCwPfcFjtiHWbh37wd23xrKto8JZc6",
  "key26": "gu8gyj5JNHBfHU9k7gkUZjBNg5WboZoRQVYCrXZeohzkAeud188FF2r7w8WSzUjkw5R36nergpi2XfZ5YCLo9qo",
  "key27": "64bMyCMQafNd1Fue7TZPuxB4fPVcBCAfwvH36PGDupd77BxivaP7SMakLiEaGXZme9AR7vt3VYi27LgxmWKw4JjU",
  "key28": "63gJZ3thHPadHCHqFZv7BUTyu4sKtm3gcpte5eV6QXv76YPgMmisRUhEn9Vdt7wBoSLeSHSGSpZLQMJLF7NFRbmR",
  "key29": "5xcJgXujfmva5k68ZqgmmAtvCtAVJzshwqqHJTSMURg9ZMKgPTe4bdTxLgZy4UKnic8HfNLPHZh3YLqNUHCTXeDu",
  "key30": "3AE5DjRuhuxSd3v6Nep2ew6MzjKvtwjpnSPQ5ctuFRY3ct4ioCzKKA8d3kgoGGRTCE9KmVdBmtM4VugwvapAErDB",
  "key31": "3aNvX5t4yPKpTczff128uCa2qUQp4dtWtM3H3GCbVKuSVom59WLbhSFKumVnPFzPJy8AFPT7n113gczf6GXKGP4J",
  "key32": "2yUFm9ztGedsSg1GASzi3dGyurUu2Ck4k6k1jBsVcfuET79fdW9zT2ptP9NGLuSqfDoWh4Ktkvfh2H3Pxb4DuZrC",
  "key33": "59wnuUs8YhAjvmBxfzkmeoT1J7D5tMd5NFthWgX1TQdTFZuCNu5wuYU63ZfZsuN5mCMcg5fkERLiEeQsg2c764tV",
  "key34": "63cCpZUpwxgtKo53xUJRjuEVoy35QVKzKBr8HrLQqVdSYBMH8WidsSyXkvyp3P8dWVySztpu9Sd92eFJDcDjtVnL",
  "key35": "2qvHoupYJSDT1uKPeAwtSm2yv5StcbJWFBXK199oWtSs3x3VS1EybkvDy5Ywh3nBHQAJATZA6rtWqKpsBds6wZDv",
  "key36": "4w2WspNLsAbGxAZsexGf51gHRR7iidHWMGiTkRw5Saweybd1zWoNaR9s7H6UWdM1uabzMuk5nYYDiEi9sqj3YELF",
  "key37": "5TG15p2HFr9yoBnbu3d5528tbsTyCWpM8UD11KY4ySjVfMJfRUPN2an2RMGvsvWZYqyYAMtqPdevKPyz9TArDXvo",
  "key38": "smb4LuWmkqUKP9V2X7a4rVNLmywuFHzzMzoMGdPs9E2hoKsGE7DQ6313WL4Sr6K5Vp62QQWfS17AnZLckY7mESu",
  "key39": "VgH3F4S3HUDZ6JB9EG7GzvDSEPFExUyzgxb3Fhv6SCdZwDWAm9aPbDeLitg9RcyUAKd4ycQSk7qDEiLcDqbAd5u",
  "key40": "5XNenm8aJQ9E2mhpxDGiKeS23VZppKPaScTojQRL54V6YA69A2KsktTmDXjh91KWbu7tTsvFkDg5xLAJN6v2oMqn",
  "key41": "NDxLUsx8Qg5JtcJvRhcsvGS8sxzoE39PJN736PaTDrLe1QFT2NPibAd5QU9HYmWFvYYaBiv7HJoVi1Z1C32eMN3",
  "key42": "5G9RFskXPeGDgRZh82xpKBN6ALKxfUxug6nbbekDB4a4ptiGbTAvSzZRWGSZ23S4KYyEAKKHdUTC2ezqD2HaJ5sR",
  "key43": "24sqtZCoLA4z5opPgu9LJsvWNexPH6Y7wcPV1zgVsvHu7TZ1a4rq3kfJhnStQ3i4ZMCttQfmBixy32wEybRAxtfM",
  "key44": "cB2BD1UcBZpUKkPagwNJwhGjWfWP5QiUxHnhwR9pXnAvGzG82VqoqpoGtqGH6kUeyBbDwNZNVKDXCc4AcnJZHYW",
  "key45": "34yCAn3Sb1cqXsmfyD4KgRzjZyzSMHXuNGLbqJCbFDNz7jB58JAoxiB2qVLbs79GKevPscNn6TJ2YVHptb3jikPv",
  "key46": "5hXE8QDA1w5HM2KwsVUg5LSRALMjAW3UpYY5TJv7nehUNKNN3jw6xSfejZBSUpiGWheMrbLB2Cg4HFM4uz9GcGdw",
  "key47": "2QsksMxY6yQfYp26nhWK3ZSXbmQvGY52ipuJYYyFCVSeinXGpJEWqtxFm7SrdavNNWX2Cs56wpnjrk57byBdqM5s"
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
