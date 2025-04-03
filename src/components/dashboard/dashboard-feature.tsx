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
    "655xGSP8iXCv8CBiwkwf8xx4zHxp8hGjrTSBA7Ho81wZzjdDAphxwRUKxKszUNYX1UA6YfBj3RhAuyhFe3PNymsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jwd8YA2r99q65aj9me5p2wEEegYwXH4viK7JAsPcHwiijzwRWr6J5pA1w2FRvj73fHuiTBmo3hXqZjDsXPT3o1P",
  "key1": "xxQvtYSu3JeTvE4w5JKtyDNjFmCTVbz2j8cuGVsLYEBaUiwiN7Zr4yajFqqA2dNcqFoJHXht2sf5rvdDKUaS7DZ",
  "key2": "5MvMMfbZbKLEvFeUSUbvzkLkBxunUymAGzMNE3YZMLa8fWd6wirZqi1UHAPrw8v1vYaoz1HDSYxQ6MBcDGBJFkUp",
  "key3": "2pxWuEJkm2XqgJkMrmUNGoAnQ3MpzwgC62Kgub67jSXxab6G6ihevVwc58CZ1tmwtL4W9CyLXn1Yw7AuF3zMG7cK",
  "key4": "5LL1EaVD2axKF3Kp4HrUQawBG3dqu2P8pUMKpuqihkzmDdStMEmnfewrVgNsRVwLrKSSwZ7GiaSDF89Bs8TPsukK",
  "key5": "3viATjHPBXY9wjtALaoDUQofg5eCNFh2ESae8tPmqD8Sbf6FwW1VnHFDiN5XAQqJHxwxFtGQ7Qg9yNWqhbNM8Jkq",
  "key6": "5oYLXNWbDMJ6PUDaGa3t9mjbsXq2EvoVHM7MKHarjeHwUYbKJaCdbVGCrdgLhSmM38DKU7NUK2MFEZjtCF8JAAv7",
  "key7": "2ezgBtrZJJTh2KL4AUECck6rFs7QWJVaT9t2jm6Veh2vX2BPoSNBgiY3AzSemmRRBGZePXFQjh8KZe1Vj4xNgiXf",
  "key8": "4afj5fyWXxyUjNio1ecFnAdzUWbwcByHbNAzoEvzRPjYjUe88XADyGfhCVf7B5bruxpmGNdnzNo4t5z9meGbj7XY",
  "key9": "37VfP7dZb4gQ998H8gDmeQcQ32ae7nAQH1zggXuWs4qRWXsGZAnm9KamfCZXyR4UeWmgAi5V7A4fVD6u41tH2oVj",
  "key10": "hit9Yg4nyGGfpVRJ9RUFJaSJoi9Yg1RLHdiyzKBDexi7uDQuVBtnoxwwgYmfDULAYBmHc2xdCVQsBY96aMeUsdN",
  "key11": "5fjcxQP3phUKH5GHhBcPXUWLkpNVVLsWhSz7TSvYQKAaQeZ2t9wKqnvpaxMpEQ7iNJyiaAEhCX9zRBqq75JDjxeo",
  "key12": "2PHpQWJBXJ6DkxfHxXWnWGmUCBadC5mbn1zDz6BjgyyhBDFCyJTt86q2Ha2CG29rtTf2LRKc3TLCMgRMroxhJe3H",
  "key13": "EMZKSyUb531Ro4XLDCwctp8pLMoUrRPhSVDmKS3F9PBU31jhdJLPHpWmR58cSM72U1xLB7wBx4RF3jhwzZYRSQt",
  "key14": "wr5sPfPtLjWzEZpMMGzCrQs1SQ7rgvG1dScCYWVReM8aTMj4LD7MvTmefUBztny541CZJWRpKwz7sE7ueYCD1Hb",
  "key15": "3mumKzEsnWxTYGvTUAZCCP4Vi878dhDqvsfqoD8dT1HwuCytjvWeU8kR1cbVqbnUgtqGu5KrZBWXZMxiGkgF4z5h",
  "key16": "64MuPBnYmpELzhjbF4h1aRkfFReBDJKQCTZWgXgToLL8pEESRH2pBhWDSz6sFoKtKYuaFW2a85XP5Zg4WGdD3zZr",
  "key17": "2YeyDKJnRFon1wjZ7CdTztrtdxtjHWHw3dtrWZeL9xtbXBYx7ZCzpmZjqyuXiinHpxdsyA2LGeL6att4az9qj6iY",
  "key18": "3P8h6N7NpA6BdNmgEsySMVe8mdwYsSZnkZ3Z59FAgcV4YmiMjEp66qGYGRcFiDMFdthR5iUsNym16JzVHDDNCToW",
  "key19": "3vuE7u97CfpwtKvqLK4jauFMitiKzHRuV74nrD1EcwN3DPujGWfCap6QqLYnfmQGDi4iKSGdmLJ57tbjCt32creo",
  "key20": "37wh5yDEQUPgwe6csGVekES57t527Nc6bgiz1GUBj1gS3imVt84xm9wHWTWLb8CVKYCJKjrHWB3RhKuMPWQKLqiz",
  "key21": "9xNbsQvs9TPeKvvcnQ6jWBqLLB5EmMtvryU6KVrP55Ug3nTMdMmEZ7iWbAX5PcAHC1nMQh6fVquRmL7QV2yCA5X",
  "key22": "4JcXTfRzwDJKQQXuEwkD9XYdPsPva6mxgVG1QisaBn8RHonNAvgeoxJsQowgLnLu8pCXPq2q5LwwpBwHLJwGHzCR",
  "key23": "tNgutXba8pYfTd2ZRUKxBoezfPZMZPnj8uHJJUfWgftKpyQov2J4WWgE3oHFhut7HqtDxtaUSKPdDPJULsCgwRp",
  "key24": "3PfGKZS4yAe6FAGpEbBR26QEGBtzDgu3k8WWcfB9wMjdBDJ5jQwA81MkAhJ8DxbYt5wkiYzbqYceC334fJ4yhV2Z",
  "key25": "2NtLebnytyLZJdKA3fe8FgcpebzGeXDYkf9R6QZhw2YbMhErTf62MeHu52WbxKugvFtbE6bCHrPStU5TdFsxQX14",
  "key26": "58x1KzFyTFT9hCsreEwx99kYfQYFifhDs4TCWGr4mg18nSGPn7cvodTrfSnf5z21uBch1g8tPQNWP5NHnQbkY2co",
  "key27": "4zKscDgdwi5S5YNE16Pa3M24oMdfxddrzn4wADeXqRrJyqCexptHuVQYzqSMMWdT3tyDz3d8fhxmXMFUQ2FSd3VU",
  "key28": "53DAJHsZHyfE9CckiSeZP4iWF4VucBposChTJ2F2yBtu8LQRuB8ytShbqgVVtEPRRzCMpyPBYM4eheVq7UumLTZy",
  "key29": "2V7T2AoSnQCaYqP18RqJGr2oZuNH55JJkQ2GNWLin7EuQgTtGrZJ3yNjAbQTSkagYrRkFPYBveh7RSYUEAFbLS8p",
  "key30": "3bHnJYDQKb6gMfFfwDfWFJnSdkEr71vj8ZyoLrJmYLvozmKgc9mHGMyqd1iKFiuG38MFDU6UWHKrC3AiysTpjZP9",
  "key31": "5KsiMrrwF9UpsYd3QJGXZ7dSyYZ3DmwSGQyffUGLk3htJeb67fqWbMGnCpnA94iJmWhMnACyxPAY3T8G4scCRqkH",
  "key32": "3zG4GnYhAfSiX9QwozyyxucXa25QYTNYUFwT1pXAvRswvXZHpKAdPL4qZdffwrHS3Pm1hzZsnLFaMhz7ZeP2WFYh",
  "key33": "4LCFcPY9RoXWGdRixJytKi95zYgCHeEqizp56nhaDGMe2pM67ZsLNLAiB3Zx9BykRnxTzsD62GPvP5zkDQEbQFRf",
  "key34": "2MhAu3XqTtxTbAQNQDU58Jr28QUHNaScbDKSfeYG2FirenW3a3MXxrffZNSVFBZcYMF7Wy5xH2KPBrXBUPBdSgFt",
  "key35": "mZFd3WBe4WWGYeWKvFGtQbdRCUEsepUVZb944gxRwq7yahFXPx4NJ9JhErAKHgH7C6iKvEfpdRMUrsacPbZvQyx",
  "key36": "5VJxpLKTdej4M1BQyoG823NFZkPMS6FszuppMHS2LKurXuvc1XgYopHThFYp3hBUxhmYVPvUpjFnAaw8WUXzrRyE",
  "key37": "4xiSSvxzWouLhM3cpXqRM4BwQjUBeKTuSfnpxSRPVUVDtZEnou5tFxBGRoxp3bhoZ1HGaqfgJnbL6gDjoWgyMFE3",
  "key38": "4r1ijUiALXQKRUgWNgUCYGtaR1eMbgaGHW3fdp5xYwU4VkH9aRMndRxGjD7krKXgaYxwwu6bkLQi8uV5rbbR5svm",
  "key39": "4PmPjuiUYja7ZzgvjUzAWHbEZARzj5ynAD2gFRjZW1MiV8jqPmP1PPnr3tpDfeEXYKHNZs2duPdoBd2ZUFRxnjKP",
  "key40": "5gZQM74H9myZyazZPM5942hEnnDShKnd66JFjdmFrbnULZqFLcRA5WDcdqq6nypZgEcAPNZsQd4SoafAmoCStcZh",
  "key41": "4eCYn75PTVxrj3FyC9FzboPAdGyDEnzF5HBsg5bJ2YB9QJxcrD1MaWm6zkdrDe2jqkTdPuGgzRhu5m2ZLcwarAfV",
  "key42": "qy5D1P5e3XD99mTaUybKGmrdhb37LjMeKhoXDnyJvrEdvbhugrZsbsDwwHd5RX5SPdcgCZd1aDD9sgGntzUwZfi",
  "key43": "2KgeWtaQsUKhtY1dFxcSYmxDarVEkDvg2iAgRT88ZLYcRSgbz8CFWUeiVJZLKuP9Uj4H8DJgz9J474bgPf3EmsVB",
  "key44": "4Wj8Upk8xpyNT1aozkjGJW5M7kLMbUxk3DvB39oGC23UUupzDUeW4VbZ1C6biD1dCB1V5HVgo8MUF7ozpdUrn9Pz",
  "key45": "dkRbGjPAJDfidcU2vfgDrZDpeamRiiT83Fa31KqhGYk5SBXZ1CCrPxT7ePoRqh3U1icLm2r9oqyzQottkfRimgm"
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
