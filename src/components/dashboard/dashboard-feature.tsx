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
    "41JorVHepSDdGA6kY54QP7Rq5QMJnZ15r1t9yBwXyWWD6EHksUuc4tNYLG4x8yeV7bqHuvb4ZSzb5DTjjrjA1Kgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "72LG3ikYeGqBXJETCv9QXnTaAZPLSznLVtdkqce1NC4LULuZWLey7g3bGRpaFpNhqQj2eSPBHcMJVWmoPqU92Ak",
  "key1": "ydsPzDFXX4pQ56taC9gpCHsVTiFP1dTJiBVQ8kJiXpeaACz66FsKKQr8ewPsAr4rCfgB4CSumYYPruH6pNQKjjf",
  "key2": "jggoaJcJ9CM34HdXHHfFGYpS9cQsg41jPfgMB6WARkjtm6oJgbcSoQBgESTLVpYvx7ffb1F3vsYksLXwsoCvQ8r",
  "key3": "22XUfJB3riEvZm1g5PMbpybsbPmAQiztc4v9QTWdi9QXLYKZKR4SN36PSD4hmsMTGXGPcZnveZMUtW9D8KLaQg9D",
  "key4": "3ZbfdXTdTNDpMbZPFi8YyRt5jW5UunmtJeeoUysa7VXarGQvgCfja9cNxD7bi7aVBgKRehkMN2hix7xcXjC7Euhn",
  "key5": "5eb4KiTEE4worgGAxdamY6UozEwTYJijLDEox8V6rGkFhNVbwFrJPy7gbH4FvTEj8gaiifWjv7FYJ3qgBZQpEjs2",
  "key6": "3EYfM3jxeyZfo8Q3AvhUNHuE1L4bcbcFfbXFuZaimmXf4jzLcSkGeyoq2YRLoHDzT8Y1XQcyAwva47hZck15NrHY",
  "key7": "2xrgLgXRypPc4yskkj1sQnQFqmLqDzU17wjqmfpckjTHM4CRF4uGpg7GUT629Xaiqxgn3x2sG9Ddv4YzGRthtnFi",
  "key8": "4ZzvcgUTfwCE77YCBtVJVLvGjdNvQVJQK7m3B8HNY8PXtXdbS1L3kEGY1U1nTwg7MRhzxmBcSM4EE3ispnTdTzuT",
  "key9": "4J1z1oSU8qcsnzUvHf8ArXPXQ25vsudqY4eLRrRpYFrydt1RvQ4gWNQKxqosK5hhEL2jcoVonrt3DFThMi2XYshD",
  "key10": "5hsbsffExdPtjTm4d8ut42DAEmEUGzGrZLz5J65a9D6Czaetg1wDtPeZVcqbgEb9NPw6YNvKtV1H7DBrj8zLKt8n",
  "key11": "4a4gu9HMJ91h4M5kL4rqZ7DereQKVZLAtHS3Vq6FcJ6CPvVxtThs4wohWN5Ps8wYNGGnnehHn9BCNgm9JicKF4iQ",
  "key12": "27s6VbB8s4yaQUeC2c8KK2WGuxh6yNkejwn5msBpXLb3t4u2h75fWaznEkvoLGRHCwiEwB39F5dWbbCQUfHHKds3",
  "key13": "2esKbR2SATKujAdfBNHS33c4p7dMpuZC92vLr6SXdQUEnAvy7squGGVrbL94PzQNsMRs7FvFpqyRtrFT8MRxauf8",
  "key14": "3H8yivf25mhMabuUo2KSXxyfivqRU6cLMV3s6VXQbjesCbwPFwVVAZdhnwAzqhn5ETCauWiez2iQ5bVzmmsgTJWX",
  "key15": "3c31HBwWiEAWYJ3rimKjocXsP7cnzemMwDba2Ln7E6xxVMgjdj5QAcNxEQT9tbjTmXQ5xUbZkDy3YcBS1FJXcp1n",
  "key16": "3ka6XwtCkqXo1ghAhbCbU1idanALq1der49rrCyXVbSaL6gj4v9Tzi6vL3584b9DB7fofhKjiwkbZzTQkvcWka4P",
  "key17": "5cvKD9ihxD2TE6kwbKYBs4JFfT5KomKZYWKoD6XCMpLnNBa9B7EbkvbFrfB53Fo4FtsGEnEpa31tXEgThXTSWWYT",
  "key18": "4wy7qE7Rva1z9eaYXXRWHYb2YLmRv5zWRFtXPv5PA2uWduswmcJH693ZiETfyczyW5A6EZGRZX1wjUGAEp4R8Ysp",
  "key19": "4wTPR95LmFid1u7gJ45gc4t8SybAfbuuyzafnSbjFTJTJ3R8nrMRaB7cdgaUCAhFxByUN6DhjD9KjQnJj4qg5frp",
  "key20": "3jNNUwsKmUTVnmBS1d7g3ZzJ2EsCXRAZPfsBjeoXjdLyALX7Q5x41AueMTSQLfZsvkipcUjV9MaLtDa6dCzZzafX",
  "key21": "2HuY7n7kCQrDKFbWXoowtLUEr22yPjidCMdx8HZ4iCyH2CtbQhDX9ZBGi4QyqPGGgLpNGrH13vbBTnGsP5mebKP3",
  "key22": "3ZNWoPPLJDiUnWTF4jDMb34bH7K4Wmwm47pAUbp1tN89yn9qU53ubvmwqsWYS1BsXCV2GrX6bBD1X6FqByieWrFP",
  "key23": "2K2pH65bwfE7L8QRcUjwidhasUvxBURb1h84YcVEHUTVbvjohHa4gzNjVakEju7CaHVQSdd7tzcNehWsVVh9dbjp",
  "key24": "46jXz4CtE5PfBeuq6r6Af81wpKE5x7UocGKykQhRWZx6BYd5GnZKiPdUnck7RfjfYT7EnUxiE1iTAYSFV59UBT2d",
  "key25": "4eMygkpsJU2CFFpMw7SPcZ8131pLKLK22stpdJ3k1ZpxGggd1TMoU1GEjqiwJ2qUeGeuNNFD2mTD6d6vhirt62Ak",
  "key26": "2kU18g52kZ1WYoyDmCxrf39PxHkYGj8h6xenbKVjtyJ6Ak3E6jAN4uKN79VkuFRMZotbogjBaY1o18qrs8KzCra7",
  "key27": "4ZrBspViS4sgRp3FECXzeNqNPoDhTqW8sp5M9dwfoXjG8Th2hPSzNt2QeTaAKorutCUVLMXvBtC5yzJqEqpDQepf",
  "key28": "3pRKkoT3EaAm2FQ7W3Mrrts6CRkArAyemkZYCSttEaYd2uwSLfFLhmbhJa5RSYCRSZMv3Kan92g4wQfuKtLTpEyq",
  "key29": "2EjpmCY4wZgzpZZNoBXPkELqRNfcQrorQUxeoqCQQRJdhm1gLwmAYbwK89oEK1mmhdgmejXh5xHeapX7VkTSRUmF",
  "key30": "51EzpVaokVNcgi5MoEQzDw5PL3DAU3GnhzPndtrnav17cbqtsfii1XAFv3V2LhfUeEbF4TWD9VzLQnDrCZ2gvTQT",
  "key31": "qiKy4YA2FHRkcrcAYiZXgh5dKHTGoPJ3K2eM4MLEoPcxmZrGhJyo9Bps159Eczqd5mGCVkpvR6a61G7B5FoLDxb",
  "key32": "5mnR1hJYPBaLPjxuFZnX5AHWy9docRLGvxFsMgStHCZ2nebZDFb6ZjoccRzqvsqACrTp2zHhy8UZFhrxuFuY8ySP",
  "key33": "3Z6unHd13u8HnRYb4cdyfYiq6oCz7VcWUNgCb9uqNjjESYj2twYj3QqZcXfq83U3GcQz36cy6JfFr25xyJmHSGCR",
  "key34": "3tAvugCq3KiBPyu4WmQFaHDHTSRfoqPPC9qDL5KxtJwMBaQpwheyhQw2RVB6YJuEvyxn1xjUeWMGUBakzyTvMmVL",
  "key35": "3rt1ok3XbtwQtQ6FbktHGxrxSu14rf6D4bDxGmAtjkgqTRjdho9MqtgEnj9Y4Rf83Pv93VosGb2kcJWVrJR5g5s6",
  "key36": "tRAosUDt8AuZhZEmmgsYbuoDaN7zYDf6FH3X3UwytcZio8FpZ6zUQzrL5b6SdwHivmZqX4H8J3CHBkzFDuePZaF",
  "key37": "4xL2r2rdXiYodss6FocFzZGaFYYpuA4aMcZFW3whwdQT8Dky2Hj5KJqt8fxc3Fq8fsViZE8HceXxuWo2M74UWWpU",
  "key38": "3p8SPcneG7RK791fPJ1dQhMDreUSPgVbaQrRtRDbvbSwiwtsuFdBYet5v4HLCHqAUaseDcPeGR2oEyZqFkY2sTCj"
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
