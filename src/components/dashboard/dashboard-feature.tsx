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
    "4PE296EpqXRLDpnHxd7dPbyusjavthYiUGR27PwirvViH2vmdXUhLViLU4LnT42o2PUzboohEB18Kjf7TYaNzRhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HN5oTUXbjjTJLcHCsUiz9sbuLGJx7DEDf2gHkEUzTSmfaSuWrE2CbwWSm7H2ScBkyEuJBh678aVjCa7xh3JMYEQ",
  "key1": "2mPsENDZc9JKz8GGed6TbKZPcTJcmbDSjhP8pcL6dJbuxuvW1WNfowmHAymyCykDbY2BAGWij7kUacagoRnb2aDX",
  "key2": "3v4X5TRuWpZxuuYugBX315qQ7cGznmHVt8rv3p2kq6ony8sxuJEt3MpCRZkiBCiHC5AyrR3o5bprcw4oMKntCdMJ",
  "key3": "4XvR68s5M1dPwNi6MCY562BTxhWkkis3Ko7L5rzo99ia1LTC98ujBC1hpqPea4ruVgdiEr9nTkkk4gx5xqvcZfyp",
  "key4": "39vWqFaS9RGjcC6Mk7zdgr9dcGVd2Nipd3RGVC39tNMHCSKC9rEhae1rqc3KHmkmCuJY6aW7e765Gpk9QbMFyDQ5",
  "key5": "5wAwhzvRFJTYU3AaAw667iWYxwuRkK1UjCgBxtnWLBywkPmyvFpFY4kowsL6ySuiFSuYrBkDmwYAew69EGyXGzfj",
  "key6": "32BaSkauGGQExPwXJgQWbNVJjd6s62MNpZB9KTKrbxiM87Fph82RjbyjeP6CVuy6gni4gurfo8mdJhVhRkirjRn9",
  "key7": "5xKpcKARg5Q2DMswchPKTASRsmgetHkDgQyVzS4PcZFZXQDo8GbABe8H221ZBxSyZynMGkERoN8HjnwogQaREMEM",
  "key8": "w1Y6F5soeK5fjYFDWU4c5YQvgFuq7z4etBWq4qBs77uN9hZuJfjXe3keY9UhrswiGFbPZcMtdq3qJTWok7wh12k",
  "key9": "5fPUhjuoiyMntwLRa63sCAtPppexcGGcseRBw8SApW6y12Bbi3qghijfeF7mqw7sfkERhAKmcU8AmbnpJdrrquLU",
  "key10": "46UJQatjnhCkSoVdCe8GVHMZtVCC82Mz9StrWDWs5yDryBboJSotAUw1SbinFro8EBnRFnTowKYgxJBKhMAk9QPj",
  "key11": "2RUdSE2QKi8Xv3edMna6wsjC1grcimvtuCPhKwNXhnn9iGdxEf1SWfB19bacNAWCYcKizLo8tTcS1bGECmFjeSFT",
  "key12": "5s4vwPKrXzpBs5EvvhKqpuryaHir3XjHx3qm2N2Su3yjzW2Z3TqXNCdjgiBvT1kN9H7Ers2g9i723ULTCDh3yGp8",
  "key13": "4ofw7ik1PAd1NdtzZhQ4URmPvpdpheNab1o4Vmtym7PL49DR4YcxhTXevG8ia9HH9zq1u3okZbENGmyD8XhusxFi",
  "key14": "2cdg3fzpn2c4Xn9ErjimWAb3NbFUieACnJyYT8XFboHxWwCkDgqJSSms3r3qcNzYre2FzpABsCoqq5Xb73orFzz",
  "key15": "4HUiemn2W29LUVZmJUFKgVqtjP3g4EJtK9iuZYbB8ek2qourA1N4bUVb165Htojb8J353Kkz3iPe1NgXXN4nHkTp",
  "key16": "3CdqhS1T1qixfApcBrMLnyx6GMoibfdNr9frQz97o6M38dJ2bZPEWPTPRmkBcUPYq6cUPh7UARV92fiwnjyev7St",
  "key17": "4xVoTbaXr9MHyMvynY8mSsnszY15s9aiWSoz8SAuy7qmvSnHe7GKtNhkjrKmgsLtPCM3Anjo1ZrD5PuSQLJ7oVPi",
  "key18": "WqxUnGxD5rgimoVMTadotaJGg75GuCJkvwJ6DosnqRWAxgBSY3oYoeCjEJ7sriEd8GK65GEn5EzhZ2YD24vP7eJ",
  "key19": "2fERZzcLgEihDmbdzkP18Yj3T85Vdj4X5aVTUtwJk3u3P2VR161Zx1psWKervEwRRcXkNsGsP5j5a1jNwh3crmRA",
  "key20": "3ne5qmPAM2dkRVLtSxhhdwSrsafZWNeccecKtt3PesCu6ArU5vmpezLuo8cVeKyfoDZzAWpC4wSDUtexAcz6GqW7",
  "key21": "3cFQXnAvJ21CEiumt1jPC8RyhfQJdaBunspF6unDH2mVJZBvJWHdNN1PmGrf9G5KdjgvR8w5i6D8u8Yrp5s3ep2G",
  "key22": "5eSvX2DuMrHrW2qofqs3HrYK1omFLHNWUaK5msVc44TBtreNyLVYCABqkXiU8xx5THtvX5voPBooS9LhC6LhC9z9",
  "key23": "45q2e2YcUAFkJgkdnFZf9pqU2EWgFtdMPhN3camcPmpDUgXadsYq98rmwmXYL4z7DxFBscjb776HarjWbLErghbS",
  "key24": "mrdcbaiNiaJXig7HNHRiBQBbtLdTf9ad1zNUWvxiXiqHxX2CRuhWKY7RCR2dhnze6rHwVP7KZeHJj9Q6bC11KPv",
  "key25": "23SbKjQFCf2rpUvE9ApQhFCZtH68haiL4Z1sY4QTP7d1vikFdYbN9SnBGpcuvUZnXWuMPw4KHGDjekNQCqAqsErb",
  "key26": "2hWD4m6zZkMLyVLWfQucScYPJBjw7j9U9n3X8b9mJ4xaXVCSJxJmhKZmQdksz5tNdJCumiPmVeaRMVUBSvwgZv9o",
  "key27": "5cpNH56L3hii2CzkQ4ENWTLYYP2bu9czKUciGhVxrfT62hih535pYrqocDUzVTuHjghcPoEF7KBHFnDNfNcthaMA",
  "key28": "3p6Gpj3WMNLhMq9VzTJUSkqyv6RvWj7AzgcdAV4XK6mcuXA5bdJTRgEdw4b7MYgJvDxh7KqaRALW6GYaRLUa5Sq7",
  "key29": "3YWE2v3YocsQmnZjnVVxGRUjVJP5YXehZGzBSdZNM9vwNuLk6LpQ3AxaCSJZJvEDWV2LBaY2gJ3g3YRzZEztdVp5",
  "key30": "2MatCmuTwG5TbXCibVEakYftSNswSVZ5okwJMF8Ngt2jDtpTxDUvFb473gvxwy61DDNUCPosupLuQurs1REFn5a",
  "key31": "4YmtAZ7Co4cMeKbrPs2bktCkaWpXA6NyMrqYsZ7JGc2wsWHqTP7KPGMDz2UXciQJNoxdJXM6DmTPgWzkKqmA292u",
  "key32": "2e3aTzZBDUM3AWykaisD6uVkfev9W2E7Uf4AkPUJznWxwyVhrLTrgCB3rwHsayNcnbshxXUQyqaRhLQwhnrsjANo",
  "key33": "3CBMYnoUawr8i3AWRhSUYV5pP9xfe5bWYZAKYqwmD4LJqQbigZWuTUvq8d2G1kvJUzowpEg9FEmNVWVJsT53DFc8",
  "key34": "5tNosM51AQwpX7RSwvgZxRi8PYXkRComXiWb4yaxCk5JXMKeu57qTrxSfbptpovJJnBwmtdPdjTZhsoEkgi1fCen",
  "key35": "38JbxXE93Fe3SkN4owcpCxS5QrHXFCgx8Fn5YcHhSN75SuNz2Z7Dr5UXoKt3Q8F7VkPCXaWjaHTneVd5Fa1trhHT",
  "key36": "441hLsfc7MsKMq8fjh3gXGTePBDhVZ2zFx4rxc7avHVF41CuWkRSudjgbeofxX3NuNrjBtfqzg7feEPdiEyHBkQp",
  "key37": "2mH6Xd1K5mKZC1KPQkVrecBxAWBU348EY5D4cs73bFWVaAoF2uz1AdrY3QJoyAPgePvnNGpcEoRfpGDeeMH8nYBg",
  "key38": "4ziqtKcuyMcxkfKx8mpgZQxruGx3xN8qoarUGko75EJYF1mjigNvAu7aZwx32q8C5g6vrHFPwzN6AdnNrghhorit",
  "key39": "2NeKafEfRr177E7kEX4jcG3vpe3Qyj6pFtuhqZorEvvEtK35i9LtRseYmWokqMeh9sBLB8dEJHzJMtcTstweBDWw",
  "key40": "4X7p7bwWFBao6haBR2zFpkVav2d85T4f7ePKpQeTcR8AKgNnLkurmXWiSM5WbDzyxmntwhQU98mrg1CbNd4URwWX",
  "key41": "2G2oop8j3TzaQXVUhjevfiNbKZJHeaVTM3uqJyEPvXFxff9F3S7beKZGX3pRZ7GBbdYbFQkQHkZL5BdFB1gGVxCH",
  "key42": "4hj6EBLdLrq1BwZG4qnCYu6BGuEo2SG3WmqphosUBRQhYrvo4z9WZJxvimbFAtMCWNtHvFHZAuqWuXVUxBGJybWi",
  "key43": "317zcRMwtARXS3kbmAZpmjjvhZ6uDTJd7bvmzeBzrwLZuXKxpLn5sCimXhBhrijnwMaFFD3JQEaXZen4XCFE1gpE",
  "key44": "2bwyRbHWJmaxNKNQKffmwxxqUXFQ3uvgK7WuZgmmqwzrVtXZJgMFex3kbsaT1xfLNgLKV3Lr4HA3iZwCo5RWuN8B"
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
