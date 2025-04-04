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
    "WppNDCYaD4bAVpF634jjtY5Rv59RRYXEVGN8bn6N7jBkj6em6Mp1exXA9GBvgqg3GE8ZtDy2SPzB1e3FgDHUZpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "535uez2qsH13GjLMTGSbfdPDXRdj3wWdz13YGg9j9Lv9vXtizWCytsu9FfW6b21x2tHNAWXKB7Rw5JBHLUjmpCTW",
  "key1": "4myuzuN5V9LX2vK8Nuy3FSU2BVXmiSHsztWdG1s8BejiUmpapnvBiic3aY3qPHVa8AiAxCgANH5b4r1r27PC216E",
  "key2": "4TdmvAUNBLQeiXTvCub4v5HXRUskq7qpDFww3muzsoiByupLn1d3f72aAmKJnbRpa92ajBXRFcATf4vAAQCtSDXb",
  "key3": "3vJPa7vtNjfZtk9p4VexnEUYkS17vpaLC1hS8MBFpkJXSFDfSDj7xVPAQCCLVVyx4DLJQeQVtYKVqd53FUFDiVZv",
  "key4": "5GJmzxrxaXBmdVPWqv74sNBPGJxzNxDHnQMiYeuvasBJzkUm4dp8TpLpjV8qYVGvHantyJt6ocGn8H9LwVcUVczY",
  "key5": "4xqwgnKWvTbr5LDZNpMFtsMwP4ruL13s5eGKBncn8Psrv96CGMmptbc4Ku8ijrUCJWxLCvaFJbPdE7MDwBy4jLNu",
  "key6": "awGDkUxseoNLq1yRENTLx7r9mf2KfyVc3chx9FVfrPNyavEETaRCvgKTfeXit6r4D45RYVqxfP8GqxyKyopmUSi",
  "key7": "5HQVWtSgvmHVYdxLxFNXcNSL6cAn1bQrg4SrnQgSwXELpchghj5fLeBzwQpgSMTf9gtX6KLo9DrAtno3jgp1ew14",
  "key8": "4a1js6gS82t3hDXddpq7gpY1DYcboezBUizLETTNA6bcEB6guirXi9hMcP6BTazQaFL7jcfCnzkpKywd4yybHaeE",
  "key9": "5VbKNx2MY7tHa9wh51Pm9TzMdtSnmRo3zYjrP3TzV5XWiyv7cHfBAsXgURCrtGw5wCNFjzPZh4Cecp2FmCkU3Zn8",
  "key10": "4S7VZPsC5mWxgEme3M8oeDPPCU3Q4xaH6asDS9aASRfz1cE9hjouML6HqRVt71161jUv8qdTp7gGEZQTSikr9ZBN",
  "key11": "5HD7dCfkX9ZV4JkgwoHggQTunb67VrNtgdmApMctfyzBLuT8DeLTsYGKN8qzVrZ9BGjp9mrETrVCuwMxw13zSbbR",
  "key12": "39UGL2ZuuDucSyNX37Fv5agczp8QPvp19z2dgXNDJLhzUbVi1JysPwnJ88Q5VHWTn3oCQDHsDPNRSBMeU6JCcyoC",
  "key13": "51RsPs6DGYM9frdT4Azw5hstcPEYV8SrCL62yUXM7mV3cTGjMjFqXGixXDvUGMsgAnu6xfWrmapNNp5k9SrEuD5a",
  "key14": "63v6iaBYpjXnECbvBNMv9aX9ZdLhQbBMwV6BpUi2wCQzxqVM9bumQVMqhCudJHAAAwB5nxceMxx2aYRBkzbxJY3A",
  "key15": "2s7bnMGWw4tRbVyFQFvUR4NMkX8MzFZR5e7ZgP8qCbq3BNUh9b8hjtJDbkY8RMG8hpkDnhEX971vcewcZcDmzxjq",
  "key16": "58uB8ihBQh2SUGtupA5hc8QD1sv2Jw5QTAGT2AdWFwYvvP1orAG7Rm2kAo5fyiGzZBmbfTFrQKxQsMYXHeCNj7KP",
  "key17": "4DdZUWCVVADrmBvvmEUggyR9qpCjZhqyxnwNzmbUp1jzYSjHXuRKY8JKV1XgU5CMHyGFxtWx9WkVzJ9WT5heyMKp",
  "key18": "2eVTTGce5mm6nJbXyoet32pBpg4YBSf5AqpAzdsHmqNAHBQfonJ3EPkskxM2QHK36wqfzaJwDhvoruH9zQ6bWP6f",
  "key19": "2va6C2Ye7Qiaonr6RmPNDMtcgLiMQBgpTMzb2fcDWQLcvZfPBhGpdd8Tc1vqufW2xnGDQFBEUHXeokaMpf4bSY9u",
  "key20": "2tPGZoXsw544MHYwWs9LdjXknwBwjRPjw9RR57DhUXvm1FdA3JQa1AWCr6bAjzMbY7ajzY1Wo6Jm1eAeS3onAcUZ",
  "key21": "48Jfu575AayPGBTNg8bcqPVX1WtjGr2yF286dERqcQrT8iBDKopZ2yxGabnzYGNQc89h9K3PpFFxECQoe8NurhG9",
  "key22": "f33UJH64MdACqRLit2S4X8V1Y64NzAiVctyFEPCQsdywnsaNR3Y6rKfFyt98DQD2gHCCrs1hjZJmfNdSBRLZrZj",
  "key23": "47874ZuFFhi5AuUpoZeN1WHWMeEqRn6F86USLaijZSseqbu9tEkrt2fLhfvhM2iwTTTDp6ypFaTRddMdSmMAXTwK",
  "key24": "383NgwZdpjuWxbFCqCA4JsanLR3nUV5gh1xXc6m792NQFbNqQcaTqYxvAzs3igQbQFJ1X3tenwV5vrkWZL4UMg3j",
  "key25": "2qUKBk9dk3ATigjcgPCcLhCQtBhg8nHc2LSM2eyTjcMBxXVuejBbWGAxUSKeuXhMH99N2rQmnZvNn2dV951kFNqx",
  "key26": "4GC6kutHsGvfKbuDc7ntCspYvFeRvDq9fmHmrzrMofhSgnL54BPJieKuoCFfzUmLiPEBiCdVkNqxmM6ToF2s4A6i",
  "key27": "52QZ1mWDLRdoubHmkqgUGD5aNuhrr2EXQoL9V23LsJKRWxeXKfJh9DeXUbpj45HLmR1hqGL1Ht2jxpkmmmoFWJt7",
  "key28": "2X2zk6uQdwKSsczbgPZx9KJSo2yq3YgZ18te7RgfSV3U7GTQYTZtidaTgdNfQbZBfAGiBzrKJ2L9bc5jLgDpZHXH",
  "key29": "4YY2UJMgubuXMEU9mcqtifzupT2ahzFZfyPjQe9GtEdn1xAa1sL8T241KQYJYQeGnmWP75AmD6QxG9cYB643heBz",
  "key30": "2Kn4VKEd2xJt8vE1hYrSZm5ynmsvkviML11kHTA6GvGD58g7C2mz4hWG569JHckdXhcLZvq6EqefjLcCaLEofRpH",
  "key31": "BNuz6aXLkLwsLzwjKbwN6FoqctJZ5Qb7Q24Z9BuVJPd7zqfMP6sL9ArAuLdf5PtVWXeKBpzRCNoaJd7ckNR6BF5",
  "key32": "LFroKgsq86yEcviJsgbatrtYzLXa87oYg5syiPn1hNarJB1R3ik7N4Ai7BVKAN58C5YB4Ga8PmSFoLijs9K8TmZ",
  "key33": "61P6AoT4m5rfTPGWSdZNC9TJxFRqSncUM4YsEXyw6JaKbYMR5oE8QiFKz7qTJPLKH72ozrvsaC1TgT4iqoq8Y8Sa",
  "key34": "3w9tQAtjJdsrXDAcif4Uni4AMvMXtdYNJYXxmsCPTSe7fRokjge7Km8NSQheoHMoYF9BCvQasGUrQLLigVUjBJro",
  "key35": "4ex7uK9vtkNbugJQxrXXwox7mpmBnrBicML85Z1AeJQMSv5P9VN7vvCW1VGceRsn78aZuLQ46mm1JfUhutxoM7iR",
  "key36": "5QCnHqSQuN5ZfnLQzHaWrRMf21jFtjVxxHaQX6hbDfdoDewd6KkWfiCTw3RdLeLc3CigzWzSnmtnMxuw3KQTeWpz",
  "key37": "2nBDa6drDZVzCq17dBx3QrYYkAMfLkoJTue2dsZZoJnHWxDZovnhmXH2XeEXzW5JEtbkdee8sKYPs658PS4QD6uh",
  "key38": "2eUYQJAGPBT3nDajFAp9tVUKSTxFaLyy1dY6cxRrrRsChCVx9hjcZdHqMTX9GdtwzpCQw6BLGfMbXzHAA7C6LQ6",
  "key39": "4u2sph3yD5a5oLnynKHX2JXM7BQsVKTdwLJpTSr1m5aKpCxTDiPeCbQGyaKJrD7kZqAWNR1YiifakuxPwJZ37stA",
  "key40": "5PEejpbMJf4tiMyTY67udBcPqf58BCoBuXxKJDg7ePvq8DACdzL9HHp9QjEyapVjuAhxpViTJYm66M6QFefFJJCc",
  "key41": "2zbRtiXYJincTaUpcbHVkamp4tAw65W7CzjB2zftyEe9mGjz7RfwbmoWhj4eQTk8FhuFC5xixfJcJiB93SC7hkH",
  "key42": "3QUmw1aMSxn3rUUGPRe7XWHA9k6WUcfC9CWPH7z9t7xtahJvp4UBEQ4jqSvHWUzVt9Em55LF5T4vYRt6C7Z49Jnf",
  "key43": "4PCysqt1HThk727LbeRy6Czz1JMV2Zo78epDXqZiipq8iR8NyWH8NHmTLV5ZnxCZnu4XypoKucXqP7CzLFBLZh3J",
  "key44": "3Qeyb2fy2JRJaG5YgQQFQ5K7VkkVnHpK1aBNBBy8wXWDAQ9yS3vcorufCeDCCmj7EELL3ewyJexePWPEGyPMu5yX"
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
