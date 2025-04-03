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
    "5cWwp5VR28FSmVs3JDL7qSRgf8zak5EP8J7QGNMQhka7vKTBihEDfPNsxCUa94Dkoo7YFzUSdUHu92wotCgonX4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X5Sa5AfSE7edM3KBnZ982T3QPqDVKRLPcs7jb2i5M4srfdsW7T4jt6ufQtrcG2RYaBLUGkbEdRzMvmf5Zj3Ywfz",
  "key1": "2KRc4svuhYyWyFPxYdkgopbVvsMxQbWSNA5jfUZEauBAe3L1vffkT9kYJGaxmCMV3yErKV6VWjsbDuG8iPjeh7XJ",
  "key2": "2nt7GEDWjiZty9x262C5NXQMtCrpm2ykgVD6tceajxauUKBG3wMwwP4EabjTzzFyP1yqEW8n9q81pENChBrmh65N",
  "key3": "3wvCuz8tg9BNpa3oE8hKWA8VNCQUubV55WSgW1cB5rqvjpWYXwoQekQ8TFU1tcwV7iwgZJudmtbfjwLMXrQ5rt3R",
  "key4": "4F4N74Qzo16j7xxm6rNW8aafGZBwQx91o6CNRXSu6LyFRYNaGJvqRrqj7StF1PyzmKVU1vYKXyJXeVopLTEBhNPC",
  "key5": "3tpXq81iRKRpXs6qiNzyLKDevjbz6MAqhDqa6pihE1rLS7bGQsXRkQCYohSBtpgYJYmHu8zARqAWYkFbo7Sp1qhp",
  "key6": "T7Dgq2GpMqWsfRv7L9qtF1jMS3Et3n34emf7ftjhuCEaz47MAARn38QbKt8VzPjhq2GyaVp2hKbasq3ZXrPMqhV",
  "key7": "5Nwh7w1hxWDGsb9RyKzM65W2dUgrPiNWu5x5p8pRuyqtr4cT1Y52NNoH9cTfHgHyCMNKZhaVNfL8v68thGLJTqYr",
  "key8": "3Nv8cQYVm2WLeEs73HS1DM3gcWSXApMSgEH4BchdW7hsb336HiSJaMKhMSoxHyj3gZyuGYZLnzo7QVkTZQXvjYhB",
  "key9": "DuJDrAenZQWW5zdJ9HN2bu5hB22cu7WPdXByRGPFXRhjGaiL5QdbUN5ZVbMPE1ACbP9TENGt1upY9b6eNjum1Zw",
  "key10": "4g5GGCWW6KBegFe2LwyCSt2WcLyEsQuf7ywCSzNyLzNQoL81JSTi7RJrJwSNKJGraqioS6MLzy1UiYCRogWCL4XP",
  "key11": "3Zxq1o2fvvNLbQNzDbifPDYhqn6dnb6YFCWGw2C9Sjiv5jPksFWZUXK4Y4XGRyDJVqBG391vTH2ZWszAdpfbx9fJ",
  "key12": "4Q8NsHfSffhAh4JUpjCZwxehAzp7RUBa51uX5Hj54q9hBb3EEv3opqxXU5CrtUhzebs1xNdE2kZ1UzNnbHjo1wEm",
  "key13": "2C7Q5knVeJrBPWfYP5vbyLFiH9LQDBMJEFsQj7BREQ3rjSjkTXnqj2WPWo1VZGNVuBJwRNnXWxzmqGFzsECxZeaR",
  "key14": "3mJjSkiDhsnzz2amUJBoG2MqCbok8TjxdzpLH9NC1p5mKAQZPA6hnEDPh1bdfsJ15uNMjPjhXwyU4KwWrEtdwgcY",
  "key15": "3GvGvqKQvpZLakGhsqc46xDiVzw93DqVhZ1jWCbt5DNHD42xUg72yzpYfUsH9bVbiSsFXsHT8vYUnDzCsgRs3xq",
  "key16": "4XmbPhHzXPVhhq9YbcfJerhGmywZaWVST6FoFW9qFhrsyY3RQ28oFUPMBTQg1oJ3pmcbj9538CpuoFhSmgxzGfcM",
  "key17": "5xv1ozzgSvUJuwE685hTpWkQA3x7cbvPM3WMoV7nvj5mhSDXG7vbKVaDGa9J3tRVkfMRnhMimfrgxWq4iqEwtreE",
  "key18": "49hNtFNgPCQCK9QGZPZ4J5Hj5EnBF5BwoA7jDsGk1ZE2L5VH6KeHTkNjEp2bjkHM8YhCDnFjSE83GSCZycUkasHw",
  "key19": "385BZBgufG6iHRuUhqeUQPMGcnYPqCj6sr3Nobm3JeYCBcpiUk3KsN1ZCkRFgrj3Sp5hFsFK3A5Q1C4JhtmjRkJn",
  "key20": "27efH5X6G7HhtnLJx5d9HiP246RPSN26zwfEFNNyoNxfLefCa2BsHuHRXyyGzovamG3Nn2VNqbUgr5aHHej1kvvK",
  "key21": "4NVzVEJS6cZSYvkuW6XL9RxACJCELy15j2zek1rPJ7d7pnvHUT45GhW1kJRFtAE8tfDA3d3XgL9d7AnCvLXtZ66G",
  "key22": "5aVekCLi1YYWQM6rcYGxmb5waj4NnNQCxAqz2wshEmVY1EvVFm7gQsJhS4dcsegfY2r5VhV1Yj3bgXbNGfwU6oqH",
  "key23": "3gX71P6Ayyvf55f9xGH1ip5UUdNJC2EbRW7ZbP27J8mf9YnhqzMrgbfwLttZbfQtokscjtaX8C77mv514rYuRxdK",
  "key24": "388w2YNtg63LXsMZ8AVGaszWkQ1KKqvFjeiy5jAU9t41fLnJD2i39hEkH8RsQ6pqv6egZzQTybPaYfsPEWEQEopj",
  "key25": "5T497NgaMwz4QQffAnGizDa5xcLjA2sHZKPf5UAxXABkejATn2Tx3hLNqmXP1koCXnbkfctCGg9V82SqsotJnVJD",
  "key26": "5DVBSJqo8kzfnff1n6f2VrsYCogPw6uhtwokG3izCmiBySqypEk54bBoUuBDL4zp9VwFobMoMdHjGzkx7MqBeBtB",
  "key27": "3Un55PN3mQnjEA3jshy6tQGKegU57wJRRrJEQZgWfWrJ7TDWZRk7Gf8Nj6LcpYHJ7oGFrteELeKG9efWmkGReJsN",
  "key28": "LfCmwYw34urQch1NxsQ3CFM2Yi14ZibV2fE66QUPdEn8hQmNKGWB67DKEhoEfAKATmMRC7Ahp7H1aUvdxJuqZzj",
  "key29": "5UeEU4ip6KYaEQjpWJkjmLxXa4cDUaMcAAtB8t6oL5yVwbfYDUNt3VP7VbP5hwxRj3sgHz1VKA4PCUzCZtLezXvJ",
  "key30": "5HKGXRfwx5FfF7PUuGS7Mdsx9UJnUSPhVxXMtFLm183LzMXmhKt2WZAFajUmW4UPtrCfEcBKtnrezNJ4aLkGfN9m",
  "key31": "2iirv8sNKDB8zfauFBB3sAHAf5w9Xm1JXtXNBtr2SFLwQgtY3jyfb2HkgM1mKL6oNs5VPamHRWUpbSE8mfi51t8o",
  "key32": "2rQkDwtMZPqpAzJ8Bqg9zq9VtJAsu3gkFYiMvcMLS3LGEnta4vRJFV4kG3j6hQrh5RNhxMH9oU5J5HmUmYqEekwc",
  "key33": "Y5AA44acbcTz49HgD1AwTvuXqQLyY4TQVimg4jaf8T1z52gpXj8LEsqpKsLM9mdgZEXKDuHN1aQWTV2uPjx56k8",
  "key34": "5BSsNwM3BpRx69SjE9QY1pEA4qSQ3vyXwvf8d8jdu3dvvx8HjnLXgUWaUBuwJYYZXJ9tq9SPdf5bPkB6yrA5XpAU",
  "key35": "5jSA2ZQofkZPGAQEbxEiUqEGpgsEZVCwnHUVZMakc5fU6NxNSnasdCyxoWiUQPtYCCBWzxm53DnAcug4LL3NS5ih",
  "key36": "2DxJBDoWSTyEACemLXJE8Lzqa3iFE8ieasb2wqn3i851mQSh7JWqxx7qTLB2b3vVV3fRM6ibsKKAiEBa5YUXrk3c",
  "key37": "4vc2Hybs8MycZkomnFUURAPsQgbccSxVF26yf7ZPzUa5VUEJo9pcHMS9B3iz5eMWAAhG99xWC7hqESUZsKNovCHi",
  "key38": "2G1uCPqSVtqThPJdaELkoBoJ6DjvXazSoUNg3StfUKSq9WNRrzKX71R86WmTKqQgiHMJuV6zeRC25Fy18CvW72Py",
  "key39": "2seUWXUUHCGaYPnHXaRixvVCJyNtPmUn1Po5zJE5Ga21vtfa2ecH7eWAt2sBiAD8ig5RxE9rzk97qpjB3AkDH1bi",
  "key40": "zkKUYRTgWY4muEts1dtsuPDhNXeSMQXmG4nwKGpFTdopwmsn9psjKnWNGhneMCzQysVa6YzkeJ6Y1AeZDp4LXtX",
  "key41": "3WXyFpPXw48kw1h1mDAjiFaVVsL91hvanm9hsDDFWMqVjd9YX2h2j8nPJzEVxoykuRG9epefmL5ecEX6ha9PYXpV",
  "key42": "4gjfu8LCFd448zFK3coUPzvj7doWGUTwueQ3sj2rFbDE8XajrU5M3skDzaosDoKTWKYFscCPZ3fEUMMc6Zhcbvft",
  "key43": "3qhcWmZXiFAiwP8X7BLbMY2i75AdL91L3FHLBDqn3ZUtpHZt9TSfXWzQGFLuAe3eUqE39VPP9gkrxA8vk8ZV9SAy",
  "key44": "5isu5JkdGdeoZNaPDJLE6mqVneCp93kfGwbadUZ9237HVUEkHbAPoMhVgfjotusH1ATYzgYJpuZB4WVKrWCZuMqi",
  "key45": "4uhpxgx1Mi6a4yeMagY6JQ6tdoamBg2X55RaHUCqAk8anZ2HAGkAH1HVzkL1d7MfwScd2RuJGoY8ySeMKJYnJJH9",
  "key46": "TyQEPg2JwrXGfKyDbV5h68CRLSQfmM8oVPqBLWTG1fWwnFNxZTP3jktALtvmYXtd4XEG3KGyKPM6ffrAiHeQJLQ"
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
