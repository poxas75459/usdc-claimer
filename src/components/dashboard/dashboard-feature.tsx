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
    "2B9GARhmQGXKWdac2mXQQti4sNNKB4Kr7CsRFwnUbhQcXaD7Zmsucmoc1PTDs88dWiKGCCq1Uue5J6cRTWyt3ePD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LdSebFfQtYxMdntzHdMELzKjRYDgjcweAPxK3Ax3VficqXwfkgfNKywkvZba66Q3XsMCkAFKiYwwxX18rqY8Dfq",
  "key1": "4SS9G86sbbj79DbMzYA5jVYGrAT3oDLao2ReasL7e3pbknT363M6tcC2iCWTgCfv75Mi7JzEqq2rur5keSuVJ68v",
  "key2": "3jF5nBLhhVQAPrA5rD6FhGTEzJNHQNG87NvXR2WtHeRFW8sscQvNyiBHhP5d49r8RHTeEfZqt6f4rYyBjMMRpb6z",
  "key3": "5fAUsrTiXQYVf7WwBX7XbgdT2ZJPiRD2GZcz5YgA99mhdG73ggNtwepwuqG6s8VRGJ5e8FQxbRq1WewVF3MEi1uz",
  "key4": "5XNce6NWTyDjNooqtGDwb9AsxqLuyDfkaGeLRo4HzHFW7W5gtF7GrF1MxvtXnhhZdXnXuDXwhZ5EVTwAj4FoWUd3",
  "key5": "1aAwX8szMZqFgBP5VsAXQc6YiuhGgEsb28ogj2HAqtiQVvZqCc76y16ytmL4uAEUSmtTR4z4No3JJjDzGAXQHoy",
  "key6": "4EDresmFM5a5GZJdGUgWyno5FaJwVQSNrTA2x2ds72HyYBJQfUJrbZXFYmtUEQx6tJbquQdhKv4PXYLY7392RE9N",
  "key7": "5RmUDm6jMMSwRywGTitQTp5nuRQSepNJyCay4kxzW27sxb9hSodiivT1P6mfg58cd2a99FXRQv126CDCwEp5ztkC",
  "key8": "53QYT5Db8v5KSUGecbfkvxRrKy1kXpJDYNMWoz7kSddkLKX8V9QJvRsgTRL77CVosj7iLCWKAeyCpNhqzNmcdwQS",
  "key9": "3hVguZW9uAxd9NZwKKQZK7Qar83eFABgn9NhCnsMqDbSuGXH9iqWAyBApVic9XCBQ9s9Sj3hU2HByRcuKxLqbGcq",
  "key10": "3J58fT8iFSjqM9TLhEWTcZX2XDtbL2nLm5LAnP2fGDWwDoTTUNevZYm4Ai5kQ1nrYKaymquGiAUqnyDbyPLRQQHw",
  "key11": "5HoPwvjhRz8cttB93VhUnRfWAN5SZvPKzad8WcaMNeaBxT1dhQgTfkcdsS4biqxwmUayLVWoHECQNTCB9M6dZVnt",
  "key12": "5K3Fv33etzY8HmKyFkCkpgMewje6YqzzViiqLhgBfGeiYPVhEgssXKAPdwaw1wJ9n9J7bjdpRWLs6pNZ7f6sXyN5",
  "key13": "33BYoW7FkVhQbokGXC5hyoVawnqLZsEjw3395KDxPYu1Soi68t1mDCHbkKy2Ht5anuPr7yKSXfwCdsNZTsGoCTz3",
  "key14": "3kbKrJMixAYYxieoTNVEWfvVNgPa7JfwNkPGucjzyKU1xC23BokPst6eBZ52xtznzYMSs1ME8U984euEEZMomBop",
  "key15": "4dAB6fpgbyhwKvKdbtToTXy929S7qazRkZKTBMjm1WTuEMSwd5ZNBcD38djhWnfMhhGDzv7q7ND3XKGMzA2f9mCK",
  "key16": "5heSGik4oc5MAmZBRpu5SpjcpupZ1AxCBNwDk95VstCMSaRkUtqYRNSQtMQSb1D41JSr6FbmUCPKL6HHPMqMp42Y",
  "key17": "5AFjwXz1sEwATRKg2mELwi4Mp6SkqqbQBDa4FBwNfTkdPvMpShtxjDRLCZYibEojVf8btiyY4GL7fhBX6uma7cPB",
  "key18": "4hWpzaR1jCnzxveFaK8G8bNg1Kqs2Tjop5B1f45NYvVn23w5YqHzBtYUMchKvrzSdavsDyuFmeNy1g3cJAzx7mi",
  "key19": "66ZEP9GqqQ6wMpSkGN8sUerL52mhQxavr4ZT1soTjZ98SXPZXfQDiTZCsWroVGYd4nPkcfjQnrqVuKuFRH6j7pFr",
  "key20": "ZSiE34Tk2XeWwSUyJwCr4RpRYChfAZdxLJLgKa9vFYDZmsubAuqaXv11NwSTeDFmtXxgD3t6B7Qkytcqr4epbe1",
  "key21": "3FpZQgRQu2bkARGp97HQ6Xbig5qAxbdxjDhVbY7xoBkV9QPd6MFSpmCYcbmp79nnqEz94tLMisTAfviHU5GxY1DL",
  "key22": "oGFKmX7CsqYCigCtYJvCta4K13WenEiKAA45E67vcT9q5wYpvXA7eWjqXAQYeYeNPkduHM44uD9ffLw4qmzkqVt",
  "key23": "2pswvQB3Sq94uCLxZTgqyKXbWXEwihjuDFBx1mTH4YiskSm8qFHgCRektJ3wE9VJVgBfQUteuGEr8RX2bqbp5JcX",
  "key24": "3Ur76YcBsQgXGAqH9AU5HPo2AED779yZuZ39yCi3pDyVvn9uGpftj5KZSRWceXMtuyjUmtuJPn3Qkntm6H2zWDHR",
  "key25": "N6Ga37p4Fk3nmhj7jtLwG2fPReEuWZy1nHs6tq9eY1oQLyxJPPrzjBLtnKzCEU22GFJfgng4z6iZJSPsuUSM9VN",
  "key26": "5E7YcJM31RZ5VcEDDLvTcF3jpqMCSnFggNRwUmEApfGsMh9iK6Ec5XBwDAQLEmwz8pdTXhh33S7rQvaeAVqXrfYL",
  "key27": "3KzgFqNPv6rzfsfMZRstbJwF9XbV5YCKaYrssPUpgBckGMzU2PH6Ugt8HLDy1Mhq3KBURZtVJe5bM9Z364wkQ4gM",
  "key28": "5MKqkLHM6cu6k6SUfqKYJzh9CVy7ydMweYL8iv18Vpaqti1jiafEnb76A4buefGEApjkBdBuYSyP1Vw95KaF29r7",
  "key29": "2T67VUjH3GBMPAN19MSRLLbu47BnmE4DGkwJ8CMMceZEsX1dk6yuyrz9VDXdyJTxFyG5DXuA4B2Gxkr9VshHqRAm",
  "key30": "HBFgKfQ7jn2BSJZ4UsNUmq4ZRH1XcvLDahfNzqg6DoJg1Waq8M4P7bVaxZPrg8FSms316SFUxRqiQJRqtLZExdL",
  "key31": "5rhcQoUAzd5FYDieFoC9WkCSGFS1TLjsLUgaVMTKDtPhC4ccz71BX8xHgfSTmv4Wfrwq6Cvum5RZQmrKkfEMzYSz",
  "key32": "2ZhvZFAJMuCP8QhrZfzFcv6LTS335LCifGW4KZuQZVyvpZ8wHxkV1iTSDyhttQiw32r98A1YwxnacSHKz2f5bgZP",
  "key33": "5hmWviUPjhX7SpfqesKrdAzEzdUe9TNi1NNw8Bd9GN2ATejj46h3RzdA2JfbnTYy8QkHUXoGLreZM9f95HnPJdWv",
  "key34": "4wTLg3bE71HJ7vp44YLaWuzSURfsuZgJkYvqqpT246xJ7xySuLdb2esZt3RJPrXJJQfkv3ErnZZm2CkMp5ydbHK6",
  "key35": "5m1Hfp5nHEeBXgsXqqx6EmCkFRNcKHHNg1iunePHEUkari8BrdCEVCknPSmq6AfjLuTxXyG7XFi5onbBSdFrfFLW"
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
