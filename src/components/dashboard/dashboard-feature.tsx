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
    "qo7zWYwZp5Qqdts3WNHnVCcaWvxmgLKmRDk6biG1Xu8u3bVNLbi49Z75uiMz7HLaiTbDr8q3jRzVGWmtMmyE5nD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EBDExHMGnFF2KHoa4KM1AzwWxR5jBxAoCjt3k5dADvJc3FSUGnNVQf9hB5MR2heTAWeQw6yLkoEvR1GdMyfnU4o",
  "key1": "5on3N1tBs6pQVt9cgubsg7vpWqQjZ3hzzsD1JZVtb3xbUbTir8YVkR2AkLJpxAebBXkoVXuJCCqMQ1NdWuCQgfkw",
  "key2": "3HQjjreNqYXYotdzSi2QqYHTTEnxat9T1Aq26WXLfVmR7hrSzh71mHYj9MsY2Mkbt7QBuYzaC7LQNvCGFWVtizYD",
  "key3": "4tAo4nyGrgJbUi9g9s4veAAmCeirMbdNFHFuQEe87jYjcn6bxekScvW5HMKbQaeEWfSrApp5YP4uyCGUBLQC4YGw",
  "key4": "2a9G97GPPdvHHCUdcuwkfboynMFKyvrgi7u54DBiht62isXnVdnCXCFb3vUepSawy4gwPYzMC8W7igvQMq3h3mLt",
  "key5": "3f69yB2hXs9k4rT113QxLnGBUywRRomPhGLrPNRPf51kmfn2nvug2UPuvcDEg8sZe5nJow2XFdsnasbFyBJAJkjA",
  "key6": "5qso5jfKgnbHXVp9R3Wh7aoSGszaxn122Q7ysXqUi54Q7AsrmmGiidPfy1HeqUNzThMMP2PpCXmBJQ3fE4srmXth",
  "key7": "2DeedYzZWUyEyHq8EhTxB3HrUUdWVGfT61xbzSwY8hYzDB9uJX7w7W3LQKqThgjFsKYhHVNFkaxp1CrKv5yMmbzj",
  "key8": "4CnGnSrY885og1jb7QTx6KhYXsyyM7RhKs7kHwqhaP3Y2QrnPi3EWuYwpo6XkLyQef6obgzA86x8E9Paq6Wyck4",
  "key9": "3YjzuSidFQkWNHABs3p8hGvcWsfF2puTYKJR54KXqRtrYhaexoXsU8dKuE9tphy1QhF3o3kZrqQPz7uaZqgEWYfq",
  "key10": "3hCtFAnU1tUDY95aomCz9mz5U5K18kZLn9ZK6NHWTALiHvEQUpcdrKxT4oN4hyU5pwRk23GuvzE9ThTbgjmF3wNZ",
  "key11": "43YcLTdT9gFcusnrek2sH981mWxhLn41q1nbWJeNtXjKqxGR6woaqCJ2AsF24ZG9VHWi5YCq15rZQ7xode58Lso1",
  "key12": "5JJEKYWUkcX8qhAqqhQ1nH8Kgh3B31XfArwb3dEysVRUKxqMuUc5AG2eohNy7GRJPrPRPxCbio4dpqahrJqwZ9PR",
  "key13": "4WX5dfcZ1ifPXbw37CZXDGEcNdv5FuUu4h4QFkwa9p9UuJB2y6LwiLZ2gEEqPbu6o5T8uiWU5N1oXYgdTvBhDQoQ",
  "key14": "2MEoE3ynCxMqeiLeKfmbAnmvAnhqmYHTkG5hJbc3K8KwiVjCsvocr18ZLU1KAtHSG9efzjT8RWnKG8adZPvRNfqR",
  "key15": "3P7qv7dSHfUy1R3kJwnrpuTihFU8e7khwybHvRWMtuwPtafQzLsQWZQjbrkEB4YLzMq8mpoZCt4JBY4aNtRVF7wF",
  "key16": "3EvMGD23zY2qRfh6hLcvzZJJfCq3e69TZghgpisZ8JKjDFJ5uxjgdfjsUSAzd2qPh9p2pk19Ux3P1fLq7dqfZUke",
  "key17": "41crnDocD43dh38dw1G4SQt7H5m1t3vMcVQjDcZh7YNEpt1sNUWh5UKyvomirFHebe2QM2HQfkh1LMfYWWUJskyK",
  "key18": "3xUcHw4qV2zfEVC3tfRQwdSj3GYvfXTGn5tD6w8sdQMU4PpppmWd3c5vpNkgrXtzPaTf3tj9m7D1jyzC2tQ5ijCM",
  "key19": "2ayrrCM74KUzVnP2s8Y2vUvJuuDbux97fc3BWuMfNw3c4dHeDN84Zfz3bg1Zidc3TmAmuJtS6vMotm7HB1jveY2Y",
  "key20": "5CUqSMBeVk2goFSvxJx9QaWCSwCHJ3mkPkK65x655izeButF8g9j6EX9NBCJfb3AtEagDY14PRjLDCdACBAQLo1U",
  "key21": "3KHvJgpAqvhMG8R4rrgzJrBDrbQtLor5Wjtk6iFk72CcEQ9cXRugA8MadzF9J5DPAo7vZJkZsrbziB6xJcN91k8x",
  "key22": "5HHnae8U4t3LX6fCJGfTbaGT6LUMmjTMFbSnLJavR8hPgB9LZABCCusV8PCtV5PfSrtN9tv44McwhAD5BnnevEe3",
  "key23": "3RtytVbMLtyuS99rcCsFB16UtXge8N4Rx2QRcG1Ax6P7js8FdQXuhfCLwDr5MJDRxehm7aP6G3e1gJrkdk6SDUWd",
  "key24": "4Fq4k7Vrt2CnpuZhhNh6JUYcKVq1aDF7aA7XtSyFu5W4HzkNDt2x741weycXyqrYEDFduYkQMTqE18JjbSMQgxTG",
  "key25": "4CzT9t4hqvU8G63CBovFykJafAPTZrJ19DjB6XX4ZArAwtYLnUvULgAiaRmY3MavQFsgVo9xPaJAHJTnWXcZzHVH",
  "key26": "cYnskVy1DmWmvWGsszD1u83zRCGxqXvHxwwqaxK8nPVdiN2NkqpX8tSLbTw9NMvM3X58kgGDTJ1fSTjFZheXwDu",
  "key27": "3iYxsh2r1GN12Cph2NzBjQom25o2MgHwc7VG6xFQYzfktu9SSVNfHwaesa4SCBYPSCxhZM9kXFi8Hh5nsFYKHF67",
  "key28": "3UPpaNU9WEfn2biCeHNZrMUxxhRom7pkMC5rMQmgrCGsccAud3HLwDCSagsWkGEyuGkq6bsJQ7uBaTjayYmTv5DU",
  "key29": "2kTj3e5RuSdueZkzqxMMQoeWbFK9uGZyD1BGRvvcStTVLC1kPSwSYxwMqMoumazeEUdSnQrqK1J6qYYXKrScMtiq",
  "key30": "3wXncRqcooCTFGWDkiwdkmg9sqbKRqPvPLJC5UgtztNhSj2mW8zyKYQRUF7tsNNWN157o8PnmDxCAvhdUe6V3PQ3",
  "key31": "2n8NRUg1CZz72DBaT1tMu6i6bEYTUYgSD7Fzb3yp6kQpX9RWh2Q5zvX6NeY5gjYVgoiimE3xGFx6RivpX1S4QVGP",
  "key32": "39jQ19eEp3GaDC28LyVXnWjALD458ZYLFCuq7w5qyfwLzXX1XP3bzjov1RKoGfccCJucBmYTLdaQz5S8FreeRCsi",
  "key33": "4uTUaBkjBUpXZT9aq4AkmdVM677TKQAEoEzC8QM7bijRjzgVAoeBn7qJt9qFcXLQCRYm929oDvF8FPU1LToy3MSY",
  "key34": "5teRNmmntkQLPMg9ad2auvcaq1sPFuWDcZ1YLekx7rL3KV5yCsNj7SdXZMJbe2L8cdetzyTWCbg3cDXob7akLVjT",
  "key35": "2WeXQTkatez6aJY2Xr7kW2ijZck8HnQxVPvonT73LJ59rVk66xiTsTJx13d9VFdHcTcdhWvRhEg1dDmoNv7RCt9",
  "key36": "52aAEqbjkT6vf7PVFQeAvmMogeuTpBxXYSfTax4pYBhrLSr4eYUdCmRqjxSJuzW8rHDDLe1UhQmUckLVr9bw8Ttk",
  "key37": "2irpckw3wnGK1L1J39eWmH5ieddNN1edaKpELZEn6ALTfLybVqhJiBSjjavr5HNk8HJNT4KEtsJZKikL8ooNSoTP",
  "key38": "4U4WEb4HsNbfGsWDp7mjV1EskCYbD7nMc5B8nDRXVuv5N4vDrmzumSorceyRrZpppZFz39wSUUfxCCNNAuqLzDhv",
  "key39": "228ctcDHcp1Um7KZag9b2YYvG4ZeeDukdSXSp7SdBN5hN1kodiUmN34Ed59R4HkLqWqiihve5AeJVRBuvcfbJ7jo",
  "key40": "2dx9B4jg2NZbjRgikcNiADSes177yXFbkAwdZgL3FgvgWNZ7rtokGAFNMufuA2ELgBE2Ku1F8PCMbNTNLHdrMLsL",
  "key41": "5UvMxvGaGxxfyPY5zYmWiv3n4353ganQTohqA8WzD8gxa88jfJ3cNfiC3JHSZBEBEKZ1SLA49wRUxfDrB7GFSsF5",
  "key42": "24rUmAc2NwAnb3NX21KGbrU6L4Rnb7mmEXNvb3TwEYK6fbi2xAL774GgSwgPQz4BjuzVVAoXRbQCH4RkKavRxaMk",
  "key43": "otjyodJPQbAtsc2Jr7uhs7d1JoXkC1UkZ4mFbDVryvtEb13CFRH3FPkCKM1ZoHCwJ3PfaTZix4DDoCqmPwmMN7n",
  "key44": "3ryoDqaKbPCXcYYvUbWar39osAtYQS4dHUi6j8DLM6LfkbJWTJcxBJ5F16zEe15aJz27toycJ3udRgxPmWFhFCtQ",
  "key45": "4B4UG4m1Dje4u7W8oBRaV3i6VyuKYdd6cx1QCn6GbqbzVmJtsmX76GfnMWNNUc3kyzF8gU6jwUXY6JmLH1s9cuqQ",
  "key46": "2TikLuiyqk52nuaAVELDKJy74udA8aGXmHJFZuzRg5vdsxx9pYzLEwPFmKcQEQLPmS7z95eo9gpMoATTuV5bSdwo",
  "key47": "2tnyRXjejz1uxip1Xr831QRiBDwxd3PtC3owempYxXy8eB6NhfSPWQxqFt6bYDS47XYSo8xJwSHJ7tMpUMzDHuqq"
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
