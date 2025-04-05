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
    "TUMY1DMQiZWpHf86MmRnhgrVbefbDPcRF6g1ZunpxJERSq2E1wQ67RZz7nnNeh3d2qob4tkB9N71bujK3aViEcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zVxbEuFXcNHVopVc5h8dVg4996drX9hWPXrwkbPu7fcDsovxyTVkaRV5hdv1C3Z37FS4UjE3AwCbFKWC23j3M8Z",
  "key1": "2gESDWMqUFVNqoMNMxt5yEi6PVgdCMXZGURhY5RznCV498UHthLXAFTTE8nRdRHN4gTq5PduQGW8kVn64NxrtHV7",
  "key2": "66vAjXi4att6oaK3ZibnSRPktcWwb1VDh98Mi1VLn5nAQNQPvJzsQAPFueKVN2mYZSmhBRtHJmC1NpzXshuAhaqP",
  "key3": "2eAaYr5pSZHWeEhi1pGhKCdpxgG8miAPoMJD6qFNEmDPvChmhGvAijsd6pyom8RofBDyUdUZpcDeqY4E6VqVJKB8",
  "key4": "5k2QrbVcS8AWGAC6bqiDSpd5Hd8QUuqC7xZ7YfSFkYrHgwAv9gBi4GctQ4yKDtsF9spaFMzjRwxknTZsukQybeJS",
  "key5": "2xPmdtAKwVPYKuGvg23kdcasKHcNmzSvaA1V52toGydpZXwYj1TYTJfTmHj17VKHqUz9FjAUtYBh5zBhhedZggvF",
  "key6": "5mwQoAwc9Pf3E2d8bJoX7tLQMwcRj8eZ5m88qCnvpMBKZcUFaaS1JisfDbVsr1BUCnpVdL5QF5Vf4MpVoJ62TTHJ",
  "key7": "5gPdteoRmzvAempb6R7h9ZB4taAgogYQxKctAU9PXrmAmpDe3qLhW6TnZyfKVr392FXCwF1zcLyqBuUcUfi37ZMp",
  "key8": "eZAtNZvx4wEgKgEHFMShLAQmxyQbuLQP2grpHvta3HgE1s3yHHNKWGbFj5ap5xRDXE5yLNFHWLV6AhFuymrMUD4",
  "key9": "4PafpZmnY6huXG7q2WZGgZEvkpz7kSbUn81wQPt15HcSraEipr6kSZQpYZkcps21M2db8zPGVJdQqAtNNLYxoXc8",
  "key10": "4o1GKSttav4m1bBPG3hBr5Ru43xkiFS3rj8VDbVi9YrrkdsHAm6X3MJyeWWSwsj7nR4iqsqXUWW2qUuYmb7qS7WN",
  "key11": "ztUyY3tJ2Eut8nFjvsbF3PGKRgxMNt66Kdi7aKzDrYRkrqSsQvoyhfZyRw3SBL4KF1yXKdqJD3uVk36V3XauXzW",
  "key12": "3dXiBiwnrfhFbiqVAerUKHNW4J4RGobd8Y7oYN6XsqghZP4eCAwx3ynjdsLgkVPgMF8YJ8uRBZzdSNkf1hG7VLFG",
  "key13": "5Ykv7b1yvg6uCSJgeebkYwX5tXCa9gJ4nz7jnM9A69M9WiBs4X4k6nQspKbnFbbxDMg2AxzmPmWS9Ji75h4u3Tsb",
  "key14": "eQNzjBtZtaD66enyGdRihKv3ZM6ozroj8nEWewFPtgfWUMZLwGHoaXCFQwmVvKjFvbeJGDS5Z9BtsyPWYTV5tzE",
  "key15": "5j8R1RG6WgSYNDta5R65GY7j5RCBx8sGxu9k2MLPDXGyDY6xxKMzzS1P34g7dVszbYE6FJA8Nskm9o4ySg8TRwg3",
  "key16": "tAiVzbscRwsphNkk2MphH6gRDzWoc5mJbiuzcT6k72pStdXw4nzvJe1VzrWKDzuamDHZRtU97ucVBUdseuZt7KD",
  "key17": "2QP4o1KU9aEoxC3oJ3A47LiBhdXb3gLSHZWFeSetyYoVqXMBcF3iMWY7vrAuWp4e5dMrVLejaWxdBRDRKnb9MEzh",
  "key18": "3WzoYywDn4A6ZiDHKjw5bSTRXShznFQoDYeyc7P8YtQK2auoxLYf9BW6iLHSYat7oWyzKcb5XZZTigj1BjUVo86T",
  "key19": "4BP1nLRAYQEwxQgUwhs3v9PQx1qPq5jtBbcxspRdP3n4gfdBwDEaK7EAw62fr7q7C9khoaw3ZLvczhrmC9Vt9uja",
  "key20": "3M2c1Zi5izvN2W7bJe22BPRk1NVSaFwukyTmbbVFXGH1mGzjqgpv6sF3YvGnBnHZb4JqSmpw4TsTGnBYuQ6pgdkK",
  "key21": "3ymP3MJ7ZFEfSam4S9PeWw9YMECoLb25jxYo9pTmX3LPMSVwoJA6BHCu7yjm7M6oAGPM9HbtUURgebUKiumMvPcT",
  "key22": "2w2wigEAzZBAcHXpySPQ7Y7WCddw55GBVYm6oyQCoRHvfaKkEAQHgP13Nz4LMJmvnULwYK2p9ghneR4YSWBTsoBq",
  "key23": "3ty22GdybQm9yCyKTcahsziW75hxGnc7FgXThkAuQ3j8hidtVcWZktfnsf5sa6VGbLuM3ye5z1M2hvKkAr9B3qmA",
  "key24": "2BjgCQCaF2tjJGToxWcHrmCo3uzi174a58kP8EmYrV68XkfKBBA4o6th8mYpfuFuw962AS5T5ak5QoT5KS3PA8nL",
  "key25": "2JThfQSruQGBuiemvDtiQo4LEEr7z9E865rdAznCSUjfpLUDi1AXnB6cAVQ1h6SDi6uRe8Zv9Putm4WG6xyNndis",
  "key26": "2WF18GmdcWmTDhAT2SfCSaBrpW2tCmFP5opPWbHo1FDPZ9vbNmzVX15kHmYdTQVtnK5GhUEW1xVMZy6qktWzXe3t",
  "key27": "43uEucZU9WMajjKyp4tgpfbEyEwohsDM8NFc8AC6W66UQeugzhtkqFuCercHKHeHcmdmyzsA3v7iUYxQpzTnFNtW",
  "key28": "4zvh5zqyaHSUL6sw8pnUj1bVkVf4H58wLcgcuecmPrf2cqc6FdrHpthq63WNWNYbj1tH1jp5PKeSu1mp9zUhcHnS",
  "key29": "5iWurCvuKhJbjh217wAuqykzJw7VjeewuwxXdKPXqxAQEJcqFdMWpjJCin3GkzqNThfrckkeXD3ppCHjn4mScmRF",
  "key30": "3Tyzcaq7kK83trEiyyA6kHKW78824pRoXDeXfpMYpZk8ttgBYxgLFBayoZX6sR1yh4UW2TdmTY8jf7vbqAfJCHsv",
  "key31": "DrQUKaDjg1S17NP454c6r6ecBNCSE1rvMf9ZvQSsztRrGDax1GauYmCAz9rgpT4g4yarfdKqp6PnVwxWaDBnGtj",
  "key32": "5SKzayTtKJjqFgLMuFbSbz7spEtkAfZSDQawCjArhtzLpc1kSYC2e7rTNhBPzEvXgBDpKuJSGpBscTJyaRkaZy3T",
  "key33": "4QwaWua8rzMKgVAAWLMhej6so9qPBZfZeKXmhy6fArY1cs2Gv8cN5fXZp3GehZDe8kpms8J4z1XfE9TkspX4v13D",
  "key34": "5xEFGRGdg3yjLHKMsNx4Sz1CQTVtNYqM7uXYFrQW7EfSCEDkds9NmFfbmHoLxVTabczYHGquVdPR9zZZcCzexhhQ",
  "key35": "5e1WWBmvjCTrJt6aJ6ZZZ4CFvhA8uhgRcdDPWuprzTA5Mp6zB6wp2Vtm5SAtx9GfBJMY66eoT44ihNw6DZtsAKyW",
  "key36": "5s8PUWEJ2TFNE69bvSSzwEqWkVEXN1t27kxTWapV9GYesu8wJ6isLr4rEpAJuy89ZDr9svJ83LfWYaZp2cvCVTks",
  "key37": "Rcnan95WtHN5Nb2Zqj8wGbu17RJhgsWeUNfXY5MK8gUpPoBzNYr2qyY2is4yHif8h72ws1Hb8RoYFoW7PNpbtv2",
  "key38": "28Zc3CAg17WQ86FEfE8RokkSvJAc7HRHAGFtLDRmE95XwUsLAoT7pNp9uhynrdD3CxUKAMX7yQRdmW59uujuD1xy",
  "key39": "48HkB3uEeSCrAQqn8F1v2YjHJS2fNwBJ83Dic3gdSxZR5Z3wQvWP5WwNpuYViDcoSDQVQPqvQ4gTXriVtGbhF66R",
  "key40": "otQ5dBwt45HJX44cc1hDj6BUXSawxTCj4fshvh8rtsdJ1tXAFi4Y4zGJiA4qghyfiK2ik2Z3zWgmixscKx7bzi4",
  "key41": "4u1zMG1PJckvPggKuhY8Sun1Ez1hopN3TRAaAuadWohfvF9EPxLJ2Gu3bm6LGkTgciBjq5ab13g6nYLMmbJa7pVD",
  "key42": "4zD8VowpVNUsjTaRcfU1wSrASc5hpQDVcovCUW226qUHCighS1qLnHiZVwndAaaoCjdMGfjF5wFNfky9EiJbw8SX",
  "key43": "Sztwxtu3W1EzQYvaRnt3FRX4gbdT2DL7aqAqcAyNNa1YnbHB85mF6bbbH1dqXhkvMQas8x1geoTUSkRYs5i9FEN",
  "key44": "4LAufgWCbCn8FyxfZCCENDwPCCQs2pkBcjCMELnLULpc8UHrhpTYr4fLKyj8KLi17d2msdt9evUd7nqKoqpadDxq"
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
