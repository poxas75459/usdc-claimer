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
    "2fgSvMGB7KzMoziLoeMmedrUtKBQUrLDT714a7saGCmCYdDjaa6ySE61rAYSTqs17UMqX6d4zK1JxDhFXvxenf6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24FpzzQiSWveX8KGiSH12suvHzBqDSKQKBZ9ET1cE8NeWdsDrFxRrMDjAwG1kFUtTts5m8W9ocZfLaN51r6LKtKb",
  "key1": "299f76uvtAqvCCb8gjMVpffp4K7XKr681nUAk83iy5B3QznVExx9xjAuXL5gDtcoznP1E8QeoJQPeGiPcaaRaXtg",
  "key2": "4q8ApDPf4RNpMQtT69RLqUPwnec3v6YjnU9mQwRYnMCLL3uLrdVNb5bbK8EqrWEiiq2QdWeRPamkTW2HUouw8dzK",
  "key3": "4RM457qDi5eThm1FiQeCRffY55JhCN9DDdbw7o41JKNCbzTvk6EHcN2ZjRKWpEXmRiK3RPRRB3jMPVXbTv8GNxYz",
  "key4": "4YfcefTb65LgavyTY43u89W4x1sBKY4kRfVfFKbb915bQ6ok9mNCuUhnTDuFdN7oyNCkaR7trSa7iRmH7bdm99dc",
  "key5": "gDEu8wqf3Q4RR2ygN8XTU6UiBowsKHUMBeRTw2uqQtKHsKVcTRXvDCdM3gVDjQbfnzGCeRLxSLUVMN7HSMHHs7Y",
  "key6": "29UHZh52ApWrqAEvTvoUYMfbw39umys8pHHMAmMpft4qRHxxr4m5R9Pig7JxnxCZKTx8B6GTu5t6epptouFWbydy",
  "key7": "3hz8LGoREWLRSsV4A1eDyEuxRwzhywBmyVufRH1Nm2fKfd7yfrKRXMpz76F8A4A3iEkga44oifbn2FvyYAyqxBFL",
  "key8": "4jX1AGAjyByaWBSfugEqUPEy79rGWBZFxn75JNZuYTN7F3kJNKq8oaHZoG7CwvqHpd2P5dxCTrdNEUSjeN9K6tvd",
  "key9": "2iWYGMWxq9WzmyB7PNciehDYMDhWW2BUbLvkjs9YtmXuxLBpd66YocGJxpn6cxxFNQwVuYCuckz5zBwRfrcoGgRn",
  "key10": "eJ6BdvUekKB48DjW5CBjyMz1gPqpaYa1evyW1UMu6m863LbZsDgYbKBGE9KdQ9XssEkFUeURbQbvAmuXA7sDohN",
  "key11": "2zYMJAuGAgPAjMvkvEa3oi8c6iwUSY7MfwHEaUZubcFEbRiLBFWVSpCEeXPyU2C6sJTgHP45fBh4sacWYAHfp3GY",
  "key12": "GQNSRxjSm9T93MCUhcBBoPqtpP2eZ1bpHE6Ruf7zGgZxS5aXMCeXj4fekvzDWtywfkRANSDNaRxDpbZkUuJmoDN",
  "key13": "2iL29zRN3Y5GLNXwVeuBuQhvQAT7bUfXR1QjBpW8cNjAAfY86ahBJxPzF24DEqEC5YUucCbiVxJhivaHRXH8R3oV",
  "key14": "3h5gLHuMebgb4esd2LLZ63Jpv9RpPtjBMHNDmPK3agDcPTXD26doTgLYWyaYPyRZUKZKn74UHHcLnQe1UZ3FTt6U",
  "key15": "vFPTx7n4YK6bPQzKV772d2FN4Af5otX7Ws4PZD9smTh1Rv8NyTUZ5nBuZwruVUPZQyqoqzgRBjxE12C2kTGUimw",
  "key16": "f3xb88KUzXZPrGeQ1zY2BwKYVw7yXULiDUFEre47bYoJWt21RqbzXfNuwhemCXPuN9Yq7R3HNJBNZPa9Rd3N5RK",
  "key17": "65cV1mGqypUcFr2md6PfueS2YdaYUaVL9ZCPARV6FEZ4HWN9twmzbYrxAozjN4VvH6LEeU8guEccpmF7uhvMuvBG",
  "key18": "5UxD78y7wQ3D2UZmvARX969kv1fKAfvdCtKWRzdBvqqdfc7XoiLM8fLBzhq7mBeaC59kXqkLKxegECW3vJiEgdPm",
  "key19": "5B2p1u68RRr6g6ZXrC5xDggFK5p9T63ba4V7ofmx8tgzQrYykQUeeXSQavBEyeK2pzDrqCaQDQSx6FoDMtccsgEC",
  "key20": "2CESr36v5mx16FgQxuTfAkGg3zLm2Fp4ZUgcS7hqbK7xs5uz1oJmLEgoX5xGFxTxwzVi5SiadudyeA5bbKE8CftQ",
  "key21": "3TuYJzm43RHAhC7Q9aXjp7T7FHCFDrDodhUVP85kDoxTUHT2jnWtJRAQpnmpJorYUWHsCXFF1kSinEnQWFcNJktY",
  "key22": "3E3AnSvXVgXwfFkXD9ETAuvUUhb7PJGfL3k6ufrdTupycNHkSZtRFfKUE2E1zBGUyYYTZsTENAJN3Z2DQHbo9W1y",
  "key23": "2ZUmY7aNQqvGV65xcZLesekDPgvH8K2jp85GnUn53tepSirPN8RzZRiGKCkzeLmeBCUZVP7BWtdseRzNJh4m5tm4",
  "key24": "3W1F7CjYnR1p8NskDE6UR3m818153XcoMra9ksASd4UNPK7vHM89TRWfhvHDiF78sS3NYq1yDsEb39MxWDQ6zJzq",
  "key25": "5KZzcqg2Ezi2E4PsUGvk8JgCQ6ZsWedtMSzest4paY8GEy1MZsFAwnWCdcjUJBuy3J9LHHxPJosd5b6X48tzXi1h",
  "key26": "ipNFMiyZGBCLz5RjP9DTDEounbhEKyLYNvjK3Q2begcREuv4yu1Gmt5WM4WdHNYdZvfnWSyW8U2ZAeKSZkFtXWT",
  "key27": "5RNXLKssHzCvBeq731BtutPk4romvjbHTL3U2C4e7PfXoNaCMGxtRpRQd4UHi4JxeCxxXWBe76BdksXoy9NDpEZP",
  "key28": "5tJRTBFxmk5nJ7gt5MgXpW8CuncWmihZzRDYeH7CxVcsevWvSasgu4qqMVAU55neuc2BnuQLyXRmSFDUWvXSagQS",
  "key29": "3b1BSJq1e1McdYPFMfL4cmmYrTkDsv9oM5T6wDv6bUPMBzr7cPRPqZMLGCGrzzXhkwXPdBQfQdGJCGhjFFKTzqzy",
  "key30": "2DyC898XfiLAVPU4ZVMmNNTigRzTaDHZdWXphz3g24zg4ppQfseLmvpgkERkffhNxZy1CTNrtXPhYBVQeKo1nDoc",
  "key31": "5W6ubnijKs1nNebNmAH146HVY98XVPDAxGYpgJUQzunHFH4VNKWSLjDFr7nmnKCMYMy2BwwexS1AQ3DSKy73V44X",
  "key32": "58vDJ63XsMdxuoE7c4kAHrsr5BKPwjphxsiJjjimKhg3M857GsRhhWW1ZSkVrE785LkAjLJBUjSf87DUnkJBTSei",
  "key33": "3fmJP327TRPDLZceo1nPwW2B2StLpPBbtBdLPp6irQnDCCQbJwoo3JwpTpHneHEqg8ZzAgUdRixbSGzjG3B62t81",
  "key34": "3Q6zvXZa2EpUYM7UUDyXNHKeDJFDPovPHgmqtc6LjKy42LhamE9Rd1c6vpMTbvogCeQQiR8W2cQcmH4S1savTSRL",
  "key35": "4C7KyKB52QfWpNoqffkw523ivsjNorYxpxqWkV93PZHmAKrd8iDhYKHWn5usNpfqf5Qv7irEFCHWskYdeRLydS69",
  "key36": "55zsYhZKJThVsYBbkFU1uhbo6DihKoTnbU9Ar22B8f7KwnsLvm55Lu3xfv9VyipgLX747PwBYX6puWnrHaV27zEN",
  "key37": "2GCpggJhs6AKfkdzKCkYXxqC7LNzDkc1UMk5MRjfgxL2AsUfCU9v2EcDmtLL9nF4uWxWiqFYmTHu24hasLkAi8Sn",
  "key38": "3bBUxpGwQmHXKXSynp1bY8r8DxWtJuwPeptvzavdinABm1Y7vse6BtrB7avPZCisFeDPA3XR69CVkkUSMbikWstG",
  "key39": "5zcJ1JGxRrz5vL9qsRSHWZ5t62JPDSAaUL9TFSuVHXQC8mYyeKRTCfTS4Ua9eohdmB8YM1ma7TemFstSSRaZzu3r",
  "key40": "5pmMp74xoY7LYP6Xaqtb1pWDgbqEAa4ewxS4ByMkvpNV1gAybTpgrff4PCfNwkRWtD63CR4wPdWVwvesGtfG3JqM",
  "key41": "3DMGNy1SseuMM5NhZj94CUz5pmrf1WrnaLBFAPMN8jiJtCAdbxHdoqLW5M2gWPtats98dA4VXBZyxsqvQAuxSazs",
  "key42": "47gjcegKwJKoEtFxuvDsoT11wE4Bas7ZJJ5mATYet8pVxCW7SSFL2KHMsBeLGUMJJNfcTfuG8J3DLmwPgr59ejKA",
  "key43": "zxhGMT62Ez77pM2nhGrrsQU474BKVf74J1ZW9UeSq8V6DAN5BKzQrn9341srBQkdHpMPSn6HSDd5W5J9Q8qokAp",
  "key44": "3hkvgLBmWpsGjhZh3vKTudzg9rW378cpMo5mhFzSLwyKHgu5CPDKKXnF11zmCt3DaXGASN5KyZ6g82fH7ZdMSNRq",
  "key45": "JkGHNj8eXsvNGad4jt1G4mDRqa96kypUxAFyGae7sy6YX7LJ9mfTUphZFpuxVKRb5LrCYLf7bSrHwZu8EETW8BK"
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
