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
    "5Lze138Xhu6y6WHeJXhXpB9uuC1D3FQiZ5B7HNdJd23Ducbh5coZsFvTq5yc5ii38HUb1H7jGwhErwnHUy4aX2wN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iL3CRVF7VYxPMpYVdoaUMbw95sBFTDht3m7ZtntvetomDZRvyCxFi1Pm8UtRzjsHq52F8Vh5skYSHjFWNaNdtcF",
  "key1": "5sd1sLdTj1v9BiCcS1daS1HbHuTeehrrjQ82S5FhbQZZ5m2xE4ZsedDwcy2VYfYSxqKuUhURZgBuaqqM7f6FK5jk",
  "key2": "4s8jod1J7L3KEoaQygikvdCB3tZYPB7LXpyoRss4iKv2hGDv3qMAvD3V3B9CKdYXpvseQfwjNVb8yYgcRjobc1eV",
  "key3": "5gH1pjkgCr8jE4EqvRcXkEMri6gnf9AJDxnK92pf8dQWe6xZdTz9nMcpD9n32Wov6urED12u3G9fLhVFAEJBTFuJ",
  "key4": "2GZDxLa34bgRUDMsmAJR5HyZa5jqkwr3yVFv29b9jCG7EXyZzm7SLJwxNyydMCzAQTpGHVx27KCjLfU3GtmmJAm8",
  "key5": "vkUUyix8iaVqGMZXcoVQiVqNDDwQTYmCn9qF9VmntYNvvwmzAymPdjeeA3o1yn9tUhSytwt4kCzPcJ4hu6tTrHc",
  "key6": "32ZAM37Rpn6GPVcsCGewPGeS7ofVPNdrzwgjfXuR1Zuy7nHsmGTd17FcRbbsCmhqAjfAow8cXhybHwZgKB6bw97o",
  "key7": "5pzTB4fFoUkPTYDucLFR4Uv1FLBjTuLZpr3khQb7RmcEgj4vYM9suRSVH5AMcNLZNpR9pHeSygRyCxs9YUU755KL",
  "key8": "2G917EsKWB1ZxH4DXQCnLH7YQB6QVhppHghDmxBV7s8YMJgbmDyYq3cgsHVssdVHXhxVSG9uKkuCRGh8XWhZW8YC",
  "key9": "5EnkwfPocimjLLkVe3pJxrUeB71QbxdQfWpNxbTSYSf5KEp13cekVAamRLEHpLkaqJ65RAHZPrGcPCsmX6YSMnqr",
  "key10": "4roCJAxHZ4sRyRzN2xhoJdo2JkMcj8Fe9kBhWJGMkMseFkHr8PGpVtSDLW2hA8h5qGkzMxRGtLmWLLmT9h6mH5s9",
  "key11": "3Fjbkvfw3U9t6oGRJRMEw8L7bGzUJkCPdQgygZ8C58V2VczHJqGg1uFLHmCZUZZpYAJ3TsS4XT4NQNVUd8qY7keX",
  "key12": "2RZqGYYYfnWaPwzSVUCqn2Vp2XnLnmSssvJYLQskU3s6QVhK87bhgswjy9w6bAoLnR4YaAQv2KvzAH87QTyEGeU7",
  "key13": "5o4jp36z8437e48GCbCeoJDgPZUKAduGUeVGNXyDFcuVWH6k3U33ugfRS4b5Tw51WCEpJ9nSdHvxvV63rk86jYtD",
  "key14": "3FZzM3KcdmeSRbj1ETaARey5CRgKptspuM93AyyvVDweHoFmnqNCYEY81M8GUFqDyScnrEiiouhx9pA2rFQydJ4a",
  "key15": "2qMHdLdNBBL1u7yzAjoQbBHzbhUgD5RvP233aN8TTMLLuADsjZvK5JDHv42kUfDJFdDh13NMDaZxbxUt3FNKfH6j",
  "key16": "3y7BLA67US6VALDGeJFoRcTReDkXRUK3iGfCKQ1u6XrkbaeNWsFkpkaFw1PkBdtaetKDoENy33D8rQEcDpgH5osQ",
  "key17": "3e8dQhk15q6eRQq3KcShGqr5pf3UCGinUHDGXpxXSRxFY1ubGxLee5mZFd57g5sjGpSnXriGHFU2NpnG93BfVVHT",
  "key18": "4qZu62HB4xVDDvGLeJdBkHcKDutwFDyyaCkNxochuiETRnEzWTxnpqeifUVCqe5ubzameEJbTjYhYpGyim4v4FE2",
  "key19": "4mcfRKbM34JCVmAALwk9rikzN1jENx5YAE6tvvB53a39bySU1yBWyWZDnjqzCxXnwBmSmhzDCS1RUVJHhABoE1PA",
  "key20": "4DRQara2199R45H3j7hGBPtNY4UNxdutRix84R5BtaauQE7PMTru9NfvDMW31Lhm98RV8gVSD12NpANABWjyTyWm",
  "key21": "5A4rH4tRrRVRuu5ZMEX78P4rCRJjhGqLUo28MeM6crNXuhAErmYuRMLEFJHM6ERsxnisqjE8PcBQk1Gkdn3rHN7T",
  "key22": "2ahujTBH7XGU3jjwgEY7gtTnQCyCSbgp7mEDcBC446MaioAeW8vuRJ3pFuKFXw5xPHofWPeWVWtaQUNfn2hWnNUy",
  "key23": "2acg8NXqnh5cwFwoP2D4ZJJjPZ3Qt1B3VnsSZvhDdm4JUYNrzHpToXvxosELxpCMsGrresYYxGyWbN8jbSsZsLfD",
  "key24": "9BHVe7c1htSPUV7khcWGuT13mKPPobHykKEGEEv3dPW1Vj1b7NUY7iUkD5KL7d73ef27wp7BGz9wPu7YiVHbGZ3",
  "key25": "VeFq8mcjngiT877qPbbcB3nxAUZYCdrRj6Tn1FEnK6JcnFQs8FEeTkNm1xvXSnUZB5oUmmpRDy7crAo1rSFo6kB",
  "key26": "32WkYM7GiBdDCz6fNp5roUFvUK1PeRtUy4KpmAG1tvjp3baYnEWBm9WZTT5Q6FRH4WtQjz7ttRdSPhLMYZs8yZRK",
  "key27": "3oXe84H27YvBcThPt2GXmeTwsr3uiRYx3kfV4ZtbpEiNzFMWN7R93zm1VqkyH2LuCAjTMy1ynUDjBfBkpLLnTEkA",
  "key28": "5oMPH3f4FgbDLC4QvuH7dH5eZWHCmnSxmWrYYCXw4syMeEYFRZNZaP82fcrvWLmxgLSsLkQPtwqYecg9hUV1UKDi",
  "key29": "46fS9Jf3XAZd521dhvXrfR1NPWL6Sxwkq1hk7w67ANHwx4ZVWKhhaargQnc4cpEsg7AZhLq3EWqxy86B8BeEzuxE",
  "key30": "4vKzDm4FKEZ3Cm651WzkiH3UMmZ2M7JYCyLzG2vEHeifB2QbCtekigU4JiohLq55JBVC8UVTyR1UB9Wcz34FR2k8",
  "key31": "52XdrnZJ62rV98ohRCvt9bkwzsubdeakpz1wq1mdNLJyL26pF1QNrSfzFX1evC5Gbqy2ZHPy2pgQQQwduNJpX94J",
  "key32": "2z4i9w7UXFreJrCRQY1ZRKsJHKmHPagJuwjhD8GHjMh4tDkLu43AeEBkMXdTJAusmua2hiYjnix4YwqcqRh8QpFp",
  "key33": "5y4q3tU4w4wiBsVgdvR5YYn5ZHd4W5AfGPbjzVW8raitgU6qcqp1sqZrM9Sisn9idb5cqQgjfcwQPD6UJ58KAgne",
  "key34": "4fKhQZW1pxSqepfLRP1otLFY7SsikSy5SnTrH9QrF29ZM4abj48whVV6Rx3qZB5LEXM4ih5nuTyffYbSbj6inwtk",
  "key35": "8Xu51SkbytGmGyDaizcPWvjtexvtaUBdveMkPcc24gaEgWQSkj9KQPqnEvbmRUUhcoHpcFPzqf1xyEHGu4LZ6Mb",
  "key36": "jnvSFwreKfs3coWVCiDbDaYp16kveCm53DTCS6TYyd3cDTnParA4HpMnjXAwgsVfiMT92RgkBw6xzKyMVh3ZsGd",
  "key37": "3XcoGnQ9vHnWfWLH5mZYJFXKCnXuWNqMHP2xc76ZEg5DSVphLquUD1ZPpNjNX66mAsQUg1ePp1WGqwKzMWkiy8K6",
  "key38": "2ZJczTLnfaV61xjAiJWKLZd93Z8oCcCRTdu53wSPm435Csmf3Vpu3nYZZwF5yuDzUx6J16VqCCFDroF3tTFqEVuV",
  "key39": "4u6Hjcs6HgFPCRB63NiJpQdJ8UXhMiAEWXNBzgpBm8v5zuPamuS1BF2NeP22EFSLHv5RX3RiC6b7YebMuQLJyX35",
  "key40": "2mkKyseCD1Fk3AJMwsgfwrJ1yqD17gz5pRUBeAa47DecZ41wuTBUMpyBRHSUK1QEA48fd3L89rxSUAf9QoFuLECE"
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
