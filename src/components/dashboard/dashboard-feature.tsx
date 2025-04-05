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
    "2iAc1tcQhVmu6Z9rAV2nPhxjKK89wT3oBMzsrktJdaSzvb7fauUKR1t9hp2RpvyRdFRNQsDVBXmKXKtYTKDLghER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wEsZ7Goyxk9G7Y1AwENTqxQZnZtkKyksQjkPBeiQTXky41zQaBEZXi8vRR4XzNVnSqx8swFoZqY8TYZ5uWVfzch",
  "key1": "39adMozDVHGTugh7Aa4WTjfK3pPtXYkg1jjSJfg75Hhwm7NKzcDKgmLoFuSdw55y24p67yQTDmUVBR3uSYcG4BgL",
  "key2": "2mCZuezKmk5rnPs8Uh8y4hdzvK4jcEdiTRuwzYXYZofq1KPWVcGNHUHbutPdHWGz3VjrZsn5m1y7uyLeWPDEL8mG",
  "key3": "4jn6jrhhYCZi3DR7YSwLLhgsG3BnAs8qPfGRyHiopoSeckG2mYxaXHTqGdaS5jhdXHijs5hWFPYY7TRXt6BszDKr",
  "key4": "5fa7gLLSsgyhwxzym5Hi27QxtQQxDJNbtVZeMwhL9gdux8xpryzRLN1MyaZFhYxM8dCJ8G5upa7cdeKRacJXx2BD",
  "key5": "4jGJzTPmCtaxFJ2A9bpK1WiftT9oTAH1CJUrkzwkmzNJJnCqK9b72Wp9tNyHQsrEeNmRVNiDSQ9XRW4JRJkEvohn",
  "key6": "44UVfqFGAixkeuucgbjKM1u9WXEXoQ8HMNyXPFPKMtHuabwA6AZcW5tkhuaL8qQeJQto4npW5tQpDypPnkvQnmtU",
  "key7": "4ZQ8UhFDZBUEGXwYEiGfwwQ9ctz4XZLp6qRWhAiLxgPMjCw5b4xn8w9iUKbAX4PLP4bQTMQRSiDNpepB9RvWjCyF",
  "key8": "4f7NwhTZynweNpTBRx9AGsLVEqygwG6Uy2XuhwEhHqudFbqcc1KabAKcwhV6zHAgb9LbPD5U4y7XfS1VotPcDRrF",
  "key9": "2GzQ8MzQtDXLqoQ7CUmpegfDvbJVGU6uGsSXV1MGXwVY4rZHi7SR6ZUQwUm78fLa1bDxfc3MsPoMx4ejpXUbtcHx",
  "key10": "r7KFKmtSNTUDWYbojkDE7UstsLpRuwe7jujdHR7i4ZWUkDo2yZdRDxkBJB7p9rh3jHbwGrJSuHNAZjFZXJAJKkV",
  "key11": "5prLhfHgz5apV2QmhHyYnKnCxvPz8TU6A82c9PixzEvDuJhvcboviyc4wyS2hPnGKaaZLBFrUwKj8ZeVL1m4Xkqz",
  "key12": "KXasossgKxXNPhuXZKjDFf4uNofxsneXj7nJNjqLMbWeoAwLVh5qoVVnCR8wCxTgqAPgVqyCVLvATz1kdryzmLh",
  "key13": "5s2C794aCZmq7FyF3j33WzxtDKxetqnqzLhm4osxDLfsNiyR7i1FD5a1wkDZ4o8DFHkdgmWrypYGp1mRmTharNZR",
  "key14": "SNPQLLP9TwhkBueJ9EyP8VGyZt5WyYP2Vmq649W87nzAt5AyJKYRr6gCwVk76TY519y2k1NdHyUjGeS6j9WvnnY",
  "key15": "67KxjEN6PgMD4X52BSda3EqamTAh9ccDYzxZBPd2u6y6UfzyNuX5GWX7LFGfba44qXzCrLrjaJrDoSmiU7S8CA9H",
  "key16": "3p6eeHqxugYkYYEWpmYxtnXmbYMRvEwwkzfeifHip3Kqf6sKbyJyKTm6bJzjQi7YFeHwaEyhjZ5iMv6d7Kv7e6ig",
  "key17": "2fePyekK8bF9J4wp297t5Mp2X1UNNE1Fa8GUdES49y7NEmaAUHz6mmw8Qx37g2gSthBGJ8YRiCxtDXLTVhPY9Dp3",
  "key18": "5X9UvRWQ5nckCSd2pgcdKHhnHrpDDCMD8Ew2XeQHvb96dncr6mXMDSFU4iD3qBH82rdeZkTAZgn1FUW9BRgQEFuY",
  "key19": "3HXoiFDBg5CKHVNVVxsd8JQxnd1KFPMKo35qkd43gbCkwgc48Qy4pHSTSEKa6snZGoip3WFGk3sxYaVmJiJeWgUS",
  "key20": "2dDvXaX1WgpZEqVkr7rt6e1pr2PZ8oKDs93SvNMg39xNdyYCZCdAgeBBRdtPxedwkZh1Qau43UwU5FG7fjBco82U",
  "key21": "4DVUWxJEj9SEtp3nAfZH4nfbZvXbvQ8oLQdTauRodCpUe3ZQYSL9waYfuBj9nDT1eCv5365zPsAjdfRQb7Hk51rv",
  "key22": "2RZPuveZJdmXuVMZjRZBqa9KYacJU9LkLG7Krue2ZiEr6hDiqMYt4Jrc96krXkbS8BJ27DgjJE7wUijx4pzywbHo",
  "key23": "5QMBLcmqLPJy9KrDnKAy86SeCjr9rah6H46ZDeqcKdJ61GF7vzieDAB7j2vnFgbC2sfAdXQxZxkkzeZZEzHhBHGB",
  "key24": "5BdYTja1xV6bzZdwUrQjr7yBBdkSppaBLyxzwmVH2PyvwToJ9b4rNyZb8oVDVF97gzU21t1gF3uym21PP5rM1aaA",
  "key25": "SScAeQwapcvVYCcrcCBPhaBxoCVaD7vicStTWVrLXvu1umrNMRrc8rMLfe8dY2x67AGy5dVPJL5B6NrSajYU4Hc",
  "key26": "2vnUJjFFhgdbyPc8ivYhC1p4jdZX74EPZ9S6ndNSV8nKg7uBsLrijKoGebDHioiDSJZMUmWuCYFZoE2QMZZEeqPq"
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
