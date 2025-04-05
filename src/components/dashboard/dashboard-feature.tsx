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
    "N4pgn9kXL6FyvoReChieSHJink6PGckHRbLRtK73MWze3kZ7h2nuxJN4hQwr8T228ZEXqrg6UGccwE84BWYJJVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QbZ6RK9DoLRcY15ALCu3YWNzH8PmgbKMjG9VAAEuWzqS9J34sPK2kW82G4UhjJPpXjKXrBweXWLtp63HUnDFrkt",
  "key1": "47YbatXEiYteZcuRZg8WhE9PwKshHjgqLw9NhyyKx3oeHZi8LPMpr1U4BwqU7fs9xmyA6HzHxTcvmAKLac719C4c",
  "key2": "4PJXS8bVGnBGL4vQBC5HUBmXkY2R5nUv5reMvkp5crB98N4nhVNCvgnLjh7y7AzTfCzcLvJho4sj3K3FSWSxUyww",
  "key3": "4oJyhPrqrLPQGteiNMNGEqRL3PHT7Tfw263MJXs4X7JAdP93xghDFzFZinEwsDRQVQ6BQuUnAgeSx7W4AuKSChMH",
  "key4": "UgaPXwkqTrF7TbTxMBji2k19uqsMoDEWAtutYVXj8h67vQaz4EdJvJbdoAXw8NmRxNxyEmKb3wUqxan7hDELCS1",
  "key5": "4en1JfEUprH2ZVmk2zzPLvQuspnXdmAPBdXeq8KufdtdG4dWg7SUgZ6LgJUv2xEQPfrTwekfQ1j8bHVA4s35n7BZ",
  "key6": "T6TNwNdWbSKznYcizbRrupAigxb5xBsgpsf1rdw3mYX2U3vshjWW8BTLvqaTTbXqJ6YRFp88dPaz4qD3EBn4qbZ",
  "key7": "4oTeotekhfeKkv7NFtzNhQJxYKizx1iowWQqRUoU9WNEV5Lo3WsaQGdHVvMmR6RRDR3LxbM9wBdS92vq5YjuBDss",
  "key8": "3GKZx8CE85ufYkrFfGQFworiz6M6TryrzAfwKrt4Zr1nw8HrCAziK8vAqv2VXpGr6J6HdQ4WidDHnntDq5nsRtXn",
  "key9": "4S8aauT6aKauSAe2eQBgDxuvzcbHEmcJsXBC7QvB7f3VmypthP33PwBWi39NiwEePVGK43NFtDGwYFCPZCVNu6Kr",
  "key10": "7fTm5p3BahMrgUVH7mqUZ4V6UivRrsDcMrP5dHT8ZvaVaH7UPmshfyZMJKZBa76FUnpP3RcZr42GPw66bdbFGNM",
  "key11": "3xrKGqYGqLSHyp2NJjTKuCwnAX5vZjLs3pB1Py3mwrxbV8ZT7tsnY3TrasXJ5xMbGVaf9reKfJpRvonbBuG4RhLA",
  "key12": "ze94LxatZGNaZgGTgrH1GmtQeoJdv9iddbZEUDRsZgubuXmreGYUcby5axgksJVfcpuF4rQWcQGeRYJGcvea54W",
  "key13": "2zC1CnDkMQeLTop9k3Wo5CqyUwqX8NTqpVvaGvMYHmgrL6XHJWHggMTvjoQZqrHHrwWeKdWpK2XBD1kLHz8T3PKd",
  "key14": "5Qd92H71FwJ9SFg4ZKP5gVrAv1CiYsxDYapck2PAi5Lmg6oTJyidyfu1rNL4GapN7o7Sr4dApFVjypap5EKoEM2s",
  "key15": "sCMPCqHKCqxu8emLezJ5J7zt28Xn1FpuPinPfSxxk7hnn3npuHDDQjALY7WTFQ5scy8kCgMD6KrguNSun4xjYx9",
  "key16": "3Ajg9DowbfHiTC2tRzPVejxjz6ZKH597jrzjPPB6UnHkzqX3Rq4e8D2G471puB5D1Hqc9UhZHMsReipJ4rbaVLrM",
  "key17": "2p8d4wVPgWXvSDmeRFBeRjcG3ma8ekzeQix1BTaX8cd91pcXuB7ihyahEJA4dhemQFXCXtfdECoLFAokXonjXFSR",
  "key18": "1UqBMGX9PivVCQAePosKTXRUGbr3LrMjSWnYrFHKdN27X72fgKxpSxwD16YY57Gxbu7pCaxgcr4tkmxQ1ykiKo7",
  "key19": "5xJfgRSjYyNQeUvS93uRYfQwUFcNWgFXPcyVw8rCjfn3Hq4Ftg2jQmmU7ypyZ2DCeaRwkB9gKaV8gKHwUTjtsKGA",
  "key20": "5TktAAJg7q9d81yv7wzxDV9t4MAMCKJtrFxyqRvqx8EBWX4uU3SERSm3wJdqa1JJwB5CQHmSVF3rvFuWvARAcHJR",
  "key21": "4uMquAratqTg1sJQVgJyZrhkrQmmhGUK1vEKXbmqH473AUwV2EonHN78e4v6HuMZ2H8Sio1mv7g4takAHkQR18hP",
  "key22": "5EAZ3LQw13AEUP6KtcPbaXVS6KeWkPSMAFwkwBC4CUgL6mBzvtqthML8oP7TZBeqV3AP8ZARA8wRa3V2WG4j9daN",
  "key23": "23SqTPRed66aAQsyrCCe9irTkBjyRJGoHfUWAFzmmZ5vEQ7PKv6FdjLFPp5MbBnjFnfnCN38hfTySHozzEHcQZtV",
  "key24": "Scu3xcPNeNbZZrKLkTVjAut6E9FsVzm1AWPHZues1UhuPSWKWxcE87N49dTrcL5ht8x9qmYc1LSW92YrQSfdfE5",
  "key25": "43NLpj2kzSt6LZHGWa78mGhty8LTNvv6ncrKJ83iJyCJrgBHDWoyjY6GAz6dUaEct4eAGiv6NYpnNSQ9hzw8aw8W",
  "key26": "4P6JfaxDs7VfDDMkZ9ahuvkwDFb8rhAiADTGQGZTTLZ1kQMTHyHKPtheEauCvyfe4q4CkT7QiXqxBWh28zBcgymR",
  "key27": "535kN8BmqQTPwnLWHnsoNmhRiYBJ3niYj9eJENhvsQ5s6AbuEDbFjGAM5uYQJmaSwHkDL9dZeW5v9hkWurrqZtJb",
  "key28": "DVSJNe2caE2QNELncabGMtYCDc2cHFQssot8UhuCvsuN6DzRfD7RRuUHNDL8sZcy2BJHiwSmzR4AWwxcQz799Tw",
  "key29": "3orggecmo4sBgTJ6xoE5rv4r7LtdF9iQiFwdvddjKYyppDWk2WqEZpNRZG3vxT9C3cfbPQSFDAKGD59Pu1UNCnGU",
  "key30": "9zQdvh5YG2RGSxoXwJTaNGtXqK4GhBBWXxU7DD5F7JPhhzXtXxHnywjjGWryo1x2LQfoUyhDbyZnPvyapAqJhT2",
  "key31": "5tJYuNEJbWGEtGCUXEsKxiPvRf8BoDVPCZcWWmz51vwuhtLRbjkMY12xtbD3mHyxz4xceXMW6p3BqQW1C3mh3b2h",
  "key32": "36MjzHEcJkATtHubhQ9RGwobS67SUUSzWpmsYVn4DkmjcnGgdd2A8JSs8PV3AzR8k6LJtdxix7zFYmdSpwtEyaNy",
  "key33": "bNBSx713SDDk4PKquFDSfpkYL3KQaFLE7k46rAF9yzZewrmpWJe21bEWLEq43Z8QC27Gdnk9SvZvLXE9B3gAfs2",
  "key34": "2FUVC13BaDAgLevqFPYMyc1fRRBgKWFseXNq8z82oMeZARdeqzNGFFZHSzkuiPBp3sMZ2sobsqy3jtt2qsVKbtyt",
  "key35": "N6viPWabajW6KmLtwVD4rjwGHTbvqbe8qFSYBEnQvZrPEKas37xVqZAtnSmc1rAh34EKaN9FQZWGFhdPMBG8MYd",
  "key36": "57sBRtQiG8NDeWftT8xdGTeTwyBjgScbpr8hsgd2D867W5hUFoiCsnZqJuLGjf1EazWHQc4aHmqd22BteRVz82Hd",
  "key37": "4SyYzZm5ZXsM8HsHhDr14pz3Lj54uvZLq8xCa1RUeaFeoWNXeXjBnXJs3w8uUMTi3pVTgZzm2QvMRgFrzTndXxer",
  "key38": "596yYTN5YwYgXpFEzVooadMCFKBqrc1TapEu7UCvrUJwFbTrKWomSRDRAXkXfe2u2zHdDL3Ai8xgq2kWG8XjCBZh",
  "key39": "562mVFhvVcSb5phvELV11BRAmB6fK2Xm5PoV2anekZMCjArRSVTUinihSDV1BkumEvH3oP4Aju2Zw9YDyMUjVXaF"
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
