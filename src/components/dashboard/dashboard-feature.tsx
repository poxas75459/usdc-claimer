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
    "5osEtW8v5aNKyfE8zP6WfVRtnoHyN61YLUAzE6u5vAwE6qQqEuYWw4rt3G54beMAM8CXid4wRBDcfF62qKcg3GiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46VviH5qxY6tjxaiXtjb6QcVgY5N6G4DkFhSMgBZ3Un1RZYzhueK5fLUmpjNq8CPcBF4C3M66bmd4SypMzV8LfNt",
  "key1": "hmugxfZmVBNEEL8pmXBJnuB1ZcMVimQLksGEk99wBHcc4x1FidRdz6G4oSmuaMJByzZrDTMRZuStkWxgyvHJiR2",
  "key2": "4YP8431Q1uWUNKnMJ5noAUcUeVsucYotPac7LCkjYYt91ZNHmNGH62czgecUQdyt991hD4nav1qGWx99nDXA5dYT",
  "key3": "NyCAuBUbVN8neK65LgVuJW6K12gXC3jMkVtWc1r8JfmkDp2JZxgQQM78ezSxEPpBPQ3g5SYEipDgutHmSLJ8x3B",
  "key4": "2Ud7VY9Bfg2aVVFe4Jpr3DzeR8wWsQsgAQxxRKU2pxHw8uUR3TkekPAeyh2Ttr7arH6LfBrj5RLiAHANx1Fdi7hH",
  "key5": "LSXD6N2DpN1suvv3nRGZUEfffnsuoMPP2MeK6Y5tYqqUYEc1aBeYrqa2mLJ3AJiLkQDeesziA6LxF1uTXMjxiRo",
  "key6": "3SKzEDtm1PhdiV5ix1KJi63FRfAa7Nm2XnteXeBU2txKQHMCtttH8sc77EgMkyerGKSJ2utxvnghDozHnWB8ovCR",
  "key7": "4e4Mze1hshvB2sWz8MwWYfqfPcwfso4heSToEbZM25aJ4MyhffQ87wV3nyvkSTQhetRAR4JCqkcmLo7qhkRXkAHq",
  "key8": "3w3nmZDSmY6H4yD6tusvQ1FxyDAyigeSRZBaPTu5xUSxpcQhj5iRDCp2Sr9WX5p5dz9c9HMmeoBgt7jWGWm1RLgo",
  "key9": "2o6wwQnwk1ejMaGoa4a6WHFwguymscUrzN4dmnMiJRyQLV7jidGXR4Fk9YeuSTDtBS3nMqmAKRThgqrLr1fzx7Dv",
  "key10": "5j99n8eupK3f35w1U91LC2o48gcsP67ZZ1NbBxEkc9wVWUrBUqiC8Tjr2TGFVF3Vzm4vKjyyqWxvD3zHoqJYLY8a",
  "key11": "vxuB7tZSNafvdTmAax1NHuBewMaBa62zDs1KYD7XRqJL9XJX7ww6xL8ezFxbKzKj4bxhWJwSyzx9i8Jr47H5JxV",
  "key12": "5GXNuMCouNRMvXEUVoU92NuqgKoi2FfXvjB7xiSCD1WR9fwXfm4Mv4ET6AF9fnFnagQQrbw5hcpWrjKBSecVBq2Z",
  "key13": "2aWRcSWVSH1xdTXYjfuKNz7TznKG1NbkmzAFYEjrGebksTRbZU4oaQW3wCVnsK5bLmNRfWVdPoMZEzqeHfCcQXKB",
  "key14": "4fxaNa1rBfFikW3Bj8qx3G7sbVSU2xzTbxxUihB2Xd3vkFkkofGDmM9eHdybLQE2rV9iykTUaYqU9His2UUWxh3o",
  "key15": "L8SUPkhz6dnXN9FDEUz7HmUK8g3GBtHnqRX4WwsTpTaAWTXEVQiYs3atNyHo1nXC9sCk2KrPJVXGZMHwdun8Kvx",
  "key16": "5JNTjVY71w8F6RvUgkSJztafq6GS4pBKS8rDB15yyo6M12eKigbYcEPHfcp9zB6G7kpgD5DeMhHBKb8MGc4RVafo",
  "key17": "39gt4u779yh4krmXUTecRcXwhubhjQqpkifcE1EWwEu7b6hYq7QuV26gDBikt2eJU25duUmJS37sFEsBdD9T95hU",
  "key18": "46canJPnuek7CpswqeVUHpH6RVfCVtLea2ezRexM6kFzYc6dewDqWGXz8wwsqNVJaJ4ahKzf3jhFP64FryQaASKC",
  "key19": "5nJAPuqz6a97g5WxCWC2VpEkmgwwxBfNqqeN7Yf8VWLe7dFR22y2LGrfJ3WvFJPVNiup45TNUcrrbv3kxE4xWsFx",
  "key20": "4XEnex6WSaKUsc5SmkvPEizxghLB3tsa7ScZ1LS2g14dWdG963Mk8rqs3Pk1c3KsJqqtvGGiw9LPkAuUojJSVxeK",
  "key21": "2wBj4JyTDsFhDKui9zhXcALCcMFKmix2rj3L6fun9DL2CHMLyna6VHDgL5ojWEuoQfM9XuDMSjEWpBXcSA6z73td",
  "key22": "47RnKfb1AdyJAyB5hmzJMLMrCLFfaSCowFVuMWrNw5z68muKvSHTzixvmdMBVDD997ddNiqDmCc4GaJnycWNo9G4",
  "key23": "4fs6rUDtdEjb8hCQ5LkQe9iCtEJRhaT8K6Px6Ga5MTr2evWctQhiFsr18JjwjpjBPPedRVxmMFqW86MNRo6qSr9x",
  "key24": "3iKzqxwoHLQe4w7iUgrep7sDRpMXWWVgPbzLs63ESaqRMXRxuehBK2GPtMHJUALgNBWyeDn9yRHNunFYtatpsoQZ"
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
