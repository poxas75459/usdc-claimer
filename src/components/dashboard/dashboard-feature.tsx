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
    "345B9yJmWyBPTJcY6BqXefGtyBGuqcAsdUkQWM6866YB9gKeKXE5JftEdj75Mfb7DD4DjyCdDUBw4NjrWPuMEUBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wjt79vp4kVLhisznamFR6CpZbbytnLtHFHVhYMq2dPdGcx39ZAJb8DDxqs1UqJyZ7mkc2tELYQstRrNhJC4HuYL",
  "key1": "3GU37skREp2xK1qnLyS5YTi7p9BKCWk7keeJ2qoEwPLSCpF8qg4hsxUXJ7KNGVAM7rqSAP5ZpbT8KfXfqhXX7HnN",
  "key2": "2tkRiBXqWRjV25bRkuVXeuSTcgMtoNR3y8YaRg6eefASMFQdgYcXkEaQdZH1fMLsdccJXd63EZTQvfB8PfhJCX1c",
  "key3": "3FbMLXYLMkaMCDiJsHTjqcCHKdSnSBqLxNyTjRzbkBNFbsGUoHNpRryCfTqVTsMZKTLtYpnEGLojZYpqMdJCQBYV",
  "key4": "47cYthp2cuVSn9Yw8JpCdP1vAwVktvaFHEVg48qrQjyAKHzmoDzVTYW33gpvCbxN9CMkzXsjLJBRwMBVa6Smud9L",
  "key5": "4ETegT4VU8Ukhdvo2vzbtogMFbYex6wMEsgFVMu2TDRcTuTRfqWkumEXDke9sjA5zQgC6ZfUsFxmUj36ibmQF7VT",
  "key6": "2nE53VYk6eMxNFVgvwSK38x3nx4tZeEPqA7jofCKGQprk26fJQJJMft3z1Pk2ohEmUcQcQ96mEQwxBfkrMRs8AJF",
  "key7": "4WPfPrHMxuDPckse5UHZBuH3gGfQR9bhe2GpxLXfzsuFCHo6Xmxb8cGH7akQvDLTirn4ZnGLNCfP2T7yq7Anzs3z",
  "key8": "5DciMMXgvQbxeQfCrvh2cLuAJCGrPwLnoNVSnV46FVdKfha5zxnyyzhVhKVBZh5ydZ45EcDj1cPcPAKB7C6KkGgv",
  "key9": "45QcoMw8diG79EAo29A7nkbdgpZurreyMfakDHzq4HKbvGYaeLNVvTyEkx8xvHUD7wB9EuBEFP6BYJDFckXsWSHX",
  "key10": "5u5DJTQc4hpo7pLd8DosM9DstWAZFzGBu3PjwMCYxg5cxhtVcG9rFjof9A4R7hDX1X7kFa9Mh2fgsTYv7TsujJCp",
  "key11": "4gggsnHbUHB7fcEwm5UubM5kkgrvydiuvx4qPsHXpRARe3bcYs8Zgw5wKivaLQ28S6eC3vC6sTXx4abedu8U1XkG",
  "key12": "3qXn4SsegUYbCbQzfC1HR9SvUz1k6ppEeuzPb7t1SZRSashbe4p8EQbd4pFJn3JY3JXsVHYVJF4cFsSBn71eFcDM",
  "key13": "2CkiNY8fQdEuwfs7hqujdtJjHnPpusnRHbKY55wEd9pMxbif9iT93i2f3RA98noxeWqVCHxA57UHcdEViBHwjkNh",
  "key14": "4NLwZWh1HQ3X8NhNt6T2uPXu3gBeXFRor5aQN9j5YHYi2QGUTDvaUnAVEM2dRPeTXzi74AkhMRVsWjktcRsmEkCo",
  "key15": "3LQkTFUu627bp3c5Ef9Sf25Ej7ePYgs4UwgAuwHDxwKHc4BktczwyziFjjmsKeYmaZxVhpLgeyoJFMtRwVDWkmk8",
  "key16": "36sdCCrkSbFk1RyJi8VpFYrsuyF1ZsaTUBrFjxbQUMzLeGVdw12CBWC3ondM4tWFJPQScmciQzYifYjVkgFgcsK5",
  "key17": "59TZim7tdZ91WUZvx3th38ywT2yHKCPHXY3KqoCr2ZKdVUgP2E3cUhA3TGxneyau2VQsSmqjjXuKtukjgtzDJBA2",
  "key18": "4BKeh7g1iFqXouv9ugL1dF7Ay7P4XnaBZGbrembF8Um42oYXZsTuDbdSqAYwfZgKQUiSXmtsbXF9E571CveE6hq8",
  "key19": "2R2BnAv9qCR1o2yWAPuP3w7ez4w5ux1K25Qq4CiwKTEQLUi8U1Ukvuwkk2XpPGMprJ2h9TJNiaXU71qtLshLrLog",
  "key20": "5w5kjo4KGeXYrHDghUythGgtZ5SLRCpWqBdrMPKei536wVMGNUqKPfFfERVa6obpQsW8We1w9BmmFHgtZP3AorwC",
  "key21": "aa3dfF999EHG4UbbXAQ1A3eR5CEvUUhfgyXzoLq9Zh1krgxsV91DyCotjE3XYxubXEYoBNp3WVhuN3VFeC3AjM1",
  "key22": "pvi9B6A1TgZsPMtW9XrGdVmkxK2LhUir3c5tHRmBhDpsFqrRMwFcGqSvZiQSABjNTsbc6AYTHB1XfWBfEg5VZJ7",
  "key23": "5PXGhQ41UdHsFShAhw1DgTc4wRXArrYep4B6oRA7qpkKDYVov8KZeV1auLSuKDmyWRCpzxGQqZhhZ8xLZ1huEmWf",
  "key24": "3ETeCaNVhwwNmBJhq1s73Nu7YaGoyBC3to6zXt8hnPY8wgkJ86ipbynNHr66x8HYEi5Mt26usSQ8HDfSPtVAtHJr",
  "key25": "33DiHinAuVmo67ubgRqx5iNnS165xQFhwX9nYyhMvJpkftU2Xbfj8MsfKpLF9nUvd6XgXqRNvqbdPm3omKs7P4K8",
  "key26": "MhXPaj1fiD6LxEWTsiDV4DnQLihrhFmU7FQWKxtdfeWDqh52Y1Acu6tNrRfEgN2eQmKt7Y332bXfnfUMvecr5Hx",
  "key27": "4zinjRmj5APrsbcEi8bMu1DzcnVXvzyQJDsz88546BAqcSyow81WQ4GM2uXwp55bw4fQycY8UAVZwm1EmyA58CTm",
  "key28": "TMY8Tpu4beRdyRqceoG37H1RWvv4iFnRXjyi8cQdf2k5a8tPEYSVTja2u7Y6Zqc6sAgfzqa6hUHYXZVJHFccKCt",
  "key29": "3RE1N9Y3VvoMG5GCwQNJ8gzGbrnXfDDDrHNqCYXMSbc8GDGQUvaAuMe2Ux2adwcdKttjFfCNCkvinC6Ks5TEZKCH",
  "key30": "28itD1n4u43xau6XbtuGauMvzGBkoHXpVwyjdWn6CEmuUJyyU3DPeAqQAyu2f2j3UziTiBBKvKuuK7dZk8ajToc1",
  "key31": "43SZ9GGh3YgnehYA29UNpSZNURqfnHgKuYxYNGh5YucZyxsriYoDP5WFB1F168mWbg4xb8Sn7PwAap2HbXgibkU4",
  "key32": "3K6pipFEVk4emp6RTpt4P9c7rhqLXHHyNwHY76kd2fDt4cpPCNkzG8V4mJaNEDhdCzckfoNcCy45KPZZrdZrUwhL",
  "key33": "4rmrVss5G7ZjD9LuKA4Dt3fW67JTjtfxTtxWCqtyMDBHp2tsMayeDeyBRAYTopGuXZq4dttDSoqRmGRc7qSzz1Ja",
  "key34": "Qkfsp5dpyktukd2GvYyN2MXjGGnZdvQVAnUrdMVK5R5uGRJU6jkTCvjLm73ifeJgZjxv72bQXAeWCaFZRJZYd37",
  "key35": "2zAAjThMLd4AtQFA8uNhwsJc1pAYhgjQuoitmyWLa3LsXh3EsLbQ4Xp65THbL7Kz498wiK9eU3oBYPzSa3HRpzjB",
  "key36": "2kKy8XkVZaKUfxqJaqnrfjKRULsXoSwedwzerq3TYdrLGYoj2wEKeH4HcLLgnJ4WX49XnvT3sDe8s76dZEjNjpyY",
  "key37": "5moLtipAkxYVKasbnqcYNpYPB74WLUkApiMk2gCnT9xyjtdHZecMNaiUXDVFJLaPYFG6v9nNxaREazRP2AFSqpWF",
  "key38": "4TFrdczqQaEMkvLXJnc4N7WCoiFstqBbRasUZKSCf8abduV9Zc16pdQCdAxAVU7h4z2DJfp8RFbcGXTCRbcdYaxJ"
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
