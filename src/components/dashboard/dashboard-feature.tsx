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
    "5LtcTQfSxEy9cp3GtXNQY7M7iZdK6Fd1hp3yDpRGaCehA2HzqXyxbk488eU196DrKKUa5cJRosbGQvCRKnCrMaHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47xvN44n5uKwVoAiiZXtqgeMW7YCkSem4141gvjoeLHg7hKa4R2SKwfb24vQsDMekidXC4PTgJSfSUZ8vs7K1N9d",
  "key1": "5WRvpD8XSofA2LKxN9UYnaMVKzZdPXFHvYyVp1arDCgRd6fgd4yKyMs3ToaTixZnoezRcbqR4K6zzcCLBZuuPmKG",
  "key2": "4pfRs7zrVAjjhPRCkWuekDHiGP9wzXrkuZt7bUfa684efAx6hHsZXMz3LMppbvwbtgT1hoFcMPTf6nXQ3mWgmKCk",
  "key3": "4gW3HB8Cmeum3kkJe1mHDgVJfijTQJHWksyP2oLgGR1ucxXWJVQEjr18QTBt83SaDhPd88ktSqyv9eHqww9KnQv6",
  "key4": "2yD73qgvQJGSMxWeKWsXXjrGzKELAeowBdAQM5DbeNcY4mYhXv3XE1WdtzbHQnMKVrzGnXZBwQsbQj4rBue8EAAo",
  "key5": "2xJjPqMJnBXvFhbrYtaHbxGhJNQcPK8ABqaVJmDbs4CKPVgtfNtX1Vpgr6FGgxMUSh9ycSUSB6j8Hzt2pi5uxrsz",
  "key6": "sbh42v7zrL6ACGqAtBsmhCAJgSaL16on9hwVUxH738HdyiqwHAZreyCjzs5Q7qpNtjJQ2LY8m5Dhe14Yug3ZE38",
  "key7": "2e5ciSF7XBQ4TJsbh2DLYr9ymF3UuZMKzNXVkCavjnPbYwR4PeSBV73HmxSHr9mV4tnNvDVgVeRUQ7rFbLKY9LY4",
  "key8": "63gp8VRx5sFm4S4TmJmYACAFHKDMcGthiAtHC4XvsWUCyfjuRU4y9U1EstuUhASJyAQefbJEN3tMsPGB8wtQdARj",
  "key9": "3FvpU3ugnnXRAdmaHQnp2z5hVcTHvNFgbXDzqg6mFC6DFbKfyTZEYz5aJNchgxa7SGEoMZUxg1Sf5fqGjbSEKAP6",
  "key10": "KLovYeFDPccy5PCrf2uERUvKB6Wc2v9PBuWQXxGoeE8CtcuP7Dy9hUrZN5KwxdoELh75L3oZ1PxRweQbt91ctU1",
  "key11": "3vBWnjAqQQz1ULnDZTBRCgqSvKwoxy5X1Pqu5S9vnXhBUUXQuMKkTwbucy12zdDkpj9LG9b3L4DDs3aFpFG9uQuV",
  "key12": "2cVSpyAzB5v5DBUFZJuusFRXkc7e5MFra4RABFoWbrx47NpYxvQ1EkGkMd4U6mHCYgHsy3a8bkDBk1sfa3L9mxi6",
  "key13": "2P8BNHTSABgTDp8VvZeJCxgJwYahzisBhUTKDkaN5WVKvLPnwxHWXWU2CAuCne62L3wkC614kfZS7jPwHN71SUw1",
  "key14": "2VtxUA4GcEYKAw9JdhvPoxtkAnKBC4sqHhBMigeMDjFVmWde9Uito5FbYWN2WAKq2cSKMvWQcxNWG71trPjzMBQJ",
  "key15": "3DsLzfG9vo3eMJrKA4EiTxCY9zYFhRkdMe7dEgv4vsntvb3HhMv4fi1PsMk6q1TixAACgSsca9ueVWQakpNRyDiW",
  "key16": "grFhWAKNVB6SZ6SYe2TifQhhXVRzvTZ7Cu9aLVUbRAn4xrkEGn94J8xHkbfwGFW8LTPysveZ1TEpW1Nuc8DPgeA",
  "key17": "tUtSm5bVyZzjuNYpiA8WDvgr1YA3RkoWsAENWRnYHbVef6Ew73XfMMWs8bkeo63D3NgGfT2tDy6enQhBnSsiAzC",
  "key18": "2CLweVH74jkCdBDi9GEBHZaExKrZHYCupGYNaP1MSxUeUqgy5J3bw54JjcnyeSTPUtBiqDzy3NWb2KWF7LxY2Qnv",
  "key19": "4hbprvgyLCvhzJa6dRbWzW8TyBK5iV2RmPGZyCTTh2NZhCvy6TfFHJWu8a1HvUX8nMLZkGDfgu2Khby3LCuRTPjj",
  "key20": "3tpQmSDSLNMRBuJJ3iGHCWTxTQZoohZp55GXdtxZdmR9x6ruc3mZCEyY3oidUHqe9g1BR5mFccowmocREkb7Garf",
  "key21": "3QUtE1vNZKrHPWRgvxqw6GpvGQoZ5pHwC5kLQepBFLQyQzb27bGYRLqMrs7DYv6MbFAKtNqhbaQwnSsQL4Pknftf",
  "key22": "3cLydkmkweTxzzQuCAtn1j1zXVpczefsdFMSmJmxjKYTMSS6FQKjTPLoXBDKEYHpfnrCHeGKgYjMMcLaemER5Wk9",
  "key23": "dGysFU1EWSU7LaSUZVf4TTbfMKKXbzb6uRQkAGZvWJJDwETwTNCnWmycmpzecLzXY6qsNwhaKqAR8U1unXqynUv",
  "key24": "3zizBrfWEJLjPNSeDTcemy8UBDKHhbPmYjZBdv3nNVGtvLDB4a36QwTtp9NDkbq9jjBjUR3P5dLdowbTvUoW9vMu",
  "key25": "deeJh9NLYKr7kfxTpADcCyM6pXm4eyQaVjgKUqp2wk9bVH2xSyQ68WLHtxhLpbkxDEYSn7W72wyhSo6HG3yjQHX",
  "key26": "2jSh9ogACnLpqDBTh9hf9qANyswrddkS8kJtLmtAVvJvVMUNBSJDviSqiMmeFZnsk858TiHci45RJDs2ye4yz75G",
  "key27": "55p1ZJoVE1S54r3nGwZr9oZZ57QV5UHioPUXsbcYLNoyriw4165J4PYKMnxNL3nyxJ5dtrdKhJywt2um46zUFVrQ",
  "key28": "4yiyrjRfqkxMsF1qpyg11zb7vWciaPSESJXf1G39fJUpARmceKcSNuzJYH9xEk7Ku9YojrgdwPk3Tb9SYxAr1wZL",
  "key29": "5bQE7kRAG2rYwAg46JKuoTNAD7SMj8zQbE2fHw5nWuJxQGrtmhfHESCaHeSWKn7QjHnvehGfK5LqWcn3mFWCw8Cb",
  "key30": "5UHruvV6LpmvxgvEF6rFcTkfiEYqJ7XuYqRyRWZ3vxtU5qnPwcGR2FZsqKXzGdxwmxCkrCP9zuRTc5faBrpTyskY",
  "key31": "3eDsACgPzcDG4AAAo2aYe87brxT8p9t8B5PzVN2vGLhLn1RD5b83KPZA74U6VapnPTGcP13HG6hScbm8nqAN4iCS",
  "key32": "2dR96fuCpoXGZjjxsywCjizySY9T4y5fbm6sJQynPM84s3a5GzgFB7oSAeCqxApWTfdYiXiXAXomehYB3FYhPikV",
  "key33": "5hm1jQiaQS1idiXsiXvmkx3LXhhXEHXAcqVQx4TdyAnxBQGU7ASeBkPHBwpJSBgyWoCiUUZVtury9Cy4dBkzCcNF",
  "key34": "44ujXEgFRDWhfxeDgMszzM2V9ajUyRXtayFpoUnZ3gfq7xLhmkk8DumxQDQQS2BbFrr9MaKe7c4YFNmYrYq2YNww",
  "key35": "Dpsfo2kdfKYDFZhkihs81ABt3MCpuDnRx6RVSZhQWs6f5PwWyCAH4oP6YMubMN4AMvjkK8W8w9NX6YoAFx7roQo",
  "key36": "5fj1KwY2S84XfNczUFpDPGEXk4TXN71FVMMQNa9pDjfL45k8uN6av8Cta7spz9cL73ctGgWCa7ZpZXsyrsNdW9hR",
  "key37": "36bBmAm6BLBHVwq8uVXF1hqH5GtahJKBRqDNCnNit5peCD5ANr8UJrLPz5tURmB3JyxmJ7xCykXiWRXTGadDbvo6",
  "key38": "3pwNj1rzfeww9se2bpwUKphPqdaQkUKHSVxjbSJsgEMgAEutQBc57q7hPXBvyu9mJUAG7bo81qrNdHziTUrcAHyU",
  "key39": "2pGQFSqVB5Mh7fQsXt6QXTTiJAsWFKbGiarVkEH4fy38wLbsk6yJPcCgY7fiXpzL5We4zMwhA1HH2H9zaLMDy1Vm",
  "key40": "22dT2RSuBpHbhELpeuDbUjDfHqJXPQydwbdGzqhWevX77dXD44ndiXCZyym5MnamZ6HoRyzLVka8qaVYKXgAHwEe",
  "key41": "MZfewFzTxFkGrZ6iUmyg7UMwL5n2uZvQ4UEep4iEEf2mDKsBcDjbmFtSxWF44wg9KposUAFwzQDZgPYshyEtL4f",
  "key42": "3i5D5fCZAzL1vMDAjuwEhaBfYV7yMHiC5eog2Uo2NdUkT81nd8wwN5z16R48z44SF25AjEUCTtZkp3mtYzBcPNRu",
  "key43": "9a5Kqf6MvYxtoJWgMnGSaRsffwvmeuMj6UnvHM4mqC6kFnJUafMaLkddwqTZ7i1VWUioUw4Cu4MTJnhn1fHKnq4",
  "key44": "442DTgJmy6K5VfCsBdfrWrN1K2AEQ7mu55iivVHBUc6GPSZhoqah9BqhCnk6sGnrziET7p643jpy4yNPXqYZYwCp",
  "key45": "66TSwU1a9ctihneeWq3iDAjsPekatfquEq68W8bAkhmj8PGcrB3GdMFLcWGrgcTenokGLPV3XuSvmRy8uBP3Y8oX"
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
