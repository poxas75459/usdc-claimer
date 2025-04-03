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
    "DJTHdZzbTsNsZVrWjW9daSGtLYCtT4wVDxj3vTewt1XUpwKaZbKs2bLbkdVv181uBujCz33MfGGMztYbowU4jW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5SzB85pPYqHKQgMCxycWZKQ6XHezt2E9J27PQekS8bTP9xXSQgsuuLQ53H87S3rRcJUJjtr5fEU7G2c2QHSV9j",
  "key1": "HeQrCiu7p5BGrNURMRokMNKnGjyuoDBV1Xus6WD3MPySmNy8bRCkpaphRSdMU7HuGUMmyupQKKGQ5icjF6EraEF",
  "key2": "45PH1ZN62zhGJCXWxLzHhZpbqSjHY1CQ6X4U8xhHHV1K2ZxGYUriKGj3GY7de8QFcbBf2FooKG4uTUEXb57yxssz",
  "key3": "2SuVBhauf4QGnXDT6KrJf9GLi29yP6uSUR5UMhjFQ3sJBCJ59ju83kh1cJD9XSXo5dAVnK7EtPT24ZRUJkYgBRqF",
  "key4": "4oFZsyKNMawod7cFFG47sL5cFEBKaBKCp1ngjm2rCok8BdCTF2XACxYo5rS896t2xphWCULggA1MtjgdqCA7whTN",
  "key5": "38bQoidP6kS9tCoa4b8ywhiqTTSBQMPDjQ8LuY2x8PYSpcHZv6AH4qa4JbqkKH1F6KKgvmhYZvhW3AxVfzf14iVF",
  "key6": "o3bG5xRSGEQ2Sa5u3qikMxkVAo3qBZdoP4VyJ5ef9dPX7b5eWozNm5qbTrpZnjibq3r7fsmQBDeyk7yVyMWc4jr",
  "key7": "4R5PAifdYwVXnzQFRRQPBipJtsoxpVvrS6MDdcDQSwgSnwa751w6utZiVVzAvnTFiPUf6V8PsDSu2V4xBQhWyQHv",
  "key8": "3qDjwZWed9RYpsPD7vfS3Ze1vjwyXZiRRF1dFgU5DSSoxQHR2Xw14ixWK4ayif2opp6YvpMSC2nUDNWmTVvobRk5",
  "key9": "XuvnGYinT8HBHEUAaWEqJ85SGUJDCvKDfu6mPjUHZGnc4afAJdt7f89eiEmw5QtXSfFpdLw1joCKJzxQEjpUVQQ",
  "key10": "4NnmL25mFvdHThCb4CReD33km5a9dnkE2vTfnPefhvaPRmvejYCrV5hY7qcwCeUKABZ69ApNTEvJdcARea8uSLzq",
  "key11": "5hCn6iUp7zjQqtoXp7ZzKzqJmtjUTvsmMtpY9kUAADhZVVqkyMgzKRGKL23Qnxj6QYU2mTPmSo3ZZekVmEbutQL8",
  "key12": "3nDcJb65agxW7yjgHWbiVu8GqKhjEWQ6CTEehbq3UBbuaJnMHbncWSVdQ8k8qZUBRnJDzp2rgWXdcqeLtnyGZjjo",
  "key13": "47FzzcTW5TfP3so3ujbKyXVu8ZA7v2KYSAYL617BV7gkFVxSgAuvuXzQ6wb2Vxr2raXjmCex1wZQpCSX3qSAJEJ3",
  "key14": "3WWmVFM42X8sD9GmNHkxsJVL8bzXV5KJpers5TT9wPsaqvHWzRwsdSJQeefmaafFEiddHQ9EU6VT1P3kUYsvCB68",
  "key15": "2TSV6YU2sLe8XjGVqzg82yb3JkGhp8oBUw5rZrDZ1QdWhJodWTFNp31LNQ55BzTPHrhzB43aiBy78DrSRyrT8zEH",
  "key16": "2v2rexMMdK21TpN2ZonE4usRcQ9FdfJ52ASh2ybXAnB7ciMbngyZzHu3uiDeBuQ2YivKDF2uS36fWg1x9RGyA4RC",
  "key17": "3irKrjfWT2JmmimAtJihbtQg1AratjtTH8Xpxwh99Ct1v1WfddPdFVzJ79Q9537pK3QtYhDdDzYEWaKTk1zwrK45",
  "key18": "2MsERxGg7Tn7GAnQthSs6Cr9ZiG6DguwdBjfHvvBdhNdfLWrs2tBRpgdX9rujBNgnRaGsd44YGUwf3rSa1QZHesz",
  "key19": "2JYGzVKsJMjounyxUCsXdF5qrVEso4mQ8zMT4TviB4eVMVBrPmdcHMdo2GjgpovjvwdbiDJ2jHKrz4KVg869Cqr6",
  "key20": "5vun6QUn79dvPpwieSJC2qUz4u97aYPGfUzG44PyvfNgGHNW2zHjW4s3Dfkwx4qCpscnELpF3bbU17aWTqRiyNJA",
  "key21": "45inndJ1JZ1SQiqXosF8dTsLio25XP4bJ9HegB3qcgLGBgRhWmi7DJHBFmxYdDwyA6BXU8HZAUcLEBhh63Ss8Xx5",
  "key22": "2AQeoWztd4416zPxzyw4LkSzJ34XUhAtYf4EUmbE6XKyZGNyAXH3B9Uzgipd2KcWJLpddDrv6ei1qp9BwEK1j6ni",
  "key23": "2nCyPXwdqJPdP1zkUJwiZEH35HArwfDHBjFX6vh466NzoCAT2tMcMbBkT2mQNe421yA4Nf8SjD7pj76ZGXyA4RKd",
  "key24": "5QRPpZQrQRt41aLy5jm37vuVH47BVXLnudfwPsZitsqhRLQzz2KkB3xXJj1oxmKwYuCi33SPRPZgKmCZ5C7Kjxsp",
  "key25": "4Rg7cMFQ2cuFkErFNSw45tysR57Lwi9P4pwsCdU9XgMcrwR3XJXn14K9E134op2stzodap33ng682bcpq2d8pCiF",
  "key26": "2qdppTStNwEB97eoxUqkxJnv4rCCRybPzKjtmbwp683EAYNdMQyq9Pe3MiczSDcqmWG2W8N68Qg85oSjfvg4pEJx",
  "key27": "56Pz6FEVLCjtevxg1a56mgPcxmsZ2mj3G3MRcu8wNpedbJc3gJewbu1V1ujQWGEquViRjUviAfedb2rcjSNR6zFR",
  "key28": "5J63b2b7zu8sPniqJpif2Xvg1TKJWCX9QGvCSqdE888AYZHoYS72yBAUzEPqmKKtA6PnBFr2JXfZjiFNPidHXCbX",
  "key29": "4yX6xeGjcRoMLLY2UKcyQSiuLoammTBFuxf34KN4AF7RUz3dD5XrG48K4PC3466iHGpwaM5WY7cm9mfxigW46Hkf",
  "key30": "2Qegqk24bhGmnJ9QS3L3qHPKoWgtpWyEEiEurewFpiEgcTigUevdDCM4KTJQMEhydmbjEvX6JzestbnaTZCr1sMq",
  "key31": "4YLx71ELA5QYaF2uvcZDCz34qJm7wfisNQDStf5keYaZBceJBDvs1iEWmDg3Lii3deq2fUzrQmenjd27a5QxPQax",
  "key32": "53AnFfqbgQCZLDPE8iQFub9A2MVgcksVWgnpDB6ydGuXvbqvKD1qafcLFwcd1rnC9P191z9EqUuRbGMDYqKnYynV",
  "key33": "27tLwCWUBHqYcAq6zkhVLYsUGNU5uqsU2TC58kNpYbjdF1BC5xKrPvdD2jbgKkhVFycTXN4Gckh71VKxKGnSHbiS",
  "key34": "5mZv5vsp4k5ZGzZLmNmgwNYUQprnYmhwMqsmbucoabxJWKxyhJQBSc4WqjM45YCQCGKpgmG7GNm9kvzKTDkvcUGP",
  "key35": "4CLeZYyCzGaB4pEg83CTARdrxcjFtJJKgRZE4BZfD1rQo1ogGsb3g1EshQuMgRjRbc8qQnVjR8tcuiT48vYUzL68",
  "key36": "4cWag5KL57zWEzWg8cMn7duyRTbGTsJ63Tnr7PQNhf31dF6pB8jC3un3vujBzCs8y1j8ndjsPsaBhapsyM9zya7A",
  "key37": "2qvDp9xoEETaqwWPBqe9qmvHCFmewhNDqDtSKsJb22yrzyYtvC5LDtycVuiL8JRuz8hrd186Z2toRh2gc3EYXhF6",
  "key38": "s9Cj1otXribidQoqUSXrHGJUkrexJcQEZ3ThyuyT3Z4axCrh2ZJxhFcVtwfYa33gpCSt9jeWrF3uk2R7hCFNKMu",
  "key39": "3FHzBwWrrYQBNAfvVD8Kc3VBz2TQCKKi4oGzEGtMV1KmGVZENCFL9M5NkMaXKTt4goHZsC52JVFSXZVNZewmNUdn",
  "key40": "4vn429r2LcHD4u5yVZwgQ74bh6LggXSTT9jn7awvYxP2nzC3djhS4RjpYdAnx2AYXBppFce3fuA2NRyp1kjEQDid",
  "key41": "u6tLq2mehCRDXYAnjagWv4XfUmL1a9AGQKtZxY6gh6ng4rjW11WF5rCBy4cUhrJkQsJ9xpfpGQEnTMj2PZYDwJS",
  "key42": "3TMMX7m5qp35mX8FterePxEtS9JwofdPtYQG6cGVmLLyMLE4ZxEjEkxWLt2u8TXBkadnTodaD4MbHg4XshAktTBm"
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
