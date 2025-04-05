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
    "4V873mxLmTLs3NB62E9Tw7mZADVfmiuBaACeVuTxN2BMaxviGFMQN23YPqzUDfBMuL3CM2Ug1aFyjefMcNX12Jsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "raj6rWpW3jnP5La9RqUYseMfDgFGi6QHCisnfmwSNR9C2NDLMMwrR9uHPSuMCTocbrHwQdKzqg2FcJgsGcxbH7A",
  "key1": "Qy8vpRgZhrYDGi6SZjQGM9EEAb87CzXKnoMqqsRHuQnApqmmrwLyo3Mkg2VpnttZSfiAufQaUEQhFLvhJN7mmwS",
  "key2": "5iNK9DHmszUZuME3CtPPU2g5QjXCKQY5kEKY753SXwQCVMpgTXJNZUtAA9FCTwstszarbhqphwm15UuFpKbntMxn",
  "key3": "6LdQSBSUbMwKJj2cM9B8et162uHNM1qgcnFUCVTxPRhFBDqA6MEHqRTv5cBxu4bMnsGmQiFfLxY31pbNTZM3ArM",
  "key4": "BGFy8iHqjnR722DhkBaX85kcKnhhMfXDhFhqc3gbbGNgi2MgC6th7agoQQJ5rzjo5hdHWZx4rbxeMZEC5UaszfW",
  "key5": "c37vMdzCHDLFvgGVYw7meEsMpemsQaeybdgYWCQtntWYNQbNmmuh9xEt63UumokZ6t8E2oW1T9XzJm6rJM4QXHq",
  "key6": "23GpZxGSpi5tztP7XJoQpYDGB3t9gnv7dm4j3qNsvecY9VrGiZJGK3NjxBBXNow3fJUjr835s4yzkJ1SPUtHX8FE",
  "key7": "3ivj5Acj4sP1cct8kEPzQVFsrSV5HSEG9Wq1x1yu8b3Lo59i68rgupfQX1gz3RBhsqnz42LnsovNe9Z75jtXKVVE",
  "key8": "2ZsYoBzKu8G9hqk7SDU9Wys8kWzfiG7QvWcETqc9HSN8y4grWG94F2eKWc459BVTGJhL4md1u8VbWVnuxnpu1Chz",
  "key9": "3Mj61T41xUSf4z1rVHtc8QBDcPkqtmXQDy6K8eoW9UxrbEYXoD9fJL9ELY2f9BT7xS5UAjzgmKopwuNf71WnV8zo",
  "key10": "5KPjxkb4fX7HS75hXnwKF9b5HSmTs8rhCxLxENXY4TWmh17pvaJzMGAP74ZWkbxxTQiNWmnRzqaayYJRktghaSA3",
  "key11": "48NbLZ3Vg5vgAAWoNtAGwTB5PpDeUDAGN64YGuyzCQRCBS6pWjEirzNsoArffwzSsEAU8cBj25H7XF7s8T42Wwix",
  "key12": "3sxR1rkZwisLgKnyv2CkF7c6CKjWcyiaksht6cawseQk6wcjVTzq7DCNA5wgkuSWv62r67a2foic3ov3qFvNCCh7",
  "key13": "5BJMV6N839FHdgArJuMhWvU5vJyBFd7ePFyMnzgQsiGN5beoe8vHYwToKmj4qzrMGXB2TZJrDWgRrQfKbyYkqVAP",
  "key14": "3Ac8dAihJN8fCf4cUT319EnEvEX4WFriMoSNxnjzpKESu53hPX7iGNQGjNcGAuBZ4tmhSRSwS7suhTXxqqpSyF2W",
  "key15": "5SE387FTkz6JqafYqeFuaenYfQuHm9YN9M5d9tnZRqrkGe7YwLV7Bf8zELt1LsBa4oPs8FgsL4Gc4cfeFj694zh9",
  "key16": "4BBhFs4Boocvq9wp2pmpLXzPqrQJ8jaAELudt1Nb41zwpDm2YjE9d3nxDEkVWY6rFkL6qfADQNG4tBEosfvyLPXq",
  "key17": "43dAMAh5prmQTK5ZrUkkxxhqTjttKQEtyJ89r6nTrtvwYscqoytoZsU1tpwfw8MVzoj6NEfaHswnes5SvTeDdhHd",
  "key18": "47tvjQ6dVhX8hs7MxRw21cAzVuuXuzKkrbpVyETymCddCtkHBxJ2iDvnDoRJ7ZCFHeSTgy2Zf6oevQmpajRNt23X",
  "key19": "KVhZcmpYyanypDfTKXKUAXHzg8JgBkXJrK82a1MDtwQ9iPfkYXGfQPTKPcmKX9MAR85vq3R35CGNH4wLzWzHmfc",
  "key20": "3fD3xuBE6QNrmjAUycC9BvrsWiWSJwVp93tNcq4eax6foCPbnMUFQAVTfzhWesyXuY3KeiNogDus8md7K7VSqb64",
  "key21": "2xH4UUHhFFSoV8hcxs96dguzdQ51YxanYEvAGDakWQnpvRz9ynhUQLrbZQeez5mo9p24rsYvBJzksNTgzQamhWkA",
  "key22": "4vnHtRiJHD5nxLY5wnSu1ANESfhDqcegKcwFTbeXtJKBewc65GZAKPGtBuKqK5JHPf4Qdsp33vGsx4NKNcYUV5p8",
  "key23": "38gpvKPhGoHk89CptF5FwnWKs72wxy4SAzkwJXZqfNi5Lc4DAAd7tCqaUxLZqBKhE7ys7LjNsUVkuhAW7HCFAW8U",
  "key24": "FkWj4oDMsAYmRAXXGAXH4NqEjiSEHwqs8oB7PdHYirrUfHFhbvcQTdobkL3Hb8zrDqv5sezxEWdiN3K4pN1LvgW",
  "key25": "WjoUpbY1ybUAzvKNhqCxy4HF9iz9eA5zguA2pwVUbbV8zi8kShZczACBmGjsL3UYy1aVU9a1DmUoE8i9iJ1NDMg",
  "key26": "erpPqg9BXtHCU6SHG1gMK1y256E2tfsAiXMfWXKLVbVky5BWjiUoerKaUw1KT6Ui6gFoZpjkJc42bSioxkRpNsX",
  "key27": "2rqtVH4Ur3N6hdUVGPnH47EjsS6KgDhTE2J4RcnbxSELAS7B5dS7AJtce5zZq7d7PrbaDU24M4scD3Z3hwvnqpbU",
  "key28": "2RD2jLMAWgjmH2FQQaiwCDBQroGYKvbdARFBqGkJBNBhR38ACsKQLwpE6eMemfLPgLVWZdkv5PrnbwEY4QqUTPmG",
  "key29": "4JG6SD6FJFdm5VXf5wr9KRwTh8TBmHt83bCzgGhjXmQysZgDHG9rysXfyMPkj3Af9C1oaWC7PLDQt3CuKyHzWv4T",
  "key30": "4wp3NLkTYGvs2imHJsV4Jz6VRnAhkT2uHhBaiKPQf4EY6FubBchw4GUDTxbphmhUT2VG9A4uD6RWWHoHH4C5RVu7",
  "key31": "3CwXdaCuAHpgtkxEdmgx7qhxjm9gksaj6XDDdghQYdR12m14DpoW5kYSqY3cm8cXudbAiYMbVaCEm7R63Ydc63FC",
  "key32": "3Bd6jMT1g5Go7E4VaykqHCcaWUrHGptGyp2DHjHhM2JvkkpjANSiCgHVTBUrsaqDhhpDYrunb84hb5GQbH4zWVsD",
  "key33": "59g93Z44KDPEYPasUnjkGdDbK3s3KRUXVkjUJ35bXX1xZnf7CY6fRJiBMkA8XcveNZMxnGNbhtDkqGy3ViS1jUL7",
  "key34": "3jkeR74RJfi1VeKNbo46Sy3DZmhsTedii42vpuyx2sf36sXCBuu1CKKqH5mvArVHFGEax4b2i8vZo1t5PetThaap",
  "key35": "2Rg5hEiCKCiFpnPFWY4DoGipSD1cWUM6bNy7Z9aDq1NpicZ7w21zx5dQEonBb33eaHmDGesbF9GgPLnQFCBR62Rw",
  "key36": "5CDQhFwadK5N75UYv43GdADrcza649bMhYEhxkmkGjHXZLgt5xWG33Gs6KvCppL8uaZMjvDi73kDPikPoLHMF3j9",
  "key37": "3Zd4HPowevuehTSRKBbaMX5rweHn7emdP4gfPfNPLGNQBsgK8ti9zYfUBFCU7NrZZ49M7hrzcM9emrWGMiaxR6ig",
  "key38": "4irGT33oRLcnwEvJCoKJNki7DWS2WGjqvmvsVEvZrh1RHbcPgjuUQ23m6Yrn7qHi7THKrKCutehUEK7TVQbjrK6J",
  "key39": "YzRX2pGUzBLPsKSDT5EDUf5RWdZyKn6oottS28U9xshcHKyhKRdsPr2L8MCmxrSnwTJQXTqGtghFf2hj1mdnKgn",
  "key40": "3mDayM17pDPe9y79G9XmGK9ZZQgeypuqN6WcSvSP1v5MsE5br9S1y5kLx9MBTWzEkVxMsxiiQaVbdpRcwch6T9Aq",
  "key41": "9msQwRpizYfN5UVbbtQWMGT3wXqGu5VNnE2YAMEaxfvptgdhtAg89arGHU2YbxP3TmzYChUViRt1QkWVE1SyZM6"
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
