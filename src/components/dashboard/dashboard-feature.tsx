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
    "4QiGfnN4VK2BXJpwMqEhgw6rqt9NuCewbSQ82kj55BoMDTgv5bhnsg4mNeSWbr5m7jNQNqepmU3FEVTAeujp7Hhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pMuRnZm6jxCnjV3z4mceTge9mHfLkmAtVjjHcPs81HAjaHrMatSTvFJ9Yodzvto3ivq4AarUsRkNU1sUJbYYbwM",
  "key1": "MvWoQhVPV9yLGDrnK8bJoUcTxCdBfmxXPpTy94713Z5BWe7G3H9nu1ApbQMnWudw2xMAuTSeA6Hs3XbKiUaHZtT",
  "key2": "2hL9tMyBCsaHDdGA4vR4R2A7ErXWKF9MHcQriN4XFDcvrcFc8j6LQ5FZUvw5ajqWUfZnMybiQ2ptTx1CD5QyUABN",
  "key3": "36HMfGfMEBhnxMsiPzzdSAZZ9J7nTJRKdWHwjvs1hhXrwtJG6QMDwWjdaBJbCeCe3XZV6goGHUK1FekYTm2EbHVr",
  "key4": "4pceYpPkD9tHX2KnR83hd9HCqsfpHCTHSRomXys9zkV8CTrLDTTxshTBWd9Kyhdsy2wvrAcx1gqkBbfHdhFLam2f",
  "key5": "4o6j3EFwbzwyVhLWhCotb4BJe7XRRSsXgodCp4MQ3ixwhmXN7XCHBF7KxybkbBxbgZLngiPjN1WW6Yr9KebSLMXU",
  "key6": "4rC1EwTn79Db16UbVZkFaJdLCa2sJjQ1T9LSUDdo5WHBS4xzgn68Swb965WRc6Zew3usPjDqMaRDTTtaPLBJmXmg",
  "key7": "65pHjxaHBw3xSb7WJC4u7advGWJPy6k2gRKQFtYXbe9XPE4bM8DQQyodzn6c9Y7DckzSsFLaoN6W8YQSJM68hsej",
  "key8": "E1P8GgsunUppKg6miyUXR9uEKKkhAt6HKYxJwadtWaimdMdCT1cnRD8d8SqWEYQfJ337KF58oPmryWkHuFqCWjr",
  "key9": "CqPzjrZbtat4tB7WGe5Ly8Di7kGN4z12goNApjddG9ovy8LjSkesRjpKTeo5ge2ne3Q6788LPQ4tyfSL7XD6823",
  "key10": "3jLh1Pyr768o8xuQasAbyZVhdpMMX3kmnCjjroqtmiYc2xKYGNhLZbaBLLP5mjQfV4ougZ1f8jm6cAHNAXGhMzir",
  "key11": "uUawgy2CGSZCPsEyQk4gjYzCLqxm38LRAeEAg7EXgS3oBzshmxCDDX28hZa4SXJkTEnKnEEpYqZeXShrQv9j22d",
  "key12": "4syMCezAJiweBBHW15EyZTDqMNcpDocoYpYbeTz6F8pLhVuM7PXU8JKcuDPgyGEktUxY7uUWheyJSY6CQJQCFvQG",
  "key13": "5ZWK9manU4xwLmJqVH8JimGdqo8p71b8qKjZoDSVV4JSuckFkY6UsYgcVrdncvbKUPmotm2hJ9ki7ToCHNozDMFk",
  "key14": "2N63RVwjxzbRdP9CkAi67swUTs9NQ9FK9bAmnXkqejrXgKKBST9P5C9Kwh2TBMrVruPCkCe4YwEePaTxUGogB4ZA",
  "key15": "25bVEyktE82ELyxBtAjwqiHG8eg5NyRcXP4sgzmL2mB4Tarni63XhrELAm4N5xF41DQzpFnsZ1PwvZ1FaqDVAbc8",
  "key16": "3shDqVMTLX5xixiv2fHERGdvDduXgCoYpV6LK21My8nNYXbea5tPuyW8m2Q6bVGi1dMU5SsX4S5pZUG1NJexrCjs",
  "key17": "Qu5KHqKwMVTJVv9ZP17h7XYKHXub4Peype8AavYWDuCLic9i8zFpqhLFbhxzXVz2aB8m4SkSuAWktNYLLuhR4dQ",
  "key18": "4R5oZpiFrhnTM22dS9cgiknmW6ja6YG4yiJKQv9eLZEw61BKcwcE5BKa2arSzuuWJTTwKZ7icaBzpCNK12xu8mU",
  "key19": "5G27CXJk3D1uBnYdGrrMDEW1LTpNJcynQRcpRhr6rNEXPRBLJyyFDmdpnWUrEdqzHoZB1JpSu9yhmn6qN4CF57si",
  "key20": "HyKpmmVgyN9aLoNpt1tCrNZwBiZEkQjuYsEwW5gEHmDHRPcWxQ6PhjhbpVs7DqN5G1a4wQyfwf287VXt8WoE1iz",
  "key21": "2enatFfA2rtxczj6Jj8Uhk71iMXiP9M4F3Kv8TCopnRZShsmot7KbfwgA3b7NJ3nPcgCtqrgCrgoJWYRcHhYzQKP",
  "key22": "5iH8842evqK3gsXpNs7BVConVTeKf5iMMbtLdQVdGaGDEoicjRN7Sj37n1SRhskqjSZi4kkqJyVXr4ny4EofmPG2",
  "key23": "4XVqs6pAxcRxBsL3jmTcctDjZThzev3HPnZUfXCRSLK8ZNFgDfNhA71mSbtU6Vv5ZxmGnvZXsAfjSx1DZmrfv6cQ",
  "key24": "3hms5CwLFZQkmKJv2w3W7T7cArM6d2JtUNtysXuU24Ju9hc8MtJ9cSvHus7v9qdK71PrQk7nYMwSseUrNV8bAVfQ",
  "key25": "4Q1aLnzoMGXVCqkn5UsAQ3JU8mKiAPYom3MypdbXtoyCDjSWTRwQ6gSH6s4UDoq5SdKWFTdUbq9ZRmhrUxwmPXmp"
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
