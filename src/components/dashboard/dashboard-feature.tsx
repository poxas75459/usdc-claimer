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
    "3dCso2Y6MtbH4Gob4Q9qbLpF5C46tVq9k69zppx9LscpmsLsENXddSFEZVysyR2vNu4WPiNPKUThdwSwaaTvWBHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XxFL3DYZQ6zK1bLRmd5cUdb11aukyc7BnZUXc4V1oWWwUTP8yBGK2aK7iJiPMBZyPWmz3AvZj7P2vn78iAyWmFr",
  "key1": "5wJcngfhDbMe6qzQiEZNg5p5FEkQE7JHpuN2KGbQXXw1KKkr2Ra2qUidKpc6oros9k5irLyHem6pujoHSpf3ekbw",
  "key2": "3FE2FhLRyKmYz7yBSVUXS48vhNiTLqbxnhdtUzobzrKmNFeLdr5dTs9NrXz4oNLH8yKtpeEZhzUnYyoiAXWQrgH9",
  "key3": "3p6ykMFKa1ER1CQDy24x8Zxa3CL4qRYmuT4tbxe9ggk2GWVrYKL6382xaQ4d19Qw3BafrNLYStBkRP2JKEdfEXv4",
  "key4": "bJLkREkMQcu8Awt5WDV7wx4qQZYaZ6Jj5FaswbxWiDnDcnHecij2GVrXXLJkFqqLA5eHTF3VnGEsqzWsQQxnwwe",
  "key5": "ADyDhMJbaNX3wni91HKv9gNfHYJL3uYruuskfokhRmyCVvuGQ7qFKFVj5xCkT1ZHrLjXXHwHG9mvhba5z3QGfVK",
  "key6": "64ARDCfSzYgFuDKtcx1DcpVsyw4M2HKN2S5YDd6RH4xbhq3oLeGpSK8aG2CFBwfBCF7fub7ZGzEdf77UjNSryLt9",
  "key7": "4dKWzgikjK5fhMEKC9g29NbNT7FiPSQMRioLmtghUtQnPAkEDRYvqzFDi8SVsWkPY6pmAgNx8BqDpkPvX6fxACAz",
  "key8": "8BZP5LDaziFq2NdgoWSru7MVQupaPm5McqVxFDZQsJm3ntjwg1FrBNT74cgr6a3cbdMiFLR6S5SkoQq2CoDGjQQ",
  "key9": "2EcVmswbSqeeL1pmM3zddp9VaD1g42DPpKtrwshLeLJND7KoFXMtFBzABVrAgHok7UaqinWMPxWRBbFsU42jUGrG",
  "key10": "wrrsKtMvmrUr2t3GUCJMCndhA4d6vg7t6YhAwMGK6sWwZCr7AfZshkzVwYpiTgVNLVRExqJPK5FtgtKhA76Qgoy",
  "key11": "5gFXzTwb94uxRnGTRah2Tg7yjRxFHEbzyWRAstnwVbCw7xFRx4fyAJD5syMvcXyFNudELfs8Xwsq5ZWvEuwMiNhw",
  "key12": "66GiHVqHjm5ixLhCkvSyHwMsDc6xKRTGvXVxewg6RHCP3MCXn2tNj6y4sSbu84PLaRQYUu2q8DkmodVSUC83oKRs",
  "key13": "5eLhe6fgLbW8JidU1AQBzpQV8wyDJoPhccvsE5aEuGrxoC57e9agYXXQu9X5M6CfY4uFx6P859kitN5fmj766J9d",
  "key14": "26NjYjtnkS3FVFdtVKcfc5SaUfLxvsPbkbLk2y8ZfL4t32QPs1aXjVrRaa8gh6dWXX6jDZGRHrmFGfhtF4H8nSQy",
  "key15": "3rE4cPGC5wV8qUy17yY3yKxjNdgZUAGXBRBVHGqoevxxAmAiFyQLW4ttbAWonTsG7p6r3yacDwauwA77CRBQfRnx",
  "key16": "22hQPpmpQfi4buCvb7MPYa84PdbQwf7fJExCVYZgkjohQSSTJBmZM9d1s7s6qrbWiCwC4w1CvVFXx56THQC6jgJU",
  "key17": "Y91s4ucSx1CR76Fqi1SYQhzopBiXLsdkvcg62Ldeg4boBaL58Ua4Dtqo8pUfCiuJsrG4ASMkjJYP7B1L2gqgsLu",
  "key18": "4ZJMWAKKTHP26zx8ZsT9QRmSwUuuWebDVwGW5qrxpTRU6SU2XF9yF6tuouRw85kQz976dH9Ki2a646ubCp8anVPC",
  "key19": "4ZJurWq7w4QcVhL3cvuUDKveTRwEbRmXSUVMC5WLJqUNBmKsStX6tHnfy6vF1aaK5M9nB7PQhSJ3pCDRt7M9uSCH",
  "key20": "5e6ibAFYc2sGR7j549TpPGjuP7obVjsRBKLrqn7saMmcW6bRSk96hvBfZzJfXtWvRob6FRdsKi6LgUdJwWBTQUcK",
  "key21": "2PR3MWc4GrDBE6P7y73VoiDtb1ce5D2q9hPJQKeRJG1UKuChQJKk4nXMS9jA8mNs7daztoaj8F8nVYExqBJVvPSM",
  "key22": "48ykQQZZ747t4JrveLhtjBT3zdcSSWUEMHucqbBo4e7MYnC8Y7MvfmjbNizhTcdfkuBuDKoNh9DHthWS5vyD6S4q",
  "key23": "2SfeVAY8inLJbEtkjcFr7U9rXmNdJLNP7AtkEEMPrh6KsnwXX5kzXm8y9mss1LUCgqwFsDcAoZKoPPcKfvcD2f2i",
  "key24": "4QE1GPQCKWJNi2MUhJszZTsYyN79F3K3dBEvZZTJPBtoEzAcpcHHhMJRMUmPVCRLmfjUUmsv1iKHkpEmYPLbqtT",
  "key25": "4YYSjBj3J4czDRpbPzhH4Nf1p7DRh31mH4vHBbrBEgubsY4wtA5F1hTWtJkvAuvgBcNw83y5T2QJdsuJrwtdJ4uB",
  "key26": "62rH85M6edig1tuc3WPdMms8KHPGjoSESfebz4USE2bQSE18SdVHcbVqaJkuFCWCpXDeYKCvEg2ighFocri6oMW3",
  "key27": "Q5QZURXM2z3yrZNQ33amZbBBUGrPh2Hu4BStq8GgpqkAhV3hWsaN4jadQLrMTyqynwZp33ShojLxuaz14Qsp9WW",
  "key28": "5J7bzuEEXbX2vNk5k2hwjbE7A14Dx853DMtgwHd374yLK1NZ95nneS95chmBy4zQWH48E5CGBzunDMa5d6b1jWmG",
  "key29": "C3HgAebt7Qp2mdqi8xjYvVAqydSuwJsJgU7YPZFWe16x8F3mrKjDaWo4zD1qXu3bbLtpZaN9Xe7dqDRsBsKowzt",
  "key30": "4eEWb9G5aJy2MiVZv7j65jYtvb5AKuK77sj1f3C6fh8PpaGwqsTAWUeRL7HuCotHieipBirRhpJP1nusygg8AMUq",
  "key31": "63n8y99ACsmqn4DVSkqZug18geryB8hnJ4DTm8pZQ1ayvNNCTnpjVjziodNSphyxbaL9vKooFPZJvKsRwM8tRbsp",
  "key32": "3QPBi2MK3XEP2KTPVSR9NqsoTujotw7vBRxrcrWxgTB5DkXArTY1MYLxsa4TCjFgG5PSh42J4dgj7TnhwApjqE5H",
  "key33": "3fH6yJeYS4PKfZX8YtN7q4RrtPBsuQGgc98A2inC6ASpYYuiQKnoA7T8izJvsjQ4E34jwKNGh1xFwir53mVFQYrb",
  "key34": "zJvQ1svbE2x8FMHFP72FrhA9DZt5idPcnJumk1vFEVhMp1iJKnK18jxaa6fQgkq59PEBUXa6siCrJ8kSe3B9qAy",
  "key35": "5P2PQD9Jqy9iFhKvdxZe51e3MvxDm2nuBRiPKWXuB1kEAFn6kJCixERRKs7CMg8JFczstCMrt7dqvztJukNMPe8B",
  "key36": "UsxfuZ4HcHfEvjt6fu9G4QDVyKo9srVzTqsVWGGdCDRTM4kQWaiFr6sMVZ2Cm8fekFjj8LeyBvhXgUMi3JiZUqP",
  "key37": "3fama6py23z3ftduZHMCj7Nfht5eHei1D8dACd3rx5QZoCq51XdVsG49bxZputLPyw5FwMXAXRaL6QNFpQEHv19t",
  "key38": "29UAWzEJ5JVp7jrKi4F9KYkSh7NhVsyqA16NVdXEmYAymZjYiKiu3BcjLjCKZYm7UcFh5UPgHbz4peGKtgsXXJ5z",
  "key39": "2iBMMuD3z47CjQ1TuGSb5ybbmvKa52J9kM8pNwWFgvHSiwyBLeb9Pu2ocnJmWtPSi5zZKvuKWhAoqPBALgwkvUQp",
  "key40": "214iHMBtEogSHHZsh6zWqjmy7gTFQjVCRcuh96Z6Y5Evo5SV8PNEKh8nfYSU9gpeV7AJDijinSToyvrrFiTQjVUg",
  "key41": "wF47TyBR2AK6GgkFcfFN5E23CdCq1dLKPVdbYTk4zRjM44RycXv3wCryWZ2LwywR6Di9pzpFNAL7nFbTPRD9dfe",
  "key42": "wNytiHTL64W4AE5DFFG4Wpb8tqe8j9zfTDU437t8tpMnfy651qrt9hYu7Wy4ig55qiCaa6hby1B1qAqBAxZspKo",
  "key43": "36fwdQHUop5gZG8XJ3ovuUqBcPnTsM1zrEyyP3SVozuk5EvRmmQWsHYvTL9xphRXoBU7VbNJ7Q6t3gtfVKTmJXMk"
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
