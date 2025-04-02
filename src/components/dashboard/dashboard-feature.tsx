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
    "2L8zjTRTeW5rTmYZ3peRbbnNGQDy1ahpu6X9QsH18yrF7axPD8ZpJt7wgX5eeGaq23E1HBLXmapXXbeLDV5gZ57b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCYD3vJSfC2S3wjRvpp3aYmKjD7uhoaR8A6NrrvZdYq8xudTaJtJX1FnWwJvpz6X1gyDBrt9RhkMCK7oGQdMd84",
  "key1": "twn5BvQh85PVT6NcmNwDG2L3MAetrLNRksfdnfRU4SS9NKvq9JYmuPNZRBnm7SqGfbt8TfHTYNAMQ4QLLmgBCNn",
  "key2": "4Vjusec4GC3BzzQwdXarXyunbUzCyb4SaZVHDpeR7Nu8jQFg3Ce4Bz4X2bbLmDtM56XM8FEXgeJYvbjpRfQQfEux",
  "key3": "3Ure6AntDt78HhHRPskqRjhNmThdCZydZtW9pHWbBGCBvAAYo2jBhsCwgNbBzVxUPyyT1hgNKcgR6VTnUJiEPrMv",
  "key4": "3hToZ3pyr1qJLsftPxgBENcNxZsu1Mim6LMW1eUPx8JY3tRr23CSeGLG27QbPwRxHzLDrptXtUMYXy6sWy8Eg5LJ",
  "key5": "QvdQuDssg2wP8QXEbpQTJa8PDnGkrEymoGTj2CzjthmJvJfdQSR88zQ4XaxckUPVBoGiNKLsstynRwTjqfu7bnP",
  "key6": "3TTaLWo21KvjSowmRTxrKizywwWrf9Avos7DsqhZZ8y8fWwojSeor8vEMkJcHNhMr3QTFWp4kmTuBnXuekb4oSpd",
  "key7": "2jNtUofYnHDscsMv4ct28GYk4xjYUQZUahCYJTBc5Bw7TwQxiG1K6ZY4ZiGq7ZEQFax4zZkUZaU2kEoeDovPuZuf",
  "key8": "2t94ZyrRvvYMXbQAPhQFJ513wsm1afP6veGfbuGSKMGbrMA9h6oFt9YPeVSshcrceM2HtJgxJPuwwpDmbS9EKVx8",
  "key9": "t7EVtgfhxk6vDFY4H9aTXzMHRJUpJrJpXLhkixgA4xfuqWn1RggD7BkPdebZCA1FhJcJEGC3xbo7WeT69J5p7xa",
  "key10": "3tW8zT38YaLFYcnsxigWqhEhNSmvLW3F8LK6sCkr84a3U9699essgm5nRDuyM1zKJjida85z3oQjzSD2WPTvKdis",
  "key11": "tFT3cXuBu3njVG323SwxNotvQW7e97v4vUB8owrfAdZr1QU9ahL7FokEimewHHk6bXLMWFXYWWPx11wHsaBzMKD",
  "key12": "NCsNSdfMxQdvFjLVJ15zQg1WpZW3JBzX4afCJQSsxy4nKLEXzjy9zF1kmqCsvrJxWdXyzr5QpynWKmDvn1SV8iC",
  "key13": "3VhrBm7W5SD6qpM3DLEYHhJ1XqibxME2tG66Fhn4rQWdVBhkxMa6Bjetbm4hqJv9HNcNQhEGAZTq325WDfEfBiWu",
  "key14": "JBpFwJ4V8NDLbXbEWDPJFKgREZf9jn5DyafkjDHpt83HrWNZhzPejVK5PMzcdr8YaXBZXSvYnVCr9JR5a4ZNxon",
  "key15": "5K6WT187H2v6TcKhPorpkbQsmtTd5iCqAbD7ME3RnK1ntMQbbwSuLtLHiqHhx4hXchLd9XNL11FFRjcPBoUqrWiw",
  "key16": "e3JgZ9DLQxBW5gbYCvNAza2vwqneM3TxDHzrjxAwzDmV3TK4pD4ex5mq7KSDq5aqTUE5dMNuXtifyhQgNJ7PF3h",
  "key17": "2onvfSrPisqsX8osKWqEsuN1rZgJVtX7UpP17wmt9FtiKpV2XpXjFVnwUTmz9uu4pLL4BYR7rruRWhuJzGoUDiRb",
  "key18": "4owiWVZJE59FP3McKcYJzmRSVb8XXR1i5rkFz5rm2PfHMfzyD7kGas53ZZhhLm1iJ9M58drzft85cAW27i8bz1dd",
  "key19": "28iWwGhFzFJLBmA3qatniBzfPAjMoT5pRzdpYtALZ5N5T46wxoAV8ZdtrK4Rw3cXnN3KSoS3gNxCf8xXs7JQnucv",
  "key20": "5yWzLU3xf5Rr1ePLC8JWZ1N6hQH8pXKNQNiJCtMV3pfaFJ33cRCxaixMi55wDuNXXXSuSBWxGZwUfEcLYwdbUJ8i",
  "key21": "3AhL9VUUUGUQFsAjSePqDXp294Htb6wyhtoeb4yQuxUBXrcAq9k6L5CekikdajNKXAq96dGricsnD3SsMRbuPkRp",
  "key22": "3bkqzKcTjjkCZ1MCTMtCj2JjuJvtEkBjxkzAufjuVZKuhUJ5eBJjTkRJ1XTd7Vk4S5UE9nGwLAG6oBM4RwsjzKUW",
  "key23": "3jZ1eQbpg1BzBaW8cexHS7cDeDJLx5oVrCkemfSTv5whxJJcSkbE7vkCeNn25ej6zxJxQrzsHzCyUZ12v3iJP7gE",
  "key24": "4WCmabVUjDggM9dcbbjEiRrhByMYArLiSGWCyPTDDtoJDqiJRxmufnPdfMtSSq5shoiRAYpLgUbcn55LNbakTWpj",
  "key25": "2VN4uCkV4ZhUWLMMuoJx6QTAvgtVeypUeKPK7QFd56EgdNvgXWywXjt9TbNjFzFxv4NV6zBToQZ2fn5RM9e1TfJ2",
  "key26": "2HBnQyN2WFdt2eTEjLHPhiGu1UELJ1qSZvNGjv1NBvGKApKUUbSkAEKgiPb6Yp7GX8sMSUv3BSgcxaqF8uK4cZ7W",
  "key27": "44EvXkK4ZpoUVeaMVw1qD9Tcwk4qALp5K1dBQ2qugQdnzs37nPrwKU4ajX2twkt1spTGzL6udFjtz3hC15JrWRVV",
  "key28": "3mvopq96LivSfCgVdbgPayZjRtfKH6u8xnoqkh2FRUVgh7wGiu9SHtv5ck4qCyEyohj7n1SjWG4LtuTKkuQE9up6",
  "key29": "4KxhzHaHTSyXSP7eSe9yRu9NjbKciiRSnJHsQgytntgY1mskcH8ZJfhebSxCfuZHMYDdbWgefTQmZs5zu5tTHco2",
  "key30": "4vL3b2k3E3MQiT8dkE9Lrp3ozfL3QmxpyZ1syk6cVWvmNm7XpiTd6WbAD8gD41KgNMByMyZ1FiN87P7xArNb2poy"
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
