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
    "2tj26KX9qdDCjoZvdMMMuTU3igZ9A3JY59qX4ihQC6Z43n3pH6rPLX3dawFtY42EJx8mmXQifh99wKGPEvSajhiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f4G5c7RU2ktNaVMsSUeSh4bEQFYiLRnEE3U3EWcoQpzYGAZLfB5zjsBZ1tJ4VFLk59Aj5jSPZUHAE3uWEKkQWPt",
  "key1": "etwgxWAkDKWyMtLimBKx1jCRxLJVjfjr32wXvsyNRjx1i8oNM4DxmKrrAVi5zVF4nG5yHEgghg3PquMaZWEzckR",
  "key2": "5AxXn7NCBjjSNMJQt3ygnB7ddYg7rE16TBV3cSVMiWaAKZsQHXEdG58rgCBfBKLMG4fGUCiuTDtMxTgYDmHgFoJ1",
  "key3": "5faNGvKP99YdYiEaRGgwAK89Eo7CyKC2QsyzW8yUGTwtFrS6W28dtFQEr6CGKBwXENBcc6mEcrXMwPAY6CFEjKm9",
  "key4": "3E3LD4ThzJrjsWBvUyvXKfEaYgmddXXTEgoyZoGVrG8vbLRWtPjGfmopZcjWctQkwngxFioMHEHAZMjyQgJq4xy1",
  "key5": "Mnp7CtLH2HjFcBEr3EN9i9jNgvZtXmemkWnKMgX6VDiSeyUpqkzU5ysQXrLNr2xocKZmqZHsEMdQ27xmPv8f6j4",
  "key6": "274UFc2VJx5R5PptazVfy3WkTkkyzG2LkpEjMDJW2mz4DARpfo6VtKuhzzsSTq6mjj6eLtSK3NdJ9aSHDFnPNsR7",
  "key7": "4LwS5PCsZe79KHRFteJi57jWJVVkf6XL6a5fQQFE8qjEieuKK64phJLf5aAsafZWp9nGHe77sWuCk7Br8Yr1uNzh",
  "key8": "PKYUovkLdAec7z35jdSQLaffqrFDG6hHBCYptxAghAgNwB6ebT5j1FMke9bjmZTj64NcKpqtLnHxUd1862TqTAf",
  "key9": "4Bb4xP7XnhDa3naRcZ9xUQGtcyR1mWXDq8N6QDZEyYuyiR2UXDr7U8dWgZrtQqLwMhmVTbSccTwsiYv2oK2KSQQX",
  "key10": "4iLkL2UbkAxRrfuQhZeT4avG7yD94tXfK6QT3f6aaSyncmoDqSRmoKkgWX7CGa4DudooyiMgbm7Hc8kEggQkarrJ",
  "key11": "4k8EdDDLVnuwcXG67UodmjDZTXFRwPynn9T3DzADbibYYnEmm4ciLaMFvcUrjc76hPDyFQyTdoXMWqPYVcU3Ku5N",
  "key12": "4ab2kEYo7F3Zw7KZvtZwgctTZvRryTvJaBZvGksTDjvB6MhM3TywFUpj8X3wkrEtxdBVFVoG7Tf74wvNMm6Nst3F",
  "key13": "3JYntGRRV1teSXx2EVuei7mT2Wdc5GnWUoaktxZYbFhqqJ4WUz2GjeXMcTRczgERZK8dYchuTrUu5S3ZKs1DAfue",
  "key14": "2ThnUUSciMpQfEVJL1apGzM9YnxY3UGmEKCAt5qXCkb1N9ToiY2LNNzSEc2smqXwv6BiyCrKoVuLSuRnvvj1GMg7",
  "key15": "62i1V24wQCsRvK6eU4EX78c17kpUBuGpGhMvnUHnoCnyDvWuainXTofaYWVHMPCwbMqKUF5GJ3du7T5Hw5rxmZwX",
  "key16": "414CPZRStQN2T7BJvv3oqfo2uBgmi6da8XHsnKm3qzS4wwUXJu8iRRgx1vt5zySmNwWyKzDgawKAbZTanxGPjsY7",
  "key17": "4WehXgV9ksVFHbF4oY5rS2xPoTrJyu13nstR5K6RQ97JmJkUoTBZdjsr5TMz8dCHHPk8woaByVVc7LpLoP27aGXS",
  "key18": "2jsAd6DNZpnByUVYShXNb8pJB4THrtNg753VDaCg5X1Wxik54888QVsnnZbs6GqViWqH6CGmFSC6Nz1ES2noiQcq",
  "key19": "353DdDXeRxwzxXkvBM32pdJjSY4VbGHBo19td4QASmQmMdHQTkPXv5U9q9B8oZUGUahzCx7SPh1YYxeDptiaUVTr",
  "key20": "4XFSbFTd96zBpLDDopwrWXwSi9eoVeSb6FtqCM2Zy3qkvhKhyAVWNyqY2s7ZYTtBa2jzydnjEUaQHMhG48cfUdoC",
  "key21": "2ndsKdjC1HERz2uA7UVnB6AkzE6zFJn4fX3C42FKAas9PRzn5CGFNnmoDDVvbqpS7kZbMLngP1Z817hu4fh56dyP",
  "key22": "3coiXuFhscYHNYxYRiZwiyPjwqj6cepETHWHqgVbdZ3Lk8HcD8GLr6fLpwhfDqEcddb8yiSyvLBZS9fGhiKRnnt7",
  "key23": "4XDGnK6uVdLAtui2keQvdXSGd5Es4fDEyD11GL33T3QSzVB8XPKLFGeDLpSGTNguoM7tJDc9uaJtF3DZaBazpKe3",
  "key24": "Hf6rESnXuXWGE1jLdBLjBvSk3QCwyPNoAhs5hEoAdYLDLNZyQQKSZtrjvHuteeNWJU9WfCSKAu9G9Ti9ZzsYtSP"
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
