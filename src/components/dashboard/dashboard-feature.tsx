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
    "zJ5DZiW3J3K87G9ZgbyA6BPwdBmKVkfV4C8wYBtNpULZcBc9EGdwJzYEuzXdkC5Khks8pj7EjfFFhj1Z31dAurd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r53yuHT9xDfBPuHhqrMxR8iM2e7Ws8YvdXxvSB1bzBAvi1341YGGsDinw1UqMkhzA895Y4ufCYereTw64e1n6fN",
  "key1": "4aPHVdtNtK8JdQd5AoQdLo2JifM7qLMBz4fsPEgrdguEfg7AZQr6J9xLRTHJzNDomhuftVt6wNkH9Mex18GwJRS3",
  "key2": "2Rc7drmXWDkEvWPRz8KLEoHhmLdQYfghRBFXRf9Uj9CNQTbh23ZdkQd5dm8Sr4q4qhQLuACiZGgH4p5myvuV4wb6",
  "key3": "5A3Ay1hiovBP2k4fDPFjrAuAJXLgigfBvzFMBFbnKb6B5gGnaSdt3eVqHJX6kdKqCJ8vc6Y6KxfKBcmnjGhqSJiX",
  "key4": "whaVaG5hk84yKwQJBcodAQTqyMuz2zSboD7stsZTvwFKYremRQFRqnztfm4cUt4GJnogeqJ3jZ31tG4B9YtX4Av",
  "key5": "4ZeFburAdjQg4Ez12heQid9vdLX9WNjZnCvBigtSRXPmNQ7CvzETrzZvvwcUUBAgdWKNh3tY5dPRsMzRjAECZbq8",
  "key6": "5oKsUFqLXRtN2fgmMYpKGJevi7StZ6GPqntt884cZMoSSmnkuFW6A2S4FM1vVf5sQ1CgLphw3X8syXpHNvaQPNGn",
  "key7": "5G7C6HKVKV3gJhSKjw2PpKYWZYGEPuGsTnSPn1iLzHQXCQ7vNFzeyzGsFFGmvLfzQkTqMo87kChQpPs3ni4QwjSd",
  "key8": "5QmQ4rz5axXJepiJpzh4fDzCB9DhJnehGcUxWoWPbgRa2vAZGzHPksxQMLbVhoYL2apGtYXqAnXCti8nVJDT7q9F",
  "key9": "2uUWMaxWJtZCMUf6Dhed1pzdXzqhstmdnYkDHUKvSW8cb7bXTBzQPeaoxZSTSJoMYvkrb8eJhiSCtqQSbaQAu4ZF",
  "key10": "5gSafhVqsDAgSJP5ySDxLg5VEaKqDbQV7mhZFs39njfXHdBcbtnMKxfXjNp1mSwMGHnQy5e4QRqGb1zrRyaiHsrw",
  "key11": "38SjjdizS8bLrNiy9KhyVfy4pGfS8QGWD38KT2ko4qK5AiEBazegqg4LYqbkc9ADSfvp7VtcLHxGgVCgEWUUCMyi",
  "key12": "5nvjhTCiLM5Mmw4Gs1jbKLuK7jPVrb7u4n3LkAzK6icf9V3YT8C5sqAxeQyK811LhuTL1ug5aSAtqWYamETL85Sd",
  "key13": "qsBvuTEDHB3bxA6G5iR5rkcRqU8YmajMgB2QzttTunA5p9vEsLa9eRCTq3Ha8BtHFczhyQUoV8LHzfYY84P6f8f",
  "key14": "45ncwpBEiVczmCJLiDc2ibaJqNUyGAfcA3ptRxQg6ruBGK4HXbKZC5isbx37E4s7kghdqLVcmuUhpBBN8FJ9LXn7",
  "key15": "3J87jhYo81yAyokbgaQ7MqXNcGan8LUfiQmQURDLhjcRoRLthHJpzUZNgx7enP25y9xWH9DG2QGak1XLavZNsZsC",
  "key16": "3vYyUGHyWkkfE2dtH4er4TQ75cnoBtwQe5M7v7Fgcy2L8anQ6myKSQwTPXNj4MpjPw2mAheMKjfKpQnj7imogaxq",
  "key17": "ESunZ8wYXupcJ5UwNAffdKHZBi4sx2RxzMF9L3iXoaCzgDf5aQwGEYmibRZjJhy5USdn2hutoX6HoZePcUCH7iv",
  "key18": "63g4ZGjsQ41eeX13wuD78v5ovb1cvi85TvSqGk9rf9gGfq4kKLpFHezgUmQTuRT4BAXvBMBWNBCK84jbRcufwQAW",
  "key19": "3ryboQZuAG1xUcZAAze5Kexx7go6MicTLHvDK4nysVzCN8umuzQ74M58dxZv3JNkvhi6vAAvqJm9PkQPvFsUpMfk",
  "key20": "3hs47M9nW2f5xEAhnbpRNyFBgGgpzAbrwfMCi9ncB15H3rKtyuXxsDjaHfeFhcWcma8jxYL73ZpoGyneW95aGJc6",
  "key21": "2tAxbryEcRA4RNVtNZLCjDkpMd7f7syDvMeGvYnjCThDrEUaB7AE9KgJQhYtGT9mvRaCx4X3X85S9E5FnNooQ72e",
  "key22": "5pTihzRMWxDGWosztxAuCCoPhG8BGAfvN8Dsov5pCeGD2Nz6xUti6MfLF45AgiQ33kGFW9QfiVzoUj46bMNUYg3S",
  "key23": "eM19PjsvNdvxqGx4viG6rt1wdfXACJanVgj7bMbrJkSSxbnT5gg8NMZEzRW2pDrDYeohbPWHdC6CgUhKEDwu5ad",
  "key24": "7mDjDtZWc6SZT4AXizsyAt4rvhRMNBeHhjRKvNC2ubbsGBeHW8bRHhszPdWGcRmozJScWJNEaDJjQVfPiBfFSZk",
  "key25": "3gUvuRQ3pC9BiCoNYMx1SgViKrwwyTCez4qE2ruUenFD6m5SuVY8paCktcid3q1t8hsokhsPTL75xvBy85PifpMX",
  "key26": "Ngks1TxGP9VVFtmgik1EQ7geeesVV53745xruVD7M6KXaXoKz6FURTXYPWZTpp888ME76SHWUTFE8iFfNSrxFbT",
  "key27": "5AL8QVcE3joFqvNFABtpXXwHjvu3Ta311JmQkfNPXiRLojJ8udeKD59iu9GN1cY72SwvJPrbq4m9yfw6yHc4F62V",
  "key28": "5oV5M3sYDJcDVP7PtytGrmPHwT2dp5qPzifae4WjnqJjZ6TnqphfzymWkVpvhRP4GNtam1o89ynaytffiBnXbJPJ"
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
