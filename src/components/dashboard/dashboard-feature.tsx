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
    "4SfsUWKBkjLyQFesf7g2qnT8sj4nS7zg5obfCxhzH7exiDuMwKiVS4bQzueRpUaX3g8BEYp2j8q6QUxQjGEQzeVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z8pTYK9MxdPWa1vHBanfGiqxiiFCSRsLrEPN6WpmF5N77bFy6WqUZp1a4G87hb5Hqfd9Zb1WBma2JFjh52bk33o",
  "key1": "rEfWzDsPdw2HpqrQhKV46tp2Fhjs9pyi4tJXnyrkFXuFHTGYTaGKrEvr1V8wpZjNv5NGrnPAzHeS3nXWLUFgLcL",
  "key2": "2Qw8NVXxFf9dNar7XNKUbAs7VEKwRTpYtW3JGVKYPpTeNfe7P67exJuX9xF8rbQMehBzWuBRj6rD1WEfDFT8Ymgy",
  "key3": "3WE2egE1Sfw3mRnhKfZsL9y5QMXvHbFxr9AvccDNTiwxHuJzgtngeFThgsndiDaUZPxDV4JPNeksxxekxdubqAmW",
  "key4": "PkaAV3X3k8yBAkGfWNQk6tcaGzKdjUdekfR3F5ukhbNcvgsgKRGKmF8pKLy7RxqFktpC8WYzjCzFAZZJ8JnMYRo",
  "key5": "mT4e9ibfjvb3HR2wqQ5y4vEpUy26zp3nhnqDn1g13pyFwHrkiTVDW11ZJ6ev21gPHcqtkYJQT3NTNzEYSKsEioS",
  "key6": "3ssg4JHWZnie9Uu1bKW8eKx8dF4SgnoyYo4oZtqRg8AmQN6SZMbMrYMp6CRo3Z4Gv31tnCr6PAcRU1i9LmmxsKEV",
  "key7": "27yX11N3ntXnyLziTtn8etCEHPUb78BJUYRwvfhc1qt4dg6i56oByqhfBnzbHnmXVyUzd3NbvZ3vpaaGcutsL5t7",
  "key8": "66QmhWjGPmQ8e6Yiy4a8ihhMReQGPLkQaU4BajJsxeJufBkakoiPG4By1ncRheMUc4Rneh1WXqXZyfQssvUYwEWt",
  "key9": "cw2pqdhE1YMoMzoF97TqysgKdnavCjsJ2y8EXBQnfi6fRBgFvW5p2jvG79tTXNs2CKgjoRDBZdgTfKw61TVQgum",
  "key10": "51cH9tbeNQGeaJbiroYW89Z7iSpAS3nU5ZqUNJLGSDrYnBm4Tz4mUTTPWAkC5WyZpuvKbYjDsipz9SFkxTZpMuHR",
  "key11": "4911TKKEgheRhg3X94pVfrtr5bPT2Q5zmRsbaDKZR3Ye4tyK59w6ZeJkyKSf6udqV3fusKQe2zEN2KYEDSi8bnzT",
  "key12": "5mWMyoAeWsTFd8YNERpLA13wWNQBGuGumo9nCHQyVPt3wdvERcks38V33doxLr8YnDrb3pqyLj331e8K5FfHcTUP",
  "key13": "3LWk711B4uoEuToCDvGR8QJAQ15XEfZtUS9wZ63C3n5ZVCTPWjz6vmmHrdXKdzhGwFgyNBrgXdRHFnJTQFaYUwWn",
  "key14": "D9bvPmfiGvbmqtNanvPfLxkBmxtgDcPkDdssVNH8xG4hJedezyoNbfJDC7zADGxXEmTz2wDrX7ckHMN4oY4ZDyS",
  "key15": "5KLwLrPGErDb7Jd9rNWgMyqdVAzPsxv9C9TktNddhnwQysjeNJppNvDXhGxY6aPMNWXWPVrYCdiUiT6p9rhRRJPa",
  "key16": "55uUahwPtS6V4PzXf59De4qfb1eoDnsEUi3yo81BJzcwuZ6PepeBNWQi3VyuJfJMzAx91o77J5y3LmZHnKvQ4Fxa",
  "key17": "2rsQjYHELVWJmGDk5PK9zqKNRAakMXjACrwZ3BzZZmEJkouQQWwfgxZEdEfwWJzVRbKepqkShMnXFAMVzPAvpFsB",
  "key18": "LwDu5V4JqFiYQXmQ8DF5kGLADDbTZn9tGxysJtxEvSMonYofJrJrtFz34zH6qfk2XijyydHmqqwDCUyRaYKyaPN",
  "key19": "3Hph9FGwWbe7mbL8PVQVTnt7d7gTUC18yRCR9n32UgSdokeaMuSmNDDUXXDScPomWxWhcfyU7qhpMyx2Gu5Cgk8n",
  "key20": "DYC3cVwduWgHTRTiu6PyceEAdEPUJuUUsgrMtBF8d6Lr1AmHYc9i1UYYmSZLm4nGU2ix4FBFYtemWUVn4r2gUHS",
  "key21": "X8PJNzh4kgxs6kqNt4iCZoaMUXzBucXLu64V2fBYbXfq68iwvduUEK9vsAmZKdQWjA4fmXJYAmHT4ufrnBJW4iT",
  "key22": "4dDbuRdAZ5JYdNuXp5szf9VRtRi3aLdzpMWytiJWF7Jzcpn26hfwWQXbuAFWti89ju3EyJt3C6z3AqJbcn8Wu8uA",
  "key23": "596ykkhd4bt9uD6VhpwMU2kC3L8kv161WqKaYpG2ADwtgF3oprUPRNMZH4gQY35VRdtJNYti96YsSQz8tbnhAJbv",
  "key24": "2JyrtuNqtfsAbmHXZ5PHYSJYgDkKuKCpdVq91pdqWUDmGmvTtrhspFghsXQiZteZzLvRkc3JKLBGoEgYYrPE3Pov",
  "key25": "43zcvASLSip8usx7N9Pq8yfCDEaPB96PyMFbtsA9AaWzCBQNsrdfWy27HEZmmey1Z8svhWhed86GR97bsm84MGqJ",
  "key26": "3Utu47vgsFrtnTebNjKnqo3L78KQYuN9UTP9oFHqgFmxVYdTMLXp3QymW9hNWWmzMTzSG1vtZPmZ4VWCZ6jCZjPz",
  "key27": "56KE8eJsqwnRrNJhFPF5vU2WXY1QVsEx7L4phqi5Q5cp2FmMLxA3bQBExoMz4Xn82mHH6Z9VEB2gV5kgKAYU87vg",
  "key28": "4gn8sXFWcXZr3qE72iBLipc52kNEGwtVp4HUSRRWsEozE8yriEu1H9a6p2EC3hvqbgDGRKx6VdDxgyAXkDTSTXLS",
  "key29": "34xBR1Ba6yTeU74iQadtkYSFnopQPA84Fedf4GBt31ju1HFn1SpuvKx4iFrpU5NUSJ8xdmZbX6F5xSWGfN8dTTVd",
  "key30": "2Ha8nG6UXEq6bmFM7ocdCkezN6WVz4FfFEsCpwZsgvr5nxbs4ZDPPBmDLSWe5GtuV26eGdNLcdTPsUnSqr4zxPwd"
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
