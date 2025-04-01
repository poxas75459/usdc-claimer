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
    "DPRPAaRhXbDKKv49wiJFU3GqK4FrRQgZJB6zf2UPTFwccmr5ScwXksW9aYB9rbtyeWeRvVxiVvdJpSWBv6SdeqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L5EZg4Sbshf9jyavv5xDK2pyBqDoJtv3yo675BVuzALGPgHBvxivVUS1N7yMx2wUpjtJmSDhtPZFHD4Tbu4u3BK",
  "key1": "4nS1URryQenRGM1g88xsnw5rUCZL6Z82CK2E2Qq98R1mJoftBNBHJM53TRhHfVhmodniXGX3J1Qv4fJsqsc6CUjM",
  "key2": "5Z9Ptp2PhGEM1jXxcHtrEsUno1vGdMmGzUFpqHW98kYvn791et6DMV6xXMoo5SoLdwQxqPabd1krBAL9boCXch6X",
  "key3": "4YCg65gue5cKrZERevh5rdRSQWp8t9x1buxeihi1wYw3rHcZJ7bRvd3UvqCExS1KWvo5uCwndJ6nhyscjjB6py2G",
  "key4": "341C9q51sV1wJmFSNoyeN3pUZT6txrtaLBtpV7GHwiYjjbqFH5CySZjMeczEN2coKSo8Zypuy6SV1XRHaYrQwYZb",
  "key5": "66ETLYA5MZexD2B7My3aa93vsq61zXNJbc2o6uzCzViPUBB17u69onDJXaBdReJwJ4zndnWdEemKaogC5Vms2sts",
  "key6": "63v9ErP9jk5bFZ1coKtwiKAsjsBHbVkMuMm618Xf2qo29KYVpXEY973qPaeohaSDbeSo2jXt95jdjXMYaRsunmaS",
  "key7": "354Nvau6RJdmNiyuHBbncD2ToyXUtbRTDJ24caKsneEGTHQoA5jeg5mecQikN1LYy83gKpagUpQTo2STkYvFBSL1",
  "key8": "5c36cjZXtJrWmFyTqpj9qdUxMkp6pEvfTgZMVhyR2GdJkniV7qpXnUeqcQwaTER7qCDTwWcPtGXJxzsrsikz9S7y",
  "key9": "3tXnB5muTEaWRB11VMuAfJV2TJ5bsB4qkucFm3NKHbB8id7KfuYaMw8ddvu1MxsKGbynVBQbKxTMjSaimdrKk2HF",
  "key10": "472EqP1XyQzXvzCWRtPdicXFczzxjK1Bwzh2m7EbWpjfeySWjQcRaea3Vz3AUjTrK1JvLNsgVoTZPtyCq6sEfMeu",
  "key11": "4JuWMM8Y158txu167saC1ffFCmSWCcebqGD7aSKCZfBFALKxuKa21uXcJWif4Jehwm7VgBjZzcwAp9T37cid3JMv",
  "key12": "BVoW6dT6g3deRbGqKYDoGdzmZs6mm1rEEAXxMo1SMA68yoPq2QeiXH8F6eFkDFDhpLsziywLoDcwx9c5Jwngc21",
  "key13": "3aUCauHFF7tqMb3LUPz2j5FJMmNpF5vM51DcXNdbwCuyvg9c9us7z8jgkgp3U6LBffsxJpxksd2r6cn7TJVASzZy",
  "key14": "4vnhhEi89SsqpDdyffCMYWVHnzgbuF9NNCTqtgDE3xwnFqtyL8w872a6xd9XdKfPusmzmotYZfvac1v13xUJcpJi",
  "key15": "3raSZB7qznnNV7LiFoSGgTPGY2P6rbQSUUAZZzLEkzxBQC4pwRcc5NwEUL3fUDDRccrJZj2W6kkqsZRaUEujQTbk",
  "key16": "4v8TecRmZbVzk8Mh4aMXZvrWKLj4fUakGuU4eWPu2xxxCWbDPjzZiT3xPYykwJdgV7MdfuVskd3A9BqtZU7mFSGq",
  "key17": "YWtiRTSgRZJ6a9USGZke1ybkT25EhbtQkbPAHLX9zeo2jtpLL6sMANnDwgcmmcYwYP1UapVCNgQeZKiKkuVGEN6",
  "key18": "5AdYZ4LTeVXgu7isDN5UH8BAiUiNd69oZRfJAYa2tUo6Ki1dVWei6Vpi2BUQ3s6gyyAzQJSVfdvFJP1LnKithucR",
  "key19": "289mEPA2vyksTjjiD5RxspDqfJweLMUfTwBCZL4oR677VKanRW75Wuy8k6pWkSm1hxgTKMp7aH6DKKgjiWAf94Sn",
  "key20": "2sbdPXqnV78o4xtBhoe1fGFcCHeLsVRbAomiwAcT2v9Fd4mQdr8gXRZiLnYLXfjUDJicjDTVGnXiMe5u9diKc3yq",
  "key21": "2EyNZ1chiDafJhftEJYokSju8Xk3SkHH5xZdurn1cTjMG4b7ichNKZGsBMfvKhLu9YmS49s7JZGaU7TbAQyYqxqj",
  "key22": "5nVUZFv1exWTZ728qWwiWziRej2rNnV98cRruUgCZyPdLaZFsbZ5P3weVZdKCt1xfrpYGEZ6TqAnr9uDnKhGucVZ",
  "key23": "2fpvsvCMHXBMcxso7qgdNSbkzfS2Km3cCobkbsFU2XVV8a6wUpsTSmYGFZX1PueJF268vsfg4jQ4GpuD7JeWUavr",
  "key24": "4PCi12bNK5Q6dCkdjkZD8PVmeyBzRKbnh74VdjKQhTw5BAEEym9Zv8HrdU1Si3GLWoTeTeQuu1emECCHxpcqHUVm",
  "key25": "4jU7uyJdy4danLUpqmG7GuksaZssKJv72JpymDi4U89mBng8M4kpkXEGDMRxSpzP1opUJyyx3zbv8PvbQPGM6N9c",
  "key26": "3TKZHVPFHMssPnMYRmvM2aeNDjqD91ueQj4znB3zCCE2mAiHULghExzfJLfbGqwRhepzjDMg7ZnJ6kQ6a9wZY37V",
  "key27": "4og3VjqyPYjFgtp9icuQ8vk9xtcz1VFPbAKk4oKr3pLTDV1tqshAv94aefSmWwunrZRxYSAtLP4j4k5DLAzrvTuG",
  "key28": "49uRK4u254iNLPwzziyFv8v7vyGAYbL6DYw9zWsv9pJsDQD5mHrnLx4dJvkzFySxbHjBF8AQVQiWc9Ewj9ciUpPo",
  "key29": "47pC5Geaa3Vp1ErUqeP7koRfD6vTB7QWVBU2P9D4GU6jCsTNuma7cF6oCp59E8aGKr1J8Sun2sdFUruAYuRtXTd2",
  "key30": "4H2SY7mmcuxQKEn5kg4RkiHPdfMQoJ3nicYGvdcScCfFcA86aE2vE3eYPGJrriXyv3jtTP2LS64HDju27HWTxmY8",
  "key31": "4pYR6PLed7CQggBYksF9soNG1Hertxjv6pjdh69UeB7QkBX7tAGSB5JBnoEtBjTgBmepmV9j7ynYefCHbZgKkJ58",
  "key32": "5joCJ51Xcc6XgFSXCoXUyWVQKgG1cKcC7jRoYy5kr7eCjh7LJE9Efqhf3aw43xt59NfTQiv7hK2FwzwcWigK1j7a",
  "key33": "d7o3V1vTYERPFEXXs4Efuu1RZBQF8qpLVvybcqqFewYXVFGmLtQpNzJAgxDiTqFe2pwq22GhEwuptrdecELTra5",
  "key34": "4DibHxMV9CYH9gZ5u17MyhVx4fVJK82ki6k67vXxvHERBUg2AvE9TcQQ1Jbik21ZAJ1oWNZzxTitf4wh1fpsU7Jr",
  "key35": "4MVb92SvyazGkCsHGdcjrNTJBGuQwadXAmgs9KZsnddHbfoRwAwJuhXrv1nRPgsib2Kfym1BzuXo32GwJPPCztDJ",
  "key36": "3V3Kmeq5M5q6UAAJo9Awg4Jb4iVbs6sniZ5zAJ4F8eqng1YYpQUheXJ9CkiNgTmLN3BLBxkERymVcfcxNxAXzDDY",
  "key37": "2xDrDUvvDP42xMQQ1i28sxbUFV8RPs9X4tB7iFmx2k2xxqo7dStoSShtUfjxNcFhabUm19qVMcymktdZVmXPeq9s",
  "key38": "3Up6M6oenT5mcy226wL1A2W4ugoYLESYkJ3T86m5mUGyuPAEGPEN7zVtVU8aYDm8EtAtSsoK9ALUcACjHxaQHq4z"
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
