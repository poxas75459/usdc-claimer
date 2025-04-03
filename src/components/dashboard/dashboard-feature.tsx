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
    "5Pa3LrPAafd9EHmFTAyJiBC6zkBUSgnVT7uxsQPxLfaCdmnZXzetp1j8cRXdWPERPY6DeLoqYsCFgA56qtWBQCoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YovFGPeartAW1JFeEtpAytnGttYBz9mbJyz9JZ2tZPAyF5qkYQVykXDS9BDgW79MaseeR3H9vocn4jF8hTYi6Jt",
  "key1": "3WWEqKmCsXYCwSWUaNaCJdfA8BqihQjoyggNu9E2BzbBSmSNfnGtUgXPq9hDJmHrrfVcHYXAneTA74N7oeH3CJYz",
  "key2": "624m2pan8T1KkKRZpbrt8ag554v3zdUHwM9pKhfBQQXFyUKFbBtCknsfQW6Rrk7DotC4CVs2pPHzzjtGfsZtLkij",
  "key3": "uvJ2qi8a7feSp3n63QPnV8kNamjhiFevZCcTCXzidQ9qTjtfCexfG1XZgyTBeoDatph4cKEcsebGtzRcArRsNgr",
  "key4": "4daPLZCPp3NQYSciiVSWY3J7nr7sbBsLGjaZbsqKKRvRJATbpp9LW4xNy6QdHoYGSksr4iftyjHLarXu3nttTWxa",
  "key5": "338MYzGVzPq2hzFZc3ALc4FJLMUAAcLyMW6vdTBEKV5NtA7aSDQJGF4nQsbzErL3EWxFZEg2XRKWndQKysVf8yVo",
  "key6": "4MKvX2vGtFBpXuhJ7CMRM4zzmnAzMQtS6bXz8YYCkJB5xKZCrkKw16va24M9e9dQrLsGzu2zMmMoWeth31DhQ7PY",
  "key7": "4t119NfMSMjxzns2hdP81KWbDeMHgY2VFr79fwp3oy3TWvHMCJPLiR2WNkYaUEsPA3SUU5KWKs5ERWDgU3baZzde",
  "key8": "5bBEwNKFLsK8EbNWkicstSszY145LzEfgJ85ao7tjW4KWaqA7XFkgtPZvPT6jFkXEg2nXg1vwo1y2VsfJTFYEMtf",
  "key9": "4SYUwbEaJRte6rozUHYYGHKafx1HhZSg6Q8SMWqCazKiL3rZyZdtQUMxAF2cJg8gffFX84nhhPQbrDBgWiRmNroW",
  "key10": "39HpZgyUqWuQGLJinZsJLK97anzBkLCcRYGHuq53rXQ4PfBdMV4MJaZfAjZVZGLcjYkZqRE27d4kL5E6JxQjWPnz",
  "key11": "vzD3YDAHvWPUerW5SUGCdVbEpdDQboxw26NqbpjW3R29neS5M6er3bmguRYp3R8kJuXTzs2ukPYkevg4hTDpA1M",
  "key12": "5agH9vXtcE97uCTc3ufn5VDmo5eVVpu3xQq9ikziWVwJM6ADnsuJXCWMxVVGY3YboJxLJig9HpSar14u47LkUrc5",
  "key13": "3Q18KhoigvJvEKz8ZSPr54qTLnSiMW7kGEdvYHpmAko3h9khTf9JfCAWyGFhFqsLAkV8E47gWhPV3aBuLwUVyxVF",
  "key14": "fiDJSXRDLnj9YnrBPRj7Jy7pmM8jN8xPVGiNbar8ATczaNWGtA43hxZqUZqYjerJPU5qmoeD8rsoDnTT91BHaPT",
  "key15": "5TxVcHiuiw6WVrtT4LPJQbLEK5aS6oCNgsRjaD7am3VtdR3t8ojDVKq3CqN9EAVLgdaCHbA3Be7Cu5fzarGiC5v6",
  "key16": "2woMThmx4zKun2ANra16RjZ9WN1sbVGpk7zeqtX7VJmpdt2Fim8H8iuy2ZbxJvCQDmFRewfnhcif1K556yWEzZQM",
  "key17": "39tKNoE5hmeDBsT4LGrcWGb56MYLY69yMf9ArRAkKc2pxM4cDk7jZmfmw43uChQ989GxLf6ZjH8U39Fz1eoYAGA",
  "key18": "44R3RWAxMoaQSKXkWNjXcUQ1mWeFVBi1ywstUrJhVrf8iqPf2qboUXcdsidgnjVqEDo3sAfiUPYvDHZpdpYCb1h",
  "key19": "4MuGNrN7Pq2YEQSzRzsrP1iNwTowYCKtx2875PVzMXHh2nhCvBFobqbtVmWokwMB9vEdtMfg7s73Tx5Nz7aeVHTt",
  "key20": "3XzFWHEBYc6SVskP4e8vVhJ5WFvQUxahWUPhLgU65oWM3Mdn1WJU9SrCCJr82Ci72KqsUk2HWYjMumFsFMrLXTn4",
  "key21": "5qtfviyXrVKxwd1N2pq8mw37RaLRYfXTgKWuSMEYvmHe7zEiA9kYyt2y7K7UTqw4v94FuZHLArX9b3jh6i8iLCfX",
  "key22": "3sw83Q1ETmAX3CBbKQYmV8YfBnP6BdMN7hGRUktxuBmFYv8kXD3qHujEQYZvJokCe6K2wmREAzCaP3bcCFN68oEv",
  "key23": "3M4uQACiy15EDFrWg3VtgE6gesUe8rHJdrXJSP1RLZx3fChdJD8am8u7CMeEtBDQBQrjGP51Koxs7r676Mj5xmKN",
  "key24": "yutnrAkN2FjqKYANLdWzopmVpk7yMQfRHnZhKK3dnZMHVVdLfuKVtYQtb5GBZ5SQVfDkCtNkev7z5aXtrFppem5",
  "key25": "5GK4nQ6CZPBQzaXYrKWzFtTxEW9Fb22d18cQTjv37vdmaZk9ioDkffGPAxbrK46NoZDdSp7RHkc2F5Unm6ES1o1s",
  "key26": "44NMBsnqUkX1A67dx5E96k6Yzt9w1EhemQDY3DhcAPSowLLhqLXwqfVFCe9t3p6nG9pmo4B9cR4VtoNdmK4462GY",
  "key27": "2kQ5KRUXocG8MnvjNGetwKxFDzmPFPaqMgWrPh5EQ5CqJHzv5nPr2hu5LhFyahvUV2VwXYDV61qMp8RTXtLc28Lh",
  "key28": "4FKgpoZjNn9VfLWB6vCV1m2wFjRHQqN9EFDvBBsWfDNQKgfy5WJGmHSeXVi8Mh3gGnytL2dKapTsmAd6hAFBknTn",
  "key29": "2YWwddW5qCb5HkUUpn88EBkLRa75MWWPG19kG7cuw4wonnNXNDwepFKmSM6bybTf2q2ZBv8q1wwi8wAn9E1vwYjB",
  "key30": "2c8Ujpdym6RoaED3PErFwiSentpYhfUG7MndmE3oVAQyFS5TLU27EkgFwmc51nBNd8iHkYM2r6B2ZvNMQhnC9j1C",
  "key31": "4uZfnsNpfao38J6vDtxJSbsckGEmzGMGu9PmYaccKmA15yFp6WSFNvXW1Gm551wxitmc5i7Ci2bqCZ1Kv6iPmge8",
  "key32": "5Jex7r7vo2bG4mPbWf2tAQ73vhKjfd6NtjYmhNsXGTFtyiqRh5D776BdCuZhaC116Y8R1x4KZ6F55h2xHvMPBLj4",
  "key33": "4he4gRNYA7wrAPvPCFAkkb6VeiL4wqYmYXgnwuAEoxtgMXaHhTHKf94FdXnXrYSvjUg6RpdhDomqkeAZrZ8jkhz7",
  "key34": "2M6wMkAxWowWSLxCkpHZDfXuQQiuDkx57EU1aUUMBmiWLJ2jAuU1FENJoAqhufgzskY1HDofrA9j6Y8MH9brUeJ5",
  "key35": "5fcsjqyJbZc2kfKEGNsAb4Zyc2RcN8UiCYMMN9aUjgFkCnKpU4JnFC9P6MGi8CmnsYSPqPsqohr2fYjjyxu8gq9d",
  "key36": "4JhjFUubwHooRwjkyUZnNop6ZqVyBvqZof8revhYoL9nrkD9Zprh5VxkQJL5rbXWKuH6yiGmYKfyFnY6Qt2yeJxP",
  "key37": "qkQLsBoVhhmJvvqcZDfK2JSjyS6bgqong4Wmp8z6pJKHEW9iU5pvYHcckZ62XhfsTQamKtaZHAeU1KqzQiHaLxH",
  "key38": "5SpbTG5CSTrf7z2wNsnTD3Ud32SPvLrfBo9pScbVqaLMjSktaqmefX1SfK4Rr6tFkGRjt3ZaHqnEstRBsFvWkSow",
  "key39": "4RVpb2EZ7aufvrWxN4mYHvFZqmTLn7b3T8b5aFod6RQNTLjgXdTmFKCrQqkn9RaM7KXykHtktY5wzjZZm1MuPNT5",
  "key40": "pdETqmfB3H3P3tch5h3DoDwReDoyQ6rvLsRL1RZ2xXL2Nc1rCW4PksKA2RxBB7rULWGQPMLPH7St7aQtXVPajxC",
  "key41": "4cSpGBvx46HdA5H95w8qbWscACkvKtbPMmiMsoimHyJyfWpfyqyfwXUKuD2a35b6eZ5QhUh63H4E1yY2Cnscm5c5",
  "key42": "358u9iPEAy1gQFPhkrd2y3scj41jxmeiggfo8M6XZj1eMZ1htwQ8UZNeiFfRzndhYGuX6yrFDh4ahuTfEK2uSr75",
  "key43": "4JDRM3ZAUqizTty3FWr6MpPnVusSpTL8SzTKgYUdHNHp2NdcHbY53aMcUTN8DgvNmDAJfv6g6ainocm9nmBmVmzi",
  "key44": "4hKiehhXiWmkxaMxBi263gr2bHp4zV4h1vNT8TmhtJE8o95aupu1FzgVo61omU2g2mnftPWELfiHotRfrWtGR3bX"
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
