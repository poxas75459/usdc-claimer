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
    "3RvbHG1kcBsBHyyBwb7oqU1qoWPZijhVWnVNM7ETi2ckQ2MTAGsmWnawnNPgEkKEycRY45GMMN6TPiPFTSjkaFqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jzYF7NuXE4LYgSwfFndzizcP5oDmRPgWyUx7RtSN5v9pPz6G2aZEf1hyCeRggcfeJVRVn5FUeTmTpHDTiVNXLNi",
  "key1": "3sooooPTCyHeMKZdqvCAAkC56G31Ww7ntGvBDs3MM82X2eQZHLZrA6SjAkTjzvgwUmPeeWkm94VhNszkwEAfixM9",
  "key2": "4JJ6DkR2qzp55ELwAvF6Hm6CTL3SzydJHe2dQPg7gWZapJwBKJXuHoeHqp1MVBDF1H1QRfhhwpC86XoumfCRCFsw",
  "key3": "CCkTHZrF5BreDTTDS4JXvsbbDeULK3nPm5vvrjjimZCrgfyGcG1AW1p5TAxHg2XhUQHBi5GpNsEZcg1bPvkkyXA",
  "key4": "3H2NbNGuv2YC1SovXd25gzjYP7Wo4ZAgudAfJojd8nFy6UWNyY7bw6dgWnCS7crVtMqgb5JQqivveivwQQnxozbN",
  "key5": "5JaQX11nZHkas59Dtu1Mekiy2XJfBgVC39xucD6C8p1RxBo3zLhuC45cmvcuAm7jKZMhK61kHpc3Q8HV52WP3uHx",
  "key6": "1ihTnLDQwzPP1rVz1ot3Z8cuPDPKS1b27BZ8Cbo3ympLn56LitgozerDudQS8fspHMsP6z8DFN4MrMGuf3ZwgrQ",
  "key7": "3AEu9zjJJ4WaDS1eESmiNvVynpS8ba47kk6uEresMzR8cAsT7AoM4tCUCJKCHMqSAT8iGagZzaYA59nHmyZ4UsAS",
  "key8": "5e5KGoin34mFziVtVAWYYhHiSAVd7RfFS6BDjVybdaxrxeiWQ9NejoXoMxCFn8bTqZuvf1m3Xe4Gfv9sPvNq4yKw",
  "key9": "eTdJPB8AoXWKdRGoLV5s4Ni37t4zPRaz6C5TdDBcGtAvYjwDuraA5Saeg6ybnSS42JjsVBXQtkJUXKYjv3EKymM",
  "key10": "fXXw6UTCQtqkVPaQJGmVgcuH6XVb2joTUSioyNfuxvcjAs6yHMrDNQF9eXw2m4fhKsXwKcC7G9BvhqA8sycYAFG",
  "key11": "3w1xPayPUxwkrAZJqmyBTA5X9bbqkfA2cZXAPVsjffJvf5R16qsDPypo2cS4BTqjSv4SxTdn6yziCyhxdyBhfC51",
  "key12": "3uxqMh2vVjDHM9foyypZzaFknXSDMp3w8v8t21tgoutJ4QXLjB23GawoVCEfjsSEiXJsG1jtoPKMTF5W94fq1rkt",
  "key13": "3kW2VaGTm24CBdsY9WuTjnBBrJ6GeVsTKzszdULHM6UnwAMcbnVc9n3bDyrJXtd3VDFWaHrgLUY6SkRDVkg8DVvT",
  "key14": "2ibvkA29T8AixsSqSs6vq5zx5sHgDvLtUC9yuec4tHxJ6LgA38joYGpLQEiT9j3J9iF8uPBJc5NbjbrunvyAsRc9",
  "key15": "5jBudpywvvBW5yDq9LcFkBAysAJqmB2R1Ty7iRSWXJLZX9mpcAak5C4dMv5p6m98zmZyb5BphzG6MxUv2pZbDN9z",
  "key16": "3wh9M3ri9sqsrdUWFVoAedRcSKDXbURMphKWkfaLYdvmm5Bfk3msbfdM6DuFG5P3Kh2GZNztXtS4QLbrpt8YKRjH",
  "key17": "3Esqh3LUM9NGgHeFkgFaxrWHCHqp6Hc7Nc1KDMhZK5kF4NY9Vb8h9FVKDPjkyC2aB3fr1GX57YpwhgcHeZaxN8nK",
  "key18": "h2b45Se7LPkZStQQbTeoFf9UEuQ8HzPGsPLpGARKGgABCWBbWXiB5vMXvMMyn1XpavMv7E9VH3oEESgAsNMfPsu",
  "key19": "3AyTZk8FcwTfeVtJWveptxggLuNnaf79kJrUB4AmrugR3vUp2V7wSTAPdVPrmeaBYoRayKj4WBwsrAGXYb4G8Hig",
  "key20": "p9BYpENKK6sqvfxe512CJvd8T1dGXiPjWHDJq6McbDpcKFyiq8qcxDLkq4sSPJoJS6FL33PNG7irnxfP5rD5ZCY",
  "key21": "FkBo1Bt7r6rGQeWW5sVMmfLk986WZQ3esNMJBqqrmRJSsZup9r66k8shBF9uEaLgPG53x1wrdG6mHrNTMEJCkNU",
  "key22": "318qzqG6xrXmXvHrThtSw5gsoivA6ueutx9L2w8Jd4vqeXgi9ZNztwwmwSqVbsphSNQV28fLDvGmAg19ZkUYHyar",
  "key23": "5gSQsu2fNxRFzTqroFwPYyf2bcvQL6AY3BdLHa9oz4qRL3QwawoHMPdTXkmf7ZrPPyWD1zWBWqV7eJDhuY5QfQyE",
  "key24": "5zfJBXP4HCiRG88LjH4zjxiSGbvWf71CmxJqSkCvcBG5FqFacnNUeXwnnq7aLqRG4a2TaadkWFtpggZkS8tJNjPX",
  "key25": "3ud1CQENoMBf7pJXavb9QdbYzSmWLPtj12c6EtVz6RdTdWcnkvwC3U73LAkxLKLhgToPMAu3Aozy94RZRByewcpZ",
  "key26": "2GcHKhqR4HYdiYL4ff4E1KS11WZ2B6GA6WDsbyt3PXeytP5zzYi8kMGo1dKGhErFDiRCQAtQEDfF6PoE7orrmoFx",
  "key27": "3S9wg7HJHJ8KCpPEMLQAYPcrG1WNgtCNXqdH5wTmobV5HQ3G1E3jn1K4GzbTHZzh1zoRMuQxX8uSe75xSLRhGmkR",
  "key28": "TuXgodRefBa1TYDeQwrN8qTVfqwLLhwgxvR31cwBdc1UAZRNnWwKQWjtH6QjSD87Pob9WPx6c91ojG2qqVdXR7s",
  "key29": "3qs1cyGtvw4ggfiEmbYXAHKTgTnizK3MAyxABp1bm4vrCguD7xTfeDPbYUx8UEEvDFrkkgxVtV1G7GAR12V2fBLD",
  "key30": "4Xs934b5rq6qbLJAaUz2DECJ9oMUtTRVS29JiR7PQ6ewECH9VGTrMtcj359SPLVbc4A9xGJNaBKrFxYwYh63QATZ",
  "key31": "3ssCA8tkw2s2vhgmoXqUJwWHsSaoQUv8D7veBbVESuWdQgKXLUhWZ2T7XDJHx1V4SzhGZPPck4EfVULPaDCV3vyq",
  "key32": "3CyJ6afpaU8T4ftpJw2FTESzgCxVpLLv5LV2CVThea7MivLGKVLvaHUA2S7JZejeDUrMiCaYQBU1kQ6zn32sePC9",
  "key33": "4XkRZ2kcWMwj3ZLzL3rGDxkBig479JDE8afTS7MHrTZBR7Sa1WSqxCXnteZBkocPrywbodjMXUpSCXbA9j14y5oj",
  "key34": "46TaxCPNAaXd2P9XVGpeJztaqDpkqXP3pV7BZxkLV7P1eCquoHK3jczYoDCprdcGEWHkKKDczGrAa82LJNGSLVod",
  "key35": "2c34H6BAgnyJWGQNtVXYMMaVUpbQqn8kzDMyCvhatktLLwUv9t9kfi86qRZKZ42rJNMsCbqHMZVXoxwiFaZkpNGQ",
  "key36": "4NRkUhGJSV3QtBfs6iwnPJw7KwceAUEK9YFEaKwB9HsvgEpu2bAMns2BeRqv2AZDN6digdPkyz25EMugpnYZpEuv",
  "key37": "4ZYFbSVbhAv4UVazttTCiCUDqK9MXgoCTTg3GBhpXwHcMg9u32Li2fdoN2T15cL278mRqvCFe3AZNXg4bqcDtUcD",
  "key38": "46KRPP5b3XdPwK2g59BZYJYuDinSbFUDkt8J1y4kPELikKZPcq8EoYLP2GgbHSsDPEc3cKzS7rqf7Y8F7hjpQpen",
  "key39": "TRD6pC9jGG6fyXFZuvedbzVPe9FeGp4aWna94qwW5h3bXi1q43Mb5Y59wbVoyQbAiipMNUghbFMoR2tpVKUrUng",
  "key40": "3UyofPw3QXLAuPu5XCaRKWfSTFCH8K3XKqSoH54gNf57n7V5cDByGYyXPFUGcCUqBZpoyeTDSBNuxubbiHy2NgUS",
  "key41": "3c2DD8VcjKpGW3XgiQU2bZSZ1gzKhEAnw3RUEyGNsUh3NaD3byUPcxyiFWUyaUuHJLqZLGDZ9TwVZzm9hL4v3SGM",
  "key42": "4ytRd4Djr857w1zvZ343VQgaXY71rEoQE66fmzTTsx5EKftCYcDypvBYTt4RZdM3enyUa3VbLEc4jrJU9QMUGHVK",
  "key43": "28gPhaNZnBoRVamDKg8dFQ2yLSuTkrN2q1RzMbi4SJN7K7iaYb2PVzEUv6uUQEnFEqDTH2avE6ZhAfzeVBeo7FXz",
  "key44": "5AHgymccL5GLK379qbHV7a4a683sY8AGK8GDyU8DV5L2tLbRbsRmDAVaQxChx2Fn2MLPioKyrQpi3VtKtDUDjw6w",
  "key45": "5e9TXNxGT4H2XWmFN5YJvXiKBrPhqi47yidjKD3aTNrzdGSdNyqWca1XnEgtCjM4DTXA32mEF4CyUp9s35saHN5L",
  "key46": "cqQgv66znhPjMxnZf7VCGmeDRdN4WK6UCbpXxj9bVvexbQ6GVa54ViMdvCjCVH7bEwpj7cazceQKqRtsNGegXVD",
  "key47": "5UKXtLac2Pr9yYhqFq1jT7CFBK6TJYZciLy4g5HZhcvdaLLrKKqCL5PDMW2hK5nG5YakfieYXBNBN6hS58Qo74fD"
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
