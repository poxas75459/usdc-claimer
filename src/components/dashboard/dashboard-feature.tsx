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
    "8FTCuYwJFvwMruV2fTxgkvDd9dR12mGXHcQLAg6JEfKuJR4gfAdbDHNEyka7oEg8TzAg2dZQpMBuVKuy7bUuyUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7GGe8m1Ps8SHvmXgmT6sBhKgEb8JzngtpVTGfhVHY6Xz7vc61kuhEnyathHRri7wFtWaemDbpZVEV9GmZUhLrV8",
  "key1": "4MXUo88Pth8DwCFyXZbTryfVnayKfeRZX6k71h28f9p2oCkKjNSZMoLmz65Eq2wK2EwLPRTj23PoY7fLK5hTQu1B",
  "key2": "2iv7EsvvZTi3AKyEgCABjVPVcdQ77vcTXDDivNk2RfiJh9hy8PX4PzqTdALTuW2YFx9sqv6GcgqwzV9heTkEedL6",
  "key3": "2AKQhUwx1WhHEntFrTuAUJ3mD7ckKqFqXvhf4t1YzWJYZug12L3b3ux9mFQ5pJDqsxJE32CyuSDV9pJ4R95zA1ga",
  "key4": "4yomegcfYM66k8v7Vo5dT2d2ohVmHuRyBonNdFZzUTDA26wxH1j1eaEPRaTw9MXiXVkWjRhHEaRFFGAKMbHf722F",
  "key5": "4HEA2cV6pCLWGeACK2owWCDE5d6j7U1z3nZE9zfJn92pXPxeiXd4QpazX9Y41jHqZUt6jbok83Gn9etHJrgMcaJB",
  "key6": "3UnFtp8QYMvwKWNgSdG87w5Pk56rAW8zVyjL8G1bTxhE6KUGDDfXU2eXTbv7K7qkSV2rdetLcweQhAD475sLRZ1d",
  "key7": "2ocjTwF9woRs642MzFnoCbrw1eJgLNwE19y9smrwbAb5FPVBKGgrHJgFAtixk5YhEdyHL2YKFDFgarz8nbrdGESq",
  "key8": "3vVpfgKXfpP6XqoFYTNq5WEKeFLuxMu1UqgFzgo5PFoSXTmapyBkNCNn8u52iDwRDy9Hjz1CDb5gtjCHc52pL2SZ",
  "key9": "4UjBPbEwCVHqhi4yEMHCAbihfU3phfJYRCsRbH6GS9KhLhyANj74DythrPqsCiaU5G6c4UcCoo1Xzyk2uWBzZRJg",
  "key10": "2WQrZ874eAv8x2J9aNwfizxArLraTnp1mWfhhNJmu8vL2fFjNX8ogTbgWZBM9vXEkUVJnPctg1UkbwzxXe3zJwK3",
  "key11": "4vr19y7AVm3zpGKVspuKpKs77w7uLsDozDXrEUsDzWxLgJb9Vk3yCtWVxiHHpxFRGvEVpSsUCkNnaxdwaBX9jmca",
  "key12": "Rnsz5qVQTSQMuVzpmnX8NFWsgHEStinqaXsWgByuE5wmYimLJUjbUAD9NyhSryrH2622viANtczAWbx4U2TiK2Z",
  "key13": "3LUmPbH29QsFY3KKQbw2AubUwVurcSSfLzHGPeivh6ePMqruWvYyPNMgpV6r7VJenFNhjhG2bjjm7PLQgPiqEken",
  "key14": "2FJ1aUUes1NcoQx16CYG9zhQ7L6KBHokjU715uhNLQq2sUqrVt2o8jXxHw4SK1KHz82S2LaBAFStXPXh5VEAo41W",
  "key15": "3DFi583CBqLvu5JSwL9MzdR1ecmQAcSRz1nexbevBQqvyr45sZrymkZpjN8xwzNQnwZ4XLUKoUyiLYMKpggVt16t",
  "key16": "28rs9ipV76AtWwYJjE47g5LjGUyKLkQXxvWjnuSLQWE9MZtLpVHnVbvKdnPoLLVWFNMUoXkSf14AE7YSN7b9sEag",
  "key17": "4aDWSpxgS78H3gZaRYBzBUG4XDTGsEwSejpMZGazjVJBbSbiyoatyxfkwo4WEAxqa1ayURpsTw29QQNfdnM2EuTw",
  "key18": "3ALVuuSdL1Hth7V6wK4KW3y7ismuqFwJYLxVy6Zi4jGnayQdeVCmWpyC7WakYCVJ43skBNtysQnv4HyUJaDnzcEm",
  "key19": "iMhzaCvJ22QckasUsZLZCuiiNXYSZdkZASNDfsZuakrKtGABG7rYzEDwf6QLXgwqHWyq84U5tcotzruwxk6Aabd",
  "key20": "2e37aBBKu6zMXVQhyaqdXjqPbt2BiDv6ajrW1WBGxMrv3LJVXGq7854JCKwvW1622eskFGH3huCRCsDx9V8Gbz9h",
  "key21": "2QoMuTfXG99jrDcDoTtSFqGgbPHDbErSB3WaH3chDry94CF2DTb5BM5Jp3RnCD26DEWU6EvwD787LxiEFKRpGZ6e",
  "key22": "5FEFbPiH8forzuWBn7ju16b5tMh7G2ywTuqrik3LsaUxNjCUrhEVGrqoMVsv5H65GsmuHbUmLJctQrQxeGVf7N1o",
  "key23": "47PhDb3haYbuHzXoMmbCqWMYTGbS2MHDSVqV2GWv8vPMFNpTLMFb6Rnr2uj1nQNfMzprokGLUSNNmZqP75vftxk4",
  "key24": "2i1zHeFEF1V7PsMZsCRrX3SYh8HxRhu5pbSVBz1aFwLkZ7MtXPeWk458k8DwbvrRdBwjaD1jqyZf96QJ6GQu57Ax",
  "key25": "2UCvAt5oFctGwwnQbDkB46qTNoEpxvAAKGzBzuunWAURRFaBUTyDjRrhrU6RU1tYuXw3n6EpfckJx7TDKpFCSQ5q",
  "key26": "3rpJMvGe6zkNygKrdcQgo6ArVZseTqPUHjzUVGPQkeH18rth7bMVXaYf4nAWyAzjEVYZWPHJ5rc5ZhVZaQP3Sxsv",
  "key27": "u2G7S463YWnnE4Y8rtqTVBNpnL4LDsGA6Vcg8ovjujy4Z8MW4UsiyggvBpvbRAuSRhq8DJZ4eg8qorLs6vnU2tE",
  "key28": "3sR7HmkBEy4N63r5251o238xTaDM4bd5Z3dAVU2js9CgnHjcFSrzFck5bXQrrkkftfFEAc3LXDvZ9uEaEw6XpsE9",
  "key29": "3WzDzx6G5wW5UbATLvgtXT4NkYRdPpyTNCqZRzUp7CTFK7PgVAAYiAjJAGnWFkP8Tq88EYaATUbfKvKMP53SZkx2",
  "key30": "5dQvw8iVxj1ieh2yTNgKEbAGAiubr1FaJFiyjyBU4UnHT3pWFajJ7KVR64pNfoe59mHh78Y6Mp4EVQukAYQWyEvJ",
  "key31": "4U6HcBqtc7cdtoFdt22sHjNdydZEJcCaibL79voTtS8bTZMPP4J66AxdqgQohQrEt2nCbyCfttrwXcDj1Sq5ZZaT",
  "key32": "3cvS7GZriXEDW3B4SaU5xNqRSphfpbeBKfkrhpX3b8JYEHAprz4ZwKpZKRNitvVJyA7XwaMH2VJV2GCQSoG1KpG",
  "key33": "3KVAPHEayBTnmbdMTp86M21PuES7DLsNZk1BMoPmJ5qRQP57KZCieqB7TMTRYWHDTHfzYWpv5fft9ZH5kNDbBFoa",
  "key34": "29Y89yTTNTUJrdqAaDXSpB5iBAzPMjrm7io7mwudWv6RijCRBGCV7RDYGq3jp8MiLinKpdeMa4B1rmjPpURA73tV",
  "key35": "51ZMRtyJ5YTZA32nHGJpy9jhT5V4DGcmQ8LLQB5FrUsgJJzv8F1JZQnMEMGwsCjGnz4894vd6eKTev9HoJ8ksdDH",
  "key36": "5VGHbaXpL95sLssRqBfaSd1CuAZgqUTGhSkr1hHH8dsnSjUUkA3h13rdrcsfa52tuxspBW4o5BC3fZ1o8yiiGLjK",
  "key37": "4fe9yLeEMHbYnx15cguqqjzmzVWXxTvnNFf6eSGhjZWnSUJtT7en5qf2BD28Ye1xqVGDLYqkkgqEnegnf4Bq1ugu",
  "key38": "2MDpSVFxwiw88kkPb9rnDdDbmS37LRcc3yX16TLzqrfJBq6NtF2TbBLd5TxkGfUdNvXEzDvvKYLTWd6f79n5hrb2",
  "key39": "5XsTpEjQJeuDHz18abBZGzftN4qqdPnVpcf9A7LAgJsDaoGrGuR6saEuev8z5P9TEogRW6cnyGokDjc7eq6JnTqM",
  "key40": "2TtHHE8eGXoM6g81t22YwQibVKwmrWLhANGinmzRWDx4bRPAvVXf8Pfbyd5EAGJMd2fcoC6bamrP9ZKrMNroL5QD",
  "key41": "3vH72WA6o7b1cPPeWAsFRMkophYMfNkC51qsML7dSThXP8t1V18jcMSF6tELHySEdrbeLBj58GxWHR16GXFgJZop",
  "key42": "27NcraF8jQqqT2yK4NRbZ7Fad9EZNvE37TMHz4TLMAaCK8vRiQ6Na39gPpFQdgWE3tBm7BPA5rmJqMESDRWHRyy9",
  "key43": "5CwvAVc9bJ1ySTjYzCeMvXnqxTK2LQRSz5XqVkBq9yPfcZfBsS3sGy2G84aQrPxpZcDMFJfEgboUjwE6ZjzBpLQN",
  "key44": "9DA8MUTiMR3mtn33i4riUBbcxqp1zQgsCq8GMWc1wR5dzBthLja7p3x5844FZBrA5jFvz8fFwPJw4UhZv5ZtDqH",
  "key45": "33X9Ric92gwU5bj6B9ddee4EhiPQ33YyjnhsP9vEhegHWihwCJJzVDSdz9B9teknhvVG3d9B7kPaS7avoroqNwwN",
  "key46": "41VpwKuKjd3Pzt2wfvrN2xhi1A8Nitiq8zChUDV9uydGt11QhmgkxisffyU5rw6CkcULJQcfgriaUZoKhq14SMAg",
  "key47": "S5dTJDJ4HQ4PC2AhUhxdhwj3brvbNGNySPYPkegookqMWEWWBxUKQYUE251XfRf131CsgM7shAVP6EBNp4U8u1E"
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
