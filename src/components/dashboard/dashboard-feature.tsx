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
    "5kMbwQR4cUoqcK7oZPUHaqJeh87fPCWZJCQnES2sfZ5MwukxHy5G9t1xez834aPdbeGXrijgRWWcyQNEZaGyQFqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uFwmqo4DtLuvQuJa6Lo2CvH9giGL887tRoRudM64X3d8LRiB72ykhbtq7uVPZsUDvu663iUMT7ke2JBpZkEm9Tu",
  "key1": "4t5C8cUdrQ3V7FrHDv4McNSrYkRcu6sJB8Ye8ceaPEL9935V28BYMrKbjMRvBvw1Z37bLRGHXEbeKbaQRB7q4ADU",
  "key2": "KE6mCSo6n3qoAZvr4xjfzePDXgKGwqQAqVb7Q48gzmajhVZiMuiw5tHtrj91jxGJgeWS7sSMYaueP7Bum7ZFohy",
  "key3": "3rU2NyeitYFc6hHCQc8wKJW9tkxwJKeWbQw93w7NkD69fwD1wwKzRdFsWGw3yPrU686kyZGpAZw6W3Jgh5S9weh4",
  "key4": "9c2ZKig5bGHGEnrk3CCeGB7GQtMXZRxrXzVRakZizH5Zeq2HTWHWf2meWhJPRXvp5vo8mix57obkUEehYvWSQoM",
  "key5": "38Q6eq2KK5tBd8bvAJjxLj21wfQJHU74Bzc8RA1ALXTNamPyq3exZAFoPJGqVDqAAWdiwrCJNFjtY1nwbqvbPx2f",
  "key6": "2kBaS4hDzMTiwzZ5Vj5fxzXWxTuySLF95drcAzuvoBc9hSsJmmNFRXkR1JwMYoP6qNpvfMLjqr1RYntgVkmjPsp8",
  "key7": "3MdghPezzuKrN4p8cFGDV6opJvN7iC7bXAHygwX9E9SSkipmZb4f4z7tkdZjBpur7CmnJYkscx7XV52NgfrFND2h",
  "key8": "3KiM4mD3pkcMgNk7fqfptVtnma7pTyUqayyqGdp749SsYFi53KdAmDtHrBKuUWKmToUoAMcVwhT7yHJtZs4SYsxJ",
  "key9": "xPLvTYQoryBYNgptiVX9ZuDrdEgEpBcmQghgVa4XGK3mnSqzihAcfErKWuh6bm4waXhTNG8hj2hBkx3aGRSEdq3",
  "key10": "5YqdkuWPQ6PEviiQz33JzmMpxryzVSFhnDFoQ95N8s6YxiFXNntpH54VyethptKk6Qx7DcQGzYxPzCoVTTfrsh9e",
  "key11": "3QcP4dztP27rDA1qMPuXHyU3qYGnE5uSEe1AsAmiFHr4Db4rged9XirbffVeoSARe1AJqqzxprHdvEeb59qEk2dL",
  "key12": "1w8bh1frFYeCWKSaWxkttcMjg87jS3Ts7foevnzm8L5QQokpAUypp2syK1Q1pXVJNiVjrcgGA3DaxYpCVg4WvVn",
  "key13": "4xvmj8ZyZSNMMb6xadpzVYjVKN7Z2dMy5Zvta77V9BmZ6UHWXoUK8idNeWCPXVUoWz7mJKiHAbz9yVsWr4sR1txQ",
  "key14": "5hUhVv2qFme36cBDDnpanTEpjSRyrGLrigUojBS5oD2LYPnkAc6A6KeCVP1YXHkuzaVSxGwmjsEYBBwvTLcMZyvo",
  "key15": "582JMh9KVtxCJYU9YXaWEVYFpeFS2jH1HuG9kVhC3NUAz8RGy9mxkP24ys8rh5iF4w16dkok4nd6UeECwrNtTMMz",
  "key16": "HNoSajdWTT5pPAGEH1czXqwu4LeEUVn8cxEbtd1a2NFCSKQccMacBEDeEvywuHzbDWjL1gCjZxoRVWHb2hvsFd6",
  "key17": "3s1qt8caPpFJifUKNiKpSY1WLBVfaUfppwyLj9sQqj9VUPbLx3j5sQHYuJi5GLBNWHikLybw3ZwzTaFZeVk3myj8",
  "key18": "4G1DKm9xwevcXPKtSN22heCdgc1zmrQVoaBRJ4tQUQVYqnoAXATYyRTYnfo91GSGm7TGJGEC86TVcGr4QGKfKcj4",
  "key19": "4Dd9HfSAnmU128mmHvdTEuBbjmWd4FuAWxt8m7ohiUrxrGfsk5EA2uRSfqmxdpCSgdobwMQu2sHzfB9pkGjjfB4G",
  "key20": "63vSBhX581KfhgPcPdn9W6S132nQNXRWB1kfpQDDPrLytF1ssXswaBtpoD6axW1FMyB6uE6uD1FsNEPGZJa7UYrJ",
  "key21": "jQbzKCBLkBush1NNW3HQwWCr68FHbPaNx2FPQvDgbmx1aEpfzXYEHVabiBC39iLi58Mc1VwGvwQc6J1q5hQWpeU",
  "key22": "ed1t6YRScb52w3H9MFLgA8H3XVwQMQoHGGc13PFma3utKeSKnpSAJS1zF1adKdmR5bpQkfQrKBb2aLpJEytbhMY",
  "key23": "4T1TBV1i3oietBaSooP62E8BmXWFDLCbD9iqW1U3gvsQJfXVbLaoszKBgmemURyjKhQeXmp27XwG21sYka77bbVv",
  "key24": "5PqBFru9qDC4xUAcLDyJ5XX8tZyunhDtGVernwwc1LuQrtALqgGX4V7a4Z4GRRuXJ3Qnw3WHmpYj4ub4moHLcVax",
  "key25": "4XgB8NuyvKpzePGDAc4DZRy159xPtjhrQ3TnGHyoQgUpZ46tTH84FAoneqpt4JEL4vvfuoB28nc43zzGa7sK1NQp",
  "key26": "3ihNNdJzEiPLPgKFADUBbcBRhBdie7VdCrbhrqoT8yQyCbnPtJjVGtohGdRCW2uJ2rN3WD5RjxzNcZVvGkurjSFu",
  "key27": "2Tyh6Rge8Fdqkb1uMGe5NyNJNiuuvcP6kisTuxeKaCZsiFeU35yVxLDAQUpDoBHAdvtRLeFvdV14RJR43i5vabyh",
  "key28": "2oi84v2pXT2VviTDuyrJDZ2d1FLzJiHb2Eyk21cj3VfLkV7b8Leg2km6LahfQ7ywNxEsCc6SvYvvv6gzbxSj9vn2",
  "key29": "4WxPZEyPPHYYsmcjNVoGmZ6jwkYnenXdzsCkMmBXJPEcqWXg1rVLcB9NYYKHec6PxvcnJZmMGDtVcPxsMcpNJxFj",
  "key30": "3iXiUeYmKMyLvgfVCkg2tU7PNtsqWQVkrPv9QvWDgyG69CckrN5kSGFqLynn27Su2AqKozJNnr3wJNL7d9Zd8Nvs",
  "key31": "vXdMtBj633Dfd48oTsMmh4ZNZAqogMiWD7MMPQ7Eup7nNkwbqSfsK5R7zkUzEZWWJxqNHRqK7Q3zcFtxEMDPKHU",
  "key32": "3gRAGuHTfkLcjjqdhcg7BXdQJsHeKqcHFUvFCaAWxwikT97wMDDMgVA9REGZY8q19TvEnFrPwRqmwaQks341xLWe",
  "key33": "3hv4U64oxAkE6csSTS8GVHSYGvTA2oX5Pd6LJnmR6JYZFYUNoR8ZHjTtSqJQN5Zef448TVt8NFbbvMiDi8skaF8c",
  "key34": "2qkvUp7V7KniE6CDYQFtVqnG6edi81VRXZ3Zf9nd4FRK6ZKBgmKgVo34PkcUCFWeEi9ESjRsj1C2uAgjTQTpffaD",
  "key35": "DnYzaBAqFEArRem85KocX3Rs5hCDEcNX9zXD4SjumyJSVvXg6vb49akyV7JLCPwKqwQKJKr9f7hrNE5FdMCZu5A",
  "key36": "34BsgG27hBFnfDpREV7KdASHCYanJKpUHTn5T4XBvj57iKAfmqkRgexJkB7W5ppADZZadE4EK3DahXNggjYU6Tzm",
  "key37": "49RwGdadmvoFUfWTDfBdVfJGJ4nDr37iee8azWSZJU6eqBvPeEwuevLCqQxKiTy5P3v8Mq2wvMuwSUFq9tGuDoDg",
  "key38": "4ges6fqaC7HcZj1i3nvQdNqnGoNrg3EhJ8dkYfiESpbJ4cJFCQ8S71gK86EBq8Rh5VNfL3HL1vnu4LjjemcTb5gn",
  "key39": "3pRxqZSWuUS6q2kCZpS3VqWBjESDQVkbiy4jCQnTNWC3yv8E32Udk4GtNprzhQxq5Nv4nEXU5Hu9E8USQdFQWEGk",
  "key40": "vsQwt21dP8g9fFJMZgdC7fst4HUhgaeT8hdpQp4mkdFp4wJ3bTxjWAtXFK6ziYdkhnKEc4QdkvcTu3DGNgSFMyq",
  "key41": "mgeqsrjY5uht3MiQbSrqAV22G9F9fWrin7zJRCdkCGqSr67mEV6jxJy3EoMvc58qXtWi9aWYVfWzkbaxaft8ag5",
  "key42": "4b9vFF1fEwSn6WLCD5Hi4wnjhmKndAYqW5sK9ESeRk1iCdhuqE4KrAASwqFAH75Enubg7Mwo7JQ3aivDwtspxaJr",
  "key43": "5BGZDoKca2WW9y9s9hSDV3fYuZTo5VAbRzSTF4Mzho24V2kjcvNg98VWWUuS7ogHq94J3Fn3rXzhGGtq3U68CNGq"
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
