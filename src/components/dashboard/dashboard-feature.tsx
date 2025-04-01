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
    "uFF1X6Q6cgFGXcpmDu4AmxaGG75dc5kcAsVs4wmwAyfYKshJ6vZjRJBMkGYR1QyN5MdeM3ZkgrQmxRhe1jSShpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4zHGBwxLwKfUNdNPQJWRhBQAEL29YSw1TFCnt6ACyhaYQuAg1QLFRDthXZEZjNpj3zyZZRcfDpqJD5s8Mu7RC8",
  "key1": "5SyztSBULc5z5kCfjv7qxEktbYTYjKzFHmXexwVLZ1LK9VQnWrAa2WTYZg9vZf5wtqmdMzZrLFk546ovx4KjzLgX",
  "key2": "2S6ceFVpa1QwtMe6LUbSaWkXrM1T3AwT5n1xe5nVpzkaL8Epn6N1c3zacypspELzhk3bQvjTUziQJTiHvtBZ3G3U",
  "key3": "57qHACsSbgHG4cVGqPhMu2KZQMDg5Bd6hzGe2698sLF8j3XJUysbpyKbC3NqvybkZxmpCeNSkMAbQCqMiXczWwet",
  "key4": "3qx9LS2i5jvnSx7XCwEv6rp6mLDCnMMZfo7X3ijvcapMK37KMycXx5HSbYNsUvYTW2fv5C8ta4v328V4Cy1e5qcZ",
  "key5": "ECbT7aKUDyo7zsnCGcvMiFJdQgSkSnvfPHefSgR15NRMiKUU3gRE88F8E2B7rc387Jw1Xf7dCpEeZcZwnBXAW3A",
  "key6": "5Qfq6wsEToeprEVTRWZgVLgXQ2swK8UWZ27mCb5e6gfc8zNWy6BpaPYmprzuPA5F5JJgK5Jb1krs7doQUkvikiFx",
  "key7": "3FS58fkHdEKi9a1qv4dkBuHtMHD6HsxKRu2CBnSVvVXAuQp4ePVDgLy9jp5JXsxjdgE5YLYJ3So5NFjxJqiKoWot",
  "key8": "5ARgestQRgTDJqvL2Z2a8FDxC9YdVZH26vrzPa4ikpKzV9VBVv9vt8GytoFNqvNnfmnUdaWJm2wr45UXv4kxApSw",
  "key9": "5eWjQc3uzNVrdkCbzUoEebqDSHeb9FCQNjrNGe6VfPvvRCYLLA6E5DFVptq1va2Nrqbq678PxNTuaVvf7Y85jn5P",
  "key10": "2XN782q6vQXD6SWhyKK9vekiwDuwPQedvCAsGu86G6mwdrzSbexK5ESjD9aCA2RmMZr7VPZVGtfrnJM5ARVdLVjC",
  "key11": "398TXP877pnjjGj8geqTKdjSkLDTZKmbu4Cst5YNVP4aBt46Y3aFGvA2KfCnXxgvwAaoXsMtwKjBPEokixAwXzHd",
  "key12": "PQ3MHuyDVXSdgJ1Ftmea6FDdREkbjeqZyLKqjjausajCXM7cSqh2ANGaiLpSMB6g4Cv84uAq9BQyaATouBpepH6",
  "key13": "5qsvESgrabMsPh3FPUC1ACK6oH3KVASKPp4hpBRG5p9kFEAkjKv6DVyh9M6Q1vH7yXf9vPUppw6xiQzw4vZCAe6o",
  "key14": "4WXKBiCmh5ZGzpASohppqrzF6HgCnowVgRiT4fx8kQihmTj3ht3k72TYWf5UMKuiVx8om3m9wz8YzbgZ1e3KdFfj",
  "key15": "5g4KJKf1vmF2cYSieFxFZkZan78K2buGHi33NH8Yi9ZX4THPBZfWzwDh5rifyai9V2Rb65zbGFPapQCTcWqJBWUC",
  "key16": "41Jsjvkjp2cNV9ULtpam9Lr6WEqadKc2B1aeeu4Vuec5dFmjFUQ44gVoQEV1GSEfxJYy42Wu1PNfmmfGRiq4cpPP",
  "key17": "3GGyuTCtSqe9EfRoWy2wwJvSzMhvQ2Ln48vNN1LqnRsyXzXNBVvacZwBnAWvjDV5p8eBKU9igm25RJE5w4eb9Bvu",
  "key18": "KeF2vQPJBMTzxZnHCZiu1iZJiQKhz1TyE9YU4ZExQScqFCbsXEmombLtijd4zjdeQ4md3L3sfaUn9YFCxLzMJcV",
  "key19": "4BqpsSPRocp5D56VW4FwfRGJUxBf12nJoLhTZ5Y9NnvH2wJt6ixxoGinDeNVfPsWMzBGygETRtVxzQMa9GJCWnTT",
  "key20": "22TPP3gcWmiKmhQSTo3YEiR5EPWjAdGqHx3aWHTsadhkNpjK7knmpgRB3LN4kqoNepY7dpTvWxWHCi1ktEEQHWUx",
  "key21": "4HSAf87u5kPxaoojYLV95ktgUWnFJS38ZbdUCvg68M34ZYMeRpLhS7wk5XJ8UcamfKfqdxPHYoEeSAXoqwMviRDk",
  "key22": "jaeCgNF6gzdrMKF6C255awQxQnSjabkZgRLZ6Z2zYmvEXX2bKnb4jhvJxS89TcUsg6G95c8R5NNS9yxAPWoGPSH",
  "key23": "3BbrJdbfMwbKjzNwyFxVn4A7o8sKJdPowAD7oE58Pg8mk8QdSzjQ3qrdYXPJKwd2QYXqfUxHubcA2zG9bbbTygne",
  "key24": "3oWBDVgaYZzoR9MdpShbGztgDRmHDnpXx51up9L6Fo8RQUBs7Z4GkfiLmugLQD38WBa1M5TxhxbkgmS6XEckrb1f",
  "key25": "31KvtrVcCZcEyTWNvgMeRjSux4tqKyCNGVCtARKK3CWdXB4put3fwn13SsiRAddviFw72MZ5BqEFagKY1o1cNMPa",
  "key26": "4SrGSrruu3YtD8wRGY8MqRCTbGqgUJa1Ya1G9iS1rYJeGcPgwAsFdijU3w3e1izcLkxg47ECkHBwCV47xE92Yfht",
  "key27": "5Rj6c8YeNVT16PCKpCjrYJxrU641CWhy1z91AKrFUDL9peEJauaqujPzoykyRxjwUEQEebrfDD2GPNmfpaP2628a",
  "key28": "37zDDjpAh4K6XTxt9ev3wqcq43uoXHmVvojmndXwvu1bjiwzTZNtLhzXJWYfyQYgomuXTUA4r1p2h7SV3dsifVvm",
  "key29": "5teffTocQD7HzH9CGrQZyPyrSR6hKpAtScQBY8Tv12Kp82bL2P8iuV3ntCM7bwMVWTH81DakECrBNLHCkQBEyYz5",
  "key30": "32xq1Uh7VTnCuycdonDYKcUbd2PEgTCTKxBSPg7vAgyT7w13rLnVcP1WKvKfH8oE2iPGWRfAiXfv5zBGQBjRuM1B",
  "key31": "5PUTzrptaSijvDYyDvGLpj14xhJMcgbQGYs2wZ5HNqr8Yx3V8RFUsCZJ5mz7THnnTRYwhxsANfBei64cmvQK5N7d",
  "key32": "ETqn6GFNcsKj6LaFRYxQU5tw2pZefNT7QBxUhochh9pJnRxsmm1bJ4dyHMwzEtvJJiyDCNddS1YVhnZdFditz2n",
  "key33": "4ZDWhAZ7LtFvbe8sYb21xwnWGbJqjcUbqaSZ4dL4ENNEDAmKJ56BNm1K7RNdFEXizsbveq14GoazUtgQFPStHKsM",
  "key34": "2c1UkfKQAY9MnobftajHRCRnYs28azevvrNXLC5THLq9SWvxdY69sdxWeQWxhF95jAEzmMpFQPG8C8Hu6vbNfHJJ",
  "key35": "2FUuP5JVijJvRRuG3kejhhjvGB1wXeHe4jWUbbQHahdpvFCEy8ykfdTtdQV1HpBWcG7Uy1ad2DQTaykHVSLnUiCe",
  "key36": "349cYF5i6fB9JThp8rFWQ3SzT53totx6QWYaaj25RABqUzC9iUb1BviZjeZHUGjE9aoU9LrBWuRMd6QHkcFFKbTX",
  "key37": "3Nypp3E6fNiySHcEgHZ9oqwU1QYt6FZPPZKWRZU1UVGxLgcdnPTmMcBKipsb1f5DEG9NDn2orVj9KPc6Any8Qouj",
  "key38": "66t1V1RZrAoXaiWB2s7y7pNFRJHsNiG5TLSiVwWMAcayBtrYDt53kf5Jcymkp1kfp6pVjBUHGAxACziVQTJ6serk",
  "key39": "jGE85NGks3nE7evAbJYMN3tSXtLkKdC9ss2eJswNc8CwzcS8WhEBmsiZEN33Y3nBn92gBMKqkdh9YWGdbTjBeqs",
  "key40": "Loa4BCNKJNWoB7ZreFzUEbFnxJK73e8zHaez8eD53nDxMNTNknJ1bm7K1Cy98SjVz6srQ477kRx8AJDPmucoxiF",
  "key41": "66E7Q1YbH5hY31YKS8LCsFFYGjfxE8iVrn8mc1aBocWk1XVxNd1cAdReX6jcuVNN6iyHCwMsEvxJe4YaJYuPvnnm",
  "key42": "2qbkkDDNjg45ntbaofBqxP8xKKy21Rq1KNsDKze4YP7we85x2AT37v16CKDjDcwffQPsMWiQhWJnznXusnsA2wFp",
  "key43": "37aTLi2nYyaNe3qMH8eajzep5kHSjbpj4bepbNUbnd7tdAbyP9VCsHX8Bpc9pHgssaBAMk9yLezzcHbq5WUkAuGT",
  "key44": "4fEFFCPtHzZbppBTHYzTfEZJqLPKU5zYHkRjsPt9tzWnoBchSKWdT8BJ5TxqA7ymdQi6uHf2NbZGFZkaFcMABd7t",
  "key45": "4xdcWQiKEPxv4UZaRDteTfmr5GqRev63KFM353BVWVsFrMKRafQoAtYAyDyZWPJPP8YW9NEmQMr9nx5G2qfVPGx6",
  "key46": "2bQZoAzS4iG15eo7aUohp7VtiwkEBKEPbyUhv9NFP7zpFGAeFogCmtkq9cxak7mUsrZg3KhNEEoVz4nL56ZTwCGG",
  "key47": "2FP3pdw4SFccyuFPUjgjYKwpsbBqhsefZkXJNn2PPfdxqwW1ihT13WeFch6iFYvS21WbjN4GppTyXyTULybNwbJd",
  "key48": "4U9SDPPWFz7CR4Z3jv4uWqk6toyEmbPfw4wcQegCK3cEPZqLV1iUd8FUhC245vBDnJ2NUDP6QZrxC6VSsRnY9hzP",
  "key49": "3r2pakPRsAJq5Pf2ju1gbg9whqJDHhKhAg8UDJwigqWduVK9adCyno4P76F3fbtd1dLNc1kHyTsJySSu96pAgykD"
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
