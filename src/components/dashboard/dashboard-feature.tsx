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
    "2U6sQLBCQam3LtRy9TPJGvkjDAeLAs8KWK2Vg852XzZ9qWahcE993ymQbZFp1ueE2RkkHbEDFEEjHjnVj5uKkzNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a2UZdgytNNfbhYUAdjWSw4QcSEufcoHysnUsZU7TkeHRwyEbNHB7qrYqMti2VHPorzsNT9mWnMYuq7ff2BK9Lgq",
  "key1": "bFkpLRBmLCzH3WZ3gckUAehaqmRxWa5Fiz7xFC6kBDjoTsq2Q6Pd68UTcgJFQdbFVaJ3VUj7MHLjaNgJzoTXN5o",
  "key2": "y2pdFnQct6w7rfTPWhFr6WXWNLupYu3Zfsitdiw2RCbZD2MMaD8bSXWaYbpJshCWaDeb75P1gnHBam65kPceJBp",
  "key3": "5hk32PDNiEo1DYFM1GiXkbYsv9stDZQG9NfWQHqsDEuHr4MhLW5WKLYsnkXHVP7GWdc62iMofVbQvrBoxQaQ6NTH",
  "key4": "E6UfZCDgNffBJFxgBMhEDt1ZxQvVYRBckUYHnd8oFkzQgjck1C8LhS34swRpMBQkGkCqFXrV43GzpqYWkWo5s6P",
  "key5": "4eCs4nvBn2JSeofjKNzFgbSVSAf4Cz8GJ8LZwndp9w6Udk3NKwFDG9bahUv2NNx13tnQpswdQh5wfVp2kkgetPgM",
  "key6": "46wj5kzNVDLQBZjPB3CSCmnemd8X2uyqxcm91cYtsyfePLShvrd3TuZDKNjRgK3zFniQZetkCDCx6yEcKQaxzy8M",
  "key7": "4Go3An64HJ9egeXLffGbawiAmmenzYhKwkSLN7jQbzDZpQE4CbuNdjmLqZ2cAkAqgtVHYj7TQicdowCfxqqfLtzS",
  "key8": "3zWsZeG2nToRFNRBFGpde91VFxZrWaTiSqguk3fpDMYkK8F5NWvhA81rXKdYY71TYGZx3M8CgXQn6D7cCVAMMWeQ",
  "key9": "4QExTLPCFsNxSrWCSpyQA3as2gMq9zqdFXEXY9N2zbZ6PL2bByjnF3PV4nRYmo7hKmvPuej3TK16HTD12PwodSTn",
  "key10": "5B6tnRcze2PpS2ZByyFCrwcb9np6kyEN4vas8BWurgTMQZcr4eEvz9wB1e9d6eP45Yfz5AVEkmNsY2QeZtiV1Sea",
  "key11": "5jroV8Zj2rURs21h8JU1YhbDMFnkrRcZ8SdE6SpQUcwiNVk7saUXo6AhhcDCYg3QtF6hjcNL9jNMN7699o95XZZJ",
  "key12": "32bvwJDMLfJp8jf3Km6azaZb1fMU76vNSzCNtFbaP9e7GVstMcV2ScwZUt2LXFrDzoZbAdQ1vhM12JdKAf2c891S",
  "key13": "5cEEY7UwtV5xuWWcvts4qPZj9VDRKK8ybvUWWYmwVcpdLDQBUS6g1g63hJY4YjUTcccAdquqWg57aKDgxoapytpE",
  "key14": "5SsEKbRogqegoUMXbiuMQ42n31c1V6QWp8xRBhYeB1wrC8kiUjoYbPeTTU17pKx6yvNiQUNDqHJzRzbHZ645MMen",
  "key15": "2TdX8vsAvSxioqJvqPRqFdMFVVPRZfoTFBQqBGcBEWYeGkPEbLMkHYpSafmpFYn4hsE13KaoPq8nQ1Gpt1zX7gNU",
  "key16": "fSFdrdUBXEKJueVYDjnepDWFpfXs9wGpZNLUhfvKzLEej6j22t8oVRd41ZbfLGGCGafexB29hQgAeZTdt3c421L",
  "key17": "2APH9Hgt5NcWUyoSouUFS7DhEb6bb4qGT9kRVgHA8j3ChyxuCD2MhfuCPC2rdUwQmgzL5rUZpc3sL2Dzw8Px798K",
  "key18": "52sTeEavjVZGNCGWDY3uBVJX6qCU7H2w6MDUqSeEQs87g46tZwJjJuQFgcapV9KzLLtxwZErkDUuhBJ6pb1B6xjD",
  "key19": "531wAbN1jKRxopREvFY59NyLYvc59TsJR3byvZ1grTpDcVMLzvSMPAbfdicAaaVbHpyAv1HD4hT6Vky2t4Ha1kCz",
  "key20": "486KUjT5L553YnY2Dx8ev5BpWiUekkMrwaVtxGnLWWjbyHDfN9HLrRNS1EA9WgoB3fi6A3wpMZMtqb3jchptiNqu",
  "key21": "29hbRnxa2hXCc7mqmkpjSduXM4R4GpgYhGxc2FXQYxsUg8D91LeSsvCxzzEfTR623kkJEthM6MbSkj1c5RhJasA8",
  "key22": "3ZGjdhMWPiKGFvXeAdjdMdDiqvBBCtw4VJf5WFSHKTfAo7v3YNUPpvXYvn1mJ7a25EZeEHpzefmWp9p9oWeiBy5D",
  "key23": "7X2YHrNrRoLAayBbKk9yeoGhA6acFRkukVRp9peYCVGwDx5jYukS2g51B6WgzsBDhLPC61aNjMt7YhaLwkMQVG9",
  "key24": "BRpfFr9pfW4CAz6S3asPJ9YsKBK7qZJkB1cZq7LJH7Yt46h9ivKJeChs7TcPNf6YXjj7PJRZPVAMwySrcABCoTK",
  "key25": "86tSGENbC6rdvasq48wYkMxPb23iXqxnHWfxEMyBKVJ5cKWLvwQPYZfFmMrKp9Hyy3BButXvbnKpTjMQquafpH1",
  "key26": "4YfzWtUWwE4sWJojVbQJzNcWf2Nf2htxFP1hCq3g6USzHNLbzksj4MgwgVcPKT6kiA4FpwgmSjY7KGBieyAwEiuC",
  "key27": "zAibYNXgq57bFrbi4XEoz5kQWjkjS6VTjnBUwRo6crFZ7h3e2gLb2cRcJRYhfwmXrncD3CpFA26J9kWGGRoASkw",
  "key28": "3YZdtHapMv2SgHex6oqaCJuASqDquD69bZCPiwooriPYD87HJDxSCaVaqW2NchYkWJk76war1nrAMv64deRRg3Xd",
  "key29": "3noVnQJFqToR5qY2TJjgL5zjsqGXMKVpL3GyMJhXEmYm7qqE54Fhj9C2nfdMcdLR8UczEt84noJLPqV2GYSter39",
  "key30": "4tshPgtd29uLR3LqBdx5utkHUMm6U5ySynotr4gFiBB6hVDahJunRqcga2CHMFn476Wfv8vgKRpbmTELTmJdHRBJ",
  "key31": "haGjycwwAaXrzfMcFpAYCnzeQSVdxnNH4wdLWUGosRcsGjiTETvBFGr7vnivXJziPawueqYLZWkY28vNhNBaGWP",
  "key32": "23e3nJP7t368LTm7p8V8cXGC7TUJnyTckQa75W91obUcBDZuTpEXJsSC4zBuKjGGQwiaCrLQM4zM2A6Gp6Fn5JW8",
  "key33": "SKTuLNiNvou5ApaJEXEEqfQBkQjo8Y6cyxDjFKhcDW5GQedJE3XsjoUbpT8TjnZD67USpzDrvGw5VQv1pPDq7p8",
  "key34": "2iZVk14rqiehSfa4Rr9rAxDN1TV9Ry6A9EmXdRUsEYaxW1tcr3WHiDCkxw2N9CNgLnhur1T5tguEbvM88kzGE2TP",
  "key35": "2YUKAhGmTcsQn4DwS6H26wL8Sjberawu7oZPoT3mgdSVDeaX4QnShWyFYmYKXqevqtvVn8CiRFfnwoaMEzgvM92s",
  "key36": "3YW4k7AKitSxiB6CEQ6te6wfTyEMzCEvLAZQFng2B4R8PuneYeqRaVGnbysLRAt7Wh2a9YyV9Zr4Dj8XqK97egtN",
  "key37": "4cwHJfnPNJXwQmH9yuVekRJ6rAxm4CRBH8bZr82NxkfH5RXYNY786NmmnqePRWR3MmqJZWPRoenjcjnnyNvW7PrG",
  "key38": "5ZtWprKhwnQjvBWmH9cjd9YE69s7EGuMWRZPFseoWLBhTYMKTNKJqhy1UFoynmkNj5YsQeuZ2sRdZoaBJux8mjcG",
  "key39": "3e5ecfPZ2vK9nv57vLCSoXn8aCbjdn5MdXjGg6xXbYbZTbPZtXEqskkmPRTrx9JxD9KhDN4aEME46tkWYEExMmLK"
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
