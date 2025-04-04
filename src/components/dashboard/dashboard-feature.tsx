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
    "5RwAP9RirauUmaC3JM5HpAyfLFkf1d1NbQ8sHWBzQMBLAqQTeN4C2m9wrbuAAN9M918CyzHn82mEM48VUFe1WBAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2igBudeUmyXAP5MpRVFmZSXyYWeSecQYCxsRzVHaHxa2EE3S1HTUrowbBsHQJLtvJaegWqcuyvd1Ze8qeJqAwMYM",
  "key1": "21ZfQPmWbvmKMRFioTtAsx4XNxEhwkYKok9XkfE8eRutnd2E8iG3yCtFgxXu4A3RZ6Dh77qdqke3VafiSxJD5SYU",
  "key2": "4NHBLnSoZcY1QNL4C4PwX9y8ZrRvs5zPoCubhP8WaBq2sFdvoLQkBdUsfzEHDYoyAJvNSnMhfiBUZi8mYQFemLTk",
  "key3": "VdUrQPYWEiWsGp94PExiGam9RMckYdc6gBqivJUcCWgwrQ6pWQ6MMDqv3CrMpFmf7MCPffii3zeGzJXu78mtenG",
  "key4": "DfTL9zjnECBrHKr9GqpyCwnHm8D8pZ5Kfrt5VWsgjGhDf9XCpaLfFizZZFft2kdBtrL6TP7voPuaBEYWUddLJp5",
  "key5": "1fwMSTj6Sq6EreHcmvjqYrzagzsgbwwu4ZZh9GnTE8AQTm56S5LFYb1PxxyyqTbf5srVTZDZp7JZa4BfEsvaHrN",
  "key6": "26VCZT6euw8F4okzwmurdyB4LSnEhJANribWbD6GPCvKqcoGxQ3WA884gUa8qX68nUPhxu9ToPXjP9pNnEDys79r",
  "key7": "2Zn3s3tWAmNZv7sacsJpevC643SZc4PZ6My8gynfiuJCehwVv5DwgAtR7Y2KQtD5PDqvtQpZRKQcEpKJ5UjZnMBG",
  "key8": "27ivXZDz8PrC6JroqR9GZ8b4XPWSd6HPH88oi4FeMzYWD3YtMJyEpZc5zWENWm2xZ7wv7dfRscpfPrGjpcAYRWeV",
  "key9": "3EXLJPgJrmg45o8cPZqJsaj6b8vaxKxZviLXGM6px7sy1bkHqDNbM9cTYXA3stdvriQ3bmPcnkZay6mMM64kmkg3",
  "key10": "CcRLN7wZvwp8v8txF4oDijxYwBpKACasztU8Yp5JwqBqg7Qkdiqj47Uzvx2pZdNe95Mw1s6eGuv6AFfSwn3VVDe",
  "key11": "3rySz9ooMUihgyU8qxbdhyffr7GvtYUsd72cjTxmycLABnzaWEXC1hhwGxvD96kKxqnc18GYvwGgXPVWd6QfwCTv",
  "key12": "4r8ExjRBxPNMbkVQmDmiaUspRyr6YWJVF4umRjueiQLnoZHaReRdBYqgKM13Wz9PBvBy7DnQA5bTgKsbSw9iyC9v",
  "key13": "jnFdcxW1tvzgfY9hfkbZejbsE16hfABTmXfD5C8jxf6yVwiCqJQKqTbbPEcgJ2GJQrPdbVbzshCxrgHFdYaszAw",
  "key14": "33FDDd3t3Nkb7pyhArQShji7oYnFFE7mtUWqKikWmMATUWgfd8anasV2cv7a84o81uot1MEU1JXGmCEb2Az6iRPq",
  "key15": "5QhnqXZsszRdYrJZk9peRaHcbDKabxfJkNLZqSJ522ZBR4882UwmouWPvkXNScjNKBHaDdUDEHnoHrjj36RYkzGX",
  "key16": "9tSRe9SAjWSMknaYYDMMwoKAEbuRw7uCjZuHryoec2Kpdpywc37GL7mVHnGmmPvrEWu3xuCYX7qX3bJNmM59Ccp",
  "key17": "4w3ADKMxsBgthUgJmy8kzMrXQKcFFBzZAETJN3b9UjwQaHjVMqjSJgwhcYmP6jVhtvqte8G74QLMxRMsj8SHT77a",
  "key18": "249Vf3Hrf9JHPJeBEqZfvFpee9qwG2fBXFZmVpdAi81LfcPBPUV3WW95kQDem8dXW9VJ6oB3cY1JXuNEJzaRrwhY",
  "key19": "jjs7ThWHwTRz5Tn5PSECVSjhA6N4mm6c7tmRqxRgVHUy1tZs8b9uN7AfjDWCQraX7yguGfMSA9HAvC21Jqozah8",
  "key20": "ysrBuFbQRXFfJvXRNtE3jKMuCA1P4bsQwcwfUVaYKoQ7uxd5Q4SrPxe12C3Ft78kTzCPvh5FfBFWW9DPoguYPZo",
  "key21": "5vHe43PjeXh2SKYDAi6ETfdeD325Z8AbTbprbFsDio9hBMRxdvYPqakmdfe7qTq99jmFHqrBytNz5rLtGPtoqwoB",
  "key22": "35wpZykD185hcqo5CGAKnb2jjEL4GTNWSJgh8PAT6uH8m7Uq1HkMBLtEVmuUyMZaWy33uye1iSksFVsBeDAw3bAA",
  "key23": "2cMfrLX5XX37y7rMDpMuHu6ZxRBEWDpDg3wv14r8TB2sqaBuBbEMbXv7joGTcnkGd5MxChhjCLKvbMmjUZuHnydt",
  "key24": "47H4AffJpxU7WceNaru2GHk1fPXar1t6aZ1YAC2exLxfKE796qmDuMgXSSjE6cCruFY3MBFsVU7qJ1kuEw5AL1dU",
  "key25": "65SsYoK32mrbqcZymoLmLc8JW8A3TJv6kaTqRzZgHU6j1p9fhyjA9at5DfBXQhJCqTYHZnUgsR5p3JhkbTnshEKU",
  "key26": "3MZva5n61tihAAs3jhkiey58xZVi6WwaEQ1UoQtU2SKuRCru79ZZinszYX9972iXFH8ojXQ66dTaxbrVy2rSzC1E",
  "key27": "2iwnrFMtJEsWpdzUqpWGwH4ZvwCZJpWfyoevfFJyCXsyAuXcPfa8iCW4yjBXkKCndtNizBP3Cqwiu8HpV793k3S9",
  "key28": "5V9yyYyqHpAeoazu9cbECR2E3EM4yGJfuPdpQcK7LoUGY2aZGj34wWUAcgkWkDbPJJBvHUGYzWWqL9ZPjvnXfBWg",
  "key29": "5JDPDGzRScExSGS7kYJqiaEC98qMZ3tcv55FeBhgCVuVfscwTZau1UbeD8MB6eL95ZHbKFn2yuCoi6N6SK19VMvY",
  "key30": "3SfPjRBRZ8vm8M5zE5j6a9pKjZEbukPDweysAPJnLzJera2xAGEGB94Yhwj53BeAkBPQwFScwpPsuWRW1MahCRuq",
  "key31": "cvYmzcTvgCofCsWA7EKeUc2icU3Ap4Z3tDm4kzzHBdMpGTGjZf9BUzcdiVkHi8waCBnbXAcH4RCSTMebMK7Zn9e"
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
