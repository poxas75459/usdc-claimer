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
    "KuioLhq4uepBh7bkA6tLAu8JZsR9AmeRgCbk2EkuLEXwjLMwA8jV7iC58XNdzupVm4jCreYJW9WjPDVGsqxxUaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5visietN8ifGhPd6iRukfgKynWnTvFyJvkDm3ZjnKMPvXu3n1p1iGYgWmSvvPqjukqUVoqvib9gcC613YUw6rZjT",
  "key1": "58hrrshAkS5pDU1sLiFugt1tkvnoKpnQg7XtzN4jBJRWxhykAD7DMCTsZ885hi2nrLwJKiR9GTY2mrXKvoqpR421",
  "key2": "3hyFPQmLtzhgFUhMq29tTRc3ugaiHZArjtECnAa2d1r8xXHMhWf9LEv4vaA7asQ9yvZPhiAbwKobqnt2YyNQFFi7",
  "key3": "3Zg4Dhg6HBz8b9ezTqb2qimn1sTXoLQLo1sgDhGYX8HS1mZMfyvxdc6uXL82eiyrmg8NByyEc1DPaooWhmc9D1Fz",
  "key4": "5naUQo4Cvm1pPo7PtcNcNVhjser7YLTJXibihcbqKmKfiDYSsi6CPfggRqhpFyraTkDhv7iDwmnh65rWZneBow3m",
  "key5": "4xtnfY7sA8kb4YVDZF1WuRgRKrm84LrjhiotVkxVLW3DzzLoAxXMLhVs6YcJt6kG2BfCgbWezmk7BWpQnEsL6WVc",
  "key6": "4akvJUtmKG518WPFL66AWGZqqHmumPqq2TxnZpGR2ihJMSQoHnBWVLapZqUTxFKQZSPR426dtRCK4MureLhLZdwS",
  "key7": "3UQ5GfbfuhHB6pyTctBGRYCzJpjarSXKd28x25krVuGoQM5z9VXHafG3rnwVBsh4zT7sr22zFxAPAknksykD8hyg",
  "key8": "4wxrPJcyFrN9oTDXuLYRWkqSJ9A3v2JnDA872C3iX4SWBfiL6rvCrgjRV5eFJaVP92PCk2evTgFRevRyPJpZeKjy",
  "key9": "5dTQrgu5Pa8TaxuNqREvuKkXHigFiHqYSzYiAhRGvysSUoeTt7uqrJ8PQBwju5EMVkMjH3iqWxuruWQ6dpJb2ztV",
  "key10": "j3BV9M8fLHzJF8yq6aWnK3PvbpNf4dJ2akuLCLh2e6jn355Ytfq68TEamhHB5pkqBJpC2sjAjEL68Lo7cvjbzmD",
  "key11": "3PgS3isTjCLTAcvanf5X9hySuLaG61GBXipEdsxkq7YgQBUzAdVgL7ug4wPYovYEraNck9PjobhnZuBcB6BpK4wc",
  "key12": "kHGBBnUgjZ1YDzYM1atj2uDafpebh5joU2Tuy5idwy8ybrDkxqHzvi9hnFfW2ifSiFhoPfX5iyvf4NmudkXDeUu",
  "key13": "437VydNoXjjXDhDWUSgDQCp6hUbEnU1xeW2wAjpkWPtosswUPkeHP3zgcv1WSB8MKKZs7cXygSVC3ZSoncmERSvR",
  "key14": "2KpAEnGjD4AKWFyyqu72sUHWkqhegP9Xg7Jx5H38cAN7KRPW7WcG8kuNpHNVK49dKkyyjpxvbgmb647gF5ihaLgS",
  "key15": "3BeAGLRP1uw4WN5CYgMEin3AmRLPqCUz4niHnGb7vqYZxYpxNNhYqLQJiXwgjLiySgRoERu6qi3954FDh2Wm46Jx",
  "key16": "2Li1mmSbVQWDBybae931fJaH4HiErLhokjPoUy6ctQVroG5EPGPEDyRFdeo2E4VHDE477GZvMzhEwxWLijh6J8vW",
  "key17": "5W9nVFBZWXSCkuWbcYY79NggyX5DS7E679RuHDWf9BEDUHqdhmDRgqJbwFa2rYSiKbek4ztM9km46SqUgvdWKPSz",
  "key18": "2QTQdqwB6DT6wEuHRyhnc3UhwqLr8ocmuHv3EaHb6SB1PdY32iJi2YsXj4JAXsPQsZnb38VtF9zMbQXme9ZAHKLE",
  "key19": "2psqCex9i7ZH8yjg9jPg9kowswPSATwpTtWRbmHF76B7LrhpPWnf5L5kmUntDX9AywFoioRXcPmdQSavrQTyp5Yt",
  "key20": "4WHxGQ793t1hqiBBCCUDNHY2E3XQ2zAoyuEamL1zcvbAiSn3XKaSh6YcjNz7AHR4LMLiZ9cEs19xw5va1hWLF12m",
  "key21": "3V597woTyFwZZro9Ek49W8URT4BmXb3xiXhmjYDgvk8FX259GxdwwUGJbGpBuBMoKmnGiYKsbtVyLWjqtosVxDiY",
  "key22": "2qz3PUFKgsAHfQ7m3TbVmC57G2YnfCoiwmZ5SZPBuCaeb7MvmC6vc9akswwM17shyDQngggAkh542cpKPkJzaf7z",
  "key23": "2zJ5y4CsY7nrzkB1Eu3dHtjXwNrDBkb2qPRjgCcSzt5RsDgVTbFYedC7f5wc1fiKdmNYrvJD7XSo5v31A3XCpM75",
  "key24": "2UyRJ7akmzxcXx3njDUX7ZiReGEv8tmxTEKxhJQKs4tC9PYJbwGrT8EpY2HjVXEfy1UUXSfJVRgzcMLYKMMcYMQt",
  "key25": "3wFoXFzkKrnRJmsh52AMyNxXEaTEjR3sgNbvjc9wSARmkAnmHzVo8cXWbkouZrS5tqFHaHJMdyp5p7hots18bkYh",
  "key26": "2tsN31uEVX8LtaHghFNzMAJEVBqHBbwWLD3gKLUk2nNA6L5y2ySfd8b72hbtXHrcKuEwvimDAriMgNG9Cd3P1JLP",
  "key27": "4jUHZvDBCyKH7SNkp2Hkn2N4VQQFkpt1MS2mgZz1v2Q8GCLZ2fkCvF7AKS25cdyN4wzJRyQHujc4Jb3qSdizpUMv",
  "key28": "4JXAbG2jg9BnzvnrPiWHfPwihoEYvZ5R3xgSbttCEJdGhSLFbLTK6id893sKRaArX6HZzG8Sq5rd6PRVdys9MGVd",
  "key29": "3tCYMEkrpTGrZqEUwFUKHZpXJw56ZTFEKKoTWR29ghRysrtwvXSD9uFx2x8gU9Wi8tLynDTk8w3xUEfF7LMX9dcK",
  "key30": "2y3rRaKUgwKQ8TsBiLDJApMgQQ7Bh8kJCvLqhhg5upLFXVGDjVsHvfQgFnq73nXPPmHodCuBjyJ7X4t5J7im7GY4",
  "key31": "3qkCjHscz4sQf2tdGyYUq9AfVBrnGmAgjaBKn11dp6oG26B9wVbdd2MvCocC5gHiFkEQPDwu2YwP5DFCo3Pr9tSf",
  "key32": "29FgSkJRZVzF9fDRREaopWXP4pbq6EFrRjpoPd9HoAi2avkQUe9kssrSdrEXXsYEjN5Y6pqA9pwd6aZPhZcPsNfX",
  "key33": "67oBDw26mP7yzZ5CK9H829VevBAt5nZdXFefmyc7DNvM8RNpJKb76JdknFKuAiAEEcKQX1moX7m8AHxHsDWhF4sj",
  "key34": "5k1SnDMKEBdn5ZLJVnWrfusvMcDDDi9bDE45c8JiFjU5cQYxsxPgr8TqcM997ArJehsFjsQt3n3g23SB4XLo1twH",
  "key35": "5mYfQVMVkAmpJ9DHsTjxb7gdHsaLW6hVTW1yAJKmCbVEUpMKUnVUzXaaJ5nXviAP7KuDQPVddZSwP3b27okznDHf",
  "key36": "4b4QurFbjm8DFes9nfbkPFhvtokQkGx4mY1mLN2T8aRpVTaBHNDrZjpCqHZjxJVdQJngwCh6FX8yqDR3WK8WF269",
  "key37": "5R1u9YQ7qWVjw1q8LxmhSXuwswTSkRPYXEkuRGZpSRTvquyXPEV89qaEQCVQrKgUXKPsiDcjLSmZLJiMxdFviV7U",
  "key38": "5tFy1LGYePhzNwWvRcCL2i6aXqwDoN5Sdq5kL24xb4MY5N8xfryaJ6MwjdqsYRYeWXHqXL6dvCZpCFtnmRWwixys",
  "key39": "xGKjGx6b7gJshspWTzfBPZHNSjK8HrFDESZStBmGnGwiPPLYMMFSA4Se4nHbaHdjYmaTS7wR9YF1XfyFxFwrEd4",
  "key40": "3ChiT3d8uHRj5t1FMTeZ2BWXfdAKWmWSbJDGDukDoAh7p8yVG78JBcX8DjWdLd6K21fQRBk1n9LWsyBvx5oUb5bi",
  "key41": "iwUa14JcazG2zz2LvdDp9itwgRv46JTPSq4LhhLVgzJ3Kdr7Aobfxcnm7xj9Bv72A9CizEf5zsRfAHRazBhsewh",
  "key42": "5d6JBvqwaaXgL1kVpgMQNmJFowPhgXAPX4x9cjnBtMAPBaGfHzXfXdb5ou5nVKsZ2hSRmm2JbUEp69biAJzh4ZYh",
  "key43": "3VYFionvPdwwZwgBNwxPr8NB2CGEar3YKJNbmLp3Fndzi7ZWuxBFzxPqKsnDxFGz4DMdDZouMzMKK6kq9ukEkD1P",
  "key44": "3pFxV3whsuWnPBDDsJajG2Spku4UeLFoux99fcW9nkcpHN2GvFDxHBKsHZTKxb3pU8eK2GxYQnbNKbfaW3H3K4Ty",
  "key45": "3GrMTpjrjmkNkEfAvxt3KepaMdUkQDf37jfWYmcvPuVvmfBGa1E9vXL9KbQf1Ak8o7b6nBQFWRAcKRaptBkLJAYi",
  "key46": "j1dMudoZeYevbuywfE6cCHjmWJkQLU1iu4UKCzEK2Pre5RSddBZa1aDJNfVpxSD5B5bGerRVUZQmx8BzmYoXk6R",
  "key47": "2ojvtQjc4SLmTasbwoEexfE7RuDo4ppyG4MhFHhXzi89fPfj8ecGVUM3vdto97egteFWDiRhnkddKzhWRmzSXnqj",
  "key48": "3DfWz8a95jXhHbiXxMgi2fCBmNZhF8X8WJ5fEbT7VU6tAuTsoJbzqG3Kzp8rW6rWwL8498uv2bBC3i4RgkkvUD4S",
  "key49": "4sueRAJb3Rfa1GJcqG2ptNuTZ7TfqdAiy37RK2P6QAabYxMkYc4YqUv16a17XwTFgZ7xwwrPej7rSFXG3cxXMiJF"
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
