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
    "4KSCqpSWtneK6G7wZ6dVLhV4MXyoj3n4omnUPJGP8FPqQqpUBa4VLiN1yLLFYbCN86sgmZYoezYfvPnigJqMLdjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NZWtCz19sBd7dMmiimbk5TZc7AUXsseSmQjF6GT4hcmqFZh6wHPzc1dfeKKFcxLvJGP6LhbbmwG1HtNWj9tmtfv",
  "key1": "3pi3ZtR7NujYfUE8hZQtJ6gfRZorExBeAeas9GY9u9F5RwR4WV7f8H67vRdUJ7wzk25vzi6KaRaFYSqFPjQPsMAU",
  "key2": "3hWeBfFyVhjqNiWYjYAJAFGSiSfgTGjcpmbwvKCTetCyhYFLzFgrfqRemCYxbPKZLnGC7iSQL6LFUXGcy5jEAMK9",
  "key3": "2JT97N14hgVot3fGneu1FZ5xmNp8XFJWc49M7MJRJjnCj5wBP8Tig6abS9vs86NiortS1YeiAD7LweFMctNK5o9X",
  "key4": "yKmFwoD8kpAD2qLAQqcgsZ3G82doYpj1nwBBs9ZatArCsYhq3FAYR36twWkxwcKpfNbhFJoUfWzUAe8XhkKSZQG",
  "key5": "82cQgG5Nm1z8cUfL8NjEExJVYMxGdMJai6BM16nKMvrg5iRCFXxLawcWckTTcCsAqS3WwvngQnVGjyMobzjU4Mf",
  "key6": "5hHnmGDv9w6eJfXkjfDon1vLTC9F3299WgpFvEQ277berGjN1nn3QTXCyqNV6eiYAcmTQ6TLyD1WJhXSpBf81aNK",
  "key7": "3PPRnN94ykCcLJXZfpwDbFYksBq3MksrmVnMyXAKxXH4rxtHqhBgEVBoznn54yW8YqTqCuP2uzcS1owKFEGF2LkJ",
  "key8": "BbYp5JK5R8KHzrNFDvs6vXiSHdA9VWkC1HEfPdAKnDfgs8qw4FfXLyAjnDCsbKxVVDnMCjnAwgwM1VjWNP42GUP",
  "key9": "5zCMjYYzcnCkii7eT48vqudzEhUa2Z2bfrDapZsFqA71TsPNfs13c2nx8hvhyVSiYCk68mAKRKp7VJnEq6hAriLv",
  "key10": "3DwHGZ72HTB11BdZ9sXLZwzEeSXTTZprcTwqzUB1M7Mm9UNAL6vTLKRDVABMbwC3ScpLkA5VeHFTneoT8dekc2vq",
  "key11": "24JFNy62soBqFtz8dbtKHbSUus8bSgfjb4MopVXMUxRKqTRaKdbp4h1DnZYLHzUokkA26keqTYXkLfQZgx5xM79u",
  "key12": "4WsPgMEGrUbwPi16UhQyvo5QEGpMtMMCtAnUE76r8RLjTsf8Qi3nmg84oxmhpuPdzHBDpvqKVuoRLiBPP24u94nL",
  "key13": "3VprobZpZR8y31Mq2e4RJABBVeMgWHcojQm2DHGUjYoxmjo2EKQBNFcjZBL4unFgKaXLjmN5keeX5Q6YhUXiCrCf",
  "key14": "M5MPPVdXwXXarNnDtupEkGpMHANTBftEVhYkJqYqWi2kWnmuqqeJ4KE2gGrgpbFabzdWjEGu2jYGKqqBj13QpTb",
  "key15": "4L4VJSe7ugfbC8RBtof7Hrver6VNLWR98Asx22t1s1SXAZMHebH415Ms2aCA6JniJNpPMucYHkuyDPZzHreCayHT",
  "key16": "2e6Bew4SqQQEFvUnaowRsVsRq4317BLEprifVL2Tt6jUTsQNYEpXHJLfvWb3HLQPmqCyt6yGQNERemPgGnovaHgP",
  "key17": "2n7jAuyQdx9UUMz43td4kCQ2JwJ7MW13Gr8uU4PLVfCteDhiUhPVarJom27zUTXTFZLBqZj9xYmkWiuvuSWoXqGK",
  "key18": "5VtSNv5h2HerP4P3qN76cTsX8q7ZpGWZvudvdWyJ9qQczv7Z73iGZce2b68CL9QaLdEh5QVnfaPbemLRcby6hw7v",
  "key19": "4Ypf6a9giKWfjpVVNk26DDWi4oY51Am56s3WbenicgVm9pNzLtQutRZ6nVJcNLrj7KqnPNoUR1DSsPFRCiHAfchn",
  "key20": "2YLuq5SFroUQhooNuNtX3tEP1ug6hYTL1d56t4k2B535g3gKFuxeZKfy1nFZMmczb86RaR2pLUQ2o8UHnSsikQ9K",
  "key21": "5Muw5X2TqJPeiaFzMh32gWcGBf9HfokubEiSj6xu7qa4CdYiP4ApRGqoWn8W3aSuVkZAa1SNmikV3VL57VpnkRga",
  "key22": "63UX3sASBd8kzt4ZcUzJcprFpMbUxdz7Xdjh6H889U66h6dzmuB1Eo5mso6sxFHvgDR2FH4nMmiP16EYX45jZMmA",
  "key23": "2zzCk7TxZKSABNU81NZowRJrNs6hCXaGe5EGCFPxFv1ePKhH1TS3ZKSEqCThntJLK2hBUhuemPrFQpe14DRtTBde",
  "key24": "w8nb1m7UWbmGP1TGn8rBgLESbvwmAQs9EPdKKwP47WWNMJrW7VWzUaTvVCjhA245Azcsp9WSJrYV9KxkMzM5g8Z",
  "key25": "4xas265HEv5S8939wT1P7nPJH34djmvkA2z3fXpon7G1j5TaeGuXzqA2d1uhbgyMAMGwqNLm9ogff2LBkiNsAt8B",
  "key26": "5foWRKFGtWwnL6F4z37EFuY56ZaBWCWXMLWDfdDNYCuYsPr3k8aAUZQb2ZjZt9KFPBbnq93Jn7gbtP9vB7EUy8PH",
  "key27": "5KkLu7ToVee2mQGQNqvSf3wPWrRRssQYLL23pLAjyiVSqagAs7HpDGw3AHuw8bK2rvhxWGzezhiu3u6asx9QYDea",
  "key28": "4XTviLExyssMwssUbVLr9PgLJsRi34sevwKAnhZasVgF2RCJBZLah2M6JCaHs9oYKFfsRDNf7HgTCWiY6TUAtPHS",
  "key29": "2MSq3Csr9fY6UYvQ2wqkiijxKLYxaQH1mYhGP6MmEZtPGVnX6XhEXovfpNLLvhK987pH5dFhexthSBTLHjMufcsQ",
  "key30": "5bYKTVhx8GZTTZVpqymzwoPwodMC1c7CGoxNiHAkt8HDqmw7iDrDQvTF7rzxEM6fN2k79Re7XEzspHvaK6nxJRAp",
  "key31": "2TAhf2gGBpoh6bdkT2ekSd8skcZ2Ldu23EMgnEAG5h6K1AcmynuoMeLTR5rA7jif2gcewTdRSC67QLzqnnVTbCnR",
  "key32": "2o7NjAJrJdozibxx2skQeDjs5vurSW529L8Nk7AT1eCVa8dbpjygH2qD2YTf7Ui8fgDYMzpBKsbNXbu3BKpo9n2j",
  "key33": "235NXpNTokJQcP6VcuWt6yS9NHjdKBSgm6V6s95auyLHcryWi4qTeLbCARscyNWerJaTmWgKJr7e3aTvt4DZdkJb",
  "key34": "5mniJAktZ2YS5ApS4GgHE8pquRXZeNBxKuAnX8WFd7MxzkgqBTjGSdLxnWDfjawBgJrRVsBSpReMKGWK93qxDZx1",
  "key35": "4ovNoFNaMz1oNEVHQiAU9pN8Fs7QWGedBPMQqnqEbkpCk6HmtJ6d7n5oS3YYg4g7hDJHgaBGRsSBjCboTufAWEUS",
  "key36": "4SpUMeW1cHz9twq7NaoUVmV7YRv5zywhwRcobTDUfHro7BRTqY2a9v7SU2FhJLjxa81aYX2B9yGxbjwWPKS1LLew",
  "key37": "5ATR4UBpL1Gya7XtX5KCZ6B7DSTAZCqaiaTNFc95v4cnbs2863QJMbjThQX5Jiwn8PAtPVwPAtE3DBEY6LjeCHMS",
  "key38": "5vY5wP4j4vyauztEEfcLidewzpGUmTzwqUxYHZWvuG2gqQGUBdcjsdNsLbX2JBR5rHf67as7yLf7i8YEDDj28Ves",
  "key39": "5qyrAPfQWkRJnLj4p4HxbbG8o9UMHRDQgifojbHeDZCLcWe8THMLDJeEzXJRsXG1YzavX81KwoiXr18PYkTs6Skf",
  "key40": "442SSCNvzjnja4YVSvjaJZvoMPostrKcr6rPkSVFFPtzApPSRdJVS1Ra38ocUov9Tdi6j39sC59mZCr9wzDN1BFm",
  "key41": "cmjfVWoiWti7tmaruwdK1faYnWyyDV8Lr6JsVqxwtCvuNQza5UF3X8MwF6mASLdQwH4nyJFvb2igHMcVMx98ZZq",
  "key42": "QkN1n6cq6uiAHxD4oNa2hW2G1eCrgsjeVTNTRAhKYU6NU3vGtVHf6kRsAhdQMnE7rKQrs9vYwQAGqP16ehy3LQs",
  "key43": "5bhps5x5ms713AbN1fpz8m6QnpwUWKevZVVbXKB8tHLuhBzr6wSj7qASeYxuiPfQZFMqVd6JoCkqCpaYgb9BUwNi",
  "key44": "XJ5Saki4x5SGXBUZWFzrHMCc9JjF19VssVD7VaKBgyxUrPHSE6VedqLspFUi5azKXNF9gotj4PYLAjEWsPreCZj",
  "key45": "3sbmxnEyvn4pqbRjwdyoDZccDpUiU39NPnv9egPAQ7xhv9mhZVD2umAzGRiujN31DZw7PvuMacrtfMp5bWaSfeLf",
  "key46": "YtiEXycbB95n36tA4LydSPnaZ1QQ7pKfVBMHYpSMEnn65JNRaLqma1DaNHBbNmTiidNQogkWAhEB8XfQPVQo2Ru",
  "key47": "4FnrLERr8aRV2xfKUNbSJvWxzAd9nEvzxFkB28MiS7jx3LFpQQBjx2wLxejawjHnk2JvNmUN9RwccmHFLMD6g85h"
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
