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
    "46ed758foG7QX3teRUXz3fP4GUXkakxiwPVDu98gtbCYNjFEpaxtJn76sRPA13UyhNxzyDQWNSMpxVt1nx9qu4Yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5omtKRVookGr7QoFrNmhMHch4Ber8PEjXzjyZZ2Mkp71zkXxca2fJyuzEZNrg8Y5UEbab2N5MwnLPjvLX4toj2CW",
  "key1": "3eg5o1WL7jVxB6QoKEdCVHnBYKtxaNtiD5xCCSLcpBXFGzMaC2AeSVUMeA7WnZTX9WN37BdJPyEyARqusG9G1KdV",
  "key2": "584XRa7mtnuh8zCUhBmQNDFsKfgYmmNf3pHbzvTpBiSY3hmXkMYtyQS1TdVvSSYtMryB6qdjJo3hJdVruBjQ4Ppq",
  "key3": "2sYFXP2ZPJxs2nTNWXZSm8CP9kHoyizzsAfGKzYZdKtKv6hG4GTwHhemyj2H72dwn5LnPniG2w9hpQu8f8P7ZhXy",
  "key4": "peHFyHteb5NB73oeuweKABG9yPqRgBF4APibwBYhCRqQPJkQq8QXWTSUwLzWmHJ5wtuWoFwNT9T1DL8QNYELN3N",
  "key5": "2XxjkkcsPise4o1k4kXgQMZbFwdYBNPzrqcV37VenKujZCEamkwKUFuP1BXU7s7yrRgC3u98a21Skyj5bjxBmBJg",
  "key6": "5aYXZf9FtQaTSzKnTe9ngpYijJKor8HAQ5JtLS3eapRa1bAYdawViCiaY4r561kf6mB4xGAK35E968FKB55RTjWK",
  "key7": "2138dp4JjRzrGxL7JJuU5JjwboYH13DWc9an2vQtujxjfjrST5gWsZBpNMANqGbMCNhgm4m7u2wXWDUR1xSG9A9q",
  "key8": "4MS4StTybEc7zBhCrBCWD5o9MLucRDmgfBYDNV3xAaDxDW2sf7t83w4wQWBALFAFscfWaAXbA2vv2MHVo6LCCUpT",
  "key9": "4LCmCF3ywnn2N4mKpN7obXfp5vfZMCHWxwrmkNpGYtVjhAR7utDaVod1EqRaczUcv2E7VCXdeXfC5DbFJbRHQnLx",
  "key10": "4ervktDyYWR4kXTYsk7U2jfDjSyB6MbGfvA3SPt8NY4tG5ibeqVATTyZKqpEHJ7kBahbowyj99NmbWER47fL2dd3",
  "key11": "4dfZFsaZh7SQzswiG8RgF7qrUNK6fh42QCHD8KsVRM6cGxo5iWteAy3FGWdnG4k1droiL5NhG9taZYHbGpz1cANK",
  "key12": "4EhgKT8jHgNQoHk32kByatq2VNXDKK9FT3CjLmcA9DyGWRLoE7tabWRTRujXGucZRunukycSVWVUPamwq44XB57Q",
  "key13": "n4jbptbJZRvy6wvkj1HqJMqbV9cWuDShHSf2jjK7yHf5GGYy2jVdenQcUrxkse34EmbhXK6AwBAKXXpoLJxf1sT",
  "key14": "4Mq2gq72TMDmEnQiRrsVwQsHiHcKcr5n4PjMi8uDs6hChN3Zkok1owkTga4mWtgHk5ycWxEzJ5TkAXm1Jpai1Rtm",
  "key15": "36kg4N7LVEaKr8TkKbkFqyCAtEL3ZYLnoL4WVYJbFRMYB1wBNSPidG4Ntc8sjEeFMyKtMybRNteobHpudxFCiVwu",
  "key16": "AiQy2k4w4uwCzeeYfGHDWkie7f1dbdCH8AcarcCd74JcWAefbYXbY9qj86wvRLrpJdj44CMPsbbQfWZjE2BqKa7",
  "key17": "5GJAJq36jx3yTRMGF6UQ6c1fqbGEzR9pgoHdVmqMbWS2PutXz6ZGwve6bpxMCXScFBH4MayDcn9NN68GxwczfYCu",
  "key18": "4vTW2Gwi82dc1dZZNo5agGCwAi3SmGz3qN5wJucyUFFtb5m8hsjJkj4evtK9X22QSRj4KpHjy6GK1WgmT34XRJyL",
  "key19": "2KP6c3HisKrBsskQoSXdgFN5Wcx6bdWPDQdLpDxCUZMkEgZGZ9D1T7fs4A6CW9cYM8JGGh9zyFof7PLfd4NvGYNj",
  "key20": "3BaogAHqoGbzqhtgFqPDt4DqVtFoEGU32KmpgMRgFNFJ7tZmSoXjNkw37ntXsze6Nwb2uCSQhN6pKmkgCsk6CUg4",
  "key21": "4Jphk6RL8Pukmud8kRXPL5SBBnkGd1BaGAXj5C4DAVqjJghk8pUDbM6n3uyLKAwZzGBYHGYFHUBADfyXcpXhpJZ",
  "key22": "2ogHgyxRDorkv7HbbWYjWtYN6vYwdvXzLgyADjrKJxEDmdRLvt1MSxH8gcVrXpU431asATM8K4DqCp2cecWnHZw1",
  "key23": "7tTHM9RKZENz1QiFLHPwfZ8CVHvWWJGrkfibveNQqGFAc31Wg5drGyBS5Q1GD9oruqeSmcLXTbZPFifrNgJYsJn",
  "key24": "5mMJwNqV9XnCwuCneUZahPQRpripVDdtMkkDac6RwgYt6jkAdA9LBse3t3UCHgzU7AL4vR8r36z3654iwWz2uPfz",
  "key25": "5xSm8NokSsNqFJmcCik8UJcn6qW9JfcpfBRPWiL1Dw5CN78Vthw4amXA18FFHhU39uAxXShGGf98b2LiBbJp7y1S",
  "key26": "2hWyNkHwjW6t4FsfswLR7GDWxp2DuiWBKiL5JzHnYZ29kPXxdqDzgsifybfh1rHrAZN4wq1BCTrnWffVt5AHUvcC",
  "key27": "4ujLo73SEbPQfUirXWZJYpMnuaeiLbj9GaQney7kt8w8mCFgebpdmwPbEDyiFcfN2Ltz2cAgLeZsLZz3UrpH6AFx",
  "key28": "fCzT81h89wEjjgUuD59SM3iniAPXMmTzSMbrFyPcCNoQg4Dqo6zAebVj2MPHFjgWyUjChbRhkZgyuefMn9deKBL",
  "key29": "5yYxv9XY47S7RGTBXCZvPyVirR3PSkW5txx9arP6ir6XQm2YyvsQWENsTigSesx8HKT3gTnyrvWmB2UAi7yzVQUk",
  "key30": "64pLHiLAd6JbBTF5ZB1iucdkJoZHfS4nUDMxGQ3HJHNGukRZcvjg3xM8xbpxBPm9Ec7d1MHmQ58umQLFrxEMbeyX",
  "key31": "8idV7y7jj3MiKdhcSgNobrLxk8EL6cm5JUbt17eLkZrPqEoTCFyEfpWsVwmhekFgiJGyKSMAxRv2Jm8GP6Kmpvh",
  "key32": "51TPnjKn7jnfiA89XQq3j1NXBQfkVxXRuWx44q9g5hiDFZkscdbUMBzsUgdtREWSmiCgo1uEQGGpAjgUBbhVBNNC"
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
