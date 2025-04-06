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
    "CVJq957eXEMcfDv5ZLYnF4h1Ce72VXubCnB4mtxVmVk9mPVLdssPN6WkHCi2yfWtvGv1qvxw9KzqRohWX1UwMav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GfSHWBabh7k5oASeBh4KuumRXRupXw5DsvaGNginUu5wc9LTYBLqLU6tg6we7x7ip9UHvu4bhg9em1rMMV15Bi1",
  "key1": "39D2Ln1Wcn2gy5qimdycc8ANvfwDyEzhN497TUP7eqLQqsnAYCMhs2rbAW4WfquLd5ESXjY86tXFD6zyKgzYPJLZ",
  "key2": "5eVo1jZyiUr766fCgKcsyUvGATHz4eVJm8nFSAs2nPWqTCSNZLwYNRZeLBPRNCW4E3CHcZ5PRjHUg4ndwepYRRiu",
  "key3": "349TbdVmDM5oevjvY6rNgHi5oXMC3R38iFnA7vf4HyJa4zGwfhbcXYrVadECTgXioZsY6AUdvf2jdqQpxPTbzVHa",
  "key4": "sP7hzwTVDKi9C46n1qXgCVWk3zB3Fh2PAogRztvJF7kQJqQWqF8US53o6QmFmj9jc4MFygknbeZcfE6xHWKQ5Ku",
  "key5": "5rGCE2cwmMVLpzffkaWWKJKTZzFVFdwrB9d7u7ApEZhASvzfp45F1TPYy65PEoYu1LnTJevGP35MFdUhB4HYYAdQ",
  "key6": "4FjoWsAS5CDU8XtbGb5UeEpBugFjUdH58wko9PTeuGEEv1sKHY88x2zTRDPsN1kMS1SQ8gCxvNnr6y2vQQTNFzfk",
  "key7": "2i3iy2qtprmnUCqGfQUwQkNmr4Pg7pQ66tHoGehvUwKMRnmg8Ko1UZQWJf5PgAbFEbh8fRzxLuvij5hvm9gmKBZi",
  "key8": "56fAqiUtiQEePUgZtXvghF1eEkH9zVSkZm96ikrmoEUxNWGppkzmKNpeAVmmANwf6L5v3Z1dB3yBRNZbZmhr2aA4",
  "key9": "5T76sn3jfRGTRBnUtKvrc2RAV2jwcMwdX4t6GdNKiABsFZQudVeyd5yb718SfCzh6KY5gGAMjRuRavqEnKCreNMT",
  "key10": "VQySbNoKoeszwL79RewAhd1CW2wtmByF4zJWiTRinq7ngmeH2Bzy9XWm9VEW8h9q1qGTyNomJ9fr67Xx7wpnvpD",
  "key11": "4hjUo8zrbXqtLvDnNqkn68p2wgRr7fVXUnCutKweurM9pwe9yr9HEmKcVF7epcL17LQBTQfdSdvkt2Tn6Ta8us8k",
  "key12": "51TfSdqz8xgsKjD8Grcv64Lbp16RMXP4wPyqZ7JPmZVoWYuPnJkxEYCfzjbV4MunjAkpZXUCAVFYE4Zfr5aJmrzB",
  "key13": "5e8jz8r4Fcab3ctMunVA6Jx8PPHP5pTdCLrrGrxUSis2acFh6UBZyDDNvjTwMmwHZWsHAt5n3yxyCpwtnUkZprFz",
  "key14": "3VzXu2enxB5RVxja4zknsnegT6UPqYVGYbyFuhwfxKR2CynSDw8hMWVkHoHfw6bv8pm4jy3kVst4o93fNXzaB4hK",
  "key15": "4SKfvdFvAQWdkG4Mc1bhksTMgDBSBQwKzCXxQ1nq75s6GWtCMrUK7zd9v1esmjHAeHu1rHvjTyjQR3RvQ5eAeAqU",
  "key16": "5WjrBR22TvmeXQXRv3wv1Euc8PiadUqi8p6eG9ZGhfk2s3GgCD5pGEqs79ctcinNVopq5kGamEg8M5rsySBeH2df",
  "key17": "31r5bm5y33mknbHkrpRfRsCGoXkJ7U3nZX3hGe1hTSje52weCDXrLC77jpLD8otntEfH45ntv8HHGpKrH7b5Zz5S",
  "key18": "4mAkyhBFo677J7xHkqNANXhS2TNjziELrRYS5a9g5iXvifg7MpfUmu4f17BciEusPwYm5bXE73nnxnDf5Le8skRF",
  "key19": "31KZh9xv2zGCDKsX75f64oNfcybYiXEztcaJswBtjWRTVtQyQjTBPUfrKbDEg2Jvmsbd7EeBk7DB7K6EYTo6qD7a",
  "key20": "3eYEQqZTU3Gmfhb45MRZjmdW6poqP9rdVQucAjJxFuC2Zb7yVGxmuoKGYenseQ6aRf2h5SybxTeovZQdrHRyiAhh",
  "key21": "33Vg1THKew1GTBKRGZDiiYXEHGyGgNpwzknbMCaRpVCrz5KHX13Ts1mTUqqVHnQ3he6FrRKuKvKSMxBqEsAeBu7N",
  "key22": "3qv77yNkEbBmhBamFJACMHfuzZpMxK3F8TU72JaxJrHZY9Av6xuEBoKMFWfGhiQ5zfF1F4jLsS5GiaZzm1oWb2Sv",
  "key23": "5w2LGbZvS2hXqGFDx8EX7VTZ3DVmxEjTAkq5fvd4RTEYYhGsb1X7rVDXMZcaNHb4XGavB8t7Lr8JvDSKoJBcXd7Z",
  "key24": "cdQZhrFsBKL6EAwXNfaNtZB1HDUWKznP8jftw5erYV4dHQzTG9ZvUkBpkCHrp2CB583YGhfWbVTu9fkNfZoVheg",
  "key25": "4MjHjcr2RScxu5pTaVQCS9twVNGtwm3KqEfyPiWN9hChYBFEY8NySxqyBVx7KhebHoVEbHd2a25xVvWqqqUaazjU",
  "key26": "4ker62aPrkNXuCHrjhrCUUE3pzFRnKJuB29Db1seL6WjU8EzaCqECoWiuAbEfHj2dSpVeRojZNkW7tK8aqsNF4qw",
  "key27": "3rqwWyTVoQMZyThe1R512tKZateauDaKwoS2Q3UTw3RbUySNYszHy3K5GrtKcssEHNZL8jrXPCYccCbzJAEeg1At",
  "key28": "1G3JSXapKruQpqjTzhFNjuB9rypUTRpT2FKFYFuRWoVea2Us5dJyqxfe8z1iz4R3UjYKteYFT5m6WM2HDWtkhfC",
  "key29": "3R8amb2eKHqdyecdr2KJwxPAqMuGmfnXRYwYkfugbt4FAawwjo4NYYDpQCqoynxaoNssGwhsCL9iDktLpEqCCgY3",
  "key30": "5fVu2BRy147S1S86FUnYiWuYcw6JGG5EHasxTkpdZeUrfUDV8hibix1awQHBfR8pGy6Js36EbaDYDrDWPdXnfGaB",
  "key31": "3aAx8jaPKFoTJrbnfdxzajj4938mf4VsCCq5chLh8WMjfKyK2C8TeiJK6SPrd5SefRbWdwWYtGzG5Y1EeqZgMU4L",
  "key32": "4ZcwUbZc1D23e1JhGrotxfjrP6tNciyBdiRb5m22XB4sUTZQgus4vNn6g7MwcHUsbETiQ1mhvAsUKFuWNcq2ZKHh",
  "key33": "5Q7jEQwVijQLQNvKzFViNZtF1kbZ8vuzwi5NTr58fKnVfe5UbrPi2Z8hpGhWG7wbV9jwjciw1x29pLmpDtbu73iU",
  "key34": "4jnM2f3gmamuUovfwfUp4L8oxxUuksjaur6H3DZpb43NkEgexv18bLzm3q4YpnHQvZJMbm1fju2ysZA2Q9SLrpCd",
  "key35": "4H8UYgajoWFmsE89RXP7SYJSji39XG88tAuP2wTJEqnmYmrJtGMFooXtW9mDidHJi8Pzjy1tStrKAzWr1wVAgdkR",
  "key36": "idWJopjDXducC5irDSXkaZ9kH1Xmi1cuTR3D7CTpqfnDmSUQoBXEWwjPRZ4W6hYeSwmzNypzPDVU4kbAwdP1k8R",
  "key37": "5VTTgFyFm1wvh9gkBXnJmUtU7oQS2YZEc7SteLph2D2Jdw9SrkmaUbyJ748TNMXTE6EhrPFm637L83hPCV7vZ8ZB",
  "key38": "2xkrS6CL6G9PuekztDa21jqkkavmUi7ZrB2YK1q777BveHWXZ1GKZNe6F3XFA3fjnxZLB6ZzyBZYutqqfMVGJNY8",
  "key39": "wiSfrFtH9aidtKrhAfnHCNd66CtJ66KyYdPVG87vbGy67fWY9aP7JgsX43E1YxEnE2gibaLaMqbjCAtDDyoa4Wj",
  "key40": "2YMDyrkVL1NpjFNctfptrbR2VPVGWDWqeQ16S1XjNBC9SJH1CbZS34SXfVwsy6JZcQ5YYHiX38DJJQZtXBMz91gw",
  "key41": "4YmcVuBLezc7LKPCuRGPr2AKzLvqYbvwc2b2d8JFi1NKfeSzCfnhy6z6rM3Kt4PNwBY86yMznxDK7AH7EWYtHT6j",
  "key42": "Q2Mxf5TRsJN76TvDGjZ6aEPqHpRwmhJpbBzh3EbaYnS37bCVNU5swQ3VeGvNZyxi6SaXCWLz4GqWh7u1Hk5BJWA",
  "key43": "2qFiXuyS8f2SEVYCvcMf5JsEjjZij4KmwMUVJU7ubQEdUDsnR4zZf6qCbJECUcM5dvDEtkWxov79GCygbLBFycjK",
  "key44": "4pdoARbPegZWfUFQVEL1ft7MYxg3Syf2qRKErfKMUQ2bArhsnhmsHGeMwD6XmYHzmU5r6iMwtoJHbTe6VU5S6mE",
  "key45": "4oq9ofG5m7nSs9cV3hZXzxg9CdKfh12Vn2kYPPjpWnx8DUcdtRNAvcqPKwDtL7GHaN99sMtNY75J9csJsdgUwFwR",
  "key46": "5ZXDyM6atrbursV92MLwYu6Pr9wQwDo6mqPfqgp1xnZMoPNqsKBukuiFWZtu8rSdZo5JyFQTexQ3yJGb3SZ8zTt2"
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
