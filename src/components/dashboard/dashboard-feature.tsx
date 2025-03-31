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
    "5N6NRU3RqNnXk6TNpPBLWs42N1tSHVL2UTMNvVQvc5UsSSqg2iae7vTLjaw6WTs9nEH4qG5cgjsMXuYBgWAUohmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XYTr5kqGQBjLvW3GPCgg6pibeyTZvoK8V2iPpoJM4CgQQay2AtjZQtcmE6a11euSfN4y1vFEdDja6JzdD9ZteZN",
  "key1": "2NYR7aFHoxPwCiihyzHFbtNStULnJ2wwBiNBWtNn8RUvKzvaLZ1YZZt2AXdfDgNkdw4k9MV5VdREYftqoonRJQbU",
  "key2": "4wa6YZdSXx2fZ2uEDH9JnxByknLwbwPAxHL3QdCdwzY86MWywDvDLySuBjWoZZ2WwiMVuuxJTLBwuCFrHkYgQfwk",
  "key3": "2UNLsqBTN8RS7rzGuYr2ri1acwfUcewBjVK3KL3RKo9amzegbB7MA66cAq92DUxCRebqHChssBVM3WhmV3NkYPo5",
  "key4": "5Cb25VnXyJ67aQQnaDebihH4nwPbvt7YhvU6e8N6wkUKTe3eRBz5f1gQLDgzcgwQzSG4CiQbNdYym98UrpKQidEF",
  "key5": "3XJBSmRnrtfAXb6LhXsSGswgu3gKegwXqHbNHBiBVZBrYA7YcB8Jaa5z6MNd1aTHCakcusveosVbcxMXj5P9JKhf",
  "key6": "6pe4bV27d9DGS7KUQruk9E8A9bfM3j5MBYNoTK5D4Bq6s3LrHQZxUV4385jeKMKC8HEmypG9haQ8BN6Ww5qJgPn",
  "key7": "64hgVZg7PgU3gB1xUNe4xYg7uwQFT6gNRVKAQoe7TZHrF9oHRiRC41pTnDevPfCQMirea8rchYZ4ttLSipbCXDp8",
  "key8": "5uxbYSEigcohDj92ecpRWGTiw8PEjxK1Be6pL1kjabErGvCqzFbFzjZojewKgfE1acdxpRoitdUAnk3SXTD62L8q",
  "key9": "3x33upi3T96qdhyGtAPaHsYT8iUoPBVzWkPcf6BngpQLhFBupZr89ALzx9L43ugGpmURXgiTPWHY2rvvUy1eE2Jr",
  "key10": "66TN8Co41kgsnDWfAx28FbqgERyLq7pJqjeHLg6XWxizZhbcCHHfYkxdwKGCavYqohcHfMPtHiAkPSZkqGpj3Ys3",
  "key11": "2TX8trhT52CSzVMWd1uA1DjUcs1vqtPA8JzbHMschAPfk4BxrAxXkNWqx8tuQVNpmb2Kw6b4iRZYUUXQoBw9NjVj",
  "key12": "2obcEViHdeqxPYR4CRTXK8gXC2qeM5Gsg4VKomGb2GVENga8NLRimjxiMZUQVC7hE95811r2DPSW7QsLAYxBQinu",
  "key13": "2ahopKc1dSCU9ZLX1Mdk2VBVfakNxorSXKjBKP6Jikf6RGQxYUtkSzEMVG3Eh8kJ1DRUosPQMgehAYBHqC5YqVPe",
  "key14": "3CXx2NaHeRmgkiwLsLqoxmWPrA3WjPag2hxFT3YHjnsbmpvtrM6Kxj3qK6RcXPz45iJpG41BuWVumDyQ8aWYgNu9",
  "key15": "67LaP4m4xbu3E46pmEeVNmHUwBpVSmJy99bse8j6eXWSEr4ztaqszpxfURrruHFwWRgSrRHtiwuEsUPQaGAfZvoD",
  "key16": "3XekjbvZZ3wpH6iTzU3NKV3dBoy3HoCf4RCkodzABwanaEYfVBaZgEmckuubEEdi16DJ2fKSXu64wY5Ls2MsxTo3",
  "key17": "H7KEqRzDsAMcYJZRiQPTJrz8xdACxVb8p6zxh3SJHVnscfq7WNKD69ajQpNwY8syVg6cgrn3nT1smsJAuCxiPtB",
  "key18": "2mWGBHPia69hH7Bg8w7CDmvf5e8ERqksYausfiaiqMeeyuoYrApSAq3TQTBYEo6YiFbaiz6FuAoZq6CG44PoZrMc",
  "key19": "3D476ZF97JvzekYxtD9qbibavv8ynDZ3HLv7oSYn3soyAGLPyKF1S6Uimm82f2RYYqsgcsLW8H7yCWUJLppG1PtJ",
  "key20": "58CXe7rv2BJufywr4zY15opW2QTWbUFz5NvJUnvv7fsa7HgSXoAKkqRYtZQ53cXi3tgcwYpXJnvAWQE3cLKyaFzS",
  "key21": "3dpvAZ8RRCZbsUNct4cdS83Y7oq5mPoZaTxcV8V8hBbvBxDuNhF7moxQZc3dN4jvNu22mqt859ApXSXvNtMWmB8d",
  "key22": "5uWSP3zYxomGumnNUoZHEVBLLHpbwch3fRmHvhCc22jemRPXLnMhJNtqfQWP5Fj2sngkh1sq9uUeki515aS5LWmg",
  "key23": "5NDLBUjQHSzkWC7mrJivRYjYUGCskrT6ohzNJGPx9KXAtR4fiq7TmAPRfjhazoSvMXuDTh8MHgMVcscgT8zJa6bW",
  "key24": "5SCrfG6aXpSZU6spXQJkrj3pzXL6hrfrF35Bh5qSUFJG1YrTP51AYTFJBVtpX9Jxejm31GE1TjexDcNdRq6ucfZn",
  "key25": "2CodGDKKk4sR398VHyhBcXAMjwgnDk4nD1yRgERC3kxhvtpt4VeKxHnLBUQ2gZeyG1V3Tdd1EnqRNw55wAnAo2dA",
  "key26": "3SJysbNXePZxLnqRkYXrybWDHzC9ciRLx17EifEHf2Bv5mQjwCw8e8GMfyQRuLzejdRxoeCZxW3ZxTcikvBvkeh4",
  "key27": "KMRFqLh7NyUwY3rM3bdZBKzfWF78ksS2bfQt5LWvRAtZG8x25TcfmqcAeZWDFXsHsKCm8T8WT87mUZs1VQsDEpA",
  "key28": "H8HySvTnoGZktZGycZWbvDShmAbGY8SQrFmCMoBFNov6MbvYtKKkmHwNX6ZFAUR3vmTfnjeY8SUf8o2bY6QKpPM",
  "key29": "5S697ssUUy1tG42sNJzn52aasPc5QN4YjGBroqMTXG2jDodmf3viStADzZk1T3ibPkMSVNsfWZ85bRpo5emx4QFT",
  "key30": "qGWEL4woesCbbLvXerLMRsyL2vh4JLNUWXc3tTWPpKvqfWBeQq8baZJKAxyQSj5rdbhuD9E5mjqHK5xrps1Jh8i",
  "key31": "TF1VBzhL9az56YMQP4G1oseS5iUS3CJRMcDENWND2VZmP11EPF5tUUBAQQgCyQSnaEE2F8FA9Q3MACjU8qTRdND",
  "key32": "5HoGRid49EQPvb2ya4UA4udY1rbXfRZQ7YEDEmX8yu991Ym8MFMzcLPUQCcdLB31FoK2NU5sKD4u12oCoLh9BxGE",
  "key33": "4rvJkCrkzK3qGhkQDrjdcWu4zGHSyZWajWg9yuio5PZHqjhkfYS1m1JEXFTNjJ7GwcfoGkYnYyNgdgpQ6chkpMvE",
  "key34": "5vFJihBYUt39Um2iFkcwTij2kG4n9SyZtCQ76M5FAjZSX34TiaR5zLnzzziPW7SJbLemdN2ybTYfhTNWH5gyHU4P",
  "key35": "3Zsje8uvREJN1yjGmcCUmiCmgiwHjxwFeipBhLrfQcWW5gnpSePSouAnoNhYeC6S92zTGZC4PBedVbe32XFRPpjh",
  "key36": "jbbc8oNuSdL32yK1uRZLnrdaY5BhZivBYJxgeuGc28M7CUuVd1BkotpZbHyKFQsf9erqbKTTPP7bvxMgtgshvYe",
  "key37": "22889bh8V1g9Ydjafw7ybGQmJTRFs8QbxEx2peT9LMWPm5Cqx5RMj836pM69SSmqDo4jvgjSvbFzXHhDGeN4dPZk",
  "key38": "5TqXztXRHYCHafrGxBWYFCAa6eahsEuCqZWJLfm7VihSUK34mi1TYjXdJGL2cgxBCA83t1MtcEoS1hP2NWeQ1iHY",
  "key39": "3nh6g9iyPwyTVyUwuPZu18kVtP7je7gWGCpkiEtHMvfhMciuRWpYh6EfxAX7NGTs7enaYbf78bgCHErnExPjdMrW",
  "key40": "2P7msqaq5LzhanXtUQJpfe5kk6BQpEjBxDLwzaFKpm9zYvdfsNTC7UUAfZVhD6UxUGzEfTHTrkZ9j5pu58cNb1PZ",
  "key41": "3K47ZNR2MGhz4ALWLcBmtAwjEfdXzxBMtjSm7ejYBNsb85CMXVL96nuQnfDrJaxwwhWCkHBEmr3vCPf1fmtRQC6c",
  "key42": "2KfCL4wr9WEG4kFFf6UkMBvS78PT8H9G17eicSWgeF6gRczShug5BBQJbxVmFr9N6xBX2McNEKsvf7qX45fUfA1Y",
  "key43": "5B9QHQBvdFtjvaia8QuaSjorC8xLj7fKAvpTWCCTYqZMh5qP8Ai18nGGzWzkKmjBWE8FYtDcc5whEXLfWcoNjemR",
  "key44": "4kGoHfuJaWibs8EUpHxJ4fSNDkjsfSLzdx7U9MHLNCdapkpxVrMpAgbzFbA8ude2YTWBb94iUAQjgxuRMXtzbpxe",
  "key45": "3ZqAdyfvnoYf7WrMD4EBd6bihVjsXdHffJQSQdLAFNxxu52WBfw6nieqqeVT2HqfH8FHGD74Wng9YHdUCxyqw3kN",
  "key46": "47bSwA5k96m8Z7HpPe3UmMyntzqzhFSQpUMEQ1HEL7GFK4fZukuT8SvJfMTxVGGVa1fjTYJwphj6EXwEazdXBgnd",
  "key47": "2SaBuieM3XMfsKSRvuiLBq4aLNzwxR3cvKBXJhYCHiFWk8V9R5FB6u2MHxqaFfPNzX45GoV8xnMXkrbvAuxG45As",
  "key48": "5FVqagqP9fNFFYVwPcENppBaunm4iWC5KdhbE9oXzhLhKJEyz2yRowsgP7uuHEUcccmVehneeC1SBFmhb1RTx9rN"
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
