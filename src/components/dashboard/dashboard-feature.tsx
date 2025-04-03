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
    "5P9Mzushu5dbRMdXcFe1zLMj2kKtNCpxRqKb4Ky2d2wymBH5hY5Fqf4mz3g7iDVZ2LAC7NPwnHNMGoUdHrZTMuSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vFivdmLm3JtEY2jTYJ67FDw8CvCtusLLJ72bczGPvsPgu3a2m1SVvaft6NsQ4cjHVTw1fz44rc4GodqKwSGk2B9",
  "key1": "62zxDzFL1TKQoGyid6Q4tgQiG61dULyM5mjeEGY1Nk5QHujHx3bp6xe85GWMKWYwppu6ghJQM4sJVkA3L888nKQb",
  "key2": "417ov3i2xV5ExiTci45fu4uHykaJxWgDF3JkMUC7EKSzFPMU72VXpDTpYkkk35di3j794ycnvzCt13n9p7Fqd3Pc",
  "key3": "2UCkGfWcuzupsntkCaMcNcnCNrxxMHka7njwpLzG63MRmFe6qr5BTGDNuRkAFrynTSfqis8n5D8hCYryeah9VYTC",
  "key4": "36N6kYiDp6oYnfQFGHE3WmS6CzC8zXgJ8CPhSLM4FBq5MSGc4931UxAXfmmu3VPChawAgzfHiJvXsRL3r8zkuzFm",
  "key5": "5tvur9BTUY7WQH17r2sskrcZxsfLtV754wgpBwqUqgddcpvNL8HC4hQ5FgXSv9oBgv5Xxu5VM2PG4ALaBFCQn9xy",
  "key6": "61QQJHyFfZnW4jjtXNkHWJyvszzkdED28DtfvWZxSxTxGPVLn8tsi82uH3EZB9nCJHkC5ZhTCkX7737gTAGEfE2j",
  "key7": "KYYEhnRf3tsT4xpVhVe8zgnvMPcT7qr52gAqrH2x3qFVvaXaucittL3dN5FiN9FJ7a8GrLEahioYWF7yrK4kpAG",
  "key8": "2CW5bpGrmQzcuZkAuGJDmxG9MBKG51BRUPjCx3Z3U8jKUTUM6251RkDzKsrMDA7dxyNd7nSuRzgTErko2uYiLzMZ",
  "key9": "MKDeDGCyrGdkv2yMbziLsB25sNutjTe7S8MJENxDyVTpnRUTUBSi6sFMt5GhBxNrnRAQFHk61QWV6EnVV1BcXQJ",
  "key10": "5pLKqzKTMX7xa82kbGkmMkWBt31U4yDjfDDuQ4qosdS9WyYv1FF3BgLN7dMS68Apn79x18ayASWs7crjVa8Ct7TY",
  "key11": "5WsjZKYM64Utm24GjEwKGJSob6fw5GqZ2ZtqT5xzTTifGqJJUjJJQToDt1N6ZbgzvQbZUkrb8Ff3khqtLEjSWTNH",
  "key12": "2sgzN2arywSYSyXaLDwzECtTemriyQsho3NJUw1uw6cJgPJu5VEVwNyrZCN9LXhsbatxWLDeg4cnYPggx9tCsFvo",
  "key13": "3iQnTtZzdUrc5as82W8VgtXdtimD6HkTeGH4V88ncoKoVZn1tTjUqbzDHwR3exopZQZy89MRh5zqveZ9kU8bhayb",
  "key14": "52kWJmyaeu3Pf4NBR6eP3vCc3QG6sLaaDZJ2GBKwryB1Yfv6mvDsq3dETyRGx6iR7GHag2y2JRmFnyYZh4bae6f8",
  "key15": "5dzLtn5f6LRZgndJ5euCxk8o5TE7rUq4nj4rW9nUUj617jWjCKM3i8cCtxNPiipvaNHUtc8qWHSuLvPtYd7PbfZ7",
  "key16": "4JjjjiWjY7AqJ9KcpKDKMEmAiuwU8XKH3jrkWTuxV2MigWoatgHgPjk3Pym6KCEcXctZRu9zRimZKoruM3AUv4NM",
  "key17": "4JuVmL4LxmE7NMRBjoxLGQW1LFJJSDT3nq1vexTMdHLrQjrNNwjhKs5cm7BYukexctMMwGHPuED8TtELkqQqjWFZ",
  "key18": "5ATrAhjibNJPBn8PkuNXywhzuTmLk2EXmPUEWbU5sjWVSkFw5LY6zKC9yknQ2if7NcpKKp1y42zYBCNudK31QF1z",
  "key19": "4rRxrm5JvohJPyWwx72MwzxFyLVr2bo7r1grqKD9aBFtzRCdXY8VKquRmK6sPfLkxMdKzq2d31vxVaEQ3W9T1Fqi",
  "key20": "3XoM73H9pPs4RjVaACZXwZxdGoEnA2wUwZpuUN4raBFMiGH4ieQbXxC2KL8nNfuze25mKxzApsHv3XmdwbAiERm3",
  "key21": "6eL2P2Zp8skBC6dharVjohp8ykA8k4PScqXYt25RiiAbU2V3erGwiD7JCUdcei1Ab2Ssb7EVJwxB6k3ZuufiUDY",
  "key22": "5pN3UnGjx8ha2fZR58W67YcSiJ8bP4EK3oJFjNSCj6Uk1srr4MFYEn48Ljjbw2u7z5LvgQyUZx6H2aVfyL5r6JZF",
  "key23": "32iY3yrHhwJ5KoMH4ZDVF85bTkhKuxUMAKEKfTxJ9KZHJnCmJEvkkCPa4rphTZDuEVBSiWhp9KeuZaUHgvMSToG3",
  "key24": "4CGgwDzjB3UwkBvsFPZx2Q771EBdeuzhYCybrzvH7gfjcpCr7ag17753mLS6dGs3iLz3WmhMUHt3A5xoZC3JdWhW",
  "key25": "2QseBhS8m5gg25cP5dRGEfVShDR7eMar5i1KRtdwJ3NUSuwChurLrGi116fZZDR4gtNv9c9eTgFmmVt5CfvhvX7U",
  "key26": "615tKDTq49RtvCvcWDzaCznkmz2uSzuouJzGujZPzqn3gN2697n16qG31MHoGTwSxtiuxRF9h6P36apzKz5y7DdJ",
  "key27": "QXSDcFKQLQwefmNsiTwzw6FP6qPHCZrqWoCxNdB1oSLZMGoeNHSmdSXZPQryY4gYxFaHvY5RAPdDwJMmX6KkYvD",
  "key28": "iqgWRWrGAcZzJ2XBTs2rivna8jh2ZF9iyBx7eHFcZyjDQLjCRg3hf57SCdX9TkN9Nu9HE2f4kQF4qhTxVrsqyfK",
  "key29": "3XYNZqLpYvNfbSm1she7bgpL9VhHnjyDYvSvM24SX8uNxyMCUh7u4iZwnZNN6ZhRninC4zT7D4tUfpBrDroWtJCW",
  "key30": "5qAYuW4stGPYCH85chFLbDSfwpUf4YoX8ZPwoPshkdmfRuAREyNvh5YmLVjaGiH6sweTJxfL5f6eDu7oxoVW3Yyb",
  "key31": "Er62RhhGMgBserr1uHh1PPEni3ej5iYbaUcK9SdiZrJYFVykrpYRE5FpxYx7rpT1NnkHWqimykJHEn4hhRPzGtT",
  "key32": "Am9gVTyQZxsPmJ5AnqdTgGMGDBFwLG4iBNeFMEeDGo5ZuwhPoAHvB2sVgpM3Aoeon1WFwDARimKTF5LQDTzx3Dp"
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
