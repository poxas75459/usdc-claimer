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
    "63WbUtWMiZ1UZAN5qMqKjHG2ztFEmdZGU2RCzYZnxL7CwxCXEGYidX3Ae12YVncUdqudou3squgjAc6DM2m8Ecid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AyYqyhZCMKzjb1KqedwJXaAau2CjSNuPKsp2pEKwJxB5dHWgc5QMJVx7ce9JDrjMiLxYCEHdQ2ttEfWBKSKH1P4",
  "key1": "5mgWrgFYj4cTtW7G1zwdJeVEJGT6TL2QR9JSpkpt7zp225dBCNU22zNUka4mnpAbSqkFYbWW4cixJx3x8PiYqh2N",
  "key2": "355mMQhb6YQ1fKuCMDoyPJ6nNsMqHynMShDgV47hq3qNDedRaxdtUzcnmZiJd3Lkk2vT3pXLwtJUzQEqTf3ENszc",
  "key3": "3iPcqV3pubk334qbkGd3ttbnoXR6qY3mxy9BXBb6L7nLk7Ag4vxTrDRxXLt325UJtK5d9XrHzp1w2WbRYtKBwhRW",
  "key4": "5rGCRbVHhSuFw4i7ApLRZZU25qxR3E8YEMGgL8QS2iirKgmqJAWZJDU77VYhqz9RFKiUTj2fcFrvfqocT6L55RtD",
  "key5": "3oQ9W7nCGokx8ZJ1wRxZZGGG5n5GMFHkrceafNYNs2e3bzccNrJvPGUef6vC8AeM7Gx2vukMNGdx4HggGx5pEGe7",
  "key6": "5eTKsgvitaQ3D35jenJmkZarqpr4p1xzyQLqdTDzG8W3odGefkkxDyv2441SPkCBegUpzrRJBkk4j8fsonAbKCSC",
  "key7": "2K7iVJa7ippYYKknSrjoUWakCZv8VBcxMvnZKCWCCD98P8mtVGweMkhKjYw1bRpCXEpio68LKHsHAH8jhTzKNViT",
  "key8": "5vr3KZdzz2tsAYUCsML6xMWSKw1VYYsEzXivoPCJTDpXS1Kk634EvT63jnPerHwmtFntvPyTdsUVJXrtJNyczPKC",
  "key9": "2imGa9g3dKj9K7Hp9TmRhYSSFEt2Yr9sHFd2TAydeX17aTZqsmpTCq4kQnZEJWcVzYCSfQjd4AQBSH1449fHpNtA",
  "key10": "5owdrgkhdk52LRgXygniWyGroiyAyyWevJ39C6sKBRi4QdDohCAku3FK4G6TbGA1WqHdA2T2Zi9PN9dYxJbHKCWQ",
  "key11": "5nPKk14UoXofHbsVCzTpbKwCA2T4ZJfB3VzQbCeGvr89xLEjq8YAgY5qn1op7rpmtVTiSHWJsKAebE24338WUCKe",
  "key12": "2fhrYRRJwyZCzotkZW7sAMgKysF568fJ12DqVzYq35nsm2kSSoYwbohZtCTKLSAzvsvruDuWDHukunJGPfqP9q4E",
  "key13": "46AWpzXpWUbakyiyPaMcktL85k8DvwUzg4SFEgPXo7KpEya8BDbxeJMKFgs9wGB5Z2KiJ8ePfqpC1Dpp5wLpcGMv",
  "key14": "5CxTLoDxp963AGAh8M2gCcbBEehF9t6Qd5qyRsv2X7Pz1pMhP5bRconqLrmHaYhzCHUN3opztPQFkQLniuDD8goZ",
  "key15": "5k2uS3EgNE1VDh7PFF5jToSTahDV54eGekn1A2PJ34sjU9rD1EeEjuTqX24SWP8dhRj5dt9bXFbA6miaCrwxt2Lj",
  "key16": "ALE3keuNz7utGxa4SqvqrtFnGTuobM4mJDXub4X27F3cSq35VxDdFSvsrpudCXEAjzWLNca3cGVpVu6LQGdAX9N",
  "key17": "3M6VNnfmjWWAwiq2h9uNVRSc2x2hDDL76ec3szAe3c3m4ogF1qD7A14tY6ZuLPAjJwL6ZwRmSvHMXEaGwdCaHB2u",
  "key18": "hUYv7T6rUNxqzBujETRMgRsTJ7SREucaPBw5VoVKxzdR3Bpbra27WycJSABR2Cm1uHRu8sxWjyTtdbjEviNvX9S",
  "key19": "2vLVBnCENAx8Zt7mEMkTJvD4g6tVryBVoesUJcnoVkgBNu9dejWTa76mYvWz5mrRBW3cG1HDx24KsE43LfaN8wAd",
  "key20": "3kAR8h4ohZwkstGXLbuFfTUQdr8mYDRVv4WnTxEAth8GrTnT7YDKVs7KcZ1sGinfHXeeQQWNkWAVMgnsTreHFxim",
  "key21": "3wmUbjuZqeunMHwaN2KyyF5znTJx6ZtFbekojE2btfhqsr6U4b6AZW9drUdT4AUmnbE6PCH66bTCk1kXioWLf7js",
  "key22": "4h2eB59Af1VoxZULJ7UgUBZo3fBh6VSNZosHazLA1sNDh1mFShTpuQPCCRcnT7VFHeGE5VH8kPPFLwJ8JZRHr1WR",
  "key23": "4P1HFF67tV42JRdfnTN839zAxYf3yKd7rkUMSTZxirEUdUqmnNwftuwYBEj3oqMcu9Rtcdo3s6E9pNUW9fZZ2Fes",
  "key24": "51LCw3TCnyec675JjrW99HH1AMyyL7cRocZJ9DerUJsoLmMKkkz4rkFhC543wfNcWwBTYiccLjXCGoYHSC1t9Mio",
  "key25": "5MQ2a8Kmqs9n7jCPg7qUja2qz8PQNR2ocr5YLX3TBa3gnqRQoos5kRtWgHEQkqRDJ5AgpKe9WwV2yYnAFg8NmXTF",
  "key26": "2p3jqfPR1SXH7RuCKQS1EwgJv5knweKESdciDsSA73V4TE2jvckueRRgmg9EB4hEib68bBBqQVkxZFfXhazbL7EQ",
  "key27": "4u3RmW2RW4uXzhXPCjRXXS7aYoX6J5HoVAMmSEgqhMvDu1rKM4MEdU9NXamEjtQXoMHkwSQY7bTe3eb5HaJrdrEk",
  "key28": "3cc4soRf3c4PGmyCAjVzWRKp2tqYJ42bTL82Lsmt2621GiusDp4CRVCnGrU7nk7D9iE6tovqsc5J82bww8VBKWuU",
  "key29": "2SzVRcKF8EzmcP3BcGEeuZaZVD6NxgYNqLeytvU9HiL5Cepy6HHoDXbSdrVnbjJcEhw5pYvmH5VmN71FhSjc8qdL",
  "key30": "5EuvT14s8D5RfJ7ju6o7Ljg4c1NDh4hkZBTBAWVfegrBojLAGEFY9pqPP6PETzM69mWBqykdbUPD48UUzWSZBqer",
  "key31": "4hg5yV9mQYYYmENBZmnNC2XURHzq13TAGpbNda6BE42dBiZDog5WsPb79cyXe6d2efaJJPxuDm6AU1K851Fk54nz",
  "key32": "56wdzBFbmdozztij1RyqvUxy2qDeQKjNPjwdEeS4WuuDhVRZ4CBKUaEerC2siD66gGsocNPDAF6Mwa3uEVuESavD",
  "key33": "36F4z67K4wAxQnJrp1jjCDfmfPefwa9LFMx8rRERtGM79fbaxWNabvULRwCpux3qmDtyQFwgqVDjpZveRUNS7n2",
  "key34": "kG9aXmCSBrPAN3PMvigQwQsxdz7dLxWMFQQTbLYQfNGSegwe51yEZxKC9tL3rTVFoNC7igjLu2dWjQAUxnapCxz",
  "key35": "2xcUx4j6D6j9XWBLqcDifNTtAkrWZCPa1WpzZfPmriaP5Ee2Dy9iC6yRLgcf8qfneWqDjWKQUrCyGMDHzN98VkRb",
  "key36": "AwJFnHGNGdVMJVuak4xLQvAQ8bCwxrAvSZ3rHznHUQ7iddtqa4BBhNDBggRcMs6kspWnkyLL54YKYSHjUWThZTv",
  "key37": "4Y7jfVasjheRYNCsPPSsLZVkAwubve2UztR5xQbQzvkYjBEgameLBFMEaAPMNBZGzwqa5z9sKw8gsef1bkjKrtJa",
  "key38": "5RoCxG1kqEhsAzqiU2Ljr9MQR51oViA1EWGo3yVSA2Mq8WkL4BhGrcFxoc1K5nsCcP7Gh6wHoniNvLz3yyWMhU5r",
  "key39": "47spZXQKvD1e92Hypjyt8Z5B81b93WgdUvFKEerhu8ZDREGNerpJihgidUdVPWb1GdgyHCE5yHUb8etZdjHqC4MN",
  "key40": "41P4zcUcgo5DPnzNiCndeM9vx5rB8yWgGwZYrEdrsuiRWqPDNSjRpGfXTVf1K5PeHjaYmW6Aeywqf8MCWGPEiaCP",
  "key41": "3G5pgNe66zeiVQYFVTKqpRxTVsUnHWiXvzKuPvMngo9qBPdJcL3ffuLkFeceeFzgw1vEf3SmaCxmsPPc77ERft1g"
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
