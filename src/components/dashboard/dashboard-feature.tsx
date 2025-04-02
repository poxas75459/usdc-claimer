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
    "Y66ZYpLcWHDPaUudHRL7g5VtfBszfdSmw52JSXfqn8NTz3zs4EU8xMXoEJEcb2ebhdZWCv2598tc2LrJ78st6fD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gu8sLWUahRHYdguffiXmYtNqdz1sNFqTcFdofZF4PH2HwXQPKyJ9f3Aex8JVLktJcMJ2b1eCt64ryzWpKjmE69L",
  "key1": "4my8QFnrw5naFbjjsvsNHzAGjfa4Zxny4oF4bSSY3a5K8DB5JzsEECEyB6EJojzy8q7wjkgXp599YYJpexGM2Lp1",
  "key2": "3DFK7SXufTNs9ZCwkvbZX8BQonr5SJnppudCMgk8iDJPQfGggyETrjGkSaXt9259ijrGW4ke4tpSGLoZvapUD6Vy",
  "key3": "4kAA4XUPjUD57rHCQJzQx6ZGqfknmEiKxsvqvLmWEE9sxRk9RhHT7n7QYBzXpQmoq1W3nbVzUSotJuispx7t9NBG",
  "key4": "dWQqM19DRbecxybbFvjPHLHeYrBKtnBbdC3Me1a3369X6UjNsBiQmqyp6eGE8eBRVKkPASPeGMWwc7PMiDCDpHc",
  "key5": "2PHYgPEfV3ZViLWknwsvSrzkcTysaqMFZ1kEKf1V4B72kcWaCWGr6uFgSpNisYHgVbE8k7oRXsNda1CR39eRpqhh",
  "key6": "3599naDEu5bxAA8rXNaLtfuPa2qRUa8TVmy5Q4iZAiVv8hahe5HCFMpWfPcHtAaEK5Zxz691aEuh9fCRGjTzX7uW",
  "key7": "DAbNWnbAbqj6TMmuSMoZzUtagSKPS3vW6s3R8oi46GS2rYNe47pQCSUHBizDQGqXF4pXirPMduGXvdygt2aCiyT",
  "key8": "5eDEh8WAB9wHUzMyK2urao9iwiexctaEr9EXyqAX2hgNtWrmvPfT5twWMPBeF6FMQQCg6vyNhghFd6HvVRnTSPLY",
  "key9": "24i2z27rXxVENjX4k1CCY4xYQBFznqtjRNxG3YhsPQuhQ961SDGYnArBN85gxYxN3uiwYfgCy5t5c4aiwk7xKLyc",
  "key10": "5kJYvX6rm4BiwkHAupK6XE7fmVPJs4st4gePP21RDHb2NZaV1ARsLVmww49uajaSpBFbZYRTwskDMCHQFi8ye9Jr",
  "key11": "2sckwiAbP3RvaT6r6WVAR2nap1FrLo2Q93vs1pnNUg8ympKy2Wt7HGWm8MpqhuPJ1YXwUDVLRKpqdqRGLg4ybc48",
  "key12": "4fjNPkA7j932KjPHActZ53gKmf8YeYNdWUZbim9Wga2sS1vVHAZSmMTJ81PWhhyfzz1Fy5xszY1cmkh5U7dn81ek",
  "key13": "3bqnkHiPZ8KUMYnACpPCmi12kvhpCqn1tNTR3j9e6BAjxJ6w46j7ZJQdRGPQuLj6rmd497HRnH5gBAC3AjZma7p3",
  "key14": "3YbMaGpWdsPP3ipEiwR1yJRw19qNtHuoWQZU4UBcdU5KWbsFf45F43oFpd6MPTmwnvNri6VkVhiDw4C16zFYGSeX",
  "key15": "2UpAEpJmyBzggEDvWgbQC4fhifEqGQ4ThFdJXMgYRedWP5XDCTh68ytE3sAVZqe9QovHF9iJSJsEVi1mmUAVobUd",
  "key16": "5eLGMFAzDj9pEEkT5qkonTCVLEczM5KUjpVvotHcvTd6SnfqCQa9aeoe5fLHS5muAD3EFTema5ErWEedn9ruE9ek",
  "key17": "5eGHuRPDZSUYVyeUAUEoJxdSFt4vJFPxx9YDVLHKYtnbJ3fwAC2CosV73SeYVRogwKskewQDvvGSTussZCgCKv9n",
  "key18": "4hDTPsKVg7jxSpt91Nc8fDsM2KQZCxR62qAesNGBvApHJhHpW4Sa7JdEuvMCcxdp5Zf7ShucNRLxD2P1R1RL3Phj",
  "key19": "51b7TakQqPeqnFNLi7DpURNubguJYaUGdZiZRAPbdafRwEsLtobQ4vqe23vHj2Z1BVxWsNKSmsASqFuqQUZm57Az",
  "key20": "32GpUNCH4FDgEF9ZokewLMwqwv8xZZMv7cj6aasHbnro3jKvxeaU16dy59pS1oqCdY7j7V42WiPVLu3rYRUMJ7Go",
  "key21": "3Z1kB2C2CTSVUKPd7gThLzdjFFEeDR5xUjpMFe4P1A9fUgMWBWH6M7pZ9JvgrHsFZLpzLd46QMPdZsA94x6XN8Mk",
  "key22": "64RPdPeWqEk47iZBYMjZ9wa86WYj5hPWUmBKEzgav52i61JggUw7KVinkiBYDWgpB1Y7fswe4ZuiYQdjYEqyFzGs",
  "key23": "4mcEGXhNGuVivkHMge4pfkHuZMYKXtcgpThBVafKVvwzoDathgkJU4UUTEipJqxdPPtoWPv4FTDN1Eder9D1FhWJ",
  "key24": "4idzCqtTHEeDucKZThz14qCAEn61RVmGBDwDMmKY6miKfLMUyoe4NZBsBWXYcQShdRTkFY5qsJsqrrff8r8tjDpx",
  "key25": "2ipWCzBEvZ6XVrpABd1n4Zk6MEi1Qm6jX6ofcCtRWZGg6rEHcGAZLJieUxaWtnVfxSfGRf2wFtfF95rUb9AS544L",
  "key26": "4f6RWKqNHbzu7812PeCmD2BwoUS6qxWQQqNY65wJbw8BpkAyrPP35pSt1q9nMkaWhJVUxfhzUD4s1PxMAYs57Ka6",
  "key27": "3aW5LrsfbZFgaSFiaVggJkMJiHPNzGxLzvBjHQ36VszvEfDCDRdkkZEHKMSaPgxCoyDMUKqo75EoqQSEK19vhZuc",
  "key28": "2DW6zvpfmxUDYQCwJAB5AcvJJGEmQAZyKrZMetfzK8VqYi7Am7L4Pa7QHhvgJq43TBXHEWhqG83ixv2aZQDrTP88",
  "key29": "2vrHZjm1Rgg4JZdUWrEV1JUxhEKmGpuh9UE54N8E9aP4dVwitDuWny19pRKVFgVykj9w8zFFkVzNFVMAobXuqHwF",
  "key30": "3okm7tXtypUQeFbp6XBBExxC9CPm4sq9r3K4GdUq73AE5MABQpzTJQVajdE2BRvwk5TBNGyNEmhTnxXSVwhftAwi",
  "key31": "4LpUqDmYYD1JvEMqkcWuz7cDqRLCPGRwmosXDW6C3Ky3n4cCR53gjEBx77BtWNZZ4szsMDq1J8ArQ11FLNjsbK1h",
  "key32": "5vg6DzvRRjWJ9ZZ2kByKHWsqG6NhpceA2k2DtHvszaUXKEun6onuJ5GtmrbLCnkE5EPNXxnbKcZ3or6vSqUtiY8E",
  "key33": "4p9GZPyrCBPB3xgaVW99To2AMPiM8WCM8nh4CPLXJj6zEcVYmZ4ufh1WRwxibppEWcorpjseVwtk5aieGoKnr7cs",
  "key34": "5gCtj89YqnU6QfoaJfffWM7efySj7nke5dZq16DmojyJ7iCcUoMdqgRp48oVwMUveFzrFn3J3C2hhCgiBBXQoajA",
  "key35": "31MPZzyPPhyCo73NtXQB9YuJfeHQihKDVbydPo8t63ZbtNV2XvTffLMTtkcpZ1aZCWa8awokTCmCFDUQoMtyC5pv",
  "key36": "2auf9fVgGoJnxy4WAg1SVXjaGsKMZesDU2CkkgsoUeoGrBTpxmjL8v97VpZ5T777e5Whf4t6Zu7fTyo8Qzna7EkB"
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
