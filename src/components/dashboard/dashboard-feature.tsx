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
    "wZv9PAL87H3rtoc2P2FyZR7KBr6pSXJtfisUiKEmL2WnokEDAJH7SSRxu7AXPLtZo2oL8b5b21NM3uMdur3Kukp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZcRP3SAgCbCFK37shAvoy1ZQ1KsZ1h4NXTcJjmQT1Lich1dPVYhcr25Q6VVQggUTeHmPP56uMudURAdvUgjZ9Bq",
  "key1": "5CAu4AeFnTAEUSHuWVVS6MXcb3XnHrUd7UBUVaCEyqkPMDfWbhQng1ugB2uJhTCX7UAT25qfkr3ARKLUB1ryBbDL",
  "key2": "4EsXCG4yE4i1XTRekEVNDaVnmsJnxyRHPbYDqPbANa749MQ9NsnAJogrJdehpaujezoN9PfvRxiXN8wK7FXmhDmT",
  "key3": "3fUvANHmmJT34xWFmMKPExPVUnbpt8pJhzRJgBHvJs3m1AsaiQbnDEA9TX9jPyNxG2BZz9mEV3xn91n6JXK5rErH",
  "key4": "4Da4hXU2L7bddDtYuhEi1XctRMTAMvFzkJzjU5rwVD7ufSEmZmp26NMMeJy5u39bgSDMBwyGySwJsgmgfNzYkTdr",
  "key5": "2BdmZwAttNxtLsLpmQTrPJ3Fudrd585v9PEMX3qByvrMJrpg3xNhZprsetn5FwpzBnafGbT35sXe84PK2XWw5zYh",
  "key6": "YD2Qd1gtHSh7h7dAbKKWT3ySQCAddCJwn6MBYEQ2TL2x7XbV33opTJ3AtmCDWrLkCgw261FNGwFKZDHbeUdBGuy",
  "key7": "3abZgomHtdKDzSiENJFaemsoezZEKeKW65Nh6LwzBUeFLrVChuAwWhuAfe28cX6xqiYaH1wYcPkbqwx7Vcd71aAV",
  "key8": "3BRbeV6jV36xkaSX62nRknMHr9XoEBnyoUEn7896nmATzhRw5cFDH6SF2rpRZmohugserF6mdoBeu61QyGN6pdrb",
  "key9": "5si9LkiHt7bCmbk48KwM8oZzTZevuwM6VWQEAfDTuChpGs2itxeRjVtSaj6PV3tHxiefrX3XqgkL9PwqPD5RpBWe",
  "key10": "39QcxdBkEtADGbvqU2oc6eWxDMLGgPZ4aHXeVsh671r3fa6mMLpwKJZpniHhLLgJkUwUM4NBVi1c6XD4fkuQsPuZ",
  "key11": "3qyUxLgR3C2tmELgc4ZX6kN35EhfgUNCceNdpRtw4ZJ8hbvvZbACBSUrjBcGg45KkBaZPf6KULhyBgRe6JaBJvgg",
  "key12": "58dkGgtmVgzwhoCcgjE7F4KtzEPWm6DNEVjkqE8LTjYgexjd3Ub9w9FMvKRdiqhRuARYQtegmHZbCqLshfXuQxGs",
  "key13": "2eABKnUMt4vVsPxnDoMZx2138MkoqX6d74VuiiAzDwBKqJyoGp26mZKbLAQhLi4Jc6WgmDoiyUZrHp75L8d2xyZx",
  "key14": "2kRFXMouHnJG4XmBxa2XZZP6drAzChq53WS6jji8j6Z6Z3KzYbimwwZnTKy9exHFvxth3qu123wsyoB6oGzuFR7j",
  "key15": "Nr95KanWMs9mhBUD3fCm3v2CvtzWANpWM1rZ6q52G8FQaJnLp5TaQ3fWm7giaZ3HyDRp16qrpnFskS6PMDCXa51",
  "key16": "5MKKMiLoe7RSVFTCZfz37yTd9yqwATDcJyJ7t1R1TUjtHcBVdb6BvMF3vopCnkmJhXK8RbwmVxJYr3Aug5YJVzMJ",
  "key17": "5JsMySQbg94RvqmVMtLosN42NvnJwMCsU2pRrW6k8XX1AmS4shijAssevZixeLEtApuo7cH4AL4iTbFci9H7Vxx",
  "key18": "2L34mxtQ4xUbCsaczza9w2BvDwZKUwhKDzY1NT6EMxsqiagRnLn8b8gXG3Awot5nhwQHWaGx7Q9sBL2SLCEYK6T3",
  "key19": "oNSttWgxLTD9VrxAfnWheio1dW3DAm4Gqd8puCKh4YNHw4oiymNTkPV97AGagLQQa5AWnPdj6JMrjg58WPR7VmA",
  "key20": "4RTQf3LKmFbrEtyPPpAAhpxcoqhy5GmTFGz1ocJEJJocx5XAeSDmvF3MbfdaTMWt3TsGPhV5ZBuCwVbBSthRAkfH",
  "key21": "2ALdumVM5UYXWvkVoDLZFMunbgJoVc6LrarsapVWJsT8gvrSm6Fgo2E4K13hrdFk2YojHQe6QYoJnTmkwjkW8Dbo",
  "key22": "2wYk1BZhhU3hbPLTgABFBVY2m2ZAC517MkaNzE8nLQGu6ivNqAjJuR4a52pDoupb3zRf8BAwbMmdyhXQ7Um9PEzt",
  "key23": "5CwpnpjLkSy4a7zcpvCbFp46Dt98zDHtpwkLNe6Av77rghaDNtuJZ3s9kL6RjJoBjr7BWBzGMuMh7A6qdJU18A4g",
  "key24": "5NWRpjqi1PbJ3crCfET2uXRZBNdrcMQUdZJtZnPccHup837WRWSpkkdyCTMRRvhNZVxhA3iNagNyKDkV6HF6fFsB",
  "key25": "2eAczV4J92iuTYEQWLLzr8AMLnVK2dT23EXKq89GKnUTBVJQ1iGg6zDuyQNs1LuMjAEoUxz1DtuBEuziK9QD6Zny",
  "key26": "4jwX6QLcjoz61QwPVb5a9vkbjpEwPGYGVwAmdn5GBmmMYwt5ASKwhn57JGghxDzeQEVdmYeVVAX6ZdSMneyjrnd7",
  "key27": "MTQoXMJtyBD7Vi3pePFFgN2yCdXyjy14FSFBtbQHUqfqpP5c2R2zYM8rk9iJcBeQwuAZBbgQQHmnCSLWxnPLs4Y",
  "key28": "e61vta9pGZdZpx4raqVnaC7fSg4TQgCwQqBY8Whu8fdo5azhGroPcwyEv7R8tpapAtrJ5anAYuCjQKxo3tdFxiH",
  "key29": "27nH5nzsoTUvPhbUGjaxrysLCdhgmA16JpjwGZQuaP2tcTsKSQrJaCRFuee4gZvYFhnB64syZ1nK46VSHWxdK41U",
  "key30": "5cKhsZcmZ2GnCnqh5kApHJTG8LYRTBVmE5zK2QGpUHuAyAQMNFwy5h2kSaC2Js2nMKxfdbLmDTVtrNRC6FWsNuKv",
  "key31": "5egscrKWZZoEs2SHDztstodtChE1TCK5mt2VDoS3z5UzWwkwiRHEuDyFDXfDsH3u8x8oiFM2dpCKefJK4SfDS7gD",
  "key32": "5T8S6xTkih2kns6WwVwg5dYJm9dnTqorePKmT4nBzDFN7ANF6ERrvnSTvVtLy81Zk3wruMLygw8ckwQGQbonehXE",
  "key33": "5xAfWN5c6XqtiSoF58QPPhEXTnp1SCSpehJkpPm7MmmdM7vdAsoQZLqWdEgyS7GyeGtKkpjC7hq5zkUKQJet3T4z",
  "key34": "YjhxuDuLP6JUvSMrFbCkiTXaEMbPYNXmvJMRVGk3JrLDGK3Jt2xQeNobXk6nWw1YNzXTDEReRoMcMEnA2AhhP6e",
  "key35": "2zETv5f6DqZ1Jh9vEDPPaEURMBFG4XgW6djQqiR6hrdTRvwvmUk3awGjfM2UVSg54QsxY2jSogUvafyBcZVznxoU",
  "key36": "2oZ9MMXQ2EQhRnJ4rU2RL5WnDqZFj2FsYG7u16LuZx4uDkNaTCv7NeFEbzrcj8RQrKrXjU5BYcD4QgDXmjweX1p9",
  "key37": "24835emrPbCabLxae6g79JFuys8HVwsxr5Gkku3Cxd5vXQuFfDMeWqHibmckiDwkrAW4MVnvM11ikwHyjrsFDJ5K",
  "key38": "55MDQgJbtsZGKhuTAK7z3Gv1QbSj2Mk7rpU4au3gAkJEJQcDJYoSdETFpzFtrJ8hJ1oga8XguzKgiBisCHZchKGu",
  "key39": "3uLpbgnEbtHp3LAV9hegmmDNWWUgvq12b1bDHMqi9gNVNCVETd4Mbteqr5aVyWid1g192P2fcPHtuoGZF5dPQXNa",
  "key40": "HqU8jKwXK5tpDimocvLJQ6NGVRt4br6MQVVCV69sARZuNaqUvaNGPEEEUuSUJDjqfgUK5vd1b93S8cbKmULvjn9",
  "key41": "5ugNTTGuHKRWbZgAJZeV8VdhvcToZqKJEfCm6WLAVKXRyXN8MQbUvX5kpr9JXsQVi8oxe8orh81BYwnggBq3GnD8",
  "key42": "3Ganm7jD6XfpqrXXVTDeR65dQ3E4guecBhsKwXB8t9wVHyRwgWdrR6fpQvA8HWyw9tRL78Pce6UW3qxwA9iyj6Wa",
  "key43": "4uD6t9ignGue1ntECv23eDmm6vVwQ6PUfJcQb4xF88KCKSCUfVrquv6iQrEFb3kF2hT9wfNTLZ1gRFzm6WwMvkgN"
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
