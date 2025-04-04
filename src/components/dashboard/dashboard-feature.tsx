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
    "2FPr2aCvxthkACFVh4tMB3ESSVvxoqDRu7GCQvJYUTFLm1PJ2LGXaT5rs28bzENQgGzchLsFEJ6vFxy2QeW4uXPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xzJ3avvoFU6oWnAwNf4o91SJnb5tq1UaWgLkQs5yvR8qWPJKkimHuvVDzUxBa75D19hhDKFykEhJD6gZPVGw2DV",
  "key1": "2SsiQCfAazqp9ZPSuSGAZ4EWdNqECobE7zLjGwFVZKrvSBgh543uekVrZqMTa77of9n7vkjwwWCBLNh2JjWKH4Vo",
  "key2": "5xZWQhULw2LDd9Asb6XkNDy4efEGZX57LDDW1krBLw7SNsC9w4q7ejzLPoDRa93PdfNyGRogLFiuUsvEMia8fcvh",
  "key3": "5RQUkKXpEdQABfrR8HydHV8QM5yjDn44DbhKiNSRn3oCQh3imkbuwY8Gg3P3sqnEc9oLjAGxX2RJKjFHzJUP874s",
  "key4": "2sdZAaLhYVCcrKKVMGxDXk962key4y8ZzqPU67Jh81fo4fwqf4kx5BYwjEXo121dBYHzYC7AHUoDngp5nsVfoZ2z",
  "key5": "4zKN4mu2TPGUBLsQq2g4aTYPdRMgtFgUGD6XySFNzYxTRevDsfCwaURnfqYQktq2sR2y8AAjakCLXg72Ry6dh1Vj",
  "key6": "3stqEevSCx1KqkKm4bSbuZiuuxuuEVL1PszgAgrygiN11niQARPFT9x8J4niD6hP6v9pXXjs4bja2QcrE285xmYb",
  "key7": "47vdk9R2a1Y5yMSnNBKUrXJmQY9CFdsC4gAQVECcr9GxzcwuRKx17bWuwqmRDxfE4qbwEK6SnytD8wXRqRLQV1bB",
  "key8": "2ZZp2WyJpCD8BFT9jkXASF7C6TPq2w4uEoPHKoBBzt2kdkuAARQwQUmW4Qp9DdyiTtU9PPqaWpqoHqdGvSQx3qjY",
  "key9": "4i6MaXhcykBAgHzUM383toszWRZRTHR81jQoARmZkXmbW5WZXivZ6sMtYXCmiDrwQaNrUQMnSABeiEeDV2prGyhh",
  "key10": "EzmA7RnJ5hZHWKJ793od3Ev5b5RqC6i4aKc4uEi187SjvvUU35nMWqrQ8sc3PuQsqNSAFtf1zYaDhAQa7bY2RjJ",
  "key11": "2iWVnE5hvwYPwuBqvFvrWsTRjv798JZZkLbigz6Y93s88qnPVdBt8PDL9ZwXVeWZTrZe72sTpiUnus7kZYrMKnmh",
  "key12": "zrF9i7sz8K6FVVYyL3KE1Q47ZzGjQkw4EVqVvZ82iSsWZMngFY1qcGNYWz3zqC12a89tgyh1z3WwdVdmjqLovJj",
  "key13": "51JMQckSqy4fXW7hg7jqsAKnKrTsJyRAzUoMSzXqPNkAWm7Y7aEgkZhhhwNYDPgRvnqXbVDLRDsWyoxKbrHXiFJq",
  "key14": "Ra2SgETA9DKoTmkWMK1wYvX1JsEzmiPz7qsnLz6aCuz1tZNsubd6ccek8HekqAibeawTE79EAW31NcXJjr3BwgR",
  "key15": "3mmMh7hw2BQ2t91GDKAa45MGdkM2WuEybgQpi9FS8dAghn22hMueCnjosHGCiwAeQXV3QhLVMhtFTUSYroysfJpt",
  "key16": "4NHsjN6WJaKKkTUh3pJjD52PV4gmMoMZYUXagbGTWoGKcAoqHKXed4YG4Ln8j5qAxgE9KmP1dq3EzjKKGWy9YRjd",
  "key17": "5SBZupinctEDLj58c3zueH2W4fHwXWrFhvZMF97Lt6QN9ayqUu8A1D91AEyjhL259ob5E8g2d5n6HeGh567exCVE",
  "key18": "2JxmCjsRJAg89Zh8rmvBq2YqexZCivtWGv9v6KLnLtQPWSB5WcUXCs4Fw1SqS4sXMrzQSJEHNhqaBAwfpayqvLNJ",
  "key19": "4iWSRs3v9W1zDRckZ8JQzWQLKH2qKyK6QX9mTwhJ7VZsBuRhdxsZDJ1w3s5aQznmtoeo96WvYemS1gUVxfHLzVNf",
  "key20": "3CNnJfNfxpwmGwDdAc1sXgfD5EHXvYT5chUgXzEind2MZCJGwEbH8vPnYQY256SztSUFBNzW56f79PUMbUKzewRn",
  "key21": "2bhMv8vsyKFsyQpeMG9PmPmkTcVbGUjs2pMiedDZzsyATVM9YbkgNiRSNAGdBbZrh5EvXAtcoSqrik4aPc2DDFhe",
  "key22": "5zn3c8i3Q9dSaxF5pgwqniFhP8YH1ee68WmBxWMzbdiVEhe5EVPqXKPZVJ6M673EP3BXMhmq3UVjcXnxF4qLyry7",
  "key23": "4KfRP1tBx2sUu4bSLu4r124mwbMppKTxq498TBBTYniqubWFFs4b9XB4wP56zqUDokK7Tgi2JocAEn2n1SsRsPU9",
  "key24": "9C1trFDyqZruL5ARpkLcFnEkuYMXAye3kwAsGiGKe3YBFH7Gv2tAwH7VV1XCHgPRB3Fqv4pyDQeJVjZ1nEfp68B",
  "key25": "4FMaTzhk2DJRNJMtQSJ2nETrKcerHuDcGrgUnbfDeRdd4PEwWfnxcuKKFSjagZsTHMJBKcoh6QQGAFHWY7hgLZ8g",
  "key26": "2mypAQFRL54u7Jy7NWzCariH3wFdj9A44k8WwXqAGNPjKj3CvJRb352iCN9678gfHdfSWUuxNVVj7XP7Csjhs9Y3",
  "key27": "31UPsnrPbZgy8KQg3FQZP4NUVm9TRMfmP8esWQZhLDrLBPMrFxeKjRob4kbnt89UBWbaXGtLgyE7o7rVBxTjsLRA",
  "key28": "3SMiEh9hgG8HvqARcz7fVBZHq7Rd9wtvMthjm3n7ZHJeoGW1oaqacKFFq5e4hztbAfvUbTTQpUjynjbk2yzQeWU4",
  "key29": "XZvwJXidmNd17u3CSbTNy4hoD9U5uwyV1UBFcetQmLuJHUjkQTuZ4Di7E112M2pMQPnaVmVHTFR7ZXRc4D5tLMf",
  "key30": "4joZ5ovRMLX4NzDxdyzbzJhvk4VGEirpM5vGLoFL5jeQiwxLpQpYdHT93kfcaWqgSgR56WB3ZnPm8Lfu5jhHSr8N",
  "key31": "4K2GdfPYyy7WTYtmqbKQxfEgRy2dt2o8mmJiJv5HYHN1Xb8U8KiCu5NQPAzgdfRxAiabkX3g29UUjhwDrq3WK5pz",
  "key32": "6aTsKh6inkLzfub2HRg5qdNVZkVPKSJ3rM7rXmnWeaRZJubZp6hj775x5WuJUVP2zQWMihwM7sn1cNixn81WZ5Y",
  "key33": "4QATRYKW2vHmwXUQeRPUn3bsYwSrtGd815tpg2Ndcai6yE7CGKdrqr9GFTJVdoLyhwyLhXuXWKcnE85SmUVCh9ME",
  "key34": "GnSZA6pqiLmect2HuBkqSDWH2eiYec4DgNY9q6ZuMReN6CwF93wFFU2tVaPnumW5nTf5CZeHu2GviNecYnyun4M",
  "key35": "3prwdUfTf5dTus6PHjAtvUBKEnd5SRAjeXWXNPhPnsGSYoFjvk2hoLoZhYo65HKjSqSiFhpDntR9nwYoNxSHJuAw",
  "key36": "32ngTiqKowLKRKoWih3a95in6Ki9G7g6DMVnrLtVgVYBtiaz5Vp35jkmqdzP9fKR8hFRpaXA98Uzi6qJoivZNWqT",
  "key37": "2eEgqX6gPqcip3VWd59kY5MjVh6YANqgCs5MfB37RYHJcDDDxFBu7epudeWXyoExySitZ4NtFKpV8auFR7Q1DFGW",
  "key38": "5nh7pQsa9D4aR5dECzHAHaUEyz8yk6Dr4tBDgWfpL73KbqX3y7eSzrQz8JgL231JnfiqUsNnUKDdwi3rtJWKLKUR",
  "key39": "5dWGDEsHfJPqaHHqG5ygGNDpWBGe3k2AwFWHb8nNsr7oyFQ8QFzvHpLD32P4x3e681e2QXeBrFCN9EphXtAahWA6",
  "key40": "22M1DZfeazAWBxNXbFFp6eKjKCvPgjVfJAQ2e1j4HgXojqTfAzJP7m6u19sbQ6CtfWGQ8cEJXrDP3TyNFd2a9UZC",
  "key41": "2Si5hZ5Xsxvp9sAgoRxamAS3fN5ftshSjsoqtcNFqf4GZ6ihwYrTEP61cwL4aaPw7RNM163Fqvm5ih8ZXH1aD9oN",
  "key42": "3VrehfWWUxd2c5ipeEbEw6ZEvA8jPP72khuTNwA7nQKTL3WFoVSzssvouoVw5gQkNZeEtcE9WUL48KWhchZtSycK",
  "key43": "64CPxHkZ8Mk36AcUBG21RAVfiUjc1D4B6GwNrq9xKs3kn5Lo7ygbXTV2fxuypUNqGMTE7pVZBFJCTrKusnLPx8iB",
  "key44": "3MjDH359r5VPFFAT9wbCd18MgnUoPLMzz6GCT2fCBzXrNwjoPAZvM6hr4wisZAgpNbQtZd4Xu9LRaF5PbjUpsz57",
  "key45": "4tRyGXju3hX22zZ5cve66v6ZqvPTKUstUz67z5LpeC7QzQ5M2xXbY1UR2e5A7JavkkdZoPChVaxajvuRvSqKXtZF",
  "key46": "2BB7zEeaMWb9VacPhxkWAwRkkWLpMMYw4WXTxSF1QhpevWbMRR9MaHpaFEGEPdEjpki5BeU876G8rzrmzdv2uFN5",
  "key47": "551foe9SwkFPPcY68F69QzTud4xnh8U8BCPYSsaJfVFWptA8fC5CiQnJBCdG2UtLWKCwQFvogXEKNdEUuKofzvDj",
  "key48": "61mFeJnCEmYuVzKXwRZ5hNYTsBNgDjwwVznbCXHZ6xF8SxRajQbKGptJpDsJ4uWSUFZRhy8PWi6DcoLpw2Fgchwm"
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
