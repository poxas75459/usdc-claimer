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
    "25RDoJ3UZBm8DhMSgiW4dd6wdQwgHaPhnDvvJDt6MsfrzYNvR7YcgmY63kWbZPZ4FQ1kG8VRSFK78RR2Pudqvv7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZDW3qabfhweTBGVRUZHa7ui9sgd5jL8eNDGcH5iqRjLs9HaL6Gv5UL45FG54iib4WyksKATqSY9Hv93qm4Uj2e",
  "key1": "3MrsFwumLmfNgBQunCjPtmTJ5FJXScUJbpTFy83wkewMRy4U5DyhL8Nw9XvEyFh9v2KdCTqvnY7DRnTifqJWJVCg",
  "key2": "FX6Js1fL22j7Ytev16XB6HeuYNzC47t2ivwfSpGMBJ8otrjmSDg9BhDPVpQG2uFTMvfQytsS7iKFrAjQHXfstfN",
  "key3": "Jg9mF9XVNW9ZgiQHkxDEYHyERnGcsVENjtMhyP2FoU8sB5N47Lv2GXoQkQ5WjL5FnnUWcCwNrxejpM2wgvCvVfZ",
  "key4": "ZRTUMfBehsKDKyY3XTSmxWqd6rKLsxMHFAn4U4aByF3EF3LBCWwvzTwzdYe2NjtLT26Cf7wh6bCzVwhzM8mijb3",
  "key5": "41hMRbRqNiM4Brw8D9pJV8FVdq53JxEFH8XS3W4nhrXFjNv6rKFM4p79FxGz9inXVYxjGJtwYE1cQyY38ynpSbHk",
  "key6": "3qSo7PEMQRCHREKZi43iTy7wGJWPVkLYKYoEoSVDc4R4eYDDRnrDe6GB24vPoFZYAQcsFLD1LrmBsCev1zEMBnuz",
  "key7": "yMTooW8xXmGPNYSnVhqWk5CNdyYvTmV9Lj1K49vjJ9SoZxywzUSMavrEA4BnmNtnQ83jp3RuoqQQCcBQe7Cs9Bk",
  "key8": "2buGXG3QLqa3CyUkK5gzg8W9GV6Sph4b4UHtuXYHq6VrMybxdcikKHc2HQsnthVf8dSUnK1Ck1vLUhjiHHXBh6vh",
  "key9": "4NensGwXnCEJ5tHD6SirrTg4NpqK84Ynpk38kom8pGNUajHkYqZuEZefy2FVWQtR6EeHr7gzk8yQr37rQ3J6fB6g",
  "key10": "5qQ662aPbzWB3hHBFQ6tS3n5T36SdbCivnHiuSZDxzf9pwVTDZug1orBsCPPq2UBbRFvPjVmJMzUDoaBSG2igc47",
  "key11": "2oJAEpiuogaR5zcvDCeCCWugqnx4TiXR1HrX14iwpLfhcywoKad8yD414xK6UZBLsjDPbw1VESuDA2Srk7ai8CH6",
  "key12": "2eBmhvkGPRw8yg9XpnRPVgjC87x2Y8J2najstuB4sC4r5QLMUjiYKuF3wDDS7uVdGN2AFccLCgrzSnZXtrDWeyGZ",
  "key13": "5iU16MA6nvJr2SqNbS9nPSmeg5jWRHvC98Hz1Qt9f9cwzoFVWxB9wFsfg26jwCafJLtzttYGNg5GA9tV2jkgVCW",
  "key14": "ScNNbS9nH3xKfBrtih8dcfSczTr4bcp1tkcCLR5xXv1SiQKujnJATvj5W64Fv8K6XN4v5oo1RXnQK4knd9MVaGY",
  "key15": "4NmkuVFHf9vUubH45MYFagjdsiCFCaw34ekPzTNLd55Evn7R5ZCyzHDJ8PJ2RytSwXtEWwpRTzggWXD9naLzs9qx",
  "key16": "c3G4xftRhraz7qs6SzngL1waweL4oJ9huxVK13Js6iSbz1womdSfqYqzYN6NYwzDNqASSsPCGZWmykVWopoEGGd",
  "key17": "7g9zyaN47FUS4hSoc3hz2z4Qua9SwyukrJoJP1aY1WgsuwyWZrFzimgDb1qjqCKQM21VShwVsrXDjkjrpRqzEPz",
  "key18": "En4wn96iEgsTegNBxFKNgJysQpKsadBvC2QmWTnofeRDohXgFuKDA1fHuh6SYP8HyvzeDcJBxBfiZGQy77F6CS6",
  "key19": "5aLQ2b5o1v4v2FRBu9UwLxoF5aJBqr2NMRTNc7gmUkY3W34g7FsD9936XoCXDQRxcX74P3g1sfg8YRGYFaDAiCQ3",
  "key20": "25B7f3rZaEzyJToFqfURvvBhTNyRFb2YeVekm7hBiWFcm82tPn6i6KvPyoiNUHfV1qz6x5ASYwkm983B77zaEex2",
  "key21": "38YuEhjQxuohy1yjooY9EeScks3btVx1hAnYdywD8u2Jah9YDRd4B8u2ehcAVViCyTzB85epsfy2bhAzf6KKohCX",
  "key22": "3kAuyLoaM6cZB7WBTSq2m8yWwrFE3pXUfjmzWxyggeFASGSB8YTrnhWV7N2EykAZMnhz7XRedjvJqVookn6NSq7T",
  "key23": "2S1d8SXrKj5Ndu2RNDffWtVhMn8qkVYDbKBHmmXfwZAHUjsyFeThQQYeb36PWDSpzDcWPfWNRjnnBVbHhh25wNwZ",
  "key24": "aahAL337D8WnYJvYjaUPiFgooEbxDveLUeymHUqnyagzfqjY9Mv59sm8zgep7BS91gQw5aQ54MTDv79FQXpNUba",
  "key25": "3Uizk3ijKctjLqHTotX5CK4Tb9eRkmKKyb8prRMjBexxJhhW6ji6iivDRRvwFxDM1xKEvRftBVejhVoF4T6wpj5o",
  "key26": "3b1YEoGparJEwdNuEE3THJE1UZLpHmAueRHznxhNSZJh3kCSuRM1tz5UqypqRAHZ58kUTLKtQN69jwTHChKfyjeH",
  "key27": "3MoT1y2LSRfhL55uJHGXQXyqgwk38MgoYXPPiaZY4EdppatPFnwPZMY9e9wL3SuYqHR2t7o9tUoLCUeuBVJWw7VB",
  "key28": "63ZYJFfphz8sAxM5dn2Qi884kAYx821da2pQAM3TYTw6q5FgAkHTNRBviQtzeQQBXi93GeBeJ7qtQhMPNP7DtqkZ",
  "key29": "4wjqtJaFqqkwYb5i7Q5m7rCGVjkBKWV5wQPfMbdnfKiA1ZiS1R75cS13rXVZUFDE57tVKeqEQVdwVhqwEmiz1kVZ",
  "key30": "og8Z534xDQLfMFdDuUqtT45vz8uMVSMesNBudR6vLcH8FFbFqcRkb5FsM11ahxWW5XqnMpz3ueVRt9BUUerW7x1",
  "key31": "5RGWF9BC8RtzcRtPuXuGstYDKG6VR2hZ8ytqi2XddWrY9Ev7Sv55hCniVDc8tmQzC4hWNp9VU3t1CtYB3eYDLjPB"
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
