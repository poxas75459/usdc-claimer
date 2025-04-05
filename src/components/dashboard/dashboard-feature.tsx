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
    "35sJAQ5R6pxm6pitfN1EdiefsVCLhfkyCwGVR9yWT7wpAKxNd1GBHYnhHtnf5jXinu6q1gAw68r621GqYK9kawWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vxZMnhrisyMNrJQuD2CVoouLVkPBKiRhWGyVuc21mKCgX5mmEWkiJQwHDwTitp2Xg3nif5fzKcctCcBcDrwrLKJ",
  "key1": "2vh19wD4TKUFAMJRA4BNVa45ZczpebLwHmMWSTrV4SZm7XusmKyeTEp1oZVDEfejKhFkGixty2uRjaJVDDWnt8sf",
  "key2": "3DbS4WPjT5qSr46nny9erKYs9s8bgy1tAttw6cTFRskX48jRrTnxU1S9u7UU3tksexa3HdLot7WCn5s1wbK6WSgN",
  "key3": "4CqQjdYJtCcQC7vw2Z1B9VXedYGwuxgE5ZFD9oBgjBswUfG1WUUMm2opLhem24S5jCyu6nA9zQxKf3jAzCsJxaXy",
  "key4": "3VzWbvWHZCQ5KCUYkHzEQDpjEf1AEP1RHEmtXH8kaQFXUvGB7MZ1SzkRsQxywW8e24eehPpFoFJyF4xd7oXvW7c",
  "key5": "5kWVmGmh4tENd7EXfk4ArYrbMjt9QC38Xn7hXP2o92fBxqzqdx1sEyhy7bMxqgrGZnWqDAgbza4U58Q5kNE4psvJ",
  "key6": "34aYhqBDqHLMFAY2kifhjsfxk2yXhGssD6pVsymJBPj3akAvEVFqPYnLj7RoJ6AR7atxdyfLPRZae3di1GYbzZfd",
  "key7": "2vjWb3JvJMXXAT9VfHGnqsvQF5VTfpLmebheohP9fSozwGZy9bmiw5sxBeHNkaqj8Kd9FGB9Hzf8D6x8dou3KWbM",
  "key8": "2fj2fGrRg3CzmnqRDMMD8JpsUXc4HExHEQZmUjnrXiF2cEFEAyyce1ZdjJ9cipnM4kmko5fZNDHdGvsyELTxdNw9",
  "key9": "5QZifA164s7etNVhbLeimvhgN1C2p2VXiFgDHEbJMTKs2TA3vTM22MfXeAXSkAebathrocgyZ6zxn2UbXBnX8zPg",
  "key10": "4MoxFV28nZWKRb41p13TieW3PHb86pXHGrP3r2FggUQd6tzRis8XeLhtQ44TJpzs1RQyrNV1KxkTnsbKdDFb5Mqm",
  "key11": "414cq8CGEemg28DPTMQQKXjjwHGQKvFRN61FjfUJaonqKSFQxtPsb1hWDUuEN2xRErMcUvVbVShB7X2jCUkRVi9s",
  "key12": "5ZxbmeHBVjEnxowoERbLNyzZHG8uZJKB4CBaqi3RyQmuYszBayaGvzzoNN2LFBQgmSWLsqGFBu6rH78c1FGvCvdz",
  "key13": "96m9AhksToDg2JnEGg1sPM9ryNj7hLnXLxaDscG3S9J3ubxkRrD69fYdc8rTyeJ6CpY9eUmgeYxXvTZ7zbBtHnX",
  "key14": "4sxXrra87N7ELxCc1x9WZYXETiqUcgqLmqfR8kyiTim7XNybz5CuPH3d2yoP3NkV2pAoA7XUNC1XcmjyHAYh7gGX",
  "key15": "59s3yfykEfn6HGt4hGC3BbMohT1fY8NyCKTYA7Vi1dEr4BvJ433zCWjC4YWkMUCYh2ctHp5Ncm2otGxAHJENCzKg",
  "key16": "RB4X8QwTxjYF2mSmgm4Mz7XtMsDvvY8FJ2UGB4sJkEVsTfo3SV1CjgdRHUyQyC4F9MQp7z3TM2DXF39eTMoSN9p",
  "key17": "4oyRDen4ZMSniMWMoZCk8nGzecnjwKZshvryVVRX6YKyt9pCZigMMR8mEaQBwezCpq23Q7H6T1s5Ad7yHxaaYqUy",
  "key18": "4MpvLSBHEN1GRyrHg7vDrFzT4JkvuDEgHs2Mrp4LfNjmYgEMBmosAvNRGLZi7m2WgajqxBQrtTEQwJJqS63g4PCo",
  "key19": "5MyEngkhG9mb1Z7csUXsY5u92DQeVBaU3kCNBa8s8CBPjcxFtD5RTutLDpUVrwSFUHavaYyYeR3fS5VwVJUFetxw",
  "key20": "3jpiR1axFXFeEHCWKS5wiNLhSxQtZoZMVutykJq614edEZL9Q7WWjuSmMbVXR3vGnjGXZmGeDjnQqVfZCyEkqiPN",
  "key21": "4aL6Ye2gQmpkLMQN2MRBhPfx9Wgweu88gthspJC5C7xLmguhrrmyrBQJwSheYPvaHdvuTyFZM5WNS2Yt95vdrrbu",
  "key22": "Lw7SaAwYJHe1Th6DnsrURNJWD4LRsbsaySPyzGbR88GGDjZuerxW48G8n7A4FsbXc9qrVS69GoYudCAFDMbwAf9",
  "key23": "35d8FJK1fXLUnZzy6fRr3AkYSby3T7PTayFjvosQ9MrrnxNg8jUi7bQMJs8PDWWenA44f4uTAjzKwVLuSYP8Mgsf",
  "key24": "33hCTbnTaTCma5xTRmsvYLs2eoMSw8SMTg64kAjRCQqrZzWZvtms12uBGVRHoEpqFF3gWf1bY5UMiY6HQQCSZWfT",
  "key25": "4YoKNq6fs9ToM1CsJQSApy2LNdMUx7p4vU2EwzYyTVbtoqk5bSStWkCSVffnY86xwxdUe4EepDfjFkWzVAtf4VVy",
  "key26": "2FDwRVLZL1tozpwnj2h3kemUS2zb4NpQW8xywLEn4DjRzJzdMgPR2F2QDMSn4xxrmLAw9wcvFKCAgAdjWvH2kiJy",
  "key27": "5N7hmW3RxgJYRfS5Av7nPrBoCnAUyhJVkauQqxysraB4ihUocMDP58JG6nBRtEnwCaseom5ecr7PPMFthusQZQue",
  "key28": "2qZ73dWGwoyNx5SaXekESiyz6Rus8kASEPvkekk856mpj6yoSE2uB4qaH7DMiTZbtEj44iWEgiv7zb3Ew5HhiS3r",
  "key29": "4Z1PA1G96TYpWbWJ53QMVEMRGJ5RScfWNH7kB2jjZhSYZe1vdaFzYULyMbKL7tZhBySBify95UaNpRCRhrtHeoD5",
  "key30": "oLHSYXMfkcPraeVjGYfBrhH3k4Lw39BwoEE2tUtnK549Xd9eronoBc9XjBQXsLx6aPM2DEmjkKJo7uQQKCpzxUx",
  "key31": "4YWRHvpkyy36kCdiLF7F1iUzJwWgp2ctWHWcmv7eTbyHiJzuHGuP3LvZd7fx9DxLnHKpBtEiJkFZJxLs7x9CQGEQ",
  "key32": "3F2w2v2gDLjuia7QSjwDqRnvhwndYFPBu1THuVbTh9c24zKvnu2aqMuweMXnLwBWArE6oQqoTFzncGyXzPuzgvpy",
  "key33": "4TQHLLV4H77e9Rn92c827JRWU3fbi34TRXMHw7YAX7tQwiV4mXqsDXoK2btDx3sJ6gEjKum6UGRZRVSJRBh9UjvJ",
  "key34": "CMWb1G5RgTgBk1ynQ7w2bWH92x479ywJFSiU2mkytSGaUPRh2cFiiRBeE7QJwUXfkkTu2e5Ht7DCXf1ipdcumk2",
  "key35": "4aQXsrp68Rh7TuwfzHYwExsWbjeJF5M2a2wGAGDsF4RKqaP4CYADfnz8qqyttesLTj59EGzQERZehKRTMX3Vgun5",
  "key36": "5qcqDvLHwvNXXqsVQTwJ6Tsx4W7pAAtxpKUiGPyyGCHkCAXMbT5o5zy9YdQ7RYe7ubRYgeKFqUty56Ra39oAvxWF",
  "key37": "5z4AxZiygSUYLEKuKQpSmwPyAaN8rTjaHyb7qP9HrYeixEBUV1hjnop5dCM8e7n8WzoLY2asMRvCfnEQdU8WXmnC",
  "key38": "2gP7nevoaKhyixyEjfA6igTT8uRfrNrHycVrjPQ6MkT1D5LjeDat7bw8qgL7NdimeurSCkHhLJ21XTKqBcGSro6i",
  "key39": "61G1zRo4wcdeuH6GT39mLUumaGsBGedWDtqJshgibaohdqCs4i4eiGewWZsFJzY2d1MdozshyTexRHdRtJ2awsXF",
  "key40": "2v3gsBdYE2QuVCxZfoZKqfmkjQ6zJzmXpUtBgBVMqbYzzrAuS9uNbrbix1WDASKuMjGsbDqePemQAcxexoY8TV6e",
  "key41": "4mk3WQ65Fs5rwvMJxxG3fy2qzQqjUTr2YCC26wzTX9bHWJDAruaT1v3DMtKBk1zGJ57jnkKvv9yqVdym3cGuUQwv",
  "key42": "nq29UQ7NuZrx3rDRayBD5oa2EvaYXKNs1aTU2J99mhCWmNsXJoGYwCzq6iLBjGc8Zf785pUh8HxYW2U1hfVd1jX",
  "key43": "4SJNQjDN4ruzrUMYNA7RJSZm4cBuDQifUU1rLTZZdgVohvAnd2WutvChCvbv5dd4vRs9j2qcF4mxpPaA5oG4E9qE",
  "key44": "5auWkzfSYfopzxwjrhJ7LyowUdi7RW2NPVqnKA17KKNyubSx27MdEQd9EP6ess4G6ucvk7pkd2ezRhhJZLyivB84",
  "key45": "4YBAUsbEaa5h2wmxudojDirxSmRiby2sY55fzDkbb9kABvmmMXeRD7J9ZaMHi4wek9aWTbCor4PnjJarvmPaRdvD",
  "key46": "4NHPZNmzqX6aA6eLdokYFq4B7pzBTurL9dwQNNybSkdAuJk3v7CVWPg5pzU3acST2YzGS1c3JHjrWEWZAGM2yoc3"
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
