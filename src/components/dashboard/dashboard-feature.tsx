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
    "4ayeWUGCepZu1rAhfZP1GBncSoop58FXXa7jQeN18pstXJUF2mM1agwiLP1XM8sQc7oBD6sWC2Wt87a6wzWqWbGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FBaUNJbrKJsVzCSWt6PbrQzhbyFQZ9URX6G9dkDp6ZYkP5SXDjEQ1hrAABpGLPD8gQdDvGypiZ2TudUVwEYXtWq",
  "key1": "G4JJW35En8cKc2C8pRZhRPPqvjbgZ46FAbcrXpGTZVa1QcKdPTBwQTBCqRThwD4sGU5MAipgiFJd2GQcxUmcehE",
  "key2": "3CQ4tnuyX2ri64XFji4HSk7bCnCmsHU1grG1iCJodgz6GG9J92YsMEuuhwgUPqGC2XemJE8qU5tmUy1KeUWyDHR9",
  "key3": "2sJw9t2K11Rfhr8uwQdLFdSYAbBaZ4t3XR6CUEgcBgvfiEJQ7fewnPyx5mukx5eujwXiuXU6x4BRNGMbP1Rj9QfY",
  "key4": "34B9jqVUzQ5eUKhB5L1HN485S7fBoZN4ap8PegQFsFD6hD94oD2x2PcwFhfWg1GQ44d5XsYQ42C8km75QXKoteHS",
  "key5": "6SdHFz8s1Ph9ncWiEfKnJTJfk6cGW4cirgZqu8hQdiNqjjNWV2vwHhqzd5TXynUGo3ewkrFcAnn8FjxmzQdcz16",
  "key6": "4SkQuitPRyNU7rJowXKTPqTRaXdSxPBYsBKrgdnxTYsXzcqxAsHK8SH8Qv2KgV4pQu5BJPstG5MAuzwaw5nEXSVr",
  "key7": "2u4DPFsVZrKonE36pYhdZ8GPWKXtWWPysBYYuBEzBXKMFBPkawmAuYEjLoskdCriPNpaf1XiY5WuDuLnaPgodGBk",
  "key8": "hh2bF2ucTKsSuTRm7bhnZUMq128U3zv3dg6854kVEkhzTEy9atuzCLd4rnLud3gib7kCsJzxcBMyx9UkQgJfR7Z",
  "key9": "5TMQN3Z35ATbH5Rux1ghf1pFVRkevn18VZZ7hcu8GH4VDqoxwaGSbhLEEtwuFq8dVSqWdFJEJgEbvmXH4jvoxiyi",
  "key10": "4xBBuvX5VTrFBeurS6Yeg6RVhgDoF3cPBYdSR9vNZCn8kzTJ6X8kkhS1yNnr4YtnYxDPnu5WrEXpsbRrMW1Y95Kd",
  "key11": "2k9B1RPf8UNNi6S1HSugvkQqY5PYrU6PVmKStG9n5idrkL9eTaJFUJvUsjWHrgrJbvDzjUmNthQuXzgmwDAXRfew",
  "key12": "5FbayRdUx2RxYrJrqbsev94xRebVw78LCMMhRS4yhMJiWTVM3wrR2tzrTdgYW1Fe4LC4fpfyK2dkWBLoBuFEtr5Q",
  "key13": "3XGAV39AqLAyzERmbuS3f16E5EkUz516f8veemxY7ariiN4LZCA3McHb5DRPW7c7Hse7HyFd4NUPhMLhzfe6Dbqb",
  "key14": "4JLDVTtmRokdZuDjzuzGWZC2umtRAUrHeAhQDa3ZkvzGXGxxxJzWWJ13uEjZFa2yWyJJ7jR3Q52WYHo1T1cnARZw",
  "key15": "28et6ijDxf2YAKviuaXP6PdYrbEwDhJjswR96NF6HxJyjLwmV1UcrKE7uhr65UPBAaVUeW9XCbGfo7EoHwYRv5MB",
  "key16": "3F7K8RYAAg2RjQAcvttogxxUMke774J77eUUNAMxXD9mtEv1t3CTmwM6Vuc2hAMshzi4QLUp51vjpwxVHXZAzPHt",
  "key17": "4WdHMzgUaMSYZ7mGTJM2j6LAgaxynb7YegjoXqoRfcB8fzogxGkUnQLzGdkcGS4s2xQux8YvJqeacGzCx88cp5JQ",
  "key18": "Co4gAfRGZy8rnjXAgsPGdxkdoubBaTFw3hGPRLoyYcKkXniP2cDsNVgtPLFYffMvXWtweF8fRy9X3ogdpmthimM",
  "key19": "4Q1FKeGSy1rJt3aVa3bNrNW5x3kfFc9L8f5YrafvsjbtmqJkTGziSnYDLwn7gihoY6cPd4brk9S2D6uHWh489YxA",
  "key20": "2zS77hztaRbjXN9gwGMBpdnKH7StcU4PgESkfG95CxMvwJQ4ot1oL3Q9Q4EdhgR2tCdNzbsCP15ZUGUKL3uETg6x",
  "key21": "368tHhCmsvtTbnegDyyaKCUcMSH2yQiiQPtmEs1RJ3dWCTDSUjDzxa4xFrbGdJwdP55GcGQye8VmfVjXgEQzJ2od",
  "key22": "2G2P6uD5hfmmQF8Q1Y5vPjSjRT2MDrp35819jtM7vwB5D4ErY6VvgUJvndEX2sV4jjnc9J3LubYPV8UbDN3r5AM3",
  "key23": "2mqL8qu1btA5A4cLGwx9ta7cgpFFsrmP7SiXijR6y3jTGuiTY6Y856auzKZWNHRRrM2Smqgc2eAiXi6gDHryeqKK",
  "key24": "2G5mMjpcww2o2HviRmYbKJ2LWYJCgJXQdThCSgBEJeFL5q5Rq41doWYJwr3fjnSLvAF3FLfsDqHrxCy9KcA6EBH8",
  "key25": "57eHWiizzqcJr1qurdPozEoFheKrEjustjVovRcxygFx5pX5W3LeQnttKCZAxvuodWjkQdYKGs1jvr7Q312UWE6V",
  "key26": "3soMKteoVcGC9rjPmkRuBJcHkdRsGv5Jz37gcVxxhv3bgJwKpfaRux9iLewK3J7R8FKToTTTKLHACDJyDrDa1dB1",
  "key27": "3ghyzcEpnvMWpuPUftd5ZQTvGKDUKWYDeA7PaqU2DSN3i7VEFZUbfeLHucAyNe84a3NhsJBRQdRbXazqhGKSxH2X",
  "key28": "33vc32ipWeXA8NezyPWSpZHtiQrHkc2QyqBFWZRqCjuGU4hPqrDJD1V9cM27eGUBZWY7sCQknvQULuFwMUWgMW7i",
  "key29": "26dJ92LJwfsAzzfXSQHyBPuQjY4Q4E6LK61S3iPixxWF4knGD6aqPQj4wDTWtC6ffRX57Qybd23X1hRysxLaBXn6",
  "key30": "5r8yVwAD75RDexeP5XjRPSddxsRynVMsiwYurcALKCP3hManwckufEVGg5ewnqih2n3ADYDbfCHSEFGesU7mUfQt",
  "key31": "5Wg3ZxsySMb5ZHRSRNjudL6NfQ5x8PNPwhV3qstfF28R95GEGDHpSUJLsGA2xfHvwB1sEgR4euTKBDjTpYRon5Gp",
  "key32": "5wRmKQxJEPP65PERY5F5ZDT5SbEeuDUZiWiDh2E8ByXTCjwLSbW3Ssc6fZT5ShfB9MJBKh59h3SiqajtXivLsDCm",
  "key33": "3krYtvRixdxfSGxVwhEb51Wfs2FUcB5kTi7GYKEZRggj4w9cEvNdjHpAgeraA92pJfPrVLBLQFwDd1JcgM1T9b7U",
  "key34": "hSnx8miMKYwjvqFCLUqBN5BzgAvhm31PmSTvza5P77PB4BtdN5JXQkXagx9YfArL1TPV4EjD6PUFfPjQXBvx2kp",
  "key35": "3YTmbhFv1u6fgCFNNBeAZuoVPs11MPk2KwyYKPGv4mhygwz5g3pTurTCXKc7gRkG5UrwnY4UhVy6mhCAyDF4Wfhj",
  "key36": "4wbbUP4TZq3wP2kR4e6Yd2MnX4x7VBXyLYPS9qR6PPQq7m3MRuYt1LpgBNW9vBsDrWbVdMexNoEZaV1NfwaQr3f5",
  "key37": "3KpevwLGx13Q1MZSMvinufr5TrA1spoh2uNTiSugwwDoqBki2MCxyhkZNZJwYFSYkoZhZMCoyCeF4pzxMa1jFi2V",
  "key38": "kbHg2HWqGQZm29Hua7v71xQpKtwXTcCRuv3mJcd8JEdHY754CUtRU6H4eGAqyqbNxa4agyTAMDVgoXX74VmjrrK",
  "key39": "2tCbEuoF9oC8wHdUvgrhkn1mtaa1EMHLYg5EGb8XvcbdPuxk6p2JxvoM9NcYRafYveeiWpy5PHtpTz89KrmhT3qM",
  "key40": "4vHfHrr1esZ6PZEbKawkJt8o5vHAsuZ6f1p2A6667NQLg689gkGogxHna9vncYy31rWNvCenNKVwPD645pdX8EaV",
  "key41": "Y2wbdk3wYymNaFeokTxNw43QMCgSWYsdvESCRispE9o3Fj9QwqrPLBXo7GwhDUkh9Tmj6icByjryWcAZCcYaHmn",
  "key42": "2y8mXx78YLyFunnUMmXTsxYBG2aVf7qU4w2axd8Swdh1rNMEbMJn1HhYNXmkE8BeXeyt3hZFLxd2D1AZdVWr65kw",
  "key43": "5KRwZvoYKz3nHkseGEG5K3D2GYR5eVVwS7EHmiK4EUf2RTir5aXAp4eay1pJHu7ZgZmyt1LK6mHi6NALMjnoLiBt"
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
