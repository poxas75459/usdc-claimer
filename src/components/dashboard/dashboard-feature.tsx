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
    "61YoToWKLaBGpFvWWNML8JsEiDnm7GTC9oeTM7VDpEQDPM43HT1AKmg2UghrgDW8gv8AigWNU7JBcMFQEa6wVqmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qAa6AbheapajnBdHFzAXXdbg4ZYpWPEhVThfAvsjLHzxmzvPdyDQzoErKRu85qeTa2dh5wBxDkKXtte9kuKfRgb",
  "key1": "528eEkLYuSBKAQFxgXuwUpfApe8dVhxoQG2YtnUyHe62tuU7A2fwhnMwuGJCoCgdQQqEgTANu9zgGQ7UBX62nAgm",
  "key2": "2xFcruGztUbPuUV7k7nB9LTceQBhDpHNuyKFwZK4VyJWctqgMTRvgcaNY5RD15bQc7eskoD6qCMBbo5KDEeAKyLT",
  "key3": "2SpQLLARynT9BVPrgjFYb7rt5NiMSNaYLud56Uasa9SwubgDouKYD7sfPjhzg7wqayzP3DtQnWRPHSzZqPMPhiWs",
  "key4": "rbwHrVnjFZ3QtHU4sYXFf9GCuDVkHmaR426pDyEJbZQ43EfbU2kpkVLdB64NxyDf3K1iXrug5dM2Vew3tNzTUQX",
  "key5": "5tgy6HZGZnKeFS6ysyVQY4d8DNy2ZV7DiYNUrLBpvZGBYBVirXGskJ22ThrNcjviTUyZ1nDj1bd1RmAGGTMnDgai",
  "key6": "2Zp6F6zNftTif83ZSSV5knSPebZw6cm6hWotAdF46Jomc12Wz5J52WW2TDedtFwRJWPw9JYTByre2mgiaLfKn4uc",
  "key7": "34j3aGFb6fqR98yzF3Dd7LGXgp3u5CrGMjVjB1VB2EWxbMa2cuvMcjs8N1zsenue51Xqm8n5eMR982eCHqzfyDxu",
  "key8": "2bqysnCK7Zv2iQ4pVCEfTQ5ZkHAzrF3E9A1NMQ1da9C136X3VQinhQZiGhSz4VxoxTcy8T1EdVPfQqNw5M1rQfz4",
  "key9": "3iTZ6r8H4wZNTx8oxe6gR5FR9nuJ6XpnQQt6nnLiTczEGySsEhi8pAz25eHqimqBG6KeAugiW8ciSeURTdzQH58P",
  "key10": "5mkrLUFfJWFcBNMMQScVuaNfH9TRM7pvSpxsGJKuY8icdKqjkrfpESftiVnfjx8Fwtgc43hkp2XzwMp6xQH5P9q",
  "key11": "zdkar9sPR4fHsEsxR5ZhNMkb1RKu8kFx8SgbktRjjqF3dbNdrrYNap3rsYKsruCZHgZK5i4B7UTYzesURuCHaAF",
  "key12": "4KoMJtsjwmE8KRVRxgwSQwkeMDkNEV149VqMNVSGZJasHmA5FPm4kmvUa8ZNumABvxcJpZHPxjWytUEagEKDpcq2",
  "key13": "5KiodRBEHRmxLxeYgti4VtQd4BZQWCbxqgVmNPz2qq4fRWLJiKnVuEnHxHarwMQQPYgNtsu1NrwnYt7YfL3aDNUj",
  "key14": "585qqJZnsQYQWRLbcVy2o4aKzqsmykc2bgML6rD4DWVzmHkExATMPx9M7yAcU8uUUntxsdYDCS9WwokJnadfVSj1",
  "key15": "3t3oiU18Pnqudfw4p1FpJQ2A5ykgULnvhaGjLP229Don51BT4oNZxL62zQNwmBkDWtGTodYUruqWFsZiwxRj7xNX",
  "key16": "3Qvx1MAi2JRZa6QhtpzZrDCpentCsxF2cU3Vu8D4yajcMsihsRp4n6bZh6Yr77dmKAy6bvK4WcdcLr2PhmViTx5f",
  "key17": "45JemwgvMX9G7723d5x3iDQzMHZthbpxKqe2hxMBuvztYf3uvbjiX5p9Kbk9iB96SCBLia1oxFrctTRavpUAekrF",
  "key18": "52J8JLzuu5pkzbAoEKXMVRbAkhhQR46APBbVUqiJhpzsKeb4DyMgRHUoxz2mspQovtMr6C1B7JZjfuqQEHiVwVVL",
  "key19": "33u2PfpcErdihqGs1ALTKdSCQjS22mKuxTsR9PQFLC7wY6VSUfor6xjxZEnHXpm1WQR3v4ui9rWNb1aiAfFQkTwS",
  "key20": "v7ahH5RqnK3ZwpVamrVP67FKDAyUAViz4GgndFawJo1JM8wspAY25BK9FAbCvrNkShLV2gKg1MCrLcRzEnt95Ld",
  "key21": "2H1zafjzTujYqhCjEz9Xhci3j6zRB9Vsx1gHrs5Pe1EQLc3YCB8WgTZn4YBexvmGGT67e7rzF7Fcd8JVZdQigg1P",
  "key22": "2BvfeLR1Wc5JoALfo2KFVt9NraRtXw6wDZuCzVzWAYGFSfV9iYfmhvL4qUY4GBoEZiCHh2jLrhqDPMbzG37qHi2h",
  "key23": "3pwUurqq7jrn16vxo9RowKBJ2ayY18QRzw6LWV3WqkHDY2z5uSAss6oDEDVsF4LqSUyoM9oM26TvM1UWKmGc9CkS",
  "key24": "3mjsZXeJGziKqC6mJh3YmSpSXgugRkrszQnZUJ8UJsoexVEMZ9aNU7SA8pxGHmA5CvFaz898nMoFpaoQMLST2zo3",
  "key25": "4g9ARCcU1sFGk7rp3nWaK6XZTtx34eLJRXoMx5zFQCvsWbs7C4R7CvyGkE5iwmLEwjuD3TMBaRpAg7R7Ar8zgwmz",
  "key26": "5kNVg1TsnCvqk2f9EibQNVZ2CnGsS6USuVW2JsbV6mj3mctPncrQD2Dxfc5FU7PRN4VTeCMy5UwCLWyvPUxL29Kj",
  "key27": "3TtvAAh9UBNvw6zcWPWSJDRaCmcH5uNb83BkJyv5baM8Ccd74PCSXSMWLRmSZSYBBPcWJk279Hxvqxt2AV2CYb43",
  "key28": "3xWcmCfqhYhfkakgzQ1FMReQFuhNieeb3BVLCPxUWFS2fnhoLc7zsSDVidGGrRBcRWFwVPzezJTBCgoZxRwF71zC",
  "key29": "4oqJVWPfeXQZbNfDdX7rmX7WMokXGbD9h1LJJPUvhgrJCLpRLWw2vSwTfVKufZQE11szQViNU1CytnL3odcv98h6",
  "key30": "5XLberqUzSDpM4BSUAyS1rLP42hLcM7jqc6KjApsrAuDtbQtVFCwhKgffWhowoWiYwWtqJqjQEKUk2R5pZSjRBrv",
  "key31": "2aSMqCDexrnkAvtVEQjoVsG6t2QhQVeJanSSMGjQAQHJrfMMoBZjkFbh9QmCKHSGscYFmFyco8RE5dYKFHftk1f1",
  "key32": "vivcSr4SrnRsN1WEydNUjAEpW2c5SNP87bYr7dmdxraYuNwKupnHw6nmuAKndFbkCoJx7AFaYExDHbGGW26HUYj",
  "key33": "ru1f5KHrmgcGi4zkENLLN9fYPUL8Mt3JVckneyDcJNewaEGGMRZGpMsKCzR6saVoGj4rGHGxQH4vjR1G1iHg8MR",
  "key34": "28sijKojNEH2E6irkjgFPJYjjE8nm5ZXXnKVfWvcgWqc9EZiSbzPUb4Z6CkKnPkUyJ2f8Xng2cBF8ZAovZupaaj8"
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
