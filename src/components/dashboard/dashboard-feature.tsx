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
    "3XjsbJuYhccrVFzuTp18S3casr962KJKCbXe6f3SwrzwE6QuYQ6QQ8jWWiScZABiVpW6nCaXdkGnD9vcHH7rEq1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DmnnEtk4uhC5KSNQCfCiBujNRkidE6VKbS3GtbEda83E8frfgdrxFhKReCB2S7v45kMTjuqUHca74yPE2redn67",
  "key1": "4UgLBFUFHfiAdy4pJwN8fib4UqELpHJ8GwvSaS9GsNaDqXxeKnZFH7cE69tkhAvt67w9nYgyFcPYWupMP6iYAstf",
  "key2": "26DCob6NdXBXfa5iZ4tFdZT4TVcaNfpVqheHfVdvoKrP2eAGt3h5dnSXZispQpVit4qXJ5x71HmXcLdEYPH1KX1z",
  "key3": "24M2cd6ifpfTrpHQJZdjf13smwnMEYqkU1SjBP3s29nJNQGKrUvDQb2MaZ4uAtGtJSzBg4eFYKnSdcXBphqDMqmL",
  "key4": "5SdjM1PtsWNPppVUsrw4RriTm7jBJtqMwfqLxpaRQ8nfdvj8bwCwqedDVoitei75qqU3jc8oeogL6VKVqTkpDo62",
  "key5": "5zAw7XKPzEx6xnJH4fGz6gdXEKsw8YET75p1WVTFkB5gRRJRkbbuykj3L3a51pSkNPEYEWqkrCMHiPkgKW1MVCgd",
  "key6": "56Nu3UmJGucetyTVKxATH8JnYm4dqYRvzHZgRVPmyh1ReqyhBrevvjYC1bT7XHhZpHLfKWcySjNBd3Yt3r5BjRUQ",
  "key7": "2QKn5YwkidEdnMVvY9KW68tXvPwT4k6nMbx3ZYhBZGhP3TDM9d5V9KE5pNRHuWkgerLeFYGCmbw8E45V6yyFVjFS",
  "key8": "g7GhsjMxbLNmvi4KtsdeC9m9vneSpj3zXhYuKnr3ZQz4VuENCR87DxFjiX3HMoXwp8fzToGn2fkJ1HiCpFYY11i",
  "key9": "TzbaziHyk4euExYXcbCkazXtW28ksXD5aWkGweMY71kzChdsYxyPrLUYNAVgEJBPbXroWZJzkSUuhxgMzYzxorV",
  "key10": "4ZhqU3XzGzT3pRVUUkVkEqHEEhjz2nf4x3T99ovgZX2B3yj76emJ8KcFh4RLJuwaorUFNEg4JNWW7wZVaTEwvv12",
  "key11": "3vuXGJUd8hTU9eZ7WcSURbjRJXSBmbPyq5ZHQhwoAFMzJBV1wJ1UJ8yxbvmZTuR5HUGxi7SPnpPvtCY7i3sMxGGY",
  "key12": "4GiqhXz5KNsCUKPfbvXY4spTfSwv8KbRgcNeeFsPKK3mGVB5APBSjXixN3mnRz5dhzHowKvxtrZuDdw64CUXwjA8",
  "key13": "5kCb336gNoiWEvuzUxQcDrkXGrnAtfuTgk2QQdnya7QQrtGWx5yj8jx75FLfm6xYbaNCMEZbn7FoCdE4HXW7bYMa",
  "key14": "w1e53MCfFEQ1ZXJrAWPnnrd1oZrMgN4kjGhEGcuepSJFky7eRDMMUYp9feFw8SnnBKpaW6JPjCkkAo6ETtnPb9V",
  "key15": "crGwFKUCfCwts7XfB7GMZbZ5nyUUMhxdCoAL4xyV9RLPFjhaPqmLWUfmwqaX3A2HYdLsFANtRAN9tD3w1WdGYXr",
  "key16": "62vRTFkMvBXnEPUUeC9AktSeHUWzQgSSeiyY5AX3Woy8zgBGQ1eHaBmzeXmjub1jUsdxoJLZK7GjdB7EgM4MVR71",
  "key17": "abK3HsDrQYjtDpdfHb1rGv54HuGJKu9cuTgg37FvjgR289rzGrWBubSBTkp58VsgiWabWAaSCkyh4nsags8EB6M",
  "key18": "TBomBFVsZar1iHh2EoSTYtqbmf6ekj8aTVjnUk5XDjE5ve5VZikp9LYFu61LQ1TDuBf7TkvQg5YxqmPMMQ4z9Wg",
  "key19": "4VnWLmzLk5QpKyTsUpmXR8kqxkdJXzw32KAjVJWnyZKjS3tQMDytq28nsEuWgf7SsLimG7XEb6FSuGwRutkBuig7",
  "key20": "2DZUv3mApmaAXrMm3zWEaUi1ujVqq23HYXT4xEi1KquAfNhYvdpB9svS3hAo5xFUNDVnvs183gwkb4uBmp71rV6w",
  "key21": "3GFpxK56Uo7Q3z1Pnh2Y6NFjMmWKiCobZWB6UYmKg17tUqtCjy9CGPLJVccSsWjMG27S9GfNtX22L3bHRZZvv1UJ",
  "key22": "5mFKWQFLgLDNBikkXXu3MFryHhwKmEubDPeDWntj4bvqte1YMEoFkCWPxcmSqcY6ri3rADyrnf8xnELy5sAp9dQG",
  "key23": "5mQCGirfYqTQvPo2RP4ej3o3yeHW3Fae3h7ypGcLFS5cR9DNFJ4qZGjoXbAsezRDZbPsT7hHYM8rcQazdRXZioof",
  "key24": "3yTtZJnBg4ni3Zq1syYvyHV7dxqik3AqPrXzjzpuDDgKH4D6BJepqFWcMNmYGnCKXE5V79xVm3LyYmU33ZbUqCfZ",
  "key25": "3SKtn4d7TTpkiGT6XTN9FKtgo4aPr54zZg6WDTZkhFdvn7qZ8s8nTfB95cMHnmRDGx8HT5Pe9iq8LeAAojVDnZZB",
  "key26": "3x3yWKFUUvZtXvKTTXQ1LY2XPXHmPdtRc1KZRQgUM6WgGNmfhGawiNbP1BvRjgLRrAMY7axUFFcn3UTAXm72ufbR"
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
