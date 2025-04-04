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
    "2qoQLzWmtjGeS5H1wCMXuVzLsDUwBHfhpxZEg1ygVy8h8BqWcEbR5No9eFrpNmPdYN4JiDxEFBacQ296fSry3fvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3926cmGsC67R9PNdcBwB16ydVUTfbU4Mye1rfTDrxSXucvvbUo4Njg2vj6aEZTcikBU2Za7JQjXnpfM9HCSxyoNv",
  "key1": "3oSNqoNBPFiaYnUHPz7sFW2QqRbfxu52GQHASUE2H2KvnXwVpuyaaCEGQD18cPnhafb6Xv1QuzbC65ygGuXy5vyx",
  "key2": "fBnBjS4FyyEdAWLC4FPB2EDgFQifNeSUQEdEG47hj65g7DEJboAm48ZZ5tK9VCSGPycfJ67d37GDXWiaovrZqb2",
  "key3": "v6Le2PnYkPpz1zMCfKZ1rnzh7PxHXkyGdcUxZHbvPZtAfJG8h2LWKutJ58aLXGTWUdf1kgGYS1UrMSRgDPC8vCE",
  "key4": "WpVsfTtipqgNNPD9YmVMkGcdHNuPJ5aDDD5fu4gkz9jrkSLFB55hun8XgHaS63637wzwKZkdsagM1VuuFW3qeMf",
  "key5": "3TB9NswRWSiGMjskB7atEwmjxR97Z49TuoyQdUV3AuK1xr4ZJYZREzUjkJdCeu7WPVSXQdkm3caAVUEtp2MWnynr",
  "key6": "2zQfgwoDhg6vyHxWR5iaqQxH59xGwWbP8aJ2JRy9kioqdP5ZsmQowZDtJiZpYcY2ktosJofzuqWb3ruyeazbWhcM",
  "key7": "5xqN8jiyZE48pYuPW7YRQYerxRwbRSLM6taBKPVdaEfvD7uhNAUjermdX4cWrT44fKpoGmZneebtCsiRNkYknTBr",
  "key8": "dd3f1Ap3aJ2GXbvrrZzeH3KBMU8ibmKSLNmDEAXF966coEvbRxCES6WqPniTMWBqqf95GCeGMR9azQeb4JvoM1N",
  "key9": "4sfkQ46qCxQ4ZMwknyvpPCUYctBXZ9wZiHkiuTLqQHysrn2JrSLgqh7HfAmFhiLjBaonyJwLCk1LP2w28UdWyEYt",
  "key10": "25LqbrbxCpoH5eb2bzzbPyWxDiKVViFJx7NFTrVd7D97nBshJa5eA7VqxDUue3scLoh38545xW36Bj5QD77BRRHG",
  "key11": "3zuZvNdFNH6LSbUzUUDaHxoMQtpRBA5Wtf4vksEVy86zSZeaicvKjtW784cxbxdmbxqmhC6qYXsQeRkaDum9Kkzv",
  "key12": "5kxFwBPqWpsEYsZ6sr6gvfWo2ohUVmk9dehVMBLYL2ZH77h1CqSr22ehk8Lv9YKuTU3eHaFfa5T9zKuPYNfkAndq",
  "key13": "5mWhqxBa3FZVdBKGNMqFW6tQJNidwLAYs5SiahQiDLMLK8qeNmHU96Ci2WofU1Svzn6Z5KYsEc7aojq7LnRT6y71",
  "key14": "5NPRC6uDviPrUBD3UG44R5znTKozzbF9Jw2f7pPQWADqCmFM4NqPJYTFNgDrvqQEsuETPwcSuBVFd5amCV51FEM",
  "key15": "3Zd2dvu3yeDDGP3jtGNt5NhSjajdq5XQv3eXGW3NzLjVA5TSknHE3GVNjANMkgnJoov8Z6gjGGcFHwZ3YQt4n91B",
  "key16": "cZqmdaNGK9ymc1SWADxgHC2tZuTz4wx4ec3gFX6j6BRxWFjYrCqhruNSGNaGWReg14M7fANikV9ZjELTEvtmDwq",
  "key17": "5dsZfpcXupE1Ukwmmsbwbg4y5QVf6XfWgt6NvBJWeSd6CqNkzgfi8jRgieWjEKjfhz2zhnjPdqWtauqZMUJv9Q4f",
  "key18": "61wRiKZkNQsxJEjEd5oxkiQSEVqb4hirS7kMAKi785t7XsLZJ7ZE2YBxooyeffcariH3Ceua1GjvABuc5GDhaag5",
  "key19": "3ANFMTte1J7GUS162AACJWTdjnjYBwyXQDitB6JM3YJPBmqwXq1bMhJpjvh27kpRJcXLBhG6abyfJdEtHA9viM2z",
  "key20": "34Xa9Lm6Ftr194KWdNw9aUY7PCbqXaRZLVGh4DJKUWwz4YNFTfJbjKC84NhABUvmDj1v1jKt9E2edji9L1Kuq1w9",
  "key21": "55U14AhEx8MMuxRCcoZG6YDZcmbvNK3Q7h2sQwfvzF2jHAvJxrt4847TZgmPdw2fT3kZ6poZH8EP7UhE4V2piDwj",
  "key22": "56gy8M4zFEwTv66dsmWsHSx9wBJyEYKRocYCy4U6m5uChZiUNWYrjAcPuQUFvFbWeB1kthKxTBVNzRrd4LCPVYd7",
  "key23": "5ugRTB9d87bzENdWhbETVybNRb2Di4FPxREjdp9Kxjo5WEjGNsV9b2fhWARshWP5w8oEMzcDzqPzLytfuRUFQCxF",
  "key24": "48Ku75Y7psPyTyGjeho7rGLrB8HrDLFbme9WXHfAbT8DQtvd8Qg8yUf81PqiWbzbCoVTXYkC4Nui4qmDfSpkgzqT",
  "key25": "2UXCmaeQYxYw14ma73YCdxNBG6TVhKGu2vDeMAt2LznEhYFWSVvVJXT8qjcuKZdjPjFvoFaGofYNpciGBEEzBrSd",
  "key26": "3yQj3CopeKvfQQSeAvGYgN8hGrZ4jcQeTaRj34z5dBUdotXjcctJRPWndqsJjYkJakFnVF8pgJVgHbJJyXv5vzav",
  "key27": "27MWx69zE8ZBfsGmJGdRTFN4AGEcDFAiid6t5QMa269JRmmiV2huvKgAZJT3QdGFYEoSLvDGmhYkRaCNAcK7d978",
  "key28": "3nKLdut8dmsg8FVqDEeuNjFgKzrfDbj8nRyKnKcvba8KWRj1kLVympp5VXcvATdxZyR62Mc9rcb4TsEh8RP5eo9S",
  "key29": "2RhaVt7JSFNVxqmyW8Jko4BmNnmsrf33ip7Dx2MVDNgViVp8br6EHLoMJYsZcetSak9skRwLSR2QN7f2pWJZbK3j",
  "key30": "5A1C4acZfsuAKtZ869rwZMTzsG4uoBaeGb6m4k8xj5wNhLCLWSioH6254mVZHqn1n954payyStzcFjiG694QmMDi",
  "key31": "5pXokEcqmQqdd7CaJ8RWZ6ZifzCcKRSpxpzeMjdLAH5TimGg7NyQXUyniLDs2y9m5MDuidtwqAs6NeRqh96Qsf7Z",
  "key32": "5X5KXjZN1zzmxGExkAUL7Wihz5V848YkXiB6bZmnzwvATFGrFp86zdNtYcEApWtG81SeKmWTzkgBaKABugZEvjRc",
  "key33": "5SMhbC9bFFrRewViDvCA2ciDnvJ9KXgRRexgycmAsMuSfPZqW9RLnMqNKZzbj5ZiQncjRFicXPQk1NoXiDz7jgX9",
  "key34": "4PFwKmfWp4mC8ThMy7a3pYgnoyvccDoSYHZFpzwEXJpKzvABssQFSn9FjBzwLYeET6V41eZFNtfj3c1MEsU8peYh",
  "key35": "4DocFm1w9MZ4Gwx1iVPqG3qTruk1bhgNAXti74GGm8zpG5XbcKAwX3xXvcTCMb21ewziHUpA8rMc1Nuj2iRKJU5m",
  "key36": "3B94nrmNxFFSTis8eYtWQ7W9gSaKpTUYwCuUEP3D7fWQ95oNfcBKi5RmdTcXDfdUodiGmB543k1PGEX27CXf1PaP",
  "key37": "2m4Z3teXy3VJJD92ZTPusj6PrEAT1WCgbaS4ZWwyVdXVFLBXYZMXgUU9NtK6Bj9L81quaVZuTGKuBAJnYsiu7Fd4",
  "key38": "4qopGoYH4JmuDuwSU1HqY2jAmoyNEnce9s6tRmreZZM2E1BsNyPtVbvYWLmQPTJsMGDsqMfFuwWAF2wAGR1nCPNj",
  "key39": "3SaKpNELaPjFtihKq7zpzBB7o8tfQQxoy6zTjfCMxGh3xumkofobKQghdruZNqMNK7wh4dJgMaQFLyUdy3DbCi9J",
  "key40": "AA5uqL3A91k9pdX5XTfKAr6d1ftf8JJFunvzkQyqNKUxaBv7gAfxFr9nyVwfNSL8jmCUdpZfqQsb5dULPhrLyAH"
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
