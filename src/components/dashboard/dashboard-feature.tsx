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
    "2fz5UsDXH3Dbqxw41YJwUWGkuiUCoZpq1PabNUeGEf2xJj9hQdiJY7eA7i27HRBtA45iY9KS58k5KwTiTiuQNSbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xoe7kqKQQBZD6cmokNe13DRDxegatyLtS4Rb12ZXYykviyKWye8uxcWUuWPhCYrXZeaP359kTuw59PggaY5h6MY",
  "key1": "2nhV5e8UCwXzQbC6gx7tLL45XhcxLsqAEcnYjvLDdxNMfevowPAFkwxVsxVPqF2ueV1pjq1GNupYDJxAZaa1nCWr",
  "key2": "3vM2GPkMBB6aDLakVjzb1LrCobnRWK4aGwvsjZhCB31Eh75dhW34WKMd49uRw1t37Fg8f27L4hwdjuJdmCGhGhwu",
  "key3": "3SDDaJPdUSQ2gajk9mPpnEmWup8GnC5JCDHfzuQEyySAUdpmoYoAYZqX8PzGQtwqxZPdHshhpgYvEBrmZeRAs2f6",
  "key4": "2Z1td7wcHPF7ix4VVac9fa2sBuQjRzHt6CrZoWUNGd1sDQoabPQxieCDREwS9vNtGBoGErK9dcUDZinUEsDNFAvx",
  "key5": "39awC1FQxTvo4RC9qLporWvyJ9VdsmL67hn6auAuwt4jCStEBtxDVB5j3GkEgHGUBrpe2vsmsC1KBySZPhz3Vttr",
  "key6": "5tSZbXFgCSegDhyLffuTrTiVswJSumBjpPMGsc2kQNGTmUHs2NXczrKJiHjM8JbT4dqc9AXU4vfApfjb1SoBC1ZS",
  "key7": "2SSX6w6FMzYcmD2wdGBtemqmuUwtnnFiVJFyTYeBHZHvi84d7sMfRBez8sQmGNmiMTuWtUkwJze6N9a8DBpr8bki",
  "key8": "5NsNkFSYJTgvzMuBEJE4tMVYqkKSYLRcv7XrL8ujHrVizcyUZfL8B2KfoWBvxsY6qViFbr8mVF5iK3uurZUsqzmY",
  "key9": "3MeHJCQ8tRFP3kmJxAAFzjfBNYWGCvWsRxWrbXtCP4qsMQVFwogQLD7TpVUWWuWhjwJRhU3ydVxP7doUVAMnJbc3",
  "key10": "599Uz4zxiFL4dL7kb7m4WcxXJxvs1phc2fRVidSubgxL6eQQvyUVNAL1jDudR91BwtBHcpB6WDccWjAU9ajUZRvk",
  "key11": "3EDug7Xivc8cTV9GtQMWh2Gk6xS4h5kKEZeZ2Dp1Cqy3FCrnn5kC8hkpV5ZxbUkhEzQa5NyYH5cKQAxkWsmgrXGM",
  "key12": "SF3Gj2pgDcufZFdDCMNh47djXpQnDAjYHR7J2zDrdG9iLWbL3e4SedAPX5G8RfjadYKFWbZY2tZCk39yR6Q6JiA",
  "key13": "5xPdFjS3AuUsViCyporDuAwc58QsJ1q66v38uEcXxDPSs8GsLYBpXB5mhWuzp9Yy6WFK7LzeEbioHcDJu99V887H",
  "key14": "jh2anQ3XpBnzwDASMncx78F7teukxw7xKLbe2fLBwTPyxxDab7MaVmtg71EYZpB9FLW3UVvGvZuqJaq97jGQKNZ",
  "key15": "2a6mE56kfkwsG6osCNqPoeFF3sHh5Z6e5H2kMh8o1oqVTaHPaLfpGwxv4dcWvkadWm5awHq8HDYux2gXbcmukeeu",
  "key16": "3UE9ugyW1rwXeEKMCmhWwbJyMiaUEvktj8HWhYEtg2ZEufWNjjPMeAit2BvqXZ7ZxPSjqwDFwvUcwkwYn4Dh9C8g",
  "key17": "3XdcKTPieGfyQzYRFXGUuTRmvdcq1e2muSWVmAd9HENyregYhNX38dWUQU3CXPVWJt3A42B9NuYN4qxGvLucNdg5",
  "key18": "31bkMZTAJc9ken73wro44fSWLkEGiZWk3cvL1genUE8z9NDT6weyZciJtznUDC6wxhB6tCsDciexBAtn4JedTHH7",
  "key19": "oCTv2YP1rVhq9qwthK6iYNEMxayiWQgXLC5EEYTJN4q9Z3Gi9a6EXiWtzMMjTiwAoQ1LW8MEzSQUjiR2Lxbhoqv",
  "key20": "BMkSPrr5DiCcycoTo4veK2HHxzHUofk6AasGFt3nUxdE86zvVrVx3KjcxDLoP49cpDjEYifRdvimWksiyFRMDSL",
  "key21": "25gpKZFmDm5AJJUu6xHkgHtxBCReJNQdvpo8EFAr3oCzhdhAAdL4PTdBJizsS7mKBgwmSjHm3de1xSa46cB62VPN",
  "key22": "2j624G4cVNTMkY98RDPFuyC1MeqXWq4DCDAewhdcTwwpK2qVLvMovNGsWkqdmjTfZE6PgTP25ikpfuPrNZXRwufw",
  "key23": "gVLRmTNuPna33FTv4VuqUCqmeqQxGan5vqpUpyNz7ekR1fDJvkZd9jDPzjnwk1vd1JNJd3Q2A95qMrxE7Q9QJAJ",
  "key24": "gvMoPeMxnSpp2WoXCmxgzfvEdkTjEXwXsiuWjRWyjnccSNVcBq2SMN2v3ykbsuaewdm75TrPH9C9E6fq3YMG2W2",
  "key25": "2hjT9fxCvVeB29SVqnf7QK8ZzskU5L2AURhWU32to2bSThSzk17aAkUPs1AC8ATaAeHbLTViaph9NEKascyZ6t9N",
  "key26": "4c22RrSgyqmTYbQbJmiwA3ziTFL423WNiCQhbYRE8gRcxJxyiznLjJWLcLaHmqiLeWwa8ADkdL4Ad5eV4J7PAXas",
  "key27": "5nbvXRdENF2vqHL9Wg58h8ixGRGHzzsEVCdBd4wuf1WEC2xLi24MHQEBVUUBaybiSniTS9ikLDjD7ZtYmweTUbGa",
  "key28": "3n5d6yZCdKADocfSh2eXPyLs7aHq2PMHmiP3xRwfDH173hYWUJixFDoE5W7oHzXeLqCjC56P62BUcwobr87t774R",
  "key29": "7U64uXaRYY9kBmx8WCp7abUSKXHuq7cLo1ZTteCLdQKK9rGjj4E3MaEG4bzGUErpBULyiWD1sTdGttP25BoLY6z",
  "key30": "4gKusKKuQ9iqZVz5JUtZvzQcEgQsdYAyeL66awakgx9YFDz3VqDSAgSZhNFryS7zgwY9xkWY58hZgPvMjHjucSDw",
  "key31": "2nHDS48XamGT1rS4QNnTUtQxr493aYr6v1dNojDnZHgK9Gz3FEFLaBvrKJ1k6usvGDzTHsXacbV8rBBJKGQeEvry",
  "key32": "2S2dLSUGwvkS3sayHvUnEwFqPPKP9VKF2TZmFSq8bSXDMihqvsUHj4zimYpfx3TZudB3eqUBvTV1iKnxDgKN6xMx",
  "key33": "WvtB7SGW9tCy76GocTDYxHwUkdaAVPb5vvJbd5hfK6eHTyQNtdHykDVQ4bq1tnJHyANoggs1geYXdD5ErUDbwZ3",
  "key34": "2u1VETJ463Qdm7CcxxmN56daHsHZPMjCa9WYGaHQPWujyFTHaWCWppiKSMXMCYeV3bzvBbBJT8GDxuzc74g9SxJq",
  "key35": "ktmLvRrZDfpiGxXxFwprbnF8b56uyfbvR8Fh8gZgicA2mgvXgSw783fa2k3FfozJuD9SNFrYaQL6PozG8zvECFx",
  "key36": "c3BFYrLiZJLq7DVmKpfVsmzSAtC6vzHEGVxsQmv1LN5WFw9pasVdGKfGXpmGPuLiojjEXsV967bBJChgrEGG2Nz"
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
