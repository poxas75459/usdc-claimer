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
    "2MnvS6TGg3H3ZzVk5bDu8rXq9FSAkHHKznFNmuH1b1kM7ubXSKLMSn89Fn2nAyt84QBMmjaGg68kdWSeZPpgbzLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rp6yuSofs2cV5JJZ4FgYsnDWJEFiAJ8vQE6UqUPvbpgEpCQ9dV33wVmcGWTPLgs6QYXHRTgDkmHcoUtUVZ2tx5r",
  "key1": "ixZRM8Fb9dLBPkdB2zF7Y4Nf7LXToz9yWV9qTgZGhv6mXEt2H79fgnjERFSXZE8ADaWMYCqHzCdY43oKpTZD3NW",
  "key2": "9cJBqthJxsreQKUQFxGZPMDtnKucJfiGgRfQU2Dn9kxVjZQAo7UZaY2fx7e2oabntLU6d5cqfm1JUHDqxDFfoeF",
  "key3": "3TdVFiM4kEQtjVmioygPKFELXrGdUi5abJbM5miFSVggb3b9ZQPVVaQwULEMabH2vc47PAFwQyThMrHRyGWywzhx",
  "key4": "4XjbaFZ7M9sssWFJjGQEdNP8kHKdDZRvs6sr1XRhEeX5JuzEUsNWnQiNVTkvjUPf5D9rauBooMDNUv2am42aDAYD",
  "key5": "3AZjJteoe5Mdx4QnjeFm8sRXY1sbgMvQpt2zptkGd1AuERFcAkFLi7Y5jAbxFYcRvYhSpK6xyVUtaQQzjACy3fY7",
  "key6": "3uvsmRaLqJdmEsdaK4qM8t1jVJztyYSCTmgy3UsZAoszbLJAxj9duYU5tzN9i68ERwLE6TJY5DhQzRJzaYbt4ydn",
  "key7": "41oNPUM6cVy7eW9Sd3acmbp4pW6Fja99vuQsKQacUfi7xZTSDzBEyLFbFq3wzC31YpAkr7NeJLwNCbCKxdpTccjm",
  "key8": "8bwNnp5Sc2yZyZLYrDBBDEFATwCBXkuHd1uLXAwpW74RXsoQEbdptoZTjPYgfcShUKJPLZszHC566ukzPk1Jc9q",
  "key9": "3HC8hbqHNzTzPFxo6HNQkpphBkKrAZnWBZ9MyiZrqGjV6iL9Y5qmACe4XrTtp8STLPK8eE5FXuQ1ZHCw8pAbGRp7",
  "key10": "5x1dzhogcrfuNqmtjf13dpC89SKKwreNKKsQ9zrbBwZaN6GeHxxWuNZR2z7KtB1VesnYNrpFAejKxqD3qiaApdj3",
  "key11": "46D7ePrfLfLhYkbo898Aiim6zFpTYHNJK4R4scojR7wZcV2gXCycYUjFfbukW53iDZEr69RroivFsYrNKUBbjkHG",
  "key12": "DWggCsQYkzbSF3oPPw4J5sJPBEAna9sejim6QjJua7VfapvZMcPQJ3HsJnYzC3jrYM1ioF6LZBQPXU5MGA6xvAk",
  "key13": "JmbHXAn5WPJwuk7rJcUKkRy8Qaj4Po5ChFt3SwcxMCauCocYQqe8AcNyP5Msp41i39M1ag92Qfn4S8ZgZE4qe8V",
  "key14": "5WcwgxGMpW1dTfuF1pFsfhF2wv6XfLq7kZb9DQHX1TenANn2eE9Z2LkDguLHnfNgZNuu8aH4LxWHh7HbLgnzdwhD",
  "key15": "5kqnUjrAQAwuuz56Qcg1AmXD5rPFdr71mGwP7jait4KtcLmYcqeFzKqu2ByghgPtxksgFJ2o32bsrxvZVrFZmMSx",
  "key16": "3eXmzQetSs48CStwN1EhGrGtXyhmBmaWzRkiQXA7Qba9hwKC17mqXhVLjd4EJFU9o45Qy5rYUwxjBCXH1GCxeXvt",
  "key17": "5Pk5LihiMs2i9QA8WR272o1cVwZWKh9U9BrMdq7zP47B1gXFbyxiHFTizQngiGSWvqacQzqv8UGGU3Np7UUEaKXQ",
  "key18": "3H5h6VjTPbTGJijJwK8ERb31cpVmwN3U8DhThrQCm5wtucHhaXvEbNay2j4VMNTVdnbRh7LBDG7ykBa3JLd1MTd1",
  "key19": "2ETz43HDExp6TLzaw8X5N24WB1RXBfakJVV1xhpY9hrTUrCSa3dk2TB22AeMknNP5fD4nLtkYF6AuodhwY57DLTX",
  "key20": "36t4DXN5ZDDHtSQys2JoQZC4e2vCeJ6An58Et7cvva8Tk3Xod196g8XDN746a1ARKvML25g9TiPRVjdB52qNq1tc",
  "key21": "5YiebZi9zyJaiRMBKB2ZwmitzWJEevS1ozFpJh81yU1gAHU8geqV8phXjt38QpVzVsh5BJFXcWjK52aFSiTKrzQV",
  "key22": "5Ynrr2USJA49uv59DqEGxnzd4HeeAa2d8RMhexxKp3K823dqcRYm8DvVtYQB4TQ7UAe2eVjHQoRHz4tuqaQPc4LQ",
  "key23": "8HhvNi1YQRGVtbpzwyFujZ5EYxX4gUQf62UFn4penJgMnEcSQCMwJE8WnmGGyn24QHgFFcYNUnETEET9J2VkBvt",
  "key24": "ivGz4J4mz4vhgdC9ayC2MTCBxjbJbspDwDDrB7qXEFYHYchi4mTtdGEhyyyffDR4PG8GveSteFVDTq1JaDS2scd",
  "key25": "2oXvzgE3ArtoZ7o7QgCu9VcLKXiGYgCkQAF81X28EoGyVBSUZXRRUZsxGSDJqF7qpfAPxJa281gan942xe2AMZv2",
  "key26": "429bEg9mk3T7BCaMiSLsY8nQuN8Sh5n9KmDf523bBJM6Rtm8eec4fmy4FytggjFW5Lubz2yJSDrkpBBDkMnUDiSD",
  "key27": "5cY6sJyxMfqfRBfQe1hZ4SUPX3FW6dGN8cus8hughkbFFTD9aSzyo1SJv9iYPcg64DukE5sE3z8FhJr8UuCELoS3"
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
