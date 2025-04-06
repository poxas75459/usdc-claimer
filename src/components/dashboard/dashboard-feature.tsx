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
    "KovUJ3jqdckz2qzh77FG8qqmSLoa285qkEiczoFgqAbYsBeqY2KoDJofkg79hPYinkcEkjnMxQwW7sDf9WRtmkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZTnK7jeJoZiETQzKdnt2SmgzTSQ78HBQUUWJzc9EssTEK4KorGfYLdijRZmrzY8uXrFGY4HY3w9viZ4t13buU3H",
  "key1": "o7B6qf1ywcp3SpPRdXYi5eNj7Ay2t9RadzaCH2bT8GhxUt4XciVXUeZQirRt9odQWn5MWyycqkg7L9HrfG1qaFB",
  "key2": "5iNgbuFtNL8zWxgG75KUkb9kw9ceFRmWhohtHQkgsYfXyQZvkrgWxhCWXjF4yx25UQ3681Y9sBdmP6XX54tQG5qf",
  "key3": "2Spo8rFme3BdqWYx3cziYFxL8At6De53QfnU9ppNRwLhgRRk5DD3MKL8GAYMUdrwnL26bbyLaw5nxMWxvfVXojvG",
  "key4": "39Dj8NeecqvtS9r2su6gt8T3wbRiC36GeHemRmwo2TU2eRAyrR1X7StqwKYoYwrYkHC7SPz6Kng8L491wwB6RvVU",
  "key5": "42Y33vacfygsFjz7RFeTPX9MTV75drcT8Ry7aKhU3zVjYc429Uwv2c5YFmyS1SgUgU3HoCVH7PFDzxxLG8qthSyh",
  "key6": "67nwBnEWWEe2vLCPySTDXwZ2Y5trKzR47m6aKHnShEs9YmZ3CTtDR7fa7Gs9uQDAznNMZqHzAZ5GvWSFFkCW51zA",
  "key7": "3U2dv21asCSX8nBDiVsJ4xx5NWcYaVhscgzC38NZEm9WYmFCq6BfnFQG7TmVPJoSUktATcey3qqiuqJDyLsGxbKh",
  "key8": "cHTi3NpimnnGNG1DuasUUVeutPc6ozv5W7m2Dqh4BHF3hsse3Ck7CNDuDWpPQ7G5rrsojvPTUeLyX3wq2CHD3n9",
  "key9": "4xUQ1BwQt8ZBvRe5p1LWrVXXSzK7vNpG45K9hFUKjpaCpuMwTadU4be2U6a7kHeNVPSw5dejcVmgTaMegQefkB1Z",
  "key10": "3X5MeJupy5omm3SisRh4aU3mdNJTgBeEVfJVyq9a43dgWRfuZamisRcQqdkeFN3gG5znxztGWd5CdCFpD43FK1Pn",
  "key11": "oUnJ8Qcw2U3U1PsHYL9vtJpTBE1erAgQpn7mqgF42GXDMgoG3jH9RBPXkwh9SJmJawNZNLKRAAcWJwrwdDovzk6",
  "key12": "3P3hfM8gb8a2XgEmgRxgvbBVvZNDB9Z698DVJTbURs29VUrLcHa2RcWtMANiaXun4ro7CCCYUEJSdVPT47rj8GBq",
  "key13": "3Ru5jQxZ4oyV2gWHMNUnbKgLgzTzdTncdX6WGDX99RaYAi7efmJg3Wu27po86Wi5rznWY7Dvz7GJKe8MyPdyCerZ",
  "key14": "4YDgJkCq3T8abBnfJz8rSmuTAgncPL9pwEEHCUdzWEe9E7xCRkPktGi67sLZpkZz7n19Phwr3bCAqsGGVPJMPiWV",
  "key15": "5bPF4pEq5iiYXD4n3wXEUfuwQs5QEcjnTpEedd6vBkyY9ZEnqQaZLSdd21XL7cAhHo5oqcSjXcSwE2VpV9oBTKB7",
  "key16": "ApB6LSALLu3M3FCQat2eSPUeii4aKgSL6wqvQ13PkLQxAEvRJSbTFKsGdZ9BpqAkWXHGyh6EdCSw5tev8RM6JXu",
  "key17": "4WXDMASi2ErYWFgc55oHLjhJyeYvvQ1MUtPTXTvaLT3sDD8QGbR9f4egrk16XkSAQFUxeevpuXv9kVBDbdx5W3Be",
  "key18": "2GZnQiEGV2SV6eYzHqhvNeiAwKiadXxguNp8WP562B3Nw5X6pW5wVzwSAp7KPKWJqsc5KKFGrWt6duL9MsKw6qc7",
  "key19": "nUY8dTM12PyDAHQEhAQhMswLZnb7idKsQFRhwDQgPLy65fLTSBS7FUXKuokBiSgFnXcAfUwfKx6an98jwErSb3c",
  "key20": "CKkS9A82jjCPPSyfWrqHAb8gZ7bjS3mATY7YgAZPeWZ9vMEQhg3yySPaiX18r11ZyHhQzzwmGcKjCJMv4BAHgRq",
  "key21": "4TF8cjd928xPX9oNJrqHtJK9HiL5aQUdg54HYAWZRyhaocyui39uSZCrRaT71bh8gbpqNDVPYT7jNFBDvtXTimsc",
  "key22": "RcHfHQKdDbCAfPA9esfiuNZk8eyiyehDKE9jVHS334Z9TUPFUdn9XVVQYHbo2C6GCHMHa8V8HiAGx5DPVwo38Vu",
  "key23": "4ftSjRdKSPHE7XH2uy5QvHpWMczPPQkLxPrmXS2BGd51WGKdgSp9nWV7TSbgCiZGmdU8TLQu1H74pvXTwssWd5HG",
  "key24": "3U5uVMYsfLrnNQrAw4LKJngUu7grLHK4KjruxsRG9M7F8RifkhuNaknMNhdcLQyHL63QTxaa2CXaQKr8jfekaNi4",
  "key25": "4AQcAnNRbqKAENTPZFSxQ9cMt85pCsfv2WydduMjvYk4mS48UW3TgGG6wiDfrVdaRya78juLDPhrJkFjSqgea97E",
  "key26": "3eVJFZ15X91xwiAEfac6BBYu3rK3Sbec4DuKx2NX6tJFcKYhpACZ8NBxVCpVkSg9ZjgEbHx945ZRYbS8KH391LQw",
  "key27": "2iBqFzmxbp7RwZqjfv8vYADxBWwkX69Ao2mtgJHCQLxnuFD5fKuPxDRo68iybG6DmyZzUYUmZjkxBKUUVmCMhTYG",
  "key28": "5udfeuCYoFB3BerVP9BZWDij6oYCAX3jFgSkudrAsvBNcoLv21cRxSVd1m3GyVXnZJrGJWm4CJZTmSgL27HsGvdP",
  "key29": "5edfp5wfJAJEugmCjhZwmAWPTXKSojmYLvbVGxkXdSyncFUecg3eEcQjmPUcrCuD8B3YRdAKxBcYwDyqpAWUtwWA",
  "key30": "2KkwwMw3WjcQQPHTh4eV6nNQgPVARromruVbYvyzSawjgPuXpEQnZ1emtBrs1wZL8srdRCcbKAbGt9vFZaR4NHV2",
  "key31": "32zN16PYhfWXwxFjpywB12b3hNWc7zoeqA9gXPQc6GEHvc3Y8oSTjawoS1bJDpraCPZbqMRcKSuKRtNAzTEywvzf",
  "key32": "gHcrcuXiVvJYyAhFWnYSQqxgdwwkXSjgCtWfzdnfp2ZfZ6Np2hyHMSWLuU3tD2C3aBtCY1yQWxi3uYP8Thjnyf8",
  "key33": "2wNSubGyweXMv9JasZhM3ZSohEP6Lv64ufWGE47Qidb4dDjrN2DQ5MhHB2mYB5XeWbjyDQ8rcgM1fQsK17CXSC5H",
  "key34": "2mHruCRyCRFyLU4CH4z6g4c8Jqgvr795h47s4KwsLz6YvfrNLyiNnsrHL49yyfM2b19HEd4YEsUKhyDeTCxc2JjY",
  "key35": "3vxtf2iQsxKAUJDvj9HX8Ty92pmc78xgR3nYze6LgMSeYLJABgTeGd152a4y1aea3X8TjxkzGoaRLw1udc6JfES1",
  "key36": "d1fR6RqLvAft7JATx55pj1s9oqsPXm73TzbrLK8PebVcBRX8ubWKVADVASXerev1gtGuNysNHAGjXMVWEbVvreW",
  "key37": "4qjKjvQCSWnxH8PrcsQYci9HaE9SuNrXure3LT6rjszKxAT9EWg9oKP5T3LAz2p7L4ggS3QhpyCbhbtxLBtSqtH7",
  "key38": "3ibyCPypHRUbE5AtN17mB1wr3yiNHwHavQMGgkHHVQzC36Zd9sAEPzb3HN3CvPB214oQULJi6d2C9Q2xJdh1c5ie",
  "key39": "ZwXRyAGvHNb4vejMN4VejQKqN3FXVCevesFMaP8yTxDdzUnJRB8FR4RLCKZjQP9EuWyNydJNZ4Z41D3pyajmQT3"
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
