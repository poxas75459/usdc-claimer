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
    "48B4xiBkkBH7rwG31K9KdoLm1fSwyFYhQeaKSyW86fkSwMRHAswW6kKCHH9szWrDgpfUAknfXfWE5adVSvhqejhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XdLmAftZW67HHEsKSPYz7nwNrN1aqtwQ1airFU2Duqkbf48UZifrqeoZwQ2SCNkDpvhZpQVdB4eCweYCit4P9CP",
  "key1": "35BGL1ayLTx8c2NgQ7aUckLTDPSYjVKMmymRySjUJqVTUWKhsJnsXj9JeRsZFd4cNxJWSSUggY9SWVtQRp9UkLjL",
  "key2": "JdXtSGMvPBbaoFcqMMfdy44h9AjHrbGZp9bYkMtX5A3KABj2cnTWg2QRbshDUg3hEWqj1zg8Ncze3QuM69Fee29",
  "key3": "iMPBdCbR5uXRkv92Uq2ns7nSTQbSshaymFczYjwntyNGjkD8QMzSw3p7QMY5TUjkTRQPb9nrtJACNFBBYFvNAou",
  "key4": "66e96AhkjD2F5q3cFxpfpzmitpRt7bSZGY1tpmBfEE25f6rr4YLGC7T3WQxEBWG4CQkU7Uv9G23UduwsnPmfPpYS",
  "key5": "6PUrzM5HvpnRRfHDvvLaniFY4yAgdUcT9gRZ2anNU26aDsDyWDVpMhphxv2jwJB6votUXkSKGqx4H6NekfxTrmi",
  "key6": "3wD9dMKEKrWnub8Kk5zn7r7X1zVRZsGHohcq4j2P7XNdvZwSog53AG4DRoaSrx2bccX17aHFLU4EAbdoPbZEenk",
  "key7": "5XK7nGfnmZJQ6fMnCJpumq7qbFT7F5QH4sCyfNVEygtbnj6tyhnx2twvrj2xtrsQiL2Hx39ew7VxxVB6Pe59QSxK",
  "key8": "47CYn6F3W8fSWjF9sMNEFhn6EpAJKdGd9YRCRwRKMX18k4iQ62DpJXC5RWgamXCCVBAqJKpbnKCmttoTNGp6hT1S",
  "key9": "3aQjP35gUvv7Hh3pi2PKZqrvo7HcTKzo3itr9qvLAs1toZLcFM4e35ptjXx9SskaYHVZJMQULRCGWD5iAH8gZxxp",
  "key10": "4EX9GyW9tCFKMcAUurd1TkkfaH2YEHQ57ZUzqN1yMsJPhtEt32R59uMQwDy2n2Z8KwPPDj743ZEURzpFmeffJXA8",
  "key11": "2YsX7Pmvia5BjBpMKjiuir8uordgwVQsVu5cQoVz6DshQaWJvA1oBPBUKPs6sV5NGs53xHpqH38atjaCJeBKDqNC",
  "key12": "4zAER3Mdtn3jLonAGVaQyrggcCoQKo48JWL8bgGN9rkYqXwz8QHGQFyHT1oXYimCrsJ4DhnzPLpxJZ7JSUvWxqUq",
  "key13": "5FpYVoKa27LjdQ9Q5siYR37u5CzVm71B56FatKvkt4NsXFntCKYvnP94hPSJfU5tUft34gpNwnsz5A2gWBC6ePUR",
  "key14": "679fBRx7xw1yggHcMmYVArw6c1ZBdNyouSkt9jqMCaYKEdPACQeHvcLxp9yUCp4kzVoDpvBKb58wXsfdRYB2cnYK",
  "key15": "2WkAh8oC793uGjwn8ivKKWQHYFVZSKp5dwxHDfybT3yj28QupDGqQbJgJs9v4dff9qYtVcTX8nw56ZqFK5RhKda6",
  "key16": "3zqMC99XPSCtXPMHSN2nx3o9a7gKLmgmHHfuFv9pEhsf1ES25y1XR32W4wCqUspWWQxgeyDaUATf8zcATmh5Tstq",
  "key17": "5WohezgvHcC6JqC21WwwH79BGz3fSizUQYPoKUjDzdoAVfumUSDiGJagxm1Xsopb2WSu1B5ytz5FWuGeSy8EPnfy",
  "key18": "mVe6qFZyqeukFNoVxmJLrasM5Kb2GumJ6CwbtnwtyCNaXoQKdXiuypxqevYBqPaBzHdPjzkhf67BvuphKEkSGXH",
  "key19": "u4hHPoEJpSnQjjta8TM4Khy9cifVAbiFdTc6xUWQFeh3gp4HyKwWAb2g4YP5QfoMnaaAHutjv71MUB7mVN3J6hF",
  "key20": "2cjHepaf7knRxVfkeupRKRa6unZ2KRb8Q98QVd62kDkNBV9Advt3U3WuwbHNFPwcs1PsgnmSXKpknNkqPtmgUWbp",
  "key21": "67LUNKFPZbKfGNH3FQndA1rCVScsSRRoMHnw3V94yAcnxWxK5iCZf4TT1DQCcBjczv5wnZgxCcJ7irnyKd3ic1a4",
  "key22": "Dg9ijB6vdxLFzREFthPqrqkrUniEMeuZ2rwmwh6gHT23Hnf8rFggXpwnj7U8ie4VsQW73MzmwNxTDAJvV9EH1M3",
  "key23": "4iNTS5VQ67bawzPZvjjmNnsMKk4N67uwhFwNPTTxK3QQuZbutozFrcoEegkaeVySPUy5AQcUwwmdk4dHNzmRYNYH",
  "key24": "3v5uV2nFWqGhXYYMAtSbmCzZPXC1qPDfz46W4WW6ACVHRT5WqVCE5TXmrSdVUaje1jryq9ehVZ6z3FZCLNnxCFA1",
  "key25": "2TyaNNoQ5KqgNb4jdmv1kwvgCsabE6fJJhgtkiPPLAzDYV47ixqeBRSanUeWZVqFCxKpDRU3syvPKqq6XfTWWnRs",
  "key26": "tLEGvzKFyfEVjwhiSrqgg9TMX3xntNj6uGMFo9ts4SRFyGzS6sMtW4JMNrRVSU2TGZ1FSjFYDuPTfxnDyn7ARvt",
  "key27": "28mnZuhnysmyKekQC82Wxp8GYaLeHzHEVbHFsp8zN8pCsgG6SmHoFeD1s44ArBVrGKGs9gLFwWMpsDChQRamujbA",
  "key28": "42yjgsWSq6ud3xmsBPdqmftdHwtsgzrDSvyVNt1MWUpjyQdF5TyrRA8w3cnDb6P2yN5LVNTTbAMc6mLfhRcFpTz6",
  "key29": "5s6FgXue2j4C1NVuy4dYhonzeZEx8bUonyH9cS9VyrJXwgTCWLy7Bcjwj3swJrLyrY57RvE7AWqTTKqGfbVFiUvq",
  "key30": "5cqzDA9b2YLa6gmW5FVx1DF8B5NBFZS8h5e9ECEKRF2vAbCiPAjoaAopJ8V1YwKMW6zc637upcinPc4kqX2rEBkt",
  "key31": "3YKyAQdSUo9YpoaEn5PxfmuJhpvQrQqoBqNma5TA6DumSn4XJn2udjnLgtMTkXCbesNSwCSvAHvjKFstb7a76fym",
  "key32": "2AxgFAixH3ynKJka5r2btvoqLWUSdstfwhS4K4LXs9txaCkLS6Z8s22NroSe8gqw2GFuZrbNwXqxvsHTAYQ2bTqV",
  "key33": "4GcGtqockxGQdd9n6rG1JgPVMNbc93DUvUdRnSC2k5dAyKuc8MthduFg67fp5gnaX3hnoN9WN3zDcxn8kZ8Zobxx",
  "key34": "3ydFE8XBs2GC3gQ8pLQWJQiTaz84FWzybYXYVPpCZnDwEkPf4QsbG63mX23ZswWs9GgGpn286RavTAX81wyxmdpz",
  "key35": "4QUPzpv7jyaH5wMju8dUPSncdCJUeuQt2wXTRMiPTSYct9bMdsEF7TdFkzoceJa8FFZzRYNRJAcSAhs5TwNoHmDJ",
  "key36": "2a9EoBAR3S3X5BkUT5waDEKwWVL5iAf4TpSdMUWNmTPv8e4PKYaHcq79MkCMfmf8XrPWH12T4Pt4mk82tA9MVuJV",
  "key37": "5V8BpMwn2UVLocgSttDdYoQuZ8zUT9u13EkuH6aU1wXKwmDYtnj74peGu8yPpCHKZdLKYLTiBZKFgdBafxgU2Ppb",
  "key38": "KwxvKAeJ6trphqX941JkoXS1jQ5oaeqLJJtMD8axezALRt93YmohuLu3nwPgcXpJUE44QQg1eCzm3Hry2goq5y9",
  "key39": "2eHGjPSr1r5gr7roJWbaetmYm8Fgg4GpKN9hzsMU9DKUpjZnQjaK9btdmKmbEbTanJYLz93sQkJcUvnHhLZawJZh",
  "key40": "2etxaucg3gLKyyDoSLjb4D12MGNvHSUGnuh8WwypdU8fpv4smcigoMTwhCuAJq23Gddq8XZmvXVY1NhDYpa45qFD",
  "key41": "3jNeZ4gQ5HzMN5FHmjRW6QeL84MZcUApXh34Yh1i4mAVZyLVFGz8vzAG1pyh6gPQCMkYEPi2ysHu1ZVpfeJUmmtj",
  "key42": "3c39DXVHqccFdvLN5orb6UiNUjDe9aNkSjt9MPVzrB5XxfsmKEWA7oNYVZrPSqht5oFUf5tHCL1w3unQFQZJe7jH",
  "key43": "yZw89GHqMUMdGbafH24ASxudkyNBp1bM68hxnjyBuQVEuw2QNwu7oF4dWWeqq5ScUTjuiwrFjdXCrmP4E7gLkLp",
  "key44": "4kNuwxCSDHn69mmTirJd8orG691GcbEZ9VMBTXgZx3j718wsBtqoDe25sDGBLG3M3YHgxBRFm9LNd7FCi4dKbCK8",
  "key45": "4q4zgBjoExAkDSeN1RtB2sL4pyXZufb8VSVaoje46XEiUyT6afo5yAQ1Jon5c4baP9fRxAoFR8UbRhWZzXnjk21G",
  "key46": "4xgpyREzgjKAh5BsJvJodcUmtX7GN9DVCNAgGYkSRLer42YD48UhRvNXC1mzowSW5kMVefh119c9xFzxmZWSu3as",
  "key47": "16S9Dq1bu55gb2vXnksvWZ62EEcfsmDtxJagTP1ejs6TdQZmfy3trvKr5B7GwjUEWMBDD3fg9bXuZxxhEVfjJrh"
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
