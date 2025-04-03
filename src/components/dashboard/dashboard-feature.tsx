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
    "5VVCNc1e64zzCCmac7er9w65iEbxsyBeGk53oJc1DCzD1fMcDvzMz7MLai2kTSRWcexbDw6yv6SKVt9AW5Q2hrHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hTh82fB22FW3nnFsHWu46HSqbHXoU8MFDtLPy26E7ahPRkHmB2QBZ298TXnYwd3ofVA8zp4sXS3sQYtfzniJRyz",
  "key1": "2wFgsxvrkcBnjMwGZGXMopsHUCDuaumzD68ZryZQ5KnwbuHw4R6gXdZvhbyAe7wLgWRMT65zdGw7zvVjfzSsJF3C",
  "key2": "2GL11j3YaFf6EYqqQXYixCPcxVStkjJh3JUAdYopDYAQvBHY4Tv22nw9BrgLEpLz3b5aH8ZmPfzNq5TBj6Yc5ui9",
  "key3": "3LSYKpATLucd8DfT2xdg8cGAzwWJVaFeJDupLkou5C3QbDGQrwYfZSzqjUCvr3AhEBHL6rK3GX6fC4bEoJJVuuXY",
  "key4": "5iPeWmzKTthCz6t4ehM2r6tMP94JhroWHg8stXQAjj5GhvceQm4UW24A7WqCCtMuZfMfzYY93ixK6PkTePiN4bUy",
  "key5": "p8kXB2RNVJNVbdARPHbLWmzkZHSgQsrPn1yYDnmj8wABCqeo2LmuhwfcZBatM1aRnJkW6T1T6KhZqMVFRxANAKh",
  "key6": "5Qz4gMmngu1BDu43CkHG1MGNLVi7MaM27RVzyJWSUAhdNURNzMMfhcVAxpZwKsHDSbcJd2xFrHdRJ9579rws9ZzK",
  "key7": "WQXdQwKp3sf2HfvpZdGqZnjfXPXym7hsqkNJbU44kA85KcrZWfbyAUvPu1pFsZV2t3d8hXgP7nJtTjDg9Evg28P",
  "key8": "3FLCXkDkadAvSBGPvZDm7uwPJjjHyYGhwS2iRVpN21E9UgpMd8yK8ZdcwcCEb7TpthVaTTgdgThgDBzb9u89uNY",
  "key9": "2YWFCkfonsTJu9fSSWmXMSS7MMu5JrrxPt3GByTdCD2Eo92GurishEn8JeVGpghVnBUHn1BnusYnEUQtLKqs9i2y",
  "key10": "5nLc6CUfLJWSSGeGgWkK46FzNgNWXgkDw5tReuKfJVfKQEF4kF4ZKC4jSQVcZg7oA3jLNfdqGrQ1sHnoVEjsErij",
  "key11": "2aD8aMmzTuWQAmauFHT3KSAX8UUQZUhZP9XWsyhUReQXyuRMsgBQQbwjcgGkcWpG4c2DjjrQ23NzpAbj58rxwTuJ",
  "key12": "53Vt3HdPPD7QviY1MMhrddevrV6SBZ6M82bYYkKc36ZUvpe2J6FcMEiqMf3yDuTuGt6Ss1Rq8orZkbnf7Uj6wRNc",
  "key13": "3CjmQnaDg26v3kPBFfTSNJfseho2gXbkaTmbRfgEuEYE8oN3ZLjHVjMPbm3m4RapjZYssH3iZBEVuqgZisY2naGi",
  "key14": "42JA32BCtgw7Mdo3sTFv6sr4vHFMMXRWokxRdFhvqrSCXkJCGDwUG7uFGBu9Pnmo2YXrDkGnVgKZKKsBWa2ccczC",
  "key15": "4whyqqGcETLLPx7Crm527P7LtjVDTebuhVKfEANrfQFLTu2joGfQ3T1kjHEH2hVArD1LcNK1HacHfPa8MZZUkewb",
  "key16": "3TwvCCS28E3xPqweGQnp2rVp8ofavWAbAFEbJxteTP75xd6sqVzT8mmAxu3Ek76TYrKgi4zmj3JXmfAWiPEdxcDf",
  "key17": "sbUSExs5EnzQrAngfFsyREczt8R8QYT2WBXRvWtRUZbVgGP7hpx2UkWMTwjAUo477LyB3hFSfDwf1hQNtPoEGBQ",
  "key18": "21te8KKQ4pABFWvshmNm2AudegJSjwb8k322aKdkaYzt5tp9JdnxfBxMN57AvFvPZw3KsL8T1FBbZ5w8foYBwv8M",
  "key19": "pd8uthJaUGA8DhSbUHFeV7bG2q26hodtgMTirmyrcSynvSFXma7dNSkMKtcm2zb1NyRnWpbMxwAyf4eYbwozZS8",
  "key20": "5tuidEDRQtktfg49wjWV4Lz3gqitceHKAHeKxUUmNcnk5vnHGEKJJEW7qzpvvo8xcaQkTsWj8o3u2GoRhpX45aZ2",
  "key21": "3LzWBvT8PC4tCAU8tUHYoHdD3P9dEgzMdRynDeKfgamZxhBKcj2NhG2Ls62AMQxYYQJwkVh5KJj9PQ5UUDQ6Mbi5",
  "key22": "25MgdD9c4zAL9fkHxc74MT59NxXMpyx3msSCvG7QnyiPTQhYd647GYcXrdCb7XHAqMJECZtuonu38n7FWKwq8yQz",
  "key23": "3c5r8Q7tSTM8zaw6aUqfrrMRRjghdkez9E2PYbLE6jpY1auVQK9CJSciMA8EuSWEYZjp51DfdzcwLjfo2t1Mf4Zs",
  "key24": "22neLdEH9iqvD6NvdmdrUMqrEtmkSsnXn99scVDCJ2SVztSjvXb6Ax3RhAe5xwaDzCoHWxTWKRJ7t8UVVZZa8eKp",
  "key25": "p2caKCWfxMBRaGxCJm37vPYTiaW7GQcDDxT1XAMgvCirKFj9PEFuJ2FSp1qDad8KLD18wqoQ7uxxo3KcbiEkqtq",
  "key26": "3yf5ZoM8qsYTVqaav7XJU4tGxYRNWPJ4fKEHHL6UzDRbB9Jg41abc5yqE5orsxYRP72mHqzXPTx4QZP7ii3hp4qG",
  "key27": "GKxvTAc3ihnv8ZRnDrg3NDLiyFo79C3oNTwpLiw8vnqJKUdtjZXeCgddPbW9DEG7Kyxg6HtwCvzkRUeggNQi15e",
  "key28": "3SZ7Ysqay8BUJmfVFchuwkfieukDzHPLo44ZHAZeCH9z9d8PmfVHtySmUrheR1WqN3pb743JPeQpWux6Qk8e9QbV",
  "key29": "rYMysZVARdim3bP5Unc2Hi2BjBNg87mgvrPqYbxysSS4RffEoYSJKENJ91uZC1trM7CRxZgVPfk5h1umCkVVbcS",
  "key30": "43MagBJqoLmwwf2pJY5iGXnenbeqwKTYARaNkh34AW7j1bPruUZagazPTMpMfjqqaisFyk2f2g9GWWPBc7n3LC8",
  "key31": "4okpooXaoQ5Yi3j6YxzYZzgpQLErPCLNG9jnaRbuUKvBrtuPsPfncLHkMJrZ3Afmwy1DdSnSm29r91jxuLSQTX8U",
  "key32": "4CbmjX23XLBSVSCmJMKCRg8KNdB8KZEuUQEVaugW7rn4QTweD9ouT7GY1Jvgiym3vSJD1rD6Er2VfjpMxS7Tywtr",
  "key33": "5uGEGgLM1q1Mh8s5LCZasoakLHj1gAwYQEzswMBtuUnDZehw2jQctfELJeMcPQv7Uj4Y7RhgYmQmSFTgbbBDmY7k",
  "key34": "4MQaAqf8WefxCP5YEL5HsBFc2Msj9FBreK6Pb2FbCAkaTQePccdjaWR52EKSaULjKMMJLPKrxfhmugHq7ipmWTDN",
  "key35": "2wUiWGB9h7JvpNw71GtQ1NZL96VY7yVyJHTueDSxQh1Y6kpxs5rvm9nTbMyZA3LniPTSvFZ2CNuk1jV3PDruKNpD",
  "key36": "58Bb3mcXtyAMUbZdP32NQRKFUrNH9EgCtqBMKysMT4C6axxnvXq86R3jhaduDhqysB2NLW1AVqK2sWhQsYVzgNZQ",
  "key37": "3dBHfcdD7oWXiaqJtk1xemRPjff7mvFGS6FCgZ91Vq7wjdVLbSk8cLcWcTmxDivdbr1jGtTF39gW2npjHMWnNJpG",
  "key38": "5YvRbUotRjUiSicMzRj22AgfRrm4g1sgL61HF1wXWvdyr3y8Px31Tm24zD7p4Jv7LJ8UPxyznRoKDvJNCNkfTM8C"
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
