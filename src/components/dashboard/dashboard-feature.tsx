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
    "2LYQoNJFntZaqoBS8WgfpW2davaoud4jNd5NgtkAe44xjzdJumZkwgqqQ4hFomGQQafFFHAM9yFaFffqNhitQWKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iHBpAn45xufZRSQmyw1Bq6TZAHgj3a1n7SwAVgL6a3ZjBKGPqLTtLXcTJrMW8JecydY4VHPxzh9o8cAdb8MWn6H",
  "key1": "2U8R4R54wLxmz68tkaAf6NandT4Vxv3yYdrE8GHcuetrvBKgvBTqHSLqzC81y3SsFL45SdSjWxR1geQq1H2GC75t",
  "key2": "pF6aHosd6T5w46kcSBtT8TsZFnFKyYWkK1PgazzQEBUE8NKjrqvQaRXDnwDYdqh94LMgvoPSGCr5YBq9UDtB3jd",
  "key3": "b5su8SjJSq69eREw4zGq6jLs8Wiwrh6q8qnVBjpCQJU9gVmsP8ApVUcHCU3MeDGBtt2fXkgkzUvtU3vjm59KufQ",
  "key4": "5rZcGnixwuCVsH1Ahn5tU6V1JSNtiQ2mJkn2exK4vhJqg86DSzvnW2EMRyvqia8XxAx3v6xqqpuGQo19f8oSm9qh",
  "key5": "5sEiJ6NLnZwo3AKsS5FxBTA25bE5VsrFXmacXDHBFHkY2WPWTyBoC3jdnwYJKLxwqh33A2vNPmDc7sMp3jVb2K6y",
  "key6": "5LuwQkVX463cNNpefmJeU4XT7d2BbKbBS5qNgNdxngUDYHrcu87kmpbjWZirX3PDp8VVZ3NntdQJUR1zaAAtLXbR",
  "key7": "2mMQNpboepbMuu88D6e4tDrmLUY5KB9Dmc1HpBhKtRgTo7ZS6MchKTUT9K8FKF1P2P3ikf18VWwMM3uRAtK6aTmY",
  "key8": "ZM28NMmNaVJbh6x5tn7ThD8RacemCR5qtrdHdk6CSGR85PYYC14ksKxvW7pg9Lo3F3RhweRmjCxsNX2ypkVpwZJ",
  "key9": "pQJ6xeqmnWs8KVDJ6zewo8JF1Lq1bhS9UYG5rjcmvecEwraDwT8zTaRk4s7QQzQjcZRhPTyXNfqzAG6pBJiSnNR",
  "key10": "4xbHou68xQS91da9R9FtMH1TqEfMoXcxv3JkwV4HAr4izWcHLEvmRoQfivkF2fs7reJjr3vDxQdpbpF5v1psWT7V",
  "key11": "28DhZeH68scdLp5e3qgjdt6NbSe4RzcTnV79hCGPCYZmh3gZpaYfUiTMwPYfJR6xrC13k2dWTvMMKtzwrJETT2k1",
  "key12": "3wcehYzcYRYf61xKgbT8Hm7CiGmBrQeBpQxdMGxEsqjgm5esA6hxraPbfybSW1BxkZdtaqj5Y3ZKkdzbYqsFFmgz",
  "key13": "4Q1outbKXErJrVGwKbbPFuYoeCGxDz5ky8Yo7GacFm98FMWRu6uFX8cwZ28rDGFmv22wpdZSYsGHKiVe1g9BFFGf",
  "key14": "468uqSqHkgiqyH88zjFy8UZGMuLvbgqrqqXbNUGR9g9azHt9na76ymAhjvHgzV9x8tEiwQTZJrUrPoQxnsWxqCaf",
  "key15": "o7ECW2AbKsr1Q15bDEknRZLi9eXjVU1AqJSo8oewjESksyfTqF2TE2hnbwxdyekFPbBZ5NJaoyrWa5nc1jUAShb",
  "key16": "4YZ59M4U5DUF9De762eqMjVgTzoEfBZWezXE2c7vsvbXLXz9CPV8JvnVH5eWruZpVViqQhmFRaWqAZtnFskK7Ktn",
  "key17": "4EZhB6P4aFPMkuKzBijAQ1iQLZvEq56gak9ZsxmMtia5TczAXfbMU5sqBnEsGL9FgsdxFwPKz3NSTas2Ye2vVVAM",
  "key18": "5K28f5NvLiU3pnWqAwfNPmEBn9q4wtMxzrpY7WDf9y7HdxVeuUj6UjB1W6BDyTm5yt2wUWWZDCkKTn2LtSAjkLMY",
  "key19": "2nHMUVMFTmiSqGz8XKCSt5vr6wzDgQU3rGxUVSyGCsPkBfYgvTFAK9NchVR54xtByiwfxPJrtb1V3sPG4cRfQdbc",
  "key20": "8sXQoayoBCnCtQ1HwQ4X6a1PESmeY3ZyZ31aRP3hDgLaYBhW2pcEzpDKaabNSrM8CrYkNnGqShzogKe6UAb4W5C",
  "key21": "3j49SaHxjcrCNY917r7JMu3TboEPqU3BqoZo1UqNmvbztqhQqpdcH26wU7KDtFeu54aA1zViFW717f8dEam6tteE",
  "key22": "3NPcdjS5zZuqiJWRigvBe74xHixb9Xh5tPmfcjnNKBcpibn58tCeLM6JK4zzU8Ge1aVYvPSNiFi8dZptS1wkVV3g",
  "key23": "5GJmbar2x4PpzWtfjTAstGPYSgEr9BoQjVdrbmMCvbBsRwm9c6gUwmkZvQ1p9jSx88gErdBLpLYifURqF48Z3Wov",
  "key24": "aR6NAkMGDb5SbhFpxECyPvtYD4k7gBwL8kqHuRfpg9aCtqwnkGGhqmjXgVEgCkAyyknR8TuoBM7hnPMq8ACctvn",
  "key25": "EenkoghufYpXeG964KQxeYpKCrExqzPgR1snRF5DkVstiV8rB5A6JtbgmqwvVVHCArfeiqpFSB1Bnh1PVfqF1qx",
  "key26": "4DJDSLP2DMKFsspRt9brHji9H9NQFyzb8E5JtRf7BR6XuPuVPSfa9YCiFUUc1L6rQBZW4DoV2SmTWrza9Dy8oYoN",
  "key27": "DdbqZ586jjXuUvgfhT1vLtXpZu7s4ywqQKmmoh1UVmKbphGEHyKBR7Z2kdH2Vu7jxvKsDr18CRVeG35axA18JoL",
  "key28": "5deh63LKnvt1oqUgnutptNYbvNVJb6ZEYjBwEeSPWWENHnj7yBs8HFyTucu2wjbW2HcgrMhoZayQSqaj1WiCpubF",
  "key29": "5P4U7zF2XRjwaCYM2eqXN8NRSrLDPvoQxcqppmutdNceDXn795hr77w3uVAKFHsDsPbXsUsxkdttpq81NoHvKLaT",
  "key30": "4nm82GKWH9JD618MRk6SXExkKt5RgJxCbkQZKuvj33ZZ4jiPAFx48gVkWqFuXCfHg8RgZew1jWcXaoKZsVAT1sd8",
  "key31": "4yMfstQicXsqRBai3i64qdQoHLJpmFTBTnF2KGqVqv1vak7RteGwfxrUrZxmyof177zPqHuC9o7f7zQNRRPXnFNn",
  "key32": "63kBVRp3RMZdQEuYxs4pw7o9TpKj6sZevEph1qCaR6dwQCzoiJYHB33NpqnEKfH3w1BsSw8NkwAF83f4Ni9wGFxc",
  "key33": "2Rb9GPQK31aQdzgVc8z2LrgY8CTokA9x5KvuJ1bV7gYSH8V15MCxKd56jDTWgR2VH7AJQRK8eSufTEpKCnK5av4",
  "key34": "eXexts6j289txj2UzmYCBrPr9hWGXVibNZWVVhbgLFhQLNynFrWDNR6RsYLfMuxkBtNiCL7yZWA6jakWTwmvszZ",
  "key35": "54aMpbJv5A71Xz9U8zhoeFeKqmS5wQ87f7c5nZKoWu1UsX453HCGss2ATdx4HdJeZ4afgUhLURbFJNPD6weenQe3",
  "key36": "3g6KtYtZsCRfbNhmKTtpgJezFS3zJV6weoSFRksZpbEi6ZwdFoky2ECGBKrt2mPSkWCzLQ1szHq98tWdbVYErDD1",
  "key37": "4cJVPMTbyntK9khWieD6kNw2YAbfqLiuEQKG8ZhaqA93msXK6PJYvNUoJzBn1Ymssc1BLm5M1ZyiTF7tc71CTmsH",
  "key38": "126nKpG9isr4kM4v22AziPS6VWe5mmDmB9MvD8ZNsUqXL7fL6FxPi2uZFkJVycbqxpiomTnF5g2uUpddCqRfrS9k",
  "key39": "41Xds5aj2Z6XU1URAoSjfbdjbMjMoiNDnx8yTZ9hEZJyfDgMZK7L4dY3MohfTerW5QNk4cefAzxvVzh8VZDrcm5g",
  "key40": "26Z2oQ3RCdRMocgb5SPVEC27Twfw4C2MuZBDjoUavGJMEEWPsn2fW8bua2u2j5rcRsNfJpEG77jruAJTX6bWfqw7",
  "key41": "3Dn4rTG2CHy8W29oBui9dbagTgAN6Wxk5PobtuFJQnrJTpLRNuBY6DZ5rVagsH6Af9zC3mDSmergzMJ4kgr1tHfA",
  "key42": "4gwGk4bE44ke7p12p2EwVY4hZqGGwkBdcS1ZD3MUzqGiAnXEA9N1tuqei5ZpbFhN9BNJJmZ6SsjZfPv1B4nxweHc",
  "key43": "3nqkshpHQqRxg5NpMAWXdDkq9QenH8XA54KpTjFhfzozmSLfBZ4Vdkvv9B4u39cCqEnWm6czzdXqMKbovnKGCruY",
  "key44": "4feRqBHrb55ikAsSUc3rPpynCjihcSJvSCSngKk3doDUH8pkxMmNdRnGJhbmSRR5WFsyyEXLncPD4uUbQKJruQ2j",
  "key45": "3nXsnnwqjyFo7S3PNA7EtBnuU2D8gXjbDmWby82K7PdtCoXzPTyCKRLjAyTBQkTqRG54Ge8r9LXqmznGU9Lxfhyp",
  "key46": "2ZA8ZgNvLyT16bZVUdaW1VvZ9XuzJXu6bFeoBM5f2CT6AWtqseU9nhHBoxR3ca3ooBuL2ysywhqN2Df3E7jo7TEK"
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
