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
    "271Y1gLB44HdFR3Zt9c7r1PMQERvGyftk7uMrEvX4DP38bscGv2u6Kwk5JCyg1HM4BUt9GUVGjb1frpHrP4tiyfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q4EUXtrVZZXbNeoHjyYVLPZHPF1FMDksSnTuMcHzLMbb2MZKccbZbBg7FXySxadu3bw9bQm2SQUS8MBgF82VzK1",
  "key1": "4KAC6asVLbG3wMKEYiDpig9eA9J1ykkz9b7sg8MF436ejy1oZe4LMcRq1YQtj9HYovVQNyEHpjsrKTtatCqutphg",
  "key2": "canyEiSSr6qEVYBVViXCJ3ksSoNAF2M9BKVZtFzurkuZorTf7GM3hV1FPVSyFSPWJshFaJKc49AUMQLF4uxb1rw",
  "key3": "5GQUpTt8YeTz5CfLBQbLA5QhrPyyeB64ctpRFcTGqy9Qfe6HkN6XUYMxonyXwNiPe1yyRMGn1nZ4b9kUV84pXSZH",
  "key4": "4L7rDVTnwHqYXgVqL26ufWpkC1tqizxaM6MHxC7649CBQ2i2T2QuJgzmZPfe6i17aPna7nfSYQ6GmbJRLDp2WBdh",
  "key5": "4fBAdDBk9n3Wk4JNd7mzShFASv7UyYvnRiiKFS3tMShB6iTw6SNJqdoa2XQmTeuMYWm8MRra7rY1SMEr5S9HLfwi",
  "key6": "MFYFaAuX25cBFBnK71uB7xJtmZ8rZ9Ssafw1AWaJN1VCf8D5F8SSH1HJo3AgnXp7sj9gqTsU62fWFjm4YdNPSP5",
  "key7": "zgzPHJ4KuTbay9X6eMe7ex2wBxQf11oQwYDjqH7xQDqwzP4SMEtdyVDANqS2tViaPRRWJH4mK2HAHPbWVVBDkme",
  "key8": "cbRTSfDdTLPzzTzC7B7vL1pCBu8GpVbSTiC8J8s8bqbDPymYYPz5x6zfwkvdPJwSCQikNc6wrcUEqu6kd93WuF9",
  "key9": "3mD35ZCShBJNd1dsD7RVqWbiYBvFqSbtoQf8RDvQhA1UwsuVwGznu4FFxnJg7WiDycWocDMxASdw9Pexq1ceaXdY",
  "key10": "2WYHZ4kdvWtpsy6bpw2PVxWCbN9M2MWUsELBuqFvNHH91RTvLBgkkmrdhvvs8oLj9Z92Mt2gRBDjqkEEdAdX1csP",
  "key11": "1YoC1VqULdrsEYX9zFoqw2qNtk9cjwMi1RwqvbhkeyNcUgDrYcGNPr1VvWyNLndU6xNR5CiNuqHcQY5miKHDJWa",
  "key12": "4ZH4xYKvrjFdwBbD1motnthet9jZPLbQfkw3PqhEHU7FuUj6kL9VcTvPThUz5ZFMMEaThQEnajFrdEtTtjpA3rhh",
  "key13": "2GknieC4QaqC7e5QkxEuddZcRFyTbXh32oLAzwj2G6UXHoigWRPtuCk5Kb8Gk3pSvAV5WonLARKQ9CtuQZRoNbu2",
  "key14": "2hSvaMwDu5soFDxaXKLELC3sq3SWz25BPNyCMBroiKvioV5Xqryk7KaxeMsSMjBg59vwHA5HsN1QA1yLg4rube7G",
  "key15": "YFtWCgWfFMfq3XkPp1Jmr6eRCgmYTshhNsXHqzwY3sAfPfK4R7PwsPgViUXm8mhAicnJF3xBV1VhvFfTJmcr6tr",
  "key16": "3tUgbc4zsV9PHruUnSKu1117k9m7tLhwJ5hUAnPcp2K7uaBRdcWsrpXkEn9h3hVmasaMxsngvNGAgPFgAoc8icf7",
  "key17": "2KqA7keSJHoFPP9fRbqThu6QFFDsaWKLAWesxiDjKxJqjP3cUwTXXZBUPNuBR9cFpR7TxVSBzNxSzy7h9xTRtcw2",
  "key18": "4PTakeF3fvJCQyroR2Vg9zyiHfcom5iK7FzCZ4j6vZtY43CaU2hsR37wZWfvSBjnC7YLf5ntzDkpD8BvQ4Pai2y1",
  "key19": "5ratjhYwoYCpndVpATjikxWjfnGWtthZiw19k6wYbrgA97KozhhVB2skCGifAaNTCZ4wUCvQgtr3uDjQ5E1g4Bgd",
  "key20": "3g4Nv7mhdNdPQ5t88dTYSbpHTK9Z87CrVGCuqupTSqPKBPLYk2uhviu8SGp7MVSGbCRvGjkn48Vhhqx7tu4duVRg",
  "key21": "37exQYatz2sym41p1GMKAqWTR6JWRFXqVntkmhnAKxrHACZLqgNV3TyzKwFg78CEHsNBWmb5dfyqF4B22MPCHB8k",
  "key22": "64vuvojSMsJxHHBZNb9EXfr4Yy2kCdBkprXL5RT3b9afdm4CdaRgjMZu1GbdiAQYbkWCmshF4EUstDETr7M3jso2",
  "key23": "2uJBTHJzJDD7ifysaKaSuwCd1S57KuL9DnyG75AzRWofGALMSbzwLWT1BeUXsAMeMUZ5sDTbsFsYWUyCU3HZtTYk",
  "key24": "4RNnb1oCFZcvDjkXLF8i6vV5GmB7qUbJ8hRGJg6ioFk88HxMGLShFM2KJVtZRysBGDKEWMwNPjBgFUSrfPbRKHaR",
  "key25": "3gsCpu8QPuq3p32tdEbcV3opUTofQtefkz1tZTka1gCnmEHg9DFEJj4pDGsdvBNMCRBxgfDFLjUofDfrPQEuWUSb",
  "key26": "2E3adnZvFmu9NsQUubLWsgsUbURCrvVLghDTWBEFbY3YHZrkJqxMrohCtUMzt1KznHGizQQd5zXMT6ZKX52wNHQ",
  "key27": "25vzLYXPXBHHbTvdDoM7enKbfzb9SPibs5FFQEQY47mecrYPyZbGTQu1RkWwPXgFAPNmHNJYRejVyJvh8Epi6pCZ",
  "key28": "3FPi5udHbQSgF44YYPBdZ7nK7VN8Zf4Shm1EpYZB7zsvJqgRFVpn51MzDqczcVzLGDfRjENZWUr4jYG1SgrUoBdF",
  "key29": "5wSaaSzHbvkRcLuXWkxQWt6GLkNmJHs9B8Hsy68Bzz5TxGfPUtr74UH7hrzMCZgcEXVX54zEv3pENqmujbr6vEzX",
  "key30": "5XLpvRn6KupKozPmKYFGB3FiN4vU5on2LvaLC24WS5Fy1GGMqHD7ZwDXvjGB2a4sxwVqL3MQ2QjEGsF1dzoVWqTR",
  "key31": "8GhebT2g7gWqFGfqKayX2JgmnRg3g7qPbXnvk3M43wDmXp3QqX5xTG6vxY9cPez1EFKt9F7S7VM8BLSkn3z47J8",
  "key32": "544A7xrX3eehsMa3Anezhb3S3VSca2iouAQAbAwvJe67zdDoWvKHQ3xwRsuScuhYpfjiHfVQzQtjihPKDyb85VGJ",
  "key33": "5gGaUwMBCSh81xtV3SYondNTioEEd49Hbz5pLi9WDoyDRiUdZbM7QkpktLYS3es5VgxSUWkUZm6RnK2vzTWFbcv8",
  "key34": "5h6gf6JNvMTWxzDYF6TLArqxQDKiWnsZqmEL6HgfGUJbrQ7BPQsyYDW7Lc4cVXaApVbZabux76X8NSaVQDGfvbHM",
  "key35": "2H8bXzzKiDexzrNikJouVTCZuTtoCY5cy51xka4CQPnvDEgvAUvLPUrM3YLQmHqDdSW7biUVgbDs7FhbCfEFU3B",
  "key36": "57FAMufqna23tstuBSKW3wJT7JzV6UpciQRjJBgoRtwziyEy81JftjrQb9P2EnSTG319yt9ideav8qCCw9b9yBtE",
  "key37": "23ouTu3TdoPyRkfU5BvAU11wqKbsZY3oN3jyA2ARUf5gYbHJnPTaMYFVw4pJyicqfnm8egFQsZbEGPynPZqLGZZW",
  "key38": "5ntSJg4q18ELyQ2w1REjaQeH6TjzGF4LfivLopPT6QcUgJePjLQPtcrP227F8wTyFDcGoFJvHLfV3S5E3sZniwwT",
  "key39": "462UpYD8kpJwNAEhHxLrpiTxdc11KTXHakzudY4vnAF3VMe6J1p5iRHM5yfczzPtN4QugR6PC77CePCZgaUDxJ8M",
  "key40": "5UQD7CfMK3K4FbnBywfcf25UVvvNrvuUH78AEVGkxLwqyVQQvs7esQLs4zk2V7dshAikRtZHRuuo5hzD915jzQWW",
  "key41": "w3w9x5z6XYyzfnn2KQqbsgYxyQ96iiRT5vujzAdKYErAeHQDgcPLFmAtint2nb4x5yopFUoGdFFpTWDMvyBXX2f",
  "key42": "B1jR3HgRTYDnaCTsd5Ti4qfqzxsYtg79YqRtBwjbgr1g2BshkUsJnJxUNMqmpXFHtA6AqvAvfx9i2w28ycu2syg",
  "key43": "2yySHHdKGgf6StZ7qViZD8ZAAiBVurKiG2Wzkd46r9rDUKvf3otyG26jMKKSKASxjQggXrzAhkwXXCN25VK3hvqP",
  "key44": "3AyuKDSH7cAag6ug9t9dfNEAvQUTCDLwDa1oWvdM7vge8WP8w1F73Hfd9jdT5S7sLeBoNcjsCAcGvehspSxuFJeh",
  "key45": "4nBaGpau4jySjsavgMLamEC4sW9oiFBQ8F8mUZhabuHuj3vj7PodNbGPFiMQhqAv2QK9T4BQjPJUxyHCsomT5Wh1",
  "key46": "3pn87d5kc7LR56xnTwuh89xHqN3ojDPVugd2jP3wsskUDvAZvM751m4K1qbKWpGxQK6GdmwqjFKz1t8imz6tGmE",
  "key47": "2AhJXybmYVU3Wi4nwPeossUHyMWn57jBWKGPzD5FDZaLZw99WfpMGBBezPEdPNWfHFtJsVX64EP4edFPcRwrHw2B"
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
