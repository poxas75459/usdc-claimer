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
    "2bNCh81ZQVaYKrBWERn3dWBX7jMBePtm8g7pKM6GebKhpXvjnmQfkKXgJ33wahpVARakmWNvLM2ZMrcVrM6ab6pF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AsLVQEUVnYTjEpYtLkKGEB4Vbm3MDf4sVHfeY9mQyZdEKhkRDUYPkxjencb2deYQS6UHo3Vyk6WXrBevSzDPfD3",
  "key1": "3fTRixvvWDntGfdxPVPZEHNe1rkbZQuUkvtFnyACSZP2c24ShS26QECqkx1t7TZJ5umVhdzyEyRHpWY8PbFPbbLU",
  "key2": "4X5d6oYcwASaeki67wwfhf3r9cqYLVpApy19LfjhuDEHrTD16ZLo4wkLxo5PstPRgYtfMqv7y2eTEtKocDW5DCdR",
  "key3": "2GpPbzbojUKwqz1UkpRSUkveQkFKB8v4TxUpxZhopZTPZdFTwZRwKYLyJyP3xS8m5f9r2ZCDkNwsNvH6Zk3Zn6g8",
  "key4": "5x1p1Ww3V5VZzTH4DJwXnM4EG5UhfkpuFdnhZkTghwu3WQPWjke9dhaWrKf5oiFVMHTAybdwhq5PZJ7AQEG8jgBj",
  "key5": "5sQyYJjoRquuamcncqZtSmUbWs914XTWChMDQ9TcRBEuevMALQhEGcaGywB6FDE2sJkYEAJ5wyLvRqiQzUjtg4xu",
  "key6": "4s6b3DcMvd5cawPc6nrD7HWuGJ1ZzXvMnosQSw5V17JeuGqf8NGFWugxiPqwYqUPWorAstsQHqqXeg2iUqfvADBx",
  "key7": "64Kj5kuWzG2nFAm9xQd8iW244nQL4Kdz8TTJ91T2bLdbwtVFXFKJ7tXTsFR1PY3dVDzd37g6rBrfjDwNPGoKgTjS",
  "key8": "CXQQJxTMrjWGtPAd6zDQb34rTj8hms2tDuxi2owoUK6vaiwCqNeWZq33m8knQLqbbQDz9BVkTQE3EJYx3EcPadV",
  "key9": "3bufDykRMZDhZJsJyTdDtv1xWreFtKLCTx9rEE1UPjQoFte3QFFAGWUdcnupSvzvZiN2iF15gqBqVyfDKCwhtskt",
  "key10": "2mkasTHZB321UyDV7rjr5BtU2tzJeDmVJCQ8X3GcznTGyasC65qXHBmt9nVxtSCVCaBGJiCpK56nUiLQUpNSJYDn",
  "key11": "iyRL6ij2iKoXK5RbGCUUC7yme57MXwEPYA48neKTA6Y5incg15iZPsESYgEm6yDBWAiF8wXWChRFFWKxZSDtr3Z",
  "key12": "5ZLbqXHuFoXHoLzrsX97nhS8X7UUSycMd5Z7NdtWWAnK3qgWfjpDFkatMg9ypiRARBr5t1DxxGvehsGpxmcLm189",
  "key13": "4biNvnqgZtvXqzwvi95fj5izAQTzBekx76Ea5hswRH8c8aGydYn9NC8kQvcze5wB9fxNbt8tpgtfQ6ecPyav1Pfm",
  "key14": "4FaX2LnNwcBMTqtXDi7A4Wi5L9Kv6w5WyXYAescowedvQ8R6tQUtSE1ECzwomGDF8ZN9MygcikmqAixfS9jzXw11",
  "key15": "ornqkdsV62iGWX9KBtkXK57HzJjqewbuESPjuxaHViyadgoXK56odfRVnqSmaWWbjsSAZ2ycu6imdpWaKzzzxwk",
  "key16": "4AQKxT1WArwM3xXK7TNhV5nPwVK54ryvNeYiZVAz2emB5g736fgNhFCUZdCHikqgiY2W6tCnov2ZJ8TaxHMEKhUc",
  "key17": "2jyfi5Qsv13FXzWw9HHCEntzgHpbJihv9Z7MznN2WLBpjvwvWpHjjdWqsgVmokByB5ShhRca4r9GH8UsFujf2nD9",
  "key18": "3siXXupgnRcKVoYCtDFPXa8Qq5xVnk5CeJvU5zBfvfH9hX2dzUkR9F7xd8YdH8QRU18V4KUMiBoWPXe28utas9Tr",
  "key19": "E3HLpiPuxADsgv5oqTRbb5jGbW5cipNhRBiAb6GU5s55c1rPFjQKQbLkycp1K67RaLdeDXXtwEeLF5EjYzveUc9",
  "key20": "5wZg6dHWxbfWsspQkSggkYCKkAKvxvuiwZo6KGooKkQrRtghaDRBy5VVAx72uE8eBQd23y33nbCvhrAC7f33agCJ",
  "key21": "3HhBJosqnDvGNX5AFmPfN6cqbjqHHF9jUgVtmX56Nx6Y5yfdX7TBYcBbQ3mDiVyGtrfDKKgWZfRz2VYnaLEvG4wP",
  "key22": "2aHZGeWaB67axXC1y7SuDorzvgos4xAe1RLf4mdbLrZqdGYe7mTdDDKFzq4u3Pb2aUg46Ne3JzpwvGQe4oDyGr1q",
  "key23": "2D9oiWFTZSMW1x45YZxkRusTtw8Z3qfnQ6Ui7eTQdDVh1hfa46EiVd4ePAR9TkoCoxAPgp9KkcqqaQFwiB4RP8yi",
  "key24": "58FTLmu6LMRdcsFTNzu1HyBTGxoRwiRJ17BvEQHNNQ4zPWFGG7cfLkcYJ7ZktCp9arfXeQEgrrPbbqGHb3bxmVyA",
  "key25": "5bHFXURx7BV3vz7b41dbCDhBUqj4q9Hu43dSD8ApWgm2iatdnoAZe6kZmuUD3cMQZYAsZdvMtSCcfDJT9vCcabnF",
  "key26": "5pERFXB4J6s7eyRgonemcjdK2LxisZ4mXJr8fiNaFMvnUSihfAYeZA4gYeRAUgWS9P2y1uV84mUmMzdGzvmpxgr5",
  "key27": "4XrDuymwTGpujAMqdRJ2CM1Fa2cEBTJaVmjQczJzGai6Bkiw4er8szLTKsQCoFEr6MFX4LBABxbyktS1g1TcKny8",
  "key28": "4kNtHfFeHARFKkeqq7LgZeTCr4Zsf26hNovxD2VwA41wVEU7ZLmpHMiqfo7GUUhswivMaR31j6Fh9NcB1ytzFhEH",
  "key29": "5sQfX9MjGTdmKoyowwKibqgdFnobnqJBmjn8Bjhsb4p55JANWJ7rbD4RZrabH1VgXMfftjVAFFeyNnjQqp2j6p8H",
  "key30": "65ZSXGeQ1yQP2QnAiRrdJDDduhj34oEc2LMPqKR8j9wmpTpy5J9yKStMB31o7mGLN3nJyGTa9ZEKDhWR34HXPSB7",
  "key31": "4DHWQv6oJvpdTboY249qXeMsHuLu57gTSMJqoo7ArwjjNy9QhJiS6VZfRhKVpJ7Jzc69MdGSDfhmwJB5CUgN9Hu3",
  "key32": "5PCAZAT9YyiXLKKEpUczyU871PD5No3emBmsp56pjuobUvT9ZfcE9wsreEPNFe2iXRkAzdiVNXHFjRYb4emTMJBc",
  "key33": "2tXcZAEve7svNGMz8kEtWvqti6bSj52FskGkAyqJZJmBVQ38KbQg25kQjJp2CH9uE9mXZ5SWL5j9d5BpLHYuupmy",
  "key34": "DmrQYSWqcjEchWeFPYT9Y6Y6icdEXMEDwyacftn7HhfYpzb87q8ebfCtqvTkk2YR3NgLjXBaeuNnKcrQkWMzVDp",
  "key35": "2aCTS3FzHh1rpEyKw4kfPzMmnVwYVbuxu6E2oF2jAGtdMREgwEzJnyya865EttMew2kiFqNrjRVR9ATXNzfshk6F",
  "key36": "4ZqC9b5tkRAURZ4pXvLP2e3iHddS3XQYfur9g34Wm8Qe5JYTuiPybCoJT6Pk1wZB3d79AUAAheTTDrauMRZEHsNv",
  "key37": "2v3T3R8szTmvzJWo7yACZtof7du7vTzKDgmg2or6aPdM2NLxi3XxnRKs9ionSVUtDnwQdUyyHNVC8EZZZfhk6fw2",
  "key38": "NPZz2PNjBT3GCKxHRKYYahQDTgZJ6qvQi8BBwKjU361aM8GmWZhDvrMbZTPqHFmcqzZto7YcJ2UHY3Dd3WuvwKC",
  "key39": "3B3zQxJVxSoVm3AmN3nCrUa1m7QxxnGAmK9VMqLzPHFW2ohQmhhyRTq1wywVFcfABdEkPKkEsihEudmMh8kFQ34u",
  "key40": "35fVTy9Fj1AG98w4vQTXCKUgD2wqjNy42i3KEiFtYWHU28ekaWx2gyXb4FUcG4ZUNSwQKQV9wyFbZZogqzTdLze7",
  "key41": "66NYfoU3wXA1okmAhff4aTVxiCtLHJuZH76vPdxL7JEHXZnQonwy6Zb1NRTTyqLLCyb9jAt7kBwoCMahsNjxvjcm",
  "key42": "xJTxzSMnRaapUxPWdFwamB44szdJVbETM6pokHdCCWLSbpsfMfh64FpX3uUjVmdKvUYN1Br5F4pjRufXC7ZkqxJ",
  "key43": "4zbeivEpEUbZcaUGpR4FoBZMDBca4K2z6fhb1Z71DS7sdFYnj8vbo363gVPJzDrWy2qCyEc1c8HoyZd7nNrfYBBd"
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
