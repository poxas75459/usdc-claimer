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
    "5CJbiQP7mUsE7QtTmv2z9u2okh5e8HyqFcPxhajvEKP6VAZtVaUuukM6wRhZXztzNn31RnNHDWeHrVHZFvuXinyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qJ6XiRmFgCPctFM1fRX5nvczP7D2jfFkdpQc1qkGR8JHo5JMNc9ZADSb6BmX6L7VFYd7t1MivonWKeo1fFTcihP",
  "key1": "4jGrn8LAzUXZrhQkd3VfczbCSDpgdByQviVjrkocGYv1dzBfqAf22qkPp8MBtJxoNWVMjafeKSesCWKbB6bpZT1e",
  "key2": "2CGyAyx7MyJysMwn5wPcRvHvs7DiGR3bZukjAwrnii6qqKekFYDokW1u7stK36YfWcGJCr23KgN9jDZCrZBPCqey",
  "key3": "3BU1KJgqW4H4vYufoXnYcaaBHVUAhNiYbxtgjTSfTCdwrPnz6ddKCKSjey4P14EipYxoTWmKnKVBphcdHWYtHtGG",
  "key4": "3L3M6hNFK672K8a4iefSvzgiMe5N2NFaQCCNd6CNHkF4unXaWpYuo6f2XqqDd1kxrHwAfCh5jvXZ7HrxBq7VoJqq",
  "key5": "2bJ28ncGE4dj8bbP5PRkxUC89vXk32JvPDCvY8EApznM33iKe5fVTosyaucC25NkmYMQKCvYfDTo7P7i5QXu3RUS",
  "key6": "3rRnwPWaG2dFshoCTrqWgUEJvisA5xjdUWysmRVdqVVyP1icSvzWuK261gWYdD9dLQUPa1LoWUfiCudFSneJYduj",
  "key7": "5mFZdmSpmjWSPu2AweseBysnMnc6t5nn2r4XgU123DCfL337PhEqTd9RyuQNPn5d6U3MsDoF5Z3u9CHMRyw814is",
  "key8": "31BCCoUncXfC7ptC3PmhfytCTWdZDQu5JYkLsL8ULBajCnbW3UQTW28Dtm92KiPbE2okwaQv3RSKJNee9VZxRUfe",
  "key9": "3sbq6oCYzZfbH5picPzjUX3m3CPUSKddMmth2shQBTwkfVwN5Dke9KW8oBYTyUiAA5cBVh4WAGye2XJKHkDczDD",
  "key10": "3CxwnFcECjsCnGrf6k27GzUu5GRA2TgtDutLCtBVVqrS3NNfimYVnHSNZutTgCCgtUmSzt6vHrBGzvsPeQWSm62k",
  "key11": "4qq8PQMB42vvs3Z55szRro5cFcnCdJ41ovR6UFneRotRrwmBqLWrnbG9bPPZd9JGGoHRRpuiPiUS7FNvhDJQ1pp5",
  "key12": "2jm3p7T1xx4wtLzwtWzbRZPWy5qzEWNSQVQJQE5WNP86Jr6wx3PRYQQsLGHPr8EFRprmj32effxkCquuZb71fbw2",
  "key13": "29GM1VCCNx75GDF6hYayNnbs4LPX6eq4QvYACT3y7Ko6uaBeMAkcFmSxRWQT2ZKcf4QnF6PgAdokaNENjuuErRGX",
  "key14": "3EwTZ7e4C4XSiQ1F3ZkYdVd2UKMWmNddqmn97ymen7abRPjhT6ZTLeBb5rzEnt9jKMsFBd3b2pGCcf1vMkCXtDUo",
  "key15": "22FJBwZsFxTN7MQrvZyhKuuyxwHMQi6PB9mMmiqmdaVd9UYQXyWfAH8yp8J2YpDrSQGEedKHuoqYLQnvfmg11MsE",
  "key16": "5barqGhSCZkGNnoPJGsvnbK15KcFctBei8qLWTGboYrPU4JMHbEqPn1G7jH3zUoMC1Xmo9w3ooQtzifjxj6rKNXx",
  "key17": "37nRcDN19phvWHyt2aKXzccwgTwNK8EC2kcXMpGPo962JsAg4RG8HHJVC4DEpNQdpnAqnik2x7N1398EWW1X7Roy",
  "key18": "5p1kYmDZCrrZcGBm8tRVariZj3J9XX76fzpKEsazBQTiZ1y1ssw1gVmhs6u9CmX2kgcuHdRFfSRFH1uqkXA9txLf",
  "key19": "51M34N8Q8v5W8aJk37Ko5F4Q715VgbGg7LpLq9NbcmJRQA5zLMwcAAoJy95fDqHYDGjxdAsu4joNmJJRS1H5tcdZ",
  "key20": "hmQ27S3gH2B2mr7tRFup5roiTb76YJTKe5xEFRoKpkciMWMLDAwikTCEyiKVkSDbLdFaAWL5XkdGNW8JMfncbVk",
  "key21": "5X32Ump3S9VdddMSNjh2Kan5Xo7m5RDsrReX9RPE5F9hX95K6wTixKCTjCHLBsaCNxUUw4F8iD9YoVbSXjKwBEaP",
  "key22": "4NzQrY8EWQUpivS2bivxEbD6dBeMSbwUTS9V7TfFpDqYPNGnrRCJZ3fK6NWMFsrnDBi8bUSx4iE7NdjP6N9pNZcx",
  "key23": "3Aaj1FybkrgaSsG9tqFiB9i6Bez5GYupCqmWCpaGv2t9ZhCKgJs9MhDNWCsNopG8vQJbqFc2X5TRadY6whatvnzZ",
  "key24": "2kAKgsvhXSX7j6gRjoizKFnk7ZA4oyrXWbtM1LmBiqQNBx1arpJXnc3dPNP8gUSDv6TXrDhxQXwjHqdkK99CFuER",
  "key25": "5djvP2k3jG3YSZK7sJNNbyDwQ7DMBgAYgmtiRa8MNxPXYf8dQkZsW4xXe4B4A8ioFmRacrnaKce3EvEyq4Mq9RBv",
  "key26": "53epLZ3TdpgGJgpxBxvzn5PuSXy8925RhoDYqNnvoPaqVh2ZVRxKDborwXJSx437zvd1GQX9xJeX44meWLFrXuTR",
  "key27": "qAEotJigCP7fFywFmZStuJpVdjxfbpCDZzXoJzMV5y8QECrKEA3wBEVyxN1kGC1x68QCdGDuq6JUkxneK1YCyq8",
  "key28": "4pKSXxUZUiG9qGBXMLkEaHgtKAwJfRamY1xarZeMTnA3EeftwmrBFhEkQdaB3BLDMtB3nWHHha7RDn8zVWY3cXse",
  "key29": "5jBD32pZuF4CnuXfyr9NdMq1tHuhqbZaowZPYgoVMFUqk34LRBpC9tp2YdBmLkGhm2phoa38manqx7iTRcBJbAw9",
  "key30": "3q8vp3wMHo8Yk7KLoEG42jFknh7AHdYerqp3JSWSnqnfF5PD6v1iHkXunqzcucofmk2oJddBViJ9C2gg4nXkiMDd",
  "key31": "59tFhv5z92LQxjmJoPGLFdhvipbXjNNd2hbqd5ivskM1LPDmkvP5kc32VM5xxt21oXPinaAwCek7FBDLQmPGpSgW",
  "key32": "4PB38Ag1Ct8DCD4rSJQEnFUAgMm42fSaMAux8RkVko6F1TBTCMnXXCsondqb2VBXoJ8V9n4upYaasqJUDuZcZBqV",
  "key33": "5mAFdgJiK8mSqnNnvEvohGoTQwTCTJ2riLQXt5wHzbiiousLJzE22snqNSBfjt3KuzetUXSFrJxj3ykQ6u4kw7w9",
  "key34": "2FQpDAfssgVPTMidXeSM2XGsRBEQzHHK7Z45KiWAnYNbwLytnLkhFEzv2F36Yv6GJuU3aJ8sWibzbARktJBvVLt8",
  "key35": "5p4iGEUXzQG6YL6ADVfRUySsDxShMaVcSxLh9jsvQVJQyNfZeZui1Jzy2GGyLGL3JWwpiirXNu1qPW8YRhVDAjep",
  "key36": "ecim79juua5dDU46kGBU4nEtPTFm5P5mVQmXk7B2afZtUqhJDhWR5TwdUBRCKHCjZPwpvHaJ3AtZpo3nxB3JQad",
  "key37": "66S2nMtESqh4syE4wxQryMPrXgN7yVC7no9xFekX7rRtVELVyXEWMaZhbHL8re7JjKxN8kuWNage2TjCJ4yxRKFR",
  "key38": "4LkDn7eBE9GAcsTzVvfvA4EANSrBLyiyL8DB9ECnK9dQZpcU4YztU1zNBbsfV8Ttwyhf8Y6Mb9Gjfc92ivWDkrKJ",
  "key39": "R2d5q492AaWz4X2SVC9MqZS3CrVeMqrEXtSCqJKNadgtySgXeV7BRVvmi4XQiSksvjLPgrwrJQWT7ciM41kjUcR",
  "key40": "2Skb98t9xB6J8VUr23sGausUB6GPzJJr8GCB41tmAprKiUiM5aJSER3vv8qEKJRTNTwN6GHiyzWk6CBuFdDCyqDm",
  "key41": "2KfyR8Xmm85xxuvp5G7bH8owNMM78sTCT7mwDGgawmPZf6sbBzgSxS6hHDWwQvyiHDxZSYkPppwMrozGNhSjzq5g",
  "key42": "31tC5SZxVJcbeQVnjBewSeVTzwmX1jUZyz73zNXo88uXJxpSHZ8HuPeYc5f7aJHxtWWEHKXjKLmXUPhVYsi96fS3",
  "key43": "2BEpq7MupKLd8AFkPGndSghrKkhFutcdAu4r2VgNAgo4jTnRY8Z2mG4LTeJDTxKN3H6Myh6pFwsLAdTe1qC95keF"
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
