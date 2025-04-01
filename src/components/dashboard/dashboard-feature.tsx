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
    "2zCiFGWW1sDzeWyJV7kqAmGiwHzft5RPdMJWXwtgZGu5J3zx8JT5YLeuP98nkQ7f1DSao1Vk4FDtkNECL8TZTJps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fCZBjNt7CFsU7UppvtKxjMQaUbCRadSApvWbYNiZUtnX783ppUnHKP5p3VAySFSavw3DrEZoeGAYgpbedpmFmug",
  "key1": "4kdjoMsqVvSdASbA1mj6YmjNfY3tybd4pv59wYAdmLHomkdzBScn4681AitWQQkcaaSMZYnzwRqvq1zoeemtguE2",
  "key2": "2KVc3CxGqKDKRQMu3n9HwQdHvt1SiUT3jyM9zrFgn1LVYKW3GANyFoubjPa5uECMwfKoXqzUnFgDk6xN22w7a12G",
  "key3": "5vQPpoVrq1t72n4vbESeLPQnbQQGnsUbTXTVJ7NPWrdrUhjZ8S4qJAYfqFEFfMihaJaRbGMT8XUXc9SamiF4EEfU",
  "key4": "5WFrU2aVTKN4FaHP4GrqPkPXvoZdC9vWG5FUAoaCHGRj6zLWYwrFzs4w3RuuJ2Rxi7ceK2oe4s4XPEKS6wJX8fHj",
  "key5": "2oRoMgWWut2evCGxGMVug6UiqS9YGYmPR3UXpyvEqmyePSCQx6koR7fJQyjEE2kNqTZUKtKMcQVWVbW7Bt6Gngq8",
  "key6": "2dms9eJz64Et3A3gi7SqVvBdHEyP7aZXKZBqvbAszWcsoYXwhRs9AGBUgXU1UnnZWHgaisYKXQERUBvkCdTQS2vd",
  "key7": "4RZz8TWrchiLcGpwj1RLpZPLemLsUz1u5kFqvZf6GhzSs7FJcXf2gVPbPRCyMqjNRUVVXcXapFpuLizvtHPZfdWh",
  "key8": "2AqCEmLxAXmewQ2JrRktyKfQn4vky8VL7wuf8V7as9oHYDKgvpSor8ojfjjbQv3AUtMfuonuutqiD8CrkhwzFLUT",
  "key9": "jpcDABLsRt6dTPaUEWGx8jyAW7p3D1kPWNMP1riN9Pjp2GMnLKu5s52pTHvLCu9YYckkkLfEE2Z5K4SJ3Vg4Kag",
  "key10": "3pGGu4yU4PqKDXjidTmGZ11VSgnsx9QMh13BKDKzqYjyhYTiJRJEu3Jejz6JaPqY5QETD9Lpx42y6NHqF8c1X6S3",
  "key11": "26yQwWo9NSpEvAoBi4WJktaGRDV6HamTt61kcKuUeisanmGf3XAwzEUXihFeSJ7a6HfaTDNPKubZQ6PbFHjhJMtV",
  "key12": "3iuQETiWJhMNpyZ36kA4LmpzDtS4kGDq55PgnhXBmvxD69kAVYzV8hcFAP6YKJLg9tbVYnwnJRU2NnUbLf2gByFC",
  "key13": "vmz7nt3uSJ8hHR2aub3dGyDkVFt1pUT84XH1e8LehWHGQbjnG74WAxNVFjaE7BVApLMaBAgdiyP51mJiJki5Eyp",
  "key14": "3Bqvjzwu7i66eSrUdiJ8HcxADE4aNNR7C4erqv5aKhLAg7civRWXWZp5rr9P9AecUNym5kqitzwVFRcWrANzSFUo",
  "key15": "4QgG6JLVuw5FiVYhHVBw9XExPzzLA351Fn9Z6RRCjCcHCBmEbmgD9EojCVgiNg3iNyNU6kxCT6R3QPU9bzSjkjTw",
  "key16": "3sXH8SpTNV8vmULShuSjrWtp1wGzWfJuhgEC9euZQ8KmBkVLFMWJDhwbkQyoJGn1MBmdQTCtNnRLFwTBakrVFkRZ",
  "key17": "3rY6A6vTCdjg3mDgMs7V9t7mJo9GNQfPiFbZNAjebTnsJ9XX63JH6iLLojjmdT189jxSMtQLCCnWEzWZ3Z7v4N6a",
  "key18": "51AHw7iS1v8LQ8NMsRhRS6Jq2oLmvunqj8JJhqiEiFqYHwR9v8mHqEtPqDdi8dEGgDPQL2kasecTvWURYdhLVkQM",
  "key19": "55r9cxW1HKmPcpZSxPq1P4R8rEbFUr3XuF15FbNn1drjTYYQYbh7RQVuXSz8W5Umypwbcu7yyhoqhSY5yg4w48bB",
  "key20": "3CVkyUUHJ3UUcLFXvcRM84tnywvvNuKbcscoFLSGhvLZxJbQrRR1EMugJwgKqd9SUik1rfGP9XZMjqcaqnwCq7yu",
  "key21": "3LmRNpQAN1yePAjosNK7S9fqTB5AoeL1qFLrEMfqYonZvQJA662wszUiip1LFofWhkNua5mw3dqaTKkbKP2GaEDz",
  "key22": "3oJhUwcvm2r6cDoQNgfnzLGMA6DA7bMmi45R1B7FVTPx2axzbL1R2UoSwDNNPpxu32WPzC7he9ieQN1PkHPhxxhw",
  "key23": "3zDov3GnSc69yBoxADoXUJ7XgtHDRt71wrxvbiXwjsHfHx98drbUALpZLwDyaGKL9xgcHmzS5VbJ8Q8pCcL9bpYF",
  "key24": "21n5dxQPYVjfsZQEMniRqBbq7WPREyhba8L3QEYrPjvLCtRzxTjgUttdhUKv63cQDNbLj48cRAzxF8ugkkurES6C",
  "key25": "4auRakpqviwTjToCDaSiHiGFnagySfAZ3rXmFW4bMeeEkXfjxv8Vv3zVjgbQdjKi3GByAkJ8EqTK67psLGBqa6t4",
  "key26": "3dS2FXuDKgYD3i1HwFEJKLHzsNJnTNBCUzwWHQxYEQfVCDEovuy5ujAi5ce4mnPoBShtgYg5rMiynDh5ji4UHAni",
  "key27": "2hoMGcgyEQG3Deot24hyJ5mVChv366g27fLLjRArmDNGW4oJYCGEEQesXyzDhK9wYzE363t9K3EUpJgD99yxZd4M",
  "key28": "t6Q4PHY25LHHBKnajbFE9jVyuneRUqm7GsKFrPux4J3jpVRjJP1JcJ3xR7bWMCSpigw9QKtYutW4b7tUhH13DSo",
  "key29": "31hPUVNo2Y15rg5NcC3UdRDqFv9amCz7zbFJe8DxvgzEq7rppqDvNemPAmYJrjgaR9Qo3Me3V64LNP4BGvzcaCDJ",
  "key30": "2gbbVQkxfqSnXN9ET5JmP7XyRLU3ZPKPU3ABS29XSMnqwcmSvXYt3QALJt6GMprJSwzc1xSAby2L1xYa4DodACSN",
  "key31": "3rmAcou3pVU8td4mzToANpNvdwnsaTF49SXctrArbQ299xobyR8fPZMZ75yJZ8Y5kDGeCykfQSc2Ckygayju3qLD",
  "key32": "44iBY1mN7gWkwfHXNo4ykFxMnn6Q593eoipMEEWF7dJCVq6bXeyZZdXRx4iqy62Xpsez2TxHPeR9L17SXuJxz5gV",
  "key33": "4qjHHbHFxFe6e2fjL79X9LTeGo1pLPK9RgkGVsMjsWNNXWcxWmqEEMqtyw4uhDmRXTSGKVv7ayZZDXjDhHGij5we",
  "key34": "kW9PTN8V2BVLB7rSbVNtFN35RXFornT6pqUcxpNQANfFGGi6PWtW4Nh9eTRzzVBX2fQdeUX3wiRhLmVtTXfXLRe",
  "key35": "3YmQjcmhDNo7k3bkStrkaG8qWjdsgSWAnwXDR77cMae8ZB7p1DusqWQvHEU8BsEAuAQqoBkjJ5tMmgrJy26yr2ej",
  "key36": "2AdX3jCPNHLioJtZJtxFtHVuW8LPHiY9igGc73wojyEzqfBj5zi7FsCciCVQKMKmLLfom41c92tztiNek7df4gfD",
  "key37": "2xqiUFeQTPnyskzBN8Sv3ud4VgHm1k5RVuZHfBAhFY2ngC2XMhMveVpxRKMMwbQz8f3CSQdodGTeyao4UcvezWyA",
  "key38": "4V9PHHgPnhCzLPCVuAT4w85XCw1PfQpCL3z8A7nD8fntwf573AKmhRD34Fdxw1ktKLNgP5K13xAyNqLR8LJF58B9",
  "key39": "41mGePaHxPeBgPPs4G3XdijG4SVdJPNLntFTTdoVzeE63Q1vT7AfSL2nwnheXHvTWJsxMYJMDqGyjQWqBReWDH1v",
  "key40": "LheMz5rC1NZAxtxhfyiz4Uuhr9ZmVxDr9AgFbCgXM5rzC9uzu1KqUrz67AsFjC2dQyDHDN5GDgDAPp5fkcugQon",
  "key41": "UykksjvcWWENwZ3iD1FMSXwxvqhsbyYiSNGz5fUwPNxCYqxoNonEqsyGTKo1NjTJ7VacEf4KX2XDg94Ki4APbA3",
  "key42": "pPAdhgLHHoQdufw2qaLZJfKWviWR3q5gwte1x61sXwBUdsErb2o7sYEPteAtG3u9Jbz2phnNPD7hMLYdi5nzEcp",
  "key43": "2MSjG74ABFXfU5WwnKeiLUa5AkE8Aa4hp1QmPieRskZw1aZHUix3B7BoZhJn1EMEYiKKscA9cfhwurmtGwtPpE2U",
  "key44": "2YbWH94V8zqM6UDgwZFaQL7uMFouLCFPj1K7XT3H15xNADcu3abFQYgtxzNyybpnge5eZUMFxckBGKWFFoZbnyv3",
  "key45": "3TCLPUDAMTaHHXM6QmSASD7czCmc5GK4FEovouP55Dh5WR9KYMtRVBXLT3QVNBAZeZNpwJEJmkNVbEyw9P8Zpq9P"
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
