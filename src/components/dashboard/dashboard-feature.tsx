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
    "4PPhQKiKm6NkTiZ9AUjMStkbwTCXtmBwshNCnKiDCdzbDdxTchBC1dWGnmKzmRBWpPsuJbKA3D6psrrwZfCcot7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gubBcfxRhRtPNsoyEQajGVnS1xybBbQENnsCYJ9YSoqBogVC9odCJGMYfmf425wGjvWeQS9d2WrW4cAifMrD2PT",
  "key1": "3eouNhuSBEfs3jkZXuBLYjhb1rg2FP5CbUXioXMwzzUDSHse6y56PEKqmv5o8ffjwZV6wo1pgeGHKXd6mDWy9qQK",
  "key2": "GYQpPcgaqBMaH3oqbEYyZpiWHZGRqxhmqV8LFYCQf7JQpZossurcdD879eDX6Hd558cpbBnbUBzgyMbje8Uqfxh",
  "key3": "2w1yPVr6udagz4jrfPGSe1bbZzkAx6WykMk9e7iNa4EBx3woVeN89SCvnCiXFXJtLQnYLoWW9KjYbCqYTpX26bXn",
  "key4": "3DyvoFmoX3YdCMcaCPuf4YjKD2u3CoTifTccssmADmkcXjnVbQgciqgXL1vs1SKRLtV3YgjVBdgT8Zcy4sbJc7t8",
  "key5": "5HzBbngwPK4wnJ2DCW8r5D8wZFQeHknXn8Sjq2T86VGqiCEfGeaubzH3xxatuFNvYoekc33zGHvtfTZUXXxnztdn",
  "key6": "4cvo7LU9kmdJqN8VZZTmgZbNH3ntosUryha5SvaNppmK7CYhdZ1Q6xyZ6TSGseFQbvVYQDJmic84cMnwVVqDjYLJ",
  "key7": "5PBKFvZ9WvRwPdFACYr7dJ35pni1Yzp9ojb1WuJVWmg5k671XqBXSzacj9MGf1cT62i6ELJgNQQhAy1bUSgqtSVm",
  "key8": "34e49qHHQU3mQ4j6LYxtJudm1XA2JB5jfBkhJHxMDXCsVKyu5hqkRtCmtPr5StdtTevvxTbZRo7qoXa6ygG6LaJa",
  "key9": "4bxc1eHG6NUQCK8TuqHC2CQXp92AAXfRdXMrfLEsigTNm24esrBsY9ab1TnfrnxWcon5wc53GqXpy2iuWZJoSRNe",
  "key10": "3FuvfnQFc1fs9rdGpnkmx1tZo83n4To1RZR7Qp7HbgUR9NnNW41ajTz1dmvJU9kvCLJStxxGzpUkMfnYo2HNsB3p",
  "key11": "5T9ZyUCMWEuziuBh1uEeFhjUeyiXYW9UNjhWKYNW2mr85hxAznqGqMXcyp3eGnnxZB2MY7asjPdvjZx5CzVds6mn",
  "key12": "ci8zhj2KwFgFWwBHCrMKf77WiXgkgqxFLxLFtCxsXXe47oy1gh52LMUcyhKCbCYKhp51hqX8SThkAhnybPa4nPf",
  "key13": "5J5ruTJcLCfHksqSGAzyPG6W6daux3u3f4EvYxkDWFmzmp4pokPZziWZR5nHpr1L2DaPsBn4Xyhiac5NGhBY3uop",
  "key14": "5f2JioCsxdKGto8Lnd1X7iwkzreNviuaKqKeaahRefr1jZ651JSKmz1bHeFukY8ymC86UqwQ88mctfdW8zi97pSy",
  "key15": "5GiGju2WjZvWXir2xgbbFtJAwd7EhrizgyNkpBqEKpwq6NGEtqSCNJ8mNFddqsMLzHhWjtpPXWuNuhWqPQtxf3yj",
  "key16": "VWNAaaXXqmKoi87FQsmCCVJGmy3P9B7jhATau5BBPKZvbY5sB7Hv4uYHVLeGdBTfxRhLrxt4o5HRhA6ZzAhRrU2",
  "key17": "3m8qZqtsT2QxsJJ52Tvq9tckR77KH4Tfef27LaV5SBWvNaTUZCj42pJUbSAuWZHFH6Yuo6oipzd3gExeh6RWyUrD",
  "key18": "5rpGmGL6GAVduHXi8mkojYaV3EYwjNAkCTJ6cdzd7XUS8bzB42259EETGaLb31x4AjTNaSqWH1K8eTNZbsR7xcr8",
  "key19": "4HxzPMmk63DBdg4gTF2B1i4zYzBNgJN84kDWCGf85FCvMEnn7pzfHXTAwEZPt1Y4oWyUEnF44emnuf95uwK6kmH5",
  "key20": "3xbvNNDb83rXNFC434nr8eW3PdQP2UXK5WujqW3Y3XqMERZJcPTT7x4oDWdbffWDJ45LTfXvJQ8b451a9u8anqHa",
  "key21": "4RipYaZELWrsPAoapnr2JDqiGbA31F1MHJ7yE1EDG67UXmVqcnXiaxs4oxceEdJGrzXPimzJzS6FPbPZnojpHDzJ",
  "key22": "4zRYBqHxi2XHhEnz6zcP6AgJgJ2VhfdiudE5Uz9pSfSgpJa4xQ2zVumdKxLYCR2k1nVfyYN9aWA8Fh4PJaCswe44",
  "key23": "4YouTPYGDL8Gs6rgSgeyagiBaPCjNXazRAgKpA1YKN5YY8FWtdWCFKN7Tv71DEXv4ZVMiKAjnETFmjV48ssiHnoF",
  "key24": "5EmRq3BMj86dinCt97AAS5kBcri8xngJybrQxik9uhRJ51g1AhNVbC1KxLVmbVEhpkr4i1TDkUmsBkzTC1cyYHSw",
  "key25": "2U7mEhRUWo7gvGibkQhhSzWDpJY1F2VZNp2Ytnn1PACcksQqX76GNJdAK7zjSatZU7LX9osQ6xoFbuNhvtV4DT3H"
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
