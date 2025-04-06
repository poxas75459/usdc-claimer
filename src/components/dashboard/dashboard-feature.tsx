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
    "2jz7TPL1sGh85crM2yKzeNm72KHgo9rfrwq62fP2b54Xi9ctHjhbAV2cj8NmxmqJxqmXMccS9G7oHGhtPJJ6LFqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EhC3GfDvzeLf4agLCgTEyJ6CWeL4MMZ74UaF2XbtLHHaDSn2V7okwaCJNoV1tFfUXRfMtcz3c2iZgJvRWP3FfFG",
  "key1": "mEsGP4yVSR1bGGmQxCiP2ZGJkAEgr6xHHasHGMecTDH7V9sjkY4TECL8or548dPa4CToYMQpME5R7swQunR7M5f",
  "key2": "3yHoxohQzVZgjvTz59yiWWyozVgEYtqxnRD9LwrzhZXmpWPqqdB1f3RLk4ZZvXBqA3eWmA7bkYfUxd3scvuoFZQ5",
  "key3": "5x2SPyL9UYpCY5z4WBHY653ByBQcCvckfitN3Lq7TrZTyXqeEiEGZMehdP2jVttwxN5dx91wcScceJ8KgfPdW5ub",
  "key4": "5R7SMqfD5vZy7QbiKHbgxHeeoVdms7ZKgnbjwhw3SMGyCQ6XWcpR3PFq8o3FhACSrpJxLPjvwUUaTuRkvg9Wn9br",
  "key5": "5SzpeHAHtUmSWRLFeNS8pJDX8ZPwe695NqMkHzJCTo9HMTpbaH8K426i5UY13RYqqPQ53kvyHvzKtQnuvkBKS5Jo",
  "key6": "45Uyb1S7Lk7y6wN2NMAHLApCsFzuGZJYmCstVRsrjDfyxJWfbZevDEQwr7w6vUiQtpSqb4C3aRL5Uz3VPZfEWM7x",
  "key7": "2g3CxknnNN72LK4y9VkZMSn1dcp8n2c1ww8WJizPEspzCpxnQxszXHQixzS1AQE7QWHZgUJ4Ah6wmRKAvtuE1VeK",
  "key8": "4o5baXjewzmAkBWJXgJJRXneWTJxGiATa1t3VyK4xdoguBFVHDvEXsUiRSX1kcMzsJ2b3YeruWZFhmvMNcAksCkt",
  "key9": "41ReTSNe4QBZ2F1LyLhyJ5ayXusLdkeXD5wZMmMTGtJgh554kocKW8tDbP8dhNdypCLxdgmKtap6CEQ6UbC3TBG9",
  "key10": "aMCubPKu5vuWDRHpy1Z6SRL3j2ywYpVdjT2bmQStemEurhYq8q4orNdqMim1SG3T3nyZuDFbh15s7UaqasWspKw",
  "key11": "667aiUKABHHBUbo6tBqU3udsmvKdcid1JNBemTxayVB2zP7jPs2usogsJfzyiY58EYBkThNKCbU4xZBzdH73RWtq",
  "key12": "38YZpq8HjqsmMD3Gvjc2pB4ZikX7adWk7i9B3EiC1DtMTjJRsAdHHdz6MTdUeu5ruqz1v9CG24EmSPXKpoCxfATb",
  "key13": "4MJ793QcaFvuQHHXyjb7S6nPCPCf5kV2k92X4uAcVsHfDcz1Tde2RAUusku1DrP3npjrr5tPWcxqWg796jccKPGD",
  "key14": "2Ues7mNa9Pr7M2X23Dz4dz6bwbPMPGt33mRJBAMbeSS4PQX2abyP1SDgg7Qj6GSyeTmab2pUQ65cJuVJhz2wAYZK",
  "key15": "42kZ7yBTczUsdxEq3H2x7fetAGhBsrhcaDv6CcQqbfuaUfccoLMTvdAXhqgkoaxZq3BEBEhkRGaUMzMCsepSVtRv",
  "key16": "4DKbZt49n7cG23wbULpF51veUBa8SKwrjMs6kukWSPv1skop3RwkfRr7bWr7ijvywoPnUaLdja6FCqbLyKKgXCJR",
  "key17": "2SiKN63p2km4zQaCjJfFqVb5YZt61wQqr6k4HoHr8hQryN72cU3j75RXdNnL9m4BAQbEN1GnUCtFXD2rZ6TDpvtK",
  "key18": "2CXeHFRSepz1CD3CgLRBKtrZ3zFCQ7qnxAn8929wWg9g3JEpJzqDfhkqjFWmWAQi5G8ruSMTJzdRZrm5D19Dv9Fs",
  "key19": "5wNb31EZyWArPx2FJwg5Lv4aUd1wSLB3DQ4b1VUSLAEyvvbmAef2rj6aqwFvYG4ZqBiuDKSCB7f9Z4TpwwwFgztW",
  "key20": "DyFmPYgbZqmsWAH5derW4bud8kFvh2nbb2QS8cL33F9HoDJ4cGNLQUyjbzSSbve7Td8wDDj1sHNL6QmR7BELngv",
  "key21": "a3LTTE3Mu1xPhqC1aXqCbBWn99TYuugSv3qjNahqXqWayCP3jxLMDH9PtfBS4FvTiyQbPakudtk1WxvA4rDyGGN",
  "key22": "2d23UymcbQp9Rqv4NkcBVWRSMvRU5J7zFPLQtrbKAusByhLvsUKhxmZ7mzix3P1bvQK5z3Db2KiVgBHwRTAnJzrZ",
  "key23": "4SR3mHxdXVp5BKyRkurmotj8WiP2VkmBNuyFqqxjNAwfNSJCNhBggVC8jYzgMWhUjnsUhab6MsEirKa7rUtfEFDr",
  "key24": "2yaAYCLB3B1x8SNf8tw7qhxSzQMLdkRxJk5Lc8kjhZ89e3RkxLVRQ9e6nHmsjjhSt3Xqgp9CPMbWoRAxDSDvjYfF",
  "key25": "4EMmXD6vDo9HHgDDdBMoAAN3S1VssWjhJitYdA3Kixh4nV1UHQs9ooX456S3rcXutD5oxwXK8vw8shBAxtrydW3k",
  "key26": "3a9fLFRvoNzcPTcfzhsG8sSCcEx9VBMqrqtf5PAP6SmmxCQbURu9QCbyET38RovBGs35thMwG4wjwWURHQqpmbJs",
  "key27": "5N2VUpZoCqKd7Y2pnDaMmEmNEvGwyQcBsW2y7kgkKUuwY6jsoKBdxcEsgDsnineFVe5amEy7jM5pSmLkmgPaVsP6",
  "key28": "4nB8WbAkSGYLXYWdaXm3vCKmQKbdTCtF4RnmaGAMqLgTBxqhKNHHpfyLjMEmZDtiQm3AVywt7SMGxT5t6cGUt5T7",
  "key29": "5AFACFgewRZrWPd1nSLvQPZAd86uJygvGyzWoeiDgD1m58jGvi44TNU8D4NkTi5CG4QfGCbmFCCTbPG8UAoaD2sM",
  "key30": "5wKdRxftPWJsCWrh2a8wpxWVZ7s83oaZwSyKGjTMh2L7Px19ua2AAiCkrDGJLvU7VxKvtVV952WmTscGu7nKn55o",
  "key31": "37SSyDnaatteEhFttrTyt3mtLUxGBGyTwDvpxxXaAe2YpdKqg3t8rR8vkzF5agu3hL5s4i3Y5SiXWtxoax6WruBa",
  "key32": "5GeS6XNNRD7z3MnxrR6SDEQeUmRbERYX5KhyVbtRdamWHA24UDGhAJ7MobKNAcP2dzXt77z1S194ry4G8MmrmyvV",
  "key33": "5ygENafdiXmhxJjoE6y6fZwzDH2Q5wFkiqLp58MFX6QW8VCbY6KRLuzJYcAVCXn654FHC5BmMXhvSWN2xewSFd3W",
  "key34": "2StaoL6Dz6H3VSTvKRpbqXxyCmkAAXcw1C9aCj5ieCEG1Ae8PNjSVKqz4eBTnD3yayFFDUmwtTcjUcgMemeZrA6D",
  "key35": "rfJEv9JCZW54TuDtSs9dAnDSLCqj55Y8VjJ2pCNmaKchFzKakPukGQREotJwEXBfYR9NpDuxUixHXGjbSDQW9X2",
  "key36": "2f1jaN6jDew4iumhFSBXt45DgpQeSxaCisqHBJnhQNbvAqsqHDH63cAMKsxPTRGBJbJaMWqergWuBk83gftJQrFY",
  "key37": "2CHFviQ1fT7KMeHRZkCADjqypdqNkfFtWBpYu5S8ye9GLCscYsMo2BvC2y9kbEzzYhcDaTatiReY7Nvd9VYn1KcK",
  "key38": "Wg1aAYNxrfaMVRuz8sSUPydBY8r2HCDZipsKaQUJc3zjBW199CMhCoN2pKwJz1oVuzR3XH6FYLRtzYURcJrd6tH",
  "key39": "b6siXBhFofnapsvkVeF1N5k3CVaPZTkUDHFo3H8JjacFZwiHL6uniBCM6bQvc36njHWLhEcBhgfmzW2jW34yk8q",
  "key40": "2wYxDQtrQnYq3ondVjQNqNtcdUPcGfSzJYCVAYfgDHpRqyzT5P4M9XoEUyVwPTrmTDGScVpMhcKkQ9rXfoo4MCrP",
  "key41": "3GT1Wdw7wiWLVLdKAaDvW8gnYbPTRoctP4qqEEqnNDQErp3zjtT1mNepwsSHEEvqrZwLwZnJ8trW5otZUYL8m5YJ",
  "key42": "h7WKCJg9Bx6ycPqwUmy3GwBuYD9ktZkEMt3CgKow9QuNfbVCxshtNsSWcUvmr3TxxF6AeG8fUpnFJ4ULYZZ1HKy",
  "key43": "3QQrHgrVkfAviNTSzgY28X3gDSxFk6qo2k5ZdQLfK3hAwuwyQ1GPeKNMbqzfUKnNx2rUkJ7sZcaxtTQf5yTxspRW"
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
