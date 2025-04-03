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
    "3Pmxq4RLJk3es3C6XKJ66JsS1No84FmWjV1xqG4nxBkv8Dd9wek8mW9sE2sjmsF3VuHheNBL5FYLHMAgyZsw5kvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fFKtfUcUvRLfwNg88b9G6t1kALB6tWemUvoEAk55ALfXKAS5pktkWSQtECe223ordgNSwzVPGp9TzdK7TK3SFDh",
  "key1": "55hy826AQBW1WgLp76jJPpWxy1TsF54BLhvakveMbRRQGqDofJsKNPfwfRkviwNPwSMtTPziQ4sNL8gAkewoP2xX",
  "key2": "3XCh7rcUzhfVgzywQ95PrE2T7u6hX9tcSz2xAGicphBM9GowjJfusQLMP4cVGLpTL1cuaEmyu1mDxAn1BzZvE4F7",
  "key3": "2VdVzgJAyWW1XSeEBwF9jzQvQbEFp6UhfD55SvGfWNJve2QjazWmUkhtg64C7yzruf7vrX6GKyGq9Sjn58Pt4R97",
  "key4": "3A4Po2vAHzjNpqTGmLbssZUgLGGBNpgTDUTCTKvg3Qb1aCCWDRQtC1PDdvafGEP2nqMTUPbLus6XmuZ23tyhrrte",
  "key5": "2mLoEGB93jrRAnj56wSSwZZHeqAbE3jFkGCsTyfA2XnW5WoZZoLkCn94fzkqMfwzhTfmA84vdw98n95uU1iWLU8x",
  "key6": "CKAZDm58g5X6qrpgGyeAZZaVAHUmZiS78zDn58mzLmw8qeLnTEMoH6aSPbexyTcyMERv9wM9ZbkDxJbucjhdEfd",
  "key7": "GcKfiVR1yrpcgPBsdHpkMzpmjZNdSresgi3njn8ZNpJhDEHQbWWQPgu7SPAToPc5rdhEWfogtSzk6sob7mXC8ca",
  "key8": "hYWYY8z8Q93XnuxoK98o434FNKm2F8JofM6EmUDZ9EvSzUivTkn254wAe3KRzoVWNKckMU2osbPLVptSk7D77i2",
  "key9": "363ZSPjPpSC7kcNrpAsaCVprgmVZ27CRj7ZRGUqsPceSUnwHehgeDqJwCM6vcZ2Z7z69xUuV2yFNokV7NwACjgbk",
  "key10": "5UHHckDHg6QXP8cEnrRgvr4QYeHRrbcRvBCjb1K8AJZ7DKJNMPHurPeocSYTErsqpceQLeZrYgLpkJJPEvJcAce1",
  "key11": "5m9raEr8ivFoUoH6vrQtpokLPcksYrKbaX5LRHLJfr7s7VMK6jxoqs2ErxEmR8EHD6QWTRXEusVRNtz4HJsFHvuF",
  "key12": "ti445cSGuv68baxX7XmVdttAS27JXSDKdjMuEuQvWNnXwoQggzPQYvKEwZeHwFKJDpfR8Zwe8wuRjyPnVVCo6tf",
  "key13": "2G1ChSv9j4sSa67ZWzCnCT3C1WfY2GUTX23uBKJFUB2Aj8uavqotUjQLBNHogrrtaHLH5A5Vh6Vran4Lww64NNSK",
  "key14": "F4rVNvz9UczAr9gNsW6xhSTNuZzZHtcf663RgtoH8vat838M2CJZ5z9W7vYCzEJRjuYFfjmqqYGTtf748MgEEUb",
  "key15": "627u9RYCmohJcv9BFVKXugED8qpcQFAtzwcYfbVujKMKHEobi9fQWHsYZ9QsqhZ1kGxSzzBeUh17v1BMVhzx5JxV",
  "key16": "5qk5WTyNNPFQVYqzWapvc35fu6Ge5BV6X3H9vPNTZhQZdcnuDwQuUQrSUPpb8j3gmTBUBaH2vLWEPMih9RQtyniE",
  "key17": "2cmK58mESeBXZs1QMQpU6LGMNfpqQNWLSrYp3bHWT3q6ntMzHMcJQymfV5XeBaN8y1U8RTvowyxQnAKrHyY62kxW",
  "key18": "4Sa4DrG1rKNv9e68bfiAS5ibytKi3mvRpuPkL9qAYdZeGMLJWEKJt5R9TMC1HALcuq3wtnDZheEXV1QUvthbRHbd",
  "key19": "2X9FwdTCoFr5vQQESoFBS1kvfRodpescPb3qTxVfjcSczx3Zqr9M1nHZjT6yGmv4WTbsX2CVDBVPHB8aHdTy1ks9",
  "key20": "FYWtdRaXUxmqhtL89mwak26HeFgHFC4ZeauNVcXx52GCv4Tk22zua86HUbNRH9CLnNprcZnXP6RhcsVQxdj4kCC",
  "key21": "216qwpi3smH1bHRwkiyLmpiUd5dwbo8mcBYCFF7s7qvJaueosnyhwYF9hgkoZB7HoMfKpgcrbmxZyy3PAm7ghEMA",
  "key22": "3rHdYYSiH2RBdzd3RUbNFK4euDTAUYYkU5o6eh1nBN9ZJ5tBE2oozJTaNhQWVQ7JdtgGc4cvwFWtRnuBWihRZU5k",
  "key23": "4xQCipAfK2ParVGYQJzrJh4QvbHSDHbcD4qFKMLvBTw2iiS3Pzvpa15tMqLBNhiAXVuMcTb25u7AnoSiD3YEko19",
  "key24": "JyEvRBM7mdQWqyJ6hmRkEcs8XeRK2WYWzeofbFEDdYXCwQS8F4Ro9PXZQE78TaztnKDHUWxzNGUucCPMuD2yJan",
  "key25": "4Jt4xgyq8TzqTe9EBoqWonYUPA5fJQXAwujCD8NpzoNNvRmFrgEyujqs8cG76ziqrJNd493k1davqhgnNin6Agar",
  "key26": "3FC6QwXbAs1SXcUywYsnq4Xa82jvHQiW5CthjEhgKywkGspiKDzNQxpp7RWnb56ew6CnVfTFxEx3LGTX4orwxhBQ",
  "key27": "544bSEStiFkxPkB2oZbxpg9bHC5k41rCtC7WS9xm43J7zVF2wGfFG9QAY6M6yEB99FN4Htgmx2TWLPzs8BLPRS68",
  "key28": "4N5XnKW86tPUaXmHFh3551Kcr5zcugoENBhGyGu1PkJjAbRg115br8TnmDf21o48ZK48cm34eiABDTuqrFGv1YkN",
  "key29": "oCDyU2CzF5WK7Ecr86MECH1tYZj3SiqMzP4NevUAjwxD2Wc3ddVKfRJMbvXE5DzAizKhnNKEVFi5n8W3kfRuomX",
  "key30": "4i6aQCVNFHtUupw66LzZUJSnDZaxspgybGuYGvoZZdkfKmW7k4XY2hvhPWAqnBHUmarrZCJXiQPHgRo9v2yKJrSU",
  "key31": "2nfmUAg7KAGhHfQquvWHMAHmUqQddnz9xAqpZW4TnFwmXMf4x566DRvuyVwypnjnY31oTa3zQ64mbEWAD6fpSodk",
  "key32": "5zDZWCKE6DW5FJHSgowB4ds7a1PBSRSFuLMDicupGa7sn7eXPfemVpX7TSnqzSFeJQBXv36x2e7NrjuwrJqNBXJV",
  "key33": "gZT6AS5tnFjZ2pQh4Co56ugJur53nyR5icwKx9YYwVwFz1aUqp9P6C3axRYdpKvxWNeq1LvBvHdSdR2oSCVHQfT",
  "key34": "cZ7o6423XfEuXkpfLFhzvS33cgckUw3LMHHuEZDf3KRqfWQbS721BRRs2idDgh1h9c2jsp47UfhhcFeonjGsP9A",
  "key35": "5TeSxPJSdzQCXTjppVfeLXLVnJyWz27apwLzTRUKGBhkt7y1KdGGSuB5xqzHWGyksEnAKcu8sDnBZj7T2ChRAgYe",
  "key36": "5P5vFf3vKkmPe2cmDDizsAy3GCELA2ikhF6s6ZpaB8VGZu7jL7U8EMmpTAhRH2Rb5TDt4BQMuZw8mfmKiqmedEK1",
  "key37": "puPuy7SbS58D2NjwdHgQ3gTc2mH41akvUQywbW7JVAS1cbB4mbG7qQUXPBQZrfgqHaKKZ2kZmCyBAxYJHDKMUVo",
  "key38": "58EAgbxYdy8chjFJL672invejVRpnhRMspWu8vBWkroGJNT9hRLHR18iKh4mst7WCxhK1qQK1XYX4QdJtiSwGb2J",
  "key39": "3AcEtTq8jRgojDuTGwP7A36zbjhh5kpjWvtoZaPhJt5ZYSRpg6SKESm6phUgXy6SFGqRVtVkCbMKLbktBYJq1Jvp",
  "key40": "3NmMBqvWPCmBfL3R39vwnznVdx5u6TKT8f5mVYj6H5PdBxAWz4fNTmvWsjBB51VRN6SjQNPJpALxnHrLFefQmR27",
  "key41": "tTiYjdbiznPRH5AHBLXr8s6CjGkskxDCjR8dcZsEQ2pB9dnLd8FY32VYk6woyv5ix7er6TXydwu9r4puyUEbVJF",
  "key42": "5kiN9YD9VeFJWhWs1iZofWHvyES9TEJGBeiY9pobaRQyeb9Yx5VaQaqmyx62HRHdBm6jEvSqEhNnukPHiU1UtCcM",
  "key43": "58JDP1THnVHayy5LgTPkYu2E1w5yCzUNH2KqCJdX2FL15Gik1amsuC5nzjVCcUcrGueF7EKGsqp36vTqnoA718cm"
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
