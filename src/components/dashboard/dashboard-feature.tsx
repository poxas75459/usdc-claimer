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
    "UwtFEjed5KDGBYkLyp8z38nPvRrWhjKSKV37kBvkKa6h5WisZiQHDVuEi6Q6BfoPRW7pp5BivByJu4PgLhJkeAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HW1qoc9zrdt1P4a6UN3iUCBM8niD4F4m4nUstSG7rCydxgZTxyuRNMULGvG7LrbL6coFXk5ngzgMP7stFJJTDqE",
  "key1": "r86RBT4jgzqfLhUih3M3KvyrHNbWwM7x843w5xcqyRU5u8Df2acsgesNHbea7dmCZ9TELy86DrPZmfwN7qAm2K1",
  "key2": "5SYhvqJWikSJtadDFLWXXeigUD9d9HzYzv7VECeAetaZZjXFr8eJppHN1q2sMWwcqZztroAwprG9kFDdUY4jcYt9",
  "key3": "3s8sG8kmunv1Jg1g1NUJcPTWrcpHki6ay2kSobzrV5xdMsJsC2BkhUE1YvwjGoMugkPq8YA5opkdCXPdyP7fGbQM",
  "key4": "2XgMfsB6MwaKSruxj7T8XCBpSUnXuznW6udYRp14zBqbiKoso5GpqDYGY7AYEVipfHUwM74kd38Pz2SVwS8PR6SU",
  "key5": "3Ti1kBW3vgo82Z2Pv8RQxJPmR6xFjtJwdsRPWe9Zvv6sqSDnUxzCUYf8PB2fXCTriHH4oRYzxZSs5d9GPcPxxh5A",
  "key6": "u3YFz21rsqHqnXAbrSJwESX5DmmttauKqgLxBBmk8NyU5p5F19mpzaNU5mM1JxDNdeQAvjYkiNg94aXE3omTGZh",
  "key7": "4jcBy6ttNjNdo3ACj1rV4b2k9nk9E8tDiRnAcLoXGy7RpBH4DGKBiwTXjeGtqRN8tGgtGrchuB41VkPzY13s9EWt",
  "key8": "3Lv7DM7UtBTGdHUtrDDStHyRfExL4raJAnwkZD1UDqxas3P5ypXmky2KXdA5pQUxWfiCHN6AX4Gtv71quursYrdx",
  "key9": "2c5Pg4wastebwhCVg945eNUW1Rih4wr9WDBSacmDJReFnRzYZdWfqgDNCXor1UJYNmi85mBYCWZmydqrUdhW72zB",
  "key10": "4avP2ZUkA2NBmCnf4GBWv9JsUG3oifVtpW6YjQxfkZ7wtR5Q1hTaK1sjWzfBVH4ubTt5N8zJmSHw7ZRcUfq1YqdS",
  "key11": "49GX1NaEwJFhGes8aZJEmuhwN4AriKkUpaAdqC68tunHT4gGtUDBQkXUQ5ZaCVEdotGL5Yt7hfnYbMExKNZjSJLH",
  "key12": "2T5xjrgonbCwk41uqNsGpGuKF6kwAxgoF7awqmD3ugtBkQv9hiVzf4dBuUpe5kFDKJFnTw8urEfyjdPqsErrvoXW",
  "key13": "gbjKuurSwDTQKQNJ1behSeqoYi5bzReZTe9tAm9MeJ6VwgGwfEX52rgcj5jNY7jaX4fRUy78qU7NkwcjUu6VotY",
  "key14": "kJFwSAgZW3uuMzBDbZuCMeS8pU4GFyE7f8eS4QaotpDtwKeeFKS645TNqVfvwrGruSzHEt8GLFaQx3agcLDJpbY",
  "key15": "3fpwnuDNQt2RLir5sYxymdtFm8zkxctxAm1eLXJEWsqayeFYAgbnMC9PciSkdEQSQGtoHjoTk6b1XW2WfVgQGMJf",
  "key16": "3iDkAtLkwaQcejiaQJu1ciwLz1jMoL4jUevqHMFuLj2yEH2w7xpNyXurRfj2WCHoUWpPkJDjNsAd6jRu9MSZFUJi",
  "key17": "8RBR8KPVChg8KDexHvjUU6cv2zaBJpYxxEqwZ2mS2ezFQHrKEssNLZ7b1yUGVfAmQsVGDe446bYYET7NgtThCtY",
  "key18": "57Y8rrZKfzL1LMKcz3gvWZS2RH27u8pLxanewe1CLCb2WhCHk7ifa8JFKss4ChJH8t5nBZxspWQaeAfJec6PXEgC",
  "key19": "4fMC5SzucYBwz7h8y1sysRfAzf2jwQBqkziRS3Vo9e6eE9ipUyQyMwsCCc2CtbHCoGXLPK5P5XrctmaPTJEtyPPL",
  "key20": "zuUhzNcUyLmNMX3To3takNpYvu9kuwrnaJTzKwVjkSA7EEbiRwbhScvhnoEVfyvAMqX1QKwctJoex7Z6DzUzuTm",
  "key21": "t6NnNsobo4HvhWn5q6rP9VQxS4dBQmzkTvzVWCEkttbXxxPDr45g3a5TaSUeMCipYPWNeqFG2xxhG2itvk6ettz",
  "key22": "4D9MgZ58y2qR9U6hxp77HYp7RSn9XBgXaxaETUQQhkAYEaGcEwydNP85EXNFESgGkV1en9jvRcnfUWgEBfU6mHHa",
  "key23": "2dBv6B1uQxyZ6hKt2o4XUcr9CefykQbVMjPwJmAM7Q1eXDgfNjQnznXVsA3DhZEKGRME9oMmZqfUWgkPLrXbSRLx",
  "key24": "3ZBCFYqLDQ62cJBgVje5SEfCdqHY7CEB1wMUvtQFW4f854m8xM2HMPYF2f2agtA3HCJqREaXswV6FwHoz3r26L56",
  "key25": "5HM6w2A8MMabFrs65Qc64QMpbjhrYB3h7zN5C8FkEAZtKCsKV7ekFvjJaYxxXUtQcCzUaL33ejb9NgbvW2JNMcKn",
  "key26": "2XJMYKzWUTzFBQQevN8c37D3zbaq54FHJLDABjGfxRo2BAt8Mysd7bqKkhrvhbDz6t1WZ8o5JpHut6917ZgMpTFf",
  "key27": "5JxPbxqugCQCM2hmGgvBZ9yLcBkDdRHUMzVqsWGiDY8ei4HGbHdaX2BVrdJ23sLtsoymBYmH2v62uvi19r5JHaEY",
  "key28": "4AY1y6Yam4vYczoQqnUyFtyQ1dLLEXKU2EM9vzqe8TopnfJPYkjKCEcG9k9UUTTRjZvgYPybNf4gJf2UdmWttxAs",
  "key29": "21J22zMSNu7cnYHbr5RdrGpKMc1zkuqTEKNDpGFD9YCSob7xdqmaPwGwVMassK5BFJNv6QeinsNyEBqrzeTN5Qer",
  "key30": "3eyJTKzW8griLnchfyT8DAQoSDkXBdC2SZDpRes1TwFwRVDWLDemMmXTf9p41fAMXRTVkV7iU2s3bktnWiUQ5Kng",
  "key31": "4qbFp1iUw636UHJN8Cmn93HyQUp8zBUYmuMjFQYYMRhDZRnVUcXw4LwvxwzSdVZEANb1NA8D6J6VUo5JCmjgvPJv",
  "key32": "5wQopVHZ59u6ZxmZkniiUDd3KVrFyZeqPnRTPPa9aLzYjFoeNv2ycejhV2FWeSrYgT9G7meA3iRKH81ek4QaqXic",
  "key33": "26Hz1dvj3Qgc2hQEjPHwiDGYVYwcTw6dXkkKC3RxHYJFrrbEWt3Cmp345tYQ3baSqTRzzMbVv2fXJCaNv1j2g51D",
  "key34": "3VpNs8iTqCteAWACWCDfQS3H6v17oVZRsKtg2WKzHYUUpvQRFUpEV8hc8mhrEJLW3tKaS21mqXPvDfnxFTPkADGN",
  "key35": "32xXoc5e7J3Up7hF8phQ1NVujtJqZiCwwqQaa8kSMej246kHXsJx9wdnt257TDJSqujMurNiWjLoY1u1jxvqdTh3",
  "key36": "5fsxHmfsHhP1Bj7PbEr63ahs39YcdATc6wWmUCaarXgUqgtk1osPVo1iPrFq32H1CiM64FsWEcBaBuD9jvv21qjX",
  "key37": "61mCW4C98EbDi2jZ1UkoBtMC95wagVRfNNZNKSBM4y7uLxhnXYcYgYWoUXBsb3ErspFMjPHoAipGueUgb3kh8gW9",
  "key38": "32eHSWH2U7kDXNWYigCKAZnDiP8g6Z88vmYJwkKLQA4Utw2298tAJ3FqzcDV2F8KtErssa9MtYWdm4DzTTPyYrww",
  "key39": "4jik1LSR7dNdFrVZ5WKtyrSk5dNWDNByS5h9mXLCbjwbqLyrsVFZYzvuWNCEx3Sfhdw737RniZdY2R3fxMyzXFu4",
  "key40": "m4gyjr5xfc2ZTTsssWfQGFkeHoa8neTNEH6zxHwUC31tUWpEo5r7D65b8m1UGx4GjbzenCVwwLv2zKy7TYFdgRm"
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
