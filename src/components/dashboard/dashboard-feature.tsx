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
    "5PZT3opb5B3hxGjx5xzPBvq2TtjZYWSRqrTaMfuzQY65PPSNQLQ3kLjDtxj5MHnkx21N4akTyYJPhzUbQQwk4bph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P6NeAcqmmQZ5qmQJzs3MMboF9z7K4wFazEgD36tLsQ5XL3xsgDjkFYkCXvCPUu4Ed2B7rPxjP9uSQtnc9a1DsC9",
  "key1": "ZnFUgk3ujXTFRVHBnVopR61vF5X6V2wUcipQLSQYw9NVaFt4EGpGgfjCor2SgpPNz6XXvZfRwTjx5FtG5bgc63X",
  "key2": "4ajy7uQL7JSKrLGtm1bnKXj2x3h3rY2abVmVsK5zEa45aRswEoT4FiHztnScwpZ5kZnnkTrmxGEbLagxqcSey1Mp",
  "key3": "3FrxhSB9B5gf2iysDkccYGWPwDkPztZoGZXdJn1WqSBV7A2Wo37ik9dqz694WmiLguUotkGWHVqHEqngPSro1Y9P",
  "key4": "29mnwod76nyyhopsx3GAELb1XbUsXkhxhfuhkZS1PE9wJKZdY1hea2eNsv8JnhxaAoHzfsQkZ991VkwLLGUXhVg8",
  "key5": "5qzeC9CHAy1Z15Y291dggxKXcJVhw9oua3qvowGp5Pj32544ohczgjU8KnG7nC5UUd2QdDeaygpqJA9j4LLcrNS7",
  "key6": "4kHW1TjaNqsVo1AYBqfbsBeb6X2j73q2mBkxWNxb8mJAD9b3E4wNyxXdFzV2k9jQmcyunsf8KcmZTnJga3moHF24",
  "key7": "2eGGrXxNvB3ydZquQrTNtfMzRrJeWsitT17Fh2VqYyrfgyCBmn9KuZzvWFcN9iS4wC7XDZGpkGTVa8e6SwDpETWV",
  "key8": "674jfTo6JT5Ff7CYyVNn8E8sqZ8NnABJpoZXqiRRXvATf8w7puGsfa8VyehLhCdqkR5Y5cGHutaJT8j9EhDbcZUk",
  "key9": "4c1F3E1UxJxUK6UUWqEFvX3otgUqGs9k8nUFuxVvKUMXq6pf8JZY7Xn7wufLcBdMz7DmycqJFiVDYu88fWCcdLhL",
  "key10": "4mHQdaihwTphhbW3Pc7DVqwQg4pwdouMXfHhzf8whgunLcMX6FUS99v1DgETxTi4LXLEwA7mbURY6o3YFUxZ8H7n",
  "key11": "4gP6oucD3ML75ktpeuXNuiNuHdgG2jj5EhaWFXKSNDHATEpoEuGG8mZg91XgHX7AStafvNw2ZRdgr8yhVhpq1BnQ",
  "key12": "3rtjG3BhRfPCyfLRMs9UbkrotJJYDiwFQENiqov6ygt7p5tEiQ8goFUUfaLJaPQ6M531wPoCT9hTDaotFfiBt1ea",
  "key13": "3MyHM5knJjmAiUfYMWu99yZGmAGqXBjUxf3q7mePf2KH4WBYBmny2cJKYh1tw3hc444NTmyG9PPWMvfvc6sE7tp1",
  "key14": "cweaz6wHAZitcvCYTEBuwETpvDuk2ybNmv36HqZAXkxqoRheQuMX6sYopLkzAF15CJpY6FLRdzjBjZjciEpBFvX",
  "key15": "64mU6aRUYaHd9ZceNsEzXXW3R4z3axMSvt8Xxcojzk46wnxVnoHxssXzd14ppKHdgWfXYddtQCY3FFmtxagwDqfG",
  "key16": "2qEf5pcD9J8G4QWHm513maMnjyhwoewmShAb6KYtdamWUwdPYG1D17wNwhhTbxUByt52qzNy1inzcez8Ro9po7rJ",
  "key17": "5jr2Pwos7d4654RuXV9caYfDgnsfiY4CWMJcf5cmwifsgVGi6syUasspsoSFwBc1D2b5TrmbmJq5sV9hoHt8dw3B",
  "key18": "4ZzWMv8SwUbNVHrVQmgUPRyYMv97JN34pzWLp1aTwM4ifg3EKuAnG7AnVu9QXemuqPnGqA7jjzHwhE7ov5xvQj6T",
  "key19": "3H1NSvSPdtLaV1e4LprkvFjMbN6uXS5q1Amhm6DKnpkfVaBPyn3JUvHkXCinA1vFMiujVzMLihd2nfzCwY6Ru6hL",
  "key20": "33pkacSz45yxRKJiKJwQCJ7yHBDe9XKjr6dmwyVAbxDD7HEUzoFE5C8L23i16ZDQGTZNUmxtVJqjFPrfsC6zFfGU",
  "key21": "3k2x8YrSJmq3cwgtaeRgWYUM6HLrAH4viugS3mqsMZWM8LYmobsffE47DLrU5nKzDS2MToPRuUEhyAJiUqJwB24P",
  "key22": "3QKwjp2DxvYJS1NZ5o6sgXZget1oqkJ4J4rkbSG28iYHz8bua4XJ1v69q8KNvudD3vfXNRcsTKcyZGAL3bkzUQ5c",
  "key23": "2i1HVqd3ZGFWfjSDan9jsDXxZPRXEgHXgFnxkrY7Upa4mJapEDPcm8yuohRKsqQCKEjBHU7EDcDACrjeNgpNkPw7",
  "key24": "5iwvjnhPAFB3JYbsNghTB2DMteJQMqQ3poYwo5c7ePKo9ijdRtcQraxUktjhpq5sYcypYmSf4t966yZyvhUXQc33",
  "key25": "2vnDKaFCSfBMmjVZKL9Nb6GiYp7EgsKyG3pjtCXxn4caCcRUUC8LFnW9Hs9Ai9f1RT9gPTWX3vj2X7SU6w47DPB3",
  "key26": "7V1dgesBcCRtEz9NxhhGJ2588QszriY8Haj9xHEPVdMeKucctdQ4fn6dbGKrUdWRZt3TSwHi9vTVais2u7yN1wF",
  "key27": "37nXmKi1zW7GCxJKcXX2kky5w36Y8aRDnjwqX8BmEY7sh6n8jBTCLFo3jpVY2uJVAbo2BXi67ddw4X2NzmuPNCFU",
  "key28": "39aJGCgEXhAjGFVAzKtKS6X3zP6Zz3S22wLcdpD3e8uBdvAye6bPMPr7DmcGHZei2EGgKETTawHyjkBHcVmwdfrY",
  "key29": "4hDAfMyXVAbxrUP1oiQeuuohRzfBHzm2oFGYWfLrGNYMALa2GFvXfWC1QdRYWcxNQAjZnRk1LU4NZfJ9Kyr1z2EB",
  "key30": "67Nr12keXhQuR5GTrK11SMW4rJubyD5FkX3JfaWcRq5LZCRvE86GR9kx713ySEiymbUpA9dcDmD7fjTxG1CuHSV4",
  "key31": "51SQm1FTQJk7NyZ24Wp4kt9M8obB264pCMbzmYGEv8JMZkzPUvPRrNXgVLofm1EKxNGgums4NrcTjs8Qh6EyAcsv",
  "key32": "3pfSFN3B7VkkX4Tvara47jaa5iNd6uNbvVHZAHX1KzPTG7B33fJpGGokbPijnhYvveUuaqCHiEJwSiBEUW6HDHXP",
  "key33": "2p7rWwXqQrJNkpEpcA6ewbjw3DrqMmFhr56tSjqtP3VkeS9MioJKTHYkf7phXrrrN5CobRs5QPLzCUDdes2M9Cpb",
  "key34": "4BvDWWuHvyHqrXCuwKQkuAH8fFf9HhEWh9zPHHz212WMTBkc8nmHfKR1Ve7AiiVd1Eo7wimfeyHoz2cnBqR96xgg",
  "key35": "3WHZTJ2dNUqeD5LWSyHhaRtWucGbkPrFjckdrSDPqCjRy2QXUWH5cGCkHQaFGhd1TXtg5MnPJa283fgbbQmrJCQv",
  "key36": "33T6NrFFnDqFJhYSBrQY6bzy7HkbTHnDV3SyFWXf3V3K5JBoTEwsPRkB3wr1ZJwtvHg9Uv9R2Ls4md3M4XZfLWBT",
  "key37": "21qa1sRwdHYoqeALNcaCzrLHz1oRhvZR7Zf2n8BMfyhJAne7Bm1F9ERXNHmPoj8SMThcnG7HyhRaoaP9G18Tyo76",
  "key38": "4kd7RXpsHofxsi4mdnh7yDY3Jb3xoGP6FC2gN2vyva9rtL6V9Q6ptHDTVNPg3gpoay7hxSbkCgfvkHKmYsuBSyjX",
  "key39": "2aMfxZtQKBk1P2ZeJGaphnhGmprigp8fvsGMrBVyT6Le2A3ppHZwc2VE11EdkdKGDfHNGpeYWD8KFskXnP321KnP",
  "key40": "4rN4VLMjp4H7URsw1Ht9odFF6kcmf5rm375x5xiftU7Y2dm2ZNfFxB5oHsBh7H2ShRRcsHiQi3KSGynPEnVGYTRm",
  "key41": "3Z814VSfnvZPQAKvUrQY5FyvmLxqTgNLm7FQwarhZ4xHQ3z9EYwmdeLzmLCV6cST2BhZNZiXqi5C2FcxU1MK98pK",
  "key42": "4wXsXfBNGGEsJgw6zQwQhtn6f2GRin6BemGpcsdhy3vnKuU6E9eo15dsTwVVPQukEk8sozSwodgjsaKAT3aDMjuV",
  "key43": "64dBCe4c9PQLqemVDbu8yDWZF8rVxaH7Q49Za7Tk7bhmWu3kruG4LoSonuXTihLAXGJdhQY7aigfrMnFuG9H3E24",
  "key44": "VDEs1YefjuMYkAForsKvHUTiEoq4tPkekvJyyohP3errfs1tDqMu1cortPuRNY64K3C1rfwrWr3DSkJJ6UYf3Wz",
  "key45": "4U7Drg34hjmeTPegu2sfocq4EuWbH3PGKPwVJfhzDbYgcKjr3cchoLnhvL4KuFJJKzZzrvP64uJnacepSKH52FNd",
  "key46": "5Fr3zSoRcPFmABq1toeMJWY73575V3EzUqhHo85QjAakMKGfB4a11CkUxRh4H2wKnePmfzm9NMgiEyiUXWuQztDj",
  "key47": "3fdxwKW92x7Qi1rABn4zni8QWCAtv4YVmhVQHRKKuHCfpw7fU6NTYHbngXCwtinjEZFGdnH7nWyBfHQuPNzYUTLN",
  "key48": "5Fjxykes2ZW7kBzHiEXbkeshrASr2bFzZHUjokiz8GYsWW1NqMWiDxKYMWtyfJFicYQwgSxLcjJ7yNxcbdTWHfU9"
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
