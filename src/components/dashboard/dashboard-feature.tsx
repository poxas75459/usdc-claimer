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
    "2i7xN5hpRUPYZ1BrQWpcX6xqeMdxwmsErM4C43i5Qf3JUJwB7bxYER3yZJqMcC1Th4uA2Dq9kojE3bjuDRNGPRqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YixkTEmVRztVaYg2DEuGcDGviHSXnCh3rgPS7mMGGpzZF4gpX6Zc4tcBBXoPrUemSBi2pcW3kTvWMkNAGVv66iW",
  "key1": "2su3nuYwVsPiUpfNLAfrjNZxJMiPB45HjkZMywEvCNuKvhpyNwDE9gqAdTpZquAx18Y6dGJ1t8ne23HRjncJekL3",
  "key2": "v4XiFXzfqtxtHmAxYcqhTfnjiUjqwzHEiMv2RX2rWkxP7xDRrRqrYVb8wmE3Vk4QQrfmZcytiUhFPMwvmtw4zYM",
  "key3": "4QnLDxk6sqLtL31AsqcnYcdVzddp7YfEFLSFDQ3F4BPrKTHkXeyH6sWUfcMqSD3af9F9BLe3ry8CWp6r5h3c1UVa",
  "key4": "2xBXS2tHFdZRvBeK7PfcmUPqxKBfwmJ2Yg5p1bsp7Z4uR86jQzKxdKPj77aiAH811jt16EjBtyeNCzNBEPFzX7Kv",
  "key5": "uSKPnwApVjhzMojwov8UYcVK6Cbbc1ZduYTP45SMcTvPnVhAMJ1tZVFgods5XNBRTYRWCVaoviianjnN8VHhscu",
  "key6": "4S3u9VjpJGDWXvQfWrpx5gfLD9ot46UkJrVijLefAz1HKnVcArAVu8rBfW17MLSwDh2vweamqGhrLufrVhGzgnm3",
  "key7": "3UhkDA8ZjsE57aN1ni3ByxV2bRrhfF3w5WgxyXZqHNiPATUy23QV2Kw3T7ZqMzCBtUTFpK9tNRTaZ7NaFjpDR33o",
  "key8": "2H8UQeeoKAu3ZtMvJHoAfiiuqNuwRhANccHifEye74JdNg4J5zzYKrpKyWZR1T6MkGtm4DuDgdW3iAFAkboNMmdG",
  "key9": "ppqkHRrcM4t52AitocQnY8skaRVGyMBUHMuEEuQpEnWYnheF2yn2KZLi6fHu4xMM88LXbqV6bVj3Br818swvxRK",
  "key10": "v7p6amwVvtb8DL1YVq2kqX83b1yp3KHyfgbK69nWmraqjQxe9hFXsHMJ45TMyCb4m6PJHeVgGut3J3LzLeScHLr",
  "key11": "WhoWvbP4BHix2u5z3hhrLoFwDK4NgjHqUEZVknfa6RjfZMFaB2B3J54WuhSs1gBrE1BhiPKFiwMqs15aBXHs3KE",
  "key12": "4J7SefjrVhKLbk79NJfEnimi1X62ArfevMjBDghzG9MPZdMni6gDpiGHnks8hQBwYg3cmscagspWyC3mrPGsd4dY",
  "key13": "2ziv1G8fSMwFfdQpNsyLX3p5j384e7daHNmGEhF7QUeaCVZmpBVEEvTW67fdbQxTHyPGt9yBhoDoLD8k9Prry2rw",
  "key14": "23FRfu85uVgKEckTCdb8arq6yPK7u75rW4GJSebGgNqJyq5vKjsxCdQkfDUkD7CmM7XBBYB2DEwJNtogXJrwky5X",
  "key15": "4zRrfUVSKNUEd9jgXaLpZZjSa217qUjx6kinizoSSqBLJJbxDTF1cWf2xQ7S1xsDYT23cHB5oVDzARgW5qBBU8jF",
  "key16": "54si9eZwMBCH3bU4zscm8ZMakz6oAM6H7bPRsFY9SQnzB3mbcEd34kv46ciotq4Kh841XcqZp7nNgDvZE3EHQMVK",
  "key17": "4Ne9KhnFsuC6xs56LVWwYyDVcQmCQn5ybsCQ6NzGXrQ1tvAdkBdQ48i7hfZZdqsp4oBBCzYb2N3KkJoPoBU7ZGGN",
  "key18": "3V2JPsSuJPmZrL8NPUpDwjpAqYr9eQcoXC9ozAc2nNau6Y1RdyprXKfWFrUYnQMZ3bUXtq3P6uztNJtAm5dsdFAT",
  "key19": "FErdoEukFE6x4CW7VdFCw4DmDZRJtqkgjgaR6TSzAr6PShwx15dtS54UDqRR8BP1wzJhsySqey7jJ8UkNRHpiws",
  "key20": "3B9QqQyqT42G7H476dFkPe6HEdYMtPuY4JiBBzVNNSYfien68Vwi9EGrCE6Md1U4UWJFepTwf2TUeiLd4FjT216A",
  "key21": "aedperdUboubT5cGva66yxWYLsURbZQ9EH7RJJhhkPbFeXRbhQdgNBrrz5Lo6BCi8wjsSF5vjGPKJj6xPsA3vsi",
  "key22": "3aiAyDG86nt6Y1Qen5uxe5PMfWRHFrE8Vak53ASamzmpJRJpgEUdff5HE9LFu6Kxxn3QrpZYtzPsc2KG8BkdXHH2",
  "key23": "3kwdidEJgXrxt1nL3DpUnomBKHg2oJfi9azkbbvdaeUpTSef8gKiZoSbJ7W2B7MLrifsDZakSRpPo9kQaFkpk9y4",
  "key24": "4RYuC5emEqv5px1gxSeUXYUS2GQ9myUs9kN7YWSGi8jWcLEAPVu41yD8t2azXoWwW9LhJVxvtSchEQbYjiWXyKAJ",
  "key25": "4FEhEjLrYaNWJ973kxUBG3HuBuDL83wUDXSgBt2npic9VCjArcriUxzAyzPfyavLFnt5ae5vf9dje1hQafy2WANv",
  "key26": "4ux45pjfRekbbHERpZSJtGeJkkesWsPa2eG7QEmf1Jdgirahfpp23QbEmEJh8U2Af8geBhGsLDW7SoiFamnHivD3",
  "key27": "9N5REoEZFBZXqRyt92K739t7YyPQbqRiSwVkot3VX7WmzUyy4tZyEJx48fLRECVdcitJk4DBXy92Rzg6GNyZ1mv",
  "key28": "2FiUpJfa3U9KDegbz4o3uMCwfshVNW1N3BtueyVugXXRFbG7tnEKCcvUsxJs3aSvHkZuaZWscPRS4GazbzJ8BJJu",
  "key29": "4KGoTRyVn8wgtScwVNtf25HykZJLsCXJtq2XarN68BcHMKCawMtqsF8McrTwUVBvJexe6xx1pZh8Jhwac37jMJrv",
  "key30": "EF6coMoPUL96Z4ns7fqomSj4PicuVnSHL8qvbrSBM8wXQFHTa15qRVDPHXPoBQW8D1rn1UHKLtqaU8QC3JYwYQt",
  "key31": "544UGAkgRVrokeNt8ocmtqgX8kso2gwkRmnJCyb5vHgArKitUPLYLubsLbCK2RgKMGyyvBi3JyF2vT8wWxJYaSFL",
  "key32": "3k4HJxhukQ8fHsiPnH8yias7zwMhL3aH8DU51eHFXwUwtzV6tErsh56aXXJ3D427txWP4exKkUsoWnZmjysFjDYP",
  "key33": "z5CtACCLBeHXqwQEvz8RU6pxLa7tn1WwsDFUUvKLg7SobfzsEiH22u73vKFLw3imkrH2BAy1NF3DKqDoqMMFpAM",
  "key34": "4EQQVTkxMzmD4gcWqixaZE6xyB3XRgBskb3kJ8CBNnfHA62LPt1TPWeK6VJsrW4d5zUdXJGJQWAQVtX2ZD659vi3",
  "key35": "357GY57oYvuVv6h6QoZHVtQDb5r7u1SPwj6YSRLfecf93RUZpNgxpSe77mBiweUeYWiXziN6bKG4CV2kusHejxKB",
  "key36": "3rEUjjdBb4YnTiFmwuRFHpi1myGSzkVvtY4SRXooKo1MZzHRjsTnQTXpqsHgNSL59nycYRPRBST9cuqvXrv1L3Qy",
  "key37": "41vhKMWgN7zZFA6Bw4oGWPYX32cwAPM4RVd5ujUMf3mp6siU2Ddq7qLsFpGGPDPpFihPF9vTLnM1WG7N8y8M2iU4",
  "key38": "23crZi8Moqmpc8dvD6N43ZxcGJiy9iYGKcPBFnPcNKp4JEWwBKh8vHHQqzqF6o2E4yEvDdmqYPpDxnnbCs9BEuon",
  "key39": "5UxnUq8u1zLksvm1LH4VjskfTzz2EpsMoaE1RixCVWMeHrRW6BqCD5ChniN1eJsgCrkusLtDGCLkMUuznKmxBSjF",
  "key40": "352yA9BJWR9z6JMzLJ863PqMLfENNLphWsAz5Njp9VseMms1vLZmqPsmkBtw6YM9iCEJeZLXEvWUVke78jGVCtMu",
  "key41": "2EKGLZkUzNctNLYfKwxzM6rb1G6R5AXz1P9xiAMcv9SnJTfBaTJqMtyJa6JQj4RXHpvwDr8qQFmetdS3uiceS7bz",
  "key42": "3o3sLjYGQKMNzpQkhzskRXzbGB2cKsHUGUnpGWo5vhAmajh8rPVvFSrkgSkKaZ7Z6S9dhoCYPj7KKx3qMWGh4urL"
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
