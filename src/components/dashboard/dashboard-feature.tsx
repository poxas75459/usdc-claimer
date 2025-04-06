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
    "8UJ7ZTHFSncuXeVnYrA1KQ7AXq4rt1FNtSKjV3jKWAMW8twur7WvhiCKK2UgA6QwGhdnvfZzrLFcNZbLQbsXBWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oxaJ27HGBg1LojpjsH6gaeoYrhqqRz1T4CzUuP7dsyosoyMJnh9rBkUYPiMQPScy8wiBbeGDWzCBGxsqaBPtu9r",
  "key1": "5S6RnZGtdnP431bDLWDjAYrcVhSMEU2gn5CS7UBsxDXE8sJczb27Q8n34Q78m5qZdshNKTWxfnDJ7yx7mzp6Ti4d",
  "key2": "3vnLeT4735FnLTjj4NNn3gXSTTghHrDSsrmNEtKWgMRva1dvvZec4RV1sLLNw7cd5mQ7c7XjXhAPzT4cvd2Jg3P2",
  "key3": "62mW4jHAynfMPA8Fh8zrw6c5hAAyutdFrxEjVkJUtn9CMrVzWTkPfAHjzNkmm5u8jMcQkqab3LNBw9ZHHtP5ygGE",
  "key4": "2c4M2WzrQedP3nUsKxg7H9rpDkRu2XLP2cdMfeHNCXNo4sc2DTut3NXnBnj6oHMGc2gE8739gMb3i4hsNvNKL6A7",
  "key5": "63HaFU2tySSUP5eAv7dAkqMYLvTYucF3Lifw3ZdbJDaxqRrv8DnBArh9mSUP3qo3RunbfpR2m8e3Ft2GXAq2EAjU",
  "key6": "5hBNU2yQQkCLxgXjXzXst1smppgd2qpmDvVRXKRcoh9g9R5B135o4Xup2CZfMhhYCsFJ9U1YDomvVZbyY3noXCUe",
  "key7": "ZJu6qAaLMwX8cmdi4LSWhjHxQTJt7vFxtjMJT9aWZKRvpwLUE6ebd388GaFbEdQPMxMDkxHeqjURdT4AquSstaF",
  "key8": "3VxLcLLeoAjKchPyT9WeuySJ6C4pXgdxC9QHvAdp9Dmk2o5z1aMg91wcWKRNTXedipGnNT8w8JD6j8PFApH9DfEw",
  "key9": "4p3E3A53p7dP3QwRWLy7cxGZNTKRBr5kqxQnYUy8UYg3Lpo7Z5S8CEUKiHGtnhXok1bZJyWYyYxjf7G6gE9EKHL5",
  "key10": "5KcJZ2VEH4fXZC4bxhzpUSDKcrX7fr9iVgGqYmwjXUAobQuVUrRejRZMjaUVevpbVm1pYBEqJJoTQFBRV1muX6cY",
  "key11": "4QFs1QyAsSsG146MxQjHrArKgqDViyL82Jwt65XwqWjN66vTTKyuGb8ZvMXJXF6oNY9io9jaRGyLB1WYjKpfYwzD",
  "key12": "3exv4TrCivTvdYXqHbUSZ82TksXJgQ57UVL1Lz6xKrdyPszYW4ip1uhBnZ2qrz1Fa55ZQyqGtGMk7gXiEXjswCqV",
  "key13": "3iDKfRjGQpRC75PTvEhCzFXHB8o3tEfTAvEu2DQWNZob5YPDsEj7k5XeXBQegP2AzneFHg4jtf8rNpkTEgqr3Fuz",
  "key14": "hjV1QJCHxqNmyWD54xNxZgemjwitnSbt6PKiuoHAhVtpU6eDfuKQepwnYgQ3c3pMR9cpjhHzw5bbSREZLs1AtDp",
  "key15": "vGroPEbWkhVoEFb9h9HyReFdYigBQk8GmrwvTngfb8co3fpuykhkSqtEnzVmk5pqT5ojrTyj9P6DWdKzH1NVsu1",
  "key16": "4sRawc3jWUzMtqc71LSVgChmYVR21ZXL1ssyJhi37YvNxTW8Txguj25WgDb44mFcNNrjAZwUHN2u3WW5RApx32FN",
  "key17": "2STtaXq1pxzGp9X9ChmJZxngtidcb3n6DSaaQ5qpqeYMQSft6eo2czMzjHjko9iCrw2PbgvF5de1K2hX2mxm1UWD",
  "key18": "4zXsP8162R18ctySCBKxAYcqgBz2X7aRU9TeDc2pxo35sP1NjnG5dQqaXaWwzC5H9MkLMyhuEgKrniLc46NTx8FY",
  "key19": "2GcGBEWYBgFn7szWVmtgYXpwVD3vGzHTuobNSLPhn4Tj94W4Vs9jphpVkiKPHp5x4nnAMNEZJyTqPzzo4ouXsvZf",
  "key20": "5tSLNScrfeTSc8Vb7eK5iLEgmCAdNRQC57QkoomeNnpxVcg56fYf22oGREtuAhi6tzjzSMedQ8kJKEjC7qe6NFx7",
  "key21": "4tHPUaaS8yaXqoBikg69Dy1MuWSgHdz5bGu86kcxRm9qwbTtTMmVEV6z48xMcr2KYweAKoern41BHQHYGX3ZoiS7",
  "key22": "4TS97r3aQmPrjPPwVH7VDFEczsDrUL4sw8KUbEXzABYwVHKKtXwhWP1pDMqHfFBJquUAdhn9sjugUayptQXs3wgj",
  "key23": "4hABJvfRpgKrWA778ChPktmRhsAJLKqLFQTrxiTUg397M9MtbYBueut71uycRdJ5PMPHBeZojGFZ6fsP7PcKE1v9",
  "key24": "33VaChEfXYoUT5Zwz6fogBdustaZnK51EY6ttNynPjiu5vAckzYxrXB1ra5HQu1VtvHM2rbFMNejuDMSW5ARdr2n",
  "key25": "5cHRtLzsrSrsRqtQuDf9gt4c2Rb5YvYcmVE2aK8Nah642qtzpNFr3bhUseRA43un5V7AdjaEhuK6znrKqAhUn1Er",
  "key26": "4vpdSfZuxhoxVQgbj5oFfrKgHqjb5w8JgQrEjrrioKi9eSfipVBTVELbqi5zGVVLEo4xM5oBdRWCPyCwFPFFkxhr",
  "key27": "5A6K9tYA9XZpeyr8LaDCHfjzLaRoPFjQTYDX4b3vEMjzCKyZtmyizUZ8f5FqXSDrvtBd7XgnWJrVwQPeiWNHCQ1g",
  "key28": "62PLZhVkJNNX6PFytrt3XRkzn5csSDhfLhaoFz31t4jtnFK4gYEbVRauAow4KmDwtiiCVXRy4xeuZ92Ms5LbRca3",
  "key29": "ospgTqi5xQTsuyTaeeBeUQtS5wzMQ1rVzsiFjHPYeJE47hr7wYegQrdbeEJCLKa8SuJpj8CieD7eYpKLajSHWLm",
  "key30": "4cN2o1MhzdoxJTpveVUB9daDXdcdNu16ngEvNKUwmZ6JRtoJoaNgj7sp73YrG2aD3MPBce3es4JrpKvkb9FgdWrZ",
  "key31": "3jpT63yk4JcKDk8eVMz43wvd86vF3PyAJoBWcnZBvmS3ixu7EyrYuL5iHFy1sPrTgVT146ceH4cKC5gEPix5YtYe",
  "key32": "5Voe4uunqnmmgqq5xCzbxTDnkBhkUHfPpfem9s8mLCgBcNNpNZGmAZLUTXYLgRU4zowWbZ2tmy4q7KTmivHzpwiN",
  "key33": "4fPCKaB1VoteFmC2EPqea6BWWEimpY2tNBu2oBdMT1qw56b6wHipv9JmrMc4tAegkKvFbA7YvW7Yo4WSPGZW3r2k",
  "key34": "3N34wqTgMy2fU9UwhH4A9qPozap94oKv3YxbQy3zRCidKZ8ddZnuhtF5sphCT5T6xGZcwwQHarh1md5XcB2J41Y2",
  "key35": "3NKyPUdN7zeyzpwwKHLhENmW7YWbW9PGaqqbSV7FetXN5MAetdHaNq8hBeBDoZqAGLnPDXiL71AQNgPfacN1L6HF",
  "key36": "5YabwjEjEgJ9Yj5J5o7ZuUwUKY2EY4jcirU4QP8NFezKuZxVdBKbcbkXVvL4ge5aezAJiDWBg1k4CYBpTdWjcwyF",
  "key37": "5sVxtSWFHawzooRxAgEz54E67AaVuxF8un8BiNSYMVzgM71BC6GKNKh6Q1RtVAeSAeQ6V3ZP5hTxo4adYRxJ8qV1",
  "key38": "zVgQqBPw2xca6TzHyJrYiMQdULhhtTgZ34bS5q6y6uNwRyLKvG4wNVqJFLf9eY9yrAiExsASd6nW1aHg7zzW1Dt",
  "key39": "4sDP53XT3b3Up28BqkejeBEbgiCV46yBoChsV7nc33ggjRZB1NDf7twW5B892oGDutBEhKcfGuCbXiYzKmb5kSRt",
  "key40": "2fvaXjXDRaWb9WVajwaVQ64CXwEykGz4iTcqNp3akr6N7LMzPp3qdE1qpJidsJqGCQnSgye5ikQt9dnZghXrmzWq",
  "key41": "3YnqSeCvrFRDnF5oxHFmdYfMcYoXhDd2r9kyqDbG5NJxbpy9nSuu8M68pEMfCzDuxDS1U4cCdM2C9iJVfqSrHf7x",
  "key42": "37SvnCSK5xTYg4KW9pL6jFtMQcgruY7jjb8aDAEoh6u3TGf61B5hisksRazXXbQABHvfjk4idMunz1zK4rdY7fc6",
  "key43": "2quSeTmmJmqx47xQkFwMY5r55ajYMJZ1WQHvnyPDjJwuddhTQkNLHQkiTKtGWRdAeG22V3SwRTGZ2RywmWasJ5DZ",
  "key44": "5sBuADhKcUo5CqURP4KxgueKVFbE4HMPnT4j5coBWAUNsDPfcrbZNM4SfrXdnX5AJ4CJkZCquBB4TMFyp6tREHVq",
  "key45": "39gKpDHrHko6tQDNHR9eRzW7cVG2SSPb1Pbq71qNv92RuREWHEqGwMWjDzyQoaBLygHDC2ntgqf6oesyr9yHso8m",
  "key46": "2smaiQp9m5r9NxrJZ4pKp7nmSmiS55g1GP7RcUmXsj2KyXnY2P1CQ16tecFRVMKhshhqEddKc6ZsWsikRfDCnnhm",
  "key47": "5SVcqmtMkHmyk9X12A5BUe2TCaKFgKLfCFQoBDPMXgGbU1uEuSYXX8QWfjrRPGUThRVW8HRyhJNj8oUGKzvnFAgt",
  "key48": "4UB53UNFjnCAL7QoPdC5wEZ9sy9W6PFUMxt7kUqer9jc9KdCsmGRqCxCKbxUyG44dUoAz2JH7ApgAbaprW7aQtWK"
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
