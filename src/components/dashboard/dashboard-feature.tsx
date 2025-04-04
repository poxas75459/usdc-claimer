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
    "3KJY6iB3T9u9joMDZMCEGAiUP2vRNGFsRyJjEBRhNGnYcEb27ft2ixYUQST2EnEUpPauKrW4rJ5mLZNBNQ1bX6mm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x3kQqexvdLA2EqiS36rmzCXMzrU2JfpVdWnivCfDYMuDy514v5KNmGWjaSvL2QuV8JpuMjfrXz5A5aDYmA3mb5G",
  "key1": "2pEYvkznqCCBqMxit9aAsmZ3MxwpK5cudKeSxbFVh9uampSH8fJHBudhgftx5kSuit6foeAekM51KW1EoJf3innj",
  "key2": "3GcvQUvQYw6WWe6RUipxh2EiuDosJDdfZvkE9rqWUjBryBW2zqZfKqVv7cVr5J6eCzdbm9v3JBB2vSGRH9ensrLU",
  "key3": "yZG63LJbTVwJEsfEFibKWZpCa6jFVzvwU1XYirwTrWpxkowgMwbrRHPRVcQhYWXKj6szXDZqwBHGon5vVVPR97p",
  "key4": "35nWfCkji2SfAVbPykGVvqyxKarmjcg8TPQeGAfXgsSVvAMU6yCJoJrHfFcwkBtGGW72Eoz6GDzJtPkJavjP1GQ5",
  "key5": "4Aey3AjBDS1unMuqfF2rDbLGMFXjxRxKaJnwXqT3jJBAQA5q955pac3LsAghjXKbt2ouCxKAY2sTUFQjAGDKJ3E",
  "key6": "5MRssfejvvWnubJ8YCTMDS83TWi2ukbjpz245uncdtLkEpuxbpAV7j9dTozRnGsQ29AdPTiaBn2Lomv8tyfdpBHn",
  "key7": "sqP8d7pqkQew8PG8iTXu8375ieS1A7pFYQ4n54q1tU24AE6Bui8sFD7ZmYx8XKpFG9xE3zTM2Ek1huzCE7kxsFj",
  "key8": "wZDGyTXvW1nw47xrbPgBwLHWpMq2TL1xaJgLBKvD5vMGzbFi5Y5JQyFVsnabZJhM3u88ue5EosEATAG9sZ61tvG",
  "key9": "61iLB9ZF4g2V16g3i1EaeJ6vkkYwXjiJn8WFDCcRA52ZDGNcDEH6zaE5dxDoRzADWf2abeiZB2BMJpmcEKugGpdp",
  "key10": "4rzEgAAT936fJG2V5QJjU6S6CEGd9FqZDsaNDm8zbAmaUJV1699o7NPCvMfzgcDJYpnofFsFqkWNqPPbkKagC9Bw",
  "key11": "3MFThMGJ2UgUzscuZkGNn2eGCxDcKu6BpxHNZSZ9cWr5Ht2q7neRXfxuzqxrpbaXcqFqKysj8i8ngE2QBmMpgtgY",
  "key12": "5HuXwPwQBM5DwWq5v7p91AWgUY61Ai9mxU81MU52tjVkYx6nFxjcet5KQW2ezPeJuCHNx1PP9cgLV3UwdxwUkCFL",
  "key13": "2bNcGiRoSPxmaJw7VUmYV9kNVHirdaQeXGQMXu7Lwcp5uvRvNarynQ8f37x4Vkgh2jFwZxqG6YJR7UmDNh8hdbBF",
  "key14": "5kj5A7ZPvqLiocKnjkEwjT5UBWMHSo4CRN2AAjVTCKTNaPTNXMqCRgpbSsbhhv2GxxGZmaLRMKuQhqtVV9dXP1dz",
  "key15": "5FmsuaqHQnm5NzNrfBuXcpbnc6thWdwteqJjyifisyvABm53JZ2bKJjqHSBt3Cmt4o1TMEibrmoXwTZPCtbP3hk",
  "key16": "mmYHEJNHshMkysWTcN4z7cATaijp71HiW16FYgMeq2GgqiqRRgVG8Guv7ZiJGZ6mrzhYwmuTxMV2t4y8pfWmY7Y",
  "key17": "Q7RtzA4cKdDjxisHeP1vppNnuF5UFxENFqVakPYjqHqeGrHxmPLnAc2Fg98EHTEDDq6nJUrw9Qbhbt1UyZN7J56",
  "key18": "3jEYoXcHzQG527ZGPHziuHiZ5QYZQ4hNWDRT8dLAt9ZqGkzRhBQAkCUqCxzc5qmMHkV2rFEsqwMj3Hqf8U54yE2y",
  "key19": "2xSEdXvHSkQ6M5toN1BCYj8ZYypfUjyFqesJ3dnKeTtbPpfAWm6w5RM7221sdDnuBSUq3R8yUCkGVp4A6zqGhody",
  "key20": "3pwLBe9RCeA7EgpFDeSqzwj5NyAumSWVJFEYpdBsqXP6JLyVSAzJDRQtsB6HtS7a23sNbyw5M1XTixenztYYBQf2",
  "key21": "4LVNKh9PzpRyAP4y7MwDY4xnhnzmzrWFuPqRiCSGrynAFBcgD6UkHJtJndFEwgxS1W1UJir12xqQJpK7iPucqGPx",
  "key22": "4n1JtHec5rBxbQY77SHgyWJFMDZ4vqvTwyeSshxkdchJSayPDkwEJS98pyKVMLonPYGYtdd43PnvxVxM3p6abamf",
  "key23": "cq2ejU6RHBQdbxdFs9DgDYVZ4pZPcf68y5NbE4WkvdLp4YkZNosTz17FD1a4EThqh3htvS3UnF9qV3C3Mm8HkUM",
  "key24": "5hQysvZDdMsN6oji3eG7LUh5ibNzihNNsx5UYXWQT1YWFCR7AcE75QH53kN7ZUhm67Fadg1Hi3xt7GLyUQv6uX1L",
  "key25": "2QVm91C5kNH9Mrdy9PUS5gLneg4h4SWv3KnoVo5WBF7VaYkW97EiBkLTs3TSXDd1rg3jkbkct7XNwkWJZ7NoFRin",
  "key26": "4jea3vapi2BWDNTYTvmnc65EtZpZCwhUUNTQfcJSURnPUNqRpTLVad6Wxxj1xeAYGk7HSeJ7D2VkiC59L8L9vWbR",
  "key27": "3p621hpbbqWWMfdZojWEwsVsmoFqi1gdht4jJfpdDNSAtTb8fKfu2qi62wdf3hR6CDh1YUw1S5h8k5NDDiLRG7TK",
  "key28": "2e1dsQm7mQ9MsvukALDpB4xGsSpQwUkuaNzECHaSrj6BXKHnzhFSBSP4A78tvqnSMY2EdHb1RsqNSiBbkqYK39L",
  "key29": "21VKBosjwU9ZZQ7irotchqQ3Uhbk2KxBeiMfxZYWut2T3fNdH5b3LMBmp5ivfrgS2qygHCBydzCibcULrA58kd3j",
  "key30": "4G6UyqKSgqeJYDgEeyNAoRo1tZoN5jDEaVSAS4vEoLSN5EgwStVhwjMqYRVDP35DXDGXDWjzkfzFZwtNjofjjyEt",
  "key31": "4APh8CAMpBYWVoLicH4HcijNaGuLw34cJgztFnCPfR1R4eTcdPTgocH7eH3dVT1nHnB5g6Eg8eJJdReRY7evAjez",
  "key32": "3YdAfBVccdzK6QmJvFKSFPtmGaz8u6dEvFGrnQqNKjUv3Lgp2fwcoRNvdsQ68VWv29nFWRMQ8RdTFkehDWxRB4Az",
  "key33": "5RRRXLm1GqEYBHjdBwyLvfNn18JbbHDpKfqeyAGUoRRdsNR8rAZ8QaCDf97ZdcX452TD7EaXpyfrWQkbULUhV9W2",
  "key34": "k1s4Nmp7RSAEwKVyJrNkuCDjSmtGa8iNbypJmahucYs9odhHZZhKCQKMr7HV4YfaDZzUZd4969ft8FNk2HegGgT",
  "key35": "5wL2mbza7ZUAtvDjhfZH1bybjxn1UZJfc5757XQg2FZvXm9GjX7K2N5gohZs5r81SamNbGm1MP4xxzEmfkngNE15",
  "key36": "ynSL4i8MPfEJtUq6m7qrw14re33dtW1y7V1zEc8zb1fq3Br7gqAcJg7aUTVhAG4anRoqw1y7TJXR2BsGPWkibUe"
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
