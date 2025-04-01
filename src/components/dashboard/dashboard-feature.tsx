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
    "2BZjhFmGkjrw3pQ9oAuaTPEAWufQTdqEyrYUcLU6PSBnPVMxoH78zR8MPZgXTSQ6fCoTrYPp1DQWETExjomKccJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZeQ18Ekg3tXR8Qwu56skW8KdBKwR1b4SwruyqyKEqBK8VVMSggUDB5sJXg8TpodJmVK5WGK1YUNjaiMwzX3MqiE",
  "key1": "2DRXJNfYmN3csD3ND5XmCMygQUypvY8nqWmsMpbi3m6HCyXrdv5sV3s1F6vf5NUA3vs4G1m89TRuznz5GxgjnDWX",
  "key2": "5kCVwBH8i5MEdw2QUkUkEVfCjNS8jRcfYWzWuU9iX8CDwDT4EsfAYjMXCK5teCVYGwHAyzUwL57Kn7o7GHmCoun1",
  "key3": "4HWdcHt9XGs6tPMzAwhmkaZqcf73MSTNELtCj1eALSV5db7G98Jtvm9ugW9ay3jM49kzs4TdeppL3dSG1XNaSsa3",
  "key4": "4eLjzxJfGV8EqsbB8bNocMKEenqGjRNh5qJnBQAA2Qju3RjYkzka7cnBMmyQHUYr4BcfXty9j5wbbY1mvXVwY5hf",
  "key5": "2vNtVgr5zmWEQeKYb2eswFnSXLYsG7ps4jKuFfJjtf5pdy6g6SmJWsa1qHtgyp6BUk3saGoKGvU8eYMyJDYCVjfG",
  "key6": "213mhUaojjt5Zp8e6pvJjpzQ1BoUWLrpHbq3W6UEDA8BzyfrAwcwjFBMpBTp54mQLL7HMRe9ASQPVLVvAvUaBzNK",
  "key7": "2v15jK5B5gKCsa1wqKzduftxz5VMF8KZixVXAfpPCowHA1PyTQZk9ZifVweMmfsUBLKFKS1WZQmsVdRsj7cp8LYy",
  "key8": "5AzZTTMq31NTdQaz4jZGHS7f7kCMTJGbqMDfua1z7E3hkiPSANz8gazsC324b6wEgNt5PupqUJRk8rLQr93SakKb",
  "key9": "PCG5XEbNeQvSZtW24A9n8BMKhbYV2KaHeJGNbdskpRH9JTKtVRHLMrdey8oAH2ChS6ENpXaZNa11qaqeoTwuHEW",
  "key10": "qJbAjdkNTCSu69KvrbpFH3LLWEda79viFf7q9RpyCdWGbQbU7DK4UBufm26hTxx8shUPdvkJifgnFm4QK1pWQ5G",
  "key11": "3p7Gu7ABgo7w72sVKAnMFC8UXEMAo1vWArqwjtMt2GhsWHDVYeXW1YS4Me13PS3VyQCedoCfrzddDrkuohyBjnaW",
  "key12": "5XoPdXXM4MfE16ZEGoRmAU1YAyPLsKXD8qQ5MX3Nmzny98MQSx3GDek86auzvo3y3JLMxbJ5VTu9BJ4qVrJR8vm9",
  "key13": "E12kazKo5d9Hb1hYecNT93oQFsU57MrCDresiDEksPrGuBX2M7b3N1m8QXHWff3woCsYbhB2KXXSPifesF91Cpk",
  "key14": "5fAmfAzi8YHJ1ghAjyHACuUNejWn3WduFXx6cyUacPtmyLJYveXPaAZTdAyrygDg2nyLbA5cUXY77WztRgTUAu1Q",
  "key15": "EZsqPraa2TdeTVT69QKfKshVodZ8aWboXtbTopxymnYwyTVrdR36N16RTA6KXPFUHgdAcmGCjpPWjZ6gSin5p2h",
  "key16": "573uWii2STGbiory85Tyog4UCNtJ694z5MBUPBu8EfyenWVEb6yyS8fG1oig73e4uMxSfoKnAx3a5GCGtaB2nRZ4",
  "key17": "64bxkapPxfH6ZCGUJdupWsVxNfKkNNs56UJhX1K3yY6QK4hkZTKC3oXMFSS3pv9qwnhtrtATHrRhKfQc4YNNZ4L4",
  "key18": "21DgF59EHzPYy7L6WxUaV9GZAEPenLBmJTCmLpZbwaLCbyvSFJJNJQQBq7SeKUoEBFNt4PP6xgJjzwRbQ8yeTwva",
  "key19": "3EDqqAsStD7wWkP2EtNS9PTyZ6U7CQuKAvjUVzdL5Q8fSvghnwnQmZmAYxEkhF235B1M3wb7PyirQ5GPWHoWPQhL",
  "key20": "2DzCCpGoVnBamdn9AgQ4ntN3WKM6b7bnFtuKgPhHrCJhdpaDXApkHdPf5tLxBsQQGrMdjnNCyPLrh2Zokj8y5Mb8",
  "key21": "J9qhL3NhFKZTsBcENPS5VeaxDv4dg42rZ8LSa1HQXqFLX1FjCb385ggZpuAmVtRerR6kteV1g968W9tHd7BM3ut",
  "key22": "4EmCetrTvpEfxCQF7ufaPsTVocGrmi3CznkzVe5KrANCHGArctCMwDos9JKf3YsrRrg84j7LNzUEMQQoPZ3jY5yZ",
  "key23": "5KSB1Z7AHv6WM7h4qTgBnkrpEvukuHMGso3Bk5JozptFMNaDSRTutMCuHfNa35yHED79qofnAeMLgC7vc44jcbyF",
  "key24": "QfH92LTuf99zojpDEZG3wNyshjQxQH81WZEXMy9pbkQChZV6GCwQ6jP6GioyAkNjd2LGXLE3XCVgu7wTyqGfWjj",
  "key25": "QqqEGHpGCW72i3apRtwWr7cvq2e5DT2S1E12gUzY34kRgQgaWaQGfK5y59N6png6hmcptdPYnvTMPh4eWmR4oE3",
  "key26": "25oGN3EKezqXn5uDHtcfneg41xYkfZbZ3o7TkTFhJFzB97nKYx8u5VaRJJJKGg4fCWCvCyDnXwoH4HQquZ7vCiaa",
  "key27": "4xXJriz5co6Don7maP6nu8SYCWvaxWjFD59VRmyc9KtHujdkavEBkbcNH4tHRAPuvBDPMBpsH5t5ZDuj1VH7kmzG",
  "key28": "4MZGqCGzLqdp68BHR2RtVDmo3q2R2mfppRVhpPf4uqDjFK4t84Hx91jozaDcUunYoeKJJ3sPU7X7hpFPP3HkKSen",
  "key29": "5xia8KzqeeDkWKwdGK2aoHtUhztTaF9XAFhZ5eRxTxncvb44MerJkF7rSyhHQKiAV8yz16Gi2XZVGVq7esKNbeb9",
  "key30": "2gFZf9sy1PXsV4txj5K3AhNGmZ3QooeSqBpUkEtCYfcQ6yx6S1t8AzaVcdpQZfEd5hdgwn9H6BKeDKddgxb5mKky",
  "key31": "53U1GbGg4VP6RU9eWtJQKP3ie3HAvbfMRMTJYQrxCBYYwtVhJ2KRMyqT6j83ftH3c5t6wemy8uPVwr62P8HJk9C1",
  "key32": "iky2Nztauw6cH6824BXCF9qxyiNyJAGtuNAS2AJFqFNuJwWN8SBVBH29trjS5UWZKKmJoMmoTvNjvQdmKric3jt",
  "key33": "rZajM7SRVvDe26pQjuee5mTNSL1siNSjiH4VpVRx7QWiF9EFttfJ5NrtiUxYX9VexakvKd9iAScx3qc23oWWBKo",
  "key34": "43cRvvXXBWthJgrWE1ZPPhrNFiPJapeZEW6x8Wj6BShX5fhKG2fJFKK1Cn9JVk6M2vRtajjTi6VVM9F7tsbd5htP",
  "key35": "7NeMQVf5CaTnc9bS2W1godnjypSEfm4LY5LMsrcGfYTDZBBxaGvWuQpSvZoFa3bs7ZmCosxmiq7zuwspnc1k7Zq",
  "key36": "3MrU8QaCiFkUxHtbxkHAddSPoR6hz3dkD7xdXYXQCf8iem1E3x21tBPsteDMTu8c7tNzyz1kUXRbXYuc82mdNB26",
  "key37": "3dkdboJDNj9qVePD8GV2tZPV8wxEC5NmCxckvsyzEwCM1TcgtoJypuK1jJ89wRMGdJwV69Uquqqcd96Dqs6Tgp1Z",
  "key38": "3baMkY3um5jCVVFagLE78Mxcb9wd52mcc1fXMCX52MxSZWhmky91oZiktmpWFUaFn5tC9ACzq4ZpyM1ZpBQckaRC",
  "key39": "p9Xmau3Vs1bovD5UNePcUof6YRmizgrxd7jpGe2BYSx93gy48CG2bXmkFovmKrT5BpD5BYHksDnNxeqvrd7u8PP",
  "key40": "2vz36UUG9JjvYazZyCH7unSMSiabBg5u5gWbgZcCCyYJWBKDidTNxjuGZCqNuDAaGA6AqAxmmcxTd2Hsw6wjwzQ4",
  "key41": "51LoY6ruLYatqNDm73K1fBRxKexUQ5QvLXTw3CY6sqz6FgxX9SeUxv3xkTNiehEMbSdRoQ5o5YHqa8ihrZvr2Mk7",
  "key42": "5Q4NuQ9A5MjhcZ6WRVBYsDaa3NRz1UaEEdwwhwrogEccz5WyrMawU1hTPHt5EheLC1BGMARkLTmXVFvCxjq78nsQ",
  "key43": "3RKgk7TbfLBHK98zNpcmBPAqnnEPiQANYRrCvsDVMVdmANs9gYdZxNDgZjSWdvJHkiFyuhS1QcnyX9U9UikYuSGW",
  "key44": "2ty5zSvgjw1SpPLeK6tBdpKWNo5WH35uNswUzqSkXCs3rGTXAFV1fBJdc1GoXgUHqsxDGc8rf7WjCYbx3okGkUVx",
  "key45": "58LfrmRD7tuzqum4Qv21vrEFtFirbcMdkWhZeDE7eeahMzJfHAX8HbAf7hFsDowP6kPZimS5uR9aEBcizVuFC25k",
  "key46": "46ZxXDumdEuzwNbXvqPnDUaYSbShdroZBxz44LVAhBkXzuUyNsQyLFUh5vQdMeUxpe5gEd9EYysSL4G8rLa3Srw5"
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
