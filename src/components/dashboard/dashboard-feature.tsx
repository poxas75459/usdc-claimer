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
    "37w4T7452NVQ4BEEG46WKA6W4Kj458kLh7owASnNM2ebYPSWYE91LRL81bbxc1DLtGRkdj48LBscSJvWRQ4AGihL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eKAdp6h6GzPk76UWJnoQGzeBJTo6BS3jRT2Lizy5hSm3hCWdbhnhPByaLiN1g2Q2rFsNx8hNnnS1Y51YR5Q7zMg",
  "key1": "3iqsLKGe5da2C4mXtWHEJFDgyPxpopJ28rPKYMfnUDPAmMjadjw8TQZCR6WQ1b3ptuASseGrz7Fz8iMhvArbGjER",
  "key2": "4uEFNa4i7Z4ZTCM9dqn3FU8UEiqdV7Xp2e2Wy1Nt24gvEi3okKx25cTy46hd67S6bxCpK7bpHtpEEGeP7n9jrfqU",
  "key3": "4d7yEpiMQSKW9MG561KebNugYBazNKWzi28acnkNRSKCfHBy82KRwzaZq2M46dS6sdoyezAYsxL8iW4XxB6Zv6f7",
  "key4": "4vF3jTBxzm91hXATfMJ5o4KJpF12Q9bKB6S1sdTsop3saKEeJ3r6FkTgKXZLKjPka9P8pAQ2CHVwJqw3in1n9F38",
  "key5": "3GTXFKHSUFyRx4vjmNAHcwzqFy4ekwh4wfR5kEdoPaHtn6GvevGEfm4f87vKYg2QugHUmJhfwUfbDhxkMd9C2FP6",
  "key6": "BySEzzz4PvWH6WrvK29VvnEiKwycu8SpGLy9QQLxZ5emtkApKRdyX83N8mu2XmuWw6N74iTbRkT6fjJjaYndvUG",
  "key7": "3Xp8v97ZMjhRaQ4axZPuYTmkBY683F8UqnuZDYZEu8C8sHVewuviF1ut7qAEpE8PF1PfQ84BbqBzHjpnBhm1sHap",
  "key8": "4UFqyr258fFAYi3oiQiaFHJ5xCMB48fMPPRPFMam15cVkr2M4qKTFTJPSFXnNBCfBxE5B7Wd5LZkWEbMu9EpWgA5",
  "key9": "4e6ghBKmGZtrVKiD2CG9wUDQRaSNsQhamUtx19UwunoobxppzRkGZeh3Ty3dQrjkm1aMufspLMpJnmETXxeSiUUT",
  "key10": "4Zdo9FtcquSZtPqh6niy6fwbhuA9rs292HfVbGA2DaHhy48VtcEuxrx3NbQLMoHzz8pWJYsEHVzo5YMkVrMZnM3g",
  "key11": "5LKgF6QyM8AP8JAmWpG5dG3dciRiuca6hZoaMU2cJqfwCmdij5HXXxjrCyMSNZpkNsVx7d9yTErzoGnyLwACwome",
  "key12": "3FLW787714xpN1M41cZjNgQ7KUxfJMtEnrBhKTa8AeFKz4LiXyknYZaBSeyZngCpgRk5zZ1LVHKb481kB5HCrws5",
  "key13": "5vmFCZo6NE8GWHPVupV8DsthzoDxUwYDDFKazBXunK2vvyTrhuS2v6UUqpKr821dCTAnh9sXBBfWJeC7EVfj5mTE",
  "key14": "3P2wfEktnxgkm6dqXqZWdD71GNk5cVqh9WBt3GXxHFAqk3sQDuWRuo82wbDjHBjHnkP9bbecAzGwztPUq5CmAQV1",
  "key15": "3usALjZ8i6LvUit9ZpBkKvCb98Rzp5rpqeAafT6NhxqFAQg81oZmMk5MQiduEqYzrkGnY8cN1UW2pqKTYyE8qmyk",
  "key16": "4kPaXFJZLERY8zzrFtYM4k48t3jntCPDJSkTainjhW1fotjmE8VkHUx5T2KCu5U5QkjnhzSNEm7wSZiw3jzRWxdM",
  "key17": "4R7t2tZh1mj9xyFFyfMGL3YXb3ksdHoMf6yJBuNAYKaVStG4CS5vNTVPJNdmGMdZL4gFYbUrFVeW8DT5WkPmE3f9",
  "key18": "5wdiQxrpfHYU9jQJ7KkGdKBEwCXWhLsjQ5J66xPqpkjv2bozDKGHRfHWfxM6rbkBoHGoka3ew4jjSPL7XEoBrVfk",
  "key19": "5Sfss1D4TpULDgpLb3kaLcNY4AbkSoudkQYdxUpZwjVFTTDA8QrLx393ZmDpwXtJqBBV4JYigPc8mtEWi55Zoceu",
  "key20": "5pomcn2zNhHFfMw4Nrci6ogWnRTwyJk6g6Ymv2ZgRESN3uXrgyHmtTifpSZTD3UvkNLjBr86R8wgKu9ayR87NtJH",
  "key21": "35KQu4S9x6XM3xWmFRk58MyyfFfnJEc2yV3uJKeGnGfDbftuNrfjb7jvvChzbmpgBNbfWT1ecBVWFBjiZmr7Y2VP",
  "key22": "5zjBvRrGeP7QRsACMA2ykRASjDzyjN3NtwNVHMjfJuFnvR8324oYGLDErhHHDzpiQ1kjd78UzZWgQUpGk9rdRokT",
  "key23": "5V9YGmxEsnwu3g65dteYzg4cUKRfQEErmA7uQo32dfvDSocDoGCeqywBu4LNFou13c1bWUqmFtGzaXr8UDxskKmP",
  "key24": "m9pfTvoJzFWzjwbY9gmMtLkdDTiQhhSTvyPH1keBauXTMn2iufCENzYPnnP4F26M4KJCob9Dnx66kqYB8ug5fWF",
  "key25": "f3eRACj5vys38vFqTKYN15Bmbog2sSeLkNSTAAYp7A98FpRBya3veb8RJMLcD9DgP9vBwsyrpRmcfV7gQRrSeJR",
  "key26": "5CVDPqafhS65zax4t6BD4FGhpq5rBY7zVdpd2QPpR6db6kMMLUuXMJtR3haYRakFR9y7DgC5b4G845PSsfwLejdH",
  "key27": "3DnZSNfcvKRkAoTaaNNDAkkdhGWhjprm9VCfbbVojhe6WJFmo3TQ8t5978Vxg6wsgBBWDUdSdLWE1QrjksuoaiHV",
  "key28": "5WxQ6wScRvXQLjxk5v1f6V8fmSthZz7tdtXZJkexrtWWAVca4a5s4Su2YjqanWU9xdPikpFfsMoXetehGqjNskvK",
  "key29": "6dZMNyvH7P6rtmk6FtixfJ8yPSZDnKetGPKyqWaKk9PHjS56qXZqqWfuGQf8zYxjqdeKKGnjBSpeC8N8Adi79PD",
  "key30": "957P9bUmH6cy8VxvmYy9VGJGdFnZvESAra6Ma37gNyREjjB4L5DrR8HrUfrdN97fcRBJaKZyhb1VMUd1Mq3ABfz",
  "key31": "n2SeYytVCu4m9m7KfPsuHrG98fQeUBuV6LqPhrF6AL5UiKHq3Ye1kfb6HZY52YYo5WxVs8E42K8U2t3GyFNVKBM",
  "key32": "PfSvjZ8AjHpyZkLkaM52KzudTRt8eZHVnqKbvpGRVA4TbRD9Qg4oN76uLQEH9Wz4muUNbCnQe1i2eSY2cTfKSWK",
  "key33": "5N3FLyneYtKQPrEhoaBSFoiCuXjwcfVztU2NhVtUBw2k8bBN7dZLJHwyszfKwkEmy5diXkzXv51gtUgPsGzPaUUn",
  "key34": "26kT88JmTDJxifUfWwi7zcAiijHjGjeMeK8FaZnLt3gW8rrq4AZqE3sbYR24guHuAwVQNAo4ZfpDPUfkWr4dMZdU",
  "key35": "zCyWtLsFc4esyqGU1zhqRjpDyK7gEM8inhsUTHxqemRqM26CrUaZELqZEp48zyBNM2G1osJR9L4mxemmkm5sRfq",
  "key36": "wkvQ1QFN6B2nhkRawu6kVTvERF6hvgZ8kMhpxLQ1AKXxBqcc5zW3mYE5bVcpi9EZF3P4WhgdwR124M2TPe2hELh",
  "key37": "4v82FpJJztcntLTuzW12ecT5tbVdcG7gVcVcjub3p5HuHVaRCudd9X6d9nSQNW1ZvACLft4VuJ8LaWPQfJBTc38w",
  "key38": "56A1XoGvJ3ZtR96Pgi2QGNkaAdvk2KkbvBwHy9gvCssDg3888KsyxWMLi6EahxiJRMwu37veDdmuPbi17vUE69Sn",
  "key39": "5SaXzRsnFkZ5FVJq1NhnMThFc61P3BFBFyw8g52pbQxaF22iv6aMa22BnPzhbrv3pbbQZ8oATahntXFFxAseRynC"
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
