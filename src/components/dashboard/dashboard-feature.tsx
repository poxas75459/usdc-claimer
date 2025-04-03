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
    "2aRGig8bRJH8weAUtcdVxzkgPuwbn2ZoYi1EBznb5PNyRaeXxt87LDLSvHpFV9JdZoDXRRtVkYgVcmcYVrjKsyh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oudf2z4WmSmsiAtZGHJmiNJmaJnuiJu76Vu5krcJ54cdmqju4sFhBoeGygoqov5XoXFyWgi3Bp6fn4Z2pzjmf5Z",
  "key1": "4V6mooVVQVTyn5k16yzCjE3k5bsEfpkA5H31E8XtD27GdRMtALaZWuBRhXfvGG8cwg8NLHzv9UCJqirBhBCk6v6e",
  "key2": "671Hc8gJjpTecJi6aozQFydh9KTQUCTjngbZkLbJqWCQUVx8t9rTJ4JdkceiEFqDA3V9nPe34uDoEL9wPRgJcKpY",
  "key3": "58G26zgNGPVyzJdwR9namNtMmCSDw1YDMYgdufjccY4fLEs6oMwFPZbNpyqZmUYa1yGpsZCvK3J2MfqiTdJpUffm",
  "key4": "4eGDkMMnaMtLPSzPVb7i5BN5ZtfKzAFfHu9goHpJNRmaL425iMfhHkbyj1u2sHts9yfkiiG4RrqTa4Dzc23zDT6e",
  "key5": "5SR7djdkcoQ7sN4GnLmUqGHXFEqgi589A2YHEMikjnSk4qBPFMXC2ypjouzm9hJQGDezkiQhUMGxQpEGKCHmJ1Km",
  "key6": "2PxW3F4NuRr6SXTZumaZzti6feXmBdatpK47HrnU13J1VWNVtMZJ6cW4HzJu1BqB3DxvM2mJWa3soCJHqf4wiZhE",
  "key7": "2RtHHiTcX42E21vCw3WjsEbte9Hsc11JDNSXDoh7bVhnwqX8eaaDJJpQAEqBcR7nL5FWMgtMUU5YTUjqrACbZQ3F",
  "key8": "2jBPRPKQpVEbMqmGbUATj5qA67UEgDa8591rkaiJDuu5tTjvH21wa8Q6ms6YnXLdv9dKmjDEEfpgBsRR2YJ849wf",
  "key9": "4vWmegKzo7nt2Rqe1VcSdvYzdxFoqoyWY7WAnEdnfRawJsCcc4BmnzKpSYTZW9LN8fAK6Y3fyG8WzifodFiNzmNZ",
  "key10": "mL7urdkJGVHr7veFGpLWLzWXC8FMrEr21arb7xmtARrAanZfPtnNjQ4XWTrcUjaJPpwxKGkJMEVAGx8BPPtqrW7",
  "key11": "5TjynHxCMeuTaBPzYZABjgfk3JJjxD8YdKYKhDEc9sxy1X2CsPnEY23w76xdMmCys1sQ6XgUUfxtffDcF7wWSXei",
  "key12": "4QeZ8bw85emUB6zi5SmUMW8bWtq5joNEqidzZmngXrUmmAQ8wY73mWaBFNFb7hVd9XRVBf5TUvuVbX647EpXfMrb",
  "key13": "2gQHoMdMQYCEdt89wn5fvw7B8gW3zpmQHPiGaxqmY1es6YAuJGDBMypy3eTE4HupyCH4U8aMQbTNSm2fjvq64LvW",
  "key14": "3ScQP91s3gAnXzHnREJaBMj3um87weJesR1wtfjaaB1XEYm7eUiUQixwANvYXmgt3LWED72pjdVyq76dckaXqGV7",
  "key15": "WgrBJfCckHPvFcjvvHSKpU85tBaoR5CEZRaQrdzD44hwiRU2QEYnA6PktzMSnLAQzAP1rVwc3PBk8mwtTP4kqFk",
  "key16": "3vHSSRDtUsUBwC28BbvcJTiZVR1ArQJT9pEn6K3dg54x7parNM75Go1rgdM8XNzoN1CiJAb2K14DetZAsMZft5vx",
  "key17": "5ycBrc53PqqktV6GGdKbnKrzPLAiSPMux16D2iDAJHq9i2qMc3a17Rt6UJRTf7Rtt7YVxvi2Pd28XtopD4LQSKyv",
  "key18": "3LAb3TbNzLiynLmx91E2SYJJx6wo26Xqmo4hhjVagM3uTJQFAPreeX2qgn35gbtCodfTUfnxP9bEx8VVPCH3pWWe",
  "key19": "2e1jkimPvk8EdXw5DacztqTaacvn6y9GCKCmhPzS64kiJqpHtcqfbKS1KQD5uvXyCwH95TXgExYxRDsWkQg7ZaE6",
  "key20": "2BzGaSiTHq2NExYXXSu4ismckQaibqmHx7hZ3aoAfXDXJp4M5yVDc9od12wHTPibpqfzWt6MhR2dQRbGm1NvkjMw",
  "key21": "6mTuGqdRma6LRuH4gYTd8ym73ujXbCoqvgvjro2xQrXdjKdQDSWtrwmc88LMq2oxKGeGG4ndtRv1pJjGjuKLXBE",
  "key22": "JSWRcKd2jwNdvAtwadJmkmfEA6RxePKFGSBSwiqakhFvmGdQNLPqhSk1vrFpkMSQNRQX1Vns56ZcMacgMkyLAPp",
  "key23": "AsmNWT8E58stk4kzAczbXWhzF1Xou5nrY7WaXqBS16MMVJURfH8aBZgmLCYPan47GZL5xYgfuhyyUs1jpYJ7Mnf",
  "key24": "3S1hSga52Gr8KcNWuA7EWDU8qFwZGZLxjzrvG5hxHRhbAL8F4Y8AShiz9am2dEGq7aPS3NNwpYorr2CLC1BCC3m4",
  "key25": "5cEaMf4Rk42zHjvddRvP14qbT9spqeFbHh8UWtBQTMTq7CqJNKSnLu34ZCDchK1U6Tz9tEa19yoLfhFapWBvSwR7",
  "key26": "3tDA9yjTLAXbt9N7oA6APmYmDwH4DRawTeKx1vsmfzX8YiqiLUewxhRwm2SbPPjViffQdiTiaHUbfLkrdPPHAmfY",
  "key27": "62iaM1cR25xeXVwJz6hojeQE5TVkiQDZcz9ASUaSmEarujCFYGM8qNTyksxjnZaKiBBM7MqAYBWYodffqQmT7sjT",
  "key28": "3uxvxiUvL3jePPBvCtt2ZuGK8oiexJ1stEkyzc7UDX4bhxMMKwe63jLUKkVZpUHeHtXjF79zsKEr5Kfg4pkhd1UN",
  "key29": "2oJ6S5V6Mj4Z1tpYFmE17s1kAAzpnvzDEVDnKCNc9cdfqWAdybxvfsu5WzFTGwgKfwE7qzV6ee97wry9sZGfVTLA",
  "key30": "TQJfs5J6YJKBaa5J8FoJpWioMa9sSm2VNpzD5XDMNKQrvcTYNcR54Pt168WLYFw3uUAJYau2n5KNeNX63fds9Qo",
  "key31": "5t8hXBHx5yeHm7Aqj3MffuLKZAt5d8uCBgVsF6ag8kN3dLpa471ty69cBEHdqxTA3DQpunTzQvbtDQHRFM92pV7m",
  "key32": "3BVnQ4q5BQADknHLprwzjtyyfU1Rz77ecHZnCpRgZuK1z3ZEvzcJBmzUEWozSELkguLcPmd6dUSDbYVqubP4wMER",
  "key33": "4Wro3775pmMi52Fz2yGfHYd9U3jQReoLLBqDB3eNA39CRqZJDaYhBQXD4yY1oyoPk85aZZfGotGHJAEzdnkXpCQ1",
  "key34": "352bsT3bEweCh362UKaYpG2tbEjWP1Wj8ptwEyh3tZSnP4UW5JkB5m828H2tSuHJ4TYMLNoXM3sv7gMWHmzGCY1G",
  "key35": "55Wam32YKUwWJUgsweT9tmDFeLyNUaZpyVyQCFenhLMKkc3pywmxzo1oGW8ddact9uAAyKApaKz7YWt7P6jA4R89",
  "key36": "4nM6iZebTYgLDwV3R9GcqSx9j3iRHVs93uYmjyjCSPU9LYengozcJgexvWYXjakBrXndxurGYUUKNfMMDXgcZt3D",
  "key37": "51dcVRq2twXqBNnyzPpB65qwXxr7pkc16n6f5eQ62Ey7tAwVWW2EnRLBem7DtKMEjSE86a9pmcvyfnBg4pf6YWtJ"
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
