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
    "4qkKvLh6uG9KBZLjoWGkzmZxteoBHCB9ySjKfpsSnusRqAqSqS5orUCqJXrNSFnkWYTy4Li6J1otHB6g2dCpjbRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oRp5hRMPvFDDfTjNNZGGWzQGRUB2wTpxHYWPhFkpdYW7e4aZYy2di98NZdprQCcwopA8AXianSuV4UFSKWHdsBG",
  "key1": "5Ak8je9HPRHg37N1QAFrt2WtKo5nFYgRuDm4iW33JBvTYXh8Mm4jyYkStjL24NoCFchZqdnvLwqcapVQSDD4Sf4k",
  "key2": "WA2RJ3GqnSYuEb1PQyVtoAmD8JXBwRZQBPbXh57rkmG29bVDF9mEHgDJSnLMa7tFwKygm4y9gpiB7QYBYggeVhb",
  "key3": "5WhLFEwU7RUj8THqwFbNQEapnvTfTWM18NFbY3koKc97JAzTofHsXuRneQJpyykXG6WT5QsmsafavNGkwKGVPBdo",
  "key4": "2SBo39FqCxZ4bWWKfMZArSjeweaBNUxbTAkC19SM7DZB3hdDcFA1spZzk5LdZKqH2EUWeAUE4Z5kjWa7FhPc8ssU",
  "key5": "3yBZnYevH3JiHjRgdeS1632naUBMcJmSEL3WdzSgPTkKQdMTkdEfYhTYkDkZMXeXvuXmk8gdFPPfv3FUZzMHpH6L",
  "key6": "3RpGWrCcdWvCAgGgCuDph972kVmv1Fg51k6QT2EM8gUgZS2gN35SmD4zQDRtbtkVWQrZXmx37mgcUcVgPi3t5YAm",
  "key7": "44CyUZmHgTYuFU4aLKVtiC5bVXtAKCdFsCyQP9F9pSePNDwUKn8nPh6qSZjjDRvJ4JuX33tKPsoqBEW28VgdL2qg",
  "key8": "4VH4Dpn7MvjVUyoJXiHGmCg36MT8G8d9c9V1K64AbJaARe9WRKhsyHr5Tumsd57KFU2sEUGw66wjd4qrfB7B1N7t",
  "key9": "3EkUrUmcqPjR5YbjS1UMLpdnW82kYJw6XUGorzC29wBimGDZP1wf97sZC5iU9iTEnpkgPDmJvx9TpSGz3CfdhVvT",
  "key10": "4GMQLV5JJioiCAsiSgToRD75tRuzxNT2ehp9KF7LSrioeDF9ZgB5otcRxFaRDpCh3b5kuViPEcB8yaSdw29TZij",
  "key11": "Hbwgv4J8SYAvWEDSeQY9BQ44P5zHxr52cWH6AdKrZ5YMFWdPacZqaWwLYaLqcYdSsotULbsAxdBKzG1McXck3oi",
  "key12": "5T5kRgvDfn1BWXuiGCDe3N1hQcCkkr1Ax7wNf4PbqfpBnpa6YPSy7AYXpTeWRht2LqLNVDywA878qFeGFmyp4vMK",
  "key13": "37kfVQjmC2na7bQvu76RGuurAGbuAKRaTiKYstr4qVPrDBgojEComcqcKao17YYwHD8PUsMdVWusURYwjgiEpWD3",
  "key14": "2HNp2dQpBGirBLm6wvLFPjrmtzKZnkV5qjHNbR4bstoN9DTMUbKLMoRLcbRmLjndqjF5C3dGvRyJ4ND2ua3qgU4C",
  "key15": "5mh1xVoFrjm2TgGHa2HVqeAYWXjHj2AH4LXnVWCnfeFDdf2xqr6Qa7hpUE7i83hwDfb8tQkupXe3MNSogFYkuJjU",
  "key16": "Tu71LSaokEfp17jDLhbNTqwFnp7nNFfUx7jmkJAmr8PDiJCFSRjv5zYa4qbjNP2YaUouyJMdtK22UBcZaW5BAe4",
  "key17": "3yqRJs3RHXYiqfk7LEgCxUbE3gP3SYYTsT7ufEzywifM3RffZkdoFCkN497cAEtzgo9Lg5FwYBpnUpNSGfoyHJxb",
  "key18": "3YKhy3rzfRdzmiG5tkuX1BZEG3mNnMd5dihLcmY8rWJeb4hkJcvgCSi4uwdrAxfbYvtJ9JnE55iQwLTopiYFaWxo",
  "key19": "4L5L3cbYRaT3uFsHVts2nZTBrHgKXsEkf6DCdouRmYVbyGeA1TAfX6iWrSqN8iQa7dLpEFArVbAydtWCgd6x8GnW",
  "key20": "x1XmomAFWx1sH4Ex66upHY7s1eUdsZSnjZR8AeL78okFLb8STzh6qoeBNJB4XzWamP6bRxin4aVLkHQ4JfqZyoN",
  "key21": "5JcXnkMWuvfojB9Qzy866RWQX7dfv8qzrGN2M7YQxptCZyjefjHbVk8K5FgTkzwkNmCo8sLhfuZaUE3JxARBrTpL",
  "key22": "3qbbrn2HphQVoSPare49jCXeWdTxeWD9hFpCnhoj2ykM4tRBAvMAEE5nXTc2mthqS2okdpZL7dSNZ6Qcp4xhtncn",
  "key23": "59MDaPzgBg2jBVvKPWdhKn9m12bnftMyU7tgctsZcia9iVCihXT7aNoqLTXMMzUzoq4dvjRU8ZeLbGhCNcPzCABh",
  "key24": "2UGTDokD5FQGncXCKwPBFtQpb1xvpcfK7WuyzxdyoGCrnFGckN2dENVzeh9d57kv8p6mYPSfy2o3AZ6EyNctaFvJ",
  "key25": "Zm4vN3o1qSVtohcbaAd2FHgummbFDo3BG1pi4jkNEuDnqCm4QRMfvWHzBDAErxZsnEGNXFddiDjXjw2GD5EmwN6",
  "key26": "2Hg9CCkSc8yk2nCgKJYDb1xVP7svi238X7SjSuGzKEVqVDzh1Cr9Vx94g3G3oUBV66WpvgA7uBtqpjpefivXgVB5",
  "key27": "2xbchBDCsSyAW1hQyKrf3knzaAsPRr83GbLCKJE3cKNVndyzxvXfNkAjngmLRsQ1QwTTFvL2vEdnWrKFfDxHiKeK",
  "key28": "3hRUMc2KqyqUeu9a6JbufSraSD6Ap4LxArN73gNm32a4Eh1vZ4f4suY8gF5wJscX3Q2GpeDaTvJ4FLwHTyfBBwem",
  "key29": "5qK4FJ5r9NUCSitd4yeKwir7DBYnk4oEBzB9ugQW62JsBLU2NVC7KfPrEpZN8HSf7K5J1HUZAJFM72pzj3Fia39f",
  "key30": "29zCCDLyTcgLmCYVPFQFrmCe8zcKASEwFfodr6LNviiFF7terkgzbDmiTmmAXfBLxiaTSDt897ECcYQGdKeVxBiC",
  "key31": "nxXy1HWkzDrUgVaFr2B2WQ2Rbgm2KJ6eXNQq2tRLb7roGJtpvqdweTrDNWXQBz1ns9qdqPqhnszWpmytazbNfAH",
  "key32": "kUkx5aqV7VDfKZDoxv4F4FpEob1ZKYBGKqC8pD8rRAm3DMfWUEUraPeqjiMm92MzNwK7rPwJKqgCQ82vCq5ZfkB",
  "key33": "5StaUPKoyRoHrpR1sD9WF5nRdp6JM5yJJVySrkK9t7N7LspF6cUQH8HotbKFCUuW2yomwtt5yb7uv1AEqVVVB8Fq",
  "key34": "2GgB7DsUb1DNJ4ZaehNAgv3G9soiGvgAgNV2jy4HkpAB3bAr6ZvzKLmeAGvovyw1tpsrxWbSFCJMmQYntFKePkU9",
  "key35": "3DNsytRKndBsdTamUDv9epfwuTGZPFJm9tro7v6LbgnQak3h2jGJ5XWKbt8UDZiBagLEAByiT4YkdAG4RBWncaH7",
  "key36": "5aQqD2cKshQ89RL9qhgtEeg1wYnQzmwo9wTR11w6JNZqt4RqVTwfUT9tnyXMfr1krJNhmXVp3af9MokXN4Auhf62",
  "key37": "StNJcVFGQRedXCbG9cPF7ENavW2xi3azD3todmJhYJHCD6xWM4bMEr2LBkvekhDhHYq7PcMbSHAcwY1DgiZBozL",
  "key38": "56kDaTiwafu4fmQjvLLjPD8c2SGbfYHMRJ6GFjBXfUd29bkQAvpmTyDt8LDh3gBevBoKtJ4NGqqrK8mJFwvcTtGU",
  "key39": "4veazSz7C4eCMDjgdEryzyq9L9ZpF3XvP3tU7D1gkvuUaeCuohpXy1cs46ECVvkCWASdM5MVxGDw843Pb3gJ4Vpz",
  "key40": "SchAmTikiv2ppxChLJBnfxLDH68A7DEorfP7GEB5E71x4ifoc3MW2meVDmtYdVpRSM9EmDeMCxHGYa5iFi8qwKg",
  "key41": "3kB6SYJ7SjKAB2HKzjvQKLYAGAWoYWZbXAiLYxxVeVDwYq6dfNykyKmhD8rb39kiFtmf15r3R4whi6Qqd9nmsof8",
  "key42": "LbPk47L6s5hWhPe9C3LEAN5Fub4vqUEYdY9c3CHd7weYw41kZ4eTcekwhWpJUrUsdRajLLHbZo7jonR2s9jAwNK",
  "key43": "49NNzMWS3YTQYVGMwpA9DPMK86APZ9pbtwe3zBvhDLyLaCHCNzQYvvZTZCfHzGSgG1AuKaDhswTaQZwir1J56QXn",
  "key44": "4hNXVKFgzYQ4bKgEGGYPyovLySjU5MFFSCZPv8NYGhKnJFub1iZAmp1dGa6wr5GUA2ZZog2nNZiXWh5QjPws5FYD",
  "key45": "4Yc3PV16ieeaaE6eVs9LpW7k8336j9wDr9eJZQZF7Md8HCwWNG9Pewu98KZEPTo8HQeGmGHCZSuGG74iYEYYR1FV"
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
