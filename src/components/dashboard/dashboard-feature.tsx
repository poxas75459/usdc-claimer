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
    "3HftxaQ3dk9HEUx8PvepvtVY3QijDgdc9TRaFJ8HWwmLH543ShQp8y9Rfno2pQHGR6Ly1vnR7q3Cu49VnvA2x2bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AqBW7cK6LPCzq2Aegk3RLYw66F8Um8Wo1bwTRFRd5CoPJXgKbUh9jGPb3c94NM96XnZcVBmSpsVUumdDKJqmwoB",
  "key1": "3nsWxJCPjtkF6HhyD16atmGWcfCQaPuJnLE7UwP2FYBmESiMamaNimxLX6PTN1XTu5dyCJQpXVCAN9dc7p4ejc5J",
  "key2": "4LNwh2RXsweJiN9be8MDP81myPiLtLNug9Nvecw6hR4E3kGfnyKYcB1k6Uqz5RuSd8uCnqAv7CYJjbXKBHfBESjr",
  "key3": "4E3oTmGhwvV8KPR4UYNLCku5porobHESTXe4FdNfq1iN97tVwJqbp1eRXZgyjso5mne61aDDLxSm8qx9iR4W76ig",
  "key4": "4MtC6Lpw9kyRMptHsCwhpPU3ikC6zMtBJ6Mr2D7Ui4eWaUAEnBnWLDE4trpJJLiGG358M2JfZZpZkkj46hoXc2yr",
  "key5": "4xasLhPrYcCQa9cXtWL9Gq7HPgEnTn47NV7ziPqhjvSTT3SitCtcYWzwFMo27AVqC5ERWCDy98ta7jtNMHdPzQ23",
  "key6": "2fWJdQPetNNVCuX57zqezGtLPnw14Zu5e7PkQAr8UKFN7C3UGuNH2wjPY5dnkYo3Gbcf2JsgW11eMbmqLijMHpH2",
  "key7": "3M9XtAiGgYt3bRmer7QhCgYX3nvj4HnNrd8NZJxyva8sXj8HmvpuPJuQzzV2d6qNaHTPjrket9WCg6dDGZgyzo6W",
  "key8": "EwmNsiFQgpFyNbvoKbmdnUt66Z4yUFNWi4bT2D8f4ebSmbysAjLGaiJmHiDko7TwGrZo7NMg4zRsahYcJ7FYZF9",
  "key9": "5aWUvLxzvBMirnJNPjTKSuiue4sCWaEz3DsNasPFqDAz1kJn8CcN7KBhsMspVHQuRbMSyGFPwzqqpxePxGGcnAhh",
  "key10": "XP1QqpHBqgE7fq5HoJtSHKHTrQS44eJsU8Bkr55p8rDnzyUePhpioUCUT3AtSJURktzzjLLE7mjh5c5UXnPrYgj",
  "key11": "3efSSN77cLiqWzU8qfjSGHwwPc3NZz2Ua9G1UN3LCCEdqiBtBZToYn3nMFKMiTWAxGZkm8hVwnE1LM36qPvcqw3x",
  "key12": "41dtmtUBqwTZ8e7rx53nKFYC8pSWrPrMbqzDhz25M9YMZuMo6J3gkVW2XMEvAA6EcdE2D84fb3W4v3UqPC93qRaf",
  "key13": "27HAN4MCuX2DsjakTtpHZQvohrHLQzMoCHLQ4WKeSQhLFXZ3drC43YhbtCPXnBYqxMcwavrz2At5Te7gd6cbymNk",
  "key14": "2sNvXLij3r9TXqgRmS1QKSUxWhymZCRx4GeVTbCCs5ZqTFutJRTko98FRAw4SjD69Cob6QYs5TJwM7Goij9QubDr",
  "key15": "3VvH1tZCxm98aruxWNjGdYApEKXjTwvP7hm62tE94wWxZvudsfvCzfDpNPf1kHhoDDKDJpc3kwnp828VtXcE1v5F",
  "key16": "4YdcBdghnKbdUqLuAXopAwSd5CPPgPeCy2P5tBvCziayuJsXigEUSqQvV5boiCTAHmdmAm1ozidgUN3DcLp78fxc",
  "key17": "GSLXMdryAPjkJZZ9qscrE8TJgdVmJrfgygAyE4DRkvSJuFXXe9wsnaSNfMxGE1pr5iLT9v611BFMmt6BeQh4muZ",
  "key18": "2daWCy5Rxh9iotABN3zbhd5h4fym97TufxeLqYuTY5NVJPkpELHgwUL8q73dgZoXTgP9TEg9yZsujYZQSfep8HAB",
  "key19": "59hqWFqrMutUvtipKGjjasUYkexZGv7UmuBxR8Yp8KGXAZnjLweKHg9xApg7yVq3WmfALbZnBzrK7Maj6vAPyrx6",
  "key20": "4hKAsSzrSANZnp2cgN8MFp8QQkjyJ8zB1JAjrXa8JJ9ERMkYtfKgeHEfzUozBGELMPCrXZV63fBN748v6icyXNnL",
  "key21": "4j8Pxvv5xbHMxivtUsH8FKQeR7GUd6uiYW24jeXjvf369AwqNGAAMh6CAp2kpUuGd7GPYtFFYL98LnXhxteDuz9E",
  "key22": "3h2fQZioZQvXxXqE47Ei9KJncJuacnSBJ3gyPn4MshHKsCSHCS2K4EJfS86XmWF9FSXyxHE2vRGAm7UbZYrcYob9",
  "key23": "4PJPvQPreg9yVNQFB2TXMFysc79A1EmDRGjhAs8uQo7ttQ51bayA6QC1ENvXnF5yH1ZHRUto3iJEkqQz9L84MwkG",
  "key24": "2HzTqggf6ExyMEoiijrMvqEctJXL6FzuPrKKozfeNyUxGc2V4g2H4rNqZKCc7iBw7UE66pJ6WmGhrT1S4BHRM6GR",
  "key25": "56CpF2h4DaQESS4myQL2D4KVSU9mSWHrYnBrWNPvWkuPyJ4TQTmYcAGaDMeHFbvSPx3vYehriSTUPJQycDpfmGfz",
  "key26": "9nAecmrZEXXv5gp4zD7E2biZJz2b3K3bKECC8ifZdXoneq6LdtS1J1Ki7wbajGzP9oMmYB1BSDAY5atkE6S1S6S",
  "key27": "5mHFnHJY9G3xJA2uiMrpYngrhnNoYU1uNrGhNQP6KMUGPkrdqmmZ9G3gsHZ6fjU33aGuedfRvdJ1g2Gtcm2HvvSU",
  "key28": "3VD51HJu8T9XdHXazJLWqygD5oz5fmfnX7X8dF1sECzcyV5Mkegnq8jXX6WRbndCCTSGFm2f3oDhMuLidWJkYkun"
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
