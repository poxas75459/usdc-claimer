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
    "3XcRPpHULqdb3VzdzV6SjBs7JB6GDBf4X7aTR4LFt8Hx3d285DugxWT9cLA92pMS5ziesDaGjhbrVkkdu1a3xzox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kwN1WVGRHyG1WUZDnRNsmTzULk7owMEKWzPEF5y6U31HhWvJzK1i64q71v3ubXtX44fnNmnLsNBgPeuhBpELJEq",
  "key1": "3JmCon9CsbR91fCnymuwVFd5rm9pc24KzoPm2GB7Rxvs4hUkGQYcTK8ykpzAAhxowdrvSqNTWUGQchbLdm3wT55E",
  "key2": "uWicvcu9g5qRMKGwdLpxHb3fwYn5nNKx4J1VaEKgkJEYH6bdXkLaQpLZ7o4eAQkjxCeFBEoddsjMPccNEWY6ydF",
  "key3": "37XzN27XWG986zKbfutZjTJK4aWYSCGMykSgAiBe35N9LJLHgLJJoQmZiNzHC1uo3PvzQeB7BVA5UFmKjzDWMwXg",
  "key4": "5TCAHuLCtQv3gys4aHJwhKMqJFdLgGCzoQjTUd25aavMDzvhAqTqoNRxLVEhGqeDQiytLa4MpmJDkiZ8NLnA9iNi",
  "key5": "HCXy93CBs5cHr8CFEnf8GaeLMwtSz4DMARv1zbkFdoQMyxPAiYWkNw9nyFBbToHXJbrFXCLAV6TDCWZPnB2JeWk",
  "key6": "5ZzjXBMm2fmsYD5cKFFfuNNRWQ6nXj8UYEqSpPwgmyomS3EzsdpsC9g619U3x3MjxCX486kNAuVAFaSRm5WoeEwG",
  "key7": "TN1Unh5V9NWk2oMKigpVeBtDB6h43QwmmRNtLmA9Kb938wbv7JQMjwvfCby4sZa3KuBaDPs5dNHVVnsWht37K5n",
  "key8": "AB8y1zvGiCJH9gG1wZmY33TZZJ7CPpsXYpSZjmh6jPJB84niRqP1eMVy6xYQdy1HEnPhPYYbcED1HxvavfpbgNL",
  "key9": "8Jd5JV7BK7LjCkV3My2oybqQLaufXKvnFBSgDfRobSRUAHk5b9mqjbPw5PyLcZrcjK7cwusa4z8BQZ9PGwfgaAd",
  "key10": "YQDh6Cknxh6uxFP1gJ3cWbQSRb77SLxYBye39vpQvwJ4R61V19iQSwXcved8aCvCcxwn84h8gEZqND52Ew3mQv3",
  "key11": "5ZmoEEAgs1fHYjZ84P6DH9VcuiaWEkohYaqgYrPXPiaiuhzCffaj7aLpxbyEHncEMiFg49TcKqiawSVPf4Y385kX",
  "key12": "2iwuTHHV3ZAnSNAe3gQa5wkeDN24ZFBebXZaJtVD6rAQkNsPuArCL5hfoHxMTGgZeKQP7SAEm31z8erzgcjWcJG5",
  "key13": "5iGxk6HvtRg3GuUbWNAp3Y5RZNWKPe7HJvG11cFVR6rtT59dPzBU36VckYKh4g6C6m6GhxY8hH7LumL6HgJYCuhJ",
  "key14": "3v9rJvVKpQx26dXoKr6DpLrQqtfRsbpXVky4MxVSJDtHx3DxVtUVYCaj758XzkD6MES1EJsLuMdBA9dU9L8DS2kd",
  "key15": "3tiLzV1iDV1f2ehY3i43uTnDCH9Cq4eWzyTY6HtwchF531BezY7oLHFkBTQTAK8xaMEMbCBT2E1vYU7i7WxAMciq",
  "key16": "44PPFVmN51PDFn6hGxuM5v3aNnaZbmEqUPdW1rasbzjUDvK8YhM9JxWDfqb8mqCEeqxmdS2T2JPQMW5a4jHZDHgC",
  "key17": "2ntqHEXC5p3AcE784bB1ueXykyCQw1yxrQg8ZFdhSUVWoAUJj4Hc6vSptiATxFULXsJTnh6J8yshYU78VExZ7juA",
  "key18": "2gtmxEMWC5VbTj6FQsrWkSALzLsf82q6NDAK3k3MSmWbuYRuesDQjG1cHw6yS9RXWFHRnnZpuVazTbMLnpAUn6Gm",
  "key19": "39tMvcbtUjeBu9diBw6YGe947fciiASVJk8JWBSGxn37R1MbfvDVhjxy14bQwt6QSKzEHE8iw7wCPhcEgxTb6ZFb",
  "key20": "4g4KP52sjb8iNpdszkALqjxR1NVfkk7oGZxiqWBosBdyrupL3F8QqEjUrBrjYJnajj1FrbUM4SWBXD7FqXdwxPZU",
  "key21": "3ZdKgyEycqatmepZM5FXTSc233hgxEBnFzfJnzyuBeZuwy4oQ13DdaLoC8xAyg3ET6jBJAqhvoKPmCg15mhxftFH",
  "key22": "giqWfmSmVQ6jpFyVV3J6BsQPjnLJfJSUeWbhkRNa2NrR1BBZPD34UtmQjhjQ7U6xBmHKzoj5bsG4bKRXKL3HoJB",
  "key23": "5qUXP2GLGHfG9P676RK2FEGctFZEmduzdFRwjc8UsYEPzexyruU7SVMXeywiMe41JNnJ7qMrg8h7Kbqsfkw4YpmT",
  "key24": "5Fmc8g2AmzDDnvPPmXRN3GWG1oLcMCZX6kwt8LNnHyoHGoc16mbmhSfnDyFgWX4raVN75he3z6YdFdhAwyK9fBrW",
  "key25": "2o44vbbLQDpRksjGf8uRMNuUsefzVGfff3fQjUZkP5Gj6HmZEMtmxx2tdyQ7vZhZcKHqBsDjAKNLndL1dU7F6AYs",
  "key26": "16qbU9ogRPyZ6DXJD3Gg6sVbnHXvw8Zw4LUh94FqjfEq3Wn6kF9g8ushxo1EYKDJ298htR9QVz5TD5kXyMZ4whx",
  "key27": "2M4JV2hBLibbgGhxTVAqd98mhVrEafkNz3exnGkmPV87rcgQWWoKTU3CkNPP8CgTd6FtXzoTQJEXZdnKsbNt6ttF",
  "key28": "5Projs7qaUREKgFDaG7ubUnqtCM5bLQoKrTfFoWeaTuqLvEW6vRe32s6WkbDUye59HthoFaHB1DnWYgCTtQY7mHm",
  "key29": "2wFauA9q2QjB74LJKVip88jHLQLeuB6Q8AqF2a6zxsLn9uP3b5EriSTMWcsgyfXdFqfUzV2xP73H2RkFAZTXpS8G",
  "key30": "3zhdevbYjEVS2wqFFhuJMr6gd29WLK5pW23UMnayLJ49duPpeeeQbsb8N8Vd9NupaaLVt5HgUi8zBfrG955rGQSk",
  "key31": "CF6Yy52SCg8jeB2th1517pyNm2z4QkoPHP1Xdz133MJ24uGWGR2JxFKQ6s7Cat7zMKAqwSAfVQWoesZrfqLWCke",
  "key32": "5CsiENsZZ7CpmRvSNp1Ugkwh6eaFYbLQGvtxagzqhdw46B5Sn3EHHojUw3bqSdJ8pLAfFyWNR4cji5uPRrJyWLB1",
  "key33": "2HKYe2WSAqGkcWCWGedESxCFALzChQpSLdayyTEeWhNxL1Zs15MJcsRyGPrZspQ1mRR1vb3tBFdKpqvBATF8kfTo",
  "key34": "To8KDszBDEDc3EwsHqzxnUfrdokmYq3qVTvaNMfJvJ4BHumt2jCm8aWW7uowx6L1zfjhqekCC98GFL7ea4vnj2o",
  "key35": "LwoFuhwSHsY8GwQ3ZNLg2PLEtmksX1vUNX1rjHt5USJHJoocAbhhbXU3rhjdaocvmdnMJN36Dg398H3GpeuKxQv",
  "key36": "3e89giTwRuQD9o6uBXJCEUxLZe139CM15aXUvCwC9ax7Wru5i9uxJeKPKUk1DTp8U95WQWB4b8J4PSYBPn3uQjDk",
  "key37": "4ZrnP4C1btjjcsE6nA7PAh1itjCMjG5RRrgvu5LpyiqHyvLhyKTsgGxyma4w7NtMq2bfXDLVhvPg12iXtYT5Wsmg",
  "key38": "2Pi8EXbGufosQveJXsmTx43Uf1Ltp8HzeHDaHh7QCKGmEpQXPiRkN68J3tzP6nUY8awwx7r3PmR48WqpEetMBRat",
  "key39": "3jDqivsDhnTGbeXmTCJQAbd5y4oLsXhC11UTyu5BMBmpmhdGxaWtwQPPrTQNhEXArr2wMYGW3Ek39TRQA8Kcpz9V",
  "key40": "2X37SLBrJ7qvVk8gTVdbxqdYrBMnBLrSyPzZKg7K113EBvGcr1bkTDxqM1eBFDXZ2i91E8cMLQEQFg2yoTeeVrST",
  "key41": "46ZrjKMkg7fBXK4KXeWubwYKHLuFvpEDVjiaW7rY9MFp6DdhsycFAjefVrJ69cjdvNZs3cWJM3BZM6RfEhuHN5Cn",
  "key42": "5TNgMjeyBSRVE62FqxVp56mHRmGqnw9wwDLed8KVGuqVPCUVn2SNKeCzBdafopBGNVrzxdduKeNYPPoh6asHF2Mq",
  "key43": "4yry7pBPMEe3CFiMgk5Gor72gNptLKiVszsYRcSn4TdH87CULvDHisDPyD3THHw2CdbLVDd6iGm9fpeXdJV6snPN",
  "key44": "uA4HFPskdigBaaRmbBY5MJdzEQjgin43BoXZ5wjNkbxTH29gtn1pHP1UU7LpKLpkVquaSv4Ctb17X6B9SKeKUi6",
  "key45": "4Aw3drEhM8qbxrfY1P3bGkBzq7bmPqBknGMTfR8DStkMXAD8as4UU8aqZD3qq5TUAVRpMyh2q7fhA7Q2tr2xcy4d"
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
