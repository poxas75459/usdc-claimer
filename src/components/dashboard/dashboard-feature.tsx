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
    "5KPCJs4wU4afpdBnLGSZTc3RqtLGmfEbHhwuxKG2D7W2AkCsehd8tJgV4LhYmvcmJg4RDnN9K7trVvebuqwvRhjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SBxkcihQPU5tftXNnR1m68rrevPRwZL3ervbdDRVufVKWQgZBANzMayH3utjn449jzfuSUpTaEBB612V28RSeGR",
  "key1": "2M6JdBs9qexg8H3nPQyGHHkaoyyzk4PFSFyesLv29kVPcN2VhF39XiDa5xkwTtsng3wkNTu1aXxQy1Z75Z1mmRHS",
  "key2": "hC2qKNecEu7ud471gJ5TpLUQJAg7tPQ6J851X5rqzE2tFYSvcmxu8tob5NCDG7Fn3De6yG3uUhYxZUAb5cVQ4t8",
  "key3": "54oVCk3rCmVjkPMtVyZCH3sMZzdu2c1ABqPEiqDN8zt5rhzsgRJvqC3DEh3EpCJmESfWiZ9XZAn4SPfuCFJhobNM",
  "key4": "37cttUmTES91evY2MmGHN5SncxA7zDW9J3dsc5MWnkrUgrM5aZu1xxUuuqAFzUrXnSt9d4xM8AQ7fdZRqCmBBz23",
  "key5": "4vAbMxQ6ozWiBFVMBfHRYfedZkYbbFsL5qkU8Ut9Rkk4FPj5qXNj8QNKHDdJXnGE3cqSXX7RLoX2AiUmsNjv2UPS",
  "key6": "5SUobfKNSnSKd4DVSDYPP98K21nB6tSnGh8SEhXWgSd1HJLeVMGK2eaD5WGHwvKGGX82Z4eHdxZee4S4gBdgsWU2",
  "key7": "S673Wp8S2JXK7jzT3rYZeNDEuCNpGZaPiakrvHUMWjbTaf9pz5Cc9i3b2RBs8B1eromz8sb1KJPGH8PZiwS3wZr",
  "key8": "xBJxhMWPnFEcnxftYMc66LvQ199LSBZ7KLzT6KYajiPxcmjNCkZER7TAUPyMTGGpDZvz8bS6PBU3oFvDJ5xhFeB",
  "key9": "2r6eYStSruiZjqUSn374bjFXWPPh4hnvPKohGbpKLNAeqcdQDcRgWWh2pR5476nBTsTv5BjYvzudYYk8GKa2T99g",
  "key10": "2PCCvXyaFMwD5dQLGCkDg2Fp1f17zLHjAbDbWb5gPX5oi5XYqDU5PBATsEprDhHsBVhMzsQjY65MzSSo84Znaueh",
  "key11": "bpNbwfkE9Wk28ccrHLXieUJfg3pJecQWyDF8atn7ppGEDAEVQ42B8jv9mrL6GLYSmeqskJV7TW6bjYFtVwn8ZJq",
  "key12": "5xQYqgokhYkdAHGemvsghj99wF2HPeAhzEQc9xkfRGFPekVUWdg8btT9qW8XfwWwVXh9y1JmqeKNaVK8WicfHpEp",
  "key13": "4aj8GdmhFnbFBLNs3Gwfb45AxEwektZwg8usBhxyVdviXCLHCVV2yf5XgHNAg9WtVkJif71E39zFBCmhdZvX2FW1",
  "key14": "5W5dN4WVXK4YfcX4LL9LX8Kw5TeLcXLCzzoUWH8wpt5K1SnWKkTwxS6Kk7e3hbsJWD1a7eqYcpAe4U7BE2EJHtyZ",
  "key15": "2HoruVMm4pQjxyEFCypSukvKLhLxDvxTgDFcddvazMrv43eudMvTWXxQnoMgm6QuNCaQgJn59koKLN3SydE9Jxzh",
  "key16": "3BteZHWxzqp7jKLaieqD2qAXHf46tPFDAQnGqRM58THp5JPDWLLBapqkNE9ZDrpJxeo5hv7xXK58PgDCXctJzZEG",
  "key17": "22FqED2NtXqRj6GmWWKViS3KoBi1to1ukG2ssPjfqtB78oBkjdT4oH38gJdBK7qKWHCKAyjqgVz2bPfvDb3XYVqh",
  "key18": "5rdMpqoRjgwDSr2tj1dwJyAwKUsnwMZtTPXLR5VHjRdFrv5Q4Q4ipoBcvDMvbhGbUixqVcp2PHx7JZEBNeiYjU9z",
  "key19": "5ZDTLVSkMTVXaoYaPTzYwSFASvi2Qvny6meDHCGHvuVwpBzsWRMzrQwa2pfmmY37596jRwuz8CHg3oDk2wjmiGzF",
  "key20": "2j7fQeBjWX8Ezq5xXFbEjYrQBVyZupfSrhFTNCG8rpwbmqs5jNWeSdnQoN4UQa9oTwbChesHHz4rirxYGkE6AWR2",
  "key21": "3Vi5CkxCq7PhyxLKUmkmim4MKJuMi3hw2JZKWMQNocKG524A6s7t1C6cd2PsR7BhFF3HhLxgBLsJ97HRAKTn3KVr",
  "key22": "4oEatwxjef8GFV9Bfw2wWNrPcpyVvki2JUZj9c9NxD5tAH26DaTA1cjkWJHiT6QtrDdV9RrXyuGFS8Eg5kGtux1L",
  "key23": "2A3L7AaTLBHQfi7Y7F2UWdrAtN7ba7mFFUVo9QBq8ouEeMYEKqNiTNj1RGTQeqezzqJX2f26p4HWsmdfjVVNZcKh",
  "key24": "edKuERK42kSqTHmE691E4E7Q9DmZbvgHqvRuCrtMPsBGLipn48e7X9a15JJ1MjWLoYHj18w4VFxP8MDb7svD24z",
  "key25": "28c5Axtw7LqnFE64egxhaEqrt96ekqY53Kha78RvYWtuHBFRdajnPxHQyFyNripAbumhFxLjpdeJkS5DaFWd3kDa",
  "key26": "2cGwcBPyJWqVR7amh6cmuNp7TuPoVVpVKLx2DYgHcNjGMXncfGtbZewDGMsFMCnG8Qs3W4nKzaHyDFztJsf9K9n1",
  "key27": "4e2xxLqFCMJ6xSdHDTKGr3ThEn6MxHEe3isgk3T4yBeFcAZbjuJMHHXDvhy5RaTC4oT2HCQaY1Z9XD2zsJuQVbZ4",
  "key28": "43ixDAyufFAbCvacvzYh33aujfLQmLrfEQJPeejHKKQiFMACaBrh3gGDajKu9LJyUzEkt8DWDGtQmHrXWP8WyEUo",
  "key29": "5pzfgVvBKjGbdKkFHpWudBQZtwofXEgy7R5rjhkGngnjzviRwXv3QLUtVaGhmd4mzs3Ays9Xe4BkqnphUaLaSP4H",
  "key30": "4qk1CatebUP4HQYbeJd1YW3Ps6jctZDShP4B6VBCxjuTtdtvYjGEJuWa8PCG9LCEyMeAff34bLKYqFPz5DkNRQHj",
  "key31": "3kFpoxDWfxDfh6oifrLpgYL93rFpX26NDZfcBbxqvXYtJ7Dr1E2jd9yKeb4frMRJm8z98f4Hf7Ka9oLSfHKixxZJ",
  "key32": "2oEvWjcRWQyWESWfHBefyxkPBq9XUfnfHGH9FrPGjXaxpQuEXaPFEwWPKA7HAfEB8LH2fzJHARTL6pvUDwkgzev3",
  "key33": "3seJyn3xfWGkT1qrZ8QVUCXbjXkHSeBXsTGcnwEuoAo8CeGQJgyYfqtxneb7LJEoGUL8j21VZWTE7mcAqpz8EgHa",
  "key34": "5UY2f1KeMyKac6yEjEc3pUFz3NFsDNL7Fz3eSJdrfnUo5Toy8mQVJESs3EfqxGYCX8dJvxQmhtKJBcyADohR6Efg",
  "key35": "3Vwj9xXLAgFNSDb2GMBmy8NszXLLwmKyxqAxrRpjogDn5yM4AWtsXhteaRJnXBHDzcJ2aqNrevFqTBMi4aW5dJBb",
  "key36": "312sSUmwQNrR7mLr3CNdqP1wk1msV3L7iLs4ZEkYHF2LVitCNQ1pLCov1Gf3dniXQqn8SkBNLo7tUh64GBKP8BAv"
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
