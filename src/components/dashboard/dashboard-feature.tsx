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
    "5GFfu24usmMNHyYfjkAh7bjQf8avFShM3fJjyPFy9c51vnUaTajs34wzDk7JZKHiNXX2aJ83RSppujbjKNN3gCJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YWptRiKaeNmcrdpBfpQzkz1JqqSDTUzz5BWfAYSBALhyadE2J3dtp2k6hQ2DbbR2mB9K54hfd1iswKGBfLLR77M",
  "key1": "3XqLAiRCy43dXsuDsCVqrk6gNzLseCmJzyXw5jw46zG1WSCcoSriuLRnBhZRZpxJ9cXs4fiHgV9rwyjdx9emB9dJ",
  "key2": "AoYjk8UgBbTH1wouMaqP9U65yxa2RcmX2BYUqPBqgtzcDRzozFim9EWC77eJaYUjJcvdGrDgPjtjvnyfCrSi2rd",
  "key3": "62ABjKQdECGSdmqr416NrMPPiXhhnqq7qL8nhCjbvYQw8JN8ShRprEqD2Ez9SWkZu425wxi9jdnuJmyLcSo9hzUn",
  "key4": "5ZKTT3WnFjy7ExrARmkiu8jTrJ2KfNLSbw2xY48Spv6sniqiTVfirb8XczdVsEq34gtkcebNCULxndPjskCGVnZw",
  "key5": "38Li9cQRzZ2sgSjuYcp26idjYe5GkxEXQS6brQMrTFAZ47rUpSmbHQgXz2YwRgNSfdNj2aEJaEgqhCW9W76qbD33",
  "key6": "3EAs4sLE1pBZaiNd2DVU9UvPi1FtPkQHdK9Sgg87iAweoZav6aj8EuyFyL7paYcgMeePqiBocvAzP9BZtJPTZaHS",
  "key7": "2oZYmoYnpyqHP1vbbCwAppkQq8L7mGzYTEfyEMXVB6wLWpsFx8tjf9cCvpowaKVgK1cHYoKndSje15VAv1ciT6nx",
  "key8": "9xYM1tjbJgiZeCknz1HZsZv9X67o6gguPvnQy4bUsQ8wJCtiSTt1iGkqJWFo7wJ7fp15mMZy3zSdXXxHwycgoUi",
  "key9": "ub2KqMqPsLGjchNTJ1LaLNX464z5bQ7brPcDxK94ovGXhGcYpLSmcXKCbyvsNMdTY9ou791Zh3M1WKUvoqUdaL9",
  "key10": "5BJytvgoWXYEgESCc91mPBAzdM3rcUvrqTfAwqeymiGTr6JbiFoGYukLQvwQQjnYXhysryoGPtiPq27SaWHyjf9M",
  "key11": "56hiqVZCu2151hH9VmjYycXzCjthToNYvnoGQdyvhogfNxfVTF9ZbyhjTq5bPQGtEwvFE7iNraKn1JNPVixPsJmh",
  "key12": "63SV8SG8kk3kM6TpEEU2H3nWeUQpgAawsBewBMLHrFhF3ZC7NUBp2QNfBbaGxyUkdE8L3XwyHVt7gpomxb2rQovc",
  "key13": "4fYQaoK7bbjCg9ZzF4ZFmu3jnzJksKJsyKWaKvcqJqHnZAvevhT9LTTGx2L3wnqykaqERw7A5MS7i8FdC2jGsbdR",
  "key14": "RXhKbtALHTAYBnyXsoHUGix9bdwXmoEWNM8SdcMBVLfHoxWCEBVwVToRyVynA5uxRZtzQg2ZViZ7EAaG9jNb1g4",
  "key15": "5V1jfzc4nMJ6vvKWAmL9PEUgNB4cjDN3vp9rdRfsiLpPtncWeezAcs3jbiw9s2zJiXQ8HrTxZSCMjmcSUXsYYPrA",
  "key16": "5g9E4AhhC69zn9EkWWF2CLA2CGppJu9ESprBPXm42722oyzVKKMnDpyVyxsAT5QssSWZRKuKWzbWCMpkigj3e53M",
  "key17": "55qUuHWAvgS9HKWnPhcQoRx5ENYnhAksAgabyqPg4StDzHXv7hqbQhGseRRCkC8DrBdqbaBikpgYioaW8aZyZH8e",
  "key18": "5wjvvVxXxAVnrqtQ7yXpcrndkyhJLLYuNmdJ7Z5sScjbFrkh2t5n8ULQydZFizQgBJfRo6jt6k6xqvnAmjUVXw19",
  "key19": "2dnbJMc3KhMf261JuEgRG9A4zJ5so2cJc6624iQDvoJpakS7YHhVjxCVSCUHutHSCJfzxSJDGKTzTQ85zwPyduck",
  "key20": "9ofFMyDXhFLSVJXXkEAnth2TkPwSq4diATNL3hx3dynfVPKasgwYvozeB1xdrdX7p28aeLw3g4XB1dfn73FtWfw",
  "key21": "2jzGjaVPZxgMCEofx9TgsarSDKW18eQKFWiZuFaFJr4WU8GWaewqkRd69s75NpVaWq6F6Npa15VusmKzgKsazdde",
  "key22": "2iAyY8Hpx3mdxK8bFg9aYNhxQ2A8FMvpoGM8RABxrprwLYUC5sZSdbGGzhZkiu7empZYU2eE4BxeZjK34XMKtfYY",
  "key23": "56LCc2u2grQ8BiWX8eNHDBXtjvdMnWxVvXyQBNwHhe4mRNDw4zNHXYp5TLwpGhphVumuKgnfJzoHp5qA3u2abyof",
  "key24": "5n2bYhQzdGKKiLcdtQgP1XkWCsUwL35XSF3eHRYnP21nnXwpMSE17McqKufAFuUFCfBaNFkitutNaa8zMdSWx1ET",
  "key25": "5GjFCGGB2MQoQwYi613XyNmZicFfWGY4o8wtyL138a29EWxhJCXi2UjjzfKb92tgptkkCKH6uBgx3PBaxJjAZQ59",
  "key26": "4u33NZbT3GyUpxxqfvt3p3rb7hcZ5ayajGAqBXaFD7AmQjGex3PtLLLxLqKnFAUqQrhu3puR8gcTLQSjeEnDUtF3",
  "key27": "5Qt8QhP5p3PLW5p5NPr6H5LQif6mpsDC1kgZqQk8NWQMuB2tzZ7Z4qDLZ8AJfeYdvmFCLgi7kNamPBZENQ2fZnvM",
  "key28": "5WTVnLoQBQe24Z5LEmE2LCUQecT1h8wqY8m4AZVS7aHTLXPZMg11DCS7hE9VZyRrAWJaZBqoWtnkPrRMY2Y3KwKm",
  "key29": "qwRCqikdMRBuA9eWSBWXEwqRsRdRigKAEvUyBsKLj9vxfY1mwhkvwkBsxVeJdrPf5nZTbraKqbHBZ3H7B9nTFCD",
  "key30": "4tUAJve2kHZpfkReQWgiQHvFSyepMev9gMMpve2BPP3SrN2bygg2QRQ3aE39p8C5EMdmfo8NYi6sZsuxB4ULzkq1",
  "key31": "3n2Lqa14kUAH8HjULKX4k4vyqcmStZ7LZo64fMxJHzxx813QfH1YNW4iWxPr7uqWmTAQtNL9Z3LaciwSApHZ6exo",
  "key32": "RVxqFm9pffvF6D4ki3GMeTqroW7Th1HhLUcgFgdwknCQtQQL1TRD7qZmPdRJk65xhVDMR4MJCfF71i2CZrcGWGN",
  "key33": "4e9unGvQopjGGWPShd7ktjaKHbaW973NxsaMAQ6P33ekaNnSPJdbbD6GBex9JLbC9i1DqG23MrVUQ83bPfsXxQbh",
  "key34": "2NHyoSwy3xtGhHp6YEdRCdEPkAf6wpXvkPsh7CgMD7g7UDG3EuiqGih25KsHwGPqHwUwo9qJHREnrRpUD6aPJKi4",
  "key35": "4KywprXzHtTEXL6BsktLL99cBSQsazQqhfZsha97Bb9SYQMrt919G9LMFDpNVt6fE3JYdnZwvB9U8B6C1g3o5XzT",
  "key36": "5Geqyf6tjGmYwX6W6wwYQSqfF3dfLQ9Fcft7DLk8Job6wZTzNQejLm315N5PbccEt5a3BSnyjyZU29z4amHcCvmV",
  "key37": "chchXggLw7iAjgkr51tfVVvspGceuXUcwYsgrqFQAfy82EQFW2bch3GDNh4UvhZXKKffRA1muXJsRJYSXpwAiUG"
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
