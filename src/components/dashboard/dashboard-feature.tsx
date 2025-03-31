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
    "3zAM5TePqFX1oDn8Tejh7Q6VTLdeqzMziv1b7hBuRn62RoHZgX1ps7EMvp4ArVahwqCuNRnYvHGf29Erd6Cwk8sT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o75ydDaDVBXmyt3WmH6mYeia7LhUqXR3mBPTASHTmZduRaq5NNNJCSmxRALcfgnUi1f1sGzaJP7VWt9my52HJRo",
  "key1": "4mjNUozjRsQ8x5cPCpKjYk3B2jdjPA1ZAy77BydS47EXiRaroFp2urKgZWpGBcbsiwD9XZgjb9TTJaWTo2M6gQZH",
  "key2": "45tYZvNNzSMfnxGTLQjeV6ZUexHWCEtDWaYGvVz37LfpZmgcvnoi4roC7WRLcrbRb8q36d7YoQYJhF9bzwfLMqx3",
  "key3": "62XZy2fSuyRbq4eW5q219JxPqZRCMTUS6zzkNBrxkXqKFFkJtCFdqhQQ6JVnbGqKk1CMNGvpaifcm97eyjkhD51",
  "key4": "2pEP5dDGeF4f8W1XDFvTvCLHEnMbDinJUcQHR389n47PM259J5iRYVsqTJrdVzqW3iZDLWPbzyJui9q3ohJjJ4kt",
  "key5": "2XJLA3zzJLMAt51PQaQJhTZ3um3YymtGRshHkyL97JY3QDxTi6aywjPzJ2TAy5AkbD8uANJmRf62awp4HgwZGXbd",
  "key6": "4jrHdzUembLzSCG4GiThUDMwBHcvhtGZUdZ6TfoWr2hMXTNBJLz2iigNAGEVwu1pesm2gB5nHJ852FLZVqRVNe6d",
  "key7": "4zZbwFyfUJ6bzWE18DB2Zuc3ALfY2HVn84ceDtPBkZh3vMLvojK9BAKwvYmLYcckpdxMrEaxmfgvj3UKkCBrmMH",
  "key8": "yjUA8muk8cptZNVKTgVcTiwSj7BdxybF5hU14J29Hgusii3r7cihZd6KjAiJ7P16h1jRL2eDBYswrzkrPpB4Sc9",
  "key9": "3geJmf6Vo6Cen9EN5vpQCu1f9GtkkivpksbuPN6MjYG1PgxC7HicCWAT5hzQzQhEjdCdoz8H6WRYWyEvePQju2b9",
  "key10": "4JpY2DF39dgR7epZN9KMrTPCkm8oMq1CPBUtMk9wGCJCaTmnNCDyk4pzsjcdsMhMWNztyrKXjFd9Zy9PwsnjSUwW",
  "key11": "4hKyU2XmjyvJ5wr4FDhpFrnfhEz27RLLsWZxaT6M85MG2L2wjWckxZ9W87uD18wsDyV9RqzKGhv6cdvYz5wqdV9q",
  "key12": "51uNoZ6YujjtzBTw57nM1DKL9Fa7KLmMFjrYeeytjP7uMeiqvvE1BiovfpnGEBhZxgK94zMebu9Pm9QFybXWwzkV",
  "key13": "5ZafzWfHEhPrY9dqwcTCm1zGvtN8NScvs3Knf39TAMKmJGu7ujZDjJBQASALxcxFYoHWnaYW5euji4eH3TgAZd91",
  "key14": "2He6Vw4R7UKusRHUFQ2jNaDEwAjAa6nN7afUVHLF3kWZQK4BbaeygcGXMUUh8xmZFCL1fBwZF34ofLuKT2j6TqhK",
  "key15": "36QwNhT4JoFpTMkZJ8tB6F1w27HPKJufzo2fU8LgkhtEns8sQeUNkMh8jNkb1syPWMCnB3Dgie7AykHanrBL9dW5",
  "key16": "5qUXTdWRiDZiA799aeesxdVguUDetQbUvfYM7HWipS4V5TxCbM5f5SKRNF6ikmePvyky3i7X5R7XGrzxX2qLNnu3",
  "key17": "5zbzwbcawmENeXcHQjhoFWucrfeg4CCqLnHTEg8FwWY5k2TC6dBhVDkUFjCzgi6t6XkZLi2zP4CJQshSXprVAFa2",
  "key18": "5UP9xyA5vacEUwE3NFL277JCNSw3vLFHqg6X93vLXzNtza5cMLZNeMhah6nrRV7djHMeK1tkZSeT3xZhexyYg8Wz",
  "key19": "4Bhz6ymdwamWatV4eSetYfxS4WeKVwSJWdSAtz5KQ5VnCVQWYvkS7riUbHViKVXqsjbFCUaV2UJiqkMR3BC5Q8dR",
  "key20": "3xcNNvFuzCZG3NEjhGYekRha2ZQd6yxLeFVZ9EjhEX15gBcEGTudm82vW5Dxmu52pwYyhPph2PNLhe8CVuggvEKD",
  "key21": "ep9Jm738LDfwi4XG8fpRNQkC8hRCfufNaWWkhaeMbEDt5KGaGnMpSRdNJrjKL21sMmngju4uurQkouqbU2FTBQc",
  "key22": "4nBEMW7BCcfepVAgyshQaNaeU8ccFvPa5pPsCDMPtSP176wxKddsb2huGmc4fYkPmf8n6wgmLXBBoTFGNSshEwG4",
  "key23": "3HMeGB2MQLbohmE7Zam6xg5wx7c3Kh5oPHNmJruQb2unXjGcrnkQqkYmNXJziLXHcq9KGu8EBs6qsCrXjWCdUYRG",
  "key24": "3YJHGgyLEbugRkBe5v7LEaW6KE9jAmqErHzPUT8v1BhBneA9gACnAvuQ2PPPEGwqruGCPP8yLvi4YcyP8bEXxDzQ",
  "key25": "4F29XTxYsRUtJpiMc1QWWL7kzR7ymm3Mm7Rr8eHkNPgSbceXXT5ySBMf7232eqMRbQku3pngZmBjvQGigLuwhAT",
  "key26": "2giLKVk5JmzyV46pzjCKJ2ZdxRgq2od4KvU26pcEppmYrYu1WpLXN6LjawcBK9NwzvseRBrrRYhA1CuUBEmrnaZn",
  "key27": "2JyskxQcHNBR1Jdzt3ck2hh7uaRtumLtQKczeHcXas1XK987xhtY6RFF43oBV1x6TCqZSjdcgBRRUoVGcd9J7HGm",
  "key28": "VvojZhpf1AFRzTVxx5xbY2k22EMjto52zCqTG3tYKWR5pgP8B3p9EB3MTiTmGp2xxqGNxupjFPXiYo11LVU42CQ",
  "key29": "FpKHRmURcwm8EmcexoDEzt7S3q9Gr3YhFv726rnNzKh41Ct73z9MCM7ZuLRpCcxw4JVJbVMydLgUo7vhEHsep97",
  "key30": "4cBDGeYaxCsX8gnaD5oFNm3BnQUzpweXWMCXN6go2M9MGaHj9ueoyjrw4BceaWm1ZPgZzHAeyvwTDqennmDi7yh5",
  "key31": "2ZJdEHJJ1XeFc9xue8qrUxk87pKCidxzWQbe8GJZM6v5FYdSPzidrd2FAun67MQAA8e8bFKKvcjxenk4hzjRzUKc",
  "key32": "5oujAUVHtj5CvmBs7N8psBSmtCxGPDycfEkxESUACcHz6Htd3ZehEpHnNzpy98JbJ9KWMyWbMPHWBUWB3S4brWmf",
  "key33": "TYqJJ4bv6egegc9739VtX7cKH7emopUdf88Msr87ScFaKzifdotfXoeZ3ca8aF9yueA2eM9mdJjHLxsbadaYeTy",
  "key34": "2TSes4GeiQU3GJq5hVWSkPeYu2eQPxquNTbV69ATLMoGwAnUtLR6qpNJupV9TtEej439eMDqJPmrzvnMWHJUiESz",
  "key35": "4rBzqZy2pFC2kptd5iBnF6a3Z6uCGcKL7tn42d8CX6BuGH7VWCHLh5u6wH3e32oNvYGuCN2Ut6VL4sa4p1w5hbFW",
  "key36": "5Zbj1Tpx2Pyc2BAyGin5JQu6zekbdBbx1eyemS63fKyqGV9FfDuzURmFwznAEvBc5vFqAFFrd5Ftx3QQAezLUNLa",
  "key37": "4DDNJoHBzNnhmL7JTJVH8rJzmVmhvLrmZm5AMWFdC4mkw97crQC5H3SU8xf4F7VwkQmSZvphX3hH9RWdrW5h4Tva",
  "key38": "2xdEJknP4SmpqDezN6aa64E6MQrDqPMLLUMEGbuGJ9dT3EZkhzseJSC7JcRRbBZhcuWB86hQ5yY97ZGoq45Zz7zy",
  "key39": "VKHCCmsHBykSns6QqqxJ8DtSbsM7Hzd9t9NfbZsNoqEEnf2Hi6nym5yd4BDZKLULRkbvZehpAKCbC7YG2Y21yUf",
  "key40": "5iN1AYSLwgfrrn38kA4BU54eJWaV6h8qbgFYpe5FejxQ8CSJ6eCsT5tjAMD1fg2jovb6ubTWeQy8c3LF2BLQtQse"
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
