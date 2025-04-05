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
    "4tbWKpdKu2Px6ZpTxocgqLNWALYuuXcwgEQ9QZ4tSNDN45vJaavjS4AgpNnyYhST393GFEb3xVf6kmh9KqJYyKf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRKKH8RkSG6x6NN3urMFW86oD8E6vA3c7BsBEeUJRwp8QP8jUbcVYTs7oyPehF6oKTEhuaAZQYtJ55zAook5xi6",
  "key1": "5TPJ4irPjXpGzLdgDfa6F37Ep4GwUmxytrMAHkTUDU5jeJuynbRGaUJDfjkWD9SUp3uY8Ga1Y8g5HQspiBXQtuNG",
  "key2": "47ShC5cq1uVsrDH5LJ9RzASQUYeRYYExL3S66MQSaXnz53FVDKdWcDBgSUXKcC6JgP8xWhibWxvpmDDSPaW2JxpT",
  "key3": "2yUg2MPfqKpabujWTFAwtsXfquDyZptwJaUCR3nLgAGgXbnree7hC5zLuEPj5RqGgtYnCChkqfJTQkYgGpzQZpKT",
  "key4": "wyL5U7VuVjdpNMq7NmRtUcpx13crVPvwQw88srKrNNnsvMCryqWEmDVbCiLsY5NZ95hDMt2FKhxkJXGGku4coKo",
  "key5": "4g5N6ssjyvtu4Pcyra4DRTAByaAhQHBacxJMtVUGyH6X5AHV4eeYQ5fXwn7cXrhQUkxM6PAwmRjU5SSssgcWzFxV",
  "key6": "4CRTmZTDqK5RVwnHcjUHV7nMWPpdvUrdZ13BNB4nFTS5q3piDURzqyY9ziryU4s6xSmEvS4TCXCFTyALVfD6u1Cx",
  "key7": "Wrr4RKWmVTbXuvwBu7wkUWLyQ1PUcpbE1dKrbHwLGLAjxc9APmswNpaJg3YyUAYeKHEdHnRcNnuEqbuRmNYAB3J",
  "key8": "DrsmAVhVXWjQjF3XokbM5ViVDoDAtcUtKEcuvtHikrTx5Fg6z1neja5zQCXua5jkJsfE8U6fYTCJEFzYn7PhZoy",
  "key9": "3Z5UX9VuDE57e73skzFzDoLtKGvEtfZNSpuU34kr4qdLkmQvSMRQHrxX3k4hCxFR7tE3ERgmrz9qdvkNKr8S2t32",
  "key10": "eMhvZeHbeksATwCTL9cxezjGpfC3URf1JKwaVVFmgd5VDppPurXWv5joX5ysHhMawZSXhkvt6mHQV9kVVvGP7Xc",
  "key11": "5rJPwYakb3tbY5Y7wwGKCeJbgQLGAvzrUQwVQzTdBgGY9Ewi4xt6zEkzqocgNfDEZSEkksDDw5v9tHSXa5QiuvDh",
  "key12": "5hGQMn9BDjduXA8EqcNwMeo4JD1pWfi8Wcf69S7JU9qhQdSSSTqLSg1E8x2RW9MuMoZ6JLqww5jAPSdoTpfexQxy",
  "key13": "298rFGiXnX7qQtwZdHnhYBjXWdkW57b7Tyq7zGjLBUYG1K6fR6rodovVAbvJsyHTG5gpQhVaYyKXWjRAzWZeRXSc",
  "key14": "jfcUS1Y6tEqePcGCQUeSPHTywYUaVDk2XZ9r4NTayq73DonfAPrGBKRw7CMRLD27JfzzNVGSXYk6vUYZ7wTaQTt",
  "key15": "2KEvbJSf2cgk9XTqdGLJeJvinfxibSMJ3aW5cLvq4FLWXKXhstMZwN38XPam6VeMU2L6q5v74aVGgS7fRLDgYWtd",
  "key16": "4g92tpSnAP5CrTBoodUMYpX9pmkDWuLnrdncoky4Q6BCgnSMBNYtQxeCBSdgsGhusSKsSLXU6CckUSWFL6jgDyXW",
  "key17": "4uATzyUcBuN1aqiwxdE6nvqYrF3fnGhpgicxnvC8KYCtH1ixPZfLEAXgGpDyEkByqVGNJUWkE7vgPez5LKa1gHTc",
  "key18": "3yPs2DKRLb8gXZeM4JzoCXXgFkvhKoJ8KgzPkaM1Mkss4NXHcPvMayuvg6rwSXbRdJRHLVd9XDtfGYrRwhaNA7Zz",
  "key19": "2z3rDiauQHA234xuvpoE5ncc3CzZEcqmjmjPGnX7PPMXJ9E3TSHGB32yV91oCcbkY3LMjnfA8Zn2vfkFwcReVjPN",
  "key20": "3VRqiNSvyrZxveTR9hREjqeLt5hXt8cPdUgdih6iH4piEo5kqs3AkN7xwbnrSGqWZQLPLWJy3y69L4sxMsxwSfSr",
  "key21": "Z4g8w1WeZSFLDi9owqusM4KRhdFoKQRcvuB6W2QXKvxfBvozVKDFfaiMceXgoQjU6NTUUhDk7hSLPGSjQJeM3cQ",
  "key22": "4eWTnZg9HGtwhDNpxjjxADs3xoZTiTQUE4gHyz4tPuxkiXbE4GPsWRiRvfRvckNgm2py13nJQQiNrowHWM3reNdd",
  "key23": "GttsFrbGwmowsXzded9yuVJmvG8dA79nYkFbZ43oJUBEf7CBfxxVFX3rUS1rnRM2zkeMoCCTB1vjPtS4GiZyUC4",
  "key24": "4k7ER7P9DMHxj3PRrB2YQj8MH8NT93LaTgqve9z1jiHXwzqmhizPHXJ9mx5JfFATJaphMnA8pqkVLrtsdJECRYNp",
  "key25": "5zvaAYo7Xk3q7aFWB1YPmYnoaJ9vodwztJov7VNfTARpmE7f1kyCVUMw4LoftWkJ37s6WN2wUaowxT44faJo37Tg",
  "key26": "3VqjGtq7C7rbuTFVpbZRZWfMeHagjc4S9FPerXxtKs1qhQXjNitr7MSLaD4D1WezKE2mNFuUkaTbNwMfnWcb6iQE",
  "key27": "3JJQzcQbzTTqyvCMa6NaFPF3QUDgFWPyNDUjqFNRwPrWV8mZCgQ9qhKsxhGV8g9QkhFarZyPqieEGA9NwPCKAMv5",
  "key28": "AoqqyRvU1Q8PCJG1Gk4WsL9GhRfUxcjAzKExmR76qwVRibc4heoca3VSSEKddZH9b98LFi2uhWmARuWb9YjkmnM",
  "key29": "GLTbUfLCBMafUGJms34SdaUEkGkayHmWmzsLSfJjbR51sVQKgEomgeSYoo4G6GyydadybVkBEw8EAAQS2JbmYdF",
  "key30": "5TrpxNTqwnz4F6eAGE4B3u6KqMXDg2bMGe5XLL4dNviVHorcLUjZCsPUAF9YUeHGEzJtRqSfxS5eB4jCxzEZgEo1",
  "key31": "5Yo4p26CBqPz6CfrB3V4BmwnsnJa3kxaLSTBicm6SyhJKnaB6XdtqsqyPb6xUfiszoWS4RdxWm5SPYe6nK68iddk",
  "key32": "4mn4u6S4vypCbrQZRhbJumKht9kVNDwYnH2sDMX1ER637EiXx8m6NpBWpvpZRUG8WrrSweSHzAsvbLiDA3pB5wm1",
  "key33": "3NEGiAEF5ShM1hdbqCgqjHmcQb6Ks7SGeaheh5ouU63UpwTEvWhJ6HoxCdva1j6UZDHSEMjzD6DJqfZ3PXRd1ttJ",
  "key34": "3v6fJmwyD5SR5jgKbG2TmzTq9vnHwcwLPc547xcmgLLK1QwqH8XoztdidsNzAhwUuZivUZQLyFN8RemUw9vKX9xq",
  "key35": "5YNKrCRGimqSYEzWGVn9Rs7mwkxYwTYG8Gfm6BNe7RKeGM22J63B4LNihtTE8xXFKBagS6jFSkR5EJgUYUddH16a",
  "key36": "4Cp1y2NCuqzdDekQDBsUSXGT7DL4FCV64FU9q7MBgrvNaNYDBRo2m91idrarVgnMM9of4ApbZhbNvH1zLfJqZ7e8",
  "key37": "5t2zDQUicyp8ALti3ikB48hD6DATaJ9evefyh5ppqg9kQA3Tw23pTWQu8YLsUCeH9nBCiYb5xqFPosjFdVEFXShD",
  "key38": "TsKMjNQNMGeKhQqQZMKf5PYiSTyj63EZkRgTsmZuCLBKTjhD8Gq57TGnCmVztbYHUHm1AcGeFkvwaEUGa48TFmJ",
  "key39": "bErHmipMiJT82Ypw5RRMdAMiZjVpeFf4S4nuF2khRonNiayvQhq7s2SwbhAUWbKXQdUusWiSjkqFJFUf8TmhciR",
  "key40": "494eadx6LFzY626p4giaBapD5M2qDJxtx986XpycnYDZgq5vpfRkYWm4WiqWTT9bfzcadUstdvyNeCw7u8ZqRusP",
  "key41": "cLr8cZd6pwS33LBvBwheG35gSWChyQAsvZx1cPdknXRkgioP78xu9Bs2FzmNmCjxdQPau2FTt9kv68AmucrgnuV",
  "key42": "4yUxL6KkeUZStgARyJzGAqgJAcskLxaye43LMi1eikq2BrSsUKNk727RKUPVV9Fq6Nime8y6kJ1S2X2voPJ6rR1s",
  "key43": "3Zs9pZMUV2hzo2vnRUhHUwDrwhDQ4f9J8aX7u6RNqAXETL55JanAzS2mvbCd5VuoW7NnEQ27nngZHrXi4G8soU9g",
  "key44": "3EL34soVhvBeS3JMrvWp2fyR4hBjMmheJJzCeZwB3rGGdYmcjLXd3idgy1nvPpNeCAtisAdLAnmoTbJ9kT9ywBpe",
  "key45": "5on7B7QnMrv5zKnFUD5kRdxSwGg6fD9scZaqwSvbHzW3odK3PEh23ewwg9zBvMHLWvJ7TXtMaQrNxgiWerwYHZqX",
  "key46": "2qr8E1uUBSBEKfdB33Aj4WjxSkUNnzJvJJqR5o8wuNhJ2WfWBoY4cZz2gy6GtAf1ogvg9qqMMFuk2kpHaFZnrmfD",
  "key47": "4KWs79PTotptM7dURJzQMhxELg3YNmcBe18VadnHdqzMbmYUvdkJk2nKtqwCeLSgRCfb2wv4YtgRvWaD4e3YBmgC",
  "key48": "5QwQbsthUAX4sGnU1YSasptjq4MfswW9qYSUGNzAwGxkiffJDdR38HMr2vE4auGjTSey3MgajtEw9MgbtTHtY7og",
  "key49": "3fEkAsP7ugfRYQmsythjXxSYkfnEiDc9h2YoTFKkj5VFRtn4YJAtUgLaQaCorh7e1bK8McBEMsDSemaaz8ogCEys"
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
