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
    "2u6vZeiBiMS8oXMFvL1F1H3WzGQeumoQu57CQcLf6dtGnyECiPT2R8sXVi9GkU4AeMwQ9mFFp9WjPLjxrUKHSvoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62UTew4YVLCjCZ3kFgUxtrNCvbL4FYP9UtWEgUNwhgHPkF9yAEZHHPw4kK5HxxNVdK42Bs2RnB8ifP1x26pwENhb",
  "key1": "XZgjB4FG1eoa5aDSbbisuWe9tA3ckcp5yossdGUbxXzufWVcmND6VroNnMugcwdV1WN2Cq4uhNHrt7P63pHpfHT",
  "key2": "3eDwitVWFVnYLpEE59P3qMd35AwcW1RGGEDYwY4ipTUXrpoYw2UMeghvcnp1EQTbDmXfJ7xg6YVqx9MfCTnLxy2i",
  "key3": "VLPFzAvi5tMq25xPesQrZtyyKGwfFo6VgLhULTg9hFpTxhkfr3c6B3SH9qszqmrhhrt5P6g4UKYwVHsD71BPMyE",
  "key4": "5hPiiog8iPyoSiTeDkHD9M9jW8f4gCgEfwGGaQEw817ijZqCP479yLVPVvjjwcfBspvvAFk3oAp8ejpPQXTLD8gB",
  "key5": "5Y1F2f6onq5WfXBjhrzKvnJqvbdi8275L17caKousN4CNtzZyien85KoiJ2aWUEiKcQyEmPgcbn89GRHyhox9fJm",
  "key6": "ypWwVpZuvVj54b98CXknSLAaGuqNfNT1GeFTTALY1vUw4oezgPpmNRdWUUu3XF8UuyuffhwH6ShZmyaCfKQUSeQ",
  "key7": "5s1DkSPktfnvQ1Jsuv1475HdzQNrmyHGwdsKZqQKpDzE62siXsbLDkEuS8rvQkDXKpLSWiJegfFpGHrB31ofnAaV",
  "key8": "4BQPSSEXJtoUXegbMSWCt8HJhmUNmLZZx9QbYfMJEJrQVUW6mbeTms9S2S125q2oKff81BMfyFTVdz6SMhMsvWp8",
  "key9": "3MX2gdVEbwGqsnJL1TPjRV5QD29mrazqEs224xA8EmNeCDMWhYCZEn3MKek5APzm4EwiMAweXuPcWrZSFU3jcTpt",
  "key10": "25rtqs3adzkr24E2CFdhcJFSvuZob3zuRQVFGKsD6XX92GqQ79bypeoGCYXRqTzJvhGFpJDKytH4N2X1JFnv4f6T",
  "key11": "64kZv9p6GBYrEP1bP9DRA7yvoTpbVkA2nCk1sY5UciV2dfKVE3boYtSsG2g5Kfg64u9h5emiQ6gmknBnVvzhzUiR",
  "key12": "66w7Lv3EizX3Soz2D31MVUuhq1nf9msr13UmK229TZz1NBGcbN7fVGYhoBfaXFY2xdT65Xj8WeMTakAe5uzKMraZ",
  "key13": "2gdCg6U4JHXsox6cYJhdKNvMxCDBtSKBC4SUv6eEDdXMQcxQRfvGt6Zyjn81VMNM3cEXzXMzhq4cbBa7QtogmTpa",
  "key14": "3x2pSn9kfiLmwx4jzJRymXZEnsAfUkPtRF2WSiriiwdXNDsN7YG5jW1T2xamwgdmStu2y1Drj5373pb2MjwUBbMw",
  "key15": "2FRYzh3UGhU5GaF7LQgFyAdp4AzY17ZapZnmzvbxoCvJbScL94GD7XEEN4chVHbXgCgWvnpkobdEfdCqmGZCV2MM",
  "key16": "5EzkntkszqU4BzerZUPHgrjNN1ug64x6tFXv7bVuyhAL12x1A1AzHDNuknDkm8kiwnBfrBqSgBkC9jc97KZ2Jfwr",
  "key17": "495KsZPRKW4ot9vmLKoqjr51oLFi5vQJAbgq2qdwcwaknfpg2zEUdKGDrJgzwVqqmpynNdtSpNy3nhc2Fkd9ZKGL",
  "key18": "4ZbRjQnQ1ToxF11k1nswmyWGGy5Tk8fHNpaRwJMr3VUoUgYWFbYkqaHRvsEVz28qPmT64dYJuhpQ5t1zV7LQmhE4",
  "key19": "3PHPh5n3tGzA4FAnZHwuuHHtocuHMJrvhkHscvKwDgLcJ2gb8sSW28Mrehe8WjMDZij2BgMEh5RLXLUrPty2yp45",
  "key20": "2j4JQNsczu3gV3BvngNmAzYbS3FH6b3Eb1FQYvW3rhS3yrJ2J5fFUD8AH1SfXSKMidejxZhp93ssMCPLokm9YXV7",
  "key21": "4nqcnuYuRox4MbByx4LrA1G1zhr2RhxRECgvcMgeGQkotHsmi6rnSRPzgU4uy7cMXAsSQfC44x5sHsiRuEccDMSf",
  "key22": "WKmAUF6pmYZq25WPcSM7cM7HGfcFa7yfq7WxzB6wd63vPMXA249nsJs2remxUBzUxwAVxx3MhQUSZmxuinA2hv1",
  "key23": "3sYy7NB73CQ1Jaetx3jemoaSALQRwcnrevkycU7pQyJThFk8QFqgyVJy5gqmgNNnUx1dvgGSrNkw4WrxUuStmWbV",
  "key24": "5gKykYELgUCCEASZUtYYirUUpW97rqJgG6tNa5ZyMkKrV62HbuyCtYfDvbCy7YBr3G9wrvCk8YG1MZtfLr5X3iE2",
  "key25": "3ZW4ogrrHAdeETBd2461fVMMWcGg8WF5MMtxN4rUWMEVCkgJVbk2UZdyxbF9Ry49jCZvDqBy4qfTbQPAfG4zZbUQ",
  "key26": "3JdrwbqTLzwe2kNHkPtYwcruBdYTZzP4J5JJhxED3tFdamW54sQ3KtsrtceoNVqKwbF4EywjCrMMy59ESqoYnHmD",
  "key27": "2i1rTpHFrCvvwsYtEyvu7LZ6NfqRs8uJBxkBzWBYE6MDLkiK9p5dJf32ioAAoG7i4CYJzNWcNQm6dZPzWgd4nXYs",
  "key28": "3XNRojEbHUtQLzgrTiy7Gq5fXZ489z1v21JYTECQNUHUpZ4s3vm1QUuxyimnuTBp6sfvWGG52ZMUejYSBS1nqEUz",
  "key29": "5zEZATqDmg8SFxtJyzaZziWMH4hvC4F798EnmAxtYgbeuKjp4aXSDUm1b7EcXyEa47JgULgghzkVJcd7ysi2jevg",
  "key30": "4pvCiPbupXXreqnoRd8oVHxM9tRbiAv7vyiJ6BFxSHHq8aVjZjuWdcfMbZgCEScJJcB44JDVWKEYFZpebAqXbscQ",
  "key31": "3qo1YPDL4P6pX7antDeEJMn3iKkxgedwxQigePhpuKgTqwfE4ywer1Zem37xVHFwEiarXnDGZDm25ihN9nWyz92N",
  "key32": "2iKJmFQiwH7Udew7eh2A4qD4X4iEXjSsMAWuL7MobWZvPaNqs1adLDtRfKr3z3STzMk1Z6MEWtx4DVFNCTeeHauv",
  "key33": "2bVCUxjgwKYeUPPLK3WNvmECbgCwabwoYkGLHywWzHmqiEm13tpFtmGZYETEogcwQJLg9DZwwtoRYgdExUYu6ixf",
  "key34": "56Xv7wPhFh4oaGcBoBmmgRyffXV9WfZJfLAzRrn8tVjeu1sVZwRKXE9hTZrjsJpDffDhqFiiM2vbQ4NPH4sBgy39",
  "key35": "4L8bgkpM7EfHvU1yEaU8GfPbquKPXLJTPPgFXtQMwwmETeyJRB4Bq2s1gW2yomUxZZVbr92q94DEdBgmLe3J9vsu",
  "key36": "4bTDoxEioqeLetXd75kFypBQnXmxYpckmXE5tySBEY1XXXr9a37QfoCM8XXhCXZUBjjR6DbiTBLtt4tjv52s5fXw",
  "key37": "2ZqHGSoUc7hWav1XhBjLhDAp8Zo4EsHSgbiYwfBGcP7DTpeEo6JxSbWt6txDeRgWDo7XazBnHGvcvCUC7dsvTYEj",
  "key38": "2eL4Hm3Lmop7qj5b9uEpEVwD71a7vPJ8Z4YFUfxkTfFHWdnUv8RRUGstCKfbQw5sDhe1n8WcSXvr6Wu9WEWgPNqL",
  "key39": "2v1T7CEy3UE35tpBMy7WKcHRh6LMrGmGQLyrjcuUspBFUkoHE6A8yAx8eGtboJLDcXbruHbRU5Rp8ph56EHtS7sN",
  "key40": "Kvj8N55hX9orbZisGjHew9Z9UAHc1g1qFKGW172VVmDDje88hskkEKLk13Sz4mVp4k3pvS8RhHbTrCJpDMiCKZz",
  "key41": "5idZbkKWKeMwkGJPjFxnUB2ywf2pi7k2uBURk1pMJX6YRY239YA8NvMNvnkqwjkng1URWssFpfrxXqTEMpxdTrJK",
  "key42": "48YZf23rYi42StgxTZsK96cnVAg6z4J6tLM8swhu1rBgRgTrHrwz3ZH9SDod4yp2WtKCV7aYLevvjjtGTcErtVJS",
  "key43": "5aqP9TkTs9ZpDntvqsZChtAu5rW9VbrF5pJGnbWVNnzzCquzrW6UaFpQbsSJmXy8zNM98GhstnfEzAjwJNzSrARa",
  "key44": "efXqWZ7J8SUrRVqDmLCfddCsKV73ej6p8HzCeSxJ6W5ivLFF31DcDGmM4Kszg2UMb91KhkodBMpBW7VVWnrTT9Y"
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
