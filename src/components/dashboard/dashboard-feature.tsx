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
    "7QxCgMQzHA4syPbUAt4VAucWUaFeVS1FCyUpEMDCJyPHQycHjGZC9qvtajgRhDpRDgC7x8wSMNguvvdVudFtFP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Cv8EEdYQQQBMeMUcVRCKHB8dkELtBCamm1sLduWJNbtqj4JBVTZzSws6jYPBsjCfBmdE8NUNPyQuFYzaVTukRc",
  "key1": "JxGf5nWZbQQAB5QbBfft8JQ8rYutASZVL6T1or2FZAnzPJoVohB27WNJBVnNm1keXVxnDyRDUGraS9hQeW9XS3N",
  "key2": "4EL9wHEPtUdQfT4BYqmuw9s8eyYw4kmpZaLUVBZFGPdEDbizVXiJ3MqdeUkquMjHzJphkZiK7M3RFJMTMLTdq8XK",
  "key3": "3zP1kVjp1TUGe28eP5L7uuZdNc14Xr7rsm7ApSzfpjJip5565PAmW4uSgpjDgqhpJCbLDeM5VB15fcGWyahTEGZe",
  "key4": "2zLvHnrWcAGS6UDvEQngCubpsxMxDzJqHmBoBYwBAJ5YE3mQLu6WWphsky9SMcouoot1b2GLBayv2zj4LqWa37yY",
  "key5": "3czmoqFpFjocbELighDVRnKLG1zirJMK39qZND5SJDHUk7C8sBfLHgqWYtgJUsb2EzXnqe77pUpfVAnFS3viDQ3S",
  "key6": "2iLPRaVNbeq9YxA8LMVUqjZ3fBR9C26N22J4NnhrjhypTW8GfYM4AeAoQUfaXcBiXkrVFJTyV7WuxWcAgeC6xeAE",
  "key7": "3etyKrELyScakCMBABCvW8N2ZNB6MhHNKqPmyxoHnhkTBmJytkN6hHsqJjnSwCENvEzV52uam8Zujt7GUstXvVae",
  "key8": "2ieEET8hUpub73KTo6CVzKxR7bDcSyqTM6s3oZUHFQsYKYVBj46gTCHJCzBDB5FvTktpVTxt4NAyxxgmmTPBrjy6",
  "key9": "2PnbGRX11CSQajUkHPYLYdTuV6EaPCyoJ5FYDDnkW5cU5bQu37wstCDZuQySp1YxjCyWNSyXufkXW5AAYWZvzLKq",
  "key10": "5PNcGoPcGESYUbf2w8kfeDPMQSWgeMEYM6n9xZVwTneKVmExmJqYDKLCrUEeJTTtDYAnemTC7XEuXV9bRkfc2G9b",
  "key11": "4478i8r1aV8yP7YrZbD6J9frsRa3XRwVp19Uo7NBkwntsLAG7hKCz6MowkNF7WsVzE945T6VMjkFoC6WsufyP98K",
  "key12": "1bvar2mrb1xiNx91VdFrtjKWdJz8jbBxE4WaaSQLUPPqGFJiAV8Y7xNgeRQfMfutP7Ac7GnkC3JVtSbCGE5tGF2",
  "key13": "3ACzbou3coGmFrjzwW4VN2L89ATM2nLJ895RUGd4LGbPXAr7xdBST8mQa5xThFnaHRjdVc8jbcz2WM6jJWBenagW",
  "key14": "4zdrv2z8EA6BPhSFtjXLPoMTVR7n1GLYowmnQ2Qo99Bua5QREvGsSHbXdT6sMyMEL2g5FsrbNp2L7jrrNSxDyx9J",
  "key15": "5tEfuH99byppUZWQs7yPQn7xvrWLBaSPcPEYBiki6N2yaAZ5SsrkfppuxG4LdJRMoH7J48j2veB3RUo1Ao56ouM8",
  "key16": "3dfTr9cxgrSjzbt5gqa9GUxobxCH6tMxxpuC7UUaTNBJuwjHPSJfMBPLfQUn4pL7faZbLeoTw1CgtoxsL7wuzN38",
  "key17": "5F36yXYUP7MExEB9a6Q7tBJ5238nvjuJbqpqNZDz2UVAp8CkoFEurmXRqLscUihLgP1bBZcnwJBMUjcETbHHUMRv",
  "key18": "2S9uEHtU5bD4b2ab6Gi3qAmiq58poqsQPJRPtmYJRoqDGCb7S1HtBxSYqpAFvtYFaN9ZFw7rT6RiGsG9e8XqseUH",
  "key19": "4Z82ks2VeBr47o6ruP3TVVHANdM92imWAVPLJc2YcQMQjCMXWxAcTzJsbh6wFuRFFdBk58PqaK6cWnJs6KffpKCg",
  "key20": "4HDDdxcFB54ZNyj5vdMhxG7WQbxWCkAkGSdcBCnRuP9h3Tw5xsMFBD9kD4FyMnqraNeZoMDProofW75rAVUkTeQv",
  "key21": "cQoU4iHAq2VcKZ9bE7rYovFQmnevt9gb9mp3gQQyfQNyxcjvemWftXCkbTwkfXVWJdY3yzrdtWMxSBW2mQVK5dQ",
  "key22": "5RyWfTT7xMWQ8vqy9pxQT4mQJ7ywBwce85w44oRjuL16diwagdj3FpGQhqLmwZn4EkigJXV3N2RreniA9mqLLRf1",
  "key23": "5BJ1b9yU9eeviqxwLyg25J4QtSXf68iC7wRC6tiAYdWiKC4nqdwryUZCMzT8MDKC8bkzEyKMdhEYbdquZUDbqkfd",
  "key24": "3Z3jgb7XPJNvohBiH9s9WCiYeChmdb1BQNeytnzz6XbQfgGWs2tN9JqTmcUX2JqRfdUZHhg9v9njPzgANKHu2ZHj",
  "key25": "42Q64YTiFVp9mbbzLhuKP5FJVJmtCMtFEwzSFtef4DB5BCJKZ3zJpV27xV4Dy9ef7XyNvzVR6RGLnHfc9jBDCseN",
  "key26": "J63JU8XzdXGxck6C3ihzuSkDfyadUHhR4skHtpHke4QJvvaGeYjNuHcPtUbVCTAFw1S5SuvLN2EBGZ8i1sj3yEp",
  "key27": "654TrboTd9rc6hxz7RGuGYVjmeDiQnk39B751SeTYAzc53zQps6raWgScbmdVhkyNcUWBUPay5VYewt4xdgX5rsS",
  "key28": "2QTkGHNSFcPZdLWw39cuz5J74fmYHncZ2AzbxPTZssCyabV7h36cRJ8LdUYMHLg38uD4FbUP4b4dwQaRkMHyM6Jk",
  "key29": "3GDuzmf4S6kZYzR5Wx9RehSQZHZXsebmKBy8FHnpYtAp3r6GX2RRzKBjk87LKdQypjEdMiahL5o4pRQf6sgZFEg8",
  "key30": "8Men5YAhj3Bkj1B7hKgSniKy3Dspojafjq3Zctk5pC4RkTctNLfaFy2bDKLn9apNiWcXg3NXzzbiJwG6x2GWVPW",
  "key31": "TizT8uTEi4FHJagcnXhvmwUJ8LZ7gFibGv7nmT1AHLvG4AugdhXNxzabL61FkoQZLGq8okPGWyf5vLTiASo2TyQ",
  "key32": "44pX6WxRDVa7MMDCJvzzHg7gdQxJg3wA5ZxrPb7Eg5GiknzBdjBxywJPdC8DBVRYXtF2VdvsyqDwbSGnSju3kHNN",
  "key33": "sfGg1gUqZfby63vHZ6WZX37vFrxGsp9zYDSeaT4huq3NDr5ZgCaEGYGQCdsLEDpxYfatBMMtfCujaS43N7JMfSB",
  "key34": "56C9g34nUpYJZ8phM5gMZ9RrYgt2YWtvWxhJtg3yemXWnr9WhXxW8mREi3GuXyEiZ1onsXcU6Vv17v2amtDyL1Qc",
  "key35": "2vmnSz4K2ygAibgP5hrgUo4jhfnYmX3BY6RyrVXvdsxXHLaPSsx84TirpbmaXHW1xaFm9uokRq3nEbkWJ3zY4ELy",
  "key36": "2uE4rK8nwk6sYP3VQwzjZK5SDzw1z2uDNkyDsr8sZPwU1Vpy4CeDbCBoYmvemS3bAbaXmCSGQkgjQHWnfjtrErNr",
  "key37": "MXUmJXes4ZAAhQBxhoubFXm7CkRkvnS7xNRN7USUW48BDqGhCuodzuPXC3GcvdecEV7oTX7J1QBo1wnmW14jupy",
  "key38": "58n3Xjs8dZbkiyKrGZEVAycsEdSLkLHGPGRAJ6eRDuTSwxkqXNT9BnuiczJt2C2vTfs1WN86a2VJF369MRmDDn1P",
  "key39": "EYhWC7x5PmQMPwJ2hGnzsppJuv8KmkFoCYjbDcnUZX2rt4yWDtujgoreuzbhw4ZrPYeKedJxBN7gDBFhstTE4Bs",
  "key40": "tX846aUCuw4SiuqDKxpVUMZZJ3yMW6aSrqX68bvsgMLWC5PnNjVgAqWAStEGcEnFZ1Sw1U5ihg7s3W3vihjewX6",
  "key41": "4T2o3W7Aa7e1ZC5E8dgguw5mwzyS8KDkKCWnzqg7S5UHNDQqMbiuNwh98ZLkaesGzHz4LTxVbzyrJ6NeeSDi3wZy",
  "key42": "3gKBo9Euh5ctaq3yZY69p6b8FvzX19FM4Wu66QYabq5eQZ1otUkjsHyMyNxnkMV67ZkcxyDLcU6WuvhxcqAzbrmV",
  "key43": "5bqzwjhzdgUwvkohcGoExZxiirp5KqACBzibNCMqc1DWxWSP1w6bdnESdCNNYJ8n9H22aFcYR1aHXxNRVN82f8eQ",
  "key44": "2V7M6cipbU7EWghKoeo46m6Z2jusXTUohXNhJrmvijwP7pMrxmFHrtXYyokFPw564amVosMjBfYo6Qvyw7BPsy4E",
  "key45": "3x4Vv8oqJRXxJ7ftdPGjKk2yJZYu3uLM9T3FHDdWswKzorUfbhsn5cBVgy6umuc4H2usrJPKvHkjALLCD8EeYkvK",
  "key46": "3qhQtdhC4t2KGkp21c9DcTCXH87siFr9ytJ1UXJoHe7wxJtZpriuS2Ni3qmwVnMVX4eCTpgBUKNrRM3mpkLLjs4M",
  "key47": "27GBy5hsEg71j3r34foijrCBG6CeqsWSbMbDvHBJsz2X2RrrdLH7CE1bfYhgGD198MMx28C9kcZhiXv2WQZQHqSp",
  "key48": "2uCcDVwduRzuNuuEbBQsr9eBw2XBzum5xoKZeZ6GM5g57DEkTmsSQtyvUERf7dUtMMQ1FHrepWqunpohjvkxBwrD",
  "key49": "BND8w9cetCqfRsJwSdwzvZT7ut29n6cuPMRdMmSPLKiBgtsabszmAXkeC4wL4jDAHGgJrL1P1oMePt49pD4fmqp"
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
