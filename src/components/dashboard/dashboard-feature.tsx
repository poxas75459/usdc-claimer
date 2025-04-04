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
    "5own8f6r2NqrYPyrLn39HbsHqdrvJFv2CfdJYfabxqzN39qvSV9i2scieJZAstmNzMMCoQWX9P6Uo8BRuK1o6zcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "356auJp6QJ54MiQ6Zan6vNddLHUnotKZfxbPdCbtYXBeeaqgZbhodDacUANnYMb69eZGm8C9zN2PWLAqChdHxjFJ",
  "key1": "4EzhT4PPqn1QUz98L38kWiiR5JqhehJqmZCV5N5b23gLyYs6Ya8PcVkLcXBqBRKSJo5cTNF4QZrEKZCTGn2L2d2T",
  "key2": "5HjaTKivw22SRmbJViugSDRTDmyhyswtHFsdxaxRir9pCBkRg8YzHJbSyc7iy23XnuhFRVVgCseZh1xG1uwrVNbf",
  "key3": "5nQXcWMFgg4hR6Mi1n3FP6ZXFvvSoRYWc1QLSMFy8Wi7j1WHYDkEhrukH8FgfwAYQfFkbHmyaxG3HJ6szYvfwhEP",
  "key4": "3XRZaLub5uN6T2YYu5vL9wPWr3CmK9YqsesiCcsqTDgFJvVRGvTNasuBpLiPQTBWJDYxhFYu4YKoWDUdDzdxE5Ev",
  "key5": "2S7A7S9emSQXvFCqy39jFBi1Gi53wh9yA6RWwxMGjZkSBcqxBwCJbX5GtmuMAzYRNj4KwWQPmWewkVY4W1gYGjoD",
  "key6": "5NYFomQuo4mKbjjuex7EXYxseUDf6ydSAFRrNXMZSRWiXex5LsYydFDK8eJfFdf3Bu6EGzmkLnXc8VwjZ7Jxzsu4",
  "key7": "62xUznPxcuTUSwtgLtGP133D4MSXxmw1TWkmjf4web9KXdmrKES54XXGAnpMkKD73GffqSw7Dabb8JGjaQ8LYZRs",
  "key8": "22jt87g9tGSzSHVEQgERk3Km5vSHqt7XGDf4BuvLNGLWQ1wNSfD5kB5idsNpF5yxNcGRWjr6mn5ay8WZt8vCZzVQ",
  "key9": "5qPgm8SAmrqdjma1JBrXrPSG4EgsX6JvySBtVEmrosS7rQA8KJB8P3UohKQujGWADuYx2vrLQPDsV7QCjjSftFSU",
  "key10": "3VcqieTonDCSM7kCoGXK7Yi9tKuUJaE79Lnn7FqreD1MM68Gb83d9qZkiVtaky4dx1h5A33WrmXfGQSVAqFgMdFb",
  "key11": "33WJia2mNiBCG2b3957b1v8VUDdbYxyMGEKZwnEUFJeijiYJhxBGADv1N1g5CHsVUvmA5hZPLGLwEExiPgddbda9",
  "key12": "2cKi5RaNcajjLRPnpp5YfqEQ3zycZbkNnwGwJs5ht2F11oq1zZhvKa3ZhNhwaNmgUq2f6kZsBrsv4AJTNokr5tNE",
  "key13": "3NcGPmntFgnP6yN6LXjsNwQ7Qb363nJ8FU7dWr1LEU7D2qVBpyfJrM5bu1aUf1oJ5S16jPHJFWUA6VCb86MA3j3H",
  "key14": "5DD4HDUYfoGBLqsjhnmwtGg2ByC6zvrwetL8CpyqVRx4qgSByZEge7bCxqWPJmSFwTBvPR44kFQF62jnuF6B5jdo",
  "key15": "3cSFG8DNNLgqNnK2J4FhTxWSfDxau7SLtELTddwYBNnxwDGA4e2kX2eCc1eZbQ1HhN1fY2SD5oVN9DQ57G85B2jn",
  "key16": "NDsDe2SAuhXKZFUzdkJHj2k68eo2xQ31TNwtBzeyH8FJ2KUm3qY2ariwEyPhLexQps8vZyapKhhvJEyP732PvaK",
  "key17": "5gQPkefL7ZgmLB6uqYz7sBNbjaVZEQD3V4yWHBC8prEw9NbvbTBNSa6EVvRtRfp8aJUW75Kqme3c4sU51gZBnjL8",
  "key18": "4PxRDjFsCydLTWTEX85MX4eNhpbRXWHJmEot54JrAqVW1Wa3RspjYpwWcMgd6o5s5PDy3VtRDPjjpnMWTvQVkXjL",
  "key19": "4vUcxxDuD5Pbj4TAG2DTsYY3RmfPDf3DTB8hiJjQzCtjN72Bw84HjpEWGrUXr4KpPkFbBEGQxAuGt8fH43CwuYSn",
  "key20": "3N1E4TcbQhfTjrBxRwbVBfEoYn9dDkDKfihT81qrKfmJud8CuMhzzd36CGD1zpcftSVi8ZS8PBTzmTqp7TtwJ657",
  "key21": "33zSMxot8W9FHvFQWDktHijXn3PfDJ7twiiZGPwVGVDc7jVQc25rWPrvjnKpTyxB2cdvi7VBouEFWLDGEf3JKjv6",
  "key22": "3AKN8td6CoWNY1TsX8fjQ9DgJhoxi1ztc3vnd5XvC9fhbHWdCNafYKnX7KsFk1cBxJyRzTaMHoQpZiK8RHmXg5K7",
  "key23": "3hK4p3SuVqZCVCzkpYmwQ7u72s6Mfd3zySvc7gt2i9DsaCeQvb5DJKPfRj8BkE8Pu4gE8BjonMrFryfSKQVXPNKA",
  "key24": "3LXWJCzv168JJPUfsS988VYj1cZn92HdkjqaJZdhJu2HLAQhqkmBhF8pzyutqiLnjKwe1bXBU6VRwYvDUvygCZmK",
  "key25": "3PqSEjghNduJDcTaSaMMFFczZUozi7teigY2GqQy9SFbibJimciCeFJ52e8vWFRQSsyZbYDJpG3A3sdS57vHoaTB",
  "key26": "3kf8aDrcnmwfRruECgbRDfSA7YzHQGUGmKT7ZwT94AXMghb977jHpohA2JNR9Cm9ZxjB47cUxJSMp2KP8dYa6nqZ",
  "key27": "3uCyxeoP9DCoUh5ihEARaQNQ7qDak2V4uHDxDNM3qckafWXyow5SRiC6uEdNypEY2Ubtrdw7jc9gse2Y6WpVWyRo",
  "key28": "2EuaxCxUG6rk3d1fXjbyZvyHpzBpBSffAMqHxgkw2dqdjJh63sAR65BmLdxr5hzrZzVwtRyxyDhFnpr7fHZDHmiQ",
  "key29": "5uT6k7TPxDpR8Y7H1ijhGKiioqHMT5L1UYmXHTDnT898WnZckRtf83qE3TJXH9jecpE2bbBNMrioav62JKYENDeZ",
  "key30": "LSfKzDxwiVJD9A2XwuoXfopn3p5mUe1Mtc4hFacU6vDGjLqRtbxZeAcD9PjbeJp38Nbd16vb3zABHNc7QNAeSjN",
  "key31": "2t94LP3PLjX2S2X7tcttPhZH1YTcGU5ocvoLkJYUhLYXmbYEzU3omgzRR5DdXHXAn8r2YcgF8H5JAJYwqUpfvUbv",
  "key32": "5KfVhUMgdCHQLjkHFgQTkep7Q6K1Lrh6cXdzgFwXfyUEL4oXxanu3dL2RSQATPbeDuuEgvdAc39XBgzNmbNxfpBB",
  "key33": "2J1itceoUQeTsiEnv6NvMnQH74fBkMLhVBCDBtttBaDZNR6TXqjbVtzhv9kDnxsJQtRCcNoA3dhVsazuvf7VRUvU",
  "key34": "41bjZCVSt6PqGkBqf4Z6Xb9rTWuX6s57FUV4i8FkUhr6usogoMbhJjbiS31PE3AvhV16idW1MsAJSMV6Jet1yvip",
  "key35": "61Z8HGNMc2V6ZKeauQHioQAKij1Zpt52sPEEAyEnRCfKeJkYWKWmQYcJ2KkUs7fAxiPhekE3Uj3V2SG2VNkXcnRA",
  "key36": "64FqJcq88nVAYuAzx3XwsBqxbPrNB7UHBQcwycBkQYvupEgBN8FM7WzdQnE3cNx7YUtxA9e1NHniSB3xDvBSYNuD",
  "key37": "4G53RNC1vhwxPhWzLRx1aML9A7fq5hKyjVgn7TbNdAZDLhyRKZUY1MdNDmemFj92qMJE4cjnFeQ4VaJpnrJekrMn",
  "key38": "679T3eJbwCxgPV1cygrVhkhUQyXa3wZchNnD1MtvgDrdebHNxXzYHrscqa5FGWUb4o76j14tZRgepLkt8g5qCAsk",
  "key39": "3R8moNZMNTyx7cd2UFBRPkQt7BLiSS3SNShmkN5kq76kDTHtXL6t8MZyzUM7vCFqrPLmEw3cfFyAFFJu79LqfZfF",
  "key40": "2PQhJyAJqavR9sLxXGUBzdrVXqLq9XiDmXmjvZyuS3YHxtSZ3F1aqbFccoE2XZbojtf5c7X5U4ptnxKpyxFXGZis",
  "key41": "2b4n5TBrfPSDviznfJm78UVgJyUMe3Zj5FdyfVhyoqAapjvd9RGRyhehG2Wi5sfomqU3vp9JXBtBp3zz3QsesA9k",
  "key42": "4edjbioBV7HkuihBbzfZX5Wh1JYPYGHbEkqGAysA8r9Jgmo4R9fRQdkF4NQbsJ5vbcEBwrXzGVUxSGc6Dm1kmyPf",
  "key43": "5c6Rd2dH9J1d77KpgP69horr1KwoE7cSE5voyVoWVpnr5eTVmPLHd6iLh4iT4oSGdouWZ9rrhoRgw7o6drN5CBCt",
  "key44": "63wuGj5ULY2kMbiCnSMJhyWUzLMKjzUQ68QCFFFrbjCXXAvTTT5E3igMo8gW4J8TWnnpoXWxWJSDkiL7gZ1qYm2F",
  "key45": "5QVVNQka1qUw3GkNZ7LwLuX7CqZ9uyCAN9fdqrrynkfbuCHui7iiJu7tBAJDgGaLvfuavLG73DWr2FrGe5wYQ5ak",
  "key46": "kLM3t77bcdKJKJbZuKSVsR7jtbMW7GhkAsBD3fKCNZ2KUiZJb22gh85veCYDnZnN8Lh5ehUQBsYAPtG4ZQtGbh2"
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
