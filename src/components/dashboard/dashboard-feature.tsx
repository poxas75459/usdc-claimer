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
    "2uNKaqJR1Ehrnk1BmRXu8fH9BhFpE3S38c9jT6EjzMMndC1eo45Pm4QTBYy1tsxCMeMMG44rXvhxxyhjCm386wKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Pz5TpG4bN9cPJqPHLaSz8EVgMPhd6ZpR5UL8fFxMh213wrEEmJU2mQMVA1ovpNmCyxiG5CQKbchPAGae1BTJKB",
  "key1": "LtDcygoKqH7rVtuVN3Y1fSacYNcwkQKWAB1cMATeLR46uciam9N2sS6j4nZf5beyyWqzzKChfGtQXmnmHWhmJRA",
  "key2": "2i1Pa34j4SfsX6Je6pqUSetwwedCC51eebHSdKgQVoUmpvXQPba8gQcQuBtbS27r63HEGfWLnAZvqM8TFQjfgsvA",
  "key3": "4zsYUZSJGNcoPuCrWYCr8QCNCUTnjdYFEZiD1foKbLVWrVxiU685LnmZkiLsn8PwNNier7rMjB6aRLYdJgPN9NE8",
  "key4": "4WwMaFPUCEQJCTe9ATNpoiHQzPXqFciXduEbTe837MpqL3XEd2DqBPNh3jJFF9HAAztFcPVbt4ioVEecqHPBfHSd",
  "key5": "3tGApLRGRzRNkhu2D2YqkMtFdtQyhUthHS43d6dkJC9BzyBQoyMonrXVzf1zx54sf89udKg8uEoFopvBAyBXkfsC",
  "key6": "5Zbfg6fptNjMjb9We53qZm438HFhCbpiLgurVsoJxTLn1AgJZLQup8atD9Jbo7uJ8ahAAeKgeErDSrvrML69A2QV",
  "key7": "5k2oTSWnGNu9fWnv5rMBNPpq3V58B3mU7vmrEE9gL7rPqxLbYR2mdS4P1fcGMmfwRi6PG8xajyipGmb56Na2H27w",
  "key8": "416rm1X8GJU6fqrPup8vEVMwS3xvBaKH6Gfnj5v9mEirSoeh69ReYHkvEFfDCXCi8ic1AhXghSkxTEtYCNiBCHp9",
  "key9": "3nh6RJMCCFbnh5tZyKdANj8waoHUe8jwxXyYQFn9bsYxjudLfjizRtPEM1WN6CkoZhUehytdrpLEFi7BiPeWRLZj",
  "key10": "3xNJHyuLXMzZPGWEG9qijAuNqZbzT5MgCDuUdGAwZ9NAjUMM6S7dwNACywzvTpx7bBxHCJJxGKuennmRtoqXMXKG",
  "key11": "JxfsssVgQa2LtkT9XL73uwmjYkANkvKRtfwEyDQzRCXxMJcdRFJTTYMZX7ZCcAEPeS5cPnhtzKKNhbSwAHxesGJ",
  "key12": "4drwHRjt2H4836L9nVs48o1M2Khnki7Fck1d7bNnveUVds21Z5q4d7ShMP1Axb6HcvBVYuXHfsxKKsR325Ghjfjp",
  "key13": "5ZkVz1tjoMsXU9YxVrRGUx61YzZgrWn8vxWFDrA4xumZzDxK81oiwfEoETpGRGJQ2xeMFvufmH8yQ7UuW7hqWiiM",
  "key14": "2KF3f1jvNQ232L8E7F5qLe9YW8HDo8nTW6PSEJ6fej6skXikL3yUyqwCwKuFsv9L98RpFdGZ1ZhXca1wqf19YUkP",
  "key15": "MVsdyU3fNiaANkZbPPiwzEe9wcQ2NifHrQo7iJNjpUaNAscJuLacseDvaFAmia45Wc4BERMx9pDZDw6UgSgYC9N",
  "key16": "5YwpnXtkvvR7avGZXFNstYx4738NPJ4W96WpwhY8qknRbs6dveSX4im3Q6UEZAYrqtMVQuW7WHTaMEKDufF5AEAm",
  "key17": "ApKpDaExVC5NF47GSvrYii3a2vxgMhSP5pFfhaKLsWqJdjFtry1WZx3SvhASLnN36cruKd3bWdUAZUpt3v43cpa",
  "key18": "4dLmcJJZ2J42UxRpaz7FSCLrZ7KB51F5i33LCTv5ycg1Ec7hMUABQgKmxRNM5jXSQPKVNfRwULvLtXw1YHmZcUPZ",
  "key19": "2QMnkevSd6RJe8HLPUyxiJb27uoEXdx2nYcYDJJnphzYFQsgmemjirR4qci7ehqr3c7exp6kv8UdihyVWbTDxzQ",
  "key20": "315mCBwtJoGiBa1PgJnFS4wowbHKvr3LK87DRN1JhULmVZCvfpVBb7obwbLo3jWDE2tVkCowgnewetS24gKN6BQf",
  "key21": "54xdwZmBq9qvEkXuRr2GWBQo77j1Sb81E4Cgo7Gtgu5VjmgWSN4Hc5G8GPgtrYpcT9xzuzMSiffAPG16n7vsyUmT",
  "key22": "2DDyvYn3D3LX94pwJnZg69NfaBRGG3p2pnC63wykMtA9trFYjwyy8Gjp3cqcCBropH3KMWN4F7uTmU4KYxeTM5zD",
  "key23": "29z5NEopge2Z6ZceEAJZ1WGjxBCur3dxZHZZsaCtjSw162AboD4Tddz8V95ELuHowEV9mYcqMNu6PtKgmcwUv1Vp",
  "key24": "5BSdMY6P3kDYUhvhtig69Jb4bAwtf7vQi5Ut1dRgZY1JxBGmQGk4gFM9mBDSPLd8ipUZCjYdbRMiHP5FsrZZ7KqV",
  "key25": "22QAZibkWU4KLWh3m5uUMmazKVxaotriCkEXNUnep7df2VjjKjrF4wpCMMBchPG6RF2hNAhzoBjnzy8jVEHhoXDo",
  "key26": "5QBpgAs2VkYKtcJ62jj3uDL7AowKoVjPPRnEeTwnbCNQZj3NEKA5F6ZTrhCprDxR4UucV38bikdu7zTK3CXFjSHZ",
  "key27": "26iqJX9JKb6oeaFG8BKue3X93qETj1w6uWcgUZVe1oc5CAEoTMxbACHYEhoZKnJGQ3e319FTNaH7C9YxFcgypeJn",
  "key28": "zWaYSQEQEnW6bD5L6yp6ArULZL7RoSuYL4dhP8AJRtHKAoXCPcE1nUTj8j6hcdB9PWAeCeNWyxherogbBaT2zFK",
  "key29": "WwcVq7pjuuyPeiggWtecdhN7NPhKwtrager2TgmieGXpdeLvSZpkspUbvg9vaKSiHKWuzqJBWN9fg7TcnJh7Apa",
  "key30": "5vmAyYnnYzVxu2ft9q84q2EY5AzyTCfQUwcfSxz9mpHu6W8Wgkvs8RUWWNzrMPJhun2MHdFaLB9n7qef6hjPjaPf",
  "key31": "3dA7PQq1n5mXXZoiK7rqXDafNeJnxLXJxFLptyyHazTTYvSWK1DLzLEFKRzeu3UsYvxc26GRir8REJehzBNrpmVr",
  "key32": "5vPRunemTPsKh1STkxhdk7qgVCUY1Sp1KsxRLMfhMjDbTVcH2hX1ZF1Ks1rur9WvkbuuJ6JHn18BbCxx7EtKrywM",
  "key33": "4amMwrZ7vFieNwXUhiD5osjyURSM3mQ5CfZ6dfgrzMJCyvJs2DCfoEgFZ9sCkNCrfqvU5VCcvUXud71nY7GLzcbs",
  "key34": "4Mbm4yWbfAicgJM2rLKZiExjZGaj2r4Cr6akM2zuJQ9DWvrrDpYiSLys3rqpiN2V6gBoWDyo5idr6Vo2aHbvxW3f",
  "key35": "4j3VVjBsD1pZfRHg3dEQvDkFkAXuiB8EZ9fTBJDFFTky2qytRcUKf1tz7aJdYSHt7pHu2mdDiG44ogheTZxqMir2",
  "key36": "55Ti576YEABSHNWKPZiTNGi9SmRrUYEH4nXa1g63s84iKSLvWMBMRMnFPdN2sUwsJ8jQY5LNPosQ6M6Vc3y45Ny8",
  "key37": "4qtZGHxJ2oBenfxSXDYcvrC24Z5McmKqFtwCU8VpqsLjdeTYCVeskqQWkvGx6D9hvdmnbhezqnGyxYmfmujBPfZ4",
  "key38": "2aWmw5cufAW6mRpnWAkWYrwZsWn5yPNV9x21R2uJrzozzXVcwncyBWnkby8Ly8xWFuV7Wyc4meYeD2hKSNzdqHta",
  "key39": "3E6Rtbxqyem1NGA5mJoFaCGgfp6GrE6oFWEw524vm2a3kGvPvrCJd8UZqc8izJYS95xh4gHcifPJbzf6vPXdyBeb",
  "key40": "5iJBXzQmrT2WiXvwaXeP3aaTWgtGDXV1AQCvuKvRyqkCT8wenBj4E4r8N4CvhZTYkLm5xLQDA9nqMEw8tt5pZcsZ",
  "key41": "Lt3xUabRR9GhAb4empQqj5LMeTL4BtD8gH7yym3GipQaSfW7SgPPvJb7FHN4e23T77tAWxxmj9QF8UT3W4sieN1",
  "key42": "Vs5NZZ4fWAUSi9AW4TFuG6mmENsGQwmsQ9qSeaCgkBxNVrU5USHgK713AXz8cHaoo1QAbP6GogzYJjXHnyYtVUi",
  "key43": "2CX5QeAmFqLkaxTfe6A4py7Rx4nyqUtj8uR6zUVU3VPG47oQvcy2CbMPpKM2WsxufB9t3vcvNiNVkR6vnCHA4zmB"
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
