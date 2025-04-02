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
    "j9qZsn5qYsokP54gGkdjRSEy5XGBUyFXC1sfritzphZsvGcXo1bDDvNSCgbxdVFXjeT17JrAL4PQQ1CLx6n6t3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pu9zeKGtYk3pcdhS8vwBfiifjKM4qig7zMiSU1n1bGbDeRvGnH2cK35CrQjNdJu9L9Nk4FpFjtaYmGsh6jMnzXw",
  "key1": "36KKYcQv47ATSTYL7PPfdjFDpcVbK45mtr9vGXRk252ogKsmPJW97iU9nfs8PvPAFZ6smgUGRY1gv5x6MiDTMEDh",
  "key2": "4M2ovs5aSVdPFiy3GCUoSvNWwNHD3Y5ZJb39HTfcQEc48Hwu6dHwa4e9hTq5W8zfUDMEmHQP86h8MrPkzMQcWRjS",
  "key3": "4rJjtkbQEqqZdsuun6YzRHDNfHazG6Z19YibTTeM6HmqEDSEyw8D5it6b7kpFfVg1hGtoHrn3qwPBQdDVwD9Hbzj",
  "key4": "4ro3P181GaUqCLzMr58u3bJaiKCemkXnhdgvUQJ9vqtWgPooDmyHQ6vJnphHguWEo3f3egjBJwbyqsAMAej4YuQo",
  "key5": "5MVWm2LMUFFV5QfPZ1BwVUzHBapZZStCFW7p7rQZxQecsGJVYY2PEScyYehrhGKRVxqZ8QQLKL5EqmEVCednWumz",
  "key6": "3c8R57V2F17Dgr7nz8odgxqBxGxzJixhk3tw2dvQfSjCSjSSmUVLzpzifFNDQvQJMnwjJ1R5HqEpP8YgK64sy36q",
  "key7": "2wf4qaG4g4PPV4Jo9zfdmCRYKoMugi9je2gs6HbUwJjBbZ4TT1WC4edd5URERUmDDcFKKhzAy6pkTC28UtZvDws5",
  "key8": "5MvDeJpTZ7ykSHCuebnbwFzg1RHK6JRDgjuaqUjfK2AVFgLEzNLW6WiY2FhgKkAFa6o17KcXYsAPpXxxAe2PUt2K",
  "key9": "ZujQwRsRWusc7buVDuWydUpy4gCYdQKKc7cxGoiTjuKf4aG3vQwZ1voD1wVcC5TLBNT37a5Du5cpWPSH5DQmNjR",
  "key10": "JNXngJ7WC6dyWvbEYstTdiwNQn87nCuy5CZD5xZa9qVhe4Rim7vgTRqJStabCa2TtXPqDCUvFmPjRLSH9T4GR7b",
  "key11": "5EUgQWzbFCQGm7oSpaXkBAgVcNVsvSNTofw4vrQDmsVqp9NMvMcrKZ7RQFKiPeVBz17x3aD2KzbCxacq6uCfuE2N",
  "key12": "3WzyHd3ThWfhFcBsCB4rmNVxTkNiaCH3RRjPkqBEDjYPjqAKD8CiKKMh9BvnQYGmKt5UbPUZXYSYH25qkx9bqVGA",
  "key13": "3GCmrzLr4H8yP6HGKMKLzttNEkAGpYA8Gz8UDrzVuzPkH1hQyMX6KqbgbxMRnd4S15kCKm4A5qDdQruNQQREzhMq",
  "key14": "45ybqb8nQKTnmFwcDaVJBAR4ZQkHLqupZmQVN5M6Uy14zNo6CxztFBG97RQQkam2XQRq1i8E39NcCasvwSRXFpLt",
  "key15": "5JBgmxCg3o67vqa8MwKzeuMDjeTuogQbwSGog628wNDExyZkXFBKzhszKCcHmWDUEikdgPTfKoAsaQ4BwAt6oyXR",
  "key16": "5RrnUcSNTNbAfxGw53XGMv752FfzVki2V1Qx9Kr1uPi2o59ZigtV8Ncer1aJV3JyQC8jHexTP593xbCshBWGjg96",
  "key17": "2EMJT8Y1Mo385xqFJvkGhwyisBbkZAw1BEm65LTAQELzn3Y4XQwNxL9RYjLPRP3Q3m1LCxCLH6xhJJUKNe6MHTyR",
  "key18": "3M4BvviWBQ3WMm92TG2BYKmpRAEex4qJQgzAW6wGn6Uz6wYwji17Q9fEXKAR5EsGaD3x9UqrwUJ8Y1MaWKtntV9S",
  "key19": "TkvV9KxLXjzY7ovwhMAHCiNmgAwctbPXY3fntfk746yDS1Xo4PoNn6PP7KRrZdmHQ7u2YQF2xujqQA2EcZqU3ts",
  "key20": "59fVTewiBy9AEsmrLZChXiHyPAvyeeh93xHrzChwjuzXmAWCSDEgrhpYgTmfLVVP1btpdnCJBHKiqa3oor8kxgCw",
  "key21": "3Ns6ci1BxkpdzudVYuN9pjY6VmDu6aXtAHjcKrmd2dEnSJtg66hw7HPHARhmdZRA4SjXa6T1e85F3FoqFYUEgMAi",
  "key22": "45yxr3dhG48GQhTCJAazPjgFFCmbXEZU61zCZBS2QDuh8sQfpEWJATbSYjg1oL2S2qG93VhxKcrSxeC4U913qz4P",
  "key23": "4zgf3JntP8MwyfjDVrVzEf5V71RyDdwnTDwJNbNE5JL5uF5Ls82oEHfMig6P9hiYsNqVLLi2YaKmpKHpJoZN3sec",
  "key24": "3SMtVWgKv9tt5GxQuozoR3Sc5EbY8metdoECdfEiMcvwA69gn49mEKsTiWgEMQatDZPsHdmjPYLqT193JRnXrjow",
  "key25": "3kxWWR4uJNWojSkKR5HsJwcCwPCuCVDYjR946ZwmQJbXwmYwBJ2WYFPuszVe91tPu2Q9Dmk6eRjhN5UksX6PsdhG",
  "key26": "4k99bDCuykAKxJrV4U362UTbz4ibXJKYVSjG9qK4JNKWr5MQHDnVx3qztHchcJGqaVNRSVbc3yDDFyZnSY6PM2Qb",
  "key27": "2FzL7kRtss6hm1wG6ecPkZjrJEDTTGQvPLmU7vWhzRyLsFPbwLHRfBbdZComdx7wSNMfUPqD3TkfjCVCxXjwUe1",
  "key28": "6f8R8q9tjhvnAR7eY2ybdKF1UGPQoSYrrCz7aXkmWqKBDzVMqd5T7ea7JaQ68oBtHgHcYmjbJELqDCr3pcYMzQg",
  "key29": "3MoCBQWjDg15xaN4M1epAXxQ2AtdaCsHxZBNqSPCwyuRC1PjCtoSruorBF3G4kwsPyhp7vUJiTZtmHvgToH8Pkt5",
  "key30": "4y5erV2mibiGrGr1FW4WgyGNJ9rW2VtK71GtCNWAoG7yckv4sf5WKitkgDMBvcdVVMEmx2FDnwKb6J5eyx56B4Jj",
  "key31": "3AxCdEgeSmXRfVsZHPvVRoyNZfskXVgygXtrWnh7dhx2zaG3U8uwYRoereAq2hwT1q21tFB9nKw5vnVMBYrGzekr",
  "key32": "5b4ZE9v6YoxXnRcTaTkmUFGmXDSJaMGafY2hosVY9gHpPuzuxFYmKGjAMcyP4y6nNMSMWCRyZbk8WT3iQ4zw2dPV",
  "key33": "45fNYrVkJYnQ27SEDCjfswcBkziGr86RT4pcC1cr1rgkXSXnfu93cnMhgji172n85aYT2mCcqEticKM8iWRzQ6HP",
  "key34": "2V1BW5JJakjsjJUHA9tsSeGkwrzxFcYJooi49fMBihjE7qU8eovcERdU2XcpjYcZ5XQS6FG65GzZqoizRjr5KLVe",
  "key35": "4tFoKuHBeBJj5Pmk2GePRjjwnpmXmUYeyyaa1sa9UM3su5f6hrboAdV6WLPLHbZxNmXSYLaypJBoCDpY96i4yPHy",
  "key36": "5YAUrzBiK77djkyb8jHKCt3zXL9RxKcBj9DwoVSxMwyaezkQWHHvs3yWfgVU9GZ5xuXSHy1dUmb8Zi2NQqhRBUUw",
  "key37": "5qPewZoYzoP2HLWZDdoCfupmedzF36rw35oyvELphdxiY1MnJEsshnA82zEd1rFKQpY4n8cph6mT7TpNEe8BVkdm",
  "key38": "12A9ZxQkfcwohbM3paRC9pB8AinkdVh7AXsSoypFefMDnoBK59uv3Rq1CV3E1zoaHrA8fpkKchj9JbB8f1MsBn4Q",
  "key39": "41z8CgXRasrdFCwvDwLHtdrfkemhB76ToPPefBkQEVbgvpWtUxxV6VM5r46mx7J7xiwdmmhT2GfWKKFss4PYcaAo",
  "key40": "3KgEsduKFoU2ew5P6j2dYs2Rtdx23dd26jPWQxktaSJ9chcXEbwu8g2Fzy9oCGfNpzyTZyXT65HcYg55SMk8B4bT",
  "key41": "2APcbJtkc9FtkZfW7gE6g2uAPfQWWK1GhtoK6BBMpVfMk1f3CX633sijv2js8Efmmv9QofGWmquS2uo4qRXegyEx",
  "key42": "5tpy4aXokuJDiWxK4a7h5geee8V9jBa1CykKmjvVyDPAt5xuJJ1NR716L5uFpRUZG9ziGcLSFWHBZRWLrqAKpUwQ",
  "key43": "4hJvdV8Ce5yHhbCNis1A8Rq3n7uem6zJHiW8dTWVZbv5JfVssTVCLTwYGSri2i64wAyyWqdMQ4BgxiMyN3b2xZX",
  "key44": "2Mp8mN4hfSxtcZeJiDasLtXWE1FqdEAPxeqgept12jfea6rLYTq99RDcbUMPgkphvRsXAGZRqBdRwfAueGXBCyDt",
  "key45": "5qFo5wqoQEiHyU9m66F5XKztJLx5MLHDy6KGURBgnVGQ1pkMi8EB9ii82XG36xEzyu9bF7iz8uNMKhEWp9M3erhm",
  "key46": "4gCdaYfUFwKiuSfiFvuYrDcq3vuqc5cwyoGRFGh9vZTgxXmw6wqwodw1dRukn1nNSB6bcEKk8uKfoQyYuvzYrmon"
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
