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
    "48DKEpexLWxm3fKvAR9JPMCkoAPvZ7gpwVSTz3i46KQvFpEx3rGdtU1mZwFbXHzpV3MoYrJY6LiBuWozz1fHrmQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kP6gCFLQGfu82YYfrAYpsoEAyHeJyPcmxsNomdrkGUjGaXfPhtGWGeZxPc9yceiwjXLgCdVutu2xiPvnsDDbsTr",
  "key1": "3B55acXC1kux3j2AqwYb7r5SbDJmupnozHwcgCsixq4enf2XDdsAaPWAw5QKDuEuxp4vjAGEb19JkjSJYvVXLSwQ",
  "key2": "5Kxd2VoMWNbJojcHJXoRrdkHTgiGRcSzKv3QrbcMSJJFzXiCQiFzqJ4iLxESQ47Ugzxkcs5ZN3qxLTRxhhVJPBhs",
  "key3": "RAqku9iXeruypqFLVhqv2ydVYpaMyUUAQEaTWHhyZ4L18fFp6z9vurbVdJ8Gsua9iMfybBXAMKQDER3Yb1CqLsx",
  "key4": "2xFYmDk4iP8XV2pMadtBDhVfgMYCKuSY2vVfPKcBpReBKoVfNGzN8hJcKFLhBvWUMvMsWeZzmKXHncUEFnxGE9Z9",
  "key5": "4VtinwaHTVPNwDcPgENvB3vPkJU2uiB46vqCBxXB7B6BtofXfBRN8ko1hUezeN6BUjXHbarSsdo7AYRyUcJQfGtH",
  "key6": "4S7oiYSND34efcdz6WqhuG5z9JsTWu7qxBUmgSk4bFEhpAS3tazSHDPuRpfKyUmdbJDrxbucVVHjQ7HRXBNQCH8d",
  "key7": "2MEj3sqc3uecgzDHQGiNTVsuZquNBr2d18ZvdAvYHdf4pBHmoNNQMQuLJJiZgeA6HxL5LoLdtvZiuRtpYEcVdjJt",
  "key8": "2NDsna5E4RL5CLUt8wxRvdzjd62bBruKo1jkJPH6h6MKkN7LxLeQUykfi9B4P8qLzCRwx5YWHVgr4fmMPQmcsNHW",
  "key9": "PZFKXLq5hDVgeYDRxKGXZUsYPnK1W56RJkB4KsKqUKuQNvjmzqge2LrSy2RMFh2vh9YPKgo3QKsdKx33dLnJ9oW",
  "key10": "oAk5wDoS8xxQgnSJnmaY8WvxiC3seN3rE4bDquQvEXjGuTxMdcdKL5BFoNQknyys1tyGq3eBuKZGuSA8iQNw8QU",
  "key11": "3zMj6tgeZLxCVXi2W47oP4Rc3X7HPc6QuJsZcFq4nvmwJRj2VRUvWKATQ5qjWE4cPK3WACDAJ65JvU9XDsgB7CQK",
  "key12": "5B7AUjVDMUyGA4KpwWCS63pPkpeDoCFu6jgXyeCSRQSivfx1oQ3bgeEQMTRLhviQv1YUh3sJD31oL9pFNVhiRvDH",
  "key13": "4DHvnWEd2pmLkVAXA6sa8NDb3kTBVvfitZhTJpTJUintETRMaSb55SukV6mcWmAt32Qpb1sdS9cnLENXsUTk4CiH",
  "key14": "Gyu9hnXHNo8MJ6GZG4BEi9Cd2rkqhz27PQsxy1dTfHfj7b73AJsxdjw6cmeo7TZ6sEQGtSGi6h3y5T7XUUYjUE4",
  "key15": "ikLoD6ZHbJSs3MwXyS7dNVQMQnebbpY37kTab5sq5tsiAYtwdcmahC2VLMX84bTfTDLER1LNkd3Z2fCSjjcPHek",
  "key16": "43dNmPgKBFUXeq5AfYPAWcQDTUnmPaHNeNCTG2rMoHoDpRmM2MC5yqeBcxt8Amkud3ACDQheXVFuomcr98ksYxnx",
  "key17": "gyJaWmHiJ9t6KK7yq1E9kxE9UJm3QrQexCKZ9Q8xXiboahJZkxpCSVmgSTrYdSP738Fsfcgq1GRuzLQsFYYbQKC",
  "key18": "La4vhiqb4KThVHsYNBjeD1AaJijX33NoRAwgN1AamtfYWku5rFw2ovMtmeyaVQn1k9axpss7sags44LdQCUE61B",
  "key19": "5hLYPsmXqBS1THEyYx5cP6Xyu8zNURwCpBFfMAGsGz41iLQbVop9BmLuqp7uAVVRvnehAAASDPLLEZirVe2rVGv7",
  "key20": "9wjw2qzm47A6TnLfmrx5fA5Qhk4doKgEPGMnStVygyFCvNfQAnMM5TjdRfMzWpYCWM41Rzvpz5GYuGocb8LXhey",
  "key21": "2j1djSQhmeqL4mTXgNfcvLVeGicSxpiWzxbZpQbaMnKV3dsB3j6DuhB2ovzzttiV9sJnRpYRJmrTvvH6Mg1ZgbFk",
  "key22": "4wgjZ7WWhEMqpbEFgiSRMDXMos7dgfkStGBpyTKgm2yG6YX1MjbhhkCZ11CazWseKMiwKYBPQiS8akcMNpQ4ABB7",
  "key23": "4wBTkr3trSdL31BKMaMJxF65ztNi97Vyi3czeSAzWLuvCX7ZQKDuG65TZeLEf3GrvwitsksGNXDZEmY5o4aAHm61",
  "key24": "5AJwipF7vjVsGv1SBufvzXpyCK42YXzru8njcKG63HjdvZQExgvULrWHG5Rp3QdkQqH9xjxcQFTaU6iVgnNeZhS6",
  "key25": "2bpihzXPEWk4WfH1QeoDU9TjFfkYAoVsTgPmXzRGvAta6fKCQa5qBaGNbEfVsBh55cuJ1WpNUmctUAbLHu2KiLQD",
  "key26": "5S3BE2dBmEWjUionq2XxBvA8pvDvwbmLK6p4486S9dfBBAomLMuhmvVgDjwzXCbYnm7VavcqdLCqPQ8rDHgeBtmr",
  "key27": "3qjNvN8Zc1oQowNHyMB48Vfm5MHvqDwjbG9p1wcymUpZdCuNqo9YXpCpbYkMnan4K7izQSFqtPP3eNFP8dUZht6M",
  "key28": "5HJ2Uix4Q5Lv5ZWjjJ8oFrjbiLqPT5SyrbdDoSook1kx6wwppPQ6rdcM8n6MyZRgyfttFmPhrhFaBMc3oWCPP49h",
  "key29": "2VSKn8goqg4VXUwcPqbn1cX69fPtLpQpcvxKJ7v2LbuwVHW7nC7JRde28gkyTKip5wZJ5wTnawqoNnZDsLrfJzY5",
  "key30": "47iALX4ctYSv3dAMgCWmPWq13FTyWt1AiJobApvtKYinums2Hm2p7EpfGbvjAzVx6rpmr5JXkh2hhzdQTnwtYK69",
  "key31": "2jmeBBXjtStATU8RK4fNn9jvCL8knv8JKGvRSEaGe8gcTPwLREEDyKWYDRbE72UXzjrkwgycdZtmqMjKC3Gw2M6W",
  "key32": "2Xyy8p3hQnXpnHZjrDpMpVb27rtyzdgPdUs8kCoY4kdqHNbWcXSk9avGZnpK6PvREBzEZj2oKvveu2gxYTVN2qYc",
  "key33": "4bQSTn6uaVWqdAWTBszJfKwxXmovnZ1X6vkfacqAMBwzSmXs9DiEroTRsQszuHkWfoZvhsV1iqC59fdGFujNrzFK",
  "key34": "2HDJTTBjrgzu8PEZFzf86mHbrot4vLfuhx9c3u7ouK4jGwEZvzi7KnnYeMRVihQH9YozbQxKnv9VshrVUZYNxRSZ",
  "key35": "64SSDPGH5o9oFVThGy3AYXRcxfAppauKVMAo8SsxBExRNhbvwZY8HEpDb2FXBwVyGsdDmjQ3MtwSx39rQ27jjWre",
  "key36": "aULZRYaUfFi8ASKGyM57ukNXye9QAvdfcCgz5GmA18jkbvoFv9rxjCBQZ2S2BFMzDd3ggZARvVXjxeWBr83jQxP",
  "key37": "5uiN8V5KDtdhNisQQL247P2mCHJ1JEVZX8Aj5MAWPfHFp1HRw5SAgbq5eD4xEYVufZriLta6rXL8vgKAZQB7TBU3",
  "key38": "3sefx5yv6FqVfC7axKDjP3sH27VQg5KzH933eVCmyyYvogwW5kKJiFNv3cmAr1C9xhAqAAm3J77BvoZF6zjkQDS6",
  "key39": "47unKXTbM8w1XFtVURTTzAwr92C9q8WQt16vrmdi5zCZGcPwFcAY3LJHWsZkNQ3R24Exe7vkKraBZNnygPRTCyRt",
  "key40": "3E6yx6QppHBeMLGZqh1dCKfVUvJ5pR1NsYg7wYQMtWdYrZ13izsheTdw9nweNo8uXJDRQBvTuJ9Rtkga26gZPxQe",
  "key41": "KTrUFCSEDZ2op4PWHqu5ZNmnRoBMcN9SvMJDAJtg8TuMapWVpf6nd4CWJYwpvMBddeyzvi3HKBq4qGyKTyBqDpq",
  "key42": "2bbZBPdBrQzxxZ3cNizJPGzd7CguYQUbsdNXpCrjbv6oy9VUGC2LNoA18As86ieCa5K5HRCcUTcidLmL355t5td9",
  "key43": "5VsBuQjV8KESgiEdvCiZUVhVS8L7ZAhsk1AvDMWtmnxSvRLx9QdeCMoqvXyro6QGvYwpoCsA5gU3LnwBfr7JBkaP",
  "key44": "3zoK4CwewNagsQVUyZ12Y3x5Lg87NBxgg2eWbeTQLqhfX6BsU1zD4edbe2tX7vruP6sJXwanmk5b2QqDJahnMMoE",
  "key45": "376oNweqYDSYRoGVAw8JdPRBjAYGpFNJmm8ZTgHR5Kewh59LBhQZSbp2gbR2n7KuX4hqBtweNYFJErAo28pR7btm",
  "key46": "21jYVCfErsPEr8KuectFTFa8MW7BQzAgkKhSADYxAvHfMG35Y9QKR4DzB8Po3K4dooMeWirZ5Kads9BR7CLUpUwr",
  "key47": "4ydtQ48VqF8ywTjSmVKBDrFepupc4JEkpThKdq39xGCeVdZg6dyGgknYt8YMBsY2sLBX6rZ1cvdWN6hjP45kcB2W",
  "key48": "3qMnfZ1nM2DMxuMt6LgzbTyroWukmUUnY74xpHsfLqtMK2E1xX6fhEfZSNYYc8DiN7MP4cFx9jxdWnqZGAKF6TUo"
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
