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
    "CfuKb9SUntgamn9reDi9UkPLz5ijFiVx8jAhhHogCf6uP1ovuWZkxc3HGTriQMS5FajBAwgE2DA2rAZJme1dX6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MHqTrU8vzBRxCgVXLyKbLrf1tAAAdHz3BHnAxfVaKqet37LdmQWtbNVFHunfbvDmLPRorpcfTCXxN1d4wszeWDp",
  "key1": "hsDpGgDToCeVYvZquWN2WzFBhU7VAMmQQUMHWg6KrPrAvYuLoHyK5WYcPb5365CmFEyCPWGkejgmyL7kNiQrG6j",
  "key2": "4bcUtjPy4u4vozg8WBw2AMxfVQk8uQzSuCc1owA1ihRMjBySgsosYDEUMKmMDBthyaWG6KXs8JjNgWRah6wSo7yS",
  "key3": "4CDMTZ3hFhVabiqauSpgpEtgouaUxo9FS7ZGhEyF2WoGvQghBQeon38mrdx6ArCopW4WVbzKeVd6em6iyqYbGAor",
  "key4": "529a2KqYS3cj2yUwgJC1TWWCdYWHsdZgVbpbSbTftTZpBReEwqdWti58rNVfTVFjHAM8TJomWpt2ThWZN3EXsPSX",
  "key5": "4qun9j12WvreC3yRivhGxJ7QdHvHAC2EigGyrrhZLUvJfLnrw3NmgfVaLfSwPnqCkgF8HY7M4x7tvknfXAUuNTNG",
  "key6": "4V6VkfBJVbQANj82JnzMryrZwmjMUng8pEdEaA9xJERS8n1rPEwGXtA6cx8HPn9aJNWNTYV8wyYo9PtSWEpBfy4J",
  "key7": "3kjKxe4h3xmgSvobMzxwPMm4iFETaD3msQkmT6sNWrwYhXuA8m1GGknBNF5oHRMD1Cvk2QBurnrQzfokrsxWgahi",
  "key8": "X9ACfMVGz6sZfkq53kPnukJKbthLBESRfsQgcfpj3c3t1YYdNiQNjsrKhj87GvfV1pnNoWT2ERFJK93wgoMU6xU",
  "key9": "2gEFoK7CBVvUCNKEdeoCN6UK5qYKthPzpcoW9GcduNGURp1p86XRXakB6yPh8FMgGZsiXYfJkDRasqACEH8KEnNG",
  "key10": "4LGEQvkQ9TLhEhdc8XVnjQ7byhcF6mFEJm8B5wDrBzXX5F1YBC1YS3DHo9cRFBPQcYpL82GvUWcNAc9MaNzQebwg",
  "key11": "4WUeAvMJioTcQNGCF8PvkKwbPHrV24y1drxzoi63myAfW5ruQLjFKmmD3SMio76rG9cfmynzM4FTYHmnVW6WYzsx",
  "key12": "5m8ekKSKjTW5R2LBMBXJMZUaD4r39tuAgraQGdDCwo9uKeUtMzK56LAxaSAJxzPQVzc6cXo4aPANMPK56WMzq5Ze",
  "key13": "3ymmHGauhG2nd8PKAo6onSycZ7ZswyQoDR8YtuifmjWczeANK5Q7bBuEtYoVsjE9AXmmEEVv6BBuF1DKPQwNNdgR",
  "key14": "5Cb6E3XXSLVaLVBAPuwLLbL8DyKKSvLe4EbwHNDiwVGdufYbkRvA62k9c7yVRyxUsJFKtVBZN6h1JgKM1YGEQL6h",
  "key15": "3HDva7HCAEEhnhQbHPRqTnmfTENwFbGw6BNk1P14yYhidCTmvsx5E9Gqnj8uKVLbeuumWmC1eKNp1ZD3BD6j6Hhk",
  "key16": "jvHFwdbzWsChwjappRukQ92SrQZv42CJ39bJoNTn9fWCACq2KXs8nZkBqaRj2ukMbRc3934t9ksyKpJ92fb8Ljz",
  "key17": "5VNZG2qBFhhXT4sMjh46GS1e25MXFY5mPSiiAYqgRbp1tSfet3Vyfh5Sx8dUfooUb7FbdpeSHtVrsnT7eawRynun",
  "key18": "nA41GS6qmDc8eb6LadFEeiJ78DNs81SRFUwM7MWGG3rFDRAArQ7KwpFbS3tu5UhMxvNbN3HeENy7UJJJ2XuCJrL",
  "key19": "2QCKgUV7SHmsiopHR8ehanmYH3ZexvT7pnQ1Ar1M84cwXydYcf5gv21DfT7oqKYg7Po9KKPw9SgYsKQFmFWeowPZ",
  "key20": "33wqX9rLkk6e5gmQ6hT8Y3zuoYE8HMnnRJpUZbuhXCDKwwQywcZreUcLgo4BtZB8UXyUrCAfWpvQaRs7iQV33RRm",
  "key21": "5pFWqYUiRTjb6LHVa9KN3Un7cTHr6zaXyCCg4KVg1DCJHbz3oe2VhJRCT8CWHAsKS1AJg6dwZ8V93JP1vHLXzs4f",
  "key22": "vTBzqaF6NnSfP8RpeVzkmsf8idN1nVGBvKavL2nzfzfWD2juUhP5eCRnh2eq6Hdp6qDthqho81inQvHRZ7fGigY",
  "key23": "2QW7PjtAd6n6wEusXSVxJzLEdFx1NZYSw2UWTgYtct7MJGjBMbKoeLnhRABHAfWdgwwjgMwZ31DeUBf2qFrGsBV3",
  "key24": "2WMJxgxoPszLGMpEgQriC8UvzwicFrs2NSCjChwvmoQqiF7WMnDsAgrcMJm4pWJHCpLBR8FrFVC8ezqT9Z4jgkgf",
  "key25": "3xyYcFjHKxXzrHgetXdHLZZM6aQL7R5FBBCaDW1njHKnj3YTcHyahZgLa9a7Mfv7Mp7Cofq14bzDBSWFEAnyCQ3X",
  "key26": "2wvDGVuEquHHT6uku4bgSnfh8FBRH3Fcmt8JH2hq1mJNZjvuMyhTcEgempUC7zBpXzCihGr8JGpK5CDURCzcngMU",
  "key27": "5qijrhsuULMdCLos2b2iBFDjtDLQuXiziga7YfbdAqiVdg63hcvKL5KMakQBAzwpi5wAzmAtkpod9wx2AqccZUkq",
  "key28": "34HtpnNP3gfJnd3kAQ8W7iaPTKZTJbvUkiTZWfcnPSSDSQibnWJ42Y3wJmFUUHoh4L2HzvHwY45QspJc3mnFyS5N",
  "key29": "4cNxPD2T2fxXL3qdhDcK24zebcFNQ1P8Kpq8wQBk8ZUso2ZCiMvuWxrJCXxNZWUuQKGXQxP8H2mn6YG2ic9HRxZu"
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
