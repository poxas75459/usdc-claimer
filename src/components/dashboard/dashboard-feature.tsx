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
    "3DSEaMZcBA4WMhbb7Bg2YEkqSgpjmNZt2qDkW7JLjhvLdWihu88sLS8J9jBZcqjn13S2Nwpqbb1Sqmn6VGnN2kF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Kfn9RWVQbWYBuYubZ3to2i3HwFkcqQQHRK7WXEQFRPQJJZ7Wt7NNeQcoHVmgcou9xphwBBBpvSenXFpwMu6jAG",
  "key1": "5FGTrrdvYJYSsSGMTM5fNFYxUYaKBNYZwjxuDx32LV74gDEeFBPgfoZz88bBGNY5Zo8GN8BotP3uwttnPHKTACuh",
  "key2": "4wTnwrtCzR13zbBkQ7QKTU83XJ2kpuN6iPMiR28LBTxEJmT5Wi6r49Z4jj7CCNywU4sKABufVa6w2ohKekyMmbHb",
  "key3": "4oMSBJh2kxtinVzpwfEn5jAeDS98GoAFhYkTrXDwVukTSWjkS3qQMmuVkqyXRVwEQFphxE2G8TCGBN8KbPLY5Y92",
  "key4": "4NjWetngatbWnqpuYxKuY6YVCVvrHo725emEk1LtZJseiqSF4YUtjDbGtriA622cihoHWg8PJE7xQraJ1h6qkDFW",
  "key5": "5faoVKnXWuph5aoC9v8PK4qcFPHvqR8VLVdEHtRk3y6CPRwKwtHEvqUHfC24Mh7ZcG8Dd5B1iobiYcZdQwR9yiM1",
  "key6": "3PfBjeNyGtC5VrZyJNLFDD9iYUXeYg4Gt15Ae9aXJWurhbwWbNfBs7HBq5yPP7WhdZJpgVzY1cUqoAR4r9azS3fd",
  "key7": "4ym5KEEahq7ssZT5DxyumW7cATQxMPaYkckB9TL2Z2J3ZThVhzVGsSnBiJCHQjLNqpCCbMKHbvvb2eRvjLoZbrVC",
  "key8": "2Ra3xdq9zkZBjxoeWBwqEvSen8Pr52aYMKNLY2ek9W3UyEXprMx24TaCouXhXxysDScAb8xSiCKSFDgwnWsr8jeB",
  "key9": "2mfYPewFnsXdZ73GumeGegkJ5huvhfDqbEVo5s8kNNRoLBhAKKwqtNpMwByZpQmwzVgySY84RHz1hrU3WLdyAPxX",
  "key10": "5htQC45R9KksoqWFxfL8kXeMszDWHCV5qtPrBspRreKMMWgP1pHc6tsBvUGQWbMkzuzm6wg2QB6dePhh3XVuPTdV",
  "key11": "4h1Hm57HZGgrWxtBWXepkJKagWAz6FNScktqV1aoyJfVcjZKvHWfTWWsEBWph2upiKaF5RgENjuq59MhM7UWJwja",
  "key12": "4A6vDrUNCrTzjeNipEzRF2swETdrBks3aedE1KbEZ26d7P1741W4WYgLjCMEXrNmu6xccapP5tgopjbcsqDpniLY",
  "key13": "5Yawg1oZ2DjhhV7Bw39tnAm4ZrR1pjyBvC5T9SfqW6zU8tq2Vk3VNwDN5oNzfCPBEZfUyoDFVebYhuq9nKi3pZhv",
  "key14": "zS9JeWUMJreSKUpZBtHqLstq3vWJ8SLZaZTFRfSrfbwbREN8aSBJx3CFdPHC7sWocRVNqKfrCRjEJ67AtArW5i7",
  "key15": "2S8bRGHEmTftx5qtckX2E9oMFRvRoHgiFNnoAw48qbgK2csdZgWNv3eccXCyba3tVSFNbzwBeBo6tWR3cimSMGpe",
  "key16": "2tVLcmQH4dBX4y3Y69uK9KHoL16yk5eowENL8FoDC9bHxym4jXSEVipgxvgevzxXMAJ2cRk3vNY3ggXPJCAjWSNP",
  "key17": "38EUqcckbLFe9AXTFjjAke9XwMirf2FMQJhY3aFyPuTi6iw2MAQCDqJjSYZDvRtY6MwtQkggEfz8JQPswEt6AKKs",
  "key18": "5usYJuTyB6EAHMK4tByAXS8bJvJBQ6hDewvBx2SA1bChPYtgHdqx1d5hb2Y52sgN3BhKwNmFGJTzrcUhwrjySLgU",
  "key19": "39Yor3EkT6PEigYTa7s9Xyg8eChEwgpZb9AyC4kpZVehWjRXNZ4edfuwkPhg5kdhKSu8BSgrZSr6hqFhd1scT8nX",
  "key20": "We7rHYAZZfehxGSM4F3zkzrodxC8FBkqs2GwCocawzLfotr8BwWUgkfUzUm1gS5zxUg91AAVbJf5EHa3tAtyKhw",
  "key21": "5vS48E3H8KTtiUWD24GubwL6dWSfWfZt2SBW5mrP3ZNEZRzXADqaM75Rmtgq2HLqjNu9aQDoqXsXhyf6p8P2oGnx",
  "key22": "33LVKRURh5gn5bcGhLwWN9HmvRYPSi73PQ1kqF3FWiWBwMzeYopkXV3umEKPzC6Xk29v4q4D1JZb7D2ETvsnTnij",
  "key23": "6BV4R6AQPqSy7dEkzaEd85ZPHgW2csZHnNJQsSskjG22j9ziPVCH68BBTe8j6h57hx5Htb5Z1EuBkvnhk8TXK2r",
  "key24": "4JtAChZrQjSmUQqZuYSC2ZHw8yS7av1ADkQyiaLrqHLL3JahnX6tRRDropkkRgChDZewxAPtppq17c91R4apg3eq",
  "key25": "2Fmu5hwzdp99VLuWY9f6GaMBkgn7PWxyzn7HHxcrvQV3DEcpAzJAM7CaYKdSNvhJByvTcngEjqBdYYT96Do3BqAB",
  "key26": "4qrEVupmGTf5MQyVzeuxfYaEUzFnERpf19KwxW7GxTCMr68RfaFZUyHfLBgCAFA9TFJa3K2kHFk7v5awoSgE5kU6",
  "key27": "4nsgdx1F2a2KfnHt7Uh1UDwKyooFhiQsk1i8VCDNZ9KEqSLmEWNCdjhsDgoyhKMWq46fN3MgB3Hym2KPCe3xKiKA",
  "key28": "qMPVkHr3AYsniwmRLTguZmGpD8oeFHoMKYiz8P1XyxoLqnKumwV8LSUFs3cPAfmhR2xFYAxQYuNnJi5Tg2f9LKv",
  "key29": "3NuJ9eanoNLH26azHg4rrvajJLKcLtEBoy9i15xCewS3yqRzunFr42RzMimBL26KTJHNCPEKB2scGqJasry3WfLv"
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
