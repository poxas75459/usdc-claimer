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
    "2vr13nv9Kh48YtacYXYAV5LsQWNVN5CkFt8PSXoy218bbu9ugMGziY5nV8kaEzH5HJzeoapfWrWH7VHGqW8K7wuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W6Bh5gVLyYAnGjxDJUkHwmD5UYhGqF7aj4H3CrwXBqU7h2NGh6CwAZ9xDCZyPCVbKLCdEkswYEgmSLB8DdqFyoh",
  "key1": "39JEu9vHDY5fz1NeyMqWqnbJrABGZ7tVrcsJxrEJJ4sx8Jf26mXnKzEgRzNPMeuVnAFf3rv47MxyycyCRKC7WUTE",
  "key2": "2aTaDTNWs6eCECD9Pp6RgzsbQ3uPhY13mnRqjNnGAfB1rtjN3KYUsTfxwFkwB6GJMtXAbX1jkxCqNWHmuv6bn1yY",
  "key3": "23dVKq6bgHWuswnDJgBYxGKDYJJzwC6cLSMLB6JqMUomWarGQ8TjmLSwgjWAyoqtGf19dfndGiaBni7XgqJaEic5",
  "key4": "5MAEFdegqGvMuXPtpuiY4JMQ9dudjKfz9TARpGnycLWv5dkhPKr91Ngymcq8BWCLeUy2aPG6VUueTeaGpvfm7xfN",
  "key5": "5MgExf6qoiNN5F2TDNp5LjkmPzYSKpCN3MLHvaYnPKmSQpoxAHMXHzAe1bpRMnXw2F5t4i6RgbYMgX5usCgDoAGL",
  "key6": "2FqDTpWM1ATgezAaZFjfkpSAfDuMr7mv9XZwXeBCKgfmERruF1rDUWykunYhPX8WDgNG87K3WuFXqeqATdzwR6pP",
  "key7": "4PrtrmkUCT5geJto8dmvimYHxdQdv7V4kzvV42AJGdm58vtYGn6YdnarhvJCWjNKeoNK2HvSyHmd3CPVBiD7Eznr",
  "key8": "36jVVqyxFXqUYqaBg3zTaVcYXVwpox4x1qXNwsUBCy1qXtdkUgnPQKEsBHyeoPU6v6XkP1hmkxkdXBTAyJfeJH4y",
  "key9": "4FhKXBHxJLbLG3gafjCV6T5izRfJfLqn5KHctqFsdioFpqC6nYyQvsb2SZWa5ajG7XbKTUeUEWFb2Bvh5CYXTfDK",
  "key10": "5Gid41888jJpX9HniysfrSeYh8RgoQvWvGtdTHy4yvaZrBWFbjKV9V4SKGFUvqJkDNoMxJGCLHm179KxpRTbxy29",
  "key11": "4fgE5Sn2n1UhGBUw3KqMtx98fKaxygAZi7fS7qiGGhqCVoyyWYMYLomFukpsDjKrWKNPuVFkoi7hEAPeeLD56cZ7",
  "key12": "5TvB5Ks6cvaa94mHYiF8TiSyTww12pfbubZUsk7cHyYupnqdTsQaTzLKLdBZXCiUmJNAAtQNcUJMo2CUPNd2CQuq",
  "key13": "5a9k8aky7HNWLc2qKtvaifSrxhd4EAdLciChjnMVV1d9QG2u4ajmeJqVwim3WuNZuUXfjYJ9PZYJT9J2UpWbCDuw",
  "key14": "2XpSv5pTD3y5upEfMQYqj32hfHpYsZJUnt5zZubdksvCV1Rits9pYXkp4JoMbWs5rPBFD3dytoxkDP8i2925xyxy",
  "key15": "8nmwnEdciyj67zeo6ZkHsnubLasEZRmFy2KZQstVm1HEEYNzKeeDzxBf1SywJwNCQcQXUXNvHxznvSJPLAKbX5H",
  "key16": "3McTc9bLgRESurGrA2abU8u19jn5rCavkpjRR2AWanHWxoKvpQMZAT9YRj8CfNuP7ugsEYC1yb3b5j9JYd4TMR8v",
  "key17": "tTqovZwutPVcNe5eps6oX3uA4TvSrXEfHWghypMNJ1HNjBod3h1XYuXGaZoXniWsmNeNunCRTdDSkxf4fAMh9Jz",
  "key18": "4jSAsSZzpVddBQpVymb19UUXhtHhwQzkaLiaZHqrea7PZN6RcUUQD8jT8JUTJNkqWXGAWvXbExts6zZTe2Y2LNKr",
  "key19": "5VD3G8gxD8FuyTDskEMAm3Jp8Rgb54cHbzYcEegY2kCZgGji23cbLPHATWdUMRFktsJoCfB8GS7joCgjJEnFj6KY",
  "key20": "5upiKNvsCQSTjYzNSQaEUF3fZYjHNWpCpL9gXguuZotYHZ97Ck4qimx3tdWFDtVixgmKSSZsqFxYCopf7MS7oV5q",
  "key21": "9xJ198mn5s3fKf8LVS6yGHgicfamLG1gf7LRLXcHd234D4nxgWXewkijJpzL8NWPMv4K9bcKKiLTkeGTckupox1",
  "key22": "2nJFQnvdGVxcf5ebA122nFB4ybXhLX4buJ4PUgEtmY9sapMUb7ZPePo2exzNrZZVKXftD6kETC1t7djwWrKgAt7Q",
  "key23": "2iGhnRWaLerQ5gKnP5z48FRNpg3T7Xy1KVLGrTEV1ggDwuiuVJj8MdmU54pqPEMabFPVvTXv9pqVrH4eZBKXZYPS",
  "key24": "2KEgQCXypZkPbXDcEgK1BpKBgZ8Z2t1qdEHregsqrfMwiVWzm1VE5UBA8pFHAdwUMPTHRqAKCDjDyHhZtyE7GFLr",
  "key25": "3n81rEpzVbzsYcNzWziKyMFyDdc5evEFigUTdoTPaAvmnDFbVSFJiHjBcqaWgPYwE42beXJXuu4dQHYkhRMy8fwf",
  "key26": "5XjCxX2fEFGnr6ZNwxPydKqV8mJPdRS7N1dmmgiQraKVq3cVtBaJLYN22JD3Bph59EB9G6BYWJz7ZiGFcgg2RCuo",
  "key27": "5srdm3xpD7FG8gbyjASxsrFdKWN6EgS22NYk1HhQQ7FqHG1iSwaJtkA2fVP9MFX4xjrx5C723YURWRhHkijE6hGB",
  "key28": "5x8dRy9vdksbWA8ic8tV8GUpCm2h7u81XyNmA8o98VNRD1sVydQCnRnP28cBdeFQ28Lequyc855CEvgSkuooecZN",
  "key29": "kxmjQVHMQmFjT3Gr8K2z2bCrVB1yCfeKmgoYC1wab918xrDA3W5bpDomW2LohCDvv9r3qc3BWBATjtnqRmn25aJ",
  "key30": "4yWEdUMj64WDhX2fSCtjb2nphJcBoKXp2vYnW5pqtXsmwQXTHBftjgpNK3PLvLgHFtAs51dUgLqFJiUUhg7QWR6s",
  "key31": "3C3J7FkZKRNnj9nPWgQiwZDET654ts9fyPcNsWThtiHQGQvZDWnCsefdQpgH6uWVzJAc2vpHPHLB6PPtdBy3n829",
  "key32": "26iFKdLGqDsFzA1mofcMmnTy9oBhvPt7T4YPVo5vtGKSz8p8EvhXPFq9q8W8j4DjaNHkfREWQhYpjFA1KL7Hk3vY",
  "key33": "2R1spPneZ5YmDe9QXf4ETBFLLxPfKkC7jcRRX9cWPWVSX6NMjooq2dVHpwdMV5p1fKQreDYKmQv59z8t53zY5tmA",
  "key34": "tMF3pxkK7KouD1DYK4qPwBQYE5ELZCokCn6YVwQY8uiYxZcm7NPMSdZxnK6rjuyxG47k6AFwySYV9SPdg7sWdKm",
  "key35": "5rZ8ahWf9sKoCqGzEhAGPohoG8xRDD83DGMqYZcGgtUnvw1ESEAKnnNLbdFqYRQK682AiYgDpB8c2HkBT737r7R2",
  "key36": "2jXNgPci98i8UYnP7VJNwKGRjXYR8ZBj89ByoYceVGwqYHjGzmzpQ5hqzSVBa5fK4Yj1Zoc2iz2rTWsGFy9eE8EM",
  "key37": "3Fmw4eC6RMr4kPkdTCcgDUVyrLLGcGYwmXGqMZTEzLDtxGeSpy2t4KBzP3NyeDM8tfLJsPeMuBsqndDsHbdzvHJT",
  "key38": "2skDvsbh9uW4kuTZGt3XBwgHFzAic7gU2h7p4urJ9mPrKFxDcR4oaKE389wCegBSdQvKm3Lhd6PR7fYuqcd6ni8j",
  "key39": "3GQuvEe7Dh6mDTdDXHXotxtCSnfbbAaNy4cCoYe8aTa3zZ21QLL2s2Zkmd3v7NGTrABTFeKKCbMC9Hes18aBHMzo",
  "key40": "4A9o8nB2tfFnKxYM3R7c6QAnL4M1nFuqkWbW7FKvFMcc5xgPPc8HUbs45aPG3t9dznBkvdDyKDVBGG8M3gekxFg9",
  "key41": "2ggJPWxjpBNZXfP3dcHN28rugwFREj6RGZE1JognkCdqV2N9izbfwYMYC9bFvPnAjCLLctr2zUwd9mSHtGKvzeFd",
  "key42": "4PxsNaSz2S3zThDRPFupJzPo4E3Tmv76LQVF7Pz3CttDEF6SGfr7cZQkBTNLTR5bd5uSuVwKGxqNqn38KL9s9MaP",
  "key43": "2WNQKMrabGn62BvcijRKuBVktVSL5mgcz4vNzoRMDW22bicaNKpCkiEnvz3rw4sRASAbhPcX5G3zwtfyZBhhqVSM",
  "key44": "32CgrsT1YVTLKGpZeP3nNmVPtgdNotb54naiKhUZh2eteBjNZeE2S3HzfU6soNCYHcGAZXZsEM9pwbewepcuaEHP"
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
