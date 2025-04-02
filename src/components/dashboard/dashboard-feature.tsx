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
    "53t6WssBNk1UxFHiJsAirZkxfkK1t3XQA9ddzTn9UgB149L9zQkWHJ64Fa1oLbSyQuvEMzRX3iGuXQNHhjbBqQAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUzqCWanCPTEhTd2fQyExqrKV8aURPAjMVVvZzQ1NRjDBV6KUfwgcG4ncNfR3ccUxr8AKLcxEburMbHPJzG8ywr",
  "key1": "2Xm4tv4dk9a854F7jCiau8n4hyXneY7VEdrmfE76qTL8H1RVVqXzR2NwDuPnVNBF8s9gmMuxRnLYAx45GH3T3eLL",
  "key2": "2r1oHN1MHZNLyESgZFM6eq1HUxwZ2SX78bmcRvqcyaNSWXdNd2hTyo2zgTtdWhecAZ8M6yW9dLxZidWiYM7Tq3sS",
  "key3": "4D3jufWA9ikn6LQxquFP5ScNH78whHSLzQFep5GYBuTwuq2ZWGJw9Bz6EhLzDjz1nUtN1byzKdjwyPsszAXuaEhS",
  "key4": "5nSwRkHdVTDp13a1b1L1r7LN4qAofTExWkFaJ8P9BUxuawZThfqkMWRxy9kMYQmmG4NNW9PdRgJ1a66B4bLFTCwj",
  "key5": "3SgwMQeR1kdFsFudDqMNNhX2yGoEZvVieQCUKDUgBjym2LvGAuJrt5uReuNu6QJXfq8VwPzcT9Wn3E5xejrcJhBZ",
  "key6": "CphkP2nzLGE58kavG1sBRkRjziKpvGT3ar8mA2bkprJsBefTEogFwijCLXPM8JXKd5JKQmErtVMA6TfZX9mbQHB",
  "key7": "37K7rgcWPrec7bFALJtwKHotTp2px4C1VHt84VRpcKmYq6ktuTS5f8TjCHssrbPUEnyb8FReBBcGyHqU6Le96Rsr",
  "key8": "4rYz9AmcxuDg58h69yR1NbBcQHJMutFKdk8bK8QPK69ktdeoverpA4vaUcNKLrUZAYHgoEHwVeoEZpr8Au8f6r9P",
  "key9": "3gjbXFVRDFcgJPded1HpfgyLtAxMGoH8DqviL3JyZ5oNDAwxQsziE4RZ2iPJWbGYZj67WRKGidpDBfvztLSZHtt4",
  "key10": "5Lexx3KBLwfnuaH3V5EP53VudNuNXGpC474B9prU9sSwBeBtkhmaWxPbKNvbW4bkZqPFYwZLSg6rM18wqyw9AYav",
  "key11": "46wDEW7MXc385PKeRBSq8rqiXQf9ZJpny4jvR1JZqwTdGmwPJqmYgbJNwWZEiLebX4cFFdTXeLF9psJXJWhCv6Sb",
  "key12": "3THfV7hG9vjPHNKDP1ajS8WW55rm2e1Mdgd2FQ8eNWr7fWsPwKKsdUiJoHgAokPBXsUrUP5qQuX2DXTq4TULSGUR",
  "key13": "3ojvmeoStmcB692nyAmQJ8Q86ZKcTrb4iifeKRgRftmBrNuMUSSSYPKRAAk9hMWCKVGd2iLu8sBi1t2VbDF9XfsG",
  "key14": "3dks3xjKLBE5mvp69SDRFSphdijoAr1U5rdAKERdHfy1VYssJ3n8B4NGiVKBDp54nqY5DK1innkg7JMHX4JRhFD8",
  "key15": "4ZXd7uwAfWsL8UxZaig6N6vXMQd3hyammUqPA9vGERa3aCg2cybNe1y98zPG7xvjadYvTbeev3ydojjGetuHrqtX",
  "key16": "5naywfsXzFJJtjHrtWZusbJE4VWk69PEzjaTDZaTArbXBirZkHBaT6UCxwbJNaU6apq5BkDkeX44BGhgWQFjPobf",
  "key17": "5rf33SfDm1VNF6Qm7HktNFoEhAFLuEG554sxzoVSuwcsdSy59s3y2dAWcYteB6E8u4eAZ1Un4hJYAeu7jfKjjrQ2",
  "key18": "2n5Maq7t9BS7ss9PnB5C68AGnCBidn9D86qHpXjAQPUDKdiC7QCGXFmaKhBfFrz7JJtoTLvzuQYqyP3cN8MMm8px",
  "key19": "2D34AMR8UbG7gY85a6rg1K73P5xTwcKyH63m6BobzBc3AcQw4dLJ23mjKRyctedgnnxBJ6W5avLzLUzEQ8nm16f6",
  "key20": "15MGZHtcq7MtySxM9uykvYoWGsswNnNRMp8B3rcNUEiPaw5grehVH7PMGRAEN9Rbaxxznp5EqcMTtBF3zSRU7Td",
  "key21": "2fGAjXaSeBdeeCWZDvWBr4V3THsH6ukhXZSPzccvqRqftZRu6GbarMzkScopz1EPFKjro3vJFzjM24dAkircKcPd",
  "key22": "Fw7bxeDzfYdWzmYfo53CbxpFti4GqGrgkwCXmtYMprmvfTsKZPrgfg8Gr7rJkumkkqvGCKqeuCJyFRCMwk85rge",
  "key23": "2UZcLYUDtMyv2SzpWSLa3MpAnMt6vLZFgiS7ptkfKvM3q8c8EsPjoY8DZnmEnH9YwM2d7Y8NXtW5ZbtzfWmxf9DC",
  "key24": "5QiDVhuegxrxw6EJseyCUmTEM3wqPZc96Muu6YAnX1bm16JSYudT87N7zGTLYpgHYyySXua2b5UcbNJkoaPc53k3",
  "key25": "5n7NEAh2HVMYwUcLzWA148zE74q7V4zpQPT2jcZEMxumskhBo7VKXSPZYu5myvCtBPnPjih4m6b9coKV8NoCnh1c",
  "key26": "4RXSpCEkNADrL71dnza2viHndb1TP33CmAxDY9pxhnm8pBmoy9U5RZxPZG8WaEdvZXuRhGuEYNturvNuPTxkii1u",
  "key27": "iQ2RNUY3N17HkWFM2rKBaA5KKJZuuyJhMZwZseiez6ynGGt9rAcfa4k3LrfmC2BxV8sPYhtZKR1k4uZUpLZqJnu",
  "key28": "2TaYZAadmaRdf4jicLeDUBEeDe7766JfxhfW26C7S1WF5kmw2978YkJZXJAn5t266Rk9rXso3bTUn9zZf4CfD7tC",
  "key29": "5USPZ3UiF5YuZmHGe9ZVXabMkGDHEwyMTW7kFKctxAV1t4ukFwwvYBps4L9jqUUdLnEWVr2HFLeJSfBBVrdLsBGK",
  "key30": "3fuXzTSPVAezUBTa7Xv6q1wd1zkJKon6KZJNXM3hze16ZgUEogqSAEFRMjAec4JvVyj23Bra23qkEn8MVGemri4P",
  "key31": "4mLJeKFrfXHAKoXnAQZpNadoPxzR5AWDYMatEoLJQJgPX5tWSb22Mu4CLNt1DDbXavp52CEDKZnquxe9SLjzRNxf",
  "key32": "44jDzBgcFc6du1597W3HxVMGDEBHAo1tDy1ewwxEQMgo4BXv1HYxLB4qVu6jfaPBwgN1LSpafkLd6KJcspjd27kx",
  "key33": "3wkurZwXHwTNMyBzs9m7jPA1a9PKhEk7siarWHeFttNHBYft3o3XM9QmBtqvtXFtvTFny8PpB2nLAG4YE3C7t3i6"
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
