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
    "3P5hwfFzJ2tTEegFXF5wRp6UQo18tgBhhm1zAuGPH7vnG1yzNUvDaxBooGJNRzXV85U1ABrpzA3sniTWNLWB3Ebs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sxrFNMyJHQ47UAUTXZQK6fPDhbpdNWzW2eLuV3hek4HsLrPDLmQT17rSKq7UpEmuZLDWFB4ugrD9a4PxZqmvgFV",
  "key1": "5kjoJSrc2oMoBmRJYw5M8DCScTMMRaS5WXMjzzCsYLWVCPZFpTfTp9NozYgsthLxirwm692Te4SBAAgG6rXHXtWT",
  "key2": "5K8E8Zc8atRxRoAiqvTniGHHr3vSY2EP9ZUPjpgQ3XFhtfTLv7YkfaBw8pgUq6kvaSeJ6SWDZhvd44wEWTzVeuTC",
  "key3": "cvgFJhURXbirNRYctMFKZyVVgeeuQzG4JxayjRUCkMFFaH6Eigi4xGtDywRECJV3yQxZHMYdjirukzdNfFLtKq2",
  "key4": "2a64kYwhdTBxnQvQzdMbqtKTsSRCMmftSYbniWZ4QJPQgj1xoYLTbfB9sVqDp69VM6sBsAvgHDSeoGYLficXi34k",
  "key5": "3kkjD1H4TuxKyk9EGzBDcXvZoJPy2kPbsqFyD4q6U5ChDVzYSsSZpDUxfzN5r5VAMwNR3nBTzHuUDq17ZX6M15kD",
  "key6": "4uZV2JUnobuzU8CDzuXvKxvsodVKBYTtLL1xRwkFbJnw7WxXLWTVVYg55NaLFny6rS3nYHhdgs7SwkxyyyNYmcDq",
  "key7": "4HVhpBq36mSD5dnDSQWLbYMbW5544C7YYuntnVy7ZAgYhZL6NSLBCEFG2dhksbAvEESQrEPm4b57ZVjKLAJqqrgH",
  "key8": "47uovurXMYqB2GkSwYT7XyoUQ1dyofba22GW7nBfxZx7JtYoa5Um42FG1RRFpmCNtaY9Qyefz4mJe1uaGWPoJkyd",
  "key9": "hvvwLRJJbvdQd1aoThgpRSfDCatezJmaxCsobBmXTNrvzU5VASAkda7Y5M9JzVYfVPyr7fACNRqh9kXvrea2goX",
  "key10": "2XRrFDJSPYUSVpdQurDqP4igbvSccQJcgBX2NeX8BhpXimY8o19K65KSGb7RroGrbuetCoLfvuBZbXMYjaLFX4EU",
  "key11": "295Jde8kWY4asKqbTJ5NLQSXpSGTGdjrbEmLi64c7vLoqEjwu7XZZynPcV3sNpq8tp5WL3FUKjJ4wLczUVnBEh7a",
  "key12": "2eZsXUtQKGYDwbeotBjWH1bBZQDM6Drr3WiQQGkKikQUVfU5ffaekq8sdx45Wd1PAyTSWngj2wcv4xWRnR6MCp4W",
  "key13": "ammBKg7CqsEZqb9BBJd43cfKbYtYhALFLEm3gahchTBLg5S8oMnrd8dXj3uztgZfH2KT76PEYWWcu4jbaFd7VSF",
  "key14": "5er8Hwr9tQPJsLHSz95XYHgBwbNNKQGukwgtyB4WKb7fpiErVfVKDmStX4JgRpThfBHa4zZh5DRCmcL8ry13MVrx",
  "key15": "2kKZa1aLtXrp91WnapV8gGvmiphQHwkkaToswGui6sA9vbQsBzg6CYjcWY4kgGpa9EXpah8NA3WD2PT3V7MNWkFD",
  "key16": "5rpchwg5fjkg67EY4hV2ryZmWxSf9cXC1QQYbgYRJ4KAqwBQgL2XbUnJA5b4dcUS6CUAGf5MWFE3eL97tj6kW4qg",
  "key17": "65dviESBYfmCpgTRkwfyg7ENuENzAVVq5RJk5jQybADALjJpeHjCNLCY5YL1rKCCGc4myCBy5qqqapm9eamvG7tV",
  "key18": "2rRhjtcsFHR1ogBXzEbP1Umq1jap4k6BJ7UsHbAuGgEFDkVvwUEPhDNihiQu56ownjxoMTq1UoZe9wgQwSTuaQqV",
  "key19": "32xANWkJESMeLVvew7nVWo1yqET9WaHrFbnknznzcrvjKVwe94zacFHv74Rjq6UFrMmW6kJfF75TsovACpU9bQQK",
  "key20": "1BJBGMevwovffJbmsQ4acAUbANgfXGTEN1pL1dvuF9G3MyVEhQ49jNs5ZwHZqcHY4ZW32XepXEjwkWcQCewiMgu",
  "key21": "5UMynRW8SWohsFhaWYrSmDiKKTbU2aQtThydKTtqGXQvmbzSmTf7Fi9XJqxr5tBYYY8hdoJR68nYkx7E9ysmy95K",
  "key22": "3wWCd9GouHzRizYogUpbehAeDZvFkhokyuDmjrhaC7oqZfULqkbPrGWtDjMuf9VYm6e5dNzJuTSKToJyME3STa7Q",
  "key23": "2gAT2pxVewoZG3c5LM6xL7RMxjBBRuzjBKUHLfCJeaAF7iovYT1mDtQBJnFEtvWwP2o6Swj8zuoh6FtFCmgd85Va",
  "key24": "4HoFmjd2W7R3PQQKMrSipYfh8PLagv1744wv9zqJKSoxZiWKUV3dsGSqTGx1NHKwffygAAuP1jGJMQgsjz26xFHB",
  "key25": "AuNV8HuMrfL3AkJ2Uy2W2oiMHDLbc6VyLW7ezDUhKwYJwv4wk5vWEz8BBf7xVCzvX7S9Db9KbngW7ZBbknivnGR",
  "key26": "2aGoB85aH7is5Mqy9oqPh72ksNpBEWnzuXjRPnGAENPJvibokHon7ixCZiK8D2YUfzGmGZjzJhtAbC2CZyVX17kr",
  "key27": "dEMjMe24RdLJjvJw4qqZX5FqK2AQhB48eqo4VMRF8nmi133f3Wo9ejwwu4YzJzHuYrwdkC3zwfWTDKoNcxqN5tZ",
  "key28": "4XVYJ7EjtPwburtnGkhWne2KQEK6tAp3pkyCbNA2GZNuk2VYhDR87ZosyCQEVm3pENUe9KcD3PfS45qLh9TmgeB4",
  "key29": "4nKc9orwNSdW8AmLcH1R4fSZasfYfwiNuwnLBHe4FmgBvnuNuNX7Qk98p7yEBbK8VdrCbuXkPMquLJ6of7HJ5yXb",
  "key30": "ZJXhjaPTM4yKYKFAmbyKVTo6aPqCVVj4JSe1Ny9bNk76FDfqoVwWCtBdVAxPtr5pmZMJ6MgyQy257TUfWXfDEsW",
  "key31": "5gbf1hnkqr8b9B8n3nupqEZTqGouZUrySBkxiUFnuKEasXi7cnf8dp8SKMMHrYvKHgHpu1ZKmzgXJKVgLX3w7cuo",
  "key32": "4sokpU8KHNJ6DrSk8YnfrgdzXYLmBzLNesL6B9VZtZ81MaGuX1JZ1QhkcDopcXZqKVi3H9v7AwXrUGLozvsQT6XD",
  "key33": "2dTg94KxUjPLNypt9WCrvKdCFtk43dxekJo76DgowAdrTZSd1xKRED2mp6XYQvfAPpPxVx34ip2TH6ZcBrSwff4u",
  "key34": "fbZse3fXqu3iauy33Ku3PQRzf4NmTxxTiXQXpPUBcSAGZHGa2DxRgH1VZTEYaF9vvKpj78veFCKiNGyG11tScJQ",
  "key35": "5h86F8vkJf57CQzn7MkfYeeea1Hreaw5kbmGJRVpHpDfPPm5a895Br5JZqXETarrcfnwJGdxYsjqMhqtULxdp2HB",
  "key36": "2SnyzgCJPzoEihtNqqZKWFJ5udDEhnXv51S3N6gqsoSdrGWaGvHDhBw6qzN7mi7kU3YqV7CjAiH4Qp1vhvSroxje",
  "key37": "4n9g3oTX788WkfmfdN5PNkHqmi5rZukZmEs5wxHtjFBHYcmBup9XTcCEpS2XgTVfePmRvUpJxgJB9ssxkHxhhYVq"
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
