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
    "2wRunhGBWswZquivenBFKdYTMMTq35yeyCBtJQH8zKHk3LzErjgobLACiCXTvCqDRxcvY15aEJ2rqCiuR4F7K2ix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SLUpjooqqbiCbmGtMX5EDkJuDYRXNoPEGn95dNJ6xVk9ELvKyn6aUReyAVFve1irQmUQ8K4h1SqE8KPosJiHa1r",
  "key1": "2i9HXs1k4HtMwoSys4pdhuGp1yJzpxxN7AJZaysAfLcPZkNJ3bEE8ZCaEenLiGbgMLVBCCz9d7Fbwa3mcMrkLPXx",
  "key2": "2HYe3N98irCsajjd1nxQ3x1NG1zJrmJwhKXSLZ4cDnHBRgHkWb2Exme6HsLVxpyJUVnsXmhNgRxRW6F596K9P4Z1",
  "key3": "3fNpM25LX73mGoBpwzcpfDbGragH456oSJfqbwMQvnuKqkQn6puwnX6yftNHtXANmTrg7ZfNEuEAGRZgbgCetWZa",
  "key4": "3tXZ67WGXRxf96LfozhqCRs17J59DPUsbTzgtuAVc3ahHJ9UM6622eoKprj6DQQkR4n4kAGPGZckjNyCT1xNKf5G",
  "key5": "4n4cDauVCZ5nojvQD1eaS4yTsx27t1KJePYj48ye5YLbyrZK68isGSnHaQp1izKKHHaB5Q2j2bUYMz6Xr4BT2LsX",
  "key6": "2C5fiS54tt2GSYs9Aj9q74vWCLeh4BkqSmb1fky6bpSR2toECHgtz1Y1rSSy9xSFSuuNQvfHQf29z3fdBuMZmTi4",
  "key7": "2vda6Tk3mm6QNfe92B6L5wQGDYVDPaBeAVxUrPAEvF2pwr6h1HwWmAfGhuDLakZuTLXnz9hp5np9MugjWW7tPU1M",
  "key8": "2va1Rv1NyWDKW4puXAKFcVahbFsiHuGcjZKQHj6MfVAmHfmoaczbQEYAdbsGzW68GD3b3pVM614NKhTbGnPfuZSP",
  "key9": "GLjo5cLRWN3QahMkkhMDCy9wpMM8zjx5c7maJAa29P4MLobSs13emCUm6b3RqLxivsq6j28pCWFjV4hJUfhNVeN",
  "key10": "34v9mUf628beD9XQvDKSGWDGvoBjhNu5PnViboAVd2GxosgRx2QeeXRbgzktSKGB6AZZduNYLBfZBNNnFHbAdyYE",
  "key11": "4io2QiUu3YbxHDJazsShfta2kQxpCyMT85X7WSLntdDhqFnckMSNHvvUDYcx8nTQgpcUAgbb3iyQbMZr1sU416LH",
  "key12": "5uj9QAcREMwo2GyRdi2qztrXrfsnxRQ8JSQrG5Z9X8hxS1kmU9UdNjBk8Dhc1x7Ffh6jNbygSYpuGaZmXmN5bB7d",
  "key13": "4RMQgYBLPqWKD24Em5qninwFB2XUrdeHxhM19V6VNGqGvRXHky3pNva7EF3mXXVDB7CLtc3KvXFLJgHNYSrf5L5d",
  "key14": "3T6hoySsy886spmc3r69vGRYR4MhPCYuox2hvS9qP5FDoJeGoKxwUNUEXKS9KWXJphpiArsHRu51UZcPkJoYZQiH",
  "key15": "3WqCbwW1hQybxVZYvFp3sByhktLHQmiKLmDRvvp4abNhorGWBi68ea6iYaX2ZYWmBJtN3RR8DYw5TuDymQ4jdEyL",
  "key16": "36YHem2C6viVtcnPRtXwpxc5awUYuSj8LC8A9GWiK5ejBBv6kMZB2G5z6BYkRTnZ1wm9SwEN7a82tQzGESSGNgbW",
  "key17": "2Gaszg3cPfsUGSKnyFQcx9W3i2AKzEkqwo1jy9wyXkjnExRa76vatUo98kn9Vof8YxKLwm8E4aVX8guxNPbQtfdm",
  "key18": "4JXAKwv4ffsvARipjzqGTLz5zPmnf1JXEJcCdnmCdeDwfBvWbfYcv5P4Fn9xMRVzbYzcqJZnJgmZ5a9SH7hWnXWs",
  "key19": "qdQzvQBUzzDrrRo5R16SoSTWod7fFd3dXdWmXzGrQED1pw7tzRAij5Koz6MUyRxS65Q322SCpKjojYusj8VyUyJ",
  "key20": "2QYD9mKve2BtiRDWXjCXwVHBx2Q2sF65XUyAd8yexHy7P7emviDp2q3YFfHyy8o3MVGiiG8qghkPGUYtjFZ9mRV8",
  "key21": "5XbozjEVMf7AAEQxDtqWWZzSfvGGaNCwHSMzxLDVd7anuAfZNd4W1URwEVq19ihjfrMUxdBPsafjcyLNxTwswR8r",
  "key22": "2GKTsnYbmjiTWCPF1y93DAfwHzE6RNNaV4Hoo31puXHMX4Ld6gnSa3xERVjhohETNjRhNFPHDG8D6gLRnML4yMRL",
  "key23": "3LWG4SdL5SPqEAacb1jaW4kbW9utUg2bx6gSF426rzDUicrJrgsMgfPyLJTkUKZYZVrAK4VT2YGVUSHrv3sbLGvw",
  "key24": "3kMmrC5FLPCTYVwap8LV7Q6hjDNVWoDDMTVhzTw1zb2X82aiwt33WZpxPRgSYvPjs5Y9idYXJP2dEphBRq9xhHJu",
  "key25": "6Res4eiJWj2GLNYLRmjG6TUNo74jMj96zJqWevztAyRy26XPnR3rcr6yRsG5hnvVpLHgqKNw1WvQdkXUzA8Mk5Z",
  "key26": "3z7j4cueMhgaNMbDAf13ttbaNUV3KuPDQFFduLUns9drnxuRfyxMbWURGZgNK9tw9n3mZGsVT5TBQ356oaYB5DiC",
  "key27": "3iZfTsZXVqQPvfyLqtxgXJHpb4rfYqkE97uYUqzWJ4tZWb3KSLVnJLMezigHJoXGWWVssJ4F9r2CKa2Cdj6Ka7VH",
  "key28": "3YfETpQ77CeiP54Rbu9H7xnGfW6yHNEwdP93cC9iXuBMHzrdhivqeKLpBn7aFREmBvj4PKUcCHgKoLqhYMe3Zfwb",
  "key29": "zKkiproCNXPzz3Hoci9wjgsnXTyiRAYBCiPNLEsdm8ZUYt5HYw7JpnsFSY8Wh5wANCdosVZVoiHmoSeYgCwm6P7",
  "key30": "2SLh9aPoNvdwRUpgTgJuwvr9o733THQXsbitqTc6xqjvrXKAnkfK9pZ8jb4CHNbJNrHVQMnVii1KvD3tvkV4PUAZ",
  "key31": "5DnBBmnAfNaKA3VbotpsYxVa2KFSuS3GMb8ndC9PE2JvWJd43ZjmqWAM9EkeZ5kkCV6Eieg4iPArLWWeWTqVmjXp",
  "key32": "2GS6fqLDACpnW2e5z31BhaQ1CaY1SFAfP92JDg4e5S69pkZhoXpRFyHyBEmJwDui2Bvy1cgnU2K3u9ZN4jD4f6pd",
  "key33": "3WcYCFYhW1wVmtn1Jze9uDq6YSZPKdFPmrKwC4M9THJvKAZ9MCeb3oPSTo5ddS4VTByAYtypmjEvCygoNuM8qXqE",
  "key34": "5SD3D5XuoQjTYvtDLsoHcmCe1wLee1MphvqKv4iqDX4XZQxPojifi8JvHwdPA9zfVpqVsD154QQw8E1FcMP96mU5",
  "key35": "anQydYLUXTpUcKuRvxrN6qCR3Z68NpPZ59ADuoejJxUeRV6Z21Wrae8bbf81iDpPp9qDrpZMRb8az2mpuNLw4K4",
  "key36": "4LyVUKE9LzTkN9o3DU2cYqz6AjrdbXvL37H1qStganNGCy8tK93HHmHQT9LofTvTAcjynyCmpkX7jhfY4dBUWFWF",
  "key37": "2Y4Fjm1BQ6jVbN3p4bpfNzC4wA58Q4UM1QdSRon4N4fdynBZnZCmynhvMDXaTKzMXwBoK53uAnBymk8RM2oUsxKH",
  "key38": "24p9bCFmip1B6DKExXxDwSFjVnJK6b9TsaL8NjQRQpxEtzAzrFK7E7oivDnH2tEP1pwi6AW8Dzr6NRgzJiJuHWAG",
  "key39": "2qP8K1NYyaavzq96w6WsBnYURhuAAvDD3kBD5jkkkoU5STu868FZeWR5AStCUshpYQfwW8YjYt5LEbQsodRQingD",
  "key40": "5GmWwMPL3pdzxdQeHquQ8Sdkqx8ePee58VZKZp2YTWTjvB9Jo4Uz2GUNcAQMWk69eMqZG1YWrqKdN3Ad2EtybQA2",
  "key41": "3JcfwRN5eygfsYpxwih3HmXAjsffiPmSafuXSsUdqxXb7MaiTkQyLQ8q6wvsbaPnSDz4AzaY9kUEtGX5TnCtDr24",
  "key42": "4FhXyaA2nPLsyV2CHjKw3ZgsaxD6iad2EgvYhW83JHJv8FQbwKMYe5ctzZeTUBkyLvQcnAK3dFbasMa3UF4PsPB4",
  "key43": "2pjt8HuHXeHHQhbppeBZu627bEvssTjtGA1dtZdw8j5wkQtMVeYVZPHR22VEQ6aC1eUPnSxJEjLoUPBurrJ2XLBT",
  "key44": "47RcbuS6Tr1nJtAK53dfvYPQFQHv9Ug92prFTcKe13JqnsmvY5TAduXmTgPDqbwRjY5txkDzFrVDee1yNUv65B2P",
  "key45": "5WanTcL5eBHuPY7cC7BHR7NNyzgDvxwonZyDhJFdzZbhfd2o4bSYn7xwZayKvALVyPcCX5xxZK9aXhBL2BhtxWa5",
  "key46": "3iQaojd64pH5zHY1QpEiC5c41qGFuQYNuJWDQczfDjD1Sajp5PqFCzEKYxhvheKRNL2ErCV4pTkv7mB4r8K3VZUG",
  "key47": "3yy4qy3qPcYG4A2HBaVoryfttuetd7oWZ7V1RYfCGhRU6giVqrB76CbnjdvjcPSn4VP2kYgpCt5Ed9CVKXUsjS94",
  "key48": "5TiWxhWfAZjRQpjRY3CR7tCnKh7sK834iaoFTaPHBTWSpST3qUxk1a74KeYi2VyV18PxM57QMJDzA6242Q8sAG3i",
  "key49": "2ihCUtAL2g1oimMQgRs1KVZbBQWoR1dnz2f8V6UhbP1TaCCRav27KVecsVc87GiA6QvEL5QjVBZvejrCy6PLGx1c"
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
