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
    "2zAJfcRh7xQF2vWunK6vd9kYJwf8WwKyoic4U38BT6TLLWMVtQ9WsTTzie5mMyjG1SbqN2XpgxLDEtKfnRz6z9qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VwSjBnYHsckCTuPGiWAWJwLubcZA2MDf9BCTnn4kahSf2NBGG4qmA2Ry8FPkXCetbUVu2XBrRBthNL1dzhbHY2Y",
  "key1": "2TxEbK3zNKDH2xdVoSEqHgebjHeJweY3BZf1GuXKBwKaZS2uPTeyDpcLuGH4GD9dFmBLRu3rUE4GoBo2XYCpQzgm",
  "key2": "hyTkyPvTjE3SGhPvTB2T1zX4joYfWuwzkckHpFhn5kdsQ579LYnyLMFK9QGpf35dJLK55ked1C6CSnKHRzshK69",
  "key3": "hPsW8VQrcTWLYc4LVZTc4LMqqFxHzLwbvAP3UW74KS4gMDTGUqQB2oxKPwb8q1WWGYvoeJeBuGqpvuL8LWBuEC7",
  "key4": "3LDknjDG8rzGrH5YQgAGr7Pj4zjUobf9UNNskKuQbrBn8XKhvFEUaqCijbzRGQy3CXkcPaA3Mpm2dkRLc8yNZhUr",
  "key5": "3pRttfLyxiqYgSUy2QNKjBKVeY7eJzcGeKVMyZqDEbRcoibGx74c666R4o1YPhicWc5ifPuSyc5DXzrawUtZb4tf",
  "key6": "5MXQ499Xsq2xkcapzXMaPF2MVTRyxoXiYvoia3rdufMMHgZTishAQE9KEvRxGxTpeVBgtqsrkXqtLw6s25UhTXd4",
  "key7": "3xE4eLgXEbE1YoAiGbL5kUj6t83bF1HS8b8YCqWPaASs5SgQj4wBNLn2NrCmRk82mjaWjAMXaiLW1zpGZ187c1o8",
  "key8": "3yosk58C1aungvKnCEavmWmsEk93nbUp2Tg6GWFF3nJFaYTcAm4RMcZ3mSb92FFAE1NArvHXQmnnBopURPz32EHh",
  "key9": "5NaddZPchCzkafoV5s88EnSAsMXnQQ5cxkkopykYMtnSd5AXLUZYSWGmk8qknsD4TCuzQhwaeRxEgTZQqpYJxB5H",
  "key10": "2dRmSk4Ypb9QeemZUXUt91QPQ3BrxqwMRJQAKX2XbiRmXLnkEXx3K8JxmGUY5i3BQtR1Jw8MgQYPnBa1HYHxhHrn",
  "key11": "nQbRUfEhHqct77CCENFHsPBWhmaywfVCtriuCF2dSnJED6HSJDdn5hauUqC5S3nK1oDMSoeqhdoHbjGZQ8Z4xHd",
  "key12": "4wRBzgx5zaPC39QEEt162F3phGnizJ96k2GwWmAtqrC74hrEHYspX9aMmns2RzDjnwp22hYU8Fpqy4r2QB5Ev98m",
  "key13": "3GBRy6VAjMffza3sB6m2UKcYEFUkLbcJ3gx4Qb5oGrfH5LWqxAhudLfwoXMfp4spx2ZnC7PxSLpUQ1cgrWS8y7y2",
  "key14": "53SjcAe7k9PABisxco5j4iuZ9TRqmecgNJW6T4WhSaZDn3aywemC3nRNkQvGVeLNMDG5fGjH8gEZgup2R3nyFjDo",
  "key15": "2tAz77X4saaVcay28F1jjwgSWX9ibmqvGiTFo6Xn3uDUPxoLkC15PJoF8DXmnVddwV1FUHBYjZrApFY7cZBFWMLb",
  "key16": "2s1zvLYGsoHGkNEEpy2RbZ9ruKniJFz12tP8qyTPpZahXjX5U7pvuwriyE59jidPNs97Q9cp5N37UoKdBGsMN87o",
  "key17": "2bShF1paG7y63xVtQEviDNApneGwjqJbMsD78gW4ShXf6BgKgdHM4RerkCzvPRTnpKCFSAYec5nhKyRrNM4WPJfZ",
  "key18": "3CTMa6LPDURDrgsDP97RVbcrsG8jhP6GjoxwRhyaGENJKTEaE66MRZZCknNzzzRJK2buKjT2QXHJZ5z6ZXqihv9q",
  "key19": "4QmVAeqpFJ9VBrPBhXAQ4AQ4gZkRL8Jh8tENSXkheK4NMnPucpVt2sKMKoun7SvyHpwncsf3YiJwrT7m9b92r6VG",
  "key20": "42jjRF6DVa1km2g3G9guQePDtTiBJp1r3ua1bwQNdaaqevG3am1mVKABeSwWVt11EjTrtbBf48xybyzKx5oTvcH7",
  "key21": "3BxmVbM16UYptamHcXLLDwrbPfcfWMZWyxtqJbdxHyre7NHSrKUD9omp137hPkSdWorAmM8tNcMcApELBAk12rEE",
  "key22": "5nya6BaBCJWsosuyjAYqgFrqUQai2LYshe9TgEMRqMMoHjVvGo3GQdzdF1eoFjPQpm2XE7JFMb81N9fujoQmcrAP",
  "key23": "4Bojxf6cmLaM1Nr1s4nNMhpM3VuQDsUVGedcqELduEhAfraiEGjeYnRN7VK7FT9Tyd2EYkYuCvx7rWdtxeAfepcp",
  "key24": "CGTXXhRpFdUutewC6VVugRJdbkN8uKeEHpuueaCxQFUg83DU2Rdt2zrEbCoo9G3Vhu8jmhYP5RSWN6YWbGJChYm",
  "key25": "29KLEaJRJcTwwsZMxWCC6srrnePruWtFbSguR3vgZCZ2CZSk5K3HtnqDex2iY9pLz7fZKWG11DC22iRiQKDFbpSJ",
  "key26": "4q7ZiR2ZjYo36K7ih4Um63Ae3yLxzqyykhPAq6dFLm2Dr3AS7WrTS5oK6yQhNQjBBK9JV2fSHhaBmiFHjGRfb8qB",
  "key27": "2L8834HMXp5qtCPSuyb5F6ZaTxeUUZAnm433vBY9yRYTx5nso4ycFyvv15GKae8CqSbyzd2HbqsFD558NN6mrqmA",
  "key28": "2GyFQSb5mHcgQ3yb4oeDosQ5aq9AZB26B8H4hXQYsYj9TaHCkrFzzwSsDPt2tLukDR5fbxjeKBx6YntkUfpGNH1U",
  "key29": "3ZkBT2NYPuCTVkWbK3p7Q3nfeVKisyqwmxvmd567JCcfxfboCN4nWfHq99LFvDc64v57M24VAUjEtXWHXjVduMMu",
  "key30": "4A8zcGEq87TuyKdg21zPLx6LJTBsavFpXd6RUuGR7tg8tKPJrNJNwTAvVcVwpgMmA1NQkLGMKeTCdtaLpDBFbY9G",
  "key31": "3PDPRPJELF6HavXt1GFVkacYePPZUrE66fLXbFJST8iogLFLcTDsdFTR1tfAHbHNBf2hYttFvMhqo7TD8dUdb614",
  "key32": "2GDDtpaYcE58QococgnBh5mRuRQJraQLmJNsiJLkd3amJqXWXS6z6qpGxKF4Q2m8M8WHaZxC4AebUswiwPtuvUfT",
  "key33": "2fStvgrFwxWxw48NaoGmFwoYNeuJXs7QxBXtRSRFjjZpHj9zb1oWcaZopebcLZtfRWTzBdvNB3msLyerDNfzjEVa",
  "key34": "2UeYg6sBZuaA1Ydj17MGYp3f8QcYG18yeYz8vp1yh3UDfj9jJtRJjFnGJ36pXLdqwssbqTybJSZRSnD1K5y6ANsy",
  "key35": "2cbYrXGVchrkWaBRMEgPNGHQpaxLwxyxHy1UHvAEpfYKVBhtzBFa62KAXmpuEcWAsxuRFTfe2Rgn4VAtb4D5JMiF",
  "key36": "61j3h3n7B13U4PKEUTVnrpVfUFRnCso5Qcgf9YWXvYevhGEe9eFGWGa1M8t4c9hH35DEjde6datj7yXRqctuJy9T",
  "key37": "5KtL97nquGP4gjK2WsBcp14QsUKx182HVfL7zZGhb7AjkknGG7HaoXw6pUJKcQPwEtg3vFQjHmjkmnN6GjHX4jYY",
  "key38": "218CrvwKRJWBXw1vnyM2ZxBATHpV3g1ueo1TF12N6M9VPqBiGVqbZfrJSGhXL8DDpzptqgZNyDXA8jkNrGDkoVf3",
  "key39": "3AFAqmQ6NbMpFtai7yCVGiUjcWrnsZfJGNoEgM5ZQc9yqZ8YTDfop4zX5GrcSU9R4Q59xLA1rXdrcZYFd7mwQWQi",
  "key40": "62qCtGp37GBC2U8FJm33NTricyshJYuJSADUyzhve9fR1vwHyGgtmsh4JZ3rTqFJGweaPGrBUx2NMLmxYtv2DqqG",
  "key41": "4V8CVPEEe8BuZpyG8sV9Q1oxUnjVMenWtUMxQnrT6gjF15oYjvxk5ohs1kQoXKyPBVs3NkSskQixqQA6sefzHkWU",
  "key42": "3Q9yUF2aWKA2SxL6ZGTqkLsagF2wcNaYuBUhCNnQ4PTeX4VYADcYXjNZRMxzq3E6GggnkkBTdG8TMRSXqdx3PJcP",
  "key43": "5CNpKjsnXKm9XEpeVpiuurTp8CD3fsBYKUAy8zzndWUTNHgxVKVQzAqJAqZPT7RJwj87YY646xz3a6gnULp4XCQ2",
  "key44": "5zz3uAtmQqrHeAFPShFbYvzCBGwL1M3ebmZdmrFNy5XcMzNGczgrP1bAK7hfyWU9LVQhTeaR5LfU715iVBH2YtBX",
  "key45": "Rq148VfnH4QWvN49eLisEngmY7kvg1DoHHKt1Fc9839JLu78rWwFhpUFp9a6aaWuvrJehwZitCvAvmp7hZRx5iV"
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
