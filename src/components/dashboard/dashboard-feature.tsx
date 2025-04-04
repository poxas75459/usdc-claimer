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
    "345zZUWXesYPwYgsrN7whFX6D1w2UtLKDqHZ38jXViHXH85a6553nLkU8QeVdSTaJPato7GMxPRJ8vYccupgW8qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KvBqhCAtdeoPfRmHhNy6S1wZTsw6GjiiaoDhsrYcTpq8jfc13amtP4YELKfWyE32sHSpyV4Hyym2jB9KuH7KKiy",
  "key1": "5HRoeQ5YnLuWgPdtKp5xLYH4TDNiidm4LzmohSpodUGTPkTvxkNd4MYCgoWHbkQmHzEVeFTXALuex4BLMsTBH8c9",
  "key2": "5wTjPdjxsCrMSrgG5Y9L934RVHqFBxDMmwJ71xFNaJEQeYFrtb5TWd3MDmXY9LvUFf1xt3SXjai9Ncnff4L7i21R",
  "key3": "3CXM9hSiiFjFrigSKswZJ8CySUvf47ZKf7Q29x1GK9uw32JDG12PX9RgzeZSo4yPdiHfk1Dx9VRjJv8GGjFFtmp6",
  "key4": "2G8Dpj9y8v9xfJ1Hqvp3xST3PBAP4MGQyQYjBEsqMvqzHRhcxH34AyNG7bgHsJLqTnFskhhd6vj7LTQ2pXzSYa7f",
  "key5": "39HN4XwQMkBDLKKCqdRK8YxvKPStTwg1kLJtmVFtcENL124QfrHxFcLe4yg8Lt6UEEnjsx4Mi9f45J6C2yq5RUC9",
  "key6": "63EGZkHuXr2SHxUH65cCSwqyNsmkxAxd67CpH6PddEfDoEsBJeR5aThTSerhbCSknmP4rJuH9aTSEwW1aS2dvpa5",
  "key7": "5Q4LRrAWMqMBdqkEWwKZwiAJXeR7LYUnXQ7t7ozooN5fNwXEdFDyrCCd1aYZZ7Rg7ea2LH5bmhSU9GtQ3AJgTmUz",
  "key8": "63KL3WWwzmzV77WZ36UaoCXM4gAhFGoTycva9fn2rhmejLqS7j3B4CMR3BTFqdQ9BbdZqUnY1YCSsgUZpWkqTjnJ",
  "key9": "2wtjiMGsjYyaR3z2pCsvqxkvHfARWymNYaAM8Y4zFRzcEiGdXiKP6P7aM5NfTjjXxqFuHwFJSfF1PCtEmBPv95jJ",
  "key10": "fjkESPuJunLMbv4vbLpuLHiEg1xis764rNL2YfoN5JJN7xK47942GCUf3yxxgoJWWRdaDwpjVqMQzLxbW3yD2MN",
  "key11": "3HHZYVfranzthL87yuqQdbqcqgW352eVTaWFYCW9UqETGCySzEQB28caf7TzLjXrct9HcttHYrEx7AGWUcw7v6DP",
  "key12": "PV5kDPoSM2Qo4SxUCRex66cQA8mPeaztbaoR1v8EhD8h6RPYKxWvZkhVL5s4rka2GyBiBQNJ9YWJ3VSGMCsbTKY",
  "key13": "5TSUnixu2BbF8L4jkEXZbbDbSEzVfnTCXhgm4taRZ9RH38aLWy3zxUUeL7og2Z7Yhoxb93f5BgWJpxqT937xz5yc",
  "key14": "592vQdAdhf6avkFAkGxLNxSxovaHSN7H375cj9ugoNdwNJ8LedzaPsDQBQRYtwx68chNDuTiXX17Nqui9hMuaAHP",
  "key15": "2W5ymbhRabanUM1auavDjj8JYAm2D1L27hH5UaiEYE1hnFwbykXi11Vu15xa4ZooZhVDyULXn1A1ZbRHHVKgZH3Y",
  "key16": "224RuiPf6xbs9JSSfSW2GkHe2ZRQEtCbUYXQAzXkjhyXUrE2W62igCHp2nPJjdBVb5JCR5DgTdS61BxgaXN37DBY",
  "key17": "MvwuZrfApkvFqQoLitiNgoa3R2bBCq1QRSyv178CKrPVZp8raEmwM7ab94hyvvLveJdPYVsZ8iyqjp4iLeXikYR",
  "key18": "5UeeDihCpXZ6hmPRrg62vWaFEPKo2oRAsTfEu8Ze6DxgPpocQ67ucwVXQmXHHYr3y4c8PaV9aYpHxTrP5hjU3UtD",
  "key19": "56s4skRBgAhjtUMkAki7PMQwjmsbsDTKzz3UZ8M66hXa4pQdTPmBV936SyhrutaKcPtAn1ofjJY8aRpr55Eic5iq",
  "key20": "443c2WJjWm28ZjRx2Ez5ap4yALunCCwDCatUBycUsKDUHWpFZEpyssp7ZaXQqSsYhWzKEDqEAYAmHAr1geKEJwoN",
  "key21": "3fES62GbZC2UTpDSBscrmaivDnShYNezDptpB68YrRdpExB7aQEmgXS6CJRVAP4MMfGoc3czekYmEyatRB6bhCxj",
  "key22": "5N7Ufif72AaSKkX6ByThFvNCdKSSWBg4SvNc4k17cREkv5ESPaabx9CeaSFBASNdVDCnx2p3dnLeVYDm7AwteJjz",
  "key23": "RaUwYfbS5WtW6TREwbxn9Cmt5xuWZhhQP3LSuecwMZcfYHHqaSyxKzFWhE4mrj4vt4b9wfcauyjxtwGoisrN9iV",
  "key24": "2jUsbktsHtymTAuSaJGyVNvSe6P2xtr5Hnb2gaAkBBcBC4hK3XXJt5abyM9vYfubGPJQ37d29TB4kzWk2Ft6H3EB",
  "key25": "4unS6oujspgrGwzTPA9dzrk5YG8BPfm8dZJUr9Kd2cEudQ3Qk6or6AREbCtRSx7FjYfr4RCZYmUHLwtFPLo3h47K",
  "key26": "56cDXDPbLq5PbFtr1eJ766dpto9i65XSURPE2hPkncb2JgP4HXHVVUjKxRecRbn6kFfUSKeYCaQSo3zRWdbK9j4B",
  "key27": "2Kjbs5WpebSfB7WVS5tinRzkNYdZfWBZYddFo4P8KmEmccF5VboYxHrLDSYWSmsTXzL2P31kW2BUBpdUhH9DqT3g"
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
