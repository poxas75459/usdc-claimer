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
    "4Wsg7eY3ZyGjNTLustJtU5gqL5GkSq3wSWwZKP5ngBi5LjiWF4dAjzMjZ4NtCQ7D5EXcL1AgogNNPcasNnqu6qjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bRR7p8fPTZUguvMbFvRPdjkq4SQY42xYGabpU5GWSs6z7Ko1ADAVAccCpB5YGhL9765ZrzJ7M7T7uPcDVAmo6ZV",
  "key1": "2y8FgTsdyy2hd2yLrECraeUFieBdL1dTxkyBvya2pbA4jPUS97ZfXtopM5q2JawoBB19w4dQJgv7Br3JthusF8Rj",
  "key2": "4FzgqnPeBJep92b1aDcasvNnk5SkGZmtCVR5vci2592Xc77XnSGsvZfvnoqqMod6B2C9jC6sHmoHuwshQWNhxG8L",
  "key3": "2dYqKKcXpWcjvRRazgHteGQgQBGnbrPPzdt4xjGMP71MJLNm6G3iMFcmnpWa1oDzFiWAxZKiQpgbhDuqgAXcHeEc",
  "key4": "jUZ6yKhcnaaFQ4M9SRka8igjZksa35Q4LapETvW6dnN3KUvmVKnsvx9rzyUsnJvqfCFNiVrcKB7wHWbd1YsXwAf",
  "key5": "3cADnWn4tYHUf3BGzRxpJiV5RzExFpKY7AvgUTrRdN3aphpq5AaNFcuKUPUW3KyfoxMCMg5M6b9LPsTQPQochjaS",
  "key6": "UEkXgDZfA3gAucqThsYvCRkUDAbiZHJVn5eGQQsu1EdyWZcaGednnZZM6TD3tg2txLSQKL6V6ogAN3FcmSV7y6c",
  "key7": "5YipRUXGPUwhHugnPv8NwTHKbW2aRGuDx77cYqQDitEMx5ZnGPGsBdVHvfngBrVXquHWU7CQvbyhzhoutHK9oCDC",
  "key8": "34s6GRS1BsHEB2gugRezYdAKe4eNE42RTC78GhDDqXS8uRpfwDFj1SFKfbVzeqyb35RF7URiMMyAKRKUUfkkMjxU",
  "key9": "51f97P2BSCtnSfpUVLReSJZ89jQ9S4EgXnKF9wePtohrgCdB3qmyQ2WQtokkzJWFzHYZWe13Q4pMBzdu61PbhoQL",
  "key10": "4sqSw8BGCvzx11i8vTD3AbazJ6GQAFnaRET764aLg3yX5dqknVYntraN2H7Hm7jJCdPf2Fe74x7jSqkyHi5BACyH",
  "key11": "4CXeAbHW7btqp6dVDZhC7cyGrcCKV9CvXwKY6nPHkBGq2FDmDbZCZ4PMxUZuhT4hv9JjnEUmh8KfwSf4qSyh7UQA",
  "key12": "54W8GoYZBd5N2MQzyxPknMktNAr6ZKfauS5L2kqyZNVQXsZkxKbodZ4tPGNfDvpz3u2Y9gK8TC49RQ9BCkdLkQGJ",
  "key13": "4sTQ85CvEp13EBf7EUXpnTyQ8a4mfHFp8wZ17x45AsBnhXGnPPLC1zgcuTHS6RAVHYH7H1VEt6oxU7qgB33Xx4RG",
  "key14": "2vZSjVhiPSij8PPr6AVLNdMcwcN9SYpzoSve8sE5VTqMQuNhNbWTxhiV49TpqkP5ctJUnANuiraXmMY3nBHtiKcd",
  "key15": "3mgv62QKPvpZfzPVoLZoas3r2Rxmq8DLUXy1YLRCb442UvAdXZTs2MEHcsErPuzDJ3JxJwJzP7vD8EpU2xbLg9fY",
  "key16": "5jKfZiQ9pqPC8XiZWEBAf2VdgVcqL589SZ6Fmz8uLZ2iXHzYMa4fAXxHDcSLJnArG8NrD6PAD1y4tJC1nAB14UrB",
  "key17": "JksVVrkaEbGsdZ9JRYnaLMB8RbD9MyUJ1fwDpMnLhzw6ktMrmXWqyMSdNakDVxFqucF9UhvbXJfxKR4rd2HcmME",
  "key18": "4dtdpaJvTaycixQ9yQKhFFHVJsX9Vxhd4AJWtAoUCChBRCCLbw1zataQR6mwsgaEGVZhFpLi9jVPhF74ZDRYLo5U",
  "key19": "4az8N9qaF8pzski1zFN4SK2Yq5aTwhgcbKp61eCbXBmNQGqebgRPLkyM8YgvPDaioMpWHfwvuW5vXR1zbAyk7ugY",
  "key20": "4zBTGadxgo5bnhmmap8VJUwZFED1EWpDs6Phbg8EYBdVTUgQiYb1LnBr8iky54pNvG64pc6mJdT1U4wkzVU8P54H",
  "key21": "4KLAg8eszHiYxD2W1X5gzUcSoPzBraXTBEjmAfeJDw8EmXtV9LaRJzSiDZ5CwV8GYWAMxjyKkG8SwJQy3NxZwo4S",
  "key22": "53s2UYoptg8F5RGbZ9FmkmdGDbzNSNkCgUNRTrH4MGU33Xz8bq8i31stNg89ELqjQ1vzLf76ZHiNVeTnUxgmQ3yC",
  "key23": "5APYb33UXCQGMcfR3UoUYtJiMZ4mp4SzyeFgPNcLheY3DAmM15DM4mP9EfQWARo7VAghut5YGHSNg8pac7rqeg1X",
  "key24": "2r2eZu5jwdLsmGM2zmV4DSV6D36QEJhn8L3WLddjj37vg2wCNQBwnS5FD76TTEv6dqvANfw8rBPExuLFcUQsQdsL",
  "key25": "31d2c85Ao1vbRuBr77hXBcYmtMwRbQFX1vs8w7qRPan4CXAwRMXPK4cwdRhQe5VqBkvag2hWyEoG4RfefSXUUSGJ",
  "key26": "4xYikUtgonNGTQxsibpoiq1rg5Cvc8VmWbFcP6aHVvbNzas8KfMjUpJ9fa9hnZTFxXDudBi2n61mqsEeTnPDUXq",
  "key27": "3kxN16kQ9QxjW2DxjPSFwjE3Pajc4jjmAEJAGpYuvVHvoA3Kf2SXnNaKESpQ73RvDwdCAoJfbwBvYBGbHXN18rr5",
  "key28": "zTQwDEwtp7tee7b5jg1CQAh2Bkh4x1PkqNdH7swsKvkZu5r2kNs4JQWzy8SKNvJq5FU36ooxbQosN4AKD8XWx3t"
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
