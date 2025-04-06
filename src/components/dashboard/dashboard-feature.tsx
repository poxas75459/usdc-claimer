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
    "27fMBFG8bzywBdKU7jC2wtBmipGxiJ8RSG8uHxfmEWQZar5wJquVJcuCc6YW8x2jQjYoDXGR4LUwBaqxwiWD7VXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xjqAXCQ2EoxdC86qV4Yh5KGQfLKep2z9xydeuDRT8Hj6fK2bRLqpuXzZ6MTU6haVmEVxwctKL13Cdky4W3bvkT5",
  "key1": "2H1w9EYaPPp5tqEf8WgzNc2aZiherENrSNG3zp9KVN81bBFog5bk9nuBzBtJsKhBVYob2hv7T3d7izHUSsBet2HG",
  "key2": "3WpxMTu6ipwzzXP7dCzak6pNQV1UxY7qKH2EnQjd16StZTqfgq1f3yue34HQh5Ynkt7DUQCMoUEWGTQEQNkkDZDK",
  "key3": "592kgwf3pnnzXJQ7kU8d5jYKae5XWsLHoCirBz93vAHXCVsbRTGM78EuReeoEQhy2vWa1pkKr3KqC8ErtQ9vUCM2",
  "key4": "3ErV3hdJEqW9bBhdX2PhRTF1actK8M5EwAzy5BFJT8mAvgyamYUG7F8Y56TGo2aL6CEmmGqyjj5HVycAADZvoGPr",
  "key5": "G79LbYTriPi64qh5mSG9Y8pRNmQRZFtBAr6oMgwbipb4zPubDyVZVz4UDTMDkSydjJBZR868t1L9a3jXo5DTQxB",
  "key6": "2yGRzS77Aa7NahT2Mvdj9evaqs7zHS1YaBj7Hj2fdtTCJMxWHBw678TSgW37rVjotYUH13VNKEusMVuJK3PhQ7Kq",
  "key7": "5xGpt3RE3KNsW62kxgtcERWwPKo8dATJxPwWLYcaaqRQA6btGMMUb5pq1NYQDwvY1EhTcnvby88sxEb83Wgs6R5s",
  "key8": "4cSB2wZemdsWYxWV5DJpWzDdvAihzpwH9z1SjrW86vvJXLxcDByEAstjy1YjwxoGTpy4aRzpXm5oUkZ1y7T4onTN",
  "key9": "4N7T3CACSpaXj1kNsBUyVRa4YZPYqgDSU16HQyKKmwoTpJPEr1M8w5kkTTijDzpQ3EtLmZGHXf8zMWczWammqs2z",
  "key10": "3ChHYq9KPKamfNpmXcccpYFGJA1aDkn1uyga8Bz4sd5rwyiAD5nJrvbcdAXq22BvW7jzx793eWz6rz4gFVrnySZS",
  "key11": "4htQZXec2YK9zDmJ66o1ygT6s8zhayYoyHapQkTxmoVEknbPaHXy3UC5UPFJVjsVQHHv5RjQiHepLzupgLvpR3Nk",
  "key12": "5y8FxwtX4rcmbJmR78SE9pUptXzrPS7oP5AkwuW6yQk1QWvbDWiqc7qVaqMFqV51UcE1UYK29zwS6QUpYRUtAgeP",
  "key13": "iefEpCu25GCxscQvZkJC3voBo9vhdMfG54MLeqJuH1iTZsTeiovqT6gZiqpmZed845Ye1TomtjDijuf3Cn22hJz",
  "key14": "5DphEqea6mgPqeGxgSQiV9n54Gcfjyr2nBy8HVJpGrvuv9dZ4LASL9vyAY6BKkKwyuxF5cBR6QeDNPvdvtEowiEG",
  "key15": "36pseB4U2EC3Y6gREpKGWQJZBC7h2t9ueCuRm6ESCkgXzLZ8MckBKC2TeAKGNisZJQw2jYW98yRVEfmMnw328rZu",
  "key16": "3UAMUPLX1XkWWjnLQRkZBrKX5t465n9wzzZyYxH6ebke7ccxwFG1VWNpoyM8wQUHdKVbPMKiseuA1s9TheJHnNF3",
  "key17": "22jJWn8chaCoVTUqEPm2f6JLqUwzHQEDb1VLC9hJo9tRFSDjSpbZK87bWG7Lu9a9tvtSiKVfcKG3i7YvXyXZcuN9",
  "key18": "yw4Yg9TjrwMyvYLFqTrAQps8t8dHKajVgtNQrSVPM94MtMFEsBCSMJdkVm2mskYuGSmjaxzaAr8x3pTXniUYTqU",
  "key19": "4adKsS6dgENTNZRG5w4iDAFKAWq8jKfsLADxacwySkEErD94s4NsuGzxYLYeNLyyxuaHNEQM1jbb8ej2EqveWPeg",
  "key20": "5pm76d9NhtGCwa9gzxGpVdkNHBAtbZjX5y738ZUgHWEqzyP4dcArC83KjUjASYieuvSKqJF3G6TeNQYdUf2P7SP1",
  "key21": "zqGcsivVQgNY2QEUNngjEgsd7ctVJBSCicbbNCNdHDUznXT3uwwfaWdbwrV4G9Gc1Fc8wh1BGDXhHVhLAkqag8C",
  "key22": "2Yy7H3nkhvUpqwJRBKRiUe5wKMFooVezC9V2ocyE7rmj43cvYUVM2XfCQfC9gG4NBmg2kBArLV4VY3oFdZ6NiP2o",
  "key23": "4VyRAjGHQC6VKHiLc7zj1bkEBbJUcYaYSSUYaVsupb2YCKz8gTUZ1Kb7ZALmvckvbdSAE5HjyBDuUVwUMQnyduCp",
  "key24": "4EcmwxfGGXz1nK4PTLBbkS8qgp1eEpSCrKvzv2XohvJm5UvTExd83gGbjDF8B8zTZHZCRAszEQMda6xcTbM5DYNu",
  "key25": "3qYwg7DGa9n5YdU83WwSVvyEEutwzhULDcNT3mGzoBfNthhNsaGoSJHk4dqrR9kqBwKwcn6EJ6FZzj2szorNkjUC",
  "key26": "4cTJQN4HzyrWYaE4ByMgK2XPwemLyHZLBG6UTFPGQFWxbyHD2TTXDXbpWigcaSiDjwCp6o1csZKP3wam6qcdTZry",
  "key27": "3HHtqGBuNHmftC3T1MhKePMzy5a1i6p4GqXeG4UqxJ8xbN55CArTPwngS1NjxHnhcHmbE89d2eawBQTmobFRMb7A",
  "key28": "zzc3YFaGxWHkzzxzeJp3iyzXsB8J46YaANx9EXtiSJoLQaXds3GmoDHWz9c5o93MWXuc4dPub2DR7qWdMjczXyR",
  "key29": "2jChZdbrJcARRgHcb8sRDdRa21rTZSMSEbMgyQCTck96KnngnhH93FVXCLxixQTCuYWHRT7QkUGn9dL4W8psaQqU",
  "key30": "4xyyqgMJpo1YWJorYsWzrp3ZxG98VSh7ztcsswZzsaoe57MuUHDB67zfejstt9QzHrti26WWcXkNcTFV48x4oPwF",
  "key31": "5rK4TRHfiAFYhPiALULtdsJNK5b6AzNfcdpHgft1MVpcF1ikmSmzHqa5j1FSSiAsVE8CUURjnuZi3wntZhWu3HXQ",
  "key32": "3a4EUwZVQ94sYyR7ELC651kWaSkupGTbBQ7UCbRXWPiMA17erYUPp3y1APykkuyRft2rGJRuWjfu5tnKawBgL5DA",
  "key33": "3EdfRa2j3ZnjkWbkccx2kg2RTo3ecgdfX5zWUA5c5iwEgJuJXoad2Q9SWZiXiCmPgAya5WJyPgPjLfKuw1oLq93j",
  "key34": "eRmN6pCLPcu1m3oEG6NGaNtmSchV5DWApzeGu8BUpbPhKwwiXYqZEVifXxPEQvJvm4tVtAC1CRWbT3fwX8bZcAQ",
  "key35": "3BsMxgnGDFzn4h72kyMcCGvA1ysk2MKnc53tjUbDTqWhvhKgW3aaHr8HVg9ojxPjCA5g4BD1EoxsZw4kjb7GoEF4",
  "key36": "3w8dyeH7hyhA7vHwcobFABqdEuvJTYZ7yb9YLEyeZnUYLekz6nj3NoddaEvGswJY3xK1dMX8YgtFzuBVFZSFbQ2y",
  "key37": "24LMCqixGzEFJnag7S1Mz8vXAyJAUvqL6ug6SAZN8sTK5G1yC2PyKqZdB6jSkUAhiUYF2Dh7tLXXfQ3A86ybcppb",
  "key38": "4pbCjKGJyN8hNUuPZVho5aK5bd8eRtzATLHoKavQn6MAgss7mVCTFhEs6MPyGFrGeg2EsT2adoGrY4jnt9QkZFmT",
  "key39": "4Ky2FZ8YrnPoaahM6ysgWGdbkJU7U7CxX9nQRvdVY8zuekrWEVkjUiqV9iexE4dqiNhYb2BpoyEy49MjQaDB3eSg",
  "key40": "2qzfpkZbqTDbTL5c5ZFEm1wcLN8rFpJDorDzsxzTByW1PoJFEzd7nxJ2gKntdEzp3psPRvo9dXmG6hTxkvePbznW",
  "key41": "4vif9Ku1AnVdgyaMSf9JhVBauiEGa58k278U92WRKSeGx5kaKwnfVfsYJ2SKhEjdwiuLG3Qs6BvCRr5CBccQEKGT",
  "key42": "3a76bokX81cabnNTTWh9HSen94mcsgxE1J84SfsGLWXAaPw33H7pnn23br43Ktu5mCv7eEZCyUQXc11iGc3coBu4",
  "key43": "4G6mC2oaZVwtWB4PNhQ7ozwHbfFzt56tQ5W42cTMC698YapqqDsXsdLtgDBV2ixzgVKmXq81u8bqX24SF34Y1q4B"
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
