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
    "22VwTR1XvSgsm3heGe2awHaGD2STDuhLgA4VjGfWsvjMCHDY67NbXhRFuNhSnBTHYkjiAd7RtAwr2ug3q1bWr2q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W84Xz9Hzp9JZmWBpxhGSHg5A1uNo8TFqKZPrmsWfRqLN6FvhGDJcN46TMf9YQi9SEoHMFtYhq3rMkFDqQdRHx1u",
  "key1": "4Qo42Eb3zZ8zLng6CA69ym8yeQes6jBMGTwgygJY4jqXhm9gJcJA3TQ8mhoLw4zpRr4eHkYsnjD9hBTjVudMMZfQ",
  "key2": "4kpqYqSxQ4fYfqi8VayyMhfD4ChLACQJ5wS54C3upXbR2rufsgfiG2Bk1Wk6eHohvFQVGXit3K7wTP8AvBdPALZr",
  "key3": "3x3EVznbVvuNEi2dvkWM1qbNaqHFuZVk9nqqygrfLBFHVf5ekWrj1yfGjmx92QmZy4j5zYPcRxESJtkHMhx98zst",
  "key4": "W6nCivfKNjFxZRQdQtkjprkExHeoktUeNREp5H8u1ZK1HbLh3TZTpkCY2epbV5miY8TfHd66RJfHtATAhSFZxvP",
  "key5": "3CRkdJMt2Gd6gV2mJvKmFA2pMpWQYGPCzNC2ZLbPx9r5hm8chTk4RdRSZ23dv3HuAzRYo6NDZz2PcVU17s9Aj48p",
  "key6": "25axwikXnxA719YwsLqDRn6iy3Xg7PBcn7yBQP79bQ8NAC5H45qLMrzyj2DkNy91yvVDXBCsLRt2zRRioJujUEMB",
  "key7": "22jpSt1vfR7RFHtM5DXGrbi5En2LmwZ241s89dmpstccvHatpvdLrPxu9kmwQeCcqZZQqk3XEny5N6yWfA6XWxxL",
  "key8": "41LX7zR9fqBBo871C1RiUSfKw5hr6FVfKZ61vmWHcCb6nfpKiZf47RpBk15TF1w2qaqf1QpNu5JiAAwmHyqaNwwW",
  "key9": "JauZ3bMaFS6ZRN5weUbh9xw6ZfBnqVEYQ1C8QESjheBGHtu5L7EFwR68iQKN1Yj1hQgKVDRVDqMJeLX1JrdAPeb",
  "key10": "2RuoAy2J5GJzj2UnJfk6diQR6syK7Z2xwhKZgu3V6Mf7vPdpag89PvAPQgQf41HcTkxNdu2urBZF3NNMuRYhVaAj",
  "key11": "3NpuuuCNAbRujw2NNBLfzdvpNjCHx6tkHPXJwqmzvtG6bkHEWvaueRzWzobadHB7yLZkmF5txoMuSJPKA448gNpA",
  "key12": "3wufSCn5h5Xa7uU9MT5pnt3875uTBhzGv63MavhofzSFbmQ6Jz24c99BbmsdecU4f7NZsdjVg9MaHprh1j5npgmB",
  "key13": "L7VFFCobn63susCArnWUm5f5PTE6xv6xtcVT6DdjBxMpuV8GGingRYW9Q1u3ySQm9xSMDKWMXnPoVErkKamvKrN",
  "key14": "3E94J7JH6FVfqpyz8sr56zu3Dt4Ky1pr8juK17iQTWvngq4naVGu4eU3Co1UJCh1qVNdrEaMhBGur2hqmgbfFhRm",
  "key15": "3VSYapp7bFRCgwJ4Soyorw9fweHyoDS6mCrbaeqVYVRanXKTExeqzSzuxuw7kZkVtNUuwJXYk5oTDfVTSdiBdWD9",
  "key16": "JtFpVxgyvcF611rZZGiSVKE4s4wFLnjArNVBptjKignC87Zcds3agFq7myJ6XsMsWYju8QxPVKSVMSz1pPmufrB",
  "key17": "GxXdYts2ik7f3DJYwYEKLLsbEKrf8RArgN9eZVNqyRVTC6WBaZxV64hkq7QQLQunv7LpUVhvjDddKxmk875D25f",
  "key18": "YrWWMGw3ZtYgmWUMdz7FNZvQ7xuHc3vF6jXHGd459CJRP5BwnHPzdZz1eGCTxyacSrKNYKftBk3FNJ26p4AGtP5",
  "key19": "5GGuenhSHNS1MKRQgvGcNumm6wXiwB5wcb2tMUQjQTPR16xY9mXGj1jFCZw9kvmTqw95zL7xNrUEiUmdjCgzvCcb",
  "key20": "25jigKwAqY2TKpQs8W2a8MHHuWoJmQ59dszo3WygoxniXU3u2Fp29XN2uMrDWQVefj6nAzRLwasCqkbkCrWzduAG",
  "key21": "4o6QkgmkkJVyy2aPqJ1HX9DfCSJa11g1u8VUJBLYCtwwzEqSbjG5dE6K6VJyAoYDYE3t2Nhcd1bwCQMiUUFdwnXB",
  "key22": "2pAAZX4vVtcApDjATpg982znLWxRsKoBzaYrRwYuCp9su19mXQ6WxRHeohVLeEFHfantA2WQ9WWYRnipAvXFAwYc",
  "key23": "4TPUppbd5wmycBSSCZFkT9wdEptEBHG7yk6EjaZkogzo7uNJc15G89LDVPjXZdy427JtbxjFiyVu2aCqZMuUR2qM",
  "key24": "4rULm6Qf2KbEasYaY4RPuBVrBUwZCC7rLjakaRqm8Fwv3Wv4HKHrNiUzKZk5hpuXv6FUTfuaQaGSNVrJyCkcWgvc",
  "key25": "2jhhfGbsARsHLYmm32b8Sqeidmw8qyzieFNpcq32Xvk776oZHTBEFHj6ZfoagqfBqnBc12tN6pwSkhpGe4N3SxuA",
  "key26": "5SJQM6C6n851GcGcCXXPkGYNLCzV3uYzqP5NQjFFZF4E5QE5Dxnw3r2Ym19zrcU8nhYRtp9y4HJTQfKkm9fCSKYs",
  "key27": "3K7RSSKmcvdaEVWEy3Bw8qJadk7Tg8UaQpcb7tcCGgJLYMLTgCgf2Q3JmtrDr6FKUwqzAnYK3S671mnsrDiU5mAu",
  "key28": "5xRZ3W7QXxC9tprf1f3RhHSREeu7bP5DKNHCuf6SRAoKhrUkWLZoc3f7JryfpGPeKDrPV1uTK1seZctaBr2sWeQg",
  "key29": "39tdhR1zJSEw2DcG3kZgJ4ZcKsCoMfTovrzvQGvvPbeTySojNYwaaGFyy5TN6eLbg6g5r11UPUDYHbhzUDKn968t",
  "key30": "4hJPnHf5FwY819n7Bv6Qz96UycMk23x3fGpyahxhaXMydvBr7qaiU4hN84PpwAF1tePNxkWHku9oczRK1rpZpYDo",
  "key31": "5iiHGZw4KV8KSiL3bx8WuMqxt5261sCBNuGc9eDgjRJbbupYdZmoo4Q8Yu5pTwVqfVUUU8kx66K5AeDXPYnUZ9YG",
  "key32": "5TveQSVJtFsQsHthjdsJEvyg37CDb3AJ9rpzdVezjAYmAhfuS5gZAXHX4N1t4aRM1m7FYEDQbD9NCZcBb4s3MWr5",
  "key33": "2fzAnVdBLe34yh1DPvjjgybFq7vqjpXQ4xSzsTsnSfoCeTnhUzdw1AUFFkGDnpennVuJX5v9VRi2XtTcyZqHg1EB",
  "key34": "2JdyFZWAVEFJpjCPaqw6RsyF58pdDk1rN9CkVLewVtvsh4UJFQ4tsfSk7jmSnkZjTeHUHTrSzVfhKfvKadj8TWj9",
  "key35": "47MGZ1gnztGUiiXGuYHUdL88mon62itLhV2VYNe5A8XQbvygxh7uAqXUMXfW5pfqUXiAnMTbhd3rVF5gcfUeVkxw",
  "key36": "29Abo8kdnv1MydCwybgvAPpZbKiWvWMbYehgAGgczURGRumYA6aaf3jahqeSnW12KkFcMa3GbCuojpnpADGMJSfa",
  "key37": "63ubrWMmypgkXNNdYqPQVmt4vtEYPgTSVaME5x81aS6eoB7PFLcoLrmLY2egjLKxS7tbeWEPHzGpXGS5Hfa4NmDC",
  "key38": "ewVHFS6sia6gAoQ6TF9savZcMcvHGXay9bVDs88DpFQFfHMHcR7xx4yxXvf1kdjbKECHGcyZr8p6Db1DPAXxFmx",
  "key39": "4KCjJr1GWfCnZRbUmLX9R3NbvQKYrNrHmDGNhFgkFyNARPf1hJH7Pa46QhriV5ronHZZY7adXanNY9bjaMYHA1fK",
  "key40": "36heo6hzrFvZeDUHSviSZPiMAJrZAk1QJXmB7GCMgbBFTGtZrQpYUW6Mn9ZxPmBmjW6KAtysBfsrvqkRw28Cp6va",
  "key41": "4R3YuGm8352JTu6cSKhGoWWXkc9yDpFatcvRK785A47BiFksNnZBGuhGM5H9tWhVH5o99GuwJvtFvHSvHEMnY4ji",
  "key42": "5wnEd9nynZbG7MbFHNYA2W8R6tf4VkvBG2oMTk95NUNGBv47gbTJyM3BFrXap5Sog9Tmuh95u1DrJecyEm69thyy",
  "key43": "5M2tvW47dFyoF8BqyAQM3ohayk5ZXyqnB6mf8EbDFyzMswh5mGHuyvUvVDwZBQ5CsaNwodXPvd8cDJT6n1Y6BKwj",
  "key44": "2PENiC4wS1EJk3ttK1Tioyg7xT6YVgRwYHiDwruHQozoWZZn62eoMkJRET1VcwY1BCXPjbPs94WPi6j4B47c3kAt",
  "key45": "4GkbufqfArgbRk7ogwVfruB7GSt58ryz7zrwxTrLkks7SzYFPEySudkovoHCaP1XY5GuUwxPpMTTJdBmderGDbXh"
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
