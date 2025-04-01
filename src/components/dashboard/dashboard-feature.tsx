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
    "3Y6GL8hrAugDG5moj8iGBRDhECgFsEQCXdtGxq1Ya6nL7PAXQjQyKynBHMKiKcfCwurysDjNJzHTaPVccp2oT8sK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZbmfgnaZXWNmak1gcB8DjeoSmYKmgxtaGcvG8bFfRcR3xLE1Gms3XpmvaCaXtMg1P2MVBh4cTS4pMdyYXtn3QFp",
  "key1": "4m5i7tgyNVvLftgFn7wnQo2C5bUtKY9iocZEB4TrspgKJzHzuE1LKyzd4Ue3TNXgco2PbGRVzo8Qqj8oMgcoig6F",
  "key2": "4rEPJpsHdAJuTAHRE6st67vWwHbW8SyQNFCU9tAGpqexm8CC7bLAeA7Ht3EvKsYidbqh9uwPyLGzxd6UxYYAWddG",
  "key3": "5p61UbFZJd3Vg9PNfyhL1qpt8iLo7xEDRFaeDXGXXf7DMoKC74YyRXQfFZiszFgvN7WAFZNzmhW41uUCg9L1XoRA",
  "key4": "3noCHG4V53cVnTeY2EK6AZKgbgngVFwnC2DruUVsm3p17VUBnLSKWM3LSoF4h3KwnbV2GndtpbhDgcqBGXJzhdwE",
  "key5": "vVEUqGydBvQRD6YEDJM64WyhMt3skUynXXA3TD73W1X9h7J5N1Q7nuHfyatTmQ5DtAHYhA53L3bccdbKwaLt61y",
  "key6": "XQGeLPmfmz7Xqt933nrRhwDiVC9aVyaPU3XrN8LWricJoPhaCkqMaMZrnTN6YbdjEJBr1bCHXEE7RmkcMBmCskw",
  "key7": "3PSea345oLxVAC4gKGfzJDC5iVpGpBM3ZWGGgJTqrDJmnCauAFizXGhrgUW9L7JHfSiaLQW2yMaKKjwyahM6Te8b",
  "key8": "TKu7oaxAfXtMcW22RQhZCtdaxNR9NY3N7R51NEns1k7aeSJBfw1mm9QmgohdYJmgezNgJUP7ki15ts8qXRgXQaa",
  "key9": "5pFHf97cdggdaf1BGJzYVF183hYbiW3s5dSUsUfBuksGvbZozBNYHYWXSKPE2KHhbnzTw7wMpkGR6LSybxiWtrkh",
  "key10": "3PmHNEYcuALd7ZNf5pRmNE3BB9x4Af5wPZ7zBWjEWvZPQWsMZN2467nGK1BWocDiNsGjfT4XoPeE3KN1ExhJrboY",
  "key11": "nsM9tpSGGds2VfFsT7vFJGGMmrNwkcpJT2F7u4W3exgB7Toq4QxtrkEs4F7nCmfyQhwUB11CTeRCjjn28nNwk1v",
  "key12": "5M1orEMsoj9ZDLUWWwyxfokqX6JaWdbXVuuyj9EDeTFb2AL9ph6LZmRQtxaziTfFcENhydbHGBgt9nZXPLT3yBQK",
  "key13": "5V4uKRcLjvTeuRxwWjucLhV5BGiCk1eem97UYtyyaFZZcjjW8BmeZXZ5nVxaCdjqizPw1e3xiwsoFgUQ8WMBamn",
  "key14": "3XFiuwnGFv2tCoWgjcdFN823baxAHM8Xitq21pNrKXk2cUxd7dMTWHbQBTTS94xHKyRhk8XuqpE9vXFdvdX77Arc",
  "key15": "2tjPH9ZHKxRRxeTV2tAJvPDy5EBACTeqRvr4yJYU6hdAHwMErtF7mhY26KsYkMRMf5mSzwwiQYC5VJKx7Fiz87nF",
  "key16": "2oPCQaFL5U5rBmhKeRAxas2vxVeN1u4PKM3HVuHEP8BUrtdKcHh6ZgicvXifyfFBHDhL9fiWWG4VE87DUhRfCXZS",
  "key17": "49R1qRhD8RsnpEhQWNQX4nSxpnAKagTi3kcFZxEMJmkV3ADE6ybndFDhrmDtRu986rjhYPGnq88pta21w6rrTMH1",
  "key18": "qDBZEZLu84RagNXQnszWFS1XLyrDnHtucFy32AibRTtHknb28FFc1UiBkQ2LorUYkZnsoC8x4rpDTHR5rSWb6R6",
  "key19": "y4vzrvGSabfS2uvFBNopfwwXT1HBnDfxffVyRLxAHbiB6FFTJ53bwfhvQZSzPiwCbAmtXPKxYsKAj7Mvf9Tm67S",
  "key20": "5Ga2Pn64cRqvcuX151YNSgKbvAsCEvmAVPcBgpBaXJbT87nbhabpzaMLn7HwkqNHapKQYNZXG6n5WujgeZAWSL5Y",
  "key21": "5MQjp8crtGUw4GxZoaya2BRG8ySNGTxoVv5LwCMy1nWzyT5GYBsA9rUvWZS1Zyo64JGm5uqEP9M83neyWRx8J4To",
  "key22": "5PZ8T4rF7nrATYxqoifR9ymfquuYCWz3Hj6LzZV6DnFYJPVDwdvcH1KWYbeZuH1cu2LuNxBDinEEQcRVBH8XacnX",
  "key23": "3Zum62yvSp8JQcUVH6TaRyxatyLfk62rhckkUiz2LTUKk9irQA4C45SHYMZYaBArBzBa8u1XHgT44uqXLqSTEeRS",
  "key24": "5bEKwt4aKBeQVsaKQHLixY8swfW94ipM9YUVWEaibNFsW1dExnoYvguTxtRGaebTF3doPhhMDLLmSWiWy5kbqQef",
  "key25": "5g9nYJvdZzRjr8uyEXWyhGs6Z9wBTnKaV8c2AY93fDxejtD4efXg56cCxUsH8EJC71RkTN4e8Bzdwpum5v6vHDvt",
  "key26": "3Gmy4h7pS4ih23r9ZwfTckg4JAq8EfJpUwtfuFKHa1b3VrLggkAxjVGr6mvpZBVU9krociMDUCztcgtgSvqtEf6U",
  "key27": "auMHZgNKBGciQXjoKJwM2AMnFEkV6KNC7odVoa25ZkeNmsrWqEX5hyjfbfCVcJdu8k4YBgUULaGSxWfR6ACxQVK",
  "key28": "2iecpS4PVAkkSvriSAYiUhvczbfR8HaXt5fBXZDv296jbC4xaPzJ3TRJZdcnDsq8kwB865P4ezzw3W4LiwYHGEvA",
  "key29": "5tb5XMuujec7WGzNymF4tG1cA9D5cVLDPV5sLUG5v5w89ju7pSK8YArnAKRSRzAheDw6uDWRKZx1ucY4oQ5uyix1",
  "key30": "5n2y3Pqqw2PQwWGdaEdzLnHhetnNnw8FuMkdzn3S89pQVyL6gTKVBwRwRjHy7zaSUD8PGQkhTBp3XFLXjjPEnYDH",
  "key31": "4nqJWS7esMK66xiwYirrdbjLaR5oQNEKGYS1jUKPTT4cspDHPoZ54kDy1bMUCpJZcUUtrdrhf7Sb7H1caF46qfZ9",
  "key32": "336zMbJWtZE88KU7HZ8j8jbACy1VupW91tiKi7uEMUwimWmX9CQpBtJ9od5dLgG8mHr3BBvrdnhiPSUWw8ZXDerp",
  "key33": "3xgWYo4zaKf7Lb7pxPDUby3TeujEAEDJG5zii1cFCQxeiqAYwiX9su3sHfop8PKPyX8dne1c8RJxCcpFT7vAzxPt",
  "key34": "oLffHDFjBdZYWqLZk663zyQ87Ye2raSt9r4PZKY1bCQpk1aiuTcuAjDjZMSZ15gB453Qtd2wRfS43h7StvengjQ",
  "key35": "NgKf23zyBn1AbrtDrZshJec3AgSEBcnUQLVUtb6z5mQdt2CueiPVPtzKqGH969KpwQmK3qAujGb6zueVFDBqPLy",
  "key36": "5oBxuze73DsqfR2qxcbZCAFhwfJGNGNbZTacGi4ykSmgN4rRTxuWNDTWB3FQzx2WXA2GuKujjEQShvSMzjxurzxV"
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
