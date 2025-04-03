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
    "3T3VR7r4NMNMsupda6HCqHFpBTCsSwe5Cabcby8EekY7qg2xLTn3QN8AC5kMHiZMSyTiz8uhGtY4mMwvL3z4qjEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TrKQtdQWP22TPvDkkhMhqpgSoEZuivxJT8v7KUZTrVkVyWjC6tdh2zeYLQ6KE7ZtvKjshnENtHAreh8MK1eQrJB",
  "key1": "61MP297gBJVq7zkSKMNvD8xUG6Rg7mbWryxWfmi25hFoYkZdLTguGgcuHKR79Z9XWbmzZ5WEvugLNtHtabaTb7gF",
  "key2": "5qC92wQMJjZ7AjmrE5t2R93ap3GVgGtK8q15ZwhzXkAcGyZGuS2B8XBGdz2NrWC4mactp6oBfYtbKzVUycLmKEoV",
  "key3": "5p6UQFAi47abWeTYCGoNp28NTCoa599anasqJvYSAS5xGfjkPVrS6nMXXm5jUdemFCFjXvy2e5L2U12JxypiaZcT",
  "key4": "27A1Ct6Bzvsd8JFX87CBDYRfCvmXLXaDi2RBBPM1sHPkRCMhaQcu6Pd3Pk2WJEfQccVDm8Q8n4NZfchdxRu65eDx",
  "key5": "4Ct6QZ1TNbM7j8QdxV7WLfdwGa4X1tmvmbyPaMB1BQs44Jr4yXQxTQiKtKkuHoytCKQ5gauE1cHfLYbGCZyzPxFe",
  "key6": "5no4LAmSv9yzDBt8GApYB9niFetUpu58Rv2CaGhzACHrp6WSh99MpTFxVKFQwoRo2UqY3ZJ3DizSnFLYScqsf7u5",
  "key7": "3ay9asjEgnfKegtidS1uxRyrUYJ3WjdbMRRiySV8c1Myv12MNH8xBCYdADXBPYPBVyFCP8hT3eS2HB8RKWKGXQbq",
  "key8": "2XPzrbKvqX5EFiHGcdYAqWo676SwxdUW7WDePiQJjsiT4hChT49XfeE5yzuxXTwazyqfG4HKsmWsYeg6gAMDL1Ck",
  "key9": "3R3McYyCYjpKUzdSjFVXhm5Wv1WByRDNsN2FxB8DmHEpsMjbLrQkc6MqtcrwApYS5fBd5QYNDb43zma7LBAUvYwC",
  "key10": "3JeFQnsW8MeYjcj4kU99LKs1v1PiGwgx3AVWykXR9sPTpM5zmHn6WGGh5nh1ZVriopeYZFwtaEYrT75M2ZpQRjHg",
  "key11": "pVcHyW8bZYeEVNz1GQfjuo9vcqz4ELz2QoAwzCHWFKR43vBLm165osvTU1yoAPNqgvV3hmM8CH8ZdEB3FjW6dXe",
  "key12": "z9Mv9apM14TTtR1NBAQC6a2uCsZayzQrqsZWUqUQME7n9cUrJCAP6m117va7MmmyyAa3pJpmfxfyJk3s5NKq1A4",
  "key13": "5UAHjRhAk5ufefR5cM84DCbh8fLb2J5e7jptqHEprM1E3FRvTqA1ZdPrLNP2d6V7FwYd2DHohK7e9BavtJBz7A9j",
  "key14": "4TBhopjAzjVFikvUHqhfnyTTZnQruAgyzwL67HjYA7Vt23AtUKM4J1gtK86SVq74sBdVFaGv8xiZsbEKewfp1jVZ",
  "key15": "3SHYPWJhiidkpxKhEPLCtKuXQh1KgLw5baMkfeRKEd1a6iykk71xXQg6K4bbQ4YwjBoh8Cbz9tqQenkoYhiczRr",
  "key16": "sAgLZHKAs9cVGne7p1sqFThcTaRFdvc2Q9paRuVHpXnZB6fnZ7aA3kaQTJx25f2HKuNTL1GxhStv9JWStkmoWCL",
  "key17": "422Cp8CmKvwVBGP56YBAQPhWEN8ujQsYvaMWLWmAMYszcetEXNwGSKJhLc8jnXh72vbkBeNwHVVeZY2EXJuHQMSJ",
  "key18": "Q4MmTHchZrhkWXqLR3NEPb8e3TQWLxzTYxwzD8u3JjF8u2CmckwYoMgnn4bdNi6Ze6VCYsJaP85YwV9U1LrTGfF",
  "key19": "13TAccdcnU7mC6W1N9hQaSgobw7RokVja8NuQwtuxgkvin6BjcKnkTh4zZHKrUUF9wLugvjXCasMhopNR1rawRn",
  "key20": "47umZDGsuWbCgsSgecYiCB9t8w9ygZjNEaHoyDV7LjapyJPuHtBhpfULJ7hA6dazFaehkCNr5DmjmYq4Ffjcbbjo",
  "key21": "2zEq8RzMef1JfRPLaeKpudSQfgemPsYGSuDL75Rvt5tio4fgT5D9Lmyy293vmuohaUdg1JNmixiKFBY4Ca42L5M1",
  "key22": "Y4RM6dTs7F2Fti1N31ibfTdmfiYQcMMwWaeinkfvVZoohsDHvxPBKGuaCvMMJQ2AdaU4WmiN42mUqbhdZEuair1",
  "key23": "4JLKY9ddrrSXs26JyUWss9T9u4X3KLtKTSRz9NM5RHBv4sb2fkLAAAiLLG9ND7mn5FK58mCKbByuBVM9tMQTu5dd",
  "key24": "39qmW25quVRsNwbtkgGShRtSrwP4WuUeW4WMdSUeyMAxQn7hPC7P7vYQueSPiQxEzPFMkXCaPFYmteAGk5FEyLJ4",
  "key25": "5qACkqpRd96hJbhb6ffxrPZ2LN7fKQdTBUjA6j5U6pCU7AT6cDrVkAAAXEiyGE3p39wb4RzhXAZUTEV6tZeYPiXu",
  "key26": "52P1axbs1gikGpyCJ28WsfSJJmVeruVGMxAbFuAiYYXVcBmLK5npf7FNJxzhc65SLWDaQd3CMbwH4x2UzXPEGtdV",
  "key27": "5YoZZBaA5APUSi3UufNwMaBQV3GyYsCGEFkSXBRYe5NoirWCXSdUqmDoaNxidJPHgm7gz9BwDF4HMHQSRctb9n7g",
  "key28": "pkFhF7HF2df74ov3SVkrVmxVQE94aBZ6mWxJpZ9vabcjgEt1hyQEQFmtdnHQzb8Xo2pGJkDcqqNdvjRLESUYX5p",
  "key29": "4vBpH44ZrMJPNnmN3fYAR57HMH9RVysXpB3RjCXgWAnS9L21PSMqV4JYnojvy3i3L5h1nUZbm9vgDR3HXQQv2imN",
  "key30": "3GdBhRNaLSVYFtVCU7c6adF1BTwfEFEpSQukr6XAynFiuNCpNgK8ppPnukjs68kyiuUDip1mc8sVnxBxF8xnJTFo",
  "key31": "3KxdY5LL7SQqYVFSXZ2mvjd2K64RVTWepZwUGtEVEGKEihBWbchmf66Xte7QX59gRKQu8z1CNyEA6dycBv5s5h1U",
  "key32": "5oVwyaN7jxnxuoSFBHh3BJsixFCaXckGbFxmqo1a1dGXGEqdQSBUnkZTA5SUJxrjXgeMHzvPsxMsfRNkumLgcqvc",
  "key33": "4iAuifTeZ5C7LawryCz86Cfyzk695P83Vrs7cAZ7fsyJf6L7hriZhrCWbgGAsigNWfHknxuDVyyFe74e1xe5YKPQ",
  "key34": "3knzETVDGcJX6L2MMmEb5ZXcAaJicDbExC3SW7UjcHyYp71WRxkv7yZWybP5tz7hh7YrYJ2NzqeTb7NHgUnoawHY",
  "key35": "iZ8D4ffHpLoVfhYaAoGmE2QBPDX9rgs3hACBt61zgDQuENvK1zPZ6ZS5763cQmA1KyQgLoznoySzuqe4ZzASFd4",
  "key36": "3w6rsCWN4zjWwb4YV9rymuSpoUuDsL6PXaXE7f8LDzS4aDCp8TVMT8MXMWQrqDuWzpTumCAm244WytyHtVYMMBfZ",
  "key37": "2eCo1zpmoXouExENXE7h3DuArx75qApCAY4iUwms9NFaU8wawzVZS6g6Q6D86EfJ52LmTMjyAUke6c94uo4Pjzw8",
  "key38": "3Ag3uWyh8L3ByCfSoiuuk4tNHedVbiYAsxGkkdcGq3eL9SvWKvGiU8Suqdd21uTsH7zfkbbMaKsPrEauQgt1iNxS",
  "key39": "2ahPHTQHb1DUS6H9JxEXmQQDXKn7ERjCnvKBXb378kqpsjH4kgMNoAeyiTHtBMHEucfAtEFUyh2ooEB8WWLa8E7K",
  "key40": "3izTh3hNsRVM6eptzEpKwKTQJCS4riPgJEoBHRd1CWNeTYQLS9h3UJsn9snArnv32AkxZLFhCicXrcVDAuQ7Frz3",
  "key41": "5bJcbfxueEBWyWooWouBbyonbzZ8agQvFoR2JRUcyBGzB318cjmR87VXk3K9n2VqBZyisrU5puvg7fDmQBDKL2yQ",
  "key42": "CfKuTqv9PTP2FpwUzLqfrgmm83Zs3MzYgHjW75eYwRtShhb81vEuw5jBWAPmabREdPvcgRdrDH2hERTp1AU1g7S"
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
