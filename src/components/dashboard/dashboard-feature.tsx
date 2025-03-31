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
    "39eF6FEyYz67p3ESnGcASKJFwAAwv2LStLXmDDnHxM8FMSMgztMbdGwYt6saA5GSB7MvFaYJ1Su1EeJnWh9QjaPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TCiPEkiUBMVQZ2eBxxKnVVhLD5HbDnJTMMgd1VfY81XUUJZY3jdtuVhQpSzg2oirqyrDEfHP28mnVbjcdqCpHf3",
  "key1": "5d8zk47nzB2EHq8uF9MeGndvMQBuaqcN2Pp9s1SUGcqgohE81ZA57MvajVjHmEWgNXdL4rSEJZcJLqGAZJwa2717",
  "key2": "38TRuETkxbVNbjBrujXbsxRowMDutc9JBu73MfrUU93k934TKfjuJANvhC6u1NDVPmdcRZ1LkBuruJ3LS4bS6G7T",
  "key3": "332KNN12aPN3zrjhqY4jZcz7F8inBdcAgt2VkK31FpEcALn2fWen6KrZgobFBFPHhTNPetJSNpM45UfBpx82L1hM",
  "key4": "2BKTE7ve1nWVJmzf8migarWpxkWVTmq4Dctg1HfsGcXBBMJdhUjCLnzBzJ6kbucgLs8m4spPzHfHYyG9fb5LR5eZ",
  "key5": "37jBygj8xVLJytX3hy5UU7VrQDaRcRU2z397a3hC6wokvzSLPDcxZAZwTmy1dL5nL91nSriSSFDsdRHhCs1vdusV",
  "key6": "2NyiAeps8zjqXmvdNRH3jUkuGormeUVnWvh1zfLRUdMdAWt3b7KMRksjNK99DLYhYesMi1uT88getZh98KKw3XHd",
  "key7": "5ytqpBj1CM4iodgNvtgvSuEbQUCmHR8uFqxkCL6wV14QPCC8KfqzUD14nqb4RPx6rj7D2PbCznKsbPjR6RYgdsHz",
  "key8": "4d9B7FntXjV5mGdUgGM3py6Qh2mxHF2AMhScULFSjueCrLBSbnqgWbLLWNA3rPEjNQAMrgTgpyKwjZhUWTQjSrtq",
  "key9": "384QFzfMrVxAegymfFDL9JY6BsUaYCSuhP2bKYc6xf8tv3RGfYAgMBY7verPUGQmxmgxas9HyNkUXskcs5AcndRD",
  "key10": "2Fsj57NoCJUXwi5Xa6qKjJMRnDWsue5bK84DJTaaPE6pxo3oQERW5XJq3FGUW8pCNNYYfMqUoEGqTCk4d7RAQhtC",
  "key11": "48zk6TRGTYdnM86YZTGqgqUk6injjbZGkzf8osxrtfU8CADXaaJy4RBFwkwjGdYJoGmqrRVqefc2tXpe2ZGfpiGP",
  "key12": "2cKtoL67io7nF6a7ma2xE2qtYps2cTNAxJpqimy1TjU5GqnCPmcFSS2KB5qvzJTZTzW3Bwt5p9Co6VnAiFPiPCxf",
  "key13": "5kDLd3bfzi5YpjWYGfnswzFt743afNBJZAkavoSAGxp45oEwe9CmfUfzQgaw9YX7AJAZmV9EDnYVSTkVrxAgroPf",
  "key14": "Uz627SP5C8HM92YAb5VKb1PCYDAqob8ccfSZLdF8tpZczSnbkihBPcroME7T8FxWHAkPo5mXAFU7DoedPpSdiDf",
  "key15": "3vwK8fSLJkped7HT1ffzH3KWL7vV9CiyYThUHqDCqT4QW3ay5Y4AoZCtFSBZb5qbkTZK1NEVjByt68fYemKqMpin",
  "key16": "i6oks14r7kCLedtGWVne7sKZTVdD4RHygY9bqhcZLFyRYYgLXphNst2FmM4KLZN29T8J5GY7LHy8g9QNKCSyai3",
  "key17": "57cRzeAucmpPwsLYJB2CgjdJCRHGghNiWMUAj4XQwJ1GnajEcHWjf7DNJwoztzY7EodJXtxUd51bwAFZqpWcVTC9",
  "key18": "4rygfGKhHJJmGZzWh26Zv7WJcDr2N9BzX2CUGDopfxgcP3MKSorLUCjmu4yYywmTDnQeqc9re4RVcWFTFLrk2WM4",
  "key19": "57Hezmn9LjpJe66Lf3nnGjgtCNaUANm3SHxMopgakyHynb8cABo73xMJdA8rGRsMRSpMvSgCNndLbFuziwkUTbGg",
  "key20": "5e7PTac1DPsSmS9ZCdCBzzJ1ojAdvMKAZ6wwbbaT7iGMyr9jZCnkKn8EYMeT6qnzRZCVbbaE6KFCPCUL6UpfJFSa",
  "key21": "5VawWktk4Dh7qtL1nBS8BX8VJ5qs6tKCa9eFc1TB2pUF4aGHdt3hirHngYNR6kvPezxKQXo2aHswVemU4ntVL8kh",
  "key22": "2iVc93aWnn3qiTHestgStCRpqrKZLj9ib9fkCZpZgVUCdnHY3vgesjQqWTVLnyyXCa8gkP6f95kdBbzJNBr56CdF",
  "key23": "4DyZEnLTt6quca666gJEDGFLPdw8WjuxTJFnamFPXzkahMEnU4cfAcGsVFWeopDCBa6MSGW4cTVyE96a8nY8Dqjf",
  "key24": "WXNtmHXVTBcSCmwm5n3ox4onqy7mYasEn9RN2zEbCRKBik2xWtocx9TX9gk6TcQ8BftfsCjtBDksrAL5CxoJNe2",
  "key25": "3x4pUcDw3GFWphji2qg5jA21FTwJCc4mNtyCch8o2LkMJTQcFejzeBdC2FMcMLaxxy8G77sEoPAeEKoLB8dpZtRo",
  "key26": "FotmTWVNxnag3GN5x1kCuPfEWP8e72N2ExRhfUZS8qBi66zTt7GVd7yKmirD7i67bBNXEpR16YK5Con45A2Rd7z",
  "key27": "2WeCjBx7f9qVXTrbeN3cXZ2DHLVPbK1uATxvxcWDV6bXSszTEoLRSzrX5FxJKWV7dkFBF9Eba1or6eN25MMuPcCx",
  "key28": "xiyDc5RGuPpWccvMDCsUt1GLe73Xn6AND1GzjwkCRYJcAD2xLyd62qphnNCWzPLxNFwy9zSjeXw5q2xHRrKFfms",
  "key29": "iuew1M7jf2qnxhrggCXhAuUVQQw2kV31yUx2bdF3BsDgszxEY7t8phsDG9fnqpNfBF95AygExuQ7XK9hLbGmpNA",
  "key30": "37FpYGKUe2eiXcvejCEYo8dc2hJzEB4DUyCsWmHmM1gtrTCM3w5ZAzS3Ps8vPzhb2TGgt7fzAgkVZNQLgynw4KN3",
  "key31": "3ZCnQGC8KXvvitbZypJkifyDYj51zXF9wjwEZjHW6UdHNkKr1YnkVR2oVcoQPXH6Wpn1Do9dM8ky8KL5cJL64hxS",
  "key32": "3oBqVgKRfmR1xqMs6qRNZNZGhv7wPWQrzrNRw3tL8ZdVLdnEwsdN9gAyYa2xCy5AyoVUMoAmwodrYUD9CcvKod74",
  "key33": "5ZVwyfBwCrJg7iYLFyDetZ3uF6WLo98ZbbjU8u9nTqrE2Fs5jqZ9LvuuAdJBuKxUgBhMWEnzxKymLU4mfqS2Apc1",
  "key34": "4A6LxjCDT2Hw3M2EVsm4VDmWwJjN7YfMWUn9M6eNMQqvuYz7pHBHTnboNEbipxiZCf1CCpUoYmeN6fp3NnNvabWp",
  "key35": "3DnLxDHLqpnJWyR3KGDhtJSxi5KmuwM8xQYeEVWWU86bNng6p12dCxLnkanHxK1fRHyunoJy18aEgxRAba1uXt6u"
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
