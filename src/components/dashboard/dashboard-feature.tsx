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
    "2TgpVLnbKfR3QNHLYspBgLwQyVRBFvJ6YCZhdn2sc13Ht7qDU8a3ViEqUL7K7FxJvHVzRDwxvGw79xuCDajY8twe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QteUaYqFgA4jso4iB48HnfkSJBQR3m22aUt3SLs99FeFnoPdKjhHcPXdDJ4UNXnoRwhTXbBb9RCvziuib3YxueY",
  "key1": "5h7kiRWnAtWRc1Vk2A5jbqqhkEyDVaevaEKGVrRv5baXX3i92RKktGx4nyL88ox4qV456nfBugFULCYXwExwWjGy",
  "key2": "5N9FyzfRh83Kc6cjyLYZVUu6pub3JCi4BbjMq7A5HmMcKqB7TUqPUcnuHVdDjKM5CdvkaWwCdzmSosKxG6s3QzA1",
  "key3": "2X1sxtZ967LctrJ4HFz46yiDNk1bbtgZBcudsgvrMXMKpGrzUXP1xHQMrLgb3pcbimfGpnp1JUEtj1zwwsHJrPaJ",
  "key4": "61ekZ2QEZqTBAHJApkZWmiA3G7rgDCu48FPe4pxBRrgch3hv7K4GCSdX3HX5EFzmisWbr4Hm3oD2b5ZUkShW1x5P",
  "key5": "TfoVUKGQ9VfBX5CDJ4y71cACEVwou9ReeDe9HUUhZGNSFV6ecDGEMy6Lvf7jriyeaEjw4pVqPwnZff4yP9TRsFG",
  "key6": "WS3zXo6Wh1hPDWjPxSoE7CtBhayHz1zy9uGRvMjDxKkM3k8k1LqhTpN92e7cvrLGWQrDf9gWG4CP6dYrKp2TPQB",
  "key7": "3tgb6Uva6zmh63VwqnhgHo18XPKw1UsPNU2Azo9x4CBT1FBVbGm5Nys8chkcjbChP3FnswEyq8Bv29KEowhZLLS1",
  "key8": "3EtUDeLyTa5WYYMMKxtdXFUTz9LXP3mT739awxsr4vvGEjXLa96Lf2T9MSvqsew97rw6ETXHHoLRbRYyQdPKxk8F",
  "key9": "4o1DUGGbFRF8YQTUPWxcFnjjhXM155H6zLVHbxZ8NCdwm9VmW2a6UUWj54TeZR6JaXd7AUBi5maFuVSjRwspuzTN",
  "key10": "3AcD89FnsvizSrn5btn4mX9CvdNSi4yb37rRJBYhrD2TYZSKQ2iiEBzTKgbTP5kdeJdhSbheKfQJksf8YhggGXP7",
  "key11": "3SAsT1kvxKVFhdbS9FkTutkRLXmUtyZAyChN3yNNPG6ZAxAUWzcj218rBWmEvtT7yag6yv1A6Uy1CHJ7jkfrKCNs",
  "key12": "xBJzis2TVqnbMhfeKq37FVTAiMAucHoZPsKaKsuRk36eYrE6JS85U833brLtTr3hnMGDh3Az2LscyKay8XcCa7R",
  "key13": "3tG4nW5DwdikiSsLMVTGJS52LjTNEpdxowatFr9JDfxLeRKWoezJJT2qfBwhpv1NcHqLwsPNW8FEDRqij4KLigDJ",
  "key14": "9mS8fgv5mGaD8SKdU1MCrkESBQgD7Xey8gkSmR2fxsKGzg9PGjAWzna2sQCRNnu3FX99xLeduRfyBeFVM3RqU7F",
  "key15": "5x93W97vAC8PzRz5tD4xzhTHFCBfjMtzbPckpgeyGuEnmttaeQnrwSw6yRqDnAe7FPibyM9HL5PhLCi865QTPT9A",
  "key16": "3T9ubPQYwW5ktSJbSrq9aVu81uFzcUttQUQT1DitCRynpgXQ3j4dwWdGsyffUgMJb72hDge9qsoHyuMxu1ve6E9u",
  "key17": "2Wk1D6vWVj5sgM4PgZywAwSPxnFcH9exqEfGs3SE7BXJ8WPTMF1nLhi3M1rPA9ow2q6eK63Q2gTw9mDp6ECLbbUT",
  "key18": "4eifWTYdJu4NyANVuirqkY3Y9T9E8z6QVaDNKZrVLrvaufuQ8f7UH9KSa2Ptz9WXN4CcZSSLsHNJ4qEh7xRAnCwy",
  "key19": "5FzA5Ed18Dty2Hi24YhTFj1haNrHyrcsgeF3LcGEz6agMTUd3uvaTMba5U7FCA3CqNveEQvYHJnM77d953QGc3yZ",
  "key20": "3FgmXjwBkt8YtkkxBf9a8yfMjRskJyQpUB6WYnivNLs8zuoavY2xGzSn5g4QXis88n4g7Z8pqBYucy9Rz6eeQXSt",
  "key21": "J3PWCJbkbwvxE7F3SFobjqt5nFtPXKsmFJ1JcrAFCcz9HrnHruamzRYT2Fmb1euMyW3GG7K3Uzt93mZQeERm2XE",
  "key22": "3s5GiWrerTBbbrsnkwzbxoZPPvQkKLj75NpLhTT1mL99BGFmG6aM88TjpcK3HEzG1a486rhHSnySMRepAF3hwCLa",
  "key23": "5TvBnzipD8eM3Wn5FrsDBtD35H1SNjcMQ24vnbe4xmxX8t5JR6kLnddGzvqsr7wHoY2guxCjfYU9G8cwjpUYUokp",
  "key24": "5Utw2to5FN3KVbwdnAoqJZYUphBDmJcdeyS6NiGyp6Emx3bbExXWmUwrGSJS5H5WHf6bF6RcAXucrqySQYff5Bwq",
  "key25": "3ocCUhSo657rXBhEBje7uMqaQiMhsuQiPLo7CDgLsBeC1HzJdFCyF1zhVsFA9gSRmz2rK6H7TM4NGxE53oRADZyf",
  "key26": "vBnQPhhsmwp2GJPXi2azY1K35tUN7dDusi2Q3YjtH3zp3DMjPSH7JKPynLErCgPU5hGegwLHZMrPFwv1FDRScNh",
  "key27": "4XutiUsDPLPFBRBWw8CYT2MdKYDTbWARMu6kho7EKeUbgseSXpLCCDo6DfLVt1z82L9niWwiChwgE51XtokqM2T2",
  "key28": "2FHwBMLg6AY9uyE9WcUaPPR29H6QzEYrmcCjeDCrzgacXrJWVVcLYibZNNmss1A3vivWVgmSsvJ6Fr484o8M81uo",
  "key29": "4BRZFQmD7yjhghU4uDPFqFfo4aPpz4NQt1HENBenjd5VdGb9YtZre2dwfzyqT1pimAA1QPmzUiZ4BMCZxTCECof3",
  "key30": "5BQRcEUVWdzQNoBodxcUyHDzbRzYA8Qj4D7sT1ZajowrapfrP1mUCRudp1gWQ6EGCxH1U84e3YeKVzixS6MjqM4y",
  "key31": "625xedGmHHCjd9po3XP3GApkdhyRfpnz2aDamMzX96LLKQFGZNVSdoTXwW4sb3cAnbLzVmcFd6GZSEWyPUFH9gUm",
  "key32": "4LaJ6LmJJGAAbMEjEMyjJom9QyFqGm1KugCHssbbMiLBe3xrFFAYTaK9BYei5D8GibkEMyNRCz5j1NYSnMKXBmme",
  "key33": "5LwR362vAHQpXUTo7RnnSnqqYjmmdfDocL6LAxPLz2NEwk3goERnUJeArUWXKj9f6BH8Y3iGsyNzBneMbD2MDQP",
  "key34": "41qKNxD5J6AGEYSScZ3P7yQNrgxfhS9Wu7LtHvxjTmGG3rvJtCWC6bj4otV4AFCPpTmNzoZCL25HozJYzQcGkmWj",
  "key35": "2tbBvohfrqHqHAXfw2ZkUzUdkCCxFDarLN9mXEXwYNLoz2BfUVqZ4TxMYhYKSLpsx6Jqx6gWCAj8QCgXGkgSfw4i",
  "key36": "jqiekSRGgXNkqRbwxFM8brTcQSkxx4oKYPJuZa27N6tvEMyduGYh4vTuh3e9T18bNztfAc69jRvCNbTBLnjSUMS",
  "key37": "VihkRtLWw58TMDu5qK2x7gwEaXNHchCAJibpB2UYQiQo1SijdDFJZJHHKXcnCaJ42s5bHKdMzHDP8A4YrYRVtFH",
  "key38": "3C7aNKhjDX84ovxhusmXasfeBMJnGxRG4DRvV4rsxJRDAA1iQ3LeKfP3Cug3CyK838Tv2P85AJErRXLZL6BrnN4y",
  "key39": "5fmR9nKqCJEJnoKFtgFMTGrD9aqhh2J4wkLdAkp8axVU8HDUBeap1BLWaJunx3LN4F4W9coeGeRMriBRy1aSGSvj",
  "key40": "2jJf8kN9d4LAZGhsdw6h1WZdMxVUFisVReYafToKR2SLruWXVrErMjxVsbeF8hFSZcBY5fZFca5A53ZLWPm4hxwj",
  "key41": "3wty8A9JMEuKT9SBRNCoMUUnSbt3GGsQMefw5sSW7FtEi2dmqqS9NMQfgRKULiEenfwsGfnwdb2uG6pVymySHACk"
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
