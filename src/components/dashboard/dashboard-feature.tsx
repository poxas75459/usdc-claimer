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
    "2ubJUENjfjU5NZdmmtGtcL29ZpidEqpgQcj91LtserspQPHREt5tLps75he5HbTEVtSspXbXY5wTMJLkZg2JRbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o8ZXfa91PKphr5PsPFei1ebSn8xok9oF6kfSGpAznYy4sWkvGgn1k4ABm62zwhKUo3RsARQbGwMFC5gRZNP62Hq",
  "key1": "H3aAFZS9vXdtFf9FKVAxP8z6fj7zBF2heB8qYsSKfX9ZwZ2nr7KzE8rnoBR6xUs4MLxDKRZiaSh7RPzJAaHiWL4",
  "key2": "2PZksDTCCDWhMTPawehcEWCoqBroyLMMEcKm8RJXW9haFG8JRJJSET7iFXnyCN3YWcjhsSMKmsPzuqc4thSnmWht",
  "key3": "4ecp6JezWxYvkWVq5qUnnwk5GoqAXG38n31Gi92cjpci8zjJEQPpbgS1c68FQjTWV8eCMCnXYzsSrpLnhRFk9v1B",
  "key4": "UF3khL5jWwwTUTKs8cFpQWpNnbNLRQjMz6Vk6amr9LE4jrBXsurxeYmTJ9Javau78h7YwyorkhZrhszGPRYKP9c",
  "key5": "2fZXqL1pA6LWUtqyyokjscpUsLnSSc4CWednjv8mFPGnrryhmbKj9PmFvwJmRJJM99aUtpko5eYQ3HDggrNNUJUT",
  "key6": "qasoDENx2WtgYimE5YYQ9rMvdANaeJ5Dxmn5TWce6DLmjv6LXjYtYXvaPScjjYSXTZ1oznPMdoq4KXQffjt3mT4",
  "key7": "4PRjkRUtUdXYFJZJ42QijjhtNLyo4fNhEWZgG3sgjfwkSfvJ9Dx5cbrGxzcJ3x9RfstAfP9G1r1joTrirzUaBjDN",
  "key8": "4y1HmHfwJHZjhbDod2rNoREVzFcELNh4cdXGyVDCkKcrmJQGgT2dismMspfsqgb3QVXkMVyPXsvXxxfRjf7U76Bw",
  "key9": "4id4TkDEuUFhf1BS5M9NWcfCY1vzgzQc5REYxEs2RJzUW8J7jwrUBCtSXtSwWftcjxnjcJAbUs3VgrkoGg3Cay2t",
  "key10": "4vVg6MpZCiv5CAswEWjJoQgipDx3rCvUksitqXxjCRaDU8zV4cPHMKTCncfaPMHnLpRoHpHcamT6tktXASBSzAvy",
  "key11": "RWX2dn6NRodK25eJkTVVyGeD5Sv27iqYRfUTKbvhnuJKyN1tdn3itt9krGVnSM6tstkApmEvaVgtQWi4o83xFgS",
  "key12": "4wLiotxU2gkagRtCKqGk6m5Cq8Vy49RiKEQSC44rLdhspmCfDoT2oWT922NVBfJFKE9JCDCf544vci16KFqf8Xsn",
  "key13": "3TL8xMotoSN9E9MRPUkfywJd46YoMMNAd3M8LSvsogcwa1AkJLMWePQMrC9KPhAHF8JzXy3VfMqkPpWkH6Jhu462",
  "key14": "5cWzfz4hQx1sFT7Z3sH1pcwAFVkxXpBBUtreL4MLz4DAhxDugShzPaGyLGAtsy4kGTsRoNGJVzN3cKfvHsAsSgCg",
  "key15": "4r4XBDKExk8tkyEmikmzPiXm6yD61vAtZJdyxQnNiLLEFQ18C4WUXPk4yp1y9E9diq8pKo6GKAns5sPrTGmywk1e",
  "key16": "3w8LnXJ1D17BVJtBhCWfGveMJ14yK63LxMm7EspKE92zUnMRYz8zUbsYeNksh83c7TGTcZYcSPrpzf7tS68UbeiV",
  "key17": "4WzrFnxWNEY5c1zWnw1XGyKgPJZ2sUQX1Jv5KBV5yuxTRWkeGnwGY9whYK8jyS4dU2PqyJjoJ3FywtJA9k8zxJsB",
  "key18": "4gnaEvdV7Ufmxb2b56hzDgB5PiURdRievDspi6utVfv5aCapbNXcghTAXNPqpWziKMDnMCByTRWGnvcWkSeuprXN",
  "key19": "nRoY2qX6Qgm66bEZzTevyKGg7TEy74qrnv2HPoeGj4mE6o5mkFj9sK62DmorXktMRFjVT53DE9kYuWc94SVjsqF",
  "key20": "5stcWZb3yKujV5yrczdXCWkRAii4X16Q8z15tUV6HXi4UeWXzXBfUGQbcUA6NCQ7KmfL2QRBeNiAQZeVupQ78gjZ",
  "key21": "2JmXdzyD3NRb5dYxqRVSiycZeLgQcixXRpzEwmu7vxsTYNExr9hT5y1EE8Ns8AAS77xJocnoB2mxJeCssKwyd4th",
  "key22": "cMw4TFHRbS8z61fdg1CEquvYeB38gwi24FHgavAMWbfQMSjvPf6KgiM7GmJijhsUMA29NNnNybBimoxaEbRNQvt",
  "key23": "2t1wpmsQGYvKMBkiFV18tKz6bc7RuUNZ91DD44UunZxm4U6aTPLC8upxtMbmKcSkPS5THgH24tR2LHQ7C5rbJKVH",
  "key24": "4dsWyvwFszCgpSyzfeCcXK6CzBt6DZfEF2X4MYzhg4tt1HuYKerYKX9rYU4fJGRAgY3MBvMRhgbYN3x7TySLHyXc",
  "key25": "4TE5wj7W3mGJwDPaJfxq7qdKNs814izCpZLUcAxHHfNee9My9mbTQ9vGRp3iKPnMAeev9uw7yBxrhu6QzynpkD68",
  "key26": "2kB8hFevogeb5NsokuyUfrAUiuYrVQpLYumrpBzXJw1kQoqCNDpfqDjeCZixAqagEYBHvUFMRJ8N58FYhcneKmLm",
  "key27": "yHmGfQLFj4U3qTGvWoh9UXzwdqdYxeXksudPVgqyo3pbF7LS2MXtf73QA41u1ZTLfgpAeMNaw9Vb1HLNuBV6Nsi",
  "key28": "3boyLFppbupQS84X3DVbPCkuF6dm5ugytjkSUHph9cZTHunqpDo8xRjfTWo2LHUANgTcmieR621rnUrje7NthWL2",
  "key29": "3oVgkgyaYduhPrriEgJqNsmZ5isHzhzyMESQE1QhyQjKSnLqhtkCz8G8zMy5QsqeAQi4Ldhy2ct3EvvQJudiaYcN",
  "key30": "bv9tXeN4NCiK3WsMiF4quTJ7E3st6cK55XGMcMiCPMJcK3mj2KEDH2XZbfv4be1sZQW7i2woFeh7NhhyLdj4pFF",
  "key31": "3xCp1xE7jfHzpf3JUUkY7pyKMJPYbawgjxhnFVd7zdKDFQNVx29FnpUqMnwYhkyMvqmZnpDbDrFALWU97j2i1V6e",
  "key32": "4PPyUNNUg3pLfg1ENnsMbkn2F3ZWgs6TkXMcyXaqRxfyhKWPnPEZ2Qu9nsQG4dzsLjgvAeHauP5TmWDVFQyhKfhA",
  "key33": "36GmyLHB2bGavT5iUrmWcDPdzXU3a2DyvodS4P54wbgKJM6aAMu3QS9NcmmrJZ2n9shBRsFmXyFtxX9pnWPELaf9",
  "key34": "Nq1fTa18UedqMKqxQf7Dw7EceoKZ8bNNkoGvuR2WP6CaZ2NaD48A2nHsonbi6j3wfH7a8jhgPHCL6JkZ8akvANs",
  "key35": "27jHRS2NB8UYVEiH2a7jRRWx76P946HZgMGxicHtKxBWo5Ak1AqUGXP9QkyNCpoME8vXwURJLwbdEYvrvzsTZgWw",
  "key36": "2AModursSzC8ZLx4eBty3rF5itchn1BEm1q3c6UmNJCsSh7jjr3RsWXT7RvugYaQwbUGokchmWfuwwSrapnjiZRm",
  "key37": "5XzdeFF3JP6K4vcDkLVAWDEwJFdYPsyXsNuP58ZfWBwrMjKrP5xhXj2Yb9Bors73fJXHmzZhDoKDsFLUqM393oxm",
  "key38": "uhQm76GE1Js8Xo9DLRBj5bR4dUYBjQajmjj2U4Fexe8ytdLQFxzwHLhXTxfdofa5ujnUZpMjbf1YSo3WGkKKEHS",
  "key39": "w2suU38tHJDyzpTABXfepwZjnE2PFbCs35zWmQb6z6bqRJYfK5VkWDJEJQ1EwZmtX6umGCRAgU45Uyh6wdyEGsV",
  "key40": "2JunTu7Rb2cY4AiMcwkGmx7TMDFp915XCmh8SHcZi9cgyZfpvSGPvpGVfzBGJZr24x2eWkzt51SyzpfmVMwP4dPU",
  "key41": "3tfJjdE9vQYiGryFXipHnpxRb8nsW2XifK3nNC6mQipntBTLFWJs6TXSm9cQZn2WZKpHwpzZoe3bc39oYbtM4P7G",
  "key42": "31K4BCi4XCZdpzdQkM1Wc7ExiL1RqtLgbtV71MpFA19h8MWBV8rC3Hc8oVbUgCU7ZZ2Tz49KzJXiHynk3bCzMx6F",
  "key43": "555NDH5VZjAC3VzoacvyGNR4RRP5jHtcbnmTJ5MKoVibh61gUo4TPLWKG7c98cZGFGdBmUJMCm7gje474M2KLiV6",
  "key44": "4U6VEkJYXEc5vFo5hZZZdRvSYuwRmpqZpHvLCxec3NAWQNer9178iyz38DBLcfWhFnvLqkDyyt14VXWc5bPNZxa6",
  "key45": "2s8PkixsSb8GVqJw3eJcY6tumhQNGr2t7iKEo7192WRxhJr8KyZUz34YATcFfcYMcnio82UEyAWuUuyiByCqFgsu"
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
