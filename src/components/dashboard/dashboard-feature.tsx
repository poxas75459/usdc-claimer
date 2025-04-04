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
    "4ywXJTuVcWqoRkQ3y1Mx1GxA3RodtDokrkBHhLgh3Cf7vdjhGE88RPsR3wVUmvmu6u2gxTTChtz1ZYtxpYdssmHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YWrXNq4rRSSJbF5iHDqCjkD5xkeaBsjNmmJmSszfuNgpGwR71EjADuLFv3SJWLcWcbvsQ1cbvDXqXiPjg2cgD9x",
  "key1": "3ZGjRspaS72bbbUQ69gd16u7rrBjsehwHaaR611vFYQPECYHwgMo5tUtLCqd48BoPfdDyc2SnpEYdVyZN2E91S3c",
  "key2": "4hP7W7dAd4tFBTHsmgSMHNSCY3YBNQh64XrPBfyD5H5eBkM5e4UdckHe74Ujaw8TXwtg8m77WT4E2AtRWyEY74Px",
  "key3": "4Uxo4nnjJCRMtWLWJ6vqDjDey63WWXu8utuyT7Ge34w8uZrzWoQbYsRxmrSa5xhQmpBWVXZnEJJg51Mf5VnYjE7L",
  "key4": "5MBTNLmcJsLwyKve6sdzgUZRSdaTiSX86n5qGUdQ6mXoaDUnFC4iKEgABLem8oMgHNXFoZbTg1PRrEGGbP6Uw8E3",
  "key5": "2TJBTkiDodKmSgn4e96Qybm4vfW9c555byKeAgZgtF1vsbBCwUbkqByfv358K9vCZC6gkEXwURyijAEoqSchT7fT",
  "key6": "sRs2HfDrpphQaBMN9txDxDm3xTrYWJKmMcS5EYYpnsih2MujYBNehjgbtb3kfxC7FypEVFsiStaYSg5u6bqBQca",
  "key7": "wtr7j7t1NTpxHNVQ1LoNmDFMiFREj7Cc1XpPVJgyGH9Qhkh4HuX45m21FXcbsyGqaX4vsYyckvK44fVaR6N73Gw",
  "key8": "2DEgLiq9MyRjhPHnAqaruyNF344Dx7uoz6Gq5wRxfYUowtCy26Jj7Bq3tSBkS6R87cdFKWuMPGysbyZREbPmTkik",
  "key9": "5eovyXqWW5EHTC2vHgAjyQMGDMYHyMspkBFT5DXnhAHT1qxefPe23QHShfRe9wVuanDwRysK7aph3b5CThW3NVzN",
  "key10": "4dGUCNvEvh7472YwVxaejdqYiVeokb26xkpKU1Fs4mGTuLbh63mMGmyHyCopCurcLUdTAKpQuw7zxrhk3oZnQofM",
  "key11": "3nJGUaCwWirUVqKrPQSbZirQpZSXNoCazSjTJsLjQzZo6WeQ5KnZ9cjNXLwLu9VaQB8xCvHTed9RbMasQfurtWFi",
  "key12": "4zgTgXY41Fj2tzhdXccfNaLVjBXGWRd1KpvMjs4CKcYNnLgzQTBcV6DckYMe9GchJtQWmjpgUrpgLmC5mawciAUp",
  "key13": "iNENdscEZ9op5GMZimKeP4yypq6jsLmmV5kmf5qUrRydiRrsCZu86dftbVZJuEaDtMjLXTsytECcj19DbSCqTRs",
  "key14": "4J4ahDqBk7NVHqLs7TE9ZPrujppgBsycvira5o5ShvDBGRXvVU3Arr3WJXkur3fTLb4cLeniqUFxguNHB4BeyqNe",
  "key15": "SdcUyJBqj31NCsDvXDZ91x3Q8gcUERHnmWkhk5QXVF8WyboMiCDumujFdFGaS2yJH9JycpGAUz8QzpTgCQKv7NP",
  "key16": "5DUbCQGPUCyTQeJbX9wTHTf5gWBKzAPET8q7Znh8cmrKG6oDeyU58ALVYTFMGamp2WcQJu3KZwzmbi76V854JE7C",
  "key17": "aE2C7KN9b975pR4MhjRUzeJZSobuyLx43Mo5MaVNJjBg8maoN72ysfc1dUeLkvewzwo2LnyTkGry44xjaVGLGwP",
  "key18": "45ykJSGXz8w9a6xagNrUxyqVpbrwj2mqkoKfLEz7MNSNuekWMuRiRkevHKwyKmNBqSPz3xcFAcGXcMUsv2NeuV1v",
  "key19": "3P6HusSxmgZzfevxsZiFitoJWZn886r9J3YLcAoS33SFMrTyfq9yUHKMikqnoiSpTFCwqxJGSUx4m2kAqDumaWsC",
  "key20": "5hWfjfQoejFhCaFECQYGumR6tsz6sPbdVj9GZX7StF48xLaSduHN261v88zSuc3vqhfQHPXirqVK4rfyypXJ17TK",
  "key21": "2rQ6J76VygNFwH8vKPDqwdkib7CprWnhc9xCKsvSj1nWyrrrwSdesjX1UnDd2W7e5gCWp6RMF8BrkCGv8Z3mJTLj",
  "key22": "nTQ1r1V2XR3ad7tLf6WrBKze6NXKYwQPjz8ifEECq2dUUYPneYUkTH124UYBPwqxBnkmLTPtvY4N1RnmN73KGjg",
  "key23": "5pDdomz8eeZkoA4Sif9iKgj81cotajixSFjoEVgxh83jaJHSHtA5WJSjBPcPB8JhAuAbrwucZkinuijKrJKJMmgy",
  "key24": "4ERa5JmuJKuN1GCEH3Kma3xTDkCdqZv9HvUY9VQAPn7LDNrf2t9yCLqK6p5oFfNqJNVwtx2eyjtUBdePiLfro3z2",
  "key25": "5WXkjqJ6pfKf8FccLh5J1rq6Wrye5NQp4MbL83TcssvMZrVBMTd5YS5dsD6cU8rSS8d1kxjZngc45qANe5Dypj4b",
  "key26": "376hd6i8Ag1bZZqcT3KbY9AzjWHXMCUv5WQtfrRkp6ENBBz4RzajcqzT1dEoa2cesHsFumkEEREqEJU2cX34RrkC",
  "key27": "X8UBcsaqjvKf9mjygDdnxUsWxvE8EfsfWhjwyR7wMBge96RSmFmoU3GbdZgByiqvAdARX1P9NhR74ogHTKWE7QG",
  "key28": "o7K7VpzXkyHa37DsTA3EvoMDdkrFoT4mdc9UEjLqGMtkqFBKBnA3zDPQMB8EuxYTmT9jUV95xXDmBNeJzQF3SEX",
  "key29": "5X2gBN1mKCMz72EVifgFLVLpx1zoVx5vXSnTkGWjkM7xrsNMUY7mPKAEg8hwjhoKEgB7NHVrSrFQQEBSqWVfShoc",
  "key30": "27oiPEPcgDDcDPTpvBdXbFwi1fYsYSyxrPH99XyZX8PrnkE8x43KWbUGbYhLbQ1Vw6bymmuvGfd34KgC6Jxy7AYU",
  "key31": "s44QCf7pmpGFhLke2mXNKKXjxq6oA7XH3ARMDtpovqLeN3jyh43k3fsx7PuMcoMBu3DXS9gVLuvGn3u9Xh6f65e",
  "key32": "3aMBt7uR1s9Ny42uHskV8dHtN3qd99ZxC4DHmJHXaZJyVBTdRGHWXePkHXwec173aUHDXs8aHdbKhBsM7FUiyTu2",
  "key33": "4JzA9CEVQ9DdzWdN1Pve2p5fm8GDm6C9xYKHtELKmjk43GVk59AcbgnzBMB2DZbbnCtqKk3jnzfQDE8TKzxxXdbd",
  "key34": "3pukHYEeP8xj3Fwags5i1bC9fi7nXYmzpQbJv92Smnp39NoHTR9sJYRErBPCQj2MGJVqmjHbPBA2Wk8hWBtNaBKY",
  "key35": "4DZSzjoUcpKWvun4AoFVNJfqN9WE616fVdhZbTK7ZXkhsihQP9xNDne6LmNL5w4fR8QLvG9mMpGWfwwe9uBEpyKM",
  "key36": "2KUdPtb8eP2WEiKcmVk95TexssrC7pGdGJxVgb3ELRwNoBZnSZhmpR3EZW5Th3eGXu2jiFp24TiGAP5SJBbDzPyf",
  "key37": "2npDizQbeJvB9PnGWW7xRiocw2ai7PqUwjFbKU7NqW646fxhsYPBy5FNxMLhVCK2cwKXqdTsnWCe1LLcc5dhPN6F",
  "key38": "4Maf3Xc7fHaSTTXx2RLDcjXtMGpfAQ7UA4svK5bj1JYE5vNNLMaqqHWJuVR9BJbgvnYpqiK3r3KCva96sCzJts7X",
  "key39": "5ahsVCYLQ2vz7jpX57VkQwp8sN5rxjDKAdSLLfHUsKsa4uGPgKJF5E6mhPgPfs9MvoZF6r95K1PayNXYygDPYuzg",
  "key40": "447Hdbjmvj2xBaNjZPndGzsrAvjN7KdVNzXYLhr4MUBYLq6JFdBnGDtchnRXPtLX6MuJJYo2trKKeTMev2VWNds2",
  "key41": "23pxMTT1sryhtHit2uSaPptpvRMHitKqqt6sWTnEF8Diyj65bZ7dFK7ZtDtY1UAnUVje69hUBj9zbTAAawnT79KE",
  "key42": "2EykPrWL2uuz97CXfcfLPqWdmKfo894JUcaW7Wu2dpRxt7RXQ7sqQ9kb9LLvneBZfCyCq1iuqDUp2ASMaJRBmLaY",
  "key43": "5RnXj76xHEfvoT7MBVo2enRQQNBtdVwT3jEvqVUUXGgnH137wD6xDgSWRGatni4NzpRZ42s6HisG1Wy8zp2Pjbaj",
  "key44": "385C5su2mNsPfTxAC7zGucbeRkzHVzs9nJMTgbtAbiwPDosxB2EAYACorRpdhpfGwJ75jFMQyA1joURjrFUc8Gj7",
  "key45": "5rCQYSLEs8kbXorkCxcE25fmusXf81fYrcDtxsWPvyXaE9dsZkMvWTFwFJkg6Nwgv8BPpQUhCuqCXDWTqwUS2vaH",
  "key46": "624iFuQkZ3Vs6b478BqyRgGNvn8WnmyTEvJCLfpKevSxS6RGHiiHRzDswFZCkNQ4XFmfDWVXxRZwe6986S8ZBUim",
  "key47": "3kk2RjQ74JB8RyzYkAuHEjKomkU4XmzXfJ3FQus6E1rsuh2kWQTTQiB1EbHjAubSSUJv8aRNS4SWw21VJ3umKgo8"
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
