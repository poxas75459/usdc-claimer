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
    "btTv1LnKVwahbDDmEyqP6iAvbfoFVjSqrRQCTGRns2HSuDwfPzh1eFeNR7RFTsVP1NMZhej9aWD121YtqjhnAfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gfP6N7CGdUGSGiQdrj6oM7nGj7PqEgxJwBKXyLF8cRzeUqAu48BnVDnQ4oa4jM3UuxoLH2czkyWW2C1HJWXsLpg",
  "key1": "52wVPuDtrRwXJQxWHAsgkPLpPWNWvBs69xFJCmQcVjmCL4nng1SKtLxRfB8Sdxu2L6ajKZnnmZd82y2ALdgDd9GH",
  "key2": "5dUDx5jsjSpQQK4C2iJFTEXwZ1AGMes229mASqoCTr6cTKW3rmR1QeLHPMcax6QFdoY5tmeArfrzDj58qbZryQrw",
  "key3": "2z51jo8fhccfssmNM42RjNmhvrNmzeYmC2aSjXYiTXKBkLWjYoFvuDev19pD9Utp8y9oZkZhLTmR3ckH8ib1cqDg",
  "key4": "3ZJP5Din3qSmAxQXhzy2zeQtM78ipvDzuGxA8rUxucxrYiwefyWLMpu2nGSgpjQQaxzPP2aachbVB8dryuAryeFp",
  "key5": "2eDZr3CdKhHbvQ5sirkKZQ3E3aNzXe6r7oCZS6E7JTACbgoc7J2dJQ8ikqcH81DqboNNYMepc7G82cwuBa9JkPVd",
  "key6": "3zR4DjBVy9cALCFMzuobTZotV9aScGsZZAg4UsroKMvHJpvEsYgEnqk8Xd5KCPULuP5cGTDMWRaBidRbmXYVaitH",
  "key7": "4PXWew8E8hZ1FMLfhLioiyY3A9Nz2rYDw5UXBEzy3kZjBuKBjdyBicHSGXCAxYZro8aJcqTn3KGnGyvHTBqR6hPh",
  "key8": "3PoGrWAVe4DahjK4M4nUXCmeCKbGHH8jeX2e2GTy7FX3foTJVfaCW2zutj8i4jkJsoUbtj8kFRGR7VGAGd1MGY9Q",
  "key9": "2DizCT6SCtUJfMqEKSuzsnqtru8NPvTiPS4FqY1X3ohxXNWCzsXo8DYLaFrXENDYvJ6KVtXJcGXJjs1e2KXuvqLa",
  "key10": "5fC4B7qW28mF2BpzmTc1ySpn73JPdoMwRUHRmJmBVxGGZ4YzZSNgobfK9am4Qpk73FkPp7F54vn6bZSmDFFQitAC",
  "key11": "4oURcBPdJxGUxwankCeP3dWiB46VyZ32f3zphNgMUhrKQccVf6gMWBRZfdsLBisFdL5EiR6AqLgyPYJGwFHay3Jb",
  "key12": "3c1UtYQTW1VzHERqWZ8s2kCNFpZ2jUFmahTSTA1fSYhXamPXZim3qbhKEV3fpP9SHK2xNkKJgnzZiWVL2QmT5dud",
  "key13": "5g88nLjCbMnPhQVN44x4cgReYwBTbVbS7ZfnKkoNtcoAKb2SCysdYB4vcSfAjJ4mRVB6eNjZ9fLJhL55fEXoQzK3",
  "key14": "579Svd3XX41ygo5P1PNSp3mkPoUxW1ypDy1GRu8ZLqneao39sh63dZu4mAzoDiALs4b55yRuGjVbyYoy28CTcVP8",
  "key15": "2NTAcEadywBXNnYPFmEzGp7JX22PyFG9roRkz3JWzrJQyZKgDZhvMofGAjXTA2j4sVEXcoXgS3WMtwwN1noYfPTk",
  "key16": "5mFmfBwTfs22KeU8xmbwbXGbgbvfHwf9T5shbn1neHcBYA1Ag2PyjgSdkK6ByGEN14YU8M5oem3CDo9At2AefwoM",
  "key17": "2dVrMNknhdiF3yEzMZvvTziADrfNZ6A1Xue8rEtj6YpV43T9UA9eYjuLry41t6wZjEjAtLJbXKHwFeqwNZxJfRS5",
  "key18": "3SesYvKgXq6bqUtmF3n9qsRKe8cHVR56SYfEbNaJrxYFuSt96XyuC9YY1Y15xyZtv78r5kftHNfi9Zz8Mr9szdJB",
  "key19": "4db7fW3nJY2aEAgKPkARCXXzT9bLQbsEYQWiiJgvJxUsSHxwFUoK9isbvLnQpK9gyN3uJAiatX3vujHvBTuVw8bH",
  "key20": "Po37SsjLueNjooU8bV86XSHSk5fWNU5cYH4uuJNLxhRipJNvGC34ghUhzTGMeTvTAMis9Stfqie9MtQjTiWTWYX",
  "key21": "3U5F7QkoCtcoUmFwjQbL7kyPkXaZBssArRZCW7hTaeBGnMDywnJHCr78M1VNX4PjRQqzUbkVmhawj3ngYoYcZXfG",
  "key22": "MzHPy3cRHMczDe45MuwCFYtGGDg1tT322hCZHFtN49k5bQ3SrHsX9DfY8VLdXzTzk9j8FYaeBJjVdWRcxwBznzV",
  "key23": "5e427nBmXLpbKJstz7zZiQP4eSazdqkvwPe6yJHsB5z7Ps4cPZvTn5QC1xuuhDv61BCVnwjdtze4GEYZaPYJRExn",
  "key24": "5u3QYAdeMjep4ukcr8GinR2napSSuEyrdCSKjGZJZRBr2MqA9o6v9V2u45boFkq71YH5zsypHPyVQq578VzbEnDC",
  "key25": "5GhEjmzLoCZsm2AjBRRMZwEmKyRuxeXvdrucxZvsM2xjU3qQgQhDB1yBSecLaT5Fqsv44VJvX9EpsDfGFa9p4wKN",
  "key26": "2AJRPfqeM66rEWwjF6kxSEKDvfzRCPXCyJCGCYGyyxT5vpkqN7nP1MkbH2QB6eqiuLTwRVsbiPicmhupdBnaeuiz",
  "key27": "3fjPT3bZpdqE3bd6VwgqJmdk6macjQGzDhpJwXjuB38VcwXmAsTzTDZeRncp92oRDcHppaxtoRQDP9tv53PQFZou",
  "key28": "4JUoA2HfmRp8VMAbLXseMZx3Vejk3KBP6BPN2o3Ui2y48EmeBxqszaTefKNPFitfBEpBLLTVNsAxHtvpp5yVhqTF",
  "key29": "2RHzrAaygJaqXqDAYRiebTNi3QkhTWSDpiZbTRae1XwhJprRGFRQDUTvxvWgxTpox2PZ2raJ1iWAAKQQmWpkWsXv",
  "key30": "2Xh2iX3LhZQTH8kz3hCm7Y1YFWWGj2iLETm68pQYcAA5MKnGiSK6cyqEYwavxBZQgLD4dLX7UZUWFPegyN4ZFG6b",
  "key31": "5pQ5FbjbkjnTTy6KLyR2YmrWn2sGNDurZiVPdN2geHYW9T1EXzsXfczjYvYC7FVvGvvmwcDQTDp2HxUMWhE1PeA4"
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
