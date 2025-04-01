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
    "4xo1m1Pu7FJWeeSQXWEjcj2QqJUoQezx1bUjdNMXydpdTSLUnH8A7W1hHbiKsfeJfox7Uh8vvueXU43BcxvrHLEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XhcRHjkuYhaSf1Pad8uPemRbZeX6dCVJsRhaTfKnCV3yvjWvzQsdWk65Gz62S6ZE5ncQX6Rkw9ZjzMs4qgJRSP2",
  "key1": "4qQsUjSxbUoAkva6Fa9yQ7tXcnBXGSkJtQapzfU5cMLbYvCv9w85tJUGySQLf4PHU4967yaBEQip6JPV3L61sbes",
  "key2": "2qAu4F4vxfsRvWLWKC9pvL5zkZzdDYdsyYfGDWdNdXnvjvJwmpCfnfbbyuDdR4DYGWa91WPkAKxCA5VRAWNV55Wk",
  "key3": "3cmzDDJNeQqUc4Gama3x7BLZTpP2VAjFoXes9MVFHCFXWs7xs2eijmiAKfFA3qEQJKq5XBcX3oYM8Vg8XZtdZx7H",
  "key4": "2Q63MEtV1vSULnx3frFwKZq5zPRHd4gzDZVC4wnm6HABBiB7ThwYYRfkJhyd6mYDg16RzF15UsUZm2fuDNAA9pBQ",
  "key5": "26QNWt8B1en1vcokoVFJSyZvTZfZS8FjRUeS8r4zdS7wn4w2aQRpsRuEzv9XjWapkNbpfGJNP28wPQugF5nrMDvx",
  "key6": "2BAqvBN5ohfmJPyNFp9asxcGeU4H1Dsra7mQjKFsiGNERAqQ3WbEVLNXsquwbohcjFBfPEMEJzDLe4s623LMmKYe",
  "key7": "3ipQ8tSo22mDdgSzYCwUGdVoTWUgxFzFy2ngG5V8h6ru7T6e2jUEHobsu1Mf51Ws7LyvkY4ZEynsVdKVht3TEFmT",
  "key8": "3ZM9LX4ozgnr7ZcRiKqg3XZBEFt2H3iAtDsU9aQj5hX7bcWevc8Xgdbfu4FfPEoEte61cbM7hBsUgWnQ8by2mDbA",
  "key9": "zAuU6S1svVziC1VUeBNmT8PTNQLWkWnWxoexAFpzUfsTzujmtMWsqFmZAqYZeXvQt5fkbJ6aLLZPQZDQSpWubWB",
  "key10": "4ZAkFM7ZV3v8mfbkBj1xWizyT8qKuKAppmXvrtrd7ZrX9yWhF1xVYktmyohfEk6iR33YjmAQ3awGNr4bRJSF93d6",
  "key11": "2sur4vT8qmnnfN2LRccE7PrzrrMdoG4gdozDcbR7agHJyyC2F7BSbpcDGktRE4wN7s7KDVcDXTKKNLY2TpGmMKRB",
  "key12": "4KGn8wepDF24vKXv7stQNk3cEt4CKspmrEgCpocsjQdbPdLfAwcnXgeEiEBbZvW2QZLYYJYt1VM7wzTz3i3VFyhx",
  "key13": "3dPzmbxVNp3BLWfKtr2B6sFf5X9NWc85WLDo1h8hfg7LYaME821GSgzU9nsxsXHxwMyMecoU3HVq5EZYUzZvkRyy",
  "key14": "5kuNhCoJv4fQAuBcHiGo9cbM76if7V3pRKL834cZFqr6fWd6ZGzYA9imXYJDmBXsvWdWYM9XK2pZfjCSPC2SeFMj",
  "key15": "3Esbn98WbjEEZocmPpfBeUHr4jTDwdEWgoXFzr6Bq8YEoYNxTuRM1XC5amhsBQGCKjn97TPKXb5wWRdhVDPyKVsX",
  "key16": "4kTCuHaD2yrCzPsuktGKnGHnGC5x9rL35quj1Jpj3iDoRU9mpRtp6WZi6yuNSbtCseAfzoBtWKEFeLbeAKfnEyzb",
  "key17": "65TRfh83E7f9yJKWCBQ9FZs4npMjLfAgufCQqKVhxCJAWCNnyXUENJz6KU3HixdtjgnpmyeK4DiMKqsWLrTrepSq",
  "key18": "5u4TYoXgTTukt4E4W9irGJNw8v4iAhjyj2GuJon7Un2zqXU3zk4RVwAAopPVkFqWDqCDwaDoscDEEWEqWhVyeAqz",
  "key19": "4XymLCd2mXECKDPQYsiRLMB1xqKhH1tN7qZcqZ2iVeo5z3d2XBVF7PL2zzBTtqARRh8VRRAYb1kU4WPuVvqguLQW",
  "key20": "59zTxsXdPmwGsQmD3Ns7PU6VsiaJvqT6sGm29kmNuPjkuJfSFfWWNDktyZoEtkWdP3F2kavbxiJAbAQz7Bykn25H",
  "key21": "3ZoNQgxPdFewhyC27b9UoanVDZN26hQ9GsKoj8YsjGirheHnxhz1tAWco8FAeEEymmydmS3SwBRx17t7z44nENix",
  "key22": "3uxDtyFMrDZqxRAXsbpNtHVDwQR7oa9u76TgheHZebe6LFBm1rE5x4xG2sbMgZuR2hUeqc427pbpvKf8tH5VuTGk",
  "key23": "3GCgGtzKbeHjf1DJFwxdh5GjXADFFVLoPvg3gqnn6iqNtNJfNWFk7C57y7oUpj4mQct3CZWX2Df1eVmFwiCxp7y3",
  "key24": "56AcP9f3dVE3G5AJ9mQ5ELXYAXF9YUjFeZ46T9LGauHbLD7etUZs9CNmjjYLznCuJE9Avk99eQs57MWPWpy5sEUr"
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
