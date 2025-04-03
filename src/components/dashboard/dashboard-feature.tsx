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
    "3gLBjwccJ41bjXVgPLzXZ8Sxg7Hw6gkKVuffZZy22knG5twv4jPnywKneQJiDXy3PGfbwrvDtHEotcesEGmzhpQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zj7jvFTzbqBi579tGxHiPrDSwZHgFB1currqhLu9hvnVkbqSCAJezMioctGV94gXjkpdAfn3KxVgMdEu2s6dRZy",
  "key1": "GUDA8wXfcoFwRVzgNs9nckCDE3ziFRfQjm9aqBfhofRcEck6aCqW1Tx2h54bhGzn3JtLBEyJk7p5yPT9GCyRXEN",
  "key2": "4ozFsWoD9NhZG2ztk8e5s1CuqC7ngAFD4FVbwnLYWn4w8iYcBoZL3T5twybEaAUG8ktZRLxBmX115em1ACvSB5PH",
  "key3": "aGkyipnwv8bHV8YBucLtQkcv6nE2gnn4iAbp1rHVun9mByP5ihFExKX5dKDvGfb1L6RaGEWELsmcTCDNcryjaRY",
  "key4": "4jneZk2pW6tmWfn1FE9uHzh76gpzM7RrfynaP2MYKzpmCQyffjVHXZg6g6YAs8cHRqj5y4Ls9HaQJjsRfsRc6ASr",
  "key5": "3QCHUtNkKib2ReLjiPnjapkEreyG9pbwZ2fBVUt38qLV67T9kdFc8BZXWAyhAoRRuqqNKFnvq97rYkSYGGAaFitK",
  "key6": "4RymftermbK6dDAkYXoeqqevqYyMtQrwg8J9JZsL9MfuLTgPqobuPPvSSUMYUhh9bFLhNtpJzTtFa3mFxJhoQUDj",
  "key7": "4jYp8JZ8uMQX2jVqyrUN72mkww2VSo4sAsHRwAoUq2FqXYpgUsffQiqbGoPc5heosyP4tVU3AHLCHmoURBfRDs1s",
  "key8": "3CgSpWP3VmxuZVmApG5aCCQ5o5tL1qyUK9CMR98euWjoNzrM62Pnfny2hJgcshHzCw3ofyGHxrntLshWQucGFt8K",
  "key9": "5ZzPzmdbBPFbXCnBfCykbzjzUioJgM2BXSn45h2RdMkHHC5vVurSfCfLdK1p7KBZoQ4uB9vG87ow8N2wKNbrKbkQ",
  "key10": "33bvgpMVV2GhMnZ2PM34QFRKopxYnKsMCZprrjsZnaegTs74EtbDuQZ1Rys27vdEHuhBggYrD8CntBzVgUrGjF2M",
  "key11": "2gcUhLvwpteX8r1BHCipqdgAYBZZCGfMKJiLenW5RQZJdLP8aS3BHsoZDcf2c4znH3CJXRXcBcuUGR1N5d9oy1T1",
  "key12": "58ABQPjivQMnDsTx1sA8Qh2o2FarRfyM5ayB5aSifXren7oVmeEC52MaQ4KZKdVtv2Dk8LYBMe58a99N8zgLxB3Q",
  "key13": "2V9FqNcERthGvjwUhw2BiihdtBFM7fatsYdiPxuTYUP1yFoFebNXma7jJgMr7bKdQDHZoMwxzGFmHQwy2kYFMXHu",
  "key14": "5LSgF5Vdequ5CB4Y3uGpvDaHMTbLE11BiiKLMbYzxLHhm7zKQJbg3Q6b8sfUmbpLpxKBmka4ngXQ59oTy2pzqLob",
  "key15": "5htT2UH2xA1LvcccizoiXfVFwMbqV4RjhB6ZvNoFVYiAfrTQm6NUrpymPdJ5Tm74h9dZaHfGUS4NkDnd1ieFWzwz",
  "key16": "dhfZAtN4eac7B34XUCsQMzTau2vXYhKnaTZz6hwMJz6gqQfG3Atc5QPrw9KU8oRzbgMqfw7YPgjhBDB2QBdEkfY",
  "key17": "42ids6e2sdsvcys9iVupSy7wvL5ypw34sCbgJfJmrVnybcWaydYQ1m2ofEnjeFmSDkoo69RTZSFtHFL6iWXY1JUV",
  "key18": "3YMBz7UT9TBEUBdrhtgXPYvyXuTiFau2LwM3LgEg2qGC9DVHXuT8QhzZpofmtTJALMUAj7GHF4t9FAPSw5EfBMFk",
  "key19": "5AVjJfQ95k9ZTcoxyJTPkaf9btCesNJYCjyuWWGD9xDyME7BXp8JQDcWZRk9VxFCFZXqdUg2jT7eEQCxULu6A4F8",
  "key20": "4teFP8Z7ucupuvE3NMJrjTJrN3H7m2Njzid7ppSLfoGJBpjA2RNULBqeRgCL1m1hydx8g5BLQZrWHFbhShKE5TTZ",
  "key21": "3use7tCTrFZjLKxPgvokdgs3G2m7fZHZ3hTor2FaRap66gTzdXzzmaRnq3E9ctvTJS3Z9GkXNkbZ6mDqWGyNwpp2",
  "key22": "5S1b479o8mtmGPTaBLYuJSuUivHg1pwYf7TLqsnKq5G3852ZuzDwFiCYztdv3V7af4VcqE4JJZieMper11s45GQ",
  "key23": "3VNYHbrGDSxGpSEcu8sPt1xNWs3aqBxXLPuEHAekkQTRmj6qoxMFe6KMer4ArcuRAMSZrsq5kVfCkS8C5VsEsYLS",
  "key24": "2gpau3iKdvPBEMWLjJ2jWxi8Khpo63FzCNgTGoUQ1mTk7T1FacexgqUpwqw62yraSRpmjXQX4WkMUaVY1FEMEkB9",
  "key25": "NBZZxhrEGfXXoDnR9sqzBqFPQLuXhmQJeWkNZ8bPc2q3e23GiaujgRy2XQBaz9jf3cs2NymVgf9rw3cLdLLRYLd",
  "key26": "4a5g7Ffgmp3AqrotUSHtpYF7fwmiuktQQUgpZHkPsyheCC7SMNxj4sTvxqai6uAjVnJq31qvk986AJEgP7yk47M9",
  "key27": "3XpvqBHEHsYfHGnNQ4MqVzgjsDsPxg2YJdv1K2CWUTHDSbFmC5c16ifYa6jQasZSkbGVmCfK7kBViLcap4GbgoCU",
  "key28": "3fjfeXvy4rNLhYsDAQTDXhHWkAczoC4wTwwpTqyb2N7A6Rgs4WksFU4ZfJp1aGWRKct7qQUDfZNW32XGR3JZdAR6",
  "key29": "4LMnhXSa7trhMBqFP1HdG11NCMLESTgcDyxkV69R18rcQpw4qCRrbPq2EGdFzUwKZFAL3j6EPHav8GFv5dkT4SCK",
  "key30": "53CDB8hoWKT5J1sfikgq1eYurguCaNErxB4yUZTheL4bXxiu9W8P5WnFm8QqJk76v69eKyJCmtn4cTN9qyEkfwJY",
  "key31": "4g78hBKCUp56E96uJz2vd2jeozxi8YaocnhJPpcD42A2Rr1DP3NqadMPnbZtQty7Bcoh343GKWZyoA3S3KiSA221",
  "key32": "33hXwmvPsVk3VeLBQrPgmAvz4kBx6nVF8fxfdSR5tmKJ9e8Ftg5sddCE7e4RX9gtFJfRDkuHr9aRLypt68L2hKJe",
  "key33": "sAFjKf2AqrXf9jhAAmcRHTbxKVeRweeMAxDNggHwtrUrmNvuCqjhRjAASRqMaxD4Ab5nyEd5pJuHWspvQ3P8YAn",
  "key34": "4WqGYYN1yppEsuRENXzJESwNeX5TNrEpK5BvefJMqJLVGhzqX3t5uD1dapihoZhpKkhbMLUuZeuZm5dGXSFG5yPp",
  "key35": "2CRTe6HvkG9q8vrnA9ih4RTLZxiYMfue2ABNvXGiPZ4EjWEXsUEeXQLdxumvCgje3hHchiQSscosnMkUNbeiQQ5g",
  "key36": "3zx7wQ4TUyqLgcVpFapjnh5Fyt2PtF8HgHmwqtfJq8RXF5XKLLBY1sXdmk2rwBfzuoVm2jNDvj3mATEeqf2fxm2X",
  "key37": "3r3BJEA2jhkEhSbtSsYV2NMiiRr3RQyt2FpANk3ebDD3XRAjo4YF4EVXrNuMj646kyEfprSoi1EfJ91jrC9727ay",
  "key38": "46SSmvgRtFY9rDobGjaCWubBYXQWwWZqLT5fe9XDvky6ka9Jn4KJuXhjFug8Z4pMb1Q3W98odeZsJ6KcaASfmWYp",
  "key39": "4dPh3kyVrrnNa9TbTGLSF3RjkT32JCHzf2owweEP6atRXi9Rg9ttCL48dSaepSvHfrJcCE6f1WmzEk1UvWtGhQCk",
  "key40": "KyeVfkdDSxeX2K3sA7v9LeqsN8thSamVRiawEUkTEWdfVm8yfSpGcKJtvnFdWrX8GbRSPnSvAaExt4H8FehtM4E",
  "key41": "4J8GAAk1U1ktiiT9fgcWCRadTZ4E3qMpUmQ7zHMyxie3QYi8ipjsLoSKaF6iQmjg85LRkyBfQbfpJmmjnpbdza2V",
  "key42": "5hzEXSTDaWKRCH2Bjf5qgMiepMN54NPrmDaGANtBGmUPcRQKJfN4Tmofe71Zw7W1tktqWTaXwFpes22pkmjM3XMr",
  "key43": "2e624hxE98FMBkVzv9VmrC9dN9489RBK2aQHM6XGGgcLfSQvKcAtb4TJmqPy64uP63oihAC8tU9HRxssHtY9aFbB",
  "key44": "62XcgLFoBMYurPoNXP7tzUbcX68RBb87rSfxnGFk6m8TaeBTFnGnMoa7tkkRj52BL8xWkBxPcbHvXtvLP6TTWpaP",
  "key45": "3pCvM5R8mfvy68qtiawrcc94qgmVwLihRe4ALpsLvULMYrnbmiYYUdLfyduLFRiVez6Hgp4ZW2UFyYY3V9tGVDdS",
  "key46": "4QDtHpdp3ii5p46v2B9h28bpsnAAfp8R4Wc6EZRnnsJgGD83F2rAKHKyUBrrErFA17B5LEfdYeW3DbECoAW2gZc2",
  "key47": "4XecMSz757zprr4Vm7B93MN1SJqYT8ZcZi7g1QXoT7xnir1UQLnjKi1Z8vP4QSy49dcfib251eTycayLo4dHv4CU"
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
