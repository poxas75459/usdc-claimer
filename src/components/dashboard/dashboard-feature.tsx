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
    "2BhNKGU4JVnKHoeHonriQyJCZDXYbarNKUpoMwJgQ5vrK5cPK6RgbyuwzJ7ZLcG9XNy69rb9qqwSgWNopBRJiFmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x96iSNQRUTk1ZijXzLsYJeqpFNEAD9WB7vCXk4DKCdJ4ht8cz8USc67afQUYMVrDkGKC31zRMvNpjniz4ovjmNr",
  "key1": "4m3SYFXFxSR1ivyW7Z86gaXfYXqEAYUmFTHVCS1ewxZud7dUiWKc1LZv99Y8i65ToyQY41LSUmktkeV5e5HjrFCJ",
  "key2": "28imK4vTMtLYf6VivZZRY4zUE4Wy6fpkH3jmxJCxLQwUbiKVdbCeBuV9kKT6wXecZCFv1QiNsVuaPvCRkRkrmo5n",
  "key3": "5FbGceVGGqtimAEtwU3fMKJmG82oWWCX9GsEjKSyKUGvRWHm4RqHy6gmv73UzJySWA8s6NCHWeCBhfWUevqSFA9g",
  "key4": "3RihMjhEmWdgxzrQc1AGQCPeYzn7gLeM44AXWxh3DbrkgRLX7EMXH8Gz7HJ82aQDL84R9DC6DTYhXf4yxTff9bMZ",
  "key5": "1wgb9t9ai65VhUPTtxH7n1iYBCxiTRggB67M3yFG5LHXdvPQpC9Qs2fjZwBfeKrm4NKpcvUnugFdJ27BW5Dc9BF",
  "key6": "2UUxpAZmvLZaq4oCostPHmNzzt8Cg6Q5qUC9KEhVCdSd8KCejjZNW1tMBnyvN3aZzC5pqi8eV1VwBkSrv6HFXBw9",
  "key7": "3Bqj9qhofC28xuvVbMN1fE18J15wft3srhJha4bXgJZBi57cRx59LNK6MuL8yr8qUzrYDQKshR4uvJDn75F9VoVS",
  "key8": "43k7BLr9jqndHkvfpzAnQw6LLfqv8hKVjzJLk5btKZ4C1Rf2tYSKy63sKLRCuhRa14uS2P5vRPh59ejJTYynYWin",
  "key9": "45PNnBgVb9jH6iStUpKeL3De3ruzPxUFZt7Yv7Cj1cwGJjfHLpVU8x7EgSHiXqJFmDq3Vs1SZkZ6ZqzSJGdEQTMz",
  "key10": "2PzaU5Vh3dniqftz61VUnZutcjheG13xY8TiBPEzwrCWJiDySeJxDC8MLpnaTNE91Fy48JssTAA9RwNzWQegCeT8",
  "key11": "3M7jZ6EuwnyyXZx8jS6uzi8exjk9AmzTMnca4kVuEKEg3mhFGhCsUeAeVDNo6s1tmFy1f1CSdTX3aDXBMsU7DTYx",
  "key12": "TATX4exioj1qhino5HUttDfMnwkLzHvbn85KjuHiHQuryVL4NjkUR47466RM71L2ejbaw4Gc6Pu2ardLGpGxJKz",
  "key13": "5UKm1H5FLmT8x2JXfmgzpWd3t1FjDsNdWtwyrGaxfDapKwmcqcUH8kuL7VQKVJmdMLLpYTz1eESE3vF4kc8FV199",
  "key14": "4CLdgG1obprF2KtFZ5naS9kiPzgAkNXJvfJorwbAsCtdPTJXRqN5wZM7trkw63BozeCzmf7eoQdETempuxbZSf17",
  "key15": "CjcCPjQZQ11BHKWRRQQSPNGCwVJpdJ8qBF8wCEhycKz9hZjPeqAueKDEotioJp6GsxEThqJ6PQLTzjMh3zVhhty",
  "key16": "QRL8rvXU8QjdQyb96n6YK33a7RgvtNhVYhBLrcrncAbdkk5c3U6N6TohkqxtoYwL8vTrYvuNXXmVPLg52gU3uDm",
  "key17": "2TzCYjemR1y18YBh1uNTTqdpo3SyzPmc6J3NNxsntqErg1HJt7CKx58zF9yCmyjYAS2SXFncEurxfEj3FFCBZbia",
  "key18": "39o78AqML8e9CedTE3e2qfMswREaXMD4Wq6WRTi4U7GAD815MTLQ22y7Qos6JkECFo4VVAcJYVJg12o2SDJnVvQX",
  "key19": "5SvEcX3o3ceJirbTjhSgSYnuBG4cZ3n49HuHqf8zV3bG7sbK13nnHTDqjTnaSbSoVYXxkGSz9mnSqD8NvwRKiar6",
  "key20": "4QnS2r1nZXtNVbLR5A2ZyoaxPVwcuYAqdvQYcVPUq4wuKWBz69EsAHrsBfV5h61dUYiTAxUC1F6Y5cGQajB8DwDP",
  "key21": "4GZ7G5sciGboXR2TAkJv9Nm1Ctm3cDAQYeLnxX4NGqiyvDJX7XN4LSnNTmgi8k2QhpnkQuBZHmve27VZS7EogZcu",
  "key22": "28UrGgi8gQqaCTkc5uzAfW7tXmEJho2Hm1oJNJnfA6r3meUw4WYhbiBTqzvPRnfUf1HY1MEWTGwhwpUUu8q3aMPL",
  "key23": "cAH5bBXXsvswqEZd2Uv9tS48o6Rfm9t1vwZiYyDxTbfypcQivTSDYSFkTu6mP4HeSec7cBuj3ZGGSBZRYU96DDz",
  "key24": "2KZ1XxfasoMEootuRne94eXBoaMgob53ijo8xPPVrWxx2J9bG53YMSWvuqi7VbMSd9fUBZWL1i7htdmZLaunLD47",
  "key25": "26sBbPa3eCdq9GL6dtkZmTwunZH1tFNv4CqRjjmUFzKv2spQ46KmZQZaVGRP1xyvHA9csgc83A7x6qRMhM8MXbpM",
  "key26": "3S5xvdmG32ToBRwxjR8UpbdCm1JYSAeicNQc3wrhMBt1fGtrN9LXRHg3VHMigrN7jBbEKrTrC3XAbswteKPLnjCR",
  "key27": "2GVzWhmebJDUycZKZk85t5AmXP3qhZE5S2rVn9mcEejmBmzjkAiiYtESbRsnTrZWM5RZ3adwF1vEmJCn5pqEgipM",
  "key28": "5128zJotEVFpjA5Y63NM7W2TScauEj98qvhs4TVthsYHsJZdTXgrZ5CE6xnK8VjV8kppedMTvxygMVqUaumLzCQ4",
  "key29": "4TanLQiPAvv8TVX5wh9c8QgwHSBwMJ289YVYzYtLFHuBzbcx8MomfCKk536v7nYTcMFHA6pmCgG7fbAND3JTtZjS",
  "key30": "2NZb2SvqtwuSPJXNgHRM3EBNe9c7iKqHVz64wfL19paP9GYJ7kD1RscV51ftq1h8EPKpceNTLnTDEzFwwjcrVmn5",
  "key31": "5JtfDpgLwubZ56o8bAw4VEmTdoNPeL9sAtguG1DnyA4G5Udq636keHGv8ms2byESDK1E9fWTEJQK82gPdHweMqq8",
  "key32": "yXrmFbAormZN6aHKsjioJu5JQ7MPoCKSJba1ksJiTDekME6HDmGvFiYAuCYELHctD5xXLkWRQ113C5Su9ommL42",
  "key33": "oZ9CNBvuQPixXFjuosECEcGLma7Ha4B15RrGVgiqj4GtDe8xu2cGvyxUsSrQW2DzsZd5uzAx5kK8tvfrXjdAscM",
  "key34": "5eDBX7i4daeT75qhFzuwjC5PW2fkbzzwLLNnyHEaLQGB17rjM1VihZmBwQhVUwZ1CBKCWn3hcHX8iTrQyPMnuZgU",
  "key35": "32pa7W1VQdZjF2NvDEAdBRtcLFfkxH7a5YG592u415NZTLheabJSbjvKBgH25ncuPtBwM6Uqg1k2F6Fm91mwL2Mt",
  "key36": "2dejbUk7iMenQZHjM7EomAdSzaAvD3wf9A6F5HBStEfYbgTr2yEfrKNSBNmhgD8tx7F4RxFEFmMewB22n1sVP4G",
  "key37": "2JFdYFx2hAnkwz9bb4FLQ8AiSQ94f3D5x2Q4RvdgshfDD7du1wnjvHW1dQqJVokBnA92UgxE1SgwuSFTW9gYVBVR",
  "key38": "2ZxPpnaP5UNmfrpjUwRkNxN1DztiBUYqYoFT6m9HwBgp3YUVm4kpb4UggD5sSga62ccK2JtKXPmkAatdbq3vVijC",
  "key39": "5k6PiynLB5nmEb5uud1ZxoEM7FiTGxThXhf8k5NnybXfRmv7LmrgTmRSg7NjK7hjeDWSxr5ga5DuhACPvAxi9xL6",
  "key40": "4EE5SQVM5vM6r4M6QAYU2eWtsngMokkYTo47RYxoZpSwkYQKcshd824kQTcWj9YLcTqu1pFXD2qtzfkMp2HczBh8"
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
