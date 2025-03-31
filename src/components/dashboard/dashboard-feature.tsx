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
    "3PsFYDUsueWCidb5dHngXUBJEHJjn6ffSPPpcjAExPJ5fhzSAjJfXYF3Y2Jp9c6jqtgvkN4B18JX4b2uGX9soQZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WhY4EfdbaT6sg8H1rdQwciW9QS7Nho9W1bv6KVngLotCVySrPMNXsxkGXzTGx9vGq695cCWe9tUnk21cYqBTR1w",
  "key1": "2nkPu57LauUY1DRTwLvsWPk9kk8cvJtLecuH5Fu1GeHcz2pbmGbGLg2y9AfdcufgbsR8jAQnTTe2VNdHR2Gcrin9",
  "key2": "3zRNTRRJz83Yc4EHMXwPcyvUjNuGwJLYcLbTmBPfYqcQHbBqoC6mR8yybkLr4wtwEu5n3Y9s4GFuYLFHAByEMj1V",
  "key3": "2ig1B3iJnLoALuJ6XzwkWN897DKUYXQMii9HpwCRLboxRZhCJjVG6NkUdkYjzuEj3mqb3enVjq5cmYxCDZAb18L6",
  "key4": "X5uEnjQ8t7KwG1AyWBK4s4c9H1tRBV68wwB3Y5XY1djYx6oTFg9AVEQyW2m9o4pUZLHYd3d4uvx749VzXTSpqDb",
  "key5": "3xJENqKesWWB2bMbUx6Eq9GYKEVuPeHvMZMGMvdb2Umye9S9VXkjkrYYrRBZdBGKDbqV5wHcXye921DBW2zQ5HET",
  "key6": "jjkTgXLVyXHrRsfbY3MEmHh3V41dZ7yD33dWa6Kc31eioj7gUV5k7PZuXsAxoZwhLbfz5dYGUpenq96u9qDAXEB",
  "key7": "3QUUvXGQHabvfecQWpwiEJvXmHsmZSnxJnma8ZsrdYMsKyQVmDrBfyENFDP5qFkDnEaLQvkksjWJhgQYmdmSJCmK",
  "key8": "4iVL91peXHfF2hucufFw9sWknkR3imqP1PtfSzAxPdnZjBxEeQr9SNwZeQ4FvtHHxH5G938nNJkq5oFinkw9TgtU",
  "key9": "3igQnYEsT4m1jWz4JL1ZukZwctWU3uGDb5oj1EDmL9PpK3sEMsD1X9YAfu7dojJ6q6ic8gZt3W23nNpsz1GjBTbk",
  "key10": "3TnqtPdx2GPCp7m2p9YYBDbVtnRTzzNYF8LJzKWJVfex5vNkUw5ik5EAJjbgXemVGSenfKcCmo5q3RgqtPNiPV6P",
  "key11": "577JpLiY3sDoT5yoreexKDGD1cPD3XUAAskWSoY3x1XdkF9Uy1N1ECnyqcCaYfsSyZK5Vnq2WwgrDkNCfAnPkkk8",
  "key12": "64hgUZxnHPggyyCCzv16WVLsifYo8mJd8ssyFrq9X1eY9qouXLFcdXAALabBRwhedYy9MmvHAmKLHp548yZYQSLf",
  "key13": "YYbToPK43AnoeSUhJyFUxG7e3kheBuq4qdm6vnvYs5juBig9Hnb7N31TDt5PtrDsC3SFT5QyCbqHAA5F9iXbPgJ",
  "key14": "4FvA6opTFhAb4xJiNu8XZNYXUpoRsiQDBTMFS7cuLN48vj3TW3cvnf4NfXbK5kWjPWP9gNNaiS9yUwYD3tQX8vi3",
  "key15": "2JZa9Kesc36ss84kq2TGeKV66zoFU2mrXyrSH1cVLC59J4z5j4PY9iptcv54uw4DJLngVnbXgtiGisBYv8dHfmGd",
  "key16": "4UBdyhdtbyZ9PHU6hqTuTNg587xguhf2ut7mbT5Qsv1Pq5hk6aquarVVNGoggVFerd4kSHopzrfFco2YUjP6AL91",
  "key17": "5q8EBpcbQsAMPPdVCs9W9Wh1LSVrSRNPbD2YYywMNNSFkNiykWsy3KAkxPBA1b88Sf3PP8gq9cnF4LjAKqoMbf1y",
  "key18": "3tZpqjXNz9BJKssZNKHcJP38Bo1ksXifwS5SGNPqxNiYatj99TGdF3Pc6kDYBmX3ekFRF6AZgjxn7CuV6NYj682n",
  "key19": "4zrFRjWuLKebZ1nAAXVAsquCNCc7ZucRBgcGJ7PWdjVTSu1cNGCYCX85znLq61eWDRg9rnEtsaPRCv9yEVhYU3w1",
  "key20": "3PXtbpXJHfxsa4cGFAprsNqzENxaYERNne2nDVCuS5R2KgdmHkH71VLFjCCdHahhGAPzGqQEFsHPvA37eDzowCc3",
  "key21": "65HrrBmxRtq839NaeiULFCpjXh45BNTp9BLSe3ghx63De5kc1B3uUV5yN8piUYA6W63vb7xFmG82ZvK7o6hGVHDb",
  "key22": "gb61mf3pwKGmQmTTZk37qCcLizyAcYtnRbNnPkwuC5WG7DcHkcV6PT5mFy5ch51vbhRqa7Sx5hfCz1eKJ28EBvx",
  "key23": "py9R33qwqtsdXVFoSUVj4KMiUq4awyD624apJMNmqLCUshTca3c9iyHGrwiW5qsJKVGtBCTfKc5sLkJ8LghmFxn",
  "key24": "4CjZS1Nh7Rh37n59azijpvaTMWfW9ZdHshJZKrRkMGnmAc8A8kY5YkHeGHRo1R5HW6PDQBhxTwC2MYf2r12v57FP",
  "key25": "3KZdcdyQtxEjCEExPn2uwYQSRhQ7Gpc71tvF8tGbCvRukRT9CQX7gqok5LbX6ksmYWWSmFWKYncpZjbbcbdkiRPq",
  "key26": "2aBxZFDULmiQ8BicJ4uqDceENq2MrGJyMHYxwu3sXLiZnGZFqTGJBFb6wQxfrf4WzjqBP6Cvc5B4KCvpTC1qragW",
  "key27": "4TjytuESLSJBiieW1TGy9N2Fij1bPMfLv4BmJnU9P32ECLeYzBkAAtMBCvNn78sSjE5Sq7fjFDiQTBZJcnKYjcEE",
  "key28": "2619oNwV4xRf3gPVjvPwyDCYeY8YD6FkpSjpa8i4oTcyCwm6v4CJkntEW3W3wypEFZcXeP7RAfGtzTonZqYxdxs3",
  "key29": "3x8bXjkMWP4C6MKRDBJcmU6YgZX5fkdXdv7EjrVgxeMGMbzEVypCM2eqfzm6QxPL5SnsjKWQQyAPjdAoDHWWFhXF",
  "key30": "2SToUv7UGb6z6CptUEUw59tR7WZYW33PtijevLpLMdCTWwzc1r62JfisjdLiiUWvNdPyzSf8RqZL86GqCns711p9",
  "key31": "5ng9Jh4yFiRnrYCwvsFdytjm6RZohJSZCyVLDd4PAEopem6mbByxLNZH8uoiDodhwucJo8Fx1sogn6ccTeyt1VW4",
  "key32": "3Ji6UrpJeivpod22ZDddFKiYMdyzJhD3YjVUdVNxQgjYgEToYSJCP1hWDQqWFhN5vTYf2KuB39yWFvE8dRzLRQ2E",
  "key33": "35dwCSS1VPqgaNayVg8zrHijb1szYL2JB4Pb6K68k3xs6wdN7eGGXQ4tgBsZmT6zbxcvanfC3XPvcgt2tkuUm2LG",
  "key34": "324Wdzaiz1t5Y1nUuBTM38adALYf69VhJvukt4MkYFEsbJnx8W3qsQimwFFeqiMBD2Rrf21xDLdhJzaWe8khME9W",
  "key35": "2oMbFADDwQeJhUMXNXiUNAZPs1daWX4iAMaxX3Lp3fJYe2jkznQbf18myGftRqPcMaBVYaTqK2pG1bERveYhp6xD",
  "key36": "3Q9dWf2vpnhxSbTWRStpEJi83CfDM725Fb7pUmBVfrdJxmXx1i1AkGKEKiR6TH2fuSwaFmxHreeQTWTXp4vWKoHX",
  "key37": "2fjvQH9huEcE1cSEz5qhhaofziTbzbcrcm7sCjVBoCMt75AL9jeG13he1QewQGuGApEMYSMcscNRLuXRdhQSfCNA",
  "key38": "122mabadNg5hJ35vd7hsqnsGr5o17NPtXUJasphTTpog9Ndz44JovHEp6XsgscaJHCBh7gizXDgFLwMb1X9xLvhf",
  "key39": "4Frt2yec2MSSu6QR6oZfFrcmdibymxpPmZeELoKy8ZiqdmEM12Ds4UAVHBM9dSZx3Thih4yceTjp6kTGgsUs3VCP",
  "key40": "33Cwx3wx1zZtXNiJpwXGC4z8jA58Uw8zq2pxcmQWxfgzSKJ4iP86R7f6aoY4bJ2tcn1t8mrUZnHtnYy7a9Qtqcp6",
  "key41": "2gutN3b3vUdijY5CWwCKh8j8BrSwhpBpHnZFDomKBHdr9GJvN7E8Whd2JsNZ9fia8pPicMbGwP6MmgRcC1NAuFWv",
  "key42": "priK2oDZ3dEWSikrqpSKK4W4UCBAbL4vevNjaMkS5vEZnzdrDW49Q6TC8jwqE8zMqS48xP33eG4seR8MbQHMvPz",
  "key43": "nNEJsXFFmNBVJiGGavZ2mVNyupDyD3h8mg1ZKsQpLPuhqD5X6Tmh7zUEVUh9qY56rMcSnNFhGEmZzFzqjtPbuf3",
  "key44": "WQfoKTtWEHAhr9Q1PwnuKzqjceGmiP25ucVQ4T5iijYfT862z5XTVLGBwrfybMrJsTWSqrGSBRSbdJgBBnWrxam",
  "key45": "5WfPsSNYCqftpszpVU89XqEGnjdPqzsgPCb4j7UvhiqB3PujX8CGfiKR7QV58yXRtPbEG3qpCfBJbWWpwjRPyTGT",
  "key46": "4DHAatvBKJuh7o8bJRpnxM5jM8SRcLwFgyUVhd7S2FL6Q1k2h1CgYXTAvAbki37EALUygeWQJh8DPSjoTH8jaumr",
  "key47": "4mG6KmjPQjDmw7zMjB1xfcjjbUnpBgSFkHhFwRfTZWR6aNC74XYktkdteVesKoAF78aUHqwtTMch6owtUC32fQC2",
  "key48": "5JG8QnTpRekD6eWgeABvy1GbbMoq2nV6d5MUMLya2UviepJJi5z4yxagvn21MpHTsynFo9oKK48WjDDDfJEkj66N",
  "key49": "5DdnHHW9vJwqdmBjtsLvdkHJikDhDNS8zkAbkcEgr1c5mXCEiPgrvopU7oAipjvvuhSTJGhPw2UvS6avK6TcE3Su"
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
