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
    "4Fgt4hiUfdKfrMqGH8RcX7zeqTqtX8jnKHVPPAQc5zVCUe4FCLHgzgrbxp2NckNZnmJSyTVWWbV9Wt6Xn6d1km5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ovyh98Zfv9WTe7BBRejg8B8KBu61eH5sEKQXJPqG5ZMtcXySjgXeoS882yRx4yHo5Bx9hGS21Mst89s1rDCTRMT",
  "key1": "5sJUSv3Eg9ispRYxBBfyzYwg72dPiLH1GVb3G8Li8tF75hTprpouGUHREwzVhmg4Cj55nHei7DAURVCmAnBDD5st",
  "key2": "4sq4RA9Pu5eBvb9tLn2vcH6L7yppFq16XAqK2njZZUhJQSHbu8bbGsLcXddFsBxJF14X9pHo5puDr2bcXzNt8QB6",
  "key3": "3zQ7CKyUyjnoQ72PfoNMth2hQ8pkCMdMFu9i2x1ZSDMFTGkg5S7q1PTZij8bRt5W5kbmsu8YHZdenmkxCJ2EmzV2",
  "key4": "5DeNYzcYAbvDy9ZekcuRMnJqesYNdtPYdxeZVQnrrVaS7bQRTECtrdxVawTnUdRK97TijHmbL8gHZ56eaErxnYGV",
  "key5": "3m3Xwb3Ybthjht44jQMqkw7iwW8J2kR64vS42GpJF9hvZDuKngziJu6KTCzLmXt5pkTuhtCCMZxcznWDRKQkVSri",
  "key6": "3DQDkkPE6zM9QCZKfd7qyB3gHUCyvbeL9iAUqKPaj9ajjRDCBEjRCKPcQExUdzmtVvvXNVyMg4atSwq1bGHaoj2W",
  "key7": "51T1KJXsDwFXRPXqr68NpKRRcZX39RNzk784xpNfztq1S7LQYMCFeA48qEbqb8DRoWYf19aRV4k6LEzQxkrzq5vU",
  "key8": "6aFhaAwvB6cMqPBRb14W44f59sgbSte9LLEuxC3tYjYcUaRhddk3dnbCCW3zLo7AEWDcEVGZy8Hzfv5EWwPgEhW",
  "key9": "3fHeQcZyEvBkGXxvk7x5LJKhSk6wa6strPdZ5JCjvprfPjsbbWwwTzgJnpRX6np9jbCpPtwV7GQ4r5i56UFXYieV",
  "key10": "56c4UPmYWXWkw1urW1w44mDGZ7fWy1rC7zGaNDFcTJFieTDAztBLzTQcadjAzuMmYHfEbQrFH4Qn1Nv4asq842wi",
  "key11": "5WRHxXkmNh3oE1ddA1JTdF8eEWV4PTnhnvQnimrzcuDm1hE7Y2gNqkAqH9Xo3oVC5ADNcMZhDjNEWF1kVKv7FGca",
  "key12": "3QJTzaczzTqLfLtMh8yX1amDXEN8HxXswVCtoHXvC6b56yHCPyZLVH9FdEhWY1XNcuH1ZPDj52pmPdVXy292qDXN",
  "key13": "2879SuY6dV7QXEWKUkhsSrnosL7F9eZVeJ9N755mqQRFKGLVYzTAf1zU8X18C4zQC2ZStcCRnZDpyqjAVK3mNTjp",
  "key14": "5zbeYWcHmDRQhZQDbtZiFWFihHC8mdpyJzN5JoX4yENbAB1VZ394bTVNMvsNLt1pnUdLsjTweJ4AfbbtKwpQwc1K",
  "key15": "4PPYf7RtgYmimffdhZaWuk6qSZYW6Y9ixipetrnaXqCT8AS4aa8tzMpFReap6dgDrBRDj5iacm8oBxEU6foMp3GD",
  "key16": "xQ44AL7V7EaGEhXFJJib3AW6b1wcATHitS5H5vPUcEBB3Qk4spcR42n6hFmsu8g1efjUyeiRhnXUakTgqcThg12",
  "key17": "54g4GbXYaZHYX1aN7EFhMudiBezVUm3GrHHc5PHZuaVoSa9cgLvg8q8m21P9rw9sGAYdqrSW5VbN2yciCcuoszFw",
  "key18": "3xFHPW3Vq1oFBLViGoHCUjaetqHDH8eCyV98QuN6CvwUunz9UZjvWu2SggP2CKdKuzUH4SAdiNUuvZWCSLybEwAG",
  "key19": "5DneWG2qqoKmWJY6mLiGZPG9vrYtkBBAFT3tPpfCXyQvy4okdhjUJafc4P94FXJYJvyFUfa2UygdZcv6xiysiCxS",
  "key20": "3pcAPsXy6W4C4b5U7wrUMNSSJC6zhrx1MvHU5xCMgodUx3S87V3Szr3bgh4fRsT5texwB9hU9fDuWBKwNHYDh2kS",
  "key21": "Eqxvs3dF5np5rPBUATufVkp6sat81j6RazhXXd3UzLjFiremWUqf6bZGTuB53nQPnS9vS7u65HGEGVLVbS1Z3KZ",
  "key22": "66fzQXo7dZGS7mfgJTiTfzLCPfeJB3XwY6VRspAeg8nbqPoVECRuFpojR4mEzvAeExHh73XTeYsDFfEo9TMYLNqG",
  "key23": "46MnKJjDd3u3NzLRASTpzPghC8PsSifiusgZQFZVeoMmgwpzBXqDSvFjtU5VQnvvwbk43Mipc9HdjqsKN6DamaJF",
  "key24": "W2TQ2TrQKLW1WKaQe9LWTDCposnUN1xHsKuu3N1cz3Pn3dEwAZT1VWnb2RisYuPVaSXaXangBZ9V1AFqNWzjxvD",
  "key25": "3CBfhdbnrGBSnPbspMoARKBW8NXK4DPhMuXVL2Ace6v2WQNraXgk4dt2ydsdmYiPeTiaAZ9LHxM9x2QZjUwPkbCC",
  "key26": "4Xdt5fjqYqfei9cC41RFW778Q8aB5pWEutePELPRDJDJeMYAkaWHp5NpBv6qdoibdWhPKSw8HfZSnUKtZVh4ubEk",
  "key27": "3G9T1nPkse7YNcF8dcpNbxBwfPpHCcmXoiUEboM2wA4RotjmwXcmaesC5PiyiBDGdhSZCGD5cpJNno27cgeUvmpx",
  "key28": "3AquiGfuqyZTm2gxYw1cVs3cDXD9f18XG8fAkZpDzMnA9MwtsmhSJ26UHJ1bJGQYZ1NjKz8fe7nnddeqfj9aYUZp",
  "key29": "4Hm7W8ZqHfSAgZvuEFLaL2A1PP1VAVBzXBcQRdSTPQGE4GbaTbC1KLvXtAxsCsFade2f9qZX6tdopjsTeN1cn7kv",
  "key30": "4vqRz4zrqcwMnmxxZfVp4PoDQBAEDQhMu9VZqduSvnpnHZYNz7ugAieejfNCza6uSdos47HM4Ccsv7GMa6XfY2ov",
  "key31": "3WvAz9EayboKLjRHrmB1cypwMDaWUJWqcV5FtQnn9kGfaGvpZxw1PCvx1rE8EXwHseH8SZ76wY8UCE7DvUm8RCi6",
  "key32": "5xx2P7DSuhgN6qM7AAUbJkgUCdGQaz3SJwi7QFEyqjgEvtiWGw8Q3JtEgjMNXggUfoPJ4FrRF1emBMALwGUaC8tA",
  "key33": "cnY6KEwYo7KnkWK32nznqp2KzUfGFxSXi2CY7trCZYpshrGUwdVrU3fNHT2YVhbWy6ZyQZrB2mTD5QdBYFmndPw",
  "key34": "3PgifvcAF7mfMYWV3ZojfswBnyZQh2RhztR4u8u5i1n7iqMRuBLgT3JqsZR6DmEiyydPFUjZR6CLFUSei7gxvv7z",
  "key35": "AbuZGgJtAhLdCoHBqP2Lg6uVDgqP7Tk1fyoHgF7tphTDnSdGQibPhgDMv2WFL1VTioTqN56e12noRK2v5wxrPsB",
  "key36": "4iwhTrgDhbrMT7Uhj69SCsAJihr73zpY1toD9ZabKgn84TNQwiyP53HvGJSJDNcZtEoiAUkpb9P7K2A9qNc68vhk",
  "key37": "36CRqoizZ7XuMetAQJfPFu3w3KbLjH8fkMtkVRGyqwLAhFWAdhgf1A6s3kSJpiSpfUD5jqLLjtvXRFSjWjhirLZf",
  "key38": "3HLrsFjxoZBkYRRDTWdDwJrUvvfS9nArXenKsZ4Avj8ARYyAMKRL7Wpf7N7AWFXhji2mSoCSQPJCkq6sGdT4t7Ad",
  "key39": "5ddzPCmedtJNdv6VsHVmo5iUDk7B3k7mgnULf1kxKEXbKak74SDUBMqFxNQ56YVSQcKtsEt4rNyCc7QEK1ny7k8a",
  "key40": "4WWR99cHjd9RqJbPXZxFPVaKd4aSaneSEe44GhVUn32LfYnB3uxmcd2amxhqyd77p164dWjHidZ2FnxhVRidJ94h",
  "key41": "4ZAQtExsDgqZJu9GbATr1dqzKB86qawDYZbEH6r5YHWLcGk7PsMm89GyaU9EDB5vqUBk2m7YWrrwsoM9W4sw672o",
  "key42": "4oherncTgRozXPLG9z28LUbLHsRqbEiKZnETV8bx2mWGn7cZ4cEDfx6qrcoW1fU6VZdNkNMnUdabXWHGpjd55RpX"
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
