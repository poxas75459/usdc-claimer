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
    "5Ch4EE7BPtMAjCnxjmCzSSuhXUEQY2Fjk9ijMK28nMSgVMj7TP3C58weKkoEHefNX2ggQjMGDmaWZD9xUCN5iiw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ARgmgwNMdGPbt8GfUG3C94y9ytyZkVxCbxYAjVTsWuGLEW9UZRocBK7rd9yJeqXKMoHcqUHBqNz21bNdTJG5hok",
  "key1": "EzhsGjA4Xp3LLr3HF7drtAgG4EKhTzMBjvALEttUj6D2oD685PHT4JsY87E8BbmGRpjPxr8Q9scx3wCPFjWHrfk",
  "key2": "3uT9niaM65MAtd93UagKHzBdjSpfjpmnA6LpSAJMP8ALUoqNEUEHR3thEDhZdVh3jtNvQjR5wBvyKvRsLaBTLoR",
  "key3": "537nWucSj1NuZpKZihJPEn9ovUuWP3KcmkPcq39jGCv9GKEr4UVehqHppTyB7NAHDkNyzTtYEukc5FXN4LUJTMZg",
  "key4": "3g8vrsFUjrTVgazEjQUPgbSYrts2LABRR8mk2KbRE2ap1yFwsUc2RhHsAX2XHDhsPidraikH8Ln9nc5tvDtAMQD7",
  "key5": "5D3f75GHkvc1ZjjPXEsk6h61x6fsytnzomG9EfDS2WkcP5Khy7dPNCY9Bus1sXB9yTGuQVMb2ggvAK5QQBsYzq96",
  "key6": "3Ri2GiFaEwTSLVSBgHo1cK8KHeiyv2rRHgHBbciejziQ7Hzy7qhfVQeVnEkmnA1RhUacVFyyjF4s2vZ38HjghKkc",
  "key7": "3dMqw6qTfni7q3bhzHsvA1L1jad8ta6qPWB1836nZSS97qKNZT22sHczXXHkbjtpwgoscS7sQE6kV3J4FRvzRSoR",
  "key8": "56pVkwG6TmfukuevFhtJqvvyDrLXrzKKGrQczSG7Rwn1LP1P4Lp7ePhGrXM9PtcS7tXefiYFdUpusjGkCDyRoBYy",
  "key9": "3fwKnihQqqLWRETjqcvXDbdaNhavWVk4c1Wh8TgMb5JetGytbNXxsNrkFAdYshRTtN8Y9BvA2RGxGtKZ6Ry3eaPB",
  "key10": "5Hr3CyBJ2HD5LqN6sRg3ur5H95t1wQCwoGfiihWvYK44wPJnWGMbViFq1qyfugpocKsKLphGRBZwfskW7DSawXG5",
  "key11": "2zWjsLkbSRrWsPkZSiiT88BgHJyevEBqZ1YYGpvLNVkR5i5hTooQ2iTsJoRHPPWYbkvEcqZCC84o2AsjyYzC2YJn",
  "key12": "ziH3zXDPNbDyaMMaUPChJo6M4Hy4JnyaDUArdCvLzZB1jgJjoGaKq9wFaxj1ebKqTxkLMPx5qr4bXCcJwkLJbEa",
  "key13": "49KZcoPme8anuwGaCbVt5xcJM23CBhy2o6wRerWtxeQP9dkZ1P5HykxVeCYWVgCMG2Q8HW5j31ECEPfuNfGfLeRv",
  "key14": "37Ts9YddzUDhGwVCHv1goyFfZ7qKyyG7NYJ6mquRuGHsCSKVPZquFwnYmT7JWDxt8RyeJcTTTjmXdRZ5P8o5oEC1",
  "key15": "3RHBXYztj5ooo6XtujPTH37qB9FganXJ8DWUmRt5Y7dx5jokrp4KiRmJzMrNeHw3846bVYPTxi5N5t7rAJbXVBEX",
  "key16": "ocsqkv3Ay5qX1wCY3FWWPE5BHQaBbHkWxDLgeqioD8JPzV9QiF8H2tsMBPwC68kN9cvEc21kTgLei7xxryT5b3M",
  "key17": "5eEESVp8GchAWpKswZvtovUmVcspYG5GbFUFqKXWowmjhmnmdY567XcutvA19mtczCGnir2GwdJbWv3rYCPpuVck",
  "key18": "2Kqe4LjzGhTAEwpFGzhGUHui8hqhFiEb9uvHFfyBi8725kZF5ho1z54dAcsQzjKy4gy8xcau6MnXNwxeKxdB9nxs",
  "key19": "234jz9To4jx2PKNxFhxnThHx2ux54sqvYkmCotuwYuTsngHRkBbBLvCHBwUg12JkAQyY3hS9dijiXnj1GcvnrUmu",
  "key20": "bLEFBfxhEazA8SZrqEPpUNpgjuaNQUAmLTkvEXV41Uu1ZLujo6jdwAGJVzKfdrFsrFJ9fNySXtputvHPYMvmK7z",
  "key21": "4SzmDLjyWixJLypPHhhJpx8Av1vwkvDgBUEvnhRGKfnVtHRZoFkD9yRbvhrPMYfjVc7i2kKbDLz1hJMrHZDrakxt",
  "key22": "M6vhiRoZNMmaZjGRXyEBPWe919mwVM3cgiQhefUwUmTmyRPoSnNzkFsR8PR86xxcHtKTp7TefCyrdGY6iQXvHNT",
  "key23": "41T9E44ajawRVqTsqQQA746eD4DKM6EC1GBG9FvYkG3LB1tsC47wEsYfbahkF9sroyQQtnJNngU32z9Wv2S9xUJF",
  "key24": "k1ThPPwXnpGikpMK7BgaW47oWn8jstVa3hzxDkJx777jPJJY8udgvrSAvYxoMt6De2VTDNwWk3nF316ZLxny9Hv",
  "key25": "4hnBkY1rZdiXdTR9Gf4xu95usora3SfsDhiNfwPz4f9EvNjXERJLrKMs9mr1LTw4ZqvtN3Jra47FmWAiNmUHF9Jf",
  "key26": "34jzChjM8Y4dBwHwwqbkQuBShboGAH41TxTZx5dkE5b5UEFyZwxkXogA9AGvoAWGwyvzSuumu9qbBfqDpfxe7K6o",
  "key27": "2KtTzAhVrw4N5LXWGzvZqpyTzvsdXRSCBK7vAMEnakWwFYAbGcrY1Y2qpj2hA2DTXyYgstPwAaM6efuiFJf116yE",
  "key28": "4pZKtrJDvhm5M9STZeeynKyTbDHvyADJJA9cfp1bKjeboTnChcYEEDxdT2CbH5ebYAhYQDtijP6KpvjojjADnmoc",
  "key29": "8Z4Jocy8wfeRjhG92nhrZK7BUjx2Uz1DfMnpTh5C5eNVdiwJPkbBJovoHHcZszCfX8ywmSnsb9AE9gd2Y7Dowbt",
  "key30": "4carKeLBcEHu9muTDG5RAhQMGz96xiNFu88KuHACGmrsUUE8XjMipjbzjouC2CYxBnU7Bn94yjCDTNQo3baadocL",
  "key31": "3Fv1GuXWaLJRxKKSQAQWkwBRc9WawNidNcKNsWkE2Y5wNFEahF8gVTe2tX3L5cvqkVDjFQE8epRS1GmwcCr4YqeH",
  "key32": "tAvE8fv8Y1WcRKFdcLy5kNVPUNajKue74SEgtUGvP9LJpnBvDxub1Si2YenBQedSxvBepekLATxWfLghmxXZr48",
  "key33": "5Se3LuJAXojYB3imJpStaeJGhXHmh6L2NpbfSpzPveUtSipHJrgBjdyj6QvWjW16B49RKQ9ywNXDA9SGDGmDTQer",
  "key34": "3MxzMG6pD9DwVfoddERHhwBi76GSsizwDtB9gtFL62BigxiGG4sQBxZNLcv8XGdMBLBnXJsajre9brKyssVCb75d",
  "key35": "hQkj1uPC3erCjReT1JSwDx3L9mKHDaqe3Mjf1i23EUjSUtY3kBhAAJzGiD6dZow7CexRGuKx5bwd4ffo8cd3q1F",
  "key36": "3mX9xA7XGzFrcezHvVpjgowScbCGnhTvgb1awYGXXt88H5tJtwYKHRipFGSVBjNexyk5qCTHRgSWpFh3SFieUm8B",
  "key37": "3nkvuVMJ31jUecepiZudeiU7rs2yYD3PbxygpDM7jvrqLH7411cbkRJg2YfHLBd6JLPFUm9aop7NwfV1XrWVQr62"
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
