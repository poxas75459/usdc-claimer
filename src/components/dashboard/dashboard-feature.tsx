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
    "HZ2gCHZDz7VxzgxS3aSiGvgBdCBFU3MMYHceDCSwP8vYGiKp8PQ4YzaNZvwJfnMrxdEzPqwBhU985WsNuVHYWVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xsj5w7FATz6ivwvvSAWdGdtKYA2kXZodsAZCuQbgcYXaxZtdr2zsm2Edjf87BaH64cgMeqw9xB3jc4nqJR5VsYN",
  "key1": "9NA7ypW23fw6mvayj1YbmWVREYtF8u5R3u12b4LvP8pFGxnNTp45whjXovtPDaRtYAqrCYT45LkR9A3TDQse7va",
  "key2": "2AiKuL2jQ5dHhrKYCi2sc6FkWH33BEs2AK2rYr7Y6ErH3YYRVdEcRTYB8eVuhjAVDQMQoc2psvqEj1wvH8FM57G9",
  "key3": "2dq9grLp1dh2tkvqDj1jgUu7RKfUdSfDRgwADeeQvneVdQ3qK5Kt3zh3GDHAqTNsYQzEsXbUqXEdLfBUXLqru9Tj",
  "key4": "54v7mJhwPx52PafhNRdt6d5XY2o178TJaXsTKhiHjppXod9Zfiv67Yct9jyarJfWhZwBNjsLJqvYaTexXzknK9LQ",
  "key5": "5HdnSVxaktqDfZLuV186wmwDVfyPwv7Xu9rvQHr4tEc57BDowBPiYv8NXr5xeWmUhAqbHtP2uVc6iGqFsBgRYRzJ",
  "key6": "3wR9qDXVrSBtzLnpm82PThvtnWNLk6pnYof13jdW7F4HnNNp8iKjRxaEhGc6LAbyiUehYGnYkSJPEWVzGdG9xxX",
  "key7": "3beLRH6mhEsZ1XUEfuCgbuM5SLVbgU5Rrx9NrwbzuKmPJWry87kKDEw49tUomubssqGnfw7b5A9XABRBjjgu56wF",
  "key8": "55qhYHiqqpvpnfKjgexvETds3nwCNqQEfeb2Qmti6dvKovkzYQ8PNpTrJyFSuYYf1zVgstMfNxjR3tLzaZ7XbbDV",
  "key9": "5UvaGu4qPTchWDnYeZpDTvRPSGqGTmmGV2XGu2MkkiCmrKveNjvxLWWzNhpEuKDyCYjbz8iWRixH528SQP1TXkBG",
  "key10": "2G7xwiXEQEHoDBLjSNcuoB6p3MJrGcSKWDYJZRcC83G2UUww6sRmoDsGg8PcQuk37Fno4hkLGKs1M2TDCqS3LQyk",
  "key11": "3xWMvnxYQbno9M5Ayn9xANZqyNecwe7Mxbuj54BdzyCdNu8d8bDT6m6CchHWggt1adMGA5aktHnXBPXFTtjs6umk",
  "key12": "oWS1hYeZ2mqz5itSo3W4AYYwtAqD5AECzRbuKiDta4ncbDFDATp1azg8tAu86iDBsQHLNs7A6Pf1Pd2xdbDYRuy",
  "key13": "3wTEVN123jk2VMpnFtrMGQeiEQxDr5fQsdt7AJLp1L8hRqGEPKA7hZCLx1vn48GaPTCqPwiBdJdRjXmKhEYoGFjJ",
  "key14": "4E7RUk5wMSYuSZP6QLwmZpxfDtD8mTujMWJNryzroWLaqQydooMZ4FqyTMUmqrQSTrcz7aE5V8LWjC1FHtoVxnZi",
  "key15": "5h4PqLBuaNQQF2xDCAocMKEg22sDKD3tLJvL8HrMxU7CVppK1kNZxKrJUNe8umBVWy1NpSCfKYJXpmG3ABQZNuL6",
  "key16": "4Bg8QAM4uBW5LtKMicYSu26gApP99EvSDCmv2Ae1D9r3pfz6wcvrcWyAnmRUbL2yARc7e2ejy9eKnC7yyWy1u1FE",
  "key17": "2EgBU812eWLVxmhgmSKPgj5nv3fEWmvnosY6Ld74JSopjLd7oBZyaocWrg5g4TTPTepL2ThpKLCkKBiVs2Hrra7R",
  "key18": "3hAn8XjRjaUeZAEKcKVdysSgJjLiTi3DPYTm57njTV5q56DacFtKTJivM39YvdQ6h53jSenRBmdCyyjpbdgXt8vk",
  "key19": "6xgfxaC8r2e8zYQLgm1czqeZotHcbgA7puYwk3AsH6E7AF9vFaD6gE6Ct7KrmkLzny5SSwH3N6yJFpR7MN8c9j4",
  "key20": "5P178tp6EsCKzgR3hPgPWPV3fWHytq4fHBaYfu3RJCy1baX3BfcSNMv7TvQLmFaopbKe4vL2U1GMgwwTQydb6Mr4",
  "key21": "2mjedg2n5qxmBnfohMizAbScuF4ubvHv69Ys38yd8WJHXqNRarPeKz284UnPYAySpZb7z5VsqDryReV33d2mHyDe",
  "key22": "347fNQ7zvbwE1KokEdxWsFt7b32UtdNCB6srwb5tdrZyLT4wMaS7Bc1MQyesoa3QDPPCUyZLtSB5X7LgXdyaxa5e",
  "key23": "2igbn2P6AgXphUEqhLVVDsPUfCtvo7QrXnPiLtzAX4XMMR3aU6BU4r7R3Rozf9gsGbm6dYCF6kxrxsYLV2RttofU",
  "key24": "2o7ezkVNAAUUqV3nBDwusM2vumtpQMrz9ibzZEyim3qccFfcqZT4GpuTqvoe23q5NjaPtqR2vAHRkdbXqsqRyDYU",
  "key25": "5uvATiN5Ys6vt8VmiDCMiDpAJq44wSZMbNfFbU68yBN8M75kAc61mwx937staiBsBQCgLQNzeJPsXCsWRtYJvA2A",
  "key26": "4QoXqmtzVVq4mHbxwBPKX4n2CU2mDTT9HfBdQCkLok21Z4jtXzQ1rWTy9xrSzvHmqXJo39cd2XvLazyPQNhaPkYw",
  "key27": "3N4aC23MEwjznvoeWia1998aef5VRWs4anPHbFMBX2BdB6NU76vL4XdidujditDe818roHcvUR4A9wFToVgoDhvz",
  "key28": "PCWcauT3YTqwnMM7nP47CP2F74EKeM287bxX1vSWaMPWrbFWJwSuMrKTsdZVmknZT2sDGmFctZhDfXNwFFiAjC5",
  "key29": "3s18rZmi8ZCUFKbE6BEjXb3qHuSaCno9yJ8pegSB4RXCUEoc77cSKWrWnQkDd5iBG7oP7EQ5qv4nrERYykGX654B",
  "key30": "5N4yspdMt1q3BUtnWULytqGiAdP14Haem8hECDAJuWrAw1m1xecUSMc4A2XFJk3nhHGbMFHCvx6AXCZsKwMPoxP4",
  "key31": "2MnMxsf7iVR6RLEyGjXDP35q5idxSP9a86EsGhA6qGpeignz2VcHHEmfQp55KcJKTimafKxvYz6G3jkvmah3MQW5",
  "key32": "5bzyKBZCRcx2AyGukjQJUYumWDcAkP7mTLJPGcpdJmc5jwACDfhYU2idXiEh2jVyGAwC6WrnwpEZUdvVkKC1sjxk",
  "key33": "4nE6kYVmV3S7SxCTeUivLUoFUi2XUjQNwCNT9kFhgxgCmysfiFZiUcBe4Xn3wgvQpcsXDfnejujK1mzPGkyAdBGw",
  "key34": "3SEmPUZbLHGmjo74xpX1rQqX1hPxziAL9LkU99uZUzdcQFS2xb4v4J3hmuCGvVgkiE3DW4xqc4No4JCxGUQF4FmC",
  "key35": "4YBB3EebGM44qzK3oe8HVXYmuQefFGcuaXV1C8QY7XPaipBR8WF6yFekjUwBHrAQjGnBXJ9qyPCwwxepGD8fHHrf",
  "key36": "32QTdjiYwpKi4brp9YkQeW6vx1DAD7ZuQ7Yd4ZpPmnVuAUcf9Ez3TdQuP5jBwgffgo6E5CxWcVHoHaXpen1kXbVf",
  "key37": "5JonrUyDv6D2ctszBMXwgGy7ua9dKi45qq54muKCHwSjirvhCNwKr4udjKKtD6E7DczNrDHsxPD8pMzPNxYzBUox",
  "key38": "jbyXsPmZhTLofkzuTKARcBmsCBGL7gY2oRZQMXzyV1Spkn22K1wJ1Bf4VNU7JU4arGKdXUUNx2HRicp4n8fGCtM",
  "key39": "429XCiwb8FdyPs717UwhuZexf1paekYCCtpXT1J8NtXSrqbppWwhZc8YcZTtEaz7YD2uLAgcp4DU1tDN6s4nFPZU",
  "key40": "FXnWJGQwDygu5j1vKeRJKmLpgLhF3mVBH7K98wrGKyanBWdyGsz3JLLUByYXVeTUGLzKxqZfspho8vgCbzq5Msm",
  "key41": "3uf9mxdY57qD1hLULVV5MKZDRMUavCn94rjY4jWZXaJYP7JdUQVGFfwPZWXzgLdeMSZwTfL67Dr6ytvqmBvrKN4S",
  "key42": "3wbn6cUwXuzx1Uw7hGQBXSBmxfEXgiFFKt8U25VtaCzqKrg7JJ6S8qyd4uuSthcFuPNvWLiBh5nr2HPXXu5TLyzP",
  "key43": "5qMa3FXaNLCZcUxdZAV5TTC11vbRGxtDZehNxibcfdW6Q6GrRzbMJkfeGCapeqV6yWL9K8jeS5kJoo6Pdca8P3AX",
  "key44": "46kbCmZempg1XCubf7Dh6wxW7bZVz9xaw1NhGoT5WJgayJUQwLPdMYZVdhAAUZ1mcyrAa1PDoy6bw4EKMNGNhLnK",
  "key45": "4jmYjU54k5neuJ9EwUQjMFKTksJqw7JUiQkjUuSKf4Wa1UzpYJJEX2SzdZsKSdhp6LdvRNEnJBtYu6AMr638UG9m",
  "key46": "37yXd9P4c8wQUyqPoa3BQei6Rj9TZYfkTZSpDR93Xk9G8fxm7TSFAEmPvrsdxZ1AMFQfx4DsnYVBvhePXpz3oJrU",
  "key47": "57w7tKmvBNJbDPALwyFGLViXaDBTtUrQmFXPHRC8zE7FthTpT8DS5MSZZZoiKNVEVCLSdyxFrYrVXUB33Kq62o8f"
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
