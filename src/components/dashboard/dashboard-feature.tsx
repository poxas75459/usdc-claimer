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
    "5yrJfM1NDvzkRXrPGGZB6DXDmejGpombt1KNF55x7B1HXLGAVTa4CstKZE5jR3n9JnYPaW76KxEBEG4zmiVw5Zbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZuSVYD3DpS8rcksBgftzvTdcQ7gGKLhLenG3H6fBqiqLAoCcDu8tjZzvvw7WfFCKwvTG1mQhfnmVXhiVTET9wLD",
  "key1": "5nQYwFsmaRHDWx5XbY9cZdrLbPkGkdfeV6mieFmB3BUmadWusQEBQUzUn2FMxee4q9pzmPeTqEgZW6B6ehPkubtj",
  "key2": "5hKUg86hFNibxgvxB1xw7wSaN2JXzqYprHMHNcM4nA8JYgX89mKqdZ9L6BcvSL7LwNsjiJPC3Mu5B17vSQ7TUw4D",
  "key3": "4tBCJTwhwpFeMDLjgK8C2DAHjkKSSf2vrvjkxDYDZRcsdXsBLRgcLWGEj63qYqoJaBQhpUoGKTga2yPqTExzfGYN",
  "key4": "3tJbcL5rpX7Qabyrv3noPj2qK1s5bmFsk7QxwTS9gWgmQMMiMFLza3A1quZ5asxGZd5zr3i2eTQaNac4GEKVcPpe",
  "key5": "4LrDvscHKVVUNAvmzDorqwWpaLpN84pDgqNrvPe8nxpvv3ojMkMhgkiY3C9pN5Y5JVRrBV2YtgcgAjVxos4CsJ7A",
  "key6": "5SjcqhfzffC54v7s3K3paabBkymzbLRCBb3RKgwX81qgdxCmq5zWTfbt9aDETz4ukZBziiEqt4WAMXEUepFwEs77",
  "key7": "4cbZiTB6Z5mGFkTjvxHUYpDuuMLYyP3V2f1HBzaJM76SzfeUqRW31YFFAjmpUcfWCaeVEe1raroqkMXyvL9Yp66W",
  "key8": "5G18YumjSCcKzsU9WxqWeN5Ne3pp28G5t113hAEnRy6xCPP6Pp6tQ9AzsJTdMRSCwY16DE1XjXuw36E3sCnmaxRu",
  "key9": "kaRU56BmNhL3BVgTVAGwQkeAYcGPQBopkEYNfs53W3FQ4vmoqXeu6m9prPJ7ZzoseeEgNfyfHhtaXS7aEFdiXS8",
  "key10": "65sSVqJkMM9ttfNPpA4PtcbtLTP25XVk19LWi3BWzxPBS5RDpSSdg5D1e2daFi6eHPX7nEHTpDyugAA5r3skKAbG",
  "key11": "4yxWSi9D9qdek71cuy8JjRYF7coxMKUFHsetSr2ntAVQf77hgMHmwSZR8Xj2WZbFheDjXT88YMXaFR5D44vqk9JJ",
  "key12": "4UPxezhuZHdon6nNPTceJNAm4NpPEKq19yHRkK5K2xAR7nhHFEmRCXWSSrBVgwumKvnYEWwdBLpze5ikHghSJgQ9",
  "key13": "2L7W51iS2PFp3mNxHG9mrEoYzfMTozadU4BcTRbDRULKhmmkbGFvC7XVh8Zo5NkkAdgHs5AW3VBcFoK7EQH6m6zo",
  "key14": "61d4qmYvEZyaHfA5cC3k4syVjHtGNTJnc1TzEMwwCV8KwHzctadA1QC7G6EeBFdTr4pL1amifBmBiAJAFS6E2d5d",
  "key15": "59u5CgsawUjgs4FGfDWo38q8wb4vE4nFdGqzohDLuHTgxjDnJW1huCALA475oJdePiRs8Rh4WEnFZgVJqUTBfpWw",
  "key16": "48776Nup8ZSJgsUvWEqU2s53g8oh62TUJymaYUYSRqFCQQKNHCNcnf2Pcft1zRgzUjAT6FN8DgVbj8ow5yeaYPYi",
  "key17": "5t2QtVacd9dxjehb9jvBx2LyD7jZ3K2GHh18vkLXikEo9a4Y5AntWNro3RfarDHhtWKuDvMgdjcoiZfdRyFd4cka",
  "key18": "4vgqNUnXekzyNXfvwduBXixKbNX1jVEhjsB6tEJ174kvtibcLqqUmFYoxXy7VTtBjVxxSJ1QoKZoVYtZaQZPpUhY",
  "key19": "4pgCHpoF4z7baUGiXiuQGFXSsknXM1Vjz8u9kJbzbq61J2DodW1QSViW4Mj5KpWR3TnqELLYG1zRqnuFVCqZDsAz",
  "key20": "iNXUE94HgG8Tr1MoEvapJGeq6YkVpkjLVeHxiBmKCM8sxwALiGvsgtf7pmGNLFndrn5nkk3HVYWPRsBFmd2kp9n",
  "key21": "5c7xh1P2QgfhvwiPY8DGtqUnhQTvr2BAeKJn7pD8ZBj6Bq32JGri9bMgYvuo1E9ra4wwipcx6gv9DZRLU7xi5Z7T",
  "key22": "2boXSHT7sqx8QKnGy3fXtV8gDjmM12sBmMsV8wWBSQZDFERxj5V4KCy44g2ceCjBGRvh82T7fJmSyFr8UDVv29c4",
  "key23": "5cs6qPrWMQXqNVdDBirzCcfRPSTMtWxSmunHtkKy5jfuY9uveBT6tMnWkDixU71pYHvPqDShj4YtpJpiwdjXrZxm",
  "key24": "amGpTuG4XAHVFvey6zFWL1yX5nWa8W5m4AxxwohMy2GhPpsQZXee8itmagrjf33zcM2CvhU3gGZvmeSS5hFGt3C",
  "key25": "4siiFXFiPSTLxZjQ8ETq3dkzLqeefGBHcVFuKYoEap5PLq6oZWsWTetuRxpJBBGCnWEocBTzypgMRFnyGcGA43UZ",
  "key26": "47LK2jRFxmMVWYiZQH8jjj6oSqTKsHgpVjy7bPzm76rsn1bXSwhrxzujhxtg187gEtV2UmiqC76uvjtC5jGjf9mT",
  "key27": "3psShcqCruLmgYmcKoZvYV41YeHZ141Hk1JyqmURCdrqw91MNFuXfhDXZn6LtLmNn2XkoCwu6WQxqXK7ysAX1Nuy",
  "key28": "3VayDdg122b6TUWDb4iCq8s78tDJcRcsLArAgxfARrvpBK5ha9YLqeo4T16vFQG6Ux8sM7wfq4vsyfk597YBcYhU",
  "key29": "26qewsdUxfvVN7eAtqPURqL7FAdy9ayrKzV2MYziZkbshKjyYUUtxDoRCDMcKhhr51oapLrpnLr4qNfkeTy6QjEd",
  "key30": "47u3Ugyc759fKhdPYyy81m54RdJYCFkneTYmq1vr5ah4m66gcGjjdcVkF85hGxpqrgZPmNHN5R1fHhNHGtzYqD6X",
  "key31": "5DEeqVLfhLyqZ4auGrRjtADP9rMCpG8T6YZ2yWAVJxg18EAmcvS7k56DxY3Zgtjg7wbDsHddT7AxJYNjyMT1ympK",
  "key32": "khcR6HV7WHoo2yPXLcX7Ecq43T6c3HAoLecSqSXEf8VqpYWY6jnSyRQF2Ac9CMw3MnwQtkBcNqygaLJ1xGu2iEE",
  "key33": "3hAtTcrMFi19r3jvD6zGtGD5izaHB2qPpmo64z1ubtJEmNiC6gf4VjnUed9FyDUdohu3KyEDdx7ZGQDAZewwsWVR",
  "key34": "39GmSkhmTDstgy54fuipc1XBRG1WaA7P8rUcH5zkSta7fhNFZU4tnvNeM9FpkkYUWPK6PJg6afH1gVT2NddrJ6dC",
  "key35": "i1yo2w4HgzN8zzcykyinR5HagS7Z4R71FfXu7vMVAaMRbraGNVfNEjhukXUiCawAB28FXotpJEbq4Pvg8M8RcBm",
  "key36": "5fADLsFwxRshdywvy9YcuvtsM2XUHJkrjawqPV34Vsv13wnurWq1RaG8XuwGt7VaYEtN8zmzzewMVbtA9bLFKeQ8",
  "key37": "2sa7QvUfnT2H8Rg3ZaN2BEupkXrYESCoVPMekZ3SKtU6Ek9rDgdTsXLymuSNxkLqqp5LrcRpcjWmVPfhmPVPr5US",
  "key38": "2DEhQgMmF5YEodxeyPhxRUxL1pZ3qkPjod5BpYWEF4uKB2G7UtuWgRiH5vrEKtbowsHUWJYTge4igLR6TQpTyuHC",
  "key39": "3BjhTiYJQYPw7JiW2jwNKkKzYNVw1rVesVsGFQHY71xAb2CwAKPh7xcmfj5rNphKpz5Dvgc9619NnwbPhBf4nsDt",
  "key40": "2Qa95Zei9VrzTm1kU4L8WeNW2XZmWFRgy5gAPLW7HLQQwzA96PZV8iAo1BMFTuCv1y5x6GtvLLB5hHSpPgvwYX27",
  "key41": "5XeCCXHiPUUrWU5mz71YQbLJEi4yqsKfqqt8ucthKscm1qm9Zggj5xzJ2pnxMJd6itACHQnXc6VNoWXNeKQYnj3L",
  "key42": "4axrEW8RFqvNtbg528Uh4ftPWARaUo6vYEm4fKMHrMhjRL2eXPxgy3Y6v1gdvmLqESBtP26dg9EYtYv5VbvYET5P",
  "key43": "3LmTKdutRfEujP3S2VWAFgp2vJ69GfGRdobM5mJcDFrGQCqYAfp9mCfXHPAKGxApXYY2jDgG3tbVr2N3H4NJ79kV",
  "key44": "5bSa3V6QEPNhMtqTkGws8MMVWbqdXfq7JrjeGnsafmPpVPpEgkvG1BYoraNT2nVz5Dh1BfuGg3gH1ATTWojmBZP7",
  "key45": "Qiu9kBcq929EBo9Q1A2wJt5ECgXDt17mArE9cTrvjKgm43H2nMSSnGYACgLTMFd9Qa5t5nrSxArD9SVFEMoFqCP",
  "key46": "3gQ7R18MTF2VHoVgkUgMXWutaxwMeZhDY8bsmyXYXvwRHdyuvwPwJRGphJYARUvJ1oDa6YFcM1YMXa7MUDXqcS9S",
  "key47": "2ivg5E6YZPnU9oN977Vpmos7Bnv9BPudotmviCQRCSPSW9k6hAAUjMy1HqRygh7ChKKVVYXx2i1iqPk9biZXe4mB"
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
