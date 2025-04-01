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
    "4E3nxM2PGWcTRgwBuG9PMPQsDJmBCLYgSaX56NsnCRJMqu72BmVysDr6N6MV4CcXovchuAXa4ogqAkDQZNmTetPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xYoYxB2W9aELotYC5LmxEHXvMtWDxn71vwYMbR849oiVMKxqXoxRAJKGCZA2AVsWCZNZmjG2VG5DzoeCeRi2cLV",
  "key1": "3DVkWbDUECuFcStiUtk72DkeiPCLByYz8f8JUbrzuqiBdHhdZnKYwP9gtGHiJrWRqijZTebbSJn51LsVYrZfMmCT",
  "key2": "2WNrcPvkrCe7gi6Zxz3GjUUdUSwyTcn32BwYn8LWSsrqqNyX5vkJ4dMxCY16n4PQtQLjCWn3HG5RPgVs7s9Aw9fp",
  "key3": "zR7NYwMEcmW4V9CxQXCVqCVJwdayBd9PUKbFvYzrukmL9YSJS47LAjACr3GSkVqKmnY3oMEaRT8g1njuZ7pWHqu",
  "key4": "2S8BszjLArpiXrhxSc5nU36EF1pVpFGhykMuwTaGGBGMTBqVLFazG98MPvoJAi3eBS6NBokCMCLvFKWKAEzoEeTE",
  "key5": "4pdnzxZ3MXjU3xqcUXoDUFegCoaoUZFm4ffkxd2MbbvQ3DQR1XcSkT3Y5qV2yzxAtqFUxcdJCRTGaC38Z8GSbpKs",
  "key6": "4DVdgxw7hSKJWmDesrFbfrWwnPM9adauXn1E3Y3nZHasnfBsgJWTwSLZ1NFzVR7nffGRgtWxV3T2U1woxzx7psYC",
  "key7": "66A1zw6cG3GvHTLQhRV6eJvzvDpKHUwEmyh9sse4D1vEzeL1ttobggqXazrFupqUGJG6bcRaaH74GeoXeDrNpoha",
  "key8": "3d8uE5borLiaiubZkdopZ5ZQkqCRQMrFm66nYfCMpGfbbgys1CswEsXpQcQe194Z9UfwBoWAEgA2f2xGjKkMHWDw",
  "key9": "2TT9QPyq9N6hdac6iYyZEbZHKzYUVxupFp9VeqmA1XMLHTRzunh915yWbJuTmusnE5eBqc6R8Fe3pL3Gtmr3myXN",
  "key10": "Endf7EWfSJraCAeZ2HQzGuZ8Dn9TogEEhfJimCkYvGKbncd37CuhXCaLTxBC1diqvC36pAdL4MVC9WUjZab5ZZ6",
  "key11": "5kbhbNqtLeTPk5jBWRD17SYcEdCMysg86dcCbdTeaD7DW44i6qVS3bb9PLZF7fuWHQgBiZvYAaXUGBKUxtgYcBH5",
  "key12": "4nyYReqdj4pKLqim1dSMkGX7jhACp4czG4nZpk6QFx3sSfVD9xuqWjHNjLL3q5B2mtca7235RehAqZpxoyGnKKAD",
  "key13": "2CBJYtvYQxRffoBckYGXnMrXsTQcRW7xJuso19Xs9i6Wwm1wYBHbhHi5iYjoitdNgrp8FcTVGDPtUS7wxVXvRuMx",
  "key14": "2G4Hg17iYViKmfRhX63iQxh8MoPzhGF9ZmDXnZYNZdrTeJqZZKzFEccYHmTFWCEk29MuCWtd345DHxabWxE9CwkU",
  "key15": "27Pjv5VJX1L1HhSy7SvwLwSZsDNAVVbN4Xh8uZpMimcTUN6hSEg3RpE3CsuEVqGFSUwAKvqjw1DRoyC17VgTVPtN",
  "key16": "4EiraWYHh9JdUEQQhudjLByVGSM8WE4iFDtQyjYkE1gEnBqy1fPmbwNt72J28Lb3YSbUsrahaQRmWxpFDmc6PwjU",
  "key17": "2ePu9Med8CBzd4wvBgRY9NSpAe9tUkvsGU58gi8W7q7TuT76YhuLFV1mXf9mrTnKEVURBaQ6kFbktdYYVpSrjc8y",
  "key18": "2ffEZititBpZDqCo8Zhg7hnCXMABj45mhDxsVW7ohzXwKQYFvSe47j5Bq27v9qBbdW3ET5YCmUL8T7cPn7PQbx15",
  "key19": "v9DoBEL9UdcP27C2rqQDbiW532fqskw2VqotNboJCyqVAuEDn2yhtJxSn75HrgAtC2gy6SdVGkezWV1p1w6ovy8",
  "key20": "34z28RBmBGHHrfuAN1rVcqKGomCisgZb8yvyEQmUAjBhUGsVRzV362FFSBzaQKgA6qJSQtpcJYCvr5VJHMr4ETo4",
  "key21": "4VhPSQV8Lr6Ju47pYynvT4LXckLmvBc7iRudWDV6toUK2N6eMLWk4fbyetMjz9sV7zx1gMFWtDTzp1Y5EEkTvXWH",
  "key22": "67LukRoiJscN2ms9Vx6PfKUh27EyneLhfF5VTiTo2LF51zer97Wxa9fpVh9HTjbMb5Nx6XvENwasrixHftxo8Abx",
  "key23": "34QHrr61UNTEvBccrtdfSH5MZdEymxyMdTnB32ZtgNmVbGMQ74c7rJ3iutgNtbhaidNPbWEjuHXKCbtrv5XKQcvV",
  "key24": "dApCfwaP4Ue3rx356EwJDrWEhcqNcdWKFR422gXbL6zkeqyJEV2yDT2voNBeJiZTpj2UceEMssEZMWfvvuP38Q7",
  "key25": "4mAutZ4gDUpSKKD83az53XRYJjFyS5dz9KHoBJM3cFcTQ1kxuHsv4q8QmaaEVy8PtjsjjGmRixnUeri9r4dsdK6",
  "key26": "3t8WjkHviugMhQ4v2M1eeLsT9XSk2oHVP7RNaNBn6nkP34eZDcQpEeUWnyRv8NKoKDbemyhja9RAw8qmDTCEKs5A",
  "key27": "2oXNtqq8BQHEnaWcvJJNpUMBRR2KWz1snpKXBUBz7pkkqJ31gYq9WXVewqLi69ERYvNEjDdUcMma46soSc5We6Vn",
  "key28": "54TNAMRodt2yuSGNAwuAviQPrdqZuB9r1Cs74spox5a4m5vSY4dS7io64Zm1QpMjHeR1bLgPNUMr6M22Z73UPSez"
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
