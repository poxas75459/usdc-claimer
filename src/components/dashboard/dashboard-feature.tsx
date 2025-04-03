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
    "3j8dVRAx8CtBj67kCBomhG6tKt8pdxc78WAS7qT3Q1Ke7sXdDcgsYF337thejSgQLAkabgws5WsRb7H2nrt2wR28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SScJmrwQyWxE8qWhBufqU4GeqVM7garaVxPpR4UwixMzMTqSWCRiM6mJkYkBv7reQELs3XugT3Leoi7iXQMDqiW",
  "key1": "UPuc5yPCb4oq9782fqkj9L7pprpAjdHMwTNpPYMCaprK9UDXiWCFuNkJCWQa3P4t9KZqKk3HZjfFxJcnXc3b4xQ",
  "key2": "2PeYMSkKFzncLUs1DUGvNpuCunb25tdduVYVQJszSvcwB5sRXv5s3z9MkmQQihU9fHqJNCQ521Whkc4CpsCGhjZu",
  "key3": "52zPr5xhfLt5grk8WyWHRJED4NjcZ2X1iDnxsLinVzPf8UxRjwvtWup9xNi6gwDmmkqgBfb3X6ruyNHpfjwGzFDL",
  "key4": "4Q2bXREa1NQPgGCeibdoh8UHQLq9oBGhvJNeiGAQs5hAyefRYVjedZY51PxUoK6LxyzuWkj4KKC6Skt5NKHGocpe",
  "key5": "4GN7qy1grF6dUeZvpbNh4WsMVoAtRrJjtYsXjNNB2BrkNNVjPKi7g4f4G6HLRyNCopEnLfea11bwSVK7vUZ87Bny",
  "key6": "3DKBwYMmx1ufAFdMtvvtW3FmVdkT4UUiDwAEo72gQx237iErSVd4QyHwbDoLEwBwVQupHpD8eF9ybURDnF3XAVKz",
  "key7": "4Ytr5jDJNVqR1ReY9SjUxfy53x76CVpwh3WssDumbYQ7hdof1qGM1149cAUpXdcKhwXeGaWuxuTFqP6aw7d8uf92",
  "key8": "5zcg5HSgKu6FiDNU96hycsxKgHjP9p1rhsf2eidrs6rkXNcYNdnQ4FddraqBdxrd9NCLHcFjnjiJQDma25DprdAf",
  "key9": "5WgjXPapNBbtnkxPYoMmRhEDxhzDYUS1X7hACzHX9M38GGZX5TMV3PXjchDPv8QPVTgeo8Ub9da5vpgSJnCJAGFC",
  "key10": "3KnpBwNMxsjfWYkCbpR88ZyyXwZxzuqAE665Xbc8uVd89PCffFeLjTPDUKKyhMvDsuU3Y1fXBPw5Bj8Ak5v8DBYh",
  "key11": "5FSaxXQ9k3P3pvu7ztMDMsqQ5gZnW6Wqjn6wtHtAd6Ubta6YbVAGwVDeUEhUrLNAQQqwu6DoH2YG2ufqPMYXEgXC",
  "key12": "2BAMgHfkCEUSh7uaUxDvALB1PRJoGdhKd8UaroZSadQk6MphftnWKJzXF9482x63MPcdjwWctWGjN6Evov3CHqjN",
  "key13": "4tnHRafHuUipJZywVQPfha8tzSDDCdmdvaijNLkKpspHKVqQaiSGEvuV6zF7kw946q1A6bvpQggvbqdSnUqgBfrP",
  "key14": "5MyFDNyA8Vd6pkUpJcm7e6wgS3HVvRy9Kk1gmqY9jpwLpKoeJzGg6bcS6gffXuAFAaSBPoTK1VdJgk1oBNLopGi",
  "key15": "ojbhg7owAgNNE15veq8T4TB8Z7LVnLHSkbAPobA9vT3Co3wjy3uhKySEooXNF3uT5QU325obpzHSLYpeRZeAk6D",
  "key16": "3edHrEYhnZdpfT8qyhc9kFsMVqsM5p6J1UAYbTQfW39vzqNWrrQHsgsHfo1gbAFymaDfUC77S5BFDKmGU6mvpd2X",
  "key17": "np8XMk1c5VxjtS789UVV7ouChJkdHbtqaS8jcHLWad1YCvVpcYHVcFSyMdgYJEwMN2AhRCAFayg4aXDmAUUKjis",
  "key18": "2ecC6pocL1H5MowZep67pepEdCHyfSeLsyyK3UrG4BpU2QsA3ypvRJ2uBcvQJ42b2ZkmdpKuZYgW2Enj6D2LSHwX",
  "key19": "odQE831bByMxAqBNmf1tk1TWmoSYd2LGRCQSKsVQLtM7rr6orsQfLcZch2WkuF8mw7LxtBHVMubzf5QLiSGjvXa",
  "key20": "5hXSsao11dUWi9MKGs8BaaoNkJjTz6aNXSo2yftF582dvuVuMNDVPN3qxihLJsws4HJByMe2m4HmaZmjsuaUi65V",
  "key21": "4cdAvFE273StqY6EaPe6aQ9swa9t4kK5cjTGeUiH5rH5c58UHTNaKpfzTaioJVtojXkLbt28knfKz6LDzHDZb9hJ",
  "key22": "46gj9LaHopPhDhDUBW11uyJ85dmNAuWuhK945kYpGpYLviG7eSJoNDy93FtgibvEHcpiM4VMZHx1tj7jr7eoaQWZ",
  "key23": "4wxvRU3pJx57pcUckVCQPmb4xUBtZFuA5wZpPR8iLPjP5dZbdPnJV5eZ6PKrnVyvvdZtpykWBGw8JnGv4NPyhHzZ",
  "key24": "5ECRfufQXygxVRCkFiFXfNpKetwbJqSvApVKt9p8oDjNTx7tkUTDScTyEuTRYvhQy3yAtvfz9jr4zTq5dgHmn72i",
  "key25": "2A9BDx5bzLfTiwFCoEHtf9NPjZNJAMqbh5Upf6TgTgPUyn6eC5J7WnVAu38s5zcTe9RvfMH9K2vRmtjcyMSVnV4X",
  "key26": "2JttM2cLBMwop7xEM758ty71Wk4x4xP7V1nZyzEe3qCne21pW1kX3BiMcPKTXyt8YpZgjtbt552PgmYZxHrArxec",
  "key27": "3M9BQAx4EqSy6rnkTYojbTquCzTbZNF1J5daFDRTgZcxWiAs1e8jimnGpy6TRost7C84gWbrMzSPDxQ7646TQHHp",
  "key28": "EESZ9AFurnFTw4MENxcFbRXatd3hp9BACn5pGLqpTeFhT1ZMMUg9Qnc9znicDh1kk6TFx9LWKfEDY9yAbzfzCeG",
  "key29": "MFLqDqEzvdD23SVx4YeyoqDjVactVDpdc1bvvHH6camrXSXY6rsdvA1JC16JvkNhJZS8bUzdPhELPp84qGZiYhF",
  "key30": "5xcTwyZzdZ7NwpGotxeQyFeYGSxsAmQMyF68UmEzSitGk6qZmh7Fdc1LAQMK1kg6Qth9ZiBRKV8EDGGHKMBB6Ybr",
  "key31": "t45vHJgHBACb9Bx4KfTivjNcxBuAVHZFxX92S8n4EgQJpw11ZyB8ji8xbw2SJ5G8oJsYUYy1L8QUd9JQSuxjL5b",
  "key32": "jrJLMtD2iJStQ5YAW9YuF6SUHEhpRQCtd4d8zVLfNQEgbM5M81stRe5YqFk5LD98KvX4qNE3s1N5QDG4rqzHtEx",
  "key33": "2K8jwghkrqxTxTCBZ6VPHyvvrMLjpVcdAcK9yGUT2gyZUcyuenKXJ6Af7gv8SdExdFYEht29rF9ZT5vnyeKgNeQ",
  "key34": "2wEtUecKovKJ8bkJcpGXZzxmqr55TGc295vkZYMuRuV8Ua2c8A4XhG9AoHfPqmsNQMT6b5dXXqke6Z3Krxi8z8Xm",
  "key35": "QAk62SF8gU73VpGFW43EsPYNrr2FEnskKb59PdBimUrErMgWXnNb93ncmVKy1ds1PyjyRdw5sGKPaz4cBMPQxSM",
  "key36": "2KQDYAqnxT9fTN2KZaDuDAv25c7yTMLLfiwqMEMnqk3Fgv5EKaXt2t7MJT9UsGgDmNM8oF2xLprqmUeAprXx4cVF",
  "key37": "339EGFC9qqdtUpJzJQ8R9AaNua62Y3CMGVEc4TGppUsmgBxnfznNnQbgm9mG5rPpaEkkWzM19f2MqShPhWkq9PbP",
  "key38": "5LWsMG8Fiqr5nhRWoCJ24NwqMUDC6W4P8eGFUyoCcH5uy3Zcb45VgAACXc32DLGNzVm57B6hA1L5QkNB7KHs4Vd",
  "key39": "2jjffPN13o1fu3oGqLDfc7GHuN4XGKDbTVNke7QXmEem1hbjdhcgHxbCpj8ERbP3F3ajBw7oe3dJz1i7NYz158WR",
  "key40": "62i4WM8ExwWKY95fNZNiw2Hjfmdnj4vZnLPP7P1madPecqEHDfR8Am5MiCngafg3gyucqVqogZN7rLXP4FncikDU",
  "key41": "3MzQJrfYFim3RE5yrXyTefr4XLvxqwF4dcpRQ1C9KXUGXXHnz9G1rUG5XJGR273Q5ycGyiXxPnEx1Zubsuioa2Y2",
  "key42": "3jxuXW1veMNEX4GdrStcDGjUHN6YGQ4tttDGGnGEMoTpWRjJgk9imb1fHRMMQMCTtMCtJCBkArhMUoHvJbVdHs49",
  "key43": "4XyrkCroTH1p91ugh7PLncAyDY9HZpZtSerhi9qDyV89ZQVpYiFnRduQaYiWYrPnp3GxhkupodmU4LUAvpeNrPcC",
  "key44": "5CCkBhsPcxMybrFKx7pRx2Pi3qDzFpqwpZoUG63kcwwuMzpcweAt2RrX8BZPQeYdWydDJSQ2aCXxbwpVjuoKpFKq",
  "key45": "2ftEW1CcHdHR6Dpchp7a7UUZGLSoGjZRBPgu4fZ9zq1AMGmuec1Yyv1a1t6CsAHEU2x2riMHasxQ367zFgx2yU6t"
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
