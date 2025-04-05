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
    "WoHUEA3EqoPW88Tu5ULZFfNub1guyhAKqgth5s4cx7LrzojTeg3gu95vQufpssyA6DQtqqMtr6LAhxFRMY5x6Vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jjVSFkWQyjQGF93AsidcTaaGzNe4DKtwRHgwCPw33JVs42yZG8yX7YZ7srretvQqKYJJmFFdYCCVyqWfyabHjqv",
  "key1": "43vQstZTk9xnViWAcaM7peTpSLx84iQqNK8PzZygNrizBfmj5ezN6QbNQqjBtY56UKLtih2J5uoiZHmHPcE2YRri",
  "key2": "2N81QKXQM1erHt3nGVjGDXWMMcsPYRddTbuKvGL7AfgzuYWyvPfdNNJfCsmPyFoaDvhRpF8KJQFnZyHhLbgWJqPC",
  "key3": "2zEn53HFpyk4RdfBHA12uxMW4DKAJrSnFDPiF3zqYvVwPQKoGQnLxCydhvNnjJbvZcp5GfKYbgoqFw1DWcDAjZGC",
  "key4": "ora8PwrUkRYn1rDd92qaU4aXjQLvi1rSydRhrZ1iMQ47iU3ZYDo7hRy1NfMXSK77AZ5EK9wAT1YMX1drmm235Gm",
  "key5": "2XB3DLTXPmBWbhFWbgVsuyPMVXKrCLqq4EuXbEsKgWDJGHepqwwq5CeV8o3uRQ7bkVLZ1nB1PQ799W19AEniWpPi",
  "key6": "4EYiDiKj28EfK5dXr4oHYP4rFujjawqSSq15XzHPs6Johc8nHZXDwViLD97syaWdakURTKMqf3JkYzm8uxXxzmS",
  "key7": "5yz4R7GLp6mxH4PNPKgPH28Hj3ftg9hYLpk3Fzgp3AMwHToe8d8UAjD6iRkXmqmibbYDBw43wp6SHPm2RxZcEHVn",
  "key8": "TVVMBnCVEcZBGm73vFBHycZnJenjQdqio3cMUndR3seGKzYKSHrxc9YpbD5oZYd6Bsrj7gHb52CehhTn54tbeAW",
  "key9": "T1QiDX8GBTNC2pmAwLskQ9PqUByRm8HAmG1AX1ERffa3tVNDNU4HFeWe7WKJ8GjHEe7cPRyHWgaa6ruD5DU6413",
  "key10": "42pjMYsfjmSfm8Zq7EiiJtc2V2xabnP5ekNX3bPqu7257sCy3WhxSkks5cceA5Cy56eJo2mGymMXKdpyTJy58gqw",
  "key11": "2YTuVkfTfGCrm9pcczCVJtvjCCAMeEnEqyYSqf3PzNGC86yd9dKTSTUToyygoYxM9ZFgrZLRL7cm2et2KfNMZt2C",
  "key12": "5hy5JQpKDa5ppSTcQWnKn7t1QnFQ7n6TikANyALPiki4r4MJ3HgKLSJ8AtYccvenYPzZQpGKJ2x34yjq9rvxTfhF",
  "key13": "5w1bzAEVHEpmtFfWV7htNdthArbqfmjyJXscosXC46UYtL2719d647pgEsyKxCKwouPhzQCgpZ8DrxbE4a8fwEhq",
  "key14": "34LiDCPbYKn3r8ryCtvXcBXw1HByHvadzXbVPSS6jDjkGJ2dvNNoqQ7Jb3CXXTVPLoa3AnMzjDtQ9qbGtyPZQpzd",
  "key15": "5T26g5JuPWbA5BD3ZsD7ivTVKS2cy92L5ic6xMVQTnSbpPee1hjKHFAg4Cy4USxiH7NWH8xP7fwJ5GWbsXWFgZMy",
  "key16": "2SZfvqawmCqLFsZznWUmyx29FZn38p8XaMeNU5Jc48iGBbXs174WZ98vAJSSEcv62FC5ihytYLCwq4ENoRpthJfy",
  "key17": "4xmi3Hko1Kc7DVFskpQ79xhueWUQzFFMDo4ZjJtUxa4VcoyKdyxHFPZVCgRKqLcHfmn58chHrMonJne6JHdWtFfG",
  "key18": "4aHAeKx2Cr2ZDVUMjLHMmg1QfwaK2BiBETr7phSAP1gM8Nb6sVeSadkHQn7fs4Y5sztiC3cXAVo43LY4XrnQhTrs",
  "key19": "65DLqpPoLXeb86YqxNasxZeE5MMXj31YdHcPMftKLtwh9CJpk7L5fVSXwEupbpgTnQvENC424TUcxXZJHp6kJGk6",
  "key20": "4jKPy2krWdwgjKAuHbuNE2mUsrJRPCrsm9ebF5j7jk35fCAveL4dvPi5sd8JftHQtdujf96fvBKs1FN5rTZPMSfa",
  "key21": "25L9Ye2L25LZiQZdF6ZMuaZ3LwjDS9dsTCDbCEibVaZGuXJ8QYb86gayXGzhA9kY8EoQHSDgdEWWJb8XQbfzc4T9",
  "key22": "5eejk5mrktvDGSxhXHB286GmHiuMXSEkpXLFyJwqKDJBk9r54e6LdmqCb2moKaPyR4kynUAXcQwpCrt2Ar8XnRUT",
  "key23": "5dRvxbGmX4PXVcHfAazto3kcDCK5wWxEupSMkMeH1VPRhrXGFurFKYe2EqLVfhE2Ydi33QUvuVgAZyS8pqH5Ph5Y",
  "key24": "5qEdVV5N9SyxYHpkQKm4WaYhogHigZWmTXhMezaghHJ8ZM1erwJHSXD9DYmWSNibtdrW46msXMcy33vtMq5pSA3q",
  "key25": "3TRqFpKptxmyEcr29XW5VUdTcMFxeERfuTDDZgg9K46KdJgqbcKM9vCpFkxXpxKaY3brm4WbyCXAxaTSbu5ecPRp",
  "key26": "PcZQP4Tgb9PKLj5rihc49sFb3Tc3TtEC9zC1fGaWBBHvJXPSbtES8TeJFFnbCWnFwMNBDd9A7A5LF1bgwyXizbY",
  "key27": "342JqRxQ5251e7Wu8vRx6v6Vv2LveAkZNhqn4xC7uors7a5CfqDWjUiDUtYBJ3hj2SWJXRSLe84eP1gWjuqTkYsX",
  "key28": "3EVQwrRujnZ4HbaG4T4roceL8r4Yc54hy314Deij85bFq7qa1GntrYCqTMc2XBKi33YCHUguoMkVNWVkj9RrsxU1",
  "key29": "3n445LXbFh4dK3ipzuY6ueEXH2yfF3rmZBqLJn5ojNh4L3k6a5bxrZjNtc1WVRg5cNr7QoMLXkJd27nETsfRkY5v",
  "key30": "2gUiF4nNY2JdFd2Ahr2qWBXqY4WrNpCjbaJnPvDwffuLWs51AoeGTrvfVvVY54YtuxXVgCQzeN4gBN8tsZKKk8Zm",
  "key31": "5bW9MJAPiWTsFgmVMCrvx91w6QsG57v2FMoD9qtr4svtpya9BGgJv8R4mEoUsfkWzfDfB7UPNr14m2txt5RLakm8",
  "key32": "2EMyfzrbg7PuEKL8dwYFGT3rW1z4EBiXBsUQkrVknii6a8AVcGFxwFNZw4D3Ama83ZJNQKLzxn1qYbTH2YjJyXzJ",
  "key33": "2giczALmSvbcETGcPBv7gGwG64ozigEzTFMwSeoNYsz4KVUszcpEbb6wnQRn8cHxEmVQzNQd63EnKoMZZFS8cYcD",
  "key34": "257JZERrpA1VyJBjzxHMnMjLWw35VXXyW8gdJgZJ5wK92vBjQcy3qhQbuZDDXtexfs45fatRu1TZCD1pNXgR5BvC",
  "key35": "3AbwRp13ervX6iU6nEEKkqugeP1eBkcc7A2Dd2ZHNVguUZ2sW1hHJuFpsrwiKKPag3NMJhJKkbn5KVXmQhfUf5o5",
  "key36": "5KsTMC9VntRZX8UJoe9pvUubEKBo24eYEXD3xoKSc8nWkpngdiTRdbNLgdHcrJWQ1TqR3e6q6GLVrXMQY7RE6CK7",
  "key37": "4h8j9gzscP9jFNCWxuHVtigYJT2KY77xAGugL7xLyfqFyFP26MrVCqNLwtt1Sj8oG33DGceefuky5pmiTPRQhfAi",
  "key38": "34wxtJC2S8xSgYQwWmaqUmAHEDEn8pzk9iFyS5iHGX8MDeky8p9DtxagaYNnzjaCCijLvWifL96DPcJaWfqZMR7F",
  "key39": "2BG6KUeU8J5reg2PbKSSwiRLTiAE6zVguvuVnFbmUt3YwDhzU4Tuv7uRwoferW4SteyhvRCErxQELYLcJZ8hWa5M",
  "key40": "3FD9qzzE88jHAoCeFy5EkMH3ceTjPCq68hCu4u7ua6XzhFh9n2hhiEPDPuizWBZGWykHkfYMMebNj8inK8soUgon",
  "key41": "4nwiqi8UFTd1BiNDKwFkEDZWt6ZAapTvpt2ceJMozESaNPe1pBTMaTa3cPnhisum6EkM5Ri7dKAmLhaWoH688ZeW",
  "key42": "649JbRZQxg6XENg7JmDoRmMvDfmE3sLgVhtt5LjqtWXqVStmGNet81pvLMEQ4ux3pWqh1itGBJs8e2BFvoCTbAo1",
  "key43": "4ivGHqxShu5gZTPcbcRo2iMmfJ9gZXenDdNSqvLANDGdjJ45FgRLdf3g752RYdTNHW94GKowUZC7UUzwFNx79dbm",
  "key44": "3qokY9i3Gg8QCMzm6sBzYRNZYbaoyg5eL9KFXzA58J45pCkUf8qZ9NHiiU22RYV4pmW9ueQfBT8qUsgkiGHyDWrF",
  "key45": "3o4c8X7AYZsPs8tNV6e4G76vybVKrmaPmXBiFrKqTHKaafAGmBnxWodY8FhmTDocBDuPapkZvS7F4ffy9suCMSbB",
  "key46": "5P88fetXf9Rqte484Ko8qmSHGFoEXxRaurXwG4M6gkCLJVvGDK69Tcn58Ucc8XdFEAnPWeL2dHSZduSsJPt9ua1P",
  "key47": "4q9hRiHhgwSBr5KwjCS5sYhJKF3sKYUgSSg14aWAJRTJRvoPuCDf6dvowa6pb9W51x4oxjE9sfYZh7PgtaF1iZ8r",
  "key48": "4xb87FrSSSonvf5LT7b6YJJ6TqHjFjuYgUVMvsM96wEdSHro1t8L1k8wJmXtmkhLXxwXGmwF35GKXEUvA5mL8Y49"
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
