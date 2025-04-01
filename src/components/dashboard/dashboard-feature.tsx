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
    "5s6gSjrdL5vogdnLNUSueyFnFnFX5Gn4z71kqX7v6NsP2XadZy1jc3NZJ9pKbjbkYXbQbBgrbhkeHHx3eGRyrCMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "azKJmKtkEySYUi5jmzpWZCNjdyWquvD8tBpG4irqKspL9BQAAYx5MU4rTdKdZAnaZt2PiM1onsgWuYizUdrFvZd",
  "key1": "uaPHbaV7hFvXjAmGYziHhnE2nHbRVcs7YM21unyZ7spRZVLTEyxS92p1pFz3oovdHSQCGvMxwMroMN5BLWPQJEz",
  "key2": "3SAfdQEeLADh7uCEiepXLvokAA3BYY4SLcWofepATZbQLrZCr9VS11RSTF1iPrrtbjH3FgPKe8Ev2k5Bcvc3tXFX",
  "key3": "sbjCbw2PT529WU97qncWFP26UkaYqMSV9TWkFApbiRsNZU9pxuwBFKoN6zstxuSjNuuxzA5sRaM9SYiouoca5Ks",
  "key4": "4QmCKvNVs7S9zds6E365CkCaV5hVUNZUQ34yKSH2BLqSqJJJLNocyHfgyhkmcRXTddYQ7RQcD51UgQeMT1Yacv8n",
  "key5": "2onoe8xfg9qiazfoB5RWNpZjdwz1Z8RBNU1mVABo4UYH9Snscv7esyR1wpEAGBxMKoBYmVMwHtGDNRYQ8CtX1ox",
  "key6": "46raEmy4PnNn7msqvb14LcmqTF6TCfo5soj2PSj1qcZFj3U3RPXS1bNGofvHAPpCoZgHKMoAu5TU15B7qou2655V",
  "key7": "62XuHRDpfn769SNaus7YzKKQLzj74Vu1oSgFvB3nmU26JLYV82gj4qpYEUZbExnCjxeCoXBxe8TM2cpc1aCeeuhS",
  "key8": "62Mc8w6pRpaGZZo6uXLkvVkNpL8GpSUU6BzCYLWAFP6kL3VZnnxmGymNuVfvDTpZnUpBCPs7m6pXE25HUTz1x8RP",
  "key9": "4MiuCGQs4CaKdZnypJoW5PQSyopwgqcwzfwGVuNznFsxp4d5XTR9a91tmCJTJ2XtbtyM1K6AnZ49m8NuK7akWeXD",
  "key10": "ZesfbNgy2KDT9CUcVsred77m5gSYuwwSgh876XS3cneQEi4fPgLrkbyU2BKwQ6HFy1mw8bbRufNnT98r8zZeyA1",
  "key11": "3tyhGpdEHpZAgUFuX13eMBhKh3S4495ync3yukZopsAbkMbDuosKHB39bUVL7vqCg1n8JZqBtA5bT3zF9Xjb6YJW",
  "key12": "3CsyQxxidj3Tiw9kMjeWob4XmWACmGH7tYj5bXKjZFakQAP4U6bTe6RxSotMgRMuq3baRT3dq56Q62PoGjAnvKbZ",
  "key13": "iYAhEBhnGjLTp5ysb5M5yuDhQLdtyHg57xTVa6ANLxYzd5cRwwGy59MDNMjkktLzwmmWTt94ZzF63Gjr2qCmLX3",
  "key14": "2B71wyPKgXAK8kGeG2DuqM2LCTyvmG2FY8GcQeHJnjyPgaxhcYw67zde6uZ1nZCUQZ3eKedURzmJ2jvLEvUmxDcu",
  "key15": "49njcfPtwpuTE4S5PyFWedZTWgJpjBK3d5795LWLVwDdhV7TUuvJV1vVT7vq7zdgBV7KgowwLQaKJSWWC6uzexbk",
  "key16": "3UC7SqPekGadMgFCG9CvDBsSxEz3ejcGtJxrs88dh41h95EW8WaGZdX9gzcnR4cn5MDep6Kcyw4ByrEpAQTjBv1q",
  "key17": "4GYyHLPCV88YWCyQdDv12v59kfMa1dcXdygV63FEiBGGmvVZSRDt7gVPdRVaNGLaiSTu8LYjSidSpbqvqq9jcPom",
  "key18": "3fHNhb8ZbXM55yYqyVMJHVddD9MY2PCLqoXdrEsw1SLBZUV5eEBWwz8vKZiJ9G1tWXZJwgonXKfg5agY5eRK1sFn",
  "key19": "3VnMMsNdX3Jgqo7EVhtk3jKvM8YuEvfth7CPQzxrCsqwBcgf1gBLPPNUtcMZckY8rRcASX17AwGDEBzxb2y8o9zZ",
  "key20": "fBYwTUwyu8bPgwJU9x6qKj6pC8eGoX1fg2VQ3VSZHW45UsTsZA7HEygRawDCJ45RCNXsLX7jZGNKyLXS2yRC1p3",
  "key21": "2f2wuLf5vR2KndXvFyxSkme716AAkD9ocF9gnc3YauXgPwF5PVG2rTTBAiuCajNiHsNKqJRgjmmz5iP2uX4wQPiP",
  "key22": "Ky13ijy1HgiMfW7c7mGvBkDY2LEZT7ZTM4T9Z4ymtmqPGcWdpicqFoLSpkyBmV5nMfsBVAY3V5KsFEhkU9sfDEf",
  "key23": "ftNQDoR5uZWccDAqknN558YaZiBiNbv1ek6bhdV41kgpBkuuE8kkXVgiLWq3kwK6aY4dQ6vJjLEgprranqaG844",
  "key24": "58BKBLRzPe77ngwM2royN2YpSAr3NccnvBR4XieQjueqXMjAJLNAXhhMHrrYHPuWvbWtf8UwVMFaP66J2GUq7XVG",
  "key25": "48jDupLh38P2wG1cjSddiwzKKUJdmfrEj3xjtx7rA4v9d9Yf8G91BpBEknt3jMoQHA4FSCAXPb4afMjQMvvb4Ctt",
  "key26": "5WsGkxzJ72QhofMiR8fYHZXjitdZqGmWp27sKZXa6dfpxPtMu5BMb4AJq5Jhk5zxyXU5PWMVdWjoCeuNUrqxPVEz",
  "key27": "3Uin4z3duVTLavFgp6nrL5XKH8FLg9GnSaVEit7chKbqbSQ2aKhNwP8ayujRxpybfdPZWsGATuqtiU25XEdtLu4w",
  "key28": "57YisaM2vw6CWT1DNW7ZcsjvixYqwDjYXgA9TyZJsci2zf4TPtizUvpN9uNERokJHyW9nQWU34j9GQaK2Wo5zn4D",
  "key29": "2S9YvN5q6mbHhndvwgk1KkbuPhHUvXGFpdkDuDUdwNR5p4z319vthoop9cmcVxsoaPsswwNjBTjTqwAF3XC5cCZh",
  "key30": "4SNnzW5LzFRH3V89QwpNonLfKKPsdfco1PdA62BiHytqyuiPnLfLhRa96gzB3d8taRzWokGWBeiTJNVxLoFiEbAP",
  "key31": "26kjA145E6PK7HHop1LGVrto3ep3AVnmbQZiGx9Vd4NMSc2AqPu5TAHfp6z6dt89CGNH7tZvuWBxpf5Ptxvo4DXJ",
  "key32": "5buemfvV39BkGDuW3mDWND7MfuoWwDkGTxWT6j6gfntPmXn5W3ivG6UqESUB4bPccqAzPhQ7UJKH6waiSwuGgdDH",
  "key33": "bR34iX4tVGK4F5tJTddi6SuAQpr29TFZAgEHZFpYdS9sffUfRG6fKb6WaxeD7hWkHg39TbfxjpUxAAW1jgXyiAW",
  "key34": "2ExFWUhaQ4HYc32p3vGN5SSANjsETnihLvuRAWKf1YaXagVdXm8BhSyMRqtfjcnWRDwFnNzikWT354iTGWfSYvJF",
  "key35": "5tdvu7m3jZQ8tnyyZ7cpyysQYb4JQBCQV9gTn1ryBvCi667i5noFiXTwrgTt1zyasfo6aBmWqk9rdZMZyZviMPLB",
  "key36": "2dMfFQakeZjivEH8wBauBx56dWvU7UiqfkhKKQUQdPc9jX7N7UU5gtaxGCRm3LqF6xz8GssEeNmvzfYoMoeik4jt",
  "key37": "4VDA7c19wo1G32BLwbvtjz5Fsr7QkjY2FA1djbsFzaCMzNvtWASYxpmxiGgsNUwTf12F1XSTpDAFWnQ2so1kjq2J",
  "key38": "CWRJoFkMyrPrv9QAvrqTp3wpiKXJXUs8S6srAPkrqouuw2PDFDUdZEAHS5tz46uzH4wL4RYsc2Hsf3uzcbJyjQF",
  "key39": "RXCE2HMmWhm8BuL3jMncthqhP9Ry2DSeAwDj6xMHkXEXhakvNVLKMEdvVx6564DEMNNVNobv5rUNh3GnASsMaXC",
  "key40": "5LjJ3cfHGdgtpAyMuJBS2UcwSicpTKpXuqDybLGKZ4Fj88VED5nK8Tv7Wh2QwhifJSQViakmY7g2nzmfmuCnUDQX",
  "key41": "5THfmJrgP4MNxbWXX1braFPBZBVjNVVVus95C5pNK4qL1CtGcVk7JFnakVnCLc2UoQVfwwkcZU6xdT5noDZAh7xn",
  "key42": "3PCSAQkEQxvzn5LLyY1eg9SNS6he5bT4XRiUP6WHkg19ejMQ2U6WzqiHxAg8bCj2um7LqVi9rbmn72oDXeFEPvji",
  "key43": "2MShApdCUh1LoZ7mh1xgdwirBBg6JjcBZnEvC9EP9MEWjBMnbPZxnVXauCbDHsoTFtSjiPQcgzTgzvN8WozRzXy5",
  "key44": "3CkCewDLXjkQqi69nEkAZSoAsiEWrmodzNPyUEQDHMyUtcshqrcwB5WEc7rP13sdX3mGH1LJtZf8GWzDmGfRERA2",
  "key45": "BPhNwnLTEcptX48XkqD5Kp4MjtppaoU3M55Yqn7PPQCPTnRDE2va6BYJANp2fGJDGGbJBzD4aM4eANWyjW5ZmTR",
  "key46": "3Uo66PWDAFD7MwevXRCp4iM3SSsrjPuZei4mT59iGNahZwsE1aNgGt6NTmiYi76j2T2ee8toYJ7RvRjkfmee1r8f",
  "key47": "2EWuD5qaDCHZSv6jDvpx3c8jyX8HAfThN4aL6DStjenzxaoSnUqLMqzgCtE76PGhR6hqVoceiV3MXPiy8Ev2jjUP",
  "key48": "zGgMLYxQJ554PdNdtuQru3nqhejsmoPy2kj8Mv2XowmgqeAX1GvaJ4if5m4jUB2iGRbwLhHRPVbANgzkoDB7HeN"
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
