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
    "2WNH8CBYrNWWt8XGbRp1fbiPWGqzzoPkeTWTis7K1my7FaHUPzcVne1vAFquPdziSormZHTPTDps31C5R3NX1bFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bJJpUVCX8VV16Nsw6SM5f8jeHFydq8tVRVdXERPe3SAwXkGPYtH6jZaQRTnaCpiqoJGu6o8v93aWcef7JZuz7XC",
  "key1": "4acmNAv4DbK1XVKdLDF39dfB7FMjEXpRJtYqnZGTLhLX6mCFujFBoanXUprj89YhUNBovihyJ38J8Nzdc8RfYQZb",
  "key2": "2pXszJ133yqVs7PTZGzmtbQ1biD15oXBkB97QxQDBD2CRVos7d5DnNVd5pkZRJFtpG4uT71qk32uP1qCU19M4yV2",
  "key3": "31VsbqMAcx4vMnEwzLXEasNUWm7SqZrcoE14bosLcjyDXkAv5fdXRgF2eCkWBsXgtRrpXd2rPPYhUzhrV5YjbZXn",
  "key4": "2UYCDRyffdiqCjBPJTyLBk99y3rst2ZMoPzNPqsdodccSBuNSNh4npAiMdP4f7M3hbqca8JLG5up7rAREYiM7d1W",
  "key5": "5cVxFQn761G3Dj2wzTjQZgtz7m4nC8Z5gyzkJZRFpCsRdx3LtVRWN5awwh96Wf6ag98f4pEDfA8BpfBshFvVi7b4",
  "key6": "WwoQp2mStYD2qJQBjeaA2w3qoDxr7NpaxCRVLHLYVgjSpB8XrpKqP9a8MGHYp6QWrQ9dV4f8643VNLZ8iN5S9z9",
  "key7": "2MQr6VUreQ5adTCcJVEZHg2dEBDSv9dBdWG6waQYMt381V6VtfkDU2HpD4nVy3DHg2ZAx7RVcCeHNfAuPMsjXJr",
  "key8": "uafGDpaV5PmS5d2xumbva4jXmwvbWGC5Htqh8Mk5TuzU5cg4tW4NSLRNLSAdrkgk9QCV2DxK7i8re9KqPCeXrp4",
  "key9": "632UTdtDWGPyknmkCH8eXdPGeZrjp2Gtv4pEar3PnhNzb2NSL5rikfkhwV6A1hJ4pp56tnzofF1bm1WLnch8DCFM",
  "key10": "Y3FqrTg2WafdjeGERhtUJZJauHXzxGRigeEoPUjpd613ZrmQhgkUSjToUReJDmMabmxa6vVBwAE5A1kcknytJ7H",
  "key11": "uUK1zm4MfZrhoRxX6zJ3To21CueLtUNPLxXt8RWrwY8MPE4zFoLaMJxWSoffHhXFg9SyZt6jWGLfBuzUabFvZbQ",
  "key12": "3akXZiv3T9aeVoctV5MdZo3nqg6xWpGzzgLTGrc7F8NeXGs32Gs3cZTMZUiztQx4kZEigwPtStHF7CqXCMqm5vkH",
  "key13": "2UHkHEjS4myXB3jE1i3LVQzt6mKKgtMXnVw9cNXgmDJvvoVwSjjEyFG7ASoyes45oS8dcykNbck9AECnMTHRRAr1",
  "key14": "kxAU1joLKJp5Xs2ByJuTxcjd7cxcUeuQmXnGEmLQ8H4monsTEDsoTLK2WzJ5uJJh6K4NCCWP1hW3iiJJBkhqDzs",
  "key15": "M71Bj9qnbPsrsKCR8Bsk9creevjGMEuNQmfGDV9VzvcqeYJfYtGyfHCgQUpomc9DPM8y5QvUrzsCiqFpjNgspn1",
  "key16": "2tFgdVKv3XfwXk8MwMZi8W4VXCfgmFbTMLAyBv4sateX6mrzUCgG29KQ8rfi5AaowZNmnfq9AaTbkCiHQhsLAjd3",
  "key17": "SyAB7Xnk3Pm6ErYzbmpWyUyJzQF61JKxs7sd1EcgGV5q64rUo6EUS5VVCBjYSxcYrXWGTqgpydt2B7mnWH9SR6x",
  "key18": "vjFH59kLe4wzBTBJQu9nCA7Y2nXoVHHv8kEsHJdoLKZJEKFyr2pVwRzKjGEqvHEZq4gLuykBoDC765r46udq1rS",
  "key19": "3HERVtGaikXX15joHoRfHL6eXvyz8ttMhsG4yV8Pq8HCaeABPnC71hAqrs5AC6CyectLmQ1MQVEvkTQkzaUWj1dV",
  "key20": "5HAut56DjfKpKzuKibVrsCVp9N6eiSGGzdCuaHVn9Svb4JnnERcgoR3gxmPG9eAUmUo3PRzYGD1MKVyEf1HrDCbB",
  "key21": "62eo2uFjg9Z5ru5WmYEWkJmAby8P956X2u1mpTiC43awAe1sFLafFzfTxodQm5umJrJ5oz2u92YxUzvQd9oP1GpZ",
  "key22": "5YjauxYTCbNoLd4e3KR8SAp4GF233M9ErE8TaTj1kfk7bYke9EeHG7qxHQdtZ8M31W14bXj6AMHkzcSwzRsFGxqe",
  "key23": "nowSPoeo8c141geRQs3iMnq7cj7DngD4f9QqeM7eyMZYT5BQCANX4osYDr2v8yYGmHwQ9ovWtL1tsZS71fMwU6G",
  "key24": "WcW43mrFvWQ5vs8ti75ZRxHqvyccD29toCGpnC5wMd5sb4YzBSAmb1FxFWUTWR3aWFXFTAZTJrZmMHpqwRi6ezs",
  "key25": "3PQEwHXDfHvL6Kv1qP8UqY4qdLGhhtK44eW6froFPiLtduGTp6GccZ2FnfL6q4vxZVSrjwVnxX5DBDZUTAHseF96",
  "key26": "aEdukuV1LFspcSfX8SsT231huHVSnrK7bcLp4UTe8kJUWdJ4K3Wkfi6ftwT6ozxEFyx5ZYGEsECvcnGDr1FXix9",
  "key27": "3SQTardtxbcntRjUa31XdBX6g6KC3PyMnycMEDjvCxG4SFKkRaX2yM9qjeAXpdBsSLXyFbbo3iE3VVsyGbg1987T",
  "key28": "3jEBxANzmgY5aPYGm8GZwktTfHd5fUXcqDKohnM8n9sEvNKHVZXTXzDRWTsLKyeVVcDidHyLTMwDHfiCmLWKRQ58",
  "key29": "2uGgSxoiFHnG7zoNANPSL24nYp95UFQbWncS8Wb3o5f48swLCwtDJW4VgBsj8tAuqux9f7wMRb7VtcbJDG7NadgR",
  "key30": "33FJ8goH4U2zv4482Si1GrY66mPZgSY67Axywmzx8DQFkpj5jPaevJfLuzYQZXBHvQ6rfGRDdDycrP3y4wKYEfHG",
  "key31": "8c2k1xqDSsTK3npHqCEb9QrkNvitashgFGUeNMyc9VpzqHwHH3v6fD3gwgvBnphbGsRFG59ZASpBZcGuStjs7eJ",
  "key32": "BWLbHbrRkAdJ44f5dLrV4UcXdcA4Meqh7ZUpCwARqmc2UvebSoqRWwuW9NwkDQ4wSPFukg2mzLzJxNCC9LQU8k3",
  "key33": "22ycSJtC5gwkyt1UdQFaobXrsx9F5x6niX7dx1G1t9wMAoTfL9NGWfDmgAoeJsEkhxfdtDK9WdWMLSXMSrM3Fzs1",
  "key34": "2XtH84Z62997UjMtYnzY9kyj4tMekGu23KRm72ARdsa9GwZutHQZbK8kvvrtRZqgodZg55UuzNJ2maHwVhTXwBEd",
  "key35": "3fND5ZzM3ZGZtbsyAfVBsuGvTUX9Qk9pRwWofbkyZujvhoF8hhp6Nmq3k5D7Bqd168ztSEytb3megd29WYLpagjv"
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
