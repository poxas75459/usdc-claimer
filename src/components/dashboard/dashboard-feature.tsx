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
    "2En2HoQsF3bVwPJLzcng7AbuyihVjrH4cdPJyWF4ARVCg7zQzyR3v2neHDpGjmzWGrKLhzK3PRpBAAUtb7WGZHgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WKbJz8vAbCrXQg3aGZEJLKPjHmv2Re55N7PnyrsiMERVGqsXLyE8R7jhkbAwwu5k8kL6FqYmQdCEnQRkNHTWRWa",
  "key1": "5iZMc5GPbghzVA8gPZoLMNPyfRXWRsS35is2Z53bGXuvZ7PbpVEb6akCicrizSAPCXUVd9RCcN2FjxFq88HABs4N",
  "key2": "4g1HdDA5HbyechD66zgYbtAdRvtckJgNsfWc1kh1Rf28fbBQ9qPRBQVLpoFFkuCNu53ggG1ekPwFW9nf9491GADm",
  "key3": "ytwe8mYwFoX7JLisao9hEb6dAAKkfdHTwEdYqyR7W88t2jVGxtjPApHtSgUosjm7EV3w68v8JrHd7jKMP8ceUvc",
  "key4": "eSxxxmuBuVjGp1eB4sdougYdTvy55mzUUsoRoLW6oTQBW439bUgMEt6LUP7iiUEj4VB5cR9h2YEk8k948fLG5Tv",
  "key5": "U8opaX3JACEHeu7nhkSoq555pZbDkWif9h6tQ44kVhcwZUyFadcxiWagyW6vRCgZ9vo5YS75kQS8MtjwDyMoQZ2",
  "key6": "4C6ifMVRydwe9z89Mm6re9R2D6D1nkdhTEymUzEkQCnFYJuePjCfjKMWL1jgmF3muK83gKDvWRDiipJAND3s5DLK",
  "key7": "5CHZUAEB3Mj8ASwkLHmmFNy2szXnSkxYgN8mRmNgn16riKwvZHTgdmp4xAD7qT4QcAj9NK1BLQvhWzU8tQernY4B",
  "key8": "37n4DyNPF1aDDYLmadEu6Nd7XSE2JNotJBqfbzGKWZ182xofNvTsb7Fe2XiY2oG9TJUs9fXQjfXZNsiQKizixN53",
  "key9": "2moLhpjLooc1EwhjjyUiaZLD54Zuntydr6esP8ngQdyzFFiCrrDrEMNsidkK8MdCdJUZnpRHABuZgPwEXVUNsqps",
  "key10": "VaUWRwCm4g7t2rC6ZndFZoLse77HqD7CzPVUZ9V4WWeGS9rCQu2eupH2RByvc8VfzHhRMpmEw1HSp3NjGxj25z8",
  "key11": "4cGUWeeyxzjhCDC8FfB6qrWH8krTsFoA6GnoPWWzknPcx3m5ecrZhF6xkSMWpVY2LM3sLfZ3uzTtrdf3AfNUvM92",
  "key12": "bgDdZXGn4CkonFxxEQBcS1uR38aeoHDuGksjZbAvzB6csGgomtiSAzU3Ph7ZTtCrhxxuXm8gSWf65BJAmF5dY3h",
  "key13": "2JBHvqwTMAManEvGV17BjfYxFD3APPopV3jDrCEeyoDrkGzZA1LXYqNHyKfWp1UCqQ98xxHSDubXc5joafZanMDS",
  "key14": "5XbggCMpYVs54Aja4mCnedHaa6dWEjTkfAn9kSDxCm5YkZiqWUpEVi1pwcVKwNBoYmjTGe7x5pSFLQkAKHdUxrwe",
  "key15": "46VtqDN7smehGFhrHPxbHYgRzrzTLUFuVxrN5xKTG6fTFYVVKisHgw7LRanfc2nvyTySJsjfsut6Kg7pjcYXSfj4",
  "key16": "5fHfdnRt95h87bWEYzCNX9S8dm2GwpAgbWW1DLt5i4ks71y9UkHmsmN3AHzWViwj78sAyVUF4cDHjvA4TbLXJ9Pr",
  "key17": "45V6Jpb22g3rjZF4g9ehpNxe7hSinGigEbA5pka43NrTKJmoUujm9AFxZ9qx8DWfD6PiQLDcZ3TtnAiuEzhWYEtJ",
  "key18": "64ADjdVeMioDNJaXAss2j9C3eyeLCQcUQR7XBCPWy5sWHZd7fjMGHqytUBQbr9bY1iHMrYtkzZGPuGGUZBmt4SJp",
  "key19": "2rAJBGxGEUYftXFr34SFhouKuC6UbtAawnjYUMv2ocqzngMh9JWhX32o54K7p4RUExcZqyANQJ69ZDpxsJtCGiUS",
  "key20": "52gg39Qea7hKeriLR94NGk6tzg21dpbGs5jaEoaeUw7BDTqTotUVZ6GZhGEXAUm5E8E9gNtCYqnpRs13vvAfr2dG",
  "key21": "5uYZcjDJKfkyrmBU7tf1oypjXAfE958UhoLPn4zWGjfqQYNHss3eqLugz17YYDzXKAWrLhb9yBYsbVSdxK9KGHxz",
  "key22": "28Lq4Zwunjf9o697jJuTMy5JwKNNio4BDBJgpmhJEAwhMH8ucy8crpGgJ5G9wL63gXp4FUnZtKg6ikYZ9EKQcThH",
  "key23": "XD7D8MCK5yTpd6ThmyoqPutRhJorvBHqBHWT6kx9jJuFmHoAVPNMkFB3PMcJMgoF5e395rR2CTFQBcSb29dRXoC",
  "key24": "5MCToF7eV9xzRjvRLdCw1jJ2yBa6Ey1gSwsG19HvtbW6C8tGxyNM8LFG3LDqPRp731aTfjPJCAB3LzbrEPVgBfU3",
  "key25": "yMQ7x7BjhJz7WHBbsALLnrRmveRzxfpEA6H5oSMqTVkgViZpcmPzMdpZGMrSraqr4FBSxUKZNtFuXSq3FcAi73V",
  "key26": "5wxUqPpkX57YRTLQPWoeVuJjFezMpk6SavAoeGm9xNVRwZNR3pJ1pHQaaqBieKTbQQkUD6sVBrWDEQUGEbhrf9K1",
  "key27": "2WGHNzGDKwZ5TFEBdfe6VHRd4KHg2XrByXbeC3Lkq1wjNhr23QT4xyQwz2ZNm8gkR29k9BpzmgydgGdPjqNqghFD",
  "key28": "2GRVKY3SdQXs9BoDmgWBNefuoboYGmJ2wBuFJAwfm4FjEYMqW9AVFAaqcs6BFC81nEijhtyqibrxUCWVbN5HGG1V",
  "key29": "4pmu6L7jRnsT69daFZJZZWnucVzF247NagCheFSaEPrLYU9ak3YaMsmneSezbKxQsFQmz9ENJucXxeBM1EWtXMwS",
  "key30": "56AEa9n1HyAKdgvfjVasVQmNh8w2TdNXETvQ5yewiEdovyGx6jAZQJbpmqPv2Zp38bchBtDQr7gVQgDUmHXX2Gi2",
  "key31": "4ze3zrizmrc45ogU2vvWu617JBMG9BXEMvKdTjdZDVB4nDMaUQLaT3r5fYt2u16WychuQaHp4av5XWwXvBHb98WF",
  "key32": "sRY5Fb5H457bW4CfX3NwvdxxxiBFVQUT62aW5xPCr167jYE4ffVNw2mFiAxEPMk2BzJtsoGAuZ1Ci7yFnjM8eSE"
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
